/**
 * ── 정책 한글 slug 별칭 (registry 를 쓰지 않는 부분만) ──
 *
 * 각 정책의 title 에서 연도 prefix 제거한 한글 부분을 별칭으로 등록한다.
 * 예: "2026 기초연금" → "기초연금"
 *
 * 왜 policy-aliases.ts 에서 떼어냈나 (2026-08-31)
 *   policy-aliases.ts 는 SpokesRegistry 를 import 한다.
 *   클라이언트 컴포넌트가 거기서 PoliciesByKoAlias 하나만 가져와도
 *   같은 모듈에 있는 registry(스포크 1,335개 · 19MB)가 통째로 딸려온다.
 *   그래서 페이지 하나가 6.02MB 였다 — 정상은 100~300KB 다.
 *
 *   registry 가 필요 없는 것은 이 둘뿐이라 여기로 옮긴다.
 *   클라이언트는 이 파일만 import 하면 registry 를 끌고 오지 않는다.
 */
import { PoliciesBySlug } from '@/data/policies/manifest';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type AnyPolicy = any;

export function koSlugFromTitle(title?: string): string | null {
  if (!title) return null;
  const ko = String(title)
    .replace(/^20\d{2}\s*/, '')
    .replace(/\s+/g, '')
    /* Windows 가 파일명에 못 쓰는 문자 제거 (2026-08-17)
       타이틀의 "|" 가 별칭 URL 에 들어가 export 가 파일을 쓰다 죽었다.
       Linux(Cloudflare)는 허용이라 배포는 멀쩡했고 로컬 빌드만 조용히 실패.
       쉼표 등 기존 별칭에 이미 쓰인 문자는 URL 보존을 위해 건드리지 않는다. */
    .replace(/[|?*:"<>\\/]/g, '')
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
