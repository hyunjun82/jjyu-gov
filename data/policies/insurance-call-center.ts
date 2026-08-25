/* 보험사 고객센터 — 회사별 스포크를 받는 허브 (2026-08-25 신설)
 * 추출본: scripts/output/source-db-insurance-call-center.txt
 *
 * 왜 허브가 필요한가
 *   사고 한 번에 두세 곳에 전화하게 된다. 자동차는 이쪽, 실손은 저쪽이다.
 *   한 회사 페이지만 있으면 번호 보고 나가지만, 회사가 모여 있으면
 *   "다른 회사 번호"가 내부 이동을 만든다.
 *
 * 각 회사 스포크는 scripts/new-call-center.ts 가 data/call-centers/*.json 으로 찍는다.
 * 손으로 쓰지 않는다 — 손으로 쓴 첫 템플릿에서 ARS 단축번호 3개가 틀렸다.
 *   "1번 사고접수"로 적었는데 공식은 "1번 자동차 고장 긴급출동"이다.
 *
 * 쓰지 않는 것: 회사별 대기시간·평균 통화시간(공식 발표 없음), 상담 만족도,
 *   지점별 영업시간(지점마다 달라 일괄 표기 불가).
 */

const NAVER_MAP = 'https://map.naver.com/p/search/%EC%86%90%ED%95%B4%EB%B3%B4%ED%97%98';
const DB_ARS = 'https://www.idbins.com/FWCUSV1295.do';

export const insuranceCallCenterPolicy = {
  id: '801', type: 'service' as const,
  title: '보험사 고객센터 전화번호, 사고접수 상담사 연결 안 되면 헛걸음',
  titleKeywords: {
    k1: '보험사 고객센터',
    k2: '전화번호',
    k3: '상담사 연결',
    k4: 'ARS 단축번호',
  },
  slug: 'insurance-call-center',
  org: '각 보험사',
  cat: '고객센터',
  catSlug: 'call-center',
  amount: '대표번호 · 업무별 전용번호 · ARS 단축번호',
  deadline: '상담사 상담은 평일 주간, 사고접수는 야간·공휴일에도 접수',
  hideAmountBox: true,
  views: 0,
  applyUrl: NAVER_MAP,
  ctaLabel: '가까운 지점 찾기',
  datePublished: '2026-08-25T09:00:00+09:00',
  dateModified: '2026-08-25T09:00:00+09:00',

  heroHook:
    '사고가 나면 번호부터 찾게 되는데요. 대표번호는 회사마다 하나로 통합돼 있어 찾기는 쉽습니다. 문제는 그다음입니다. 그냥 걸면 ARS 안내가 길게 이어지고, 상담사를 만나려면 정해진 번호를 눌러야 합니다. 그런데 그 번호가 낮과 밤이 다릅니다. DB손해보험은 낮에는 0번이 상담사 연결인데 밤에는 그 항목이 아예 없습니다. 낮 기준으로 적힌 안내를 밤에 그대로 누르면 엉뚱한 메뉴로 들어갑니다. 그럼 회사별로 주간·야간 번호부터 확인하셔야겠죠.',

  summary:
    '보험사 고객센터는 대표번호 하나로 모든 업무가 들어가지만, 실제로는 업무별 전용번호가 따로 있고 ARS 단축번호도 시간대에 따라 달라집니다. 평일 주간과 야간·공휴일의 단축번호가 서로 다른 회사가 많아, 주간 기준으로 적힌 안내를 밤에 그대로 누르면 엉뚱한 메뉴로 연결됩니다. 이 페이지는 회사별 공식 고객센터 안내 페이지를 직접 열어 확인한 번호만 모읍니다. 각 회사 페이지에서 대표번호, 업무별 번호, 주간·야간 ARS, 본사 위치를 확인할 수 있습니다.',
  metaDescription:
    '보험사 고객센터 전화번호와 상담사 연결 방법 – 회사별 대표번호, 업무별 전용번호, 평일 주간·야간 ARS 단축번호를 공식 안내 기준으로 정리했습니다.',
  audience: '보험금 청구·사고접수·계약 변경으로 보험사에 전화해야 하는 사람',

  keyFacts: {
    대표번호: {
      value: '회사마다 다르며 각 회사 페이지에서 확인',
      source: { url: DB_ARS, text: '고객상담센터(콜센터)안내', verifiedAt: '2026-08-25' },
    },
    상담사연결: {
      value: 'ARS 안내 중 상담사 연결 번호를 누른다 (DB손해보험은 0번)',
      source: { url: DB_ARS, text: '평일 주간 ARS 단축번호 안내', verifiedAt: '2026-08-25' },
    },
    주간야간차이: {
      value: '평일 주간과 야간·공휴일의 ARS 단축번호가 서로 다르다',
      source: { url: DB_ARS, text: '야간/휴일 ARS 단축번호 안내', verifiedAt: '2026-08-25' },
    },
    야간접수: {
      value: '상담사 상담은 안 되지만 사고접수·긴급출동은 접수된다',
      source: { url: DB_ARS, text: '야간/휴일 ARS 단축번호 안내', verifiedAt: '2026-08-25' },
    },
    통화료: {
      value: '일반 전화는 시내·시외 모두 시내통화 요금, 070·휴대전화는 이용자 요금제 기준',
      source: { url: DB_ARS, text: '알려드립니다', verifiedAt: '2026-08-25' },
    },
  },

  qa: [
    {
      q: '보험사 고객센터 전화번호는 어디서 확인하나요?', anchor: 'q-numbers',
      intro:
        '회사별 페이지에서 확인하시면 됩니다. 대표번호 하나만 적어둔 안내가 많은데, 실제 공식 페이지에는 업무별 전용번호가 훨씬 많이 올라와 있습니다. 보험금 청구, 대출, 방카슈랑스, 해외에서 거는 번호가 따로 있고 장애인·외국인 전용 회선도 있습니다. 용건이 정해져 있으면 전용번호가 빠릅니다. 대표번호는 ARS 를 거치지만 전용번호는 담당 부서로 바로 들어가기 때문입니다.',
      highlights: ['업무별 전용번호', '대표번호', '전용번호가 빠릅니다'],
      sourceNote: '* 출처: 각 보험사 공식 고객센터 안내 (2026-08-25 확인)',
    },
    {
      q: '상담사와 바로 연결하려면 어떻게 하나요?', anchor: 'q-apply',
      intro:
        'ARS 안내가 나오면 상담사 연결 번호를 누릅니다. 회사마다 번호가 다르고, 같은 회사라도 시간대에 따라 다릅니다. DB손해보험은 평일 주간에 0번이 상담사 연결인데 야간에는 상담사 연결 항목 자체가 없습니다. 그래서 밤에 전화하면 아무 번호나 눌러도 사람이 안 나옵니다. 회사별 페이지에 주간·야간 표를 나눠 실어 뒀습니다.',
      highlights: ['ARS 안내', '시간대에 따라 다릅니다', '상담사 연결'],
      sourceNote: '* 출처: DB손해보험 고객상담센터(콜센터)안내 (2026-08-25 확인)',
    },
    {
      q: '주말이나 밤에 사고가 나면 어디로 거나요?', anchor: 'q-night',
      intro:
        '대표번호는 같습니다. 다만 눌러야 하는 단축번호가 주간과 다릅니다. 야간·공휴일에는 자동차 고장 긴급출동과 사고접수가 앞쪽에 배치되고, 상담·해지 같은 업무는 빠집니다. 밤에 사고가 나면 상담사를 찾기보다 사고접수 번호를 바로 누르는 편이 빠릅니다. 접수만 해두면 처리는 다음 영업일에 이어집니다.',
      highlights: ['단축번호가 주간과 다릅니다', '긴급출동', '사고접수'],
      sourceNote: '* 출처: DB손해보험 야간/휴일 ARS 단축번호 안내 (2026-08-25 확인)',
    },
    {
      q: '전화 요금은 누가 부담하나요?', anchor: 'q-fee',
      intro:
        '발신자 부담입니다. 일반 전화로 걸면 시내든 시외든 시내통화 요금으로 붙고, 070 인터넷전화나 휴대전화는 쓰고 계신 요금제 기준으로 붙습니다. 무제한 요금제라면 사실상 부담이 없습니다. 대기가 길어질 것 같으면 요금제를 한 번 확인하고 거시는 편이 낫습니다.',
      highlights: ['발신자 부담', '시내통화 요금', '이용자 요금제'],
      sourceNote: '* 출처: DB손해보험 고객상담센터(콜센터)안내 (2026-08-25 확인)',
    },
    {
      q: '방문 상담을 하려면 어디로 가나요?', anchor: 'q-location',
      intro:
        '본사까지 가실 일은 거의 없습니다. 보험금 청구나 계약 변경은 전화·앱·홈페이지로 끝나는 일이 많고, 서류 원본을 내야 하는 경우에만 창구가 필요합니다. 방문하실 거라면 지도에서 회사명으로 검색하시면 가까운 지점부터 나옵니다.',
      highlights: ['본사', '가까운 지점'],
      sourceNote: '* 출처: 각 보험사 공식 안내 (2026-08-25 확인)',
    },
  ],

  faq: [
    {
      q: '보험사 고객센터는 몇 시까지 하나요?',
      a: '상담사 상담은 평일 주간이 기본입니다. DB손해보험은 월~금요일 09시~18시입니다. 야간과 공휴일에는 사고접수·긴급출동 중심의 ARS 가 운영됩니다.',
      source: 'DB손해보험 고객상담센터(콜센터)안내',
      sourceUrl: DB_ARS,
    },
    {
      q: '상담사 연결 번호는 회사마다 같나요?',
      a: '다릅니다. 같은 회사라도 평일 주간과 야간의 단축번호가 다릅니다. 회사별 페이지에서 주간·야간 표를 확인하세요.',
      source: 'DB손해보험 고객상담센터(콜센터)안내',
      sourceUrl: DB_ARS,
    },
    {
      q: '청각장애인도 사고접수를 할 수 있나요?',
      a: 'DB손해보험은 문자 전용 번호(010-9460-1234)로 긴급출동과 사고접수를 받습니다. 전화는 되지 않고 문자만 가능합니다.',
      source: 'DB손해보험 고객상담센터(콜센터)안내',
      sourceUrl: DB_ARS,
    },
    {
      q: '해외에서도 고객센터에 전화할 수 있나요?',
      a: 'DB손해보험은 해외 연결용으로 82-2-2262-1234를 안내하고 있습니다. 회사마다 별도 번호가 있습니다.',
      source: 'DB손해보험 고객상담센터(콜센터)안내',
      sourceUrl: DB_ARS,
    },
    {
      q: '이 번호들은 언제 확인한 것인가요?',
      a: '각 회사 공식 고객센터 안내 페이지를 직접 열어 2026년 8월 25일에 확인했습니다. 번호와 운영시간은 바뀔 수 있으니 최종 확인은 공식 채널을 이용하세요.',
      source: '각 보험사 공식 고객센터 안내',
      sourceUrl: DB_ARS,
    },
  ],

  sources: [
    { name: 'DB손해보험 — 고객상담센터(콜센터)안내', url: DB_ARS },
    { name: '네이버 지도 — 가까운 지점 찾기', url: NAVER_MAP },
  ],

  related: [
    { id: 'indemnity-insurance-generations', title: '실비보험 2세대 3세대 5세대, 뭐가 다르고 갈아타야 할까요?' },
    { id: 'caregiver-insurance', title: '간병인보험 가입조건과 청구 방법, 하루 일당은 얼마까지?' },
  ],
} as const;

export const insuranceCallCenterSpokes = [
  { slug: 'samsung-life', role: 'eligibility', title: '삼성생명 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'samsung-fire', role: 'eligibility', title: '삼성화재 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'post-insurance', role: 'eligibility', title: '우체국보험 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'nhis', role: 'eligibility', title: '국민건강보험공단 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'nh-property', role: 'eligibility', title: 'NH농협손해보험 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'nh-life', role: 'eligibility', title: 'NH농협생명 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'metlife', role: 'eligibility', title: '메트라이프생명 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'meritz-fire', role: 'eligibility', title: '메리츠화재 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'lotte-insurance', role: 'eligibility', title: '롯데손해보험 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'lina-life', role: 'eligibility', title: '라이나생명 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'kyobo-life', role: 'eligibility', title: '교보생명 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'kdb-life', role: 'eligibility', title: 'KDB생명 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'kb-life', role: 'eligibility', title: 'KB라이프생명 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'kb-insurance', role: 'eligibility', title: 'KB손해보험 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'hyundai-marine', role: 'eligibility', title: '현대해상 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'heungkuk-life', role: 'eligibility', title: '흥국생명 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'heungkuk-fire', role: 'eligibility', title: '흥국화재 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'hanwha-life', role: 'eligibility', title: '한화생명 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'hana-life', role: 'eligibility', title: '하나생명 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'hana-insurance', role: 'eligibility', title: '하나손해보험 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'db-insurance', role: 'eligibility', title: 'DB손해보험 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'axa-insurance', role: 'eligibility', title: 'AXA손해보험 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
  { slug: 'abl-life', role: 'eligibility', title: 'ABL생명 고객센터 전화번호 및 빠른 상담사 연결·위치 안내' },
];
