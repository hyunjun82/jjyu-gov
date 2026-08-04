import JongbuseCalcClient from './CalcClient';
import Link from 'next/link';

export const metadata = {
  title: '종부세 계산기 — 현행 vs 2026 세제개편안 비교, 내 집은 얼마 바뀌나 | 정부지원사업',
  description:
    '공시가격만 넣으면 현행 종부세와 2026 세제개편안 적용 시 종부세를 나란히 계산합니다. 거주 1주택 14억 비과세, 다주택 공제 축소, 3주택 공정시장가액 80%까지 반영.',
};

export default function JongbuseCalcPage() {
  return (
    <main className="container" style={{ padding: '32px 16px 60px', maxWidth: 720 }}>
      <nav style={{ fontSize: 13.5, color: 'var(--text-secondary, #4E5968)', marginBottom: 12 }}>
        <Link href="/category/tax">세금</Link> · 종부세 계산
      </nav>
      <h1 style={{ fontSize: 25, fontWeight: 800, lineHeight: 1.35, marginBottom: 10 }}>
        종부세 계산기, 세제개편안으로 내 집은 얼마나 바뀌나
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--text-secondary, #4E5968)', marginBottom: 20 }}>
        뉴스마다 오르네 내리네 하는데 정작 궁금하신 건 우리 집이죠.
        공시가격 하나만 넣으면 현행 기준과 8월 3일 발표된 개편안 기준을 나란히 보여드립니다.
      </p>
      <JongbuseCalcClient />
    </main>
  );
}
