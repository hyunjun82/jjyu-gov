import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage();
await p.goto('https://efamily.scourt.go.kr', { waitUntil: 'domcontentloaded', timeout: 30000 });
await p.waitForTimeout(2000);
try {
  await p.getByRole('link', { name: '제적등본', exact: true }).first().click({ timeout: 8000 });
  await p.waitForTimeout(3500);
  console.log('제적등본 클릭 후 URL:', p.url());
  console.log('제목:', await p.title());
} catch (e) { console.log('클릭 실패:', e.message.split('\n')[0].slice(0,70)); }
await b.close();
