/**
 * 팩트시트 게이트 — 신규 콘텐츠는 채워진 팩트시트 없이 push 불가
 *
 * 배경 (2026-08-07): 확정일자 글에서 관할(법무부령/대법원규칙)을 안 가리고
 * 수수료 600원을 잘못 쓸 뻔했다. 원인은 "사실 검증" 단계에 게이트가 없어서
 * 사람(사용자)이 마지막 검증기 역할을 해온 것. 이 게이트가 그 구멍을 막는다.
 *
 * 규칙:
 *  1. 신규 추가되는 허브(data/policies/*.ts)·스포크(content/**\/*.tsx) 파일은
 *     파일 안에 `팩트시트: scripts/output/factsheet-<이름>.md` 주석이 있어야 한다.
 *  2. 그 팩트시트 파일이 실제로 존재해야 한다.
 *  3. 팩트시트에 미기입 흔적(템플릿 placeholder)이 남아 있으면 차단:
 *     - "(예/아니오)" 그대로 남음
 *     - 표에 빈 행만 있음 (`|  |  |` 패턴만 존재)
 *     - 콜론으로 끝나는 빈 항목 줄
 *  4. 기존 파일 수정(M)은 검사하지 않는다 — 신규(A)만. 소급 차단하면 아무것도 못 민다.
 *
 * 사용:
 *   npx tsx scripts/check-factsheet.ts          # pre-push (origin/main...HEAD 의 A 파일)
 */
import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();

function sh(cmd: string): string {
  try { return execSync(cmd, { cwd: ROOT }).toString(); } catch { return ''; }
}

// origin/main 기준 신규(A) 파일만
const added = sh('git diff --name-status origin/main...HEAD')
  .split('\n')
  .filter((l) => l.startsWith('A\t'))
  .map((l) => l.slice(2).trim())
  .filter(
    (f) =>
      (/^data\/policies\/[^/]+\.ts$/.test(f) && !f.endsWith('manifest.ts')) ||
      /^app\/policy\/\[id\]\/\[spoke\]\/content\/.+\.tsx$/.test(f)
  );

if (added.length === 0) {
  console.log(' 신규 허브·스포크 없음 — 팩트시트 검사 생략');
  process.exit(0);
}

console.log('============================================================');
console.log(' 팩트시트 게이트 — 사실 검증 없이 쓴 글인지 본다');
console.log('============================================================\n');

const PLACEHOLDERS = [
  /\(예\/아니오\)\s*$/m,            // 관할 질문 미기입
  /^\|\s*\|\s*\|\s*\|\s*\|\s*\|$/m, // 수치 표 빈 행만
  /^-\s[^:]+:\s*$/m,                // "- 항목: " 빈 값
];

let fail = 0;
for (const f of added) {
  const src = readFileSync(join(ROOT, f), 'utf8');
  const m = src.match(/팩트시트:\s*(scripts\/output\/factsheet-[^\s'"*]+\.md)/);
  const name = f.split('/').pop();

  if (!m) {
    console.log(`❌ ${name}`);
    console.log('   [팩트시트 참조 없음] 파일 상단 주석에 `팩트시트: scripts/output/factsheet-<이름>.md` 를 적는다');
    console.log('   → 템플릿: scripts/factsheet-template.md 복사 → 관할·수치·단서·행동 검증 후 그 경로를 주석에 기재\n');
    fail++;
    continue;
  }

  const fsPath = join(ROOT, m[1]);
  if (!existsSync(fsPath)) {
    console.log(`❌ ${name}`);
    console.log(`   [팩트시트 파일 없음] ${m[1]} 이 존재하지 않는다\n`);
    fail++;
    continue;
  }

  const sheet = readFileSync(fsPath, 'utf8');
  const holes = PLACEHOLDERS.filter((r) => r.test(sheet));
  if (holes.length > 0) {
    console.log(`❌ ${name}`);
    console.log(`   [팩트시트 미기입] ${m[1]} 에 빈 칸이 남아 있다 (placeholder ${holes.length}종 검출)`);
    console.log('   → 빈 칸은 "검증 안 한 사실"이다. Playwright로 원문을 열어 채우거나, 확인 불가면 본문에서 그 수치를 뺀다\n');
    fail++;
    continue;
  }

  // 관할 섹션 존재 확인 — 이번 사고의 직접 원인
  if (!/##\s*0\.\s*관할/.test(sheet)) {
    console.log(`❌ ${name}`);
    console.log(`   [관할 섹션 없음] ${m[1]} 에 "## 0. 관할 확정" 섹션이 없다 — 기관별 적용 법령부터 가린다\n`);
    fail++;
    continue;
  }

  console.log(`✅ ${name} ← ${m[1]}`);
}

console.log('');
if (fail > 0) {
  console.log('============================================================');
  console.log(` 팩트시트 미비 ${fail}개 — push 차단`);
  console.log(' 게이트 통과 ≠ 사실 검증 통과. 사실 검증은 팩트시트가 담당한다.');
  console.log('============================================================');
  process.exit(1);
}
console.log(' ✅ 통과 — 신규 글 전부 채워진 팩트시트가 있다');
