/**
 * require-title-log.mjs — 글을 "쓰기 전"에 캡처 확인 기록을 강제하는 PreToolUse 훅
 *
 * 왜 (2026-08-10 사장님 지시):
 *   check-title-source 4번 검사는 push 에서 잡는다. 그런데 push 는 글을 다 쓴 뒤다.
 *   "글 다 작성 후 한다는건데 무조건 docs/title-log.md 애초에 잡아야지" —
 *   맞는 말이다. 다 쓴 뒤에 막으면 타이틀은 이미 기억으로 지어진 뒤고,
 *   기록은 사후 끼워넣기가 된다. 사후에는 안 고친다(action-copy.md 와 같은 원리).
 *
 * 무엇을 하나:
 *   Claude 가 Write/Edit 로 글 파일(스포크 .tsx / 허브 data/policies/*.ts)에
 *   타이틀(h1:/title:)을 쓰려는 순간, docs/title-log.md 에 그 파일의 캡처 확인
 *   기록이 없으면 도구 호출 자체를 차단한다(exit 2 → stderr 가 Claude 에게 전달).
 *   순서가 강제된다: 캡처 열기 → title-log 기록 → 그 다음에야 글 파일 저장.
 *
 * 차단하지 않는 것:
 *   - 타이틀이 안 바뀌는 Edit (본문 수정·오타 정정) — h1:/title: 이 new_string 에 없으면 통과
 *   - 글이 아닌 파일 전부
 *   - manifest/index/registry 류
 */
import { readFileSync, existsSync, appendFileSync, mkdirSync } from 'node:fs';
import { join, basename, dirname } from 'node:path';
import { checkTitleLog } from '../title-log-rule.mjs';

/* 사람이 푸는 스위치 (2026-08-12 사장님 지시 — "사용자가 풀 수 있게도 해야지").
   게이트가 오판해서 작업이 서는 상황이 실제로 났다. 판단은 사람이 이긴다.
     끄기: touch .claude/hooks-off   /   되돌리기: rm .claude/hooks-off */
if (existsSync(join(process.env.CLAUDE_PROJECT_DIR ?? process.cwd(), '.claude', 'hooks-off'))) {
  process.exit(0);
}

const raw = readFileSync(0, 'utf8');
let input;
try {
  input = JSON.parse(raw);
} catch {
  /* 2026-08-10: 처음엔 "못 읽으면 통과"였다. 그런데 시험에서 바로 그 경로로 뚫렸다 —
     깨진 입력이 조용히 exit 0 이 되면 이 훅은 있으나 마나다. 검사기가 검사를 못 하면
     없는 것과 같다(오늘만 세 번째). 입력은 Claude Code 가 만드는 정상 JSON 이므로
     깨졌다는 건 뭔가 잘못된 상황이고, 그때는 막는 쪽이 안전하다. */
  console.error('[title-log 훅] 입력 JSON 을 읽지 못했다 — 안전을 위해 차단한다');
  process.exit(2);
}

const tool = input.tool_name ?? '';
const ti = input.tool_input ?? {};
const file = (ti.file_path ?? '').split('\\').join('/');
if (!file) process.exit(0);

const isSpoke = /app\/policy\/\[id\]\/\[spoke\]\/content\/[^/]+\/[^/]+\.tsx$/.test(file);
const isHub =
  /(^|\/)data\/policies\/[^/]+\.ts$/.test(file) &&
  !/(manifest|index|registry)\.ts$/.test(file);
if (!isSpoke && !isHub) process.exit(0);

/* 이 호출이 타이틀을 만들거나 바꾸는가 */
const payload = tool === 'Write' ? (ti.content ?? '') : `${ti.new_string ?? ''}`;
const titleRe = isSpoke ? /h1:\s*['"`]/ : /^\s{2}title:\s*['"`]/m;
if (!titleRe.test(payload)) process.exit(0);

const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
const slug = basename(file).replace(/\.(tsx|ts)$/, '');

/* 덮어쓰기 차단 (2026-08-13 신설 — 실제 사고로).
   같은 주제 글이 이미 있는 줄 모르고 Write 로 통째로 덮어써서, 7/30 에 쓴 글
   (고용24 통합경력증명, 소제목 7개·보도자료 원문 대조본)이 얕은 새 글로 바뀌었다.
   git 으로 되살렸지만 게이트는 전부 통과했다 — check-duplicate 조차 이미 덮어쓴
   파일을 자기 자신과 비교해 "겹침 0"이라고 답했다. 검사 순서상 막을 수가 없었다.
   그래서 저장 시점에 막는다: 파일이 이미 있는데 Write(전체 교체)면 차단.
   고칠 때는 Edit 를 쓰거나, 정말 새 글이면 다른 slug 를 쓴다. */
if (tool === 'Write' && existsSync(file)) {
  console.error(
    [
      `[title-log 훅] ${slug} — 이미 있는 글을 통째로 덮어쓰려 한다.`,
      '',
      `  ${file}`,
      '',
      '  · 같은 주제 글이 이미 있다. 먼저 Read 로 열어 무엇이 들어 있는지 본다.',
      '  · 보강할 것이면 Edit 로 필요한 부분만 고친다.',
      '  · 정말 다른 글이면 slug 를 다르게 잡는다(각도가 다르면 스포크로).',
      '',
      '  덮어쓰면 기존 글의 소제목·출처·수치가 그대로 사라지고, push 게이트도 못 잡는다.',
    ].join(String.fromCharCode(10)),
  );
  process.exit(2);
}

/* title-log 기록 판정은 scripts/title-log-rule.mjs 한 곳에서만 한다 (2026-08-13).
   전에는 이 훅과 check-title-source.ts 가 같은 검사를 각자 짜놨고, 그 탓에
   push 게이트 쪽에는 INDEX.md 대조가 빠져 있었다. 규칙이 둘이면 약한 쪽이 뚫린다. */
const logVerdict = checkTitleLog(root, slug);

/* 이 세션에서 1·2·3단계를 실제로 했는가 (2026-08-11).
   record-session-activity.mjs 가 PostToolUse 로 남긴 기록을 본다.
     1단계 캡처 Read / 2단계 버튼 목적지 browser_navigate / 3단계 원문 screenshot
   md 에만 적힌 규칙은 건너뛰어도 아무 일이 없었다. 흔적으로 강제한다. */
const sid = input.session_id ?? '';
const actPath = join(root, '.claude', 'state', 'session-activity.jsonl');
const acts = [];
if (existsSync(actPath)) {
  for (const line of readFileSync(actPath, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    try {
      const r = JSON.parse(line);
      if (sid && r.session_id === sid) acts.push(r);
    } catch { /* 깨진 줄은 건너뛴다 */ }
  }
}
/* 검사 단위는 세션이 아니라 "글 한 편"이다 (2026-08-13 정정).
   왜: 세션은 실측 20.9시간짜리였다(8/11 07:56 → 8/12 04:51, 날짜를 넘겼다).
   `acts.some(...)` 은 "이 세션에 한 건이라도 있나"라 아침에 캡처 한 장을 열면
   그 뒤 하루 종일 쓴 글이 전부 무검사로 통과했다 — 8/12 에 글 16편을 썼는데
   캡처 열람은 6회였고, 훅은 16편 모두를 통과시켰다.
   그래서 기준을 "직전에 저장한 글 이후에 새로 했는가"로 바꾼다.
   글 한 편마다 캡처 한 장·원문 캡처 한 장을 새로 요구한다. */
const allActs = [];
if (existsSync(actPath)) {
  for (const line of readFileSync(actPath, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    try { allActs.push(JSON.parse(line)); } catch { /* 깨진 줄은 건너뛴다 */ }
  }
}
const lastWrite = allActs
  .filter((a) => a.kind === 'article-write')
  .map((a) => String(a.at ?? ''))
  .sort()
  .pop() ?? '';
const since = (kind) => acts.filter((a) => a.kind === kind && String(a.at ?? '') > lastWrite);

const sawCapture = since('capture-read').length > 0;
const sawShot = since('screenshot').length > 0;
const visited = since('navigate').map((a) => String(a.url));

/* 2단계 — 구성표·문구를 사장님께 보여드리고 승인받았는가 (2026-08-13 신설).
   왜: 3단계 중 이것만 강제 장치가 없었다. 그 결과 3주간 재작업 223건 중 116건(43%)이
   문구·버튼에서 났다 — 나머지 11개 게이트를 다 합쳐도 20% 남짓이다.
   순서를 흔적으로 강제한다:  구성표 저장 → 사장님 발언 → 본문 저장
   사장님이 한마디라도 하신 뒤여야 본문을 쓸 수 있다. 아무 말씀 없이 넘어갔다면
   안 보여드린 것이다. 구성표를 고치면 다시 승인을 받아야 한다(파일이 더 최근이 되므로). */
const outlinePath = join(root, 'scripts', 'output', `outline-${slug}.md`);
const hasOutline = existsSync(outlinePath);
const at = (r) => String(r.at ?? '');
const lastOf = (rs) => rs.map(at).sort().pop() ?? '';
/* 시각 비교는 같은 자로 잰 값끼리만 한다 — 파일 mtime 과 기록 시계가 어긋나
   같은 순간을 앞뒤로 뒤집는 일이 실제로 났다(2026-08-13 시험에서 확인). */
const outlineAt = lastOf(allActs.filter((a) => a.kind === 'outline-write' && a.slug === slug));
const lastUserTurn = lastOf(allActs.filter((a) => a.kind === 'user-turn'));
const outlineApproved = hasOutline && !!outlineAt && !!lastUserTurn && outlineAt <= lastUserTurn;

/* 구성표에 실제로 담겨야 하는 것 — title-workflow.md 2단계 표 */
const outlineRaw = hasOutline ? readFileSync(outlinePath, 'utf8') : '';
const outlineMissing = [];
if (hasOutline) {
  if (!/^\s*##\s*서론|heroHook|hero/im.test(outlineRaw)) outlineMissing.push('hero(서론) 줄');
  if ((outlineRaw.match(/^\s*(?:[-*|]|\d+\.)\s*.*\?/gm) ?? []).length < 3) outlineMissing.push('질문형 소제목 3개 이상');
  if (!/https?:\/\//.test(outlineRaw)) outlineMissing.push('버튼 목적지 URL');
  if (!/버튼|act|슬롯/.test(outlineRaw)) outlineMissing.push('버튼 문구·슬롯');
}

/* 이 글이 쓰려는 버튼 목적지를 뽑는다. const 로 뺀 URL 도 따라간다. */
const consts = new Map();
for (const m of payload.matchAll(/const\s+([A-Za-z0-9_가-힣]+)\s*=\s*['"`](https?:\/\/[^'"`]+)['"`]/g)) {
  consts.set(m[1], m[2]);
}
const btnUrls = new Set();
for (const m of payload.matchAll(/(?:url|href):\s*(?:['"`](https?:\/\/[^'"`]+)['"`]|([A-Za-z0-9_가-힣]+))/g)) {
  const u = m[1] ?? consts.get(m[2] ?? '');
  if (u) btnUrls.add(u);
}
const trim = (u) => u.replace(/[?#].*$/, '').replace(/\/+$/, '').toLowerCase();
const unopened = [...btnUrls].filter(
  (u) => !visited.some((v) => trim(v).startsWith(trim(u)) || trim(u).startsWith(trim(v))),
);

let ok = false;
let why = '';
/* 사장님이 타이틀·키워드를 직접 준 경우 — 캡처(1단계)는 면제,
   2·3단계(목적지·원문 캡처)는 그대로 요구한다. 판정은 title-log-rule.mjs 가 한다. */
const givenByOwner = logVerdict.givenByOwner;

/* 문구 기본기 — 훅을 다 만든 뒤에도 사장님이 잡아낸 것들(2026-08-11).
   기계가 셀 수 있는 것만 막는다.
     · heroHook 이 없으면 서론 자체가 렌더되지 않는다 — 주거안정장학금 허브가 그랬다.
     · 라벨이 길면 안 눌린다 — '내 대학이 되는지 확인하고 신청하기'(18자)로 지적받았다. */
const LABEL_MAX = 16;
const hasHero = /heroHook:\s*(\n\s*)?['"`][^'"`]{20,}/.test(payload);
/* 버튼 라벨만 센다. sources 의 출처명과 box 의 라벨도 label: 을 쓰는데,
   출처는 길어야 정확하다("대한민국 정책브리핑 「…」 (2026.06.16, 보건복지부)").
   2026-08-11 실제 파일에서 오탐으로 확인 — act 블록 안과 ctaLabel 만 본다. */
const buttonLabels = [
  ...[...payload.matchAll(/(?:heroAct|act):\s*\{[\s\S]{0,400}?\}/g)]
    .map((m) => m[0].match(/label:\s*['"`]([^'"`]+)['"`]/)?.[1])
    .filter(Boolean),
  ...[...payload.matchAll(/ctaLabel:\s*['"`]([^'"`]+)['"`]/g)].map((m) => m[1]),
];
const longLabels = buttonLabels.filter((l) => [...l].length > LABEL_MAX);

if (!sawCapture && !givenByOwner) {
  why =
    '[1단계] 이 글을 위해 reference/titles/ 캡처를 열지 않았다.\n' +
    '     (앞 글에서 연 것은 안 쳐준다 — 글 한 편마다 새로 연다)\n' +
    '     (사장님이 타이틀을 직접 주신 경우라면 title-log 에\n' +
    '      - 출처: 사장님 지시 — "받은 타이틀 그대로" 를 적는다)\n' +
    '     → 타이틀을 쓰기 전에 주제와 가까운 캡처를 Read 로 먼저 연다.\n' +
    '        (INDEX.md 목록만 보고 제목을 베끼는 것은 캡처를 본 것이 아니다)';
} else if (tool === 'Write' && !hasOutline) {
  why =
    '[2단계] 구성표가 없다 — 본문 전에 구성표부터 만들어 승인받는다.\n' +
    `     → ${outlinePath.split(/[\\/]/).slice(-3).join('/')} 를 만든다:\n` +
    '        · hero(서론) 한 줄\n' +
    '        · 질문형 소제목 3개 이상 (실검색어 그대로)\n' +
    '        · 버튼 슬롯(qa 2·4·마지막)과 각 버튼의 문구·목적지 URL\n' +
    '        그다음 채팅에 그대로 올려 사장님 승인을 받는다 (title-workflow.md 2단계)';
} else if (tool === 'Write' && outlineMissing.length) {
  why =
    '[2단계] 구성표에 빠진 항목이 있다: ' + outlineMissing.join(', ') + '\n' +
    '     → 채우고 다시 올린다. 승인 없이 본문으로 넘어가지 않는다';
} else if (tool === 'Write' && !outlineApproved) {
  why =
    '[2단계] 구성표를 만든 뒤 사장님 확인이 없었다.\n' +
    '     → 구성표를 채팅에 그대로 올려 보여드리고, 답을 받은 다음에 본문을 쓴다.\n' +
    '        (구성표를 고쳤으면 다시 보여드려야 한다 — 고친 시점이 더 최근이므로)';
} else if (unopened.length) {
  why =
    '[3단계] 이 글의 버튼 목적지를 Playwright 로 열지 않았다:\n' +
    unopened.map((u) => '        · ' + u).join('\n') + '\n' +
    '     → 로그인·인증이 걸리는지, 세션 토큰이 붙는 URL 인지 먼저 확인한다.\n' +
    '        목적지가 확정되기 전에는 버튼 문구를 쓰지 않는다 (title-workflow.md 2단계 ★)';
} else if (!sawShot) {
  why =
    '[3단계] 이 글의 1차 출처를 캡처(browser_take_screenshot)하지 않았다.\n' +
    '     (버튼 목적지는 열었지만 원문 화면은 안 봤다)\n' +
    '     → 표·구간·단서는 텍스트로 뽑으면 뭉개진다. 화면을 캡처해 눈으로 보고 쓴다\n' +
    '        (CLAUDE.md 절대규칙 7-A)';
} else if (tool === 'Write' && !hasHero) {
  why =
    '[문구] heroHook 이 없다 — 서론 없이 제목 다음에 버튼만 나온다.\n' +
    '     → 장면 한 줄 → 금액·조건과 반전 → 버튼으로 넘기는 한 줄 (docs/button-copy.md)';
} else if (longLabels.length) {
  why =
    `[문구] 버튼 라벨이 ${LABEL_MAX}자를 넘는다:\n` +
    longLabels.map((l) => `        · "${l}" (${[...l].length}자)`).join('\n') + '\n' +
    '     → 목적지에서 실제로 되는 일 하나만 남긴다 — 예: "주거안정장학금 신청하기"';

} else {
  /* title-log 기록 판정 — 단일 판정기(scripts/title-log-rule.mjs)가 결정한다 */
  ok = logVerdict.ok;
  if (!ok) why = logVerdict.why;
}

/* 완료 도장(article-write)은 여기서 찍지 않는다 (2026-08-13 정정).
   PreToolUse 훅은 여러 개가 나란히 돈다. 이 훅이 통과해도 다른 훅이 막으면 저장은 안 된다.
   실제로 title-formula 가 되돌린 호출에 도장이 찍혀, 다시 쓰려니 "이 글을 위해 캡처를
   열지 않았다"로 튕겼다. 도장은 실제 저장 뒤 record-session-activity.mjs(PostToolUse)가 찍는다. */
if (ok) process.exit(0);
if (why) console.error(`[title-log 훅] ${slug} — ${why}\n`);

console.error(
  [
    `[title-log 훅] ${slug} 의 타이틀을 쓰려면 docs/title-log.md 에 캡처 확인 기록이 먼저 있어야 한다.`,
    '',
    '순서 (title-workflow.md 1단계):',
    '  1. reference/titles/ 캡처 중 주제와 가까운 1장을 Read 로 연다',
    '  2. docs/title-log.md 에 이 형식으로 적는다:',
    `     ## ${slug}`,
    '     - 캡처: <파일명> — "<캡처에서 본 KB 타이틀 한 줄 그대로>"',
    '     - 패턴: <①~⑨> — <왜 이 구조인가 한 문장>',
    '     - 타이틀: <확정 타이틀>',
    '  3. 그 다음에 이 파일을 저장한다',
    '',
    '옮겨적지 못하면 안 연 것이다. 기록 없이 본문부터 쓰는 경로는 막혀 있다.',
  ].join('\n'),
);
process.exit(2);
