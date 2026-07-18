/* 이주비 청구 - 고용노동부·정부24 */
export const relocationExpenseClaimPolicy = {
  id: '345', type: 'service' as const,
  title: '이주비 청구 취업으로 이사했으면 운송비 영수증으로 받는 법',
  titleKeywords: { k1: '이주비청구', k2: '거주지이전취업', k3: '이사화물운송명세', k4: '지방고용노동관서' },
  slug: 'relocation-expense-claim', org: '고용노동부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '상시 신청 가능(처리 총 5일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078', ctaLabel: '정부24 이주비 청구 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '이주비 청구는 실업급여 수급자격자가 직업안정기관이 소개한 직업에 취업하거나 지시받은 훈련 등을 받기 위해 거주지를 이전하는 경우, 그 이사비용을 지급받기 위해 신청하는 절차입니다. 정부24에서 인터넷·방문·팩스·우편으로 신청할 수 있으며 수수료는 없습니다. 처리기간은 총 5일이 소요됩니다. 제출서류는 수급자격증 사본 1부, 영수증 등 이사화물의 운송 명세(이동구간·이동거리·운송비 등)를 확인할 수 있는 서류입니다. 주민등록표 등본은 행정정보공동이용을 통해 담당공무원이 확인할 수 있습니다. 접수·처리기관은 지방고용노동관서입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 고용노동부에서 확인이 필요합니다.',
  metaDescription: '이주비 청구 취업으로 이사했으면 운송비 영수증으로 받는 법 – 수수료 없음, 처리 총 5일. 수급자격증 사본+이사화물 운송 명세서 필요.',
  audience: '직업안정기관 소개로 취업·훈련을 위해 거주지를 이전한 실업급여 수급자격자',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, FAX, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078', text: '신청방법', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '총 5일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '수급자격증 사본 1부, 이사화물 운송 명세(영수증 등)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078', text: '제출서류', verifiedAt: '2026-07-17' } },
    접수처리기관: { value: '지방고용노동관서', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078', text: '신청 방법 및 절차', verifiedAt: '2026-07-17' } },
    근거법령: { value: '고용보험법 시행령 제90조·제93조의2, 시행규칙 제114조·제115조의5', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '이주비 청구가 뭔가요?', anchor: 'q-basic',
      intro: '이주비 청구는 실업급여 수급자격자가 직업안정기관(고용센터)이 소개한 직업에 취업하거나, 직업안정기관이 지시한 훈련 등을 받기 위해 거주지를 이전하는 경우 그 비용을 지급받기 위해 신청하는 민원사무입니다. 고용보험법 시행령 제90조에 근거하며, 취업·훈련을 위한 이사 부담을 덜어주기 위한 제도입니다.',
      highlights: ['취업·훈련을 위한 거주지 이전 시 이사비용 지원', '고용보험법 시행령 제90조 근거', '직업안정기관 소개·지시가 전제 조건', '취업으로 인한 이사 부담 경감 목적'],
      box: { label: '핵심', content: '고용센터 소개로 취업·훈련을 위해 이사했을 때 이사비용을 지원받는 제도.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '수급자격증 사본 1부와 영수증 등 이사화물의 운송 명세(이동구간·이동거리·운송비 등)를 확인할 수 있는 서류가 필요합니다. 주민등록표 등본은 행정정보공동이용을 통해 담당공무원이 확인할 수 있으므로 별도로 제출하지 않아도 됩니다. 이주비 청구서(별지 서식 99호)를 작성합니다.',
      highlights: ['수급자격증 사본 1부 필수', '이사화물 운송 명세(영수증 등) 필요', '이동구간·이동거리·운송비를 확인할 수 있어야 함', '주민등록표 등본은 행정정보공동이용으로 확인'],
      box: { label: '준비서류', content: '수급자격증 사본+이사화물 운송 명세(영수증 등).' },
    },
    {
      q: '처리기간은 얼마나 걸리나요?', anchor: 'q-period',
      intro: '처리기간은 총 5일입니다. 지방고용노동관서가 취업·훈련과 거주지 이전의 인과관계, 운송 비용의 적정성을 확인하는 절차를 거치기 때문에 즉시 처리되지 않습니다. 이사 후 가능한 빨리 관련 서류를 준비해 신청하는 것이 좋습니다.',
      highlights: ['처리기간: 총 5일', '취업·훈련과 이전의 인과관계 확인 절차', '운송 비용의 적정성도 함께 확인', '이사 후 신속한 서류 준비 권장'],
      box: { label: '처리기간', content: '총 5일 소요. 취업·훈련과 이전 인과관계 확인 절차 포함.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 팩스, 우편입니다. 접수·처리기관은 지방고용노동관서입니다. 고용보험 홈페이지(ei.go.kr)에서도 온라인으로 신청할 수 있습니다.',
      highlights: ['인터넷·방문·FAX·우편 네 가지 방법', '접수·처리기관: 지방고용노동관서', '고용보험 홈페이지에서도 신청 가능', '실업급여 담당 고용센터를 통해 문의 가능'],
      box: { label: '신청경로', content: '지방고용노동관서 또는 고용보험 홈페이지(ei.go.kr)에서 신청.' },
    },
    {
      q: '광역 구직활동비와는 어떻게 다른가요?', anchor: 'q-vs-wide-area',
      intro: '광역 구직활동비는 구직활동(면접 등) 자체를 위한 이동비용을 지원하는 것이고, 이주비는 실제로 취업이나 훈련이 확정되어 거주지를 옮길 때 드는 이사비용을 지원하는 것입니다. 즉 구직활동 단계와 취업 확정 후 이주 단계로 시점이 다릅니다.',
      highlights: ['광역 구직활동비: 구직활동(면접 등) 이동비용', '이주비: 취업·훈련 확정 후 거주지 이전 비용', '지원 시점이 서로 다름(구직 중 vs 취업 확정 후)', '각각 별도 요건에 따라 신청'],
      box: { label: '다른 제도와 구분', content: '구직활동비(구직 중 이동)와 달리 이주비는 취업 확정 후 이사비용 지원.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 고용노동부 고용지원실업급여과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 지방고용노동관서(관할 처리기관)에 직접 연락하는 것이 정확합니다. 고용노동부 고객상담센터(국번없이 1350)나 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 고용노동부 고용지원실업급여과', '개별 민원 문의는 관할 지방고용노동관서', '고용노동부 고객상담센터 국번없이 1350', '정부24 콜센터 1588-2188'],
      box: { label: '문의처', content: '개별 민원은 관할 지방고용노동관서, 일반 안내는 국번없이 1350.' },
    },
  ],
  faq: [
    { q: '이사만 하면 이주비를 받을 수 있나요?', a: '아니요, 직업안정기관이 소개한 취업이나 지시한 훈련을 위한 이전이어야 합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078' },
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078' },
    { q: '어떤 서류가 필요한가요?', a: '수급자격증 사본과 이사화물 운송 명세(영수증 등)가 필요합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078' },
    { q: '처리는 얼마나 걸리나요?', a: '총 5일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078' },
    { q: '광역 구직활동비와 같은 건가요?', a: '아니요, 구직활동비는 구직 중 이동비용이고, 이주비는 취업 확정 후 이사비용입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078' },
  ],
  sources: [
    { label: '정부24(이주비 청구)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000078' },
    { label: '고용보험 홈페이지', url: 'https://www.ei.go.kr' },
    { label: '고용노동부', url: 'https://www.moel.go.kr' },
  ],
} as const;

export const relocationExpenseClaimSpokes = [];
