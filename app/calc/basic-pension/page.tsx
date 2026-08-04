import CalcClient from './CalcClient';
import Link from 'next/link';

export const metadata = {
  title: '기초연금 소득인정액 모의계산기 — 내가 대상인지 1분 확인 | 정부지원사업',
  description:
    '근로소득·국민연금·재산을 넣으면 소득인정액이 바로 나옵니다. 2026년 선정기준액 단독 247만원, 부부 395.2만원과 자동 비교해 기초연금 대상 여부를 확인하세요.',
};

export default function BasicPensionCalcPage() {
  return (
    <main className="container" style={{ padding: '32px 16px 60px', maxWidth: 720 }}>
      <nav style={{ fontSize: 13.5, color: 'var(--text-secondary, #4E5968)', marginBottom: 12 }}>
        <Link href="/policy/basic-pension">기초연금</Link> · 모의계산
      </nav>
      <h1 style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.35, marginBottom: 10 }}>
        기초연금 모의계산, 내가 대상인지 1분이면 나옵니다
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text-secondary, #4E5968)', marginBottom: 20 }}>
        기준연금액 기사만 봐서는 내 수령액을 알 수 없는데요. 아래에 소득과 재산을 넣으면
        보건복지부 고시 공식 그대로 소득인정액을 계산해 선정기준액과 바로 비교해 드립니다.
      </p>
      <CalcClient />
    </main>
  );
}
