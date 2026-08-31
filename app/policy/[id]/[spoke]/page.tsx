import { SpokesRegistry } from '@/data/spokes/registry';
import { PoliciesById, PoliciesBySlug, SpokesBySlug } from '@/data/policies/manifest';
import {
  PoliciesByKoAlias,
  SpokeEnAliases,
  getSpokeListForPolicy,
  resolveSpokeKey,
} from '@/lib/policy-aliases';
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

/* 스포크 하나와 목록만 골라 넘긴다 (2026-08-31)
 *
 * 왜
 *   SpokeClient 는 'use client' 다. 거기서 SpokesRegistry 를 import 하면
 *   스포크 1,335개(19MB)가 통째로 브라우저 번들에 들어간다.
 *   그래서 페이지 하나가 6.02MB 였다 — 정상은 100~300KB 다.
 *   모바일 로딩과 Core Web Vitals 에 직접 걸리고, JS 파일이 25MiB 를 넘겨
 *   Cloudflare 업로드까지 막았다.
 *
 *   page.tsx 는 서버 컴포넌트다. 여기서 registry 를 읽어 그 글 하나만 props 로 주면
 *   브라우저는 자기 데이터만 받는다.
 */
export default async function SpokePage(props: {
  params: Promise<{ id: string; spoke: string }>;
}) {
  const params = await props.params;
  const policyId = decodeURIComponent(params.id);
  const spokeSlug = decodeURIComponent(params.spoke);

  const policy = PoliciesBySlug[policyId] ?? PoliciesById[policyId] ?? PoliciesByKoAlias[policyId];
  const policySlug = policy?.slug ?? policyId;

  const resolvedKey = resolveSpokeKey(policySlug, spokeSlug);
  const spokeMap = SpokesRegistry?.[policySlug] ?? {};
  const spoke = spokeMap[resolvedKey] ?? null;
  const spokeList = getSpokeListForPolicy(policyId);

  /* 고객센터 글의 "같은 업종 다른 회사" 6곳 — 여기서 골라 넘긴다.
     전에는 SpokeClient 가 spokeMap 전체를 훑었다. 그러려면 registry 를 브라우저로 보내야 한다.
     가나다순으로 자기 다음 6곳을 돌려 담아 회사마다 다른 조합이 나오게 한다. */
  type CC = { name: string; main: { tel: string }; brandColor: string };
  const siblings = (() => {
    const me = (spoke as { callCenter?: CC } | null)?.callCenter;
    if (!me) return [];
    const rows = Object.entries(spokeMap)
      .filter(([, s]) => (s as { callCenter?: CC }).callCenter)
      .map(([k, s]) => ({ slug: k, cc: (s as { callCenter: CC }).callCenter }))
      .sort((a, b) => a.cc.name.localeCompare(b.cc.name, 'ko'));
    const at = rows.findIndex((r) => r.cc.name === me.name);
    if (at < 0) return rows.slice(0, 6);
    return Array.from({ length: Math.min(6, rows.length - 1) }, (_, i) => rows[(at + 1 + i) % rows.length]);
  })();

  return (
    <SpokeClient
      params={params}
      spoke={spoke}
      spokeList={spokeList}
      siblings={siblings}
      policy={policy ?? null}
    />
  );
}
