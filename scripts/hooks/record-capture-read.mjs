/* record-capture-read.mjs — PostToolUse(Read) 훅
 *
 * reference/titles/ 의 캡처 이미지를 Read 할 때마다 그 사실을 세션별로 기록한다.
 * 이 기록이 있어야 require-title-log.mjs 가 글 저장을 허용한다.
 *
 * 왜 (2026-08-11): title-log 에 캡처 인용을 강제했더니, INDEX.md 에서 제목만
 * 베껴 넣고 이미지는 안 여는 우회가 남았다. "봤는지"는 파일에 흔적이 없어서
 * 검사할 수 없다고 했는데 틀린 말이었다 — PostToolUse 가 Read 를 잡아주므로
 * 흔적을 직접 남기면 된다.
 */
import { readFileSync, appendFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

let raw = '';
try {
  raw = readFileSync(0, 'utf8');
} catch {
  process.exit(0); // 기록 실패가 Read 를 막을 이유는 없다
}

let d;
try {
  d = JSON.parse(raw);
} catch {
  process.exit(0);
}

const file = String(d?.tool_input?.file_path ?? '');
const norm = file.replace(/\\/g, '/');
if (!/reference\/titles\/.+\.png$/i.test(norm)) process.exit(0);

const root = process.env.CLAUDE_PROJECT_DIR ?? d?.cwd ?? process.cwd();
const out = join(root, '.claude', 'state', 'capture-reads.jsonl');
try {
  mkdirSync(dirname(out), { recursive: true });
  appendFileSync(
    out,
    JSON.stringify({
      session_id: d?.session_id ?? '',
      file: norm.split('reference/titles/')[1],
      at: new Date().toISOString(),
    }) + '\n',
    'utf8',
  );
} catch {
  /* 기록 실패는 조용히 넘긴다 — 막는 쪽은 PreToolUse 가 한다 */
}
process.exit(0);
