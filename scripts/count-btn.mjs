import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage();
await p.goto('https://gov.jjyu.co.kr/policy/roots-info-site/', { waitUntil: 'domcontentloaded', timeout: 40000 });
await p.waitForTimeout(3000);
const html = await p.content();
const btns = [...html.matchAll(/<a[^>]+class="[^"]*(btn-cta|qa-inline-cta|sticky-cta-btn)[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]{0,80}?)<\/a>/g)]
  .map(m => `${m[1].padEnd(15)} ${m[3].replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim().slice(0,28)}  →  ${m[2]}`);
console.log('버튼', btns.length, '개');
console.log(btns.join('\n'));
console.log('\n배포 반영 확인:', html.includes('info/home') ? '새 버전(사이트 바로가기 있음)' : '옛 버전(아직 반영 안 됨)');
await b.close();
