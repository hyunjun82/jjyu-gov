import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
const r = await p.goto('http://www.rootsinfo.co.kr', { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(3000);
console.log('상태', r.status(), '· 최종', p.url());
let best = '';
for (const f of p.frames()) {
  let t = '';
  try { t = await f.evaluate(() => document.body?.innerText || ''); } catch {}
  console.log(` frame ${f.url().slice(0,60)} → ${t.length}자`);
  if (t.length > best.length) best = t;
}
console.log('--- 본문 ---');
console.log(best.replace(/\n{2,}/g,'\n').slice(0, 1600));
await b.close();
