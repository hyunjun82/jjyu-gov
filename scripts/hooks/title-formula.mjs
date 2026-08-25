/**
 * title-formula.mjs — 타이틀 공식 [메인키워드 + 세부키워드 + 후킹] 검사 (PreToolUse)
 *
 * 왜 스크립트인가 (2026-08-12 사장님 지시로 교체):
 *   원래 이 검사는 settings.json 의 "type": "prompt" 훅, 즉 AI 판정이었다.
 *   같은 제목에 대해 1차는 "세부키워드 없다", 2차는 "후킹 약하다", 3차는
 *   "'세 가지'를 왜 뺐냐"로 판정이 매번 뒤집혔다. 자기가 제시한 대체 문구를
 *   그대로 넣었는데도 다시 막았다. 빠져나갈 구멍이 없어서 작업이 섰다.
 *   판정 기준이 실행할 때마다 달라지면 그건 게이트가 아니라 주사위다.
 *   그래서 목록 대조로 바꿨다 — 통과 조건이 이 파일에 글자로 적혀 있고,
 *   막혔을 때 뭘 넣어야 풀리는지 stderr 가 그 목록을 그대로 보여준다.
 *
 * 끄는 법 (사장님 요청 — "사용자가 풀 수 있게도 해야지"):
 *   .claude/hooks-off 파일을 만들면 이 훅과 require-title-log 훅이 모두 통과한다.
 *     켜기 끄기:  touch .claude/hooks-off   /   rm .claude/hooks-off
 *   판정이 틀렸다고 판단되면 사람이 풀고 진행한다. 게이트가 사람을 막으면 안 된다.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

const root = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
if (existsSync(join(root, '.claude', 'hooks-off'))) process.exit(0);

const raw = readFileSync(0, 'utf8');
let input;
try {
  input = JSON.parse(raw);
} catch {
  console.error('[타이틀공식 훅] 입력 JSON 을 읽지 못했다 — 안전을 위해 차단한다');
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
const isStage = /scripts\/output\/stage[12]-[^/]+\.json$/.test(file);
if (!isSpoke && !isHub && !isStage) process.exit(0);

const payload = tool === 'Write' ? (ti.content ?? '') : `${ti.new_string ?? ''}`;

/* 이 호출이 쓰려는 타이틀들을 뽑는다. 허브 파일은 spokes 배열에도 title: 이 있어
   한 번의 Edit 이 여러 개를 건드릴 수 있으므로 전부 검사한다. */
const KEY = /(?:^|[\s{,"'])["']?(?:title|h1)["']?\s*:\s*['"`]([^'"`]{6,})['"`]/gm;
const titles = [...payload.matchAll(KEY)].map((m) => m[1]);
if (!titles.length) process.exit(0);

/* 목록은 scripts/lib/title-rule.mjs 하나뿐이다 (2026-08-25).
   전에는 이 파일만 규칙을 알고, 후보를 만드는 write.ts 는 몰랐다.
   그래서 1단계가 내놓은 후보가 게이트를 하나도 통과하지 못한 채
   본문을 다 쓴 뒤에야 반려됐다. 이제 양쪽이 같은 파일을 본다. */
import { SUB, HOOK, ACTION, badEnding } from '../lib/title-rule.mjs';

const bad = [];
for (const t of titles) {
  const hasSub = SUB.some((k) => t.includes(k));
  const hasHook = HOOK.some((k) => t.includes(k)) || /[?？]/.test(t);
  const hasAction = !isHub || ACTION.some((k) => t.includes(k));
  const okEnd = !badEnding(t);
  /* 후보 단계(stage json)에서는 종결만 본다 — 공식 3축은 파일로 쓸 때 본다 */
  if (isStage) { if (!okEnd) bad.push({ t, hasSub: true, hasHook: true, hasAction: true, okEnd }); continue; }
  if (!hasSub || !hasHook || !hasAction || !okEnd) bad.push({ t, hasSub, hasHook, hasAction, okEnd });
}
if (!bad.length) process.exit(0);

const slug = basename(file).replace(/\.(tsx|ts)$/, '');
console.error(
  [
    `[타이틀공식 훅] ${slug} — 타이틀이 [메인키워드 + 세부키워드 + 후킹] 을 못 채웠다.`,
    '',
    ...bad.flatMap(({ t, hasSub, hasHook, hasAction, okEnd }) => [
      `  "${t}"`,
      `      세부키워드 ${hasSub ? 'O' : 'X'} / 후킹 ${hasHook ? 'O' : 'X'} / 행동어 ${hasAction ? 'O' : 'X'} / 종결 ${okEnd ? 'O' : 'X'}`,
    ]),
    '',
    '통과 조건은 목록 대조다 (AI 판정이 아니다 — 다음에 돌려도 결과가 같다):',
    `  · 세부키워드: ${SUB.join(' / ')} 중 하나가 제목에 있어야 한다`,
    `  · 후킹: ${HOOK.slice(0, 14).join(' / ')} … 중 하나, 또는 물음표로 끝`,
    `  · 행동어(허브만): ${ACTION.join(' / ')} 중 하나 — 정보형 제목은 읽고 끝난다`,
    '  · 종결: 끝글자가 다·요 면 막힌다 (…합니다 / …하세요 / …할까요).',
    '           허용은 물음형(…깎일까? …이유는?) · …나 · 명사형(…조회까지).',
    '',
    '  본보기: "신한 적금 9단 신청 방법, 20만명 선착순이라 늦으면 손해"',
    '          메인키워드(신한 적금 9단) + 행동(신청 방법) + 후킹(선착순·늦으면 손해)',
    '',
    '판정이 틀렸다고 보면 사람이 푼다:  touch .claude/hooks-off   (되돌리기: rm .claude/hooks-off)',
  ].join('\n'),
);
process.exit(2);
