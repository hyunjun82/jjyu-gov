/**
 * ① 수집 — 모델이 아니라 코드가 원문을 뜬다 (2026-09-23 새 파이프라인)
 *
 *   node scripts/gov/collect.mjs <slug> <url> [url...]
 *
 * URL 마다 scripts/output/gov/<slug>/ 에
 *   src-N.txt       페이지 전체 텍스트 (메뉴가 섞여도 된다 — 인용 대조용 원문이라 빠지는 것보다 낫다)
 *                   표는 코드가 행·열 그대로 떠서 "| 칸 | 칸 |" 줄로 덧붙인다
 *   img-N-K.png     본문 이미지(폭 400 이상, 사진 크레딧 ⓒ 제외)를 2배 해상도로 그 이미지만 잘라 찍는다
 *                   — 페이지 통째 캡처는 축소돼 작은 글자가 뭉개진다
 *   sources.json    [{ n, url, finalUrl, title, file, chars, tables, images: [{file, alt}] }]
 */
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const [slug, ...urls] = process.argv.slice(2);
if (!slug || !urls.length) {
  console.error('사용: node scripts/gov/collect.mjs <slug> <url> [url...]');
  process.exit(2);
}
const DIR = path.join('scripts', 'output', 'gov', slug);
fs.mkdirSync(DIR, { recursive: true });

/** PDF → 텍스트 (PDF.js). 브라우저는 PDF 주소를 화면에 띄우지 않고 내려받아 버려 0자가 된다 (2026-09-23 시험) */
async function pdfText(buf) {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const root = path.resolve('node_modules/pdfjs-dist').replace(/\\/g, '/');
  const doc = await pdfjs.getDocument({ data: new Uint8Array(buf), cMapUrl: `${root}/cmaps/`, cMapPacked: true,
    standardFontDataUrl: `${root}/standard_fonts/`, isEvalSupported: false, useSystemFonts: true }).promise;
  let text = '';
  for (let p = 1; p <= doc.numPages; p++) {
    const items = (await (await doc.getPage(p)).getTextContent()).items;
    let lastY = null, line = '';
    for (const it of items) {
      const y = it.transform?.[5];
      if (lastY !== null && Math.abs(y - lastY) > 2) { text += `${line}\n`; line = ''; }
      line += it.str; lastY = y;
    }
    text += `${line}\n\n`;
  }
  return { text: text.replace(/[ \t]+/g, ' ').trim(), pages: doc.numPages };
}

/** 페이지·프레임 공통 추출기 — 법령(law.go.kr)은 본문이 iframe 안에 있어 메인 페이지만 보면 0자다 (2026-09-23 시험) */
const EXTRACT = () => {
  const clean = (s) => (s || '').replace(/[ \t ]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
  const tables = [...document.querySelectorAll('table')].map((t) => ({
    caption: clean(t.querySelector('caption')?.innerText),
    rows: [...t.rows].map((r) => [...r.cells].map((c) => clean(c.innerText))),
  })).filter((t) => t.rows.length);
  const imgs = [...document.querySelectorAll('img')]
    .map((im, k) => ({ k, w: im.naturalWidth, alt: clean(im.alt), linked: Boolean(im.closest('a')) }))
    // 링크 걸린 이미지는 관련 기사 썸네일이다 — 본문 정보가 아니다
    .filter((x) => x.w >= 400 && !x.linked && !/ⓒ|©/.test(x.alt));
  // 행동 링크 — 버튼 목적지 후보. 글자와 주소를 같이 남겨야 "환급신청 바로가기"가 어디로 가는지 안다
  const links = [...document.querySelectorAll('a[href^="http"]')]
    .map((a) => ({ t: clean(a.innerText || a.title || a.querySelector('img')?.alt), h: a.href }))
    .filter((l) => l.t && /바로가기|신청|등록|발급|자세히|조회|안내/.test(l.t) && !/login|logout|facebook|twitter|kakao|band|instagram|youtube/i.test(l.h));
  // 숨은 탭 — body.innerText 는 display:none 을 건너뛴다. 예방접종도우미 독감 안내는 어르신·어린이·임신부가
  // 탭이라 어린이 2회 기준·임신부 안전성이 추출본에 0자였다 (2026-09-24). 잠깐 펼쳐 읽고 되돌린다.
  // 메뉴·팝업은 뺀다: nav/header/footer 안이거나 글자의 절반 이상이 링크면 탭 본문이 아니다
  const hidden = [...document.querySelectorAll('body *')].filter((el) => {
    if (el.closest('nav, header, footer, script, style, noscript, template')) return false;
    if (getComputedStyle(el).display !== 'none') return false;
    const tx = (el.textContent || '').trim();
    if (tx.length < 150) return false;
    const linkTx = [...el.querySelectorAll('a')].reduce((s, a) => s + (a.textContent || '').trim().length, 0);
    return linkTx / tx.length < 0.5;
  });
  const hiddenText = hidden.filter((el) => !hidden.some((o) => o !== el && o.contains(el))).map((el) => {
    const prev = el.style.display; el.style.display = 'block';
    const t = clean(el.innerText); el.style.display = prev;
    return t;
  }).filter(Boolean);
  const text = clean(document.body?.innerText) + (hiddenText.length ? `\n\n===== 숨은 탭(펼쳐 읽음) =====\n${hiddenText.join('\n\n')}` : '');
  return { title: document.title, text, tables, imgs, links };
};

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 2, viewport: { width: 1280, height: 900 }, locale: 'ko-KR' });
const out = [];

for (const [i, url] of urls.entries()) {
  const n = i + 1;
  // PDF 먼저 — 주소가 PDF 를 내려주면 화면 대신 PDF.js 로 읽는다
  try {
    const r = await ctx.request.get(url, { timeout: 45000 });
    const body = await r.body();
    if (body.subarray(0, 5).toString() === '%PDF-') {
      const { text, pages } = await pdfText(body);
      const file = `src-${n}.txt`;
      fs.writeFileSync(path.join(DIR, file), `URL: ${url}\n최종 URL: ${url}\n제목: PDF ${pages}쪽\n수집: ${new Date().toISOString()}\n\n${text}\n`);
      out.push({ n, url, finalUrl: url, title: `PDF ${pages}쪽`, file, chars: text.length, tables: 0, images: [], primary: true, pdf: true });
      console.log(`✓ ${n} PDF ${pages}쪽 — ${text.length}자`);
      continue;
    }
  } catch { /* 요청이 막히면 브라우저로 연다 */ }
  const page = await ctx.newPage();
  page.on('dialog', (d) => d.accept().catch(() => {}));
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => page.waitForLoadState('domcontentloaded'));
    // 지연 로딩 이미지를 깨우려고 끝까지 내렸다 올린다
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(800);

    const data = await page.evaluate(EXTRACT);
    // 프레임 안 본문(법령 등)도 떠서 붙인다 — 이미지는 메인 페이지 것만 찍는다
    for (const fr of page.frames().filter((f) => f !== page.mainFrame())) {
      const fd = await fr.evaluate(EXTRACT).catch(() => null);
      if (!fd?.text || fd.text.length < 200) continue;
      data.text += `\n\n===== 프레임: ${fr.url()} =====\n${fd.text}`;
      data.tables.push(...fd.tables);
      data.links.push(...fd.links);
    }

    const tableLines = data.tables.map((t, ti) =>
      [`\n===== 표 ${ti + 1}${t.caption ? ` — ${t.caption}` : ''} (코드가 뜬 행·열) =====`,
        ...t.rows.map((r) => `| ${r.join(' | ')} |`)].join('\n'));
    const linkLines = data.links.length ? ['\n===== 행동 링크 (글자 → 주소) =====', ...[...new Map(data.links.map((l) => [l.h, l])).values()].map((l) => `${l.t} → ${l.h}`)].join('\n') : '';
    const file = `src-${n}.txt`;
    fs.writeFileSync(path.join(DIR, file),
      `URL: ${url}\n최종 URL: ${page.url()}\n제목: ${data.title}\n수집: ${new Date().toISOString()}\n\n${data.text}\n${tableLines.join('\n')}\n${linkLines}\n`);

    const images = [];
    const handles = await page.$$('img');
    for (const im of data.imgs) {
      const f = `img-${n}-${images.length + 1}.png`;
      try {
        await handles[im.k].scrollIntoViewIfNeeded();
        await handles[im.k].screenshot({ path: path.join(DIR, f) });
        images.push({ file: f, alt: im.alt });
      } catch { /* 화면 밖·숨김 이미지는 건너뛴다 */ }
    }
    // 시민기자·블로그 글은 1차 출처가 아니다 (CLAUDE.md 절대 규칙 1) — 바이라인으로 가려 표시한다
    const byline = data.text.match(/시민기자 [가-힣]{2,4}\s*\n\s*발행일/)?.[0]?.split('\n')[0]
      || (/blog\.naver\.com|tistory\.com|brunch\.co\.kr/.test(page.url()) ? '블로그' : '');
    const primary = !byline;
    out.push({ n, url, finalUrl: page.url(), title: data.title, file, chars: data.text.length, tables: data.tables.length, images, primary, ...(byline ? { byline } : {}) });
    console.log(`✓ ${n} ${data.title.slice(0, 50)} — ${data.text.length}자 · 표 ${data.tables.length} · 이미지 ${images.length}${primary ? '' : ` · ⛔ 1차 출처 아님(${byline})`}`);
  } catch (e) {
    out.push({ n, url, error: e.message.slice(0, 200) });
    console.log(`✗ ${n} ${url} — ${e.message.slice(0, 120)}`);
  } finally {
    await page.close();
  }
}
await browser.close();
fs.writeFileSync(path.join(DIR, 'sources.json'), JSON.stringify(out, null, 2));
console.log(`→ ${DIR}/sources.json`);
