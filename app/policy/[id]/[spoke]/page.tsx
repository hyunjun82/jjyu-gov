import { SpokesRegistry } from '@/data/spokes/registry';
import { PoliciesBySlug } from '@/data/policies/manifest';
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
