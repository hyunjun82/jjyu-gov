/* 예방접종증명 - 질병관리청·정부24 */
export const vaccinationCertificatePolicy = {
  id: '365', type: 'service' as const,
  title: '예방접종증명서 예방접종도우미에서 무료 즉시 발급받는 법',
  titleKeywords: { k1: '예방접종증명서발급', k2: '예방접종도우미nip.kdca.go.kr', k3: '국가예방접종위탁의료기관', k4: '어린이집학교입학제출' },
  slug: 'vaccination-certificate', org: '질병관리청·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '상시 신청 가능(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398', ctaLabel: '정부24 예방접종증명 발급 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '예방접종증명은 감염병의 예방 및 관리에 관한 법률에 따른 국가예방접종 증명서를 발급받기 위해 신청하는 절차로, 같은 법 제27조에 근거합니다. 어린이집·학교 입학 서류, 해외 출국 시 예방접종 이력 증빙 등에 쓰입니다. 발급 방법은 두 가지로, 예방접종도우미(nip.kdca.go.kr) 또는 정부24 포털에서 본인(또는 미성년자의 보호자)이 직접 출력하거나, 보건소나 위탁의료기관을 방문해 신분증을 제시하고 발급받을 수 있습니다. 신청자격은 본인 또는 대리인이나, 온라인은 대리인 신청이 불가합니다. 수수료는 없습니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 제출서류는 신분증 제시입니다. 접수·처리기관은 보건소, 질병관리청, 국가예방접종 위탁의료기관입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 예방접종도우미에서 확인이 필요합니다.',
  metaDescription: '예방접종증명서 예방접종도우미에서 무료 즉시 발급받는 법 – 본인·보호자 신청, 처리 즉시(3시간). 어린이집·학교·해외출국 시 활용.',
  audience: '어린이집·학교 입학 서류나 해외 출국을 위해 예방접종 이력을 증명해야 하는 사람',
  keyFacts: {
    신청방법: { value: '인터넷(예방접종도우미·정부24), 방문(보건소·위탁의료기관)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398', text: '신청방법, 온라인신청', verifiedAt: '2026-07-17' } },
    신청자격: { value: '본인 또는 대리인(온라인은 대리인 신청 불가)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '신분증 제시(방문 발급 시)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398', text: '제출 서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '감염병의 예방 및 관리에 관한 법률 제27조, 시행규칙 제22조 별지16', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '예방접종증명이 뭔가요?', anchor: 'q-basic',
      intro: '예방접종증명은 감염병의 예방 및 관리에 관한 법률에 의한 국가예방접종 증명서(별지 서식 16호)를 발급받기 위해 신청하는 민원사무입니다. 같은 법 제27조에 근거하며, 어린이집·학교 입학 시 제출서류, 해외 출국 시 예방접종 이력 증빙 등으로 널리 쓰입니다.',
      highlights: ['국가예방접종 이력을 공식 증명하는 서류', '감염병의 예방 및 관리에 관한 법률 제27조 근거', '어린이집·학교 입학 서류로 활용', '해외 출국 시 예방접종 이력 증빙으로도 활용'],
      box: { label: '핵심', content: '국가예방접종 이력을 공식 증명하는 서류를 발급받는 절차.' },
    },
    {
      q: '어떻게 발급받을 수 있나요?', anchor: 'q-methods',
      intro: '발급 방법은 두 가지입니다. 첫째, 예방접종도우미(nip.kdca.go.kr) 또는 정부24 포털에서 본인(또는 미성년자의 보호자)이 직접 출력하는 방법입니다. 둘째, 보건소나 위탁의료기관을 방문해 주민등록증·외국인등록증 등 신분증을 제시하고 발급받는 방법입니다.',
      highlights: ['예방접종도우미(nip.kdca.go.kr) 온라인 직접 출력', '정부24 포털에서도 직접 출력 가능', '보건소·위탁의료기관 방문 발급도 가능', '방문 시 신분증(주민등록증·외국인등록증 등) 제시'],
      box: { label: '발급 방법', content: '온라인(예방접종도우미·정부24) 직접 출력 또는 방문 발급.' },
    },
    {
      q: '누가 신청할 수 있나요?', anchor: 'q-eligibility',
      intro: '신청자격은 본인 또는 대리인입니다. 미성년자의 경우 보호자가 본인을 대신해 온라인에서 직접 출력할 수 있습니다. 다만 온라인은 대리인(보호자 외의 제3자) 신청이 불가하며, 방문 시에는 위임 등 절차를 갖추면 대리인도 발급받을 수 있습니다.',
      highlights: ['본인 또는 대리인 신청 가능', '미성년자는 보호자가 온라인에서 직접 출력', '온라인은 보호자 외 대리인 신청 불가', '방문 시 위임 절차 갖추면 대리인 발급 가능'],
      box: { label: '신청자격', content: '본인 또는 보호자(미성년자). 온라인은 제3자 대리인 불가.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다. 온라인으로 직접 출력하면 즉시 확인 및 인쇄가 가능해 가장 빠릅니다.',
      highlights: ['수수료: 없음', '처리기간: 즉시(근무시간 내 3시간)', '온라인 직접 출력이 가장 빠른 방법', '보건소·위탁의료기관 방문도 즉시 발급'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문입니다. 온라인신청은 예방접종도우미(nip.kdca.go.kr)에서 할 수 있습니다. 접수·처리기관은 보건소, 질병관리청, 국가예방접종 위탁의료기관입니다.',
      highlights: ['인터넷·방문 두 가지 방법', '온라인신청 전용 사이트: 예방접종도우미(nip.kdca.go.kr)', '접수·처리기관: 보건소, 질병관리청, 위탁의료기관', '정부24에서도 직접 출력 가능'],
      box: { label: '신청경로', content: '예방접종도우미·정부24 온라인 출력 또는 보건소·위탁의료기관 방문.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 질병관리청 예방접종관리과입니다(043-913-2352). 개별 민원(실제 접수·처리)에 대한 문의는 관할 보건소나 위탁의료기관(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 질병관리청 예방접종관리과(043-913-2352)', '개별 민원 문의는 관할 보건소·위탁의료기관', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 보건소·위탁의료기관, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398' },
    { q: '집에서 바로 출력할 수 있나요?', a: '네, 예방접종도우미(nip.kdca.go.kr)나 정부24에서 본인(또는 보호자)이 직접 출력할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398' },
    { q: '방문할 땐 뭘 가져가야 하나요?', a: '주민등록증, 외국인등록증 등 신분증을 제시하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398' },
    { q: '온라인으로 대리인이 신청할 수 있나요?', a: '아니요, 온라인은 본인 또는 미성년자의 보호자만 가능하며 그 외 대리인 신청은 불가합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398' },
  ],
  sources: [
    { label: '정부24(예방접종증명)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000398' },
    { label: '예방접종도우미', url: 'https://nip.kdca.go.kr' },
    { label: '질병관리청', url: 'https://www.kdca.go.kr' },
  ],
} as const;

export const vaccinationCertificateSpokes = [];
