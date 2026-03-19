import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, Bell, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: '지원금허브 | 정부 지원금·환급금·대출 정보 포털',
  description: '정부에서 지원하는 보조금, 환급금, 대출 정보를 한눈에. 매일 업데이트되는 최신 정책 정보를 지원금허브에서 확인하세요.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* Top Bar */}
        <header style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg, #0066ff, #00bfff)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: 16 }}>G</div>
              <span style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e' }}>지원금<span style={{ color: '#0066ff' }}>허브</span></span>
            </Link>

            {/* Center Nav */}
            <nav style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <Link href="/category/fund" style={{ padding: '8px 16px', fontSize: 15, fontWeight: 600, color: '#374151', textDecoration: 'none', borderRadius: 8, transition: 'all 0.15s' }}>지원금</Link>
              <Link href="/category/refund" style={{ padding: '8px 16px', fontSize: 15, fontWeight: 600, color: '#374151', textDecoration: 'none', borderRadius: 8 }}>환급금</Link>
              <Link href="/category/loan" style={{ padding: '8px 16px', fontSize: 15, fontWeight: 600, color: '#374151', textDecoration: 'none', borderRadius: 8 }}>대출 정보</Link>
              <Link href="/category/youth" style={{ padding: '8px 16px', fontSize: 15, fontWeight: 600, color: '#0066ff', textDecoration: 'none', borderRadius: 8 }}>청년 특화</Link>
            </nav>

            {/* Right Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Search style={{ width: 18, height: 18, color: '#6b7280' }} />
              </button>
              <button style={{ width: 40, height: 40, borderRadius: 10, border: '1px solid #e5e7eb', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative' }}>
                <Bell style={{ width: 18, height: 18, color: '#6b7280' }} />
                <span style={{ position: 'absolute', top: 8, right: 8, width: 8, height: 8, background: '#ef4444', borderRadius: '50%', border: '2px solid #fff' }}></span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px 60px' }}>
          {children}
        </main>

        {/* Footer */}
        <footer style={{ background: '#fff', borderTop: '1px solid #e5e7eb', padding: '40px 20px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>지원금<span style={{ color: '#0066ff' }}>허브</span></div>
                <p style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.6 }}>정부 지원금, 환급금, 정책 자금 정보 제공 서비스<br/>gov-jjyu.co.kr</p>
              </div>
              <div style={{ display: 'flex', gap: 32 }}>
                <div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: '#6b7280', marginBottom: 12 }}>카테고리</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <Link href="/category/fund" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none' }}>지원금</Link>
                    <Link href="/category/refund" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none' }}>환급금</Link>
                    <Link href="/category/loan" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none' }}>대출 정보</Link>
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: '#6b7280', marginBottom: 12 }}>스포크 사이트</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <a href="https://loan-jjyu.co.kr" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none' }}>대출 비교</a>
                    <a href="https://calc-jjyu.co.kr" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none' }}>계산기</a>
                    <a href="https://law-jjyu.co.kr" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none' }}>법률 상담</a>
                  </div>
                </div>
                <div>
                  <h4 style={{ fontSize: 13, fontWeight: 700, color: '#6b7280', marginBottom: 12 }}>고객지원</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <Link href="/about" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none' }}>회사소개</Link>
                    <Link href="/terms" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none' }}>이용약관</Link>
                    <Link href="/privacy" style={{ fontSize: 14, color: '#9ca3af', textDecoration: 'none' }}>개인정보처리방침</Link>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ borderTop: '1px solid #e5e7eb', marginTop: 32, paddingTop: 24, fontSize: 12, color: '#9ca3af', display: 'flex', justifyContent: 'space-between' }}>
              <span>© 2026 지원금허브. All rights reserved.</span>
              <span>데이터 출처: 공공데이터포털, 보조금24, 복지로</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
