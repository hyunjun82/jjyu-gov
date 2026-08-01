import type { PolicyData, SpokeData } from '../../lib/policy-types';

export const lowIncomeEnergyEfficiencyPolicy: PolicyData = {
  id: '142',
  slug: 'low-income-energy-efficiency',
  type: 'service',
  title: '저소득층 에너지 효율 개선사업',
  titleKeywords: { k1: '저소득층', k2: '에너지', k3: '효율', k4: '개선' },
  cat: '복지',
  catSlug: 'welfare',
  org: '한국에너지재단 (기후에너지환경부)',
  summary:
    '기초생활수급자·차상위계층 등 저소득층과 사회복지시설을 대상으로 단열 시공, 창호·바닥 공사, 고효율 보일러 교체, 고효율 에어컨 보급 등 냉·난방 에너지 효율 개선을 무상 지원하는 사업입니다. 가구당 최대 330만 원, 시설당 최대 1,100만 원까지 지원합니다.',
  metaDescription: '저소득층 에너지 효율 개선사업. 기초생활수급자·차상위계층 등 저소득층과 사회복지시설을 대상으로 단열 시공, 창호·바닥 공사, 고효율 보일러 교체, 고효율 에어컨 보급 등 냉·난방 에너지 효율 개선을 무상 지원하는 사업입니다.',
  datePublished: '2026-01-01T09:00:00+09:00',
  dateModified: '2026-05-23T09:00:00+09:00',
  applyUrl: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001128',
  ctaLabel: '저소득층 에너지효율개선 자격 확인하기 (복지로 공식)',
  tags: ['에너지효율', '저소득층', '냉방', '난방', '에어컨', '보일러', '단열', '차상위'],

  keyFacts: {
    지원유형: {
      value: '시공·물품 현물 지원 (냉방: 고효율 에어컨 / 난방: 단열·창호·보일러 교체)',
      source: {
        url: 'https://www.koref.or.kr/web/user/main.do',
        text: '고효율 단열 시공, 창호·바닥 공사, 고효율 보일러 교체, 고효율 냉·난방기 지원 등',
        verifiedAt: '2026-05-16',
      },
    },
    가구당지원한도: {
      value: '최대 330만 원 이내',
      source: {
        url: 'https://www.koref.or.kr/web/user/main.do',
        text: '가구당 최대 330만원 이내 / 시설당 최대 1,100만원 이내 지원',
        verifiedAt: '2026-05-16',
      },
    },
    시설당지원한도: {
      value: '최대 1,100만 원 이내',
      source: {
        url: 'https://www.koref.or.kr/web/user/main.do',
        text: '가구당 최대 330만원 이내 / 시설당 최대 1,100만원 이내 지원',
        verifiedAt: '2026-05-16',
      },
    },
    지원대상: {
      value: '기초생활수급가구, 차상위계층, 복지 사각지대(기초지자체 추천), 사회복지시설',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=4dbe147f-f1c6-49f1-9939-08b92500e0ab',
        text: '기초생활수급가구, 차상위계층, 복지 사각지대(기초지자체 추천), 사회복지 시설 등',
        verifiedAt: '2026-05-16',
      },
    },
    지원제외: {
      value: '수선유지비 지급 대상 가구, 공공임대주택 가구(단 기존 주택전세임대는 가능), 동 사업 지원 후 2년 미경과 가구',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=4dbe147f-f1c6-49f1-9939-08b92500e0ab',
        text: '수선유지비 지급 대상 가구, 공공임대주택가구(단, 기존 주택전세임대주택은 지원 가능), 동 사업을 지원받은 지 2년이 경과되지 않은 가구',
        verifiedAt: '2026-05-16',
      },
    },
    냉방지원일정: {
      value: '사업 대상 추천 2~4월 / 에어컨 설치 4~6월',
      source: {
        url: 'https://www.koref.or.kr/web/user/main.do',
        text: '냉방지원: 사업대상 추천(기초지자체, 2월~4월) → 에어컨 지원(시공업체, 4월~6월)',
        verifiedAt: '2026-05-16',
      },
    },
    난방지원일정: {
      value: '사업 대상 추천 2~10월 / 시공·물품 지원 4~11월',
      source: {
        url: 'https://www.koref.or.kr/web/user/main.do',
        text: '난방지원: 사업대상 추천(기초지자체, 2월~10월) → 시공 및 물품 지원(4월~11월)',
        verifiedAt: '2026-05-16',
      },
    },
    신청방법: {
      value: '읍·면·동 주민센터(행정복지센터)에 신청 (2025년부터 냉방·난방 신청서 통합)',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=4dbe147f-f1c6-49f1-9939-08b92500e0ab',
        text: '읍·면·동 주민센터(행정복지센터)에 신청 / 2025년부터 냉방지원과 난방지원 신청서가 하나로 통합',
        verifiedAt: '2026-05-16',
      },
    },
    문의처: {
      value: '저소득층 에너지효율개선사업 콜센터 ☎1670-7653',
      source: {
        url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=4dbe147f-f1c6-49f1-9939-08b92500e0ab',
        text: '저소득층 에너지효율개선사업 콜센터(☎1670-7653)',
        verifiedAt: '2026-05-16',
      },
    },
    근거법령: {
      value: '에너지법 제16조의2·제16조의5',
      source: {
        url: 'https://www.koref.or.kr/web/user/main.do',
        text: '추진근거: ｢에너지법｣ 제16조의2ㆍ제16조의5',
        verifiedAt: '2026-05-16',
      },
    },
  },

  qa: [
    {
      anchor: 'target',
      act: { cue: '기초수급·차상위가 기본 대상이고, 사각지대 가구는 지자체 추천으로 들어갑니다. 애매하면 상담부터 받는 편이 낫습니다.', label: '지원대상 대조하기', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001128' },
      question: '이 사업을 받을 수 있는 대상은 누구인가요?',
      intro: '저소득층 에너지 효율 개선사업은 냉·난방비 부담이 큰 취약계층 가구와 사회복지시설을 위한 지원으로, 자격 요건이 명확하게 정해져 있습니다. 신청 전 아래 대상 요건을 반드시 확인하세요. 복지로 서비스 안내는 지원 대상을 기초생활수급가구, 차상위계층, 기초지자체가 추천한 복지사각지대 가구, 사회복지시설로 규정하고 있습니다. 다만 제외 대상도 함께 정해져 있어서, 주거급여법에 따른 수선유지비 지급 대상 가구와 공공임대주택 가구는 원칙적으로 빠집니다. 공공임대 중에서도 기존주택 전세임대주택은 지원이 가능합니다.',
      highlights: ['기초생활수급가구', '차상위계층', '복지 사각지대', '사회복지시설', '지원 제외'],
      box: {
        title: '지원 대상',
        items: [
          '기초생활수급가구 (생계·의료·주거·교육급여 수급자)',
          '차상위계층 가구',
          '복지 사각지대 가구 (기초지자체 추천 받은 경우)',
          '지역아동센터 등 사회복지시설',
        ],
      },
      box2: {
        title: '지원 제외 대상',
        items: [
          '주거급여 수선유지비 지급 대상 가구',
          '공공임대주택 가구 (단, 기존 주택전세임대주택은 지원 가능)',
          '동 사업을 지원받은 지 2년이 경과되지 않은 가구',
        ],
      },
      sourceNote: '한국에너지재단 / 냉난방 효율개선 지원안내센터 (min24.energy.or.kr)',
    },
    {
      anchor: 'benefit',
      act: { cue: '창호·단열·보일러 같은 시공을 현물로 지원합니다. 현금이 아니라 집을 고쳐주는 방식입니다.', label: '지원 내용 확인하기', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001128' },
      question: '구체적으로 어떤 지원을 해주나요?',
      intro: '냉방과 난방 두 분야로 나뉘어 지원됩니다. 냉방은 고효율 에어컨 보급·설치, 난방은 단열 시공·창호·바닥 공사 및 고효율 보일러 교체를 지원합니다. 2025년부터 냉방·난방 신청서가 하나로 통합되어, 한 번의 신청으로 두 가지 모두 신청할 수 있습니다. 현금이 아니라 현물로 지원되는 사업입니다. 한파와 폭염 같은 기후변화에 취약한 에너지 소외계층의 주거 환경 자체를 손봐서 냉난방 효율을 올리는 방식이라, 지원을 받으면 매달 나가는 에너지 요금이 줄어드는 효과로 이어집니다. 담당 부처는 기후에너지환경부 기후적응과입니다.',
      highlights: ['고효율 에어컨', '단열 시공', '창호·바닥 공사', '보일러 교체', '최대 330만 원', '최대 1,100만 원'],
      table: {
        headers: ['구분', '지원 내용', '지원 한도'],
        rows: [
          ['냉방 (가구)', '고효율 벽걸이 에어컨 보급·설치', '가구당 최대 330만 원 이내'],
          ['난방 (가구)', '단열·창호·바닥공사, 고효율 보일러 교체', '가구당 최대 330만 원 이내'],
          ['시설 (사회복지시설)', '냉·난방 시공 및 설비 지원', '시설당 최대 1,100만 원 이내'],
        ],
      },
      sourceNote: '한국에너지재단 공식 홈페이지 (koref.or.kr)',
    },
    {
      anchor: 'schedule',
      act: { cue: '연 단위로 진행돼 시기를 놓치면 다음 해로 밀립니다. 접수 시기를 확인하세요.', label: '신청 시기 확인하기', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001128' },
      question: '신청 시기와 지원 일정은 어떻게 되나요?',
      intro: '냉방 지원과 난방 지원은 일정이 다릅니다. 냉방은 상반기(2~4월 추천), 난방은 연중(2~10월 추천)으로 진행됩니다. 2025년부터 한 장의 신청서로 냉방·난방 동시 신청이 가능합니다. 지원 주기는 연 단위입니다. 해마다 예산 범위 안에서 대상을 선정해 시공하는 구조여서, 신청 시기를 놓치면 그해에는 받을 수 없고 다음 해를 기다려야 합니다. 또 한 번 지원받은 가구는 2년이 지나야 다시 신청할 수 있으므로, 이전에 받은 적이 있다면 경과 기간을 먼저 따져봐야 합니다.',
      highlights: ['냉방 추천: 2~4월', '난방 추천: 2~10월', '에어컨 지원: 4~6월', '보일러 시공: 4~11월'],
      table: {
        headers: ['구분', '사업 대상 추천', '방문조사·승인', '시공·물품 지원', '현장점검·정산'],
        rows: [
          ['냉방 지원', '2~4월 (기초지자체)', '3~5월', '4~6월 (에어컨 지원)', '6~9월'],
          ['난방 지원', '2~10월 (기초지자체)', '3~10월', '4~11월 (단열·보일러)', '8~12월'],
        ],
      },
      sourceNote: '한국에너지재단 공식 홈페이지 (koref.or.kr)',
    },
    {
      anchor: 'apply',
      act: { cue: '신청은 복지로나 주소지 행정복지센터에서 받습니다. 대상이면 바로 접수하세요.', label: '복지로에서 신청 접수하기', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52005M.do' },
      question: '어떻게 신청하나요?',
      intro: '본인이 직접 읍·면·동 주민센터(행정복지센터)에 방문하여 신청합니다. 직접 신청이 어려운 복지 사각지대 가구는 기초지자체(행정복지센터)의 추천을 통해 지원받을 수 있습니다. 사회복지시설은 해당 지역 기초지자체를 통해 추천을 신청합니다. 신청은 주소지 읍면동 행정복지센터나 복지로를 통해 접수합니다. 대상 여부가 애매하더라도 기초지자체 추천으로 복지사각지대 가구가 포함될 수 있으므로, 본인이 기초수급이나 차상위가 아니더라도 상담을 받아보는 편이 낫습니다. 사회복지시설도 신청 대상에 포함됩니다.',
      highlights: ['읍·면·동 주민센터', '행정복지센터', '냉방·난방 신청서 통합', '기초지자체 추천'],
      box: {
        title: '신청 방법',
        items: [
          '① 본인 또는 가구원이 읍·면·동 주민센터(행정복지센터) 방문',
          '② 냉방·난방 통합 신청서 작성 (2025년부터 한 장으로 통합)',
          '③ 기초지자체 검토 후 한국에너지재단에 사업 대상 추천',
          '④ 시공업체 방문조사 → 지원 내역 승인 → 시공·물품 지원',
          '⑤ 현장점검 및 정산 완료',
        ],
      },
      sourceNote: 'K-공감 저소득층 에너지 효율 개선사업 (gonggam.korea.kr)',
    },
    {
      anchor: 'contact',
      act: { cue: '궁금한 점은 전담 콜센터가 빠릅니다. 1670-7653으로 연결됩니다.', label: '문의처 확인하기', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001128' },
      question: '문의는 어디에 하나요?',
      intro: '저소득층 에너지효율개선사업에 관한 상담 및 문의는 전담 콜센터와 한국에너지재단을 통해 받을 수 있습니다. 지역 담당자 연결이 필요하면 주소지 읍·면·동 주민센터를 통해서도 안내받을 수 있습니다. 사업 전용 상담 창구가 따로 있습니다. 1670-7653으로 연결하면 대상 여부와 신청 절차, 시공 일정을 안내받을 수 있습니다. 복지로 서비스 안내에도 이 번호가 문의처로 등록돼 있으며, 복지 전반에 대한 상담은 보건복지상담센터 129를 이용할 수 있습니다.',
      highlights: ['콜센터 1670-7653', '한국에너지재단', '읍·면·동 주민센터'],
      box: {
        title: '문의처',
        items: [
          '저소득층 에너지효율개선사업 콜센터: ☎ 1670-7653',
          '한국에너지재단 홈페이지: https://www.energy.or.kr',
          '냉난방 효율개선 지원안내센터: https://min24.energy.or.kr',
          '주소지 읍·면·동 주민센터(행정복지센터)',
        ],
      },
      sourceNote: 'K-공감 저소득층 에너지 효율 개선사업 (gonggam.korea.kr)',
    },
    {
      anchor: 'law',
      act: { cue: '한 번 지원받으면 2년이 지나야 다시 됩니다. 제외 조건을 먼저 확인하세요.', label: '지원 제외 조건 확인하기', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001128' },
      question: '이 사업의 법적 근거는 무엇인가요?',
      intro: '저소득층 에너지 효율 개선사업은 「에너지법」에 근거하여 정부가 시행하는 공식 사업입니다. 사업시행자는 한국에너지재단(☎ 1670-7653)이며, 기후에너지환경부 지침에 따라 운영됩니다. 지원 제외 기준이 명확하게 정해져 있습니다. 첫째, 주거급여법 제8조에 따른 수선유지비 지급 대상 가구는 제외됩니다. 둘째, 공공임대주택 가구도 제외되지만 기존주택 전세임대주택은 예외로 지원됩니다. 셋째, 이 사업을 지원받은 지 2년이 경과하지 않은 가구는 다시 신청할 수 없습니다.',
      highlights: ['에너지법 제16조의2', '에너지법 제16조의5', '한국에너지재단'],
      box: {
        title: '법적 근거 및 시행기관',
        items: [
          '근거 법령: 「에너지법」 제16조의2 (에너지효율개선 지원) · 제16조의5',
          '주관 기관: 기후에너지환경부',
          '사업시행자: 한국에너지재단 (☎ 1670-7653)',
        ],
      },
      sourceNote: '한국에너지재단 공식 홈페이지 (koref.or.kr)',
    },
    {
      anchor: 'tip',
      act: { cue: '공공임대는 원칙적으로 제외되지만 기존주택 전세임대는 됩니다. 내 주거 형태를 확인해 보세요.', label: '주거형태별 가능 여부 조회하기', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001128' },
      question: '지원받을 때 알아두면 좋은 점이 있나요?',
      intro: '이 사업은 현물(시공·물품) 지원이라 현금으로 직접 지급되지 않으며, 시공업체가 방문하여 직접 시공합니다. 에너지바우처·EERS 취약계층 가스보일러 지원 등 다른 에너지 지원 사업과 중복 신청 여부를 사전에 확인하는 것이 좋습니다. 신청 전에 확인해 둘 것이 있습니다. 내가 사는 집이 공공임대인지 기존주택 전세임대인지에 따라 지원 여부가 갈리고, 주거급여 수선유지비를 받고 있다면 이 사업과 중복되지 않습니다. 두 제도 중 어느 쪽이 내 상황에 맞는지 먼저 확인한 뒤 신청하는 것이 효율적입니다.',
      highlights: ['현물 지원', '시공업체 방문 시공', '중복 신청 주의', '2년 재신청 제한'],
      box: {
        title: '꼭 알아두세요',
        items: [
          '현금이 아닌 시공·물품 현물 지원 방식입니다.',
          '이전 지원 이후 2년이 경과하지 않으면 재신청이 불가합니다.',
          '공공임대주택 거주자는 원칙적으로 제외되나, 기존 주택전세임대 입주자는 신청 가능합니다.',
          '에너지바우처, EERS 가스보일러 지원 등 유사 사업과 중복 여부를 사전 확인하세요.',
          '냉방·난방 신청서가 2025년부터 통합되어 한 장으로 동시 신청 가능합니다.',
        ],
      },
      sourceNote: 'K-공감 저소득층 에너지 효율 개선사업 / 한국에너지재단',
    },
  ],

  eligibility: [
    '기초생활수급가구 (생계·의료·주거·교육급여 수급자)',
    '차상위계층 가구',
    '기초지자체 추천을 받은 복지 사각지대 가구',
    '지역아동센터 등 사회복지시설',
  ],

  faq: [
    {
      q: '에너지바우처와 중복으로 받을 수 있나요?',
      a: '저소득층 에너지 효율 개선사업은 에너지바우처(현금성 바우처)와 별도의 사업입니다. 두 사업의 중복 수혜 가능 여부는 담당 기관(콜센터 ☎1670-7653 또는 주민센터)에 문의하여 확인하세요.',
      source: '한국에너지재단',
      sourceUrl: 'https://www.koref.or.kr/web/user/main.do',
    },
    {
      q: '공공임대주택에 살고 있는데 신청할 수 있나요?',
      a: '일반 공공임대주택 가구는 지원 대상에서 제외됩니다. 다만 기존 주택전세임대주택(전세임대) 입주자는 신청 가능합니다.',
      source: 'K-공감 저소득층 에너지 효율 개선사업',
      sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=4dbe147f-f1c6-49f1-9939-08b92500e0ab',
    },
    {
      q: '2년 전에 지원받았는데 다시 신청할 수 있나요?',
      a: '동 사업을 지원받은 날로부터 2년이 경과한 이후 재신청이 가능합니다. 2년이 경과하지 않은 경우에는 지원 제외 대상에 해당합니다.',
      source: 'K-공감 저소득층 에너지 효율 개선사업',
      sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=4dbe147f-f1c6-49f1-9939-08b92500e0ab',
    },
    {
      q: '냉방 에어컨과 난방 보일러를 동시에 신청할 수 있나요?',
      a: '네, 가능합니다. 2025년부터 냉방·난방 신청서가 하나로 통합되어 한 번의 신청으로 두 가지 모두 신청할 수 있습니다.',
      source: 'K-공감 저소득층 에너지 효율 개선사업',
      sourceUrl: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=4dbe147f-f1c6-49f1-9939-08b92500e0ab',
    },
    {
      q: '사회복지시설도 신청할 수 있나요?',
      a: '네, 지역아동센터 등 사회복지시설도 지원 대상입니다. 시설당 최대 1,100만 원까지 지원받을 수 있으며, 기초지자체 추천을 통해 신청합니다.',
      source: '한국에너지재단 냉난방 효율개선 지원안내센터',
      sourceUrl: 'https://www.koref.or.kr/web/user/main.do',
    },
  ],

  sources: [
    {
      label: 'K-공감 저소득층 에너지 효율 개선사업',
      url: 'https://gonggam.korea.kr/newsContentView.es?mid=a12504000000&section_id=NCCD_HOPECONT_003&content=NC002&code_cd=0123000000&nPage=2&b_list=9&news_id=4dbe147f-f1c6-49f1-9939-08b92500e0ab',
      publishedAt: '2026-03-03',
    },
    {
      label: '한국에너지재단 공식 홈페이지 (koref.or.kr)',
      url: 'https://www.koref.or.kr/web/user/main.do',
      publishedAt: '2026-05-16',
    },
    {
      label: '복지로 복지서비스 상세 — 저소득층에너지효율개선',
      url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001128&wlfareInfoReldBztpCd=01',
      publishedAt: '2026-05-16',
    },
  ],
};

export const lowIncomeEnergyEfficiencySpokes: SpokeData[] = [
  {
    slug: 'target',
    role: 'target',
    title: '저소득층 에너지 효율 개선사업 지원 대상 — 기초수급자·차상위 확인',
    content:
      '기초생활수급가구, 차상위계층, 복지 사각지대(기초지자체 추천), 사회복지시설이 지원 대상입니다. 공공임대주택 가구 및 최근 2년 내 지원 이력이 있는 가구는 제외됩니다.',
  },
  {
    slug: 'benefit',
    role: 'benefit',
    title: '저소득층 에너지 효율 개선사업 지원 내용 — 에어컨·보일러·단열 무상 교체',
    content:
      '냉방은 고효율 에어컨 보급·설치, 난방은 단열·창호·바닥공사 및 고효율 보일러 교체를 지원합니다. 가구당 최대 330만 원, 사회복지시설은 최대 1,100만 원까지 무상 지원합니다.',
  },
  {
    slug: 'apply',
    role: 'apply',
    title: '저소득층 에너지 효율 개선사업 신청 방법 — 주민센터 방문 신청',
    content:
      '읍·면·동 주민센터(행정복지센터)에 방문하여 신청합니다. 2025년부터 냉방·난방 신청서가 통합되어 한 번에 신청 가능합니다. 문의: ☎1670-7653.',
  },
  {
    slug: 'schedule',
    role: 'schedule',
    title: '저소득층 에너지 효율 개선사업 지원 일정 — 냉방 2~6월·난방 2~11월',
    content:
      '냉방 지원은 2~4월 추천·4~6월 에어컨 설치, 난방 지원은 2~10월 추천·4~11월 시공 일정으로 진행됩니다.',
  },
  {
    slug: 'tip',
    role: 'tip',
    title: '저소득층 에너지 효율 개선사업 유의사항 — 2년 재신청·중복 확인',
    content:
      '현물(시공·물품) 지원 방식이며, 이전 지원 이후 2년 미경과 시 재신청이 불가합니다. 에너지바우처 등 다른 지원사업과 중복 여부를 사전에 확인하세요.',
  },
];
