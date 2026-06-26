'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import AdSense from '@/components/AdSense';

interface SpokeLink {
  slug: string;
  title: string;
}

interface PolicySidebarProps {
  policyId: string;
  policyTitle: string;
  spokes: SpokeLink[];
  currentSpoke?: string;
  applyUrl: string;
}

export default function PolicySidebar({
  policyId,
  policyTitle,
  spokes,
  currentSpoke,
  applyUrl,
}: PolicySidebarProps) {
  return (
    <aside className="policy-sidebar">
      {/* CTA */}
      <div className="sidebar-cta">
        <a href={applyUrl} className="sidebar-cta-btn">
          지금 바로 신청하기
        </a>
      </div>

      {/* 스포크 네비게이션 */}
      <div className="sidebar-nav">
        <div className="sidebar-nav-head">
          이 제도 자세히 알아보기
        </div>
        <ul className="sidebar-nav-list">
          {/* 허브 링크 */}
          <li>
            <Link
              href={`/policy/${policyId}`}
              className={`sidebar-nav-item hub ${!currentSpoke ? 'active' : ''}`}
            >
              <ChevronRight size={14} />
              <span>{policyTitle} 전체보기</span>
            </Link>
          </li>
          {/* 스포크 링크 */}
          {spokes.map((spoke) => (
            <li key={spoke.slug}>
              <Link
                href={`/policy/${policyId}/${spoke.slug}`}
                className={`sidebar-nav-item ${currentSpoke === spoke.slug ? 'active' : ''}`}
              >
                <ChevronRight size={14} />
                <span>{spoke.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 광고 gov4 — 사이드바 (전 페이지 공통) */}
      <div className="ad-slot" style={{ minHeight: 250 }}>
        <AdSense slot="5769746708" format="vertical" />
      </div>
    </aside>
  );
}
