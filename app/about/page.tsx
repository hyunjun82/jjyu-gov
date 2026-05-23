export const metadata = { title: '회사소개 | 정부지원사업' };

export default function AboutPage() {
  return (
    <main className="container" style={{ padding: '60px 20px', maxWidth: 800 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>회사소개</h1>
      <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
        정부지원사업은 공공데이터포털·보조금24·복지로 공식 자료를 기반으로 정부 지원금·환급금·대출 정보를 정리해 제공하는 정보 서비스입니다.
        본 사이트는 정부 공식 사이트가 아니며, 최종 자격은 각 부처 공식 채널에서 확인해주세요.
      </p>
    </main>
  );
}
