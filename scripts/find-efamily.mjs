import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage();
await p.goto('https://efamily.scourt.go.kr', { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(2500);
const html = await p.content();
const out = new Set();
for (const m of html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]{0,60}?)<\/a>/g)) {
  const t = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  if (/발급|증명서|제적|열람/.test(t)) out.add(`${t.slice(0, 30)}  |  ${m[1]}`);
}
console.log([...out].slice(0, 18).join('\n'));
await b.close();
