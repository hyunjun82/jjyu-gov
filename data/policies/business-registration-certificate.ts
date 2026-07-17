/* 사업자등록증명 발급 - 국세청·정부24 */
export const businessRegistrationCertificatePolicy = {
  id: '295', type: 'service' as const,
  title: '사업자등록증명 인터넷 무료 발급받고 대출·입찰에 제출하는 법',
  titleKeywords: { k1: '사업자등록증명', k2: '인터넷무료발급', k3: '영문증명', k4: '홈택스' },
  slug: 'business-registration-certificate', org: '국세청·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '상시 신청 가능(즉시 처리, 근무시간 내 최대 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016', ctaLabel: '정부24 사업자등록증명 발급 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '사업자등록증명은 사업자등록을 한 사람이 자신의 사업내역을 증명받기 위해 신청하는 서류로, 대출 신청·공공입찰 참가·거래처 제출·정부지원사업 신청 등에서 요구됩니다. 정부24나 국세청 홈택스에서 인터넷·방문·민원우편·모바일·무인발급기로 신청할 수 있으며 수수료는 없습니다. 처리기간은 근무시간 내 즉시(최대 3시간)이며 구비서류도 필요 없습니다. 온라인은 대리인 신청이 불가능하며, 영문증명(Certificate of Business Registration)이 필요한 경우 여권이 확인 서류로 쓰입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24에서 확인이 필요합니다.',
  metaDescription: '사업자등록증명 인터넷 무료 발급받고 대출·입찰에 제출하는 법 – 수수료 없음, 처리 즉시(3시간 이내). 영문증명도 발급 가능.',
  audience: '대출·공공입찰·정부지원사업 신청 등에 사업내역을 증명해야 하는 사업자',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, 민원우편, 모바일, 무인발급기(온라인은 대리인 신청 불가)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016', text: '신청방법·신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '즉시(근무시간 내 최대 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016', text: '처리기간', verifiedAt: '2026-07-17' } },
    발급종류: { value: '사업자등록증명, 영문 사업자등록증명(Certificate of Business Registration)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016', text: '발급서류', verifiedAt: '2026-07-17' } },
    구비서류: { value: '없음(본인은 신분증만 제시)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016', text: '구비서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '국세청민원사무처리규정 제33조·제44조, 부가가치세법 제8조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '사업자등록증명이 뭔가요?', anchor: 'q-basic',
      intro: '사업자등록증명은 사업자등록을 한 사람이 자신의 사업내역을 증명받기 위해 신청하는 민원사무입니다. 부가가치세법 제8조에 근거하며, 사업자등록번호, 상호, 대표자, 사업장 소재지, 업종 등이 기재됩니다. 사업자등록증(원본) 분실 시에도 이 증명서로 사업 내역을 확인할 수 있습니다.',
      highlights: ['사업자등록 내역을 공식 증명하는 서류', '부가가치세법 제8조 근거', '사업자등록번호·상호·대표자·업종 등 기재', '사업자등록증 분실 시에도 활용 가능'],
      box: { label: '핵심', content: '사업자등록번호·상호·대표자·업종 등 사업내역을 증명하는 서류.' },
    },
    {
      q: '어디에 제출할 때 필요한가요?', anchor: 'q-usage',
      intro: '사업자등록증명은 은행 대출 심사, 공공기관 입찰 참가, 거래처 제출용, 정부지원사업 신청 등 사업자 자격을 확인해야 하는 여러 절차에서 요구됩니다. 최근 발급된 증명서를 요구하는 경우가 많으므로, 제출 기한에 맞춰 미리 발급받아 두는 것이 좋습니다.',
      highlights: ['은행 대출 심사 시 요구되는 경우 많음', '공공기관 입찰 참가 자격 증명', '거래처 제출용·정부지원사업 신청 시 활용', '최근 발급본을 요구하는 경우가 많음'],
      box: { label: '활용처', content: '대출·입찰·거래처 제출·정부지원사업 신청 등에 필요.' },
    },
    {
      q: '영문 증명서도 발급받을 수 있나요?', anchor: 'q-english',
      intro: '네, 사업자등록증명 Certificate of Business Registration이라는 영문 증명서도 발급받을 수 있습니다. 국세청민원사무처리규정 별지 서식 6호를 사용하며, 영문증명을 신청하는 경우에는 여권이 확인 서류로 활용됩니다. 해외 거래처 제출이나 해외 비자 신청 등에 필요할 때 이용하면 됩니다.',
      highlights: ['영문 증명서(Certificate of Business Registration) 발급 가능', '국세청민원사무처리규정 별지 서식 6호 사용', '영문증명 신청 시 여권이 확인 서류로 활용', '해외 거래처 제출·비자 신청 등에 활용'],
      box: { label: '영문증명', content: '해외 제출용은 영문 증명서로 발급 가능, 여권으로 확인.' },
    },
    {
      q: '신청할 때 무엇이 필요한가요?', anchor: 'q-docs',
      intro: '구비서류는 없습니다. 본인이 신청할 때는 신분증만 제시하면 되고, 대리인이 신청할 때는 위임장, 대리인의 신분증, 위임인의 신분증(법인은 인감증명서·사용인감계·대표자 신분증 중 1개)을 제출해야 합니다. 국세증명·사실증명 발급 민원신청서(별지 제1호 서식)를 작성합니다.',
      highlights: ['구비서류 없음(본인은 신분증만)', '대리인은 위임장+양쪽 신분증 필요', '법인은 인감증명서 등으로 위임인 확인', '국세증명·사실증명 발급 민원신청서 작성'],
      box: { label: '준비서류', content: '본인은 신분증만, 대리인은 위임장+양쪽 신분증 필요.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '사업자등록증명 발급은 수수료가 없습니다. 처리기간은 즉시가 원칙이며, 근무시간 내 최대 3시간 이내에 처리됩니다. 접수기관은 세무서, 시·군·구 및 읍·면·동 출장소이며, 처리는 세무서에서 이뤄집니다. 인터넷으로 신청하면 즉시 발급받아 바로 제출할 수 있습니다.',
      highlights: ['수수료 없음(인터넷·방문 모두)', '처리기간: 즉시(근무시간 내 최대 3시간)', '접수: 세무서·시군구·읍면동, 처리: 세무서', '인터넷 신청이 가장 빠르고 편리'],
      box: { label: '수수료·처리기간', content: '수수료 없이 즉시 처리. 인터넷 신청이 가장 편리.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 국세청 부가가치세과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 세무서(관할 처리기관)에 직접 연락하는 것이 정확합니다. 국세상담센터(국번없이 126)나 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 국세청 부가가치세과', '개별 민원 문의는 관할 세무서', '국세상담센터 국번없이 126', '정부24 콜센터 1588-2188'],
      box: { label: '문의처', content: '개별 민원은 관할 세무서, 세금 관련 안내는 국번없이 126.' },
    },
  ],
  faq: [
    { q: '사업자등록증명은 어디서 발급받나요?', a: '정부24나 국세청 홈택스에서 인터넷으로 무료 발급받거나, 관할 세무서·시군구·읍면동을 방문·모바일·무인발급기로 이용할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016' },
    { q: '수수료가 있나요?', a: '없습니다. 인터넷·방문 모두 수수료 없이 발급받을 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016' },
    { q: '영문으로도 발급받을 수 있나요?', a: '네, Certificate of Business Registration이라는 영문 증명서도 발급 가능하며, 여권이 확인 서류로 활용됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016' },
    { q: '가족이 대신 온라인으로 발급받을 수 있나요?', a: '아니요, 온라인은 대리인 신청이 불가능해 본인만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016' },
    { q: '처리 시간은 얼마나 걸리나요?', a: '즉시 처리가 원칙이며 근무시간 내 최대 3시간 이내에 처리됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016' },
  ],
  sources: [
    { label: '정부24(사업자등록증명 발급)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12100000016' },
    { label: '국세청 홈택스', url: 'https://www.hometax.go.kr' },
    { label: '국세상담센터 ☎126', url: 'https://call.nts.go.kr' },
  ],
} as const;

export const businessRegistrationCertificateSpokes = [];
