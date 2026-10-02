/**
 * gov 글 독립 검수 — 코드 검사(check-article)가 못 보는 것: 어색한 문장·문체·흐름·AI 느낌·풀이 없는 용어·떠넘기기 (2026-10-02)
 *
 *   node scripts/gov/review-article.mjs <글 키> [--dry]
 *
 * ① 글 파일 전체와 facts 를 모델에게 주고 지적을 JSON 으로 받는다(도구 없음, 저장소 밖에서 호출).
 * ② 지적마다 {find, replace} 로 글자만 고친다. 하나씩 적용하고 check-article 을 다시 돌려, 오류가 늘면 그 고침만 되돌린다
 *    (숫자·한정 표현이 있는 사실은 못 바꾸게 막는 안전장치 — 문장 결만 다듬는다).
 * ③ 결과는 scripts/reports/review-<키>.json
 * 새 사실·숫자는 넣지 않는다. 사실 오류 지적(must)은 코드가 판단 못 하므로 고치지 않고 보고서에만 남긴다.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { ask, extractJson, newMeter, addUsage, fmtUsage } from '../lib/headless.mjs';
import { checkArticle, readerStrings } from './check-article.mjs';
import { verifyFacts, DIR_OF } from './verify-facts.mjs';
import { metaOf } from './target.mjs';

const KEY = process.argv[2];
const DRY = process.argv.includes('--dry');
if (!KEY) { console.error('사용: node scripts/gov/review-article.mjs <글 키> [--dry]'); process.exit(2); }
const OUTSIDE = path.join(os.tmpdir(), 'gov-review');
fs.mkdirSync(OUTSIDE, { recursive: true });

const meta = metaOf(KEY);
const file = meta.file;
const facts = JSON.parse(fs.readFileSync(path.join(DIR_OF(KEY), 'facts.json'), 'utf8')).facts;
const src0 = fs.readFileSync(file, 'utf8');
const base = checkArticle(KEY).errors;
const baseV = verifyFacts(KEY).errors;
if (base.length || baseV.length) { console.error(`❌ 기준선이 이미 실패 — 먼저 check-article 을 통과시킨다\n${[...base, ...baseV].slice(0, 5).join('\n')}`); process.exit(1); }

const prompt = `당신은 이 글을 처음 읽는 독자이자 꼼꼼한 한국어 편집자입니다. 정부 지원금·세금 안내 글(TypeScript 데이터 파일)을 읽고, **독자가 읽는 문장**의 문제만 지적하세요.

## 글 파일 전체
${src0.slice(0, 60000)}

## 사실(facts) — 숫자·조건의 유일한 근거
${facts.map((f) => `- ${f.id}${f.must ? '★' : ''} ${f.item}: ${f.value}${f.scope ? ` (범위: ${f.scope})` : ''}`).join('\n')}

## 지적할 것
① 어색한 문장 — 번역투, 주어·서술어 어긋남, 뜻이 안 통하는 연결, 지나치게 긴 문장, 문법 오류·오탈자
② 문체·흐름 — 단락이 연결어 없이 뚝뚝 끊기는 곳, 같은 말·같은 문장을 되풀이하는 곳, 메타 서술("이 표는 ~를 정리한 것입니다"처럼 글이 자기를 설명), 시비조("~다고요."), 해요체와 합쇼체가 한 문단에서 뒤섞인 곳
③ AI 느낌 — 같은 틀의 문장 반복("~는 이 선을 넘었는지를 먼저 보셔야 합니다", "~라고 해서 ~는 아닙니다"를 여러 번), 공식 문구 같은 딱딱한 상투구, 문단마다 똑같은 시작
④ 풀이 없는 전문 용어(처음 나올 때 한 구절로 풀어야 함)
⑤ "은행·세무서·기관에 문의하세요"로 떠넘기는 문장
⑥ gov 글에 없거나 facts 와 어긋나는 사실·단정 (이건 고치지 말고 보고만)

## 출력 — JSON 하나만
{"issues":[{"severity":"must|should","kind":"사실|문장|흐름|AI느낌|용어|떠넘기기","where":"위치(소제목·문단)","problem":"문제 한 줄","find":"파일에 있는 글자 그대로(한 곳만 맞도록 충분히 길게, 따옴표·이스케이프 포함 원문 그대로)","replace":"고친 글자"}]}
- find 는 파일 텍스트에서 **그대로 복사**한 한 덩어리여야 한다. 문장 하나 또는 두어 문장 단위로, 고칠 곳만.
- replace 는 **숫자·날짜·금액·조건·한정 표현(필수·불가·예정·~할 수 있음 등)을 바꾸지 않는다.** 새 사실도 넣지 않는다. 말의 결·순서·연결어·군더더기만 다듬는다.
- 사실 문제(⑥)는 severity must, find·replace 는 빈 문자열.
- 고칠 만한 곳이 많아도 가장 거슬리는 것부터 **최대 15개**. 문제가 없으면 {"issues":[]}.`;

const meter = newMeter();
console.log(`[${KEY}] 검수 호출 (지시문 ${(prompt.length / 1000).toFixed(0)}k자)`);
const r = await ask(prompt, { model: 'claude-opus-5-5', effort: 'high', tools: [], label: `${KEY}:review`, timeoutMs: 20 * 60 * 1000, cwd: OUTSIDE });
addUsage(meter, r.usage, 'review');
const issues = (extractJson(r.text).issues || []).slice(0, 15);

let src = src0, applied = 0, reverted = 0, skipped = 0;
const log = [];
for (const it of issues) {
  const rec = { ...it, result: '' };
  if (!it.find || it.replace === undefined || it.replace === it.find) { rec.result = '보고만'; skipped++; log.push(rec); continue; }
  const n = src.split(it.find).length - 1;
  if (n !== 1) { rec.result = `못 찾음(${n}곳)`; skipped++; log.push(rec); continue; }
  if (DRY) { rec.result = '적용 안 함(--dry)'; log.push(rec); continue; }
  const next = src.replace(it.find, () => it.replace);
  fs.writeFileSync(file, next);
  const errs = checkArticle(KEY).errors;
  if (errs.length) { fs.writeFileSync(file, src); rec.result = `되돌림: ${errs[0].slice(0, 80)}`; reverted++; }
  else { src = next; rec.result = '적용'; applied++; }
  log.push(rec);
}
fs.writeFileSync(file, DRY ? src0 : src);
fs.writeFileSync(path.join('scripts', 'reports', `review-${KEY}.json`), JSON.stringify({ key: KEY, applied, reverted, skipped, issues: log }, null, 2));
for (const x of log) console.log(`  [${x.severity}/${x.kind}] ${x.where} — ${x.problem} → ${x.result}`.slice(0, 230));
console.log(`[${KEY}] 지적 ${issues.length} · 적용 ${applied} · 되돌림 ${reverted} · 보고만/못 찾음 ${skipped} · ${fmtUsage(meter)}`);
const fin = checkArticle(KEY).errors;
console.log(fin.length ? `❌ 최종 검사 ${fin.length}건` : '✅ 최종 검사 통과');
process.exit(fin.length ? 1 : 0);
