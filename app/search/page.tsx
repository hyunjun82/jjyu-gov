import type { Metadata } from 'next';
import SearchClient from './SearchClient';

export const metadata: Metadata = {
  title: '검색 | 정부지원사업',
  description: '지원금·환급금·대출·연금·보험 등 정부지원 제도를 제목과 소제목으로 찾아봅니다.',
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <main className="container" style={{ padding: '32px 0 64px' }}>
      <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 6 }}>검색</h1>
      <p style={{ color: '#8B95A1', marginBottom: 20, fontSize: 15 }}>
        제목과 소제목에서 함께 찾습니다.
      </p>
      <SearchClient />
    </main>
  );
}
