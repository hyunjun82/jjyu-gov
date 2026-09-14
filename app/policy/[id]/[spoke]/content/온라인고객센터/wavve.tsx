import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-wavve-call-center.txt
 * 1차 출처: 와이즈유저 방송통신이용자정보포털 미디어 사업자 고객센터 (https://wiseuser.go.kr/square.do?boardno=6490&boardtypecode=5900)
 * 확인일: 2026-08-27
 *
 * 이 파일은 scripts/new-call-center.ts 가 wavve.json 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = 'tel:15993709';
const OFFICIAL = 'https://wiseuser.go.kr';
const MAP = 'https://map.naver.com/p/search/%EC%9B%A8%EC%9D%B4%EB%B8%8C';
const HUB = '/policy/online-call-center';

export const wavveCallCenterSpokeContent: SpokeData = {
  h1: '웨이브 고객센터 전화번호 및 상담원 연결·문의 안내',
  /* 업종어를 넣는다 — 대출 글인데 "웰컴저축은행 고객센터" 로 나가면
     회사 고객센터 글과 구분이 안 된다 (2026-08-27 사장님 확인). */
  breadcrumb: '웨이브 고객센터',
  description:
    '웨이브 고객센터 대표번호는 1599-3709입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담원 연결 순서·문의 방법·업무별 번호도 함께 확인할 수 있습니다.',
  datePublished: '2026-08-27T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '웨이브 고객센터 전화번호 1599-3709. 문의 유형별 번호 1개와 상담원 연결 방법까지 2026-08-27 공식 안내 기준.',
  dateModified: '2026-08-27T09:00:00+09:00',

  heroHook:
    '웨이브 고객센터 대표번호는 1599-3709입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담원 연결 순서·문의 방법·업무별 번호도 함께 확인할 수 있습니다.',
  heroAct: { label: '1599-3709 상담 신청', href: TEL },

  keyFacts: {
    '대표번호': '1599-3709 (고객센터)',
  },
  keyFactsHighlights: {
    '대표번호': ['1599-3709'],
  },

  qa: [
    {
      q: '웨이브 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 1599-3709입니다. 주문·결제 문의, 환불, 계정 문제까지 이 번호 하나로 들어갑니다. 다만 용건이 정해져 있으면 전용번호로 거는 편이 빠릅니다. 대표번호는 ARS 를 거치지만 전용번호는 담당 부서로 바로 연결되기 때문입니다. 2026-08-27 기준 공식 안내에 올라와 있는 번호는 아래 1개입니다.',
      highlights: ['1599-3709', '대표번호', '전용번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [['고객센터', '1599-3709', '유료']],
      },
      sourceNote: '* 출처: 와이즈유저 방송통신이용자정보포털 미디어 사업자 고객센터 (2026-08-27 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        '웨이브 공식 안내에는 상담원에게 바로 넘어가는 단축번호가 공개돼 있지 않습니다.',
      highlights: ['상담원 연결'],
      table: {
        headers: ['번호', '평일 주간'],
        rows: [],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 부서 이관 횟수가 줄어듭니다. 본인이 아니면 위임 확인 절차가 더 붙으니, 주문번호와 가입 이메일를 미리 꺼내 두는 편이 빠릅니다.',
      },
      sourceNote: '* 출처: 와이즈유저 방송통신이용자정보포털 미디어 사업자 고객센터 (2026-08-27 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '웨이브 공식 고객센터 안내에는 상담시간이 따로 적혀 있지 않아, 이 글에도 시간을 적지 않았습니다.',
      highlights: [],
      table: {
        headers: ['번호', '야간·휴일'],
        rows: [],
      },
      sourceNote: '* 출처: 와이즈유저 방송통신이용자정보포털 미디어 사업자 고객센터 (2026-08-27 확인)',
    },
    {
      q: '웨이브 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '다만 환불이나 계정 복구는 방문하지 않아도 전화·앱·홈페이지로 끝나는 일이 많습니다. 서류 원본을 내야 하거나 대면 상담이 필요할 때만 움직이시는 편이 낫습니다. 방문하실 거라면 집에서 가까운 지점을 먼저 찾아보세요. 지도에서 서비스 이름으로 검색하면 가까운 순으로 나옵니다.',
      highlights: ['가까운 지점'],
      act: {
        cue: '웨이브 창구 위치는 지도 검색이 가장 빠릅니다. 가시기 전에 문 여는 시간을 같이 보세요.',
        label: '가까운 창구 찾아보기',
        url: MAP,
      },
      sourceNote: '* 출처: 웨이브 사업자 정보 (2026-08-27 확인)',
    },
    {
      q: '다른 서비스 고객센터 번호도 필요한데요', anchor: 'q5',
      intro:
        '쇼핑·배달·구독을 한 곳만 쓰지 않습니다. 결제가 겹치면 어느 쪽에 걸어야 할지부터 헷갈립니다. 서비스마다 대표번호도 다르고 상담원 연결 번호도 다릅니다. 온라인 서비스별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['온라인 서비스별', '대표번호'],
      act: {
        cue: '웨이브 대표번호는 1599-3709 하나입니다. 어디로 걸어야 하는지는 목록에서 바로 갈립니다.',
        label: '전체 목록 열기',
        url: HUB,
      },
      sourceNote: '* 출처: 각 온라인 서비스 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '웨이브 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 1599-3709입니다. (2026-08-27 확인 기준)',
      source: '와이즈유저 방송통신이용자정보포털 미디어 사업자 고객센터',
      sourceUrl: 'https://wiseuser.go.kr/square.do?boardno=6490&boardtypecode=5900',
    },
  ],

  sources: [
    { name: '와이즈유저 방송통신이용자정보포털 미디어 사업자 고객센터', url: 'https://wiseuser.go.kr/square.do?boardno=6490&boardtypecode=5900' },
    { name: '웨이브 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: {
    "slug": "wavve",
    "name": "웨이브",
    "brandColor": "#1F4EF5",
    "official": "https://wiseuser.go.kr",
    "sourceUrl": "https://wiseuser.go.kr/square.do?boardno=6490&boardtypecode=5900",
    "sourceName": "와이즈유저 방송통신이용자정보포털 미디어 사업자 고객센터",
    "verifiedAt": "2026-08-27",
    "main": {
      "label": "고객센터",
      "tel": "1599-3709"
    },
    "hours": {
      "weekday": ""
    },
    "word": "온라인 서비스",
    "hubWord": "온라인 고객센터",
    "agentWord": "상담원",
    "offhourWord": "접수·문의",
    "idStep": "주문번호와 가입 이메일",
    "ars": {
      "day": [],
      "night": []
    },
    "numbers": [
      {
        "label": "고객센터",
        "tel": "1599-3709",
        "note": "유료"
      }
    ]
  },
};
