/* 여권 분실 신고 - 외교부·정부24 */
export const passportLossReportPolicy = {
  id: '408', type: 'service' as const,
  title: '여권 분실 신고 신분증만으로 즉시 접수하는 법 취소는 불가능',
  titleKeywords: { k1: '여권분실신고서류', k2: '분실신고후취소불가', k3: '여권법시행규칙2호', k4: '여권대행시군구시도' },
  slug: 'passport-loss-report', org: '외교부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '분실 즉시 신고 권장(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003', ctaLabel: '정부24 여권 분실 신고 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '여권 분실 신고는 여권을 분실한 경우 해당 사실을 신고하는 절차로, 여권법 제13조에 근거합니다. 분실 신고 후에는 취소가 불가능하므로 정말 분실했는지 확인 후 신고해야 합니다. 신청 방법은 인터넷, 방문, 모바일이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없습니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 제출서류는 신분증(미성년자는 학생증 또는 신분증)이며, 가족관계증명서·기본증명서는 행정정보공동이용을 통해 담당공무원이 확인할 수 있습니다. 접수·처리기관은 여권대행 시·군·구, 여권대행 시·도입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 여권대행기관에서 확인이 필요합니다.',
  metaDescription: '여권 분실 신고 신분증만으로 즉시 접수하는 법 – 수수료 없음, 처리 즉시(3시간). 분실 신고 후 취소는 불가능하니 주의.',
  audience: '여권을 분실해 신고해야 하는 사람',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, 모바일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003', text: '처리기간', verifiedAt: '2026-07-18' } },
    제출서류: { value: '신분증(미성년자는 학생증 또는 신분증)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003', text: '제출 서류', verifiedAt: '2026-07-18' } },
    유의사항: { value: '분실 신고 후 취소 불가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003', text: '제공 내용', verifiedAt: '2026-07-18' } },
    근거법령: { value: '여권법 제13조, 시행령 제20조, 시행규칙 제11조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '여권 분실 신고가 뭔가요?', anchor: 'q-basic',
      intro: '여권 분실 신고는 여권을 분실한 경우 해당 사실을 신고하는 민원사무입니다. 여권법 제13조에 근거하며, 여권 분실 신고서(별지 서식 2호)를 작성해 신고합니다. 분실 신고가 접수되면 해당 여권은 효력을 잃게 됩니다.',
      highlights: ['여권을 분실했을 때 신고하는 절차', '여권법 제13조 근거', '여권 분실 신고서(별지 제2호) 작성', '신고 접수 시 해당 여권 효력 상실'],
      box: { label: '핵심', content: '분실한 여권의 효력을 상실시키고 재발급 절차로 넘어가기 위한 신고.' },
    },
    {
      q: '분실 신고 후 취소할 수 있나요?', anchor: 'q-cannot-cancel',
      intro: '분실 신고 후에는 취소가 불가능합니다. 나중에 여권을 다시 찾더라도 이미 신고된 분실 처리는 되돌릴 수 없으므로, 정말 분실했는지 충분히 확인한 후 신고하는 것이 중요합니다.',
      highlights: ['분실 신고 후 취소 절대 불가능', '나중에 여권을 찾아도 되돌릴 수 없음', '신고 전 충분한 확인 필요', '분실이 확실할 때만 신고 진행 권장'],
      box: { label: '중요 유의사항', content: '분실 신고는 취소 불가능 — 신고 전 반드시 재확인.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '신분증(미성년자의 경우 학생증 또는 신분증)이 필요합니다. 가족관계증명서, 기본증명서는 행정정보공동이용을 통해 담당공무원이 확인할 수 있어 별도로 제출하지 않아도 됩니다.',
      highlights: ['신분증 필수(미성년자는 학생증도 가능)', '가족관계증명서·기본증명서는 행정정보로 확인', '별도 증빙서류 부담이 적음', '대리인 신청 시 추가 확인 필요할 수 있음'],
      box: { label: '준비서류', content: '신분증만 있으면 충분(미성년자는 학생증 가능).' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다. 분실 신고 후에는 새 여권을 재발급받는 절차를 별도로 진행해야 합니다.',
      highlights: ['수수료: 없음', '처리기간: 즉시(근무시간 내 3시간)', '분실 신고 후 별도로 재발급 신청 필요', '해외 체류 중이면 재외공관에서도 신고 가능'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 모바일입니다. 접수·처리기관은 여권대행 시·군·구, 여권대행 시·도입니다. 해외에서 분실한 경우 관할 재외공관에서도 신고할 수 있습니다.',
      highlights: ['인터넷·방문·모바일 세 가지 방법', '접수·처리기관: 여권대행 시·군·구, 여권대행 시·도', '해외 분실 시 관할 재외공관에서도 신고 가능', '온라인 신고 후 필요 시 방문 절차 안내'],
      box: { label: '신청경로', content: '여권대행 시·군·구·시·도 또는 해외는 재외공관.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 외교부 여권과입니다(02-2002-0250). 개별 민원(실제 접수·처리)에 대한 문의는 관할 여권대행기관(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 외교부 여권과(02-2002-0250)', '개별 민원 문의는 관할 여권대행기관', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 여권대행기관, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003' },
    { q: '분실 신고 후 여권을 찾으면 취소할 수 있나요?', a: '아니요, 분실 신고 후에는 취소가 불가능합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003' },
    { q: '해외에서 분실했는데 신고할 수 있나요?', a: '네, 관할 재외공관에서도 분실 신고를 할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003' },
    { q: '어떤 서류가 필요한가요?', a: '신분증만 있으면 되며, 미성년자는 학생증도 가능합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003' },
  ],
  sources: [
    { label: '정부24(여권 분실 신고)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12620000003' },
    { label: '외교부 여권과 02-2002-0250', url: 'https://www.mofa.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const passportLossReportSpokes = [];
