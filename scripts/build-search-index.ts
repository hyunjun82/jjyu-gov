/**
 * build-search-index.ts — 검색 색인을 만든다 (public/search-index.json)
 *
 * 왜 (2026-08-09):
 *   헤더와 홈에 검색창이 있는데 form 도 onSubmit 도 없었다. 눌러도 아무 일이 없었다.
 *   방문자가 검색창을 누르고 반응이 없으면 그대로 나간다 — 내부 이동을 만들 자리를
 *   통째로 버리고 있었다.
 *
 * 정적 export(output:'export') 라 서버 검색이 없다. 그래서 빌드 때 색인을 만들어
 * 브라우저가 받아 찾는다. 색인은 제목·요약·기관만 담아 가볍게 유지한다.
 */
import fs from 'fs';
import path from 'path';
import { PoliciesBySlug, SpokesBySlug } from '../data/policies/manifest';
import { SpokesRegistry } from '../data/spokes/registry';

type Row = {
  t: string;   // 제목
  u: string;   // URL 경로
  k: string;   // 검색용 텍스트(제목+요약+기관+분류)
  c?: string;  // 카테고리 slug
  h?: string;  // 소속 허브 제목 (스포크만)
};

const rows: Row[] = [];
const seen = new Set<string>();

const push = (r: Row) => {
  if (seen.has(r.u)) return;
  seen.add(r.u);
  rows.push(r);
};

/* ── 허브 ───────────────────────────────────────── */
for (const [slug, p] of Object.entries(PoliciesBySlug)) {
  if (!p || !p.title) continue;
  push({
    t: p.title,
    u: `/policy/${slug}`,
    c: p.catSlug,
    k: [p.title, p.org, p.amount, slug].filter(Boolean).join(' '),
  });
}

/* ── 스포크 ─────────────────────────────────────── */
for (const [hubSlug, spokes] of Object.entries(SpokesRegistry)) {
  const hub = PoliciesBySlug[hubSlug];
  for (const [spokeSlug, data] of Object.entries(spokes || {})) {
    const d: any = data;
    const title = d?.h1 || d?.breadcrumb;
    if (!title) continue;
    /* 소제목(qa 질문)까지 넣는다 — 사용자가 실제로 치는 말이 거기 있다 */
    const subs = Array.isArray(d.qa) ? d.qa.map((x: any) => x?.q).filter(Boolean).join(' ') : '';
    push({
      t: title,
      u: `/policy/${hubSlug}/${spokeSlug}`,
      c: hub?.catSlug,
      h: hub?.title,
      k: [title, subs, spokeSlug].filter(Boolean).join(' '),
    });
  }
}

/* ── 사이드바 스포크 목록(허브 파일의 spokes 배열)도 흡수 ── */
for (const [hubSlug, list] of Object.entries(SpokesBySlug)) {
  const hub = PoliciesBySlug[hubSlug];
  for (const s of (list as any[]) || []) {
    if (!s?.slug) continue;
    const title = s.title || s.label;
    if (!title) continue;
    push({
      t: title,
      u: `/policy/${hubSlug}/${s.slug}`,
      c: hub?.catSlug,
      h: hub?.title,
      k: [title, s.slug].filter(Boolean).join(' '),
    });
  }
}

/* 검색어 비교를 싸게 하려고 미리 소문자·공백 정리.
   제목(t)은 검색 때 따로 보므로 k 에서 빼 용량을 줄인다. */
for (const r of rows) {
  const t = r.t.toLowerCase();
  r.k = r.k.replace(/\s+/g, ' ').toLowerCase().split(t).join(' ').replace(/\s+/g, ' ').trim();
  if (r.k === '') delete (r as any).k;
}

const out = path.join(process.cwd(), 'public', 'search-index.json');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(rows), 'utf8');

const kb = Math.round(fs.statSync(out).size / 1024);
console.log(`✅ 검색 색인 ${rows.length}건 → public/search-index.json (${kb}KB)`);
