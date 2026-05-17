import type { PolicyData, SpokeData } from '../../lib/policy-types';

export const ledLightingSupportPolicy: PolicyData = {
  id: '145',
  slug: 'led-lighting-support',
  type: 'service',
  title: '에너지 취약계층 고효율 조명기기 무상교체 지원',
  org: '한국에너지재단 (산업통상자원부)',
  summary:
    '기초생활수급자, 차상위계층, 영구임대주택 입주자 및 사회복지시설을 대상으로 노후 저효율 조명기기(형광등·백열전구 등)를 고효율 LED 조명기기로 무상 교체해드립니다. 별도 비용 없이 전기요금 절감 효과를 누릴 수 있습니다.',
  tags: ['LED', '조명교체', '형광등', '취약계층', '저소득층', '에너지복지', '한국에너지재단'],

  keyFacts: {
    지원유형: {
      value: '현물 지원 — 노후 저효율 조명기기를 고효율 LED로 무상 교체',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
        text: '노후화된 저효율 조명기기(형광등, 백열전구, 다운라이트 등)를 고효율 LED 조명기기로 무상 교체 지원',
        verifiedAt: '2026-05-16',
      },
    },
    지원대상저소득층: {
      value: '기초생활수급자(생계·의료·주거·교육급여), 차상위계층, 복지사각지대(기초지자체 추천), 영구임대주택 입주자',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
        text: '「국민기초생활보장법」 제7조 중 생계·의료·주거·교육급여 수급권자의 가구, 차상위계층 / 「공공주택 특별법」 시행령 제2조 중 영구임대주택',
        verifiedAt: '2026-05-16',
      },
    },
    지원대상복지시설: {
      value: '사회복지사업법 제34조에 따라 설치·운영하는 사회복지시설',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
        text: '「사회복지사업법」 제34조(사회복지시설의 설치)에 따라 설치·운영하는 시설',
        verifiedAt: '2026-05-16',
      },
    },
    지원제외사유: {
      value: '기존 LED 조명(LED→LED 교체 불가), 최근 5년 이내 교체 이력, 준공 후 5년 미경과 시설, 리모델링·이전 계획 시설',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
        text: '기존 설치된 조명이 일반 형광등이 아닌 경우(LED→LED 교체 불가) / 최근 5년 이내 교체한 조명기기 / 신청일 현재 준공연도가 5년이 경과하지 않은 시설',
        verifiedAt: '2026-05-16',
      },
    },
    교체대상조명: {
      value: '형광등, 백열전구, 다운라이트 등 저효율 조명기기',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
        text: '노후화된 저효율 조명기기(형광등, 백열전구, 다운라이트 등)를 고효율 LED 조명기기로 무상 교체',
        verifiedAt: '2026-05-16',
      },
    },
    신청방법가구: {
      value: '소재지 시·군·구 에너지 담당부서 또는 읍·면·동 주민센터 방문 신청·추천',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
        text: '소재지 시·군·구 에너지 담당부서에서 발굴(수급권자 가구, 영구임대주택) 및 신청(사회복지시설)',
        verifiedAt: '2026-05-16',
      },
    },
    문의처: {
      value: '읍·면·동 주민센터 / 한국에너지재단 ☎02-6913-2173',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
        text: '주소지 읍·면·동 주민센터 / 한국에너지재단(☎02-6913-2173)',
        verifiedAt: '2026-05-16',
      },
    },
    영구임대주택특이사항: {
      value: '단지 단위 협약 체결 후 지원 가능. 공용 공간 포함 시 사전 협의 필요',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
        text: '영구임대주택의 경우 단지 단위로 협약 체결 후 지원 가능하며, 주차장 등 공용 이용 공간이 포함되어야 할 때는 사전 협의 필요',
        verifiedAt: '2026-05-16',
      },
    },
  },

  qa: [
    {
      anchor: 'target',
      question: '이 지원을 받을 수 있는 대상은 누구인가요?',
      intro: '총 5개 유형으로 나뉘며, 저소득층 가구와 사회복지시설이 주요 대상입니다. 기초생활수급자, 차상위계층, 지자체 추천 복지사각지대 가구, 영구임대주택 입주자, 그리고 사회복지시설이 지원 대상입니다. 본 정책은 정부 공식 자료에 기반하며 신청 자격은 해당 부처 공식 사이트에서 최종 확인이 필요합니다. 자격 요건과 지원 조건은 매년 변경될 수 있어 신청 전 최신 정보 확인을 권장합니다.',
      highlights: ['기초생활수급자', '차상위계층', '복지사각지대', '영구임대주택', '사회복지시설'],
      box: {
        title: '지원 대상',
        items: [
          '기초생활수급자 — 생계·의료·주거·교육급여 수급권자 가구',
          '차상위계층 가구',
          '복지사각지대 가구 — 행정복지센터 또는 기초지자체장의 추천을 받은 일반 저소득가구',
          '영구임대주택 입주자 — 단지 단위 협약 후 지원',
          '사회복지시설 — 사회복지사업법 제34조에 따라 설치·운영하는 시설',
        ],
      },
      box2: {
        title: '지원 제외 대상',
        items: [
          '기존 LED 조명이 설치된 경우 (LED → LED 교체 불가)',
          '최근 5년 이내에 이미 조명을 교체한 가구·시설',
          '신청일 기준 준공 후 5년이 경과하지 않은 시설',
          '전기시설 포함 리모델링·이전 계획이 있는 시설',
        ],
      },
      sourceNote: 'K-공감 에너지 취약계층 고효율 조명기기 무상교체 지원 (gonggam.korea.kr)',
    },
    {
      anchor: 'benefit',
      question: '어떤 조명을 교체해주나요?',
      intro: '노후화된 저효율 조명기기를 고효율 LED 조명기기로 무상 교체해드립니다. 교체 대상은 형광등, 백열전구, 다운라이트 등 LED가 아닌 기존 조명기기이며, 교체 이후 전기요금 절감 효과를 기대할 수 있습니다. 본 정책은 정부 공식 자료에 기반하며 신청 자격은 해당 부처 공식 사이트에서 최종 확인이 필요합니다. 자격 요건과 지원 조건은 매년 변경될 수 있어 신청 전 최신 정보 확인을 권장합니다.',
      highlights: ['형광등 → LED', '백열전구 → LED', '다운라이트 → LED', '무상 교체', '전기요금 절감'],
      box: {
        title: '교체 대상 및 내용',
        items: [
          '교체 대상 조명: 형광등, 백열전구, 다운라이트 등 저효율 조명기기',
          '교체 조명: 고효율 LED 조명기기',
          '비용: 무상 (본인 부담 없음)',
          '효과: LED 교체 시 형광등 대비 약 50~70% 전력 절감',
        ],
      },
      sourceNote: 'K-공감 에너지 취약계층 고효율 조명기기 무상교체 지원 (gonggam.korea.kr)',
    },
    {
      anchor: 'apply',
      question: '어떻게 신청하나요?',
      intro: '저소득층 가구는 소재지 시·군·구 에너지 담당부서 또는 읍·면·동 주민센터(행정복지센터)에 문의하면 발굴·지원됩니다. 사회복지시설은 시·군·구 에너지 담당부서에 직접 신청합니다. 영구임대주택은 단지 단위로 협약을 체결해야 합니다. 본 정책은 정부 공식 자료에 기반하며 신청 자격은 해당 부처 공식 사이트에서 최종 확인이 필요합니다. 자격 요건과 지원 조건은 매년 변경될 수 있어 신청 전 최신 정보 확인을 권장합니다.',
      highlights: ['시·군·구 에너지 담당부서', '읍·면·동 주민센터', '사회복지시설 직접 신청', '영구임대주택 단지 협약'],
      table: {
        headers: ['대상', '신청 방법'],
        rows: [
          ['저소득층 가구 (기초수급자·차상위)', '소재지 시·군·구 에너지 담당부서 또는 읍·면·동 주민센터에 문의'],
          ['영구임대주택', '단지 단위 협약 체결 후 시·군·구 에너지 담당부서 신청'],
          ['사회복지시설', '소재지 시·군·구 에너지 담당부서에 직접 신청'],
        ],
      },
      sourceNote: 'K-공감 에너지 취약계층 고효율 조명기기 무상교체 지원 (gonggam.korea.kr)',
    },
    {
      anchor: 'exclusion',
      question: '지원받지 못하는 경우는 어떤 경우인가요?',
      intro: 'LED 조명이 이미 설치되어 있거나, 5년 이내 조명 교체 이력이 있는 경우에는 지원받을 수 없습니다. 시설의 경우 준공 후 5년 이내이거나 리모델링·이전 계획이 있으면 제외됩니다. 본 정책은 정부 공식 자료에 기반하며 신청 자격은 해당 부처 공식 사이트에서 최종 확인이 필요합니다. 자격 요건과 지원 조건은 매년 변경될 수 있어 신청 전 최신 정보 확인을 권장합니다.',
      highlights: ['LED→LED 교체 불가', '5년 이내 교체 이력', '준공 5년 미경과', '리모델링 계획'],
      box: {
        title: '지원 제외 상세 조건',
        items: [
          '기존 설치 조명이 LED인 경우 — LED에서 LED로 교체 불가',
          '최근 5년 이내에 국비·지방비·자비·후원 등을 통해 조명을 교체한 경우',
          '신청일 기준 준공연도가 5년이 경과하지 않은 시설',
          '신청일 기준 전기시설이 포함된 리모델링 계획 또는 이전 계획이 있는 시설',
          '비용 대비 효과성이 현저히 저조하여 자원 낭비가 예상되는 경우',
        ],
      },
      sourceNote: 'K-공감 에너지 취약계층 고효율 조명기기 무상교체 지원 (gonggam.korea.kr)',
    },
    {
      anchor: 'rental',
      question: '영구임대주택에 살고 있는데 어떻게 신청하나요?',
      intro: '영구임대주택은 단지 단위로 협약을 체결한 후 지원받을 수 있습니다. 개별 가구가 아닌 단지 전체가 협약을 체결해야 하므로, 관리사무소 또는 입주자대표회를 통해 먼저 문의하는 것이 좋습니다. 본 정책은 정부 공식 자료에 기반하며 신청 자격은 해당 부처 공식 사이트에서 최종 확인이 필요합니다. 자격 요건과 지원 조건은 매년 변경될 수 있어 신청 전 최신 정보 확인을 권장합니다.',
      highlights: ['단지 단위 협약', '관리사무소', '수급권자·차상위 가구만 지원', '공용 공간 사전 협의'],
      box: {
        title: '영구임대주택 신청 특이사항',
        items: [
          '개인 신청이 아닌 단지 단위 협약 체결 후 지원 가능',
          '단지 내 수급권자 또는 차상위계층 가구만 지원 (전체 입주자 아님)',
          '주차장 등 공용 공간 포함 시 사전 협의 필요',
          '관리사무소 또는 시·군·구 에너지 담당부서에 문의',
        ],
      },
      sourceNote: 'K-공감 에너지 취약계층 고효율 조명기기 무상교체 지원 (gonggam.korea.kr)',
    },
    {
      anchor: 'contact',
      question: '문의는 어디에 하나요?',
      intro: '주소지 읍·면·동 주민센터(행정복지센터)나 한국에너지재단(☎ 02-6913-2173)에 문의하면 됩니다. 사회복지시설은 소재지 시·군·구 에너지 담당부서에 직접 연락하세요. 영구임대주택은 관리사무소를 통해 협약 여부를 먼저 확인하세요. 본 정책은 정부 공식 자료에 기반하며 신청 자격은 해당 부처 공식 사이트에서 최종 확인이 필요합니다. 자격 요건과 지원 조건은 매년 변경될 수 있어 신청 전 최신 정보 확인을 권장합니다.',
      highlights: ['읍·면·동 주민센터', '한국에너지재단 02-6913-2173', '시·군·구 에너지 담당부서'],
      table: {
        caption: '대상별 문의 창구',
        headers: ['신청 대상', '문의처', '비고'],
        rows: [
          ['저소득층 가구', '읍·면·동 주민센터(행정복지센터)', '발굴 지원 가능'],
          ['사회복지시설', '시·군·구 에너지 담당부서', '직접 신청'],
          ['영구임대주택', '관리사무소 또는 시·군·구 에너지 담당부서', '단지 단위 협약 필요'],
          ['기타 문의', '한국에너지재단 ☎ 02-6913-2173', ''],
        ],
      },
      box: {
        title: '문의처',
        items: [
          '주소지 읍·면·동 주민센터(행정복지센터)',
          '한국에너지재단: ☎ 02-6913-2173',
          '소재지 시·군·구 에너지 담당부서 (사회복지시설·영구임대주택 협약 관련)',
        ],
      },
      sourceNote: 'K-공감 에너지 취약계층 고효율 조명기기 무상교체 지원 (gonggam.korea.kr)',
    },
    {
      anchor: 'tip',
      question: 'LED 교체로 전기요금을 얼마나 절약할 수 있나요?',
      intro: 'LED 조명은 같은 밝기의 형광등 대비 약 50~70% 전력을 절감합니다. 일반 가정에서 형광등 20개를 LED로 교체하면 연간 수만 원 이상의 전기요금 절감 효과를 기대할 수 있습니다. 조명 이외에도 에너지바우처, 저소득층 에너지 효율 개선사업(에어컨·보일러) 등 다른 에너지 복지사업도 함께 확인하세요. 본 정책은 정부 공식 자료에 기반하며 신청 자격은 해당 부처 공식 사이트에서 최종 확인이 필요합니다.',
      highlights: ['형광등 대비 50~70% 절감', '연간 전기요금 절약', '에너지바우처 연계'],
      box: {
        title: '함께 받을 수 있는 에너지 복지 지원',
        items: [
          '에너지바우처 — 전기·도시가스·등유 사용 현금성 바우처',
          '저소득층 에너지 효율 개선사업 — 에어컨·보일러·단열 무상 시공',
          'EERS 가스보일러 지원 — 고효율 가스보일러 무상 교체',
          'K-패스 대중교통 할인 — 이동비 절감',
        ],
      },
      sourceNote: '한국에너지재단 (energy.or.kr)',
    },
  ],

  eligibility: [
    '기초생활수급자 (생계·의료·주거·교육급여 수급권자 가구)',
    '차상위계층 가구',
    '지자체 추천 복지사각지대 저소득가구',
    '영구임대주택 입주 가구 (단지 단위 협약 체결 필요)',
    '사회복지사업법 제34조에 따라 설치·운영하는 사회복지시설',
  ],

  faq: [
    {
      q: '집에 형광등과 LED 조명이 섞여 있어도 신청할 수 있나요?',
      a: '형광등·백열전구 등 저효율 조명이 있는 부분에 한하여 LED 교체 지원이 가능합니다. 이미 LED인 조명은 교체 지원 대상이 아닙니다.',
      source: 'K-공감 에너지 취약계층 고효율 조명기기 무상교체 지원',
      sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
    },
    {
      q: '3년 전에 한 번 지원받았는데 다시 신청할 수 있나요?',
      a: '최근 5년 이내에 조명을 교체(국비·지방비·자비·후원 포함)한 경우에는 재신청이 불가합니다. 5년이 경과한 경우 재신청이 가능합니다.',
      source: 'K-공감 에너지 취약계층 고효율 조명기기 무상교체 지원',
      sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
    },
    {
      q: '사회복지시설은 어떻게 신청하나요?',
      a: '사회복지시설은 소재지 시·군·구 에너지 담당부서에 직접 신청합니다. 사회복지사업법 제34조에 따라 설치·운영하는 시설이 대상입니다.',
      source: 'K-공감 에너지 취약계층 고효율 조명기기 무상교체 지원',
      sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
    },
    {
      q: '새 아파트(준공 3년)에 사는 수급자인데 신청할 수 있나요?',
      a: '신청일 기준 준공 후 5년이 경과하지 않은 시설·주택은 지원 대상에서 제외됩니다. 5년이 경과한 후 신청하세요.',
      source: 'K-공감 에너지 취약계층 고효율 조명기기 무상교체 지원',
      sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
    },
    {
      q: '임대주택이면 모두 신청할 수 있나요?',
      a: '공공임대주택 중 영구임대주택만 지원 대상이며, 단지 단위 협약이 필요합니다. 행복주택·국민임대 등 다른 임대주택 유형은 지원 대상이 아닐 수 있으므로 주소지 주민센터 또는 한국에너지재단(☎02-6913-2173)에 문의하세요.',
      source: 'K-공감 에너지 취약계층 고효율 조명기기 무상교체 지원',
      sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
    },
  ],

  sources: [
    {
      label: 'K-공감 에너지 취약계층 고효율 조명기기 무상교체 지원',
      url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=cfdb420c-2352-4be6-9e54-0f3ab2490b35',
      publishedAt: '2026-03-03',
    },
    {
      label: '한국에너지재단 — 취약계층 에너지복지(LED) 사업소개',
      url: 'https://www.koref.or.kr/web/intropage/intropageShow.do?page_id=326e6a08b5d74052bdc83c8ffdba4457',
      publishedAt: '2026-05-16',
    },
    {
      label: '복지로 복지서비스 — 취약계층 고효율가전 구매지원',
      url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00005444&wlfareInfoReldBztpCd=01',
      publishedAt: '2026-05-16',
    },
  ],
};

export const ledLightingSupportSpokes: SpokeData[] = [
  {
    slug: 'target',
    role: 'target',
    title: '에너지 취약계층 LED 조명 무상교체 대상 — 기초수급자·차상위·영구임대',
    content:
      '기초생활수급자, 차상위계층, 복지사각지대 가구, 영구임대주택 입주자, 사회복지시설이 대상입니다. LED→LED 교체·5년 이내 교체 이력이 있는 경우는 지원 제외.',
  },
  {
    slug: 'benefit',
    role: 'benefit',
    title: '에너지 취약계층 LED 조명 무상교체 내용 — 형광등·백열전구 무상 교체',
    content:
      '형광등, 백열전구, 다운라이트 등 저효율 조명을 고효율 LED로 무상 교체합니다. LED 교체로 형광등 대비 50~70% 전력 절감 효과를 기대할 수 있습니다.',
  },
  {
    slug: 'apply',
    role: 'apply',
    title: '에너지 취약계층 LED 조명 무상교체 신청 — 주민센터·에너지 담당부서',
    content:
      '저소득층 가구는 읍·면·동 주민센터, 사회복지시설은 시·군·구 에너지 담당부서