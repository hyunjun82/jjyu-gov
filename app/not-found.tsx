import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <div className="container" style={{ paddingTop: 64, paddingBottom: 80, textAlign: 'center' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
          페이지를 찾을 수 없습니다
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link href="/" className="btn-primary">
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
