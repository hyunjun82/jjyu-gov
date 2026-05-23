/**
 * ── 정책 한글 slug 별칭 ──
 *
 * 각 정책의 title 에서 연도 prefix 제거한 한글 부분을 slug 별칭으로 등록.
 * 예: "2026 기초연금" → "기초연금"
 *
 * generateStaticParams 와 클라이언트 lookup 양쪽에서 사용.
 */
import { PoliciesById, PoliciesBySlug, SpokesBySlug } from '@/data/policies/manifest';
import { SpokesRegistry } from '@/data/spokes/registry';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type AnyPolicy = any;

function koSlugFromTitle(title?: string): string | null {
  if (!title) return null;
  const ko = String(title)
    .replace(/^20\d{2}\s*/, '')
    .replace(/\s+/g, '')
    .trim();
  if (!ko) return null;
  if (!/[가-힣]/.test(ko)) return null;
  return ko;
}

/* policySlug(영문) → 한글 alias  */
export const PolicyKoAliasBySlug: Record<string, string> = {};
/* 한글 alias → policy 객체 */
export const PoliciesByKoAlias: Record<string, AnyPolicy> = {};

for (const [slug, policy] of Object.entries(PoliciesBySlug)) {
  const ko = koSlugFromTitle((policy as AnyPolicy)?.title);
  if (!ko) continue;
  PolicyKoAliasBySlug[slug] = ko;
  PoliciesByKoAlias[ko] = policy;
}

export function getKoAliasForSlug(policySlug: string): string | null {
  return PolicyKoAliasBySlug[policySlug] ?? null;
}

/**
 * 정책 ID/slug/한글별칭 → SpokesRegistry 기반 spoke 목록 생성
 * 정책 데이터의 spokes 배열(영문 slug) 무시하고 registry(한글 키) 단일 소스로 사용
 * 사이드바·목차의 모든 spoke 링크가 한글 slug → 절대 404 안 남
 */
/**
 * policySlug → 영문 spoke slug → 한글 spoke 키 자동 매핑 (인덱스 기반)
 * 정책 파일의 spokes 배열(영문)을 SpokesRegistry 한글 키와 순서대로 짝지움
 * 영문 URL(`/policy/138/interest-rate`)도 살리기 위해
 */
export const SpokeEnAliases: Record<string, Record<string, string>> = {};
for (const policySlug of Object.keys(PoliciesBySlug)) {
  // 정책 데이터 spokes 배열은 SpokesBySlug 에 별도 export 되어있음 (정책 객체 .spokes 가 아님!)
  const enSpokes = (SpokesBySlug?.[policySlug] ?? []) as AnyPolicy[];
  const koMap = SpokesRegistry?.[policySlug] ?? {};
  const koKeys = Object.keys(koMap);
  const aliases: Record<string, string> = {};
  enSpokes.forEach((s: AnyPolicy, i: number) => {
    if (s?.slug && koKeys[i] && !koMap[s.slug]) {
      aliases[s.slug] = koKeys[i];
    }
  });
  if (Object.keys(aliases).length > 0) {
    SpokeEnAliases[policySlug] = aliases;
  }
}

/** 영문/한글 spoke slug 둘 다 받아서 SpokesRegistry의 실제 한글 키로 변환 */
export function resolveSpokeKey(policySlug: string, spokeKey: string): string {
  if (SpokesRegistry?.[policySlug]?.[spokeKey]) return spokeKey;
  return SpokeEnAliases?.[policySlug]?.[spokeKey] ?? spokeKey;
}

export function getSpokeListForPolicy(policyKey: string): { slug: string; title: string }[] {
  // policyKey는 영문 slug, 숫자 ID, 또는 한글 별칭 가능
  let policySlug: string | null = null;

  if (PoliciesBySlug?.[policyKey]) {
    policySlug = policyKey;
  } else if (PoliciesById?.[policyKey]) {
    policySlug = (PoliciesById[policyKey] as AnyPolicy)?.slug ?? null;
  } else if (PoliciesByKoAlias?.[policyKey]) {
    policySlug = (PoliciesByKoAlias[policyKey] as AnyPolicy)?.slug ?? null;
  }

  if (!policySlug) return [];
  const map = SpokesRegistry?.[policySlug] ?? {};

  return Object.entries(map).map(([slug, content]) => {
    const c = content as AnyPolicy;
    return {
      slug,
      title: c?.breadcrumb || c?.h1 || slug,
    };
  });
}
