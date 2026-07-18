/* 산재보험 장해보상청구 - 고용노동부·정부24 */
export const industrialAccidentDisabilityBenefitPolicy = {
  id: '340', type: 'service' as const,
  title: '산재 장해급여 치료 끝난 후 근로복지공단에 청구하는 법',
  titleKeywords: { k1: '산재장해급여', k2: '장해보상청구', k3: '구비서류없음', k4: '근로복지공단' },
  slug: 'industrial-accident-disability-benefit', org: '고용노동부·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '상시 신청 가능(처리 총 10일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266', ctaLabel: '정부24 산재보험 장해보상청구 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '산재보험 장해보상청구는 업무상 부상이나 질병으로 치료를 받은 후에도 신체 등에 장해가 남은 근로자가 그에 대한 보상을 받기 위해 청구하는 절차로, 산업재해보상보험법 제57조에 근거합니다. 정부24에서 인터넷·방문·팩스·우편으로 신청할 수 있으며 수수료는 없고 별도 구비서류도 필요 없습니다. 처리기간은 총 10일이 소요됩니다. 산업재해보상보험 장해급여 청구서(보상업무처리규정 별지 서식 11호)를 작성합니다. 접수·처리기관은 근로복지공단지역본부(지사)입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 근로복지공단에서 확인이 필요합니다.',
  metaDescription: '산재 장해급여 치료 끝난 후 근로복지공단에 청구하는 법 – 수수료 없음, 구비서류 없음, 처리 총 10일. 요양급여·유족급여와는 별개의 청구.',
  audience: '업무상 부상·질병 치료 후 신체 장해가 남은 근로자',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, FAX, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266', text: '신청방법', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '총 10일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266', text: '처리기간', verifiedAt: '2026-07-17' } },
    구비서류: { value: '없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266', text: '구비서류', verifiedAt: '2026-07-17' } },
    접수처리기관: { value: '근로복지공단지역본부(지사)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266', text: '신청 방법 및 절차', verifiedAt: '2026-07-17' } },
    근거법령: { value: '산업재해보상보험법 제57조, 시행령 제21조제1항', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '산재 장해보상청구가 뭔가요?', anchor: 'q-basic',
      intro: '산재보험 장해보상청구는 업무상 부상 및 질병으로 치료를 받은 후에도 신체 등에 장해가 남은 근로자가 그 장해에 대한 보상을 받기 위해 청구하는 민원사무입니다. 산업재해보상보험법 제57조에 근거합니다. 치료가 끝나고(치유) 장해가 확정된 이후에 신청할 수 있는 절차입니다.',
      highlights: ['치료 종료 후 남은 장해에 대한 보상 청구', '산업재해보상보험법 제57조 근거', '치유(치료 종결) 이후 신청 가능한 절차', '요양급여(치료비)와는 별개의 보상'],
      box: { label: '핵심', content: '업무상 부상·질병 치료 후 남은 장해에 대해 보상을 청구하는 절차.' },
    },
    {
      q: '요양급여와는 어떻게 다른가요?', anchor: 'q-vs-medical-benefit',
      intro: '요양급여는 업무상 부상·질병의 치료비를 지원받기 위한 신청인 반면, 장해보상청구는 치료가 끝난 후에도 신체에 남은 장해(후유증)에 대한 별도의 보상을 받기 위한 청구입니다. 즉 치료 단계에서는 요양급여를, 치료가 종결되고 장해가 확정된 이후에는 장해보상청구를 각각 진행하게 됩니다.',
      highlights: ['요양급여: 치료 단계의 치료비 지원', '장해보상청구: 치료 종결 후 장해 보상', '순서상 요양급여 다음 단계로 진행되는 경우 많음', '두 절차는 각각 별도로 청구해야 함'],
      table: { caption: '산재보험 급여 비교', headers: ['구분', '요양급여', '장해급여'], rows: [['시점', '치료 중', '치료 종결(치유) 후'], ['목적', '치료비 지원', '남은 장해에 대한 보상']] },
    },
    {
      q: '신청할 때 무엇이 필요한가요?', anchor: 'q-docs',
      intro: '이 민원은 구비서류가 없습니다. 산업재해보상보험 장해급여 청구서(보상업무처리규정 별지 서식 11호)만 작성하면 되며, 별도로 준비해서 제출할 서류는 없습니다. 다만 실제로는 장해 정도를 확인하기 위한 진단서 등이 심사 과정에서 요구될 수 있으므로, 근로복지공단에 미리 확인하는 것이 안전합니다.',
      highlights: ['구비서류 없음(공식적으로는)', '장해급여 청구서(별지 제11호)만 작성', '심사 과정에서 진단서 등이 요구될 수 있음', '신청 전 근로복지공단에 필요서류 확인 권장'],
      box: { label: '준비서류', content: '공식적으로는 없으나, 장해진단서 등이 심사에 필요할 수 있음.' },
    },
    {
      q: '처리기간은 얼마나 걸리나요?', anchor: 'q-period',
      intro: '처리기간은 총 10일입니다. 근로복지공단이 장해등급을 심사하는 절차를 거치기 때문에 즉시 처리되지 않습니다. 장해등급에 따라 지급되는 급여액이 달라지므로, 심사 결과를 정확히 확인하는 것이 중요합니다.',
      highlights: ['처리기간: 총 10일', '근로복지공단의 장해등급 심사 절차 필요', '장해등급에 따라 급여액 결정', '심사 결과 통지 후 급여 지급'],
      box: { label: '처리기간', content: '총 10일 소요. 장해등급 심사를 거쳐 급여액 결정.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 팩스, 우편입니다. 접수·처리기관은 근로복지공단지역본부(지사)입니다. 근로복지공단 홈페이지(comwel.or.kr)나 고용·산재보험 토탈서비스에서도 온라인으로 신청할 수 있습니다.',
      highlights: ['인터넷·방문·FAX·우편 네 가지 방법', '접수·처리기관: 근로복지공단지역본부(지사)', '근로복지공단 홈페이지에서도 신청 가능', '고용·산재보험 토탈서비스 이용 가능'],
      box: { label: '신청경로', content: '근로복지공단지역본부(지사) 또는 근로복지공단 홈페이지에서 신청.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 고용노동부 산재보상정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 근로복지공단지역본부(지사)에 직접 연락하는 것이 정확합니다. 근로복지공단 고객센터(국번없이 1588-0075)나 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 고용노동부 산재보상정책과', '개별 민원 문의는 관할 근로복지공단지역본부', '근로복지공단 고객센터 1588-0075', '정부24 콜센터 1588-2188'],
      box: { label: '문의처', content: '개별 민원은 관할 근로복지공단지역본부, 일반 안내는 1588-0075.' },
    },
  ],
  faq: [
    { q: '치료가 끝나면 자동으로 장해급여가 나오나요?', a: '아니요, 치료 종결 후 별도로 장해보상청구를 해야 합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266' },
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266' },
    { q: '구비서류가 정말 없나요?', a: '공식적으로는 없지만, 장해 정도 심사를 위해 진단서 등이 요구될 수 있으니 미리 확인하는 것이 좋습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266' },
    { q: '처리는 얼마나 걸리나요?', a: '총 10일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266' },
    { q: '요양급여와 같이 신청하나요?', a: '아니요, 요양급여는 치료 단계, 장해급여는 치료 종결 후 별도로 청구합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266' },
  ],
  sources: [
    { label: '정부24(산재보험 장해보상청구)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000266' },
    { label: '근로복지공단', url: 'https://www.comwel.or.kr' },
    { label: '고용노동부', url: 'https://www.moel.go.kr' },
  ],
} as const;

export const industrialAccidentDisabilityBenefitSpokes = [];
