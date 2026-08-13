/* record-session-activity.mjs — PostToolUse 훅 (Read + Playwright)
 *
 * 글쓰기 1·2·3단계의 "했는지"를 세션별로 기록한다.
 * require-title-log.mjs 가 이 기록을 보고 글 저장을 허용/차단한다.
 *
 *   1단계  Read(reference/titles/*.png)        → capture-read
 *   2단계  browser_navigate(버튼 목적지)         → navigate
 *   3단계  browser_take_screenshot(1차 출처)     → screenshot
 *
 * 왜 (2026-08-11): 규칙을 md 에만 적어두면 건너뛰어도 아무 일이 없다.
 * 오늘 실제로 1단계(캡처 열람)를 10번 건너뛰고 기록만 지어냈다.
 * 각 단계에 흔적을 남기고, 흔적이 없으면 다음 단계로 못 가게 한다.
 */
import { readFileSync, appendFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

let d;
try {
  d = JSON.parse(readFileSync(0, 'utf8'));
} catch {
  process.exit(0); // 기록 실패가 도구 사용을 막을 이유는 없다 (막는 쪽은 PreToolUse)
}

const tool = String(d?.tool_name ?? '');
const ti = d?.tool_input ?? {};
let rec = null;

if (tool === 'Read') {
  const f = String(ti.file_path ?? '').replace(/\\/g, '/');
  if (/reference\/titles\/.+\.png$/i.test(f)) {
    rec = { kind: 'capture-read', file: f.split('reference/titles/')[1] };
  }
} else if (tool === 'Write' || tool === 'Edit') {
  /* 2단계 — 구성표를 만든 시각. 승인 판정(구성표 → 사장님 발언 → 본문)의 기준점이다.
     파일 mtime 을 쓰지 않는 이유: 파일시스템 시계와 기록 시계가 어긋나 같은 순간을
     앞뒤로 뒤집는 일이 실제로 났다(2026-08-13 시험). 같은 자에서 잰 값만 비교한다. */
  const f = String(ti.file_path ?? '').replace(/\\/g, '/');
  const m = f.match(/scripts\/output\/outline-(.+)\.md$/);
  if (m) rec = { kind: 'outline-write', slug: m[1] };

  /* 글 한 편이 "실제로 저장된" 시점 — 다음 글의 기준점이 된다 (2026-08-13).
     왜 여기(PostToolUse)인가: 전에는 require-title-log(PreToolUse)가 통과할 때 찍었다.
     그런데 PreToolUse 훅은 여러 개가 나란히 돌고, 그중 하나만 막아도 저장은 안 된다.
     실제로 title-formula 가 타이틀을 되돌린 호출에 완료 도장이 찍혀, 다시 쓰려니
     "이 글을 위해 캡처를 열지 않았다"로 튕겼다. PostToolUse 는 도구가 실제로
     실행된 뒤에만 불린다 — 저장된 것만 셈에 넣는다. */
  const isSpoke = /app\/policy\/\[id\]\/\[spoke\]\/content\/[^/]+\/[^/]+\.tsx$/.test(f);
  const isHub = /(^|\/)data\/policies\/[^/]+\.ts$/.test(f) && !/(manifest|index|registry)\.ts$/.test(f);
  if (isSpoke || isHub) {
    const payload = tool === 'Write' ? String(ti.content ?? '') : String(ti.new_string ?? '');
    const titleRe = isSpoke ? /h1:\s*['"`]/ : /^\s{2}title:\s*['"`]/m;
    if (titleRe.test(payload)) {
      rec = { kind: 'article-write', file: f.split('/').pop().replace(/\.(tsx|ts)$/, '') };
    }
  }
} else if (/browser_navigate$/.test(tool)) {
  const u = String(ti.url ?? '');
  if (u) rec = { kind: 'navigate', url: u };
} else if (/browser_take_screenshot$/.test(tool)) {
  rec = { kind: 'screenshot', file: String(ti.filename ?? '(무명)') };
}

if (!rec) process.exit(0);

const root = process.env.CLAUDE_PROJECT_DIR ?? d?.cwd ?? process.cwd();
const out = join(root, '.claude', 'state', 'session-activity.jsonl');
try {
  mkdirSync(dirname(out), { recursive: true });
  appendFileSync(
    out,
    JSON.stringify({ session_id: d?.session_id ?? '', ...rec, at: new Date().toISOString() }) + '\n',
    'utf8',
  );
} catch {
  /* 조용히 넘긴다 */
}
process.exit(0);
