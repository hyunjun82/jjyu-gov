import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '지원금허브 | 당신에게 맞는 정부지원금 찾기',
  description: '청년, 소상공인, 저소득층을 위한 모든 정부 지원금과 환급금을 쉽고 빠르게 확인하세요.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-[#14C38E] rounded flex items-center justify-center text-white font-bold">G</div>
              <span className="font-bold text-xl tracking-tight text-gray-800">지원금<span className="text-[#14C38E]">허브</span></span>
            </div>
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-[#14C38E]">환급금 카테고리</a>
              <a href="#" className="hover:text-[#14C38E]">청년 특화</a>
              <a href="#" className="hover:text-[#14C38E]">사용자 맞춤 찾기</a>
            </nav>
          </div>
        </header>
        <main className="min-h-screen bg-gray-50 pb-20">
          {children}
        </main>
      </body>
    </html>
  )
}
