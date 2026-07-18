/* 종자업등록신청 - 농림축산식품부·정부24 */
export const seedBusinessRegistrationPolicy = {
  id: '582', type: 'service' as const,
  title: '종자업등록신청 종자관리사 1인이상으로 시군구 수수료없이 7일 만에 받는 법',
  titleKeywords: { k1: '종자업등록신청서별지18호종자산업법제37조제1항시행령제14조제1항시행규칙제24조제1항', k2: '종자관리사1인이상생산시설관할시도지사등록종자생산판매', k3: '수수료없음구비서류있음농림축산식품부첨단기자재종자과', k4: '시군구특별자치도접수처리총7일' },
  slug: 'seed-business-registration', org: '농림축산식품부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '종자 생산·판매 개시 전 등록 필수(처리 총 7일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044', ctaLabel: '정부24 종자업등록신청 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '종자업등록신청은 종자를 생산·판매하고자 하는 자가 종자관리사를 1인 이상 갖추고 생산시설을 관할하는 시·도지사에게 등록을 신청하는 민원으로, 종자산업법 제37조제1항·시행령 제14조제1항·시행규칙 제24조제1항 별지 서식 18호에 근거합니다. 신청 방법은 인터넷, 방문, 우편입니다. 신청자격은 누구나 신청 가능합니다. 수수료는 없습니다. 처리기간은 총7일입니다. 제출서류는 종자업등록신청서입니다. 접수·처리기관은 시·군·구, 특별자치도입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 시군구청에서 확인이 필요합니다.',
  metaDescription: '종자업등록신청 종자관리사 1인이상으로 시군구 수수료없이 7일 만에 받는 법 – 수수료 없음, 처리 총 7일.',
  audience: '농작물 종자를 생산·판매하는 사업을 시작하려는 사업자',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '총 7일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044', text: '처리기간', verifiedAt: '2026-07-18' } },
    제출서류: { value: '종자업등록신청서', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044', text: '제출 서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '종자산업법 제37조제1항, 시행령 제14조제1항, 시행규칙 제24조제1항 별지 제18호', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '종자업등록신청이 뭔가요?', anchor: 'q-basic',
      intro: '종자업등록신청은 종자를 생산·판매하고자 하는 자가 종자관리사를 1인 이상 갖추고 생산시설을 관할하는 시·도지사에게 등록을 신청하는 민원입니다. 종자산업법 제37조제1항에 근거하며, 종자업 등록신청서(별지 서식 18호)를 작성해 신청합니다. 농작물 종자를 생산해 판매하려면 반드시 이 등록을 마쳐야 합니다.',
      highlights: ['농작물 종자 생산·판매 사업의 필수 등록', '종자산업법 제37조제1항 근거', '종자업 등록신청서(별지 제18호) 작성', '종자관리사 1인 이상 확보가 등록 전제 조건'],
      box: { label: '핵심', content: '종자를 생산·판매하는 사업을 시작하기 전 반드시 마쳐야 하는 등록.' },
    },
    {
      q: '종자관리사는 왜 필요한가요?', anchor: 'q-seed-manager',
      intro: '종자업을 등록하려면 종자관리사를 1인 이상 갖춰야 합니다. 종자관리사는 종자의 품질을 관리·검사하는 전문 인력으로, 부적절한 종자가 시중에 유통되는 것을 방지하는 역할을 합니다. 종자관리사 없이는 등록 자체가 불가능합니다.',
      highlights: ['종자 품질 관리·검사를 담당하는 전문 인력', '등록의 필수 전제 조건(1인 이상 확보)', '부적절한 종자 유통을 방지하는 안전장치', '자격 요건은 종자산업법령에서 별도로 규정'],
      box: { label: '종자관리사', content: '종자 품질 관리를 담당하는 필수 전문 인력(1인 이상).' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '종자업등록신청서만 제출하면 됩니다. 다른 복잡한 첨부서류 없이 비교적 간편하게 신청할 수 있는 절차입니다.',
      highlights: ['종자업등록신청서 하나만 제출', '다른 복잡한 첨부서류가 요구되지 않음', '종자관리사 확보 여부는 별도로 확인될 수 있음', '간편한 서류 절차가 특징'],
      box: { label: '준비서류', content: '종자업등록신청서만 제출하면 되는 간편한 절차.' },
    },
    {
      q: '어디가 관할 기관인가요?', anchor: 'q-jurisdiction',
      intro: '생산시설을 관할하는 시·도지사에게 등록을 신청하며, 실제 접수·처리기관은 시·군·구, 특별자치도입니다. 종자 생산시설의 소재지를 기준으로 관할 기관이 정해집니다.',
      highlights: ['생산시설 소재지 관할 시·도지사에게 등록', '실제 접수·처리기관: 시·군·구, 특별자치도', '생산시설 위치를 기준으로 관할 기관 결정', '여러 지역에 시설이 있으면 사전 확인 필요'],
      box: { label: '관할 기관', content: '종자 생산시설 소재지 관할 시군구·특별자치도.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총7일이 소요됩니다.',
      highlights: ['수수료: 없음', '처리기간: 총 7일', '비용 부담 없이 신속하게 등록 가능', '사업 개시 일정에 맞춰 여유 있게 신청 권장'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 7일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 우편입니다. 신청자격은 누구나 신청 가능합니다. 접수·처리기관은 시·군·구, 특별자치도입니다. 제도를 담당하는 기관은 농림축산식품부 첨단기자재종자과입니다.',
      highlights: ['인터넷·방문·우편 세 가지 방법', '자격 제한 없이 누구나 신청 가능', '접수·처리기관: 종자 생산시설 소재지 관할 시군구', '담당기관: 농림축산식품부 첨단기자재종자과'],
      box: { label: '신청경로', content: '정부24 온라인 또는 생산시설 소재지 관할 시군구·특별자치도.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044' },
    { q: '처리는 얼마나 걸리나요?', a: '총 7일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044' },
    { q: '종자관리사 없이 등록할 수 있나요?', a: '아니요, 종자관리사를 1인 이상 갖춰야 등록할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044' },
    { q: '어떤 서류가 필요한가요?', a: '종자업등록신청서만 제출하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044' },
    { q: '누구나 신청할 수 있나요?', a: '네, 신청자격 제한은 없으나 실제로는 종자 생산·판매 사업자가 신청합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044' },
  ],
  sources: [
    { label: '정부24(종자업등록신청)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13800000044' },
    { label: '농림축산식품부 첨단기자재종자과', url: 'https://www.mafra.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const seedBusinessRegistrationSpokes = [];
