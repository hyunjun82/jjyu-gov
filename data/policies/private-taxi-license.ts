/* 개인택시운송사업 면허 - 국토교통부·정부24 */
export const privateTaxiLicensePolicy = {
  id: '501', type: 'service' as const,
  title: '개인택시 면허 신청 택시운전자격증과 건강진단서로 시군구에 60일 만에 받는 법',
  titleKeywords: { k1: '개인택시운송사업면허택시운전자격증사본', k2: '건강진단서반명함판사진여객자동차운수사업법제4조', k3: '수수료16000원신청서없음관할관청공고서류', k4: '시군구접수처리60일' },
  slug: 'private-taxi-license', org: '국토교통부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '16,000원', deadline: '개인택시운송사업 개시 전 면허 필수(처리 총 60일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299', ctaLabel: '정부24 개인택시운송사업 면허 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '개인택시운송사업 면허는 개인택시운송사업을 하고자 하는 자가 사업면허를 신청하는 민원사무로, 여객자동차 운수사업법 제4조·시행규칙 제18조 별지 제7호에 근거합니다. 신청 방법은 인터넷, 방문, 우편이며, 신청자격은 누구나 신청 가능합니다. 수수료는 16,000원입니다. 처리기간은 총 60일입니다. 별도의 신청서는 없습니다. 제출서류는 건강진단서, 여객자동차 운수사업법 시행규칙 제55조제2항에 따른 택시운전자격증 사본, 반명함판 사진(3cm×4cm) 2장, 그 밖에 관할관청이 필요하다고 인정하여 공고하는 서류입니다. 접수·처리기관은 시·군·구입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 시군구청에서 확인이 필요합니다.',
  metaDescription: '개인택시 면허 신청 택시운전자격증과 건강진단서로 시군구에 60일 만에 받는 법 – 수수료 16,000원, 처리 총 60일.',
  audience: '개인택시운송사업을 시작하려는 택시운전자격 보유자',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '16,000원', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '총 60일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299', text: '처리기간', verifiedAt: '2026-07-18' } },
    제출서류: { value: '건강진단서, 택시운전자격증 사본, 반명함판 사진 2장, 관할관청 공고 서류(해당 시)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299', text: '제출 서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '여객자동차 운수사업법 제4조, 시행규칙 제18조 별지 제7호', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '개인택시운송사업 면허가 뭔가요?', anchor: 'q-basic',
      intro: '개인택시운송사업 면허는 개인택시운송사업을 하고자 하는 자가 사업면허를 신청하는 민원사무입니다. 여객자동차 운수사업법 제4조에 근거하며, 별도의 신청서 없이 필요한 서류를 갖춰 신청합니다. 법인택시가 아닌 개인 명의로 택시를 운행하려면 반드시 이 면허를 받아야 합니다.',
      highlights: ['개인 명의로 택시를 운행하기 위한 필수 면허', '여객자동차 운수사업법 제4조 근거', '별도의 신청서 없이 서류만 갖춰 신청', '법인택시와 달리 개인이 직접 면허를 취득'],
      box: { label: '핵심', content: '개인 명의로 택시를 운행하기 전 반드시 필요한 면허.' },
    },
    {
      q: '택시운전자격증이 있어야 신청할 수 있나요?', anchor: 'q-taxi-driver-license',
      intro: '네, 여객자동차 운수사업법 시행규칙 제55조제2항에 따른 택시운전자격증 사본을 제출해야 합니다. 즉 개인택시운송사업 면허를 신청하려면 먼저 택시운전자격을 취득해야 하며, 이는 개인택시 면허 신청의 전제 조건입니다.',
      highlights: ['택시운전자격증(시행규칙 제55조제2항) 사본 필수', '택시운전자격 취득이 개인택시 면허 신청의 전제', '자격증 없이는 면허 신청 자체가 불가', '자격 취득 절차를 먼저 완료해야 함'],
      box: { label: '택시운전자격', content: '개인택시 면허 신청 전 택시운전자격증 취득이 필수 전제조건.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '건강진단서, 택시운전자격증 사본, 반명함판 사진(3cm×4cm) 2장이 기본적으로 필요합니다. 그 밖에 관할관청이 필요하다고 인정하여 공고하는 서류가 있다면 추가로 제출해야 합니다. 별도의 정형화된 신청서는 없습니다.',
      highlights: ['건강진단서 필수(운전 적합성 확인)', '택시운전자격증 사본 필수', '반명함판 사진(3cm×4cm) 2장 필요', '관할관청별로 추가 공고서류가 있을 수 있음'],
      box: { label: '준비서류', content: '건강진단서+택시운전자격증 사본+반명함판 사진 2장이 기본.' },
    },
    {
      q: '관할관청마다 추가 요건이 있나요?', anchor: 'q-local-requirements',
      intro: '네, 그 밖에 관할관청이 필요하다고 인정하여 공고하는 서류가 있을 수 있습니다. 개인택시 면허는 지역별로 대수 제한, 무사고 경력 등 추가 심사 기준이 있는 경우가 많으므로, 신청 전 관할 시군구의 공고 내용을 반드시 확인하는 것이 좋습니다.',
      highlights: ['관할관청별로 추가 공고서류·요건이 있을 수 있음', '지역별 대수 제한·무사고 경력 등 심사 기준 상이', '신청 전 관할 시군구 공고 내용 확인 필수', '지역에 따라 신청 절차·요건이 달라질 수 있음'],
      box: { label: '지역별 추가요건', content: '관할관청 공고에 따라 추가서류·심사기준이 다를 수 있음.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 16,000원입니다. 처리기간은 총 60일이 소요됩니다.',
      highlights: ['수수료: 16,000원', '처리기간: 총 60일', '다른 인허가보다 처리기간이 긴 편', '사업 개시 일정에 맞춰 충분히 여유 있게 신청 권장'],
      box: { label: '수수료·처리기간', content: '수수료 16,000원, 처리 총 60일(다른 인허가보다 긴 편).' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 우편입니다. 접수·처리기관은 시·군·구입니다. 신청자의 주소지 또는 사업 예정지를 관할하는 시군구에 신청합니다.',
      highlights: ['인터넷·방문·우편 세 가지 방법', '접수·처리기관: 시·군·구', '관할 시군구에 신청', '정부24 온라인 신청으로 방문 없이 처리 가능'],
      box: { label: '신청경로', content: '정부24 온라인 또는 관할 시군구.' },
    },
  ],
  faq: [
    { q: '수수료는 얼마인가요?', a: '16,000원입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299' },
    { q: '처리는 얼마나 걸리나요?', a: '총 60일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299' },
    { q: '택시운전자격증 없이 신청할 수 있나요?', a: '아니요, 택시운전자격증 사본 제출이 필수이므로 먼저 자격을 취득해야 합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299' },
    { q: '별도의 신청서 양식이 있나요?', a: '아니요, 별도의 신청서 없이 필요 서류를 갖춰 신청합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299' },
    { q: '지역마다 신청 요건이 다른가요?', a: '네, 관할관청이 공고하는 추가서류·기준이 있을 수 있어 사전 확인이 필요합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299' },
  ],
  sources: [
    { label: '정부24(개인택시운송사업 면허)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000299' },
    { label: '국토교통부 교통서비스정책과', url: 'https://www.molit.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const privateTaxiLicenseSpokes = [];
