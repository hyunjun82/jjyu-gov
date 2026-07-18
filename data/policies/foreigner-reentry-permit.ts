/* 재입국허가 - 법무부·정부24 */
export const foreignerReentryPermitPolicy = {
  id: '334', type: 'service' as const,
  title: '재입국허가 출국 전에 신청해 체류자격 유지하고 3일 만에 받는 법',
  titleKeywords: { k1: '재입국허가', k2: '체류자격유지', k3: '단수복수수수료', k4: '법무부' },
  slug: 'foreigner-reentry-permit', org: '법무부·정부24', cat: '생활', catSlug: 'life',
  amount: '단수 30,000원, 복수 50,000원', deadline: '출국 전 신청(처리 총 3일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093', ctaLabel: '정부24 재입국허가 신청 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '재입국허가는 등록외국인이 체류자격을 유지하면서 출입국하기 위해 출국 전에 신청하는 절차로, 출입국관리법 제30조에 근거합니다. 재입국허가를 받지 않고 출국하면 기존 체류자격이 상실될 수 있어, 다시 입국하려면 처음부터 비자를 새로 받아야 할 수 있습니다. 정부24에서 인터넷·방문으로 신청할 수 있으며, 수수료는 단수 30,000원, 복수 50,000원입니다. 처리기간은 총 3일이 소요됩니다. 제출서류는 여권(방문 시 필요)입니다. 접수·처리기관은 출입국·외국인청(사무소·출장소)입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 하이코리아에서 확인이 필요합니다.',
  metaDescription: '재입국허가 출국 전에 신청해 체류자격 유지하고 3일 만에 받는 법 – 단수 3만원, 복수 5만원. 처리 총 3일. 출국 전 미신청 시 체류자격 상실 위험.',
  audience: '체류자격을 유지하면서 잠시 출국했다 다시 입국하려는 등록외국인',
  keyFacts: {
    신청방법: { value: '인터넷, 방문', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093', text: '신청방법', verifiedAt: '2026-07-17' } },
    수수료: { value: '단수 30,000원, 복수 50,000원', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '총 3일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '여권(방문 시 필요)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093', text: '제출서류', verifiedAt: '2026-07-17' } },
    접수처리기관: { value: '출입국·외국인청(출장소), 출입국·외국인사무소(출장소)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093', text: '신청 방법 및 절차', verifiedAt: '2026-07-17' } },
    근거법령: { value: '출입국관리법 제30조, 시행령 제38조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '재입국허가가 뭔가요?', anchor: 'q-basic',
      intro: '재입국허가는 등록외국인이 체류자격을 유지하면서 출입국하기 위해 출국하기 전에 미리 신청하는 민원사무입니다. 출입국관리법 제30조에 근거합니다. 재입국허가를 받아두면, 일시적으로 대한민국을 떠났다가 다시 들어올 때도 기존에 부여받은 체류자격과 남은 체류기간을 그대로 유지할 수 있습니다.',
      highlights: ['체류자격을 유지하며 출입국하기 위한 사전 허가', '출입국관리법 제30조 근거', '출국 전에 미리 신청해야 함', '허가 없이 출국하면 체류자격 상실 위험'],
      box: { label: '핵심', content: '체류자격 유지한 채 재입국하려면 출국 전 미리 허가받아야 함.' },
    },
    {
      q: '왜 미리 받아야 하나요?', anchor: 'q-why',
      intro: '등록외국인이 재입국허가를 받지 않고 출국하면, 기존에 부여받은 체류자격이 상실될 수 있습니다. 이 경우 다시 대한민국에 들어오려면 새로 비자를 신청하고 발급받는 절차를 처음부터 다시 밟아야 할 수 있어 시간과 비용이 크게 늘어납니다. 따라서 일시 출국 계획이 있다면 출국 전에 반드시 재입국허가를 받아야 합니다.',
      highlights: ['미신청 출국 시 체류자격 상실 위험', '체류자격 상실 시 비자 재신청 필요', '시간·비용 부담이 크게 증가할 수 있음', '일시 출국 계획이 있으면 반드시 사전 신청'],
      box: { label: '필요성', content: '미신청 출국은 체류자격 상실로 이어질 수 있어 반드시 사전 허가 필요.' },
    },
    {
      q: '단수와 복수는 어떻게 다른가요?', anchor: 'q-single-multi',
      intro: '단수 재입국허가는 30,000원으로, 허가 기간 내 한 번만 출국·재입국할 수 있습니다. 복수 재입국허가는 50,000원으로, 허가 기간 내 여러 번 자유롭게 출입국할 수 있습니다. 출국 계획이 여러 번이라면 복수 허가를 받는 것이 유리합니다.',
      highlights: ['단수: 30,000원, 1회만 출입국 가능', '복수: 50,000원, 여러 번 출입국 가능', '출국 계획 횟수에 따라 선택', '복수가 더 비싸지만 여러 번 이용 시 효율적'],
      table: { caption: '재입국허가 유형', headers: ['유형', '수수료', '이용 횟수'], rows: [['단수', '30,000원', '1회'], ['복수', '50,000원', '여러 회']] },
    },
    {
      q: '신청할 때 무엇이 필요한가요?', anchor: 'q-docs',
      intro: '제출서류는 여권이며, 방문 신청 시에만 필요합니다. 통합신청서/신고서(출입국관리법 시행령 별지 서식 34호)를 작성합니다. 다른 복잡한 서류 없이 여권만 있으면 신청할 수 있어 절차가 비교적 간단합니다.',
      highlights: ['여권만 있으면 됨(방문 시 필요)', '통합신청서/신고서(별지 제34호) 작성', '별도 복잡한 서류 요구 없음', '간단한 절차로 빠르게 처리'],
      box: { label: '준비서류', content: '여권만 있으면 신청 가능(방문 시).' },
    },
    {
      q: '처리기간과 신청 방법은 어떻게 되나요?', anchor: 'q-apply-period',
      intro: '처리기간은 총 3일입니다. 신청 방법은 인터넷과 방문 두 가지이며, 온라인 신청은 하이코리아(hikorea.go.kr)를 통해 할 수 있습니다. 방문 신청은 관할 출입국·외국인청(사무소·출장소)에서 할 수 있습니다. 출국 일정이 급하다면 여유를 두고 미리 신청하는 것이 좋습니다.',
      highlights: ['처리기간: 총 3일', '온라인: 하이코리아(hikorea.go.kr)', '방문: 관할 출입국·외국인청(사무소)', '출국 일정 여유 있게 미리 신청 권장'],
      box: { label: '신청경로', content: '하이코리아 온라인 신청 또는 관할 출입국·외국인청 방문. 처리 총 3일.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 법무부 체류관리과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 신청한 출입국·외국인청(사무소·출장소)(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188)나 정부민원안내콜센터(국번없이 110, 365일 24시간)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 법무부 체류관리과', '개별 민원 문의는 관할 출입국·외국인청(사무소)', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110(24시간)'],
      box: { label: '문의처', content: '개별 민원은 관할 출입국·외국인청(사무소), 일반 안내는 국번없이 110.' },
    },
  ],
  faq: [
    { q: '재입국허가 없이 출국하면 어떻게 되나요?', a: '기존 체류자격이 상실될 수 있어, 재입국하려면 비자를 새로 신청해야 할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093' },
    { q: '수수료는 얼마인가요?', a: '단수는 30,000원, 복수는 50,000원입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093' },
    { q: '처리는 얼마나 걸리나요?', a: '총 3일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093' },
    { q: '단수와 복수 중 뭘 선택해야 하나요?', a: '한 번만 출국할 계획이면 단수, 여러 번 출입국할 계획이면 복수가 유리합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093' },
    { q: '온라인으로 신청할 수 있나요?', a: '네, 하이코리아(hikorea.go.kr)에서 온라인으로 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093' },
  ],
  sources: [
    { label: '정부24(재입국허가)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000093' },
    { label: '하이코리아(Hi Korea)', url: 'https://www.hikorea.go.kr' },
    { label: '법무부', url: 'https://www.moj.go.kr' },
  ],
} as const;

export const foreignerReentryPermitSpokes = [];
