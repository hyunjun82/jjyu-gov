import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage();
const res = await p.goto('http://www.rootsinfo.co.kr/', { waitUntil: 'domcontentloaded', timeout: 25000 });
const html = await p.content();
console.log('상태', res.status(), '· HTML', html.length, '자');
console.log('frameset?', /<frameset/i.test(html), '· iframe?', /<iframe/i.test(html), '· meta refresh?', /http-equiv=["']?refresh/i.test(html));
console.log('--- HTML 앞부분 ---');
console.log(html.replace(/\s+/g, ' ').slice(0, 700));
await p.waitForTimeout(2500);
console.log('--- 프레임 목록 ---');
for (const f of p.frames()) {
  let t = '';
  try { t = await f.evaluate(() => document.body?.innerText || ''); } catch {}
  console.log(` · ${f.url().slice(0, 70)} → ${t.length}자 ${t.replace(/\s+/g,' ').slice(0,60)}`);
}
await b.close();
