/**
 * gov-jjyu 공통 스키마 생성 유틸리티
 * 모든 정책 페이지에서 재사용
 */

const SITE_URL = 'https://gov.jjyu.co.kr';
const SITE_NAME = '정부지원사업';
const EDITOR_NAME = '정부지원사업 에디터';

/* ── 사이트 전역 (루트 레이아웃 1회) ── */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#org`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      '정부에서 지원하는 보조금, 환급금, 대출 정보를 한눈에 확인하는 포털',
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#editor`,
    name: EDITOR_NAME,
    jobTitle: '정부지원금 콘텐츠 에디터',
    url: `${SITE_URL}/about`,
    worksFor: { '@id': `${SITE_URL}/#org` },
    knowsAbout: [
      '정부지원금',
      '청년정책',
      '복지급여',
      '국민취업지원제도',
      '기초생활보장',
      '주거급여',
      '긴급복지지원',
    ],
  };
}

/* ── 페이지별 스키마 ── */

interface ArticleParams {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}

/** Article + GovernmentService 중첩 (Hub 페이지) */
export function articleWithGovServiceSchema(
  article: ArticleParams,
  service: {
    name: string;
    org: string;
    serviceType: string;
    audience: string;
  },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image ? [article.image] : undefined,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    url: article.url,
    author: { '@id': `${SITE_URL}/#editor` },
    publisher: { '@id': `${SITE_URL}/#org` },
    mainEntity: {
      '@type': 'GovernmentService',
      name: service.name,
      serviceType: service.serviceType,
      provider: {
        '@type': 'GovernmentOrganization',
        name: service.org,
      },
      areaServed: {
        '@type': 'Country',
        name: '대한민국',
      },
      audience: {
        '@type': 'Audience',
        audienceType: service.audience,
      },
    },
  };
}

/** Article 단독 (Spoke 페이지) */
export function articleSchema(params: ArticleParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    image: params.image ? [params.image] : undefined,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    url: params.url,
    author: { '@id': `${SITE_URL}/#editor` },
    publisher: { '@id': `${SITE_URL}/#org` },
  };
}

/** BreadcrumbList — 페이지마다 다른 경로 */
export function breadcrumbSchema(
  items: { name: string; url?: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

/** FAQPage */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

/** ItemList — Hub에서 Spoke 목록 */
export function itemListSchema(
  name: string,
  items: { title: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.title,
      url: item.url,
    })),
  };
}

/** JSON-LD script 태그용 직렬화 */
export function toJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}
