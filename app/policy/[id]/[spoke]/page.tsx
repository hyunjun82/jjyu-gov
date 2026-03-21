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

/* ── 스포크 콘텐츠 import: 청년도약계좌 ── */
import { VsHopeSpokeContent } from './content/vs-희망적금';
import { CancelSpokeContent } from './content/중도해지';
import { ContribSpokeContent } from './content/기여금계산';
import { NoIncomeSpokeContent } from './content/소득없으면';

/* ── 스포크 콘텐츠 import: 기초연금 ── */
import { 수급자격SpokeContent } from './content/기초연금/수급자격';
import { 금액SpokeContent } from './content/기초연금/금액';
import { 소득인정액계산SpokeContent } from './content/기초연금/소득인정액-계산';
import { 재산기준SpokeContent } from './content/기초연금/재산기준';
import { 집있으면SpokeContent } from './content/기초연금/집-있으면';
import { 신청방법SpokeContent } from './content/기초연금/신청방법';
import { 국민연금차이SpokeContent } from './content/기초연금/국민연금-차이';
import { 부부감액SpokeContent } from './content/기초연금/부부감액';
import { 감액기준SpokeContent } from './content/기초연금/감액기준';

import { 기초연금Spokes } from '@/data/policies/기초연금';

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

/* ── 정책별 타이틀 ── */
const policyTitles: Record<string, string> = {
  '1': '청년도약계좌',
  '2': '기초연금',
};

/* ── 스포크 메타 + 콘텐츠 매핑 ── */
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

/* ── 정책별 스포크 콘텐츠 맵 ── */
const spokeMaps: Record<string, Record<string, SpokeData>> = {
  '1': {
    'vs-희망적금': VsHopeSpokeContent,
    '중도해지': CancelSpokeContent,
    '기여금-계산': ContribSpokeContent,
    '소득없으면': NoIncomeSpokeContent,
  },
  '2': {
    '수급자격': 수급자격SpokeContent,
    '금액': 금액SpokeContent,
    '소득인정액-계산': 소득인정액계산SpokeContent,
    '재산기준': 재산기준SpokeContent,
    '집-있으면': 집있으면SpokeContent,
    '신청방법': 신청방법SpokeContent,
    '국민연금-차이': 국민연금차이SpokeContent,
    '부부감액': 부부감액SpokeContent,
    '감액기준': 감액기준SpokeContent,
  },
};

export default function SpokePage({ params }: { params: { id: string; spoke: string } }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const slug = decodeURIComponent(params.spoke);
  const policyId = params.id;
  const spokeMap = spokeMaps[policyId] || spokeMaps['1'];
  const spoke = spokeMap[slug];
  const spokeList = spokeLists[policyId] || spokeLists['1'];
  const policyTitle = policyTitles[policyId] || '정책';

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

  const spokeUrl = `${SITE_URL}/policy/${policyId}/${slug}`;
  const { Content } = spoke;

  const schemas = [
    articleSchema({
      title: spoke.h1,
      description: spoke.description,
      url: spokeUrl,
      datePublished: spoke.datePublished,
      dateModified: spoke.dateModified,
    }),
    breadcrumbSchema([
      { name: '홈', url: SITE_URL },
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
                  <span className="editor-role">공공데이터 기반 · 2026.03.20 검수</span>
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
              <p className="source-updated">마지막 검수: 2026.03.20</p>
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
            applyUrl={policyId === '2' ? 'https://www.bokjiro.go.kr' : 'https://www.gov.kr'}
          />
        </div>
      </div>
    </main>
  );
}
