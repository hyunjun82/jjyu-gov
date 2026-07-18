/* 노동조합설립 신고증 재교부신청 - 고용노동부·정부24 */
export const laborUnionCertificateReissuePolicy = {
  id: '432', type: 'service' as const,
  title: '노동조합 설립신고증 분실 시 서류 없이 관할기관에 2일 만에 재교부받는 법',
  titleKeywords: { k1: '노동조합설립신고증재교부신청', k2: '분실못쓰게된경우별지3호', k3: 'labor.moel.go.kr온라인신청', k4: '조직범위별관할기관차이' },
  slug: 'labor-union-certificate-reissue', org: '고용노동부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '분실·훼손 시 신청(처리 총 2일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119', ctaLabel: '정부24 노동조합설립 신고증 재교부신청 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '노동조합설립 신고증 재교부신청은 노동조합 설립 신고증이 분실되거나 못쓰게 되었을 시 재교부를 신청하는 절차로, 노동조합 및 노동관계조정법 시행규칙 제4조에 근거합니다. 신청 방법은 인터넷, 방문, 우편이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없습니다. 처리기간은 조직 범위에 따라 다르며, 2 이상의 시·군·구에 걸치는 단위노동조합·1개 시·군·구 관할구역 내 노동조합·연합단체 및 전국규모 산업별 단위노동조합·2 이상의 특별시·광역시·도에 걸치는 노동조합 모두 각각 총 2일입니다. 별도의 구비서류는 필요 없습니다. 접수·처리기관은 조직 범위에 따라 도·특별시·광역시·특별자치도, 시·군·구, 고용노동부, 지방고용노동관서로 나뉩니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할기관에서 확인이 필요합니다.',
  metaDescription: '노동조합 설립신고증 분실 시 서류 없이 관할기관에 2일 만에 재교부받는 법 – 수수료 없음, 처리 총 2일. 조직 범위별 관할기관 차이 총정리.',
  audience: '노동조합 설립 신고증을 분실했거나 훼손되어 사용할 수 없는 노동조합 관계자',
  keyFacts: {
    신청방법: { value: '인터넷(labor.moel.go.kr), 방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119', text: '신청방법, 온라인신청', verifiedAt: '2026-07-18' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '조직 범위별로 각각 총 2일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119', text: '처리기간, 신청 방법 및 절차', verifiedAt: '2026-07-18' } },
    구비서류: { value: '구비서류 없음(별도 제출서류 불요)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119', text: '구비서류, 제출 서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '노동조합 및 노동관계조정법 시행규칙 제4조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '노동조합설립 신고증 재교부신청이 뭔가요?', anchor: 'q-basic',
      intro: '노동조합설립 신고증 재교부신청은 노동조합 설립 신고증이 분실되거나 못쓰게 되었을 시 재교부를 신청하는 민원사무입니다. 노동조합 및 노동관계조정법 시행규칙 제4조에 근거하며, 노동조합 설립신고증 재교부신청서(별지 서식 3호)를 작성해 신청합니다.',
      highlights: ['노동조합 설립 신고증 분실·훼손 시 재교부받는 절차', '노동조합 및 노동관계조정법 시행규칙 제4조 근거', '재교부신청서(별지 제3호) 작성해 신청', '노동조합 활동에 필요한 신고증 재확보 절차'],
      box: { label: '핵심', content: '노동조합 설립 신고증을 분실·훼손 시 재교부받는 절차.' },
    },
    {
      q: '어디에 신청해야 하나요?', anchor: 'q-jurisdiction',
      intro: '접수·처리기관은 노동조합의 조직 범위에 따라 다릅니다. 1개 시·군·구 관할구역 내에서 조직된 노동조합은 시·군·구에, 2 이상의 시·군·구에 걸치는 단위노동조합은 도·특별시·광역시·특별자치도에, 2 이상의 특별시·광역시·도에 걸치는 노동조합은 지방고용노동관서에, 연합단체 및 전국규모의 산업별 단위노동조합은 고용노동부에 신청합니다.',
      highlights: ['1개 시군구 노동조합: 시·군·구', '2개 이상 시군구 걸친 단위노조: 도·특별시·광역시', '2개 이상 시도 걸친 노조: 지방고용노동관서', '연합단체·전국규모 산업별 단위노조: 고용노동부'],
      box: { label: '조직 범위별 관할기관', content: '시군구→도/시·시도 걸침→지방고용노동관서→고용노동부(전국단위) 순.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '별도의 구비서류는 필요 없습니다. 재교부신청서만 작성해 제출하면 됩니다.',
      highlights: ['별도 구비서류 없음', '재교부신청서(별지 제3호)만 작성', '간단한 서류만으로 신속하게 재교부 가능', '분실·훼손 사유를 신청서에 기재하면 충분'],
      box: { label: '준비서류', content: '구비서류 없음, 재교부신청서(별지 제3호)만 작성.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 조직 범위와 관계없이 모두 총 2일로 동일합니다.',
      highlights: ['수수료: 없음', '처리기간: 조직 범위와 무관하게 모두 총 2일', '신속하게 재교부받을 수 있는 절차', '분실 즉시 신청하면 빠르게 재발급 가능'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 조직 범위와 무관하게 총 2일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 우편입니다. 온라인신청은 고용노동부 민원마당(labor.moel.go.kr)에서 할 수 있습니다. 자신이 속한 노동조합의 조직 범위에 맞는 관할기관을 확인한 후 신청해야 합니다.',
      highlights: ['인터넷·방문·우편 세 가지 방법', '온라인신청 전용 사이트: 고용노동부 민원마당(labor.moel.go.kr)', '조직 범위에 맞는 관할기관 사전 확인 필요', '우편 신청도 가능해 원격 처리 편리'],
      box: { label: '신청경로', content: '고용노동부 민원마당(labor.moel.go.kr) 온라인 또는 조직 범위별 관할기관.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 고용노동부 노사관계법제과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 조직 범위에 따른 관할기관에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 고용노동부 노사관계법제과', '개별 민원 문의는 조직 범위별 관할기관', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 조직 범위별 관할기관, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119' },
    { q: '처리는 얼마나 걸리나요?', a: '조직 범위와 관계없이 모두 총 2일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119' },
    { q: '별도 서류를 준비해야 하나요?', a: '아니요, 별도의 구비서류 없이 재교부신청서만 작성하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119' },
    { q: '어디에 신청해야 하나요?', a: '노동조합의 조직 범위에 따라 시·군·구, 도·특별시·광역시, 지방고용노동관서, 고용노동부 중 해당 기관에 신청합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119' },
    { q: '온라인 신청은 어디서 하나요?', a: '고용노동부 민원마당(labor.moel.go.kr)에서 온라인 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119' },
  ],
  sources: [
    { label: '정부24(노동조합설립 신고증 재교부신청)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000119' },
    { label: '고용노동부 민원마당', url: 'https://labor.moel.go.kr' },
    { label: '고용노동부 노사관계법제과', url: 'https://www.moel.go.kr' },
  ],
} as const;

export const laborUnionCertificateReissueSpokes = [];
