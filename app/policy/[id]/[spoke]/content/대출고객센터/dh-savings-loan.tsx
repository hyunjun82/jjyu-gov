import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-dh-savings-loan-call-center.txt
 * 1차 출처: DH저축은행 홈페이지 고객센터 안내 (https://www.dhsavingsbank.co.kr/main_new.act)
 * 확인일: 2026-09-15
 *
 * 이 파일은 scripts/new-call-center.ts 가 dh-savings-loan.json 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = 'tel:0518677701';
const OFFICIAL = 'https://www.dhsavingsbank.co.kr';
const MAP = 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%B6%80%EC%82%B0%EC%A7%84%EA%B5%AC%20%EC%A4%91%EC%95%99%EB%8C%80%EB%A1%9C%20935';
const HUB = '/policy/loan-call-center';

export const dhSavingsLoanCallCenterSpokeContent: SpokeData = {
  h1: 'DH저축은행 대출 고객센터 전화번호 및 대출 상담 연결 안내',
  /* 업종어를 넣는다 — 대출 글인데 "웰컴저축은행 고객센터" 로 나가면
     회사 고객센터 글과 구분이 안 된다 (2026-08-27 사장님 확인). */
  breadcrumb: 'DH저축은행 대출 고객센터',
  description:
    'DH저축은행 고객센터 대표번호는 051-867-7701입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 대출 상담 연결 순서·업무별 번호·고객센터 위치도 함께 확인할 수 있습니다.',
  datePublished: '2026-09-15T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    'DH저축은행 고객센터 전화번호 051-867-7701. 대출 업무별 번호 2개와 상담원 연결 방법까지 2026-09-15 공식 안내 기준.',
  dateModified: '2026-09-15T09:00:00+09:00',

  heroHook:
    'DH저축은행 고객센터 대표번호는 051-867-7701입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 대출 상담 연결 순서·업무별 번호·고객센터 위치도 함께 확인할 수 있습니다.',
  heroAct: { label: '051-867-7701 바로 접수', href: TEL },

  keyFacts: {
    '대표번호': '051-867-7701 (고객센터)',
    '본사': '부산광역시 부산진구 중앙대로 935 (우 47210)',
  },
  /* '상담원 연결' 줄은 원문 ARS 에 그 번호가 있을 때만 (2026-09-15 조은저축은행).
     ARS 표만 있고 상담원 항목이 없는데 "ARS 안내에서 상담원 연결 선택" 이라 적었다 — 원문에 없는 메뉴다. */
  keyFactsHighlights: {
    '대표번호': ['051-867-7701'],
  },

  qa: [
    {
      q: 'DH저축은행 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 051-867-7701입니다. 대출 상담, 만기연장, 중도상환, 금리 문의까지 이 번호 하나로 들어갑니다. 다만 용건이 정해져 있으면 전용번호로 거는 편이 빠릅니다. 대표번호는 ARS 를 거치지만 전용번호는 담당 부서로 바로 연결되기 때문입니다. 2026-09-15 기준 공식 안내에 올라와 있는 번호는 아래 2개입니다.',
      highlights: ['051-867-7701', '대표번호', '전용번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [['고객센터', '051-867-7701', '대표전화와 같은 번호'], ['디지털뱅킹 고객센터', '1544-3637', '24시간 365일 연중무휴']],
      },
      sourceNote: '* 출처: DH저축은행 홈페이지 고객센터 안내 (2026-09-15 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        'DH저축은행 공식 안내에는 상담원에게 바로 넘어가는 단축번호가 공개돼 있지 않습니다.',
      highlights: ['상담원 연결'],
      table: {
        headers: ['번호', '평일 주간'],
        rows: [],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 부서 이관 횟수가 줄어듭니다. 본인이 아니면 위임 확인 절차가 더 붙으니, 주민번호와 대출 계좌번호를 미리 꺼내 두는 편이 빠릅니다.',
      },
      sourceNote: '* 출처: DH저축은행 홈페이지 고객센터 안내 (2026-09-15 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        'DH저축은행 공식 고객센터 안내에는 상담시간이 따로 적혀 있지 않아, 이 글에도 시간을 적지 않았습니다.',
      highlights: [],
      table: {
        headers: ['번호', '야간·휴일'],
        rows: [],
      },
      sourceNote: '* 출처: DH저축은행 홈페이지 고객센터 안내 (2026-09-15 확인)',
    },
    {
      q: 'DH저축은행 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '본사는 부산광역시 부산진구 중앙대로 935에 있습니다. 다만 한도 조회나 서류 제출은 방문하지 않아도 전화·앱·홈페이지로 끝나는 일이 많습니다. 서류 원본을 내야 하거나 대면 상담이 필요할 때만 움직이시는 편이 낫습니다. 방문하실 거라면 집에서 가까운 지점을 먼저 찾아보세요. 지도에서 회사 이름으로 검색하면 가까운 순으로 나옵니다.',
      highlights: ['부산광역시 부산진구 중앙대로 935'],
      act: {
        cue: 'DH저축은행 본사는 부산광역시 부산진구 중앙대로 쪽입니다. 창구에서만 되는 일이 아니면 안 가셔도 됩니다.',
        label: '지점 위치 확인하기',
        url: MAP,
      },
      sourceNote: '* 출처: DH저축은행 사업자 정보 (2026-09-15 확인)',
    },
    {
      q: '다른 금융사 대출 번호도 필요한데요', anchor: 'q5',
      intro:
        '대출은 한 곳만 알아보지 않습니다. 금리를 비교하려면 여러 곳에 걸어야 하는데, 회사마다 대출 창구 번호가 따로 있습니다. 회사마다 대표번호도 다르고 상담원 연결 번호도 다릅니다. 금융사별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['금융사별', '대표번호'],
      act: {
        cue: 'DH저축은행 공식 안내에 올라온 번호는 2개입니다. 두 곳 넘게 쓰신다면 미리 챙겨 두는 게 낫습니다.',
        label: '다른 금융사 대출 번호 보기',
        url: HUB,
      },
      sourceNote: '* 출처: 각 금융사 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: 'DH저축은행 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 051-867-7701입니다. (2026-09-15 확인 기준)',
      source: 'DH저축은행 홈페이지 고객센터 안내',
      sourceUrl: 'https://www.dhsavingsbank.co.kr/main_new.act',
    },
    {
      q: '본사 주소는 어디인가요?',
      a: '부산광역시 부산진구 중앙대로 935입니다. 방문 상담이 필요하면 가까운 지점을 먼저 확인하세요.',
      source: 'DH저축은행 사업자 정보',
      sourceUrl: 'https://www.dhsavingsbank.co.kr',
    },
  ],

  sources: [
    { name: 'DH저축은행 홈페이지 고객센터 안내', url: 'https://www.dhsavingsbank.co.kr/main_new.act' },
    { name: 'DH저축은행 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: {
    "slug": "dh-savings-loan",
    "name": "DH저축은행",
    "brandColor": "#0070B8",
    "official": "https://www.dhsavingsbank.co.kr",
    "sourceUrl": "https://www.dhsavingsbank.co.kr/main_new.act",
    "sourceName": "DH저축은행 홈페이지 고객센터 안내",
    "verifiedAt": "2026-09-15",
    "main": {
      "label": "고객센터",
      "tel": "051-867-7701"
    },
    "hours": {
      "weekday": ""
    },
    "word": "금융사",
    "hubWord": "대출 고객센터",
    "agentWord": "상담원",
    "offhourWord": "접수·조회",
    "idStep": "주민번호와 대출 계좌번호",
    "ars": {
      "day": [],
      "night": []
    },
    "numbers": [
      {
        "label": "고객센터",
        "tel": "051-867-7701",
        "note": "대표전화와 같은 번호"
      },
      {
        "label": "디지털뱅킹 고객센터",
        "tel": "1544-3637",
        "note": "24시간 365일 연중무휴"
      }
    ],
    "hq": "부산광역시 부산진구 중앙대로 935",
    "hqZip": "47210"
  },
};
