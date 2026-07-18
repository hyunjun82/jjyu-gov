/* 사회보장협정에 의한 국민연금 가입증명서 발급 - 보건복지부·정부24 */
export const socialSecurityAgreementPensionCertificatePolicy = {
  id: '403', type: 'service' as const,
  title: '해외파견 국민연금 가입증명서 파견명령서로 7일 만에 이중가입 면제받는 법',
  titleKeywords: { k1: '사회보장협정국민연금가입증명서', k2: '상대국연금제도가입면제', k3: '파견근무명령서현지고용계약서', k4: '국민연금공단본부지사' },
  slug: 'social-security-agreement-pension-certificate', org: '보건복지부·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '해외파견 전 신청 권장(처리 총 7일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390', ctaLabel: '정부24 사회보장협정 국민연금 가입증명서 발급 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '사회보장협정에 의한 국민연금 가입증명서 발급은 사회보장협정에 따라 상대국 연금제도 가입을 면제받기 위해 국민연금 가입증명서 발급을 신청하는 절차로, 국민연금법 제127조에 근거합니다. 우리나라와 사회보장협정을 체결한 국가에 파견근무를 나가는 근로자가 현지에서 이중으로 연금보험료를 내지 않도록 이 증명서를 발급받아 제출합니다. 신청 방법은 방문, 팩스, 우편, EDI이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없습니다. 처리기간은 총 7일입니다. 제출서류는 사회보장협정에 의한 국민연금 가입증명 발급 신청서, 파견근무 명령서 또는 현지고용계약서 사본 등입니다. 접수기관은 국민연금공단 본부·지사, 처리기관은 국민연금공단 본부입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 국민연금공단에서 확인이 필요합니다.',
  metaDescription: '해외파견 국민연금 가입증명서 파견명령서로 7일 만에 이중가입 면제받는 법 – 본인·대리인 신청, 수수료 없음, 처리 총 7일.',
  audience: '사회보장협정 체결국에 파견근무·현지고용되어 이중연금가입을 면제받아야 하는 근로자',
  keyFacts: {
    신청방법: { value: '방문, FAX, 우편, EDI', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '총 7일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390', text: '처리기간', verifiedAt: '2026-07-18' } },
    제출서류: { value: '가입증명 발급 신청서, 파견근무 명령서 또는 현지고용계약서 사본 등', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390', text: '제출 서류', verifiedAt: '2026-07-18' } },
    접수처리기관: { value: '접수: 국민연금공단 본부·지사, 처리: 국민연금공단 본부', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390', text: '신청 방법 및 절차', verifiedAt: '2026-07-18' } },
    근거법령: { value: '국민연금법 제127조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '사회보장협정에 의한 국민연금 가입증명서가 뭔가요?', anchor: 'q-basic',
      intro: '사회보장협정에 의한 국민연금 가입증명서 발급은 사회보장협정에 따라 상대국 연금제도 가입을 면제받기 위해 국민연금 가입증명서 발급을 신청하는 민원사무입니다. 국민연금법 제127조에 근거하며, 우리나라와 사회보장협정을 체결한 국가에 파견근무를 나가는 근로자가 국내 국민연금에 계속 가입되어 있다는 사실을 증명해 현지 연금제도 이중가입을 면제받는 데 사용됩니다.',
      highlights: ['해외 파견근무자의 상대국 연금 이중가입을 면제받는 증명서', '국민연금법 제127조 근거', '사회보장협정 체결국에 제출하는 용도', '국내 국민연금 가입 사실을 증명'],
      box: { label: '핵심', content: '사회보장협정 체결국 파견 시 현지 연금 이중가입을 면제받는 증명서.' },
    },
    {
      q: '왜 이 증명서가 필요한가요?', anchor: 'q-purpose',
      intro: '사회보장협정은 두 나라가 서로 연금보험료를 이중으로 부담하지 않도록 맺는 협정입니다. 협정 체결국에 파견근무나 현지고용된 근로자는 국내 국민연금에 계속 가입되어 있음을 증명하면, 현지 연금제도에 별도로 가입하지 않아도 되는 혜택을 받을 수 있습니다.',
      highlights: ['이중 연금보험료 부담을 방지하는 국제협정 활용', '증명서로 현지 연금 가입 의무 면제 신청', '협정 체결국 여부에 따라 적용 가능 여부 결정', '해외 파견 전 미리 확인·신청 권장'],
      box: { label: '제도 취지', content: '사회보장협정으로 이중 연금보험료 부담을 방지하는 증명서.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '사회보장협정에 의한 국민연금 가입증명 발급 신청서와 파견근무 명령서 또는 현지고용계약서 사본 등이 필요합니다. 파견근무자는 소속 회사의 파견명령서, 현지에서 직접 고용된 경우에는 현지고용계약서를 준비해야 합니다.',
      highlights: ['가입증명 발급 신청서 필수', '파견근무자: 파견근무 명령서', '현지고용자: 현지고용계약서 사본', '고용 형태에 맞는 서류 준비 필요'],
      box: { label: '준비서류', content: '가입증명 발급 신청서+파견명령서(또는 현지고용계약서).' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총 7일이 소요됩니다. 해외 파견 일정에 맞춰 미리 신청해 증명서를 확보해두는 것이 좋습니다.',
      highlights: ['수수료: 없음', '처리기간: 총 7일', '해외 파견 일정을 고려해 미리 신청 권장', '증명서는 현지 기관 제출용으로 활용'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 7일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 방문, 팩스, 우편, EDI입니다. 접수기관은 국민연금공단 본부·지사이며, 처리기관은 국민연금공단 본부입니다. 국민연금공단 홈페이지(nps.or.kr)에서도 관련 정보를 확인할 수 있습니다.',
      highlights: ['방문·FAX·우편·EDI 네 가지 방법(인터넷 직접 신청 불가)', '접수: 국민연금공단 본부·지사', '처리: 국민연금공단 본부', '국민연금공단 홈페이지에서 정보 확인 가능'],
      box: { label: '신청경로', content: '국민연금공단 본부·지사에 방문·팩스·우편·EDI로 신청.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 보건복지부 국민연금정책과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 국민연금공단 본부·지사(관할 처리기관)에 직접 연락하는 것이 정확합니다. 국민연금공단 콜센터(국번없이 1355), 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 보건복지부 국민연금정책과', '개별 민원 문의는 관할 국민연금공단 본부·지사', '국민연금공단 콜센터 국번없이 1355', '정부24 콜센터 1588-2188'],
      box: { label: '문의처', content: '개별 민원은 관할 국민연금공단, 일반 안내는 국번없이 1355.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390' },
    { q: '처리는 얼마나 걸리나요?', a: '총 7일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390' },
    { q: '아무 나라에나 적용되나요?', a: '아니요, 우리나라와 사회보장협정을 체결한 국가에 한해 적용됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390' },
    { q: '어떤 서류가 필요한가요?', a: '가입증명 발급 신청서와 파견근무 명령서 또는 현지고용계약서 사본 등이 필요합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390' },
    { q: '인터넷으로 신청할 수 있나요?', a: '아니요, 방문·팩스·우편·EDI로만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390' },
  ],
  sources: [
    { label: '정부24(사회보장협정에 의한 국민연금 가입증명서 발급)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14600000390' },
    { label: '국민연금공단', url: 'https://www.nps.or.kr' },
    { label: '국민연금공단 콜센터 국번없이 1355', url: 'https://www.nps.or.kr' },
  ],
} as const;

export const socialSecurityAgreementPensionCertificateSpokes = [];
