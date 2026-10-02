/**
 * gov 사이트 파비콘 후보 — 사이트 이름(gov.jjyu.co.kr, 정부지원금)에 맞는 글자 (2026-10-02)
 *
 *   node scripts/cafe/favicon-gov.mjs            → scripts/cafe/icons/gov/ 후보별 PNG + 비교.png
 *   node scripts/cafe/favicon-gov.mjs --apply g  → 고른 후보(gcap|g|jung|won)를 app/favicon.ico · icon.png · apple-icon.png 로 복사
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const OUT = path.join(HERE, 'icons', 'gov');
fs.mkdirSync(OUT, { recursive: true });
const NAVY = '#16254A', Y = '#FFD84D';
const applyIdx = process.argv.indexOf('--apply');
const APPLY = applyIdx > -1 ? process.argv[applyIdx + 1] : null;

// 글자 후보 — 글꼴은 Noto Sans KR 900. size 는 1024 기준 글자 크기, dy 는 세로 보정
const OPTIONS = {
  gcap: { label: 'G (gov, 대문자)', text: 'G', size: 820, dy: 0 },
  g: { label: 'g (gov)', text: 'g', size: 980, dy: -70 },
  jung: { label: '정 (정부)', text: '정', size: 700, dy: 0 },
  won: { label: '₩ (지원금)', text: '₩', size: 760, dy: 0 },
};
const html = (o, s) => `<html><head><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@900&display=swap" rel="stylesheet"><style>*{margin:0}body{width:${s}px;height:${s}px;background:${Y};display:flex;align-items:center;justify-content:center;overflow:hidden;font-family:'Noto Sans KR','Malgun Gothic',sans-serif;font-weight:900;color:${NAVY}}span{font-size:${(o.size * s) / 1024}px;line-height:1;transform:translateY(${(o.dy * s) / 1024}px)}</style></head><body><span>${o.text}</span></body></html>`;

const SIZES = [16, 32, 48, 96, 180, 192, 512];
const browser = await chromium.launch();
const png = {};
for (const [key, o] of Object.entries(OPTIONS)) {
  png[key] = {};
  fs.mkdirSync(path.join(OUT, key), { recursive: true });
  for (const s of SIZES) {
    const page = await browser.newPage({ viewport: { width: s, height: s } });
    await page.setContent(html(o, s), { waitUntil: 'networkidle' }).catch(() => {});
    await page.evaluate(() => document.fonts.ready);
    const file = path.join(OUT, key, `icon-${s}.png`);
    await page.screenshot({ path: file, clip: { x: 0, y: 0, width: s, height: s } });
    png[key][s] = fs.readFileSync(file);
    await page.close();
  }
}
const ico = (p, sizes) => {
  const head = Buffer.alloc(6); head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
  let offset = 6 + sizes.length * 16;
  const entries = sizes.map((s) => { const e = Buffer.alloc(16); e.writeUInt8(s, 0); e.writeUInt8(s, 1); e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6); e.writeUInt32LE(p[s].length, 8); e.writeUInt32LE(offset, 12); offset += p[s].length; return e; });
  return Buffer.concat([head, ...entries, ...sizes.map((s) => p[s])]);
};
for (const key of Object.keys(OPTIONS)) fs.writeFileSync(path.join(OUT, key, 'favicon.ico'), ico(png[key], [16, 32, 48]));

// 비교 한 장 — 후보별: 16·32·48(원형)·96(원형) + 검색 결과 모양
const u = (k, s) => 'file:///' + path.join(OUT, k, `icon-${s}.png`).split(path.sep).join('/');
const rows = Object.entries(OPTIONS).map(([k, o]) => `<div style="display:flex;align-items:center;gap:36px;padding:14px 0;border-bottom:1px solid #e3e6ec"><div style="width:130px;font:700 22px 'Malgun Gothic'">${o.label}</div><img src="${u(k, 16)}" width="16"><img src="${u(k, 32)}" width="32"><img src="${u(k, 48)}" width="48" style="border-radius:24px"><img src="${u(k, 96)}" width="96" style="border-radius:48px"><div style="display:flex;align-items:center;gap:10px;font:500 24px Arial"><img src="${u(k, 32)}" width="26" style="border-radius:13px"> gov.jjyu.co.kr <span style="color:#777;font-size:19px">› policy › …</span></div></div>`).join('');
const page = await browser.newPage({ viewport: { width: 980, height: 440 } });
const tmp = path.join(OUT, '_sheet.html');
fs.writeFileSync(tmp, `<html><body style="margin:0;background:#fff;padding:20px 30px">${rows}</body></html>`);
await page.goto('file:///' + tmp.split(path.sep).join('/'), { waitUntil: 'load' });
await page.screenshot({ path: path.join(OUT, '비교.png'), clip: { x: 0, y: 0, width: 980, height: 440 } });
fs.unlinkSync(tmp);
await browser.close();
console.log('✓ icons/gov/ (후보 g · jung · won, 비교.png)');

if (APPLY) {
  if (!OPTIONS[APPLY]) throw new Error(`후보는 ${Object.keys(OPTIONS).join('|')} 중 하나`);
  const d = path.join(OUT, APPLY);
  fs.copyFileSync(path.join(d, 'favicon.ico'), path.join(ROOT, 'app', 'favicon.ico'));
  fs.copyFileSync(path.join(d, 'icon-192.png'), path.join(ROOT, 'app', 'icon.png'));
  fs.copyFileSync(path.join(d, 'icon-180.png'), path.join(ROOT, 'app', 'apple-icon.png'));
  console.log(`✓ '${APPLY}' → app/favicon.ico · icon.png · apple-icon.png (커밋·푸시는 하지 않았다)`);
}
