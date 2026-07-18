/* 가족관계등록부 정정신청 - 대법원·정부24 */
export const familyRegisterCorrectionPolicy = {
  id: '382', type: 'service' as const,
  title: '가족관계등록부 정정신청 판결등본으로 즉시 시읍면에 신청하는 법',
  titleKeywords: { k1: '가족관계등록부정정신청', k2: '등록부정정신청서30호', k3: '판결등본확정증명서', k4: '가족관계등록법104조' },
  slug: 'family-register-correction', org: '대법원·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '상시 신청 가능(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076', ctaLabel: '정부24 가족관계등록부 정정신청 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '가족관계등록부 정정신청은 가족관계등록부의 기재가 법률상 무효이거나 그 기재에 착오·오류가 있을 때 이를 진정한 신분관계와 일치시키기 위해 시·읍·면의 장에게 신청하는 절차로, 가족관계의 등록 등에 관한 법률 제104조에 근거합니다. 신청 방법은 방문, 우편이며, 신청자격 제한 없이 누구나 신청할 수 있습니다. 수수료는 없습니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 제출서류는 판결에 의한 경우 판결의 등본 및 확정증명서, 신분확인서류(우편제출 시 신고인의 신분증명서 사본)입니다. 접수·처리기관은 시·구·읍·면입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 가족관계등록 관서에서 확인이 필요합니다.',
  metaDescription: '가족관계등록부 정정신청 판결등본으로 즉시 시읍면에 신청하는 법 – 누구나 신청 가능, 수수료 없음, 처리 즉시(3시간).',
  audience: '가족관계등록부의 기재에 착오·오류가 있어 정정이 필요한 사람',
  keyFacts: {
    신청방법: { value: '방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076', text: '신청방법', verifiedAt: '2026-07-17' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '판결의 등본 및 확정증명서(판결에 의한 경우), 신분확인서류', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076', text: '제출 서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '가족관계의 등록 등에 관한 법률 제104조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '가족관계등록부 정정신청이 뭔가요?', anchor: 'q-basic',
      intro: '가족관계등록부 정정신청은 가족관계등록부의 기재가 법률상 무효이거나 그 기재에 착오·오류가 있을 때, 이를 진정한 신분관계와 일치시키기 위해 시·읍·면의 장에게 신청하는 민원사무입니다. 가족관계의 등록 등에 관한 법률 제104조에 근거하며, 등록부정정신청서(제30호)를 작성해 신청합니다.',
      highlights: ['등록부 기재의 착오·오류를 바로잡는 절차', '가족관계의 등록 등에 관한 법률 제104조 근거', '등록부정정신청서(제30호) 작성', '법률상 무효인 기재도 정정 대상'],
      box: { label: '핵심', content: '가족관계등록부의 기재 오류를 진정한 신분관계와 일치시키는 절차.' },
    },
    {
      q: '어떤 경우에 신청할 수 있나요?', anchor: 'q-cases',
      intro: '가족관계등록부의 기재가 법률상 무효인 경우, 또는 기재에 착오나 오류가 있는 경우에 신청할 수 있습니다. 대표적으로 법원의 판결로 정정 사유가 확정된 경우가 이에 해당합니다.',
      highlights: ['등록부 기재가 법률상 무효인 경우', '기재에 착오·오류가 있는 경우', '법원 판결로 정정 사유가 확정된 경우 대표적', '단순 오탈자부터 신분관계 오류까지 다양'],
      box: { label: '주요 사유', content: '등록부 기재의 법률상 무효 또는 착오·오류.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '판결에 의한 경우에는 판결의 등본 및 확정증명서가 필요합니다. 신분확인서류도 필요하며, 우편으로 제출하는 경우에는 신고인의 신분증명서 사본을 첨부해야 합니다.',
      highlights: ['판결에 의한 경우 판결 등본+확정증명서 필수', '신분확인서류 필요', '우편제출 시 신고인 신분증명서 사본 첨부', '정정 사유에 따라 추가 증빙이 필요할 수 있음'],
      box: { label: '준비서류', content: '판결에 의한 경우 판결등본+확정증명서, 그 외 신분확인서류.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다. 다만 본 민원사무안내에 관한 사항은 해당 관할 각 가족관계등록 관서로 문의해야 정확한 안내를 받을 수 있습니다.',
      highlights: ['수수료: 없음', '처리기간: 즉시(근무시간 내 3시간)', '관할 가족관계등록 관서 문의로 정확한 안내 확인', '방문 즉시 처리되는 간단한 민원'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 방문, 우편입니다. 접수·처리기관은 시·구·읍·면입니다. 관할 시·구·읍·면에 등록부정정신청서와 관련 서류를 제출합니다.',
      highlights: ['방문·우편 두 가지 방법(인터넷 불가)', '접수·처리기관: 시·구·읍·면', '관할 시·구·읍·면에 신청서 제출', '판결 관련 서류는 원본 또는 등본 지참 권장'],
      box: { label: '신청경로', content: '관할 시·구·읍·면에 방문 또는 우편으로 신청.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 대법원 가족관계등록과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 시·구·읍·면(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 대법원 가족관계등록과', '개별 민원 문의는 관할 시·구·읍·면', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 시·구·읍·면, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076' },
    { q: '인터넷으로 신청할 수 있나요?', a: '아니요, 방문이나 우편으로만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076' },
    { q: '판결이 있어야만 신청할 수 있나요?', a: '판결에 의한 정정인 경우 판결 등본과 확정증명서가 필요하지만, 사유에 따라 다른 절차로도 진행될 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076' },
    { q: '아무나 신청할 수 있나요?', a: '네, 신청자격에 제한이 없어 누구나 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076' },
  ],
  sources: [
    { label: '정부24(가족관계등록부 정정신청)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000076' },
    { label: '대법원 가족관계등록과', url: 'https://www.scourt.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const familyRegisterCorrectionSpokes = [];
