/* 해외거래처부호등록 - 관세청·정부24 */
export const overseasTradingPartnerCodeRegistrationPolicy = {
  id: '606', type: 'service' as const,
  title: '해외거래처부호등록 송품장으로 세관에 수수료없이 1일 만에 받는 법',
  titleKeywords: { k1: '해외거래처부호신규변경신청서관세법제241조시행령제246조시행규칙제77조의5통관고유부호및해외거래처부호등록관리에관한고시제9조', k2: '해외거래처국가상호주소표기송품장Invoice선하증권상품포장명세서위임장별지7호서식변경내역증빙서류사본', k3: '수수료없음구비서류있음관세청기업심사과042-481-7650해외공급자부호등록', k4: '세관접수처리총1일신규변경신청서하나로처리' },
  slug: 'overseas-trading-partner-code-registration', org: '관세청·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '수입 통관 시 해외공급자부호가 필요할 때 신청(처리 총 1일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245', ctaLabel: '정부24 해외거래처부호등록 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '해외거래처부호등록은 해외공급자부호를 등록하고자 할 경우 신청하는 민원사무로, 관세법 제241조·시행령 제246조·시행규칙 제77조의5·통관고유부호 및 해외거래처부호 등록·관리에 관한 고시 제9조에 근거합니다. 신청 방법은 인터넷, 방문, FAX, 우편입니다. 신청자격은 본인 또는 대리인입니다. 수수료는 없습니다. 처리기간은 총1일입니다. 제출서류는 해외거래처의 국가·상호·주소 표기가 된 송품장(Invoice), 해당 서류가 없는 경우 이를 대신할 수 있는 서류(선하증권, 상품포장명세서 등), 위임장(해당 시), 변경 신청 시 변경내역 증빙서류 사본입니다. 접수·처리기관은 세관입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 세관에서 확인이 필요합니다.',
  metaDescription: '해외거래처부호등록 송품장으로 세관에 수수료없이 1일 만에 받는 법 – 수수료 없음, 처리 총 1일.',
  audience: '수입 통관 시 해외 공급업체를 식별하는 해외거래처부호가 필요한 수입업체',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, FAX, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '총 1일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245', text: '처리기간', verifiedAt: '2026-07-18' } },
    제출서류: { value: '해외거래처 국가·상호·주소 표기 송품장(Invoice), 대체서류(선하증권 등), 위임장(해당 시), 변경증빙서류(변경 시)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245', text: '제출 서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '관세법 제241조, 시행령 제246조, 시행규칙 제77조의5, 통관고유부호 및 해외거래처부호 등록·관리에 관한 고시 제9조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '해외거래처부호등록이 뭔가요?', anchor: 'q-basic',
      intro: '해외거래처부호등록은 해외공급자부호를 등록하고자 할 경우 신청하는 민원사무입니다. 관세법 제241조에 근거하며, 해외거래처부호 신규(변경) 신청서를 작성해 신청합니다. 해외에서 물품을 수입할 때 세관에 해외 공급업체를 식별하는 고유부호로 신고해야 하므로, 수입업을 하려면 이 해외거래처부호를 등록해야 합니다.',
      highlights: ['수입 통관 시 해외 공급업체 식별을 위한 필수 부호 등록', '관세법 제241조 근거', '해외거래처부호 신규(변경) 신청서 작성', '통관고유부호와 함께 수입 통관의 기초가 되는 등록'],
      box: { label: '핵심', content: '수입 통관 시 해외 공급업체를 식별하는 부호를 등록.' },
    },
    {
      q: '통관고유부호와는 다른 절차인가요?', anchor: 'q-vs-customs-code',
      intro: '네, 통관고유부호는 수출입 사업자 본인을 식별하는 부호인 반면, 해외거래처부호는 해외의 거래 상대방(공급업체)을 식별하는 부호입니다. 두 부호 모두 관세법 제241조에 근거하지만 대상이 다르며, 각각 별도로 등록해야 합니다.',
      highlights: ['통관고유부호: 국내 수출입 사업자(본인) 식별', '해외거래처부호: 해외 거래 상대방(공급업체) 식별', '두 부호 모두 필요, 각각 별도 등록', '수입 통관 절차에서 함께 사용되는 부호'],
      box: { label: '통관고유부호 vs 해외거래처부호', content: '통관고유부호는 본인, 해외거래처부호는 해외 거래처 식별.' },
    },
    {
      q: '송품장(Invoice)은 왜 필요한가요?', anchor: 'q-invoice',
      intro: '해외거래처의 국가, 상호, 주소가 표기된 송품장(Invoice)이 필요합니다. 이는 등록하려는 해외거래처가 실제로 존재하는 거래 상대방임을 증명하는 핵심 서류입니다. 송품장이 없는 경우 선하증권, 상품포장명세서 등 해당 정보를 확인할 수 있는 다른 서류로 대체할 수 있습니다.',
      highlights: ['해외거래처의 국가·상호·주소를 증명하는 핵심 서류', '실존하는 거래 상대방임을 증명하는 목적', '송품장이 없으면 선하증권·상품포장명세서 등으로 대체 가능', '거래 초기에는 계약서·주문서 등도 활용 가능'],
      box: { label: '송품장(Invoice)', content: '해외거래처의 실존과 정보를 증명하는 핵심 서류(대체서류 가능).' },
    },
    {
      q: '변경 신청은 서류가 간단한가요?', anchor: 'q-change-application',
      intro: '네, 변경 신청의 경우 변경내역 증빙서류 사본만 제출하면 됩니다. 신규 등록보다 서류 부담이 훨씬 적습니다. 이미 등록된 해외거래처의 정보(상호·주소 등)가 변경된 경우 이 절차를 이용합니다.',
      highlights: ['변경 신청: 변경내역 증빙서류 사본만 제출', '신규 등록보다 서류 부담이 훨씬 적음', '거래처 상호·주소 변경 시 이용', '기존 등록 정보를 최신 상태로 유지하는 절차'],
      box: { label: '변경 신청', content: '변경내역 증빙서류 사본만으로 간단하게 처리.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총1일로 매우 신속합니다.',
      highlights: ['수수료: 없음', '처리기간: 총 1일(매우 신속)', '수입 통관 업무의 신속한 개시를 지원', '서류만 갖추면 당일 처리도 가능'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 총 1일로 신속 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, FAX, 우편입니다. 접수·처리기관은 세관입니다. 제도를 담당하는 기관은 관세청 기업심사과입니다.',
      highlights: ['인터넷·방문·FAX·우편 네 가지 방법', '접수·처리기관: 세관', '정부24 온라인 신청으로 방문 없이 처리 가능', '담당기관: 관세청 기업심사과(042-481-7650)'],
      box: { label: '신청경로', content: '정부24 온라인 또는 방문·FAX·우편으로 세관에 신청.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245' },
    { q: '처리는 얼마나 걸리나요?', a: '총 1일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245' },
    { q: '통관고유부호와 같은 건가요?', a: '아니요, 통관고유부호는 본인 사업자, 해외거래처부호는 해외 공급업체를 식별하는 별개의 부호입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245' },
    { q: '송품장이 없으면 신청할 수 없나요?', a: '아니요, 선하증권이나 상품포장명세서 등 대체서류로 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245' },
    { q: '변경 신청 시에도 서류가 많이 필요한가요?', a: '아니요, 변경내역 증빙서류 사본만 제출하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245' },
  ],
  sources: [
    { label: '정부24(해외거래처부호등록)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12200000245' },
    { label: '관세청 기업심사과 042-481-7650', url: 'https://www.customs.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const overseasTradingPartnerCodeRegistrationSpokes = [];
