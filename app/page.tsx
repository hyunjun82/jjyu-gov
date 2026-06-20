import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PoliciesBySlug } from '@/data/policies/manifest';
import AdSense from '@/components/AdSense';

/* ── 카테고리 ── */
const categories = [
  { id: 'fund',   label: '지원금', icon: '💰', href: '/category/fund' },
  { id: 'refund', label: '환급금', icon: '💳', href: '/category/refund' },
  { id: 'loan',   label: '대출',   icon: '🏦', href: '/category/loan' },
  { id: 'youth',  label: '청년',   icon: '👤', href: '/category/youth' },
  { id: 'welfare',label: '복지',   icon: '❤️', href: '/category/welfare' },
];

/* ──────────────────────────────────────────────────
 * 메인 노출 정책 설정
 *
 * ✅ 올바른 수정 방법:
 *    slug 와 badge 만 이곳에 추가/변경.
 *    title·org·amount·deadline 등은 data/policies/{slug}.ts 에서 자동 조회.
 *
 * ❌ 절대 금지:
 *    숫자 id 사용 / title·org·amount 직접 하드코딩
 *    (하드코딩하면 정책 데이터가 바뀌어도 홈이 자동 반영되지 않음)
 * ────────────────────────────────────────────────── */
const FEATURED: {
  slug: string;
  badge: 'hot' | 'urgent' | 'new';
  desc?: string; // summary 가 없거나 너무 길 때만 짧게 직접 입력
}[] = [
  {
    slug: 'national-pension-reduction',
    badge: 'new',
    desc: '국민연금 받으며 일해도 월 519만원 미만이면 안 깎인다. 2026.6.17 감액 기준 상향, 2025년분 자동 환급.',
  },
  {
    slug: 'basic-pension',
    badge: 'hot',
    desc: '만 65세 이상 소득하위 70% 어르신 매월 최대 34만 9,700원. 10명 중 7명 대상.',
  },
  {
    slug: 'earned-income-tax-credit',
    badge: 'urgent',
  },
  {
    slug: 'parental-leave-pay',
    badge: 'hot',
  },
  {
    slug: 'youth-tomorrow-savings',
    badge: 'urgent',
  },
  {
    slug: 'basic-livelihood-allowance',
    badge: 'hot',
    desc: '중위소득 32% 이하 가구에 생계급여 매월 지급. 1인 가구 최대 82만 556원.',
  },
  {
    slug: 'k-pass',
    badge: 'hot',
    desc: '월 15회 이상 대중교통 이용 시 지출액의 20~53% 환급. 청년 30%·저소득 53%.',
  },
  {
    slug: 'job-seeker-benefit',
    badge: 'new',
  },
];

/* ──────────────────────────────────────────────────
 * 마감 임박 정책 설정 (slug 만 입력)
 * dDay 는 실제 deadline 에서 계산 예정 — 지금은 수동 입력
 * ────────────────────────────────────────────────── */
const EXPIRING: { slug: string; dDay: number }[] = [
  { slug: 'youth-tomorrow-savings',   dDay: 3  },
  { slug: 'earned-income-tax-credit', dDay: 15 },
  { slug: 'disability-pension',       dDay: 30 },
];

/* ── manifest 에서 실제 데이터 조회 ── */
const hotPolicies = FEATURED
  .map(({ slug, badge, desc }) => {
    const p = PoliciesBySlug[slug];
    if (!p) return null;
    return {
      id:       p.slug ?? slug,
      title:    p.title,
      org:      typeof p.org === 'string' ? p.org.split(' (')[0] : p.org, // 괄호 주석 제거
      cat:      p.catSlug ?? 'fund',
      badge,
      deadline: p.deadline ?? '상시',
      amount:   p.amount ?? '',
      desc:     desc ?? (typeof p.summary === 'string' && p.summary.length < 120 ? p.summary : ''),
    };
  })
  .filter(Boolean) as NonNullable<ReturnType<typeof FEATURED['map']>[number]>[];

const expiring = EXPIRING
  .map(({ slug, dDay }) => {
    const p = PoliciesBySlug[slug];
    if (!p) return null;
    return {
      id:    p.slug ?? slug,
      title: p.title,
      org:   typeof p.org === 'string' ? p.org.split(' (')[0] : p.org,
      cat:   p.catSlug ?? 'fund',
      dDay,
    };
  })
  .filter(Boolean) as NonNullable<ReturnType<typeof EXPIRING['map']>[number]>[];

const notices = [
  { title: '2026년 상반기 정부지원사업 신규 공고 안내',               date: '2026.03.19' },
  { title: '보조금24 데이터 연동 점검 공지 (3/20 02:00~06:00)',      date: '2026.03.18' },
  { title: '소상공인 경영안정자금 신청 방법 변경 안내',                date: '2026.03.15' },
];

/* ── 유틸 ── */
function catBadge(c: string)    { return c === 'fund' ? 'badge-fund' : c === 'refund' ? 'badge-refund' : 'badge-loan'; }
function catLabel(c: string)    { return c === 'fund' ? '지원금'     : c === 'refund' ? '환급금'       : '대출'; }
function statusBadge(b: string) { return b === 'hot'  ? 'badge-hot'  : b === 'new'    ? 'badge-new'    : 'badge-urgent'; }
function statusLabel(b: string) { return b === 'hot'  ? '인기'       : b === 'new'    ? '신규'         : '마감임박'; }

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

      {/* ══════ 광고 gov1 ══════ */}
      <div className="container">
        <div className="ad-slot" style={{ margin: '20px 0' }}>
          <AdSense slot="7082828373" />
        </div>
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
                      color:      p.dDay <= 3 ? '#E8344E' : undefined,
                      fontWeight: p.dDay <= 3 ? 700       : undefined,
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
    </main>
  );
}
