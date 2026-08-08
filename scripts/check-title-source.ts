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

const added = sh('git diff --name-status origin/main...HEAD')
  .split('\n')
  .filter((l) => l.startsWith('A\t'))
  .map((l) => l.slice(2).trim())
  .filter((f) => /^app\/policy\/\[id\]\/\[spoke\]\/content\/.+\.tsx$/.test(f)
    || (/^data\/policies\/[^/]+\.ts$/.test(f) && !f.endsWith('manifest.ts')));

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
