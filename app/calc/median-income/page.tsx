import MedianCalcClient from './CalcClient';
import Link from 'next/link';

export const metadata = {
  title: '기준 중위소득 % 계산기 — 125%·50% 문턱이 내 가구는 얼마인가 | 정부지원사업',
  description:
    '가구원 수를 고르면 2026·2027 기준 중위소득과 32%(생계)·50%(교육)·125%(지자체 사업) 문턱 금액이 바로 나옵니다. 내 소득이 몇 %인지도 즉시 확인.',
};

export default function MedianIncomeCalcPage() {
  return (
    <main className="container" style={{ padding: '32px 16px 60px', maxWidth: 720 }}>
      <nav style={{ fontSize: 13.5, color: 'var(--text-secondary, #4E5968)', marginBottom: 12 }}>
        <Link href="/category/welfare">복지</Link> · 중위소득 계산
      </nav>
      <h1 style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.35, marginBottom: 10 }}>
        중위소득 125% 이하? 내 가구 기준으로 얼마인지 바로 계산
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text-secondary, #4E5968)', marginBottom: 20 }}>
        공고문마다 "기준 중위소득 몇 % 이하"라고만 적혀 있어서 내 가구 금액으로 얼마인지 매번 헷갈리시죠.
        가구원 수만 고르면 구간별 문턱 금액이 바로 나오고, 2027년 확정치(6.70% 인상)와도 비교됩니다.
      </p>
      <MedianCalcClient />
    </main>
  );
}
