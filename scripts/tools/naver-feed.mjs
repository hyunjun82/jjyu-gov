/**
 * 네이버 모바일 홈판 노출 카드 수집 — 로그인 세션(scripts/cafe/.profile)으로 m.naver.com 을 열어 아래로 내리며 카드 글자를 모은다 (2026-10-12)
 *
 *   node scripts/tools/naver-feed.mjs [--scrolls=25] [--wait=1500]
 *
 * - 읽기 전용: 스크롤만 한다. 클릭·입력·저장을 하지 않는다. 비밀번호·인증 코드를 다루지 않는다.
 * - 결과: scripts/output/naver-feed-{날짜시각}.txt  (화면 글자 전체) + naver-feed-{날짜시각}.png (첫 화면 캡처)
 * - 홈판은 계정 관심사·시간에 따라 달라진다 — 한 번 본 것으로 단정하지 말고 시간대를 바꿔 여러 번 모은다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const num = (k, d) => Number((process.argv.find((a) => a.startsWith(`--${k}=`)) || '').split('=')[1]) || d;
const SCROLLS = num('scrolls', 25), WAIT = num('wait', 1500);
const tabArg = (process.argv.find((a) => a.startsWith('--tab=')) || '').replace('--tab=', ''); // 예: #DATA(경제) #LECTURE(지식) #NEWS
const tabName = (tabArg.replace(/[^A-Za-z]/g, '') || 'home').toLowerCase() + '-';
const stamp = new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 16).replace(/[-:T]/g, '');
const OUT = path.join(ROOT, 'scripts', 'output');
fs.mkdirSync(OUT, { recursive: true });

const ctx = await chromium.launchPersistentContext(path.join(ROOT, 'scripts', 'cafe', ((process.argv.find((a) => a.startsWith('--profile=')) || '').replace('--profile=', '') || '.profile')), {
  headless: false, locale: 'ko-KR', viewport: { width: 430, height: 900 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2,
  userAgent: 'Mozilla/5.0 (Linux; Android 13; SM-S918N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Mobile Safari/537.36',
});
const p = ctx.pages()[0] ?? await ctx.newPage();
if (process.argv.includes('--login')) { // 사장님이 이 창에서 직접 로그인("로그인 상태 유지" 체크) — 비밀번호·인증 코드는 다루지 않는다
  await p.goto('https://nid.naver.com/nidlogin.login', { waitUntil: 'domcontentloaded' }).catch(() => {});
  console.log('열린 창에서 네이버 로그인(로그인 상태 유지 체크)해 주세요 — 최대 8분 기다립니다');
  for (let i = 0; i < 240 && /nid.naver.com/.test(p.url()); i++) await p.waitForTimeout(2000);
}
await p.goto('https://m.naver.com/' + (process.argv.find((a) => a.startsWith('--tab=')) || '').replace('--tab=', ''), { waitUntil: 'domcontentloaded', timeout: 45000 }).catch(() => {});
await p.waitForTimeout(4000);
if (/nid\.naver\.com/.test(p.url())) { console.error('로그인이 풀려 있다 — 창에서 로그인 후 다시 실행'); await ctx.close(); process.exit(1); }
await p.screenshot({ path: path.join(OUT, `naver-feed-${tabName}${stamp}.png`) }).catch(() => {});
for (let i = 0; i < SCROLLS; i++) {
  await p.evaluate(() => window.scrollBy(0, Math.round(window.innerHeight * 0.9)));
  await p.waitForTimeout(WAIT);
}
const text = await p.evaluate(() => document.body.innerText);
fs.writeFileSync(path.join(OUT, `naver-feed-${tabName}${stamp}.txt`), `수집: ${stamp} KST\n주소: ${p.url()}\n\n${text}\n`);
console.log(`저장: scripts/output/naver-feed-${tabName}${stamp}.txt (${text.length}자)`);
await ctx.close();
