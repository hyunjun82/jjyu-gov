import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '지원금허브 | 정부 지원금·환급금·대출 정보 포털',
  description: '정부에서 지원하는 보조금, 환급금, 대출 정보를 한눈에. 매일 업데이트되는 최신 정책 정보를 지원금허브에서 확인하세요.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* ── 정부 스타일 상단 인증 바 ── */}
        <div className="gov-top-bar">
          <div className="inner">
            <span>본 사이트는 공공데이터포털·보조금24 공식 데이터를 활용한 정보 제공 서비스입니다.</span>
            <span>데이터 기준: 2026.03.19 업데이트</span>
          </div>
        </div>

        {/* ── 헤더 ── */}
        <header className="gov-header">
          <div className="inner">
            <Link href="/">
              <div className="logo">
                <div className="icon">G</div>
                지원금허브
              </div>
            </Link>

            <nav>
              <Link href="/" className="active">홈</Link>
              <Link href="/category/fund">지원금</Link>
              <Link href="/category/refund">환급금</Link>
              <Link href="/category/loan">대출 정보</Link>
              <Link href="/category/youth">청년 특화</Link>
            </nav>

            <div className="search-box">
              <input type="text" placeholder="지원금 검색..." />
              <button>검색</button>
            </div>
          </div>
        </header>

        {/* ── 페이지 콘텐츠 ── */}
        {children}

        {/* ── 푸터 ── */}
        <footer className="gov-footer">
          <div className="inner">
            <div className="links">
              <Link href="/about">회사소개</Link>
              <Link href="/terms">이용약관</Link>
              <Link href="/privacy">개인정보처리방침</Link>
              <Link href="/contact">문의하기</Link>
            </div>
            <div className="copy">
              지원금허브 | gov-jjyu.co.kr<br/>
              데이터 출처: 공공데이터포털, 보조금24, 복지로<br/>
              © 2026 지원금허브. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
