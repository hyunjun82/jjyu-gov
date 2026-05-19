'use client';
import Link from 'next/link';
import { ChevronRight, ChevronDown, User } from 'lucide-react';
import { Fragment, ReactNode, useState } from 'react';
import PolicySidebar from '@/components/PolicySidebar';
import KeyFactsBox from '@/components/KeyFactsBox';
import QACard, { Hi, QABox, QATable } from '@/components/QACard';
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  toJsonLd,
} from '@/lib/schema';

/**
 * ── SpokeClient ──
 *
 * ✅ 이 파일을 직접 수정하지 마세요.
 *
 * 새 정책에 spoke 페이지를 추가하려면:
 *   1. data/spokes/registry.ts 에 콘텐츠 등록
 *   2. data/policies/{slug}.ts 의 spokes 배열에 spoke 정보 추가
 *
 * 정책 제목·spoke 목록은 manifest 와 레지스트리에서 자동 조회합니다.
 */

/* ── 타입 ── */
/* ── QA 아이템 (허브 PolicyData 와 동일 구조) ── */
export interface SpokeQAItem {
  q: string;
  anchor?: string;
  intro?: string;
  highlights?: string[];
  table?: { headers: string[]; rows: string[][] };
  box?: { label?: string; title?: string; content: string };
  box2?: { label?: string; title?: string; content: string };
  list?: string[];
}

export interface SpokeData {
  h1: string;
  breadcrumb: string;
  description: string;
  datePublished: string;
  dateModified: string;
  Content?: React.ComponentType;          // 기존 JSX 방식 (옵셔널)
  qa?: SpokeQAItem[];                     // 데이터 방식 (허브와 동일)
  keyFacts?: Record<string, string>;      // 핵심콕콕 박스 (옵셔널)
  keyFactsHighlights?: Record<string, string[]>;
  faqData: { q: string; a: string; source: string; sourceUrl: string }[];
  sources: { name: string; url: string }[];
}

/* ── 텍스트 내 highlights 단어를 형광으로 강조 ── */
function renderWithHi(text: string, highlights: string[] = []): ReactNode {
  if (!text) return null;
  if (!highlights.length) return text;
  const sorted = [...highlights].sort((a, b) => b.length - a.length);
  const escaped = sorted.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(pattern);
  return parts.map((part, idx) =>
    highlights.includes(part) ? <Hi key={idx}>{part}</Hi> : <Fragment key={idx}>{part}</Fragment>
  );
}

/* ── manifest & 레지스트리 (단일 소스) ── */
import { PoliciesById, PoliciesBySlug, SpokesById, SpokesBySlug } from '@/data/policies/manifest';
import { SpokesRegistry } from '@/data/spokes/registry';

const SITE_URL = 'https://gov.jjyu.co.kr';

export default function SpokeClient({ params }: { params: { id: string; spoke: string } }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const slug     = decodeURIComponent(params.spoke);
  const policyId = params.id;

  /* 정책 데이터 — slug 로 먼저 조회, 없으면 숫자 id 로 fallback */
  const policy     = PoliciesBySlug[policyId] ?? PoliciesById[policyId];
  const policySlug = policy?.slug ?? policyId;
  const policyTitle = policy?.title ?? '정책';
  const applyUrl    = policy?.applyUrl ?? 'https://www.gov.kr';

  /* spoke 목록 — policy 파일의 spokes 배열 사용 (label/title 모두 처리) */
  const spokeList: { slug: string; title: string }[] =
    (SpokesBySlug[policySlug] ?? SpokesById[policyId] ?? []).map((s: any) => ({
      slug: s.slug,
      title: s.title ?? s.label ?? s.slug,
    }));

  /* spoke 콘텐츠 — 레지스트리에서 조회 */
  const spokeMap = SpokesRegistry[policySlug] ?? {};
  const spoke    = spokeMap[slug];

  if (!spoke) {
    return (
      <main className="detail">
        <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 20, marginBottom: 12 }}>페이지를 찾을 수 없습니다</h1>
          <Link href={`/policy/${policyId}`} style={{ color: 'var(--gov-primary)' }}>
            ← {policyTitle} 전체 정보로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  const spokeUrl  = `${SITE_URL}/policy/${policyId}/${slug}`;

  const schemas = [
    articleSchema({
      title:         spoke.h1,
      description:   spoke.description,
      url:           spokeUrl,
      datePublished: spoke.datePublished,
      dateModified:  spoke.dateModified,
    }),
    breadcrumbSchema([
      { name: '홈',        url: SITE_URL },
      { name: policyTitle, url: `${SITE_URL}/policy/${policyId}` },
      { name: spoke.breadcrumb },
    ]),
    faqSchema(spoke.faqData),
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
        <nav className="breadcrumb" aria-label="breadcrumb">
          <Link href="/">홈</Link>
          <ChevronRight size={12} />
          <Link href={`/policy/${policyId}`}>{policyTitle}</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
            {spoke.breadcrumb}
          </span>
        </nav>

        <div className="policy-layout">
          <article className="policy-main">

            <header className="detail-header">
              <div className="detail-badges">
                <span className="badge badge-fund">지원금</span>
              </div>
              <h1 className="detail-title">{spoke.h1}</h1>

              <div className="editor-profile">
                <div className="editor-avatar">
                  <User size={16} />
                </div>
                <div className="editor-info">
                  <span className="editor-name">정부지원사업 에디터</span>
                  <span className="editor-role">
                    공공데이터 기반 · {spoke.dateModified?.slice(0, 10).replace(/-/g, '.')} 검수
                  </span>
                </div>
              </div>
            </header>

            {/* 핵심콕콕 — keyFacts 있을 때 */}
            {spoke.keyFacts && (
              <KeyFactsBox
                facts={spoke.keyFacts}
                highlights={spoke.keyFactsHighlights || {}}
              />
            )}

            {/* QA 카드 방식 (데이터 기반, 허브와 동일 렌더링) */}
            {spoke.qa && spoke.qa.map((item, i) => (
              <QACard
                key={i}
                number={i + 1}
                q={item.q}
                anchor={item.anchor || `q${i + 1}`}
              >
                {item.intro && (
                  <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                    {renderWithHi(item.intro, item.highlights)}
                  </p>
                )}
                {item.table && (
                  <QATable
                    headers={item.table.headers}
                    rows={item.table.rows}
                    highlights={item.highlights}
                  />
                )}
                {item.box && (
                  <QABox label={item.box.label || item.box.title || ''}>
                    {renderWithHi(item.box.content, item.highlights)}
                  </QABox>
                )}
                {item.box2 && (
                  <QABox label={item.box2.label || item.box2.title || ''}>
                    {renderWithHi(item.box2.content, item.highlights)}
                  </QABox>
                )}
                {item.list && (
                  <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
                    {item.list.map((li, j) => (
                      <li key={j}>{renderWithHi(li, item.highlights)}</li>
                    ))}
                  </ul>
                )}
              </QACard>
            ))}

            {/* 기존 JSX 방식 (Content 있을 때) */}
            {spoke.Content && <spoke.Content />}

            {/* 광고 */}
            <div className="ad-slot">광고 영역</div>

            {/* FAQ */}
            <section className="detail-card" id="faq">
              <h2 className="detail-card-head">자주 묻는 질문</h2>
              <div className="faq-list">
                {spoke.faqData.map((item, i) => (
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
                          color:      'var(--text-muted)',
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

            <div className="ad-slot">광고 영역</div>

            {/* 출처 */}
            <section className="source-section" id="sources">
              <h2 className="source-section-title">이 글의 출처</h2>
              <ul className="source-list">
                {spoke.sources.map((s, i) => (
                  <li key={i}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
                  </li>
                ))}
              </ul>
              <p className="source-updated">
                마지막 검수: {spoke.dateModified?.slice(0, 10).replace(/-/g, '.')}
              </p>
            </section>

            {/* 허브 유도 */}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', padding: '20px 0' }}>
              <Link href={`/policy/${policyId}#eligibility`} className="btn-cta">
                내가 대상자인지 30초 확인
              </Link>
            </div>

            <Link
              href={`/policy/${policyId}`}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '16px 0', fontSize: 14, fontWeight: 600, color: 'var(--gov-primary)' }}
            >
              ← {policyTitle} 전체 정보 보기
            </Link>

          </article>

          <PolicySidebar
            policyId={policyId}
            policyTitle={policyTitle}
            spokes={spokeList}
            currentSpoke={slug}
            applyUrl={applyUrl}
          />
        </div>
      </div>
    </main>
  );
}
