/**
 * 읽기 검수가 "보고만" 한 사실 지적(must/사실) 처리 — 근거 없는 문장을 지우거나 facts 에 있는 말로만 바꾼다 (2026-10-03)
 *
 *   node scripts/gov/fix-unsupported.mjs <글 키>
 *
 * review-article.mjs 는 사실 문제를 코드가 판단 못 해 보고서(scripts/reports/review-<키>.json)에만 남긴다.
 * 이 도구가 그 중 result 가 '보고만'인 must/사실 항목만 모델에게 주고 {find, replace} 를 받는다.
 *  - 원칙: 지운다 > facts 의 말 그대로 바꾼다. 새 사실·숫자·날짜는 넣지 않는다. 시점이 지난 "예정"은 facts 가 말한 대로(날짜 없이) 고친다.
 *  - 하나씩 적용하고 check-article 을 다시 돌려 오류가 늘면 그 고침만 되돌린다.
 * 결과는 review-<키>.json 의 같은 항목 result 에 '사실 고침: …' 으로 덧쓴다.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { ask, extractJson, newMeter, addUsage, fmtUsage } from '../lib/headless.mjs';
import { checkArticle } from './check-article.mjs';
import { DIR_OF } from './verify-facts.mjs';
import { metaOf } from './target.mjs';

const KEY = process.argv[2];
if (!KEY) { console.error('사용: node scripts/gov/fix-unsupported.mjs <글 키>'); process.exit(2); }
const OUTSIDE = path.join(os.tmpdir(), 'gov-fixsup');
fs.mkdirSync(OUTSIDE, { recursive: true });
const repPath = path.join('scripts', 'reports', `review-${KEY}.json`);
const rep = JSON.parse(fs.readFileSync(repPath, 'utf8'));
const todo = rep.issues.filter((i) => i.severity === 'must' && i.kind === '사실' && i.result === '보고만');
if (!todo.length) { console.log(`[${KEY}] 처리할 사실 지적 없음`); process.exit(0); }

const meta = metaOf(KEY);
const file = meta.file;
const facts = JSON.parse(fs.readFileSync(path.join(DIR_OF(KEY), 'facts.json'), 'utf8')).facts;
const src0 = fs.readFileSync(file, 'utf8');
if (checkArticle(KEY).errors.length) { console.error('❌ 기준선이 이미 실패 — 먼저 check-article 을 통과시킨다'); process.exit(1); }

const prompt = `정부 지원금 안내 글(TypeScript 데이터 파일)에서, 독립 검수자가 "근거 자료(facts)에 없는 내용"이라고 지적한 곳을 고칩니다.

## 글 파일 전체
${src0.slice(0, 60000)}

## 사실(facts) — 글에 쓸 수 있는 내용의 전부
${facts.map((f) => `- ${f.id}${f.must ? '★' : ''} ${f.item}: ${f.value}${f.scope ? ` (범위: ${f.scope})` : ''}`).join('\n')}

## 고칠 지적
${todo.map((t, i) => `${i + 1}. [${t.where}] ${t.problem}`).join('\n')}

## 규칙
- 지적된 문장·구절을 **지우는 것이 첫째 방법**입니다. 지워도 앞뒤 문장이 자연스럽게 이어지게 앞뒤를 맞춥니다.
- 지우기 어려우면 facts 에 있는 말 그대로(숫자·날짜·조건·한정 표현은 facts 에 쓰인 대로)만 써서 바꿉니다. facts 에 없는 이유·원인·효과·비교·시점은 쓰지 않습니다.
- "예정"이던 일이 이미 지난 시점이면 facts 가 말한 표현 그대로 쓰고 날짜를 새로 지어내지 않습니다. 확실치 않으면 그 문장을 지웁니다.
- 새 사실·숫자·날짜를 넣지 않습니다. 소제목·표의 구조·키는 건드리지 않습니다.
- find 는 파일 텍스트에서 **그대로 복사**한 한 덩어리(한 곳에만 맞도록 충분히 길게, 따옴표·이스케이프 포함 원문 그대로). 문장 하나 또는 두어 문장 단위.

## 출력 — JSON 하나만
{"edits":[{"issue":1,"find":"파일에 있는 글자 그대로","replace":"고친 글자(지우면 앞뒤를 맞춘 글자)"}]}
지적 하나에 edits 가 여러 개여도 됩니다. 고칠 수 없으면 그 지적은 빼고 {"edits":[]} 를 돌려주세요.`;

const meter = newMeter();
console.log(`[${KEY}] 사실 지적 ${todo.length}건 처리 호출`);
const r = await ask(prompt, { model: 'claude-opus-5-5', effort: 'high', tools: [], label: `${KEY}:fixsup`, timeoutMs: 20 * 60 * 1000, cwd: OUTSIDE });
addUsage(meter, r.usage, 'fixsup');
const edits = extractJson(r.text).edits || [];

let src = src0, ok = 0, bad = 0;
for (const e of edits) {
  const t = todo[(e.issue || 1) - 1];
  let res;
  const n = e.find ? src.split(e.find).length - 1 : 0;
  if (!e.find || e.replace === undefined || e.replace === e.find) res = '건너뜀';
  else if (n !== 1) res = `못 찾음(${n}곳)`;
  else {
    const next = src.replace(e.find, () => e.replace);
    fs.writeFileSync(file, next);
    const errs = checkArticle(KEY).errors;
    if (errs.length) { fs.writeFileSync(file, src); res = `되돌림: ${errs[0].slice(0, 80)}`; bad++; }
    else { src = next; res = '사실 고침'; ok++; }
  }
  if (t) t.result = `${res}${t.result.startsWith('사실 고침') ? '' : ''}`;
  console.log(`  [${t ? t.where.slice(0, 40) : '?'}] → ${res}`);
}
fs.writeFileSync(file, src);
fs.writeFileSync(repPath, JSON.stringify(rep, null, 2));
console.log(`[${KEY}] 사실 지적 ${todo.length} · 고침 ${ok} · 되돌림/못 고침 ${bad + (edits.length - ok - bad)} · ${fmtUsage(meter)}`);
const fin = checkArticle(KEY).errors;
console.log(fin.length ? `❌ 최종 검사 ${fin.length}건` : '✅ 최종 검사 통과');
process.exit(fin.length ? 1 : 0);
