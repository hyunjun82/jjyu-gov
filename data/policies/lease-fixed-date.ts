/* 주택임대차계약서 확정일자 부여 신청 - 행정안전부·정부24 */
export const leaseFixedDatePolicy = {
  id: '306', type: 'service' as const,
  title: '전월세 계약 후 확정일자 인터넷·방문으로 받아 보증금 지키는 법',
  titleKeywords: { k1: '확정일자', k2: '전월세보증금', k3: '주민센터방문', k4: '정부24' },
  slug: 'lease-fixed-date', org: '행정안전부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '1건당 600원', deadline: '전입일 이전 또는 즉시(임대차계약 후 신속히)', views: 0,
  applyUrl: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005', ctaLabel: '정부24 확정일자 부여 신청 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '주택임대차계약서 확정일자는 전월세 임대차계약을 체결한 후 임차인이 보증금을 우선변제받을 권리(대항력·우선변제권)를 확보하기 위해 받는 절차입니다. 확정일자를 받으려는 사람(누구나 가능)은 임대차계약서 원본과 신분증(주민등록증·운전면허증·여권·외국인등록증)을 지참해 주택 소재지의 동 주민센터를 방문하거나 인터넷으로 신청할 수 있습니다. 수수료는 1건당 600원이며, 처리기간은 근무시간 내 즉시(최대 3시간)입니다. 확정일자와 전입신고를 함께 마쳐야 대항력과 우선변제권이 완전하게 확보됩니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24에서 확인이 필요합니다.',
  metaDescription: '전월세 계약 후 확정일자 인터넷·방문으로 받아 보증금 지키는 법 – 1건당 600원, 즉시 처리. 임대차계약서 원본+신분증만 있으면 신청 가능.',
  audience: '전월세 임대차계약을 체결하고 보증금을 지켜야 하는 임차인',
  keyFacts: {
    신청방법: { value: '인터넷, 방문', source: { url: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005', text: '신청방법', verifiedAt: '2026-07-17' } },
    신청자격: { value: '누구나 신청 가능(확정일자를 받으려는 자)', source: { url: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '1건당 600원', source: { url: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '즉시(근무시간 내 최대 3시간)', source: { url: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005', text: '처리기간', verifiedAt: '2026-07-17' } },
    구비서류: { value: '신분증(주민등록증·운전면허증·여권·외국인등록증), 임대차계약서 원본', source: { url: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005', text: '구비서류', verifiedAt: '2026-07-17' } },
    접수처리기관: { value: '주택 소재지 관할 동 주민센터', source: { url: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005', text: '접수 및 처리기관', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '확정일자가 뭔가요?', anchor: 'q-basic',
      intro: '확정일자는 임대차계약서에 대해 그 날짜에 계약서가 존재했다는 사실을 공적으로 증명받는 절차입니다. 확정일자를 받으면 임차인은 우선변제권을 확보하게 되어, 만약 집이 경매나 공매로 넘어가더라도 확정일자를 받은 순서에 따라 다른 채권자보다 우선해서 보증금을 변제받을 수 있습니다.',
      highlights: ['임대차계약서 존재 사실을 공적으로 증명', '우선변제권 확보의 핵심 절차', '경매·공매 시 보증금 우선변제 가능', '전입신고와 함께해야 완전한 보호 효력'],
      box: { label: '핵심', content: '임대차계약서에 확정일자를 받아 보증금 우선변제권을 확보하는 절차.' },
    },
    {
      q: '누가, 어떻게 신청하나요?', anchor: 'q-apply',
      intro: '확정일자를 받으려는 사람은 누구나 신청할 수 있습니다. 임대차계약서 원본과 본인을 확인할 수 있는 신분증(주민등록증, 운전면허증, 여권, 외국인등록증 등)을 소지하고 주택 소재지의 동 주민센터를 방문하면 신청할 수 있습니다. 인터넷 신청도 가능합니다.',
      highlights: ['확정일자를 받으려는 사람은 누구나 신청 가능', '임대차계약서 원본+신분증 지참', '주택 소재지 관할 동 주민센터 방문', '인터넷 신청도 가능'],
      box: { label: '신청방법', content: '계약서 원본+신분증 지참해 주택 소재지 주민센터 방문, 또는 인터넷 신청.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 1건당 600원입니다. 처리기간은 근무시간 내 즉시(최대 3시간)로, 계약서와 신분증만 준비되면 그 자리에서 바로 확정일자를 받을 수 있습니다. 별도의 신청서 작성은 필요 없습니다.',
      highlights: ['수수료 1건당 600원', '처리기간: 즉시(근무시간 내 최대 3시간)', '신청서 작성 불필요', '서류만 준비되면 즉시 처리'],
      box: { label: '수수료·처리기간', content: '1건당 600원. 즉시 처리(최대 3시간).' },
    },
    {
      q: '전입신고와 함께 해야 하나요?', anchor: 'q-with-transfer',
      intro: '확정일자만으로는 우선변제권이 완전하게 발생하지 않으며, 대항력을 갖추려면 전입신고와 실제 거주(점유)도 함께 필요합니다. 확정일자와 전입신고를 같은 날 처리하면, 전입신고 다음날 0시부터 대항력이 발생하는 것이 일반적이므로, 이사와 동시에 전입신고와 확정일자를 함께 처리하는 것이 안전합니다.',
      highlights: ['확정일자만으로는 대항력이 완전하지 않음', '전입신고+실제 거주(점유)까지 함께 필요', '전입신고 다음날 0시부터 대항력 발생', '이사 당일 전입신고+확정일자 동시 처리 권장'],
      box: { label: '전입신고 병행', content: '확정일자+전입신고+실거주가 모두 갖춰져야 완전한 보호.' },
    },
    {
      q: '상가건물도 확정일자를 받을 수 있나요?', anchor: 'q-commercial',
      intro: '상가건물 임대차계약도 별도로 확정일자를 받을 수 있습니다. 다만 상가건물 확정일자 신청은 주택임대차와는 별개의 민원으로 정부24에 등록되어 있으며, 관할 세무서에서 처리하는 경우가 많으므로 신청 절차가 다를 수 있습니다. 정확한 절차는 관할 세무서나 정부24에서 확인하는 것이 좋습니다.',
      highlights: ['상가건물도 별도로 확정일자 신청 가능', '주택임대차와는 별개의 민원으로 등록', '상가건물은 관할 세무서에서 처리하는 경우 많음', '정확한 절차는 관할 세무서·정부24에서 확인'],
      box: { label: '상가건물', content: '주택과 별개로 신청. 관할 세무서에서 처리하는 경우가 많음.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원은 지자체별 자치사무로 운영되며, 담당 부서는 관할 구청 자치행정과 등입니다. 개별 민원(실제 접수·처리)에 대한 문의는 신청한 동 주민센터(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188)나 정부민원안내콜센터(국번없이 110, 365일 24시간)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['지자체 자치사무로 운영(예: 구청 자치행정과)', '개별 민원 문의는 관할 동 주민센터', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110(24시간)'],
      box: { label: '문의처', content: '개별 민원은 관할 동 주민센터, 일반 안내는 국번없이 110.' },
    },
  ],
  faq: [
    { q: '확정일자를 왜 받아야 하나요?', a: '보증금 우선변제권을 확보해, 집이 경매·공매로 넘어가도 다른 채권자보다 우선해서 보증금을 받을 수 있게 하기 위함입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005' },
    { q: '수수료는 얼마인가요?', a: '1건당 600원입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005' },
    { q: '어디서 신청하나요?', a: '주택 소재지 관할 동 주민센터를 방문하거나 인터넷으로 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005' },
    { q: '전입신고도 같이 해야 하나요?', a: '네, 확정일자만으로는 대항력이 완전하지 않아 전입신고와 실제 거주가 함께 필요합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리가 원칙이며 근무시간 내 최대 3시간 이내에 처리됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005' },
  ],
  sources: [
    { label: '정부24(주택임대차계약서 확정일자 부여 신청)', url: 'https://www.gov.kr/main?a=AA020InfoSidoCappViewApp&CappBizCD=30500000005' },
    { label: '행정안전부', url: 'https://www.mois.go.kr' },
    { label: '정부민원안내콜센터 국번없이 110', url: 'https://www.gov.kr' },
  ],
} as const;

export const leaseFixedDateSpokes = [];
