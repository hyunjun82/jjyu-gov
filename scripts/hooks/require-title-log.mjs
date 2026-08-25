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
const isHub   = /data[\\/]policies[\\/][^\\/]+\.ts$/i.test(file) && !/(manifest|index|registry)\.ts$/i.test(file);
const isSpoke = /app[\\/]policy[\\/]\[id\][\\/]\[spoke\][\\/]content[\\/].+\.tsx$/i.test(file);
if (!isHub && !isSpoke) process.exit(0);
if (/manifest\.ts$/.test(file)) process.exit(0);

const slug = file.split(/[\\/]/).pop().replace(/\.tsx?$/, '');

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

/* ── 이 세션에서 진짜 열어봤나 (2026-08-25) ──
   전에는 .playwright-mcp 폴더에 png 가 하나라도 있으면 통과였다.
   폴더에 옛날 캡처가 남아 있으면 늘 통과라, 사실상 검사가 아니었다.
   기록은 2026-08-11 부터 .claude/state/session-activity.jsonl 에 쌓이는데
   문지기가 그걸 읽지 않았다. 이제 읽는다.

   기준점은 "직전에 저장한 글(article-write)" 이다. 그 뒤로 다시 열어봤는지 본다 —
   캡처 한 장으로 두 편, 세 편을 쓰는 것을 막는다.
   세션이 다르면 안 쳐준다. 남이 연 것은 내가 본 게 아니다. */
const SID = payload?.session_id || '';
const actPath = join(ROOT, '.claude', 'state', 'session-activity.jsonl');
const acts = existsSync(actPath)
  ? readFileSync(actPath, 'utf8').split(String.fromCharCode(10)).filter(Boolean)
      .map((l) => { try { return JSON.parse(l); } catch { return null; } })
      .filter((r) => r && r.session_id === SID)
  : [];
const lastArticle = acts.map((r, i) => (r.kind === 'article-write' ? i : -1)).filter((i) => i >= 0).pop();
const since = lastArticle === undefined ? acts : acts.slice(lastArticle + 1);
const did = (kind) => since.some((r) => r.kind === kind);

const MISSING = [
  ['capture-read', '1단계 — 기준 카드뉴스 캡처를 안 열었다.',
    '  reference/titles/ 에서 주제와 가까운 캡처 1장을 Read 로 연다.'],
  ['navigate',     '2단계 — 버튼 목적지를 안 열어봤다.',
    '  browser_navigate 로 버튼이 갈 곳을 직접 연다. 안 열어보고 만든 버튼이 엉뚱한 데로 간다.'],
  ['screenshot',   '3단계 — 1차 출처 화면을 안 찍었다.',
    '  browser_take_screenshot 으로 원문 화면을 찍는다. 표·그림은 텍스트에 안 잡힌다.'],
].filter(([k]) => !did(k));

if (MISSING.length) {
  const [, what, how] = MISSING[0];
  console.error(
    [
      `[타이틀 훅] ${slug} — ${what}`,
      '',
      how,
      '',
      lastArticle === undefined
        ? '  (이 세션에서 아직 아무것도 안 열었다)'
        : '  (직전 글을 저장한 뒤로 다시 연 적이 없다 — 캡처 한 장으로 두 편을 쓰지 않는다)',
    ].join(String.fromCharCode(10)),
  );
  process.exit(2);
}

/* ── 타이틀을 새로 세우는 저장인가 ──
   본문만 고치는 저장에까지 타이틀 근거를 요구하면 수정 작업이 멈춘다.
   record-session-activity 가 "글을 썼다"고 판정하는 기준과 같은 자를 쓴다. */
const payloadBody = payload?.tool_input?.content ?? payload?.tool_input?.new_string ?? '';
const setsTitle = isSpoke ? /h1:\s*['"`]/.test(payloadBody) : /^\s{2}title:\s*['"`]/m.test(payloadBody);

/* ── D. 버튼 라벨 길이 ── 화면에서 두 줄로 접히면 안 눌린다 */
const labelM = payloadBody.match(/heroAct:\s*\{\s*label:\s*['"`]([^'"`]*)['"`]/);
if (labelM && labelM[1].length > 16) {
  console.error(
    [
      `[타이틀 훅] ${slug} — 상단 버튼 라벨이 ${labelM[1].length}자다. 16자까지.`,
      '',
      `  "${labelM[1]}"`,
      '  버튼은 한 줄에 들어와야 눌린다. 문장은 heroHook 에 두고 라벨은 행동만 남긴다.',
    ].join(String.fromCharCode(10)),
  );
  process.exit(2);
}

if (setsTitle) {
  /* ── C. 구성표(2단계) ── 3주간 재작업 223건 중 116건이 문구·버튼에서 났다.
     이 단계만 장치가 없었다. 구성표가 있어야 하고, 버튼 목적지가 적혀 있어야 한다. */
  const outline = join(ROOT, 'scripts', 'output', `outline-${slug}.md`);
  if (!existsSync(outline)) {
    console.error(
      [
        `[타이틀 훅] ${slug} — 구성표가 없다(2단계).`,
        '',
        `  npx tsx scripts/write.ts "{키워드}" --slug ${slug}`,
        '  구성표의 빈칸(서론·소제목·버튼 목적지)을 채운 뒤 본문을 저장한다.',
      ].join(String.fromCharCode(10)),
    );
    process.exit(2);
  }
  const outlineSrc = readFileSync(outline, 'utf8');
  if (!/https?:\/\//.test(outlineSrc)) {
    console.error(
      [
        `[타이틀 훅] ${slug} — 구성표에 버튼 목적지(URL)가 없다.`,
        '',
        '  구성표의 ## 버튼 칸에 슬롯마다 목적지를 적는다:',
        '    - 슬롯 qa2 — {버튼 문구} — https://...',
        '  목적지를 안 정하고 쓴 버튼이 엉뚱한 데로 간다.',
      ].join(String.fromCharCode(10)),
    );
    process.exit(2);
  }

  /* ── B. 타이틀 근거 ── 캡처를 "봤다"가 아니라 "그 캡처에 그 제목이 있다"를 본다.
     2026-08-11 에 허위 인용 8건이 이 구멍으로 통과했다. */
  if (!block || !/^- 캡처:/m.test(block)) {
    console.error(
      [
        `[타이틀 훅] ${slug} — 캡처를 열고 기록해야 저장할 수 있다.`,
        '',
        '  1. reference/titles/ 중 주제와 가까운 1장을 Read 로 연다',
        '  2. docs/title-log.md 에 적는다:',
        `     ## ${slug}`,
        '     - 캡처: <파일명> — "<캡처에서 본 타이틀 한 줄 그대로>"',
        '     - 패턴: <docs/title-style-24.md 의 몇 번인지>',
        `     - 타이틀: <확정 타이틀>`,
      ].join(String.fromCharCode(10)),
    );
    process.exit(2);
  }
  if (!/^- 패턴:/m.test(block)) {
    console.error(
      `[타이틀 훅] ${slug} — 캡처 줄은 있는데 패턴 줄이 없다. docs/title-style-24.md 의 몇 번인지 적는다.`,
    );
    process.exit(2);
  }

  const idxPath = join(ROOT, 'reference', 'titles', 'INDEX.md');
  if (!existsSync(idxPath)) {
    console.error(
      `[타이틀 훅] ${slug} — reference/titles/INDEX.md 가 없어 인용을 대조할 수 없다. 대조 불가는 통과가 아니다.`,
    );
    process.exit(2);
  }
  /* 둥근 따옴표도 인용으로 본다. 앞부분만 인용해도 통과 — 캡처 제목이 길어 잘라 적는 일이 많다. */
  const quoted = (block.match(/^- 캡처:[^\n]*?["“”'](.+?)["“”']\s*$/m) || [])[1];
  if (!quoted) {
    console.error(`[타이틀 훅] ${slug} — 캡처 줄에 따옴표로 감싼 제목이 없다.`);
    process.exit(2);
  }
  const norm = (s) => s.replace(/[\s"“”'?!,.·]/g, '');
  const idx = norm(readFileSync(idxPath, 'utf8'));
  const head = norm(quoted).slice(0, 12);
  if (!head || !idx.includes(head)) {
    console.error(
      [
        `[타이틀 훅] ${slug} — 캡처에 없는 제목을 인용했다.`,
        '',
        `  적은 것: "${quoted}"`,
        '  reference/titles/INDEX.md 에 그 제목이 없다. 캡처를 열고 적힌 그대로 옮긴다.',
      ].join(String.fromCharCode(10)),
    );
    process.exit(2);
  }
}

process.exit(0);
