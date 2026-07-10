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
  const title = `${spokeData.h1} | 정부지원사업`;
  const description = truncateDescription(spokeData.description);

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
    },
  };
}

export default function SpokeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
