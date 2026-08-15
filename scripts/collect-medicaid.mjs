import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage();
// 복지부 보도자료: 2027년 기준 중위소득 + 급여별 선정기준 (제80차 중생보위)
await p.goto('https://www.mohw.go.kr/board.es?mid=a10503010100&bid=0027&list_no=1491453&act=view', { waitUntil: 'domcontentloaded', timeout: 40000 });
await p.waitForTimeout(2000);
const html = await p.content();
const text = html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/\s+/g,' ');
const i = text.indexOf('의료급여');
console.log('=== 의료급여 언급 구간 ===');
console.log(text.slice(Math.max(0,i-300), i+1500));
await b.close();
