/* 주택 임대차신고 - 국토교통부·정부24 */
export const housingLeaseReportPolicy = {
  id: '341', type: 'service' as const,
  title: '주택임대차신고 계약체결일부터 30일 이내 인터넷으로 하는 법',
  titleKeywords: { k1: '주택임대차신고제', k2: '30일이내신고', k3: '임대인임차인공동신고', k4: '부동산거래관리시스템' },
  slug: 'housing-lease-report', org: '국토교통부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '임대차 계약체결일부터 30일 이내', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=16130000132', ctaLabel: '정부24 주택 임대차신고 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '주택 임대차신고는 주택 임대차 계약서 또는 임대차 신고서를 작성해 신고관청에 제출하는 절차로, 부동산 거래신고 등에 관한 법률 시행규칙 제6조의2에 근거합니다. 국토교통부 자료에 따르면 주택임대차 계약을 체결하면 임대인·임차인이 계약 체결일부터 30일 이내에 신고해야 합니다. 정부24나 국토교통부 부동산거래관리시스템(rtms.molit.go.kr)에서 인터넷·방문으로 신청할 수 있으며 수수료는 없고 별도 구비서류도 필요 없습니다. 처리기간은 근무시간 내 즉시(최대 3시간)입니다. 신고가 완료되면 주택 임대차 계약 신고필증이 발급됩니다. 본 정보는 정부24·국토교통부 공식 자료에 기반하며, 정확한 신청방법은 정부24에서 확인이 필요합니다.',
  metaDescription: '주택임대차신고 계약체결일부터 30일 이내 인터넷으로 하는 법 – 수수료 없음, 구비서류 없음, 즉시 처리. 임대인·임차인이 30일 이내 신고 의무.',
  audience: '주택 임대차 계약을 체결한 임대인·임차인',
  keyFacts: {
    신고기한: { value: '임대차 계약체결일부터 30일 이내', source: { url: 'https://www.molit.go.kr', text: '주택 임대차 계약하면 잊지 말고 30일 이내 신고하세요', verifiedAt: '2026-07-17' } },
    신청방법: { value: '인터넷, 방문', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=16130000132', text: '신청방법', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=16130000132', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '즉시(근무시간 내 최대 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=16130000132', text: '처리기간', verifiedAt: '2026-07-17' } },
    구비서류: { value: '없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=16130000132', text: '구비서류', verifiedAt: '2026-07-17' } },
    발급서류: { value: '주택 임대차 계약 신고필증', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=16130000132', text: '발급서류', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '주택임대차신고제가 뭔가요?', anchor: 'q-basic',
      intro: '주택 임대차신고는 주택 임대차 계약서 또는 임대차 신고서를 작성해 신고관청(읍·면·동)에 제출하는 절차입니다. 부동산 거래신고 등에 관한 법률 시행규칙 제6조의2에 근거하며, 전월세 거래를 투명하게 파악하기 위해 2021년 6월 1일 시행된 제도입니다.',
      highlights: ['주택 임대차 계약서·신고서를 신고관청에 제출', '부동산 거래신고법 시행규칙 제6조의2 근거', '전월세 거래 투명화를 위한 제도', '2021년 6월 1일 시행'],
      box: { label: '핵심', content: '전월세 계약 체결 시 신고관청에 계약 내용을 신고하는 제도.' },
    },
    {
      q: '언제까지 신고해야 하나요?', anchor: 'q-deadline',
      intro: '국토교통부 자료에 따르면 신고주체(임대인·임차인)는 계약 체결일부터 30일 이내에 신고해야 합니다. 부동산 거래신고법 제6조의2·제6조의3에 근거하며, 매매계약 신고 기한(60일)보다 짧으므로 계약 후 신속하게 신고해야 합니다.',
      highlights: ['계약 체결일부터 30일 이내 신고', '신고주체는 임대인·임차인', '매매계약(60일)보다 짧은 신고기한', '기한 내 미신고 시 과태료 부과 대상 가능'],
      box: { label: '신고기한', content: '계약 체결일부터 30일 이내. 매매계약보다 짧은 기한.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '이 민원은 별도 구비서류가 없습니다. 주택 임대차 계약 신고서(부동산 거래신고 등에 관한 법률 시행규칙 별지 서식 5호의2)를 작성해 제출하면, 주택 임대차 계약 신고필증(별지 서식 5호의3)이 발급됩니다. 계약서를 함께 제출하면 별도 신고서 작성 없이 신고할 수도 있습니다.',
      highlights: ['구비서류 없음', '신고서(별지 제5호의2) 작성 또는 계약서 제출', '신고 완료 시 신고필증(별지 제5호의3) 발급', '계약서 제출로 신고서 작성 대체 가능'],
      box: { label: '준비서류', content: '구비서류 없음. 신고서 작성 또는 계약서 제출로 신고.' },
    },
    {
      q: '왜 신고해야 하나요?', anchor: 'q-why',
      intro: '주택임대차신고는 전월세 거래 정보를 투명하게 공개해 시세 파악을 쉽게 하고, 임차인 보호를 강화하기 위한 제도입니다. 신고 시 확정일자가 자동으로 부여되는 효과가 있어, 별도로 확정일자를 받으러 갈 필요가 줄어드는 실질적인 이점도 있습니다.',
      highlights: ['전월세 시세 정보 투명화 목적', '임차인 보호 강화를 위한 제도', '신고 시 확정일자 자동 부여 효과', '별도 확정일자 신청 절차 생략 가능'],
      box: { label: '신고 이점', content: '신고 시 확정일자가 자동 부여돼 별도 신청 없이 보증금 보호 효력 발생.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷과 방문입니다. 온라인 신청은 국토교통부 부동산거래관리시스템(rtms.molit.go.kr)에서 할 수 있으며, 방문 신청은 주택 소재지 관할 읍·면·동에서 할 수 있습니다. 접수·처리기관은 읍·면·동입니다.',
      highlights: ['인터넷·방문 두 가지 방법', '온라인: 부동산거래관리시스템(rtms.molit.go.kr)', '방문: 주택 소재지 관할 읍면동', '처리기간: 즉시(근무시간 내 최대 3시간)'],
      box: { label: '신청경로', content: '부동산거래관리시스템(rtms.molit.go.kr) 온라인 또는 관할 읍면동 방문.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 국토교통부 주택임대차지원팀입니다. 개별 민원(실제 접수·처리)에 대한 문의는 주택 소재지 관할 읍·면·동(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188)나 정부민원안내콜센터(국번없이 110, 365일 24시간)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 국토교통부 주택임대차지원팀', '개별 민원 문의는 관할 읍면동', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110(24시간)'],
      box: { label: '문의처', content: '개별 민원은 주택 소재지 관할 읍면동, 일반 안내는 국번없이 110.' },
    },
  ],
  faq: [
    { q: '전월세 계약하면 꼭 신고해야 하나요?', a: '네, 계약 체결일부터 30일 이내에 신고해야 합니다.', source: '국토교통부', sourceUrl: 'https://www.molit.go.kr' },
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=16130000132' },
    { q: '신고하면 확정일자를 따로 안 받아도 되나요?', a: '네, 임대차신고를 하면 확정일자가 자동으로 부여되는 효과가 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=16130000132' },
    { q: '온라인으로 신고할 수 있나요?', a: '네, 부동산거래관리시스템(rtms.molit.go.kr)에서 온라인으로 신고할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=16130000132' },
    { q: '매매계약 신고와 기한이 같은가요?', a: '아니요, 매매계약은 60일 이내지만 주택임대차신고는 30일 이내로 더 짧습니다.', source: '국토교통부', sourceUrl: 'https://www.molit.go.kr' },
  ],
  sources: [
    { label: '정부24(주택 임대차신고)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=16130000132' },
    { label: '국토교통부 부동산거래관리시스템', url: 'https://rtms.molit.go.kr' },
    { label: '국토교통부', url: 'https://www.molit.go.kr' },
  ],
} as const;

export const housingLeaseReportSpokes = [];
