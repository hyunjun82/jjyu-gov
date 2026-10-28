import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-kyochon-chicken-call-center.txt
 * 1차 출처: 교촌치킨 공식 홈페이지 (https://www.kyochon.com/main/)
 * 확인일: 2026-10-27
 *
 * 이 파일은 scripts/new-call-center.ts 가 kyochon-chicken.json 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = 'tel:0803203000';
const OFFICIAL = 'https://www.kyochon.com';
const MAP = 'https://map.naver.com/p/search/%EA%B5%90%EC%B4%8C%EC%B9%98%ED%82%A8';
const HUB = '/policy/online-call-center';

export const kyochonChickenCallCenterSpokeContent: SpokeData = {
  h1: '교촌치킨 고객센터 전화번호 및 상담원 연결·문의 안내',
  /* 업종어를 넣는다 — 대출 글인데 "웰컴저축은행 고객센터" 로 나가면
     회사 고객센터 글과 구분이 안 된다 (2026-08-27 사장님 확인). */
  breadcrumb: '교촌치킨 고객센터',
  description:
    '교촌치킨 고객센터 대표번호는 080-320-3000입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담원 연결 순서·문의 방법·업무별 번호도 함께 확인할 수 있습니다.',
  datePublished: '2026-10-27T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '교촌치킨 고객센터 전화번호 080-320-3000. 2026-10-27 공식 안내 기준.',
  dateModified: '2026-10-27T09:00:00+09:00',

  heroHook:
    '교촌치킨 고객센터 대표번호는 080-320-3000입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담원 연결 순서·문의 방법·업무별 번호도 함께 확인할 수 있습니다.',
  heroAct: { label: '080-320-3000 바로 접수', href: TEL },

  keyFacts: {
    '대표번호': '080-320-3000 (고객센터)',
  },
  /* '상담원 연결' 줄은 원문 ARS 에 그 번호가 있을 때만 (2026-09-15 조은저축은행).
     ARS 표만 있고 상담원 항목이 없는데 "ARS 안내에서 상담원 연결 선택" 이라 적었다 — 원문에 없는 메뉴다. */
  keyFactsHighlights: {
    '대표번호': ['080-320-3000'],
  },

  qa: [
    {
      q: '교촌치킨 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 080-320-3000입니다. 공식 안내에 \'고객센터\'로 적힌 번호입니다. 다만 용건이 정해져 있으면 전용번호로 거는 편이 빠릅니다. 대표번호는 ARS 를 거치지만 전용번호는 담당 부서로 바로 연결되기 때문입니다. 2026-10-27 기준 공식 안내에 올라와 있는 번호는 아래 3개입니다.',
      highlights: ['080-320-3000', '대표번호', '전용번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [['고객센터', '080-320-3000', '-'], ['전화주문', '1577-1991', '-'], ['대표번호', '031-371-3500', '-']],
      },
      sourceNote: '* 출처: 교촌치킨 공식 홈페이지 (2026-10-27 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        '교촌치킨 공식 안내에는 상담원에게 바로 넘어가는 단축번호가 공개돼 있지 않습니다.',
      highlights: ['상담원 연결'],
      table: {
        headers: ['번호', '평일 주간'],
        rows: [],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 연결 후 설명이 짧아집니다. 이용 매장명과 이용 일시를 미리 꺼내 두면 확인이 빨라집니다.',
      },
      sourceNote: '* 출처: 교촌치킨 공식 홈페이지 (2026-10-27 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '교촌치킨 공식 고객센터 안내에는 상담시간이 따로 적혀 있지 않아, 이 글에도 시간을 적지 않았습니다.',
      highlights: [],
      table: {
        headers: ['번호', '야간·휴일'],
        rows: [],
      },
      sourceNote: '* 출처: 교촌치킨 공식 홈페이지 (2026-10-27 확인)',
    },
    {
      q: '교촌치킨 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '문의나 불만 접수는 매장을 찾아가기보다 전화로 먼저 하시는 편이 빠릅니다. 이용하신 매장은 지도에서 브랜드 이름으로 검색하면 가까운 순으로 나옵니다.',
      highlights: ['지도에서 브랜드 이름으로 검색'],
      act: {
        cue: '교촌치킨 창구 위치는 지도 검색이 가장 빠릅니다. 헛걸음하지 않게 위치부터 짚고 나서시죠.',
        label: '가까운 매장 찾기',
        url: MAP,
      },
      sourceNote: '* 출처: 교촌치킨 사업자 정보 (2026-10-27 확인)',
    },
    {
      q: '다른 외식 브랜드 고객센터 번호도 필요한데요', anchor: 'q5',
      intro:
        '카페와 패스트푸드를 한 곳만 이용하지 않습니다. 이용한 매장의 브랜드가 여러 곳이면 어느 번호에 걸어야 할지부터 헷갈립니다. 브랜드마다 대표번호도 다르고 상담원 연결 번호도 다릅니다. 외식 브랜드별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['외식 브랜드별', '대표번호'],
      act: {
        cue: '교촌치킨 공식 안내에 올라온 번호는 3개입니다. 급할 때 다시 찾지 않게 목록을 열어 두시죠.',
        label: '다른 서비스 번호 보기',
        url: HUB,
      },
      sourceNote: '* 출처: 각 외식 브랜드 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '교촌치킨 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 080-320-3000입니다. (2026-10-27 확인 기준)',
      source: '교촌치킨 공식 홈페이지',
      sourceUrl: 'https://www.kyochon.com/main/',
    },
  ],

  sources: [
    { name: '교촌치킨 공식 홈페이지', url: 'https://www.kyochon.com/main/' },
    { name: '교촌치킨 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: {
    "slug": "kyochon-chicken",
    "name": "교촌치킨",
    "brandColor": "#F8B915",
    "official": "https://www.kyochon.com",
    "sourceUrl": "https://www.kyochon.com/main/",
    "sourceName": "교촌치킨 공식 홈페이지",
    "verifiedAt": "2026-10-27",
    "main": {
      "label": "고객센터",
      "tel": "080-320-3000"
    },
    "hours": {
      "weekday": ""
    },
    "word": "외식 브랜드",
    "hubWord": "온라인 고객센터",
    "agentWord": "상담원",
    "offhourWord": "접수·문의",
    "idStep": "이용 매장명과 이용 일시",
    "ars": {
      "day": [],
      "night": []
    },
    "numbers": [
      {
        "label": "고객센터",
        "tel": "080-320-3000"
      },
      {
        "label": "전화주문",
        "tel": "1577-1991"
      },
      {
        "label": "대표번호",
        "tel": "031-371-3500"
      }
    ]
  },
};
