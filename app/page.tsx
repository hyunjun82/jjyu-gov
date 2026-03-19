import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';

/* 더미 데이터 (Supabase 연동 전) */
const hotPolicies = [
  { id: '1', title: '2026 청년 도약 계좌 지원금', org: '금융위원회', cat: 'fund', badge: 'hot', deadline: '2026.06.30', amount: '최대 5,000만원', desc: '만 19~34세 청년이 5년간 월 최대 70만원 납입 시 정부기여금 포함 5,000만원 목돈 마련.' },
  { id: '2', title: '청년 월세 특별지원 (3차)', org: '국토교통부', cat: 'fund', badge: 'new', deadline: '2026.12.31', amount: '월 20만원 (12개월)', desc: '독립 거주 청년 월세 부담 완화. 본인 소득 기준 중위 60% 이하.' },
  { id: '3', title: '소상공인 경영안정자금 대출', org: '중소벤처기업부', cat: 'loan', badge: 'hot', deadline: '예산 소진 시', amount: '최대 7,000만원', desc: '소상공인·자영업자 저금리 정책자금. 연 3.0% 고정금리, 5년 분할 상환.' },
  { id: '4', title: '근로장려금 반기 신청', org: '국세청', cat: 'refund', badge: 'urgent', deadline: '2026.03.31', amount: '최대 330만원', desc: '근로소득이 있는 저소득 가구에 장려금 직접 지급. 단독가구 소득 2,200만원 미만.' },
  { id: '5', title: '서울시 청년 교통비 지원', org: '서울특별시', cat: 'refund', badge: 'new', deadline: '2026.05.15', amount: '연 10만원', desc: '서울 거주 만 19~34세 청년 대중교통비 연간 10만원 환급.' },
  { id: '6', title: '국민취업지원제도 (1유형)', org: '고용노동부', cat: 'fund', badge: 'hot', deadline: '상시', amount: '월 50만원 (6개월)', desc: '취업 준비 중인 저소득 구직자에게 구직촉진수당 최대 300만원 지급.' },
];

const expiring = [
  { id: '7', title: '저소득 취약계층 건강보험료 지원', org: '건강보험공단', cat: 'refund', dDay: 3 },
  { id: '8', title: '기형아검사비 지원', org: '보건복지부', cat: 'refund', dDay: 5 },
  { id: '9', title: '안양시 청년 학자금 신용회복', org: '안양시', cat: 'fund', dDay: 7 },
];

const notices = [
  { title: '2026년 상반기 정부지원사업 신규 공고 안내', date: '2026.03.19' },
  { title: '보조금24 데이터 연동 점검 공지 (3/20 02:00~06:00)', date: '2026.03.18' },
  { title: '소상공인 경영안정자금 신청 방법 변경 안내', date: '2026.03.15' },
];

const spokeLinks = [
  { name: '대출 비교', url: '#', emoji: '💳' },
  { name: '계산기', url: '#', emoji: '🧮' },
  { name: 'QnA 상담', url: '#', emoji: '❓' },
  { name: '법률 정보', url: '#', emoji: '⚖️' },
  { name: '약국 찾기', url: '#', emoji: '💊' },
  { name: '머니위키', url: '#', emoji: '📖' },
  { name: '보험 비교', url: '#', emoji: '🛡️' },
  { name: '세금 계산', url: '#', emoji: '🧾' },
  { name: '부동산', url: '#', emoji: '🏠' },
  { name: '취업 정보', url: '#', emoji: '💼' },
];

function catClass(c: string) { return c === 'fund' ? 'cat-fund' : c === 'refund' ? 'cat-refund' : 'cat-loan'; }
function catLabel(c: string) { return c === 'fund' ? '지원금' : c === 'refund' ? '환급금' : '대출'; }
function badgeClass(b: string) { return b === 'hot' ? 'cat-hot' : b === 'new' ? 'cat-new' : 'cat-urgent'; }
function badgeLabel(b: string) { return b === 'hot' ? '🔥 인기' : b === 'new' ? '✨ 신규' : '⏰ 마감임박'; }

export default function Home() {
  return (
    <div className="gov-wrap">
      {/* ══════ 메인 콘텐츠 ══════ */}
      <div className="gov-main">

        {/* 탭 */}
        <div className="gov-section" style={{ marginBottom: 16 }}>
          <div className="gov-tabs">
            <button className="gov-tab active">전체</button>
            <button className="gov-tab">지원금</button>
            <button className="gov-tab">환급금</button>
            <button className="gov-tab">대출 정보</button>
            <button className="gov-tab">청년</button>
          </div>
        </div>

        {/* 현재 주목받는 지원금 */}
        <div className="gov-section">
          <div className="gov-section-head">
            <h2>현재 주목 받는 지원금</h2>
            <Link href="/category/fund" className="more">전체보기 <ChevronRight size={14} /></Link>
          </div>
          <div>
            {hotPolicies.map((p) => (
              <Link href={`/policy/${p.id}`} key={p.id} className="policy-item">
                <div className="p-info">
                  <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
                    <span className={`p-cat ${catClass(p.cat)}`}>{catLabel(p.cat)}</span>
                    <span className={`p-cat ${badgeClass(p.badge)}`}>{badgeLabel(p.badge)}</span>
                  </div>
                  <div className="p-title">{p.title}</div>
                  <div className="p-org">{p.org}</div>
                  <div className="p-desc">{p.desc}</div>
                </div>
                <div className="p-right">
                  <div className="p-amount">{p.amount}</div>
                  <div className="p-deadline">~ {p.deadline}</div>
                  <span className="apply-btn">신청하기</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 광고 영역 */}
        <div className="ad-slot" style={{ margin: '16px 0' }}>광고 영역 (인피드 네이티브 Ad)</div>

        {/* 곧 만료되는 지원금 */}
        <div className="gov-section">
          <div className="gov-section-head">
            <h2>곧 만료되는 지원금</h2>
          </div>
          <div>
            {expiring.map((p) => (
              <Link href={`/policy/${p.id}`} key={p.id} className="policy-item">
                <div className="p-info">
                  <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
                    <span className={`p-cat ${catClass(p.cat)}`}>{catLabel(p.cat)}</span>
                    <span className="p-cat cat-hot" style={{ background: '#ffe3e3', color: '#c92a2a', fontWeight: 800 }}>D-{p.dDay}</span>
                  </div>
                  <div className="p-title">{p.title}</div>
                  <div className="p-org">{p.org}</div>
                </div>
                <div className="p-right">
                  <div className="p-deadline">{p.dDay <= 3 ? '🚨 마감 임박!' : `마감까지 ${p.dDay}일`}</div>
                  <span className="apply-btn">신청하기</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ══════ 우측 사이드바 ══════ */}
      <div className="gov-sidebar">

        {/* 자격 확인 CTA */}
        <div className="cta-box">
          <h3>🔍 맞춤 자격 확인</h3>
          <p>나이, 소득, 거주지만 입력하면<br/>받을 수 있는 지원금을 찾아드립니다</p>
          <Link href="/policy/123">
            <button className="cta-btn">자격 확인하기 →</button>
          </Link>
        </div>

        {/* 공지사항 */}
        <div className="side-card">
          <div className="side-card-head">📢 공지사항</div>
          <div className="side-card-body">
            {notices.map((n, i) => (
              <div key={i} style={{ padding: '10px 0', borderBottom: i < notices.length - 1 ? '1px solid #eef0f3' : 'none' }}>
                <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4, marginBottom: 2 }}>{n.title}</div>
                <div style={{ fontSize: 11, color: '#999' }}>{n.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 스포크 네트워크 (허브-스포크 구조) */}
        <div className="side-card">
          <div className="side-card-head">🔗 연계 서비스</div>
          <div className="side-card-body">
            {spokeLinks.map((s, i) => (
              <a key={i} href={s.url} className="spoke-link">
                <span className="s-icon">{s.emoji}</span>
                {s.name}
                <ExternalLink size={12} style={{ marginLeft: 'auto', color: '#ccc' }} />
              </a>
            ))}
          </div>
        </div>

        {/* 사이드바 광고 */}
        <div className="ad-slot">광고 영역 (Sidebar Ad)</div>
      </div>
    </div>
  );
}
