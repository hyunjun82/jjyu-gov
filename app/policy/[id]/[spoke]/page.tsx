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
  { label: '가입 나이', doyak: '만 19~34세', hope: '만 19~34세', note: '' },
  { label: '납입 기간', doyak: '5년', hope: '2년', note: '도약계좌 2.5배' },
  { label: '월 납입 한도', doyak: '최대 70만원', hope: '최대 50만원', note: '' },
  { label: '만기 수령액', doyak: '최대 5,000만원', hope: '최대 1,260만원', note: '약 4배 차이' },
  { label: '정부 지원', doyak: '기여금 월 최대 40만원', hope: '이자 지원 (저축장려금)', note: '' },
  { label: '비과세', doyak: '이자소득 비과세', hope: '이자소득 비과세', note: '동일' },
  { label: '소득 조건', doyak: '7,500만원 이하', hope: '3,600만원 이하', note: '도약계좌 2배' },
  { label: '중복 가입', doyak: '동시 불가', hope: '동시 불가', note: '순차 가입 가능' },
  { label: '신청 상태', doyak: '2026년 신청 가능', hope: '2024년 만기 종료', note: '' },
];

/* ── FAQ 데이터 (출처 + 내부링크) ── */
const faqData = [
  {
    q: '희망적금 중도해지 후에도 도약계좌에 가입할 수 있나요?',
    a: '가능합니다. 희망적금을 중도해지했더라도 도약계좌 자격 조건(나이·소득)만 충족하면 신규 가입됩니다. 다만 중도해지 시 저축장려금은 돌려받지 못합니다.',
    source: '청년도약계좌 자격확인',
    sourceUrl: '/policy/1#eligibility',
  },
  {
    q: '도약계좌 만기 수령액이 왜 희망적금보다 4배나 큰가요?',
    a: '납입 기간과 한도가 다릅니다. 희망적금은 2년간 월 50만원(최대 1,200만원), 도약계좌는 5년간 월 70만원(최대 4,200만원)입니다. 정부기여금 방식도 이자 보조에서 직접 지급으로 바뀌어 차이가 더 벌어집니다.',
    source: '정부기여금 계산법',
    sourceUrl: '/policy/1/기여금-계산',
  },
  {
    q: '희망적금 만기금을 도약계좌에 일시납입할 수 있나요?',
    a: '전환 신청 시 희망적금 만기금을 도약계좌에 일시납입할 수 있습니다. 일시납입 한도는 희망적금 만기 수령액 범위 내이며, 전환 신청 기한(만기 후 2개월) 안에 해야 합니다.',
    source: '청년도약계좌 전체 정보',
    sourceUrl: '/policy/1',
  },
  {
    q: '도약계좌와 청년미래적금은 뭐가 다른가요?',
    a: '청년미래적금은 2026년 하반기 출시 예정인 도약계좌 후속 상품입니다. 3년 만기, 우대형(기여금 12%)과 일반형(기여금 6%)으로 나뉩니다. 도약계좌 가입자는 갈아타기가 가능할 예정입니다.',
    source: '청년도약계좌 전체 정보',
    sourceUrl: '/policy/1',
  },
];

/* ── 출처 목록 ── */
const sources = [
  { name: '금융위원회 청년도약계좌 안내', url: 'https://www.fsc.go.kr/no010101/81550' },
  { name: '정책브리핑 – 희망적금→도약계좌 갈아타기 총정리', url: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148925112' },
  { name: '서민금융진흥원 – 청년도약계좌 상품안내', url: 'https://www.kinfa.or.kr' },
];

export default function SpokePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const spokeUrl = `${SITE_URL}/policy/1/vs-희망적금`;

  /* ── JSON-LD 스키마 ── */
  const schemas = [
    articleSchema({
      title: '청년도약계좌 vs 청년희망적금 차이 비교',
      description:
        '청년도약계좌와 청년희망적금의 만기수령액·납입한도·정부지원·소득조건 9가지를 비교합니다. 희망적금 만기 후 갈아타기 방법까지.',
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
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
        />
      ))}

      <div className="container">
        {/* 브레드크럼 */}
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

            {/* ── 헤더 ── */}
            <header className="detail-header">
              <div className="detail-badges">
                <span className="badge badge-fund">지원금</span>
                <span className="badge badge-new">비교</span>
              </div>
              <h1 className="detail-title">
                청년도약계좌 vs 청년희망적금, 뭐가 다를까?
              </h1>

              {/* SGE 답변 박스: 자기완결형 40~60단어 */}
              <div className="answer-box">
                <p>
                  청년도약계좌는 5년간 월 70만원을 납입해 최대 5,000만원을 만드는 제도이고,
                  청년희망적금은 2년간 월 50만원으로 최대 1,260만원을 만드는 제도였습니다.
                  희망적금은 2024년 만기 종료되었고, 현재 신청 가능한 건 도약계좌뿐입니다.
                  희망적금 만기자는 도약계좌로 갈아탈 수 있습니다.
                </p>
              </div>

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

            {/* ── H2-1: 만기 수령액 얼마나 차이 나나? (실제 검색: 도약계좌 희망적금 만기 수령액 차이) ── */}
            <section className="detail-card" id="comparison">
              <h2 className="detail-card-head">만기 수령액, 얼마나 차이 나나?</h2>
              <div className="detail-card-body" style={{ padding: 0 }}>

                {/* 핵심 수치 박스 */}
                <div className="highlight-numbers">
                  <div className="highlight-num-item primary">
                    <span className="highlight-num-label">청년도약계좌</span>
                    <span className="highlight-num-value">최대 5,000만원</span>
                    <span className="highlight-num-sub">5년 · 월 70만원 · 기여금 포함</span>
                  </div>
                  <div className="highlight-num-vs">vs</div>
                  <div className="highlight-num-item">
                    <span className="highlight-num-label">청년희망적금</span>
                    <span className="highlight-num-value">최대 1,260만원</span>
                    <span className="highlight-num-sub">2년 · 월 50만원 · 이자지원</span>
                  </div>
                </div>

                {/* 상세 비교표 */}
                <div style={{ overflowX: 'auto' }}>
                  <table className="compare-table">
                    <caption className="sr-only">청년도약계좌와 청년희망적금 9개 항목 비교표</caption>
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

            {/* ── H2-2: 희망적금 끝났는데 도약계좌로 갈아탈 수 있나? (실제 검색: 희망적금 만기 후 도약계좌 갈아타기) ── */}
            <section className="detail-card" id="transfer">
              <h2 className="detail-card-head">희망적금 끝났는데 도약계좌로 갈아탈 수 있나?</h2>
              <div className="detail-card-body">

                {/* 자기완결형 답변 (SGE 추출 대상) */}
                <div className="answer-box-inline">
                  가능합니다. 희망적금 만기 후 2개월 안에 도약계좌로 전환 신청하면 됩니다.
                  만기금을 도약계좌에 일시납입할 수도 있습니다.
                </div>

                <div className="info-checklist">
                  <strong>갈아타기 조건 3가지</strong>
                  <ul>
                    <li><span className="check-icon">&#10003;</span> 희망적금 만기 완료 (중도해지는 해당 없음)</li>
                    <li><span className="check-icon">&#10003;</span> 도약계좌 자격 조건 충족 (나이 만 19~34세, 소득 7,500만원 이하)</li>
                    <li><span className="check-icon">&#10003;</span> 만기일로부터 2개월 이내 전환 신청</li>
                  </ul>
                </div>

                <div className="warning-box">
                  <strong>주의:</strong> 2개월 기한을 넘기면 전환이 아닌 일반 신규 가입 절차를 밟아야 합니다.
                  만기일 확인은 가입 은행 앱에서 할 수 있습니다.
                </div>

                <p className="source-inline">
                  출처: <a href="https://www.korea.kr/multi/visualNewsView.do?newsId=148925112" target="_blank" rel="noopener noreferrer">정책브리핑 – 희망적금 만기자 도약계좌 갈아타기 총정리</a>
                </p>
              </div>
            </section>

            {/* ── H2-3: 동시 가입은 안 되나? (실제 검색: 청년도약계좌 희망적금 중복가입 가능) ── */}
            <section className="detail-card" id="overlap">
              <h2 className="detail-card-head">도약계좌와 희망적금, 동시 가입은 안 되나?</h2>
              <div className="detail-card-body">

                <div className="answer-box-inline">
                  동시 가입은 불가합니다. 하지만 희망적금 만기 후 도약계좌로 순차 가입은 가능합니다.
                  희망적금 중도해지 후 도약계좌 신규 가입도 됩니다.
                </div>

                <table className="mini-table">
                  <caption className="sr-only">중복가입 가능 여부 정리</caption>
                  <thead>
                    <tr>
                      <th scope="col">상황</th>
                      <th scope="col">가입 가능 여부</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>희망적금 유지 중 + 도약계좌 신규 가입</td>
                      <td className="text-danger">불가</td>
                    </tr>
                    <tr>
                      <td>희망적금 만기 후 → 도약계좌 전환 신청</td>
                      <td className="text-success">가능 (2개월 내)</td>
                    </tr>
                    <tr>
                      <td>희망적금 중도해지 후 → 도약계좌 신규 가입</td>
                      <td className="text-success">가능 (자격 충족 시)</td>
                    </tr>
                    <tr>
                      <td>도약계좌 + 청년미래적금 동시 가입</td>
                      <td className="text-danger">불가 (예정)</td>
                    </tr>
                  </tbody>
                </table>

                <p className="source-inline">
                  출처: <a href="https://www.fsc.go.kr/no010101/81550" target="_blank" rel="noopener noreferrer">금융위원회 청년도약계좌 FAQ</a>
                </p>
              </div>
            </section>

            {/* 광고 */}
            <div className="ad-slot">광고 영역</div>

            {/* ── H2-4: 그래서 지금 뭘 해야 하나? (행동 유도) ── */}
            <section className="detail-card" id="action">
              <h2 className="detail-card-head">지금 뭘 해야 하나?</h2>
              <div className="detail-card-body">

                <div className="action-split">
                  <div className="action-case">
                    <strong>희망적금 만기자라면</strong>
                    <ol>
                      <li>가입 은행 앱에서 만기일 확인</li>
                      <li>만기 후 2개월 안에 도약계좌 전환 신청</li>
                      <li>만기금 일시납입 여부 결정</li>
                    </ol>
                  </div>
                  <div className="action-case">
                    <strong>처음 가입하는 청년이라면</strong>
                    <ol>
                      <li>나이(만 19~34세)·소득(7,500만원 이하) 확인</li>
                      <li>은행 앱 설치 (국민·신한·하나·우리·농협)</li>
                      <li>소득확인증명서 홈택스에서 발급</li>
                    </ol>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
                  <Link href="/policy/1#eligibility" className="btn-cta">
                    내가 대상자인지 30초 확인
                  </Link>
                  <a href="https://www.gov.kr" className="btn-cta" style={{ background: 'var(--gov-primary-hover)' }}>
                    도약계좌 바로 신청
                  </a>
                </div>
              </div>
            </section>

            {/* ── FAQ (details/summary + 출처 내부링크) ── */}
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

            {/* ── 출처 섹션 ── */}
            <section className="source-section" id="sources">
              <h2 className="source-section-title">이 글의 출처</h2>
              <ul className="source-list">
                {sources.map((s, i) => (
                  <li key={i}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
                  </li>
                ))}
              </ul>
              <p className="source-updated">마지막 검수: 2026.03.20</p>
            </section>

            {/* 허브 유도 */}
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
