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
