import type { PolicyData, SpokeData } from '../../lib/policy-types';

export const efficientApplianceSupportPolicy: PolicyData = {
  id: '144',
  slug: 'efficient-appliance-support',
  type: 'service',
  title: '전기요금 복지할인 대상 취약계층 고효율가전 구매지원',
  org: '한국전력공사 (산업통상자원부)',
  summary:
    '전기요금 복지할인을 받는 기초생활수급자, 차상위계층, 국가유공자(1~3급), 중증장애인(1~3급) 등이 에너지효율 1등급 가전제품 11종을 구매하면 구매금액의 15~30%(가구당 30만 원 한도)를 현금으로 돌려받는 지원사업입니다.',
  tags: ['고효율가전', '냉장고', '에어컨', '세탁기', '취약계층', '복지할인', '한전', '에너지마켓플레이스'],

  keyFacts: {
    지원유형: {
      value: '구매금액의 15~30% 환급 (가구당 최대 30만 원)',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=2b13e8a1-10a5-47b7-9716-653f34b30384',
        text: '에너지효율등급 1등급 가전제품 구매 시 구매금액의 15~30% 지원(가구당 30만 원 한도)',
        verifiedAt: '2026-05-16',
      },
    },
    환급한도: {
      value: '가구당 최대 30만 원',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=2b13e8a1-10a5-47b7-9716-653f34b30384',
        text: '에너지효율등급 1등급 가전제품 구매 시 구매금액의 15~30% 지원(가구당 30만 원 한도)',
        verifiedAt: '2026-05-16',
      },
    },
    지원대상: {
      value: '전기요금 복지할인 대상자 — 기초생활수급자, 차상위계층, 국가유공자(1~3급), 중증장애인(1~3급) 등',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=2b13e8a1-10a5-47b7-9716-653f34b30384',
        text: '전기요금 복지할인을 받는 기초생활수급자, 국가유공자(1~3급), 장애의 정도가 심한 장애인(1~3급), 차상위계층 등',
        verifiedAt: '2026-05-16',
      },
    },
    지원품목: {
      value: '에너지효율 1등급 가전 11종 (냉장고·김치냉장고·에어컨·세탁기·TV·전기밥솥·공기청정기·제습기·의류건조기·유선청소기·냉온수기)',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=2b13e8a1-10a5-47b7-9716-653f34b30384',
        text: '품목: 냉장고, 세탁기, 에어컨, TV 등 고효율 가전제품 11종',
        verifiedAt: '2026-05-16',
      },
    },
    신청기간: {
      value: '2026년 2월 9일 ~ 12월 31일 (2026년 1월 1일 이후 구매분 소급 적용 가능)',
      source: {
        url: 'https://en-ter.co.kr/support/main/main.do',
        text: '2026년 고효율 가전제품 지원사업 신청기간: 2026.02.09 ~ 2026.12.31',
        verifiedAt: '2026-05-16',
      },
    },
    신청방법: {
      value: '한전 에너지마켓플레이스(en-ter.co.kr/support) 온라인 신청',
      source: {
        url: 'https://en-ter.co.kr/support/info/info01/info.do',
        text: '지원 사업 신청은 한전 고효율 가전 구매비용 지원사업 메뉴에서 가능',
        verifiedAt: '2026-05-16',
      },
    },
    사전조건: {
      value: '전기요금 복지할인 선 신청 필요',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=2b13e8a1-10a5-47b7-9716-653f34b30384',
        text: '전기요금 복지할인 선 신청 필요',
        verifiedAt: '2026-05-16',
      },
    },
    문의: {
      value: '한국전력 고객센터 ☎1551-1212',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=2b13e8a1-10a5-47b7-9716-653f34b30384',
        text: '한국전력 고객센터(☎1551-1212)',
        verifiedAt: '2026-05-16',
      },
    },
  },

  qa: [
    {
      anchor: 'target',
      question: '이 지원을 받을 수 있는 대상은 누구인가요?',
      intro:
        '전기요금 복지할인을 받고 있는 취약계층 가구라면 누구나 신청 가능합니다. 단, 신청 전에 한전 전기요금 복지할인이 먼저 적용되어 있어야 합니다. 복지할인이 아직 신청되지 않은 경우 가까운 한전 지사나 주민센터에서 먼저 신청하세요.',
      highlights: ['기초생활수급자', '차상위계층', '국가유공자 1~3급', '중증장애인 1~3급', '전기요금 복지할인'],
      box: {
        title: '지원 대상 (가군·나군)',
        items: [
          '가군 (30% 지원): 장애인(중증), 국가유공자, 기초생활수급자, 사회복지시설, 차상위계층, 생명유지장치',
          '나군 (15% 지원): 다자녀가구, 대가족가구, 출산가구',
          '공통 조건: 한전 전기요금 복지할인 등록 완료 가구',
        ],
      },
      box2: {
        title: '사전 확인 사항',
        items: [
          '전기요금 청구서에 "복지할인" 표시 확인 (미적용 시 주민센터·한전 지사에서 먼저 신청)',
          '주민등록 상 주소지 전기요금 고객번호 필요',
        ],
      },
      sourceNote: 'K-공감 전기요금 복지할인 대상 취약계층 고효율가전 구매지원 (gonggam.korea.kr)',
    },
    {
      anchor: 'benefit',
      question: '얼마나, 어떤 제품을 지원받나요?',
      intro:
        '에너지소비효율 1등급 가전제품 11종을 구매하면 구매금액의 15% 또는 30%를 환급받습니다. 가구당 최대 30만 원 한도이며, 여러 품목을 합산하여 한도 안에서 지원받을 수 있습니다.',
      highlights: ['가구당 최대 30만 원', '가군 30%', '나군 15%', '11개 품목', '1등급 가전'],
      table: {
        headers: ['구분', '지원 비율', '주요 대상'],
        rows: [
          ['가군', '구매금액의 30% (최대 30만 원)', '장애인(중증), 유공자, 기초생활수급자, 사회복지시설, 차상위계층, 생명유지장치'],
          ['나군', '구매금액의 15% (최대 30만 원)', '다자녀가구, 대가족가구, 출산가구'],
        ],
      },
      box: {
        title: '지원 가능 11개 품목',
        items: [
          '냉장고 (1등급)',
          '김치냉장고 (1등급)',
          '에어컨 (모델별 1~3등급)',
          '세탁기 일반형 / 드럼형 (1~2등급)',
          'TV (1등급)',
          '전기밥솥 (1등급)',
          '공기청정기 (1등급)',
          '제습기 (1등급)',
          '의류건조기 (1등급)',
          '유선 진공청소기 (1등급, 무선 제외)',
          '냉온수기 (1등급)',
        ],
      },
      sourceNote: '한전 에너지마켓플레이스 / 에너지마켓플레이스 품목 안내 2026 (en-ter.co.kr)',
    },
    {
      anchor: 'apply',
      question: '어떻게 신청하나요?',
      intro:
        '고효율 가전제품을 먼저 구매한 뒤, 한전 에너지마켓플레이스(support.kepco.co.kr)에서 온라인으로 신청합니다. 구매 영수증·에너지등급 라벨 사진·제품 명판 사진 등을 준비해야 합니다.',
      highlights: ['support.kepco.co.kr', '온라인 신청', '영수증', '라벨 사진', '명판 사진'],
      box: {
        title: '신청 절차',
        items: [
          '① 에너지효율 1등급 가전제품 구매 (2026년 1월 1일 이후)',
          '② 에너지마켓플레이스(support.kepco.co.kr) 접속',
          '③ 회원가입 및 전기요금 고객번호 등록',
          '④ 품목 선택 → 모델명·시리얼번호 입력 → 서류 업로드',
          '⑤ 심사 후 환급금 계좌 입금 (약 4~6주 소요)',
        ],
      },
      box2: {
        title: '필요 서류',
        items: [
          '구매 영수증 또는 거래내역서 (구매일·금액·모델명 포함)',
          '에너지소비효율등급 라벨 사진 (등급·모델명·적용 기준 시행일 선명)',
          '제품 명판 사진 (모델명·시리얼번호)',
          '빌트인 제품: 설치 전 라벨·명판 사진 필수 (설치 후 라벨 가려짐 주의)',
        ],
      },
      sourceNote: '한전 에너지마켓플레이스 (support.kepco.co.kr)',
    },
    {
      anchor: 'period',
      question: '신청 기간과 소급 적용 여부는?',
      intro:
        '2026년 사업 신청 기간은 2월 9일부터 12월 31일까지입니다. 2026년 1월 1일 이후 구매한 제품은 소급 적용되어 2월 9일 이후 신청이 가능합니다.',
      highlights: ['2026.02.09 ~ 12.31', '2026.01.01 이후 구매 소급 적용', '예산 소진 시 조기 마감'],
      box: {
        title: '신청 일정',
        items: [
          '신청 기간: 2026년 2월 9일 ~ 2026년 12월 31일',
          '소급 적용: 2026년 1월 1일 이후 구매분은 신청 가능',
          '주의: 예산 소진 시 기간 내라도 조기 마감될 수 있음',
          '2026년 세부 공지: 한전 에너지마켓플레이스(support.kepco.co.kr) 확인',
        ],
      },
      sourceNote: 'K-공감 전기요금 복지할인 대상 취약계층 고효율가전 구매지원 (gonggam.korea.kr)',
    },
    {
      anchor: 'caution',
      question: '지원받을 때 주의할 점은 무엇인가요?',
      intro:
        '에너지등급 라벨이 없거나 등급 기준 시행일이 맞지 않으면 지원이 거절됩니다. 빌트인 제품은 설치 전 사진을 반드시 찍어두세요. 무선 청소기·중고 제품·해외 직구 제품은 지원 대상이 아닙니다.',
      highlights: ['라벨 등급 기준 시행일 확인', '빌트인 설치 전 사진 촬영', '무선 청소기 제외', '중고·해외직구 제외'],
      box: {
        title: '지원 불가 케이스',
        items: [
          '무선(코드리스) 청소기 — 지원 품목 아님',
          '중고·전시 제품 — 구매 증빙 서류 인정 불가',
          '해외 직구 제품 — 국내 에너지효율등급 라벨 미부착',
          '에너지효율등급 라벨 미부착 또는 적용 기준 시행일 불일치 제품',
        ],
      },
      box2: {
        title: '구매 전 체크리스트',
        items: [
          '✔ 지원 11개 품목 해당 여부 확인',
          '✔ 에너지효율등급 라벨 부착 및 등급 기준 시행일 확인 (판매원에게 환급 가능 모델 확인 요청)',
          '✔ 빌트인 제품은 설치 전 라벨·명판 사진 선촬영',
          '✔ 구매 후 영수증·거래내역서 즉시 보관',
        ],
      },
      sourceNote: '한전 에너지마켓플레이스 고효율가전 지원사업 공식 안내 (en-ter.co.kr/support/main/main.do, 2026)',
    },
    {
      anchor: 'prerequisite',
      question: '전기요금 복지할인은 어떻게 신청하나요?',
      intro:
        '이 사업의 신청 전에 한전 전기요금 복지할인이 먼저 적용되어 있어야 합니다. 아직 복지할인을 신청하지 않은 경우 주소지 읍·면·동 주민센터, 한전 지사, 한전 고객센터(☎123)를 통해 신청할 수 있습니다.',
      highlights: ['전기요금 복지할인 먼저 신청', '주민센터', '한전 지사', '☎123'],
      box: {
        title: '전기요금 복지할인 신청 방법',
        items: [
          '방문: 읍·면·동 주민센터(행정복지센터)',
          '방문: 한국전력 지사 (전국)',
          '전화: 한전 고객센터 ☎123',
          '온라인: 한전 고객센터 홈페이지 (kepco.co.kr)',
        ],
      },
      sourceNote: 'K-공감 전기요금 복지할인 대상 취약계층 고효율가전 구매지원 (gonggam.korea.kr)',
    },
    {
      anchor: 'tip',
      question: '환급금을 최대한 받으려면 어떻게 해야 하나요?',
      intro:
        '가구당 한도 30만 원을 최대로 활용하려면, 구매금액이 가군은 100만 원 이상, 나군은 200만 원 이상이어야 합니다. 여러 품목을 합산하여 신청할 수 있으므로 필요한 가전을 함께 교체하면 유리합니다.',
      highlights: ['가군 30% × 100만원 = 30만원', '나군 15% × 200만원 = 30만원', '여러 품목 합산 가능'],
      table: {
        headers: ['대상 구분', '환급 비율', '30만 원 한도 도달 구매금액'],
        rows: [
          ['가군 (기초수급자, 국가유공자 1~3급, 중증장애인)', '30%', '100만 원 이상 구매 시 최대 30만 원'],
          ['나군 (차상위계층 등)', '15%', '200만 원 이상 구매 시 최대 30만 원'],
        ],
      },
      sourceNote: '한전 에너지마켓플레이스 (support.kepco.co.kr)',
    },
  ],

  eligibility: [
    '전기요금 복지할인 등록 가구 (기초생활수급자, 차상위계층, 국가유공자 1~3급, 중증장애인 1~3급 등)',
    '2026년 1월 1일 이후 에너지효율 1등급 가전 11종 구매 가구',
  ],

  faq: [
    {
      q: '전기요금 복지할인 신청 후 바로 이 사업도 신청할 수 있나요?',
      a: '복지할인이 전기요금 청구서에 반영된 것을 확인한 후 신청하시기 바랍니다. 복지할인 적용에는 수 일~수 주가 소요될 수 있습니다.',
      source: '한국전력공사',
      sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=2b13e8a1-10a5-47b7-9716-653f34b30384',
    },
    {
      q: '에어컨 1대, 냉장고 1대 따로 구매해도 합산해서 신청할 수 있나요?',
      a: '네, 가능합니다. 여러 품목을 구매한 경우 합산하여 신청할 수 있으며, 가구당 최대 30만 원 한도 안에서 환급받을 수 있습니다.',
      source: '한전 에너지마켓플레이스',
      sourceUrl: 'https://en-ter.co.kr/support/main/main.do',
    },
    {
      q: '세대원이 구매한 가전도 지원받을 수 있나요?',
      a: '주민등록 상 같은 가구에 속한 세대원이 구매한 경우에도 신청이 가능합니다. 가구당 연간 30만 원 한도가 적용됩니다.',
      source: '한전 에너지마켓플레이스',
      sourceUrl: 'https://en-ter.co.kr/support/main/main.do',
    },
    {
      q: '구매한 가전이 11개 품목에 포함되는지 어떻게 확인하나요?',
      a: '한전 에너지마켓플레이스(support.kepco.co.kr)에서 모델명을 직접 검색하여 지원 대상 여부를 확인할 수 있습니다. 구매 전 판매원에게 "이 모델이 한전 고효율 가전 환급 대상인지" 반드시 확인하는 것이 가장 확실합니다.',
      source: '한전 에너지마켓플레이스 2026',
      sourceUrl: 'https://en-ter.co.kr/support/main/main.do',
    },
    {
      q: '환급금은 어떤 방식으로 받나요?',
      a: '신청 시 등록한 은행 계좌로 환급금이 입금됩니다. 심사 후 환급까지 통상 4~6주 소요됩니다.',
      source: '한국전력공사 고객센터',
      sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=2b13e8a1-10a5-47b7-9716-653f34b30384',
    },
  ],

  sources: [
    {
      label: 'K-공감 전기요금 복지할인 대상 취약계층 고효율가전 구매지원',
      url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=2b13e8a1-10a5-47b7-9716-653f34b30384',
      publishedAt: '2026-03-03',
    },
    {
      label: '한전 에너지마켓플레이스 고효율 가전제품 구매비용 지원사업',
      url: 'https://en-ter.co.kr/support/main/main.do',
      publishedAt: '2026-02-09',
    },
    {
      label: '한전 에너지마켓플레이스 — 고효율가전 사업소개 및 지원품목',
      url: 'https://en-ter.co.kr/support/main/main.do',
      publishedAt: '2026-02-09',
      org: '한국전력공사',
    },
  ],
};

export const efficientApplianceSupportSpokes: SpokeData[] = [
  {
    slug: 'target',
    role: 'target',
    title: '취약계층 고효율가전 구매지원 대상 — 복지할인 가구 확인',
    content:
      '전기요금 복지할인을 받는 기초생활수급자, 차상위계층, 국가유공자(1~3급), 중증장애인(1~3급) 등이 대상입니다. 신청 전 전기요금 복지할인이 먼저 등록되어 있어야 합니다.',
  },
  {
    slug: 'benefit',
    role: 'benefit',
    title: '취약계층 고효율가전 구매지원 혜택 — 최대 30만 원 환급',
    content:
      '에너지효율 1등급 가전 11종 구매 시 가군 30%, 나군 15% 환급(가구당 최대 30만 원). 냉장고·에어컨·세탁기·TV 등 11개 품목.',
  },
  {
    slug: 'apply',
    role: 'apply',
    title: '취약계층 고효율가전 구매지원 신청 방법 — 에너지마켓플레이스 온라인',
    content:
      '한전 에너지마켓플레이스(support.kepco.co.kr)에서 온라인 신청. 구매 영수증·에너지등급 라벨 사진·명판 사진 준비 필요. 신청 기간: 2026.02.09~12.31.',
  },
  {
    slug: 'caution',
    role: 'caution',
    title: '취약계층 고효율가전 구매지원 주의사항 — 라벨·빌트인·무선 청소기',
    content:
      '무선 청소기·중고·해외 직구는 지원 불가. 빌트인 제품은 설치 전 라벨·명판 사진 필수 촬영. 에너지등급 라벨 기준 시행일 확인 필요.',
  },
  {
    slug: 'prerequisite',
    role: 'prerequisite',
    title: '전기요금 복지할인 신청 방법 — 주민센터·한전 지사',
    content:
      '전기요금 복지할인은 읍·면·동 주민센터나 한전 지사에서 신청. 복지할인이 전기요금에 반영된 후 고효율가전 구매지원도 신청 가능합니다.',
  },
];
