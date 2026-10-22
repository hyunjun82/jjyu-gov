import CalcClient from './CalcClient';
import Link from 'next/link';

export const metadata = {
  title: '연말정산 계산기·모의계산 2026년 귀속, 환급액·추가 납부액 | 정부지원사업',
  description:
    '연말정산 계산기(모의계산)입니다. 총급여와 신용카드·의료비·교육비·기부금·연금저축 등 공제 항목을 넣으면 근로소득공제부터 결정세액까지 단계별로 계산해 예상 환급액과 추가 납부액을 알려드립니다. 2026년 귀속(2027년 2월 정산) 기준이며 홈택스 자동계산과 대조한 참고용 계산기입니다.',
  alternates: { canonical: '/calc/year-end-tax/' },
  openGraph: {
    title: '연말정산 계산기·모의계산 2026년 귀속, 환급액·추가 납부액',
    description:
      '총급여와 공제 항목을 넣으면 근로소득공제부터 결정세액까지 단계별로 계산해 예상 환급액과 추가 납부액을 알려드립니다.',
    url: '/calc/year-end-tax/',
    type: 'website',
  },
};

export default function YearEndTaxCalcPage() {
  return (
    <main className="container" style={{ padding: '32px 16px 60px', maxWidth: 720 }}>
      <nav style={{ fontSize: 13.5, color: 'var(--text-secondary, #4E5968)', marginBottom: 12 }}>
        <Link href="/policy/year-end-tax">연말정산</Link> · 모의계산
      </nav>
      <h1 style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.35, marginBottom: 10 }}>
        연말정산 계산기·모의계산, 2026년 귀속
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text-secondary, #4E5968)', marginBottom: 20 }}>
        2026년 귀속 연말정산은 올해 쓴 돈으로 정해지는데요. 지금까지 낸 세금과 공제 항목을 아래에 넣으면
        근로소득공제부터 결정세액까지 단계마다 얼마인지 보여드립니다. 모르는 항목은 비워 두셔도 됩니다.
      </p>
      <CalcClient />
    </main>
  );
}
