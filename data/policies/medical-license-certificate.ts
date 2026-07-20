/* 의료인면허(자격)등록증명 - 보건복지부·정부24 */
export const medicalLicenseCertificatePolicy = {
  id: '630', type: 'service' as const,
  title: '의료인면허등록증명 발급신청 구비서류없이 보건복지부 500원 즉시 3시간 만에 받는 법',
  titleKeywords: { k1: '면허자격증명신청서의료법시행규칙제7조제1항면허자격증명발급규정제3조별지1호', k2: '구비서류없음신청자제출서류없음행정정보공동이용의료인면허자격등록사항증명', k3: '수수료500원구비서류없음보건복지부운영지원과누구나신청가능', k4: '보건복지부접수처리즉시근무시간내3시간의사간호사한의사면허증명' },
  slug: 'medical-license-certificate', org: '보건복지부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '500원', deadline: '의료인 면허·자격 등록사항 증명 필요 시 신청(처리 즉시·근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044', ctaLabel: '정부24 의료인면허(자격)등록증명 바로가기',
  datePublished: '2026-07-20T09:00:00+09:00', dateModified: '2026-07-20T09:00:00+09:00',
  summary: '의료인면허(자격)등록증명은 의료인의 면허 또는 자격의 등록사항에 대한 증명발급을 받고자 하는 자가 신청하는 민원으로, 의료법 시행규칙 제7조제1항·면허자격증명발급규정 제3조 별지 서식 1호에 근거합니다. 신청 방법은 인터넷, 방문, 우편입니다. 신청자격은 누구나 신청 가능합니다. 수수료는 500원입니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 구비서류는 없습니다. 민원인이 제출해야 하는 서류도 없습니다. 접수·처리기관은 보건복지부입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 보건복지부에서 확인이 필요합니다.',
  metaDescription: '의료인면허등록증명 발급신청 구비서류없이 보건복지부 500원 즉시 3시간 만에 받는 법 – 수수료 500원, 처리 즉시(근무시간 내 3시간).',
  audience: '의사·간호사·한의사 등 의료인 면허·자격 등록 사실을 증명해야 하는 의료인',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044', text: '신청방법', verifiedAt: '2026-07-20' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044', text: '신청자격', verifiedAt: '2026-07-20' } },
    수수료: { value: '500원', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044', text: '수수료', verifiedAt: '2026-07-20' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044', text: '처리기간', verifiedAt: '2026-07-20' } },
    구비서류: { value: '없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044', text: '구비서류', verifiedAt: '2026-07-20' } },
    근거법령: { value: '의료법 시행규칙 제7조제1항, 면허자격증명발급규정 제3조 별지 제1호', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044', text: '근거법령', verifiedAt: '2026-07-20' } },
  },
  qa: [
    {
      q: '의료인면허(자격)등록증명이 뭔가요?', anchor: 'q-basic',
      intro: '의료인면허(자격)등록증명은 의료인의 면허 또는 자격의 등록사항에 대한 증명발급을 받고자 하는 자가 신청하는 민원입니다. 의료법 시행규칙 제7조제1항에 근거하며, 면허·자격증명신청서(별지 서식 1호)를 작성해 신청합니다. 의사, 간호사, 한의사 등 의료인이 자신의 면허·자격 등록 사실을 공식적으로 증명받는 절차입니다.',
      highlights: ['의사·간호사·한의사 등 의료인 면허·자격 등록사항 증명', '의료법 시행규칙 제7조제1항 근거', '면허·자격증명신청서(별지 제1호) 작성', '위생사면허증명과 유사한 구조의 증명 발급 민원'],
      box: { label: '핵심', content: '의료인이 자신의 면허·자격 등록 사실을 공식적으로 증명받는 절차.' },
    },
    {
      q: '구비서류가 없다는 게 무슨 뜻인가요?', anchor: 'q-no-documents',
      intro: '구비서류는 없습니다. 민원인이 제출해야 하는 서류도 없습니다. 의료인 면허·자격 등록 정보가 이미 보건복지부 시스템에 전산화되어 있어, 신청자 본인 확인만으로 증명서를 즉시 발급할 수 있는 구조이기 때문입니다.',
      highlights: ['제출서류: 없음(구비서류 없음)', '면허 등록 정보가 이미 보건복지부 시스템에 존재', '본인 확인 절차만으로 증명서 발급 가능', '위생사면허증명(신분증 사본 필요)과 달리 서류조차 불필요'],
      box: { label: '구비서류 없음', content: '전산화된 등록 정보로 별도 서류 없이 즉시 발급.' },
    },
    {
      q: '어떤 의료인이 대상인가요?', anchor: 'q-target-medical-personnel',
      intro: '의료법에서 정한 의료인 전체가 대상입니다. 의사, 치과의사, 한의사, 조산사, 간호사 등 의료법상 면허·자격을 취득한 모든 의료인이 이 민원을 통해 등록증명을 발급받을 수 있습니다.',
      highlights: ['의사·치과의사·한의사·조산사·간호사 등 의료법상 모든 의료인', '면허뿐 아니라 자격 등록사항도 증명 대상', '취업·해외 활동 등 다양한 목적으로 활용', '의료법 시행규칙에 따라 통일된 절차로 처리'],
      box: { label: '대상 의료인', content: '의사·치과의사·한의사·조산사·간호사 등 의료법상 모든 의료인.' },
    },
    {
      q: '위생사면허증명과 같은 절차인가요?', anchor: 'q-vs-sanitarian-certificate',
      intro: '유사한 구조이지만 대상이 다릅니다. 위생사면허증명은 위생사 면허를 대상으로 하며 신분증 사본 제출이 필요한 반면, 의료인면허(자격)등록증명은 의사·간호사 등 의료인을 대상으로 하며 구비서류가 전혀 없습니다. 두 민원 모두 보건복지부가 접수·처리하고 수수료는 500원으로 동일합니다.',
      highlights: ['위생사면허증명: 신분증 사본 1부 필요', '의료인면허(자격)등록증명: 구비서류 없음', '대상 직종이 서로 다름(위생사 vs 의료인)', '수수료(500원)·처리기간(즉시)은 동일'],
      box: { label: '위생사면허증명과의 차이', content: '대상 직종이 다르고, 의료인 증명은 구비서류가 전혀 없음.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 500원으로 저렴합니다. 처리기간은 즉시(근무시간 내 3시간)로 매우 신속합니다.',
      highlights: ['수수료: 500원(저렴)', '처리기간: 즉시(근무시간 내 3시간)', '구비서류가 없어 신청 절차가 가장 간단', '급하게 필요한 증명서 발급에 적합'],
      box: { label: '수수료·처리기간', content: '수수료 500원, 처리 즉시(근무시간 내 3시간).' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 우편입니다. 접수·처리기관은 보건복지부입니다. 제도를 담당하는 기관은 보건복지부 운영지원과입니다.',
      highlights: ['인터넷·방문·우편 세 가지 방법', '접수·처리기관: 보건복지부(중앙 직접 처리)', '정부24 온라인 신청으로 방문 없이 처리 가능', '담당기관: 보건복지부 운영지원과'],
      box: { label: '신청경로', content: '정부24 온라인 또는 방문·우편으로 보건복지부에 신청.' },
    },
  ],
  faq: [
    { q: '수수료는 얼마인가요?', a: '500원입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시(근무시간 내 3시간) 처리됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044' },
    { q: '제출해야 할 서류가 있나요?', a: '없습니다. 구비서류 없이 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044' },
    { q: '어떤 의료인이 대상인가요?', a: '의사, 치과의사, 한의사, 조산사, 간호사 등 의료법상 모든 의료인이 대상입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044' },
    { q: '온라인으로 신청할 수 있나요?', a: '네, 인터넷으로 신청 가능합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044' },
  ],
  sources: [
    { label: '정부24(의료인면허(자격)등록증명)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000044' },
    { label: '보건복지부 운영지원과', url: 'https://www.mohw.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const medicalLicenseCertificateSpokes = [];
