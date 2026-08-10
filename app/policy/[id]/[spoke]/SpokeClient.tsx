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
import { hubCta, HUB_CTA_FALLBACKS, findApplyAnchor } from '@/lib/cta';

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
  table?: { caption?: string; headers: string[]; rows: string[][] };
  box?: { label?: string; title?: string; content: string };
  box2?: { label?: string; title?: string; content: string };
  list?: string[];
  /* 버튼 앞 한 줄(누를 이유). 스포크 버튼의 목적지·문구는 허브로 고정되므로
     label·url은 쓰지 않는다(허브 PolicyData와 필드명을 맞추기 위해 옵셔널로만 둔다). */
  act?: { cue?: string; label?: string; url?: string };
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
  /* 상단 후킹과 첫 버튼 — 2026-08-03 신설.
     그동안 스포크는 제목 다음이 바로 목차·카드였다. 검색으로 들어온 사람이
     첫 화면에서 읽을 문장이 없어 스크롤하다 나갔다. 허브와 같은 구조로 맞춘다.
     문구는 반드시 이 데이터에서만 받는다 — 코드에 문장을 박으면 전 스포크가 같아진다. */
  heroHook?: string;
  heroAct?: { label: string; href?: string };
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

  /* 허브로 보내는 버튼을 달 카드 위치와 문구.
     같은 목적지라 문구가 겹치면 스팸처럼 보이므로, 렌더 전에 중복을 제거해 확정한다. */
  const hubCtaByIndex: Record<number, string> = (() => {
    const qa = spoke.qa ?? [];
    if (!qa.length) return {};
    const slots = [...new Set([2, 4, qa.length - 1])].filter((n) => n >= 0 && n < qa.length);
    const used = new Set<string>();
    const map: Record<number, string> = {};
    slots.forEach((idx) => {
      let label = hubCta(qa[idx]?.q || '');
      if (!label || used.has(label)) {
        label = HUB_CTA_FALLBACKS.find((l) => !used.has(l)) || '전체 정리 보기';
      }
      used.add(label);
      map[idx] = label;
    });
    return map;
  })();

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

            {/* 상단 후킹 -> 버튼. 읽고 나서 누르는 순서라야 한다(허브와 동일). */}
            {spoke.heroHook && <p className="detail-hero-hook">{spoke.heroHook}</p>}
            {spoke.heroAct && (
              <div className="spoke-hero-cta">
                <Link href={spoke.heroAct.href || `/policy/${policyId}#eligibility`} className="btn-cta">
                  {spoke.heroAct.label}
                </Link>
              </div>
            )}

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
                {/* 본문 중간 광고 gov2 — 소제목 헤더 바로 아래, 본문 첫 줄 위.
                    2026-08-10 이전에는 카드와 카드 사이(카드 바깥)에 뒀는데, 읽는 흐름
                    밖으로 밀려나 눈에 안 들어왔다. 워드프레스 매체 대부분이 쓰는 자리로 옮긴다:
                    소제목을 읽고 본문으로 눈이 내려오는 그 지점.
                    버튼(act)은 카드 맨 아래라 광고와 멀어 오클릭 유도에 해당하지 않는다. */}
                {(i === 1 || i === 3) && i < spoke.qa.length - 1 && (
                  <div className="ad-slot" style={{ margin: '0 0 20px' }}>
                    <AdSense slot="1375998717" />
                  </div>
                )}
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

                {/* 허브로 보내는 버튼 (허브-스포크 구조).
                    스포크는 세부 주제만 다루고 최종 행동(신청 딥링크)은 허브가 받는다.
                    허브로 모아야 내부 링크 권위가 집중되고, 내부 이동이라 전면광고도 발동한다.

                    모든 카드에 달면 같은 목적지 버튼이 7개라 스팸처럼 보인다.
                    상단·브레드크럼·사이드바에 이미 허브 링크가 있으므로
                    읽는 흐름이 끊기는 지점(중간·끝)에만 배치한다. */}
                {hubCtaByIndex[i] && (
                  <div style={{ marginTop: 20 }}>
                    {/* 누를 이유 한 줄(cue)은 스포크 데이터의 act.cue에서만 읽는다.
                        주제를 모르는 자동 생성 문장은 806개에 같은 말이 반복돼 도배가 되므로 쓰지 않는다. */}
                    {item?.act?.cue && <p className="qa-cta-cue">{item.act.cue}</p>}
                    <Link
                      href={
                        /신청방법 바로가기/.test(hubCtaByIndex[i])
                          ? `/policy/${policyId}/${findApplyAnchor((policy as any)?.qa)}`
                          : `/policy/${policyId}/`
                      }
                      className="qa-inline-cta"
                    >
                      {hubCtaByIndex[i]} →
                    </Link>
                  </div>
                )}
              </QACard>
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
                {/* 2026-08-03: "내가 대상자인지 30초 확인" 이 983개 스포크에 똑같이 박혀 있었다.
                    코드에 문장이 있으니 게이트(B축 도배)가 잡지 못했다. 데이터에서 받는다. */}
                {spoke.heroAct?.label ?? `${policyTitle} 대상 확인하기`}
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
