/* 건강보험 가입자 자격상실 신고 - 보건복지부·정부24 */
export const healthInsuranceQualificationLossReportPolicy = {
  id: '402', type: 'service' as const,
  title: '건강보험 자격상실신고 사망 국적상실 시 구비서류 없이 3일 신고하는 법',
  titleKeywords: { k1: '건강보험가입자자격상실신고', k2: '지역가입자직장가입자상실신고서', k3: '사망국적상실사유', k4: '국민건강보험공단지사' },
  slug: 'health-insurance-qualification-loss-report', org: '보건복지부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '자격상실 사유 발생 시 신고(처리 총 3일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234', ctaLabel: '정부24 건강보험 가입자 자격상실 신고 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '건강보험 가입자 자격상실 신고는 건강보험 가입자(지역·직장가입자)가 사망, 국적상실 등 국민건강보험법 제10조제1항 각호의 자격상실사유로 그 자격을 잃게 되었을 때 이를 신고하는 절차로, 국민건강보험법 제10조제2항에 근거합니다. 신청 방법은 인터넷, 방문, 팩스, 우편, 모바일, EDI이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없고 구비서류도 없습니다. 처리기간은 총 3일입니다. 신청서는 건강보험 지역가입자 자격상실 신고서, 건강보험 직장가입자 자격상실 신고서(각 별지 서식 7호·8호)입니다. 접수·처리기관은 국민건강보험공단지사입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 국민건강보험공단에서 확인이 필요합니다.',
  metaDescription: '건강보험 자격상실신고 사망 국적상실 시 구비서류 없이 3일 신고하는 법 – 수수료 없음, 구비서류 없음, 처리 총 3일.',
  audience: '가입자가 사망·국적상실 등으로 건강보험 자격을 상실해 신고해야 하는 가족·대리인',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, FAX, 우편, 모바일, EDI', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '총 3일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234', text: '처리기간', verifiedAt: '2026-07-18' } },
    구비서류: { value: '없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234', text: '구비서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '국민건강보험법 제10조제1항·제2항, 시행규칙 제4조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '건강보험 가입자 자격상실 신고가 뭔가요?', anchor: 'q-basic',
      intro: '건강보험 가입자 자격상실 신고는 건강보험 가입자(지역·직장가입자)가 사망, 국적상실 등 국민건강보험법 제10조제1항 각호의 자격상실사유로 그 자격을 잃게 되었을 때 이를 신고하는 민원사무입니다. 국민건강보험법 제10조제2항에 근거하며, 지역가입자와 직장가입자 각각 다른 신고서 양식을 사용합니다.',
      highlights: ['건강보험 자격상실 사유 발생 시 신고하는 절차', '국민건강보험법 제10조제1항·제2항 근거', '지역가입자·직장가입자 각각 다른 신고서(별지 7·8호)', '사망·국적상실 등이 대표 자격상실 사유'],
      box: { label: '핵심', content: '사망·국적상실 등으로 건강보험 자격을 잃었을 때 신고하는 절차.' },
    },
    {
      q: '어떤 경우에 신고해야 하나요?', anchor: 'q-cases',
      intro: '건강보험 가입자가 사망한 경우, 국적을 상실한 경우 등 국민건강보험법 제10조제1항 각호에서 정한 자격상실 사유가 발생했을 때 신고해야 합니다. 지역가입자와 직장가입자 모두 해당 사유 발생 시 이 절차를 통해 신고합니다.',
      highlights: ['가입자 사망 시 신고', '국적 상실 시 신고', '그 밖에 법령에서 정한 자격상실 사유 발생 시', '지역·직장가입자 모두 적용'],
      box: { label: '주요 신고 사유', content: '가입자 사망, 국적상실 등 법정 자격상실 사유.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '구비서류는 없습니다. 건강보험 지역가입자 자격상실 신고서 또는 건강보험 직장가입자 자격상실 신고서(각 별지 서식 7호·8호)만 작성하면 되며, 별도로 준비해서 제출할 서류가 없습니다.',
      highlights: ['구비서류 없음(신고서만 작성)', '지역가입자·직장가입자 신고서 양식이 다름(별지 7·8호)', '별도 증빙서류 제출 불필요', '간단한 신고 절차'],
      box: { label: '준비서류', content: '없음. 지역·직장가입자용 신고서만 작성하면 됨.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총 3일이 소요됩니다. 신고 방법이 다양해 인터넷·모바일로도 손쉽게 신고할 수 있습니다.',
      highlights: ['수수료: 없음', '처리기간: 총 3일', '인터넷·모바일 등 다양한 신고 방법 지원', '신고 지연 시 보험료 정산에 영향 가능'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 3일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 팩스, 우편, 모바일, EDI입니다. 접수·처리기관은 국민건강보험공단지사입니다. 국민건강보험공단 홈페이지나 앱에서도 신고할 수 있습니다.',
      highlights: ['인터넷·방문·FAX·우편·모바일·EDI 여섯 가지 방법', '접수·처리기관: 국민건강보험공단지사', '국민건강보험공단 홈페이지·앱에서 신고 가능', '관할 지사 방문으로도 처리 가능'],
      box: { label: '신청경로', content: '국민건강보험공단지사에 인터넷·방문·모바일 등으로 신고.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 보건복지부 보험정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 국민건강보험공단지사(관할 처리기관)에 직접 연락하는 것이 정확합니다. 국민건강보험공단 고객센터(국번없이 1577-1000), 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 보건복지부 보험정책과', '개별 민원 문의는 관할 국민건강보험공단지사', '국민건강보험공단 고객센터 국번없이 1577-1000', '정부24 콜센터 1588-2188'],
      box: { label: '문의처', content: '개별 민원은 관할 국민건강보험공단지사, 일반 안내는 국번없이 1577-1000.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234' },
    { q: '처리는 얼마나 걸리나요?', a: '총 3일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234' },
    { q: '준비할 서류가 있나요?', a: '없습니다. 자격상실 신고서만 작성하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234' },
    { q: '지역가입자와 직장가입자 신고서가 다른가요?', a: '네, 지역가입자용(별지 제7호)과 직장가입자용(별지 제8호) 신고서가 각각 다릅니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234' },
    { q: '모바일로도 신고할 수 있나요?', a: '네, 모바일을 포함해 인터넷·방문·팩스·우편·EDI 등 다양한 방법으로 신고할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234' },
  ],
  sources: [
    { label: '정부24(건강보험 가입자 자격상실 신고)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000234' },
    { label: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
    { label: '국민건강보험공단 고객센터 국번없이 1577-1000', url: 'https://www.nhis.or.kr' },
  ],
} as const;

export const healthInsuranceQualificationLossReportSpokes = [];
