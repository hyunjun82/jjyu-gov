'use client';
export const runtime = 'edge';
import Link from 'next/link';
import { ChevronRight, ChevronDown, CheckCircle, XCircle, User } from 'lucide-react';
import { useState } from 'react';
import PolicySidebar from '@/components/PolicySidebar';
import {
  articleWithGovServiceSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  toJsonLd,
} from '@/lib/schema';
import { 기초연금Policy, 기초연금Spokes } from '@/data/policies/기초연금';

const SITE_URL = 'https://gov.jjyu.co.kr';

/* ── 정책별 스포크 목록 ── */
const spokeLists: Record<string, { slug: string; title: string }[]> = {
  '1': [
    { slug: 'vs-희망적금', title: '도약계좌 vs 희망적금 차이' },
    { slug: '중위소득', title: '중위소득 기준표 2026' },
    { slug: '군대-나이', title: '군대 나이 계산법' },
    { slug: '중도해지', title: '중도해지 하면 손해인가' },
    { slug: '소득없으면', title: '소득 없으면 가입 가능?' },
    { slug: '은행별-금리', title: '은행별 금리 비교' },
    { slug: '신청방법', title: '앱으로 3분 신청' },
    { slug: '납입금액', title: '납입금액 얼마가 최적?' },
    { slug: '기여금-계산', title: '정부기여금 계산법' },
  ],
  '2': 기초연금Spokes,
};

/* ── 청년도약계좌 데이터 (API 연동 전) ── */
const policy1 = {
  id: '1',
  title: '2026 청년도약계좌',
  org: '금융위원회',
  cat: '지원금',
  catSlug: 'fund',
  amount: '최대 5,000만원',
  deadline: '2026.06.30',
  views: 128470,
  applyUrl: 'https://www.gov.kr',
  datePublished: '2026-01-15T09:00:00+09:00',
  dateModified: '2026-03-20T09:00:00+09:00',
  summary:
    '만 19~34세 청년이 5년간 월 최대 70만원을 납입하면, 정부가 기여금을 추가 지원하여 5,000만원까지 목돈을 마련할 수 있는 청년 자산형성 지원 제도입니다.',
  audience: '만 19~34세, 개인소득 7,500만원 이하 청년',
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
    {
      q: '만 19세 이상 34세 이하입니까?',
      key: 'age',
      passTip: '나이 조건 충족',
      failTip: '병역이행 기간은 최대 6년까지 제외됩니다 (만 40세까지 가능)',
    },
    {
      q: '개인 소득이 연 7,500만원 이하입니까?',
      key: 'income',
      passTip: '소득 조건 충족',
      failTip: '총급여 기준입니다. 종합소득금액은 6,300만원 이하',
    },
    {
      q: '가구 소득이 중위소득 250% 이하입니까?',
      key: 'household',
      passTip: '가구소득 조건 충족',
      failTip: '아래 중위소득 기준표에서 우리 가구 기준을 확인하세요 ↓',
    },
    {
      q: '기존 청년희망적금 가입 이력이 없습니까?',
      key: 'nodup',
      passTip: '중복 가입 없음',
      failTip: '청년희망적금 만기 후 전환 신청은 가능합니다',
    },
    {
      q: '금융소득종합과세 대상자가 아닙니까?',
      key: 'nofinance',
      passTip: '금융소득 조건 충족',
      failTip: '금융소득(이자+배당) 연 2,000만원 초과 시 대상',
    },
  ],
  incomeTable: [
    { members: '1인', median: '2,392,013', threshold: '5,980,033' },
    { members: '2인', median: '3,932,658', threshold: '9,831,645' },
    { members: '3인', median: '5,025,353', threshold: '12,563,383' },
    { members: '4인', median: '6,097,773', threshold: '15,244,433' },
    { members: '5인', median: '7,108,192', threshold: '17,770,480' },
  ],
  applySteps: [
    {
      title: '은행 앱 다운로드',
      desc: '국민·신한·하나·우리·농협 중 하나를 선택하세요.',
    },
    {
      title: '청년도약계좌 메뉴 진입',
      desc: '앱 내 "청년도약계좌" 또는 "청년 적금" 메뉴를 찾으세요.',
    },
    {
      title: '본인인증 + 소득확인',
      desc: '신분증 촬영, 소득확인증명서 자동 연동 (홈택스 연계).',
    },
    {
      title: '납입금액 설정 + 개설 완료',
      desc: '월 1만원~70만원 사이에서 자유롭게 설정. 변경도 가능합니다.',
    },
  ],
  documents: ['신분증', '소득확인증명서', '가구원수 확인서류', '병적증명서 (해당 시)'],
  related: [
    { id: '2', title: '청년 월세 특별지원 (3차)', cat: '지원금' },
    { id: '5', title: '서울시 청년 교통비 지원', cat: '환급금' },
    { id: '6', title: '국민취업지원제도 (1유형)', cat: '지원금' },
    { id: '4', title: '근로장려금 반기 신청', cat: '환급금' },
  ],
  faq: [
    {
      q: '군 복무 기간은 나이에서 빠지나요?',
      a: '네. 병역이행 기간은 최대 6년까지 추가 인정됩니다. 만 19세~34세 기준에서 복무 기간만큼 연장되어 최대 만 40세까지 신청할 수 있습니다.',
      source: '금융위원회 청년도약계좌 FAQ',
      sourceUrl: '/policy/1#details',
    },
    {
      q: '중도해지하면 어떻게 되나요?',
      a: '정부기여금은 환수되고, 일반 적금 금리만 적용됩니다. 단, 사망·해외이주·천재지변 등 특별 중도해지 사유에 해당하면 정부기여금을 받을 수 있습니다.',
      source: '중도해지 상세 가이드',
      sourceUrl: '/policy/1/중도해지',
    },
    {
      q: '청년희망적금이랑 중복 가입이 가능한가요?',
      a: '동시 가입은 불가합니다. 청년희망적금 만기 후 도약계좌로 전환 신청할 수 있습니다.',
      source: '도약계좌 vs 희망적금 비교',
      sourceUrl: '/policy/1/vs-희망적금',
    },
    {
      q: '소득이 없어도 가입할 수 있나요?',
      a: '개인소득이 있어야 합니다. 단, 소득이 적을수록 정부기여금 비율이 높아집니다. 총급여 2,400만원 이하일 경우 월 최대 40만원의 기여금을 받습니다.',
      source: '소득 없으면 가입 가능? 가이드',
      sourceUrl: '/policy/1/소득없으면',
    },
    {
      q: '납입금액을 중간에 바꿀 수 있나요?',
      a: '가능합니다. 월 1만원~70만원 범위에서 자유롭게 변경할 수 있고, 일시 납입 중단 후 재개도 됩니다.',
      source: '납입금액 최적 가이드',
      sourceUrl: '/policy/1/납입금액',
    },
  ],
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const policies: Record<string, any> = {
  '1': policy1,
  '2': 기초연금Policy,
};

export default function PolicyDetailPage({ params }: { params: { id: string } }) {
  const [checks, setChecks] = useState<Record<string, boolean | null>>({});
  const [activeMethod, setActiveMethod] = useState<'app' | 'visit' | 'online'>('app');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const d = policies[params.id] || policy1;
  const spokeList = spokeLists[params.id] || spokeLists['1'];

  const totalQ = d.eligibility.length;
  const answered = Object.keys(checks).length;
  const passed = Object.values(checks).filter((v) => v === true).length;
  const failed = Object.values(checks).filter((v) => v === false).length;
  const allDone = answered === totalQ;
  const allPass = allDone && passed === totalQ;

  /* ── JSON-LD 스키마 (공통 유틸 사용) ── */
  const policyUrl = `${SITE_URL}/policy/${d.id}`;

  const schemas = [
    // 1. Article + GovernmentService 중첩
    articleWithGovServiceSchema(
      {
        title: `${d.title} 조건·신청방법 총정리 (2026)`,
        description: d.summary,
        url: policyUrl,
        datePublished: d.datePublished,
        dateModified: d.dateModified,
      },
      {
        name: d.title,
        org: d.org,
        serviceType: '정부지원금',
        audience: d.audience,
      },
    ),
    // 2. BreadcrumbList
    breadcrumbSchema([
      { name: '홈', url: SITE_URL },
      { name: d.cat, url: `${SITE_URL}/category/${d.catSlug}` },
      { name: d.title },
    ]),
    // 3. FAQPage
    faqSchema(d.faq),
    // 4. ItemList (스포크 목록)
    itemListSchema(
      `${d.title} 관련 가이드`,
      spokeList.map((s) => ({
        title: s.title,
        url: `${policyUrl}/${s.slug}`,
      })),
    ),
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
        {/* ── 브레드크럼 ── */}
        <nav className="breadcrumb" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <ChevronRight size={12} />
          <Link href={`/category/${d.catSlug}`}>{d.cat}</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{d.title}</span>
        </nav>

        {/* ── 정책 헤더 ── */}
        <header className="detail-header">
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

          <div className="detail-cta">
            <div>
              <div className="cta-amount-label">지원 금액</div>
              <div className="cta-amount">{d.amount}</div>
            </div>
            <a
              href={d.applyUrl}
              className="btn-cta"
            >
              신청하기
            </a>
          </div>
        </header>

        {/* ── 레이아웃: 본문 + 사이드바 ── */}
        <div className="policy-layout">
        <article className="policy-main">

        {/* ── 앵커 네비게이션 ── */}
        <nav className="anchor-nav" aria-label="페이지 내 이동">
          <a href="#summary">요약</a>
          <a href="#details">누가 얼마</a>
          <a href="#eligibility">자격확인</a>
          <a href="#income-table">중위소득</a>
          <a href="#apply">신청방법</a>
          <a href="#faq">FAQ</a>
        </nav>

        {/* ── 3줄 요약 ── */}
        <section className="detail-card" id="summary">
          <h2 className="detail-card-head">3줄 요약</h2>
          <div className="detail-card-body">
            <div className="summary-box">
              <ul>
                <li>만 19~34세 청년이 월 최대 70만원을 5년간 납입하면, 정부가 기여금을 얹어줍니다</li>
                <li>5년 만기 시 최대 5,000만원 수령 (비과세 + 이자소득 추가 지원)</li>
                <li>개인소득 7,500만원 이하 + 가구소득 중위 250% 이하면 신청 가능</li>
              </ul>
              <div className="summary-arrow">↓ 아래에서 내 조건을 바로 확인하세요</div>
            </div>
          </div>
        </section>

        {/* ── 상세 정보 테이블 ── */}
        <section className="detail-card" id="details">
          <h2 className="detail-card-head">누가 얼마를 받나?</h2>
          <table className="info-table">
            <caption className="sr-only">{d.title} 상세 정보</caption>
            <tbody>
              {d.details.map((item, i) => (
                <tr key={i}>
                  <th scope="row">{item.label}</th>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── 광고 슬롯 1 ── */}
        <div className="ad-slot">광고 영역</div>

        {/* ── 자격조건 체커 (시멘틱: fieldset + legend) ── */}
        <section className="detail-card" id="eligibility">
          <h2 className="detail-card-head">내가 신청할 수 있을까?</h2>
          <div className="detail-card-body">
            <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 20 }}>
              아래 항목을 클릭하여 자격 조건 충족 여부를 확인하세요.
            </p>
            <fieldset className="elig-fieldset">
              <legend className="sr-only">{d.title} 자격 조건 확인</legend>
              {d.eligibility.map((item, i) => {
                const val = checks[item.key];
                const cls = val === true ? 'pass' : val === false ? 'fail' : '';
                return (
                  <div className={`elig-item ${cls}`} key={i} role="group" aria-labelledby={`q-${item.key}`}>
                    <div style={{ flex: 1 }}>
                      <span className="elig-q" id={`q-${item.key}`}>{item.q}</span>
                      {val !== undefined && val !== null && (
                        <div className="elig-feedback">
                          {val ? (
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                              <CheckCircle size={13} /> {item.passTip}
                            </span>
                          ) : (
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                              <XCircle size={13} /> {item.failTip}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="elig-btns">
                      <button
                        className={val === true ? 'yes-active' : ''}
                        aria-pressed={val === true}
                        onClick={() => setChecks((p) => ({ ...p, [item.key]: true }))}
                      >
                        예
                      </button>
                      <button
                        className={val === false ? 'no-active' : ''}
                        aria-pressed={val === false}
                        onClick={() => setChecks((p) => ({ ...p, [item.key]: false }))}
                      >
                        아니오
                      </button>
                    </div>
                  </div>
                );
              })}
            </fieldset>

            {/* 결과 */}
            {allDone && (
              <div className={`elig-result ${allPass ? 'pass' : 'fail'}`}>
                {allPass ? (
                  <>
                    <div className="elig-result-title">
                      <span style={{ fontSize: 24 }}>&#127881;</span>
                      <span>정부기여금 월 최대 40만원, 받을 수 있어요</span>
                    </div>
                    <p className="elig-result-desc">
                      {totalQ}개 조건 모두 충족했습니다.
                      5년 만기 시 최대 5,000만원까지 수령 가능합니다.
                    </p>
                    <a
                      href={d.applyUrl}
                      className="btn-cta btn-cta-lg"
                    >
                      은행 앱에서 3분 만에 신청하기
                    </a>
                    <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>
                      국민·신한·하나·우리·농협 앱에서 바로 가능
                    </p>
                  </>
                ) : (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <XCircle size={20} />
                      {failed}개 조건이 맞지 않습니다
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 8 }}>
                      위 항목에서 빨간색 안내를 확인하세요. 병역 기간 인정, 소득 기준 변경 등
                      예외 사항이 있을 수 있습니다.
                    </p>
                  </>
                )}
              </div>
            )}

            {/* 부분 진행 상태 */}
            {answered > 0 && !allDone && (
              <div style={{
                marginTop: 12,
                fontSize: 13,
                color: 'var(--text-muted)',
                textAlign: 'center',
              }}>
                {answered}/{totalQ}개 확인 완료
              </div>
            )}
          </div>
        </section>

        {/* ── 중위소득 기준표 ── */}
        <section className="detail-card" id="income-table">
          <h2 className="detail-card-head">우리 가구 중위소득, 250% 이하인가?</h2>
          <div className="detail-card-body" style={{ padding: 0 }}>
            <div style={{ overflowX: 'auto' }}>
              <table className="income-table">
                <caption className="sr-only">2026년 가구원수별 중위소득 및 250% 기준표</caption>
                <thead>
                  <tr>
                    <th scope="col">가구원수</th>
                    <th scope="col">중위소득 (월)</th>
                    <th scope="col">250% 기준 (월)</th>
                  </tr>
                </thead>
                <tbody>
                  {d.incomeTable.map((row, i) => (
                    <tr key={i}>
                      <td>{row.members}</td>
                      <td>{row.median}원</td>
                      <td>{row.threshold}원</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{
              padding: '12px 20px',
              fontSize: 12,
              color: 'var(--text-muted)',
              borderTop: '1px solid var(--border-light)',
            }}>
              ※ 건강보험료로 간편 확인 가능. 건강보험공단(1577-1000)에 문의하세요.
            </div>
          </div>
        </section>

        {/* ── 광고 슬롯 2 ── */}
        <div className="ad-slot">광고 영역</div>

        {/* ── 신청 방법 ── */}
        <section className="detail-card" id="apply">
          <h2 className="detail-card-head">어떻게 신청하나?</h2>
          <div className="detail-card-body">
            {/* 방법 탭 */}
            <div className="method-tabs" role="tablist">
              <button
                role="tab"
                aria-selected={activeMethod === 'app'}
                className={`method-tab ${activeMethod === 'app' ? 'active' : ''}`}
                onClick={() => setActiveMethod('app')}
              >
                은행 앱 (가장 빠름)
              </button>
              <button
                role="tab"
                aria-selected={activeMethod === 'visit'}
                className={`method-tab ${activeMethod === 'visit' ? 'active' : ''}`}
                onClick={() => setActiveMethod('visit')}
              >
                은행 방문
              </button>
              <button
                role="tab"
                aria-selected={activeMethod === 'online'}
                className={`method-tab ${activeMethod === 'online' ? 'active' : ''}`}
                onClick={() => setActiveMethod('online')}
              >
                온라인 신청
              </button>
            </div>

            {/* 앱 신청 */}
            {activeMethod === 'app' && (
              <ol className="step-list" role="tabpanel">
                {d.applySteps.map((step, i) => (
                  <li className="step-item" key={i}>
                    <div className="step-num">{i + 1}</div>
                    <div className="step-content">
                      <div className="step-title">{step.title}</div>
                      <div className="step-desc">{step.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            )}

            {/* 은행 방문 */}
            {activeMethod === 'visit' && (
              <ol className="step-list" role="tabpanel">
                <li className="step-item">
                  <div className="step-num">1</div>
                  <div className="step-content">
                    <div className="step-title">가까운 은행 영업점 방문</div>
                    <div className="step-desc">국민·신한·하나·우리·농협 영업점 어디든 가능합니다.</div>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-num">2</div>
                  <div className="step-content">
                    <div className="step-title">청년도약계좌 개설 요청</div>
                    <div className="step-desc">신분증과 소득확인증명서를 지참하세요. 현장에서 발급도 가능합니다.</div>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-num">3</div>
                  <div className="step-content">
                    <div className="step-title">서류 제출 + 개설 완료</div>
                    <div className="step-desc">심사 후 2~3영업일 내 개설이 완료됩니다.</div>
                  </div>
                </li>
              </ol>
            )}

            {/* 온라인 */}
            {activeMethod === 'online' && (
              <ol className="step-list" role="tabpanel">
                <li className="step-item">
                  <div className="step-num">1</div>
                  <div className="step-content">
                    <div className="step-title">은행 홈페이지 접속</div>
                    <div className="step-desc">각 은행 공식 홈페이지에서 청년도약계좌 메뉴를 찾으세요.</div>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-num">2</div>
                  <div className="step-content">
                    <div className="step-title">공동인증서(공인인증서) 로그인</div>
                    <div className="step-desc">본인 명의 공동인증서가 필요합니다.</div>
                  </div>
                </li>
                <li className="step-item">
                  <div className="step-num">3</div>
                  <div className="step-content">
                    <div className="step-title">소득 확인 + 계좌 개설</div>
                    <div className="step-desc">홈택스 연계로 소득이 자동 확인됩니다. 납입액 설정 후 완료.</div>
                  </div>
                </li>
              </ol>
            )}

            {/* 필요 서류 */}
            <div style={{ marginTop: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>필요 서류</div>
              <div className="doc-list">
                {d.documents.map((doc, i) => (
                  <span className="doc-chip" key={i}>{doc}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <a
                href={d.applyUrl}
                className="btn-cta"
              >
                지금 바로 신청하기
              </a>
            </div>
          </div>
        </section>

        {/* ── 광고 슬롯 3 ── */}
        <div className="ad-slot">광고 영역</div>

        {/* ── FAQ (시멘틱: details/summary) ── */}
        <section className="detail-card" id="faq">
          <h2 className="detail-card-head">자주 묻는 질문</h2>
          <div className="faq-list">
            {d.faq.map((item, i) => (
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

        {/* ── 출처 섹션 ── */}
        <section className="source-section" id="sources">
          <h2 className="source-section-title">이 글의 출처</h2>
          <ul className="source-list">
            <li><a href="https://www.fsc.go.kr/no010101/81550" target="_blank" rel="noopener noreferrer">금융위원회 – 청년도약계좌 안내</a></li>
            <li><a href="https://www.kinfa.or.kr" target="_blank" rel="noopener noreferrer">서민금융진흥원 – 청년도약계좌 상품안내</a></li>
            <li><a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer">복지로 – 청년도약계좌 자격확인</a></li>
            <li><a href="https://www.gov.kr" target="_blank" rel="noopener noreferrer">정부24 – 청년도약계좌 신청</a></li>
          </ul>
          <p className="source-updated">마지막 검수: 2026.03.20</p>
        </section>

        {/* ── 관련 정책 ── */}
        <section className="detail-card" id="related">
          <h2 className="detail-card-head">관련 정책 더보기</h2>
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
        </section>

        </article>{/* /policy-main */}

        {/* ── 사이드바 ── */}
        <PolicySidebar
          policyId={d.id}
          policyTitle={d.title.replace(/^2026\s*/, '')}
          spokes={spokeList}
          applyUrl={d.applyUrl}
        />

        </div>{/* /policy-layout */}
      </div>
    </main>
  );
}
