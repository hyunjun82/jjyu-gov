import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { organizationSchema, personSchema, toJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://gov.jjyu.co.kr'),
  title: '정부지원사업 | 정부 지원금·환급금·대출 정보 포털',
  description: '정부에서 지원하는 보조금, 환급금, 대출 정보를 한눈에. 매일 업데이트되는 최신 정책 정보를 정부지원사업에서 확인하세요.',
  verification: {
    // 구글 서치콘솔 — content 값 받으면 채울 것
    // google: '구글_content_값',
    other: {
      'naver-site-verification': '59fd84b2f0382456245f147e707581a8a3e8be91',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* 구글 애드센스 로더 (사이트 전역 1회) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2442517902625121"
          crossOrigin="anonymous"
        />
        {/* 사이트 전역 스키마: Organization + Person (E-E-A-T) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(personSchema()) }}
        />
      </head>
      <body>
        {/* ── 상단 인증 바 ── */}
        <div className="top-bar">
          <div className="container">
            <span>공공데이터포털·보조금24 공식 데이터 기반 정보 서비스</span>
            <span>2026.03.19 기준</span>
          </div>
        </div>

        {/* ── 헤더 ── */}
        <header className="header">
          <div className="container header-inner">
            <Link href="/" className="logo">
              <span className="logo-icon">G</span>
              정부지원사업
            </Link>

            <nav className="nav">
              <Link href="/">홈</Link>
              <Link href="/category/fund">지원금</Link>
              <Link href="/category/refund">환급금</Link>
              <Link href="/category/loan">대출</Link>
              <Link href="/category/youth">청년</Link>
              <Link href="/category/life">생활정보</Link>
            </nav>

            <div className="header-search">
              <input type="text" placeholder="지원금 검색..." />
              <button>검색</button>
            </div>
          </div>
        </header>

        {/* ── 콘텐츠 ── */}
        {children}

        {/* ── 푸터 ── */}
        <footer className="footer">
          <div className="container">
            <div className="footer-links">
              <Link href="/about">회사소개</Link>
              <Link href="/terms">이용약관</Link>
              <Link href="/privacy">개인정보처리방침</Link>
              <Link href="/contact">문의하기</Link>
            </div>
            <div className="footer-info">
              <p>정부지원사업 | gov-jjyu.co.kr</p>
              <p>데이터 출처: 공공데이터포털, 보조금24, 복지로</p>
              <p>&copy; 2026 정부지원사업. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
