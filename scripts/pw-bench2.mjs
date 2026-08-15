/* 실전 방식 실측 — 직렬 + 텍스트·캡처 한 번에 (병렬 없이)
 *
 * 앞선 pw-bench.mjs 는 텍스트만 뽑고 병렬 이득이 1.6배에 그쳤다.
 * 여기서는 실제 글 쓸 때 하는 일 그대로 잰다:
 *   페이지 1회 열기 → 텍스트 추출 → 전체 캡처 → 검증(probe)
 * 병렬은 쓰지 않는다. 대신 실패하면 그 자리에서 1회 재시도.
 */
import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const OUT = '.playwright-mcp/bench2';
mkdirSync(OUT, { recursive: true });

const TARGETS = [
  { id: 'mohw',    name: '복지부 보도자료',      url: 'https://www.mohw.go.kr/board.es?mid=a10503010100&bid=0027&list_no=1491453&act=view', probe: '6.70' },
  { id: 'easylaw', name: '생활법령 소득환산율',  url: 'https://www.easylaw.go.kr/CSP/OnhunqueansInfoRetrieve.laf?onhunqnaAstSeq=97&onhunqueSeq=5740', probe: '6.26' },
  { id: 'law',     name: '시행령 제5조의2',      url: 'https://www.law.go.kr/법령/국민기초생활보장법시행령/제5조의2', probe: '100분의 30' },
  { id: 'bokjiro', name: '복지로 생계급여',      url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001132&wlfareInfoReldBztpCd=01', probe: '소득인정액' },
  { id: 'korail',  name: '코레일 추석 공지',     url: 'https://www.korail.com/ticket/guest/notice/25563', probe: '추석' },
];

async function grab(page, t) {
  await page.goto(t.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  await page.waitForTimeout(1500);
  let text = await page.evaluate(() => document.body?.innerText || '');
  for (const f of page.frames()) {
    try { const x = await f.evaluate(() => document.body?.innerText || ''); if (x.length > text.length) text = x; } catch {}
  }
  await page.screenshot({ path: `${OUT}/${t.id}.png`, fullPage: true });
  return text;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

console.log('── 직렬 + 텍스트·캡처 동시 (실전 방식) ' + '─'.repeat(20));
const t0 = Date.now();
let retries = 0, fails = 0;
for (const t of TARGETS) {
  const s = Date.now();
  let text = '';
  try { text = await grab(page, t); } catch (e) { text = ''; }
  let mark = text.includes(t.probe) ? '✅' : '';
  if (!mark) {                       // 검증 실패 → 그 자리에서 1회 재시도
    retries++;
    await page.waitForTimeout(1200);
    try { text = await grab(page, t); } catch {}
    mark = text.includes(t.probe) ? '🔁' : '❌';
    if (mark === '❌') fails++;
  }
  console.log(`  ${mark} ${String(Date.now() - s).padStart(6)}ms  ${String(text.length).padStart(7)}자  ${t.name}`);
}
const total = Date.now() - t0;
await browser.close();

console.log(`\n  총 ${(total / 1000).toFixed(1)}초 · 재시도 ${retries}회 · 최종 실패 ${fails}건`);
console.log(`  캡처 5장 저장: ${OUT}/`);
console.log(`\n  참고: 앞선 측정 — 직렬(텍스트만) 22.8초 / 5병렬 13.8초(실패 1건)`);
