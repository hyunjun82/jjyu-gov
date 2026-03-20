'use client';
import Link from 'next/link';
import { ChevronRight, ChevronDown, User } from 'lucide-react';
import { useState } from 'react';
import PolicySidebar from '@/components/PolicySidebar';
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  toJsonLd,
} from '@/lib/schema';

const SITE_URL = 'https://gov.jjyu.co.kr';

const spokeList = [
  { slug: 'vs-희망적금', title: '도약계좌 vs 희망적금 차이' },
  { slug: '중위소득', title: '중위소득 기준표 2026' },
  { slug: '군대-나이', title: '군대 나이 계산법' },
  { slug: '중도해지', title: '중도해지 하면 손해인가' },
  { slug: '소득없으면', title: '소득 없으면 가입 가능?' },
  { slug: '은행별-금리', title: '은행별 금리 비교' },
  { slug: '신청방법', title: '앱으로 3분 신청' },
  { slug: '납입금액', title: '납입금액 얼마가 최적?' },
  { slug: '기여금-계산', title: '정부기여금 계산법' },
];

/* ── 비교 데이터 ── */
const comparison = [
  { label: '가입 나이', doyak: '만 19~34세', hope: '만 19~34세' },
  { label: '납입 기간', doyak: '5년', hope: '2년' },
  { label: '월 납입 한도', doyak: '최대 70만원', hope: '최대 50만원' },
  { label: '만기 수령액', doyak: '최대 5,000만원', hope: '최대 1,260만원' },
  { label: '정부 지원', doyak: '기여금 월 최대 40만원', hope: '이자 지원 (저축장려금)' },
  { label: '비과세', doyak: '이자소득 비과세', hope: '이자소득 비과세' },
  { label: '소득 조건', doyak: '7,500만원 이하', hope: '3,600만원 이하' },
  { label: '중복 가입', doyak: '희망적금과 동시 불가', hope: '도약계좌와 동시 불가' },
  { label: '신청 상태', doyak: '2026년 신청 가능', hope: '2024년 만기 종료' },
];

/* ── FAQ 데이터 (출처 + 내부링크) ── */
const faqData = [
  {
    q: '희망적금 중도해지 후에도 도약계좌에 가입할 수 있나요?',
    a: '가능합니다. 희망적금을 중도해지한 경우에도 도약계좌 자격 조건(나이, 소득)만 충족하면 신규 가입이 됩니다. 다만 중도해지 시 저축장려금은 받을 수 없습니다.',
    source: '청년도약계좌 자격확인',
    sourceUrl: '/policy/1#eligibility',
  },
  {
    q: '도약계좌와 희망적금 만기 수령액 차이가 왜 이렇게 큰가요?',
    a: '납입 기간과 한도가 다르기 때문입니다. 희망적금은 2년간 월 50만원(최대 1,200만원 납입)이고, 도약계좌는 5년간 월 70만원(최대 4,200만원 납입)입니다. 여기에 정부기여금 방식도 달라서 도약계좌가 약 3배 더 큰 목돈을 만들 수 있습니다.',
    source: '정부기여금 계산법',
    sourceUrl: '/policy/1/기여금-계산',
  },
  {
    q: '희망적금 저축 실적이 도약계좌에서 인정되나요?',
    a: '직접 이전되지는 않습니다. 희망적금 만기 후 도약계좌로 전환 신청하면 별도의 새 계좌로 개설됩니다. 단, 전환 신청 시 심사에서 희망적금 유지 이력이 긍정적으로 반영될 수 있습니다.',
    source: '청년도약계좌 전체 정보',
    sourceUrl: '/policy/1',
  },
];

export default function SpokePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const spokeUrl = `${SITE_URL}/policy/1/vs-희망적금`;

  /* ── JSON-LD 스키마 (공통 유틸 사용) ── */
  const schemas = [
    articleSchema({
      title: '청년도약계좌 vs 청년희망적금, 뭐가 다른가?',
      description:
        '청년도약계좌와 청년희망적금의 가입조건·납입한도·정부지원·만기수령액 9가지를 비교합니다. 지금 나에게 맞는 적금을 확인해 보세요.',
      url: spokeUrl,
      datePublished: '2026-01-20T09:00:00+09:00',
      dateModified: '2026-03-20T09:00:00+09:00',
    }),
    breadcrumbSchema([
      { name: '홈', url: SITE_URL },
      { name: '청년도약계좌', url: `${SITE_URL}/policy/1` },
      { name: 'vs 희망적금 차이' },
    ]),
    faqSchema(faqData),
  ];

  return (
    <main className="detail">
      {/* JSON-LD 스키마 일괄 삽입 */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
        />
      ))}

      <div className="container">
        {/* 빵가루 */}
        <nav className="breadcrumb" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <ChevronRight size={12} />
          <Link href="/policy/1">청년도약계좌</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
            vs 희망적금 차이
          </span>
        </nav>

        <div className="policy-layout">
          <article className="policy-main">

            {/* 헤더 */}
            <header className="detail-header">
              <div className="detail-badges">
                <span className="badge badge-fund">지원금</span>
                <span className="badge badge-new">비교</span>
              </div>
              <h1 className="detail-title">
                청년도약계좌 vs 청년희망적금, 뭐가 다른가?
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginTop: 8 }}>
                둘 다 청년 자산형성 제도지만 기간, 금액, 혜택이 완전히 다릅니다.
                희망적금은 2024년 만기 종료되었고, 현재 신청 가능한 건 도약계좌뿐입니다.
              </p>

              {/* 에디터 프로필 (E-E-A-T) */}
              <div className="editor-profile">
                <div className="editor-avatar">
                  <User size={16} />
                </div>
                <div className="editor-info">
                  <span className="editor-name">정부지원사업 에디터</span>
                  <span className="editor-role">공공데이터 기반 · 2026.03.20 검수</span>
                </div>
              </div>
            </header>

            {/* 결론 박스 */}
            <div className="detail-card">
              <div className="detail-card-body">
                <div className="summary-box">
                  <ul>
                    <li>도약계좌가 3배 더 큰 목돈을 만들 수 있음 (5,000만원 vs 1,260만원)</li>
                    <li>희망적금은 이미 종료. 만기 후 도약계좌로 전환 가능</li>
                    <li>소득 조건이 도약계좌가 더 넓음 (7,500만원 vs 3,600만원)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ── H2: 한눈에 비교 ── */}
            <section className="detail-card" id="comparison">
              <h2 className="detail-card-head">한눈에 비교</h2>
              <div className="detail-card-body" style={{ padding: 0 }}>
                <div style={{ overflowX: 'auto' }}>
                  <table className="compare-table">
                    <caption className="sr-only">청년도약계좌와 청년희망적금 비교표</caption>
                    <thead>
                      <tr>
                        <th scope="col">항목</th>
                        <th scope="col" className="highlight">청년도약계좌</th>
                        <th scope="col">청년희망적금</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.map((row, i) => (
                        <tr key={i}>
                          <td className="compare-label">{row.label}</td>
                          <td className="compare-doyak">{row.doyak}</td>
                          <td className="compare-hope">{row.hope}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 광고 */}
            <div className="ad-slot">광고 영역</div>

            {/* ── H2: 청년희망적금은 왜 없어졌나? ── */}
            <section className="detail-card" id="transition">
              <h2 className="detail-card-head">청년희망적금은 왜 없어졌나?</h2>
              <div className="detail-card-body">
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 16 }}>
                  청년희망적금은 2022년 2월에 출시되어 2024년 2월에 만기가 도래한 2년짜리 한시 상품이었습니다.
                  정부가 청년 자산형성 지원을 더 강화하기 위해 납입 기간과 한도를 대폭 늘린 후속 상품을 기획했고,
                  그 결과물이 청년도약계좌입니다.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 16 }}>
                  희망적금은 월 50만원씩 2년, 도약계좌는 월 70만원씩 5년입니다.
                  납입 총액 자체가 1,200만원 vs 4,200만원으로 3.5배 차이가 나고,
                  정부기여금 방식도 이자 보조에서 직접 기여금 지급으로 바뀌었습니다.
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  희망적금이 &quot;종료&quot;된 것이 아니라, 도약계좌로 &quot;업그레이드&quot;된 것에 가깝습니다.
                  기존 가입자가 만기 후 자연스럽게 도약계좌로 넘어올 수 있도록 전환 제도도 마련되어 있습니다.
                </p>
              </div>
            </section>

            {/* ── H2: 희망적금 가입자, 도약계좌 전환 가능? ── */}
            <section className="detail-card" id="convert">
              <h2 className="detail-card-head">희망적금 가입자, 도약계좌 전환 가능?</h2>
              <div className="detail-card-body">
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 16 }}>
                  청년희망적금 만기(2년)가 끝난 후 도약계좌로 전환 신청할 수 있습니다.
                  동시 가입은 불가하지만, 순차 가입은 가능합니다.
                </p>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>전환 조건:</strong>
                  <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                    <li>희망적금 만기 완료 (중도해지 제외)</li>
                    <li>도약계좌 자격 조건 충족 (나이, 소득)</li>
                    <li>전환 시 희망적금 저축 실적 인정</li>
                  </ul>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)', marginTop: 16 }}>
                  전환 신청은 희망적금 만기일로부터 2개월 이내에 해야 합니다.
                  기한이 지나면 일반 신규 가입 절차를 밟아야 하므로 만기일을 꼭 확인하세요.
                </p>
              </div>
            </section>

            {/* 광고 */}
            <div className="ad-slot">광고 영역</div>

            {/* ── H2: 그래서 지금 뭘 해야 하나? ── */}
            <section className="detail-card" id="action">
              <h2 className="detail-card-head">그래서 지금 뭘 해야 하나?</h2>
              <div className="detail-card-body">
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 16 }}>
                  희망적금 가입자라면 만기일을 확인하고, 만기 후 2개월 안에 도약계좌 전환을 신청하세요.
                  희망적금 경험이 없는 청년이라면 바로 도약계좌 자격 조건을 확인하면 됩니다.
                </p>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: 20 }}>
                  <strong style={{ color: 'var(--text-primary)' }}>지금 할 일 체크리스트:</strong>
                  <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                    <li>나이(만 19~34세)와 소득(7,500만원 이하) 확인</li>
                    <li>가구소득 중위 250% 이하인지 확인 (건강보험공단 1577-1000)</li>
                    <li>은행 앱(국민·신한·하나·우리·농협) 설치</li>
                    <li>소득확인증명서 홈택스에서 미리 발급</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/policy/1#eligibility" className="btn-cta">
                    자격 조건 확인하기
                  </Link>
                  <a href="https://www.gov.kr" className="btn-cta" style={{ background: 'var(--gov-primary-hover)' }}>
                    지금 바로 신청하기
                  </a>
                </div>
              </div>
            </section>

            {/* ── FAQ (시멘틱: details/summary + 출처 내부링크) ── */}
            <section className="detail-card" id="faq">
              <h2 className="detail-card-head">자주 묻는 질문</h2>
              <div className="faq-list">
                {faqData.map((item, i) => (
                  <details
                    key={i}
                    className={`faq-item ${openFaq === i ? 'open' : ''}`}
                    open={openFaq === i}
                    onToggle={(e) => {
                      const el = e.currentTarget;
                      if (el.open) {
                        setOpenFaq(i);
                      } else if (openFaq === i) {
                        setOpenFaq(null);
                      }
                    }}
                  >
                    <summary className="faq-question">
                      <span>Q. {item.q}</span>
                      <ChevronDown
                        size={18}
                        style={{
                          transition: 'transform 0.2s',
                          transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                          flexShrink: 0,
                          color: 'var(--text-muted)',
                        }}
                      />
                    </summary>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                      {item.source && (
                        <div className="faq-source">
                          출처: <Link href={item.sourceUrl}>{item.source}</Link>
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 광고 */}
            <div className="ad-slot">광고 영역</div>

            {/* 허브로 돌아가기 */}
            <Link
              href="/policy/1"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '16px 0',
                fontSize: 14,
                fontWeight: 600,
                color: 'var(--gov-primary)',
              }}
            >
              ← 청년도약계좌 전체 정보 보기
            </Link>

          </article>{/* /policy-main */}

          {/* 사이드바 */}
          <PolicySidebar
            policyId="1"
            policyTitle="청년도약계좌"
            spokes={spokeList}
            currentSpoke="vs-희망적금"
            applyUrl="https://www.gov.kr"
          />

        </div>{/* /policy-layout */}
      </div>
    </main>
  );
}
