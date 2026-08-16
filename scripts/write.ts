/**
 * write.ts — 키워드 하나로 글 한 편을 끝까지 끌고 가는 진행기
 *
 * 왜 (2026-08-13 사장님 지시 "3개 자동화하게 만들라고"):
 *   지금까지 만든 건 전부 "틀리면 막는" 장치였다(훅 3개 + push 게이트 12개).
 *   막기만 하니 나는 매번 본문부터 쓰고 막히고 끼워맞췄다 — 3주간 신규 글 165편에
 *   fix 커밋이 223건 붙었고 그중 116건(43%)이 문구·버튼이었다.
 *   필요한 건 검사기가 아니라 순서를 끌고 가는 진행기다.
 *
 * 4단계 — 이게 전부다:
 *   1  타이틀   reference/titles 캡처를 보고, 실검색어 조각으로 조립
 *   2  구성표   hero 서론 + 질문형 소제목 + 버튼 문구·목적지 (--draft 로 문구 선검사)
 *   3  사실     Playwright 로 1차 출처 열고 텍스트 + 화면 캡처로 대조
 *   4  마무리   오차·오해 소지 전수 검토 후 커밋
 *
 * 사용:
 *   npx tsx scripts/write.ts "확정일자"          # 시작 / 다음 할 일 보기
 *   npx tsx scripts/write.ts "확정일자" --status # 현재 상태만
 *
 * 이 스크립트는 판단하지 않는다. 어디까지 왔고 다음에 뭘 해야 하는지만 말한다.
 * 실제 차단은 훅(require-title-log.mjs)과 pre-push 가 한다.
 */
import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();
const args = process.argv.slice(2);
const keyword = args.find((a) => !a.startsWith('--'));
const statusOnly = args.includes('--status');

if (!keyword) {
  console.log('사용: npx tsx scripts/write.ts "{키워드}"');
  process.exit(1);
}

const OUT = join(ROOT, 'scripts', 'output');
mkdirSync(OUT, { recursive: true });

/* ─────────── 상태 읽기 — 파일이 있으면 그 단계는 끝난 것이다 ─────────── */

const kwFile = () => {
  /* collect-keywords 결과는 "{키워드}.json" 으로 떨어진다 */
  if (!existsSync(OUT)) return '';
  const hit = readdirSync(OUT).find((f) => f.endsWith('.json') && f.includes(keyword));
  return hit ? join(OUT, hit) : '';
};

const CAPTURES = [
  ['대출 타이틀.png', '대출·전세·주택·금리'],
  ['보험타이틀.png', '보험·실손·연금보험·의료비'],
  ['생활타이틀.png', '생활·행정·발급·신고·송금'],
  ['세금 타이틀.png', '세금·연말정산·재산세·양도세'],
  ['연금 타이틀.png', '연금·퇴직·노후·수급'],
] as const;

const titleLog = existsSync(join(ROOT, 'docs/title-log.md'))
  ? readFileSync(join(ROOT, 'docs/title-log.md'), 'utf8')
  : '';

/* 이 키워드로 시작한 글들의 구성표 */
const outlines = existsSync(OUT)
  ? readdirSync(OUT).filter((f) => /^outline-.+\.md$/.test(f))
  : [];

const factsheet = existsSync(OUT)
  ? readdirSync(OUT).find((f) => f.startsWith('factsheet-') && f.includes(keyword))
  : undefined;

const hasKeywords = !!kwFile();
const hasFactsheet = !!factsheet;

/* ─────────── 출력 ─────────── */

/* 0단계 — 이미 쓴 글인가 (2026-08-13 신설).
   경력증명서 건에서 같은 주제 글(id 660)을 모르고 덮어썼다. 시작 시점에 알려준다. */
const POLICY_DIR = join(ROOT, 'data', 'policies');
const existing: string[] = [];
if (existsSync(POLICY_DIR)) {
  for (const f of readdirSync(POLICY_DIR)) {
    if (!f.endsWith('.ts') || /^(manifest|index|registry)\.ts$/.test(f)) continue;
    const body = readFileSync(join(POLICY_DIR, f), 'utf8');
    const t = body.match(/^\s{2}title:\s*'([^']+)'/m)?.[1] ?? '';
    const hay = `${f} ${t}`;
    const hit = keyword.split(/\s+/).filter((w) => w.length > 1).some((w) => hay.includes(w));
    if (hit) existing.push(`${f.replace(/\.ts$/, '')} — ${t}`);
  }
}

const line = '─'.repeat(64);
console.log(`\n${line}\n 글 진행기 — "${keyword}"\n${line}`);

const step = (n: number, name: string, done: boolean, detail: string[]) => {
  console.log(`\n${done ? '✅' : '⬜'} ${n}단계 ${name}`);
  if (!done) detail.forEach((d) => console.log(`     ${d}`));
};

if (existing.length) {
  console.log(`
⚠ 이미 있는 글 ${existing.length}건 — 덮어쓰지 말고 먼저 열어볼 것`);
  existing.forEach((e) => console.log(`     · ${e}`));
  console.log('     보강할 것이면 Edit 로, 각도가 다르면 스포크로 만든다');
}

/* ─────────── 준비 자동 실행 (2026-08-13 신설) ───────────
   전에는 "1단계 하세요"라고 출력만 하고 실행은 내 판단에 맡겼다. 그래서 매번 순서를
   새로 정했고, 경력증명서 건에서는 아예 이 진행기를 안 돌리고 뉴스부터 열다가
   기존 글을 덮어썼다. 이제 스크립트가 직접 한다 — 내가 정할 것을 남기지 않는다.
     · collect-keywords 실행 (결과 없을 때만)
     · 주제에 맞는 캡처 한 장 지정
     · outline / draft / factsheet 뼈대 파일 생성 (빈칸만 채우면 된다)
   --prep 없이도 기본 동작이다. 이미 있는 파일은 건드리지 않는다. */
const slugArg = args.find((a, i) => args[i - 1] === '--slug') ?? '';
const SLUG = slugArg || keyword.replace(/\s+/g, '-');

/* 주제어로 캡처를 고른다 — 매번 "어느 걸 볼까" 고민하지 않게 */
const PICK: [RegExp, string][] = [
  [/대출|전세|주택|금리|담보|보증/, '대출 타이틀.png'],
  [/보험|실손|의료비|병원|치아|암/, '보험타이틀.png'],
  [/세금|연말정산|재산세|양도|종부세|부가세/, '세금 타이틀.png'],
  [/연금|퇴직|노후|수급|기초연금/, '연금 타이틀.png'],
];
const capture = PICK.find(([re]) => re.test(keyword))?.[1] ?? '생활타이틀.png';

if (!hasKeywords) {
  console.log(`
▶ 실검색어 수집 중 — collect-keywords "${keyword}"`);
  try {
    execSync(`npx tsx scripts/collect-keywords.ts "${keyword}"`, { cwd: ROOT, stdio: 'pipe' });
    console.log('   ✅ 수집 완료');
  } catch {
    console.log('   ⚠ 수집 실패 — Playwright 로 네이버·구글 자동완성을 직접 긁는다');
  }
}

const OUTLINE = join(OUT, `outline-${SLUG}.md`);
const DRAFT = join(OUT, `draft-${SLUG}.md`);
const FACT = join(OUT, `factsheet-${SLUG}.md`);
const made: string[] = [];

if (!existsSync(OUTLINE)) {
  writeFileSync(OUTLINE, [
    `# 구성표 — ${keyword} (${SLUG})`, '',
    '**타이틀** (실검색어 조각으로만 조립. 메인키워드 + 행동어 + 후킹)',
    `**캡처** ${capture} — "(여기에 캡처에서 본 KB 타이틀 한 줄 그대로)"`,
    '**패턴** ①~⑨ 중 하나 — 왜 이 구조인지 한 문장', '',
    '## hero (서론)', '',
    '(공감 → 대안이 왜 어려운가 → 그래서 이게 있다(금액) → 다만 다 되는 건 아니다 → 넘기는 한 줄)', '',
    '**← 상단 버튼: [행동 라벨]**', '',
    '## 소제목 (실검색어 그대로, 물음표로 끝낸다)', '',
    '| # | 소제목 | 검색어 출처 | 버튼 |', '|---|---|---|---|',
    '| qa1 | ...하나요? | `` | hero 버튼이 받음 |',
    '| qa2 | ...되나요? | `` | **슬롯** |',
    '| qa3 | ...인가요? | `` | |',
    '| qa4 | ...얼마인가요? | `` | **슬롯** |',
    '| qa5 | ...다른가요? | `` | |',
    '| qa6 | ...어떻게 하나요? | `` | **슬롯(마지막)** |', '',
    '## 버튼 — 목적지를 Playwright 로 먼저 연다', '',
    '| 슬롯 | 앞 문장(유도) | 라벨 | 목적지 | 확인 |', '|---|---|---|---|---|',
    '| hero | ...하셔야겠죠 | 행동하기 | https:// | 열림·비로그인 |', '',
    '## 오해 소지 — 본문에서 반드시 풀 것', '', '1. ', '2. ', '3. ', '',
  ].join(String.fromCharCode(10)), 'utf8');
  made.push(`outline-${SLUG}.md`);
}

if (!existsSync(DRAFT)) {
  writeFileSync(DRAFT, [
    `# 문구 초안 — ${keyword}`, '',
    '(서론. 장면으로 시작해 금액·반전까지. 마지막은 버튼으로 넘기는 한 줄)', '',
    '**[행동 라벨]** (https://)', '',
    '(둘째 버튼 앞 문구 — 읽는 사람이 주어. "…하셔야겠죠"로 넘긴다)', '',
    '**[다른 행동 라벨]** (https://)', '',
  ].join(String.fromCharCode(10)), 'utf8');
  made.push(`draft-${SLUG}.md`);
}

if (!existsSync(FACT)) {
  const tpl = join(ROOT, 'scripts', 'factsheet-template.md');
  writeFileSync(FACT, existsSync(tpl) ? readFileSync(tpl, 'utf8') : [
    `# 팩트시트 — ${keyword} (${SLUG})`, '',
    '## 0. 관할 확정', '', '| 항목 | 내용 |', '|---|---|', '| 소관 | |', '| 1차 출처 | |', '',
    '## 0-B. 원문 캡처 확인 (browser_take_screenshot)', '',
    '- 캡처 파일: ', '- 캡처에서 확인한 것: (표 구조·단서 위치를 문장으로. 15자 넘게)', '',
    '## 1. 수치', '', '| 항목 | 값 | 1차 출처 | 교차 출처 | 확인 |', '|---|---|---|---|---|', '',
    '## 2. 단서 조항', '', '## 3. 확보하지 못한 것 (본문에 쓰지 않음)', '',
    '## 4. 버튼 목적지 (Playwright 로 직접 열어 확인)', '', '## 5. 오해 소지 — 본문에서 푼 자리', '',
  ].join(String.fromCharCode(10)), 'utf8');
  made.push(`factsheet-${SLUG}.md`);
}

if (made.length) {
  console.log(`
▶ 뼈대 생성 — 빈칸만 채우면 된다`);
  made.forEach((m) => console.log(`     · scripts/output/${m}`));
}

console.log(`
▶ 먼저 열 캡처: reference/titles/${capture}`);
console.log(`     Read 로 직접 연 뒤 docs/title-log.md 에 캡처·패턴·타이틀 3줄을 적는다`);

step(1, '타이틀 — 캡처 보고 실검색어로', hasKeywords, [
  '① 주제와 가까운 캡처를 Read 로 연다 (앞 글에서 연 건 안 쳐준다):',
  ...CAPTURES.map(([f, w]) => `     · reference/titles/${f}  — ${w}`),
  `② npx tsx scripts/collect-keywords.ts "${keyword}"`,
  '③ 후보 2~3개를 "어느 검색어 + 어느 KB 패턴"과 함께 채팅에 올린다',
  '④ docs/title-log.md 에 캡처·패턴·타이틀 3줄을 적는다',
]);

step(2, '구성표 — 소제목과 버튼 문구를 먼저', outlines.length > 0, [
  '① scripts/output/outline-{slug}.md 를 만든다:',
  '     ## hero (서론)   — 장면 한 줄 → 금액·반전 → 버튼으로 넘기는 한 줄',
  '     ## 소제목        — 질문형 3개 이상, 실검색어 그대로. 행동(신청·청구)이 맨 위',
  '     ## 버튼          — 슬롯 qa2·qa4·마지막, 각 버튼의 문구와 목적지 URL',
  '② 버튼 목적지를 Playwright 로 먼저 연다 (로그인·세션토큰 걸리는지)',
  '③ 버튼 문구·목적지를 채팅에 올려 승인받는다 (본문은 그다음)',
]);

step(3, '사실 — Playwright 로 원문 대조', hasFactsheet, [
  '① 1차 출처를 browser_navigate 로 연다 (블로그·언론 금지)',
  '② browser_take_screenshot 으로 화면을 캡처해 눈으로 본다',
  '     표·구간·단서는 텍스트로 뽑으면 뭉개진다 (절대규칙 7-A)',
  `③ scripts/output/factsheet-${keyword}.md 를 채운다 (관할·수치·단서·교차출처)`,
  '④ 수치는 2개 이상 출처 교차 + 계산 정합성 검산',
]);

step(4, '마무리 — 오차·오해 소지 검토', false, [
  '① npx tsx scripts/write.ts "' + keyword + '" --final   ← 아래 검사를 한 번에 돌린다',
  '② 통과하면 커밋하고 바로 push 한다',
]);

/* ─────────── 4단계: 마무리 검토 일괄 실행 ─────────── */

if (args.includes('--final')) {
  console.log(`\n${line}\n 마무리 검토 — 오차·오해 소지 전수\n${line}\n`);
  const CHECKS: [string, string][] = [
    ['원문 대조 (오차·누락·근거없는말·출처)', 'npx tsx scripts/check-source-match.ts'],
    ['배선 무결성', 'npx tsx scripts/verify-integrity.ts --strict'],
    ['타입 형태', 'npx tsx scripts/check-type-shape.ts'],
  ];
  let bad = 0;
  for (const [name, cmd] of CHECKS) {
    try {
      execSync(cmd, { cwd: ROOT, stdio: 'pipe' });
      console.log(`  ✅ ${name}`);
    } catch (e: any) {
      bad++;
      console.log(`  ❌ ${name}`);
      const out = `${e.stdout ?? ''}${e.stderr ?? ''}`.trim().split('\n').slice(-8);
      out.forEach((l) => console.log(`       ${l}`));
    }
  }
  console.log(`\n${bad === 0 ? '통과 — 커밋해도 된다' : `${bad}건 남았다 — 고치고 다시 돌린다`}\n`);
  process.exit(bad ? 1 : 0);
}

if (!statusOnly) {
  const next = !hasKeywords ? 1 : outlines.length === 0 ? 2 : !hasFactsheet ? 3 : 4;
  console.log(`\n${line}\n 지금 할 것: ${next}단계\n${line}\n`);
}
