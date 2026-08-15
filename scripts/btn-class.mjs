import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage();
await p.goto('https://gov.jjyu.co.kr/policy/roots-info-site/', { waitUntil: 'domcontentloaded', timeout: 40000 });
await p.waitForTimeout(3500);
const html = await p.content();
for (const m of html.matchAll(/<a\b([^>]*)>([\s\S]{0,90}?)<\/a>/g)) {
  const attrs = m[1], txt = m[2].replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();
  if (!/rootsinfo\.co\.kr\/info\/home|efamily/.test(attrs)) continue;
  const cls = attrs.match(/class="([^"]*)"/)?.[1] || '(클래스 없음)';
  console.log(`[${cls}]  ${txt.slice(0,26)}`);
}
await b.close();
