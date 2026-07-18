/* 토지거래계약허가 - 국토교통부·정부24 */
export const landTransactionPermitPolicy = {
  id: '384', type: 'service' as const,
  title: '토지거래허가구역 매수 전 자금조달계획서로 15일 만에 허가받는 법',
  titleKeywords: { k1: '토지거래계약허가신청', k2: '토지이용계획서농업경영계획서', k3: '토지취득자금조달계획서', k4: '부동산거래신고법11조' },
  slug: 'land-transaction-permit', org: '국토교통부·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '토지거래허가구역 내 계약 전 신청(처리 총 15일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016', ctaLabel: '정부24 토지거래계약허가 신청 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '토지거래계약허가는 부동산 거래신고 등에 관한 법률에 의거 토지거래허가구역에서 일정 면적 이상의 토지를 취득하고자 할 때 신청하는 절차로, 같은 법 제11조제1항에 근거합니다. 토지거래허가구역은 투기 방지를 위해 지정되며, 이 구역 내 일정 면적 이상 토지를 매수하려면 계약 전에 반드시 허가를 받아야 합니다. 신청 방법은 방문이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없습니다. 처리기간은 총 15일입니다. 제출서류는 토지이용계획서(농지취득자격증명이 필요한 농지의 경우 농업경영계획서), 토지취득자금조달계획서입니다. 토지등기부등본은 행정정보공동이용을 통해 담당공무원이 확인할 수 있습니다. 접수·처리기관은 시·군·구, 시·도입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 시·군·구에서 확인이 필요합니다.',
  metaDescription: '토지거래허가구역 매수 전 자금조달계획서로 15일 만에 허가받는 법 – 본인·대리인 신청, 수수료 없음, 처리 총 15일.',
  audience: '토지거래허가구역 내 일정 면적 이상 토지를 매수하려는 사람',
  keyFacts: {
    신청방법: { value: '방문', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016', text: '신청방법', verifiedAt: '2026-07-17' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '총 15일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '토지이용계획서(또는 농업경영계획서), 토지취득자금조달계획서', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016', text: '제출 서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '부동산 거래신고 등에 관한 법률 제11조제1항, 시행규칙 제9조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '토지거래계약허가가 뭔가요?', anchor: 'q-basic',
      intro: '토지거래계약허가는 부동산 거래신고 등에 관한 법률에 의거 토지거래허가구역에서 일정 면적 이상의 토지를 취득하고자 할 때 신청하는 민원사무입니다. 같은 법 제11조제1항에 근거하며, 토지거래허가구역으로 지정된 지역에서는 계약 전에 반드시 이 허가를 받아야 합니다.',
      highlights: ['토지거래허가구역 내 토지 취득 전 필수 허가', '부동산 거래신고 등에 관한 법률 제11조제1항 근거', '일정 면적 이상 토지 취득이 대상', '허가 없이 계약하면 무효 또는 제재 가능'],
      box: { label: '핵심', content: '토지거래허가구역 내 일정 면적 이상 토지를 사기 전 받아야 하는 허가.' },
    },
    {
      q: '왜 이런 허가 제도가 있나요?', anchor: 'q-purpose',
      intro: '토지거래허가구역은 투기가 우려되거나 지가 급등이 예상되는 지역을 국토교통부장관 또는 시·도지사가 지정합니다. 이 구역 내 토지 거래를 사전에 심사해 투기 목적의 거래를 걸러내고, 실수요자 위주로 거래가 이루어지도록 하는 것이 제도의 취지입니다.',
      highlights: ['투기 방지, 지가 급등 억제가 목적', '국토교통부장관 또는 시·도지사가 지정', '사전 심사로 실수요자 위주 거래 유도', '지정 지역·면적 기준은 지역별로 다름'],
      box: { label: '제도 취지', content: '투기 방지를 위해 허가구역 내 토지거래를 사전 심사하는 제도.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '토지이용계획서가 필요하며, 농지취득자격증명을 받아야 하는 농지의 경우에는 농업경영계획서로 대체됩니다. 토지취득자금조달계획서도 함께 제출해야 합니다. 토지등기부등본은 행정정보공동이용을 통해 담당공무원이 확인할 수 있어 별도 제출이 필요 없습니다.',
      highlights: ['토지이용계획서(농지는 농업경영계획서) 필수', '토지취득자금조달계획서 필수', '토지등기부등본은 행정정보공동이용으로 확인', '자금 출처를 명확히 소명해야 함'],
      box: { label: '준비서류', content: '토지이용계획서(농업경영계획서)+토지취득자금조달계획서.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총 15일이 소요됩니다. 이용계획과 자금조달계획을 심사하는 절차를 거치기 때문에 즉시 처리되지 않습니다.',
      highlights: ['수수료: 없음', '처리기간: 총 15일', '이용계획·자금조달계획 심사 절차 포함', '계약 일정을 고려해 미리 신청 필요'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 15일(심사 절차 포함).' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 방문만 가능합니다. 접수·처리기관은 시·군·구, 시·도입니다. 관할 토지 소재지의 시·군·구를 방문해 토지거래계약 허가 신청서(별지 서식 9호)를 제출합니다.',
      highlights: ['방문만 가능(인터넷·우편 불가)', '접수·처리기관: 시·군·구, 시·도', '토지 소재지 관할 시·군·구 방문 필요', '토지거래계약 허가 신청서(별지 제9호) 작성'],
      box: { label: '신청경로', content: '토지 소재지 관할 시·군·구, 시·도 방문 신청.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 국토교통부 토지정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 시·군·구(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 국토교통부 토지정책과', '개별 민원 문의는 관할 시·군·구', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 시·군·구, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016' },
    { q: '처리는 얼마나 걸리나요?', a: '총 15일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016' },
    { q: '인터넷으로 신청할 수 있나요?', a: '아니요, 방문으로만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016' },
    { q: '농지를 사려면 어떤 서류가 다른가요?', a: '농지취득자격증명이 필요한 농지의 경우 토지이용계획서 대신 농업경영계획서를 제출합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016' },
    { q: '자금조달계획서는 왜 필요한가요?', a: '토지 취득 자금의 출처를 확인해 투기성 거래를 걸러내기 위해 필요합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016' },
  ],
  sources: [
    { label: '정부24(토지거래계약허가)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000016' },
    { label: '국토교통부', url: 'https://www.molit.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const landTransactionPermitSpokes = [];
