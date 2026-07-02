/**
 * verify-integrity.ts — 허브·스포크·매니페스트 배선 정합성 검사
 *
 * 목적: "스포크 콘텐츠·registry는 있는데 허브가 없어 /policy/{slug}/ 가 404"
 *       같은 배선 엉킴을 push 전에 자동 검출한다. (고아 허브 = 반복 404의 근본 원인)
 *
 * 사용:
 *   npx tsx scripts/verify-integrity.ts            # 리포트만 출력 (항상 exit 0)
 *   npx tsx scripts/verify-integrity.ts --strict   # 오류가 있으면 exit 1 (pre-push 게이트용)
 *
 * 진실 원천:
 *   허브 존재  ⟺  slug ∈ PoliciesBySlug   (PoliciesByKoAlias 는 여기서 파생되므로 별칭은 고아 구제 못함)
 *   스포크 URL ⟺  SpokesRegistry[slug][한글키]  (generateStaticParams 가 이걸로 생성)
 */
import { PoliciesById, PoliciesBySlug, SpokesById, SpokesBySlug } from '../data/policies/manifest';
import { SpokesRegistry } from '../data/spokes/registry';

/* eslint-disable @typescript-eslint/no-explicit-any */

const STRICT = process.argv.includes('--strict');

const errors: string[] = [];
const infos: string[] = [];

const slugSet = new Set(Object.keys(PoliciesBySlug));
const spokeSlugSet = new Set(Object.keys(SpokesBySlug));
const idSet = new Set(Object.keys(PoliciesById));
const spokeIdSet = new Set(Object.keys(SpokesById));
const registrySlugs = Object.keys(SpokesRegistry);

// ── [A] 고아 허브 (치명): registry 최상위 slug 가 PoliciesBySlug 에 없음 → 허브 페이지 404 ──
const orphans = registrySlugs.filter((s) => !slugSet.has(s));
for (const s of orphans) {
  const spokeCount = Object.keys(SpokesRegistry[s] ?? {}).length;
  errors.push(`[고아허브] registry '${s}' (스포크 ${spokeCount}개) → PoliciesBySlug 없음 → /policy/${s}/ = 404`);
}

// ── [B] BySlug ↔ SpokesBySlug 키 불일치 (사이드바/스포크 조회 깨짐) ──
for (const s of slugSet) if (!spokeSlugSet.has(s)) errors.push(`[배선] '${s}' : PoliciesBySlug 에 있으나 SpokesBySlug 에 없음`);
for (const s of spokeSlugSet) if (!slugSet.has(s)) errors.push(`[배선] '${s}' : SpokesBySlug 에 있으나 PoliciesBySlug 에 없음`);

// ── [C] ById ↔ SpokesById 키 불일치 (숫자 URL 스포크 조회 깨짐) ──
for (const id of idSet) if (!spokeIdSet.has(id)) errors.push(`[배선] id '${id}' : PoliciesById 에 있으나 SpokesById 에 없음`);
for (const id of spokeIdSet) if (!idSet.has(id)) errors.push(`[배선] id '${id}' : SpokesById 에 있으나 PoliciesById 에 없음`);

// ── [D] 숫자ID 정책의 .slug 가 PoliciesBySlug 에 존재하는지 (숫자→slug 정합) ──
for (const [id, pol] of Object.entries(PoliciesById)) {
  const slug = (pol as any)?.slug;
  if (slug && !slugSet.has(slug)) errors.push(`[배선] id '${id}' 정책의 slug '${slug}' 가 PoliciesBySlug 에 없음`);
}

// ── [E] 정보: 숫자 ID 없는 허브 (slug URL 로만 접근 — 무해, 기대된 gap) ──
const idSlugs = new Set(Object.values(PoliciesById).map((p: any) => p?.slug).filter(Boolean));
const noIdHubs = [...slugSet].filter((s) => !idSlugs.has(s));

// ── [F] 정보: 빈 허브 (qa 없음/0개 — 콘텐츠 백로그, 배선 오류는 아님) ──
const emptyHubs = [...slugSet].filter((s) => {
  const p = PoliciesBySlug[s] as any;
  return !Array.isArray(p?.qa) || p.qa.length === 0;
});

// ── [G] 정보: 스포크 없는 허브 (registry 미등록 — 스포크 페이지 0개, 허브는 정상) ──
const registrySet = new Set(registrySlugs);
const noSpokeHubs = [...slugSet].filter((s) => !registrySet.has(s));

const totalSpokes = registrySlugs.reduce((n, s) => n + Object.keys(SpokesRegistry[s] ?? {}).length, 0);

// ─────────────────────────── 리포트 ───────────────────────────
console.log('============================================================');
console.log(' 시스템 배선 정합성 검사 (verify-integrity)');
console.log('============================================================');
console.log(` 허브(PoliciesBySlug) : ${slugSet.size}개`);
console.log(` 숫자ID 등록(PoliciesById) : ${idSet.size}개`);
console.log(` registry 정책 : ${registrySlugs.length}개 / 스포크 총 ${totalSpokes}개`);
console.log('');
console.log(' ── 정보(무해) ──');
console.log(`  · 숫자 ID 없는 허브(slug URL만) : ${noIdHubs.length}개`);
console.log(`  · 스포크 없는 허브(스포크 0개) : ${noSpokeHubs.length}개`);
console.log(`  · 빈 허브(qa 0개, 콘텐츠 백로그) : ${emptyHubs.length}개`);
console.log('');

if (errors.length === 0) {
  console.log(' ✅ 배선 오류 0개 — 고아 허브·매니페스트 불일치 없음');
} else {
  console.log(` ❌ 배선 오류 ${errors.length}개:`);
  for (const e of errors) console.log(`   ✗ ${e}`);
}
console.log('============================================================');

if (STRICT && errors.length > 0) {
  console.log('🚫 --strict: 배선 오류로 push 차단');
  process.exit(1);
}
process.exit(0);
