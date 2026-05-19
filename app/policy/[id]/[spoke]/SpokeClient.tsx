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
export interface SpokeData {
  h1: string;
  breadcrumb: string;
  description: string;
  datePublished: string;
  dateModified: string;
  Content: React.ComponentType;
  faqData: { q: string; a: string; source: string; sourceUrl: string }[];
  sources: { name: string; url: string }[];
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
  const { Content } = spoke;

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

            {/* 스포크별 고유 콘텐츠 */}
            <Content />

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
