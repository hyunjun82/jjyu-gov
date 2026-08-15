/* rootsinfo.co.kr 접속 실측 — 초안의 https/http 주장 검증
 * 주소별로 최종 도착 URL, 상태코드, 리다이렉트 여부, 본문 길이를 본다.
 */
import { chromium } from 'playwright';

const URLS = [
  'https://www.rootsinfo.co.kr',
  'https://rootsinfo.co.kr',
  'http://www.rootsinfo.co.kr',
  'http://rootsinfo.co.kr',
  'https://m.rootsinfo.co.kr',
];

const browser = await chromium.launch();
for (const u of URLS) {
  const ctx = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await ctx.newPage();
  const chain = [];
  page.on('response', (r) => {
    const s = r.status();
    if (s >= 300 && s < 400) chain.push(`${s} → ${r.headers()['location'] || '?'}`);
  });
  const t0 = Date.now();
  try {
    const res = await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 20000 });
    const text = await page.evaluate(() => document.body?.innerText || '');
    console.log(`\n${u}`);
    console.log(`  상태 ${res?.status() ?? '-'} · 최종 ${page.url()}`);
    console.log(`  본문 ${text.length}자 · ${(Date.now() - t0)}ms`);
    if (chain.length) console.log(`  리다이렉트 ${chain.join(' / ')}`);
    if (text.length) console.log(`  머리 "${text.replace(/\s+/g, ' ').slice(0, 70)}"`);
  } catch (e) {
    console.log(`\n${u}`);
    console.log(`  실패 (${Date.now() - t0}ms): ${e.message.split('\n')[0].slice(0, 90)}`);
  }
  await ctx.close();
}
await browser.close();
