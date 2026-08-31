/**
 * gen-legacy-redirects.ts — 숫자·한글 허브 주소를 영문 slug 로 넘기는 301 을 만든다 (2026-08-31)
 *
 * 왜
 *   글 하나에 주소가 셋이었다 — /policy/1/, /policy/기초연금/, /policy/basic-pension/.
 *   같은 글을 세 벌 찍으니 7,151 페이지가 됐고 Cloudflare 빌드 20분 제한을 넘겨
 *   2026-08-27 이후 배포가 통째로 실패했다.
 *   이제 영문 slug 하나만 만든다. 옛 주소는 여기서 만든 301 이 받는다.
 *
 * 건드리지 않는 것
 *   스포크 이름이 한글인 주소(/policy/first-meet/사용처/)는 그대로 둔다 —
 *   registry 에 등록된 진짜 주소이고, 네이버 유입 상위가 이 형태다.
 */
import fs from 'fs';
import path from 'path';
import { PoliciesById, PoliciesBySlug } from '../data/policies/manifest';
import { PoliciesByKoAlias } from '../lib/policy-aliases';

const out: string[] = [];
const seen = new Set<string>();
const add = (from: string, to: string) => {
  if (from === to || seen.has(from)) return;
  seen.add(from);
  out.push(`${from}  ${to}  301`);
};

/* Cloudflare _redirects 는 2,000 줄까지만 읽는다. 넘으면 뒤가 통째로 무시된다.
   그래서 splat(`/*`)과 %인코딩 사본은 넣지 않는다 —
   Cloudflare 는 요청 경로를 디코딩해서 매칭하므로 한글 원문 규칙 하나면 인코딩 요청도 받는다.
   하위 경로(/policy/1/사용처/)까지 넘기려면 splat 이 필요한데,
   그건 규칙이 두 배가 되어 한도를 넘는다. 허브 주소만 넘긴다. */

/* 숫자 ID → 영문 slug */
for (const [id, p] of Object.entries(PoliciesById as Record<string, { slug?: string }>)) {
  if (!p?.slug) continue;
  add(`/policy/${id}/`, `/policy/${p.slug}/`);
}

/* 한글 별칭 → 영문 slug */
for (const [ko, p] of Object.entries(PoliciesByKoAlias as Record<string, { slug?: string }>)) {
  if (!p?.slug || p.slug === ko) continue;
  add(`/policy/${ko}/`, `/policy/${p.slug}/`);
}

const file = path.join(process.cwd(), 'public', '_redirects');
const prev = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
const MARK = '# ── 숫자·한글 허브 주소 301 (scripts/gen-legacy-redirects.ts 가 만든다) ──';
const kept = prev.split(MARK)[0].trimEnd();
fs.writeFileSync(file, `${kept}\n\n${MARK}\n${out.join('\n')}\n`, 'utf8');
console.log(`301 규칙 ${out.length}줄 · _redirects 총 ${(kept + out.join('\n')).split('\n').length}줄`);
