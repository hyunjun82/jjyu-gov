import { PoliciesById, PoliciesBySlug } from '@/data/policies/manifest';
import { PoliciesByKoAlias, getSpokeListForPolicy } from '@/lib/policy-aliases';
import { SpokesRegistry } from '@/data/spokes/registry';
import PolicyDetailClient from './PolicyDetailClient';

// edge runtime 제거 — output:export 정적 생성

/* 주소는 영문 slug 하나만 만든다 (2026-08-31)
 *
 * 왜 바꿨나
 *   전에는 글 하나에 주소를 셋 만들었다 — 숫자 ID(/policy/1), 영문 slug, 한글 제목.
 *   같은 글을 세 벌씩 찍으니 정책 794편이 2,272페이지가 되고,
 *   스포크까지 더해 7,151페이지가 됐다. Cloudflare Pages 빌드 20분 제한을 넘겨
 *   2026-08-27 이후 배포가 통째로 실패했다 (대출 58편이 라이브에서 404).
 *
 *   한글·숫자 주소는 2026-05-23 f1ea42e6 에서 "한글 URL 로도 열리게" 하려고 넣은 것인데,
 *   리다이렉트가 아니라 페이지를 하나 더 만드는 방식이었다. 글이 적을 땐 티가 안 났다.
 *
 * 기존 주소는 죽지 않는다
 *   public/_redirects 에 숫자·한글 → 영문 slug 301 을 넣어 둔다.
 *   검색엔진도 301 을 따라가 순위가 영문 주소로 합쳐진다.
 */
export function generateStaticParams() {
  return Object.keys(PoliciesBySlug).map((slug) => ({ id: slug }));
}

export const dynamicParams = false;

/* spokeList·companies 는 여기(서버)에서 골라 넘긴다 (2026-08-31)
 * PolicyDetailClient 는 'use client' 다. 거기서 SpokesRegistry 를 만지면
 * 스포크 1,335개(19MB)가 브라우저 번들에 들어간다. */
export default async function PolicyDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const key = decodeURIComponent(params.id);

  const spokeList = getSpokeListForPolicy(key);

  /* 고객센터 허브(-call-center)면 회사 목록을 만들어 넘긴다 */
  const policy = PoliciesBySlug[key] ?? PoliciesById[key] ?? PoliciesByKoAlias[key];
  const hubSlug =
    typeof policy?.slug === 'string' && policy.slug.endsWith('-call-center') ? policy.slug : undefined;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const companies = hubSlug
    ? Object.entries(SpokesRegistry[hubSlug] ?? {})
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        .filter(([, s]) => (s as any).callCenter)
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        .map(([slug, s]) => ({ slug, cc: (s as any).callCenter }))
        .sort((a, b) => a.cc.name.localeCompare(b.cc.name, 'ko'))
    : [];

  /* related 가 slug 문자열이면 링크에 쓸 최소 정보만 뽑아 넘긴다.
     전에는 클라이언트가 PoliciesBySlug 전체(794편 · 5.7MB)를 들고 찾았다. */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const relatedMap: Record<string, any> = {};
  for (const raw of (policy?.related ?? []) as unknown[]) {
    if (typeof raw !== 'string') continue;
    const r = PoliciesBySlug[raw];
    if (r) relatedMap[raw] = { id: r.id, slug: r.slug, title: r.title, cat: r.cat, org: r.org };
  }

  return (
    <PolicyDetailClient
      params={params}
      policy={policy ?? null}
      relatedMap={relatedMap}
      spokeList={spokeList}
      companies={companies}
    />
  );
}
