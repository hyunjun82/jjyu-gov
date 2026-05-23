export const metadata = { title: '이용약관 | 정부지원사업' };

export default function TermsPage() {
  return (
    <main className="container" style={{ padding: '60px 20px', maxWidth: 800 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>이용약관</h1>
      <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
        본 사이트의 모든 콘텐츠는 정부 공식 자료를 기반으로 작성되었으며, 정보 제공 목적의 안내 서비스입니다.
        본 사이트는 정부 공식 사이트가 아니며, 콘텐츠의 정확성·최신성 보장은 각 부처 공식 채널을 우선합니다.
      </p>
    </main>
  );
}
