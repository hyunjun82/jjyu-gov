/**
 * scripts/verify-quality.ts
 * Quality verification for policy data files.
 * Usage: npx tsx scripts/verify-quality.ts <name> | --all
 */

import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';

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
  slug?: string;
  keyFacts?: Record<string, string>;
  qa?: QAItem[];
  faq?: { q: string; a: string; source?: string; sourceUrl?: string }[];
  sources?: { label: string; url: string }[];
  titleKeywords?: Record<string, string>;
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

async function loadPolicy(name: string): Promise<PolicyData> {
  const filePath = path.join(POLICIES_DIR, name + '.ts');
  if (!fs.existsSync(filePath)) throw new Error('File not found: ' + filePath);
  const mod = await import(pathToFileURL(filePath).href);
  const baseName = name.replace(/[-_]/g, '');
  const camelName = name.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
  const candidates = [name + 'Policy', baseName + 'Policy', camelName + 'Policy', 'default'];
  let policy: PolicyData | undefined;
  for (const c of candidates) { if (mod[c]) { policy = mod[c]; break; } }
  if (!policy) {
    // Fallback: some files use a non-slug-derived export name (e.g. id-prefixed
    // slugs like "119-safe-call" or "518-veteran-*"). Pick the sole export ending
    // in "Policy" if there is exactly one.
    const policyKeys = Object.keys(mod).filter((k) => k.endsWith('Policy'));
    if (policyKeys.length === 1) policy = mod[policyKeys[0]];
  }
  if (!policy) throw new Error('Export not found (' + candidates.join(', ') + '): ' + filePath);
  return policy;
}

function verify(policy: PolicyData): CheckResult[] {
  const qa = policy.qa || [];
  const r: CheckResult[] = [];

  /* 2026-08-15 사장님 지시로 개수 검사 9종(Q1~Q6·Q8~Q10) 삭제.
     카드 3개↑·서론 200자·카드마다 표/박스·표 2개↑·박스 3개↑·하이라이트 15개↑·
     FAQ 5개↑·출처 3개↑·keyFacts 9행↑ — 전부 "부피" 하한이었다.
     통과하려고 표와 박스를 채우게 되고 그게 곧 찍어내기다.
     (같은 지적이 check-user-value.ts 주석에 이미 적혀 있었는데 여기 남아 있었다)
     남긴 것: Q7 출처 표기 · Q11 타이틀 키워드 · Q12 추측 표현 · Q13 slug */

  const withSource = qa.filter((q) => q.sourceNote).length;
  r.push({
    id: 'Q7', label: 'sourceNote ratio',
    pass: withSource >= Math.ceil(qa.length / 2),
    actual: withSource + '/' + qa.length,
    expected: '>=' + Math.ceil(qa.length / 2) + '/' + qa.length,
  });

  // Q11: title keywords vs body match
  const titleKws: string[] = policy.titleKeywords ? Object.values(policy.titleKeywords) : [];
  if (titleKws.length > 0) {
    const body = qa.map((q) => (q.q || '') + ' ' + (q.intro || '')).join(' ') + ' ' +
      (policy.faq?.map((f) => (f.q || '') + ' ' + (f.a || '')).join(' ') || '');
    const missing = titleKws.filter((kw) => kw && !body.includes(kw));
    r.push({
      id: 'Q11', label: 'title keywords in body',
      pass: missing.length === 0,
      actual: (titleKws.length - missing.length) + '/' + titleKws.length,
      expected: titleKws.length + '/' + titleKws.length,
      detail: missing.length > 0 ? 'missing in body: ' + missing.join(', ') : undefined,
    });
  } else {
    r.push({
      id: 'Q11', label: 'title keywords in body',
      pass: false, actual: 'no titleKeywords', expected: 'titleKeywords defined',
      detail: 'add titleKeywords field to policy data',
    });
  }

  // Q12: speculation words ban (precise patterns to avoid false positives like 협약)
  const SUSPICIOUS_PATTERNS: { pattern: RegExp; label: string }[] = [
    { pattern: /(?<![가-힣])약\s*\d/, label: '약 N (수치 앞 약)' },  // 계약 3회·예약 2건 등 오탐 방지
    { pattern: /대략/, label: '대략' },
    { pattern: /대충/, label: '대충' },
    { pattern: /\s정도\s/, label: '정도' },
    { pattern: /\d+\s*쯤/, label: '쯤' },
    { pattern: /아마도/, label: '아마도' },
    { pattern: /추정/, label: '추정' },
    { pattern: /예상\s*컨대/, label: '예상컨대' },
  ];
  const allBody = qa.map((q) => (q.q || '') + ' ' + (q.intro || '')).join(' ') + ' ' +
    (policy.faq?.map((f) => (f.q || '') + ' ' + (f.a || '')).join(' ') || '');
  const found = SUSPICIOUS_PATTERNS.filter((p) => p.pattern.test(allBody)).map((p) => p.label);
  r.push({
    id: 'Q12', label: 'speculation words ban',
    pass: found.length === 0,
    actual: found.length === 0 ? 'none' : found.length + ' found',
    expected: '0',
    detail: found.length > 0 ? 'found: ' + found.join(', ') : undefined,
  });

  // Q13: slug ASCII check
  const slug = policy.slug || '';
  const isAscii = /^[a-z0-9\-_]+$/.test(slug);
  r.push({
    id: 'Q13', label: 'slug ASCII',
    pass: isAscii,
    actual: slug || '(empty)',
    expected: 'a-z 0-9 - _',
    detail: !isAscii ? 'slug must be ASCII (current: "' + slug + '")' : undefined,
  });

  return r;
}

function printReport(name: string, policy: PolicyData, results: CheckResult[]) {
  const passed = results.filter((r) => r.pass).length;
  const total = results.length;
  const rate = Math.round((passed / total) * 100);
  console.log('\n' + '='.repeat(50));
  console.log('[' + name + '] ' + policy.title);
  console.log('='.repeat(50));
  results.forEach((r) => {
    const icon = r.pass ? 'OK' : 'XX';
    console.log(icon + ' [' + r.id + '] ' + r.label + ': ' + r.actual + ' (expected ' + r.expected + ')');
    if (r.detail) console.log('     ' + r.detail);
  });
  console.log('\nPass rate: ' + passed + '/' + total + ' = ' + rate + '%');
  console.log(rate >= 80 ? 'PASS' : 'FAIL');
  return rate;
}


async function main() {
  const arg = process.argv[2];
  if (!arg) { console.error('Usage: npx tsx scripts/verify-quality.ts <name> | --all'); process.exit(1); }
  let targets: string[];
  if (arg === '--all') {
    targets = fs.readdirSync(POLICIES_DIR)
      .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
      .filter((f) => /^[a-zA-Z0-9\-_.]+$/.test(f)) // ASCII 파일만 검증
      .map((f) => f.replace(/\.ts$/, ''));
  } else { targets = [arg]; }
  let allPass = true;
  for (const name of targets) {
    try {
      const policy = await loadPolicy(name);
      const results = verify(policy);
      const rate = printReport(name, policy, results);
      if (rate < 80) allPass = false;
    } catch (err) {
      console.error('\n[' + name + '] verify error: ' + (err as Error).message + '\n');
      allPass = false;
    }
  }
  process.exit(allPass ? 0 : 1);
}

main();
