/**
 * 새 gov 파이프라인 (2026-09-23) — 수집 → 사실 → 작성 → 대조 → 보고서. 판정은 전부 코드가 한다.
 *
 *   node scripts/gov/run.mjs scripts/specs/<x>.md [--from facts|write|check] [--model opus]
 *
 * spec 줄: slug: / cat: / catSlug: / title: / sub: (4줄) / source: (1차 출처 URL) / button: (버튼 목적지 URL)
 *
 *   ① collect.mjs        코드   원문 텍스트·표·이미지 크롭·행동 링크
 *   ② facts              모델   facts.json (인용은 원문 글자 그대로) → 이미지 사실은 따로 한 번 더 읽는다
 *      verify-facts.mjs  코드   인용 ⊂ 원문, 값 숫자 ⊂ 인용, 이미지 두 번 읽기 일치 — 틀리면 글을 쓰지 않는다
 *   ③ write              모델   facts.json 만 보고 data/policies/<slug>.ts
 *   ④ check-article.mjs  코드   글의 모든 숫자 ⊂ facts, 범위어, 필수 사실, 추측어, 버튼 주소
 *   ⑤ scripts/reports/<slug>.md  — 사장님 확인용 (글 ↔ 원문 인용, 이미지 사실 따로 표시)
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { ask, extractJson, newMeter, addUsage, fmtUsage } from '../lib/headless.mjs';
import { DIR_OF, verifyFacts } from './verify-facts.mjs';
import { checkArticle } from './check-article.mjs';

const argv = process.argv.slice(2);
const specFile = argv.find((a) => !a.startsWith('--') && a.endsWith('.md'));
const flag = (k, d) => { const i = argv.indexOf(`--${k}`); return i > 0 ? argv[i + 1] : d; };
const FROM = flag('from', 'collect');
const MODEL = flag('model', 'opus');
const TO = flag('to', 'check');
const STEPS = ['collect', 'facts', 'write', 'check'];
const run = (s) => STEPS.indexOf(s) >= STEPS.indexOf(FROM) && STEPS.indexOf(s) <= STEPS.indexOf(TO);

// ── spec ──
const specRaw = fs.readFileSync(specFile, 'utf8');
const lines = specRaw.split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
const one = (k) => lines.find((l) => l.startsWith(`${k}:`))?.slice(k.length + 1).trim();
const many = (k) => lines.filter((l) => l.startsWith(`${k}:`)).map((l) => l.slice(k.length + 1).trim());
const spec = { slug: one('slug'), cat: one('cat') || '생활', catSlug: one('catSlug') || 'life', title: one('title'), subs: many('sub'), sources: many('source'), buttons: many('button') };
if (!spec.slug || !spec.title || spec.subs.length !== 4 || !spec.sources.length) throw new Error('spec 에 slug·title·sub(정확히 4개)·source 가 필요하다');
const DIR = DIR_OF(spec.slug);
const HUB = path.join('data', 'policies', `${spec.slug}.ts`);
const EXPORT = spec.slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()) + 'Policy';
const specNums = `title: ${spec.title}\n${spec.subs.map((s) => `sub: ${s}`).join('\n')}`;
const meter = newMeter();
const t0 = Date.now();
const log = (s, m) => console.log(`[${((Date.now() - t0) / 60000).toFixed(1)}분] ${s.padEnd(7)} ${m}`);
// 모델 호출은 저장소 밖에서 — 이 저장소의 CLAUDE.md·메모리(옛 4단계 규칙)가 호출마다 약 5,600토큰 딸려 와 지시가 충돌했다.
// 이미지 크롭 폴더만 Read 로 열 수 있게 허용한다 (2026-09-23 실측: 저장소 안 46,477 → 밖 40,851 토큰)
const OUTSIDE = path.join(os.tmpdir(), 'gov-pipeline');
fs.mkdirSync(OUTSIDE, { recursive: true });
const ABS_DIR = path.resolve(DIR);
const call = async (prompt, label, tools = []) => {
  log(label, `모델 호출 (${MODEL}, 지시문 ${(prompt.length / 1000).toFixed(0)}k자)`);
  const r = await ask(prompt, { model: MODEL, tools, label, timeoutMs: 30 * 60 * 1000, cwd: OUTSIDE, addDirs: tools.includes('Read') ? [ABS_DIR] : [] });
  addUsage(meter, r.usage, label);
  return r.text;
};

// ① 수집
if (run('collect')) {
  log('collect', `원문 ${spec.sources.length} + 버튼 ${spec.buttons.length}`);
  execFileSync('node', ['scripts/gov/collect.mjs', spec.slug, ...spec.sources, ...spec.buttons], { stdio: 'inherit' });
}
const sources = JSON.parse(fs.readFileSync(path.join(DIR, 'sources.json'), 'utf8'));
// 1차 출처가 아닌 원문(시민기자·블로그)은 모델에게 넘기지 않는다
const srcBlock = () => sources.filter((s) => !s.error && s.primary !== false).map((s) =>
  `===== ${s.file} (${s.title}) =====\n${fs.readFileSync(path.join(DIR, s.file), 'utf8')}`).join('\n\n');
const imgList = sources.filter((s) => s.primary !== false).flatMap((s) => (s.images || []).map((im) => `${path.join(ABS_DIR, im.file).replace(/\\/g, '/')}  (alt: ${im.alt})`));

// ② 사실
if (run('facts')) {
  const P = `너는 정부 원문에서 사실을 뽑아 JSON 으로만 답한다. 요약·해석·계산으로 새 숫자를 만들지 않는다.

글 주제
- 타이틀: ${spec.title}
${spec.subs.map((s, i) => `- 소제목 ${i + 1}: ${s}`).join('\n')}

원문 (파일마다 ===== 파일명 ===== 으로 시작. 메뉴 글자가 섞여 있으니 본문만 본다)
${srcBlock()}

이미지 (Read 도구로 직접 열어 읽는다 — 텍스트에 없는 정보가 이미지에만 있을 수 있다)
${imgList.join('\n') || '(없음)'}

규칙
1. quote 는 원문에서 글자 그대로 복사한다. 띄어쓰기·기호·숫자 표기(쉼표, ~, ·)까지 그대로. 한 문장 또는 표 한 줄. 줄이지 않는다.
2. value 는 글에 쓸 값. value 에 든 숫자는 전부 quote 안에 있어야 한다. 단위를 바꾸거나 합산하지 않는다.
3. 값이 특정 지역·대상·기간에만 맞으면 scope 에 적고, 글에서 그 값과 같은 문장에 반드시 있어야 할 한정어 하나를 scopeWord 에 적는다 (예: "서울", "청년", "선불"). 전국·전원이면 비운다.
4. 소제목 4개와 FAQ 2개에 답하는 데 필요한 사실만, 30개 이내로 뽑는다(날짜·기한·금액·나이·장소·시간·절차 순서·예외·주의사항).
   글에 안 쓸 사실은 적지 않는다 — 적는 만큼 시간이 든다.
5. must: true 는 독자가 놓치면 돈·시간을 잃는 단서(마감 기한, 안 되는 경우, 미리 해야 할 일)에만, 10개 이내로.
   must 사실에는 key 도 적는다 — quote 안에 그대로 있는 2~8자 핵심어(예: "등록 삭제", "수기 신청"). 글에 이 말이 있는지로 누락을 본다.
6. 이미지에서만 보이는 사실은 src 에 이미지 파일 이름(예: img-6-1.png), quote 에 이미지 속 글자 그대로.
7. 원문끼리 값이 다르면 둘 다 적고 conflict: true 와 어느 원문이 더 최신인지 note 에 적는다.
10. quote 에 계획·예정·협의 중·검토 중·선착순·한정·조기 마감·변동될·변경될·바뀔 수·필수·반드시·불가 가 있으면 판단해서 둘 중 하나를 적는다:
   - keepWord: 글에서 이 사실을 쓸 때 반드시 살릴 말 (quote 안의 말 그대로). 빠지면 뜻이 바뀌는 경우 — 예: "관리할 계획"의 '계획', "선착순".
   - keepWhy: 살리지 않아도 되는 이유 — 예: "1월 공지의 '예정'이고 지금은 시행 중(src-4 신청 페이지)".
   오늘 날짜는 ${new Date().toISOString().slice(0, 10)} 이다.
8. 버튼 목적지로 쓸 URL 은 원문 '행동 링크' 줄에서만 고른다.
9. src 는 파일 이름만 (src-3.txt, img-6-1.png).

출력 — JSON 하나만:
{"facts":[{"id":"f1","item":"항목","value":"값","scope":"","scopeWord":"","quote":"원문 그대로","src":"src-1.txt","must":false,"key":"","keepWord":"","keepWhy":""}],
 "notUsed":[{"item":"뽑지 않은 것","reason":"이유"}]}`;
  const j = extractJson(await call(P, 'facts', ['Read']));
  fs.writeFileSync(path.join(DIR, 'facts.json'), JSON.stringify(j, null, 2));

  // 이미지 사실은 따로 한 번 더 읽는다 — 첫 번째 읽기 결과를 보여 주지 않는다
  const imgFacts = j.facts.filter((f) => /\.png$/i.test(f.src));
  if (imgFacts.length) {
    const byImg = Object.groupBy ? Object.groupBy(imgFacts, (f) => f.src) : imgFacts.reduce((a, f) => ((a[f.src] ||= []).push(f), a), {});
    for (const [img, fs_] of Object.entries(byImg)) {
      const R = `Read 도구로 ${path.join(ABS_DIR, img).replace(/\\/g, '/')} 이미지를 열어라.
아래 항목마다 이미지에 적힌 글자를 그대로 옮겨 적는다. 추측하지 않는다. 안 보이면 "없음".
${fs_.map((f) => `- ${f.id}: ${f.item}`).join('\n')}
출력 JSON 하나만: {"f1":"이미지 글자 그대로", ...}`;
      const r2 = extractJson(await call(R, 'read2', ['Read']));
      for (const f of fs_) f.read2 = r2[f.id] ?? '';
    }
    fs.writeFileSync(path.join(DIR, 'facts.json'), JSON.stringify(j, null, 2));
  }
  let v = verifyFacts(spec.slug);
  if (v.errors.length) {
    log('facts', `사실 검사 ${v.errors.length}건 — 한 번 고친다`);
    // 틀린 사실만 고쳐 받는다 — 전에는 1건을 고치려고 75개 전체를 다시 쓰게 해 1.6분이 들었다
    const wrong = j.facts.filter((x) => v.errors.some((e) => e.startsWith(`${x.id} `)));
    const F = `코드 검사가 틀렸다고 한 사실만 고친다. 나머지 사실은 다시 쓰지 않는다.
quote 는 원문에서 글자 그대로 다시 복사한다. 원문에서 못 찾으면 그 id 를 drop 에 넣는다.
검사 결과:
${v.errors.join('\n')}

원문:
${srcBlock()}

틀린 사실:
${JSON.stringify(wrong, null, 2)}

출력 JSON 하나만: {"fix":[{고친 사실 한 개 전체 — id 그대로}], "drop":["f3"]}`;
    const p = extractJson(await call(F, 'factsfix', ['Read']));
    const drop = new Set(p.drop || []);
    j.facts = j.facts.filter((x) => !drop.has(x.id)).map((x) => {
      const nf = (p.fix || []).find((y) => y.id === x.id);
      return nf ? { ...nf, read2: nf.read2 || x.read2 } : x;
    });
    fs.writeFileSync(path.join(DIR, 'facts.json'), JSON.stringify(j, null, 2));
    v = verifyFacts(spec.slug);
  }
  v.warns.forEach((w) => log('facts', `⚠ ${w}`));
  if (v.errors.length) { v.errors.forEach((e) => log('facts', `❌ ${e}`)); throw new Error('사실 검사 실패 — 글을 쓰지 않고 멈춘다'); }
  log('facts', `✅ 사실 ${v.facts.length}개 검사 통과`);
}

// ③ 작성
const nextId = () => String(Math.max(...fs.readdirSync('data/policies').filter((f) => f.endsWith('.ts'))
  .flatMap((f) => [...fs.readFileSync(path.join('data/policies', f), 'utf8').matchAll(/\bid: '(\d+)'/g)].map((m) => +m[1]))) + 1);
const writeHub = (code) => {
  // 모델이 코드블록 앞뒤에 말을 붙여도 코드블록 안만 쓴다
  const fenced = String(code).match(/```(?:ts|typescript|tsx)?\s*\n([\s\S]*?)```/);
  fs.writeFileSync(HUB, (fenced ? fenced[1] : String(code)).trimEnd() + '\n');
  const mf = 'data/policies/manifest.ts';
  let m = fs.readFileSync(mf, 'utf8');
  if (!m.includes(`'./${spec.slug}'`)) {
    const anchor = (s) => { if (!m.includes(s)) throw new Error(`manifest 기준 줄 없음: ${s}`); return s; };
    m = m.replace(anchor(`import { deliveryMutualInsurancePolicy, deliveryMutualInsuranceSpokes } from './delivery-mutual-insurance';`),
      (s) => `${s}\nimport { ${EXPORT}, ${EXPORT.replace(/Policy$/, 'Spokes')} } from './${spec.slug}';`);
    m = m.replace(anchor(`  'delivery-mutual-insurance': deliveryMutualInsurancePolicy,`), (s) => `${s}\n  '${spec.slug}': ${EXPORT},`);
    m = m.replace(anchor(`  'delivery-mutual-insurance': deliveryMutualInsuranceSpokes,`), (s) => `${s}\n  '${spec.slug}': ${EXPORT.replace(/Policy$/, 'Spokes')},`);
    fs.writeFileSync(mf, m);
  }
};
const facts = () => fs.readFileSync(path.join(DIR, 'facts.json'), 'utf8');
// 버튼·머리 주석에 쓸 주소 — 1차 출처만 (시민기자 글을 추출본으로 적는 일이 실제로 있었다)
const urls = () => sources.filter((s) => !s.error && s.primary !== false)
  .map((s) => `- ${s.finalUrl}  (${s.title}) — 추출본 ${DIR.replace(/\\/g, '/')}/${s.file}`).join('\n');
if (run('write')) {
  const id = fs.existsSync(HUB) ? (fs.readFileSync(HUB, 'utf8').match(/\bid: '(\d+)'/)?.[1] ?? nextId()) : nextId();
  const today = new Date().toISOString().slice(0, 10);
  const W = `gov.jjyu.co.kr 허브 글 한 편을 TypeScript 파일로 쓴다. 아래 '예시 파일'과 같은 모양으로, 내용만 새로.

고정값
- export 이름: ${EXPORT} (그리고 빈 배열 ${EXPORT.replace(/Policy$/, 'Spokes')})
- id: '${id}', slug: '${spec.slug}', cat: '${spec.cat}', catSlug: '${spec.catSlug}', type: 'service'
- title: '${spec.title}'  ← 글자 그대로
- qa 4개의 q = 아래 소제목 글자 그대로, 순서 그대로
${spec.subs.map((s, i) => `  ${i + 1}. ${s}`).join('\n')}
- cardLayout: 'act-first' — 카드가 소제목 → 버튼 → 표 → 텍스트 순서로 그려진다
- titleTail: false, hideAmountBox: true, datePublished·dateModified: '${today}T10:00:00+09:00', verifiedAt: '${today}'
- 머리 주석: 아래 '버튼' 목록의 추출본 경로만 적는다(목록에 없는 원문은 1차 출처가 아니다), '쓰지 않는 것'(facts.json notUsed) 목록

사실 — 이 facts.json 밖의 숫자·날짜·금액·나이·시간은 한 글자도 쓰지 않는다. 계산해서 새 숫자를 만들지 않는다.
${facts()}

- scopeWord 가 있는 사실은 그 값을 쓰는 문장에 scopeWord 를 반드시 같이 쓴다.
- keepWord 가 있는 사실은 그 사실을 쓰는 모든 문장·표 칸에 keepWord 를 살린다 ("관리할 계획입니다", "선착순으로").
- must: true 인 사실은 전부 글에 넣는다.
- keyFacts 6개 안팎: value 와 source.text(=facts 의 quote 그대로), source.url(=그 사실의 원문 URL).
- 각 qa 에 sourceNote: '* 출처: … (${today} 확인)'.

버튼 — 주소는 이 목록에서만:
${urls()}
- 상단 버튼 = 타이틀에 나오는 행동어를 나오는 순서대로. 타이틀 "${spec.title}" 의 행동어가 둘이면 applyUrl·ctaLabel(첫째), applyUrl2·ctaLabel2(둘째).
  타이틀에 없는 행동(예: 타이틀에 없는 페이백)을 상단에 올리지 않는다 — 그건 해당 소제목 카드의 act 로.
- 소제목에 행동(교환·등록·신청·조회·찾기)이 있는 카드에 act: { label, url }. 버튼은 소제목 바로 아래에 뜬다 —
  label 은 그 소제목의 행동을 평범한 말로("교환 장소 확인하기", "페이백 신청하기"). 행동이 없는 소제목엔 act 를 달지 않는다.

카드 구성 (소제목 → 버튼 → 표 → 텍스트)
- 표가 먼저 보인다. 독자가 찾는 답(장소·날짜·금액·순서)은 표로 준다.
- intro 는 표를 다시 읊지 않는다. 표에 있는 숫자·이름을 첫 문단에서 되풀이하지 않고, 표를 읽는 법과 표에 없는 조건·예외·주의점을 말한다 ("12곳 중 건대입구·잠실은 개찰구 밖이에요").
- 표 caption 에 날짜·숫자 나열을 넣지 않는다 — 짧은 제목만.
- 표는 3열 이하(모바일 폭 360px). 칸 글자는 짧게 — 이름 10개 같은 긴 목록은 칸에 넣지 않고 "10개 길" 처럼 줄이거나 행으로 풀어 쓴다.
  비교할 항목이 많으면 열을 늘리지 말고 행을 늘린다 (행 = 비교 항목, 열 = 비교 대상 2개).

쓰는 양
- facts 를 다 쓰지 않는다. 소제목 질문에 답하는 데 필요한 것 + must 만. 나머지는 버린다.
- qa intro 는 400~700자. 표(table)로 정리하면 읽기 쉬운 것(장소 목록, 권종별 금액, 순서)은 표로 뺀다.
- facts 의 value 문구를 괄호로 붙여 넣지 않는다. "(평일 7시~11시 / 16~20시)" 같은 메모 표기 금지 — 문장으로 풀어 쓴다.
- 날짜는 "9월 21일"처럼 풀어 쓴다. "9.21~9.23" 같은 표기는 표 안에서만.

문체
- heroHook: 공감 → 기존 방법이 왜 불편한가 → 그래서 이게 있다(핵심 수치) → 다만(조건·기한) → 그럼 확인부터 하셔야겠죠 → "…알아보겠습니다." 로 끝.
- 말하듯 잇는다("~인데요", "~입니다"). 단정형으로 뚝뚝 끊지 않는다. 맺음을 매번 똑같이 하지 않는다.
- 금지: 대부분·대개·약 N·추정·아마, "~다고요." 종결, "서울시는 ~라고 답했다" 같은 메타 서술, 정부 슬로건.
- faq 정확히 2개: { q, a, source, sourceUrl }. 본문 소제목과 겹치지 않는 질문으로, 답은 두세 문장.

예시 파일 (모양만 참고 — 내용·숫자는 절대 가져오지 않는다):
${fs.readFileSync('data/policies/chuseok-holiday-hospital-pharmacy.ts', 'utf8')}

출력: TypeScript 파일 전체를 코드블록 하나로.`;
  writeHub(await call(W, 'write'));
  log('write', `✅ ${HUB}`);
}

// ④ 대조 (틀리면 두 번까지 고친다)
if (!run('check')) { log('stop', `--to ${TO} 에서 멈춤 · ${fmtUsage(meter)}`); process.exit(0); }
let res = checkArticle(spec.slug, specNums);
for (let i = 0; i < 2 && res.errors.length; i++) {
  log('check', `❌ ${res.errors.length}건 — 고침 ${i + 1}`);
  res.errors.forEach((e) => log('check', `   ${e}`));
  // 바꿀 부분만 받는다 — 전에는 몇 줄을 고치려고 파일 전체(2~3만 자)를 다시 쓰게 해 1.7분이 들었다
  const X = `아래 허브 파일에서 코드 검사가 지적한 곳만 고친다. 파일 전체를 다시 쓰지 않는다.
틀린 숫자는 facts.json 의 값으로 바꾸거나 그 말을 뺀다. 새 숫자를 만들지 않는다.
빠진 사실은 가까운 문장에 자연스럽게 녹인다. facts 의 value 문구를 괄호로 붙여 넣지 않는다. 날짜는 "9월 21일"처럼 풀어 쓴다.
표가 4열 이상이면 그 table 블록(caption 부터 rows 끝까지)을 3열 이하로 바꾼다.
검사 결과:
${res.errors.join('\n')}

facts.json:
${facts()}

버튼 주소 목록:
${urls()}

파일:
${fs.readFileSync(HUB, 'utf8')}

출력 JSON 하나만: {"edits":[{"find":"파일에 있는 글자 그대로(한 곳만 맞도록 충분히 길게)","replace":"고친 글자"}]}`;
  const { edits = [] } = extractJson(await call(X, 'fix'));
  let src = fs.readFileSync(HUB, 'utf8'), missed = 0;
  for (const e of edits) {
    if (e.find && src.includes(e.find)) src = src.replace(e.find, e.replace ?? '');
    else missed++;
  }
  fs.writeFileSync(HUB, src);
  log('check', `고친 곳 ${edits.length - missed}/${edits.length}${missed ? ` (못 찾은 ${missed}곳은 다음 고침에서 다시)` : ''}`);
  res = checkArticle(spec.slug, specNums);
}
execFileSync('npx', ['tsx', 'scripts/build-search-index.ts'], { stdio: 'ignore', shell: true });

// ⑤ 합격 시험 — 이 글에 일부러 오차를 넣어 검사기가 잡는지. 못 잡으면 이 글의 대조 결과를 믿을 수 없다
let selfTest = '(대조 실패로 생략)';
if (!res.errors.length) {
  try { selfTest = execFileSync('node', ['scripts/gov/test-mutations.mjs', spec.slug], { encoding: 'utf8' }); }
  catch (e) { selfTest = String(e.stdout || e.message); res.errors.push('[합격 시험] 검사기가 일부러 넣은 오차를 놓쳤다 — 보고서 참고'); }
  log('test', selfTest.trim().split('\n').pop());
}

// ⑤ 보고서
const fj = JSON.parse(facts());
const v = verifyFacts(spec.slug);
const rep = [`# ${res.errors.length ? '❌' : '✅'} ${spec.title}`, '',
  `- slug: ${spec.slug} · 파일: ${HUB} · 모델: ${MODEL} · ${((Date.now() - t0) / 60000).toFixed(1)}분 · ${fmtUsage(meter)}`,
  `- 주소: https://gov.jjyu.co.kr/policy/${spec.slug}`, '',
  `## 글 대조 (코드) — ${res.errors.length ? `❌ ${res.errors.length}건` : `✅ 숫자 ${res.numbers}종 전부 facts 에 있음`}`, ...res.errors.map((e) => `- ${e}`), '',
  '## 합격 시험 (일부러 넣은 오차를 검사기가 잡는가)', '```', selfTest.trim(), '```', '',
  `## 사실 ${fj.facts.length}개 — 인용은 원문에 글자 그대로 있음을 코드가 확인`, '',
  '| id | 항목 | 값 | 범위어 | 출처 | 교차 | 원문 인용 |', '|---|---|---|---|---|---|---|',
  ...v.rows.map((r) => `| ${r.id} | ${r.item} | ${r.value} | ${r.scopeWord || ''} | ${r.isImg ? `🖼 ${r.src}` : r.src} | ${r.isImg ? `두 번 읽기: ${r.read2}` : r.seenIn.length} | ${String(r.quote).replace(/\|/g, '/').slice(0, 120)} |`), '',
  '## 한정 표현 판단 (살린 말 / 안 살린 이유) — 오해 소지 확인',
  ...fj.facts.filter((f) => f.keepWord || f.keepWhy).map((f) => `- ${f.item}: ${f.keepWord ? `**살림 '${f.keepWord}'**` : `안 살림 — ${f.keepWhy}`}  ← "${String(f.quote).slice(0, 80)}"`), '',
  '## 🖼 이미지에서 읽은 사실 — 사장님 눈 확인', ...v.rows.filter((r) => r.isImg).map((r) => `- ${r.item}: **${r.value}** ← ${DIR}/${r.src}`), '',
  '## ⚠ 한 곳에만 있는 값 (교차 확인 못 함)', ...v.warns.map((w) => `- ${w}`), '',
  '## 쓰지 않은 것', ...(fj.notUsed || []).map((n) => `- ${n.item} — ${n.reason}`)].join('\n');
fs.mkdirSync('scripts/reports', { recursive: true });
fs.writeFileSync(`scripts/reports/${spec.slug}.md`, rep);
log('done', `${res.errors.length ? '❌ 대조 실패 — 보고서 확인' : '✅ 완료'} → scripts/reports/${spec.slug}.md`);
process.exit(res.errors.length ? 1 : 0);
