import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage();
await p.goto('https://gov.jjyu.co.kr/policy/roots-info-site/', { waitUntil: 'domcontentloaded', timeout: 40000 });
await p.waitForTimeout(3500);
const html = await p.content();
// href 기준으로 전부 센다
const links = [...html.matchAll(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]{0,120}?)<\/a>/g)]
  .map(m => ({ href: m[1], txt: m[2].replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim() }))
  .filter(l => /rootsinfo|efamily|gov\.kr/.test(l.href));
console.log('외부 링크', links.length, '개');
for (const l of links) console.log(` · ${l.txt.slice(0,30).padEnd(32)} → ${l.href}`);
console.log('\nrootsinfo 등장 횟수:', (html.match(/rootsinfo\.co\.kr/g)||[]).length);
console.log('info/home 등장 횟수:', (html.match(/info\/home/g)||[]).length);
await b.close();
