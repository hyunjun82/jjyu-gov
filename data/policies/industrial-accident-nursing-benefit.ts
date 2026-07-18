/* 산재보험 간병급여청구 - 고용노동부·정부24 */
export const industrialAccidentNursingBenefitPolicy = {
  id: '451', type: 'service' as const,
  title: '산재보험 간병급여 간병인 증명서류로 근로복지공단에 7일 만에 청구하는 법',
  titleKeywords: { k1: '산재보험간병급여청구', k2: '치유후상시수시간병필요', k3: '별지12호의2서식', k4: '근로복지공단지역본부지사' },
  slug: 'industrial-accident-nursing-benefit', org: '고용노동부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '치유 후 간병 필요·실제 간병 받은 후 청구(처리 총 7일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267', ctaLabel: '정부24 산재보험 간병급여청구 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '산재보험 간병급여청구는 요양급여를 받은 사람 중 치유 후 의학적으로 상시 또는 수시로 간병이 필요하여 실제로 간병을 받은 경우 간병급여를 청구하는 절차로, 산업재해보상보험법 제61조·시행령 제21조제1항·제59조·보상업무처리규정 제30조에 근거합니다. 신청 방법은 인터넷, 방문, FAX, 우편이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없습니다. 처리기간은 총 7일입니다. 제출서류는 간병인의 인적사항을 증명할 수 있는 서류이며, 기존에 이미 제출한 경우 생략할 수 있습니다. 접수·처리기관은 근로복지공단지역본부(지사)입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 근로복지공단에서 확인이 필요합니다.',
  metaDescription: '산재보험 간병급여 간병인 증명서류로 근로복지공단에 7일 만에 청구하는 법 – 수수료 없음, 처리 총 7일. 치유 후 상시·수시 간병 필요 시.',
  audience: '산재 요양급여를 받은 후 치유 상태이나 의학적으로 상시 또는 수시 간병이 필요해 실제 간병을 받은 사람',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, FAX, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '총 7일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267', text: '처리기간', verifiedAt: '2026-07-18' } },
    제출서류: { value: '간병인의 인적사항을 증명할 수 있는 서류(기존 제출 시 생략 가능)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267', text: '제출 서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '산업재해보상보험법 제61조, 시행령 제21조제1항·제59조, 보상업무처리규정 제30조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '산재보험 간병급여청구가 뭔가요?', anchor: 'q-basic',
      intro: '산재보험 간병급여청구는 요양급여를 받은 사람 중 치유 후 의학적으로 상시 또는 수시로 간병이 필요하여 실제로 간병을 받은 경우 간병급여를 청구하는 민원사무입니다. 산업재해보상보험법 제61조에 근거하며, 산업재해보상보험 간병급여 청구서(별지 서식 12호의 2)를 작성해 청구합니다.',
      highlights: ['치유 후에도 상시·수시 간병이 필요한 경우 지급되는 급여', '산업재해보상보험법 제61조 근거', '간병급여 청구서(별지 제12호의 2) 작성', '실제로 간병을 받은 사실이 있어야 청구 가능'],
      box: { label: '핵심', content: '치유 후 상시·수시 간병이 필요해 실제 간병을 받은 경우 청구하는 급여.' },
    },
    {
      q: '어떤 경우에 받을 수 있나요?', anchor: 'q-eligibility',
      intro: '요양급여를 받은 사람이 치유된 상태이지만, 의학적으로 상시 또는 수시로 간병이 필요하다고 인정되고 실제로 간병을 받은 경우에 청구할 수 있습니다. 치유 전 요양 중의 간병은 요양급여로 별도 처리되며, 이 급여는 치유 이후의 지속적인 간병 필요 상황에 적용됩니다.',
      highlights: ['치유 후 상시 또는 수시 간병이 의학적으로 필요한 경우', '실제로 간병을 받았어야 청구 가능', '치유 전 요양 중 간병은 요양급여로 별도 처리', '상시 간병과 수시 간병에 따라 지급 기준이 다를 수 있음'],
      box: { label: '지급 대상', content: '치유 후 상시·수시 간병이 필요해 실제 간병을 받은 사람.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '간병인의 인적사항을 증명할 수 있는 서류가 필요합니다. 기존에 이미 제출한 경우에는 생략할 수 있어, 이전에 간병급여를 청구한 적이 있다면 서류 준비 부담이 줄어듭니다.',
      highlights: ['간병인 인적사항 증명서류 필수', '기존 제출 이력이 있으면 생략 가능', '간병인이 바뀐 경우 새로 제출 필요', '증빙자료는 근로복지공단에 사전 확인 권장'],
      box: { label: '준비서류', content: '간병인 인적사항 증명서류(기존 제출 시 생략 가능).' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총 7일이 소요됩니다.',
      highlights: ['수수료: 없음', '처리기간: 총 7일', '정기적으로 청구가 필요한 경우 반복 신청 가능', '인터넷 신청으로 방문 없이 처리 가능'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 7일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, FAX, 우편입니다. 접수·처리기관은 근로복지공단지역본부(지사)입니다.',
      highlights: ['인터넷·방문·FAX·우편 네 가지 방법', '접수·처리기관: 근로복지공단지역본부(지사)', '거주지 또는 요양 관할 근로복지공단 이용', '인터넷 신청이 가장 편리'],
      box: { label: '신청경로', content: '인터넷 또는 관할 근로복지공단지역본부(지사).' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 고용노동부 산재보상정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 근로복지공단지역본부(지사)(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 고용노동부 산재보상정책과', '개별 민원 문의는 관할 근로복지공단지역본부(지사)', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 근로복지공단, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267' },
    { q: '처리는 얼마나 걸리나요?', a: '총 7일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267' },
    { q: '치유 전에도 청구할 수 있나요?', a: '아니요, 이 급여는 치유 후 상시·수시 간병이 필요한 경우에 청구하는 급여입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267' },
    { q: '간병인 서류를 매번 내야 하나요?', a: '아니요, 기존에 이미 제출한 경우에는 생략할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267' },
    { q: '어디에 신청하나요?', a: '근로복지공단지역본부(지사)에 신청합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267' },
  ],
  sources: [
    { label: '정부24(산재보험 간병급여청구)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000267' },
    { label: '근로복지공단', url: 'https://www.comwel.or.kr' },
    { label: '고용노동부 산재보상정책과', url: 'https://www.moel.go.kr' },
  ],
} as const;

export const industrialAccidentNursingBenefitSpokes = [];
