/* 허가어업 휴업신고 - 해양수산부·정부24 */
export const fishingLicenseSuspensionReportPolicy = {
  id: '483', type: 'service' as const,
  title: '허가어업 휴업신고 구비서류 없이 세무서와 함께 즉시 신고하는 법',
  titleKeywords: { k1: '허가어업휴업신고어업휴업신고서', k2: '수산업법제50조제1항별지55호', k3: '세무서휴업폐업신고서겸용', k4: '시도시군구접수처리즉시3시간' },
  slug: 'fishing-license-suspension-report', org: '해양수산부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 조례에 따름', deadline: '어업 휴업 시 신고(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314', ctaLabel: '정부24 허가어업 휴업신고 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '허가어업 휴업신고는 어업 허가를 받은 자가 어업을 휴업하고자 할 때 신고하는 민원사무로, 수산업법 제50조제1항·제29조제1항·시행규칙 제62조 별지 서식 55호에 근거합니다. 이 민원의 휴업신고서는 부가가치세법 시행령 제10조제1항에 따라 세무서에 제출하는 휴업·폐업신고서와 함께 세무서에 제출할 수 있습니다. 신청 방법은 인터넷, 방문, 우편, 민원우편이며, 신청자격은 누구나 신청 가능합니다. 수수료는 조례에 따릅니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 별도의 구비서류는 필요 없습니다. 접수·처리기관은 시·도, 시·군·구입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 시도·시군구청에서 확인이 필요합니다.',
  metaDescription: '허가어업 휴업신고 구비서류 없이 세무서와 함께 즉시 신고하는 법 – 수수료 조례에 따름, 처리 즉시(3시간).',
  audience: '어업 허가를 받아 조업 중이며 어업을 일시 휴업하려는 어업인',
  keyFacts: {
    신청방법: { value: '인터넷, 방문, 우편, 민원우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314', text: '신청방법', verifiedAt: '2026-07-18' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 조례에 따름', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314', text: '처리기간', verifiedAt: '2026-07-18' } },
    구비서류: { value: '구비서류 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314', text: '구비서류', verifiedAt: '2026-07-18' } },
    세무서연계: { value: '부가가치세법 시행령 제10조제1항에 따라 세무서 휴업·폐업신고서와 함께 제출 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314', text: '제공 내용', verifiedAt: '2026-07-18' } },
    근거법령: { value: '수산업법 제50조제1항, 제29조제1항, 시행규칙 제62조 별지 제55호', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '허가어업 휴업신고가 뭔가요?', anchor: 'q-basic',
      intro: '허가어업 휴업신고는 어업 허가를 받은 자가 어업을 휴업하고자 할 때 신고하는 민원사무입니다. 수산업법 제50조제1항에 근거하며, 어업휴업 신고서(수산업법 시행규칙 별지 서식 55호)를 작성해 신고합니다. 조업을 일시 중단하는 어업인이 반드시 해야 하는 절차입니다.',
      highlights: ['어업 허가를 받은 자가 조업을 일시 중단할 때 하는 신고', '수산업법 제50조제1항 근거', '어업휴업 신고서(별지 제55호) 작성', '휴업 사실을 관할 기관에 알리는 절차'],
      box: { label: '핵심', content: '어업 허가를 받은 자가 조업을 일시 중단할 때 하는 신고.' },
    },
    {
      q: '세무서 신고와 함께 처리할 수 있나요?', anchor: 'q-tax-office-link',
      intro: '이 민원의 휴업신고서는 부가가치세법 시행령 제10조제1항에 따라 세무서에 제출하는 휴업·폐업신고서와 함께 세무서에 제출할 수 있습니다. 어업도 사업자등록이 된 경우가 많아, 시도·시군구 신고 시 세무서용 휴업신고서도 함께 제출하면 별도로 세무서를 방문할 필요가 없습니다.',
      highlights: ['부가가치세법 시행령 제10조제1항과 연계', '시도·시군구 신고 시 세무서 신고서도 함께 제출 가능', '별도 세무서 방문 없이 한 번에 처리 가능', '어업인의 행정 부담을 줄여주는 연계 제도'],
      box: { label: '세무서 연계', content: '시도·시군구 신고 시 세무서 휴업·폐업신고서도 함께 제출 가능.' },
    },
    {
      q: '어업허가유예와는 어떻게 다른가요?', anchor: 'q-vs-suspension-exemption',
      intro: '허가어업 휴업신고는 어업인이 자발적으로 조업을 일시 중단할 때 하는 신고이며, 처리기간은 즉시(근무시간 내 3시간)로 구비서류가 없습니다. 반면 어업허가유예는 허가받은 어선이 천재지변 등 부득이한 사유로 멸실되어 그 사실을 증명하는 서류를 제출해 새로운 허가를 유예받는 절차로, 처리기간 총2일에 증빙서류 제출이 필요합니다.',
      highlights: ['휴업신고: 자발적 조업 중단, 즉시 처리, 구비서류 없음', '어업허가유예: 어선 멸실 등 불가피한 사유, 총2일, 증빙서류 필요', '두 절차는 목적과 요건이 완전히 다름', '상황에 맞는 절차를 선택해 신청'],
      box: { label: '휴업신고 vs 허가유예', content: '자발적 휴업(즉시, 무서류)과 불가피한 사유 유예(2일, 증빙 필요)는 별개.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '별도의 구비서류는 필요 없습니다. 어업휴업 신고서만 작성해 제출하면 됩니다.',
      highlights: ['별도 구비서류 없음', '신고서(별지 제55호)만 작성', '간편한 절차로 신속하게 신고 가능', '세무서용 신고서도 함께 준비하면 편리'],
      box: { label: '준비서류', content: '구비서류 없음, 신고서만 작성.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 조례에 따릅니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다.',
      highlights: ['수수료: 지자체 조례에 따름', '처리기간: 즉시(근무시간 내 3시간)', '휴업 사실 발생 즉시 신속하게 신고 가능', '인터넷 신청으로 방문 없이도 처리 가능'],
      box: { label: '수수료·처리기간', content: '수수료는 조례 기준, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, 우편, 민원우편입니다. 접수·처리기관은 시·도, 시·군·구입니다. 어업 허가를 받은 관할 기관에 신고합니다.',
      highlights: ['인터넷·방문·우편·민원우편 네 가지 방법', '접수·처리기관: 시·도, 시·군·구', '어업 허가 관할 기관에 신고', '정부24 온라인 신청으로 방문 없이 처리 가능'],
      box: { label: '신청경로', content: '정부24 온라인 또는 어업 허가 관할 시도·시군구.' },
    },
  ],
  faq: [
    { q: '구비서류가 필요한가요?', a: '없습니다. 신고서만 작성해 제출하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314' },
    { q: '세무서에도 따로 신고해야 하나요?', a: '아니요, 이 신고서를 세무서 휴업·폐업신고서와 함께 세무서에 제출할 수 있어 한 번에 처리 가능합니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314' },
    { q: '어업허가유예와 같은 절차인가요?', a: '아니요, 휴업신고는 자발적 중단 시 즉시 처리되고, 어업허가유예는 어선 멸실 등 불가피한 사유로 증빙서류를 갖춰 신청하는 별도 절차입니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314' },
    { q: '수수료가 있나요?', a: '지자체 조례에 따라 정해집니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314' },
  ],
  sources: [
    { label: '정부24(허가어업 휴업신고)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=15200000314' },
    { label: '해양수산부 어업정책과 051-773-5518', url: 'https://www.mof.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const fishingLicenseSuspensionReportSpokes = [];
