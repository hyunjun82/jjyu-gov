/* 장애인등록증(장애인복지카드) 재발급 신청 - 보건복지부·정부24 */
export const disabilityCardReissuePolicy = {
  id: '377', type: 'service' as const,
  title: '장애인복지카드 분실 재발급 20일 만에 신청하는 법 유효기간 만료는 예외',
  titleKeywords: { k1: '장애인등록증복지카드재발급', k2: '유효기간만료신규발급', k3: '한국조폐공사경유', k4: '시군구읍면동' },
  slug: 'disability-card-reissue', org: '보건복지부·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '상시 신청 가능(처리 총 20일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110', ctaLabel: '정부24 장애인등록증(복지카드) 재발급 신청 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '장애인등록증(장애인복지카드) 재발급 신청은 장애인등록증을 발급받았던 장애인이 등록증의 분실, 훼손, 유효기간제한 등으로 재발급받고자 할 때 신청하는 절차로, 장애인복지법 제32조에 근거합니다. 다만 유효기간 만료 이후에는 재발급이 아닌 신규 발급에 해당해 온라인 발급 신청이 불가합니다. 신청 방법은 인터넷, 방문이며, 신청자격은 본인 또는 대리인이나 온라인은 대리인 신청이 불가합니다. 수수료는 없습니다. 처리기간은 총 20일이 소요됩니다. 제출서류는 장애인등록증(분실 시 제외)이며, 자동이체를 신청하는 경우 자동이체 금융기관의 계좌번호가 표시된 통장 사본도 필요합니다. 접수·처리기관은 시·군·구, 읍·면·동이며 한국조폐공사가 경유합니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 시·군·구에서 확인이 필요합니다.',
  metaDescription: '장애인복지카드 분실 재발급 20일 만에 신청하는 법 유효기간 만료는 예외 – 본인·대리인 신청, 수수료 없음, 처리 총 20일.',
  audience: '장애인등록증(복지카드)을 분실·훼손했거나 유효기간이 제한된 장애인',
  keyFacts: {
    신청방법: { value: '인터넷, 방문(온라인은 대리인 신청 불가)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110', text: '신청방법, 신청자격', verifiedAt: '2026-07-17' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '총 20일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '장애인등록증(분실 시 제외), 자동이체 시 통장 사본', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110', text: '제출 서류', verifiedAt: '2026-07-17' } },
    유의사항: { value: '유효기간 만료 후에는 재발급이 아닌 신규발급(온라인 불가)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110', text: '제공 내용', verifiedAt: '2026-07-17' } },
    근거법령: { value: '장애인복지법 제32조, 시행규칙 제4조 별지 제1호의4', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '장애인등록증(복지카드) 재발급이 뭔가요?', anchor: 'q-basic',
      intro: '장애인등록증(장애인복지카드) 재발급 신청은 장애인등록증을 발급받았던 장애인이 분실, 훼손, 유효기간제한 등으로 다시 발급받고자 할 때 신청하는 민원사무입니다. 장애인복지법 제32조에 근거하며, 장애인등록 및 서비스신청서(별지 서식 1호의4)를 작성해 신청합니다.',
      highlights: ['장애인등록증(복지카드) 분실·훼손 시 재발급 절차', '장애인복지법 제32조 근거', '장애인등록 및 서비스신청서(별지 제1호의4) 작성', '유효기간 제한으로 인한 재발급도 포함'],
      box: { label: '핵심', content: '장애인등록증(복지카드)을 분실·훼손했을 때 다시 발급받는 절차.' },
    },
    {
      q: '유효기간이 만료됐는데도 재발급 신청하면 되나요?', anchor: 'q-expiry-caveat',
      intro: '유효기간 만료 이후에는 재발급이 아닌 신규 발급에 해당하므로, 이 경우 온라인 발급 신청이 불가능합니다. 유효기간이 만료된 경우에는 관할 읍·면·동을 방문해 신규 발급 절차로 진행해야 합니다.',
      highlights: ['유효기간 만료 후는 재발급이 아닌 신규발급으로 분류', '이 경우 온라인 신청 불가', '관할 읍·면·동 방문으로 신규발급 절차 진행', '재발급과 신규발급의 절차 구분에 유의'],
      box: { label: '유의사항', content: '유효기간 만료 시에는 온라인 재발급이 아닌 방문 신규발급.' },
    },
    {
      q: '누가 신청할 수 있나요?', anchor: 'q-eligibility',
      intro: '신청자격은 본인 또는 대리인입니다. 다만 온라인 신청은 대리인 신청이 불가하며 본인만 가능합니다. 방문 신청의 경우 대리인도 위임 절차를 갖춰 신청할 수 있습니다.',
      highlights: ['본인 또는 대리인 신청 가능', '온라인은 대리인 신청 불가', '방문은 위임 절차 갖춘 대리인 신청 가능', '유효기간 만료 시에는 반드시 방문 필요'],
      box: { label: '신청자격', content: '본인 또는 대리인. 단 온라인은 본인만 가능.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '장애인등록증을 제출해야 하나, 등록증을 잃어버린 경우에는 제외됩니다. 자동이체를 신청하는 경우에는 자동이체 금융기관의 계좌번호가 표시된 통장 사본도 함께 제출해야 합니다. 장애인증명은 행정정보공동이용을 통해 담당공무원이 확인할 수 있습니다.',
      highlights: ['장애인등록증 제출(분실 시 제외)', '자동이체 신청 시 통장 사본 추가 필요', '장애인증명은 행정정보공동이용으로 확인', '분실인 경우 별도 서류 부담이 적음'],
      box: { label: '준비서류', content: '장애인등록증(분실 시 제외), 자동이체 시 통장 사본.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총 20일이 소요됩니다. 한국조폐공사에서 실물 카드를 제작하는 과정을 거치기 때문에 즉시 처리되지 않습니다.',
      highlights: ['수수료: 없음', '처리기간: 총 20일', '한국조폐공사의 카드 제작 과정 포함', '즉시 발급이 아니므로 여유 있게 신청 권장'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 20일(카드 제작 포함).' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문입니다. 접수·처리기관은 시·군·구, 읍·면·동이며 한국조폐공사가 카드 제작을 경유합니다. 유효기간이 만료되지 않은 분실·훼손의 경우에는 인터넷으로도 신청할 수 있습니다.',
      highlights: ['인터넷·방문 두 가지 방법(유효기간 만료 시 방문만)', '접수·처리기관: 시·군·구, 읍·면·동', '경유기관: 한국조폐공사(카드 제작)', '정부24에서 인터넷 신청 가능'],
      box: { label: '신청경로', content: '정부24 인터넷 신청(유효기간 내) 또는 관할 읍·면·동 방문.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110' },
    { q: '처리는 얼마나 걸리나요?', a: '총 20일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110' },
    { q: '분실했는데 예전 등록증을 내야 하나요?', a: '아니요, 등록증을 잃어버린 경우에는 제출이 제외됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110' },
    { q: '유효기간이 지났는데 온라인으로 재발급받을 수 있나요?', a: '아니요, 유효기간 만료 후는 신규발급으로 분류되어 온라인 신청이 불가능합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110' },
    { q: '대리인이 온라인으로 신청할 수 있나요?', a: '아니요, 온라인은 본인만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110' },
  ],
  sources: [
    { label: '정부24(장애인등록증(장애인복지카드) 재발급 신청)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000110' },
    { label: '보건복지부', url: 'https://www.mohw.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const disabilityCardReissueSpokes = [];
