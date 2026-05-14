'use client';
import Link from 'next/link';
import { ChevronRight, ChevronDown, CheckCircle, XCircle, User } from 'lucide-react';
import { Fragment, ReactNode, useState } from 'react';
import PolicySidebar from '@/components/PolicySidebar';
import KeyFactsBox from '@/components/KeyFactsBox';
import CollapsibleTOC from '@/components/CollapsibleTOC';
import QACard, { Hi, QABox, QATable } from '@/components/QACard';
import {
  articleWithGovServiceSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  toJsonLd,
} from '@/lib/schema';
import { 기초연금Policy, 기초연금Spokes } from '@/data/policies/기초연금';
import { 청년미래적금Policy, 청년미래적금Spokes } from '@/data/policies/청년미래적금';
import { 부모급여Policy, 부모급여Spokes } from '@/data/policies/부모급여';
import { firstmeetPolicy, firstmeetSpokes } from '@/data/policies/first-meet';

const SITE_URL = 'https://gov.jjyu.co.kr';

const spokeLists: Record<string, { slug: string; title: string }[]> = {
  '1': 청년미래적금Spokes,
  '2': 기초연금Spokes,
  '3': 부모급여Spokes,
  '4': firstmeetSpokes,
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const policies: Record<string, any> = {
  '1': 청년미래적금Policy,
  '2': 기초연금Policy,
  '3': 부모급여Policy,
  '4': firstmeetPolicy,
};

// ── 본문 텍스트 안 highlights 단어를 노란 형광으로 자동 강조 ──
function renderWithHi(text: string, highlights: string[] = []): ReactNode {
  if (!text) return null;
  if (!highlights || !highlights.length) return text;
  const sorted = [...highlights].sort((a, b) => b.length - a.length);
  const escaped = sorted.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(pattern);
  return parts.map((part, idx) => {
    if (highlights.includes(part)) {
      return <Hi key={idx}>{part}</Hi>;
    }
    return <Fragment key={idx}>{part}</Fragment>;
  });
}

// ── QABox content 안 줄바꿈(\n)을 <br>로 ──
function renderBoxContent(content: string, highlights: string[] = []): ReactNode {
  if (!content) return null;
  if (content.includes('\n')) {
    return content.split('\n').map((line, i) => (
      <Fragment key={i}>
        {i > 0 && <br />}
        {renderWithHi(line, highlights)}
      </Fragment>
    ));
  }
  return renderWithHi(content, highlights);
}

export default function PolicyDetailClient({ params }: { params: { id: string } }) {
  const [checks, setChecks] = useState<Record<string, boolean | null>>({});
  const [activeMethod, setActiveMethod] = useState<string>('app');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const d = policies[params.id] || policies['1'];
  const spokeList = spokeLists[params.id] || spokeLists['1'];

  const totalQ = d.eligibility?.length || 0;
  const answered = Object.keys(checks).length;
  const passed = Object.values(checks).filter((v) => v === true).length;
  const failed = Object.values(checks).filter((v) => v === false).length;
  const allDone = totalQ > 0 && answered === totalQ;
  const allPass = allDone && passed === totalQ;

  const policyUrl = `${SITE_URL}/policy/${d.id}`;

  const schemas = [
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
    breadcrumbSchema([
      { name: '홈', url: SITE_URL },
      { name: d.cat, url: `${SITE_URL}/category/${d.catSlug}` },
      { name: d.title },
    ]),
    faqSchema(d.faq),
    itemListSchema(
      `${d.title} 관련 가이드`,
      spokeList.map((s) => ({
        title: s.title,
        url: `${policyUrl}/${s.slug}`,
      })),
    ),
  ];

  // 신청 방법 탭 키 (정책별로 다를 수 있음)
  const tabKeys = d.applyMethodTabs ? Object.keys(d.applyMethodTabs) : [];

  return (
    <main className="detail bg-gov-bg min-h-screen">
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
          <Link href={`/category/${d.catSlug}`}>{d.cat}</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{d.title}</span>
        </nav>

        {/* 정책 헤더 */}
        <header className="detail-header">
          <div className="detail-badges">
            <span className="badge badge-fund">{d.cat}</span>
            <span className="badge badge-hot">인기</span>
          </div>
          <h1 className="detail-title">{d.title}</h1>
          <div className="detail-meta">
            <span>마감: {d.deadline}</span>
          </div>

          <div className="editor-profile">
            <div className="editor-avatar">
              <User size={16} />
            </div>
            <div className="editor-info">
              <span className="editor-name">정부지원사업 에디터</span>
              <span className="editor-role">{d.org} 공식 자료 기반 · {d.dateModified?.slice(0, 10).replace(/-/g, '.')} 검수</span>
            </div>
          </div>

          <div className="detail-cta">
            <div>
              <div className="cta-amount-label">지원 금액</div>
              <div className="cta-amount">{d.amount}</div>
            </div>
            <a href={d.applyUrl} className="btn-cta" rel="noopener">
              신청하기
            </a>
          </div>
        </header>

        {/* 본문 + 사이드바 */}
        <div className="policy-layout">
          <article className="policy-main">

            {/* 접이식 목차 */}
            {d.qa && d.qa.length > 0 && (
              <CollapsibleTOC
                items={d.qa.map((item: { q: string; anchor: string }) => ({
                  q: item.q,
                  anchor: item.anchor,
                }))}
                title="목차"
              />
            )}

            {/* 핵심콕콕 */}
            {d.keyFacts && (
              <KeyFactsBox
                facts={d.keyFacts}
                highlights={d.keyFactsHighlights || {}}
              />
            )}

            {/* Q&A 카드 generic 렌더링 */}
            {d.qa?.map((item: any, i: number) => (
              <Fragment key={item.anchor}>
                <QACard number={i + 1} q={item.q} anchor={item.anchor}>
                  {item.intro && (
                    <p style={{ marginBottom: 12 }}>
                      {renderWithHi(item.intro, item.highlights || [])}
                    </p>
                  )}

                  {/* 자격 체커 (Q2 또는 hasEligibilityChecker = true) */}
                  {item.hasEligibilityChecker && d.eligibility && (
                    <>
                      <fieldset className="elig-fieldset">
                        <legend className="sr-only">{d.title} 자격 조건 확인</legend>
                        {d.eligibility.map((e: any, ei: number) => {
                          const val = checks[e.key];
                          const cls = val === true ? 'pass' : val === false ? 'fail' : '';
                          return (
                            <div className={`elig-item ${cls}`} key={ei} role="group" aria-labelledby={`q-${e.key}`}>
                              <div style={{ flex: 1 }}>
                                <span className="elig-q" id={`q-${e.key}`}>{e.q}</span>
                                {val !== undefined && val !== null && (
                                  <div className="elig-feedback">
                                    {val ? (
                                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                        <CheckCircle size={13} /> {e.passTip}
                                      </span>
                                    ) : (
                                      <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                        <XCircle size={13} /> {e.failTip}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                              <div className="elig-btns">
                                <button
                                  className={val === true ? 'yes-active' : ''}
                                  aria-pressed={val === true}
                                  onClick={() => setChecks((p) => ({ ...p, [e.key]: true }))}
                                >
                                  예
                                </button>
                                <button
                                  className={val === false ? 'no-active' : ''}
                                  aria-pressed={val === false}
                                  onClick={() => setChecks((p) => ({ ...p, [e.key]: false }))}
                                >
                                  아니오
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </fieldset>

                      {allDone && (
                        <QABox label={allPass ? '진단 결과 — 자격 충족' : '진단 결과 — 일부 조건 미충족'}>
                          {allPass ? (
                            <>
                              <p style={{ margin: '0 0 8px', fontSize: 13 }}>
                                <Hi>{totalQ}개 조건 모두 충족</Hi>했습니다. 공식 채널에서 최종 자격을 확인하고 신청하세요.
                              </p>
                              <a
                                href={d.applyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  display: 'inline-block',
                                  marginTop: 4,
                                  padding: '8px 14px',
                                  background: '#003D88',
                                  color: '#fff',
                                  borderRadius: 8,
                                  fontSize: 12,
                                  fontWeight: 600,
                                  textDecoration: 'none',
                                }}
                              >
                                공식 안내 보기 →
                              </a>
                            </>
                          ) : (
                            <p style={{ margin: 0, fontSize: 13 }}>
                              <Hi>{failed}개 조건이 맞지 않습니다.</Hi> 위 항목 빨간색 안내를 확인하세요.
                            </p>
                          )}
                        </QABox>
                      )}

                      {answered > 0 && !allDone && (
                        <div style={{ marginTop: 12, fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>
                          {answered}/{totalQ}개 확인 완료
                        </div>
                      )}

                      {/* 중위소득 표 (있을 때만) */}
                      {d.incomeTable && d.incomeTable.length > 0 && (
                        <div style={{ marginTop: 20 }}>
                          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 500 }}>
                            {item.incomeTableCaption || '가구 중위소득 기준표'}
                          </p>
                          <QATable
                            headers={['가구원수', '중위소득 (월)', '기준 (월)']}
                            rows={d.incomeTable.map((row: any) => [
                              row.members,
                              `${row.median}원`,
                              `${row.threshold}원`,
                            ])}
                          />
                          {item.incomeTableNote && (
                            <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                              {item.incomeTableNote}
                            </p>
                          )}
                        </div>
                      )}
                    </>
                  )}

                  {/* 표 */}
                  {item.table && (
                    <QATable
                      caption={item.table.caption}
                      headers={item.table.headers}
                      rows={item.table.rows}
                    />
                  )}

                  {/* 보조 박스 */}
                  {item.box && (
                    <QABox label={item.box.label}>
                      {renderBoxContent(item.box.content, item.highlights || [])}
                    </QABox>
                  )}
                  {item.box2 && (
                    <QABox label={item.box2.label}>
                      {renderBoxContent(item.box2.content, item.highlights || [])}
                    </QABox>
                  )}

                  {/* 신청 방법 탭 (Q7 또는 hasApplyMethodTabs = true) */}
                  {item.hasApplyMethodTabs && d.applyMethodTabs && (
                    <>
                      <div className="method-tabs" role="tablist" style={{ marginTop: 12 }}>
                        {tabKeys.map((key) => (
                          <button
                            key={key}
                            role="tab"
                            aria-selected={activeMethod === key}
                            className={`method-tab ${activeMethod === key ? 'active' : ''}`}
                            onClick={() => setActiveMethod(key)}
                          >
                            {d.applyMethodTabs[key].label}
                          </button>
                        ))}
                      </div>
                      {tabKeys.map((key) =>
                        activeMethod === key ? (
                          <ol key={key} className="step-list" role="tabpanel">
                            {d.applyMethodTabs[key].steps.map((step: any, si: number) => (
                              <li className="step-item" key={si}>
                                <div className="step-num">{si + 1}</div>
                                <div className="step-content">
                                  <div className="step-title">{step.title}</div>
                                  <div className="step-desc">{step.desc}</div>
                                </div>
                              </li>
                            ))}
                          </ol>
                        ) : null
                      )}
                    </>
                  )}

                  {/* 단순 applySteps (탭 없을 때, apply anchor에만) */}
                  {item.anchor === 'q-apply' && !item.hasApplyMethodTabs && d.applySteps && (
                    <ol className="step-list" style={{ marginTop: 12 }}>
                      {d.applySteps.map((step: any, si: number) => (
                        <li className="step-item" key={si}>
                          <div className="step-num">{si + 1}</div>
                          <div className="step-content">
                            <div className="step-title">{step.title}</div>
                            <div className="step-desc">{step.desc}</div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}

                  {/* 필요 서류 + CTA (apply anchor에만) */}
                  {item.anchor === 'q-apply' && (
                    <>
                      {d.documents && d.documents.length > 0 && (
                        <div style={{ marginTop: 20 }}>
                          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>필요 서류</div>
                          <div className="doc-list">
                            {d.documents.map((doc: string, di: number) => (
                              <span className="doc-chip" key={di}>{doc}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      <div style={{ marginTop: 24, textAlign: 'center' }}>
                        <a href={d.applyUrl} className="btn-cta" rel="noopener">
                          공식 안내 보기
                        </a>
                      </div>
                    </>
                  )}

                  {/* 출처 노트 */}
                  {item.sourceNote && (
                    <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 12 }}>
                      {item.sourceNote}
                    </p>
                  )}
                </QACard>

                {/* 광고 슬롯 (Q1·Q3·Q5 다음) */}
                {(i === 0 || i === 2 || i === 4) && (
                  <div className="ad-slot">광고 영역</div>
                )}
              </Fragment>
            ))}

            {/* FAQ */}
            {d.faq && d.faq.length > 0 && (
              <section className="detail-card" id="faq">
                <h2 className="detail-card-head">자주 묻는 질문</h2>
                <div className="faq-list">
                  {d.faq.map((item: any, i: number) => (
                    <details
                      key={i}
                      className={`faq-item ${openFaq === i ? 'open' : ''}`}
                      open={openFaq === i}
                      onToggle={(e) => {
                        const el = e.currentTarget;
                        if (el.open) setOpenFaq(i);
                        else if (openFaq === i) setOpenFaq(null);
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
                            출처:{' '}
                            {item.sourceUrl?.startsWith('http') ? (
                              <a href={item.sourceUrl} rel="noopener">
                                {item.source}
                              </a>
                            ) : (
                              <Link href={item.sourceUrl || '#'}>{item.source}</Link>
                            )}
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* 출처 섹션 — 카드뉴스 톤 */}
            {d.sources && d.sources.length > 0 && (
              <QACard number={(d.qa?.length || 0) + 1} q="이 글의 출처" anchor="sources">
                <p style={{ marginBottom: 12 }}>
                  본 페이지는 다음 정부 공식 자료를 1:1 대조 검증해 정리했습니다.
                </p>
                <div style={{ display: 'grid', gap: 8 }}>
                  {d.sources.map((s: any, i: number) => (
                    <a
                      key={i}
                      href={s.url}
                      rel="noopener"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 14px',
                        background: '#F8F9FC',
                        border: '1px solid #DDDFE8',
                        borderRadius: 8,
                        fontSize: 12,
                        color: '#003D88',
                        textDecoration: 'none',
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ flex: 1 }}>{s.label}</span>
                      <ChevronRight size={14} style={{ flexShrink: 0, color: '#003D88' }} />
                    </a>
                  ))}
                </div>
                <QABox label="검수 안내">
                  <p style={{ margin: 0 }}>
                    마지막 검수: <Hi>{d.dateModified?.slice(0, 10).replace(/-/g, '.')}</Hi>
                  </p>
                  <p style={{ margin: '6px 0 0', fontSize: 12, color: '#6E6E6E' }}>
                    본 페이지는 정부 공식 사이트가 아니며, 정보를 정리한 안내입니다. 실제 자격·금액은 정부 공식 채널을 따릅니다.
                  </p>
                </QABox>
              </QACard>
            )}

            {/* 관련 정책 */}
            {d.related && d.related.length > 0 && (
              <section className="detail-card" id="related">
                <h2 className="detail-card-head">관련 정책 더보기</h2>
                {d.related.map((r: any, i: number) => (
                  <Link href={`/policy/${r.id}`} key={i} className="related-item">
                    <div className="rel-info">
                      <div style={{ marginBottom: 4 }}>
                        <span className={`badge ${r.cat === '지원금' ? 'badge-fund' : 'badge-refund'}`}>
                          {r.cat}
                        </span>
                      </div>
                      <div className="rel-title">{r.title}</div>
                    </div>
                    <ChevronRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                  </Link>
                ))}
              </section>
            )}

          </article>

          <PolicySidebar
            policyId={d.id}
            policyTitle={d.title.replace(/^2026\s*/, '')}
            spokes={spokeList}
            applyUrl={d.applyUrl}
          />

        </div>
      </div>
    </main>
  );
}
