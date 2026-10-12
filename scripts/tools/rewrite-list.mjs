/**
 * 리라이트 목록 — 검색 색인(public/search-index.json)의 실비·실손 글 전부 + 서치어드바이저 노출(60일)을 합쳐 우선순위 표를 만든다 (2026-10-12)
 *   node scripts/tools/rewrite-list.mjs  → scripts/output/rewrite-list-silson-{날짜}.md
 * 노출 0 = 서치어드바이저가 주는 상위 웹문서 목록에 없다는 뜻(색인 안 됨과 같지 않다).
 */
import fs from 'node:fs';
import path from 'node:path';
const OUTD = 'scripts/output';
const src = fs.readdirSync(OUTD).filter((f) => f.startsWith('searchadvisor-expose-all-gov')).sort().pop();
const d = JSON.parse(fs.readFileSync(path.join(OUTD, src), 'utf8')).result;
const idx = JSON.parse(fs.readFileSync('public/search-index.json', 'utf8'));
const norm = (u) => decodeURIComponent(u).replace('https://gov.jjyu.co.kr', '').replace(/\/$/, '');
const map = (p) => new Map(d[p].urls.map((u) => [norm(u.key), u]));
const m60 = map('60'), m7 = map('7');
const rows = idx.filter((x) => /실비|실손/.test(x.t)).map((x) => {
  const a = m60.get(norm(x.u)) || {}, b = m7.get(norm(x.u)) || {};
  const isSpoke = x.u.startsWith('/policy/indemnity-insurance-generations/');
  return { path: x.u, title: x.t, group: isSpoke ? '실비 허브 스포크' : (x.u === '/policy/indemnity-insurance-generations' ? '실비 허브 본글' : '다른 허브의 실비 글'), e60: a.exposeCount || 0, c60: a.clickCount || 0, ctr: a.ctr || 0, rk: a.exposedRank || 0, e7: b.exposeCount || 0, c7: b.clickCount || 0 };
});
const tier = (r) => r.e60 === 0 ? 'D' : (r.e60 >= 20000 && r.ctr < 2) ? 'A' : (r.c60 >= 380 ? 'B' : (r.ctr >= 4 ? 'C' : 'B2'));
const label = { A: 'A. 노출 큼·CTR 낮음 — 타이틀·서론·버튼까지 1순위', B: 'B. 클릭 상위 — 본문 새 템플릿(URL·타이틀 유지)', B2: 'B2. 노출 있는 나머지', C: 'C. CTR 높음 — 타이틀·URL 유지, 본문만', D: 'D. 상위 노출 목록에 없음 — 색인 확인하며 이어서' };
const out = [`# 실비·실손 글 전체 리라이트 목록 ${rows.length}편 (노출: 서치어드바이저 gov.jjyu.co.kr 최근 60일, 2026-10-12)`, '', `검색 색인 기준 실비·실손 제목 글 전부. 노출 원본: ${src}`, ''];
let n = 0;
for (const t of ['A', 'B', 'B2', 'C', 'D']) {
  const list = rows.filter((r) => tier(r) === t).sort((x, y) => y.e60 - x.e60 || x.path.localeCompare(y.path));
  out.push(`## ${label[t]} (${list.length}편)`, '', '| 번호 | 경로 | 지금 타이틀 | 60일 노출 | 클릭 | CTR | 순위 |', '|---|---|---|---|---|---|---|');
  for (const r of list) out.push(`| ${++n} | ${r.path.replace('/policy/', '')} | ${r.title} | ${r.e60} | ${r.c60} | ${r.ctr} | ${r.rk} |`);
  out.push('');
}
const f = path.join(OUTD, `rewrite-list-silson-${new Date().toISOString().slice(0, 10)}.md`);
fs.writeFileSync(f, out.join('\n') + '\n');
for (const t of ['A', 'B', 'B2', 'C', 'D']) console.log(t, rows.filter((r) => tier(r) === t).length);
console.log('총', rows.length, '| 그룹별:', Object.entries(rows.reduce((a, r) => ((a[r.group] = (a[r.group] || 0) + 1), a), {})).map(([k, v]) => k + ' ' + v).join(', '));
console.log('저장:', f);
