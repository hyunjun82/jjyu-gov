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
import { readFileSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

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
const logPath = join(root, 'docs', 'title-log.md');
const log = existsSync(logPath) ? readFileSync(logPath, 'utf8') : '';

const slug = basename(file).replace(/\.(tsx|ts)$/, '');
const esc = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const entryRe = new RegExp('^##[^\\n]*' + esc, 'm');

/* 인용한 제목이 캡처에 실제로 있는 줄인지 대조한다 (2026-08-11 신설).
   왜: 형식만 검사하던 시절, 사장님 채팅 스크린샷에서 본 제목을 로컬 캡처에서
   본 것처럼 적은 허위 인용 8건이 그대로 통과했다. 모양만 맞으면 지어낼 수 있었다.
   목록의 원천은 reference/titles/INDEX.md — 5장을 Read 해서 옮겨 적은 것이다. */
const norm = (s) => s.replace(/[\s"“”'’|·ㆍ!?，,.]/g, '').toLowerCase();
const indexPath = join(root, 'reference', 'titles', 'INDEX.md');
const indexRaw = existsSync(indexPath) ? readFileSync(indexPath, 'utf8') : '';
const knownTitles = indexRaw
  .split('\n')
  .filter((l) => /^-\s+\S/.test(l))
  .map((l) => norm(l.replace(/^-\s+/, '')))
  .filter((l) => l.length > 8);

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
const sawCapture = acts.some((a) => a.kind === 'capture-read');
const sawShot = acts.some((a) => a.kind === 'screenshot');
const visited = acts.filter((a) => a.kind === 'navigate').map((a) => String(a.url));

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
if (!sawCapture) {
  why =
    '[1단계] 이 세션에서 reference/titles/ 캡처를 아직 한 장도 열지 않았다.\n' +
    '     → 타이틀을 쓰기 전에 주제와 가까운 캡처를 Read 로 먼저 연다.\n' +
    '        (INDEX.md 목록만 보고 제목을 베끼는 것은 캡처를 본 것이 아니다)';
} else if (unopened.length) {
  why =
    '[2단계] 버튼 목적지를 이 세션에서 Playwright 로 열지 않았다:\n' +
    unopened.map((u) => '        · ' + u).join('\n') + '\n' +
    '     → 로그인·인증이 걸리는지, 세션 토큰이 붙는 URL 인지 먼저 확인한다.\n' +
    '        목적지가 확정되기 전에는 버튼 문구를 쓰지 않는다 (title-workflow.md 2단계 ★)';
} else if (!sawShot) {
  why =
    '[3단계] 이 세션에서 1차 출처를 캡처(browser_take_screenshot)한 적이 없다.\n' +
    '     → 표·구간·단서는 텍스트로 뽑으면 뭉개진다. 화면을 캡처해 눈으로 보고 쓴다\n' +
    '        (CLAUDE.md 절대규칙 7-A)';
} else if (entryRe.test(log)) {
  const block = log.slice(log.search(entryRe)).split(/\n## /)[0];
  /* 파일명에 공백이 있을 수 있어("세금 타이틀.png") \S+ 가 아니라 .+? 로 잡는다 */
  const capM = block.match(/- 캡처:\s*(.+?)\s*—\s*["“](.+?)["”]/);
  const hasPat = /- 패턴:\s*[①-⑨]/.test(block);
  if (!capM) why = '- 캡처: <파일명> — "<제목>" 줄이 없다';
  else if (!hasPat) why = '- 패턴: <①~⑨> 줄이 없다';
  else if (!knownTitles.length) why = 'reference/titles/INDEX.md 를 읽지 못했다 — 대조 불가라 차단한다';
  else {
    const quoted = norm(capM[2]);
    /* 캡처 목록에 그 제목이 있는가. 부분 일치도 인정(줄바꿈·말줄임 대비) */
    const found = knownTitles.some((t) => t.includes(quoted) || quoted.includes(t));
    if (!found) {
      why =
        `인용한 제목이 캡처 목록에 없다: "${capM[2]}"\n` +
        '     → 그 줄은 reference/titles/ 캡처에 없는 제목이다. 채팅 스크린샷이나 기억에서\n' +
        '        가져온 것이라면 캡처를 인용하지 말고 실제 출처를 그대로 적는다.\n' +
        '        (캡처를 새로 갈아끼웠다면 reference/titles/INDEX.md 부터 갱신한다)';
    } else ok = true;
  }
}

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
