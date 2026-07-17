/* 국가유공자(유족 또는 가족)확인 - 국가보훈부·정부24 */
export const veteranFamilyConfirmationPolicy = {
  id: '322', type: 'service' as const,
  title: '국가유공자 유족확인서 무료 발급받고 보훈혜택 신청에 제출하는 법',
  titleKeywords: { k1: '국가유공자유족확인서', k2: '보훈혜택신청', k3: '무료발급', k4: '국가보훈부' },
  slug: 'veteran-family-confirmation', org: '국가보훈부·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '상시 신청 가능(즉시 처리, 근무시간 내 최대 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014', ctaLabel: '정부24 국가유공자(유족 또는 가족)확인 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '국가유공자(유족 또는 가족)확인은 국가유공자 본인 또는 그 유족·가족임을 공식적으로 확인받기 위해 신청하는 서류로, 국가유공자 등 예우 및 지원에 관한 법률 시행령 제101조에 근거합니다. 각종 요금 감면, 의료비 지원, 대출 우대, 정부지원사업 신청 등 국가유공자·유족 관련 혜택을 받으려 할 때 자격 증명용으로 사용됩니다. 정부24에서 인터넷·방문·팩스·우편으로 신청할 수 있으며 수수료는 없고 구비서류도 필요 없습니다. 처리기간은 근무시간 내 즉시(최대 3시간)입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24에서 확인이 필요합니다.',
  metaDescription: '국가유공자 유족확인서 무료 발급받고 보훈혜택 신청에 제출하는 법 – 수수료 없음, 구비서류 없음, 즉시 처리. 보훈(지)청에서 접수·처리.',
  audience: '각종 보훈 혜택·요금 감면 신청에 국가유공자 또는 유족 자격을 증명해야 하는 사람',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, FAX, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014', text: '신청방법', verifiedAt: '2026-07-17' } },
    신청자격: { value: '법령상의 자격이 있는 자(제3자)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '즉시(근무시간 내 최대 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014', text: '처리기간', verifiedAt: '2026-07-17' } },
    구비서류: { value: '없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014', text: '구비서류', verifiedAt: '2026-07-17' } },
    접수처리기관: { value: '보훈(지)청', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014', text: '신청 방법 및 절차', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '국가유공자(유족 또는 가족)확인이 뭔가요?', anchor: 'q-basic',
      intro: '국가유공자(유족 또는 가족)확인은 국가유공자 본인 또는 그 유족임을 확인하고자 할 때 신청하는 민원사무입니다. 국가유공자 등 예우 및 지원에 관한 법률 시행령 제101조에 근거하며, 국가유공자·유족 자격이 필요한 각종 혜택·서비스를 신청할 때 자격 증명용으로 사용됩니다.',
      highlights: ['국가유공자 본인 또는 유족임을 공식 확인', '국가유공자 예우법 시행령 제101조 근거', '각종 보훈 혜택 신청 시 자격 증명용', '보훈(지)청이 접수·처리'],
      box: { label: '핵심', content: '국가유공자 본인 또는 유족 자격을 공식적으로 확인하는 서류.' },
    },
    {
      q: '어디에 제출할 때 필요한가요?', anchor: 'q-usage',
      intro: '국가유공자(유족)확인서는 각종 요금 감면(전기·통신·교통 등), 의료비 지원, 대출 우대, 정부지원사업 신청, 각종 세금 감면 등 국가유공자·유족에게 주어지는 혜택을 신청할 때 자격 증명용으로 요구됩니다. 국가유공자로 등록되어 있는지, 그 유족·가족에 해당하는지를 확인하는 근거 서류로 활용됩니다.',
      highlights: ['전기·통신·교통 등 요금 감면 신청 시 필요', '의료비 지원·대출 우대 신청 시 활용', '정부지원사업·세금 감면 신청에도 사용', '국가유공자 관련 혜택 대부분의 전제 서류'],
      box: { label: '활용처', content: '요금 감면·의료비 지원·대출 우대 등 보훈 혜택 신청 전반에 필요.' },
    },
    {
      q: '누가 신청할 수 있나요?', anchor: 'q-eligibility',
      intro: '신청자격은 법령상 자격이 있는 사람(제3자 포함)입니다. 국가유공자 본인뿐 아니라 그 유족·가족도 신청할 수 있습니다. 개인정보가 담긴 서류인 만큼 신청자격이 제한되어 있으므로, 본인이 아니라면 유족·가족 관계를 증명할 수 있어야 합니다.',
      highlights: ['국가유공자 본인이 신청 가능', '유족·가족도 신청 가능', '법령상 자격 있는 제3자로 제한', '유족·가족 관계 증명이 필요할 수 있음'],
      box: { label: '신청자격', content: '국가유공자 본인 또는 그 유족·가족(법령상 자격 있는 사람).' },
    },
    {
      q: '신청할 때 무엇이 필요한가요?', anchor: 'q-docs',
      intro: '구비서류는 없습니다. 별도 신청서도 없이 신청할 수 있어 절차가 매우 간단합니다. 본인 확인을 위한 신분증만 준비하면 되며, 나머지 자격 확인은 담당 공무원이 보훈 시스템으로 조회해 처리합니다.',
      highlights: ['구비서류 없음', '별도 신청서 없이 신청 가능', '신분증만 준비하면 됨', '자격 확인은 담당 공무원이 보훈 시스템으로 처리'],
      box: { label: '준비서류', content: '없음. 신분증만 있으면 신청 가능.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '국가유공자(유족)확인은 수수료가 없습니다. 처리기간은 즉시가 원칙이며, 근무시간 내 최대 3시간 이내에 처리됩니다. 접수·처리기관은 보훈(지)청입니다. 인터넷으로 신청하면 즉시 확인서를 발급받아 바로 제출할 수 있어 가장 편리합니다.',
      highlights: ['수수료 없음', '처리기간: 즉시(근무시간 내 최대 3시간)', '접수·처리기관: 보훈(지)청', '인터넷 신청이 가장 빠르고 편리'],
      box: { label: '수수료·처리기간', content: '수수료 없이 즉시 처리. 인터넷 신청이 가장 편리.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 국가보훈부 등록관리과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 보훈(지)청(관할 처리기관)에 직접 연락하는 것이 정확합니다. 국가보훈부 콜센터(국번없이 1577-0606)나 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 국가보훈부 등록관리과', '개별 민원 문의는 관할 보훈(지)청', '국가보훈부 콜센터 국번없이 1577-0606', '정부24 콜센터 1588-2188'],
      box: { label: '문의처', content: '개별 민원은 관할 보훈(지)청, 일반 안내는 국번없이 1577-0606.' },
    },
  ],
  faq: [
    { q: '국가유공자 확인서는 무료인가요?', a: '네, 수수료가 없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014' },
    { q: '유족도 신청할 수 있나요?', a: '네, 국가유공자 본인뿐 아니라 그 유족·가족도 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014' },
    { q: '어떤 서류가 필요한가요?', a: '구비서류가 없어 신분증만 있으면 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리가 원칙이며 근무시간 내 최대 3시간 이내에 처리됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014' },
    { q: '어디에 쓰이나요?', a: '요금 감면, 의료비 지원, 대출 우대, 정부지원사업 신청 등 보훈 혜택 전반에 활용됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014' },
  ],
  sources: [
    { label: '정부24(국가유공자(유족 또는 가족)확인)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=11800000014' },
    { label: '국가보훈부', url: 'https://www.mpva.go.kr' },
    { label: '정부민원안내콜센터 국번없이 110', url: 'https://www.gov.kr' },
  ],
} as const;

export const veteranFamilyConfirmationSpokes = [];
