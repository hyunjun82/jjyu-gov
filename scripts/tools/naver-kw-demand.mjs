/**
 * 네이버 자동완성으로 키워드 수요 가늠 — naver-kw-check 결과의 키워드마다 자동완성 후보 수와 키워드 자체 포함 여부를 모은다 (2026-10-12)
 *   node scripts/tools/naver-kw-demand.mjs
 */
import fs from 'node:fs';
const f = fs.readdirSync('scripts/output').filter((x) => x.startsWith('naver-kw-check-')).sort().pop();
const res = JSON.parse(fs.readFileSync('scripts/output/' + f, 'utf8'));
for (const [slug, o] of Object.entries(res)) {
  const r = await fetch(`https://ac.search.naver.com/nx/ac?q=${encodeURIComponent(o.kw)}&st=100&r_format=json&r_enc=UTF-8&q_enc=UTF-8&frm=nv`, { headers: { 'user-agent': 'Mozilla/5.0' } });
  const j = await r.json().catch(() => ({}));
  const items = (j.items?.[0] || []).map((x) => x[0]);
  o.ac = items.length; o.acSelf = items.some((t) => t.replace(/\s/g, '') === o.kw.replace(/\s/g, ''));
  await new Promise((s) => setTimeout(s, 400));
}
fs.writeFileSync('scripts/output/' + f, JSON.stringify(res, null, 1));
const cls = (o) => o.correctPage ? 'A.내 글이 나옴' : (o.rank ? 'B.같은 허브 다른 글이 대신 나옴' : 'C.gov 글 안 나옴');
const g = {};
for (const [s, o] of Object.entries(res)) (g[o.kind + ' ' + cls(o)] ??= []).push(`${o.kw}[자동완성 ${o.ac}${o.acSelf ? '·자체' : ''}]`);
for (const [k, v] of Object.entries(g).sort()) console.log(`\n## ${k} (${v.length})\n` + v.join(' / '));
