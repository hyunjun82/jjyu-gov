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
  const candidates = [name + 'Policy', baseName + 'Policy', 'default'];
  let policy: PolicyData | undefined;
  for (const c of candidates) { if (mod[c]) { policy = mod[c]; break; } }
  if (!policy) throw new Error('Export not found (' + candidates.join(', ') + '): ' + filePath);
  return policy;
}

function verify(policy: PolicyData): CheckResult[] {
  const qa = policy.qa || [];
  const r: CheckResult[] = [];

  r.push({ id: 'Q1', label: 'QA cards count', pass: qa.length >= 7, actual: qa.length, expected: '>=7' });

  const shortIntros = qa.filter((q) => !q.intro || q.intro.length < 200);
  r.push({
    id: 'Q2', label: 'intro 200 chars',
    pass: shortIntros.length === 0,
    actual: (qa.length - shortIntros.length) + '/' + qa.length,
    expected: qa.length + '/' + qa.length,
    detail: shortIntros.length > 0 ? 'missing: ' + shortIntros.map((q) => q.anchor).join(', ') : undefined,
  });

  const noVisual = qa.filter((q) => !q.table && !q.box && !q.box2 && !q.hasEligibilityChecker && !q.hasApplyMethodTabs);
  r.push({
    id: 'Q3', label: 'visual element per QA',
    pass: noVisual.length === 0,
    actual: (qa.length - noVisual.length) + '/' + qa.length,
    expected: qa.length + '/' + qa.length,
    detail: noVisual.length > 0 ? 'missing: ' + noVisual.map((q) => q.anchor).join(', ') : undefined,
  });

  const tableCount = qa.filter((q) => q.table).length;
  r.push({ id: 'Q4', label: 'tables total', pass: tableCount >= 2, actual: tableCount, expected: '>=2' });

  const boxCount = qa.reduce((s, q) => s + (q.box ? 1 : 0) + (q.box2 ? 1 : 0), 0);
  r.push({ id: 'Q5', label: 'boxes total', pass: boxCount >= 3, actual: boxCount, expected: '>=3' });

  const hi = qa.reduce((s, q) => s + (q.highlights?.length || 0), 0);
  r.push({ id: 'Q6', label: 'highlights total', pass: hi >= 15, actual: hi, expected: '>=15' });

  const withSource = qa.filter((q) => q.sourceNote).length;
  r.push({
    id: 'Q7', label: 'sourceNote ratio',
    pass: withSource >= Math.ceil(qa.length / 2),
    actual: withSource + '/' + qa.length,
    expected: '>=' + Math.ceil(qa.length / 2) + '/' + qa.length,
  });

  const faqLen = policy.faq?.length || 0;
  r.push({ id: 'Q8', label: 'FAQ count', pass: faqLen >= 5, actual: faqLen, expected: '>=5' });

  const sourcesLen = policy.sources?.length || 0;
  r.push({ id: 'Q9', label: 'sources URL count', pass: sourcesLen >= 3, actual: sourcesLen, expected: '>=3' });

  const keyFactsLen = policy.keyFacts ? Object.keys(policy.keyFacts).length : 0;
  r.push({ id: 'Q10', label: 'keyFacts rows', pass: keyFactsLen >= 9, actual: keyFactsLen, expected: '>=9' });

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

  // Q12: speculation words ban
  const SUSPICIOUS = ['약 ', '대략', '대략적', '정도', '쯤 ', '아마도', '추정'];
  const allBody = qa.map((q) => (q.q || '') + ' ' + (q.intro || '')).join(' ') + ' ' +
    (policy.faq?.map((f) => (f.q || '') + ' ' + (f.a || '')).join(' ') || '');
  const found = SUSPICIOUS.filter((w) => allBody.includes(w));
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
