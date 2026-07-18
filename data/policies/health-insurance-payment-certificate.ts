/* 건강보험료 납부확인서 - 국민건강보험공단·정부24 */
export const healthInsurancePaymentCertificatePolicy = {
  id: '417', type: 'service' as const,
  title: '건강보험료 납부확인서 2001년 이후 납부내역 인터넷 무료로 즉시 발급받는 법',
  titleKeywords: { k1: '건강보험료납부확인서', k2: '2001년이후납부건', k3: '대출연말정산제출용', k4: '국민건강보험공단' },
  slug: 'health-insurance-payment-certificate', org: '국민건강보험공단·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '상시 신청 가능(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017', ctaLabel: '정부24 건강보험료 납부확인서 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '건강보험료 납부확인서는 건강보험료 납부대상자가 2001년 이후 납부건에 대한 건강보험료 납부확인서(납부확인용)를 발급받는 서비스입니다. 대출 심사, 연말정산 소득·세액공제 증빙, 각종 소득 증명 등 다양한 목적으로 활용됩니다. 신청 방법은 인터넷, 방문이며, 신청자격은 본인 또는 대리인이나 온라인은 대리인 신청이 불가합니다. 수수료는 없습니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 별도의 신청서나 구비서류는 필요 없습니다. 접수·처리기관은 국민건강보험공단입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 국민건강보험공단에서 확인이 필요합니다.',
  metaDescription: '건강보험료 납부확인서 2001년 이후 납부내역 인터넷 무료로 즉시 발급받는 법 – 수수료 없음, 처리 즉시(3시간). 별도 서류 불필요.',
  audience: '대출 심사·연말정산·소득 증명 등을 위해 건강보험료 납부내역을 증명해야 하는 건강보험료 납부대상자',
  keyFacts: {
    신청방법: { value: '인터넷, 방문', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '본인 또는 대리인(온라인은 대리인 신청 불가)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017', text: '처리기간', verifiedAt: '2026-07-18' } },
    구비서류: { value: '구비서류 없음(별도 제출서류 불요)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017', text: '구비서류, 제출 서류', verifiedAt: '2026-07-18' } },
    발급범위: { value: '2001년 이후 납부건에 대한 납부확인서(납부확인용)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017', text: '제공 내용', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '건강보험료 납부확인서가 뭔가요?', anchor: 'q-basic',
      intro: '건강보험료 납부확인서는 건강보험료 납부대상자가 2001년 이후 납부건에 대한 건강보험료 납부확인서(납부확인용)를 발급받는 서비스입니다. 국민건강보험공단이 접수·처리하며, 별도의 신청서 없이 신청할 수 있습니다.',
      highlights: ['2001년 이후 건강보험료 납부내역을 증명하는 서류', '국민건강보험공단이 접수·처리하는 민원', '별도 신청서·구비서류 없이 신청 가능', '납부확인용으로 발급되는 확인서'],
      box: { label: '핵심', content: '2001년 이후 건강보험료 납부내역을 증명받는 확인서.' },
    },
    {
      q: '어디에 활용되나요?', anchor: 'q-usage',
      intro: '건강보험료 납부확인서는 은행 대출 심사 시 소득 증빙, 연말정산 시 소득·세액공제 증빙, 각종 관공서 제출용 소득 증명 등 다양한 목적으로 활용됩니다. 건강보험료는 소득에 비례해 부과되므로 소득 수준을 간접적으로 증명하는 자료로도 쓰입니다.',
      highlights: ['은행 대출 심사 시 소득 증빙 자료', '연말정산·소득 증명 제출용', '관공서·기관 제출용으로 활용', '소득 비례 부과 특성상 소득 증빙 대체 자료로 활용'],
      box: { label: '주요 활용처', content: '대출 심사, 연말정산, 각종 소득 증명 제출용.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '이 민원은 별도의 신청서와 구비서류가 없습니다. 방문 신청 시에는 본인 확인을 위한 신분증만 지참하면 됩니다. 대리인이 신청하는 경우에는 대리인의 신분증과 위임 관련 서류가 필요할 수 있습니다.',
      highlights: ['별도 신청서·구비서류 없음', '방문 신청 시 본인 신분증 지참', '대리인 신청 시 위임 관련 서류 필요', '온라인은 대리인 신청 불가(본인만)'],
      box: { label: '준비서류', content: '별도 구비서류 없음(방문 시 신분증만 지참).' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다. 인터넷으로 신청하면 방문 없이도 빠르게 발급받을 수 있습니다.',
      highlights: ['수수료: 없음', '처리기간: 즉시(근무시간 내 3시간)', '인터넷 신청으로 방문 없이 발급 가능', '국민건강보험공단 홈페이지에서도 발급 가능'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문입니다. 접수·처리기관은 국민건강보험공단입니다. 정부24 또는 국민건강보험공단 홈페이지에서 인터넷으로 신청할 수 있습니다.',
      highlights: ['인터넷·방문 두 가지 방법', '접수·처리기관: 국민건강보험공단', '정부24 또는 공단 홈페이지에서 발급 가능', '방문 시 관할 국민건강보험공단 지사 이용'],
      box: { label: '신청경로', content: '정부24 또는 국민건강보험공단 인터넷 발급, 방문 신청.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 기관은 공통(02-1588-2188)으로 안내되어 있습니다. 개별 민원(실제 접수·처리)에 대한 문의는 국민건강보험공단(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 공통(02-1588-2188)', '개별 민원 문의는 국민건강보험공단', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 국민건강보험공단, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017' },
    { q: '별도 서류를 준비해야 하나요?', a: '아니요, 별도의 신청서와 구비서류가 없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017' },
    { q: '몇 년도 이후 납부내역까지 발급되나요?', a: '2001년 이후 납부건에 대한 납부확인서를 발급받을 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017' },
    { q: '온라인으로 대리인이 신청할 수 있나요?', a: '아니요, 온라인은 본인만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017' },
  ],
  sources: [
    { label: '정부24(건강보험료 납부확인서)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=SG4CADM2017' },
    { label: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const healthInsurancePaymentCertificateSpokes = [];
