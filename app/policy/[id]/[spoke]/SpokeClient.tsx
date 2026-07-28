'use client';
import Link from 'next/link';
import { ChevronRight, ChevronDown, User } from 'lucide-react';
import { Fragment, ReactNode, useState } from 'react';
import PolicySidebar from '@/components/PolicySidebar';
import KeyFactsBox from '@/components/KeyFactsBox';
import QACard, { Hi, QABox, QATable } from '@/components/QACard';
import AdSense from '@/components/AdSense';
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  toJsonLd,
} from '@/lib/schema';
import { pickActionLabel, nextSpokeCta } from '@/lib/cta';

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
function renderWithHi(text: any, highlights: string[] = []): ReactNode {
  if (text == null || text === '') return null;
  const safe = typeof text === 'string' ? text : String(text);
  if (!highlights.length) return safe;
  const sorted = [...highlights].sort((a, b) => b.length - a.length);
  const escaped = sorted.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = safe.split(pattern);
  return parts.map((part, idx) =>
    highlights.includes(part) ? <Hi key={idx}>{part}</Hi> : <Fragment key={idx}>{part}</Fragment>
  );
}

/* 긴 intro를 문장 단위로 끊어 문단으로 분할 (소수점·날짜는 보존) */
function splitSentences(text: string): string[] {
  // 마침표/물음표/느낌표 + 공백이고, 앞이 숫자가 아니며(소수점·날짜 보호) 뒤가 한글/따옴표일 때만 문장 경계로 본다
  const marked = text.replace(/(?<![0-9])([.!?])\s+(?=[가-힣"'(])/g, '$1');
  return marked.split('').map((s) => s.trim()).filter(Boolean);
}

/* intro를 2문장씩 묶어 문단으로, 말미 출처 문구는 회색 작은 글씨로 분리 렌더 */
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

/* ── manifest & 레지스트리 (단일 소스) ── */
import { PoliciesById, PoliciesBySlug } from '@/data/policies/manifest';
import { PoliciesByKoAlias, getSpokeListForPolicy, resolveSpokeKey } from '@/lib/policy-aliases';
import { SpokesRegistry } from '@/data/spokes/registry';

const SITE_URL = 'https://gov.jjyu.co.kr';

export default function SpokeClient({ params }: { params: { id: string; spoke: string } }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const slug     = decodeURIComponent(params.spoke);
  const policyId = decodeURIComponent(params.id);

  /* 정책 데이터 — slug → 숫자 id → 한글 별칭 순으로 조회 */
  const policy     = PoliciesBySlug[policyId] ?? PoliciesById[policyId] ?? PoliciesByKoAlias[policyId];
  const policySlug = policy?.slug ?? policyId;
  const policyTitle = policy?.title ?? '정책';
  const applyUrl    = policy?.applyUrl ?? 'https://www.gov.kr';

  /* spoke 목록 — SpokesRegistry 단일 소스 (한글 slug 링크만 생성, 영문 404 방지) */
  const spokeList: { slug: string; title: string }[] = getSpokeListForPolicy(policyId);

  /* 현재 글을 뺀 나머지 스포크 — QA 카드 버튼이 여기로 순환한다.
     내부 이동이라야 다음 페이지 광고가 새로 노출된다(외부 이탈은 세션 종료).
     문구가 겹치면 같은 버튼이 반복돼 보이므로 라벨 기준으로 중복을 제거한다. */
  const nextSpokes = (() => {
    const seen = new Set<string>();
    return spokeList
      .filter((s) => s.slug !== slug)
      .map((s) => ({ ...s, label: nextSpokeCta(s.title) }))
      .filter((s) => (seen.has(s.label) ? false : (seen.add(s.label), true)));
  })();

  /* spoke 콘텐츠 — 영문 slug 들어와도 한글 키로 변환해서 조회 */
  const spokeMap = SpokesRegistry[policySlug] ?? {};
  const resolvedKey = resolveSpokeKey(policySlug, slug);
  const spoke    = spokeMap[resolvedKey];

  if (!spoke) {
    // 매핑 안 된 영문 spoke URL — 자동으로 정책 메인으로 이동 (404 0건 보장)
    if (typeof window !== 'undefined') {
      window.location.replace(`/policy/${policyId}/`);
    }
    return (
      <main className="detail">
        <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 16 }}>이동 중...</p>
          <Link href={`/policy/${policyId}/`} style={{ color: 'var(--gov-primary)' }}>
            {policyTitle} 전체 정보 보기
          </Link>
          <meta httpEquiv="refresh" content={`0; url=/policy/${policyId}/`} />
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

        {/* 상단 허브 이동 버튼 (모든 스포크 공통) */}
        <Link
          href={`/policy/${policyId}`}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            margin: '2px 0 18px', padding: '9px 16px',
            fontSize: 13, fontWeight: 700,
            color: 'var(--gov-primary)', background: '#fff',
            border: '1px solid var(--gov-border, #E5E8EB)', borderRadius: 999,
          }}
        >
          ← {policyTitle} 전체보기
        </Link>

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
              <Fragment key={i}>
              <QACard
                number={i + 1}
                q={item.q}
                anchor={item.anchor || `q${i + 1}`}
              >
                {item.intro && renderIntro(item.intro, item.highlights)}
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

                {/* 카드마다 자동 노출되는 행동 버튼.
                    마지막 카드만 외부(신청처)로 보내고, 나머지는 같은 허브의 다른 스포크로 순환시킨다.
                    내부 이동이라야 페이지 광고가 새로 노출되고 전면광고(vignette)도 발동한다. */}
                {(() => {
                  const isLast = i === spoke.qa.length - 1;
                  const target = isLast ? null : nextSpokes[i % Math.max(nextSpokes.length, 1)];
                  if (!isLast && target) {
                    return (
                      <div style={{ marginTop: 20 }}>
                        <Link
                          href={`/policy/${policyId}/${encodeURIComponent(target.slug)}/`}
                          className="qa-inline-cta"
                        >
                          {target.label} →
                        </Link>
                      </div>
                    );
                  }
                  return (
                    <div style={{ marginTop: 20 }}>
                      <a href={applyUrl} className="qa-inline-cta" rel="noopener">
                        {pickActionLabel(item.q, policy?.ctaLabel)} →
                      </a>
                    </div>
                  );
                })()}
              </QACard>
              {/* 본문 중간 광고 gov2 — 카드 경계(카드 바깥)에 두어 버튼과 이격,
                  오클릭 유도 정책을 피하면서 독자가 실제로 읽는 구간에 노출시킨다. */}
              {(i === 1 || i === 3) && i < spoke.qa.length - 1 && (
                <div className="ad-slot" style={{ margin: '32px 0' }}>
                  <AdSense slot="1375998717" />
                </div>
              )}
              </Fragment>
            ))}

            {/* 기존 JSX 방식 (Content 있을 때) */}
            {spoke.Content && <spoke.Content />}

            {/* 광고 gov1 — 본문 아래 */}
            <div className="ad-slot" style={{ margin: '20px 0' }}>
              <AdSense slot="7082828373" />
            </div>

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

            {/* 광고 gov3 — FAQ 아래 */}
            <div className="ad-slot" style={{ margin: '20px 0' }}>
              <AdSense slot="4660679163" />
            </div>

            {/* 출처 */}
            <section className="source-section" id="sources">
              <h2 className="source-section-title">이 글의 출처</h2>
              <ul className="source-list">
                {spoke.sources.map((s, i) => (
                  <li key={i}>
                    <a href={s.url} rel="noopener">{s.name}</a>
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
