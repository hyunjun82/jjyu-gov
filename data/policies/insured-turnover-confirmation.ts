/* 피보험자 이직확인 - 고용노동부·정부24 */
export const insuredTurnoverConfirmationPolicy = {
  id: '462', type: 'service' as const,
  title: '피보험자 이직확인서 사업주가 서류 없이 10일 만에 발급받는 법',
  titleKeywords: { k1: '피보험자이직확인서발급', k2: '이직사유피보험단위기간평균임금', k3: 'work24.go.kr별지75호의4', k4: '지방고용노동청접수처리' },
  slug: 'insured-turnover-confirmation', org: '고용노동부·정부24', cat: '발급·신청', catSlug: 'issue',
  amount: '수수료 없음', deadline: '근로자 이직 후 요청 시 신청(처리 총 10일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597', ctaLabel: '정부24 피보험자 이직확인 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '피보험자 이직확인은 사업주가 근로자가 이직 후 요청하거나 직업안정기관의 장이 요청하는 경우에 해당 근로자의 이직사유, 피보험단위기간, 평균임금, 1일 소정근로시간 등을 기재하여 근로자에게 직접 교부하거나 직업안정기관의 장에게 제출하는 절차로, 고용보험법 제42조제3항·제43조제4항·시행규칙 제82조의2제1항·제2항·제4항·제5항에 근거합니다. 실업급여(구직급여) 신청 시 필수적으로 요구되는 서류입니다. 신청 방법은 인터넷, 방문, FAX, 우편이며, 신청자격은 본인 또는 대리인입니다. 수수료는 없습니다. 처리기간은 총 10일입니다. 별도의 구비서류는 필요 없습니다. 접수·처리기관은 지방고용노동청입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 고용24에서 확인이 필요합니다.',
  metaDescription: '피보험자 이직확인서 사업주가 서류 없이 10일 만에 발급받는 법 – 수수료 없음, 처리 총 10일. 실업급여 신청의 필수 서류.',
  audience: '이직 후 실업급여(구직급여) 신청을 위해 이직확인서가 필요한 근로자 및 발급 의무가 있는 사업주',
  keyFacts: {
    신청방법: { value: '인터넷(work24.go.kr), 방문, FAX, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597', text: '신청방법, 온라인신청', verifiedAt: '2026-07-18' } },
    신청자격: { value: '본인 또는 대리인', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '총 10일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597', text: '처리기간', verifiedAt: '2026-07-18' } },
    구비서류: { value: '구비서류 없음(별도 제출서류 불요)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597', text: '구비서류, 제출 서류', verifiedAt: '2026-07-18' } },
    기재내용: { value: '이직사유, 피보험단위기간, 평균임금, 1일 소정근로시간 등', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597', text: '제공 내용', verifiedAt: '2026-07-18' } },
    근거법령: { value: '고용보험법 제42조제3항·제43조제4항, 시행규칙 제82조의2제1항·제2항·제4항·제5항', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '피보험자 이직확인이 뭔가요?', anchor: 'q-basic',
      intro: '피보험자 이직확인은 사업주가 근로자가 이직 후 요청하거나 직업안정기관의 장이 요청하는 경우에 해당 근로자의 이직사유, 피보험단위기간, 평균임금, 1일 소정근로시간 등을 기재하여 근로자에게 직접 교부하거나 직업안정기관의 장에게 제출하는 민원사무입니다. 고용보험법 제42조제3항에 근거하며, 피보험자 이직확인서(별지 서식 75호의 4)를 작성해 처리합니다.',
      highlights: ['근로자 이직 시 사업주가 발급하는 이직 관련 확인서', '고용보험법 제42조제3항·제43조제4항 근거', '이직확인서(별지 제75호의 4) 작성', '실업급여 신청의 전제가 되는 핵심 서류'],
      box: { label: '핵심', content: '이직사유·피보험단위기간·평균임금 등을 기재한 사업주 발급 확인서.' },
    },
    {
      q: '왜 이 서류가 중요한가요?', anchor: 'q-why-important',
      intro: '이직확인서는 실업급여(구직급여) 신청 시 수급자격 인정 여부와 지급액을 결정하는 핵심 근거 자료입니다. 이직사유(자발적 퇴사인지 비자발적 퇴사인지), 피보험단위기간, 평균임금 등이 정확히 기재되어야 정당한 실업급여를 받을 수 있습니다.',
      highlights: ['실업급여 수급자격 인정의 핵심 근거 자료', '이직사유가 자발적인지 비자발적인지가 중요한 판단 기준', '평균임금·피보험단위기간이 지급액 산정에 직결', '내용이 부정확하면 실업급여 심사에 지장 가능'],
      box: { label: '중요성', content: '실업급여 수급자격·지급액 결정의 핵심 근거 서류.' },
    },
    {
      q: '누가 신청·발급하나요?', anchor: 'q-who-applies',
      intro: '사업주가 근로자의 요청에 따라, 또는 직업안정기관의 장이 요청하는 경우에 발급합니다. 근로자는 퇴사 후 사업주에게 이직확인서 발급을 요청할 수 있고, 사업주는 이를 근로자에게 직접 교부하거나 직업안정기관에 제출해야 합니다.',
      highlights: ['사업주가 발급 의무를 지는 서류', '근로자의 요청 또는 직업안정기관의 요청으로 발급', '근로자에게 직접 교부하거나 직업안정기관에 제출', '실업급여 신청 전 반드시 확인해야 하는 서류'],
      box: { label: '발급 주체', content: '사업주가 근로자 또는 직업안정기관의 요청에 따라 발급.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총 10일이 소요됩니다. 별도의 구비서류는 필요 없습니다.',
      highlights: ['수수료: 없음', '처리기간: 총 10일', '구비서류 없음', '실업급여 신청 일정에 맞춰 미리 요청 필요'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 구비서류 없음, 처리 총 10일.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문, FAX, 우편입니다. 온라인신청은 고용24(work24.go.kr)에서 할 수 있습니다. 접수·처리기관은 지방고용노동청입니다.',
      highlights: ['인터넷·방문·FAX·우편 네 가지 방법', '온라인신청 전용 사이트: 고용24(work24.go.kr)', '접수·처리기관: 지방고용노동청', '사업주가 발급 지연 시 직업안정기관에 요청 가능'],
      box: { label: '신청경로', content: '고용24(work24.go.kr) 온라인 또는 지방고용노동청.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 고용노동부 고용지원실업급여과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 지방고용노동청(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 고용노동부 고용지원실업급여과', '개별 민원 문의는 관할 지방고용노동청', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 지방고용노동청, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597' },
    { q: '처리는 얼마나 걸리나요?', a: '총 10일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597' },
    { q: '사업주가 발급을 안 해주면 어떻게 하나요?', a: '직업안정기관의 장이 사업주에게 요청해 발급받을 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597' },
    { q: '별도 서류를 준비해야 하나요?', a: '아니요, 구비서류가 없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597' },
    { q: '어디서 온라인 신청하나요?', a: '고용24(work24.go.kr)에서 온라인 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597' },
  ],
  sources: [
    { label: '정부24(피보험자 이직확인)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=14900000597' },
    { label: '고용24', url: 'https://www.work24.go.kr' },
    { label: '고용노동부 고용지원실업급여과', url: 'https://www.moel.go.kr' },
  ],
} as const;

export const insuredTurnoverConfirmationSpokes = [];
