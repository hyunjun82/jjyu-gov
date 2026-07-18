/* 고용보험 근로자 피보험자격상실 신고, 산재보험 근로자 자격상실 신고 - 고용노동부·정부24 */
export const employeeInsuranceLossReportPolicy = {
  id: '464', type: 'service' as const,
  title: '근로자 퇴사 시 고용산재보험 상실신고 사업주가 서류 없이 7일 만에 하는 법',
  titleKeywords: { k1: '고용보험피보험자격상실신고산재보험자격상실신고', k2: '사업주하수급인이직고용관계종료', k3: 'total.comwel.or.kr별지22호의6', k4: '근로복지공단지역본부지사' },
  slug: 'employee-insurance-loss-report', org: '고용노동부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '근로자 이직·고용관계 종료 시 신고(처리 총 7일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008', ctaLabel: '정부24 고용보험·산재보험 근로자 자격상실 신고 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '고용보험 근로자 피보험자격상실 신고, 산재보험 근로자 자격상실 신고는 사업주 또는 하수급인이 당해 사업에 고용된 근로자의 피보험자격 상실(이직) 시 이를 고용노동부장관에게 신고하거나, 사업주가 근로자와 고용관계를 종료한 사실을 신고하기 위한 절차로, 고용보험법 제15조·시행령 제7조제1항·시행규칙 제5조제1항, 고용보험 및 산업재해보상보험의 보험료징수 등에 관한 법률 시행규칙 제16조의7에 근거합니다. 신청 방법은 인터넷, 방문, FAX, 우편이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없습니다. 처리기간은 총 7일입니다. 별도의 구비서류는 필요 없습니다. 접수·처리기관은 근로복지공단지역본부(지사)입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 근로복지공단토탈서비스에서 확인이 필요합니다.',
  metaDescription: '근로자 퇴사 시 고용산재보험 상실신고 사업주가 서류 없이 7일 만에 하는 법 – 수수료 없음, 처리 총 7일. 이직확인서와 함께 처리.',
  audience: '소속 근로자가 이직(퇴사)하여 고용보험·산재보험 자격상실을 신고해야 하는 사업주 및 하수급인',
  keyFacts: {
    신청방법: { value: '인터넷(total.comwel.or.kr), 방문, FAX, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008', text: '신청방법, 온라인신청', verifiedAt: '2026-07-18' } },
    신청자격: { value: '본인 또는 대리인(사업주·하수급인)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008', text: '신청자격, 제공 내용', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '총 7일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008', text: '처리기간', verifiedAt: '2026-07-18' } },
    구비서류: { value: '구비서류 없음(별도 제출서류 불요)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008', text: '구비서류, 제출 서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '고용보험법 제15조, 시행령 제7조제1항, 시행규칙 제5조제1항, 고용산재보험료징수법 시행규칙 제16조의7', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '고용보험·산재보험 근로자 자격상실 신고가 뭔가요?', anchor: 'q-basic',
      intro: '이 민원은 사업주 또는 하수급인이 당해 사업에 고용된 근로자의 피보험자격 상실(이직) 시 이를 고용노동부장관에게 신고하거나, 사업주가 근로자와 고용관계를 종료한 사실을 신고하기 위한 절차입니다. 고용보험법 제15조에 근거하며, 고용보험 근로자 피보험자격상실 신고서·산재보험 근로자 자격상실 신고서(별지 서식 22호의 6)를 작성해 신고합니다.',
      highlights: ['근로자 이직(퇴사) 시 사업주가 반드시 해야 하는 신고', '고용보험법 제15조 등 근거', '고용보험·산재보험 자격상실을 하나의 서식으로 처리', '이직확인서와 함께 신고하는 경우가 많음'],
      box: { label: '핵심', content: '근로자 이직 시 사업주가 고용보험·산재보험 자격상실을 신고하는 절차.' },
    },
    {
      q: '왜 이 신고가 중요한가요?', anchor: 'q-why-important',
      intro: '근로자가 퇴사하면 사업주는 반드시 고용보험·산재보험 자격상실 신고를 해야 합니다. 이 신고가 이루어지지 않으면 근로자의 실업급여 신청, 4대보험 정산, 국민연금 등 다른 사회보험과의 연계 처리에 지장이 생길 수 있습니다.',
      highlights: ['근로자 실업급여 신청의 전제 조건 중 하나', '4대보험 정산에 직접 영향', '신고 지연 시 근로자의 다른 사회보험 처리에도 지장', '사업주의 법적 신고 의무 사항'],
      box: { label: '신고의 중요성', content: '실업급여 신청·4대보험 정산 등에 직결되는 사업주의 필수 신고.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '별도의 구비서류는 필요 없습니다. 고용보험 근로자 피보험자격상실 신고서·산재보험 근로자 자격상실 신고서만 작성해 제출하면 됩니다.',
      highlights: ['별도 구비서류 없음', '자격상실 신고서(별지 제22호의 6)만 작성', '간편한 절차로 신속하게 처리 가능', '이직확인서와 별개로 신고 가능(동시 처리도 가능)'],
      box: { label: '준비서류', content: '구비서류 없음, 자격상실 신고서만 작성.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총 7일이 소요됩니다.',
      highlights: ['수수료: 없음', '처리기간: 총 7일', '근로자 이직 즉시 신고하는 것이 원칙', '인터넷 신청으로 방문 없이 처리 가능'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 7일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, FAX, 우편입니다. 온라인신청은 근로복지공단 토탈서비스(total.comwel.or.kr)에서 할 수 있습니다. 접수·처리기관은 근로복지공단지역본부(지사)입니다.',
      highlights: ['인터넷·방문·FAX·우편 네 가지 방법', '온라인신청 전용 사이트: 근로복지공단 토탈서비스(total.comwel.or.kr)', '접수·처리기관: 근로복지공단지역본부(지사)', '사업장 관할 근로복지공단 이용'],
      box: { label: '신청경로', content: '근로복지공단 토탈서비스(total.comwel.or.kr) 온라인 또는 관할 근로복지공단.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 고용노동부 고용지원실업급여과입니다(02-2110-7227). 개별 민원(실제 접수·처리)에 대한 문의는 관할 근로복지공단지역본부(지사)(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 고용노동부 고용지원실업급여과(02-2110-7227)', '개별 민원 문의는 관할 근로복지공단지역본부(지사)', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 근로복지공단, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008' },
    { q: '처리는 얼마나 걸리나요?', a: '총 7일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008' },
    { q: '이직확인서와 같이 신고하나요?', a: '별개의 신고이지만 실무에서는 함께 처리하는 경우가 많습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008' },
    { q: '별도 서류를 준비해야 하나요?', a: '아니요, 구비서류가 없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008' },
    { q: '어디서 온라인 신청하나요?', a: '근로복지공단 토탈서비스(total.comwel.or.kr)에서 온라인 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008' },
  ],
  sources: [
    { label: '정부24(고용보험·산재보험 근로자 자격상실 신고)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14920000008' },
    { label: '근로복지공단 토탈서비스', url: 'https://total.comwel.or.kr' },
    { label: '고용노동부 고용지원실업급여과 02-2110-7227', url: 'https://www.moel.go.kr' },
  ],
} as const;

export const employeeInsuranceLossReportSpokes = [];
