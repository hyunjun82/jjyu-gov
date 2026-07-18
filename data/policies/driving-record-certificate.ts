/* 운전경력증명서 발급 - 경찰청·정부24 */
export const drivingRecordCertificatePolicy = {
  id: '415', type: 'service' as const,
  title: '운전경력증명서 신분증만 있으면 무료로 즉시 인터넷 발급받는 법',
  titleKeywords: { k1: '운전경력증명서발급', k2: '법규위반사고내역조회', k3: 'efine.go.kr온라인신청', k4: '경찰서접수처리' },
  slug: 'driving-record-certificate', org: '경찰청·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 무료', deadline: '상시 신청 가능(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049', ctaLabel: '정부24 운전경력증명서 발급 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '운전경력증명서 발급은 운전자의 법규위반, 사고내역 등 운전경력을 조회하여 증명서로 발급받고자 하는 사람이 신청하는 절차로, 도로교통법 시행규칙 제129조의2에 근거합니다. 취업, 보험 가입, 대리운전 등록 등 다양한 목적으로 활용됩니다. 신청 방법은 인터넷, 방문, 무인발급기이며, 온라인신청은 안전운전 통합민원(efine.go.kr)에서 할 수 있습니다. 신청자격은 본인 또는 대리인이나 온라인은 대리인 신청이 불가합니다. 수수료는 무료입니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 제출서류는 본인 신청 시 신분증(주민등록증·운전면허증·여권 등), 대리인 신청 시 대리인 신분증·위임장·위임인 신분증입니다. 접수·처리기관은 경찰서입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 경찰청에서 확인이 필요합니다.',
  metaDescription: '운전경력증명서 신분증만 있으면 무료로 즉시 인터넷 발급받는 법 – 처리 즉시(3시간), 수수료 무료. 취업·보험 가입 등에 활용.',
  audience: '취업·보험 가입·대리운전 등록 등을 위해 자신의 법규위반·사고내역 등 운전경력을 증명해야 하는 사람',
  keyFacts: {
    신청방법: { value: '인터넷(efine.go.kr), 방문, 무인발급기', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049', text: '신청방법, 온라인신청', verifiedAt: '2026-07-18' } },
    신청자격: { value: '본인 또는 대리인(온라인은 대리인 신청 불가)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '무료', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049', text: '처리기간', verifiedAt: '2026-07-18' } },
    발급서류: { value: '운전경력증명서(도로교통법 시행규칙 별지 서식 144호의 3)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049', text: '발급서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '도로교통법 시행규칙 제129조의2', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '운전경력증명서 발급이 뭔가요?', anchor: 'q-basic',
      intro: '운전경력증명서 발급은 운전자의 법규위반, 사고내역 등 운전경력을 조회하여 증명서로 발급받고자 하는 경우 신청하는 민원사무입니다. 도로교통법 시행규칙 제129조의2에 근거하며, 운전경력증명서 발급 신청서(별지 서식 144호의 2)를 작성해 신청합니다.',
      highlights: ['법규위반·사고내역 등 운전경력을 증명하는 서류', '도로교통법 시행규칙 제129조의2 근거', '운전경력증명서 발급 신청서(별지 제144호의 2) 작성', '취업·보험 가입·대리운전 등록 등에 활용'],
      box: { label: '핵심', content: '법규위반·사고내역 등 자신의 운전경력을 공식 증명받는 서류.' },
    },
    {
      q: '어디에 활용되나요?', anchor: 'q-usage',
      intro: '운전경력증명서는 취업 시 운전 경력 증빙, 자동차보험 가입 시 무사고 경력 확인, 대리운전 기사 등록, 렌터카·택시·화물차 운수업 취업 등 다양한 목적으로 활용됩니다. 영문증명이 필요한 경우 여권을 함께 제시해야 합니다.',
      highlights: ['취업 시 운전 경력 증빙 자료로 활용', '자동차보험 가입 시 무사고 경력 확인용', '대리운전·운수업 취업 등록 시 필요', '영문증명 신청 시 여권 추가 제시 필요'],
      box: { label: '주요 활용처', content: '취업·보험 가입·대리운전 및 운수업 등록 등.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '본인이 신청하는 경우 주민등록증, 운전면허증, 국가유공자증, 장애인등록증(주민등록번호 포함), 외국인등록증, 여권(주민등록번호 뒷자리 미포함 시 여권정보증명서 추가), 청소년증 등 유효기간 내 신분증을 제시해야 합니다. 대리인이 신청하는 경우에는 대리인 신분증, 위임장, 위임인 신분증이 필요합니다.',
      highlights: ['본인: 유효기간 내 신분증 1개 제시', '신분증 종류: 주민등록증·운전면허증·여권 등 8종', '대리인: 대리인 신분증+위임장+위임인 신분증', '영문증명은 여권 추가 제시 필요'],
      box: { label: '준비서류', content: '유효기간 내 신분증(본인) 또는 위임장 일체(대리인).' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 무료입니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다. 인터넷으로 신청하면 방문 없이도 빠르게 발급받을 수 있습니다.',
      highlights: ['수수료: 무료', '처리기간: 즉시(근무시간 내 3시간)', '인터넷 신청으로 방문 없이 발급 가능', '무인발급기로도 즉시 발급 가능'],
      box: { label: '수수료·처리기간', content: '무료, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 무인발급기입니다. 온라인신청은 안전운전 통합민원(efine.go.kr)에서 할 수 있으며, 온라인은 대리인 신청이 불가합니다. 접수·처리기관은 경찰서입니다.',
      highlights: ['인터넷·방문·무인발급기 세 가지 방법', '온라인신청 전용 사이트: 안전운전 통합민원(efine.go.kr)', '온라인은 본인만 신청 가능(대리인 불가)', '접수·처리기관: 경찰서'],
      box: { label: '신청경로', content: '안전운전 통합민원(efine.go.kr) 온라인, 방문, 무인발급기.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 경찰청 교통기획과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 경찰서(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 경찰청 교통기획과', '개별 민원 문의는 관할 경찰서', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 경찰서, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '아니요, 무료입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049' },
    { q: '온라인으로 대리인이 신청할 수 있나요?', a: '아니요, 온라인은 본인만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049' },
    { q: '어디서 온라인 신청하나요?', a: '안전운전 통합민원(efine.go.kr)에서 온라인 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049' },
    { q: '영문증명이 필요하면 어떻게 하나요?', a: '영문증명을 신청하는 경우 여권을 함께 제시해야 합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049' },
  ],
  sources: [
    { label: '정부24(운전경력증명서 발급 신청)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000049' },
    { label: '안전운전 통합민원', url: 'https://www.efine.go.kr/main/main.do' },
    { label: '경찰청 교통기획과', url: 'https://www.police.go.kr' },
  ],
} as const;

export const drivingRecordCertificateSpokes = [];
