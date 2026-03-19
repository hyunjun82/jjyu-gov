import Sidebar from '@/components/Sidebar';
import EligibilityChecker from '@/components/EligibilityChecker';

export default function PolicyDetail({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-start">
      {/* Main Content */}
      <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 w-full overflow-hidden">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-3">청년 특화 연계</span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">청년도약계좌 - 매월 최대 2만4천원 기여금 지원</h1>
          <p className="text-gray-500 mt-2 text-sm">지원 부처: 서민금융진흥원 | 업데이트: 2024.05.20</p>
        </div>

        {/* The Inline Checker */}
        <EligibilityChecker />

        {/* Content Body */}
        <div className="prose max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#14C38E] pl-3 mb-3">1. 어떤 지원금인가요?</h2>
            <p>청년들의 <strong>중장기 자산형성</strong>을 지원하기 위해 설계된 정책입니다. 5년간 매월 70만원 한도 내에서 자유롭게 납입하면 매월 정부기여금을 지급하고 이자소득에 비과세 혜택을 제공합니다.</p>
          </section>

          {/* Inline Ad Placeholder */}
          <div className="my-8 bg-gray-50 w-full h-40 rounded-lg flex items-center justify-center text-gray-400 text-sm border-2 border-dashed border-gray-300">
            <span className="text-center">
              [구글 애드센스 본문 중간 광고]<br/>
              관련성 높은 맞춤형 대출/금융 배너 광고 노출 구간
            </span>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#14C38E] pl-3 mb-3">2. 누가 받을 수 있나요? (지원 대상)</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li><strong>연령:</strong> 만 19세 ~ 34세 청년 (병역이행기간 최대 6년 추가 인정)</li>
              <li><strong>소득:</strong> 직전 과세기간의 총급여액이 7,500만원 이하</li>
              <li><strong>가구소득:</strong> 가구원 수에 따른 기준 중위소득 180% 이하 (2023년 기준)</li>
              <li className="text-red-500 text-xs mt-2">※ 직전 3개년도 중 1회 이상 금융소득종합과세 대상자는 가입이 제한됩니다.</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl mt-8">
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#14C38E] pl-3 mb-4">3. 나무위키 관련 정책 (Internal Links)</h2>
            <p className="text-sm text-gray-600 mb-4">유사한 중복 수혜 가능 정책들을 확인해보세요! 놓치면 손해입니다.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#" className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-[#14C38E] hover:shadow-md transition-all group">
                <h4 className="font-bold text-lg text-gray-800 group-hover:text-[#14C38E] mb-1">청년내일저축계좌 👉</h4>
                <p className="text-xs text-gray-500 line-clamp-2">차상위 계층 청년을 위한 더 높은 정부 기여금 지원 제도입니다.</p>
              </a>
              <a href="#" className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-[#14C38E] hover:shadow-md transition-all group">
                <h4 className="font-bold text-lg text-gray-800 group-hover:text-[#14C38E] mb-1">청년월세 특별지원 👉</h4>
                <p className="text-xs text-gray-500 line-clamp-2">도약계좌를 유지하면서 월세 부담을 최대 월 20만원까지 줄이세요.</p>
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Right Sidebar */}
      <Sidebar />
    </div>
  );
}
