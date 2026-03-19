import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

/* ── 카테고리 ── */
const categories = [
  { id: 'fund', label: '지원금', icon: '💰', href: '/category/fund' },
  { id: 'refund', label: '환급금', icon: '💳', href: '/category/refund' },
  { id: 'loan', label: '대출', icon: '🏦', href: '/category/loan' },
  { id: 'youth', label: '청년', icon: '👤', href: '/category/youth' },
  { id: 'welfare', label: '복지', icon: '❤️', href: '/category/welfare' },
];

/* ── 더미 데이터 (API 연동 전) ── */
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


/* ── 유틸 ── */
function catBadge(c: string) { return c === 'fund' ? 'badge-fund' : c === 'refund' ? 'badge-refund' : 'badge-loan'; }
function catLabel(c: string) { return c === 'fund' ? '지원금' : c === 'refund' ? '환급금' : '대출'; }
function statusBadge(b: string) { return b === 'hot' ? 'badge-hot' : b === 'new' ? 'badge-new' : 'badge-urgent'; }
function statusLabel(b: string) { return b === 'hot' ? '인기' : b === 'new' ? '신규' : '마감임박'; }

export default function Home() {
  return (
    <main>
      {/* ══════ 히어로 ══════ */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            정부 지원금,<br />한곳에서 확인하세요
          </h1>
          <p className="hero-sub">지원금·환급금·대출 정보를 매일 업데이트합니다</p>

          <div className="hero-search">
            <input type="text" placeholder="지원금, 환급금, 정책명으로 검색" />
            <button>검색</button>
          </div>

          <div className="cat-tiles">
            {categories.map((c) => (
              <Link href={c.href} key={c.id} className="cat-tile">
                <span className="tile-icon">{c.icon}</span>
                <span className="tile-label">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 현재 주목 받는 지원금 ══════ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>현재 주목 받는 지원금</h2>
            <Link href="/category/fund" className="more">
              전체보기 <ChevronRight size={14} />
            </Link>
          </div>
          <div className="policy-list">
            {hotPolicies.map((p) => (
              <Link href={`/policy/${p.id}`} key={p.id} className="policy-card">
                <div className="card-body">
                  <div className="card-badges">
                    <span className={`badge ${catBadge(p.cat)}`}>{catLabel(p.cat)}</span>
                    <span className={`badge ${statusBadge(p.badge)}`}>{statusLabel(p.badge)}</span>
                  </div>
                  <div className="card-title">{p.title}</div>
                  <div className="card-org">{p.org}</div>
                  <div className="card-desc">{p.desc}</div>
                </div>
                <div className="card-right">
                  <div className="card-amount">{p.amount}</div>
                  <div className="card-deadline">~ {p.deadline}</div>
                  <span className="btn-primary">신청하기</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 광고 ══════ */}
      <div className="container">
        <div className="ad-slot">광고 영역 (인피드 네이티브 Ad)</div>
      </div>

      {/* ══════ 곧 만료되는 지원금 ══════ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>곧 만료되는 지원금</h2>
          </div>
          <div className="policy-list">
            {expiring.map((p) => (
              <Link href={`/policy/${p.id}`} key={p.id} className="policy-card">
                <div className="card-body">
                  <div className="card-badges">
                    <span className={`badge ${catBadge(p.cat)}`}>{catLabel(p.cat)}</span>
                    <span className="badge-dday">D-{p.dDay}</span>
                  </div>
                  <div className="card-title">{p.title}</div>
                  <div className="card-org">{p.org}</div>
                </div>
                <div className="card-right">
                  <div
                    className="card-deadline"
                    style={{
                      color: p.dDay <= 3 ? '#E8344E' : undefined,
                      fontWeight: p.dDay <= 3 ? 700 : undefined,
                    }}
                  >
                    {p.dDay <= 3 ? '마감 임박!' : `마감까지 ${p.dDay}일`}
                  </div>
                  <span className="btn-primary">신청하기</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 공지사항 ══════ */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>공지사항</h2>
          </div>
          <div className="notice-list">
            {notices.map((n, i) => (
              <div key={i} className="notice-item">
                <span className="notice-title">{n.title}</span>
                <span className="notice-date">{n.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연계 서비스(스포크)는 실제 사이트 준비 후 푸터 위에 소규모 배치 예정 */}
    </main>
  );
}
