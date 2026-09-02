import { Metadata } from 'next';
import { PoliciesById, PoliciesBySlug } from '@/data/policies/manifest';
import { PoliciesByKoAlias } from '@/lib/policy-aliases';
import { SpokesRegistry } from '@/data/spokes/registry';

function lookupPolicy(idOrSlug: string) {
  return PoliciesById[idOrSlug] || PoliciesBySlug[idOrSlug] || PoliciesByKoAlias[idOrSlug];
}

// 한글 기준 약 150자 — 네이버 서치어드바이저 공식 가이드("1~2문장, 과도하게 길면 불이익")
// + 구글(고정 글자수 제한은 없으나 화면폭에 맞춰 잘림) 취지를 반영한 실무 상한.
function truncateDescription(text: string, max = 150): string {
  const clean = text.trim().replace(/\s+/g, ' ');
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const sentenceEnd = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('다. '), cut.lastIndexOf('요. '));
  if (sentenceEnd > max - 50) return cut.slice(0, sentenceEnd + 1);
  const wordEnd = Math.max(cut.lastIndexOf(' '), cut.lastIndexOf(','), cut.lastIndexOf('·'));
  if (wordEnd > max - 30) return cut.slice(0, wordEnd) + '...';
  return cut + '...';
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; spoke: string }>;
}): Promise<Metadata> {
  const { id, spoke: spokeRaw } = await params;
  const spoke = decodeURIComponent(spokeRaw);

  const policy = lookupPolicy(id);
  const policySlug = policy?.slug ?? id;
  const policyTitle = policy?.title ?? '정책';

  const spokeMap = SpokesRegistry[policySlug] ?? {};
  const spokeData = spokeMap[spoke];

  if (!spokeData) {
    return {
      title: `${policyTitle} | 정부지원사업`,
      description: `${policyTitle} 상세 안내`,
    };
  }

  const canonical = `https://gov.jjyu.co.kr/policy/${policySlug}/${encodeURIComponent(spoke)}/`;
  /* 고객센터 글은 브랜드 꼬리를 붙이지 않는다 (2026-09-02 사장님 지적).
     '| 정부지원사업' 은 고객센터 검색과 무관한 말이고 길이만 늘린다.
     네이버 상위 경쟁 페이지 둘 다 검색어(전화번호·상담원 연결·영업시간)만 둔다. */
  const isCallCenter = Boolean((spokeData as { callCenter?: unknown }).callCenter);
  const title = isCallCenter ? spokeData.h1 : `${spokeData.h1} | 정부지원사업`;
  const description = truncateDescription(spokeData.metaDescription ?? spokeData.description);

  /* 공유 카드 — 고객센터 글은 회사마다 미리 구워 둔 카드가 있다(scripts/make-og-callcenter.ts).
     카톡·슬랙에 주소를 붙였을 때 회사 색과 대표번호가 뜬다. 없으면 글자만 뜬다. */
  const cc = (spokeData as { callCenter?: { slug: string } }).callCenter;
  const ogImage = cc ? `https://gov.jjyu.co.kr/og/call-center/${cc.slug}.png` : undefined;
  const images = ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: spokeData.h1 }] : undefined;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: 'article',
      url: canonical,
      siteName: '정부지원사업',
      ...(images ? { images } : {}),
    },
    ...(ogImage
      ? { twitter: { card: 'summary_large_image' as const, title, description, images: [ogImage] } }
      : {}),
  };
}

export default function SpokeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
