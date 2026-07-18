/* 부동산등기용 등록증명서 발급신청 - 국토교통부·정부24 */
export const realEstateRegistrationNumberCertificatePolicy = {
  id: '400', type: 'service' as const,
  title: '외국인 부동산등기용 등록증명서 인터넷 무료로 즉시 발급받는 법',
  titleKeywords: { k1: '부동산등기용등록증명서', k2: '법인아닌사단재단외국인', k3: '전자민원인터넷발급무료', k4: '시군구접수처리' },
  slug: 'real-estate-registration-number-certificate', org: '국토교통부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '통당 1,000원(전자민원 인터넷 발급 시 무료)', deadline: '상시 신청 가능(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038', ctaLabel: '정부24 부동산등기용 등록증명서 발급 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '부동산등기용 등록증명서 발급신청은 법인 아닌 사단·재단이나 외국인이 부동산 등기를 할 때 필요한 부동산등기용 등록번호 증명서를 발급받기 위해 신청하는 절차로, 부동산등기법 제41조의2에 근거합니다. 내국인 개인은 주민등록번호로 등기하지만, 법인이 아닌 사단·재단이나 외국인은 별도의 부동산등기용 등록번호가 필요해 이 증명서로 확인합니다. 신청 방법은 인터넷, 방문, 팩스, 우편, 민원우편이며, 신청자격 제한 없이 누구나 신청할 수 있습니다. 수수료는 통당 1,000원이나, 전자민원(인터넷) 발급 시에는 무료입니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 구비서류는 없습니다. 접수·처리기관은 시·군·구입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 시·군·구에서 확인이 필요합니다.',
  metaDescription: '외국인 부동산등기용 등록증명서 인터넷 무료로 즉시 발급받는 법 – 누구나 신청 가능, 구비서류 없음, 처리 즉시(3시간).',
  audience: '국내 부동산을 등기해야 하는 외국인, 법인이 아닌 사단·재단',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, FAX, 우편, 민원우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '통당 1,000원(전자민원 인터넷 발급 시 무료)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038', text: '처리기간', verifiedAt: '2026-07-18' } },
    구비서류: { value: '없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038', text: '구비서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '부동산등기법 제41조의2, 법인 아닌 사단·재단 및 외국인의 부동산등기용 등록번호 부여절차에 관한 규정 제8조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '부동산등기용 등록증명서가 뭔가요?', anchor: 'q-basic',
      intro: '부동산등기용 등록증명서 발급신청은 법인 아닌 사단·재단 등록 증명서를 발급받기 위해 신청하는 민원사무입니다. 부동산등기법 제41조의2에 근거하며, 내국인 개인은 주민등록번호로 부동산을 등기할 수 있지만, 법인이 아닌 사단·재단이나 외국인은 이 증명서에 기재된 별도의 부동산등기용 등록번호가 있어야 등기를 할 수 있습니다.',
      highlights: ['법인 아닌 사단·재단, 외국인의 부동산등기 시 필요한 증명서', '부동산등기법 제41조의2 근거', '내국인 개인은 주민등록번호로 대체 가능해 대상 아님', '등록증명서 발급신청서(별지 제3호) 작성'],
      box: { label: '핵심', content: '법인 아닌 사단·재단·외국인이 부동산 등기 시 필요한 등록번호 증명서.' },
    },
    {
      q: '누가 신청할 수 있나요?', anchor: 'q-eligibility',
      intro: '신청자격에 별도 제한이 없어 누구나 신청할 수 있습니다. 주로 국내에 부동산을 취득하려는 외국인, 종중·교회·재단 등 법인이 아닌 사단·재단이 이용합니다.',
      highlights: ['신청자격 제한 없음(누구나 신청 가능)', '국내 부동산 취득 외국인이 주로 이용', '종중·교회·재단 등 법인 아닌 사단·재단도 대상', '본민원은 방문·전화로 어디서나 처리 가능'],
      box: { label: '신청자격', content: '제한 없음. 외국인·법인 아닌 사단재단이 주로 이용.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '구비서류는 없습니다. 등록증명서 발급신청서(별지 서식 3호)만 작성하면 되며, 별도로 준비해서 제출할 서류가 없습니다.',
      highlights: ['구비서류 없음(신청서만 작성)', '등록증명서 발급신청서(별지 제3호) 작성', '별도 증빙서류 제출 부담 없음', '간단한 신청 절차'],
      box: { label: '준비서류', content: '없음. 신청서만 작성하면 됨.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 통당 1,000원입니다. 다만 전자민원(인터넷) 발급 시에는 무료입니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다.',
      highlights: ['수수료: 통당 1,000원(원칙)', '전자민원(인터넷) 발급은 무료', '처리기간: 즉시(근무시간 내 3시간)', '급하면 인터넷 발급이 가장 유리(무료+빠름)'],
      box: { label: '수수료·처리기간', content: '인터넷 발급 무료, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 팩스, 우편, 민원우편입니다. 본 민원은 방문, 전화로 어디서나 민원처리가 가능한 민원입니다. 접수·처리기관은 시·군·구입니다.',
      highlights: ['인터넷·방문·FAX·우편·민원우편 다섯 가지 방법', '방문·전화는 전국 어디서나 처리 가능', '접수·처리기관: 시·군·구', '정부24에서 인터넷 발급 시 즉시 출력 가능'],
      box: { label: '신청경로', content: '정부24 인터넷 발급(무료) 또는 전국 시·군·구 방문·전화.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 국토교통부 공간정보제도과입니다(044-201-4653). 개별 민원(실제 접수·처리)에 대한 문의는 관할 시·군·구(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 국토교통부 공간정보제도과(044-201-4653)', '개별 민원 문의는 관할 시·군·구', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 시·군·구, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '인터넷 발급은 무료인가요?', a: '네, 전자민원(인터넷) 발급 시에는 무료입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038' },
    { q: '방문 발급 수수료는 얼마인가요?', a: '통당 1,000원입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038' },
    { q: '준비할 서류가 있나요?', a: '없습니다. 신청서만 작성하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038' },
    { q: '누가 이 증명서가 필요한가요?', a: '국내 부동산을 취득하려는 외국인, 종중·교회 등 법인이 아닌 사단·재단이 주로 필요합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038' },
  ],
  sources: [
    { label: '정부24(부동산등기용 등록증명서 발급신청)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000038' },
    { label: '국토교통부', url: 'https://www.molit.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const realEstateRegistrationNumberCertificateSpokes = [];
