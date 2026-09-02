import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-samsung-life-call-center.txt
 * 1차 출처: 삼성생명 상담 안내 (https://direct.samsunglife.com/customerSupport/inquiryGuide/CustomerSupportInquiryGuideMainView)
 * 확인일: 2026-08-25
 *
 * 이 파일은 scripts/new-call-center.ts 가 samsung-life.json 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = 'tel:15883114';
const OFFICIAL = 'https://www.samsunglife.com';
const MAP = 'https://map.naver.com/p/search/%EC%82%BC%EC%84%B1%EC%83%9D%EB%AA%85';
const HUB = '/policy/insurance-call-center';

export const samsungLifeCallCenterSpokeContent: SpokeData = {
  h1: '삼성생명 고객센터 전화번호·상담원 연결·영업시간, 주말에도 될까?',
  /* 업종어를 넣는다 — 대출 글인데 "웰컴저축은행 고객센터" 로 나가면
     회사 고객센터 글과 구분이 안 된다 (2026-08-27 사장님 확인). */
  breadcrumb: '삼성생명 고객센터',
  description:
    '삼성생명 고객센터 대표번호는 1588-3114, 상담 운영시간은 대표 콜센터 (평일 09:00 ~ 18:00)이며 이 시간을 벗어나면 상담사 연결이 안 됩니다. 번호가 여러 개라 헷갈리기 쉽습니다. 아래에서 용건부터 고르시면 됩니다.',
  datePublished: '2026-08-25T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '삼성생명 고객센터 전화번호 1588-3114. 상담시간 대표 콜센터 (평일 09:00 ~ 18:00), 상담사 연결은 이 시간 안에서만 됩니다. 업무별 번호 3개와 상담원 연결 방법까지 2026-08-25 공식 안내 기준.',
  dateModified: '2026-08-25T09:00:00+09:00',

  heroHook:
    '삼성생명 고객센터 대표번호는 1588-3114, 상담 운영시간은 대표 콜센터 (평일 09:00 ~ 18:00)이며 이 시간을 벗어나면 상담사 연결이 안 됩니다. 번호가 여러 개라 헷갈리기 쉽습니다. 아래에서 용건부터 고르시면 됩니다.',
  heroAct: { label: '1588-3114 상담 신청', href: TEL },

  keyFacts: {
    '대표번호': '1588-3114 (대표 콜센터)',
    '상담 가능 시간': '대표 콜센터 (평일 09:00 ~ 18:00)',
    '야간': '공식 안내에 야간 상담시간 표기 없음',
    '공휴일': '공식 안내에 공휴일 상담시간 표기 없음',
    '상담사 연결': '공식 안내에 ARS 단축번호 미공개',
    '통화료': '080-789-3300 은 무료이고, 그 밖의 번호는 발신자 요금제 기준으로 부과됩니다.',
  },
  keyFactsHighlights: {
    '대표번호': ['1588-3114'],
    '상담 가능 시간': ['대표 콜센터 (평일 09:00 ~ 18:00)'],
    '상담사 연결': ['상담사 연결'],
  },

  qa: [
    {
      q: '삼성생명 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 1588-3114입니다. 보험금 청구, 계약 조회·변경, 사고접수까지 이 번호 하나로 들어갑니다. 다만 용건이 정해져 있으면 전용번호로 거는 편이 빠릅니다. 대표번호는 ARS 를 거치지만 전용번호는 담당 부서로 바로 연결되기 때문입니다. 2026-08-25 기준 공식 안내에 올라와 있는 번호는 아래 3개입니다.',
      highlights: ['1588-3114', '대표번호', '전용번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [['대표 콜센터', '1588-3114', '평일 09:00 ~ 18:00'], ['무료 상담', '080-789-3300', '무료'], ['상담 전화', '1599-3445', '-']],
      },
      sourceNote: '* 출처: 삼성생명 상담 안내 (2026-08-25 확인)',
    },
    {
      q: '상담사와 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        '삼성생명 공식 안내는 상담사 연결 항목을 번호와 함께 표기하지 않습니다. 안내 음성을 끝까지 듣고 상담사 연결 항목을 고르시면 됩니다. 다만 이건 대표 콜센터 (평일 09:00 ~ 18:00)에만 됩니다. 그 시간을 벗어나면 상담사 연결 항목 자체가 없고 사고접수·긴급출동 같은 접수 기능만 돌아갑니다. 아래는 시간대별로 번호가 어떻게 갈리는지 정리한 것입니다.',
      highlights: ['상담사 연결', '대표 콜센터 (평일 09:00 ~ 18:00)'],
      table: {
        headers: ['번호', '평일 주간 (대표 콜센터 (평일 09:00 ~ 18:00))'],
        rows: [],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 부서 이관 횟수가 줄어듭니다. 본인이 아니면 위임 확인 절차가 더 붙으니, 계약자 주민번호·증권번호를 미리 꺼내 두는 편이 빠릅니다.',
      },
      sourceNote: '* 출처: 삼성생명 상담 안내 (2026-08-25 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '상담사 상담은 대표 콜센터 (평일 09:00 ~ 18:00)입니다. 공식 안내 기준으로 이 시간을 벗어나면 상담사 연결이 안 됩니다. 야간·공휴일 운영 표기가 따로 없으니, 급한 용건도 대표 콜센터 (평일 09:00 ~ 18:00) 안에 거셔야 합니다.',
      highlights: ['대표 콜센터 (평일 09:00 ~ 18:00)', '공식 안내에 야간 상담시간 표기 없음', '공식 안내에 공휴일 상담시간 표기 없음'],
      table: {
        headers: ['번호', '야간·휴일 (공식 안내에 야간 상담시간 표기 없음 / 공식 안내에 공휴일 상담시간 표기 없음)'],
        rows: [],
      },
      box: {
        label: '통화료',
        content: '080-789-3300 은 무료이고, 그 밖의 번호는 발신자 요금제 기준으로 부과됩니다.',
      },
      sourceNote: '* 출처: 삼성생명 상담 안내 (2026-08-25 확인)',
    },
    {
      q: '삼성생명 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '다만 보험금 청구나 계약 변경은 방문하지 않아도 전화·앱·홈페이지로 끝나는 일이 많습니다. 서류 원본을 내야 하거나 대면 상담이 필요할 때만 움직이시는 편이 낫습니다. 방문하실 거라면 집에서 가까운 지점을 먼저 찾아보세요. 지도에서 회사 이름으로 검색하면 가까운 순으로 나옵니다.',
      highlights: ['가까운 지점'],
      act: {
        cue: '삼성생명은 공식 안내에 지점 주소를 따로 걸어두지 않습니다. 창구에서만 되는 일이 아니면 안 가셔도 됩니다.',
        label: '가까운 창구 찾아보기',
        url: MAP,
      },
      sourceNote: '* 출처: 삼성생명 사업자 정보 (2026-08-25 확인)',
    },
    {
      q: '다른 보험사 고객센터 번호도 필요한데요', anchor: 'q5',
      intro:
        '보험은 한 곳만 들지 않습니다. 자동차는 이쪽, 실손은 저쪽인 경우가 흔해서 사고 한 번에 두세 곳에 전화하게 됩니다. 회사마다 대표번호도 다르고 상담사 연결 번호도 다릅니다. 보험사별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['보험사별', '대표번호'],
      act: {
        cue: '삼성생명 상담은 대표 콜센터 (평일 09:00 ~ 18:00) 안에서만 됩니다. 가입한 곳이 여럿이면 미리 봐 두는 게 낫습니다.',
        label: '보험사 전체 목록 열기',
        url: HUB,
      },
      sourceNote: '* 출처: 각 보험사 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '삼성생명 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 1588-3114입니다. (2026-08-25 확인 기준)',
      source: '삼성생명 상담 안내',
      sourceUrl: 'https://direct.samsunglife.com/customerSupport/inquiryGuide/CustomerSupportInquiryGuideMainView',
    },
    {
      q: '상담사와 바로 통화하려면 어떻게 하나요?',
      a: '공식 안내에 ARS 단축번호가 나와 있지 않습니다. 안내 음성에 따라 상담사 연결 항목을 고르세요. 대표 콜센터 (평일 09:00 ~ 18:00)에만 가능합니다.',
      source: '삼성생명 상담 안내',
      sourceUrl: 'https://direct.samsunglife.com/customerSupport/inquiryGuide/CustomerSupportInquiryGuideMainView',
    },
    {
      q: '주말이나 공휴일에도 상담이 되나요?',
      a: '상담사 상담은 대표 콜센터 (평일 09:00 ~ 18:00)입니다. 공식 안내에 야간·공휴일 운영 표기가 없어, 이 시간을 벗어나면 연결되지 않습니다.',
      source: '삼성생명 상담 안내',
      sourceUrl: 'https://direct.samsunglife.com/customerSupport/inquiryGuide/CustomerSupportInquiryGuideMainView',
    },
    {
      q: '전화 요금은 어떻게 부과되나요?',
      a: '080-789-3300 은 무료이고, 그 밖의 번호는 발신자 요금제 기준으로 부과됩니다.',
      source: '삼성생명 상담 안내',
      sourceUrl: 'https://direct.samsunglife.com/customerSupport/inquiryGuide/CustomerSupportInquiryGuideMainView',
    },
    {
      q: '점심시간에도 상담이 되나요?',
      a: '삼성생명 공식 고객센터 안내에는 점심시간 휴무 표기가 없습니다. 상담 가능 시간은 대표 콜센터 (평일 09:00 ~ 18:00)으로 안내되어 있고, 그 시간 안에서는 점심시간이라고 따로 끊긴다는 안내가 없습니다. 다만 상담사 수가 줄어 대기가 길어질 수는 있으니, 급하지 않다면 오전 이른 시간에 거는 편이 낫습니다.',
      source: '삼성생명 상담 안내',
      sourceUrl: 'https://direct.samsunglife.com/customerSupport/inquiryGuide/CustomerSupportInquiryGuideMainView',
    },
    {
      q: '대구·부산·인천 등 지역 고객센터 번호는 따로 있나요?',
      a: '전화 상담은 지역과 관계없이 1588-3114 한 번호로 연결됩니다. 지역별 고객센터 번호는 따로 안내되지 않습니다. 방문이 필요하면 지점·서비스망 위치를 공식 홈페이지의 지점 찾기나 지도에서 확인하세요. 지점 위치와 운영 여부는 수시로 바뀌어 이 글에는 주소를 적어두지 않습니다.',
      source: '삼성생명 상담 안내',
      sourceUrl: 'https://direct.samsunglife.com/customerSupport/inquiryGuide/CustomerSupportInquiryGuideMainView',
    },
    {
      q: '방문 상담은 어디로 가야 하나요?',
      a: '삼성생명 지점·서비스망 위치는 수시로 바뀌어 이 글에 주소를 적어두지 않습니다. 공식 홈페이지의 지점 찾기나 지도에서 지역을 넣어 검색하면 현재 운영 중인 곳이 나옵니다. 보험금 청구나 계약 변경은 방문하지 않아도 전화·앱으로 처리되는 경우입니다.',
      source: '삼성생명 사업자 정보',
      sourceUrl: 'https://www.samsunglife.com',
    },
  ],

  sources: [
    { name: '삼성생명 상담 안내', url: 'https://direct.samsunglife.com/customerSupport/inquiryGuide/CustomerSupportInquiryGuideMainView' },
    { name: '삼성생명 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: {
    "slug": "samsung-life",
    "name": "삼성생명",
    "brandColor": "#1428A0",
    "official": "https://www.samsunglife.com",
    "sourceUrl": "https://direct.samsunglife.com/customerSupport/inquiryGuide/CustomerSupportInquiryGuideMainView",
    "sourceName": "삼성생명 상담 안내",
    "verifiedAt": "2026-08-25",
    "main": {
      "label": "대표 콜센터",
      "tel": "1588-3114"
    },
    "hours": {
      "weekday": "대표 콜센터 (평일 09:00 ~ 18:00)",
      "night": "공식 안내에 야간 상담시간 표기 없음",
      "holiday": "공식 안내에 공휴일 상담시간 표기 없음",
      "lunch": "공식 안내에 점심 휴무 표기 없음"
    },
    "offhourNote": "공식 안내 기준으로 대표 콜센터 (평일 09:00 ~ 18:00)을 벗어나면 상담사 연결이 안 됩니다. 계약 조회·변경과 보험금 청구는 평일 상담시간에 거는 편이 빠릅니다.",
    "word": "보험사",
    "hubWord": "보험 고객센터",
    "agentWord": "상담사",
    "offhourWord": "사고접수·긴급출동",
    "idStep": "계약자 주민번호·증권번호",
    "callFee": "080-789-3300 은 무료이고, 그 밖의 번호는 발신자 요금제 기준으로 부과됩니다.",
    "ars": {
      "day": [],
      "night": []
    },
    "numbers": [
      {
        "label": "대표 콜센터",
        "tel": "1588-3114",
        "note": "평일 09:00 ~ 18:00"
      },
      {
        "label": "무료 상담",
        "tel": "080-789-3300",
        "note": "무료"
      },
      {
        "label": "상담 전화",
        "tel": "1599-3445"
      }
    ]
  },
};
