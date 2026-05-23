import { SpokesRegistry } from '@/data/spokes/registry';
import { PoliciesBySlug, SpokesBySlug } from '@/data/policies/manifest';
import { getKoAliasForSlug, SpokeEnAliases } from '@/lib/policy-aliases';
import SpokeClient from './SpokeClient';

export async function generateStaticParams() {
  try {
    const params: { id: string; spoke: string }[] = [];
    const registry = SpokesRegistry ?? {};

    for (const [policySlug, spokes] of Object.entries(registry)) {
      if (!spokes || typeof spokes !== 'object') continue;

      const policy = PoliciesBySlug?.[policySlug];
      let koAlias: string | null = null;
      try { koAlias = getKoAliasForSlug(policySlug); } catch { koAlias = null; }

      for (const spokeKey of Object.keys(spokes)) {
        params.push({ id: policySlug, spoke: spokeKey });
        if (policy?.id) {
          params.push({ id: String(policy.id), spoke: spokeKey });
        }
        if (koAlias) {
          params.push({ id: koAlias, spoke: spokeKey });
        }
      }

      // 영문 alias spoke 도 정적 등록 (/policy/138/interest-rate 같은 영문 URL 살리기)
      const enAliases = SpokeEnAliases?.[policySlug] ?? {};
      for (const enSlug of Object.keys(enAliases)) {
        params.push({ id: policySlug, spoke: enSlug });
        if (policy?.id) {
          params.push({ id: String(policy.id), spoke: enSlug });
        }
        if (koAlias) {
          params.push({ id: koAlias, spoke: enSlug });
        }
      }

      // 정책 데이터 spokes 배열의 모든 영문 slug 무조건 등록 (매핑 안 되더라도 SpokeClient fallback)
      const policySpokes = (SpokesBySlug?.[policySlug] ?? []) as { slug?: string }[];
      for (const ps of policySpokes) {
        if (!ps?.slug || enAliases[ps.slug]) continue; // 이미 등록된 건 skip
        params.push({ id: policySlug, spoke: ps.slug });
        if (policy?.id) {
          params.push({ id: String(policy.id), spoke: ps.slug });
        }
        if (koAlias) {
          params.push({ id: koAlias, spoke: ps.slug });
        }
      }
    }

    return params;
  } catch (e) {
    console.error('[generateStaticParams spoke] error:', e);
    return [];
  }
}

export const dynamicParams = false;

export default async function SpokePage(props: {
  params: Promise<{ id: string; spoke: string }>;
}) {
  const params = await props.params;
  return <SpokeClient params={params} />;
}
