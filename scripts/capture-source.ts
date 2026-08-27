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
/* --click "ARS 상담안내" — 눌러야 내용이 붙는 회사가 있다 (2026-08-26 푸본현대생명).
   레이어 HTML 이 처음엔 없고 클릭할 때 AJAX 로 받아온다. 그 URL 을 직접 열면 에러 페이지가 뜬다.
   공식 페이지에 버젓이 있는 내용을 "미공개"라고 쓰면 그게 거짓말이 된다. */
const clickTexts = args
  .map((a, i) => (a === '--click' ? args[i + 1] : null))
  .filter((x): x is string => Boolean(x));

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
      /* charset 을 안 내려주는 페이지가 있다 (2026-08-26 미래에셋생명).
         그러면 크롬이 windows-1252 로 읽어서 한글이 "ìƒë‹´ì‚¬" 로 깨진다.
         추출본이 깨지면 게이트가 "원문에 없다"고 판정해 회사를 통째로 버리게 된다.
         응답 헤더에도 meta 에도 charset 이 없으면 UTF-8 로 못박고 다시 연다. */
      const res = await page.goto(u, { waitUntil: 'domcontentloaded', timeout: 45000 });
      const ctype = String(res?.headers()['content-type'] ?? '');
      if (!/charset/i.test(ctype)) {
        const body = await page.content();
        if (!/<meta[^>]+charset/i.test(body)) {
          const raw = await (await page.context().request.get(u)).body();
          await page.setContent(
            `<meta charset="utf-8">` + raw.toString('utf8').replace(/<meta[^>]*>/i, ''),
            { waitUntil: 'domcontentloaded' },
          );
        }
      }
      await page.waitForTimeout(2500);

      for (const ct of clickTexts) {
        const hit = await page.evaluate((t) => {
          const el = Array.from(document.querySelectorAll('a,button,[role=button]'))
            .find((x) => (x.textContent || '').replace(/\s+/g, ' ').includes(t));
          if (!el) return false;
          (el as HTMLElement).click();
          return true;
        }, ct).catch(() => false);
        if (hit) await page.waitForTimeout(2000);
        else console.log(`   ⚠ --click "${ct}" — 그런 버튼이 없다`);
      }

      /* 표·아코디언이 늦게 그려지는 곳이 있어 한 번 끝까지 내렸다 올린다.
       *
       * 한 번에 맨 아래로 점프하면 중간의 lazy 블록이 안 그려지고 넘어간다 —
       * 웰컴저축은행 홈이 그랬다. 대표번호가 전부 푸터에 있는데 365자만 잡혀서
       * "추출본에 없는 번호" 로 반려됐다(2026-08-27). 같은 URL 인데 잡힐 때와 안 잡힐 때가 갈렸다.
       * 금융사 홈은 번호를 푸터에만 두는 곳이 많아서, 나눠 내려가며 기다린다. */
      await page.evaluate(async () => {
        const step = Math.max(400, Math.floor(window.innerHeight * 0.8));
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 220));
        }
        window.scrollTo(0, document.body.scrollHeight);
      }).catch(() => {});
      await page.waitForTimeout(1500);
      await page.evaluate(() => window.scrollTo(0, 0)).catch(() => {});
      await page.waitForTimeout(300);

      let text = await page.evaluate(() => document.body.innerText.replace(/\n{3,}/g, '\n\n').trim());

      /* 프레임 안에 본문을 넣는 회사가 많다 (2026-08-26 IBK투자·흥국·유화·케이프증권).
         top document 의 innerText 는 비어 있어서 "번호가 없다"고 판정하게 된다.
         프레임 주소를 직접 열어도 다시 프레임으로 감싸므로, 프레임 텍스트를 여기서 걷는다. */
      for (const fr of page.frames()) {
        if (fr === page.mainFrame()) continue;
        const ft = await fr.evaluate(() => document.body?.innerText ?? '').catch(() => '');
        const clean = String(ft).replace(/\n{3,}/g, '\n\n').trim();
        if (clean.length > 40 && !text.includes(clean.slice(0, 120))) {
          text += `\n\n----- 프레임 (${fr.url()}) -----\n${clean}`;
        }
      }

      /* 표를 따로 뜬다 (2026-08-26).
         innerText 는 rowspan 으로 묶인 셀을 빈칸으로 준다. 교보증권 상담시간이
         "평일 | 08:00 ~ 18:00" 표 안에 있었는데 추출본에는 안 잡혀서,
         있는 시간을 "공식 안내에 없다"고 판정하고 회사를 버렸다.
         고객센터 정보는 대부분 표에 있다 — 표를 놓치면 추출을 안 한 것과 같다. */
      const tables = await page.evaluate(() =>
        Array.from(document.querySelectorAll('table')).map((tb, i) => {
          const cap = (tb.querySelector('caption')?.textContent || '').replace(/\s+/g, ' ').trim();
          const rows = Array.from(tb.querySelectorAll('tr'))
            .map((tr) =>
              Array.from(tr.querySelectorAll('th,td'))
                .map((c) => (c.textContent || '').replace(/\s+/g, ' ').trim())
                .filter(Boolean)
                .join(' | '),
            )
            .filter(Boolean);
          return rows.length ? `[표 ${i + 1}${cap ? ' — ' + cap : ''}]\n` + rows.join('\n') : '';
        }).filter(Boolean).join('\n\n'),
      ).catch(() => '');
      /* 숨은 레이어를 따로 뜬다 (2026-08-26).
         ARS 안내를 클릭해야 열리는 레이어에 넣어 두는 회사가 많다(처브라이프 ARS 트리 전부).
         레이어는 HTML 에 이미 있는데 display:none 이라 innerText 가 통째로 뺀다.
         표와 같은 사고다 — 공식 페이지에 있는 내용을 "없다"고 판정하게 된다. */
      const layers = await page.evaluate(() => {
        /* 클래스 이름에 기대지 않는다 — 회사마다 layer/pop/dim/tree 로 제각각이다.
           "화면에서 감춰져 있고 글자가 들어 있는 가장 바깥 덩어리"만 고른다. */
        const hidden: Element[] = [];
        for (const el of Array.from(document.querySelectorAll('div,section,article,aside,dl,ul,table'))) {
          const st = getComputedStyle(el);
          if (st.display !== 'none' && st.visibility !== 'hidden') continue;
          const len = (el.textContent || '').trim().length;
          if (len < 40 || len > 8000) continue;
          if (hidden.some((h) => h.contains(el))) continue;   /* 바깥 덩어리를 이미 담았다 */
          hidden.push(el);
        }
        const shown = document.body.innerText.replace(/\s+/g, '');
        return hidden
          .map((el) => (el.textContent || '').replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim())
          .filter((t) => !shown.includes(t.replace(/\s+/g, '').slice(0, 120)))
          .filter((t, i, a) => a.indexOf(t) === i)
          .join('\n\n');
      }).catch(() => '');

      await page.screenshot({ path: shot, fullPage: true }).catch(async () => {
        await page.screenshot({ path: shot });   /* 너무 길면 보이는 화면만 */
      });

      parts.push(
        `\n===== [${i + 1}] ${u} =====\n` +
        `CAPTURED-BY: playwright (실브라우저)\n` +
        `SHOT: scripts/output/captures/${slug}-${i + 1}.png\n` +
        `CHARS: ${text.length}\n\n${text}\n` +
        (tables ? `\n----- 표 (innerText 가 못 읽는 자리) -----\n${tables}\n` : '') +
        (layers ? `\n----- 숨은 레이어 (클릭해야 열리는 자리) -----\n${layers}\n` : ''),
      );
      const warn = text.length < 1500 ? '  ⚠ 짧다 — 원래 짧은 페이지인지 캡처로 확인해라' : '';
      console.log(`✔ ${String(text.length).padStart(6)}자${tables ? ` + 표 ${tables.split('[표 ').length - 1}개` : ''} + 캡처  ${u}${warn}`);
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
