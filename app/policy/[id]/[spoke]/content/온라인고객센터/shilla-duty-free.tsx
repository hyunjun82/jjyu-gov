import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-shilla-duty-free-call-center.txt
 * 1차 출처: 신라면세점 고객센터 (https://www.shilladfs.com/estore/kr/ko/shilladfscustomercenter/main)
 * 확인일: 2026-10-27
 *
 * 이 파일은 scripts/new-call-center.ts 가 shilla-duty-free.json 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = 'tel:16881110';
const OFFICIAL = 'https://www.shilladfs.com';
const MAP = 'https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%8F%99%ED%98%B8%EB%A1%9C%20249';
const HUB = '/policy/online-call-center';

export const shillaDutyFreeCallCenterSpokeContent: SpokeData = {
  h1: '신라면세점 고객센터 전화번호 및 상담원 연결·문의 안내',
  /* 업종어를 넣는다 — 대출 글인데 "웰컴저축은행 고객센터" 로 나가면
     회사 고객센터 글과 구분이 안 된다 (2026-08-27 사장님 확인). */
  breadcrumb: '신라면세점 고객센터',
  description:
    '신라면세점 고객센터 대표번호는 1688-1110, 상담 운영시간은 09:00 ~ 18:00입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담원 연결 순서·문의 방법·업무별 번호도 함께 확인할 수 있습니다.',
  datePublished: '2026-10-27T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '신라면세점 고객센터 전화번호 1688-1110. 상담시간 09:00 ~ 18:00. 2026-10-27 공식 안내 기준.',
  dateModified: '2026-10-27T09:00:00+09:00',

  heroHook:
    '신라면세점 고객센터 대표번호는 1688-1110, 상담 운영시간은 09:00 ~ 18:00입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 상담원 연결 순서·문의 방법·업무별 번호도 함께 확인할 수 있습니다.',
  heroAct: { label: '1688-1110 상담 신청', href: TEL },

  keyFacts: {
    '대표번호': '1688-1110 (전화상담)',
    '상담 가능 시간': '09:00 ~ 18:00',
    '공휴일': '연중무휴',
    '본사': '서울특별시 중구 동호로 249 (우 04605)',
  },
  /* '상담원 연결' 줄은 원문 ARS 에 그 번호가 있을 때만 (2026-09-15 조은저축은행).
     ARS 표만 있고 상담원 항목이 없는데 "ARS 안내에서 상담원 연결 선택" 이라 적었다 — 원문에 없는 메뉴다. */
  keyFactsHighlights: {
    '대표번호': ['1688-1110'],
    '상담 가능 시간': ['09:00 ~ 18:00'],
  },

  qa: [
    {
      q: '신라면세점 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 1688-1110입니다. 공식 안내에 \'전화상담\'으로 적힌 번호입니다. 2026-10-27 기준 공식 안내에 올라와 있는 번호는 이 번호 하나입니다.',
      highlights: ['1688-1110', '대표번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [['전화상담', '1688-1110', '09:00~18:00, 연중무휴']],
      },
      sourceNote: '* 출처: 신라면세점 고객센터 (2026-10-27 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        '신라면세점 공식 안내에는 상담원에게 바로 넘어가는 단축번호가 공개돼 있지 않습니다. 공식 안내에 적힌 상담원 상담시간은 09:00 ~ 18:00입니다.',
      highlights: ['상담원 연결', '09:00 ~ 18:00'],
      table: {
        headers: ['번호', '평일 주간 (09:00 ~ 18:00)'],
        rows: [],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 연결 후 설명이 짧아집니다. 주문번호와 가입 아이디를 미리 꺼내 두면 확인이 빨라집니다.',
      },
      sourceNote: '* 출처: 신라면세점 고객센터 (2026-10-27 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '상담원 상담은 공식 안내 기준 09:00 ~ 18:00입니다.',
      highlights: ['09:00 ~ 18:00', '연중무휴'],
      table: {
        headers: ['번호', '야간·휴일 (연중무휴)'],
        rows: [],
      },
      sourceNote: '* 출처: 신라면세점 고객센터 (2026-10-27 확인)',
    },
    {
      q: '신라면세점 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '본사는 서울특별시 중구 동호로 249에 있습니다. 다만 문의는 직접 찾아가기보다 전화로 먼저 접수하시는 편이 빠릅니다. 위치를 확인하시려면 지도에서 서비스 이름으로 검색해 보세요.',
      highlights: ['서울특별시 중구 동호로 249'],
      act: {
        cue: '신라면세점 본사는 서울특별시 중구 동호로 쪽입니다. 거기까지 가실 일은 많지 않습니다.',
        label: '위치 확인하기',
        url: MAP,
      },
      sourceNote: '* 출처: 신라면세점 사업자 정보 (2026-10-27 확인)',
    },
    {
      q: '다른 서비스 고객센터 번호도 필요한데요', anchor: 'q5',
      intro:
        '이용하는 서비스가 한두 곳이 아니어서 문의할 일이 생길 때마다 번호부터 찾게 됩니다. 서비스마다 대표번호도 다르고 상담원 연결 번호도 다릅니다. 온라인 서비스별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['온라인 서비스별', '대표번호'],
      act: {
        cue: '신라면세점 상담시간은 공식 안내 기준 09:00 ~ 18:00입니다. 회사마다 갈리니 한자리에서 비교해 보세요.',
        label: '전체 목록 열기',
        url: HUB,
      },
      sourceNote: '* 출처: 각 온라인 서비스 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '신라면세점 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 1688-1110입니다. (2026-10-27 확인 기준)',
      source: '신라면세점 고객센터',
      sourceUrl: 'https://www.shilladfs.com/estore/kr/ko/shilladfscustomercenter/main',
    },
    {
      q: '본사 주소는 어디인가요?',
      a: '서울특별시 중구 동호로 249입니다. 직접 방문하시기 전에 전화로 먼저 문의하시는 편이 빠릅니다.',
      source: '신라면세점 사업자 정보',
      sourceUrl: 'https://www.shilladfs.com',
    },
  ],

  sources: [
    { name: '신라면세점 고객센터', url: 'https://www.shilladfs.com/estore/kr/ko/shilladfscustomercenter/main' },
    { name: '신라면세점 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: {
    "slug": "shilla-duty-free",
    "name": "신라면세점",
    "brandColor": "#DE3831",
    "official": "https://www.shilladfs.com",
    "sourceUrl": "https://www.shilladfs.com/estore/kr/ko/shilladfscustomercenter/main",
    "sourceName": "신라면세점 고객센터",
    "verifiedAt": "2026-10-27",
    "main": {
      "label": "전화상담",
      "tel": "1688-1110"
    },
    "hours": {
      "weekday": "09:00 ~ 18:00",
      "holiday": "연중무휴"
    },
    "offhourNote": "공식 안내에 적힌 상담시간은 09:00 ~ 18:00입니다.",
    "word": "온라인 서비스",
    "hubWord": "온라인 고객센터",
    "agentWord": "상담원",
    "offhourWord": "접수·문의",
    "idStep": "주문번호와 가입 아이디",
    "ars": {
      "day": [],
      "night": []
    },
    "numbers": [
      {
        "label": "전화상담",
        "tel": "1688-1110",
        "note": "09:00~18:00, 연중무휴"
      }
    ],
    "hq": "서울특별시 중구 동호로 249",
    "hqZip": "04605"
  },
};
