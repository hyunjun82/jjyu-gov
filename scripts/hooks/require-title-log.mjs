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

let ok = false;
if (entryRe.test(log)) {
  const block = log.slice(log.search(entryRe)).split(/\n## /)[0];
  /* 파일명에 공백이 있을 수 있어("세금 타이틀.png") \S+ 가 아니라 .+? 로 잡는다 */
  const hasCap = /- 캡처:\s*.+?\s*—\s*["“].+["”]/.test(block);
  const hasPat = /- 패턴:\s*[①-⑨]/.test(block);
  ok = hasCap && hasPat;
}

if (ok) process.exit(0);

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
