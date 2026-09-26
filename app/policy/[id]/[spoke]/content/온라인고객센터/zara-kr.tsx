import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-zara-kr-call-center.txt
 * 1차 출처: ZARA 도움말 (https://www.zara.com/kr/ko/help-center)
 * 확인일: 2026-09-26
 *
 * 이 파일은 scripts/new-call-center.ts 가 zara-kr.json 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = 'tel:0808220311';
const OFFICIAL = 'https://www.zara.com';
const MAP = 'https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%98%81%EB%8F%99%EB%8C%80%EB%A1%9C%20511%2020%EC%B8%B5%202002%ED%98%B8';
const HUB = '/policy/online-call-center';

export const zaraKrCallCenterSpokeContent: SpokeData = {
  h1: '자라(ZARA) 고객센터 전화번호 및 상담원 연결·문의 안내',
  /* 업종어를 넣는다 — 대출 글인데 "웰컴저축은행 고객센터" 로 나가면
     회사 고객센터 글과 구분이 안 된다 (2026-08-27 사장님 확인). */
  breadcrumb: '자라(ZARA) 고객센터',
  description:
    '자라(ZARA) 고객센터 대표번호는 080-822-0311입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담원 연결 순서·문의 방법·업무별 번호도 함께 확인할 수 있습니다.',
  datePublished: '2026-09-26T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '자라(ZARA) 고객센터 전화번호 080-822-0311. 문의 유형별 번호 1개와 상담원 연결 방법까지 2026-09-26 공식 안내 기준.',
  dateModified: '2026-09-26T09:00:00+09:00',

  heroHook:
    '자라(ZARA) 고객센터 대표번호는 080-822-0311입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담원 연결 순서·문의 방법·업무별 번호도 함께 확인할 수 있습니다.',
  heroAct: { label: '080-822-0311 통화 시작', href: TEL },

  keyFacts: {
    '대표번호': '080-822-0311 (대표번호)',
    '본사': '서울특별시 강남구 영동대로 511 20층 2002호 (삼성동, 트레이드타워)',
  },
  /* '상담원 연결' 줄은 원문 ARS 에 그 번호가 있을 때만 (2026-09-15 조은저축은행).
     ARS 표만 있고 상담원 항목이 없는데 "ARS 안내에서 상담원 연결 선택" 이라 적었다 — 원문에 없는 메뉴다. */
  keyFactsHighlights: {
    '대표번호': ['080-822-0311'],
  },

  qa: [
    {
      q: '자라(ZARA) 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 080-822-0311입니다. 주문·결제 문의, 환불, 계정 문제까지 이 번호 하나로 들어갑니다. 다만 용건이 정해져 있으면 전용번호로 거는 편이 빠릅니다. 대표번호는 ARS 를 거치지만 전용번호는 담당 부서로 바로 연결되기 때문입니다. 2026-09-26 기준 공식 안내에 올라와 있는 번호는 아래 1개입니다.',
      highlights: ['080-822-0311', '대표번호', '전용번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [['대표번호', '080-822-0311', '-']],
      },
      sourceNote: '* 출처: ZARA 도움말 (2026-09-26 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        '자라(ZARA) 공식 안내에는 상담원에게 바로 넘어가는 단축번호가 공개돼 있지 않습니다.',
      highlights: ['상담원 연결'],
      table: {
        headers: ['번호', '평일 주간'],
        rows: [],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 부서 이관 횟수가 줄어듭니다. 본인이 아니면 위임 확인 절차가 더 붙으니, 주문번호를 미리 꺼내 두는 편이 빠릅니다.',
      },
      sourceNote: '* 출처: ZARA 도움말 (2026-09-26 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '자라(ZARA) 공식 고객센터 안내에는 상담시간이 따로 적혀 있지 않아, 이 글에도 시간을 적지 않았습니다.',
      highlights: [],
      table: {
        headers: ['번호', '야간·휴일'],
        rows: [],
      },
      sourceNote: '* 출처: ZARA 도움말 (2026-09-26 확인)',
    },
    {
      q: '자라(ZARA) 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '본사는 서울특별시 강남구 영동대로 511 20층 2002호 (삼성동, 트레이드타워)에 있습니다. 다만 환불이나 계정 복구는 방문하지 않아도 전화·앱·홈페이지로 끝나는 일이 많습니다. 서류 원본을 내야 하거나 대면 상담이 필요할 때만 움직이시는 편이 낫습니다. 방문하실 거라면 집에서 가까운 지점을 먼저 찾아보세요. 지도에서 서비스 이름으로 검색하면 가까운 순으로 나옵니다.',
      highlights: ['서울특별시 강남구 영동대로 511 20층 2002호 (삼성동, 트레이드타워)'],
      act: {
        cue: '자라(ZARA) 본사는 서울특별시 강남구 영동대로 쪽입니다. 거기까지 가실 일은 많지 않습니다.',
        label: '지도에서 위치 보기',
        url: MAP,
      },
      sourceNote: '* 출처: 아이티엑스코리아 주식회사 사업자 정보 (2026-09-26 확인)',
    },
    {
      q: '다른 서비스 고객센터 번호도 필요한데요', anchor: 'q5',
      intro:
        '쇼핑·배달·구독을 한 곳만 쓰지 않습니다. 결제가 겹치면 어느 쪽에 걸어야 할지부터 헷갈립니다. 서비스마다 대표번호도 다르고 상담원 연결 번호도 다릅니다. 온라인 서비스별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['온라인 서비스별', '대표번호'],
      act: {
        cue: '자라(ZARA) 대표번호는 080-822-0311 하나입니다. 회사마다 번호 체계가 갈리니 한자리에서 비교하시는 편이 빠릅니다.',
        label: '온라인 서비스 고객센터 목록',
        url: HUB,
      },
      sourceNote: '* 출처: 각 온라인 서비스 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '자라(ZARA) 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 080-822-0311입니다. (2026-09-26 확인 기준)',
      source: 'ZARA 도움말',
      sourceUrl: 'https://www.zara.com/kr/ko/help-center',
    },
    {
      q: '본사 주소는 어디인가요?',
      a: '서울특별시 강남구 영동대로 511 20층 2002호 (삼성동, 트레이드타워)입니다. 방문 상담이 필요하면 가까운 지점을 먼저 확인하세요.',
      source: '아이티엑스코리아 주식회사 사업자 정보',
      sourceUrl: 'https://www.zara.com',
    },
  ],

  sources: [
    { name: 'ZARA 도움말', url: 'https://www.zara.com/kr/ko/help-center' },
    { name: '자라(ZARA) 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: {
    "slug": "zara-kr",
    "name": "자라(ZARA)",
    "brandColor": "#000000",
    "official": "https://www.zara.com",
    "sourceUrl": "https://www.zara.com/kr/ko/help-center",
    "sourceName": "ZARA 도움말",
    "verifiedAt": "2026-09-26",
    "main": {
      "label": "대표번호",
      "tel": "080-822-0311"
    },
    "hours": {
      "weekday": ""
    },
    "word": "온라인 서비스",
    "hubWord": "온라인 고객센터",
    "agentWord": "상담원",
    "offhourWord": "접수·문의",
    "idStep": "주문번호",
    "ars": {
      "day": [],
      "night": []
    },
    "numbers": [
      {
        "label": "대표번호",
        "tel": "080-822-0311"
      }
    ],
    "hq": "서울특별시 강남구 영동대로 511 20층 2002호 (삼성동, 트레이드타워)"
  },
};
