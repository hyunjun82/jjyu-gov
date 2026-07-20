export const metadata = {
  title: '문의하기 | 정부지원사업',
  description: '콘텐츠 오류 제보·정정 요청 등 정부지원사업 사이트 관련 문의 안내 페이지입니다.',
};

export default function ContactPage() {
  return (
    <main className="container" style={{ padding: '60px 20px', maxWidth: 800 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>문의하기</h1>
      <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
        콘텐츠 오류 제보·정정 요청·기타 문의는 사이트 운영팀으로 연락 바랍니다.
        각 정책 페이지 하단의 출처 링크를 통해 부처 공식 채널에서 가장 최신 정보를 확인하실 수 있습니다.
      </p>
    </main>
  );
}
