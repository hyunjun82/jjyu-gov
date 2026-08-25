#!/usr/bin/env node
/* 타이틀 훅 — 하는 일은 하나다.
 *
 *   "이 글을 위해 reference/titles/ 캡처를 열었는가"
 *
 * 안 열었으면 글 저장을 막는다. 그게 전부다.
 *
 * 2026-08-15: 281줄 → 이 크기로 줄였다.
 *   원래는 구성표 유무·사장님 승인·출처 캡처·버튼 목적지·서론·라벨 길이까지
 *   일곱 가지를 막고 있었다. 전부 내가 규칙을 어길 때마다 덧붙인 것이고,
 *   결과적으로 글 하나 쓰는 데 여섯 번씩 되돌리게 만들었다.
 *   사장님 지시로 "캡처 확인" 한 가지만 남긴다.
 */
import { readFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

const ROOT = process.env.CLAUDE_PROJECT_DIR || process.cwd();

/* 사람이 끄고 싶을 때: touch .claude/hooks-off */
if (existsSync(join(ROOT, '.claude', 'hooks-off'))) process.exit(0);

let input = '';
try { input = readFileSync(0, 'utf8'); } catch { process.exit(0); }

let payload;
try { payload = JSON.parse(input); } catch { process.exit(0); }

/* ── 셸 우회 차단 (2026-08-25 신설) ──
   훅은 Write/Edit 만 보고 있었다. 셸로 파일을 만들면(cat > · sed -i · python)
   문지기가 아예 안 깨어났다. 오늘 고친 파일 전부 그 경로였다.
   여기서 잡는 것은 "아직 없는 글 파일을 셸이 만들려는" 경우뿐이다.
   이미 있는 파일을 고치는 명령은 건드리지 않는다 — 그래야 평소 작업이 안 막힌다. */
if (payload?.tool_name === 'Bash') {
  const cmd = payload?.tool_input?.command || '';
  const ART = /((?:data\/policies\/[a-z0-9-]+\.ts)|(?:app\/policy\/\[id\]\/\[spoke\]\/content\/[^\s"'`;|)]+\.tsx))/g;
  const hits = [...new Set([...cmd.matchAll(ART)].map((m) => m[1]))];
  const born = hits.filter((p) => !existsSync(join(ROOT, p)));
  if (!born.length) process.exit(0);          /* 새로 생기는 글이 없으면 관심 없다 */

  /* 경로를 "언급"하는 것과 "만드는" 것은 다르다.
     2026-08-25 첫 판이 ls·grep 까지 막았다. 쓰기 신호가 있을 때만 본다. */
  const WRITES = /(?:[^0-9&2]|^)>>?(?!&)|\btee\b|\bsed\b[^|]*\s-i|\bcp\b|\bmv\b|\bpython3?\b|\bnode\b\s+-e|\btruncate\b|\bdd\b|\bwriteFileSync\b|\bappendFileSync\b/;
  if (!WRITES.test(cmd)) process.exit(0);

  for (const p of born) {
    const spoke = /\.tsx$/i.test(p);
    if (spoke) {
      const m = cmd.match(/추출본:\s*([^\s*'"]+\.txt)/);
      if (m && existsSync(join(ROOT, m[1]))) continue;
      console.error(
        [
          `[타이틀 훅] ${p} — 셸로 새 스포크를 만들려 한다. 추출본이 없다(3단계).`,
          '',
          '  npx tsx scripts/capture-source.ts {slug} <원문 URL>',
          '  npx tsx scripts/new-spoke.ts --spec <spec.json>',
          '  손으로 만들지 않는다. 손으로 만든 글이 1,122편 중 1,045편이고 그게 오늘의 원인이다.',
        ].join(String.fromCharCode(10)),
      );
      process.exit(2);
    }
    const slug = p.split('/').pop().replace(/\.ts$/, '');
    if (existsSync(join(ROOT, 'scripts', 'output', `outline-${slug}.md`))) continue;
    console.error(
      [
        `[타이틀 훅] ${slug} — 셸로 새 허브를 만들려 한다. 구성표가 없다(2단계).`,
        '',
        `  npx tsx scripts/write.ts "{키워드}" --slug ${slug}`,
      ].join(String.fromCharCode(10)),
    );
    process.exit(2);
  }
  process.exit(0);
}

const file = payload?.tool_input?.file_path || '';
/* 글 파일 = 허브(data/policies/*.ts) + 스포크(app/policy/[id]/[spoke]/content/**.tsx).
   2026-08-25: 여기에 스포크가 빠져 있었다. 글 1,116편 중 대부분이 스포크인데
   문지기가 쳐다보지도 않아 1~3단계를 건너뛰어도 그냥 저장됐다. */
const isHub   = /data[\\/]policies[\\/][a-z0-9-]+\.ts$/i.test(file);
const isSpoke = /app[\/]policy[\/]\[id\][\/]\[spoke\][\/]content[\/].+\.tsx$/i.test(file);
if (!isHub && !isSpoke) process.exit(0);
if (/manifest\.ts$/.test(file)) process.exit(0);

const slug = file.split(/[\/]/).pop().replace(/\.tsx?$/, '');

/* ── 스포크 관문 (2026-08-25 신설) ──
   스포크는 파일명이 한글이라 허브처럼 slug 로 title-log 를 대조할 수 없다.
   대신 3단계를 봤는지 하나로 본다 — 추출본을 가리키고 그 파일이 실제로 있는가.
   new-spoke.ts 로 만들면 자동으로 붙는다. 손으로 쓰면 안 붙는다. 그 차이를 막는 것이다.
   기존 파일 수정은 건드리지 않는다(1,045편이 추출본 표시 없이 이미 있다). */
if (isSpoke) {
  if (existsSync(file)) process.exit(0);            /* 고치는 건 통과 */
  const body = payload?.tool_input?.content || payload?.tool_input?.new_string || '';
  const m = body.match(/추출본:\s*([^\s*]+\.txt)/);
  if (!m || !existsSync(join(ROOT, m[1]))) {
    console.error(
      [
        `[타이틀 훅] ${slug} — 새 스포크인데 추출본이 없다. 3단계를 건너뛴 것이다.`,
        '',
        `  npx tsx scripts/capture-source.ts {slug} <원문 URL>`,
        '  → scripts/output/source-{slug}.txt + 화면 캡처가 생긴다.',
        '  그 다음 npx tsx scripts/new-spoke.ts --spec <spec.json> 으로 뼈대를 만든다.',
        '  (파일 머리에 `추출본: scripts/output/source-{slug}.txt` 가 있어야 저장된다)',
      ].join(String.fromCharCode(10)),
    );
    process.exit(2);
  }
  /* 여기서 끝내지 않는다. 조기 종료하면 캡처 검사까지 건너뛴다
     (2026-08-25 첫 판이 그래서 4종을 다시 뚫었다).
     스포크는 파일명이 한글이라 title-log 대조만 건너뛴다. */
}

/* 신규 글은 write.ts 를 거쳤는지 본다 — outline 파일은 write.ts 가 만든다.
   2026-08-16: 진행기(write.ts)가 있는데 내가 안 돌리고 맨손으로 시작해
   중복 글을 다 쓰고 버렸다. 시작을 건너뛰면 저장에서 막는다.
   기존 글 수정은 해당 없음 — 파일이 이미 있으면 통과. */
/* 구성표(outline-{slug}.md)는 슬러그로 찾는다 — 허브만 파일명이 슬러그다.
   스포크는 파일명이 한글이라 여기서 볼 수 없고, 바로 위 추출본 검사가 그 역할을 한다. */
if (isHub && !existsSync(file)) {
  const outline = join(ROOT, 'scripts', 'output', `outline-${slug}.md`);
  if (!existsSync(outline)) {
    console.error(
      [
        `[타이틀 훅] ${slug} — 신규 글인데 구성표가 없다. write.ts 를 안 돌린 것이다.`,
        '',
        `  npx tsx scripts/write.ts "{키워드}" --slug ${slug}`,
        '  → 중복 검사 + 실검색어 수집 + outline/draft/factsheet 뼈대가 생긴다.',
        '  outline 의 빈칸을 채운 뒤 본문을 저장한다.',
      ].join('\n'),
    );
    process.exit(2);
  }
}

/* docs/title-log.md 에 이 글의 캡처 기록이 있는가 */
const logPath = join(ROOT, 'docs', 'title-log.md');
const log = existsSync(logPath) ? readFileSync(logPath, 'utf8') : '';
const block = log.split(/^## /m).find((b) => b.startsWith(slug));

/* 캡처를 "적었다"가 아니라 "찍었다"를 본다.
   2026-08-15: 텍스트로 수치를 다 뽑으면 내가 캡처를 건너뛰고 기록만 남겼다.
   판단이 끼어들 자리를 없애려고 파일 존재를 직접 확인한다. */
const shotDir = join(ROOT, '.playwright-mcp');
const shots = existsSync(shotDir)
  ? readdirSync(shotDir).filter((f) => /\.(png|jpe?g)$/i.test(f))
  : [];
const rootShots = readdirSync(ROOT).filter((f) => /\.(png|jpe?g)$/i.test(f));
const hasShot = shots.length + rootShots.length > 0;

if (!hasShot) {
  console.error(
    [
      `[타이틀 훅] ${slug} — 1차 출처 화면 캡처가 없다.`,
      '',
      '  browser_take_screenshot 으로 원문 화면을 찍고 저장한 뒤 저장한다.',
      '  텍스트만 뽑고 넘어가지 않는다 — 표·그림은 텍스트에 안 잡힌다.',
    ].join('\n'),
  );
  process.exit(2);
}

if (isHub && (!block || !/^- 캡처:/m.test(block))) {
  console.error(
    [
      `[타이틀 훅] ${slug} — 캡처를 열고 기록해야 저장할 수 있다.`,
      '',
      '  1. reference/titles/ 중 주제와 가까운 1장을 Read 로 연다',
      '  2. docs/title-log.md 에 적는다:',
      `     ## ${slug}`,
      '     - 캡처: <파일명> — "<캡처에서 본 타이틀 한 줄 그대로>"',
      '     - 타이틀: <확정 타이틀>',
      '',
      '  (사장님이 타이틀을 직접 주셨으면 캡처 줄에 그렇게 적는다)',
      '  끄려면: touch .claude/hooks-off',
    ].join('\n'),
  );
  process.exit(2);
}

process.exit(0);
