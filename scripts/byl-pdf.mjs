import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage();
await p.goto(process.argv[2], { waitUntil: 'domcontentloaded', timeout: 40000 });
await p.waitForTimeout(2500);
const html = await p.content();
const pdf = html.match(/id="pdfFlSeq"[^>]*value="(\d+)"/)?.[1];
console.log('pdfFlSeq =', pdf);
if (pdf) {
  await p.goto('https://www.law.go.kr/LSW/flDownload.do?flSeq=' + pdf, { timeout: 40000 }).catch(()=>{});
  await p.waitForTimeout(4000);
}
await b.close();
