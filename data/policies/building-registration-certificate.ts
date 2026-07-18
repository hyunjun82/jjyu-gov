/* 건물등기사항증명서 발급 - 대법원·정부24 */
export const buildingRegistrationCertificatePolicy = {
  id: '555', type: 'service' as const,
  title: '건물등기사항증명서 발급 인터넷등기소에서 1000원 즉시 3시간 만에 받는 법',
  titleKeywords: { k1: '건물등기사항증명서발급인터넷등기소www.iros.go.kr', k2: '부동산표시사항권리관계소유권저당권전세권근저당권', k3: '방문신청1200원무인발급기인터넷발급1000원구비서류없음', k4: '지방등기소접수처리즉시근무시간내3시간' },
  slug: 'building-registration-certificate', org: '대법원·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '방문신청 통당 1,200원 / 무인발급기·인터넷발급 통당 1,000원', deadline: '수시 신청 가능(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003', ctaLabel: '정부24 건물등기사항증명서 발급 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '건물등기사항증명서 발급은 건물에 관한 등기기록 사항의 전부 또는 일부를 증명하는 서면을 발급받기 위한 민원입니다. 건물등기사항증명서를 발급받으면 건물에 관한 부동산의 표시사항과 권리관계(소유권·저당권 등)를 자세히 알 수 있습니다. 신청 방법은 인터넷, 방문, 무인발급기입니다. 신청자격은 누구나 신청 가능합니다. 신청서와 구비서류는 모두 없음입니다. 수수료는 방문신청 통당 1,200원, 무인발급기 및 인터넷발급신청은 통당 1,000원입니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 접수·처리기관은 지방등기소입니다. 대법원 인터넷등기소(www.iros.go.kr)에서도 발급받을 수 있습니다. 제도를 담당하는 기관은 대법원 부동산등기과입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 대법원 인터넷등기소에서 확인이 필요합니다.',
  metaDescription: '건물등기사항증명서 발급 인터넷등기소에서 1000원 즉시 3시간 만에 받는 법 – 인터넷발급 통당 1,000원, 처리 즉시(3시간).',
  audience: '부동산 매매·전세·대출 계약 등으로 건물의 권리관계(소유권·저당권 등)를 확인해야 하는 누구나',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, 무인발급기', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003', text: '신청자격', verifiedAt: '2026-07-18' } },
    구비서류: { value: '구비서류 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003', text: '구비서류', verifiedAt: '2026-07-18' } },
    수수료: { value: '방문신청 통당 1,200원, 무인발급기·인터넷발급 통당 1,000원', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003', text: '처리기간', verifiedAt: '2026-07-18' } },
    근거: { value: '지방등기소 접수·처리, 대법원 인터넷등기소(www.iros.go.kr)에서도 발급 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003', text: '신청 방법 및 절차', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '건물등기사항증명서 발급이 뭔가요?', anchor: 'q-basic',
      intro: '건물등기사항증명서 발급은 건물에 관한 등기기록 사항의 전부 또는 일부를 증명하는 서면을 발급받기 위한 민원입니다. 건물등기사항증명서를 발급받으면 건물에 관한 부동산의 표시사항과 권리관계(소유권·저당권·전세권·근저당권 등)를 자세히 알 수 있습니다. 부동산 매매, 전세·월세 계약, 대출 담보 설정 시 필수로 확인하는 서류입니다.',
      highlights: ['건물의 등기기록 사항을 증명하는 서면', '부동산 표시사항+권리관계(소유권·저당권 등) 확인 가능', '매매·전세·대출 계약 시 필수 확인 서류', '대법원 인터넷등기소(www.iros.go.kr)에서도 발급 가능'],
      box: { label: '핵심', content: '건물의 표시사항과 소유권·저당권 등 권리관계를 증명하는 서면.' },
    },
    {
      q: '건축물대장과는 뭐가 다른가요?', anchor: 'q-vs-building-ledger',
      intro: '건축물대장은 건물의 물리적·행정적 사실관계(면적, 구조, 용도, 층수 등)를 기록한 행정 서류인 반면, 건물등기사항증명서는 건물의 법적 권리관계(소유권, 저당권, 전세권, 가압류 등)를 증명하는 법원 등기소 관할 서류입니다. 둘은 발급 기관과 목적이 완전히 다르므로 필요한 정보에 따라 구분해 발급받아야 합니다.',
      highlights: ['건축물대장: 면적·구조·용도 등 물리적 사실 기록(행정 서류)', '건물등기사항증명서: 소유권·저당권 등 법적 권리관계 증명(법원 서류)', '건축물대장은 지자체, 등기사항증명서는 등기소 관할', '계약 목적에 맞춰 필요한 서류를 정확히 구분해 발급'],
      box: { label: '건축물대장 vs 등기사항증명서', content: '대장은 물리적 사실, 등기사항증명서는 법적 권리관계를 증명.' },
    },
    {
      q: '수수료가 발급 방법마다 다른가요?', anchor: 'q-fee-by-method',
      intro: '네, 방문신청은 통당 1,200원이지만 무인발급기 및 인터넷발급신청은 통당 1,000원으로 200원 저렴합니다. 발급 방법에 따라 수수료 차이가 있으므로 인터넷이나 무인발급기를 이용하면 조금 더 경제적입니다.',
      highlights: ['방문신청: 통당 1,200원', '무인발급기·인터넷발급: 통당 1,000원(200원 저렴)', '발급 통수가 많을수록 온라인 발급이 유리', '대법원 인터넷등기소에서도 동일하게 발급 가능'],
      box: { label: '수수료', content: '방문 1,200원, 무인발급기·인터넷 1,000원으로 온라인이 저렴.' },
    },
    {
      q: '준비할 서류가 있나요?', anchor: 'q-docs',
      intro: '신청서와 구비서류 모두 없습니다. 민원인이 제출해야 하는 서류도, 담당공무원이 행정정보공동이용으로 확인하는 서류도 없이 발급받을 수 있는 간편한 민원입니다.',
      highlights: ['신청서 없음', '구비서류 없음', '민원인 제출서류·행정정보 확인서류 모두 없음', '별도 서류 준비 없이 바로 발급 가능'],
      box: { label: '준비서류', content: '신청서·구비서류 모두 없어 별도 준비물이 필요 없음.' },
    },
    {
      q: '처리기간은 얼마나 걸리나요?', anchor: 'q-processing-period',
      intro: '처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다. 접수·처리기관은 지방등기소입니다.',
      highlights: ['처리기간: 즉시(근무시간 내 3시간)', '접수·처리기관: 지방등기소', '인터넷·무인발급기 이용 시 방문 없이 즉시 발급', '계약 당일에도 신속하게 발급받을 수 있음'],
      box: { label: '처리기간', content: '즉시 처리, 근무시간 내 3시간이면 발급 완료.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 무인발급기입니다. 신청자격은 누구나 신청 가능합니다. 대법원 인터넷등기소(www.iros.go.kr)에서도 발급받을 수 있습니다. 제도를 담당하는 기관은 대법원 부동산등기과입니다.',
      highlights: ['인터넷·방문·무인발급기 세 가지 방법', '누구나 신청 가능(자격 제한 없음)', '대법원 인터넷등기소(www.iros.go.kr)에서도 발급', '정부24 또는 인터넷등기소 중 편한 곳 이용'],
      box: { label: '신청경로', content: '정부24 또는 대법원 인터넷등기소(www.iros.go.kr), 방문·무인발급기.' },
    },
  ],
  faq: [
    { q: '수수료는 얼마인가요?', a: '방문신청은 통당 1,200원, 무인발급기·인터넷발급은 통당 1,000원입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003' },
    { q: '준비할 서류가 있나요?', a: '아니요, 신청서와 구비서류 모두 없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003' },
    { q: '건축물대장과 같은 서류인가요?', a: '아니요, 건축물대장은 물리적 사실을, 건물등기사항증명서는 소유권 등 법적 권리관계를 증명하는 서로 다른 서류입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003' },
    { q: '대법원 인터넷등기소에서도 발급받을 수 있나요?', a: '네, 대법원 인터넷등기소(www.iros.go.kr)에서도 발급받을 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003' },
  ],
  sources: [
    { label: '정부24(건물등기사항증명서 발급)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000003' },
    { label: '대법원 인터넷등기소', url: 'https://www.iros.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const buildingRegistrationCertificateSpokes = [];
