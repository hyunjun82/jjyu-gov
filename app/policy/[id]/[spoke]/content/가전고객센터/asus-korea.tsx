import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-asus-korea-call-center.txt
 * 1차 출처: ASUS 고객 지원 (https://www.asus.com/kr/support/)
 * 확인일: 2026-10-27
 *
 * 이 파일은 scripts/new-call-center.ts 가 asus-korea.json 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = 'tel:15666868';
const OFFICIAL = 'https://www.asus.com';
const MAP = 'https://map.naver.com/p/search/%EC%97%90%EC%9D%B4%EC%88%98%EC%8A%A4';
const HUB = '/policy/appliance-call-center';

export const asusKoreaCallCenterSpokeContent: SpokeData = {
  h1: '에이수스 고객센터 전화번호 및 상담 연결·운영시간 안내',
  /* 업종어를 넣는다 — 대출 글인데 "웰컴저축은행 고객센터" 로 나가면
     회사 고객센터 글과 구분이 안 된다 (2026-08-27 사장님 확인). */
  breadcrumb: '에이수스 고객센터',
  description:
    '에이수스 고객센터 대표번호는 1566-6868입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 문의 방법·운영시간·연락처도 함께 확인할 수 있습니다.',
  datePublished: '2026-10-27T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '에이수스 고객센터 전화번호 1566-6868. 2026-10-27 공식 안내 기준.',
  dateModified: '2026-10-27T09:00:00+09:00',

  heroHook:
    '에이수스 고객센터 대표번호는 1566-6868입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 문의 방법·운영시간·연락처도 함께 확인할 수 있습니다.',
  heroAct: { label: '1566-6868 눌러서 걸기', href: TEL },

  keyFacts: {
    '대표번호': '1566-6868 (ASUS 고객센터)',
  },
  /* '상담원 연결' 줄은 원문 ARS 에 그 번호가 있을 때만 (2026-09-15 조은저축은행).
     ARS 표만 있고 상담원 항목이 없는데 "ARS 안내에서 상담원 연결 선택" 이라 적었다 — 원문에 없는 메뉴다. */
  keyFactsHighlights: {
    '대표번호': ['1566-6868'],
  },

  qa: [
    {
      q: '에이수스 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 1566-6868입니다. 공식 안내에 \'ASUS 고객센터\'로 적힌 번호입니다. 다만 용건이 정해져 있으면 전용번호로 거는 편이 빠릅니다. 대표번호는 ARS 를 거치지만 전용번호는 담당 부서로 바로 연결되기 때문입니다. 2026-10-27 기준 공식 안내에 올라와 있는 번호는 아래 2개입니다.',
      highlights: ['1566-6868', '대표번호', '전용번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [['ASUS 고객센터', '1566-6868', '-'], ['ASUS 공식 스토어', '1544-9530', '-']],
      },
      sourceNote: '* 출처: ASUS 고객 지원 (2026-10-27 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        '에이수스 공식 안내에는 상담원에게 바로 넘어가는 단축번호가 공개돼 있지 않습니다.',
      highlights: ['상담원 연결'],
      table: {
        headers: ['번호', '평일 주간'],
        rows: [],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 연결 후 설명이 짧아집니다. 제품 모델명과 구매일자를 미리 꺼내 두면 확인이 빨라집니다.',
      },
      sourceNote: '* 출처: ASUS 고객 지원 (2026-10-27 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '에이수스 공식 고객센터 안내에는 상담시간이 따로 적혀 있지 않아, 이 글에도 시간을 적지 않았습니다.',
      highlights: [],
      table: {
        headers: ['번호', '야간·휴일'],
        rows: [],
      },
      sourceNote: '* 출처: ASUS 고객 지원 (2026-10-27 확인)',
    },
    {
      q: '에이수스 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '제품 문의는 직접 찾아가기보다 전화로 먼저 접수하시는 편이 빠릅니다. 위치를 확인하시려면 지도에서 브랜드 이름으로 검색해 보세요.',
      highlights: ['지도에서 브랜드 이름으로 검색'],
      act: {
        cue: '에이수스 창구 위치는 지도 검색이 가장 빠릅니다. 헛걸음하지 않게 위치부터 짚고 나서시죠.',
        label: '위치 확인하기',
        url: MAP,
      },
      sourceNote: '* 출처: 에이수스 사업자 정보 (2026-10-27 확인)',
    },
    {
      q: '다른 가전업체 고객센터 번호도 필요한데요', anchor: 'q5',
      intro:
        '집에 가전이 한 브랜드만 있지 않습니다. 이번엔 이 회사, 저번엔 저 회사여서 고장 날 때마다 번호를 새로 찾게 됩니다. 회사마다 대표번호도 다르고 상담원 연결 번호도 다릅니다. 가전업체별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['가전업체별', '대표번호'],
      act: {
        cue: '에이수스 공식 안내에 올라온 번호는 2개입니다. 급할 때 다시 찾지 않게 목록을 열어 두시죠.',
        label: '다른 가전업체 번호 보기',
        url: HUB,
      },
      sourceNote: '* 출처: 각 가전업체 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '에이수스 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 1566-6868입니다. (2026-10-27 확인 기준)',
      source: 'ASUS 고객 지원',
      sourceUrl: 'https://www.asus.com/kr/support/',
    },
  ],

  sources: [
    { name: 'ASUS 고객 지원', url: 'https://www.asus.com/kr/support/' },
    { name: '에이수스 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: {
    "slug": "asus-korea",
    "name": "에이수스",
    "brandColor": "#1F1F1F",
    "official": "https://www.asus.com",
    "sourceUrl": "https://www.asus.com/kr/support/",
    "sourceName": "ASUS 고객 지원",
    "verifiedAt": "2026-10-27",
    "main": {
      "label": "ASUS 고객센터",
      "tel": "1566-6868"
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
        "label": "ASUS 고객센터",
        "tel": "1566-6868"
      },
      {
        "label": "ASUS 공식 스토어",
        "tel": "1544-9530"
      }
    ]
  },
};
