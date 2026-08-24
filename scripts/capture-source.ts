/**
 * capture-source.ts — 1차 출처를 실브라우저로 열어 텍스트와 화면을 같이 남긴다.
 *
 * 왜 만들었나 (2026-08-24 사장님 지적)
 *   "원래 플레이라이트 텍스트 추출 이미지 추출 해서 글 작성 후
 *    검증 텍스트추출 이미지 json 대조인데"
 *   맞다. 3단계는 텍스트 + 이미지 둘 다인데 나는 텍스트만 떠 왔다.
 *   그래서 하루에 같은 사고가 두 번 났다 —
 *     · 담보 12종 패키지를 하나손보라고 썼는데 실제로는 AIG손보 (6건)
 *     · 한방병원을 "회사마다 반대"라고 썼는데 실제로는 담보 구간으로 갈림 (1건)
 *   둘 다 표를 파이프 텍스트로 파싱하면서 어느 열이 어느 회사인지 내가 추정한 것이다.
 *   화면을 봤으면 안 났다. 숫자는 원문에 다 있어서 대조 게이트도 못 잡는다.
 *
 * 사용
 *   npx tsx scripts/capture-source.ts {slug} <URL> [URL...]
 *
 * 남기는 것 (글 하나당)
 *   scripts/output/source-{slug}.txt          텍스트 (URL·받은날짜·글자수 머리에)
 *   scripts/output/captures/{slug}-1.png …    같은 화면의 전체 캡처
 * fetch 로 받은 껍데기와 구분되도록 CAPTURED-BY: playwright 를 찍는다.
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const slug = args[0];
const urls = args.slice(1).filter((a) => /^https?:\/\//.test(a));

if (!slug || !urls.length) {
  console.error('사용: npx tsx scripts/capture-source.ts {slug} <URL> [URL...]');
  process.exit(2);
}

const OUT = path.join('scripts', 'output');
const SHOTS = path.join(OUT, 'captures');
fs.mkdirSync(SHOTS, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  const parts: string[] = [];
  let ok = 0;

  for (let i = 0; i < urls.length; i++) {
    const u = urls[i];
    const shot = path.join(SHOTS, `${slug}-${i + 1}.png`);
    try {
      await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(2500);
      /* 표·아코디언이 늦게 그려지는 곳이 있어 한 번 끝까지 내렸다 올린다 */
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight)).catch(() => {});
      await page.waitForTimeout(1200);
      await page.evaluate(() => window.scrollTo(0, 0)).catch(() => {});

      const text = await page.evaluate(() => document.body.innerText.replace(/\n{3,}/g, '\n\n').trim());
      await page.screenshot({ path: shot, fullPage: true }).catch(async () => {
        await page.screenshot({ path: shot });   /* 너무 길면 보이는 화면만 */
      });

      parts.push(
        `\n===== [${i + 1}] ${u} =====\n` +
        `CAPTURED-BY: playwright (실브라우저)\n` +
        `SHOT: scripts/output/captures/${slug}-${i + 1}.png\n` +
        `CHARS: ${text.length}\n\n${text}\n`,
      );
      const warn = text.length < 1500 ? '  ⚠ 짧다 — 원래 짧은 페이지인지 캡처로 확인해라' : '';
      console.log(`✔ ${String(text.length).padStart(6)}자 + 캡처  ${u}${warn}`);
      ok++;
    } catch (e: any) {
      console.log(`✖ ${String(e?.message).slice(0, 70)}  ${u}`);
    }
  }

  await browser.close();

  if (parts.length) {
    const file = path.join(OUT, `source-${slug}.txt`);
    const head =
      `SLUG: ${slug}\nRECEIVED: ${new Date().toISOString().slice(0, 10)}\n` +
      `CAPTURED-BY: playwright (실브라우저 — 텍스트 + 화면 캡처)\n` +
      `SHOTS: ${parts.length}장 (scripts/output/captures/${slug}-*.png)\n`;
    /* 이미 있는 추출본을 덮지 않는다 (2026-08-24).
       한 번 덮었더니 앞 세션이 뜬 공시 표 35KB 와 PDF 전문이 날아가
       원문 대조가 통째로 깨졌다. 새로 뜬 것을 위에 얹고 옛것은 아래에 남긴다. */
    const before = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
    const keep = before
      ? `\n\n===== [앞서 확보한 추출본 — 지우지 않고 남긴다] =====\n${before}`
      : '';
    fs.writeFileSync(file, head + parts.join('\n') + keep, 'utf8');
    if (before) console.log('  ↳ 기존 추출본 ' + before.length + '자는 아래에 그대로 남겼다');
  }

  console.log(`\n받음 ${ok} / ${urls.length}`);
  console.log(`텍스트: scripts/output/source-${slug}.txt`);
  console.log(`캡처  : scripts/output/captures/${slug}-*.png`);
  console.log('\n⚠ 표에서 숫자를 옮길 거면 캡처를 Read 로 열어 어느 행이 어느 회사인지 눈으로 확인해라.');
  console.log('   텍스트만 보고 열을 추정하면 회사가 바뀐다 (2026-08-24 같은 사고 7건).');
  process.exit(ok ? 0 : 1);
})();
