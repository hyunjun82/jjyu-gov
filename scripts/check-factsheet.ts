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


/**
 * 교차출처 자기참조 검사 (2026-08-08 신설)
 *
 * 왜: 실손 비급여 할증 글에서 협회 FAQ 요약문("100만원 이상 최대 네 배")만 인용해
 *     금융위 원문의 1~5등급 구간표를 놓쳤다. 팩트시트 '교차출처' 칸에 근거와 같은
 *     기관(협회)을 적어놓고 통과시킨 것이 원인이다.
 *     칸이 채워졌는지만 보면 같은 출처를 돌려막아도 게이트가 통과된다.
 *
 * 무엇을: 수치 표(| 수치 | 값 | 근거 | URL | 교차출처 |)의 각 행에서
 *     URL 칸의 도메인과 교차출처 칸의 도메인이 같으면 자기참조로 본다.
 *     교차출처가 "〃"(위와 같음)이면 바로 위 행의 판정을 물려받는다.
 */
function urlsOf(text) {
  const out = [];
  for (const m of text.matchAll(/(?:https?:\/\/)?[a-z0-9.-]+\.(?:go|or|co)\.kr[^\s|)]*/gi)) {
    out.push(m[0].toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/[.,)]+$/, ''));
  }
  return out;
}

function selfCitedRows(sheet) {
  const bad = [];
  let lastUrls = [];
  let lastCross = [];
  for (const line of sheet.split(String.fromCharCode(10))) {
    if (!line.trim().startsWith('|')) continue;
    const cells = line.split('|').map((c) => c.trim());
    if (cells.length < 7) continue;                 // | 수치 | 값 | 근거 | URL | 교차출처 |
    const label = cells[1];
    const url = cells[4];
    const cross = cells[5];
    if (/^-+$/.test(label) || label === '수치' || !label) continue;
    const urlU = url === '〃' ? lastUrls : urlsOf(url);
    const crossU = cross === '〃' ? lastCross : urlsOf(cross);
    lastUrls = urlU;
    lastCross = crossU;
    if (!urlU.length) continue;                     // URL 없는 행은 판단하지 않는다
    /* 교차출처에 "다른 문서 URL"이 하나도 없으면 자기참조.
       같은 기관이라도 다른 발표문(예: 금융위 2024 보도자료 ↔ 2026 보도자료)이면 교차로 인정한다.
       "Playwright 직접 열람" 같은 문구만 있고 URL이 없으면 검증한 것이 아니라 같은 문서를 본 것이다. */
    const hasOtherDoc = crossU.some((u) => !urlU.includes(u));
    if (!hasOtherDoc) bad.push(label.slice(0, 40));
  }
  return bad;
}

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


  // 교차출처 자기참조 — 같은 기관 안에서 돌려막았는지 (2026-08-08 신설)
  const selfCited = selfCitedRows(sheet);
  if (selfCited.length > 0) {
    console.log(`❌ ${name}`);
    console.log(`   [교차출처 자기참조] ${m[1]} 의 수치 ${selfCited.length}개가 근거와 같은 기관만 인용한다`);
    console.log(`      → ${selfCited.slice(0, 4).join(' / ')}${selfCited.length > 4 ? ' …' : ''}`);
    console.log('   → 다른 기관 원문을 열어 교차출처 칸을 채운다 (예: 협회 요약문 ↔ 금융위 보도자료, 기관 안내 ↔ law.go.kr 조문)');
    console.log('      2026-08-07 실손 할증 사고: 협회 요약문만 보고 금융위 5등급 구간표를 놓쳤다');
    console.log('');
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
