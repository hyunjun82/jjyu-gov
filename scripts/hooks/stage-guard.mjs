#!/usr/bin/env node
/* 단계 경비 — 에이전트가 자기 단계 밖의 파일을 못 건드리게 막는다.
 *
 * 왜 생겼나 (2026-08-20)
 *   write.ts·require-title-log 는 전부 "내가 불러야 작동하는" 도구였다.
 *   안 부르면 없는 것과 같아서, 스포크 63편을 파이프라인 0회로 썼다.
 *   훅도 Write|Edit + data/policies/*.ts 만 봐서, Bash 로 스포크를 고치면
 *   한 번도 안 걸렸다. 그 사각지대를 막는다.
 *
 * 쓰는 법 — 에이전트 프론트매터에서
 *   hooks: { PreToolUse: [{ matcher: "Write|Edit|Bash",
 *            hooks: [{ type: "command",
 *                      command: "node .../stage-guard.mjs outline" }] }] }
 *
 * 단계별로 쓸 수 있는 경로가 다르다. 그 밖이면 exit 2 로 도구 호출을 막는다.
 */
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = process.env.CLAUDE_PROJECT_DIR || process.cwd();
if (existsSync(join(ROOT, '.claude', 'hooks-off'))) process.exit(0);

const stage = process.argv[2] || '';

/** 단계가 쓸 수 있는 경로 (정규식) */
const ALLOW = {
  title:   [/scripts[\\/]output[\\/]stage1-[\w.-]+\.json$/, /docs[\\/]title-log\.md$/],
  outline: [/scripts[\\/]output[\\/]stage2-[\w.-]+\.json$/],
  fact:    [/scripts[\\/]output[\\/]source-[\w.-]+\.txt$/,
            /scripts[\\/]output[\\/]factsheet-[^\\/]+\.md$/,
            /app[\\/]policy[\\/]\[id\][\\/]\[spoke\][\\/]content[\\/].+\.tsx$/,
            /data[\\/]spokes[\\/]registry\.ts$/,
            /data[\\/]policies[\\/][a-z0-9-]+\.ts$/,
            /\.playwright-mcp[\\/]/],
  verify:  [],   // 아무것도 못 쓴다 — 못 고치니 숨길 수 없다
};

const allowed = ALLOW[stage];
if (!allowed) process.exit(0);           // 모르는 단계면 관여하지 않는다

let payload;
try { payload = JSON.parse(readFileSync(0, 'utf8')); } catch { process.exit(0); }

const tool = payload?.tool_name || '';
const input = payload?.tool_input || {};

/** 이 호출이 건드리려는 파일 경로들을 뽑는다 */
function targets() {
  if (tool === 'Write' || tool === 'Edit' || tool === 'NotebookEdit')
    return [input.file_path || ''];

  if (tool === 'Bash' || tool === 'PowerShell') {
    const cmd = String(input.command || '');
    const out = [];
    /* 리다이렉트·tee·sed -i·python 열기 등 파일을 만들 수 있는 자리 */
    for (const re of [
      />>?\s*["']?([^\s"'|;&]+)/g,
      /\btee\s+(?:-a\s+)?["']?([^\s"'|;&]+)/g,
      /\bsed\s+-i[^\s]*\s+[^\s]*\s+["']?([^\s"'|;&]+)/g,
      /\bcp\s+[^\s]+\s+["']?([^\s"'|;&]+)/g,
      /\bmv\s+[^\s]+\s+["']?([^\s"'|;&]+)/g,
    ]) for (const m of cmd.matchAll(re)) out.push(m[1]);

    /* heredoc·python·node 안에서 경로 문자열이 보이면 그것도 후보로 본다.
       정밀하지 않아도 된다 — 막을 것만 막으면 되고, 애매하면 통과시킨다. */
    for (const m of cmd.matchAll(/["']([^\s"']*\.(?:tsx|ts|md|json|txt))["']/g)) out.push(m[1]);
    return out;
  }
  return [];
}

const hits = targets().map((p) => p.replace(/^\.[\\/]/, '')).filter(Boolean);
if (!hits.length) process.exit(0);

/* 읽기만 하는 명령까지 막으면 일을 못 한다 — 쓰기 신호가 없으면 통과 */
if (tool === 'Bash' || tool === 'PowerShell') {
  const cmd = String(input.command || '');
  const writes = />>?\s|(\btee\b)|(\bsed\s+-i)|(\bcp\b)|(\bmv\b)|(\brm\b)|open\([^)]*['"]w|writeFileSync|\.write\(/.test(cmd);
  if (!writes) process.exit(0);
}

const bad = hits.filter((p) => !allowed.some((re) => re.test(p)));
if (!bad.length) process.exit(0);

const rules = {
  title:   '1단계(타이틀)는 stage1 json 과 title-log 만 쓴다. 본문·구성표는 다음 단계 일이다.',
  outline: '2단계(구성표)는 stage2 json 만 쓴다. 본문(.tsx)은 3단계에서 쓴다 — 여기서 쓰면 승인을 건너뛴 것이다.',
  fact:    '3단계(사실·작성)가 쓸 수 있는 건 추출본·팩트시트·스포크·레지스트리뿐이다.',
  verify:  '4단계(검증)는 아무것도 고칠 수 없다. 고치면 무엇이 틀렸는지 사람이 못 본다. 보고만 한다.',
};

console.error(`🚫 ${stage} 단계가 자기 밖의 파일을 건드리려 했다`);
for (const p of bad) console.error(`   · ${p}`);
console.error(`   ${rules[stage]}`);
process.exit(2);   // exit 2 = 도구 호출 차단
