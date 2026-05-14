/**
 * scripts/verify-policy.ts
 * 1:1 source verification. Loads policy data, fetches each source.url,
 * and verifies that policy source.text strings appear in the live page.
 * Usage: npx tsx scripts/verify-policy.ts <slug>
 *
 * Uses fetch + cheerio if available, otherwise prints a manual checklist.
 */

import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';

interface SourceRef {
  url: string;
  cardIndex?: number;
  text: string;
  verifiedAt?: string;
}

interface FieldWithSource {
  value: string;
  source?: SourceRef;
}

interface PolicyData {
  slug?: string;
  title?: string;
  keyFacts?: Record<string, string | FieldWithSource>;
  qa?: { intro?: string; sourceNote?: string }[];
  sources?: { label: string; url: string }[];
}

const ROOT = process.cwd();
const POLICIES_DIR = path.join(ROOT, 'data', 'policies');

async function loadPolicy(slug: string): Promise<PolicyData> {
  const filePath = path.join(POLICIES_DIR, slug + '.ts');
  if (!fs.existsSync(filePath)) throw new Error('Policy file not found: ' + filePath);
  const mod = await import(pathToFileURL(filePath).href);
  const baseName = slug.replace(/[-_]/g, '');
  const candidates = [slug + 'Policy', baseName + 'Policy', 'default'];
  for (const c of candidates) if (mod[c]) return mod[c];
  throw new Error('No export found. Tried: ' + candidates.join(', '));
}

async function fetchPageText(url: string, timeoutMs = 15000): Promise<string> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 gov-jjyu-verifier' },
      signal: ctrl.signal,
    });
    clearTimeout(t);
    if (!res.ok) return '';
    const html = await res.text();
    // strip tags crudely
    return html.replace(/<script[^>]*>.*?<\/script>/gis, ' ')
               .replace(/<style[^>]*>.*?<\/style>/gis, ' ')
               .replace(/<[^>]+>/g, ' ')
               .replace(/\s+/g, ' ');
  } catch {
    return '';
  }
}

function collectSourceRefs(policy: PolicyData): SourceRef[] {
  const refs: SourceRef[] = [];
  // keyFacts entries that have source structure
  if (policy.keyFacts) {
    Object.values(policy.keyFacts).forEach((v) => {
      if (typeof v === 'object' && v !== null && 'source' in v && v.source?.url && v.source?.text) {
        refs.push(v.source);
      }
    });
  }
  return refs;
}

async function main() {
  const slug = process.argv[2];
  if (!slug) {
    console.error('Usage: npx tsx scripts/verify-policy.ts <slug>');
    process.exit(1);
  }

  const policy = await loadPolicy(slug);
  const refs = collectSourceRefs(policy);

  console.log('\n========================================');
  console.log(' verify-policy: ' + (policy.title || slug));
  console.log('========================================');

  if (refs.length === 0) {
    console.log('');
    console.log('No source-tagged fields found.');
    console.log('To enable 1:1 verification, structure keyFacts like:');
    console.log('  지원금액: { value: "300만원", source: { url: "...", text: "최대 300만원", verifiedAt: "..." } }');
    console.log('');
    console.log('Listing top-level sources for manual review:');
    (policy.sources || []).forEach((s) => console.log('  - ' + s.label + ' -> ' + s.url));
    process.exit(0);  // not a hard fail when no source refs yet
  }

  const groupedByUrl = new Map<string, SourceRef[]>();
  refs.forEach((r) => {
    const arr = groupedByUrl.get(r.url) || [];
    arr.push(r);
    groupedByUrl.set(r.url, arr);
  });

  let failCount = 0;
  for (const [url, list] of groupedByUrl) {
    console.log('\nChecking ' + url + ' (' + list.length + ' refs)...');
    const pageText = await fetchPageText(url);
    if (!pageText) {
      console.log('  XX could not fetch page (' + url + ')');
      failCount += list.length;
      continue;
    }
    for (const r of list) {
      const found = pageText.includes(r.text);
      if (found) {
        console.log('  OK "' + r.text.slice(0, 60) + '..."');
      } else {
        console.log('  XX "' + r.text.slice(0, 60) + '..." NOT found on page');
        failCount++;
      }
    }
  }

  console.log('');
  console.log('Total refs: ' + refs.length + ', failed: ' + failCount);
  if (failCount > 0) {
    console.log('FAIL: 1:1 source match failed.');
    process.exit(1);
  } else {
    console.log('PASS: all source.text strings verified on live pages.');
    process.exit(0);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
