import type { MetadataRoute } from 'next';
import { PoliciesBySlug } from '@/data/policies/manifest';
import { SpokesRegistry } from '@/data/spokes/registry';

const BASE = 'https://gov.jjyu.co.kr';

// output:'export' 정적 생성 — 빌드 시 out/sitemap.xml 로 출력됨
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // ── 1. 고정 페이지 ──
  const staticPaths = [
    '/',
    '/about/',
    '/contact/',
    '/privacy/',
    '/terms/',
    '/category/fund/',
    '/category/refund/',
    '/category/loan/',
    '/category/youth/',
    '/category/welfare/',
    '/category/tax/',
    '/category/medical/',
    '/category/life/',
    '/fund-compare/',
    '/calc/basic-pension/',
    '/calc/median-income/',
    '/calc/maternity-leave-pay/',
    '/calc/jongbuse/',
  ];
  for (const path of staticPaths) {
    entries.push({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.6,
    });
  }

  // ── 2. 정책 메인 페이지 (canonical = slug) ──
  for (const slug of Object.keys(PoliciesBySlug)) {
    entries.push({
      url: `${BASE}/policy/${slug}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  // ── 3. 스포크 페이지 (canonical = 한글 spokeKey) ──
  for (const [policySlug, spokes] of Object.entries(SpokesRegistry)) {
    if (!spokes || typeof spokes !== 'object') continue;
    for (const spokeKey of Object.keys(spokes)) {
      entries.push({
        url: `${BASE}/policy/${policySlug}/${encodeURIComponent(spokeKey)}/`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return entries;
}
