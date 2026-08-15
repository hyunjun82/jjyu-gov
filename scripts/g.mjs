import { chromium } from 'playwright';
const q = process.argv[2];
const b = await chromium.launch();
const p = await b.newPage();
await p.goto('https://www.google.com/search?q=' + encodeURIComponent(q), { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(1500);
const html = await p.content();
const seen = new Set();
for (const m of html.matchAll(/<a[^>]+href="(https?:\/\/[^"]+)"[^>]*>[\s\S]{0,300}?<h3[^>]*>([\s\S]{0,90}?)<\/h3>/g)) {
  const t = m[2].replace(/<[^>]+>/g, '').trim();
  const u = m[1];
  if (/google\./.test(u) || seen.has(u)) continue;
  seen.add(u);
  console.log(`${t.slice(0, 52)}\n   ${u}`);
  if (seen.size >= 6) break;
}
await b.close();
