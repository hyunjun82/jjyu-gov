import { Metadata } from 'next';
import { PoliciesById, PoliciesBySlug } from '@/data/policies/manifest';
import { PoliciesByKoAlias } from '@/lib/policy-aliases';

function lookup(idOrSlug: string) {
  return PoliciesById[idOrSlug] || PoliciesBySlug[idOrSlug] || PoliciesByKoAlias[idOrSlug];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = lookup(id);

  if (!p) {
    return { title: '정책 상세 | 정부지원사업' };
  }

  const canonical = `https://gov.jjyu.co.kr/policy/${p.slug ?? id}/`;
  const title = `${p.title} 조건·신청방법 총정리 (2026) | 정부지원사업`;
  const description = p.summary
    ? `${p.title} – ${p.amount || ''}, 마감 ${p.deadline || '상시'}. ${String(p.summary).slice(0, 100)}`
    : `${p.title} – ${p.amount || ''}, 마감 ${p.deadline || '상시'}. 자격 조건 확인하고 바로 신청하세요.`;

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

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
