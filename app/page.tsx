import Link from 'next/link';
import { Search, ArrowRight, ShieldCheck, Zap, Coins, ChevronRight, TrendingUp, Users, Building2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section with Glassmorphism Search */}
      <section className="relative overflow-hidden bg-white pt-16 sm:pt-24 lg:pt-32 pb-16">
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-gradient-to-b from-primary-50 to-white" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-primary-700 bg-primary-100/50 border border-primary-200 mb-8 hover:bg-primary-100 transition-colors cursor-pointer backdrop-blur-sm shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
            2026년 정부지원금 데이터 100% 동기화 완료
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            내가 받을 수 있는 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-sky-500">숨은 지원금</span>, <br className="hidden sm:block" />
            단 1분 만에 매칭해 드립니다.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
            복잡한 공공데이터를 AI가 완벽하게 분석했습니다. 거주지, 연령, 소득만 입력하면 나에게 딱 맞는 혜택을 찾아드리는 지능형 큐레이션 허브입니다.
          </p>

          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 p-2 sm:p-4 mb-16 flex flex-col sm:flex-row gap-4 items-center transform hover:scale-[1.01] transition-transform duration-300">
            <div className="flex-1 w-full relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 h-6 w-6" />
              <input 
                type="text" 
                placeholder="어떤 지원금을 찾으시나요? (예: 청년 도약, 소상공인 대출)" 
                className="w-full pl-14 pr-4 py-4 text-lg rounded-xl bg-slate-50/50 border border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
              />
            </div>
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              조건 검색 <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section (SaaS Vibe) */}
      <section className="border-y border-slate-200 bg-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-slate-900 mb-2">10,245+</span>
              <span className="text-sm font-medium text-slate-500 flex items-center gap-1 justify-center"><Building2 className="w-4 h-4"/> 등록된 정부 정책</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-primary-600 mb-2">₩3.2조</span>
              <span className="text-sm font-medium text-slate-500 flex items-center gap-1 justify-center"><TrendingUp className="w-4 h-4"/> 실시간 배정 예산</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-slate-900 mb-2">100%</span>
              <span className="text-sm font-medium text-slate-500 flex items-center gap-1 justify-center"><ShieldCheck className="w-4 h-4"/> 공공데이터 제휴</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl font-extrabold text-slate-900 mb-2">50만+</span>
              <span className="text-sm font-medium text-slate-500 flex items-center gap-1 justify-center"><Users className="w-4 h-4"/> 월간 활성 사용자</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Quick Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-24 flex-1">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">지금 가장 인기 있는 카테고리</h2>
          <p className="text-lg text-slate-600">허브 스포크(Hub & Spoke) 네트워크를 통해 가장 많이 조회된 혜택 포털입니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <Link href="/category/youth" className="group">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Coins className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">청년 환급/지원금</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1 text-lg">
                청년 도약 지원금, 월세 특별 지원, 교통비 환급액을 단 한 번의 클릭으로 조회하고 신청합니다.
              </p>
              <div className="flex items-center text-base font-bold text-emerald-600">
                자세히 보기 <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/category/business" className="group">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="bg-sky-100 text-sky-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">소상공인/기업 감면</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1 text-lg">
                정책 자금 대출, 세금 감면, 고용 유지 지원금 등 10개 스포크 사이트의 핵심 기업 혜택입니다.
              </p>
              <div className="flex items-center text-base font-bold text-sky-600">
                자세히 보기 <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/category/alert" className="group">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
              <div className="bg-pink-100 text-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-pink-600 transition-colors">거주지 맞춤 긴급알림</h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1 text-lg">
                선착순으로 마감되는 내 동네 지원금! 조건에 맞으면 카카오톡으로 가장 먼저 알려드립니다.
              </p>
              <div className="flex items-center text-base font-bold text-pink-600">
                자세히 보기 <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
        
        {/* Core Demo CTA (Premium Vibe) */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-primary-200 bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
              ✨ 수익화 아키텍처 V1.0 탑재 완료
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              실제 트래픽을 유발하는 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-sky-300">정책 상세 화면</span>을<br/>경험할 준비가 되셨나요?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              사용자 체류 시간을 늘리는 인터랙티브 '자격조건 체커', 10개 스포크 사이트로 유도하는 '사이드바', 그리고 최적화된 애드센스 인라인 배치가 모두 적용되었습니다.
            </p>
            <Link href="/policy/123">
              <button className="px-10 py-5 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xl rounded-2xl transition duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] flex items-center justify-center gap-3 mx-auto transform hover:-translate-y-1">
                정책 상세 페이지 데모 보기 <ArrowRight className="h-6 w-6" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
