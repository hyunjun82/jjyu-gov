/* 취학유예승인 - 교육부·정부24 */
export const schoolEnrollmentDeferralApprovalPolicy = {
  id: '435', type: 'service' as const,
  title: '초등학교 취학유예 질병 소명자료로 학교에 5일 만에 승인받는 법',
  titleKeywords: { k1: '취학유예승인신청', k2: '질병등부득이한사유', k3: '유예사유소명자료', k4: '초중등교육법제14조시행령제28조' },
  slug: 'school-enrollment-deferral-approval', org: '교육부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '취학 대상 학년 이전 사유 발생 시 신청(처리 총 5일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096', ctaLabel: '정부24 취학유예승인 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '취학유예승인은 질병 등 부득이한 사유로 인하여 취학이 불가능한 의무교육대상자의 보호자가 당해 학교의 장에게 취학유예승인을 받고자 신청하는 절차로, 초·중등교육법 제14조·시행령 제28조에 근거합니다. 건강상의 이유나 그 밖의 부득이한 사정으로 정해진 나이에 초등학교에 취학하기 어려운 경우 보호자가 이용하는 제도입니다. 신청 방법은 방문, 우편이며, 신청자격은 누구나 신청 가능합니다. 수수료는 없습니다. 처리기간은 총 5일입니다. 제출서류는 신청서 1부, 유예사유소명자료입니다. 접수·처리기관은 학교입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 해당 학교에서 확인이 필요합니다.',
  metaDescription: '초등학교 취학유예 질병 소명자료로 학교에 5일 만에 승인받는 법 – 수수료 없음, 처리 총 5일. 질병 등 부득이한 사유로 취학 연기.',
  audience: '질병 등 부득이한 사유로 정해진 취학 연령에 학교에 다니기 어려운 의무교육대상자의 보호자',
  keyFacts: {
    신청방법: { value: '방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '누구나 신청 가능(의무교육대상자의 보호자)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096', text: '신청자격, 제공 내용', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '총 5일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096', text: '처리기간', verifiedAt: '2026-07-18' } },
    제출서류: { value: '신청서 1부, 유예사유소명자료', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096', text: '제출 서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '초·중등교육법 제14조, 시행령 제28조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '취학유예승인이 뭔가요?', anchor: 'q-basic',
      intro: '취학유예승인은 질병 등 부득이한 사유로 인하여 취학이 불가능한 의무교육대상자의 보호자가 당해 학교의 장에게 취학유예승인을 받고자 신청하는 민원사무입니다. 초·중등교육법 제14조·시행령 제28조에 근거합니다.',
      highlights: ['질병 등의 사유로 취학을 미루기 위한 승인 절차', '초·중등교육법 제14조·시행령 제28조 근거', '의무교육대상자의 보호자가 신청', '학교의 장이 최종 승인을 결정'],
      box: { label: '핵심', content: '질병 등 부득이한 사유로 취학을 유예받기 위한 승인 절차.' },
    },
    {
      q: '어떤 경우에 신청할 수 있나요?', anchor: 'q-when-applicable',
      intro: '질병 등 부득이한 사유로 인하여 취학이 불가능한 경우 신청할 수 있습니다. 장기 치료가 필요한 질병, 발달 지연, 그 밖에 정해진 나이에 취학하기 어려운 특별한 사정이 있는 경우가 이에 해당합니다.',
      highlights: ['장기 치료가 필요한 질병 등 건강상 사유', '발달 지연 등 아동의 특별한 사정', '그 밖의 부득이한 사유도 포함', '단순 개인 사정만으로는 승인이 어려울 수 있음'],
      box: { label: '적용 대상', content: '질병 등 부득이한 사유로 정해진 나이에 취학이 어려운 경우.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '신청서 1부와 유예사유소명자료가 필요합니다. 유예사유소명자료는 신청 사유에 따라 진단서, 소견서 등 관련 증빙 자료를 준비해야 합니다.',
      highlights: ['신청서 1부 필수 제출', '유예사유소명자료 필수 제출(질병이면 진단서 등)', '사유에 맞는 증빙자료를 구체적으로 준비 필요', '학교마다 요구하는 소명자료 형식이 다를 수 있음'],
      box: { label: '준비서류', content: '신청서 1부+유예사유소명자료(진단서 등).' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총 5일이 소요됩니다. 취학 예정 시기 이전에 여유를 두고 신청해야 합니다.',
      highlights: ['수수료: 없음', '처리기간: 총 5일', '취학 예정 시기 이전 신청 필요', '학교의 승인 여부 확인 후 정식 취학 절차 진행'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 5일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 방문, 우편입니다. 접수·처리기관은 학교입니다. 자녀가 취학할 예정인 해당 학교의 장에게 신청서와 소명자료를 제출합니다.',
      highlights: ['방문·우편 두 가지 방법', '접수·처리기관: 학교(취학 예정 학교)', '취학 예정 학교의 장에게 직접 신청', '학교와 사전 상담 후 절차 진행 권장'],
      box: { label: '신청경로', content: '취학 예정 학교 방문 또는 우편 신청.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 교육부 학생지원총괄과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 해당 학교(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 교육부 학생지원총괄과', '개별 민원 문의는 해당 학교', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 해당 학교, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096' },
    { q: '처리는 얼마나 걸리나요?', a: '총 5일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096' },
    { q: '어떤 사유로 신청할 수 있나요?', a: '질병 등 부득이한 사유로 취학이 불가능한 경우 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096' },
    { q: '온라인으로 신청할 수 있나요?', a: '아니요, 방문 또는 우편으로만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096' },
    { q: '누가 신청하나요?', a: '의무교육대상자의 보호자가 신청합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096' },
  ],
  sources: [
    { label: '정부24(취학유예승인)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13404000096' },
    { label: '교육부 학생지원총괄과', url: 'https://www.moe.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const schoolEnrollmentDeferralApprovalSpokes = [];
