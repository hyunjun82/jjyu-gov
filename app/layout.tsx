import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Search, Bell, FileText, MoreHorizontal, Bookmark } from 'lucide-react';

export const metadata: Metadata = {
  title: '지원금허브 | 정부 지원금·환급금·대출 정보 포털',
  description: '정부에서 지원하는 보조금, 환급금, 대출 정보를 한눈에. 매일 업데이트되는 최신 정책 정보를 확인하세요.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* ── Sticky Header ── */}
        <header className="app-header">
          <Link href="/">
            <div className="logo">지원금<span>허브</span></div>
          </Link>
          <div className="header-actions">
            <button aria-label="검색"><Search size={18} /></button>
            <button aria-label="알림" style={{ position: 'relative' }}>
              <Bell size={18} />
              <span style={{ position: 'absolute', top: 6, right: 6, width: 7, height: 7, background: '#EF4444', borderRadius: '50%', border: '2px solid #fff' }} />
            </button>
          </div>
        </header>

        {/* ── Page Content ── */}
        {children}

        {/* ── Bottom Navigation (gg24.kr style) ── */}
        <nav className="bottom-nav">
          <Link href="/" className="active">
            <Home size={22} />
            <span>홈</span>
          </Link>
          <Link href="/category/fund">
            <FileText size={22} />
            <span>맞춤 정책</span>
          </Link>
          <Link href="/category/refund">
            <Bookmark size={22} />
            <span>환급금</span>
          </Link>
          <Link href="/category/loan">
            <Search size={22} />
            <span>대출 정보</span>
          </Link>
          <Link href="/more">
            <MoreHorizontal size={22} />
            <span>더보기</span>
          </Link>
        </nav>
      </body>
    </html>
  );
}
