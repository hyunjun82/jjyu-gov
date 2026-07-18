/* 폐업사실증명 발급 - 국세청·정부24 */
export const businessClosureCertificatePolicy = {
  id: '359', type: 'service' as const,
  title: '폐업사실증명 홈택스 무료로 즉시 발급받아 실업급여 신청하는 법',
  titleKeywords: { k1: '폐업사실증명발급', k2: '휴업폐업사실증명영문', k3: '국세증명사실증명민원신청서', k4: '세무서홈택스' },
  slug: 'business-closure-certificate', org: '국세청·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '상시 신청 가능(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019', ctaLabel: '정부24 폐업사실증명 발급 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '폐업사실증명 발급은 폐업 사실 확인을 증명받고자 신청하는 절차로, 국세청민원사무처리규정 제44조·부가가치세법 제8조에 근거합니다. 자영업자가 폐업 후 실업급여, 국민취업지원제도, 각종 금융·행정 절차에서 폐업 사실을 증빙할 때 필요합니다. 신청 방법은 인터넷, 방문, 민원우편, 모바일, 무인발급기이며, 온라인신청은 홈택스(hometax.go.kr)에서 할 수 있습니다. 신청자격은 본인 또는 대리인이나, 온라인은 대리인 신청이 불가합니다. 구비서류는 없으며 수수료도 없습니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 발급서류는 (휴업·폐업) 사실증명(국문·영문)이며, 영문증명을 신청하는 경우 여권이 필요합니다. 접수·처리기관은 세무서입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 국세청 홈택스에서 확인이 필요합니다.',
  metaDescription: '폐업사실증명 홈택스 무료로 즉시 발급받아 실업급여 신청하는 법 – 본인·대리인 신청, 구비서류 없음, 처리 즉시(3시간).',
  audience: '자영업을 폐업하고 실업급여·국민취업지원제도 등에 폐업 사실을 증빙해야 하는 사람',
  keyFacts: {
    신청방법: { value: '인터넷(홈택스), 방문, 민원우편, 모바일, 무인발급기', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019', text: '신청방법, 온라인신청', verifiedAt: '2026-07-17' } },
    신청자격: { value: '본인 또는 대리인(온라인은 대리인 신청 불가)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019', text: '처리기간', verifiedAt: '2026-07-17' } },
    구비서류: { value: '없음(영문증명 신청 시 여권 필요)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019', text: '구비서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '국세청민원사무처리규정 제44조·제33조, 부가가치세법 제8조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '폐업사실증명이 뭔가요?', anchor: 'q-basic',
      intro: '폐업사실증명 발급은 사업자가 폐업했다는 사실을 국세청이 공식적으로 증명해주는 서류를 발급받기 위해 신청하는 민원사무입니다. 국세청민원사무처리규정 제44조·부가가치세법 제8조에 근거하며, 자영업자가 폐업 후 실업급여나 국민취업지원제도 등을 신청할 때 폐업 사실 증빙자료로 널리 쓰입니다.',
      highlights: ['폐업 사실을 국세청이 공식 증명하는 서류', '국세청민원사무처리규정 제44조 근거', '실업급여·국민취업지원제도 신청 시 증빙자료로 활용', '국문·영문 두 가지 증명서 발급 가능'],
      box: { label: '핵심', content: '자영업자의 폐업 사실을 공식 증명받아 각종 절차에 활용하는 서류.' },
    },
    {
      q: '누가 신청할 수 있나요?', anchor: 'q-eligibility',
      intro: '신청자격은 본인 또는 대리인입니다. 다만 온라인(홈택스) 신청은 대리인 신청이 불가하며 본인만 가능합니다. 방문·민원우편으로 신청하는 경우에는 대리인도 위임장을 갖춰 신청할 수 있습니다.',
      highlights: ['본인 또는 대리인 신청 가능', '온라인(홈택스)은 대리인 신청 불가', '방문·민원우편은 위임장 갖춰 대리인 신청 가능', '무인발급기로도 본인 발급 가능'],
      box: { label: '신청자격', content: '본인 또는 대리인. 단 온라인은 본인만 가능.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '구비서류는 별도로 없습니다. 본인이 신청하는 경우 신분증을 제시하면 되고, 대리인이 신청하는 경우에는 민원서류 위임장, 대리인 신분증, 위임인의 위임의사를 확인할 수 있는 서류(위임인 신분증 사본 또는 인감증명서 사본)가 필요합니다. 영문증명을 신청하는 경우에는 여권이 필요합니다.',
      highlights: ['구비서류 없음(신분증 제시로 충분)', '대리인은 위임장+양측 신분증 필요', '위임인 인감증명서 사본으로도 대체 가능', '영문증명은 여권 필요'],
      box: { label: '준비서류', content: '본인은 신분증만, 대리인은 위임장 추가, 영문증명은 여권.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다. 온라인 발급 민원의 경우 MyGOV의 나의 신청내역에서 수령물을 열람할 수 있습니다.',
      highlights: ['수수료: 없음', '처리기간: 즉시(근무시간 내 3시간)', 'MyGOV 나의 신청내역에서 수령물 열람 가능', '급하면 홈택스 인터넷 발급이 가장 빠름'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 민원우편, 모바일, 무인발급기입니다. 온라인신청은 홈택스(hometax.go.kr)에서 할 수 있습니다. 접수·처리기관은 세무서이며, 본 민원은 방문·인터넷으로 어디서나 처리가 가능합니다.',
      highlights: ['인터넷·방문·민원우편·모바일·무인발급기 다섯 가지 방법', '온라인신청 전용 사이트: 홈택스(hometax.go.kr)', '접수·처리기관: 세무서', '방문·인터넷 모두 전국 어디서나 처리 가능'],
      box: { label: '신청경로', content: '홈택스 인터넷 발급 또는 전국 세무서 방문·무인발급기.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 국세청 부가가치세과입니다(국번없이 126). 개별 민원(실제 접수·처리)에 대한 문의는 관할 세무서(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 국세청 부가가치세과(국번없이 126)', '개별 민원 문의는 관할 세무서', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 세무서, 일반 안내는 국번없이 126.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019' },
    { q: '온라인으로 대리인이 신청할 수 있나요?', a: '아니요, 온라인(홈택스)은 본인만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019' },
    { q: '영문증명서도 발급받을 수 있나요?', a: '네, 영문증명을 신청하는 경우 여권을 제출하면 발급받을 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019' },
    { q: '어디서 온라인 신청하나요?', a: '홈택스(hometax.go.kr)에서 온라인 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019' },
  ],
  sources: [
    { label: '정부24(폐업사실증명 발급)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000019' },
    { label: '국세청 홈택스', url: 'https://www.hometax.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const businessClosureCertificateSpokes = [];
