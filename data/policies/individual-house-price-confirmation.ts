/* 개별주택가격 확인 - 국토교통부·정부24 */
export const individualHousePriceConfirmationPolicy = {
  id: '406', type: 'service' as const,
  title: '개별주택가격 확인 재산세 기준 인터넷·모바일로 즉시 조회하는 법',
  titleKeywords: { k1: '개별주택가격확인', k2: '시장군수구청장결정공시', k3: '모바일열람만가능', k4: '시군구접수처리' },
  slug: 'individual-house-price-confirmation', org: '국토교통부·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료는 조례로 결정', deadline: '상시 신청 가능(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681', ctaLabel: '정부24 개별주택가격 확인 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '개별주택가격 확인은 시장·군수 또는 구청장이 결정·공시한 개별주택의 가격을 확인받기 위해 신청하는 절차로, 부동산 가격공시에 관한 법률 제17조제1항에 근거합니다. 개별주택가격은 재산세·종합부동산세 등 보유세 산정의 기준이 되므로, 대출·상속·매매 등 다양한 상황에서 확인이 필요합니다. 신청 방법은 인터넷, 방문, 우편, 모바일이며(모바일은 열람만 가능), 신청자격 제한 없이 누구나 신청할 수 있습니다. 수수료는 조례로 결정됩니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 제출서류는 신청서입니다. 본 민원은 방문, 전화, 인터넷으로 어디서나 처리가 가능합니다. 접수·처리기관은 시·군·구입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 시·군·구에서 확인이 필요합니다.',
  metaDescription: '개별주택가격 확인 재산세 기준 인터넷·모바일로 즉시 조회하는 법 – 누구나 신청 가능, 처리 즉시(3시간). 대출·상속·매매 시 활용.',
  audience: '재산세·상속·대출·매매 등을 위해 자신의 개별주택가격을 확인해야 하는 주택 소유자',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, 우편, 모바일(모바일은 열람만 가능)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '조례로 결정', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681', text: '처리기간', verifiedAt: '2026-07-18' } },
    제출서류: { value: '신청서', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681', text: '제출 서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '부동산 가격공시에 관한 법률 제17조제1항, 시행령 제32조, 시행규칙 제13조 별지15', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '개별주택가격 확인이 뭔가요?', anchor: 'q-basic',
      intro: '개별주택가격 확인은 시장·군수 또는 구청장이 결정·공시한 개별주택의 가격을 확인받기 위해 신청하는 민원사무입니다. 부동산 가격공시에 관한 법률 제17조제1항에 근거하며, 이 가격은 재산세·종합부동산세 등 보유세와 각종 부담금 산정의 기준으로 활용됩니다.',
      highlights: ['시·군·구가 결정·공시한 개별주택가격을 확인하는 절차', '부동산 가격공시에 관한 법률 제17조제1항 근거', '재산세·종합부동산세 등 보유세 산정 기준', '대출·상속·매매 등에서 확인 필요'],
      box: { label: '핵심', content: '재산세 등 세금 산정 기준이 되는 개별주택가격을 확인받는 절차.' },
    },
    {
      q: '언제 필요한가요?', anchor: 'q-when',
      intro: '대출을 받을 때 담보가치 참고자료로, 상속·증여 시 과세표준 확인용으로, 매매 전 시세 참고용으로, 재산세·종부세 등 세금 산정 근거 확인용으로 다양하게 활용됩니다. 주택을 소유하고 있다면 정기적으로 자신의 개별주택가격을 확인해두는 것이 유용합니다.',
      highlights: ['대출 시 담보가치 참고자료로 활용', '상속·증여 시 과세표준 확인용', '매매 전 시세 참고자료로 활용', '재산세·종부세 등 세금 산정 근거 확인'],
      box: { label: '주요 활용처', content: '대출·상속·증여·매매·세금 산정 근거 확인 등.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '신청서만 제출하면 됩니다. 별도의 복잡한 증빙서류는 필요하지 않으며, 확인하려는 주택의 소재지 정보를 정확히 기재하면 됩니다.',
      highlights: ['신청서만 있으면 신청 가능', '별도 복잡한 증빙서류 불필요', '주택 소재지 정보를 정확히 기재', '온라인은 즉시 조회·출력 가능'],
      box: { label: '준비서류', content: '신청서만 제출하면 충분.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 정액이 아니라 조례로 결정되므로 지역별로 다를 수 있습니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다. 모바일은 열람만 가능하며 정식 발급은 인터넷·방문·우편으로 해야 합니다.',
      highlights: ['수수료: 조례로 결정(지역별 상이 가능)', '처리기간: 즉시(근무시간 내 3시간)', '모바일은 열람만 가능(정식 발급 불가)', '정식 발급은 인터넷·방문·우편 이용'],
      box: { label: '수수료·처리기간', content: '조례로 정한 수수료, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 우편, 모바일입니다. 본 민원은 방문, 전화, 인터넷으로 어디서나 처리가 가능합니다. 온라인열람 민원사무는 MyGOV의 나의 신청내역에서 수령물을 열람할 수 있습니다. 접수·처리기관은 시·군·구입니다.',
      highlights: ['인터넷·방문·우편·모바일 네 가지 방법', '방문·전화·인터넷은 전국 어디서나 처리 가능', 'MyGOV 나의 신청내역에서 수령물 열람 가능', '접수·처리기관: 시·군·구'],
      box: { label: '신청경로', content: '정부24 인터넷 또는 전국 시·군·구 방문·전화·우편.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 국토교통부 부동산평가과입니다(044-201-3430). 개별 민원(실제 접수·처리)에 대한 문의는 관할 시·군·구(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 국토교통부 부동산평가과(044-201-3430)', '개별 민원 문의는 관할 시·군·구', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 시·군·구, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료는 얼마인가요?', a: '정액이 아니라 조례로 결정되므로 관할 시·군·구에서 확인해야 합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681' },
    { q: '모바일로 정식 발급받을 수 있나요?', a: '아니요, 모바일은 열람만 가능하며 정식 발급은 인터넷·방문·우편으로 해야 합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681' },
    { q: '아무나 신청할 수 있나요?', a: '네, 신청자격에 제한이 없어 누구나 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681' },
    { q: '이 가격은 어디에 쓰이나요?', a: '재산세·종합부동산세 등 보유세와 각종 부담금 산정의 기준으로 쓰입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681' },
  ],
  sources: [
    { label: '정부24(개별주택가격 확인)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15000000681' },
    { label: '국토교통부', url: 'https://www.molit.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const individualHousePriceConfirmationSpokes = [];
