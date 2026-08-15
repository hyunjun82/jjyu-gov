/* Playwright 직렬 vs 병렬 실측 — 속도 차이와 추출 결과가 같은지 대조
 *
 * 왜: "5개 동시에 열면 빨라지나, 품질은 그대로인가"를 추측 대신 재본다.
 * 대상은 오늘 실제로 쓴 1차 출처 5곳.
 *
 * 실행: node scripts/pw-bench.mjs
 */
import { chromium } from 'playwright';

const TARGETS = [
  { name: '복지부 보도자료(2027 중위소득)', url: 'https://www.mohw.go.kr/board.es?mid=a10503010100&bid=0027&list_no=1491453&act=view', probe: '6.70' },
  { name: '생활법령 재산 소득환산율',        url: 'https://www.easylaw.go.kr/CSP/OnhunqueansInfoRetrieve.laf?onhunqnaAstSeq=97&onhunqueSeq=5740', probe: '6.26' },
  { name: '법령 시행령 제5조의2',           url: 'https://www.law.go.kr/법령/국민기초생활보장법시행령/제5조의2', probe: '100분의 30' },
  { name: '복지로 생계급여',                url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001132&wlfareInfoReldBztpCd=01', probe: '소득인정액' },
  { name: '코레일 추석 공지',               url: 'https://www.korail.com/ticket/guest/notice/25563', probe: '추석' },
];

const TIMEOUT = 45_000;

/** 한 페이지에서 본문 텍스트를 뽑는다 — iframe 안까지 본다 */
async function extract(page, t) {
  await page.goto(t.url, { waitUntil: 'domcontentloaded', timeout: TIMEOUT });
  await page.waitForTimeout(1500);
  let text = await page.evaluate(() => document.body.innerText || '');
  // 본문이 iframe 안에 있는 사이트(law.go.kr) 보정
  for (const f of page.frames()) {
    try {
      const x = await f.evaluate(() => document.body?.innerText || '');
      if (x.length > text.length) text = x;
    } catch {}
  }
  return {
    len: text.length,
    hasProbe: text.includes(t.probe),      // 기대 문자열이 실제로 잡혔나
    head: text.replace(/\s+/g, ' ').slice(0, 60),
  };
}

async function runSerial(browser) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const out = [];
  const t0 = Date.now();
  for (const t of TARGETS) {
    const s = Date.now();
    try { out.push({ name: t.name, ...(await extract(page, t)), ms: Date.now() - s }); }
    catch (e) { out.push({ name: t.name, len: 0, hasProbe: false, head: '실패: ' + e.message.slice(0, 40), ms: Date.now() - s }); }
  }
  await page.close();
  return { total: Date.now() - t0, out };
}

async function runParallel(browser, limit) {
  const t0 = Date.now();
  const queue = [...TARGETS];
  const out = [];
  async function worker() {
    while (queue.length) {
      const t = queue.shift();
      const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
      const s = Date.now();
      try { out.push({ name: t.name, ...(await extract(page, t)), ms: Date.now() - s }); }
      catch (e) { out.push({ name: t.name, len: 0, hasProbe: false, head: '실패: ' + e.message.slice(0, 40), ms: Date.now() - s }); }
      await page.close();
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return { total: Date.now() - t0, out };
}

const browser = await chromium.launch();

console.log('── 직렬 (탭 1개, 하나씩) ' + '─'.repeat(30));
const A = await runSerial(browser);
for (const r of A.out) console.log(`  ${r.hasProbe ? '✅' : '❌'} ${String(r.ms).padStart(6)}ms  ${String(r.len).padStart(7)}자  ${r.name}`);
console.log(`  합계 ${(A.total / 1000).toFixed(1)}초\n`);

console.log('── 병렬 (동시 5개) ' + '─'.repeat(34));
const B = await runParallel(browser, 5);
for (const r of B.out) console.log(`  ${r.hasProbe ? '✅' : '❌'} ${String(r.ms).padStart(6)}ms  ${String(r.len).padStart(7)}자  ${r.name}`);
console.log(`  합계 ${(B.total / 1000).toFixed(1)}초\n`);

console.log('── 병렬 (동시 3개, 안전선) ' + '─'.repeat(26));
const C = await runParallel(browser, 3);
for (const r of C.out) console.log(`  ${r.hasProbe ? '✅' : '❌'} ${String(r.ms).padStart(6)}ms  ${String(r.len).padStart(7)}자  ${r.name}`);
console.log(`  합계 ${(C.total / 1000).toFixed(1)}초\n`);

// 추출 결과가 같은지 대조 — 품질 판정의 핵심
console.log('── 추출 결과 대조 (직렬 기준) ' + '─'.repeat(22));
const byName = (arr) => Object.fromEntries(arr.map((r) => [r.name, r]));
const b = byName(B.out), c = byName(C.out);
let diff = 0;
for (const r of A.out) {
  const p5 = b[r.name], p3 = c[r.name];
  const sameProbe = r.hasProbe === p5.hasProbe && r.hasProbe === p3.hasProbe;
  const gap5 = p5.len - r.len, gap3 = p3.len - r.len;
  const ok = sameProbe && Math.abs(gap5) < r.len * 0.02 && Math.abs(gap3) < r.len * 0.02;
  if (!ok) diff++;
  console.log(`  ${ok ? '동일' : '차이'}  ${r.name}`);
  console.log(`        직렬 ${r.len}자(${r.hasProbe ? '검출' : '누락'}) / 5병렬 ${p5.len}자(${p5.hasProbe ? '검출' : '누락'}) / 3병렬 ${p3.len}자(${p3.hasProbe ? '검출' : '누락'})`);
}
console.log(`\n  결론: 추출 불일치 ${diff}건 / 총 ${A.out.length}건`);
console.log(`  속도: 직렬 ${(A.total / 1000).toFixed(1)}초 → 5병렬 ${(B.total / 1000).toFixed(1)}초 (${(A.total / B.total).toFixed(1)}배) / 3병렬 ${(C.total / 1000).toFixed(1)}초 (${(A.total / C.total).toFixed(1)}배)`);

await browser.close();
