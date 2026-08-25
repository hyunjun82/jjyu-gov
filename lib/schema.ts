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

/* ── 보험사 고객센터 전용 (2026-08-25 신설) ──
   경쟁 페이지는 Article + FAQ 로 끝난다. 여기는 한 단계 더 간다 —
   번호·운영시간·주소를 ContactPoint / OpeningHoursSpecification 로 기계가 읽게 준다.
   주의: 우리는 그 보험사가 아니다. publisher 는 우리 사이트로 두고,
   보험사는 about(주제)으로만 서술한다. 사칭이 되면 안 된다. */
export function callCenterSchema(
  cc: {
    name: string;
    official: string;
    sourceUrl: string;
    verifiedAt: string;
    main: { label: string; tel: string };
    hours: { weekday: string; night: string; holiday: string };
    numbers: { label: string; tel: string; note?: string; smsOnly?: boolean }[];
    ars: { day: { key: string; what: string }[] };
    hq: string;
    hqZip?: string;
  },
  url: string,
) {
  /* 국내 대표번호(1588 등)는 지역번호가 없다. E.164 로는 +82-{번호} 가 맞다. */
  const e164 = (t: string) => '+82-' + String(t).replace(/^0/, '').replace(/[^0-9-]/g, '');

  const kindOf = (label: string) => {
    if (/사고|긴급|출동/.test(label)) return 'emergency';
    if (/대출/.test(label)) return 'billing support';
    if (/외국인|foreign/i.test(label)) return 'customer service';
    return 'customer service';
  };

  /* 운영시간 "월~금요일 09시 ~ 18시" → OpeningHoursSpecification */
  const hm = cc.hours.weekday.match(/(\d{1,2})\s*(?::\d{2}|시)/g) ?? [];
  const pad = (n: string | undefined) => String(parseInt(n ?? '0', 10)).padStart(2, '0') + ':00';
  const weekdayHours =
    hm.length >= 2
      ? [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: pad(hm[0]),
            closes: pad(hm[1]),
          },
        ]
      : undefined;

  const contactPoint = cc.numbers
    .filter((n) => !n.smsOnly)
    .map((n) => ({
      '@type': 'ContactPoint',
      telephone: e164(n.tel),
      contactType: kindOf(n.label),
      name: n.label,
      areaServed: 'KR',
      availableLanguage: /외국인|foreign/i.test(n.label) ? ['ko', 'en'] : ['ko'],
      hoursAvailable: /사고|긴급|출동/.test(n.label) ? undefined : weekdayHours,
    }));

  const addr = cc.hq.replace(/\(.*$/, '').trim();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#page`,
    url,
    name: `${cc.name} 고객센터 전화번호·상담사 연결 안내`,
    /* 검수 표기 — 사람이 언제 확인했는지를 기계에도 준다 */
    lastReviewed: cc.verifiedAt,
    reviewedBy: { '@id': `${SITE_URL}/#editor` },
    isPartOf: { '@id': `${SITE_URL}/#org` },
    citation: cc.sourceUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.cc-big'],
    },
    about: {
      '@type': 'Organization',
      name: cc.name,
      url: cc.official,
      telephone: e164(cc.main.tel),
      address: {
        '@type': 'PostalAddress',
        streetAddress: addr,
        addressCountry: 'KR',
        postalCode: cc.hqZip,
      },
      contactPoint,
    },
  };
}
