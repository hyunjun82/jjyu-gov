/**
 * scripts/gov-write.ts
 * Main automation. Usage: npm run gov-write -- <keyword>
 * Pipeline: collect -> write -> verify -> verify-policy -> wait for human -> push
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = process.cwd();
const RAW_DIR = path.join(ROOT, 'data', 'raw');
const KW_DIR = path.join(ROOT, 'data', 'keywords');
const POLICIES_DIR = path.join(ROOT, 'data', 'policies');

function ensureDirs() {
  [RAW_DIR, KW_DIR, POLICIES_DIR].forEach((d) => {
    if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  });
}

function slugify(keyword: string): string {
  // Korean keyword -> ASCII slug via romanization stub
  // For now: use the keyword as-is filtered to ASCII; if no ASCII, fall back to timestamp
  const ascii = keyword.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  if (ascii) return ascii;
  return 'policy-' + Date.now();
}

function log(stage: string, msg: string) {
  const line = '[' + new Date().toISOString().slice(11, 19) + '] [' + stage + '] ' + msg;
  console.log(line);
}

function run(cmd: string): { ok: boolean; out: string } {
  try {
    const out = execSync(cmd, { cwd: ROOT, encoding: 'utf-8', stdio: 'pipe' });
    return { ok: true, out };
  } catch (e: unknown) {
    const err = e as { stdout?: Buffer; stderr?: Buffer; message?: string };
    const out = (err.stdout?.toString() || '') + (err.stderr?.toString() || '') + (err.message || '');
    return { ok: false, out };
  }
}

async function main() {
  const keyword = process.argv[2];
  if (!keyword) {
    console.error('Usage: npm run gov-write -- <keyword>');
    process.exit(1);
  }

  ensureDirs();
  const slug = slugify(keyword);

  log('init', 'keyword="' + keyword + '" slug="' + slug + '"');

  // ─── Phase 1: Collect ───────────────────────────────────────
  log('1/6', 'collect multi-source (government + naver)');
  const collectRes = run('npx tsx scripts/collect-multi-source.ts "' + keyword + '" "' + slug + '"');
  if (!collectRes.ok) {
    console.error('Collect FAILED:\n' + collectRes.out);
    process.exit(1);
  }
  log('1/6', 'collect OK');

  // ─── Phase 2: Write policy file ─────────────────────────────
  log('2/6', 'write policy data file');
  const writeRes = run('npx tsx scripts/extract-policy.ts "' + slug + '"');
  if (!writeRes.ok) {
    console.error('Write FAILED:\n' + writeRes.out);
    process.exit(1);
  }
  log('2/6', 'write OK -> data/policies/' + slug + '.ts');

  // ─── Phase 3: Verify quality (Q1-Q13) ───────────────────────
  log('3/6', 'verify quality');
  const verifyRes = run('npx tsx scripts/verify-quality.ts "' + slug + '"');
  console.log(verifyRes.out);
  if (!verifyRes.ok) {
    console.error('Verify FAILED. Fix and re-run.');
    process.exit(1);
  }
  log('3/6', 'verify OK');

  // ─── Phase 4: Verify against government sites (1:1) ─────────
  log('4/6', 'verify-policy (1:1 source match)');
  const policyRes = run('npx tsx scripts/verify-policy.ts "' + slug + '"');
  console.log(policyRes.out);
  if (!policyRes.ok) {
    console.error('Source 1:1 match FAILED.');
    process.exit(1);
  }
  log('4/6', '1:1 match OK');

  // ─── Phase 5: Human review prompt ───────────────────────────
  log('5/6', 'HUMAN REVIEW REQUIRED');
  console.log('');
  console.log('==================================================');
  console.log(' POLICY GENERATED. Review before push.');
  console.log('==================================================');
  console.log(' Slug:        ' + slug);
  console.log(' File:        data/policies/' + slug + '.ts');
  console.log(' Preview URL: http://localhost:3000/policy/(slug)');
  console.log('');
  console.log(' To push:     npm run push');
  console.log(' To cancel:   delete data/policies/' + slug + '.ts');
  console.log('==================================================');
  console.log('');
  log('6/6', 'awaiting human approval. NOT pushed automatically.');
}

main().catch((e) => {
  console.error('Pipeline error:', e);
  process.exit(1);
});
