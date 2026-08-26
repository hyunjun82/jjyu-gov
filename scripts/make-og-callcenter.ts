/**
 * make-og-callcenter.ts — 고객센터 글의 공유 카드(og:image) 를 회사마다 하나씩 굽는다.
 *
 * 왜 (2026-08-26 사장님 지시 — 경쟁사보다 모든 면에서 앞서야 한다)
 *   number.epostphone.kr 은 og:image 를 1200x630 으로 걸어 둔다. 우리는 없었다.
 *   카톡·슬랙·트위터에 주소를 붙이면 저쪽은 카드가 뜨고 우리는 글자만 뜬다.
 *   같은 순위여도 눌리는 쪽이 갈린다.
 *
 *   저쪽은 사이트 공용 이미지 1장이다. 우리는 회사마다 굽는다 —
 *   카드에 그 회사 색과 대표번호가 박혀서, 공유된 걸 본 사람이 누르기 전에 번호를 본다.
 *
 * 왜 빌드 때 안 굽고 미리 구워 커밋하나
 *   한글 글자를 그리려면 폰트가 있어야 하는데 배포(리눅스)에는 한글 폰트가 없다.
 *   여기(윈도우)에서 굽고 결과 PNG 를 커밋한다. 배포는 파일만 내보낸다.
 *
 * 쓰는 법
 *   npx tsx scripts/make-og-callcenter.ts          전부 다시 굽는다
 *   npx tsx scripts/make-og-callcenter.ts kiwoom   한 곳만
 */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'public', 'og', 'call-center');
fs.mkdirSync(OUT, { recursive: true });

/* CI 색을 그대로 배경에 깔면 밝은 회사(KB 노랑)는 흰 글자가 묻는다.
   화면에서 쓰는 readable() 과 같은 생각 — 색상은 두고 읽히는 선까지 내린다. */
const mix = (hex: string, target: number, amt: number) => {
  const n = parseInt(hex.replace('#', ''), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => Math.round(v + (target - v) * amt));
  return '#' + ch.map((v) => v.toString(16).padStart(2, '0')).join('');
};
const relLum = (hex: string) => {
  const n = parseInt(hex.replace('#', ''), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const readable = (hex: string, ratio = 4.5) => {
  let out = hex;
  for (let i = 0; i < 14; i++) {
    if (1.05 / (relLum(out) + 0.05) >= ratio) break;
    out = mix(hex, 0, 0.07 * (i + 1));
  }
  return out;
};

const esc = (s: string) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const only = process.argv.slice(2);
const files = fs
  .readdirSync(path.join(ROOT, 'data', 'call-centers'))
  .filter((f) => f.endsWith('.json'))
  .filter((f) => !only.length || only.includes(f.replace('.json', '')));

let made = 0;
(async () => {
  for (const f of files) {
    const c = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'call-centers', f), 'utf8'));
    const base = readable(c.brandColor || '#1F4E79');
    const dark = mix(base, 0, 0.35);
    const light = mix(base, 255, 0.12);
    const hours = String(c.hours?.weekday || '').replace(/^[^0-9]*/, '').slice(0, 28);
    const kind = c.industry === 'securities' ? '증권사 고객센터' : '보험사 고객센터';

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${dark}"/>
      <stop offset="55%" stop-color="${base}"/>
      <stop offset="100%" stop-color="${light}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="0" y="0" width="1200" height="8" fill="rgba(255,255,255,.35)"/>
  <g font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" fill="#ffffff">
    <text x="80" y="132" font-size="30" font-weight="700" opacity=".82">${esc(kind)}</text>
    <text x="80" y="228" font-size="62" font-weight="800">${esc(c.name)} 고객센터</text>
    <text x="80" y="382" font-size="112" font-weight="800" letter-spacing="-2">${esc(c.main.tel)}</text>
    <text x="80" y="452" font-size="30" font-weight="600" opacity=".9">${esc(c.main.label)}${hours ? ' · ' + esc(hours) : ''}</text>
    <text x="80" y="556" font-size="27" font-weight="600" opacity=".78">업무별 번호 ${(c.numbers || []).length}개 · 상담원 연결 · ${esc(c.verifiedAt)} 확인</text>
  </g>
</svg>`;

    const file = path.join(OUT, `${c.slug}.png`);
    await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(file);
    made++;
    console.log(`  ${c.name.padEnd(14)} public/og/call-center/${c.slug}.png`);
  }
  console.log(`\n✅ 공유 카드 ${made}장`);
})();

/* 허브 카드 2장 — 목록 페이지가 공유될 때 "몇 곳이 들어 있는지"가 먼저 보여야 누른다 */
(async () => {
  const HUBS: { slug: string; word: string; ind: string; color: string }[] = [
    { slug: 'insurance-call-center', word: '보험사', ind: 'insurance', color: '#14395C' },
    { slug: 'securities-call-center', word: '증권사', ind: 'securities', color: '#1F4E79' },
  ];
  for (const h of HUBS) {
    const list = fs
      .readdirSync(path.join(ROOT, 'data', 'call-centers'))
      .map((f) => JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'call-centers', f), 'utf8')))
      .filter((c) => (c.industry || 'insurance') === h.ind);
    const names = list.slice(0, 8).map((c) => c.name).join(' · ');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#101828"/><stop offset="60%" stop-color="${h.color}"/><stop offset="100%" stop-color="#2A6099"/>
  </linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="0" y="0" width="1200" height="8" fill="rgba(255,255,255,.35)"/>
  <g font-family="Malgun Gothic, Apple SD Gothic Neo, sans-serif" fill="#ffffff">
    <text x="80" y="140" font-size="30" font-weight="700" opacity=".82">고객센터 전화번호 모음</text>
    <text x="80" y="248" font-size="74" font-weight="800">${h.word} 고객센터 ${list.length}곳</text>
    <text x="80" y="330" font-size="34" font-weight="600" opacity=".92">대표번호 · 상담시간 · 상담원 연결</text>
    <text x="80" y="470" font-size="27" font-weight="600" opacity=".72">${esc(names)}</text>
    <text x="80" y="556" font-size="26" font-weight="600" opacity=".7">공식 안내에서 확인한 번호만 싣습니다</text>
  </g>
</svg>`;
    await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(path.join(OUT, `_hub-${h.slug}.png`));
    console.log(`  [허브] ${h.word} ${list.length}곳 → public/og/call-center/_hub-${h.slug}.png`);
  }
})();
