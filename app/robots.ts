import type { MetadataRoute } from 'next';

const BASE = 'https://gov.jjyu.co.kr';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
