/**
 * check-title-source.ts — 타이틀을 "보고" 지었는지 검사
 *
 * 왜 (2026-08-08):
 *   사장님이 reference/titles/ 에 KB 타이틀 캡처를 넣어주셨고, CLAUDE.md 파이프라인에
 *   "캡처를 Read로 직접 연다 — 기억하고 있다로 건너뛰기 금지"라고 내가 직접 적어놨다.
 *   그런데 타이틀을 뽑을 때 캡처를 안 열고 "패턴 알고 있다"로 넘어갔다.
 *   산문 규칙은 안 지켜진다. 그래서 검사한다.
 *
 * 무엇을 검사하나 — 신규 스포크·허브가 추가될 때:
 *   1. 그 글의 타이틀에 코드·영문약어가 들어갔는가 (F00·K62·N39.3 등)
 *      → 사용자는 코드로 검색하지 않는다. 코드는 본문 표에서 병명으로 풀어 쓴다.
 *   2. collect-keywords 결과 파일이 존재하는가 (실검색어 없이 창작 금지, 절대규칙 6)
 *   3. reference/titles/ 캡처가 실제로 존재하는가 (없으면 대조 자체가 불가능)
 *   4. docs/title-log.md 에 그 글의 캡처 확인 기록이 있는가 (2026-08-10 신설)
 *      — 3번까지는 "캡처 파일이 있다"만 봤다. 봤다는 증거는 아무 데도 안 남아서
 *        캡처를 안 열고도 통과했고, 실제로 반복해서 안 열었다(사장님 수차례 지적).
 *        title-workflow.md 가 요구하는 두 줄(어느 캡처의 어느 타이틀을 봤나 / 왜 그
 *        구조인가)을 title-log.md 에 적어야만 통과한다. 행동은 검사할 수 없지만
 *        기록은 검사할 수 있다 — 기록 없이는 push 가 안 되게 해서 행동을 강제한다.
 *
 * 사용:
 *   npx tsx scripts/check-title-source.ts            # pre-push (신규 글만)
 *   npx tsx scripts/check-title-source.ts --all      # 전체 현황(차단 안 함)
 */
import { execSync } from 'child_process';
import { existsSync, readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();
const sh = (c: string) => { try { return execSync(c, { cwd: ROOT }).toString(); } catch { return ''; } };

/* 타이틀에 들어가면 안 되는 것 — 질병분류코드, 조문번호, 영문 약어
   (2026-08-07 사장님 지적: "사용자가 타이틀 검색할까 F00부터??"
    "보험 든 사람들은 다 이해할까 코드 번호를???") */
const CODE_IN_TITLE = [
  { re: /\b[A-Z]\d{2}(\.\d)?\b/, why: '질병분류코드(F00·K62·N39.3 등) — 사용자는 코드로 검색하지 않는다' },
  { re: /제\s?\d+조(의\d+)?/, why: '법 조문번호 — 본문 box에서 근거로 밝히고 타이틀에는 쓰지 않는다' },
  { re: /\b(ICD|KCD)-?\d*\b/i, why: '분류체계 약어' },
];

const isContent = (f: string) =>
  /^app\/policy\/\[id\]\/\[spoke\]\/content\/.+\.tsx$/.test(f)
  || (/^data\/policies\/[^/]+\.ts$/.test(f) && !f.endsWith('manifest.ts'));

/* 2026-08-08: 신규(A)만 보던 것을 수정(M)까지 — 기존 글 타이틀을 고칠 때도 같은 기준.
   2026-08-11 보정: 그런데 구현이 "파일을 고치면"이 되어, 타이틀은 그대로 두고 본문·일정만
   갱신해도 캡처 기록을 요구했다(주거안정장학금 회차 갱신에서 발견). 의도는 "타이틀을 고칠 때"다.
   수정(M)은 diff 에 타이틀 줄이 실제로 추가됐을 때만 검사한다 — PreToolUse 훅과 같은 기준. */
const rows = sh('git diff --name-status origin/main...HEAD')
  .split('\n')
  .map((l) => ({ st: l.slice(0, 1), file: l.slice(2).trim() }))
  .filter((r) => /^[AM]$/.test(r.st) && isContent(r.file));

const touchesTitle = (f: string) =>
  sh(`git diff origin/main...HEAD -- "${f}"`)
    .split('\n')
    .some((l) => /^\+/.test(l) && !/^\+\+\+/.test(l) && /(h1|title):\s*['"`]/.test(l));

const added = rows.filter((r) => r.st === 'A' || touchesTitle(r.file)).map((r) => r.file);

const all = process.argv.includes('--all');
if (!all && added.length === 0) {
  console.log(' 신규 글 없음 — 타이틀 출처 검사 생략');
  process.exit(0);
}

console.log('============================================================');
console.log(' 타이틀 출처 검사 — 캡처를 보고, 실검색어로 지었는가');
console.log('============================================================\n');

/* reference/titles/ 캡처 존재 확인 — 대조 대상 자체가 없으면 규칙이 성립하지 않는다 */
const capDir = join(ROOT, 'reference/titles');
const caps = existsSync(capDir) ? readdirSync(capDir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)) : [];
if (caps.length === 0) {
  console.log('❌ reference/titles/ 에 KB 타이틀 캡처가 없다');
  console.log('   → 캡처를 넣어야 타이틀 대조가 가능하다 (CLAUDE.md 타이틀 파이프라인 2단계)\n');
  process.exit(1);
}
console.log(`📸 대조 대상 캡처 ${caps.length}장: ${caps.join(', ')}`);
console.log('   ↑ 타이틀을 짓기 전에 이 파일들을 Read 로 직접 열었어야 한다 (기억으로 건너뛰기 금지)\n');

let fail = 0;
for (const f of added) {
  const src = readFileSync(join(ROOT, f), 'utf8');
  const m = src.match(/h1:\s*'([^']+)'/) || src.match(/title:\s*'([^']+)'/);
  if (!m) continue;
  const title = m[1];
  const name = f.split('/').pop();

  const hits = CODE_IN_TITLE.filter((c) => c.re.test(title));
  if (hits.length) {
    console.log(`❌ ${name}`);
    console.log(`   타이틀: ${title}`);
    hits.forEach((h) => console.log(`   [코드 노출] ${h.why}`));
    console.log('   → 병명·상황으로 바꾸고 코드는 본문 표에서 "진단서에 이렇게 적혀 있으면"으로 푼다\n');
    fail++;
    continue;
  }

  /* 실검색어 수집 결과가 있는가 — 파일명은 주제어라 정확 매칭이 어려우니 존재 여부만 본다 */
  const outDir = join(ROOT, 'scripts/output');
  const kw = existsSync(outDir) ? readdirSync(outDir).filter((x) => x.endsWith('.json')) : [];
  if (kw.length === 0) {
    console.log(`❌ ${name}`);
    console.log('   [실검색어 없음] scripts/output 에 collect-keywords 결과가 하나도 없다');
    console.log('   → npx tsx scripts/collect-keywords.ts "{주제}" 를 먼저 돌린다 (절대규칙 6)\n');
    fail++;
    continue;
  }

  /* 4. 캡처 확인 기록 — docs/title-log.md 에 이 글의 항목이 있는가 */
  const logPath = join(ROOT, 'docs/title-log.md');
  const log = existsSync(logPath) ? readFileSync(logPath, 'utf8') : '';
  const slug = (name ?? '').replace(/\.(tsx?|ts)$/, '');
  /* 항목 형식(title-log.md 머리말에 정의):
     ## <파일명 또는 slug>
     - 캡처: <reference/titles/ 파일명> — "<옮겨적은 KB 타이틀 한 줄>"
     - 패턴: <①~⑨> — <왜 이 구조인가 한 문장>
     - 타이틀: <확정 타이틀>                                        */
  const entryRe = new RegExp('^##[^\n]*' + slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'm');
  const entry = entryRe.test(log);
  const block = entry ? log.slice(log.search(entryRe)).split(/\n## /)[0] : '';
  /* 파일명에 공백이 있다("세금 타이틀.png") — \S+ 로 잡으면 공백에서 깨진다 (2026-08-10 시험에서 확인) */
  /* 사장님이 타이틀을 직접 준 경우는 캡처 인용 대신 실제 출처를 적는다 (2026-08-11).
     캡처는 타이틀을 뽑을 때 보는 것이지, 이미 받은 타이틀을 쓸 때 인용을 강요하면
     오늘 아침처럼 허위 인용을 지어내게 된다. PreToolUse 훅과 같은 예외를 둔다. */
  const givenByOwner = /- 출처:\s*사장님 지시\s*—\s*["“].+["”]/.test(block);
  const hasCapLine = givenByOwner || /- 캡처:\s*.+?\s*—\s*["“].+["”]/.test(block);
  const hasPatLine = /- 패턴:\s*[①-⑨]/.test(block);
  if (!entry || !hasCapLine || !hasPatLine) {
    console.log(`❌ ${name}`);
    console.log(`   타이틀: ${title}`);
    if (!entry) console.log('   [캡처 기록 없음] docs/title-log.md 에 이 글의 항목이 없다');
    else {
      if (!hasCapLine) console.log('   [캡처 기록 불완전] "- 캡처: <파일> — \"<옮겨적은 타이틀>\"" 줄이 없다');
      if (!hasPatLine) console.log('   [패턴 기록 불완전] "- 패턴: ①~⑨ — <이유>" 줄이 없다');
    }
    console.log('   → reference/titles/ 캡처를 Read 로 열고, 본 타이틀 한 줄을 그대로 옮겨적는다.');
    console.log('     못 옮겨적으면 안 연 것이다 (title-workflow.md).\n');
    fail++;
    continue;
  }

  console.log(`✅ ${name}`);
  console.log(`   ${title}`);
}

console.log('');
if (fail > 0) {
  console.log('============================================================');
  console.log(` 타이틀 기준 미달 ${fail}개 — push 차단`);
  console.log(' 타이틀은 캡처를 보고 실검색어 조각으로 짓는다. 코드는 타이틀에 넣지 않는다.');
  console.log('============================================================');
  process.exit(1);
}
console.log(' ✅ 통과 — 타이틀에 코드 노출 없음, 실검색어 수집 기록 있음');
