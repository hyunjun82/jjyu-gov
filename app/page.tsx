import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, Flame, ChevronRight, ExternalLink, Zap } from 'lucide-react';

/* ───── 더미 데이터 (향후 Supabase API 연동) ───── */
const hotPolicies = [
  { id: '1', title: '2026 청년 도약 계좌 지원금', org: '금융위원회', category: '지원금', badge: 'hot', deadline: '2026.06.30', amount: '최대 5,000만원', desc: '5년간 월 70만원 납입 시 정부기여금 포함 5,000만원 목돈 마련. 만 19~34세 청년 대상.' },
  { id: '2', title: '청년 월세 특별지원 (3차)', org: '국토교통부', category: '지원금', badge: 'new', deadline: '2026.12.31', amount: '월 20만원 (12개월)', desc: '독립 거주 청년 월세 부담 완화. 본인 소득 기준 중위 60% 이하.' },
  { id: '3', title: '소상공인 경영안정자금 대출', org: '중소벤처기업부', category: '대출', badge: 'hot', deadline: '예산 소진 시', amount: '최대 7,000만원', desc: '소상공인·자영업자 저금리 정책자금. 연 3.0% 고정금리.' },
  { id: '4', title: '근로장려금 반기 신청', org: '국세청', category: '환급금', badge: 'urgent', deadline: '2026.03.31', amount: '최대 330만원', desc: '근로소득이 있는 저소득 가구에 현금 지급. 단독가구 2,200만원 미만.' },
  { id: '5', title: '서울시 청년 교통비 지원', org: '서울특별시', category: '환급금', badge: 'new', deadline: '2026.05.15', amount: '연 10만원', desc: '서울 거주 만 19~34세 청년 대중교통비 연간 10만원 환급.' },
  { id: '6', title: '국민취업지원제도 (1유형)', org: '고용노동부', category: '지원금', badge: 'hot', deadline: '상시', amount: '월 50만원 (6개월)', desc: '취업 준비 중인 저소득 구직자 대상, 구직촉진수당 최대 300만원 지급.' },
];

const expiringSoon = [
  { id: '7', title: '저소득 취약계층 건강보험료 지원', org: '건강보험공단', category: '환급금', dDay: 3 },
  { id: '8', title: '기형아검사비 지원', org: '보건복지부', category: '환급금', dDay: 5 },
  { id: '9', title: '안양시 청년 학자금 신용회복', org: '안양시', category: '환급금', dDay: 7 },
  { id: '10', title: '종량제 봉투 무료 지원 (차상위)', org: '환경부', category: '환급금', dDay: 12 },
];

const spokeLinks = [
  { name: '대출 비교', url: 'https://loan-jjyu.co.kr', emoji: '💳' },
  { name: '계산기', url: 'https://calc-jjyu.co.kr', emoji: '🧮' },
  { name: 'QnA', url: 'https://qna-jjyu.co.kr', emoji: '❓' },
  { name: '법률 정보', url: 'https://law-jjyu.co.kr', emoji: '⚖️' },
  { name: '약국 정보', url: 'https://pharm.jjyu.co.kr', emoji: '💊' },
  { name: '머니위키', url: 'https://moneywiki.co.kr', emoji: '📚' },
];

function getBadge(badge: string) {
  switch (badge) {
    case 'hot': return <span className="badge badge-red">🔥 인기</span>;
    case 'new': return <span className="badge badge-blue">✨ 신규</span>;
    case 'urgent': return <span className="badge badge-orange">⏰ 마감임박</span>;
    default: return null;
  }
}

function getCategoryBadge(cat: string) {
  switch (cat) {
    case '지원금': return <span className="badge badge-green">지원금</span>;
    case '환급금': return <span className="badge badge-orange">환급금</span>;
    case '대출': return <span className="badge badge-blue">대출</span>;
    default: return <span className="badge badge-green">{cat}</span>;
  }
}

export default function Home() {
  return (
    <div style={{ display: 'flex', gap: 28 }}>
      {/* ────── 메인 콘텐츠 ────── */}
      <div style={{ flex: 1, minWidth: 0 }}>

        {/* 맞춤 검색 바 */}
        <div style={{ background: 'linear-gradient(135deg, #0066ff 0%, #0047b3 100%)', borderRadius: 20, padding: '36px 32px', marginBottom: 28, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: -60, left: '30%', width: 300, height: 300, background: 'rgba(255,255,255,0.03)', borderRadius: '50%' }} />
          <h1 style={{ color: '#fff', fontSize: 26, fontWeight: 800, marginBottom: 8, position: 'relative', zIndex: 1 }}>내게 맞는 지원금을 찾아보세요</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, marginBottom: 20, position: 'relative', zIndex: 1 }}>10,245개 정부 정책 데이터를 실시간 분석 · 1시간 단위 업데이트</p>
          <div style={{ display: 'flex', gap: 8, position: 'relative', zIndex: 1 }}>
            <input 
              type="text" 
              placeholder="지원금 검색 (예: 청년 도약, 소상공인)" 
              style={{ flex: 1, padding: '14px 20px', borderRadius: 12, border: 'none', fontSize: 15, background: '#fff', outline: 'none' }}
            />
            <button style={{ padding: '14px 28px', background: '#1a1a2e', color: '#fff', border: 'none', borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
              검색
            </button>
          </div>
        </div>

        {/* 탭 네비 */}
        <div style={{ marginBottom: 28 }}>
          <div className="tab-nav">
            <Link href="/" className="tab-item active">전체</Link>
            <Link href="/category/fund" className="tab-item">지원금</Link>
            <Link href="/category/refund" className="tab-item">환급금</Link>
            <Link href="/category/loan" className="tab-item">대출 정보</Link>
          </div>
        </div>

        {/* 🔥 현재 주목 받는 지원금 */}
        <section style={{ marginBottom: 40 }}>
          <div className="section-title">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <TrendingUp style={{ width: 24, height: 24, color: '#0066ff' }} />
              현재 주목 받는 지원금
            </h2>
            <Link href="/category/fund" className="more-link" style={{ fontSize: 14, fontWeight: 600, color: '#0066ff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
              전체보기 <ChevronRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>

          <div style={{ display: 'grid', gap: 12 }}>
            {hotPolicies.map((p) => (
              <Link href={`/policy/${p.id}`} key={p.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="policy-card">
                  <div className="card-header">
                    <div>
                      <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                        {getCategoryBadge(p.category)}
                        {getBadge(p.badge)}
                      </div>
                      <div className="card-title">{p.title}</div>
                      <div className="card-org" style={{ marginTop: 4 }}>{p.org}</div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: '#0066ff', whiteSpace: 'nowrap' }}>{p.amount}</div>
                      <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 4 }}>~ {p.deadline}</div>
                    </div>
                  </div>
                  <div className="card-desc">{p.desc}</div>
                  <div className="card-footer">
                    <button className="apply-btn">신청하기 →</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ⏰ 곧 만료되는 지원금 */}
        <section style={{ marginBottom: 40 }}>
          <div className="section-title">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Clock style={{ width: 24, height: 24, color: '#ea580c' }} />
              곧 만료되는 지원금
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
            {expiringSoon.map((p) => (
              <Link href={`/policy/${p.id}`} key={p.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="policy-card" style={{ padding: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                        {getCategoryBadge(p.category)}
                        <span className="badge badge-red">D-{p.dDay}</span>
                      </div>
                      <div className="card-title" style={{ fontSize: 15 }}>{p.title}</div>
                      <div className="card-org" style={{ marginTop: 2 }}>{p.org}</div>
                    </div>
                    <button className="apply-btn" style={{ flexShrink: 0 }}>신청 →</button>
                  </div>
                  <div className="deadline-bar">
                    <div className={`fill ${p.dDay <= 3 ? 'urgent' : p.dDay <= 7 ? 'warning' : 'safe'}`} style={{ width: `${Math.max(10, 100 - p.dDay * 7)}%` }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 광고 영역 */}
        <div style={{ background: '#f1f3f5', borderRadius: 16, padding: 24, textAlign: 'center', marginBottom: 40, border: '1px dashed #d1d5db' }}>
          <span style={{ fontSize: 13, color: '#9ca3af' }}>광고 영역 (Ad Unit - 인피드 네이티브)</span>
        </div>
      </div>

      {/* ────── 우측 사이드바 ────── */}
      <aside style={{ width: 300, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
        
        {/* 빠른 자격 확인 CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)', borderRadius: 20, padding: '28px 24px', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <Zap style={{ width: 20, height: 20, color: '#fbbf24' }} />
            <span style={{ fontSize: 15, fontWeight: 700 }}>1분 자격 확인</span>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 16, lineHeight: 1.5 }}>나이, 소득, 거주지만 입력하면<br/>받을 수 있는 지원금을 찾아드려요</p>
          <Link href="/policy/123" style={{ display: 'block', textAlign: 'center', padding: '12px 0', background: '#0066ff', color: '#fff', borderRadius: 12, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
            지금 확인하기 →
          </Link>
        </div>

        {/* 스포크 사이트 네트워크 */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
            🔗 네트워크 사이트
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {spokeLinks.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', background: '#f7f8fa', borderRadius: 10, textDecoration: 'none', color: '#374151', fontSize: 13, fontWeight: 600, transition: 'all 0.15s', border: '1px solid transparent'
              }}>
                <span style={{ fontSize: 18 }}>{s.emoji}</span>
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* 사이드바 광고 */}
        <div style={{ background: '#f1f3f5', borderRadius: 16, padding: '40px 20px', textAlign: 'center', border: '1px dashed #d1d5db' }}>
          <span style={{ fontSize: 12, color: '#9ca3af' }}>광고 영역<br/>(Sidebar Ad)</span>
        </div>

        {/* 인기 키워드 */}
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', marginBottom: 14 }}>🔍 인기 검색어</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['청년도약계좌', '근로장려금', '월세지원', '소상공인대출', '교통비환급', '건강보험료', '육아수당', '전세자금'].map((kw, i) => (
              <Link key={i} href={`/search?q=${kw}`} style={{ padding: '6px 14px', background: '#f7f8fa', borderRadius: 20, fontSize: 13, fontWeight: 500, color: '#374151', textDecoration: 'none', border: '1px solid #e5e7eb', transition: 'all 0.15s' }}>
                {kw}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
