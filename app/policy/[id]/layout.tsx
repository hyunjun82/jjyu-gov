import { Metadata } from 'next';

/* ── 더미 데이터 (API 연동 전) ── */
const policyMap: Record<string, {
  title: string;
  summary: string;
  org: string;
  amount: string;
  deadline: string;
}> = {
  '1': {
    title: '2026 청년도약계좌',
    summary:
      '만 19~34세 청년이 5년간 월 최대 70만원을 납입하면, 정부가 기여금을 추가 지원하여 5,000만원까지 목돈을 마련할 수 있는 청년 자산형성 지원 제도입니다.',
    org: '금융위원회',
    amount: '최대 5,000만원',
    deadline: '2026.06.30',
  },
  '2': {
    title: '2026 기초연금',
    summary:
      '만 65세 이상이면서 소득인정액이 선정기준액 이하인 어르신에게 매월 최대 34만 9,700원을 지급하는 노후소득 보장 제도입니다.',
    org: '보건복지부',
    amount: '월 최대 34만 9,700원',
    deadline: '상시',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const p = policyMap[id];

  if (!p) {
    return { title: '정책 상세 | 정부지원사업' };
  }

  const title = `${p.title} 조건·신청방법 총정리 (2026) | 정부지원사업`;

  // 메타 디스크립션: [정책명] [핵심 숫자/조건] [CTA]
  const description = `${p.title} – ${p.amount}, 마감 ${p.deadline}. 자격 조건 확인하고 바로 신청하세요.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://gov.jjyu.co.kr/policy/${id}`,
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
