/* 각종 범죄경력조회 신청 - 경찰청·정부24 */
export const criminalRecordCheckPolicy = {
  id: '416', type: 'service' as const,
  title: '범죄경력조회 취업 어린이집 경비업 등 목적별 14일 만에 신청하는 법',
  titleKeywords: { k1: '범죄경력조회신청', k2: '수사자료표범죄경력회보', k3: 'crims.police.go.kr온라인', k4: '경찰서시도경찰청' },
  slug: 'criminal-record-check', org: '경찰청·정부24', cat: '생활', catSlug: 'life',
  amount: '수수료 없음', deadline: '상시 신청 가능(처리 총 14일)', views: 0,
  applyUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062', ctaLabel: '정부24 각종 범죄경력조회 신청 바로가기',
  datePublished: '2026-07-18T09:00:00+09:00', dateModified: '2026-07-18T09:00:00+09:00',
  summary: '각종 범죄경력조회 신청은 본인의 범죄경력 및 수사경력의 내용을 확인하기 위해 본인이 신청하거나, 아동복지법·장애인복지법·경비업법 등 각종 개별법령에 따라 본인 또는 동의서를 받은 타인의 범죄경력조회를 신청하는 경우에 관할 경찰관서에 신청하는 절차로, 형의 실효 등에 관한 법률 제6조를 비롯한 다수의 개별법령에 근거합니다. 취업(어린이집·경비업·사회복지시설 등), 입양, 결혼중개업, 대체역 편입 등 다양한 목적으로 활용됩니다. 신청 방법은 인터넷, 방문이며, 온라인신청은 범죄경력회보서 발급시스템(crims.police.go.kr)에서 할 수 있습니다. 신청자격은 법령상의 자격이 있는 사람(제3자)입니다. 수수료는 없습니다. 처리기간은 총 14일입니다. 제출서류는 신청 유형(본인/대리인/시설)에 따라 다르며 신분증명서, 개별법에서 요구하는 첨부서류, 대리인은 자필 위임장 등이 필요합니다. 접수·처리기관은 경찰서·시도경찰청입니다. 본 정보는 정부24 공식 자료에 기반하며, 정확한 신청방법은 정부24나 관할 경찰관서에서 확인이 필요합니다.',
  metaDescription: '범죄경력조회 취업 어린이집 경비업 등 목적별 14일 만에 신청하는 법 – 수수료 없음, 처리 총 14일. 개별법령별 신청서식 확인.',
  audience: '취업·입양·경비업 등록·시설 종사 등 개별법령에 따라 본인 또는 타인의 범죄경력조회가 필요한 사람',
  keyFacts: {
    신청방법: { value: '인터넷(crims.police.go.kr), 방문', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062', text: '신청방법, 온라인신청', verifiedAt: '2026-07-18' } },
    신청자격: { value: '법령상의 자격이 있는 자(제3자)', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062', text: '신청자격', verifiedAt: '2026-07-18' } },
    수수료: { value: '수수료 없음', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062', text: '수수료', verifiedAt: '2026-07-18' } },
    처리기간: { value: '총 14일', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062', text: '처리기간', verifiedAt: '2026-07-18' } },
    신청유형: { value: '본인 신청, 대리인 신청(수사자료표 확인·외국 입국체류 목적 한정), 시설(기관) 신청', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062', text: '제출 서류', verifiedAt: '2026-07-18' } },
    근거법령: { value: '형의 실효 등에 관한 법률 제6조 등 아동복지법·장애인복지법·경비업법 등 다수 개별법령', source: { url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062', text: '근거법령', verifiedAt: '2026-07-18' } },
  },
  qa: [
    {
      q: '각종 범죄경력조회 신청이 뭔가요?', anchor: 'q-basic',
      intro: '각종 범죄경력조회 신청은 본인의 범죄경력 및 수사경력의 내용을 확인하기 위해 본인이 신청하는 경우 또는 각종 개별법령에 따라 본인 또는 동의서를 받은 타인의 범죄경력조회를 신청하는 경우에 관할 경찰관서에 신청하는 민원사무입니다. 형의 실효 등에 관한 법률 제6조를 비롯한 다수의 개별법령에 근거합니다.',
      highlights: ['본인의 범죄경력·수사경력을 확인하는 절차', '형의 실효 등에 관한 법률 제6조 등 다수 근거법령', '개별법령에 따라 타인 조회도 가능(동의서 필요)', '취업·입양·시설 종사 등 목적별로 신청서식 상이'],
      box: { label: '핵심', content: '취업·입양·시설 종사 등 개별법령 목적에 따른 범죄경력조회 신청.' },
    },
    {
      q: '어떤 목적으로 신청하나요?', anchor: 'q-purpose',
      intro: '아동복지법·장애인복지법·노인복지법에 따른 시설 취업, 경비업법에 따른 경비원 채용, 아동·청소년의 성보호에 관한 법률에 따른 학원·교습소 등록, 결혼중개업 등록, 국내입양에 관한 특별법에 따른 입양, 대체역 편입 등 매우 다양한 개별법령상 목적으로 신청합니다.',
      highlights: ['아동·장애인·노인복지시설 취업 시 필요', '경비업법에 따른 경비원 채용 시 필요', '입양·결혼중개업 등록 시에도 활용', '대체역(양심적 병역거부) 편입 심사에도 사용'],
      box: { label: '주요 목적', content: '복지시설 취업, 경비업, 입양, 결혼중개업 등 개별법령상 조회.' },
    },
    {
      q: '어떤 서류가 필요한가요?', anchor: 'q-docs',
      intro: '본인이 신청하는 경우 본인 신분증명서와 각 개별법에서 요구하는 첨부서류가 필요합니다. 대리인이 신청하는 경우(수사자료표 내용 확인·외국 입국체류 목적 한정)에는 조회 대상자와 대리인의 신분증명서, 대상자 본인이 직접 작성한 자필 위임장, 부득이한 사정을 증명하는 서류가 필요합니다. 시설(기관)에서 신청하는 경우에는 신청인 신분증명서, 조회 대상자의 동의서(사회복지사업법 신청은 동의서 불요), 개별법 첨부서류가 필요합니다.',
      highlights: ['본인 신청: 신분증명서+개별법 첨부서류', '대리인 신청: 대상자·대리인 신분증+자필 위임장', '시설 신청: 신청인 신분증+조회대상자 동의서', '해외체류자는 재외공관 영사 확인 시 출입국증명원 불요'],
      box: { label: '준비서류', content: '신청 유형(본인/대리인/시설)에 따라 필요서류가 다름.' },
    },
    {
      q: '수수료와 처리기간은 어떻게 되나요?', anchor: 'q-fee-period',
      intro: '수수료는 없습니다. 처리기간은 총 14일이 소요됩니다. 개별법령에 명시된 신청서식은 범죄경력회보서 발급시스템(crims.police.go.kr)의 신청서식 안내를 참고합니다.',
      highlights: ['수수료: 없음', '처리기간: 총 14일', '신청서식은 개별법마다 다름(crims.police.go.kr 참고)', '처리기간이 길어 여유를 두고 신청 필요'],
      box: { label: '수수료·처리기간', content: '수수료 없음, 처리 총 14일 소요.' },
    },
    {
      q: '어디서, 어떻게 신청하나요?', anchor: 'q-apply-method',
      intro: '신청 방법은 인터넷, 방문입니다. 온라인신청은 범죄경력회보서 발급시스템(crims.police.go.kr)에서 할 수 있습니다. 접수·처리기관은 경찰서, 시도경찰청입니다.',
      highlights: ['인터넷·방문 두 가지 방법', '온라인신청 전용 사이트: 범죄경력회보서 발급시스템(crims.police.go.kr)', '접수·처리기관: 경찰서, 시도경찰청', '목적에 맞는 신청서식 사전 확인 필요'],
      box: { label: '신청경로', content: '범죄경력회보서 발급시스템(crims.police.go.kr) 온라인 또는 관할 경찰서 방문.' },
    },
    {
      q: '어디에 문의하나요?', anchor: 'q-contact',
      intro: '이 민원의 제도를 담당하는 중앙행정기관은 경찰청입니다. 개별 민원(실제 접수·처리)에 대한 문의는 관할 경찰서·시도경찰청(관할 처리기관)에 직접 연락하는 것이 정확합니다. 정부24 콜센터(1588-2188), 정부민원안내콜센터(국번없이 110)를 통해서도 일반적인 안내를 받을 수 있습니다.',
      highlights: ['제도 담당: 경찰청', '개별 민원 문의는 관할 경찰서·시도경찰청', '정부24 콜센터 1588-2188', '정부민원안내콜센터 국번없이 110'],
      box: { label: '문의처', content: '개별 민원은 관할 경찰서·시도경찰청, 일반 안내는 정부24 콜센터.' },
    },
  ],
  faq: [
    { q: '수수료가 있나요?', a: '없습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062' },
    { q: '처리는 얼마나 걸리나요?', a: '총 14일이 소요됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062' },
    { q: '온라인으로 신청할 수 있나요?', a: '네, 범죄경력회보서 발급시스템(crims.police.go.kr)에서 온라인 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062' },
    { q: '타인의 범죄경력도 조회할 수 있나요?', a: '네, 각종 개별법령에 따라 동의서를 받으면 타인의 범죄경력조회도 신청할 수 있습니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062' },
    { q: '어떤 신청서식을 써야 하나요?', a: '목적에 따른 개별법에 명시된 신청서식을 사용하며, 범죄경력회보서 발급시스템(crims.police.go.kr) 신청서식 안내를 참고하면 됩니다.', source: '정부24', sourceUrl: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062' },
  ],
  sources: [
    { label: '정부24(각종 범죄경력조회 신청)', url: 'https://www.gov.kr/mw/AA020InfoCappView.do?CappBizCD=13200000062' },
    { label: '범죄경력회보서 발급시스템', url: 'https://crims.police.go.kr' },
    { label: '경찰청', url: 'https://www.police.go.kr' },
  ],
} as const;

export const criminalRecordCheckSpokes = [];
