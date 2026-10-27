import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-saha-gu-office-call-center.txt
 * 1차 출처: 사하구청 홈페이지 (https://www.saha.go.kr/)
 * 확인일: 2026-10-27
 *
 * 이 파일은 scripts/new-call-center.ts 가 saha-gu-office.json 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = 'tel:0512204000';
const OFFICIAL = 'https://www.saha.go.kr';
const MAP = 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%82%AC%ED%95%98%EA%B5%AC%20%EB%82%99%EB%8F%99%EB%8C%80%EB%A1%9C398%EB%B2%88%EA%B8%B8%2012';
const HUB = '/policy/public-call-center';

export const sahaGuOfficeCallCenterSpokeContent: SpokeData = {
  h1: '사하구청 고객센터 전화번호 및 상담직원 연결·업무시간 안내',
  /* 업종어를 넣는다 — 대출 글인데 "웰컴저축은행 고객센터" 로 나가면
     회사 고객센터 글과 구분이 안 된다 (2026-08-27 사장님 확인). */
  breadcrumb: '사하구청 고객센터',
  description:
    '사하구청 고객센터 대표번호는 051-220-4000입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담직원 연결 순서·업무시간·기관 위치도 함께 확인할 수 있습니다.',
  datePublished: '2026-10-27T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '사하구청 고객센터 전화번호 051-220-4000. 업무별 단축번호 1개와 상담원 연결 방법까지 2026-10-27 공식 안내 기준.',
  dateModified: '2026-10-27T09:00:00+09:00',

  heroHook:
    '사하구청 고객센터 대표번호는 051-220-4000입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담직원 연결 순서·업무시간·기관 위치도 함께 확인할 수 있습니다.',
  heroAct: { label: '051-220-4000 지금 연결하기', href: TEL },

  keyFacts: {
    '대표번호': '051-220-4000 (전화)',
    '본사': '부산광역시 사하구 낙동대로398번길 12 (우 49328)',
  },
  /* '상담원 연결' 줄은 원문 ARS 에 그 번호가 있을 때만 (2026-09-15 조은저축은행).
     ARS 표만 있고 상담원 항목이 없는데 "ARS 안내에서 상담원 연결 선택" 이라 적었다 — 원문에 없는 메뉴다. */
  keyFactsHighlights: {
    '대표번호': ['051-220-4000'],
  },

  qa: [
    {
      q: '사하구청 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 051-220-4000입니다. 공식 안내에 \'전화\'로 적힌 번호입니다. 2026-10-27 기준 공식 안내에 올라와 있는 번호는 이 번호 하나입니다.',
      highlights: ['051-220-4000', '대표번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [['전화', '051-220-4000', '-']],
      },
      sourceNote: '* 출처: 사하구청 홈페이지 (2026-10-27 확인)',
    },
    {
      q: '상담직원과 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        '사하구청 공식 안내에는 상담직원에게 바로 넘어가는 단축번호가 공개돼 있지 않습니다.',
      highlights: ['상담직원 연결'],
      table: {
        headers: ['번호', '평일 주간'],
        rows: [],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 연결 후 설명이 짧아집니다. 문의하실 내용과 연락받을 번호를 미리 꺼내 두면 확인이 빨라집니다.',
      },
      sourceNote: '* 출처: 사하구청 홈페이지 (2026-10-27 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '사하구청 공식 고객센터 안내에는 상담시간이 따로 적혀 있지 않아, 이 글에도 시간을 적지 않았습니다.',
      highlights: [],
      table: {
        headers: ['번호', '야간·휴일'],
        rows: [],
      },
      sourceNote: '* 출처: 사하구청 홈페이지 (2026-10-27 확인)',
    },
    {
      q: '사하구청 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '소재지는 부산광역시 사하구 낙동대로398번길 12입니다. 방문 전에 전화로 먼저 문의하시는 편이 빠릅니다. 위치를 확인하시려면 지도에서 기관 이름으로 검색해 보세요.',
      highlights: ['부산광역시 사하구 낙동대로398번길 12'],
      act: {
        cue: '사하구청 위치는 부산광역시 사하구 쪽입니다. 가시기 전에 문 여는 시간을 같이 보세요.',
        label: '위치 확인하기',
        url: MAP,
      },
      sourceNote: '* 출처: 사하구청 사업자 정보 (2026-10-27 확인)',
    },
    {
      q: '다른 기관 고객센터 번호도 필요한데요', anchor: 'q5',
      intro:
        '한 가지 일을 마치는데 기관 두 곳에 걸어야 하는 경우입니다. 시설을 운영하는 곳과 접수를 받는 창구가 따로 있으면 어디에 먼저 걸어야 할지부터 헷갈립니다. 기관마다 대표번호도 다르고 상담직원 연결 번호도 다릅니다. 공공기관별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['공공기관별', '대표번호'],
      act: {
        cue: '사하구청 대표번호는 051-220-4000 하나입니다. 어디로 걸어야 하는지는 목록에서 바로 갈립니다.',
        label: '다른 기관 번호 보기',
        url: HUB,
      },
      sourceNote: '* 출처: 각 공공기관 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '사하구청 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 051-220-4000입니다. (2026-10-27 확인 기준)',
      source: '사하구청 홈페이지',
      sourceUrl: 'https://www.saha.go.kr/',
    },
    {
      q: '주소는 어디인가요?',
      a: '부산광역시 사하구 낙동대로398번길 12입니다. 방문하시기 전에 전화로 먼저 문의하시는 편이 빠릅니다.',
      source: '사하구청 사업자 정보',
      sourceUrl: 'https://www.saha.go.kr',
    },
  ],

  sources: [
    { name: '사하구청 홈페이지', url: 'https://www.saha.go.kr/' },
    { name: '사하구청 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: {
    "slug": "saha-gu-office",
    "name": "사하구청",
    "brandColor": "#1F1F1F",
    "official": "https://www.saha.go.kr",
    "sourceUrl": "https://www.saha.go.kr/",
    "sourceName": "사하구청 홈페이지",
    "verifiedAt": "2026-10-27",
    "main": {
      "label": "전화",
      "tel": "051-220-4000"
    },
    "hours": {
      "weekday": ""
    },
    "word": "공공기관",
    "hubWord": "공공기관 고객센터",
    "agentWord": "상담직원",
    "offhourWord": "ARS 자동응답",
    "idStep": "문의하실 내용과 연락받을 번호",
    "ars": {
      "day": [],
      "night": []
    },
    "numbers": [
      {
        "label": "전화",
        "tel": "051-220-4000"
      }
    ],
    "hq": "부산광역시 사하구 낙동대로398번길 12",
    "hqZip": "49328"
  },
};
