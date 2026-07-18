/* 국민연금 반납금 납부신청 - 보건복지부·정부24 */
export const nationalPensionRefundRepaymentPolicy = {
  id: '347', type: 'service' as const,
  title: '국민연금 반납금 재가입 후 가입기간 복원하고 연금 다시 쌓는 법',
  titleKeywords: { k1: '국민연금반납금', k2: '반환일시금재납부', k3: '가입기간복원', k4: '국민연금공단' },
  slug: 'national-pension-refund-repayment', org: '보건복지부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '가입자 자격 재취득 후 신청 가능(처리 총 3일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315', ctaLabel: '정부24 국민연금 반납금 납부신청 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '국민연금 반납금 납부신청은 예전에 국민연금 반환일시금을 수령한 사람이 다시 가입자 자격을 취득했을 때, 그 반환일시금을 반납해 이전 가입 기간을 복원하기 위해 신청하는 절차로, 국민연금법 제78조에 근거합니다. 반환일시금을 반납하면 예전 가입 기간이 되살아나 노령연금 수급에 필요한 최소 가입 기간(10년)을 채우는 데 유리해집니다. 정부24에서 인터넷·방문·팩스·우편으로 신청할 수 있으며 수수료는 없고 구비서류도 필요 없습니다. 처리기간은 총 3일이 소요됩니다. 접수·처리기관은 국민연금공단지사입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 국민연금공단에서 확인이 필요합니다.',
  metaDescription: '국민연금 반납금 재가입 후 가입기간 복원하고 연금 다시 쌓는 법 – 수수료 없음, 구비서류 없음, 처리 총 3일. 반환일시금 반납으로 옛 가입기간 복원.',
  audience: '예전에 국민연금 반환일시금을 받았다가 다시 가입자가 된 사람',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, FAX, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315', text: '신청방법', verifiedAt: '2026-07-17' } },
    신청자격: { value: '법령상의 자격이 있는 자(반환일시금을 수령한 자, 제3자 포함)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '총 3일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315', text: '처리기간', verifiedAt: '2026-07-17' } },
    구비서류: { value: '없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315', text: '구비서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '국민연금법 제78조, 시행규칙 제32조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '반납금 납부신청이 뭔가요?', anchor: 'q-basic',
      intro: '국민연금 반납금 납부신청은 국민연금법 제77조에 따라 반환일시금을 수령한 사람이 가입자 자격을 재취득한 후, 그 반환일시금을 다시 납부(반납)해 이전 가입 기간을 복원하기 위해 신청하는 민원사무입니다. 국민연금법 제78조에 근거합니다.',
      highlights: ['반환일시금 수령자가 재가입 후 신청 가능', '국민연금법 제78조 근거', '반납하면 예전 가입 기간이 복원됨', '가입 기간 단절을 메우는 제도'],
      box: { label: '핵심', content: '반환일시금을 다시 납부(반납)해 예전 가입 기간을 되살리는 제도.' },
    },
    {
      q: '왜 반납해야 하나요?', anchor: 'q-why',
      intro: '반환일시금을 받으면 그 기간은 국민연금 가입 기간으로 인정되지 않아, 노령연금 수급에 필요한 최소 가입 기간(10년)을 채우는 데 불리해집니다. 반납금을 납부하면 이 단절된 가입 기간이 다시 살아나므로, 노후 연금 수급 자격과 수령액을 늘리는 데 도움이 됩니다.',
      highlights: ['반환일시금 수령 기간은 원래 가입 기간에서 제외', '반납하면 가입 기간이 다시 인정됨', '최소 가입 기간(10년) 충족에 유리', '노후 연금 수령액 증대에도 도움'],
      box: { label: '반납 이유', content: '단절된 가입 기간을 복원해 노후 연금 수급 자격·금액을 늘리기 위함.' },
    },
    {
      q: '누가 신청할 수 있나요?', anchor: 'q-eligibility',
      intro: '신청자격은 법령상 자격이 있는 사람(국민연금법 제77조에 따라 반환일시금을 수령한 사람, 제3자 포함)입니다. 본인 또는 대리인이 국민연금공단의 소정 양식에 따라 신청할 수 있습니다. 반환일시금을 받은 적이 없다면 이 제도를 이용할 수 없습니다.',
      highlights: ['반환일시금을 수령한 적이 있는 사람만 대상', '본인 또는 대리인이 신청 가능', '국민연금공단 소정 양식으로 신청', '반환일시금 미수령자는 대상 아님'],
      box: { label: '신청자격', content: '과거 반환일시금을 수령한 사람만 신청 가능.' },
    },
    {
      q: '신청할 때 무엇이 필요한가요?', anchor: 'q-docs',
      intro: '구비서류는 없습니다. 반납금 납부신청서(국민연금법 시행규칙 별지 서식 24호)만 작성하면 되며, 별도로 준비해서 제출할 서류는 없습니다. 국민연금공단이 보유한 반환일시금 수령 이력을 바탕으로 반납금액이 산정됩니다.',
      highlights: ['구비서류 없음', '반납금 납부신청서(별지 제24호)만 작성', '국민연금공단이 반환일시금 수령 이력 확인', '반납금액은 공단이 산정해 안내'],
      box: { label: '준비서류', content: '없음. 신청서만 작성하면 됨.' },
    },
    {
      q: '처리기간과 신청 방법은 어떻게 되나요?', anchor: 'q-apply-method',
      intro: '처리기간은 총 3일입니다. 신청 방법은 인터넷, 방문, 팩스, 우편입니다. 접수·처리기관은 국민연금공단지사입니다. 국민연금공단 홈페이지(nps.or.kr)에서도 관련 정보를 확인할 수 있습니다.',
      highlights: ['처리기간: 총 3일', '인터넷·방문·FAX·우편 네 가지 방법', '접수·처리기관: 국민연금공단지사', '국민연금공단 홈페이지에서 정보 확인 가능'],
      box: { label: '신청경로', content: '국민연금공단지사에 신청. 처리 총 3일 소요.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 보건복지부 국민연금정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 국민연금공단지사(관할 처리기관)에 직접 연락하는 것이 정확합니다. 국민연금공단 콜센터(국번없이 1355)나 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 보건복지부 국민연금정책과', '개별 민원 문의는 관할 국민연금공단지사', '국민연금공단 콜센터 국번없이 1355', '정부24 콜센터 1588-2188'],
      box: { label: '문의처', content: '개별 민원은 관할 국민연금공단지사, 일반 안내는 국번없이 1355.' },
    },
  ],
  faq: [
    { q: '반환일시금을 받은 적 없어도 신청할 수 있나요?', a: '아니요, 반환일시금을 수령한 적이 있는 사람만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315' },
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315' },
    { q: '반납하면 왜 좋은가요?', a: '단절됐던 가입 기간이 복원돼 노령연금 수급 자격과 수령액에 유리해집니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315' },
    { q: '준비할 서류가 있나요?', a: '구비서류 없이 신청서만 작성하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315' },
    { q: '처리는 얼마나 걸리나요?', a: '총 3일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315' },
  ],
  sources: [
    { label: '정부24(국민연금 반납금 납부신청)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000315' },
    { label: '국민연금공단', url: 'https://www.nps.or.kr' },
    { label: '국민연금공단 콜센터 국번없이 1355', url: 'https://www.nps.or.kr' },
  ],
} as const;

export const nationalPensionRefundRepaymentSpokes = [];
