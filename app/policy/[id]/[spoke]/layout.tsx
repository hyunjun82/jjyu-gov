import { Metadata } from 'next';
import { PoliciesById, PoliciesBySlug } from '@/data/policies/manifest';
import { SpokesRegistry } from '@/data/spokes/registry';

function lookupPolicy(idOrSlug: string) {
  return PoliciesById[idOrSlug] || PoliciesBySlug[idOrSlug];
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

  const title = `${spokeData.h1} | 정부지원사업`;
  const description = spokeData.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://gov.jjyu.co.kr/policy/${id}/${spoke}`,
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
