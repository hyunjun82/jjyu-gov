/* 산재보험 휴업급여, 상병보상연금 청구 - 고용노동부·정부24 */
export const industrialAccidentTemporaryDisabilityBenefitPolicy = {
  id: '389', type: 'service' as const,
  title: '산재 휴업급여 임금대장으로 7일 만에 청구 2년 넘으면 상병보상연금' ,
  titleKeywords: { k1: '산재휴업급여청구', k2: '상병보상연금중증요양상태진단서', k3: '요양중취업못함4개월임금', k4: '근로복지공단지역본부' },
  slug: 'industrial-accident-temporary-disability-benefit', org: '고용노동부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '상시 신청 가능(처리 총 7일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265', ctaLabel: '정부24 산재보험 휴업급여·상병보상연금 청구 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '산재보험 휴업급여, 상병보상연금 청구는 두 가지 급여를 함께 다루는 민원사무입니다. 휴업급여는 업무상 사유로 부상을 당하거나 질병에 걸린 근로자가 요양으로 인해 취업하지 못한 경우 청구하며, 상병보상연금은 요양급여를 받는 근로자가 요양개시 후 2년이 경과된 이후에도 그 상태가 계속되는 경우 청구합니다. 산업재해보상보험법 제52조에 근거합니다. 신청 방법은 인터넷, 방문, 팩스, 우편이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없습니다. 처리기간은 총 7일입니다. 제출서류는 휴업급여의 경우 재해 발생월 포함 이전 4개월간 임금대장 등, 연차수당·상여금이 있으면 이전 12개월간 내역, 노무제공자는 재해 발생일 전전달 말일 이전 3개월간 임금 내역입니다. 상병보상연금은 최초 청구 시 중증요양상태진단서(별지 제8호), 상태 변동 시 중증요양상태변동신고서(별지 제23호)가 필요합니다. 접수·처리기관은 근로복지공단지역본부(지사)입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 근로복지공단에서 확인이 필요합니다.',
  metaDescription: '산재 휴업급여 임금대장으로 7일 만에 청구, 2년 넘으면 상병보상연금 – 본인·대리인 신청, 수수료 없음, 처리 총 7일.',
  audience: '업무상 부상·질병으로 요양 중 취업하지 못하는 근로자, 요양 2년 경과 후에도 상태가 계속되는 근로자',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, FAX, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265', text: '신청방법', verifiedAt: '2026-07-17' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '총 7일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '휴업급여: 이전 4개월 임금대장 등, 상병보상연금: 중증요양상태진단서(또는 변동신고서)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265', text: '제출 서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '산업재해보상보험법 제52조, 시행령 제21조제1항, 근로복지공단 보상업무처리규정 제13조·제40조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '휴업급여가 뭔가요?', anchor: 'q-basic-injury',
      intro: '휴업급여는 업무상 사유로 부상을 당하거나 질병에 걸린 근로자가 요양으로 인해 취업하지 못한 경우 청구하는 급여입니다. 산업재해보상보험법 제52조에 근거하며, 치료 기간 동안 소득이 끊기는 근로자의 생계를 지원하는 취지입니다.',
      highlights: ['업무상 부상·질병으로 요양 중 취업 못할 때 청구', '산업재해보상보험법 제52조 근거', '치료 기간 소득 공백을 보전하는 급여', '요양급여와 별도로 청구해야 하는 급여'],
      box: { label: '핵심', content: '업무상 부상·질병 요양으로 취업하지 못한 기간의 소득을 보전하는 급여.' },
    },
    {
      q: '상병보상연금은 언제 청구하나요?', anchor: 'q-basic-pension',
      intro: '상병보상연금은 요양급여를 받는 근로자가 요양개시 후 2년이 경과된 이후에도 그 상태(부상·질병)가 계속되는 경우 청구하는 급여입니다. 휴업급여를 대신해 지급되는 성격으로, 장기 요양자에게 적용됩니다.',
      highlights: ['요양개시 후 2년 경과 후에도 상태 지속 시 청구', '휴업급여를 대신하는 장기 요양자용 급여', '중증요양상태진단서로 상태 확인', '2년 시점을 기준으로 휴업급여에서 전환'],
      box: { label: '핵심', content: '요양 2년 경과 후에도 상태가 계속될 때 청구하는 장기 급여.' },
    },
    {
      q: '휴업급여는 어떤 서류가 필요한가요?', anchor: 'q-docs-injury',
      intro: '재해가 발생한 달을 포함한 이전 4개월간 임금대장, 연장수당 등이 있는 경우 그 내역을 확인할 수 있는 자료가 필요합니다. 연차수당 및 상여금이 있는 경우 재해 발생월을 포함한 이전 12개월 동안의 내역도 필요합니다. 노무제공자는 재해 발생일의 전전달 말일 이전 3개월간(일용근로 제외) 지급받은 임금이 있으면 그 기간의 임금대장 등이 필요합니다.',
      highlights: ['이전 4개월간 임금대장 등 필수', '연차수당·상여금은 이전 12개월 내역 추가', '노무제공자는 전전달 이전 3개월 임금 내역', '평균임금 산정을 위한 급여 자료가 핵심'],
      box: { label: '휴업급여 준비서류', content: '이전 4개월 임금대장(+연차수당·상여금은 12개월).' },
    },
    {
      q: '상병보상연금은 어떤 서류가 필요한가요?', anchor: 'q-docs-pension',
      intro: '최초로 상병보상연금을 청구하는 경우에는 중증요양상태진단서(별지 제8호 서식)가 필요합니다. 이미 상병보상연금을 받고 있던 중 부상 또는 질병의 상태가 변동된 경우에는 중증요양상태변동신고서(별지 제23호 서식)를 제출해야 합니다.',
      highlights: ['최초 청구: 중증요양상태진단서(별지 제8호)', '상태 변동 시: 중증요양상태변동신고서(별지 제23호)', '진단서는 의료기관에서 발급받아야 함', '상태 변동은 신고 의무가 있으므로 놓치지 말 것'],
      box: { label: '상병보상연금 준비서류', content: '최초는 진단서(별지8호), 변동 시는 변동신고서(별지23호).' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 두 급여 모두 총 7일이 소요됩니다. 임금 관련 서류를 정확히 갖추면 처리가 원활합니다.',
      highlights: ['수수료: 없음', '처리기간: 총 7일(휴업급여·상병보상연금 동일)', '임금 서류의 정확성이 처리 속도에 영향', '서류 미비 시 처리 지연 가능'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 7일(두 급여 동일).' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 팩스, 우편입니다. 접수·처리기관은 근로복지공단지역본부(지사)입니다. 근로복지공단 홈페이지나 고용산재보험토탈서비스를 통해서도 관련 정보를 확인할 수 있습니다.',
      highlights: ['인터넷·방문·FAX·우편 네 가지 방법', '접수·처리기관: 근로복지공단지역본부(지사)', '근로복지공단 홈페이지에서 정보 확인 가능', '고용산재보험토탈서비스 이용 가능'],
      box: { label: '신청경로', content: '관할 근로복지공단지역본부(지사)에 신청.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265' },
    { q: '처리는 얼마나 걸리나요?', a: '총 7일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265' },
    { q: '휴업급여와 상병보상연금은 같은 건가요?', a: '아니요, 휴업급여는 요양 중 소득 보전이고, 상병보상연금은 요양 2년 경과 후에도 상태가 계속될 때 지급되는 별개의 급여입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265' },
    { q: '2년이 지나면 자동으로 전환되나요?', a: '아니요, 중증요양상태진단서를 갖춰 별도로 상병보상연금을 청구해야 합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265' },
    { q: '대리인이 청구할 수 있나요?', a: '네, 본인 또는 대리인이 청구할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265' },
  ],
  sources: [
    { label: '정부24(산재보험 휴업급여, 상병보상연금 청구)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000265' },
    { label: '근로복지공단', url: 'https://www.comwel.or.kr' },
    { label: '고용산재보험토탈서비스', url: 'https://total.comwel.or.kr' },
  ],
} as const;

export const industrialAccidentTemporaryDisabilityBenefitSpokes = [];
