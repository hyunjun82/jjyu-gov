/* 장기요양기관 입소·이용 신청(신규, 갱신, 변경, 해지) - 보건복지부·정부24 */
export const ltciMedicalAidFacilityApplicationPolicy = {
  id: '375', type: 'service' as const,
  title: '의료급여수급권자 장기요양기관 입소 인정서 사본으로 7일 신청하는 법',
  titleKeywords: { k1: '장기요양기관입소이용신청', k2: '의료급여수급권자시군구청장', k3: '장기요양인정서사본', k4: '노인장기요양보험법시행규칙10호' },
  slug: 'ltci-medical-aid-facility-application', org: '보건복지부·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '입소·이용 시 신청(처리 총 7일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083', ctaLabel: '정부24 장기요양기관 입소·이용 신청 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '장기요양기관 입소·이용 신청(신규, 갱신, 변경, 해지)은 노인장기요양보험법 제58조 및 시행령 제28조에 따라 국가와 지자체가 의료급여수급권자의 장기요양 이용 비용을 부담하므로, 의료급여법에 따른 수급권자가 장기요양기관에 입소·이용할 때 시·군·구청장에게 신청하는 절차입니다. 신청 방법은 현장제출 및 기타이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없습니다. 처리기간은 총 7일이 소요됩니다. 제출서류는 장기요양인정서 사본이며, 주민등록 등·초본과 의료급여수급자 증명서(또는 의료급여증)는 행정정보공동이용을 통해 담당공무원이 확인할 수 있습니다. 접수·처리기관은 특별자치시장, 특별자치도지사, 시장·군수·구청장입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 시·군·구에서 확인이 필요합니다.',
  metaDescription: '의료급여수급권자 장기요양기관 입소 인정서 사본으로 7일 신청하는 법 – 본인·대리인 신청, 수수료 없음, 처리 총 7일.',
  audience: '의료급여수급권자로서 장기요양기관에 입소·이용해야 하는 사람과 그 가족',
  keyFacts: {
    신청방법: { value: '현장제출 및 기타', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083', text: '신청방법', verifiedAt: '2026-07-17' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '총 7일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '장기요양인정서 사본', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083', text: '제출 서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '노인장기요양보험법 제58조, 시행령 제28조, 시행규칙 제16조제5항', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '장기요양기관 입소·이용 신청이 뭔가요?', anchor: 'q-basic',
      intro: '이 민원은 노인장기요양보험법 제58조 및 시행령 제28조에 따라 국가와 지자체가 의료급여수급권자의 장기요양 이용 비용을 부담하기 때문에, 의료급여법에 따른 수급권자가 장기요양기관에 입소하거나 이용할 때 시·군·구청장에게 신청하는 절차입니다. 신규신청, 갱신, 변경, 해지 모두 이 한 민원으로 처리됩니다.',
      highlights: ['의료급여수급권자의 장기요양기관 입소·이용 신청', '노인장기요양보험법 제58조·시행령 제28조 근거', '신규·갱신·변경·해지를 한 민원으로 처리', '장기요양기관 입소·이용 신청서(별지 제10호) 작성'],
      box: { label: '핵심', content: '의료급여수급권자가 장기요양기관 입소·이용 시 시·군·구청장에 신청하는 절차.' },
    },
    {
      q: '누가 신청할 수 있나요?', anchor: 'q-eligibility',
      intro: '신청자격은 본인 또는 대리인입니다. 대상은 의료급여법에 따른 수급권자로서 노인장기요양보험법상 장기요양기관을 입소·이용하려는 사람입니다. 신규신청뿐 아니라 갱신, 변경(입소기관 변경 등), 해지(퇴소 등)도 모두 신청 대상입니다.',
      highlights: ['본인 또는 대리인 신청 가능', '의료급여법에 따른 수급권자가 대상', '신규신청·갱신·변경·해지 모두 대상', '입소기관 변경이나 퇴소 시에도 신청 필요'],
      box: { label: '신청자격', content: '본인 또는 대리인. 의료급여수급권자가 대상.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '장기요양인정서 사본이 필요합니다. 주민등록 등·초본, 의료급여법 제3조제1항제1호에 따른 의료급여수급자는 의료급여수급자 증명서, 그 외의 규정에 따른 수급자는 의료급여증은 행정정보공동이용을 통해 담당공무원이 확인할 수 있어 별도 제출이 필요 없습니다.',
      highlights: ['장기요양인정서 사본 필수 제출', '주민등록 등·초본은 행정정보공동이용으로 확인', '의료급여수급자 증명서도 행정정보로 확인 가능', '별도로 준비할 서류가 많지 않음'],
      box: { label: '준비서류', content: '장기요양인정서 사본만 있으면 대부분 처리 가능.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총 7일이 소요됩니다. 신규신청, 갱신, 변경, 해지 모두 동일하게 이 처리기간이 적용됩니다.',
      highlights: ['수수료: 없음', '처리기간: 총 7일', '신규·갱신·변경·해지 모두 동일 처리기간', '장기요양인정서 사본 준비가 처리 속도에 영향'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 7일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 현장제출 및 기타입니다. 접수·처리기관은 특별자치시장, 특별자치도지사, 시장·군수·구청장입니다. 관할 시·군·구청을 방문해 장기요양기관 입소·이용 신청서를 제출합니다.',
      highlights: ['현장제출 및 기타 방식', '접수·처리기관: 특별자치시장·특별자치도지사·시장·군수·구청장', '관할 시·군·구청 방문 필요', '입소하려는 장기요양기관과도 사전 협의 권장'],
      box: { label: '신청경로', content: '관할 특별자치시·특별자치도·시·군·구청에 현장 제출.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 보건복지부 요양보험운영과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 특별자치시·특별자치도·시·군·구(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 보건복지부 요양보험운영과', '개별 민원 문의는 관할 시·군·구', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 시·군·구, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083' },
    { q: '처리는 얼마나 걸리나요?', a: '총 7일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083' },
    { q: '어떤 서류가 필요한가요?', a: '장기요양인정서 사본이 필요합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083' },
    { q: '기관을 옮길 때도 신청해야 하나요?', a: '네, 변경(입소기관 변경) 시에도 같은 민원으로 신청해야 합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083' },
    { q: '대리인이 신청할 수 있나요?', a: '네, 본인 또는 대리인이 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083' },
  ],
  sources: [
    { label: '정부24(장기요양기관 입소·이용 신청(신규, 갱신, 변경, 해지))', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13520000083' },
    { label: '보건복지부', url: 'https://www.mohw.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const ltciMedicalAidFacilityApplicationSpokes = [];
