/* 등록기준지변경신고 - 대법원·정부24 */
export const registeredDomicileChangePolicy = {
  id: '372', type: 'service' as const,
  title: '등록기준지 변경신고 기본증명서로 방문 즉시 이전하는 법',
  titleKeywords: { k1: '등록기준지변경신고', k2: '가족관계등록법10조', k3: '기본증명서서명공증인감증명서', k4: '시구읍면' },
  slug: 'registered-domicile-change', org: '대법원·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '상시 신청 가능(처리 즉시, 근무시간 내 3시간)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074', ctaLabel: '정부24 등록기준지변경신고 바로가기',
  datePublished: '2026-07-17T09:00:00+09:00', dateModified: '2026-07-17T09:00:00+09:00',
  summary: '등록기준지변경신고는 등록기준지(구 본적)를 이전하고자 새 등록기준지의 시·읍·면의 장에게 신고하는 절차로, 가족관계의 등록 등에 관한 법률 제10조에 근거합니다. 신청 방법은 방문, 우편이며, 신청자격 제한 없이 누구나 신청할 수 있습니다. 수수료는 없습니다. 처리기간은 즉시(근무시간 내 3시간)입니다. 제출서류는 신고인·제출인의 신분확인(우편 제출 시 서명공증 또는 인감증명서), 가족관계등록부의 기본증명서 1통(가족관계등록 관서 전산정보로 확인 가능한 경우 제출 생략)입니다. 접수·처리기관은 시·구·읍·면입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 가족관계등록 관서에서 확인이 필요합니다.',
  metaDescription: '등록기준지 변경신고 기본증명서로 방문 즉시 이전하는 법 – 누구나 신청 가능, 수수료 없음, 처리 즉시(3시간).',
  audience: '등록기준지(구 본적)를 다른 곳으로 옮기려는 사람',
  keyFacts: {
    신청방법: { value: '방문, 우편', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074', text: '신청방법', verifiedAt: '2026-07-17' } },
    신청자격: { value: '누구나 신청 가능', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074', text: '신청자격', verifiedAt: '2026-07-17' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074', text: '수수료', verifiedAt: '2026-07-17' } },
    처리기간: { value: '즉시(근무시간 내 3시간)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074', text: '처리기간', verifiedAt: '2026-07-17' } },
    제출서류: { value: '신분확인서류(우편 시 서명공증·인감증명서), 기본증명서 1통(전산확인 가능 시 생략)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074', text: '제출 서류', verifiedAt: '2026-07-17' } },
    근거법령: { value: '가족관계의 등록 등에 관한 법률 제10조', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074', text: '근거법령', verifiedAt: '2026-07-17' } },
  },
  qa: [
    {
      q: '등록기준지변경신고가 뭔가요?', anchor: 'q-basic',
      intro: '등록기준지변경신고는 등록기준지(과거의 본적 개념)를 다른 곳으로 이전하고자 새 등록기준지의 시·읍·면의 장에게 신고하는 민원사무입니다. 가족관계의 등록 등에 관한 법률 제10조에 근거하며, 등록기준지변경신고서(제28호)를 작성해 신고합니다.',
      highlights: ['등록기준지(구 본적)를 새로운 곳으로 이전하는 신고', '가족관계의 등록 등에 관한 법률 제10조 근거', '등록기준지변경신고서(제28호) 작성', '새 등록기준지 관할 시·읍·면에 신고'],
      box: { label: '핵심', content: '가족관계등록부의 등록기준지를 새 곳으로 옮기는 신고.' },
    },
    {
      q: '누가 신청할 수 있나요?', anchor: 'q-eligibility',
      intro: '신청자격에 별도 제한이 없어 누구나 신청할 수 있습니다. 다만 신청 방법이 방문 또는 우편만 가능하므로, 인터넷 신청은 지원되지 않습니다. 우편으로 제출하는 경우 서명공증이나 인감증명서로 신분을 확인해야 합니다.',
      highlights: ['신청자격 제한 없음(누구나 신청 가능)', '방문 또는 우편만 가능(인터넷 불가)', '우편 제출 시 서명공증 또는 인감증명서 필요', '본인 확인 절차가 방문·우편에 따라 다름'],
      box: { label: '신청자격', content: '제한 없음. 단 방문·우편만 가능(인터넷 불가).' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '신고인·제출인의 신분확인이 필요하며, 우편으로 제출하는 경우에는 서명공증 또는 인감증명서가 필요합니다. 가족관계등록부의 기본증명서 1통도 필요하나, 가족관계등록 관서에서 전산정보로 확인이 가능한 경우에는 제출을 생략할 수 있습니다.',
      highlights: ['신고인·제출인 신분확인 필수', '우편 제출 시 서명공증 또는 인감증명서 필요', '기본증명서 1통(전산확인 가능 시 생략)', '가족관계등록부는 담당공무원이 행정정보로 확인'],
      box: { label: '준비서류', content: '신분확인서류+기본증명서(전산확인 시 생략 가능).' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 즉시로, 근무시간 내 3시간이면 처리됩니다. 본 민원사무안내에 관한 사항은 해당 관할 가족관계등록 관서로 문의해야 정확한 안내를 받을 수 있습니다.',
      highlights: ['수수료: 없음', '처리기간: 즉시(근무시간 내 3시간)', '관할 가족관계등록 관서 문의로 정확한 안내 확인', '방문 즉시 처리되는 간단한 민원'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 근무시간 내 3시간 즉시 처리.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 방문, 우편입니다. 접수·처리기관은 시·구·읍·면입니다. 새로 옮기려는 등록기준지의 관할 시·구·읍·면에 등록기준지변경신고서를 제출합니다.',
      highlights: ['방문·우편 두 가지 방법(인터넷 불가)', '접수·처리기관: 시·구·읍·면', '새 등록기준지 관할 시·구·읍·면에 제출', '기존 거주지가 아닌 새 등록기준지 관할에 신고'],
      box: { label: '신청경로', content: '새 등록기준지 관할 시·구·읍·면에 방문 또는 우편 제출.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 대법원 가족관계등록과입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 시·구·읍·면(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 대법원 가족관계등록과', '개별 민원 문의는 관할 시·구·읍·면', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 시·구·읍·면, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074' },
    { q: '인터넷으로 신청할 수 있나요?', a: '아니요, 방문이나 우편으로만 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074' },
    { q: '처리는 얼마나 걸리나요?', a: '즉시 처리되며 근무시간 내 3시간이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074' },
    { q: '기본증명서를 항상 제출해야 하나요?', a: '아니요, 가족관계등록 관서에서 전산정보로 확인 가능한 경우에는 제출을 생략할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074' },
    { q: '아무나 신청할 수 있나요?', a: '네, 신청자격에 제한이 없어 누구나 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074' },
  ],
  sources: [
    { label: '정부24(등록기준지변경신고)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=12700000074' },
    { label: '대법원 가족관계등록과', url: 'https://www.scourt.go.kr' },
    { label: '정부24 콜센터 1588-2188', url: 'https://www.gov.kr' },
  ],
} as const;

export const registeredDomicileChangeSpokes = [];
