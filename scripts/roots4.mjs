import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
try {
  await p.goto('https://www.rootsinfo.co.kr/info/home/', { waitUntil: 'load', timeout: 60000 });
  await p.waitForTimeout(6000);
  console.log('최종', p.url());
  for (const f of p.frames()) {
    let t = ''; try { t = await f.evaluate(() => document.body?.innerText || ''); } catch {}
    if (t.trim().length > 30) {
      console.log(`\n[${f.url().slice(0,70)}] ${t.length}자`);
      console.log(t.replace(/\n{2,}/g, '\n').slice(0, 1400));
    }
  }
  await p.screenshot({ path: '.playwright-mcp/roots-live.png', fullPage: true });
  console.log('\n캡처 저장 .playwright-mcp/roots-live.png');
} catch (e) { console.log('실패:', e.message.split('\n')[0]); }
await b.close();
