/* 사업자등록 정정신고 - 국세청·정부24 */
export const businessRegistrationAmendmentPolicy = {
  id: '360', type: 'service' as const,
  title: '사업자등록 정정신고 상호 변경은 즉시 사업장 이전은 2일 걸리는 법',
  titleKeywords: { k1: '사업자등록정정신고', k2: '상호통신판매업자변경', k3: '사업장이전정정사유', k4: '홈택스임대차계약서' },
  slug: 'business-registration-amendment', org: '국세청·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '변경사항 발생 시 신고(상호 등은 즉시, 사업장 이전 등은 총 2일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073', ctaLabel: '정부24 사업자등록 정정신고 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '사업자등록 정정신고는 사업자등록을 한 사람이 등록사항을 변경하고자 할 때 관할 세무서장에게 신고하는 절차입니다. 상호, 통신판매업자의 사이버몰 명칭 또는 도메인이름 변경은 처리기간이 즉시(근무시간 내 3시간)이고, 사업장 이전 등 그 외의 정정사유는 총 2일이 소요됩니다. 신청 방법은 인터넷, 방문이며, 온라인신청은 홈택스(hometax.go.kr)에서 할 수 있습니다. 신청자격은 본인 또는 대리인입니다. 수수료는 없습니다. 제출서류는 사업자등록증, 사업장을 임차한 경우 임대차계약서 사본, 정정할 사항에 관한 서류입니다. 접수·처리기관은 세무서입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 국세청 홈택스에서 확인이 필요합니다.',
  metaDescription: '사업자등록 정정신고 상호 변경은 즉시 사업장 이전은 2일 걸리는 법 – 수수료 없음, 본인·대리인 신청. 홈택스 온라인신청 가능.',
  audience: '상호·사업장·사이버몰 명칭 등 사업자등록 사항이 바뀐 사업자',
  keyFacts: {
    신청방법: { value: '인터넷(홈택스), 방문', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073', text: '신청방법, 온라인신청', verifiedAt: '2026-07-17' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '상호·사이버몰명칭·도메인 변경은 즉시(3시간), 사업장 이전 등은 총 2일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073', text: '신청 방법 및 절차', verifiedAt: '2026-07-17' } },
    제출서류: { value: '사업자등록증, 임대차계약서 사본(임차 시), 정정할 사항에 관한 서류', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073', text: '제출 서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '부가가치세법(사업자등록 정정 관련 규정)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073', text: '제공 내용', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '사업자등록 정정신고가 뭔가요?', anchor: 'q-basic',
      intro: '사업자등록 정정신고는 사업자등록을 한 사람이 상호, 사업장 소재지, 사업의 종류 등 등록사항을 변경하고자 할 때 관할 세무서장에게 신고하는 민원사무입니다. 법인이 아닌 단체의 고유번호를 정정하는 경우에도 같은 절차로 신고합니다.',
      highlights: ['사업자등록 사항 변경 시 관할 세무서에 신고', '상호·사업장 소재지 등 변경 사항이 대상', '법인이 아닌 단체의 고유번호 정정도 포함', '변경 즉시 신고하지 않으면 불이익 있을 수 있음'],
      box: { label: '핵심', content: '사업자등록 사항(상호·사업장 등)이 바뀌었을 때 세무서에 신고하는 절차.' },
    },
    {
      q: '변경 유형에 따라 처리기간이 다른가요?', anchor: 'q-period-by-type',
      intro: '상호, 통신판매업자의 사이버몰 명칭 또는 도메인이름 변경은 처리기간이 즉시(근무시간 내 3시간)입니다. 반면 사업장 이전 등 그 외의 정정사유는 총 2일이 소요됩니다. 변경 유형에 따라 처리 속도가 다르므로 급한 경우 변경 유형을 미리 확인하는 것이 좋습니다.',
      highlights: ['상호·사이버몰명칭·도메인 변경: 즉시(근무시간 내 3시간)', '사업장 이전 등 그 외 사유: 총 2일', '변경 유형별로 처리 속도가 다름', '급한 경우 사전에 유형별 처리기간 확인 권장'],
      box: { label: '처리기간 비교', content: '상호 등 즉시, 사업장 이전 등은 총 2일.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '기본적으로 사업자등록증이 필요하며, 사업장을 임차한 경우에는 임대차계약서 사본을 추가로 제출해야 합니다. 그 외에 정정할 사항에 관한 서류(예: 상호 변경 증빙, 도메인 등록 서류 등)를 준비해야 합니다.',
      highlights: ['사업자등록증 필수 제출', '사업장 임차 시 임대차계약서 사본 추가', '정정할 사항에 관한 서류 준비 필요', '변경 유형별로 필요서류가 다를 수 있음'],
      box: { label: '준비서류', content: '사업자등록증+임대차계약서(임차 시)+정정사항 관련서류.' },
    },
    {
      q: '수수료는 있나요?', anchor: 'q-fee',
      intro: '수수료는 없습니다. 온라인신청은 홈택스(hometax.go.kr)에서 무료로 처리할 수 있으며, 방문 신청도 별도 비용이 발생하지 않습니다.',
      highlights: ['수수료: 없음', '온라인·방문 모두 무료', '홈택스에서 간편하게 처리 가능', '별도 비용 부담 없이 신고 가능'],
      box: { label: '수수료', content: '없음. 온라인·방문 모두 무료.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문입니다. 온라인신청은 홈택스(hometax.go.kr)에서 할 수 있습니다. 접수·처리기관은 세무서입니다.',
      highlights: ['인터넷·방문 두 가지 방법', '온라인신청 전용 사이트: 홈택스(hometax.go.kr)', '접수·처리기관: 세무서', '관할 세무서 방문으로도 처리 가능'],
      box: { label: '신청경로', content: '홈택스 온라인신청 또는 관할 세무서 방문.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 국세청 부가가치세과입니다(국번없이 126). 개별 민원(실제 접수·처리)에 대한 문의는 관할 세무서(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 국세청 부가가치세과(국번없이 126)', '개별 민원 문의는 관할 세무서', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 세무서, 일반 안내는 국번없이 126.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073' },
    { q: '상호만 바꾸면 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073' },
    { q: '사업장을 이전하면 얼마나 걸리나요?', a: '총 2일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073' },
    { q: '온라인으로 신청할 수 있나요?', a: '네, 홈택스(hometax.go.kr)에서 온라인 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073' },
    { q: '법인이 아닌 단체도 정정신고할 수 있나요?', a: '네, 법인이 아닌 단체의 고유번호 정정신고도 같은 절차로 신고합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073' },
  ],
  sources: [
    { label: '정부24(사업자등록 정정신고, 법인이 아닌 단체의 고유번호 정정신고)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000073' },
    { label: '국세청 홈택스', url: 'https://www.hometax.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const businessRegistrationAmendmentSpokes = [];
