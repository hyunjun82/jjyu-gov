/* 법인등기사항증명서 발급 - 대법원·정부24 */
export const corporateRegistryCertificatePolicy = {
  id: '383', type: 'service' as const,
  title: '법인등기사항증명서 인터넷등기소 1000원에 즉시 발급받는 법',
  titleKeywords: { k1: '법인등기사항증명서발급', k2: '전부증명서일부증명서차이', k3: '인터넷등기소iros.go.kr', k4: '지방등기소접수처리' },
  slug: 'corporate-registry-certificate', org: '대법원·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '방문 통당 1,200원, 무인발급기·인터넷 통당 1,000원', deadline: '상시 신청 가능(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001', ctaLabel: '정부24 법인등기사항증명서 발급 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '법인등기사항증명서 발급은 법인(상사법인, 민법법인, 개별법에 따라 설립된 법인)의 등기기록에 기록된 등기사항의 전부 또는 일부를 증명하는 서면을 발급받기 위해 신청하는 절차로, 상업등기법 제15조에 근거합니다. 증명서에는 법인의 상호(명칭), 법인등록번호, 본점 소재지, 자본에 관한 사항, 목적, 임원, 지점(분사무소)에 관한 사항 등이 기록됩니다. 법인은 아니지만 합자조합에 관한 등기나 개인상인의 상호등기 등에 대한 등기사항증명서도 발급받을 수 있습니다. 등기사항전부증명서(모든 사항)와 등기사항일부증명서(특정 임원·지점 등 선택 사항)로 나뉩니다. 신청 방법은 인터넷, 방문이며, 대법원 인터넷등기소(iros.go.kr)에서 발급받을 수 있습니다. 신청자격 제한 없이 누구나 신청할 수 있습니다. 수수료는 방문 통당 1,200원, 무인발급기·인터넷 통당 1,000원입니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 구비서류는 없습니다. 접수·처리기관은 지방등기소입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 인터넷등기소에서 확인이 필요합니다.',
  metaDescription: '법인등기사항증명서 인터넷등기소 1000원에 즉시 발급받는 법 – 누구나 신청 가능, 구비서류 없음, 처리 즉시(3시간).',
  audience: '거래·계약 전 상대 법인의 등기사항을 확인해야 하는 사람',
  keyFacts: {
    신청방법: { value: '인터넷(iros.go.kr), 방문', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001', text: '신청방법, 제공 내용', verifiedAt: '2026-07-17' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '방문 통당 1,200원, 무인발급기·인터넷 통당 1,000원', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001', text: '처리기간', verifiedAt: '2026-07-17' } },
    구비서류: { value: '없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001', text: '구비서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '상업등기법 제15조, 상업등기규칙 제26조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '법인등기사항증명서가 뭔가요?', anchor: 'q-basic',
      intro: '법인등기사항증명서는 법인(상사법인, 민법법인, 개별법에 따라 설립된 법인)의 등기기록에 기록된 등기사항의 전부 또는 일부를 증명하는 서면입니다. 상업등기법 제15조에 근거하며, 증명서에는 법인의 상호(명칭), 법인등록번호, 본점 소재지, 자본에 관한 사항, 목적, 임원, 지점(분사무소)에 관한 사항 등이 기록됩니다.',
      highlights: ['법인의 등기기록을 증명하는 공식 서면', '상업등기법 제15조 근거', '상호·자본·임원·본점소재지 등이 기록됨', '거래·계약 전 상대 법인 확인 용도로 활용'],
      box: { label: '핵심', content: '법인의 상호·자본·임원 등 등기사항을 증명하는 서면.' },
    },
    {
      q: '전부증명서와 일부증명서는 어떻게 다른가요?', anchor: 'q-full-vs-partial',
      intro: '등기사항전부증명서는 등기기록에 기록된 등기사항의 전부를 증명하는 증명서이고, 등기사항일부증명서는 신청인이 특정 임원이나 지점 등을 선택해 필요한 사항만 표시된 증명서입니다. 목적에 따라 필요한 유형을 선택해 발급받을 수 있습니다.',
      highlights: ['전부증명서: 등기사항 전체를 증명', '일부증명서: 특정 임원·지점 등만 선택 표시', '목적에 맞는 유형 선택 가능', '거래 상대방 확인 등 필요 범위에 따라 선택'],
      box: { label: '증명서 종류', content: '전부증명서(전체)와 일부증명서(선택 사항만) 두 가지.' },
    },
    {
      q: '법인이 아니어도 발급받을 수 있는 경우가 있나요?', anchor: 'q-non-corporate',
      intro: '법인은 아니지만 합자조합에 관한 등기나 개인상인의 상호등기 등에 대한 등기사항증명서도 발급받을 수 있습니다. 즉 법인등기와 유사한 등기제도를 이용하는 조합·개인상인의 등기사항도 이 민원을 통해 확인할 수 있습니다.',
      highlights: ['합자조합 등기사항증명서도 발급 가능', '개인상인의 상호등기 증명서도 발급 가능', '법인이 아닌 사업 형태도 일부 포함', '거래 상대방이 법인이 아니어도 확인 가능한 경우 있음'],
      box: { label: '확대 적용', content: '합자조합·개인상인 상호등기 등도 함께 발급 가능.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 방문 신청 시 통당 1,200원, 무인발급기 및 인터넷발급 신청 시 통당 1,000원입니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다. 구비서류는 없어 별도 준비 없이 바로 발급받을 수 있습니다.',
      highlights: ['방문: 통당 1,200원', '무인발급기·인터넷: 통당 1,000원', '처리기간: 즉시(근무시간 내 3시간)', '구비서류 없이 바로 발급 가능'],
      box: { label: '수수료·처리기간', content: '방문 1,200원 / 인터넷·무인발급기 1,000원, 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문입니다. 대법원 인터넷등기소(iros.go.kr)에서 발급받을 수 있습니다. 접수·처리기관은 지방등기소입니다.',
      highlights: ['인터넷·방문 두 가지 방법', '대법원 인터넷등기소(iros.go.kr)에서 발급', '접수·처리기관: 지방등기소', '무인발급기로도 즉시 발급 가능'],
      box: { label: '신청경로', content: '대법원 인터넷등기소(iros.go.kr) 또는 지방등기소 방문·무인발급기.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 대법원 사법등기국입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 지방등기소(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 대법원 사법등기국', '개별 민원 문의는 관할 지방등기소', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 지방등기소, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료는 얼마인가요?', a: '방문은 통당 1,200원, 무인발급기·인터넷은 통당 1,000원입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001' },
    { q: '준비할 서류가 있나요?', a: '없습니다. 구비서류 없이 바로 발급받을 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001' },
    { q: '아무나 발급받을 수 있나요?', a: '네, 신청자격에 제한이 없어 누구나 발급받을 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001' },
    { q: '어디서 온라인 발급받나요?', a: '대법원 인터넷등기소(iros.go.kr)에서 발급받을 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001' },
  ],
  sources: [
    { label: '정부24(법인등기사항증명서 발급)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000001' },
    { label: '대법원 인터넷등기소', url: 'https://www.iros.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const corporateRegistryCertificateSpokes = [];
