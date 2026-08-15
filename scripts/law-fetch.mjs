import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage();
await p.goto(process.argv[2], { waitUntil: 'domcontentloaded', timeout: 40000 });
await p.waitForTimeout(3500);
let best = '';
for (const f of p.frames()) {
  try { const t = await f.evaluate(() => document.body?.innerText || ''); if (t.length > best.length) best = t; } catch {}
}
const key = process.argv[3] || '본인부담';
const i = best.indexOf(key);
console.log('총', best.length, '자 · 기준어 위치', i);
console.log(i >= 0 ? best.slice(Math.max(0, i - 400), i + 2000).replace(/\n{2,}/g, '\n') : best.slice(0, 1200));
await b.close();
