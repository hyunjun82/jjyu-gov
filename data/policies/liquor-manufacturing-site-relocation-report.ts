/* 제조장 이전 허가(판매장 이전 신고) - 국세청·정부24 */
export const liquorManufacturingSiteRelocationReportPolicy = {
  id: '621', type: 'service' as const,
  title: '주류 제조장·판매장 이전 신고 사업계획서로 세무서 수수료없이 소매업 7일 만에 받는 법',
  titleKeywords: { k1: '주류면허등에관한법률제8조시행령제10조시행규칙별지7호제조장이전허가판매장이전신고', k2: '사업계획서주류밑술술덧제조면허주류판매업면허행정정보공동이용소매업총7일', k3: '수수료없음구비서류있음국세청소비세과126신청서없음누구나신청가능', k4: '세무서접수처리처리기간유형에따라다름홈택스온라인신청' },
  slug: 'liquor-manufacturing-site-relocation-report', org: '국세청·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '제조장·판매장 이전 시 신고 필수(소매업은 처리 총 7일)', views: 0,
  applyUrl: 'https://www.hometax.go.kr', ctaLabel: '홈택스 제조장·판매장 이전 신고 바로가기',
  datePublished: '2026-07-20T09:00:00+09:00', dateModified: '2026-07-20T09:00:00+09:00',
  summary: '제조장 이전 허가(판매장 이전 신고)는 주류·밑술·술덧의 제조면허나 주류 판매업 면허를 받은 자가 그 제조장·판매장을 이전하고자 할 경우 관할세무서장에게 신고하는 민원으로, 주류 면허 등에 관한 법률 제8조·시행령 제10조·시행규칙 별지 서식 7호에 근거합니다. 신청 방법은 인터넷, 방문, 우편입니다. 신청자격은 누구나 신청 가능합니다(해당 면허 보유자). 별도의 신청서는 없습니다. 수수료는 없습니다. 처리기간은 유형에 따라 다르며, 소매업인 경우 총7일입니다. 제출서류는 사업계획서입니다. 접수·처리기관은 세무서입니다. 온라인신청은 홈택스(hometax.go.kr)에서 가능합니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법·처리기간은 정부24나 관할 세무서에서 확인이 필요합니다.',
  metaDescription: '주류 제조장·판매장 이전 신고 사업계획서로 세무서 수수료없이 소매업 7일 만에 받는 법 – 수수료 없음, 소매업 처리 총 7일.',
  audience: '주류·밑술·술덧 제조면허 또는 주류 판매업 면허를 보유한 채 제조장·판매장을 이전하려는 사업자',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000128', text: '신청방법', verifiedAt: '2026-07-20' } },
    신청자격: { value: '누구나 신청 가능(해당 면허 보유자)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000128', text: '신청자격', verifiedAt: '2026-07-20' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000128', text: '수수료', verifiedAt: '2026-07-20' } },
    처리기간: { value: '유형에 따라 다름(소매업인 경우 총 7일)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000128', text: '처리기간', verifiedAt: '2026-07-20' } },
    제출서류: { value: '사업계획서', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000128', text: '제출 서류', verifiedAt: '2026-07-20' } },
    근거법령: { value: '주류 면허 등에 관한 법률 제8조, 시행령 제10조, 시행규칙 별지 제7호', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000128', text: '근거법령', verifiedAt: '2026-07-20' } },
  },
  qa: [
    {
      q: '제조장 이전 허가(판매장 이전 신고)가 뭔가요?', anchor: 'q-basic',
      intro: '제조장 이전 허가(판매장 이전 신고)는 주류·밑술·술덧의 제조면허나 주류 판매업 면허를 받은 자가 그 제조장·판매장을 이전하고자 할 경우 관할세무서장에게 신고하는 민원입니다. 주류 면허 등에 관한 법률 제8조에 근거합니다. 이미 면허를 받은 주류 제조·판매업체가 사업장 위치를 옮길 때 반드시 거쳐야 하는 절차입니다.',
      highlights: ['이미 면허를 받은 주류 제조·판매업체의 위치 이전 신고', '주류 면허 등에 관한 법률 제8조 근거', '별도 신청서 없이 사업계획서로 신고', '기존 면허를 유지한 채 사업장만 이전하는 절차'],
      box: { label: '핵심', content: '주류 제조·판매 면허를 유지한 채 제조장·판매장을 이전할 때 하는 신고.' },
    },
    {
      q: '기존 면허와는 어떤 관계인가요?', anchor: 'q-relation-to-license',
      intro: '이 절차는 새로 면허를 받는 것이 아니라, 이미 주류 제조면허나 판매업 면허를 보유한 사업자가 사업장 소재지만 변경할 때 하는 신고입니다. 신청자격이 "누구나 신청 가능"인 이유도 해당 면허를 이미 보유한 사업자라면 별도의 추가 자격 심사 없이 이전 신고가 가능하기 때문입니다.',
      highlights: ['신규 면허 발급이 아닌 기존 면허자의 사업장 이전 신고', '면허 보유자라면 별도 추가 자격 심사 없이 신고 가능', '제조업·판매업 모두 이 절차로 이전 처리', '면허 자체는 이전과 무관하게 유지'],
      box: { label: '기존 면허와의 관계', content: '기존 제조·판매 면허를 유지한 채 사업장 소재지만 바뀌는 절차.' },
    },
    {
      q: '사업계획서는 왜 필요한가요?', anchor: 'q-business-plan',
      intro: '제출서류는 사업계획서입니다. 이전할 제조장·판매장이 주류 제조·판매에 적합한 시설과 여건을 갖췄는지 확인하기 위한 자료로, 이전 후에도 기존 면허 요건을 계속 충족하는지 점검하는 절차입니다.',
      highlights: ['이전 후 사업장이 면허 요건을 계속 충족하는지 확인', '시설·설비·운영 계획을 담은 사업계획서 제출', '담당공무원 확인 사항은 행정정보공동이용으로 처리', '사업계획서 미비 시 이전 신고가 지연될 수 있음'],
      box: { label: '사업계획서', content: '이전 후 사업장이 면허 요건을 충족하는지 확인하는 핵심 서류.' },
    },
    {
      q: '처리기간이 왜 유형마다 다른가요?', anchor: 'q-processing-varies',
      intro: '처리기간은 유형에 따라 다릅니다. 소매업인 경우 총7일로 안내되어 있으나, 제조업이나 도매업 등 다른 유형은 시설 확인 등에 시간이 더 소요될 수 있어 별도로 안내됩니다. 정확한 처리기간은 관할 세무서에 확인이 필요합니다.',
      highlights: ['처리기간이 업종(제조업·도매업·소매업)에 따라 상이', '소매업: 총 7일로 명시', '제조업 등은 시설 확인 절차로 기간이 더 소요될 수 있음', '정확한 기간은 관할 세무서 사전 확인 권장'],
      box: { label: '처리기간', content: '업종에 따라 상이하며, 소매업은 총 7일.' },
    },
    {
      q: '수수료가 있나요?', anchor: 'q-fee',
      intro: '수수료는 없습니다. 별도의 신청서 양식도 없어 사업계획서 제출만으로 신고할 수 있습니다.',
      highlights: ['신고 수수료: 없음', '별도 지정 신청서 없이 사업계획서로 신고', '이전 계획이 확정되면 신속히 신고하는 것이 안전', '무신고 시 면허 관련 불이익이 있을 수 있음'],
      box: { label: '수수료', content: '수수료 없음, 별도 신청서 없이 사업계획서로 신고.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 우편입니다. 접수·처리기관은 세무서입니다. 온라인신청은 홈택스(hometax.go.kr)에서 가능합니다. 제도를 담당하는 기관은 국세청 소비세과입니다.',
      highlights: ['인터넷·방문·우편 세 가지 방법', '온라인신청: 홈택스(hometax.go.kr)', '접수·처리기관: 이전할 사업장 관할 세무서', '담당기관: 국세청 소비세과(국번없이 126)'],
      box: { label: '신청경로', content: '홈택스 온라인 또는 방문·우편으로 관할 세무서에 신고.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000128' },
    { q: '처리는 얼마나 걸리나요?', a: '유형에 따라 다르며, 소매업인 경우 총 7일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000128' },
    { q: '새로 면허를 받아야 하나요?', a: '아니요, 기존 면허를 유지한 채 사업장 이전만 신고하는 절차입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000128' },
    { q: '온라인으로 신고할 수 있나요?', a: '네, 홈택스(hometax.go.kr)에서 온라인 신고가 가능합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000128' },
    { q: '어떤 서류가 필요한가요?', a: '사업계획서가 필요합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000128' },
  ],
  sources: [
    { label: '정부24(제조장 이전 허가(판매장 이전 신고))', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000128' },
    { label: '국세청 소비세과 126', url: 'https://www.nts.go.kr' },
    { label: '홈택스', url: 'https://www.hometax.go.kr' },
  ],
} as const;

export const liquorManufacturingSiteRelocationReportSpokes = [];
