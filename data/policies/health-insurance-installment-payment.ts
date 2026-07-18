/* 건강보험 체납보험료 분할납부신청 - 보건복지부·정부24 */
export const healthInsuranceInstallmentPaymentPolicy = {
  id: '401', type: 'service' as const,
  title: '건강보험료 3회 체납 시 분할납부신청서로 즉시 승인받는 법',
  titleKeywords: { k1: '건강보험체납보험료분할납부', k2: '3회이상체납분할승인', k3: '국민건강보험법시행규칙31호', k4: '국민건강보험공단' },
  slug: 'health-insurance-installment-payment', org: '보건복지부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '3회 이상 체납 시 신청 가능(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321', ctaLabel: '정부24 건강보험 체납보험료 분할납부신청 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '건강보험 체납보험료 분할납부신청은 건강보험료를 3회 이상 체납한 사람이 체납된 보험료의 분할납부승인을 받고자 국민건강보험공단에 신청하는 절차로, 국민건강보험법 제82조에 근거합니다. 신청 방법은 방문, 팩스, 전화이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없고 구비서류도 없습니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 접수·처리기관은 국민건강보험공단입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 국민건강보험공단에서 확인이 필요합니다.',
  metaDescription: '건강보험료 3회 체납 시 분할납부신청서로 즉시 승인받는 법 – 수수료 없음, 구비서류 없음, 처리 즉시(3시간).',
  audience: '건강보험료를 3회 이상 체납해 분할납부가 필요한 가입자',
  keyFacts: {
    신청방법: { value: '방문, FAX, 전화', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321', text: '처리기간', verifiedAt: '2026-07-18' } },
    구비서류: { value: '없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321', text: '구비서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '국민건강보험법 제82조, 시행규칙 제55조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '건강보험 체납보험료 분할납부신청이 뭔가요?', anchor: 'q-basic',
      intro: '건강보험 체납보험료 분할납부신청은 건강보험료를 3회 이상 체납한 사람이 체납된 보험료의 분할납부승인을 받고자 국민건강보험공단에 신청하는 민원사무입니다. 국민건강보험법 제82조에 근거하며, 건강보험 체납보험료 분할납부신청서(별지 서식 31호)를 작성해 신청합니다.',
      highlights: ['3회 이상 체납된 건강보험료를 나눠 내는 절차', '국민건강보험법 제82조 근거', '건강보험 체납보험료 분할납부신청서(별지 제31호) 작성', '분할납부 승인 시 체납 상태 해소 가능'],
      box: { label: '핵심', content: '3회 이상 체납된 건강보험료를 나눠서 낼 수 있도록 승인받는 절차.' },
    },
    {
      q: '누가 신청할 수 있나요?', anchor: 'q-eligibility',
      intro: '건강보험료를 3회 이상 체납한 사람이 대상입니다. 신청자격은 본인 또는 대리인이며, 분할납부가 승인되면 정해진 기간 동안 나누어 보험료를 납부할 수 있습니다.',
      highlights: ['건강보험료 3회 이상 체납자가 대상', '본인 또는 대리인 신청 가능', '분할납부 승인 시 정해진 기간 나누어 납부', '체납이 3회 미만이면 대상 아님'],
      box: { label: '신청자격', content: '건강보험료 3회 이상 체납한 본인 또는 대리인.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '구비서류는 없습니다. 분할납부신청서만 작성하면 되며, 별도로 준비해서 제출할 서류가 없어 신청 절차가 매우 간단합니다.',
      highlights: ['구비서류 없음(신청서만 작성)', '별도 증빙서류 제출 불필요', '전화로도 간단히 신청 가능', '체납 이력은 공단이 자체 확인'],
      box: { label: '준비서류', content: '없음. 신청서만 작성하면 됨.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다. 전화로도 신청할 수 있어 빠르게 승인받을 수 있습니다.',
      highlights: ['수수료: 없음', '처리기간: 즉시(근무시간 내 3시간)', '전화 신청으로도 빠르게 처리 가능', '분할납부 승인 후 정해진 일정에 따라 납부'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 방문, 팩스, 전화입니다. 접수·처리기관은 국민건강보험공단입니다. 관할 국민건강보험공단 지사에 방문하거나 전화로 간편하게 신청할 수 있습니다.',
      highlights: ['방문·FAX·전화 세 가지 방법(인터넷 불가)', '접수·처리기관: 국민건강보험공단', '전화 신청이 가장 간편', '관할 국민건강보험공단 지사 방문도 가능'],
      box: { label: '신청경로', content: '국민건강보험공단에 방문·팩스·전화로 신청.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 보건복지부 보험정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 국민건강보험공단(관할 처리기관)에 직접 연락하는 것이 정확합니다. 국민건강보험공단 고객센터(국번없이 1577-1000), 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 보건복지부 보험정책과', '개별 민원 문의는 관할 국민건강보험공단', '국민건강보험공단 고객센터 국번없이 1577-1000', '정부24 콜센터 1588-2188'],
      box: { label: '문의처', content: '개별 민원은 관할 국민건강보험공단, 일반 안내는 국번없이 1577-1000.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321' },
    { q: '체납이 몇 회부터 신청 가능한가요?', a: '3회 이상 체납한 경우 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321' },
    { q: '전화로 신청할 수 있나요?', a: '네, 방문·팩스와 함께 전화로도 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321' },
    { q: '준비할 서류가 있나요?', a: '없습니다. 신청서만 작성하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321' },
  ],
  sources: [
    { label: '정부24(건강보험 체납보험료 분할납부신청)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000321' },
    { label: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
    { label: '국민건강보험공단 고객센터 국번없이 1577-1000', url: 'https://www.nhis.or.kr' },
  ],
} as const;

export const healthInsuranceInstallmentPaymentSpokes = [];
