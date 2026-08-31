import { SpokesRegistry } from '@/data/spokes/registry';
import { PoliciesBySlug, SpokesBySlug } from '@/data/policies/manifest';
import { getKoAliasForSlug, SpokeEnAliases } from '@/lib/policy-aliases';
import SpokeClient from './SpokeClient';

/* 주소는 영문 slug 하나만 만든다 (2026-08-31) — 허브 page.tsx 와 같은 이유.
 * 전에는 스포크 하나당 /policy/{slug}/, /policy/{숫자}/, /policy/{한글}/ 세 벌을 찍었다.
 * 숫자·한글 주소는 public/_redirects 의 301 이 영문 slug 로 넘긴다. */
export async function generateStaticParams() {
  try {
    const params: { id: string; spoke: string }[] = [];
    const registry = SpokesRegistry ?? {};

    for (const [policySlug, spokes] of Object.entries(registry)) {
      if (!spokes || typeof spokes !== 'object') continue;

      for (const spokeKey of Object.keys(spokes)) {
        params.push({ id: policySlug, spoke: spokeKey });
      }

      // 영문 alias spoke 도 정적 등록 (/policy/{slug}/interest-rate 같은 옛 영문 URL 살리기)
      const enAliases = SpokeEnAliases?.[policySlug] ?? {};
      for (const enSlug of Object.keys(enAliases)) {
        params.push({ id: policySlug, spoke: enSlug });
      }

      // 정책 데이터 spokes 배열의 영문 slug (매핑 안 되더라도 SpokeClient fallback)
      const policySpokes = (SpokesBySlug?.[policySlug] ?? []) as { slug?: string }[];
      for (const ps of policySpokes) {
        if (!ps?.slug || enAliases[ps.slug]) continue;
        params.push({ id: policySlug, spoke: ps.slug });
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
