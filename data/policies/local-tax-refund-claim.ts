/* 지방세 환급 청구 - 행정안전부·정부24·위택스 */
export const localTaxRefundClaimPolicy = {
  id: '318', type: 'refund' as const,
  title: '지방세 잘못 냈거나 더 냈으면 위택스로 환급 청구하는 법',
  titleKeywords: { k1: '지방세환급청구', k2: '재산세과오납', k3: '위택스온라인신청', k4: '지방세기본법' },
  slug: 'local-tax-refund-claim', org: '행정안전부·정부24·위택스', cat: '세금', catSlug: 'tax',
  amount: '수수료 없음(과오납한 지방세 전액 환급)', deadline: '상시 신청 가능(즉시 처리, 근무시간 내 최대 3시간)', views: 0,
  applyUrl: 'https://www.wetax.go.kr', ctaLabel: '위택스 지방세 환급 청구 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '지방세 환급 청구는 재산세·자동차세·취득세 등 지방세를 많이 냈거나 잘못 낸 사람이 그 금액을 돌려받기 위해 신청하는 절차로, 지방세기본법 제60조에 근거합니다. 정부24나 위택스(wetax.go.kr)에서 인터넷·방문·우편으로 신청할 수 있으며 수수료는 없습니다. 처리기간은 근무시간 내 즉시(최대 3시간)입니다. 본인이 청구할 때는 주민등록증만 제시하면 되고, 대리인이 청구할 때는 위임장이 필요합니다. 이중납부, 세액 계산 착오, 감면 대상인데 일반세율로 낸 경우 등이 대표적인 환급 사유입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 위택스에서 확인이 필요합니다.',
  metaDescription: '지방세 잘못 냈거나 더 냈으면 위택스로 환급 청구하는 법 – 수수료 없음, 즉시 처리. 본인은 주민등록증만, 대리인은 위임장 필요.',
  audience: '재산세·자동차세·취득세 등을 이중납부했거나 더 냈다고 생각되는 사람',
  keyFacts: {
    신청방법: { value: '인터넷(위택스), 방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000058', text: '신청방법', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000058', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '즉시(근무시간 내 최대 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000058', text: '처리기간', verifiedAt: '2026-07-17' } },
    본인청구서류: { value: '주민등록증 제시', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000058', text: '제출서류', verifiedAt: '2026-07-17' } },
    대리인청구서류: { value: '위임장', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000058', text: '제출서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '지방세기본법 제60조, 시행규칙 제17조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000058', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '지방세 환급 청구가 뭔가요?', anchor: 'q-basic',
      intro: '지방세 환급 청구는 지방세를 많이 냈거나 잘못 낸 사람이 그 지방세를 돌려받기 위해 신청하는 민원사무입니다. 지방세기본법 제60조에 근거하며, 재산세·자동차세·취득세·주민세 등 모든 지방세 종목에서 발생할 수 있습니다.',
      highlights: ['과오납한 지방세를 돌려받는 절차', '지방세기본법 제60조 근거', '재산세·자동차세·취득세 등 모든 지방세 대상', '이중납부·계산 착오 등이 대표 사유'],
      box: { label: '핵심', content: '지방세를 더 냈거나 잘못 냈을 때 돌려받는 절차. 수수료 없음.' },
    },
    {
      q: '어떤 경우에 환급받을 수 있나요?', anchor: 'q-cases',
      intro: '대표적인 환급 사유로는 같은 세금을 이중으로 납부한 경우, 세액 계산에 착오가 있어 실제보다 많이 낸 경우, 감면 대상인데 감면을 적용받지 못하고 일반세율로 낸 경우, 자동이체 설정 오류로 중복 출금된 경우 등이 있습니다. 본인이 낸 지방세 내역과 실제 세액을 비교해 차이가 있다면 환급 청구를 검토해볼 수 있습니다.',
      highlights: ['이중납부(자동이체 오류 포함)', '세액 계산 착오로 과다 납부', '감면 대상인데 일반세율 적용받은 경우', '본인 납부내역과 실제 세액 비교 필요'],
      table: { caption: '대표적인 환급 사유', headers: ['사유'], rows: [['이중납부(자동이체 오류 포함)'], ['세액 계산 착오'], ['감면 대상인데 일반세율 적용']] },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply',
      intro: '위택스(wetax.go.kr)에서 온라인으로 신청할 수 있으며, 관할 시·군·구를 방문하거나 우편으로도 신청할 수 있습니다. 지방세 환급청구서 또는 지방세환급금 지급청구서(지방세기본법 시행규칙 별지 서식 22호)를 작성합니다.',
      highlights: ['위택스(wetax.go.kr)에서 온라인 신청 가능', '관할 시군구 방문 또는 우편 신청도 가능', '환급청구서(별지 제22호) 작성 필요', '접수·처리기관: 시군구'],
      box: { label: '신청경로', content: '위택스 온라인 신청이 가장 편리, 방문·우편도 가능.' },
    },
    {
      q: '신청할 때 무엇이 필요한가요?', anchor: 'q-docs',
      intro: '본인이 청구할 때는 주민등록증만 제시하면 됩니다. 대리인이 청구할 때는 위임장이 필요합니다. 별도의 복잡한 증빙서류 없이 간단하게 신청할 수 있는 것이 특징입니다.',
      highlights: ['본인 청구: 주민등록증 제시', '대리인 청구: 위임장 필요', '복잡한 증빙서류 없이 간단하게 신청 가능', '환급 사유는 담당 공무원이 세무 시스템으로 확인'],
      box: { label: '준비서류', content: '본인은 주민등록증만, 대리인은 위임장만 있으면 신청 가능.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '지방세 환급 청구는 수수료가 없습니다. 처리기간은 즉시가 원칙이며, 근무시간 내 최대 3시간 이내에 처리됩니다. 다만 실제 환급금이 계좌로 입금되기까지는 행정 처리 시간이 별도로 소요될 수 있습니다.',
      highlights: ['수수료 없음', '접수·처리는 즉시(근무시간 내 최대 3시간)', '실제 계좌 입금까지는 별도 시간 소요 가능', '위택스에서 처리 현황 조회 가능'],
      box: { label: '수수료·처리기간', content: '수수료 없이 즉시 접수·처리. 실제 입금은 별도 시간 소요될 수 있음.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 행정안전부 지방세정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 시·군·구(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188)나 정부민원안내콜센터(국번없이 110, 365일 24시간)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 행정안전부 지방세정책과', '개별 민원 문의는 관할 시군구', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110(24시간)'],
      box: { label: '문의처', content: '개별 민원은 관할 시군구, 일반 안내는 국번없이 110.' },
    },
  ],
  faq: [
    { q: '지방세를 잘못 냈으면 어떻게 하나요?', a: '위택스(wetax.go.kr)나 관할 시군구를 통해 지방세 환급을 청구할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000058' },
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000058' },
    { q: '어떤 서류가 필요한가요?', a: '본인은 주민등록증만, 대리인은 위임장만 있으면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000058' },
    { q: '어떤 경우에 환급받을 수 있나요?', a: '이중납부, 세액 계산 착오, 감면 대상인데 일반세율로 낸 경우 등이 대표적입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000058' },
    { q: '처리는 얼마나 걸리나요?', a: '접수·처리는 즉시(근무시간 내 최대 3시간)이며, 실제 계좌 입금까지는 별도 시간이 걸릴 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000058' },
  ],
  sources: [
    { label: '정부24(지방세 환급 청구)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13100000058' },
    { label: '위택스', url: 'https://www.wetax.go.kr' },
    { label: '행정안전부', url: 'https://www.mois.go.kr' },
  ],
} as const;

export const localTaxRefundClaimSpokes = [];
