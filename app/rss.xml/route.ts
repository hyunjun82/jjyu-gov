import { PoliciesBySlug } from '@/data/policies/manifest';

export const dynamic = 'force-static';

const BASE = 'https://gov.jjyu.co.kr';
const SITE_NAME = '정부지원사업';
const SITE_DESC = '정부 지원금·환급금·대출 정보를 정부 1차 출처 기반으로 정리하는 포털';

function esc(s: string): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function rfc822(iso?: string): string {
  if (!iso) return new Date().toUTCString();
  const d = new Date(iso);
  return isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString();
}

export async function GET() {
  const policies = Object.values(PoliciesBySlug) as Array<{
    slug?: string;
    title?: string;
    org?: string;
    summary?: string;
    amount?: string;
    datePublished?: string;
    dateModified?: string;
  }>;

  const items = policies
    .filter((p) => p?.slug && p?.title)
    .sort((a, b) =>
      String(b.dateModified ?? b.datePublished ?? '').localeCompare(
        String(a.dateModified ?? a.datePublished ?? ''),
      ),
    )
    .slice(0, 50)
    .map((p) => {
      const link = `${BASE}/policy/${p.slug}/`;
      const desc = p.summary ?? `${p.org ?? ''} ${p.amount ?? ''}`.trim();
      return `    <item>
      <title>${esc(p.title!)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${rfc822(p.dateModified ?? p.datePublished)}</pubDate>
      <description>${esc(desc)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(SITE_NAME)}</title>
    <link>${BASE}/</link>
    <description>${esc(SITE_DESC)}</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
