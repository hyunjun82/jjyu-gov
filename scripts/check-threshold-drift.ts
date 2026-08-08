/**
 * check-threshold-drift.ts — 임계값이 문서에 복사됐는지 본다
 *
 * 왜 (2026-08-08):
 *   CLAUDE.md 는 이미 "품질 기준 수치는 verify-quality.ts 가 단일 진실 원천이고
 *   문서에 복사해두지 않는다"고 못 박고 있었다. 과거 CLAUDE.md 가 Q10을 잘못 적고
 *   Q11~Q13을 누락한 사고 때문에 생긴 규칙이다.
 *
 *   그런데 점검해보니 gov-write/SKILL.md 가 같은 실수를 그대로 반복하고 있었다.
 *   - Q 표를 통째로 복사해두고 Q1~Q9 만 알고 있었다 (실제는 Q1~Q13)
 *   - qa >= 7 을 두 개의 표에 적어놨다 (스크립트는 3으로 내려간 뒤였다)
 *   그 결과 소제목 6개짜리 글이 pre-push 에서 막혔다.
 *
 *   산문 규칙은 지켜지지 않는다. 검사로 바꾼다.
 *
 * 무엇을 보나:
 *   문서(.md)에 "qa >= 7" 같은 임계값 문장이 있으면 잡는다.
 *   임계값은 스크립트에만 두고, 문서는 스크립트를 가리키게 한다.
 *   사고 기록·변경 이력에 남긴 숫자는 예외(EXEMPT).
 *
 * 사용:
 *   npx tsx scripts/check-threshold-drift.ts        # pre-push
 *   npx tsx scripts/check-threshold-drift.ts --all  # 현황(차단 안 함)
 */
import { execSync } from 'child_process';
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();

/* 검사 대상 문서 — 작업 중 읽히는 지시 문서만 본다.
   docs/ 의 정본(타이틀 스타일·버튼 문구)은 예시 모음이라 대상이 아니다. */
const TARGET_DIRS = ['.claude/rules', '.claude/skills'];
const TARGET_FILES = ['CLAUDE.md'];

/* 임계값처럼 보이는 문장 — 항목명 + 비교 + 숫자 */
const ITEM = '(qa\\[?\\]?|소제목|highlights|faqData|faq|sources|intro|table|box|keyFacts|q:)';
const DRIFT = new RegExp(`${ITEM}[^\\n]{0,20}(≥|>=|이상|최소)[^\\n]{0,6}\\d+`, 'gi');

/* 사고 기록·변경 이력은 숫자가 남아 있어야 왜 바뀌었는지 안다 */
const EXEMPT = [
  '2026-08-08',
  '2026-08-07',
  '전력이 있',
  '사고',
  '반복하고 있',
  '남아 있어',
  '알고 있었',
  '원래',
  '과거',
  '⚠',
];

function collect(): string[] {
  const out: string[] = [];
  for (const d of TARGET_DIRS) {
    const p = join(ROOT, d);
    if (!existsSync(p)) continue;
    const walk = (dir: string) => {
      for (const f of readdirSync(dir)) {
        const fp = join(dir, f);
        if (statSync(fp).isDirectory()) walk(fp);
        else if (f.endsWith('.md')) out.push(fp);
      }
    };
    walk(p);
  }
  for (const f of TARGET_FILES) {
    const p = join(ROOT, f);
    if (existsSync(p)) out.push(p);
  }
  return out;
}

const all = process.argv.includes('--all');
let fail = 0;
const hits: { file: string; line: number; text: string }[] = [];

for (const file of collect()) {
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((ln, i) => {
    DRIFT.lastIndex = 0;
    if (!DRIFT.test(ln)) return;
    if (EXEMPT.some((e) => ln.includes(e))) return;
    hits.push({ file: file.replace(ROOT + '\\', '').replace(ROOT + '/', ''), line: i + 1, text: ln.trim() });
  });
}

console.log('============================================================');
console.log(' 임계값 복사 검사 — 수치는 스크립트에만 둔다');
console.log('============================================================\n');

if (!hits.length) {
  console.log(' ✅ 통과 — 지시 문서에 복사된 임계값 없음');
  process.exit(0);
}

for (const h of hits) {
  fail++;
  console.log(`❌ ${h.file}:${h.line}`);
  console.log(`   ${h.text.slice(0, 110)}`);
}
console.log('');
console.log('------------------------------------------------------------');
console.log(` 복사된 임계값 ${fail}건`);
console.log(' 수치는 scripts/verify-quality.ts · check-spoke-quality.sh 에만 둔다.');
console.log(' 문서는 "npm run verify -- {slug} 로 확인한다" 처럼 스크립트를 가리킨다.');
console.log(' 두 곳에 적으면 한 곳을 고쳤을 때 반드시 어긋난다 (2026-08-08 실제 발생).');
console.log('------------------------------------------------------------');
if (all) {
  console.log('\n(--all 은 현황 파악용 — 차단하지 않는다)');
  process.exit(0);
}
process.exit(1);
