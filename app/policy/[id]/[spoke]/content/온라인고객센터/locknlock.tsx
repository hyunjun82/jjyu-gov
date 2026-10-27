import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-locknlock-call-center.txt
 * 1차 출처: 락앤락 고객센터 (https://www.locknlock.com/kor/util/customer/)
 * 확인일: 2026-10-27
 *
 * 이 파일은 scripts/new-call-center.ts 가 locknlock.json 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = 'tel:15669905';
const OFFICIAL = 'https://www.locknlock.com';
const MAP = 'https://map.naver.com/p/search/%EB%9D%BD%EC%95%A4%EB%9D%BD';
const HUB = '/policy/online-call-center';

export const locknlockCallCenterSpokeContent: SpokeData = {
  h1: '락앤락 고객센터 전화번호 및 상담원 연결·문의 안내',
  /* 업종어를 넣는다 — 대출 글인데 "웰컴저축은행 고객센터" 로 나가면
     회사 고객센터 글과 구분이 안 된다 (2026-08-27 사장님 확인). */
  breadcrumb: '락앤락 고객센터',
  description:
    '락앤락 고객센터 대표번호는 1566-9905, 상담 운영시간은 평일 09시~18시이며 이 시간을 벗어나면 상담원 연결이 안 됩니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담원 연결 순서·문의 방법·업무별 번호도 함께 확인할 수 있습니다.',
  datePublished: '2026-10-27T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '락앤락 고객센터 전화번호 1566-9905. 상담시간 평일: 09시~18시, 상담원 연결은 이 시간 안에서만 됩니다. 문의 유형별 번호 1개와 상담원 연결 방법까지 2026-10-27 공식 안내 기준.',
  dateModified: '2026-10-27T09:00:00+09:00',

  heroHook:
    '락앤락 고객센터 대표번호는 1566-9905, 상담 운영시간은 평일 09시~18시이며 이 시간을 벗어나면 상담원 연결이 안 됩니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담원 연결 순서·문의 방법·업무별 번호도 함께 확인할 수 있습니다.',
  heroAct: { label: '1566-9905 전화 걸기', href: TEL },

  keyFacts: {
    '대표번호': '1566-9905 (TEL)',
    '상담 가능 시간': '평일: 09시~18시',
    '공휴일': '공휴일 휴무',
  },
  /* '상담원 연결' 줄은 원문 ARS 에 그 번호가 있을 때만 (2026-09-15 조은저축은행).
     ARS 표만 있고 상담원 항목이 없는데 "ARS 안내에서 상담원 연결 선택" 이라 적었다 — 원문에 없는 메뉴다. */
  keyFactsHighlights: {
    '대표번호': ['1566-9905'],
    '상담 가능 시간': ['평일: 09시~18시'],
  },

  qa: [
    {
      q: '락앤락 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 1566-9905입니다. 공식 안내에 \'TEL\'로 적힌 번호입니다. 2026-10-27 기준 공식 안내에 올라와 있는 번호는 이 번호 하나입니다.',
      highlights: ['1566-9905', '대표번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [['TEL', '1566-9905', '평일 09시~18시(점심시간 12시~13시), 공휴일 휴무']],
      },
      sourceNote: '* 출처: 락앤락 고객센터 (2026-10-27 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        '락앤락 공식 안내에는 상담원에게 바로 넘어가는 단축번호가 공개돼 있지 않습니다. 다만 상담원 연결은 평일 09시~18시에만 됩니다.',
      highlights: ['상담원 연결', '평일: 09시~18시'],
      table: {
        headers: ['번호', '평일 주간 (평일: 09시~18시)'],
        rows: [],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 연결 후 설명이 짧아집니다. 주문번호와 가입 이메일을 미리 꺼내 두면 확인이 빨라집니다.',
      },
      sourceNote: '* 출처: 락앤락 고객센터 (2026-10-27 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '상담원 상담은 평일 09시~18시입니다. 공식 안내 기준으로 이 시간을 벗어나면 상담원 연결이 안 됩니다.',
      highlights: ['평일: 09시~18시', '공휴일 휴무'],
      table: {
        headers: ['번호', '야간·휴일 (공휴일 휴무)'],
        rows: [],
      },
      sourceNote: '* 출처: 락앤락 고객센터 (2026-10-27 확인)',
    },
    {
      q: '락앤락 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '문의는 직접 찾아가기보다 전화로 먼저 접수하시는 편이 빠릅니다. 위치를 확인하시려면 지도에서 서비스 이름으로 검색해 보세요.',
      highlights: ['지도에서 서비스 이름으로 검색'],
      act: {
        cue: '락앤락 창구 위치는 지도 검색이 가장 빠릅니다. 창구에서만 되는 일이 아니면 안 가셔도 됩니다.',
        label: '지도에서 위치 보기',
        url: MAP,
      },
      sourceNote: '* 출처: 락앤락 사업자 정보 (2026-10-27 확인)',
    },
    {
      q: '다른 서비스 고객센터 번호도 필요한데요', anchor: 'q5',
      intro:
        '이용하는 서비스가 한두 곳이 아니어서 문의할 일이 생길 때마다 번호부터 찾게 됩니다. 서비스마다 대표번호도 다르고 상담원 연결 번호도 다릅니다. 온라인 서비스별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['온라인 서비스별', '대표번호'],
      act: {
        cue: '락앤락 상담은 평일 09시~18시 안에서만 됩니다. 두 곳 이상 거셔야 하면 미리 봐 두는 게 낫습니다.',
        label: '온라인 서비스 고객센터 목록',
        url: HUB,
      },
      sourceNote: '* 출처: 각 온라인 서비스 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '락앤락 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 1566-9905입니다. (2026-10-27 확인 기준)',
      source: '락앤락 고객센터',
      sourceUrl: 'https://www.locknlock.com/kor/util/customer/',
    },
    {
      q: '주말이나 공휴일에도 상담이 되나요?',
      a: '아니요. 공식 안내에 "공휴일 휴무"로 적혀 있습니다. 상담원 상담은 평일 09시~18시입니다.',
      source: '락앤락 고객센터',
      sourceUrl: 'https://www.locknlock.com/kor/util/customer/',
    },
    {
      q: '점심시간에도 상담이 되나요?',
      a: '락앤락 공식 안내에 점심시간이 따로 적혀 있습니다 — "12시~13시". 급한 용건이 아니면 그 시간은 피해서 거는 편이 낫습니다.',
      source: '락앤락 고객센터',
      sourceUrl: 'https://www.locknlock.com/kor/util/customer/',
    },
  ],

  sources: [
    { name: '락앤락 고객센터', url: 'https://www.locknlock.com/kor/util/customer/' },
    { name: '락앤락 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: {
    "slug": "locknlock",
    "name": "락앤락",
    "brandColor": "#1F1F1F",
    "official": "https://www.locknlock.com",
    "sourceUrl": "https://www.locknlock.com/kor/util/customer/",
    "sourceName": "락앤락 고객센터",
    "verifiedAt": "2026-10-27",
    "main": {
      "label": "TEL",
      "tel": "1566-9905"
    },
    "hours": {
      "weekday": "평일: 09시~18시",
      "lunch": "12시~13시",
      "holiday": "공휴일 휴무"
    },
    "offhourNote": "공식 안내 기준으로 평일 09시~18시를 벗어나면 상담원 연결이 안 됩니다. 문의는 상담시간 안에 거는 편이 빠릅니다.",
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
        "label": "TEL",
        "tel": "1566-9905",
        "note": "평일 09시~18시(점심시간 12시~13시), 공휴일 휴무"
      }
    ]
  },
};
