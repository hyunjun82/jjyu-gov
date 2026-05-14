/**
 * scripts/verify-quality.ts
 *
 * 정책 데이터 파일의 품질을 10가지 기준으로 자동 검증.
 * 기준 케이스 (청년미래적금, 고유가지원금) 수준 이하면 FAIL.
 *
 * 사용법:
 *   npx tsx scripts/verify-quality.ts 부모급여
 *   npx tsx scripts/verify-quality.ts --all
 */

import * as fs from 'fs';
import * as path from 'path';

interface QAItem {
  q: string;
  anchor: string;
  intro?: string;
  highlights?: string[];
  table?: { caption?: string; headers: string[]; rows: string[][] };
  box?: { label: string; content: string };
  box2?: { label: string; content: string };
  sourceNote?: string;
  hasEligibilityChecker?: boolean;
  hasApplyMethodTabs?: boolean;
}

interface PolicyData {
  id: string;
  type: string;
  title: string;
  keyFacts?: Record<string, string>;
  qa?: QAItem[];
  faq?: { q: string; a: string; source?: string; sourceUrl?: string }[];
  sources?: { label: string; url: string }[];
  eligibility?: unknown[];
  applyMethodTabs?: Record<string, unknown>;
}

interface CheckResult {
  id: string;
  label: string;
  pass: boolean;
  actual: number | string;
  expected: number | string;
  detail?: string;
}

const POLICIES_DIR = path.join(process.cwd(), 'data', 'policies');

// ──────────────────────────────────────────────────────────────
// 정책 파일 동적 import
// ──────────────────────────────────────────────────────────────
async function loadPolicy(name: string): Promise<PolicyData> {
  const filePath = path.join(POLICIES_DIR, `${name}.ts`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`정책 파일 없음: ${filePath}`);
  }
  const mod = await import(filePath);
  const exportName = `${name}Policy`;
  const policy = mod[exportName] || mod.default;
  if (!policy) {
    throw new Error(`export ${exportName} 또는 default 없음: ${filePath}`);
  }
  return policy;
}

// ──────────────────────────────────────────────────────────────
// 10가지 품질 검증
// ──────────────────────────────────────────────────────────────
function verify(policy: PolicyData): CheckResult[] {
  const qa = policy.qa || [];
  const results: CheckResult[] = [];

  // Q1: qa 배열 길이 ≥ 7
  results.push({
    id: 'Q1',
    label: 'Q&A 카드 수',
    pass: qa.length >= 7,
    actual: qa.length,
    expected: '≥ 7',
  });

  // Q2: 각 qa[i].intro ≥ 200자
  const shortIntros = qa.filter((q) => !q.intro || q.intro.length < 200);
  results.push({
    id: 'Q2',
    label: '각 Q&A 본문 200자 이상',
    pass: shortIntros.length === 0,
    actual: `${qa.length - shortIntros.length}/${qa.length}`,
    expected: `${qa.length}/${qa.length}`,
    detail:
      shortIntros.length > 0
        ? `미달: ${shortIntros.map((q) => q.anchor).join(', ')}`
        : undefined,
  });

  // Q3: 각 qa[i]에 시각 요소 1개 이상
  const noVisual = qa.filter(
    (q) =>
      !q.table &&
      !q.box &&
      !q.box2 &&
      !q.hasEligibilityChecker &&
      !q.hasApplyMethodTabs,
  );
  results.push({
    id: 'Q3',
    label: '각 Q&A 시각 요소 1개 이상',
    pass: noVisual.length === 0,
    actual: `${qa.length - noVisual.length}/${qa.length}`,
    expected: `${qa.length}/${qa.length}`,
    detail:
      noVisual.length > 0
        ? `시각요소 없는 Q&A: ${noVisual.map((q) => q.anchor).join(', ')}`
        : undefined,
  });

  // Q4: 표 총 ≥ 2
  const tableCount = qa.filter((q) => q.table).length;
  results.push({
    id: 'Q4',
    label: '표 총 개수',
    pass: tableCount >= 2,
    actual: tableCount,
    expected: '≥ 2',
  });

  // Q5: 박스 총 ≥ 3
  const boxCount = qa.reduce(
    (sum, q) => sum + (q.box ? 1 : 0) + (q.box2 ? 1 : 0),
    0,
  );
  results.push({
    id: 'Q5',
    label: '보조 박스 총 개수',
    pass: boxCount >= 3,
    actual: boxCount,
    expected: '≥ 3',
  });

  // Q6: 형광 강조 단어 총 ≥ 15
  const highlightCount = qa.reduce(
    (sum, q) => sum + (q.highlights?.length || 0),
    0,
  );
  results.push({
    id: 'Q6',
    label: '형광 강조 단어 총 개수',
    pass: highlightCount >= 15,
    actual: highlightCount,
    expected: '≥ 15',
  });

  // Q7: 각 Q&A에 sourceNote 또는 출처 있음 (대략 50% 이상)
  const withSource = qa.filter((q) => q.sourceNote).length;
  results.push({
    id: 'Q7',
    label: '출처 명시된 Q&A 비율',
    pass: withSource >= Math.ceil(qa.length / 2),
    actual: `${withSource}/${qa.length}`,
    expected: `≥ ${Math.ceil(qa.length / 2)}/${qa.length}`,
  });

  // Q8: faq ≥ 5
  const faqLen = policy.faq?.length || 0;
  results.push({
    id: 'Q8',
    label: 'FAQ 개수',
    pass: faqLen >= 5,
    actual: faqLen,
    expected: '≥ 5',
  });

  // Q9: sources ≥ 3
  const sourcesLen = policy.sources?.length || 0;
  results.push({
    id: 'Q9',
    label: '출처 URL 개수',
    pass: sourcesLen >= 3,
    actual: sourcesLen,
    expected: '≥ 3',
  });

  // Q10: keyFacts ≥ 9
  const keyFactsLen = policy.keyFacts ? Object.keys(policy.keyFacts).length : 0;
  results.push({
    id: 'Q10',
    label: 'keyFacts 핵심콕콕 행 개수',
    pass: keyFactsLen >= 9,
    actual: keyFactsLen,
    expected: '≥ 9',
  });

  return results;
}

// ──────────────────────────────────────────────────────────────
// 출력
// ──────────────────────────────────────────────────────────────
function printReport(name: string, policy: PolicyData, results: CheckResult[]) {
  const passed = results.filter((r) => r.pass).length;
  const total = results.length;
  const rate = Math.round((passed / total) * 100);

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`📋 ${name} (${policy.title}) — 품질 검증`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

  results.forEach((r) => {
    const icon = r.pass ? '✅' : '❌';
    console.log(`${icon}  [${r.id}] ${r.label}: ${r.actual} (기준 ${r.expected})`);
    if (r.detail) {
      console.log(`        └─ ${r.detail}`);
    }
  });

  console.log(`\n통과율: ${passed}/${total} = ${rate}%`);
  if (rate >= 80) {
    console.log(`✅ PASS (80% 이상)\n`);
  } else {
    console.log(`❌ FAIL (80% 미만, 푸시 차단 권장)\n`);
  }

  return rate;
}

// ──────────────────────────────────────────────────────────────
// 메인
// ──────────────────────────────────────────────────────────────
async function main() {
  const arg = process.argv[2];

  if (!arg) {
    console.error('사용법: npx tsx scripts/verify-quality.ts <정책명> | --all');
    process.exit(1);
  }

  let targets: string[];

  if (arg === '--all') {
    targets = fs
      .readdirSync(POLICIES_DIR)
      .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
      .map((f) => f.replace(/\.ts$/, ''));
  } else {
    targets = [arg];
  }

  let allPass = true;

  for (const name of targets) {
    try {
      const policy = await loadPolicy(name);
      const results = verify(policy);
      const rate = printReport(name, policy, results);
      if (rate < 80) allPass = false;
    } catch (err) {
      console.error(`\n❌ ${name} 검증 실패: ${(err as Error).message}\n`);
      allPass = false;
    }
  }

  process.exit(allPass ? 0 : 1);
}

main();
