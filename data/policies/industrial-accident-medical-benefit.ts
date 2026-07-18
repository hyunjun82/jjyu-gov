/* 산재보험 요양급여신청 - 고용노동부·정부24 */
export const industrialAccidentMedicalBenefitPolicy = {
  id: '328', type: 'service' as const,
  title: '산재보험 요양급여 소견서 챙겨서 근로복지공단에 신청하는 법',
  titleKeywords: { k1: '산재보험요양급여', k2: '요양급여소견서', k3: '근로복지공단신청', k4: '업무상부상질병' },
  slug: 'industrial-accident-medical-benefit', org: '고용노동부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '상시 신청 가능(처리 총 7일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261', ctaLabel: '정부24 산재보험 요양급여신청 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '산재보험 요양급여신청은 근로자가 업무상 사유로 부상을 당하거나 질병에 걸렸을 때 치료비 등을 지원받기 위해 신고하는 절차로, 산업재해보상보험법 제40조·제41조에 근거합니다. 정부24에서 인터넷·방문·우편으로 신청할 수 있으며 수수료는 없습니다. 처리기간은 총 7일이 소요됩니다. 제출서류는 산업재해보상보험 요양급여신청 소견서(별지 제3호 서식)이며, 건강검진결과통보서는 행정정보공동이용으로 확인 가능한 경우 제출을 생략할 수 있습니다. 접수·처리기관은 근로복지공단지역본부(지사)입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 근로복지공단에서 확인이 필요합니다.',
  metaDescription: '산재보험 요양급여 소견서 챙겨서 근로복지공단에 신청하는 법 – 수수료 없음, 총 7일 처리. 업무상 부상·질병 치료비 지원.',
  audience: '업무상 사유로 부상당하거나 질병에 걸린 근로자',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261', text: '신청방법', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '총 7일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '산업재해보상보험 요양급여신청 소견서(별지 제3호 서식)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261', text: '제출서류', verifiedAt: '2026-07-17' } },
    접수처리기관: { value: '근로복지공단지역본부(지사)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261', text: '신청 방법 및 절차', verifiedAt: '2026-07-17' } },
    근거법령: { value: '산업재해보상보험법 제40조·제41조, 시행규칙 제20조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '산재보험 요양급여신청이 뭔가요?', anchor: 'q-basic',
      intro: '산재보험 요양급여신청은 근로자가 업무상 사유로 부상을 당하거나 질병에 걸린 경우, 치료에 필요한 요양급여를 받기 위해 신고하는 민원사무입니다. 산업재해보상보험법 제40조·제41조에 근거합니다. 요양급여가 승인되면 치료비를 근로복지공단이 부담하게 되어 근로자는 본인부담 없이 치료를 받을 수 있습니다.',
      highlights: ['업무상 부상·질병 치료비 지원 제도', '산업재해보상보험법 제40조·제41조 근거', '승인 시 근로복지공단이 치료비 부담', '근로자 본인부담 없이 치료 가능'],
      box: { label: '핵심', content: '업무상 부상·질병 시 치료비를 근로복지공단이 부담하도록 신청하는 절차.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '제출서류는 산업재해보상보험 요양급여신청 소견서(별지 제3호 서식)입니다. 이 소견서는 치료를 담당하는 의료기관에서 발급받아야 합니다. 건강검진결과통보서는 행정정보공동이용을 통해 확인 가능한 경우에는 별도로 제출하지 않아도 됩니다.',
      highlights: ['요양급여신청 소견서(별지 제3호) 필수', '소견서는 치료 담당 의료기관에서 발급', '건강검진결과통보서는 행정정보공동이용 시 생략 가능', '신청서는 산업재해보상보험 요양급여신청서 작성'],
      box: { label: '준비서류', content: '의료기관 발급 요양급여신청 소견서(별지 제3호)가 핵심.' },
    },
    {
      q: '처리기간은 얼마나 걸리나요?', anchor: 'q-period',
      intro: '처리기간은 총 7일입니다. 근로복지공단이 업무상 재해 해당 여부를 심사하는 절차를 거치기 때문에, 즉시 처리되는 민원보다 시간이 다소 소요됩니다. 부상이나 질병 발생 후 최대한 빨리 신청서를 제출해야 치료비 부담을 조기에 줄일 수 있습니다.',
      highlights: ['처리기간: 총 7일', '근로복지공단의 업무상 재해 여부 심사 필요', '빨리 신청할수록 치료비 부담 조기 경감', '심사 결과에 따라 승인·불승인 결정'],
      box: { label: '처리기간', content: '총 7일 소요. 업무상 재해 여부 심사를 거침.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 우편입니다. 접수·처리기관은 근로복지공단지역본부(지사)입니다. 근로복지공단 홈페이지(comwel.or.kr)나 고용·산재보험 토탈서비스에서도 온라인으로 신청할 수 있습니다.',
      highlights: ['인터넷·방문·우편 세 가지 방법', '접수·처리기관: 근로복지공단지역본부(지사)', '근로복지공단 홈페이지에서도 신청 가능', '고용·산재보험 토탈서비스 이용 가능'],
      box: { label: '신청경로', content: '근로복지공단지역본부(지사) 또는 근로복지공단 홈페이지에서 신청.' },
    },
    {
      q: '수수료가 있나요?', anchor: 'q-fee',
      intro: '산재보험 요양급여신청은 수수료가 없습니다. 요양급여 승인 이후의 치료비는 근로복지공단이 부담하므로, 신청 과정에서 근로자가 별도로 부담해야 하는 비용은 없습니다.',
      highlights: ['신청 자체는 수수료 없음', '요양급여 승인 후 치료비는 근로복지공단 부담', '근로자의 별도 비용 부담 없음', '치료비 본인부담 경감이 제도의 핵심 목적'],
      box: { label: '수수료', content: '신청 무료. 승인 시 치료비도 근로복지공단이 부담.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 고용노동부 산재보상정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 근로복지공단지역본부(지사)에 직접 연락하는 것이 정확합니다. 근로복지공단 고객센터(국번없이 1588-0075)나 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 고용노동부 산재보상정책과', '개별 민원 문의는 관할 근로복지공단지역본부', '근로복지공단 고객센터 1588-0075', '정부24 콜센터 1588-2188'],
      box: { label: '문의처', content: '개별 민원은 관할 근로복지공단지역본부, 일반 안내는 1588-0075.' },
    },
  ],
  faq: [
    { q: '업무 중 다치면 어떻게 신청하나요?', a: '치료 담당 의료기관에서 요양급여신청 소견서를 발급받아 근로복지공단에 신청하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261' },
    { q: '수수료가 있나요?', a: '없습니다. 승인 시 치료비는 근로복지공단이 부담합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261' },
    { q: '처리는 얼마나 걸리나요?', a: '총 7일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261' },
    { q: '어디서 신청하나요?', a: '근로복지공단지역본부(지사)에 인터넷·방문·우편으로 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261' },
    { q: '건강검진결과통보서도 항상 제출해야 하나요?', a: '행정정보공동이용으로 확인 가능한 경우에는 제출을 생략할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261' },
  ],
  sources: [
    { label: '정부24(산재보험 요양급여신청)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000261' },
    { label: '근로복지공단', url: 'https://www.comwel.or.kr' },
    { label: '고용노동부', url: 'https://www.moel.go.kr' },
  ],
} as const;

export const industrialAccidentMedicalBenefitSpokes = [];
