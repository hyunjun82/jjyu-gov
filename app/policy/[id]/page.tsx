import { PoliciesById, PoliciesBySlug } from '@/data/policies/manifest';
import { PoliciesByKoAlias } from '@/lib/policy-aliases';
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

export default async function PolicyDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return <PolicyDetailClient params={params} />;
}
