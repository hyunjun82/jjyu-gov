/**
 * 카페 글 썸네일 카드 만들기 — 1024×1024 정사각형 PNG (2026-09-30)
 *
 *   node scripts/cafe/thumb.mjs scripts/cafe/{slug}.md            → scripts/cafe/thumbs/{slug}.png
 *   node scripts/cafe/thumb.mjs scripts/cafe/{slug}.md --size=800  크기 지정(기본 1024)
 *   node scripts/cafe/thumb.mjs scripts/cafe/{slug}.md --template=이름  scripts/cafe/templates/thumb-이름.html 틀 사용(기본 default)
 * 디자인(색·글꼴·여백)은 templates/thumb-default.html 한 파일에서만 바꾼다. 글마다 바뀌는 건 문구 네 칸뿐이다.
 *
 * 글 파일의 `썸네일:` 줄을 읽는다:  썸네일: 큰 숫자 | 한 줄 제목 | 작은 문구(선택) | 출처(선택)
 *   예) 썸네일: 3년 → 2년 | 일시적 2주택 처분 기한 | 10월 1일 시행 · 8월 4일 이후 취득분 | 출처 재정경제부 2026.09.29
 * 사진·정부 로고·인물 얼굴은 쓰지 않는다(저작권·오인 방지). 글의 핵심 사실만 큰 글씨로 보여 준다.
 * 사장님이 임시등록 글에 이 이미지를 끌어다 넣는다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const files = args.filter((a) => !a.startsWith('--'));
const TEMPLATE = (args.find((a) => a.startsWith('--template=')) || '--template=default').slice(11);
const SIZE = Number((args.find((a) => a.startsWith('--size=')) || '--size=1024').slice(7)) || 1024;
if (!files.length) { console.error('사용: node scripts/cafe/thumb.mjs <글 파일> [--size=1024]'); process.exit(2); }

const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const OUTSUB = (args.find((a) => a.startsWith('--out=')) || '--out=').slice(6);
const outDir = path.join(HERE, 'thumbs', OUTSUB);
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
for (const f of files) {
  const raw = fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
  const line = (raw.match(/^썸네일:\s*(.+)$/m) || [])[1];
  if (!line) { console.error(`✗ ${path.basename(f)} — "썸네일: 큰 숫자 | 제목 | 작은 문구" 줄이 없다`); continue; }
  const [big, head, small = '', source = '', label = '핵심 정리'] = line.split('|').map((s) => s.trim());
  const bigLen = [...big].length;
  const bigSize = bigLen <= 6 ? 200 : bigLen <= 9 ? 150 : bigLen <= 13 ? 112 : 88;
  const tpl = fs.readFileSync(path.join(HERE, 'templates', `thumb-${TEMPLATE}.html`), 'utf8');
  const html = tpl
    .replaceAll('{{BIG_SIZE}}', String(bigSize))
    .replaceAll('{{LABEL}}', esc(label || '핵심 정리'))
    .replaceAll('{{BIG}}', esc(big))
    .replaceAll('{{HEAD}}', esc(head))
    .replaceAll('{{SMALL_BLOCK}}', small ? `<div class="small">${esc(small)}</div>` : '')
    .replaceAll('{{SOURCE_BLOCK}}', source ? `<div class="src">${esc(source)}</div>` : '');
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
  await page.setContent(html);
  await page.evaluate(() => document.fonts && document.fonts.ready);
  const out = path.join(outDir, path.basename(f, '.md') + (TEMPLATE === 'default' ? '' : `--${TEMPLATE}`) + '.png');
  await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
  await page.close();
  if (SIZE !== 1024) {
    const p2 = await browser.newPage({ viewport: { width: SIZE, height: SIZE } });
    await p2.setContent(`<body style="margin:0"><img src="file:///${out.replace(/\\/g, '/')}" width="${SIZE}" height="${SIZE}"></body>`);
    await p2.waitForLoadState('load');
    await p2.screenshot({ path: out, clip: { x: 0, y: 0, width: SIZE, height: SIZE } });
    await p2.close();
  }
  console.log(`✅ ${path.relative(process.cwd(), out)} (${SIZE}×${SIZE})`);
}
await browser.close();
