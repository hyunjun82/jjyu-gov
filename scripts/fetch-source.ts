/**
 * 출처 URL 하나를 열어 본문 텍스트를 저장한다. 이게 있어야 대조가 된다.
 *
 *   npx tsx scripts/fetch-source.ts https://...            # 저장
 *   npx tsx scripts/fetch-source.ts https://... --show     # 저장 + 앞부분 출력
 *
 * 저장 위치: scripts/output/sources/{host+path}.txt
 * 머리에 URL·받은 날짜·글자수를 남긴다. 글자수가 비정상적으로 짧으면(아코디언·JS 로딩)
 * 그 자리에서 알아채라고 적어둔다 — 2026-08-23 손보협회 FAQ 가 907자였다.
 */
import fs from 'fs';
import path from 'path';

export function snapName(u: string): string {
  return u.replace(/^https?:\/\//, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 120) + '.txt';
}

function toText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|tr|h[1-6]|td|th)>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

async function one(url: string) {
  const dir = path.join('scripts', 'output', 'sources');
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, snapName(url));
  let text = '';
  try {
    const r = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 (gov-jjyu source check)' }, redirect: 'follow' });
    if (!r.ok) { console.log(`✖ HTTP ${r.status}  ${url}`); return false; }
    /* 한글 보험사 사이트는 아직 EUC-KR(cp949) 이 많다. r.text() 는 UTF-8 로 읽어
       글자가 깨지고, 깨진 채로 저장하면 ARS 문구 대조가 전부 어긋난다.
       헤더나 meta 의 charset 을 보고 맞는 코드로 다시 읽는다. */
    const buf = Buffer.from(await r.arrayBuffer());
    const ctype = String(r.headers.get('content-type') ?? '').toLowerCase();
    let charset = (ctype.match(/charset=([\w-]+)/) ?? [])[1] ?? '';
    if (!charset) {
      const head = buf.subarray(0, 4096).toString('latin1').toLowerCase();
      charset = (head.match(/charset=["']?([\w-]+)/) ?? [])[1] ?? 'utf-8';
    }
    const isKr = /euc-?kr|ks_c_5601|cp949|windows-949/.test(charset);
    text = toText(new TextDecoder(isKr ? 'euc-kr' : 'utf-8').decode(buf));
  } catch (e: any) {
    console.log(`✖ ${String(e?.message).slice(0, 60)}  ${url}`);
    return false;
  }
  const head = ['URL: ' + url, 'RECEIVED: ' + new Date().toISOString().slice(0, 10), 'CHARS: ' + text.length, ''].join('\n');
  fs.writeFileSync(file, head + text, 'utf8');
  const warn = text.length < 1500 ? '  ⚠ 짧다 — 아코디언·JS 로딩 의심, Playwright 로 확인해라' : '';
  console.log('✔ ' + text.length + '자  ' + url + warn);
  return true;
}

/* write.ts 가 snapName 을 import 한다 — 직접 실행할 때만 돈다.
   가드가 없으면 import 만 해도 "사용법" 을 찍고 exit(2) 로 죽는다. */
const directRun = require.main === module;

(async () => {
  if (!directRun) return;
  const urls = process.argv.slice(2).filter((a) => /^https?:\/\//.test(a));
  if (!urls.length) { console.error('사용법: npx tsx scripts/fetch-source.ts <URL> [URL...]'); process.exit(2); }
  let ok = 0;
  for (const u of urls) if (await one(u)) ok++;
  console.log('\n받음 ' + ok + ' / 실패 ' + (urls.length - ok));
})();
