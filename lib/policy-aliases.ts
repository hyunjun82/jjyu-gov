/**
 * ── 정책 한글 slug 별칭 ──
 *
 * 각 정책의 title 에서 연도 prefix 제거한 한글 부분을 slug 별칭으로 등록.
 * 예: "2026 기초연금" → "기초연금"
 *
 * generateStaticParams 와 클라이언트 lookup 양쪽에서 사용.
 */
import { PoliciesBySlug } from '@/data/policies/manifest';

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
