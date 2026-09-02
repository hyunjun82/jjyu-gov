import { Metadata } from 'next';
import { PoliciesById, PoliciesBySlug } from '@/data/policies/manifest';
import { PoliciesByKoAlias } from '@/lib/policy-aliases';

function lookup(idOrSlug: string) {
  return PoliciesById[idOrSlug] || PoliciesBySlug[idOrSlug] || PoliciesByKoAlias[idOrSlug];
}

// 한글 기준 약 150자 — 네이버 서치어드바이저 공식 가이드("1~2문장, 과도하게 길면 불이익")
// + 구글(고정 글자수 제한은 없으나 화면폭에 맞춰 잘림) 취지를 반영한 실무 상한.
// 문장/어절 경계에서 자르며, 단어 중간 절단은 피한다.
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

function buildHubDescription(title: string, amount: string | undefined, summary: string | undefined, max = 150): string {
  let base = title;
  base += amount ? ` – ${amount}.` : '.';
  if (base.length >= max) return truncateDescription(base, max);
  const remaining = max - base.length - 1;
  if (remaining < 15 || !summary) return truncateDescription(base, max);
  return `${base} ${truncateDescription(summary, remaining)}`;
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
  /* 고객센터 허브는 정책 꼬리를 붙이지 않는다 (2026-09-02 사장님 지적).
     "대출 고객센터 전화번호 조회, … 안 되는 이유 조건·신청방법 총정리 (2026) | 정부지원사업" 으로
     나가고 있었다 — 고객센터에 '신청방법 총정리' 는 말이 안 되고, 70자를 넘어 검색 결과에서 잘렸다.
     네이버 상위 경쟁 페이지는 꼬리 없이 검색어만 둔다. 브랜드 꼬리도 뺀다. */
  const isCallCenter = String(p.slug ?? id).endsWith('-call-center');
  const title = isCallCenter
    ? p.title
    : `${p.title} 조건·신청방법 총정리 (2026) | 정부지원사업`;
  const description = (p as { metaDescription?: string }).metaDescription
    ? truncateDescription((p as { metaDescription?: string }).metaDescription!)
    : buildHubDescription(p.title, p.amount, p.summary);

  /* 고객센터 허브는 미리 구워 둔 공유 카드가 있다(scripts/make-og-callcenter.ts).
     "보험사 고객센터 26곳" 처럼 몇 곳이 들어 있는지가 카드에 먼저 보인다. */
  const hubSlug = p.slug ?? id;
  const ogImage =
    typeof hubSlug === 'string' && hubSlug.endsWith('-call-center')
      ? `https://gov.jjyu.co.kr/og/call-center/_hub-${hubSlug}.png`
      : undefined;
  const images = ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: p.title }] : undefined;

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

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
