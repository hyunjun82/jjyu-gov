import Link from 'next/link';
import { TrendingUp, Clock, ChevronRight, Newspaper } from 'lucide-react';

/* ── 더미 데이터 (향후 공공API + Supabase 연동) ── */
const hotPolicies = [
  { id: '1', title: '2026 청년 도약 계좌 지원금', org: '금융위원회', cat: 'fund', badge: 'hot', deadline: '2026.06.30', amount: '최대 5,000만원', desc: '5년간 월 70만원 납입 시 정부기여금 포함 5,000만원 목돈 마련. 만 19~34세 청년 대상.' },
  { id: '2', title: '청년 월세 특별지원 (3차)', org: '국토교통부', cat: 'fund', badge: 'new', deadline: '2026.12.31', amount: '월 20만원', desc: '독립 거주 청년 월세 부담 완화. 본인 소득 기준 중위 60% 이하.' },
  { id: '3', title: '소상공인 경영안정자금 대출', org: '중소벤처기업부', cat: 'loan', badge: 'hot', deadline: '예산 소진 시', amount: '최대 7,000만원', desc: '소상공인·자영업자 저금리 정책자금. 연 3.0% 고정금리.' },
  { id: '4', title: '근로장려금 반기 신청', org: '국세청', cat: 'refund', badge: 'urgent', deadline: '2026.03.31', amount: '최대 330만원', desc: '근로소득이 있는 저소득 가구에 현금 지급. 단독가구 2,200만원 미만.' },
  { id: '5', title: '서울시 청년 교통비 지원', org: '서울특별시', cat: 'refund', badge: 'new', deadline: '2026.05.15', amount: '연 10만원', desc: '서울 거주 만 19~34세 청년 대중교통비 연간 10만원 환급.' },
  { id: '6', title: '국민취업지원제도 (1유형)', org: '고용노동부', cat: 'fund', badge: 'hot', deadline: '상시', amount: '월 50만원', desc: '취업 준비 중인 저소득 구직자 대상, 구직촉진수당 최대 300만원 지급.' },
];

const expiringSoon = [
  { id: '7', title: '저소득 취약계층 건강보험료 지원', org: '건강보험공단', cat: 'refund', dDay: 3 },
  { id: '8', title: '기형아검사비 지원', org: '보건복지부', cat: 'refund', dDay: 5 },
  { id: '9', title: '안양시 청년 학자금 신용회복 지원', org: '안양시', cat: 'fund', dDay: 7 },
  { id: '10', title: '종량제 봉투 무료 지원 (차상위)', org: '환경부', cat: 'refund', dDay: 12 },
];

const feeds = [
  { title: '청년이면 총 480만 원 받는 청년월세 지원사업!', date: '26.03.19' },
  { title: '내 월급은 왜 항상 적게 느껴지는 걸까?', date: '26.03.18' },
  { title: '누구나 1인당 300만 원 장학금 받을 수 있는 꿈수저 청년 장학금!', date: '26.03.17' },
];

function catTag(cat: string) {
  const cls = cat === 'fund' ? 'tag-fund' : cat === 'refund' ? 'tag-refund' : 'tag-loan';
  const label = cat === 'fund' ? '지원금' : cat === 'refund' ? '환급금' : '대출';
  return <span className={`tag ${cls}`}>{label}</span>;
}

function badgeTag(b: string) {
  if (b === 'hot') return <span className="tag tag-hot">🔥 인기</span>;
  if (b === 'new') return <span className="tag tag-new">✨ 신규</span>;
  if (b === 'urgent') return <span className="tag tag-urgent">⏰ 마감임박</span>;
  return null;
}

export default function Home() {
  return (
    <>
      {/* ── Category Tabs ── */}
      <div className="cat-tabs">
        <span className="cat-tab active">전체</span>
        <Link href="/category/fund" className="cat-tab">지원금</Link>
        <Link href="/category/refund" className="cat-tab">환급금</Link>
        <Link href="/category/loan" className="cat-tab">대출 정보</Link>
        <Link href="/category/youth" className="cat-tab">청년</Link>
      </div>

      {/* ── 돈되는 피드 (뉴스) ── */}
      <div className="section">
        <div className="section-head">
          <h2><Newspaper size={20} style={{ verticalAlign: 'middle', marginRight: 6 }} />돈되는 피드</h2>
          <Link href="/feeds" className="more">더보기 <ChevronRight size={14} /></Link>
        </div>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none' }}>
          {feeds.map((f, i) => (
            <div key={i} style={{ minWidth: 220, background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: 16, flexShrink: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.4, marginBottom: 8, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{f.title}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{f.date} 발행</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 현재 주목받는 지원금 ── */}
      <div className="section">
        <div className="section-head">
          <h2><TrendingUp size={20} style={{ verticalAlign: 'middle', marginRight: 6, color: 'var(--primary)' }} />현재 주목 받는 지원금</h2>
          <Link href="/category/fund" className="more">전체보기 <ChevronRight size={14} /></Link>
        </div>
        {hotPolicies.map((p) => (
          <Link href={`/policy/${p.id}`} key={p.id} className="p-card">
            <div className="tags">
              {catTag(p.cat)}
              {badgeTag(p.badge)}
            </div>
            <div className="title">{p.title}</div>
            <div className="org">{p.org}</div>
            <div className="desc">{p.desc}</div>
            <div className="card-bottom">
              <div>
                <div className="amount">{p.amount}</div>
                <div className="deadline">~ {p.deadline}</div>
              </div>
              <span className="apply-btn">신청하기</span>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Ad Slot ── */}
      <div className="section">
        <div className="ad-slot">광고 영역 (인피드 네이티브)</div>
      </div>

      {/* ── 곧 만료되는 지원금 ── */}
      <div className="section">
        <div className="section-head">
          <h2><Clock size={20} style={{ verticalAlign: 'middle', marginRight: 6, color: '#E03131' }} />곧 만료되는 지원금</h2>
        </div>
        {expiringSoon.map((p) => (
          <Link href={`/policy/${p.id}`} key={p.id} className="p-card">
            <div className="tags">
              {catTag(p.cat)}
              <span className="tag tag-dday">D-{p.dDay}</span>
            </div>
            <div className="title">{p.title}</div>
            <div className="org">{p.org}</div>
            <div className="card-bottom">
              <div className="deadline">{p.dDay <= 3 ? '🚨 마감 임박!' : `마감까지 ${p.dDay}일`}</div>
              <span className="apply-btn">신청하기</span>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Ad Slot ── */}
      <div className="section">
        <div className="ad-slot">광고 영역 (하단 배너)</div>
      </div>
    </>
  );
}
