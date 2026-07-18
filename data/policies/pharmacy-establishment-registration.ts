/* 약국개설등록 - 보건복지부·정부24 */
export const pharmacyEstablishmentRegistrationPolicy = {
  id: '541', type: 'service' as const,
  title: '약국개설등록 면허증 제시만으로 시군구에 1만원 7일 만에 신청하는 법',
  titleKeywords: { k1: '약국개설등록신청서별지5호약사법제20조제2항', k2: '한약사면허증사본약사면허증제시로갈음', k3: '허브온라인신청hurb또는고르', k4: '수수료10000원시군구접수처리7일' },
  slug: 'pharmacy-establishment-registration', org: '보건복지부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '10,000원', deadline: '약국 개설 전 등록 필수(처리 총 7일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081', ctaLabel: '정부24 약국개설등록 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '약국개설등록은 약국을 개설하고자 하는 약사·한약사가 시장·군수·구청장에게 약국개설등록을 신청하는 민원으로, 약사법 제20조제2항·시행규칙 제7조 별지 서식 5호에 근거합니다. 신청 방법은 인터넷, 방문, 우편입니다. 신청자격은 누구나 신청 가능합니다. 수수료는 10,000원입니다. 처리기간은 총 7일입니다. 제출서류는 한약사 면허증 사본(신청인이 한약사인 경우만 해당, 신청서 제출 시 면허증 원본 제시로 사본 제출 갈음 가능)입니다. 약사 면허증(신청인이 약사인 경우, 원본 제시 시 담당공무원 확인으로 갈음)은 담당공무원이 행정정보공동이용으로 확인합니다. 온라인 신청은 hurb.or.kr을 통해 가능합니다. 접수·처리기관은 시·군·구입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 시군구청에서 확인이 필요합니다.',
  metaDescription: '약국개설등록 면허증 제시만으로 시군구에 1만원 7일 만에 신청하는 법 – 수수료 10,000원, 처리 총 7일.',
  audience: '약국을 새로 개설하려는 약사 또는 한약사',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '10,000원', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '총 7일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081', text: '처리기간', verifiedAt: '2026-07-18' } },
    제출서류: { value: '한약사 면허증 사본(한약사인 경우만, 원본 제시 시 갈음 가능)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081', text: '제출 서류', verifiedAt: '2026-07-18' } },
    온라인신청: { value: 'hurb.or.kr', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081', text: '온라인신청', verifiedAt: '2026-07-18' } },
    근거법령: { value: '약사법 제20조제2항, 시행규칙 제7조 별지 서식 5호', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '약국개설등록이 뭔가요?', anchor: 'q-basic',
      intro: '약국개설등록은 약국을 개설하고자 하는 약사·한약사가 시장·군수·구청장에게 약국개설등록을 신청하는 민원입니다. 약사법 제20조제2항에 근거하며, 약국개설등록신청서(별지 서식 5호)를 작성해 신청합니다. 약국을 새로 열려면 반드시 이 등록을 마쳐야 합니다.',
      highlights: ['약사·한약사가 약국을 개설하기 전 필수 등록', '약사법 제20조제2항 근거', '약국개설등록신청서(별지 제5호) 작성', '약사 면허 또는 한약사 면허가 있어야 신청 가능'],
      box: { label: '핵심', content: '약사 또는 한약사가 약국을 개설하기 전 반드시 필요한 등록.' },
    },
    {
      q: '면허증을 직접 제출해야 하나요?', anchor: 'q-license-submission',
      intro: '신청인이 한약사인 경우 한약사 면허증 사본을 제출해야 하지만, 신청서를 제출할 때 면허증 원본을 제시하면 사본 제출을 갈음할 수 있습니다. 신청인이 약사인 경우 약사 면허증은 담당공무원이 행정정보공동이용을 통해 확인하며, 원본 제시 시 담당공무원의 확인으로 갈음할 수 있습니다.',
      highlights: ['한약사: 면허증 사본 제출(원본 제시로 갈음 가능)', '약사: 담당공무원이 행정정보로 확인(원본 제시로 갈음 가능)', '한약사와 약사의 면허증 처리 방식이 다름', '원본을 직접 제시하면 서류 준비 부담이 줄어듦'],
      box: { label: '면허증 확인', content: '한약사는 사본 제출, 약사는 행정정보 확인(둘 다 원본 제시로 갈음 가능).' },
    },
    {
      q: '온라인으로 신청할 수 있나요?', anchor: 'q-online-application',
      intro: '네, 온라인 신청은 hurb.or.kr(약사인력관리시스템 등)을 통해 가능합니다. 정부24 외에도 이 전용 시스템을 통해 신청할 수 있습니다.',
      highlights: ['온라인 신청: hurb.or.kr', '정부24 외 전용 시스템도 이용 가능', '인터넷 신청 시에도 처리기간은 동일하게 적용', '방문·우편 신청도 함께 가능'],
      box: { label: '온라인 신청', content: 'hurb.or.kr을 통한 전용 온라인 신청 가능.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '한약사 면허증 사본이 필요합니다(신청인이 한약사인 경우만 해당). 신청서 제출 시 면허증 원본을 제시하면 사본 제출을 갈음할 수 있습니다. 약사 면허증은 신청인이 약사인 경우 담당공무원이 행정정보공동이용을 통해 확인합니다.',
      highlights: ['한약사만 면허증 사본이 원칙적 제출서류', '약사는 행정정보로 확인(별도 제출 원칙적 불요)', '두 경우 모두 원본 제시로 절차 간소화 가능', '전반적으로 서류 부담이 적은 절차'],
      box: { label: '준비서류', content: '한약사는 면허증 사본, 약사는 행정정보 확인(둘 다 원본 제시 가능).' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 10,000원입니다. 처리기간은 총 7일이 소요됩니다.',
      highlights: ['수수료: 10,000원', '처리기간: 총 7일', '개국 일정에 맞춰 여유 있게 신청 권장', '서류 부담이 적어 비교적 신속하게 준비 가능'],
      box: { label: '수수료·처리기간', content: '수수료 10,000원, 처리 총 7일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 우편입니다. 접수·처리기관은 시·군·구입니다. 약국 소재지를 관할하는 시군구에 신청합니다.',
      highlights: ['인터넷·방문·우편 세 가지 방법', '접수·처리기관: 시·군·구', '약국 소재지 관할 시군구 이용', '정부24 또는 hurb.or.kr 온라인 신청 가능'],
      box: { label: '신청경로', content: '정부24·hurb.or.kr 온라인 또는 약국 소재지 관할 시군구.' },
    },
  ],
  faq: [
    { q: '수수료는 얼마인가요?', a: '10,000원입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081' },
    { q: '처리는 얼마나 걸리나요?', a: '총 7일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081' },
    { q: '한약사도 약국을 개설할 수 있나요?', a: '네, 한약사도 약국개설등록을 신청할 수 있으며 한약사 면허증 사본을 제출합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081' },
    { q: '면허증 사본을 꼭 제출해야 하나요?', a: '아니요, 신청서 제출 시 면허증 원본을 제시하면 사본 제출을 갈음할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081' },
    { q: 'hurb.or.kr에서도 신청할 수 있나요?', a: '네, 정부24 외에도 hurb.or.kr을 통해 온라인 신청이 가능합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081' },
  ],
  sources: [
    { label: '정부24(약국개설등록)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000081' },
    { label: '보건복지부 약무정책과', url: 'https://www.mohw.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const pharmacyEstablishmentRegistrationSpokes = [];
