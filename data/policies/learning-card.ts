/* 국민내일배움카드 (2026)
 * 추출본: scripts/output/source-learning-card-operating-rule.txt
 * 1차 출처: 국가법령정보센터 — 국민내일배움카드 운영규정 (2026 고시)
 *   https://www.law.go.kr/LSW/admRulInfoP.do?admRulSeq=2100000279150
 * 추출본: scripts/output/source-learning-card-law-tables.txt (별표 4 지원율·제49조 장려금 표 캡처 + 훈련검색 실측)
 * 추출본: scripts/output/source-learning-card-issue-guide.txt (고용24 발급안내)
 * 추출본: scripts/output/source-learning-card-policy-info.txt (고용24 제도안내)
 * 2026-09-18 전면 대조: 만 15~64세·만 65세 이상 제외·14일 이내 발급 통보·계층별 자부담표·
 *   월 최대 11만 6천원·훈련과정 2만 건은 2026 고시와 맞지 않아 전부 교체했다.
 */

export const learningcardPolicy = {
  id: '5',
  type: 'training' as const,
  title: '국민내일배움카드 신청자격과 자기부담금, 수강 가능한 훈련과정',
  titleKeywords: {
      "k1": "국민내일배움카드"
  },

  slug: 'learning-card',
  org: '고용노동부',
  cat: '지원금',
  catSlug: 'fund',
  amount: '5년간 300~500만원 + 자기부담 15~55%',
  deadline: '발급일로부터 5년',
  views: 412800,
  applyUrl: 'https://www.work24.go.kr/hr/h/a/1100/selectIssueRequest.do',
  ctaLabel: '국민내일배움카드 발급 신청하기',
  datePublished: '2026-01-01T09:00:00+09:00',
  dateModified: '2026-05-23T09:00:00+09:00',
  summary:
    '재직자·실업자·자영업자 모두 신청 가능한 직업훈련 지원 카드. 5년간 300~500만원 한도 내에서 정부 인정 훈련과정의 훈련비를 지원하며, 일반훈련생 기준 지원율은 직종평균 취업률에 따라 45~85%입니다.',
  metaDescription: '국민내일배움카드 신청자격과 자기부담금, 수강 가능한 훈련과정 – 5년간 300~500만원, 일반훈련생 자기부담 15~55%. 재직자·실업자·자영업자 모두 신청할 수 있고, 지원율은 별표 4의 직종평균 취업률 구간에 따라 갈립니다.',
  audience: '재직자·실업자·자영업자 (지원제외 대상만 제외)',

  keyFacts: {
    지원유형: '훈련비 바우처 (계좌 적립)',
    지원대상: '재직자·실업자·자영업자 (만 75세 이상 등 지원제외 대상 제외)',
    지원금액: '5년간 300~500만원',
    훈련비지원율: '일반훈련생 45~85% (국민취업지원제도 Ⅰ유형 100%)',
    자기부담: '일반훈련생 15~55%',
    유효기간: '발급일로부터 5년',
    신청방법: '고용24 온라인 또는 고용센터 방문',
    훈련장려금: '출석률 80% 이상일 때 1일 2,500~18,000원',
    문의: '고용노동부 1350',
  },
  keyFactsHighlights: {
    지원금액: ['300만원', '500만원'],
    훈련비지원율: ['45~85%', '100%'],
    자기부담: ['15~55%'],
    유효기간: ['5년'],
    훈련장려금: ['1일 2,500~18,000원'],
  },

  qa: [
    {
      q: '국민내일배움카드는 얼마를 지원받나요?',
      anchor: 'q-amount',
      act: { cue: '5년 동안 300만원에 200만원이 더 붙는 구조라 한도가 사람마다 다릅니다. 내 지원액이 얼마인지부터 확인하는 게 순서입니다.', label: '내 훈련비 지원액 확인하기', url: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=9&upprSystClId=&systClId=SC00000004&systId=SI00000351' },
      intro: '국민내일배움카드는 발급일로부터 5년간 기본 300만원, 최대 500만원까지 훈련비를 지원받을 수 있는 직업훈련 계좌제도입니다. 일반 대상자는 300만원이 기본이며, 저소득층·기초생활수급자·국가유공자·한부모 등 추가지원 대상에 해당하면 200만원이 더 적립되어 최대 500만원까지 한도가 늘어납니다. 5년 동안 여러 과정을 자유롭게 수강할 수 있습니다. 고용24 제도안내는 이 카드를 취업이나 직무수행에 필요한 교육·훈련 비용을 5년간 300만원에서 500만원까지 지원하는 카드로 설명합니다. 훈련비 지원액은 5년간 300만원을 기본으로 하고 여기에 200만원이 추가로 붙는 구조이며, 구체적인 금액은 훈련의 종류와 취업률, 소득수준에 따라 달라집니다.',
      highlights: ['5년간', '기본 300만원', '최대 500만원', '추가지원 200만원'],
      table: {
        caption: '대상별 지원한도 (2026년)',
        headers: ['구분', '한도', '비고'],
        rows: [
          ['일반 대상자', '300만원', '재직자·실업자·자영업자 공통'],
          ['추가지원 대상', '500만원', '저소득·한부모·국가유공자 등'],
          ['취약계층', '500만원 + 자부담 면제', '기초수급자·차상위'],
        ],
      },
      box: {
        label: '한도 적용',
        content:
          '5년 한도는 누적 사용 기준입니다. 한 과정을 마치고 남은 잔액으로 다른 과정 수강 가능합니다.',
      },
      sourceNote: '* 출처: 고용노동부 · 정부24',
    },
    {
      q: '누가 신청할 수 있나요?',
      anchor: 'q-eligibility',
      act: { cue: '제외 대상만 아니면 대부분 발급됩니다. 내가 걸리는 항목이 있는지 지원자격에서 대조해 보세요.', label: '지원자격 대조하기', url: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=9&upprSystClId=&systClId=SC00000004&systId=SI00000351' },
      intro: '나이로 자르는 하한이 없습니다. 운영규정 제4조제2항은 지원제외 대상을 열거하는 방식이고, 나이로 걸리는 항목은 만 75세 이상 하나입니다. 그래서 재직자와 실업자, 자영업자, 특수형태근로종사자가 폭넓게 신청할 수 있습니다. 제외되는 쪽을 보시는 편이 빠릅니다. 공무원연금법과 사립학교교직원 연금법을 적용받고 재직 중인 사람, 군인연금법에 따른 군인으로 재직 중인 사람, 출입국관리법상 외국인, 지원·융자·수강 제한 기간이 끝나지 않은 사람, 부정행위로 반환 명령을 받고 납부하지 않은 사람, 중앙행정기관이나 지방자치단체에서 훈련비를 지원받는 훈련에 참여하는 사람이 여기 들어갑니다. 재직자는 사업주 동의 없이 본인이 직접 신청합니다. 판단 시점은 제4조제5항에 따라 신청일 기준입니다.',
      highlights: ['나이 하한 없음', '만 75세 이상 제외', '재직자·실업자', '공무원 제외'],
      box: {
        label: '신청 가능 (포함)',
        content:
          '· 재직자 (사업주 동의 불필요)\n· 실업자·구직자\n· 자영업자·특수형태근로종사자\n· 농·임·어업인\n· 결혼이민자',
      },
      box2: {
        label: '제외 대상',
        content:
          '· 공무원·사립학교 교직원 (재직 중)\n· 만 75세 이상\n· 외국인 (고용보험 피보험자 등 예외)\n· 군인연금법상 군인 (재직 중)\n· 부정행위 반환 명령 미이행',
      },
      sourceNote: '* 출처: 고용노동부 work24.go.kr',
    },
    {
      q: '어떻게 신청하나요?',
      anchor: 'q-apply',
      act: { cue: '일자리가 없는 상태라면 카드 신청 전에 구직신청부터 해야 합니다. 순서가 어긋나면 발급이 막힙니다.', label: '구직신청 먼저 접수하기', url: 'https://www.work24.go.kr/wk/a/b/2100/resumeMngMain.do' },
      intro: '온라인과 방문 두 갈래입니다. 고용24에서 신청하거나 거주지 또는 소속 사업장을 관할하는 지방고용노동관서에 직접 내면 됩니다. 결과를 언제 받는지는 규정에 못 박혀 있습니다. 제7조제1항은 신청서를 접수한 지방고용노동관서의 장이 접수일로부터 7일 이내에 계좌발급 여부를 HRD-Net 또는 서면으로 알려주어야 한다고 정했고, 발급하지 않기로 했다면 별지 제5호서식 계좌 미발급 통지서로 문서로 알립니다. 상담이 먼저 붙는 경우도 있습니다. 제8조제1항은 총 훈련시간이 140시간 이상인 과정을 들으려는 사람과 국민취업지원제도 참여자 등은 훈련 진단·상담을 거친 뒤 수강 신청하도록 했고, 제9조제1항은 그 상담을 14일 이내에 실시하도록 했습니다. 카드 발급과 수강 신청은 성격이 다른 단계라 나눠서 보셔야 합니다.',
      highlights: ['고용24', '고용센터', '7일 이내 통지', '140시간 이상은 상담 먼저'],
      box: {
        label: '온라인 신청',
        content:
          '고용24 회원가입 → 국민내일배움카드 신청 → 접수일로부터 7일 이내 발급 여부 통지 (HRD-Net 또는 서면)',
      },
      box2: {
        label: '방문 신청',
        content:
          '관할 지방고용노동관서 방문 → 신청서·동의서·권리의무 확인서 제출 → 접수일로부터 7일 이내 발급 여부 통지',
      },
      hasApplyMethodTabs: true,
      sourceNote: '* 출처: 고용24 안내',
    },
    {
      q: '자기부담금은 얼마인가요?',
      anchor: 'q-self-cost',
      act: { cue: '자기부담금은 훈련 종류와 소득에 따라 갈립니다. 듣고 싶은 과정의 부담률을 보고 고르는 편이 낫습니다.', label: '과정별 자기부담률 확인하기', url: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=9&upprSystClId=&systClId=SC00000004&systId=SI00000351' },
      intro: '지원율을 정하는 건 두 가지입니다. 하나는 내가 어느 대상에 속하는지, 다른 하나는 그 직종의 3년 평균 취업률이 어느 구간에 들어가는지입니다. 별표 4를 보면 일반훈련생은 직종평균 취업률 70% 이상이면 85%, 40% 미만이면 45%를 지원받습니다. 자기부담은 그 나머지라 15%에서 55% 사이가 됩니다. 근로장려금 수급자는 같은 구간에서 92.5%부터 72.5%까지 올라가고, 국민취업지원제도 Ⅰ유형과 Ⅱ유형 중 특정 계층은 구간과 관계없이 100%입니다. 기초생활수급자와 차상위계층, 한부모가족, 장애인, 자립준비청년 등은 별표 4의 특례로 이 100% 지원율을 준용합니다. 과정 성격에 따라 따로 정해진 비율도 있습니다. 돌봄서비스 훈련은 10%, 외국어와 법정직무 과정은 50%, K-디지털 크레딧은 90%입니다. 국가기간·전략산업직종 훈련처럼 제46조제2항에 해당하는 과정은 훈련비의 90% 이상을 지원하고 훈련생이 부담하는 금액은 최대 60만원으로 묶습니다.',
      highlights: ['직종평균 취업률로 갈림', '일반훈련생 45~85%', '국취 Ⅰ유형 100%', '본인부담 최대 60만원'],
      table: {
        caption: '대상별 훈련비 지원율 (별표 4, 2026. 1. 1. 개정)',
        headers: ['대상', '직종평균 취업률 70% 이상', '직종평균 취업률 40% 미만'],
        rows: [
          ['일반훈련생', '85%', '45%'],
          ['근로장려금 수급자', '92.5%', '72.5%'],
          ['국민취업지원제도 Ⅱ유형 중 청년·중장년', '85%', '50%'],
          ['국민취업지원제도 Ⅰ유형·Ⅱ유형 중 특정 계층', '100%', '100%'],
        ],
      },
      box: {
        label: '실업자 훈련장려금',
        content:
          '단위기간 출석률이 80% 이상이면 훈련장려금이 별도로 나옵니다. 1일 소정훈련시간이 5시간 이상이고 국가기간·전략산업직종 훈련이라면 출석일수에 1만원을 곱하고 월 20만원까지 지원합니다.',
      },
      sourceNote: '* 출처: 고용노동부 · 고용24',
    },
    {
      q: '어떤 훈련과정을 수강할 수 있나요?',
      anchor: 'q-training',
      act: { cue: '검색어 하나로도 수백에서 천 단위 과정이 걸립니다. 분야와 지역으로 좁혀야 고를 수 있습니다.', label: '훈련과정 검색하기', url: 'https://www.work24.go.kr/hr/a/a/1100/trnnCrsInf0.do?redirectUrl=%2Fa%2Fa%2F1100%2FtrnnCrsInf0Post.do&action=trnnCrsInf0Post.do&searchYn=Y' },
      intro: '고용노동부가 사전 적합 인정한 훈련과정만 카드로 수강할 수 있습니다. 직무능력 향상, 자격증 취득, 신기술(IT·AI·반도체), 외국어, 디지털 콘텐츠, 서비스업 등 다양한 분야가 포함되며, 고용24에서 「내일배움카드 적합과정」 검색으로 확인 가능합니다. 운전면허·취미 과정은 지원 대상에서 제외됩니다. 규모는 검색해 보면 바로 느껴집니다. 2026년 9월 18일 기준으로 컴퓨터활용능력은 1,561건, 제과제빵은 916건, 요양보호사는 758건이 열려 있었습니다. 국가기간·전략산업직종 훈련은 금속·기계·전기·전자 분야를, K-디지털 트레이닝은 AI·반도체 등 첨단산업 분야를, K-디지털 기초역량훈련은 IT 입문을 원격으로 다룹니다. 일반직종 훈련에는 디자인·법무·전산·세무회계·간호 같은 분야가 있습니다.',
      highlights: ['적합훈련 인정과정', '국가기간·전략산업', 'IT·AI', '운전면허 제외'],
      table: {
        caption: '주요 훈련 분야',
        headers: ['분야', '예시', '특이사항'],
        rows: [
          ['디지털·IT', 'AI·빅데이터·웹개발', '국가기간 90% 이상 지원'],
          ['전략산업', '반도체·바이오·이차전지', '국가기간 90% 이상 지원'],
          ['자격증', '회계·공인노무사·사회복지사', '일반 자부담 적용'],
          ['외국어', '영어·중국어·일본어', '일반 자부담 적용'],
          ['제외', '운전면허·취미·여가', '카드 사용 불가'],
        ],
      },
      sourceNote: '* 출처: 고용24 적합과정 안내',
    },
    {
      q: '실업급여와 중복으로 받을 수 있나요?',
      anchor: 'q-overlap',
      act: { cue: '실업급여를 받는 중에도 훈련을 병행할 수 있습니다. 조건이 맞는지 제도안내에서 대조해 보세요.', label: '중복 수급 조건 대조하기', url: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=9&upprSystClId=&systClId=SC00000004&systId=SI00000351' },
      intro: '국민내일배움카드와 실업급여는 별개 제도로 동시에 받을 수 있습니다. 실업급여 수급 중에도 카드를 발급받아 훈련을 받을 수 있으며, 적극적 구직활동의 일환으로 인정되어 실업인정에도 유리합니다. 다만 동일 훈련에 대해 다른 정부 지원(K-디지털 트레이닝 등)을 중복 수령할 수는 없습니다. 실업급여를 받는 기간에도 훈련을 병행할 수 있습니다. 다만 실업인정과 훈련 일정이 맞물리므로 담당 고용센터에 훈련 수강 사실을 알리고 진행해야 합니다. 훈련을 듣는다는 이유만으로 실업급여가 끊기는 것은 아니지만, 재취업활동 인정 방식이 달라질 수 있어 사전에 확인하는 편이 안전합니다.',
      highlights: ['실업급여 중복 가능', '구직활동 인정', 'K-디지털 중복 불가'],
      box: {
        label: '실업급여 + 내일배움카드 동시 수령',
        content:
          '실업급여 수급 기간 중 카드로 훈련 수강 시 구직활동으로 인정되어 실업급여 수급에 도움이 됩니다.',
      },
      box2: {
        label: '주의',
        content:
          '동일 과정에 대해 K-디지털 트레이닝·국가기간전략산업훈련 등 별도 정부지원사업과 중복 신청은 불가합니다.',
      },
      sourceNote: '* 출처: 고용노동부',
    },
    {
      q: '5년이 지나면 어떻게 되나요?',
      anchor: 'q-expire',
      act: { cue: '유효기간이 지나면 남은 한도도 사라집니다. 아직 안 썼다면 지금 발급받아 두는 편이 낫습니다.', label: '지금 카드 발급 신청하기', url: 'https://www.work24.go.kr/hr/h/a/1100/selectIssueRequest.do' },
      intro: '카드 발급일로부터 5년이 지나면 잔여 지원금은 자동 소멸됩니다. 5년 경과 후 재신청을 통해 카드를 다시 발급받을 수 있으며, 재발급 시에도 동일하게 5년간 300~500만원 한도가 적용됩니다. 단, 부정수급 등으로 제재를 받은 경우 일정 기간 재발급이 제한될 수 있습니다. 카드에는 유효기간이 있고 그 기간이 지나면 남아 있던 한도도 함께 사라집니다. 5년이라는 기간은 길어 보이지만 훈련을 미루다 보면 한도를 다 쓰지 못한 채 만료되기도 합니다. 아직 발급받지 않았다면 당장 들을 과정이 없더라도 미리 발급해 두는 편이 유리합니다.',
      highlights: ['5년 경과 시 소멸', '재발급 가능', '재발급 시 동일 한도'],
      table: {
        caption: '카드 사용 시점별 가능 여부',
        headers: ['시점', '훈련 신청', '잔여금'],
        rows: [
          ['발급 ~ 5년 내', '○ 자유', '한도 내 사용 가능'],
          ['5년 경과', '× 불가', '소멸 (환급 불가)'],
          ['재발급 후', '○ 가능', '새 300~500만원'],
        ],
      },
      box: {
        label: '재발급',
        content:
          '5년 경과 후 같은 절차로 재신청 가능. 부정수급 제재자는 일정 기간 재발급 제한.',
      },
      sourceNote: '* 출처: 고용노동부 · 고용24',
    },
  ],

  details: [],
  eligibility: [],
  incomeTable: [],
  applySteps: [],
  applyMethodTabs: {},
  documents: [],
  related: [
    { id: '1', title: '청년미래적금', cat: '지원금' },
    { id: '4', title: '첫만남 이용권', cat: '지원금' },
  ],

  faq: [
    {
      q: '재직자도 사업주 동의 없이 신청할 수 있나요?',
      a: '네. 재직자는 사업주 동의 없이 본인이 직접 고용24에서 신청 가능합니다. 다만 훈련은 근무시간 외에 진행해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=9&upprSystClId=&systClId=SC00000004&systId=SI00000351',
    },
    {
      q: '5년 한도 300만원을 다 쓰면 추가로 받을 수 없나요?',
      a: '추가지원 대상(저소득·한부모·국가유공자 등)이라면 200만원이 추가 적립되어 500만원까지 사용 가능합니다. 5년 경과 후 재발급 시 새로운 한도가 부여됩니다.',
      source: '정부24',
      sourceUrl: 'https://www.gov.kr/portal/rcvfvrSvc/dtlEx/149200000026',
    },
    {
      q: '실업급여와 동시에 받아도 되나요?',
      a: '네. 별개 제도로 동시 수령 가능하며, 카드로 훈련 수강 시 구직활동으로 인정되어 실업급여 수급에 유리합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=9&upprSystClId=&systClId=SC00000004&systId=SI00000351',
    },
    {
      q: '운전면허 학원은 지원되나요?',
      a: '아니요. 운전면허·취미·여가 과정은 카드 사용이 불가합니다. 직업능력향상과 직접 관련된 적합과정만 지원됩니다.',
      source: '고용24',
      sourceUrl: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=9&upprSystClId=&systClId=SC00000004&systId=SI00000351',
    },
    {
      q: '훈련장려금은 어떻게 받나요?',
      a: '단위기간 출석률이 80% 이상이어야 합니다. 금액은 1일 소정훈련시간과 과정 종류로 갈립니다. 5시간 이상이면 국가기간·전략산업직종 등은 출석일수에 1만원을 곱해 월 20만원까지, 일반계좌제훈련 등은 5,800원을 곱해 월 11만 6천원까지 지원합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=9&upprSystClId=&systClId=SC00000004&systId=SI00000351',
    },
  ],

  sources: [
    { label: '정부24 「국민내일배움카드 신청하기」', url: 'https://www.gov.kr/portal/rcvfvrSvc/dtlEx/149200000026' },
    { label: '고용24 (구 HRD-Net)', url: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?currentPageNo=1&recordCountPerPage=9&upprSystClId=&systClId=SC00000004&systId=SI00000351' },
    { label: '고용노동부 고용정책', url: 'https://m.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000351' },
    { label: '대한민국 정책브리핑', url: 'https://www.korea.kr/news/reporterView.do?newsId=148958943' },
  ],
};

export const learningcardSpokes = [
  { slug: 'learning-card-after-completion', role: 'howto', title: '내일배움카드 수료 후 취업 연계와 지원, 취업률 확인과 다음 과정 신청' },
  { slug: 'learning-card-issue-certificate', role: 'howto', title: '내일배움카드 발급확인서 발급과 출력 방법, 신청 내역 조회와 제출처' },
  { slug: 'learning-card-apply-error', role: 'caution', title: '내일배움카드 신청 오류와 선처리 실패, 전산 상담과 고용센터 문의' },
  { slug: 'learning-card-retake', role: 'caution', title: '내일배움카드 재수강과 동일 과정 재참여, 수료 이력이 있어도 되나요' },
  { slug: 'learning-card-lost-reissue', role: 'caution', title: '내일배움카드 분실 신고와 재발급 신청, 카드사 재전송과 명의 확인' },
  { slug: 'learning-card-expiry-renewal', role: 'period', title: '내일배움카드 유효기간과 만료 확인, 남은 금액 소멸과 갱신 신청' },
  { slug: 'learning-card-kua-link', role: 'overlap', title: '국민취업지원제도와 내일배움카드 신청 순서, 1유형 훈련과 장려금 차이' },
  { slug: 'learning-card-unemployment-benefit', role: 'overlap', title: '실업급여 중 내일배움카드 신청과 구직활동 인정, 장려금과 수급 연장' },
  { slug: 'learning-card-university-student', role: 'target', title: '대학생 내일배움카드 신청과 수업연한, 휴학생과 복학해도 되나요' },
  { slug: 'learning-card-after-resignation', role: 'apply', title: '퇴사 후 내일배움카드 신청과 상실신고, 퇴직증명서와 유형 변경' },
  { slug: 'learning-card-part-time-job', role: 'overlap', title: '내일배움카드 알바 병행과 훈련 중 근무, 단기 알바와 고용보험 가입' },
  { slug: 'learning-card-employed-worker', role: 'target', title: '재직자 내일배움카드 신청과 근로시간 기준, 근로계약서와 재직 확인' },
  { slug: 'learning-card-allowance-payment', role: 'benefit', title: '내일배움카드 훈련장려금 신청과 지급 조건, 지급일과 출석 연동' },
  { slug: 'learning-card-sick-leave', role: 'caution', title: '내일배움카드 병결 처리와 진료확인서 제출, 출결 인정과 장려금' },
  { slug: 'learning-card-attendance-rule', role: 'caution', title: '내일배움카드 출석률 기준과 지각 조퇴 처리, 결석 시 패널티' },
  { slug: 'learning-card-online-course', role: 'usage', title: '내일배움카드 온라인 인강과 원격 과정, 컴활과 토익 학원도 되나요' },
  { slug: 'learning-card-certificate-course', role: 'usage', title: '내일배움카드 자격증 과정과 학원 등록, 지게차와 요양보호사도 되나요' },
  { slug: 'learning-card-course-choice', role: 'usage', title: '내일배움카드 훈련과정 고르기와 인기 과정, K디지털트레이닝과 국기훈련' },
  { slug: 'learning-card-course-apply', role: 'apply', title: '내일배움카드 수강 신청과 개강 준비, 승인 문자와 취소도 되나요' },
  { slug: 'learning-card-refund-dropout', role: 'caution', title: '내일배움카드 환급 조건과 자부담금 환불, 학원 중단과 중도 포기 불이익' },
  { slug: 'learning-card-self-payment', role: 'cost', title: '내일배움카드 자기부담금 계산과 결제 방법, 학원 결제와 잔액 부족' },
  { slug: 'learning-card-support-limit', role: 'amount', title: '내일배움카드 지원 한도와 추가 지원금, 유형별 차이와 사용 내역 조회' },
  { slug: 'learning-card-account-balance', role: 'usage', title: '내일배움카드 훈련계좌 개설과 연결 통장, 이체 방법과 잔액 확인' },
  { slug: 'learning-card-bank-card', role: 'apply', title: '내일배움카드 농협 신한 차이와 은행 방문, 온라인 발급과 카드 수령' },
  { slug: 'learning-card-work24-apply', role: 'apply', title: '내일배움카드 고용24 신청 절차와 구직등록, 발급 심사와 승인 기간' },
  { slug: 'learning-card-issuance-eligibility', role: 'target', title: '내일배움카드 신청 자격과 발급 조건, 제외 대상과 고졸도 되나요' },
  { slug: '지원금액',    role: 'amount',  title: '내일배움카드 300만원에서 500만원까지 | 추가 지원 조건과 자기부담금 15~55%' },
  { slug: '사용처',      role: 'usage',   title: '내일배움카드 사용처 어디까지 되나 | AI·자격증·외국어 가능, 운전면허는 안 돼' },
  { slug: '재직자조건',  role: 'apply',   title: '재직자도 내일배움카드 받을 수 있나 | 공무원 제외 목록과 재직자·실업자 차이' },
  { slug: '실업급여병행', role: 'overlap', title: '실업급여 받는 중에 내일배움카드 쓰면 구직활동으로 인정되나' },
  { slug: '신청방법',    role: 'apply',   title: '내일배움카드 신청 방법과 발급, 고용24로 한 번에' },
  { slug: '유효기간',    role: 'period',  title: '내일배움카드 유효기간 5년, 만료되면 재발급 되나요' },
  { slug: '자영업자',    role: 'target',  title: '자영업자도 내일배움카드 되나, 연매출 4억 미만이면 신청' },
  { slug: '자격증',      role: 'usage',   title: '내일배움카드로 자격증 따기, 어떤 과정·학원 들을 수 있나' },
  { slug: '훈련장려금',  role: 'benefit', title: '내일배움카드 훈련장려금 월 11만6천원, 누가 얼마 받나' },
  { slug: '대상제외',    role: 'target',  title: '내일배움카드 안 되는 사람? 공무원·대학생·고소득 발급 제외' },
  { slug: '국취제',      role: 'overlap', title: '국민취업지원제도와 내일배움카드 같이 받나, 훈련 연계' },
  { slug: '자비부담',    role: 'amount',  title: '내일배움카드 자비부담 얼마? 무료 과정과 중복 수강 정리' },
  { slug: 'college-student', role: 'target', title: '내일배움카드 대학생 신청, 졸업까지 수업연한 2년 이내면 가능' },
  { slug: 'attendance-penalty', role: 'caution', title: '내일배움카드 출석률 80% 미만이면? 훈련장려금과 중도포기 패널티' },
  { slug: 'contract-worker', role: 'target', title: '계약직·기간제도 내일배움카드 되나, 200만원 추가지원 대상' },
];
