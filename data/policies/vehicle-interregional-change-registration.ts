/* 시·도간 자동차 변경등록 신청 - 국토교통부·정부24 */
export const vehicleInterregionalChangeRegistrationPolicy = {
  id: '349', type: 'service' as const,
  title: '자동차 시도간 변경등록 이사했을 때 1300원 즉시 신청하는 법',
  titleKeywords: { k1: '시도간자동차변경등록', k2: '자동차사용본거지변경', k3: '자동차등록번호판', k4: '시군구시도' },
  slug: 'vehicle-interregional-change-registration', org: '국토교통부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 1,300원', deadline: '상시 신청 가능(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328', ctaLabel: '정부24 시·도간 자동차 변경등록 신청 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '시·도간 자동차 변경등록 신청은 등록자동차의 사용본거지(주 사용지)를 다른 시·도로 옮기고자 할 때 신청하는 절차로, 자동차관리법 제11조에 근거합니다. 예를 들어 서울에 등록된 차량의 소유자가 부산으로 이사해 사용본거지가 바뀌면 이 신청을 해야 합니다. 신청 방법은 방문만 가능하며, 신청자격 제한 없이 누구나 신청할 수 있습니다. 수수료는 1,300원이며 처리기간은 즉시(근무시간 내 3시간)입니다. 제출서류는 자동차운수사업용인 경우 자동차등록증 1부, 등록번호가 변경되는 경우 자동차등록번호판 2매입니다. 주민등록표 등본 등은 행정정보공동이용을 통해 담당공무원이 확인할 수 있습니다. 접수·처리기관은 시·군·구, 시·도입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 자동차등록사업소에서 확인이 필요합니다.',
  metaDescription: '자동차 시도간 변경등록 이사했을 때 1300원 즉시 신청하는 법 – 방문만 가능, 누구나 신청, 처리 즉시(3시간).',
  audience: '다른 시·도로 이사해 등록자동차의 사용본거지를 옮겨야 하는 소유자',
  keyFacts: {
    신청방법: { value: '방문', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328', text: '신청방법', verifiedAt: '2026-07-17' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '1,300원', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '자동차등록증 1부(운수사업용만), 자동차등록번호판 2매(번호 변경 시만)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328', text: '제출 서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '자동차관리법 제11조, 자동차등록령 제25조제1항, 자동차등록규칙 제31조제1항 및 별지13', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '시·도간 자동차 변경등록이 뭔가요?', anchor: 'q-basic',
      intro: '시·도간 자동차 변경등록은 등록자동차의 사용본거지(차량을 주로 사용하는 곳)를 다른 시·도로 옮기고자 할 때 신청하는 민원사무입니다. 자동차관리법 제11조에 근거하며, 소유자가 다른 시·도로 이사하는 경우 대표적으로 필요한 절차입니다.',
      highlights: ['등록자동차의 사용본거지를 다른 시·도로 이전하는 절차', '자동차관리법 제11조 근거', '소유자의 시·도 간 이사 시 대표적으로 필요', '등록번호가 함께 바뀔 수 있음'],
      box: { label: '핵심', content: '차량의 사용본거지(주 사용지)를 다른 시·도로 옮길 때 신청하는 절차.' },
    },
    {
      q: '누가 신청할 수 있나요?', anchor: 'q-eligibility',
      intro: '신청자격에 별도 제한이 없어 누구나 신청할 수 있습니다. 다만 신청 방법이 방문만 가능하므로, 관할 시·군·구 자동차등록사업소를 직접 방문해야 합니다. 인터넷이나 우편 신청은 불가능합니다.',
      highlights: ['신청자격 제한 없음(누구나 신청 가능)', '신청 방법은 방문만 가능', '인터넷·우편 신청 불가', '관할 자동차등록사업소 직접 방문 필요'],
      box: { label: '신청자격', content: '제한 없음. 단 방문 신청만 가능(인터넷·우편 불가).' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '시·도간 변경등록 신청서(자동차등록규칙 별지 서식 13호)를 기본으로 작성합니다. 자동차운수사업용 자동차인 경우에는 자동차등록증 1부가 필요하고, 등록번호가 변경되는 경우에는 자동차등록번호판 2매를 제출해야 합니다. 주민등록표 등본·운전면허증 등 사용본거지를 확인할 수 있는 서류는 행정정보공동이용을 통해 담당공무원이 확인할 수 있습니다.',
      highlights: ['시·도간 변경등록 신청서(별지 제13호) 작성', '운수사업용은 자동차등록증 1부 제출', '등록번호 변경 시 등록번호판 2매 제출', '주민등록표 등본 등은 행정정보공동이용으로 확인'],
      box: { label: '준비서류', content: '신청서 기본 + 운수사업용이면 등록증, 번호변경 시 번호판 2매.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 1,300원입니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다. 등록번호가 변경되는 경우에는 새 번호판을 발급받아야 하므로 절차가 다소 추가될 수 있습니다.',
      highlights: ['수수료: 1,300원', '처리기간: 즉시(근무시간 내 3시간)', '등록번호 변경 시 번호판 재발급 절차 추가', '방문 접수 시 당일 처리 가능'],
      box: { label: '수수료·처리기간', content: '수수료 1,300원, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 방문만 가능합니다. 접수·처리기관은 시·군·구, 시·도입니다. 새로 이사한 지역의 관할 자동차등록사업소를 방문해 접수합니다.',
      highlights: ['방문만 가능(인터넷·우편 불가)', '접수·처리기관: 시·군·구, 시·도', '새 거주지 관할 자동차등록사업소 방문', '접수 즉시 처리되는 간단한 민원'],
      box: { label: '신청경로', content: '새 거주지 관할 시·군·구, 시·도(자동차등록사업소) 방문 신청.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 국토교통부 자동차운영보험과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 시·군·구, 시·도(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 국토교통부 자동차운영보험과', '개별 민원 문의는 관할 시·군·구, 시·도', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 시·군·구·시·도, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '인터넷으로 신청할 수 있나요?', a: '아니요, 방문 신청만 가능합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328' },
    { q: '수수료는 얼마인가요?', a: '1,300원입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328' },
    { q: '번호판도 새로 받아야 하나요?', a: '등록번호가 변경되는 경우에만 기존 등록번호판 2매를 제출하고 새 번호판을 받습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328' },
    { q: '아무나 신청할 수 있나요?', a: '네, 신청자격에 제한이 없어 누구나 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328' },
  ],
  sources: [
    { label: '정부24(시·도간 자동차 변경등록 신청)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000328' },
    { label: '국토교통부', url: 'https://www.molit.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const vehicleInterregionalChangeRegistrationSpokes = [];
