import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-roborock-call-center.txt
 * 1차 출처: 로보락 문의하기 (https://kr.roborock.com/pages/contact-us)
 * 확인일: 2026-10-27
 *
 * 이 파일은 scripts/new-call-center.ts 가 roborock.json 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = 'tel:15665534';
const OFFICIAL = 'https://kr.roborock.com';
const MAP = 'https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C%20410';
const HUB = '/policy/appliance-call-center';

export const roborockCallCenterSpokeContent: SpokeData = {
  h1: '로보락 고객센터 전화번호 및 상담 연결·운영시간 안내',
  /* 업종어를 넣는다 — 대출 글인데 "웰컴저축은행 고객센터" 로 나가면
     회사 고객센터 글과 구분이 안 된다 (2026-08-27 사장님 확인). */
  breadcrumb: '로보락 고객센터',
  description:
    '로보락 고객센터 대표번호는 1566-5534입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 문의 방법·운영시간·연락처도 함께 확인할 수 있습니다.',
  datePublished: '2026-10-27T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '로보락 고객센터 전화번호 1566-5534. 문의 번호 1개와 상담원 연결 방법까지 2026-10-27 공식 안내 기준.',
  dateModified: '2026-10-27T09:00:00+09:00',

  heroHook:
    '로보락 고객센터 대표번호는 1566-5534입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 문의 방법·운영시간·연락처도 함께 확인할 수 있습니다.',
  heroAct: { label: '1566-5534 상담 연결', href: TEL },

  keyFacts: {
    '대표번호': '1566-5534 (고객 기술지원)',
    '본사': '서울특별시 강남구 테헤란로 410',
  },
  /* '상담원 연결' 줄은 원문 ARS 에 그 번호가 있을 때만 (2026-09-15 조은저축은행).
     ARS 표만 있고 상담원 항목이 없는데 "ARS 안내에서 상담원 연결 선택" 이라 적었다 — 원문에 없는 메뉴다. */
  keyFactsHighlights: {
    '대표번호': ['1566-5534'],
  },

  qa: [
    {
      q: '로보락 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 1566-5534입니다. 공식 안내에 \'고객 기술지원\'으로 적힌 번호입니다. 2026-10-27 기준 공식 안내에 올라와 있는 번호는 이 번호 하나입니다.',
      highlights: ['1566-5534', '대표번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [['고객 기술지원', '1566-5534', '-']],
      },
      sourceNote: '* 출처: 로보락 문의하기 (2026-10-27 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        '로보락 공식 안내에는 상담원에게 바로 넘어가는 단축번호가 공개돼 있지 않습니다.',
      highlights: ['상담원 연결'],
      table: {
        headers: ['번호', '평일 주간'],
        rows: [],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 연결 후 설명이 짧아집니다. 제품 모델명과 구매일자를 미리 꺼내 두면 확인이 빨라집니다.',
      },
      sourceNote: '* 출처: 로보락 문의하기 (2026-10-27 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '로보락 공식 고객센터 안내에는 상담시간이 따로 적혀 있지 않아, 이 글에도 시간을 적지 않았습니다.',
      highlights: [],
      table: {
        headers: ['번호', '야간·휴일'],
        rows: [],
      },
      sourceNote: '* 출처: 로보락 문의하기 (2026-10-27 확인)',
    },
    {
      q: '로보락 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '본사는 서울특별시 강남구 테헤란로 410에 있습니다. 다만 제품 문의는 직접 찾아가기보다 전화로 먼저 접수하시는 편이 빠릅니다. 위치를 확인하시려면 지도에서 브랜드 이름으로 검색해 보세요.',
      highlights: ['서울특별시 강남구 테헤란로 410'],
      act: {
        cue: '로보락 본사는 서울특별시 강남구 테헤란로 쪽입니다. 헛걸음하지 않게 위치부터 짚고 나서시죠.',
        label: '위치 확인하기',
        url: MAP,
      },
      sourceNote: '* 출처: 로보락 사업자 정보 (2026-10-27 확인)',
    },
    {
      q: '다른 가전업체 고객센터 번호도 필요한데요', anchor: 'q5',
      intro:
        '집에 가전이 한 브랜드만 있지 않습니다. 이번엔 이 회사, 저번엔 저 회사여서 고장 날 때마다 번호를 새로 찾게 됩니다. 회사마다 대표번호도 다르고 상담원 연결 번호도 다릅니다. 가전업체별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['가전업체별', '대표번호'],
      act: {
        cue: '로보락 대표번호는 1566-5534 하나입니다. 급할 때 다시 찾지 않게 목록을 열어 두시죠.',
        label: '가전업체 전체 목록 열기',
        url: HUB,
      },
      sourceNote: '* 출처: 각 가전업체 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '로보락 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 1566-5534입니다. (2026-10-27 확인 기준)',
      source: '로보락 문의하기',
      sourceUrl: 'https://kr.roborock.com/pages/contact-us',
    },
    {
      q: '본사 주소는 어디인가요?',
      a: '서울특별시 강남구 테헤란로 410입니다. 방문하시기 전에 전화로 먼저 문의하시는 편이 빠릅니다.',
      source: '로보락 사업자 정보',
      sourceUrl: 'https://kr.roborock.com',
    },
  ],

  sources: [
    { name: '로보락 문의하기', url: 'https://kr.roborock.com/pages/contact-us' },
    { name: '로보락 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: {
    "slug": "roborock",
    "name": "로보락",
    "brandColor": "#EA0029",
    "official": "https://kr.roborock.com",
    "sourceUrl": "https://kr.roborock.com/pages/contact-us",
    "sourceName": "로보락 문의하기",
    "verifiedAt": "2026-10-27",
    "main": {
      "label": "고객 기술지원",
      "tel": "1566-5534"
    },
    "hours": {
      "weekday": ""
    },
    "word": "가전업체",
    "hubWord": "가전 고객센터",
    "agentWord": "상담원",
    "offhourWord": "온라인 AS 접수",
    "idStep": "제품 모델명과 구매일자",
    "ars": {
      "day": [],
      "night": []
    },
    "numbers": [
      {
        "label": "고객 기술지원",
        "tel": "1566-5534"
      }
    ],
    "hq": "서울특별시 강남구 테헤란로 410"
  },
};
