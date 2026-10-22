import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-yujin-robot-call-center.txt
 * 1차 출처: 유진로봇샵 공식몰 (https://yujinrobotshop.com/m/board.html?code=iclebo_board6&page=11&type=v&board_cate=&num1=999939&num2=00000&number=61&lock=N)
 * 확인일: 2026-10-22
 *
 * 이 파일은 scripts/new-call-center.ts 가 yujin-robot.json 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = 'tel:15663292';
const OFFICIAL = 'https://yujinrobotshop.com';
const MAP = 'https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%20%EC%97%B0%EC%88%98%EA%B5%AC%20%ED%95%98%EB%AA%A8%EB%8B%88%EB%A1%9C187%EB%B2%88%EA%B8%B8%2033';
const HUB = '/policy/appliance-call-center';

export const yujinRobotCallCenterSpokeContent: SpokeData = {
  h1: '유진로봇 고객센터 전화번호 및 상담 연결·운영시간 안내',
  /* 업종어를 넣는다 — 대출 글인데 "웰컴저축은행 고객센터" 로 나가면
     회사 고객센터 글과 구분이 안 된다 (2026-08-27 사장님 확인). */
  breadcrumb: '유진로봇 고객센터',
  description:
    '유진로봇 고객센터 대표번호는 1566-3292, 상담 운영시간은 평일 9:00 - 16:00이며 이 시간을 벗어나면 상담원 연결이 안 됩니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 문의 방법·운영시간·연락처도 함께 확인할 수 있습니다.',
  datePublished: '2026-10-22T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '유진로봇 고객센터 전화번호 1566-3292. 상담시간 평일 9:00 - 16:00, 상담원 연결은 이 시간 안에서만 됩니다. 문의 번호 1개와 상담원 연결 방법까지 2026-10-22 공식 안내 기준.',
  dateModified: '2026-10-22T09:00:00+09:00',

  heroHook:
    '유진로봇 고객센터 대표번호는 1566-3292, 상담 운영시간은 평일 9:00 - 16:00이며 이 시간을 벗어나면 상담원 연결이 안 됩니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, 문의 방법·운영시간·연락처도 함께 확인할 수 있습니다.',
  heroAct: { label: '1566-3292 바로 접수', href: TEL },

  keyFacts: {
    '대표번호': '1566-3292 (고객센터 AS 및 제품문의)',
    '상담 가능 시간': '평일 9:00 - 16:00',
    '공휴일': '주말 및 공휴일 휴무',
    '본사': '인천 연수구 하모니로187번길 33(송도동)',
  },
  /* '상담원 연결' 줄은 원문 ARS 에 그 번호가 있을 때만 (2026-09-15 조은저축은행).
     ARS 표만 있고 상담원 항목이 없는데 "ARS 안내에서 상담원 연결 선택" 이라 적었다 — 원문에 없는 메뉴다. */
  keyFactsHighlights: {
    '대표번호': ['1566-3292'],
    '상담 가능 시간': ['평일 9:00 - 16:00'],
  },

  qa: [
    {
      q: '유진로봇 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 1566-3292입니다. 공식 안내에 \'고객센터 AS 및 제품문의\'로 적힌 번호입니다. 2026-10-22 기준 공식 안내에 올라와 있는 번호는 이 번호 하나입니다.',
      highlights: ['1566-3292', '대표번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [['고객센터 AS 및 제품문의', '1566-3292', '평일 9:00~16:00, 점심 12:00~13:00, 주말·공휴일 휴무']],
      },
      sourceNote: '* 출처: 유진로봇샵 공식몰 (2026-10-22 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        '유진로봇 공식 안내에는 상담원에게 바로 넘어가는 단축번호가 공개돼 있지 않습니다. 다만 상담원 연결은 평일 9:00 - 16:00에만 됩니다.',
      highlights: ['상담원 연결', '평일 9:00 - 16:00'],
      table: {
        headers: ['번호', '평일 주간 (평일 9:00 - 16:00)'],
        rows: [],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 연결 후 설명이 짧아집니다. 제품 모델명과 구매일자를 미리 꺼내 두면 확인이 빨라집니다.',
      },
      sourceNote: '* 출처: 유진로봇샵 공식몰 (2026-10-22 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '상담원 상담은 평일 9:00 - 16:00입니다. 공식 안내 기준으로 이 시간을 벗어나면 상담원 연결이 안 됩니다.',
      highlights: ['평일 9:00 - 16:00', '주말 및 공휴일 휴무'],
      table: {
        headers: ['번호', '야간·휴일 (주말 및 공휴일 휴무)'],
        rows: [],
      },
      sourceNote: '* 출처: 유진로봇샵 공식몰 (2026-10-22 확인)',
    },
    {
      q: '유진로봇 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '본사는 인천 연수구 하모니로187번길 33(송도동)에 있습니다. 다만 제품 문의는 방문하지 않아도 전화·앱·홈페이지로 끝나는 일이 많습니다. 서류 원본을 내야 하거나 대면 상담이 필요할 때만 움직이시는 편이 낫습니다. 방문하실 거라면 집에서 가까운 지점을 먼저 찾아보세요. 지도에서 회사 이름으로 검색하면 가까운 순으로 나옵니다.',
      highlights: ['인천 연수구 하모니로187번길 33(송도동)'],
      act: {
        cue: '유진로봇 본사는 인천 연수구 쪽입니다. 헛걸음하지 않게 위치부터 짚고 나서시죠.',
        label: '가까운 지점 찾기',
        url: MAP,
      },
      sourceNote: '* 출처: (주)유진로봇 사업자 정보 (2026-10-22 확인)',
    },
    {
      q: '다른 가전업체 고객센터 번호도 필요한데요', anchor: 'q5',
      intro:
        '집에 가전이 한 브랜드만 있지 않습니다. 이번엔 이 회사, 저번엔 저 회사여서 고장 날 때마다 번호를 새로 찾게 됩니다. 회사마다 대표번호도 다르고 상담원 연결 번호도 다릅니다. 가전업체별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['가전업체별', '대표번호'],
      act: {
        cue: '유진로봇 상담은 평일 9:00 - 16:00 안에서만 됩니다. 급할 때 다시 찾지 않게 목록을 열어 두시죠.',
        label: '가전업체 번호 모아보기',
        url: HUB,
      },
      sourceNote: '* 출처: 각 가전업체 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '유진로봇 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 1566-3292입니다. (2026-10-22 확인 기준)',
      source: '유진로봇샵 공식몰',
      sourceUrl: 'https://yujinrobotshop.com/m/board.html?code=iclebo_board6&page=11&type=v&board_cate=&num1=999939&num2=00000&number=61&lock=N',
    },
    {
      q: '주말이나 공휴일에도 상담이 되나요?',
      a: '아니요. 공식 안내에 "주말 및 공휴일 휴무"로 적혀 있습니다. 상담원 상담은 평일 9:00 - 16:00입니다.',
      source: '유진로봇샵 공식몰',
      sourceUrl: 'https://yujinrobotshop.com/m/board.html?code=iclebo_board6&page=11&type=v&board_cate=&num1=999939&num2=00000&number=61&lock=N',
    },
    {
      q: '점심시간에도 상담이 되나요?',
      a: '유진로봇 공식 안내에 점심시간이 따로 적혀 있습니다 — "점심 12:00 - 13:00". 급한 용건이 아니면 그 시간은 피해서 거는 편이 낫습니다.',
      source: '유진로봇샵 공식몰',
      sourceUrl: 'https://yujinrobotshop.com/m/board.html?code=iclebo_board6&page=11&type=v&board_cate=&num1=999939&num2=00000&number=61&lock=N',
    },
    {
      q: '본사 주소는 어디인가요?',
      a: '인천 연수구 하모니로187번길 33(송도동)입니다. 방문 상담이 필요하면 가까운 지점을 먼저 확인하세요.',
      source: '(주)유진로봇 사업자 정보',
      sourceUrl: 'https://yujinrobotshop.com',
    },
  ],

  sources: [
    { name: '유진로봇샵 공식몰', url: 'https://yujinrobotshop.com/m/board.html?code=iclebo_board6&page=11&type=v&board_cate=&num1=999939&num2=00000&number=61&lock=N' },
    { name: '유진로봇 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: {
    "slug": "yujin-robot",
    "name": "유진로봇",
    "brandColor": "#1F1F1F",
    "official": "https://yujinrobotshop.com",
    "sourceUrl": "https://yujinrobotshop.com/m/board.html?code=iclebo_board6&page=11&type=v&board_cate=&num1=999939&num2=00000&number=61&lock=N",
    "sourceName": "유진로봇샵 공식몰",
    "verifiedAt": "2026-10-22",
    "main": {
      "label": "고객센터 AS 및 제품문의",
      "tel": "1566-3292"
    },
    "hours": {
      "weekday": "평일 9:00 - 16:00",
      "holiday": "주말 및 공휴일 휴무",
      "lunch": "점심 12:00 - 13:00"
    },
    "offhourNote": "공식 안내 기준으로 평일 9:00 - 16:00을 벗어나면 상담원 연결이 안 됩니다. 문의는 상담시간 안에 거는 편이 빠릅니다.",
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
        "label": "고객센터 AS 및 제품문의",
        "tel": "1566-3292",
        "note": "평일 9:00~16:00, 점심 12:00~13:00, 주말·공휴일 휴무"
      }
    ],
    "hq": "인천 연수구 하모니로187번길 33(송도동)"
  },
};
