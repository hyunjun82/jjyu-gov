/* 학점은행제 학위증명 발급 - 교육부·정부24 */
export const creditBankDegreeCertificatePolicy = {
  id: '354', type: 'service' as const,
  title: '학점은행제 학위증명서 국문 300원 영문 500원 cb.or.kr 발급법',
  titleKeywords: { k1: '학점은행제학위증명', k2: 'cb.or.kr온라인신청', k3: '국가평생교육진흥원', k4: '학사전문학사증명' },
  slug: 'credit-bank-degree-certificate', org: '교육부·정부24', cat: '생활', catSlug: 'life',
  amount: '국문 300원, 영문 500원', deadline: '상시 신청 가능(방문·인터넷 즉시, 우편 총 2일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041', ctaLabel: '정부24 학점은행제 학위증명 발급 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '학점은행제 학위증명 발급은 학점은행제로 취득한 학위(학사·전문학사)를 증명하는 서류를 발급받기 위해 신청하는 절차로, 학점인정 등에 관한 법률 제9조에 근거합니다. 신청 방법은 인터넷, 방문, 우편이며, 온라인신청은 cb.or.kr(학점은행 종합정보시스템)에서 할 수 있습니다. 신청자격은 본인 또는 대리인이나, 온라인은 대리인 신청이 불가합니다. 수수료는 국문 300원, 영문 500원이며 구비서류는 없습니다. 처리기간은 방문·인터넷은 즉시(근무시간 내 3시간), 우편 접수는 총 2일입니다. 접수·처리기관은 국가평생교육진흥원입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 국가평생교육진흥원에서 확인이 필요합니다.',
  metaDescription: '학점은행제 학위증명서 국문 300원 영문 500원 cb.or.kr 발급법 – 본인·대리인 신청, 구비서류 없음, 방문·인터넷 즉시 발급.',
  audience: '학점은행제로 학사·전문학사 학위를 취득해 학위증명서가 필요한 사람',
  keyFacts: {
    신청방법: { value: '인터넷(cb.or.kr), 방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041', text: '신청방법, 온라인신청', verifiedAt: '2026-07-17' } },
    신청자격: { value: '본인 또는 대리인(온라인은 대리인 신청 불가)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '국문 300원, 영문 500원', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '방문·인터넷 즉시(근무시간 내 3시간), 우편은 총 2일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041', text: '신청 방법 및 절차', verifiedAt: '2026-07-17' } },
    구비서류: { value: '없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041', text: '구비서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '학점인정 등에 관한 법률 제9조, 시행령 제15조·제19조, 시행규칙 제8조·제12조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '학점은행제 학위증명이 뭔가요?', anchor: 'q-basic',
      intro: '학점은행제 학위증명 발급은 학점은행제로 취득한 학위(학사·전문학사)를 증명하는 학위신청서(별지 서식 15호)를 발급받기 위해 신청하는 민원사무입니다. 학점인정 등에 관한 법률 제9조에 근거하며, 취업이나 진학 시 학위 취득 사실을 증명하는 용도로 쓰입니다.',
      highlights: ['학점은행제로 취득한 학사·전문학사 학위를 증명', '학점인정 등에 관한 법률 제9조 근거', '취업·진학 시 학위 증명 용도로 사용', '학위신청서(별지 제15호) 양식 사용'],
      box: { label: '핵심', content: '학점은행제로 딴 학사·전문학사 학위를 공식 증명하는 서류.' },
    },
    {
      q: '누가 신청할 수 있나요?', anchor: 'q-eligibility',
      intro: '신청자격은 본인 또는 대리인입니다. 다만 온라인(cb.or.kr) 신청은 대리인 신청이 불가하며 본인만 가능합니다. 방문이나 우편으로 신청하는 경우에는 대리인도 신청할 수 있습니다.',
      highlights: ['본인 또는 대리인 신청 가능', '온라인(cb.or.kr)은 대리인 신청 불가', '방문·우편은 대리인 신청 가능', '본인 확인 절차는 신청 방법별로 다름'],
      box: { label: '신청자격', content: '본인 또는 대리인. 단 온라인은 본인만 가능.' },
    },
    {
      q: '수수료와 구비서류는 어떻게 되나요?', anchor: 'q-fee-docs',
      intro: '수수료는 국문증명서 300원, 영문증명서 500원입니다. 구비서류는 별도로 없어 학위신청서만 작성하면 됩니다. 국가평생교육진흥원이 학점은행제 학적 정보를 보유하고 있어 별도 증빙서류 제출이 필요 없습니다.',
      highlights: ['국문 300원, 영문 500원', '구비서류 없음(신청서만 작성)', '국가평생교육진흥원이 학적정보 보유', '영문 증명서는 해외 진학·취업 시 활용'],
      box: { label: '수수료', content: '국문 300원 / 영문 500원, 구비서류 없음.' },
    },
    {
      q: '처리기간은 얼마나 걸리나요?', anchor: 'q-period',
      intro: '방문 또는 인터넷 신청은 즉시 처리되며 근무시간 내 3시간이 소요됩니다. 우편으로 접수하는 경우에는 총 2일이 소요됩니다. 빠른 발급이 필요하면 인터넷이나 방문 신청이 유리합니다.',
      highlights: ['방문·인터넷: 즉시(근무시간 내 3시간)', '우편: 총 2일', '급하면 인터넷·방문 신청 권장', '인터넷 발급은 출력형 증명서로 즉시 확인 가능'],
      box: { label: '처리기간', content: '방문·인터넷 즉시(3시간), 우편은 총 2일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 우편입니다. 온라인신청은 cb.or.kr(학점은행 종합정보시스템)에서 할 수 있습니다. 접수·처리기관은 국가평생교육진흥원입니다.',
      highlights: ['인터넷(cb.or.kr)·방문·우편 세 가지 방법', '온라인신청 전용 사이트: cb.or.kr', '접수·처리기관: 국가평생교육진흥원', '정부24에서도 발급 연계 가능'],
      box: { label: '신청경로', content: 'cb.or.kr 온라인신청 또는 국가평생교육진흥원 방문·우편.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 교육부 평생학습정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 국가평생교육진흥원(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 교육부 평생학습정책과', '개별 민원 문의는 국가평생교육진흥원', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 국가평생교육진흥원, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '온라인으로 대리인이 신청할 수 있나요?', a: '아니요, 온라인(cb.or.kr)은 본인만 신청할 수 있고 대리인 신청은 불가합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041' },
    { q: '수수료는 얼마인가요?', a: '국문증명서는 300원, 영문증명서는 500원입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041' },
    { q: '준비할 서류가 있나요?', a: '없습니다. 학위신청서만 작성하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041' },
    { q: '처리는 얼마나 걸리나요?', a: '방문·인터넷은 즉시(근무시간 내 3시간), 우편은 총 2일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041' },
    { q: '어디서 온라인 신청하나요?', a: '학점은행 종합정보시스템(cb.or.kr)에서 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041' },
  ],
  sources: [
    { label: '정부24(학점은행제 학위증명 발급)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000041' },
    { label: '학점은행 종합정보시스템', url: 'https://www.cb.or.kr' },
    { label: '국가평생교육진흥원', url: 'https://www.nile.or.kr' },
  ],
} as const;

export const creditBankDegreeCertificateSpokes = [];
