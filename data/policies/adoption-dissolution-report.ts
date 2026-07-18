/* 친양자파양신고 - 대법원·정부24 */
export const adoptionDissolutionReportPolicy = {
  id: '381', type: 'service' as const,
  title: '친양자파양신고 재판확정 후 1개월 이내 시읍면에 신고하는 법',
  titleKeywords: { k1: '친양자파양신고서류', k2: '가정법원허가재판확정1개월', k3: '친양자입양관계증명서', k4: '가족관계등록법69조' },
  slug: 'adoption-dissolution-report', org: '대법원·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '파양재판 확정일부터 1개월 이내(처리 지체없이)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007', ctaLabel: '정부24 친양자파양신고 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '친양자파양신고는 가정법원의 허가를 얻어 친양자입양을 파양하고자 하는 사람이 재판의 확정일부터 1개월 이내에 가족관계등록 관서의 장에게 신고하는 절차로, 가족관계의 등록 등에 관한 법률 제69조에 근거합니다. 신청 방법은 방문, 우편이며, 신청자격 제한 없이 누구나 신청할 수 있습니다. 수수료는 없습니다. 처리기간은 지체없이입니다. 제출서류는 친양자파양당사자의 기본증명서·친양자입양관계증명서 각 1통(전산확인 불가 시), 친양자 파양재판의 등본 및 확정증명 각 1부, 우편신고 시 신고인의 신분증명서 사본, 신고인 또는 제출인이 출석한 경우 해당 신분증명서입니다. 접수·처리기관은 시·구·읍·면입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 가족관계등록 관서에서 확인이 필요합니다.',
  metaDescription: '친양자파양신고 재판확정 후 1개월 이내 시읍면에 신고하는 법 – 누구나 신청 가능, 수수료 없음, 처리 지체없이.',
  audience: '가정법원 허가로 친양자입양을 파양하게 된 사람',
  keyFacts: {
    신청방법: { value: '방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007', text: '신청방법', verifiedAt: '2026-07-17' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '지체없이', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007', text: '처리기간', verifiedAt: '2026-07-17' } },
    신고기한: { value: '파양재판 확정일부터 1개월 이내', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007', text: '제공 내용', verifiedAt: '2026-07-17' } },
    제출서류: { value: '기본증명서·친양자입양관계증명서 각 1통, 파양재판 등본·확정증명 각 1부', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007', text: '제출 서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '가족관계의 등록 등에 관한 법률 제69조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '친양자파양신고가 뭔가요?', anchor: 'q-basic',
      intro: '친양자파양신고는 가정법원의 허가를 얻어 친양자입양을 파양하고자 하는 사람이 재판의 확정일부터 1개월 이내에 가족관계등록 관서의 장에게 신고하는 민원사무입니다. 가족관계의 등록 등에 관한 법률 제69조에 근거하며, 친양자파양신고서(제7호)를 작성해 신고합니다.',
      highlights: ['가정법원 허가로 친양자입양을 파양하는 신고', '가족관계의 등록 등에 관한 법률 제69조 근거', '친양자파양신고서(제7호) 작성', '재판 확정 후 별도의 신고 절차 필요'],
      box: { label: '핵심', content: '가정법원 허가로 확정된 친양자파양을 가족관계등록부에 반영하는 신고.' },
    },
    {
      q: '언제까지 신고해야 하나요?', anchor: 'q-deadline',
      intro: '파양재판의 확정일부터 1개월 이내에 신고해야 합니다. 이 기한을 넘기면 과태료 등 불이익이 있을 수 있으므로, 재판이 확정되면 신속하게 신고 절차를 진행해야 합니다.',
      highlights: ['파양재판 확정일부터 1개월 이내 신고 필수', '기한을 넘기면 과태료 등 불이익 가능', '재판 확정 즉시 신고 준비 권장', '확정증명 발급 후 바로 신고 절차 진행'],
      box: { label: '신고기한', content: '파양재판 확정일부터 1개월 이내 신고 필수.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '친양자파양당사자의 기본증명서, 친양자입양관계증명서 각 1통이 필요하나 전산정보처리조직으로 내용 확인이 가능한 경우에는 제출을 생략할 수 있습니다. 친양자 파양재판의 등본 및 확정증명 각 1부는 반드시 제출해야 합니다. 우편신고의 경우 신고인의 신분증명서 사본을 첨부해야 하며, 신고인이나 제출인이 직접 출석한 경우에는 해당 신분증명서를 제시합니다.',
      highlights: ['기본증명서+친양자입양관계증명서 각 1통(전산확인 불가 시)', '파양재판 등본+확정증명 각 1부 필수', '우편신고는 신고인 신분증명서 사본 첨부', '출석 시 출석자의 신분증명서 제시'],
      box: { label: '준비서류', content: '파양재판 등본+확정증명(필수)+각종 증명서(전산확인 시 생략 가능).' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 지체없이 처리됩니다. 다만 신고기한(재판 확정일부터 1개월)을 놓치지 않도록 서류를 미리 준비해 접수하는 것이 중요합니다.',
      highlights: ['수수료: 없음', '처리기간: 지체없이', '신고기한(1개월) 준수가 더 중요한 포인트', '서류를 미리 준비해 신속히 접수 권장'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 지체없이 처리(단 신고기한 1개월 준수 필수).' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 방문, 우편입니다. 접수·처리기관은 시·구·읍·면입니다. 본 민원사무안내에 관한 사항은 해당 관할 각 가족관계등록 관서로 문의해야 정확한 안내를 받을 수 있습니다.',
      highlights: ['방문·우편 두 가지 방법(인터넷 불가)', '접수·처리기관: 시·구·읍·면', '관할 가족관계등록 관서 문의로 정확한 안내 확인', '파양당사자 주소지 관할 관서 이용 가능'],
      box: { label: '신청경로', content: '관할 시·구·읍·면에 방문 또는 우편으로 신고.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 대법원 가족관계등록과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 시·구·읍·면(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 대법원 가족관계등록과', '개별 민원 문의는 관할 시·구·읍·면', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 시·구·읍·면, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007' },
    { q: '언제까지 신고해야 하나요?', a: '파양재판 확정일부터 1개월 이내에 신고해야 합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007' },
    { q: '인터넷으로 신청할 수 있나요?', a: '아니요, 방문이나 우편으로만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007' },
    { q: '파양재판 등본은 꼭 내야 하나요?', a: '네, 친양자 파양재판의 등본 및 확정증명 각 1부는 반드시 제출해야 합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007' },
    { q: '처리는 얼마나 걸리나요?', a: '지체없이 처리됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007' },
  ],
  sources: [
    { label: '정부24(친양자파양신고)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=97400000007' },
    { label: '대법원 가족관계등록과', url: 'https://www.scourt.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const adoptionDissolutionReportSpokes = [];
