/* record-user-turn.mjs — UserPromptSubmit 훅
 *
 * 사장님이 말씀하신 시각을 남긴다. 그게 "승인 시점"의 유일한 기계적 근거다.
 *
 * 왜 (2026-08-13):
 *   3단계 중 2단계(구성표·버튼 문구를 채팅에 올려 승인받기)만 강제 장치가 없었다.
 *   그래서 재작업의 43%(3주간 116건)가 문구·버튼에서 났다. 나머지 11개 게이트를
 *   다 합쳐도 20% 남짓이었다.
 *
 *   승인은 채팅에서 일어나므로 파일만 봐서는 알 수 없다. 대신 순서는 셀 수 있다:
 *     구성표 파일 저장  →  사장님 발언  →  본문 저장
 *   구성표를 올린 뒤 사장님이 한마디라도 하셨다면 보신 것이다. 아무 말씀 없이
 *   본문으로 넘어갔다면 안 보여드린 것이다. 그 경계를 이 기록이 만든다.
 */
import { readFileSync, appendFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

let d;
try {
  d = JSON.parse(readFileSync(0, 'utf8'));
} catch {
  process.exit(0); // 기록 실패가 사장님 발언을 막을 이유는 없다
}

const root = process.env.CLAUDE_PROJECT_DIR ?? d?.cwd ?? process.cwd();
const out = join(root, '.claude', 'state', 'session-activity.jsonl');
try {
  mkdirSync(dirname(out), { recursive: true });
  appendFileSync(
    out,
    JSON.stringify({
      session_id: d?.session_id ?? '',
      kind: 'user-turn',
      at: new Date().toISOString(),
    }) + '\n',
    'utf8',
  );
} catch {
  /* 조용히 넘긴다 */
}
process.exit(0);
