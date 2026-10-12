/**
 * 서치어드바이저 노출/클릭 — 웹문서·검색어를 TOP30 이 아니라 가능한 만큼(topN) 전부 받는다 (2026-10-12)
 *
 *   node scripts/tools/searchadvisor-expose-all.mjs https://gov.jjyu.co.kr [--topN=1000] [--periods=7,30,60]
 *
 * 결과: scripts/output/searchadvisor-expose-all-{호스트}-{날짜}.json  { period: { urls:[], querys:[] } }
 * 읽기 전용. 로그인은 scripts/cafe/.profile 세션(searchadvisor-dump.mjs 와 같다).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const arg = (k, d) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || '').split('=')[1] || d;
const SITE = (process.argv[2] || 'https://gov.jjyu.co.kr').replace(/\/$/, '');
const TOPN = arg('topN', '1000');
const PERIODS = arg('periods', '7,30,60').split(',');
const OUT = path.join(ROOT, 'scripts', 'output', `searchadvisor-expose-all-${new URL(SITE).host}-${new Date().toISOString().slice(0, 10)}.json`);

const ctx = await chromium.launchPersistentContext(path.join(ROOT, 'scripts', 'cafe', '.profile'), { headless: false, viewport: { width: 1400, height: 1200 }, locale: 'ko-KR' });
const p = ctx.pages()[0] ?? await ctx.newPage();
let exposeUrl = '';
p.on('request', (r) => { if (!exposeUrl && /api-console\/report\/expose\//.test(r.url())) exposeUrl = r.url(); });
await p.goto(`https://searchadvisor.naver.com/console/site/report/expose?site=${encodeURIComponent(SITE)}`, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
await p.waitForTimeout(4000);
if (!exposeUrl) { console.error('노출 API 주소를 못 잡았다 — 로그인 확인'); await ctx.close(); process.exit(1); }

const result = {};
for (const per of PERIODS) {
  const u = new URL(exposeUrl);
  u.searchParams.set('period', per); u.searchParams.set('topN', TOPN);
  const res = await p.request.get(u.toString());
  const j = await res.json();
  const e = j.items?.[0] || {};
  result[per] = { period: e.period, urls: e.urls || [], querys: e.querys || [] };
  console.log(`${per}일: 웹문서 ${result[per].urls.length} · 검색어 ${result[per].querys.length}`);
}
await ctx.close();
fs.writeFileSync(OUT, JSON.stringify({ site: SITE, collectedAt: new Date().toISOString(), result }, null, 1));
console.log('저장:', path.relative(ROOT, OUT));
