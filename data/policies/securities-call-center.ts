/* 증권사 고객센터 — 회사별 스포크를 받는 허브 (2026-08-26 신설)
 * 구성표: scripts/output/outline-securities-call-center.md
 * 추출본: scripts/output/source-kiwoom-call-center.txt 외 18개사
 *
 * 왜 허브가 필요한가
 *   증권 계좌는 한 곳만 쓰지 않는다. 국내는 이쪽, 해외주식은 저쪽으로 나눠 쓰는 경우가 흔해
 *   장중에 두 곳에 전화하게 된다. 회사가 모여 있으면 "다른 회사 번호"가 내부 이동을 만든다.
 *
 * 보험사 허브와 같은 뼈대다(components/CallCenterHub.tsx). 업종 말만 갈린다.
 * 각 회사 스포크는 scripts/new-call-center.ts 가 data/call-centers/*.json 으로 찍는다.
 *
 * 상담시간에서 네 번 헛짚었다 — 넣기 전에 문맥을 봐야 한다.
 *   · 토스증권 09:00~15:30 은 국내 정규장 시간이지 상담시간이 아니다.
 *   · SK증권 23:50~00:30 은 시스템 점검 시간이다(상담시간은 08:00~20:00 로 따로 있었다).
 *   · 다올투자증권 24시간 은 이체 한도 구간이다.
 *   · BNK투자증권 1600-5500 은 신용회복위원회 번호다 — 그 회사 번호가 아니다.
 *
 * 쓰지 않는 것
 *   · 교보·IBK·부국·우리투자·카카오페이·한양·흥국·코리아에셋·DS·유화·iM·케이프·KR·BNK·토스
 *     — 대표번호는 확인했지만 공식 페이지에 상담시간 표기를 못 찾았다.
 *       시간을 추정해 적으면 사람이 닫힌 시간에 전화한다. 확인되면 그때 넣는다.
 *   · 회사별 평균 대기시간(공식 발표 없음), 지점별 영업시간(지점마다 달라 일괄 표기 불가).
 */

const NAVER_MAP = 'https://map.naver.com/p/search/%EC%A6%9D%EA%B6%8C%EC%82%AC';
const KIWOOM_CS = 'https://www.kiwoom.com/h/customer/center/VCenterInfoView?dummyVal=0';
const MERITZ_ARS = 'https://home.imeritz.com/odermdia/OderMdiaDnldArs.do';
const KI_CS = 'https://www.truefriend.com/main/customer/support/_static/TF04fa010000.jsp';

export const securitiesCallCenterPolicy = {
  id: '802', type: 'service' as const,
  title: '증권사 고객센터 전화번호, 야간 주문접수 상담원 연결 안 되면 헛걸음',
  titleKeywords: {
    k1: '증권사 고객센터',
    k2: '전화번호',
    k3: '상담시간',
    k4: '상담원 연결',
  },
  slug: 'securities-call-center',
  org: '각 증권사',
  cat: '고객센터',
  catSlug: 'call-center',
  amount: '대표번호 · 업무별 전용번호 · 해외주식 야간데스크',
  deadline: '상담원 상담은 평일 주간, 야간데스크는 별도 번호로 운영',
  hideAmountBox: true,
  views: 0,
  applyUrl: NAVER_MAP,
  ctaLabel: '가까운 지점 찾기',
  datePublished: '2026-08-26T09:00:00+09:00',
  dateModified: '2026-08-26T09:00:00+09:00',

  heroHook:
    '장중에 주문이 안 나가면 급한데요. 대표번호는 회사마다 하나로 통합돼 있어 찾기는 쉽습니다. 문제는 그 번호로 걸면 안 되는 업무가 따로 있다는 겁니다. 키움증권은 주문접수가 1544-9000, 해외주식은 1544-9400 으로 번호가 다릅니다. 야간에는 나이트데스크 1544-8400 으로 또 갈립니다. 대표번호로 걸면 그만큼 돌아갑니다. 그럼 내 용건이 어느 번호인지부터 확인하셔야겠죠.',

  summary:
    '증권사 고객센터는 대표번호 하나로 모든 업무가 들어가지만, 실제로는 주문·해외주식·연금·야간이 각각 다른 번호로 운영됩니다. 상담시간도 회사마다 달라 키움증권은 07:30부터, 삼성증권은 08:00부터입니다. 이 페이지는 회사별 공식 고객센터 안내 페이지를 직접 열어 확인한 번호만 모읍니다. 각 회사 페이지에서 대표번호, 업무별 번호, 상담시간, 상담원 연결 방법을 확인할 수 있습니다.',
  metaDescription:
    '증권사 고객센터 전화번호와 상담시간 – 회사별 대표번호, 주문·해외주식·야간데스크 전용번호, 상담원 연결 방법을 공식 안내 기준으로 정리했습니다.',
  audience: '주문·계좌·해외주식 문의로 증권사에 전화해야 하는 사람',

  keyFacts: {
    대표번호: {
      value: '회사마다 다르며 각 회사 페이지에서 확인',
      source: { url: KIWOOM_CS, text: '키움금융센터 전화번호', verifiedAt: '2026-08-26' },
    },
    상담시간: {
      value: '평일 주간이 기본이며 회사마다 시작 시각이 다르다 (키움증권 07:30 ~ 20:00)',
      source: { url: KIWOOM_CS, text: '평일 업무 시간', verifiedAt: '2026-08-26' },
    },
    상담원연결: {
      value: 'ARS 안내 중 상담원 연결 번호를 누른다 (메리츠증권은 0번)',
      source: { url: MERITZ_ARS, text: '0번 상담직원 연결', verifiedAt: '2026-08-26' },
    },
    업무별번호: {
      value: '주문·해외주식·연금·야간이 각각 다른 번호로 운영된다',
      source: { url: KIWOOM_CS, text: '키움금융센터 전화번호', verifiedAt: '2026-08-26' },
    },
    사고신고: {
      value: '사고신고·지급정지는 상담시간과 관계없이 받는 곳이 있다',
      source: { url: KI_CS, text: '사고신고 / 지급정지상담 : 24시간 가능합니다', verifiedAt: '2026-08-26' },
    },
  },

  qa: [
    {
      q: '증권사 고객센터 전화번호는 어디서 확인하나요?', anchor: 'q-numbers',
      intro:
        '회사별 페이지에서 확인하시면 됩니다. 대표번호 하나만 적어둔 안내가 많은데, 실제 공식 페이지에는 업무별 전용번호가 훨씬 많이 올라와 있습니다. 주문접수, 해외주식, 금융상품, 퇴직연금이 각각 다른 번호이고 야간 전용 데스크도 따로 있습니다. 용건이 정해져 있으면 전용번호가 빠릅니다. 대표번호는 안내를 거치지만 전용번호는 담당 데스크로 바로 들어가기 때문입니다.',
      highlights: ['업무별 전용번호', '대표번호', '전용번호가 빠릅니다'],
      sourceNote: '* 출처: 각 증권사 공식 고객센터 안내 (2026-08-26 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 어떻게 하나요?', anchor: 'q-apply',
      intro:
        'ARS 안내가 나오면 상담원 연결 번호를 누릅니다. 회사마다 번호가 다릅니다. 메리츠증권은 0번이 상담직원 연결입니다. 다만 번호를 누르기 전에 계좌번호나 생년월일을 먼저 넣어야 하는 회사가 있습니다. 키움증권은 전화번호를 누른 뒤 안내번호를 고르고, 계좌번호 또는 생년월일과 휴대폰 번호를 넣은 다음에야 직원 연결로 넘어갑니다. 계좌번호를 미리 띄워 두면 그만큼 짧아집니다.',
      highlights: ['상담원 연결', '0번', '계좌번호'],
      sourceNote: '* 출처: 메리츠증권 ARS 이용안내 · 키움증권 금융센터 안내 (2026-08-26 확인)',
    },
    {
      q: '상담시간은 몇 시부터 몇 시까지인가요?', anchor: 'q-hours',
      intro:
        '회사마다 다릅니다. 키움증권은 07:30 ~ 20:00 으로 장 시작 전부터 받고, 삼성증권과 신한투자증권은 평일 08:00 ~ 18:00 입니다. 한국투자증권은 업무상담과 시스템상담을 나눠 업무상담은 08:00 ~ 17:00, 시스템상담은 07:30 ~ 20:00 입니다. 같은 회사 안에서도 창구가 갈리니 내 용건이 어느 쪽인지 보고 거시는 편이 낫습니다.',
      highlights: ['07:30 ~ 20:00', '08:00 ~ 18:00', '업무상담'],
      sourceNote: '* 출처: 각 증권사 공식 고객센터 안내 (2026-08-26 확인)',
    },
    {
      q: '밤이나 새벽에 해외주식 주문은 어디로 거나요?', anchor: 'q-night',
      intro:
        '야간 전용 번호가 따로 있습니다. 키움증권은 나이트데스크 1544-8400 이 17:00 부터 익일 08:00 까지 열려 있고, 메리츠증권은 해외주식·파생 야간데스크 02-6454-3939 를 24시간 운영합니다. 대표번호로 걸면 상담시간이 지나 연결이 안 됩니다. 미국장을 보신다면 이 번호를 미리 저장해 두시는 게 낫습니다.',
      highlights: ['나이트데스크', '24시간', '야간데스크'],
      sourceNote: '* 출처: 키움증권 금융센터 안내 · 메리츠증권 ARS 이용안내 (2026-08-26 확인)',
    },
    {
      q: '방문 상담을 하려면 어디로 가나요?', anchor: 'q-location',
      intro:
        '지점까지 가실 일은 많이 줄었습니다. 계좌개설과 주문, 이체는 앱과 홈페이지로 끝나고, 서류 원본을 내야 하거나 상속·명의 관련 업무일 때만 창구가 필요합니다. 방문하실 거라면 지도에서 회사명으로 검색하시면 가까운 지점부터 나옵니다.',
      highlights: ['계좌개설', '가까운 지점'],
      sourceNote: '* 출처: 각 증권사 공식 안내 (2026-08-26 확인)',
    },
  ],

  faq: [
    {
      q: '증권사 고객센터는 몇 시까지 하나요?',
      a: '회사마다 다릅니다. 키움증권은 07:30 ~ 20:00, 삼성증권과 신한투자증권은 평일 08:00 ~ 18:00 입니다. 야간 해외주식 데스크는 별도 번호로 더 늦게까지 운영됩니다.',
      source: '키움증권 금융센터 안내',
      sourceUrl: KIWOOM_CS,
    },
    {
      q: '상담원 연결 번호는 회사마다 같나요?',
      a: '다릅니다. 메리츠증권은 0번이 상담직원 연결입니다. 회사별 페이지에서 그 회사의 안내를 확인하세요.',
      source: '메리츠증권 ARS 이용안내',
      sourceUrl: MERITZ_ARS,
    },
    {
      q: '해외에서도 고객센터에 전화할 수 있나요?',
      a: '한국투자증권은 해외 연결용으로 82-2-2090-4000 을 안내하고 있습니다. 미래에셋증권은 02-6714-9322, 메리츠증권은 02-2062-6500 이 해외 전용입니다.',
      source: '한국투자증권 고객센터 안내',
      sourceUrl: KI_CS,
    },
    {
      q: '사고신고는 상담시간이 지나도 되나요?',
      a: '한국투자증권은 사고신고와 지급정지 상담을 24시간 받는다고 안내합니다. 회사마다 다르니 각 회사 페이지에서 확인하세요.',
      source: '한국투자증권 고객센터 안내',
      sourceUrl: KI_CS,
    },
    {
      q: '이 번호들은 언제 확인한 것인가요?',
      a: '각 회사 공식 고객센터 안내 페이지를 직접 열어 2026년 8월 26일에 확인했습니다. 번호와 상담시간은 바뀔 수 있으니 최종 확인은 공식 채널을 이용하세요.',
      source: '각 증권사 공식 고객센터 안내',
      sourceUrl: KIWOOM_CS,
    },
  ],

  sources: [
    { name: '키움증권 — 키움금융센터 금융센터 안내', url: KIWOOM_CS },
    { name: '메리츠증권 — ARS 이용안내', url: MERITZ_ARS },
    { name: '한국투자증권 — 고객센터 안내', url: KI_CS },
    { name: '네이버 지도 — 가까운 지점 찾기', url: NAVER_MAP },
  ],

  related: [
    { id: 'insurance-call-center', title: '보험사 고객센터 전화번호, 사고접수 상담사 연결 안 되면 헛걸음' },
  ],
} as const;

export const securitiesCallCenterSpokes = [
  { slug: 'nh-invest', role: 'eligibility', title: 'NH투자증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'kb-sec', role: 'eligibility', title: 'KB증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'sangsangin', role: 'eligibility', title: '상상인증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'sk-sec', role: 'eligibility', title: 'SK증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'eugene-sec', role: 'eligibility', title: '유진투자증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'ls-sec', role: 'eligibility', title: 'LS증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'shinyoung', role: 'eligibility', title: '신영증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'hyundai-sec', role: 'eligibility', title: '현대차증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'db-sec', role: 'eligibility', title: 'DB증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'hanwha-sec', role: 'eligibility', title: '한화투자증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'yuanta', role: 'eligibility', title: '유안타증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'daishin', role: 'eligibility', title: '대신증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'meritz-sec', role: 'eligibility', title: '메리츠증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'hana-sec', role: 'eligibility', title: '하나증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'shinhan-sec', role: 'eligibility', title: '신한투자증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'korea-invest', role: 'eligibility', title: '한국투자증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'miraeasset', role: 'eligibility', title: '미래에셋증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'samsung-sec', role: 'eligibility', title: '삼성증권 고객센터 전화번호와 상담시간, 상담원 연결' },
  { slug: 'kiwoom', role: 'eligibility', title: '키움증권 고객센터 전화번호와 상담시간, 상담원 연결' },
];
