'use client';
import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';

/* ── 더미 데이터 (API 연동 전) ── */
const policy = {
  title: '2026 청년 도약 계좌 지원금',
  org: '금융위원회',
  cat: '지원금',
  amount: '최대 5,000만원',
  deadline: '2026.06.30',
  views: 12847,
  applyUrl: 'https://www.gov.kr',
  summary:
    '만 19~34세 청년이 5년간 월 최대 70만원을 납입하면, 정부가 기여금을 추가 지원하여 5,000만원까지 목돈을 마련할 수 있는 청년 자산형성 지원 제도입니다.',
  details: [
    { label: '지원대상', value: '만 19~34세 청년 (병역이행기간 최대 6년 추가 인정)' },
    { label: '소득요건', value: '개인소득 7,500만원 이하, 가구소득 중위 250% 이하' },
    { label: '지원유형', value: '현금(기여금) + 비과세 혜택' },
    { label: '지원내용', value: '정부기여금 월 최대 40만원 + 비과세 + 이자소득 추가 지원' },
    { label: '신청방법', value: '시중은행 앱(국민·신한·하나·우리·농협) 또는 영업점 방문 신청' },
    { label: '신청기간', value: '2026년 1월 1일 ~ 2026년 6월 30일' },
    { label: '제출서류', value: '신분증, 소득확인증명서, 가구원 관계증명서' },
    { label: '문의처', value: '금융위원회 1332, 서민금융콜센터 1397' },
  ],
  eligibility: [
    { q: '만 19세 이상 34세 이하입니까?', key: 'age' },
    { q: '개인 소득이 연 7,500만원 이하입니까?', key: 'income' },
    { q: '가구 소득이 중위소득 250% 이하입니까?', key: 'household' },
    { q: '기존 청년희망적금 가입 이력이 없습니까?', key: 'nodup' },
    { q: '금융소득종합과세 대상자가 아닙니까?', key: 'nofinance' },
  ],
  related: [
    { id: '2', title: '청년 월세 특별지원 (3차)', cat: '지원금' },
    { id: '5', title: '서울시 청년 교통비 지원', cat: '환급금' },
    { id: '6', title: '국민취업지원제도 (1유형)', cat: '지원금' },
    { id: '4', title: '근로장려금 반기 신청', cat: '환급금' },
  ],
  faq: [
    {
      q: '청년 도약 계좌는 누가 신청할 수 있나요?',
      a: '만 19세 이상 34세 이하 청년 중 개인소득 7,500만원 이하, 가구소득 중위 250% 이하인 경우 신청 가능합니다. 병역이행기간은 최대 6년까지 추가 인정됩니다.',
    },
    {
      q: '청년 도약 계좌 신청은 어디서 하나요?',
      a: '시중은행 앱(국민·신한·하나·우리·농협) 또는 가까운 영업점을 방문하여 신청할 수 있습니다. 신분증, 소득확인증명서, 가구원 관계증명서가 필요합니다.',
    },
  ],
};


export default function PolicyDetailPage() {
  const [checks, setChecks] = useState<Record<string, boolean | null>>({});
  const d = policy;

  const totalQ = d.eligibility.length;
  const answered = Object.keys(checks).length;
  const passed = Object.values(checks).filter((v) => v === true).length;
  const allDone = answered === totalQ;
  const allPass = allDone && passed === totalQ;

  /* FAQ Schema (JSON-LD) */
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <main className="detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        {/* ── 브레드크럼 ── */}
        <div className="breadcrumb">
          <Link href="/">홈</Link>
          <ChevronRight size={12} />
          <Link href="/category/fund">지원금</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{d.title}</span>
        </div>

        {/* ── 정책 헤더 ── */}
        <div className="detail-header">
          <div className="detail-badges">
            <span className="badge badge-fund">{d.cat}</span>
            <span className="badge badge-hot">인기</span>
          </div>
          <h1 className="detail-title">{d.title}</h1>
          <div className="detail-meta">
            <span>{d.org}</span>
            <span>마감: {d.deadline}</span>
            <span>{d.views.toLocaleString()}명 조회</span>
          </div>
          <div className="detail-cta">
            <div>
              <div className="cta-amount-label">지원 금액</div>
              <div className="cta-amount">{d.amount}</div>
            </div>
            <a
              href={d.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              신청하기 <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* ── 앵커 네비게이션 ── */}
        <nav className="anchor-nav">
          <a href="#overview">사업개요</a>
          <a href="#details">상세정보</a>
          <a href="#eligibility">자격확인</a>
          <a href="#related">관련정책</a>
          <a href="#faq">FAQ</a>
        </nav>

        {/* ── 사업 개요 ── */}
        <div className="detail-card" id="overview">
          <div className="detail-card-head">사업 개요</div>
          <div className="detail-card-body">
            <p style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>{d.summary}</p>
          </div>
        </div>

        {/* ── 상세 정보 테이블 ── */}
        <div className="detail-card" id="details">
          <div className="detail-card-head">상세 정보</div>
          <table className="info-table">
            <tbody>
              {d.details.map((item, i) => (
                <tr key={i}>
                  <th>{item.label}</th>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── 광고 ── */}
        <div className="ad-slot">광고 영역 (인라인 Ad Unit)</div>

        {/* ── 자격조건 체커 ── */}
        <div className="detail-card" id="eligibility">
          <div className="detail-card-head">자격 조건 확인</div>
          <div className="detail-card-body">
            <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 20 }}>
              아래 항목을 클릭하여 자격 조건 충족 여부를 확인하세요.
            </p>
            {d.eligibility.map((item, i) => {
              const val = checks[item.key];
              const cls = val === true ? 'pass' : val === false ? 'fail' : '';
              return (
                <div className={`elig-item ${cls}`} key={i}>
                  <span className="elig-q">{item.q}</span>
                  <div className="elig-btns">
                    <button
                      className={val === true ? 'yes-active' : ''}
                      onClick={() => setChecks((p) => ({ ...p, [item.key]: true }))}
                    >
                      예
                    </button>
                    <button
                      className={val === false ? 'no-active' : ''}
                      onClick={() => setChecks((p) => ({ ...p, [item.key]: false }))}
                    >
                      아니오
                    </button>
                  </div>
                </div>
              );
            })}
            {allDone && (
              <div className={`elig-result ${allPass ? 'pass' : 'fail'}`}>
                {allPass ? (
                  <>
                    <div>축하합니다! 자격 조건을 모두 충족합니다.</div>
                    <a
                      href={d.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cta"
                      style={{ marginTop: 16, display: 'inline-flex' }}
                    >
                      지금 바로 신청하기 <ExternalLink size={18} />
                    </a>
                  </>
                ) : (
                  '일부 조건이 맞지 않습니다. 아래 관련 정책을 확인해 보세요.'
                )}
              </div>
            )}
          </div>
        </div>

        {/* ── 관련 정책 ── */}
        <div className="detail-card" id="related">
          <div className="detail-card-head">관련 정책 더보기</div>
          {d.related.map((r, i) => (
            <Link href={`/policy/${r.id}`} key={i} className="related-item">
              <div className="rel-info">
                <div style={{ marginBottom: 4 }}>
                  <span
                    className={`badge ${r.cat === '지원금' ? 'badge-fund' : 'badge-refund'}`}
                  >
                    {r.cat}
                  </span>
                </div>
                <div className="rel-title">{r.title}</div>
              </div>
              <ChevronRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            </Link>
          ))}
        </div>

        {/* ── FAQ ── */}
        <div className="detail-card" id="faq">
          <div className="detail-card-head">자주 묻는 질문</div>
          <div className="detail-card-body">
            {d.faq.map((item, i) => (
              <div key={i} style={{ marginBottom: i < d.faq.length - 1 ? 24 : 0 }}>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>
                  Q. {item.q}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
