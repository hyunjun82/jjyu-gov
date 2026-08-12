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
if (!isSpoke && !isHub) process.exit(0);

const payload = tool === 'Write' ? (ti.content ?? '') : `${ti.new_string ?? ''}`;

/* 이 호출이 쓰려는 타이틀들을 뽑는다. 허브 파일은 spokes 배열에도 title: 이 있어
   한 번의 Edit 이 여러 개를 건드릴 수 있으므로 전부 검사한다. */
const titles = [
  ...[...payload.matchAll(/(?:^|\s)title:\s*['"`]([^'"`]{6,})['"`]/gm)].map((m) => m[1]),
  ...[...payload.matchAll(/(?:^|\s)h1:\s*['"`]([^'"`]{6,})['"`]/gm)].map((m) => m[1]),
];
if (!titles.length) process.exit(0);

/* 세부키워드 — 사람이 메인키워드와 "같이 치는" 말.
   CLAUDE.md 공식의 6개(언제/신청방법/사용처/조회/서류/얼마)가 뼈대이고,
   실검색어에서 같은 자리에 나타나는 변형을 함께 인정한다. */
const SUB = [
  '언제', '신청방법', '신청 방법', '방법', '사용처', '조회', '서류', '얼마',
  '금액', '조건', '자격', '기간', '대상', '준비물', '나이', '기준',
  '비교', '차이', '계산', '한도', '후기', '어디서', '어디로', '뭐뭐', '몇',
];

/* 후킹 — 맨 뒤에 붙는 클릭 이유. docs/hook-patterns.md 4축(손실회피·숫자대비·시간압박·자기대입). */
const HOOK = [
  '손해', '놓치면', '모르면', '빠뜨리면', '헛걸음', '못 받', '안 되', '안 나온',
  '날린', '날아', '깎', '토해', '거절', '탈락', '제외', '아니다', '아닙니다',
  '며칠', '마감', '남았', '까지만', '늦으면', '지나면',
  '되나', '될까', '있을까', '없을까', '가능할까', '얼마나', '왜',
];

const bad = [];
for (const t of titles) {
  const hasSub = SUB.some((k) => t.includes(k));
  const hasHook = HOOK.some((k) => t.includes(k)) || /[?？]/.test(t);
  if (!hasSub || !hasHook) bad.push({ t, hasSub, hasHook });
}
if (!bad.length) process.exit(0);

const slug = basename(file).replace(/\.(tsx|ts)$/, '');
console.error(
  [
    `[타이틀공식 훅] ${slug} — 타이틀이 [메인키워드 + 세부키워드 + 후킹] 을 못 채웠다.`,
    '',
    ...bad.flatMap(({ t, hasSub, hasHook }) => [
      `  "${t}"`,
      `      세부키워드 ${hasSub ? 'O' : 'X'} / 후킹 ${hasHook ? 'O' : 'X'}`,
    ]),
    '',
    '통과 조건은 목록 대조다 (AI 판정이 아니다 — 다음에 돌려도 결과가 같다):',
    `  · 세부키워드: ${SUB.join(' / ')} 중 하나가 제목에 있어야 한다`,
    `  · 후킹: ${HOOK.slice(0, 14).join(' / ')} … 중 하나, 또는 물음표로 끝`,
    '',
    '판정이 틀렸다고 보면 사람이 푼다:  touch .claude/hooks-off   (되돌리기: rm .claude/hooks-off)',
  ].join('\n'),
);
process.exit(2);
