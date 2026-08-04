import MaternityCalcClient from './CalcClient';
import Link from 'next/link';

export const metadata = {
  title: '출산휴가비 계산기 — 90일 통상임금으로 얼마 받나 1분 계산 | 정부지원사업',
  description:
    '월 통상임금을 넣으면 출산전후휴가 90일(다태아 120일) 예상 수령액이 바로 나옵니다. 2026년 상한 월 220만원, 중소기업·대기업 지급 구조까지 반영.',
};

export default function MaternityCalcPage() {
  return (
    <main className="container" style={{ padding: '32px 16px 60px', maxWidth: 720 }}>
      <nav style={{ fontSize: 13.5, color: 'var(--text-secondary, #4E5968)', marginBottom: 12 }}>
        <Link href="/policy/maternity-leave-pay">출산전후휴가급여</Link> · 계산기
      </nav>
      <h1 style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.35, marginBottom: 10 }}>
        출산휴가비 계산, 내 통상임금으로 90일에 얼마 받나
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text-secondary, #4E5968)', marginBottom: 20 }}>
        통상임금 100%라는데 상한이 있어서 사람마다 받는 금액이 다른데요.
        월 통상임금 하나만 넣으면 회사 규모까지 반영해 90일 치가 바로 계산됩니다.
      </p>
      <MaternityCalcClient />
    </main>
  );
}
