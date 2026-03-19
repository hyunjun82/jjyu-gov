export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">지원금 검색하기</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
          모든 지원금 리스트 (연동 대기)
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
          환급금 (연동 대기)
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-2 border-primary hover:bg-green-50 transition-colors flex items-center justify-center">
          <a href="/policy/123" className="text-primary font-bold hover:underline flex items-center">
            예시 정책 화면 바로가기 
            <span className="ml-2 text-xl">🚀</span>
          </a>
        </div>
      </div>
    </div>
  )
}
