'use client';
import Link from 'next/link';
import { ChevronRight, ChevronDown, CheckCircle, XCircle, User } from 'lucide-react';
import { Fragment, ReactNode, useState } from 'react';
import PolicySidebar from '@/components/PolicySidebar';
import KeyFactsBox from '@/components/KeyFactsBox';
import CollapsibleTOC from '@/components/CollapsibleTOC';
import QACard, { Hi, QABox, QATable } from '@/components/QACard';
import AdSense from '@/components/AdSense';
import {
  articleWithGovServiceSchema,
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  toJsonLd,
} from '@/lib/schema';
import { PoliciesById, PoliciesBySlug } from '@/data/policies/manifest';
import { PoliciesByKoAlias, getSpokeListForPolicy } from '@/lib/policy-aliases';
import { pickActionLabel, simplifyCta } from '@/lib/cta';

const SITE_URL = 'https://gov.jjyu.co.kr';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const policies: Record<string, any> = { ...PoliciesById, ...PoliciesBySlug, ...PoliciesByKoAlias };

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

// ── 질문 텍스트에서 행동 키워드를 뽑아 카드마다 다른 CTA 문구 생성 ──
// ── 긴 intro를 2문장씩 문단으로 분할, 말미 출처 문구는 회색 작게 ──
function renderIntro(intro: any, highlights: string[] = []): ReactNode {
  if (intro == null || intro === '') return null;
  const safe = String(intro);
  let note: string | null = null;
  let body = safe;
  const m = safe.match(/본\s*(내용|정책)은/);
  if (m && m.index !== undefined && m.index > 0) {
    note = safe.slice(m.index).trim();
    body = safe.slice(0, m.index).trim();
  }
  const sentences = body
    .replace(/(?<![0-9])([.!?])\s+(?=[가-힣"'(])/g, '$1\n')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);
  const paras: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) paras.push(sentences.slice(i, i + 2).join(' '));
  if (!paras.length && body) paras.push(body);
  return (
    <>
      {paras.map((p, pi) => (
        <p key={pi} style={{ fontSize: 15.5, lineHeight: 1.85, marginBottom: 12, color: '#2d3540' }}>
          {renderWithHi(p, highlights)}
        </p>
      ))}
      {note && (
        <p style={{ fontSize: 13, lineHeight: 1.7, marginBottom: 16, color: '#8B95A1' }}>{note}</p>
      )}
    </>
  );
}

export default function PolicyDetailClient({ params }: { params: { id: string } }) {
  const [checks, setChecks] = useState<Record<string, boolean | null>>({});
  const [activeMethod, setActiveMethod] = useState<string>('app');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const d = policies[params.id];
  // SpokesRegistry 단일 소스 — 사이드바·목차 한글 slug 링크 생성 (영문 slug 404 방지)
  const spokeList = getSpokeListForPolicy(params.id);

  if (!d) {
    return (
      <main className="detail bg-gov-bg min-h-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
          <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>페이지를 찾을 수 없습니다</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>요청하신 정책 정보가 존재하지 않습니다.</p>
          <a href="/" style={{ padding: '10px 24px', background: '#003D88', color: '#fff', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>홈으로 돌아가기</a>
        </div>
      </main>
    );
  }

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

  // 모든 QA 카드에 공통으로 붙는 행동 버튼의 목적지 (applyUrl 없으면 1차 출처로 폴백)
  const defaultActionHref: string | undefined = d.applyUrl || d.sources?.[0]?.url;

  /* 버튼에 붙일 주제어 — "예매하기"가 아니라 "워터밤 즉시 예매하기"가 되도록.
     제목 앞부분에서 연도·군더더기를 떼고 핵심 명사만 남긴다. */
  const ctaSubject = d.title
    .replace(/^20\d{2}\s*/, '')
    .split(/[,|·]/)[0]
    .replace(/\s*(신청방법|신청|조건|총정리|안내|방법)\s*$/, '')
    .trim();

  return (
    <main className="detail bg-gov-bg min-h-screen">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
        />
      ))}

      {/* 고정 상단 CTA 바 — 스크롤해도 헤더 아래 계속 노출 (d.stickyBar 있는 페이지만) */}
      {d.stickyBar && (
        <div className="sticky-cta-bar">
          <div className="container sticky-cta-inner">
            <span className="sticky-cta-label">{d.stickyBar.label}</span>
            <a href={d.stickyBar.applyUrl || d.applyUrl} className="sticky-cta-btn" rel="noopener">
              {simplifyCta(d.stickyBar.ctaLabel, ctaSubject)} →
            </a>
          </div>
        </div>
      )}

      <div className="container">
        {/* 브레드크럼 */}
        <nav className="breadcrumb" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <ChevronRight size={12} />
          <Link href={`/category/${d.catSlug ?? 'fund'}`}>{d.cat ?? '지원금'}</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{d.title}</span>
        </nav>

        {/* 정책 헤더 */}
        <header className="detail-header">
          <div className="detail-badges">
            {d.cat && (
              <span className={`badge ${
                d.catSlug === 'loan'   ? 'badge-loan'   :
                d.catSlug === 'refund' ? 'badge-refund' : 'badge-fund'
              }`}>{d.cat}</span>
            )}
          </div>
          <h1 className="detail-title">{d.title}</h1>
          <div className="detail-meta">
            {/* 지원금이 아닌 글(공연·행사 등)은 '마감'이 어색해 deadlineLabel로 갈아끼운다 */}
            <span>{d.deadlineLabel || '마감'}: {d.deadline}</span>
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
            {!d.hideAmountBox && (
              <div>
                <div className="cta-amount-label">{d.amountLabel || '지원 금액'}</div>
                <div className="cta-amount">{d.amount}</div>
              </div>
            )}
            <a href={d.applyUrl} className="btn-cta" rel="noopener">
              {simplifyCta(d.ctaLabel, ctaSubject)}
            </a>
          </div>

          {/* 상단 후킹 한 줄 — 2026-08-02 신설.
              검색으로 들어온 사람이 첫 화면에서 보는 건 제목·금액뿐이라 누를 이유가 없었다.
              "다자녀라고 다 같은 혜택을 받는 게 아닙니다" 처럼 그 페이지에 온 사람의
              불안을 한 줄로 짚고 버튼으로 잇는다. 재료는 검증된 사실만(마감·선착순·예산·차등). */}
          {d.heroHook && (
            <p className="detail-hero-hook">{d.heroHook}</p>
          )}
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

            {/* 핵심콕콕 — keyFacts 값이 {value,source} 객체일 수도 있어서 string으로 normalize */}
            {d.keyFacts && (
              <KeyFactsBox
                facts={Object.fromEntries(
                  Object.entries(d.keyFacts).map(([k, v]: [string, any]) => [
                    k,
                    typeof v === 'object' && v !== null && 'value' in v ? String(v.value) : String(v),
                  ])
                )}
                highlights={d.keyFactsHighlights || {}}
              />
            )}

            {/* 광고 gov1 — 본문 진입부 */}
            <div className="ad-slot" style={{ margin: '20px 0' }}>
              <AdSense slot="7082828373" />
            </div>

            {/* Q&A 카드 generic 렌더링 */}
            {d.qa?.map((item: any, i: number) => (
              <Fragment key={item.anchor}>
                <QACard number={i + 1} q={item.q || item.question} anchor={item.anchor}>
                  {item.intro && renderIntro(item.intro, item.highlights || [])}

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
                                rel="noopener"
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

                  {/* 보조 박스 — label/title, content/items 두 포맷 모두 처리 */}
                  {item.box && (
                    <QABox label={item.box.label || item.box.title}>
                      {item.box.content
                        ? renderBoxContent(item.box.content, item.highlights || [])
                        : Array.isArray(item.box.items)
                          ? item.box.items.map((li: string, idx: number) => (
                              <p key={idx} style={{ margin: '4px 0' }}>{li}</p>
                            ))
                          : null}
                    </QABox>
                  )}
                  {item.box2 && (
                    <QABox label={item.box2.label || item.box2.title}>
                      {item.box2.content
                        ? renderBoxContent(item.box2.content, item.highlights || [])
                        : Array.isArray(item.box2.items)
                          ? item.box2.items.map((li: string, idx: number) => (
                              <p key={idx} style={{ margin: '4px 0' }}>{li}</p>
                            ))
                          : null}
                    </QABox>
                  )}

                  {/* 인라인 도구형 CTA — 애매한 조건(나이·소득 등)을 바로 확인해볼 수 있는 실용 링크 */}
                  {item.toolCta && (
                    <div className="tool-cta-box">
                      <span>{item.toolCta.label}</span>
                      <a href={item.toolCta.applyUrl} className="tool-cta-btn" rel="noopener">
                        {item.toolCta.buttonLabel} →
                      </a>
                    </div>
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
                      <div style={{ marginTop: 24 }}>
                        {item.act?.cue && <p className="qa-cta-cue">{item.act.cue}</p>}
                        <a href={item.act?.url || d.applyUrl} className="qa-inline-cta" rel="noopener">
                          {item.act?.label || d.ctaLabel || '공식 안내 보기'} →
                        </a>
                      </div>
                    </>
                  )}

                  {/* 카드마다 자동 노출되는 행동 버튼.
                      item.act = { cue, label, url } 이 있으면 "누를 이유(cue)" 한 줄을 버튼 바로 위에 붙이고
                      그 카드의 행동에 맞는 목적지로 보낸다. 없으면 종전처럼 대표 CTA로 폴백.
                      q-apply(전용 CTA 있음)·toolCta·ctaBlock 카드는 중복 방지로 제외 */}
                  {item.anchor !== 'q-apply' && !item.toolCta && !item.ctaBlock && (item.act?.url || defaultActionHref) && (
                    <div style={{ marginTop: 20 }}>
                      {item.act?.cue && (
                        <p className="qa-cta-cue">{item.act.cue}</p>
                      )}
                      <a href={item.act?.url || defaultActionHref} className="qa-inline-cta" rel="noopener">
                        {item.act?.label || pickActionLabel(item.q || item.question, d.ctaLabel)} →
                      </a>
                    </div>
                  )}

                  {/* 출처 노트 */}
                  {item.sourceNote && (
                    <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 12 }}>
                      {item.sourceNote}
                    </p>
                  )}

                </QACard>

                {/* 섹션 사이 반복 CTA 블록 — 질문 하나 끝날 때마다 신청 유도 (item.ctaBlock 있는 항목만) */}
                {item.ctaBlock && (
                  <div className="mid-cta-block">
                    <div>
                      <div className="mid-cta-heading">{item.ctaBlock.heading}</div>
                      {item.ctaBlock.sub && <div className="mid-cta-sub">{item.ctaBlock.sub}</div>}
                    </div>
                    <a href={item.ctaBlock.applyUrl || d.applyUrl} className="mid-cta-btn" rel="noopener">
                      {simplifyCta(item.ctaBlock.ctaLabel)} →
                    </a>
                  </div>
                )}

                {/* 광고 gov2 — Q3 다음 (본문 중간) */}
                {i === 2 && (
                  <div className="ad-slot" style={{ margin: '20px 0' }}>
                    <AdSense slot="1375998717" />
                  </div>
                )}
              </Fragment>
            ))}

            {/* FAQ */}
            {d.faq && d.faq.length > 0 && (
              <section className="detail-card" id="faq">
                <h2 className="detail-card-head">자주 묻는 질문</h2>
                <div className="faq-list">
                  {d.faq.map((item: any, i: number) => {
                    // 구 포맷: {q, a, source(string), sourceUrl} / 신 포맷: {question, answer, source(object)}
                    const faqQ = item.q || item.question;
                    const faqA = item.a || item.answer;
                    const faqSourceIsObj = item.source && typeof item.source === 'object';
                    const faqSourceLabel = faqSourceIsObj ? (item.source.text || '출처 보기') : item.source;
                    const faqSourceUrl = item.sourceUrl || (faqSourceIsObj ? item.source.url : null);
                    return (
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
                        <span>Q. {faqQ}</span>
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
                        <p>{faqA}</p>
                        {faqSourceLabel && (
                          <div className="faq-source">
                            출처:{' '}
                            {faqSourceUrl?.startsWith('http') ? (
                              <a href={faqSourceUrl} rel="noopener">
                                {faqSourceLabel}
                              </a>
                            ) : (
                              <Link href={faqSourceUrl || '#'}>{faqSourceLabel}</Link>
                            )}
                          </div>
                        )}
                      </div>
                    </details>
                    );
                  })}
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
                      {/* 출처 이름 키는 파일마다 label/title/name이 섞여 있다.
                          name만 쓰는 허브 21개가 빈 칸으로 렌더링되던 버그(2026-07-30) */}
                      <span style={{ flex: 1 }}>{s.label || s.title || s.name || s.url}</span>
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

            {/* 광고 gov3 — 출처 섹션 아래 */}
            <div className="ad-slot" style={{ margin: '20px 0' }}>
              <AdSense slot="4660679163" />
            </div>

            {/* 상세 가이드 스포크 카드 */}
            {spokeList.length > 0 && (
              <section className="detail-card" id="spoke-guides" style={{ marginBottom: 24 }}>
                <h2 className="detail-card-head">📋 상세 가이드</h2>
                <div className="detail-card-body" style={{ padding: '20px 24px' }}>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16, lineHeight: 1.6 }}>
                    아래 주제별 상세 가이드를 클릭하면 더 자세한 내용을 확인할 수 있습니다.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
                    {spokeList.map((s: any, i: number) => (
                      <Link
                        key={i}
                        href={`/policy/${d.id}/${s.slug}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          padding: '14px 16px',
                          background: 'var(--bg-secondary, #F7F8FA)',
                          border: '1.5px solid var(--border)',
                          borderRadius: 10,
                          textDecoration: 'none',
                          color: 'var(--text-primary)',
                          fontSize: 14,
                          fontWeight: 500,
                          lineHeight: 1.4,
                          transition: 'border-color 0.15s, background 0.15s',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'var(--gov-primary)';
                          (e.currentTarget as HTMLElement).style.background = '#EEF3FB';
                        }}
                        onMouseLeave={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                          (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary, #F7F8FA)';
                        }}
                      >
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 26,
                          height: 26,
                          borderRadius: '50%',
                          background: 'var(--gov-primary)',
                          color: '#fff',
                          fontSize: 12,
                          fontWeight: 700,
                          flexShrink: 0,
                        }}>{i + 1}</span>
                        <span style={{ flex: 1 }}>{s.title ?? s.label ?? s.slug}</span>
                        <ChevronRight size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* 관련 정책 */}
            {d.related && d.related.length > 0 && (
              <section className="detail-card" id="related">
                <h2 className="detail-card-head">관련 정책 더보기</h2>
                {d.related.map((raw: any, i: number) => {
                  /* related는 slug 문자열(권장) 또는 객체 둘 다 허용.
                     문자열이면 manifest에서 실제 정책을 찾아 id·title·cat을 채운다.
                     (종전엔 r.id를 그대로 읽어 /policy/undefined 링크가 생성됨) */
                  const r: any = typeof raw === 'string' ? (PoliciesBySlug as any)[raw] : raw;
                  if (!r) return null;
                  const relHref = `/policy/${r.slug || r.id}`;
                  return (
                  <Link href={relHref} key={i} className="related-item">
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
                  );
                })}
              </section>
            )}

          </article>

          <PolicySidebar
            policyId={d.id}
            policyTitle={d.title.replace(/^2026\s*/, '')}
            spokes={spokeList.map((s: any) => ({ slug: s.slug, title: s.title ?? s.label ?? s.slug }))}
            applyUrl={d.applyUrl}
            ctaLabel={simplifyCta(d.ctaLabel, ctaSubject)}
          />

        </div>
      </div>
    </main>
  );
}
