export const metadata = { title: '개인정보처리방침 | 정부지원사업' };

export default function PrivacyPage() {
  return (
    <main className="container" style={{ padding: '60px 20px', maxWidth: 800 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>개인정보처리방침</h1>
      <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
        본 사이트는 별도의 회원가입을 받지 않으며, 개인정보를 직접 수집·저장하지 않습니다.
        Cloudflare Analytics 등 익명 통계 도구만 사용되며, 광고·트래커 식별자는 활용하지 않습니다.
      </p>
    </main>
  );
}
