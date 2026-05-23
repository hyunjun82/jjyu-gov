import { SpokesRegistry } from '@/data/spokes/registry';
import { PoliciesBySlug } from '@/data/policies/manifest';
import { getKoAliasForSlug } from '@/lib/policy-aliases';
import SpokeClient from './SpokeClient';

// Edge runtime 제거 → 정적 생성 활성화
// (Edge runtime이 있으면 Cloudflare Workers 3 MiB 한도 초과)

export async function generateStaticParams() {
  const params: { id: string; spoke: string }[] = [];

  for (const [policySlug, spokes] of Object.entries(SpokesRegistry)) {
    const policy = PoliciesBySlug[policySlug];
    const koAlias = getKoAliasForSlug(policySlug);

    for (const spokeKey of Object.keys(spokes)) {
      // slug 기반 URL (/policy/basic-pension/수급자격)
      params.push({ id: policySlug, spoke: spokeKey });

      // 숫자 id 기반 URL (/policy/2/수급자격) — 홈 페이지 링크 형식
      if (policy?.id) {
        params.push({ id: String(policy.id), spoke: spokeKey });
      }

      // 한글 정책 slug + 한글 spoke 조합 (/policy/기초연금/수급자격)
      if (koAlias) {
        params.push({ id: koAlias, spoke: spokeKey });
      }
    }
  }

  return params;
}

// 레지스트리에 없는 spoke 도 런타임에 처리 (SpokeClient 내부에서 fallback 렌더)
export const dynamicParams = true;

export default async function SpokePage(props: {
  params: Promise<{ id: string; spoke: string }>;
}) {
  const params = await props.params;
  return <SpokeClient params={params} />;
}
