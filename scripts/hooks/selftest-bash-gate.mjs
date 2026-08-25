/* 셸 우회 관문 자가검사 — require-title-log 가 셸로 만드는 새 글을 막는가.
 *
 * 왜 (2026-08-25)
 *   훅이 Write/Edit 만 보고 있어서, 셸(cat > · sed -i · python)로 파일을 만들면
 *   문지기가 아예 안 깨어났다. 그날 고친 파일 전부 그 경로였다.
 *   matcher 에 Bash 를 넣고 나니 이번엔 ls·grep 까지 막는 오탐이 났다.
 *   막아야 할 것과 통과해야 할 것을 같이 세워두지 않으면 어느 쪽으로든 무너진다.
 *
 * 케이스를 이 파일에 문자열로 박지 않고 cases/*.json 에서 읽는 이유
 *   케이스에 글 파일 경로가 들어 있어서, 명령줄에 그대로 쓰면
 *   그 명령 자체가 훅에 걸린다(실제로 걸렸다).
 *
 *   node scripts/hooks/selftest-bash-gate.mjs
 */
import { readFileSync } from 'fs';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const HERE = dirname(fileURLToPath(import.meta.url));
const cases = JSON.parse(readFileSync(join(HERE, 'cases', 'bash-gate-cases.json'), 'utf8'));
const HOOK = process.argv[2] || join(HERE, 'require-title-log.mjs');
const VERBOSE = process.argv.includes('-v');
let bad = 0;

for (const [name, command, want] of cases) {
  const payload = JSON.stringify({ tool_name: 'Bash', tool_input: { command } });
  const r = spawnSync('node', [HOOK], { input: payload, encoding: 'utf8' });
  const ok = r.status === want;
  if (!ok) bad++;
  console.log(`${ok ? 'OK   ' : '★틀림'} ${name.padEnd(34)} 코드 ${r.status} (기대 ${want})`);
  if (VERBOSE && !ok) {
    console.log(`        stderr: ${(r.stderr || '').trim().split('\n')[0] || '(없음)'}`);
  }
}

console.log(`\n셸 관문 ${cases.length}종 중 ${cases.length - bad}종 기대대로. 실패 ${bad}종.`);
process.exit(bad ? 1 : 0);
