/* 고용보험 심사청구 - 고용노동부·정부24 */
export const employmentInsuranceReviewRequestPolicy = {
  id: '393', type: 'service' as const,
  title: '실업급여 거부처분 억울하면 30일 만에 심사청구하는 법' ,
  titleKeywords: { k1: '고용보험심사청구', k2: '실업급여육아휴직급여처분이의', k3: '피보험자격취득상실확인', k4: '고용보험심사관지방고용노동관서' },
  slug: 'employment-insurance-review-request', org: '고용노동부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '원처분을 안 날부터 청구 가능(처리 총 30일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088', ctaLabel: '정부24 고용보험 심사청구 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '고용보험 심사청구는 피보험자격의 취득·상실에 대한 확인, 실업급여 및 육아휴직급여·산전후휴가급여에 관한 처분(원처분등)에 이의가 있는 사람이 심사관에게 심사를 청구하는 절차로, 고용보험법 제91조 등에 근거합니다. 실업급여 수급자격 불인정, 육아휴직급여 지급 거부 등 고용센터의 처분에 이의가 있을 때 이용합니다. 신청 방법은 인터넷, 방문, 팩스, 우편이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없고 구비서류도 없습니다. 처리기간은 총 30일입니다. 접수기관은 지방고용노동관서, 처리기관은 고용보험심사관입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 지방고용노동관서에서 확인이 필요합니다.',
  metaDescription: '실업급여 거부처분 억울하면 30일 만에 심사청구하는 법 – 수수료 없음, 구비서류 없음, 처리 총 30일.',
  audience: '실업급여·육아휴직급여·피보험자격 관련 고용센터 처분에 이의가 있는 사람',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, FAX, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088', text: '신청방법', verifiedAt: '2026-07-17' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '총 30일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088', text: '처리기간', verifiedAt: '2026-07-17' } },
    구비서류: { value: '없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088', text: '구비서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '고용보험법 제77조의5제4항·제77조의10제4항·제91조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '고용보험 심사청구가 뭔가요?', anchor: 'q-basic',
      intro: '고용보험 심사청구는 피보험자격의 취득·상실에 대한 확인, 실업급여 및 육아휴직급여·산전후휴가급여에 관한 처분(원처분등)에 이의가 있는 사람이 심사관에게 심사를 청구하는 민원사무입니다. 고용보험법 제91조 등에 근거하며, 심사청구서(별지 서식 114호)를 작성해 신청합니다.',
      highlights: ['고용센터의 원처분에 이의를 제기하는 행정구제 절차', '고용보험법 제91조 등 근거', '실업급여·육아휴직급여·산전후휴가급여 처분 모두 대상', '피보험자격 취득·상실 확인도 대상'],
      box: { label: '핵심', content: '실업급여·육아휴직급여 등 고용보험 처분에 이의가 있을 때 심사를 청구하는 절차.' },
    },
    {
      q: '어떤 처분에 청구할 수 있나요?', anchor: 'q-scope',
      intro: '피보험자격의 취득·상실에 대한 확인 처분, 실업급여(구직급여 등)에 관한 처분, 육아휴직급여·산전후휴가급여에 관한 처분에 이의가 있을 때 청구할 수 있습니다. 예를 들어 실업급여 수급자격이 인정되지 않았거나, 육아휴직급여 지급이 거부된 경우가 대표적입니다.',
      highlights: ['피보험자격 취득·상실 확인 처분', '실업급여(구직급여 등) 관련 처분', '육아휴직급여·산전후휴가급여 관련 처분', '수급자격 불인정·지급거부가 대표 사례'],
      box: { label: '청구 대상', content: '피보험자격 확인, 실업급여, 육아휴직급여, 산전후휴가급여 관련 처분.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '구비서류는 없습니다. 심사청구서(별지 서식 114호)만 작성하면 되며, 별도로 준비해서 제출할 서류가 없어 신청 절차가 간단합니다. 다만 처분이 부당함을 뒷받침할 근거자료가 있다면 함께 첨부하는 것이 심사에 도움이 됩니다.',
      highlights: ['구비서류 없음(심사청구서만 작성)', '별도 증빙서류 제출 의무 없음', '부당함을 뒷받침할 근거자료 첨부는 도움됨', '간단한 신청 절차'],
      box: { label: '준비서류', content: '없음. 심사청구서만 작성하면 됨.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총 30일이 소요됩니다. 심사청구 결과에도 불복하는 경우에는 고용보험심사위원회에 재심사를 청구하거나 행정소송을 제기하는 등 추가 구제절차를 이용할 수 있습니다.',
      highlights: ['수수료: 없음', '처리기간: 총 30일', '결과 불복 시 재심사청구·행정소송 등 추가 절차 가능', '원처분을 안 날부터 청구기한이 있으므로 신속히 진행 필요'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 30일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 팩스, 우편입니다. 접수기관은 지방고용노동관서이며, 처리기관은 고용보험심사관입니다. 관할 고용센터를 통해 접수할 수 있습니다.',
      highlights: ['인터넷·방문·FAX·우편 네 가지 방법', '접수기관: 지방고용노동관서', '처리기관: 고용보험심사관', '관할 고용센터를 통해 접수 가능'],
      box: { label: '신청경로', content: '관할 지방고용노동관서(고용센터)를 통해 접수.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 고용노동부 고용보험기획과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 지방고용노동관서(관할 처리기관)에 직접 연락하는 것이 정확합니다. 고용노동부 고객상담센터(국번없이 1350), 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 고용노동부 고용보험기획과', '개별 민원 문의는 관할 지방고용노동관서', '고용노동부 고객상담센터 국번없이 1350', '정부24 콜센터 1588-2188'],
      box: { label: '문의처', content: '개별 민원은 관할 지방고용노동관서, 일반 안내는 국번없이 1350.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088' },
    { q: '처리는 얼마나 걸리나요?', a: '총 30일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088' },
    { q: '실업급여를 못 받게 됐는데 청구할 수 있나요?', a: '네, 실업급여 관련 처분에 이의가 있으면 심사청구할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088' },
    { q: '준비할 서류가 있나요?', a: '없습니다. 심사청구서만 작성하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088' },
    { q: '결과에 불복하면 어떻게 하나요?', a: '고용보험심사위원회에 재심사를 청구하거나 행정소송을 제기할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088' },
  ],
  sources: [
    { label: '정부24(고용보험 심사청구)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000088' },
    { label: '고용노동부', url: 'https://www.moel.go.kr' },
    { label: '고용노동부 고객상담센터 국번없이 1350', url: 'https://www.moel.go.kr' },
  ],
} as const;

export const employmentInsuranceReviewRequestSpokes = [];
