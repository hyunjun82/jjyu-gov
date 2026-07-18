/* 중학교 전입·편입학배정신청 - 교육부·정부24 */
export const middleSchoolTransferAssignmentPolicy = {
  id: '433', type: 'service' as const,
  title: '중학교 전학 편입학 배정원서와 재학증명서로 교육지원청에 즉시 신청하는 법',
  titleKeywords: { k1: '중학교전입편입학배정신청', k2: '배정원서재학증명서', k3: '초중등교육법시행령제73조', k4: '교육지원청접수처리' },
  slug: 'middle-school-transfer-assignment', org: '교육부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 조례로 결정', deadline: '이사·전출입 등 전학 사유 발생 시 신청(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067', ctaLabel: '정부24 중학교 전입·편입학배정신청 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '중학교 전입·편입학배정신청은 중학교 전학·편입학을 하고자 학교의 배정을 신청하는 절차로, 초·중등교육법 시행령 제73조에 근거합니다. 거주지 이전 등의 사유로 중학교를 옮기려는 학생과 보호자가 신청합니다. 신청 방법은 방문만 가능하며, 신청자격은 누구나 신청 가능합니다. 수수료는 조례로 결정됩니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 제출서류는 배정원서, 재학증명서입니다. 주민등록정보는 담당공무원이 행정정보공동이용으로 확인할 수 있습니다. 접수·처리기관은 교육지원청입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 교육지원청에서 확인이 필요합니다.',
  metaDescription: '중학교 전학 편입학 배정원서와 재학증명서로 교육지원청에 즉시 신청하는 법 – 처리 즉시(3시간), 수수료는 조례로 결정.',
  audience: '거주지 이전 등의 사유로 중학교를 전학·편입학하려는 학생 및 보호자',
  keyFacts: {
    신청방법: { value: '방문', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '조례로 결정', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067', text: '처리기간', verifiedAt: '2026-07-18' } },
    제출서류: { value: '배정원서, 재학증명서', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067', text: '제출 서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '초·중등교육법 시행령 제73조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '중학교 전입·편입학배정신청이 뭔가요?', anchor: 'q-basic',
      intro: '중학교 전입·편입학배정신청은 중학교 전학·편입학을 하고자 학교의 배정을 신청하는 민원사무입니다. 초·중등교육법 시행령 제73조에 근거합니다. 거주지를 이전하거나 다른 지역으로 전출하는 경우 새로운 학교를 배정받기 위해 필요한 절차입니다.',
      highlights: ['중학교 전학·편입학 시 학교 배정을 받는 절차', '초·중등교육법 시행령 제73조 근거', '거주지 이전·전출 시 필요한 필수 절차', '배정받은 학교로 전학이 확정됨'],
      box: { label: '핵심', content: '거주지 이전 등으로 중학교를 옮길 때 새 학교를 배정받는 절차.' },
    },
    {
      q: '전학과 편입학은 어떻게 다른가요?', anchor: 'q-transfer-vs-admission',
      intro: '전학은 이미 재학 중인 학생이 다른 학교로 소속을 옮기는 것이고, 편입학은 유학이나 자퇴 등으로 학적이 없던 학생이 특정 학년에 다시 입학하는 것입니다. 두 경우 모두 이 배정신청 절차를 통해 새로운 학교를 배정받습니다.',
      highlights: ['전학: 재학 중인 학생이 다른 학교로 이동', '편입학: 학적이 없던 학생이 특정 학년에 입학', '두 경우 모두 배정신청 절차 필요', '거주지 관할 교육지원청에서 배정 결정'],
      box: { label: '전학 vs 편입학', content: '전학(재학생 이동)과 편입학(학적 재취득)의 차이.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '배정원서와 재학증명서가 필요합니다. 주민등록정보는 담당공무원이 행정정보공동이용을 통해 확인할 수 있어 별도로 제출할 필요가 없습니다.',
      highlights: ['배정원서 필수 제출', '재학증명서 필수 제출(기존 학교 발급)', '주민등록정보는 행정정보로 확인 가능', '거주지 이전 증빙이 필요할 수 있어 사전 확인 권장'],
      box: { label: '준비서류', content: '배정원서+재학증명서(주민등록정보는 행정정보로 확인).' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 조례로 결정되어 지역마다 다를 수 있습니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다.',
      highlights: ['수수료: 조례로 결정(지역별 상이)', '처리기간: 즉시(근무시간 내 3시간)', '전학 예정일에 맞춰 여유를 두고 신청 권장', '학기 중 이사 시 신속하게 처리 가능'],
      box: { label: '수수료·처리기간', content: '수수료는 조례로 결정, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 방문만 가능합니다. 접수·처리기관은 교육지원청입니다. 새로 이사한 거주지를 관할하는 교육지원청을 방문해 신청합니다.',
      highlights: ['방문만 가능(인터넷·우편 불가)', '접수·처리기관: 교육지원청', '새 거주지 관할 교육지원청 방문 필요', '배정 완료 후 해당 학교로 전학 절차 진행'],
      box: { label: '신청경로', content: '새 거주지 관할 교육지원청 방문 신청.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 교육부 교육과정운영지원과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 교육지원청(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 교육부 교육과정운영지원과', '개별 민원 문의는 관할 교육지원청', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 교육지원청, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067' },
    { q: '수수료가 있나요?', a: '조례로 결정되어 지역마다 다를 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067' },
    { q: '온라인으로 신청할 수 있나요?', a: '아니요, 방문으로만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067' },
    { q: '어디에 신청하나요?', a: '새로 이사한 거주지를 관할하는 교육지원청에 신청합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067' },
    { q: '누구나 신청할 수 있나요?', a: '네, 신청자격에 제한이 없어 누구나 신청 가능합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067' },
  ],
  sources: [
    { label: '정부24(중학교 전입·편입학배정신청)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000067' },
    { label: '교육부 교육과정운영지원과', url: 'https://www.moe.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const middleSchoolTransferAssignmentSpokes = [];
