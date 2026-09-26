import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-hansung-call-center.txt
 * 1차 출처: 한성컴퓨터 AS안내 (https://www.hansungcom.co.kr/support)
 * 확인일: 2026-09-26
 *
 * 이 파일은 scripts/new-call-center.ts 가 hansung.json 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = 'tel:0232721003';
const OFFICIAL = 'https://www.hansungcom.co.kr';
const MAP = 'https://map.naver.com/p/search/%EC%9D%B8%EC%B2%9C%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%ED%95%B4%EA%B5%AC%20%ED%8C%8C%EB%9E%91%EB%A1%9C%20536';
const HUB = '/policy/appliance-call-center';

export const hansungCallCenterSpokeContent: SpokeData = {
  h1: '한성컴퓨터 고객센터 전화번호 및 AS 접수·출장비 안내',
  /* 업종어를 넣는다 — 대출 글인데 "웰컴저축은행 고객센터" 로 나가면
     회사 고객센터 글과 구분이 안 된다 (2026-08-27 사장님 확인). */
  breadcrumb: '한성컴퓨터 고객센터',
  description:
    '한성컴퓨터 고객센터 대표번호는 02-3272-1003입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, AS 접수 방법·출장비·서비스센터 위치도 함께 확인할 수 있습니다.',
  datePublished: '2026-09-26T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '한성컴퓨터 고객센터 전화번호 02-3272-1003. AS·부품 등 업무별 번호 1개와 상담원 연결 방법까지 2026-09-26 공식 안내 기준.',
  dateModified: '2026-09-26T09:00:00+09:00',

  heroHook:
    '한성컴퓨터 고객센터 대표번호는 02-3272-1003입니다. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, AS 접수 방법·출장비·서비스센터 위치도 함께 확인할 수 있습니다.',
  heroAct: { label: '02-3272-1003 상담 연결', href: TEL },

  keyFacts: {
    '대표번호': '02-3272-1003 (A/S 전담 콜)',
    '본사': '인천광역시 서해구 파랑로 536 (우 22770)',
  },
  /* '상담원 연결' 줄은 원문 ARS 에 그 번호가 있을 때만 (2026-09-15 조은저축은행).
     ARS 표만 있고 상담원 항목이 없는데 "ARS 안내에서 상담원 연결 선택" 이라 적었다 — 원문에 없는 메뉴다. */
  keyFactsHighlights: {
    '대표번호': ['02-3272-1003'],
  },

  qa: [
    {
      q: '한성컴퓨터 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 02-3272-1003입니다. AS 접수, 부품 주문, 설치·출장 예약까지 이 번호 하나로 들어갑니다. 다만 용건이 정해져 있으면 전용번호로 거는 편이 빠릅니다. 대표번호는 ARS 를 거치지만 전용번호는 담당 부서로 바로 연결되기 때문입니다. 2026-09-26 기준 공식 안내에 올라와 있는 번호는 아래 1개입니다.',
      highlights: ['02-3272-1003', '대표번호', '전용번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [['A/S 전담 콜', '02-3272-1003', '-']],
      },
      sourceNote: '* 출처: 한성컴퓨터 AS안내 (2026-09-26 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        '한성컴퓨터 공식 안내에는 상담원에게 바로 넘어가는 단축번호가 공개돼 있지 않습니다.',
      highlights: ['상담원 연결'],
      table: {
        headers: ['번호', '평일 주간'],
        rows: [],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 부서 이관 횟수가 줄어듭니다. 본인이 아니면 위임 확인 절차가 더 붙으니, 제품 모델명과 구매일자를 미리 꺼내 두는 편이 빠릅니다.',
      },
      sourceNote: '* 출처: 한성컴퓨터 AS안내 (2026-09-26 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '한성컴퓨터 공식 고객센터 안내에는 상담시간이 따로 적혀 있지 않아, 이 글에도 시간을 적지 않았습니다.',
      highlights: [],
      table: {
        headers: ['번호', '야간·휴일'],
        rows: [],
      },
      sourceNote: '* 출처: 한성컴퓨터 AS안내 (2026-09-26 확인)',
    },
    {
      q: '한성컴퓨터 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '본사는 인천광역시 서해구 파랑로 536에 있습니다. 다만 AS 접수나 부품 주문은 방문하지 않아도 전화·앱·홈페이지로 끝나는 일이 많습니다. 서류 원본을 내야 하거나 대면 상담이 필요할 때만 움직이시는 편이 낫습니다. 방문하실 거라면 집에서 가까운 지점을 먼저 찾아보세요. 지도에서 회사 이름으로 검색하면 가까운 순으로 나옵니다.',
      highlights: ['인천광역시 서해구 파랑로 536'],
      act: {
        cue: '한성컴퓨터 본사는 인천광역시 서해구 파랑로 쪽입니다. 가시기 전에 문 여는 시간을 같이 보세요.',
        label: '가까운 지점 찾기',
        url: MAP,
      },
      sourceNote: '* 출처: (주)한성컴퓨터 사업자 정보 (2026-09-26 확인)',
    },
    {
      q: '다른 가전업체 고객센터 번호도 필요한데요', anchor: 'q5',
      intro:
        '집에 가전이 한 브랜드만 있지 않습니다. 이번엔 이 회사, 저번엔 저 회사여서 고장 날 때마다 번호를 새로 찾게 됩니다. 회사마다 대표번호도 다르고 상담원 연결 번호도 다릅니다. 가전업체별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['가전업체별', '대표번호'],
      act: {
        cue: '한성컴퓨터 대표번호는 02-3272-1003 하나입니다. 어디로 걸어야 하는지는 목록에서 바로 갈립니다.',
        label: '가전업체 번호 모아보기',
        url: HUB,
      },
      sourceNote: '* 출처: 각 가전업체 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '한성컴퓨터 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 02-3272-1003입니다. (2026-09-26 확인 기준)',
      source: '한성컴퓨터 AS안내',
      sourceUrl: 'https://www.hansungcom.co.kr/support',
    },
    {
      q: '본사 주소는 어디인가요?',
      a: '인천광역시 서해구 파랑로 536입니다. 방문 상담이 필요하면 가까운 지점을 먼저 확인하세요.',
      source: '(주)한성컴퓨터 사업자 정보',
      sourceUrl: 'https://www.hansungcom.co.kr',
    },
  ],

  sources: [
    { name: '한성컴퓨터 AS안내', url: 'https://www.hansungcom.co.kr/support' },
    { name: '한성컴퓨터 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: {
    "slug": "hansung",
    "name": "한성컴퓨터",
    "brandColor": "#696967",
    "official": "https://www.hansungcom.co.kr",
    "sourceUrl": "https://www.hansungcom.co.kr/support",
    "sourceName": "한성컴퓨터 AS안내",
    "verifiedAt": "2026-09-26",
    "main": {
      "label": "A/S 전담 콜",
      "tel": "02-3272-1003"
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
        "label": "A/S 전담 콜",
        "tel": "02-3272-1003"
      }
    ],
    "hq": "인천광역시 서해구 파랑로 536",
    "hqZip": "22770"
  },
};
