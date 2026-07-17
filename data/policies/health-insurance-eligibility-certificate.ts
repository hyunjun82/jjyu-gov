/* 건강보험 자격득실 확인서 - 보건복지부·정부24 */
export const healthInsuranceEligibilityCertificatePolicy = {
  id: '296', type: 'service' as const,
  title: '건강보험 자격득실확인서 인터넷 무료 발급받고 가입이력 확인하는 법',
  titleKeywords: { k1: '건강보험자격득실확인서', k2: '인터넷무료발급', k3: '가입이력확인', k4: '정부24' },
  slug: 'health-insurance-eligibility-certificate', org: '보건복지부·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '상시 신청 가능(즉시 처리, 근무시간 내 최대 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107', ctaLabel: '정부24 건강보험 자격득실 확인서 발급 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '건강보험 자격득실 확인서는 건강보험 자격득실(취득·상실) 내역을 조회·증명하는 서류로, 직장가입자·지역가입자 이력, 자격 취득일·상실일 등이 기재됩니다. 대출 신청, 정부지원사업 신청, 전입·전출 관련 행정 절차 등 건강보험 가입 이력을 확인해야 하는 곳에서 요구됩니다. 정부24에서 인터넷으로만 신청할 수 있으며 수수료는 없고 구비서류도 필요 없습니다. 처리기간은 근무시간 내 즉시(최대 3시간)입니다. 온라인은 대리인 신청이 불가능하며 본인만 신청할 수 있습니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24에서 확인이 필요합니다.',
  metaDescription: '건강보험 자격득실확인서 인터넷 무료 발급받고 가입이력 확인하는 법 – 수수료 없음, 구비서류 없음, 처리 즉시(3시간 이내). 인터넷 신청만 가능.',
  audience: '대출·정부지원사업 신청 등에 건강보험 가입 이력을 증명해야 하는 사람',
  keyFacts: {
    신청방법: { value: '인터넷(온라인은 대리인 신청 불가)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107', text: '신청방법·신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '즉시(근무시간 내 최대 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107', text: '처리기간', verifiedAt: '2026-07-17' } },
    구비서류: { value: '없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107', text: '구비서류', verifiedAt: '2026-07-17' } },
    증명내용: { value: '건강보험 자격득실(취득·상실) 내역 조회', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107', text: '제공 내용', verifiedAt: '2026-07-17' } },
    접수기관: { value: '국민건강보험공단지사', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107', text: '신청 방법 및 절차', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '건강보험 자격득실 확인서가 뭔가요?', anchor: 'q-basic',
      intro: '건강보험 자격득실 확인서는 건강보험 자격득실(취득·상실) 내역을 조회·증명하는 서류로, 국민건강보험공단이 관리하는 자격 정보를 바탕으로 발급됩니다. 직장가입자·지역가입자로서의 자격 취득일과 상실일 등이 기재되어, 건강보험 가입 이력을 공식적으로 확인할 때 사용됩니다.',
      highlights: ['건강보험 자격 취득·상실 내역을 증명', '직장·지역가입자 이력 확인 가능', '국민건강보험공단이 관리하는 자격정보 기반', '가입 이력 공식 확인용 서류'],
      box: { label: '핵심', content: '건강보험 자격 취득일·상실일 등 가입 이력을 공식 증명하는 서류.' },
    },
    {
      q: '누가 신청할 수 있나요?', anchor: 'q-eligibility',
      intro: '신청자격은 본인 또는 대리인으로 제한됩니다. 다만 온라인(인터넷) 신청은 대리인 신청이 불가능하며 본인만 신청할 수 있습니다. 대리인이 신청하려면 국민건강보험공단지사를 직접 방문해야 하며, 이 경우 대리인 확인 절차가 별도로 진행됩니다.',
      highlights: ['본인 또는 대리인만 신청 가능', '온라인은 본인만 신청 가능(대리인 불가)', '대리인은 국민건강보험공단지사 방문 필요', '개인정보 보호를 위해 신청자격이 제한됨'],
      box: { label: '신청자격', content: '본인만 온라인 신청 가능. 대리인은 공단지사 방문 필요.' },
    },
    {
      q: '어디에 제출할 때 필요한가요?', anchor: 'q-usage',
      intro: '건강보험 자격득실 확인서는 건강보험 가입 이력이나 자격 상실일을 확인해야 하는 여러 행정·금융 절차에서 요구될 수 있습니다. 특히 직장가입자에서 지역가입자로 전환된 시점, 자격 상실 시점을 증명해야 할 때 유용합니다. 정확한 제출처의 요구사항은 해당 기관에 직접 문의하는 것이 정확합니다.',
      highlights: ['건강보험 가입 이력 확인이 필요한 절차에 활용', '자격 취득·상실 시점 증명이 필요할 때 유용', '직장·지역가입자 전환 시점 확인 가능', '제출처별 요구사항은 해당 기관에 확인 필요'],
      box: { label: '활용', content: '건강보험 가입 이력·자격 취득·상실 시점 증명이 필요한 곳에 제출.' },
    },
    {
      q: '신청할 때 무엇이 필요한가요?', anchor: 'q-docs',
      intro: '구비서류는 없으며, 별도의 신청서 작성도 필요 없습니다. 인터넷으로 본인인증을 거쳐 신청하면 별도 제출 서류 없이 바로 발급받을 수 있습니다. 이는 정부24에 등록된 여러 민원 중에서도 절차가 간단한 편에 속합니다.',
      highlights: ['구비서류 없음', '별도 신청서 작성 불필요', '본인인증만으로 신청 가능', '절차가 간단해 빠르게 발급 가능'],
      box: { label: '준비서류', content: '없음. 본인인증만으로 인터넷 신청 가능.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '건강보험 자격득실 확인서는 수수료가 없습니다. 처리기간은 즉시가 원칙이며, 근무시간 내 최대 3시간 이내에 처리됩니다. 접수기관은 국민건강보험공단지사이지만, 인터넷 신청 시에는 직접 방문하지 않고도 바로 발급받을 수 있습니다.',
      highlights: ['수수료 없음', '처리기간: 즉시(근무시간 내 최대 3시간)', '접수기관: 국민건강보험공단지사', '인터넷 신청 시 방문 없이 즉시 발급'],
      box: { label: '수수료·처리기간', content: '수수료 없이 즉시 처리. 인터넷 신청이 가장 빠름.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 보건복지부 보험정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 국민건강보험공단지사(관할 처리기관)에 직접 연락하는 것이 정확합니다. 국민건강보험공단 고객센터(국번없이 1577-1000)나 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 보건복지부 보험정책과', '개별 민원 문의는 국민건강보험공단지사', '국민건강보험공단 고객센터 1577-1000', '정부24 콜센터 1588-2188'],
      box: { label: '문의처', content: '개별 민원은 국민건강보험공단지사, 일반 안내는 1577-1000.' },
    },
  ],
  faq: [
    { q: '건강보험 자격득실 확인서는 어디서 발급받나요?', a: '정부24에서 인터넷으로 무료 발급받을 수 있으며, 국민건강보험공단 홈페이지·The건강보험 앱에서도 발급 가능합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107' },
    { q: '수수료가 있나요?', a: '없습니다. 인터넷 발급은 무료입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107' },
    { q: '방문 신청도 가능한가요?', a: '정부24를 통한 신청은 인터넷만 가능합니다. 방문이 필요하면 국민건강보험공단지사를 이용해야 합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107' },
    { q: '가족이 대신 온라인으로 발급받을 수 있나요?', a: '아니요, 온라인은 대리인 신청이 불가능해 본인만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107' },
    { q: '처리 시간은 얼마나 걸리나요?', a: '즉시 처리가 원칙이며 근무시간 내 최대 3시간 이내에 처리됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107' },
  ],
  sources: [
    { label: '정부24(건강보험 자격득실 확인서)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=PG4CADM0107' },
    { label: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
    { label: '정부민원안내콜센터 국번없이 110', url: 'https://www.gov.kr' },
  ],
} as const;

export const healthInsuranceEligibilityCertificateSpokes = [];
