import { chromium } from 'playwright';
const URLS = ['https://efamily.scourt.go.kr', 'https://www.gov.kr', 'http://www.rootsinfo.co.kr'];
const b = await chromium.launch();
for (const u of URLS) {
  const p = await b.newPage();
  try {
    const r = await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 25000 });
    await p.waitForTimeout(1500);
    const t = await p.evaluate(() => document.body?.innerText || '');
    const flat = t.replace(/\s+/g, ' ');
    console.log(`\n${u}`);
    console.log(`  상태 ${r?.status()} · 최종 ${p.url()}`);
    console.log(`  본문 ${t.length}자 · 제목 "${await p.title()}"`);
    console.log(`  제적 ${flat.includes('제적') ? 'O' : 'X'} / 가족관계증명 ${flat.includes('가족관계증명') ? 'O' : 'X'} / 로그인·인증 ${/로그인|인증서|간편인증/.test(flat) ? 'O' : 'X'}`);
    console.log(`  머리 "${flat.slice(0, 120)}"`);
  } catch (e) {
    console.log(`\n${u}\n  실패: ${e.message.split('\n')[0].slice(0, 80)}`);
  }
  await p.close();
}
await b.close();
