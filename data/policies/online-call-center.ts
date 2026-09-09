/* 온라인 서비스 고객센터 — 회사별 스포크를 받는 허브 (2026-08-27 신설)
 * 구성표: scripts/output/outline-online-call-center.md (도장 stage2-online-call-center.json)
 * 추출본: scripts/output/source-coupang-call-center.txt 외 (와이즈유저 포털 표)
 *
 * 왜 이 업종을 따로 열었나
 *   쇼핑·앱마켓·OTT 를 통신사 업종에 묶었더니 "쿠팡 고객센터 … 개통 문의 안내" 가 나왔다.
 *   정부 포털이 한 페이지에 모아 둔 것이지 같은 업종이라는 뜻이 아니다.
 *
 * 왜 허브가 필요한가
 *   앱으로 쓰는 서비스는 앱 안에서 채팅·문의 양식만 보인다. 전화번호가 없는 줄 알기 쉽다.
 *   실제로는 있고, 방송미디어통신위원회 포털이 사업자별로 모아 두고 있다.
 *
 * 보험사·증권사·카드사·통신사 허브와 같은 뼈대다(components/CallCenterHub.tsx).
 *
 * 조심할 것
 *   · 넷플릭스는 00-308-321-0058 로 국제전화 형식이다. 국내 번호처럼 걸면 안 걸린다.
 *   · 무료와 유료가 갈린다. 구글플레이 080-234-0051, 앱스토어 080-333-4000 은 무료다.
 *   · 포털에 상담시간 표기가 없다 — 추정해 적지 않는다.
 *
 * 쓰지 않는 것
 *   · 서비스별 상담시간(포털에 표기 없음)
 *   · 평균 대기시간(공식 발표 없음)
 */

const PORTAL_SHOP = 'https://wiseuser.go.kr/square.do?boardno=6492&boardtypecode=5900';
const PORTAL_APP = 'https://wiseuser.go.kr/square.do?boardno=6491&boardtypecode=5900';
const PORTAL_MEDIA = 'https://wiseuser.go.kr/square.do?boardno=6490&boardtypecode=5900';

export const onlineCallCenterPolicy = {
  id: '805', type: 'service' as const,
  title: '온라인 고객센터 전화번호 조회, 앱에 번호가 안 보이면 어디로 걸까?',
  titleKeywords: {
    k1: '온라인 고객센터',
    k2: '전화번호',
    k3: '상담원 연결',
    k4: '쇼핑몰',
  },
  slug: 'online-call-center',
  org: '각 온라인 서비스',
  cat: '고객센터',
  catSlug: 'call-center',
  amount: '쇼핑 · 배달 · OTT · 앱마켓 대표번호',
  deadline: '무료 번호(080)와 유료 번호가 갈린다',
  hideAmountBox: true,
  views: 0,
  applyUrl: PORTAL_SHOP,
  ctaLabel: '이용자정보포털에서 보기',
  datePublished: '2026-08-27T09:00:00+09:00',
  dateModified: '2026-08-27T09:00:00+09:00',

  heroHook:
    '쿠팡·배달의민족·넷플릭스처럼 앱으로 쓰는 서비스도 전화 고객센터가 있습니다. 쿠팡은 1577-7011, 배달의민족은 1600-9880, 넷플릭스는 00-308-321-0058입니다. 앱 안에서는 채팅이나 문의 양식이 먼저 보여서 번호가 없는 줄 알기 쉽습니다. 아래 목록은 방송미디어통신위원회가 운영하는 방송통신이용자정보포털에 올라온 번호만 모은 것입니다. 서비스별 대표번호와 무료·유료 구분을 함께 확인할 수 있습니다.',

  summary:
    '쇼핑몰·배달앱·OTT·앱마켓은 앱 안에서 채팅이나 문의 양식만 보여 전화번호를 찾기 어렵습니다. 이 페이지는 방송미디어통신위원회가 운영하는 방송통신이용자정보포털에 올라온 사업자별 고객센터 번호만 모읍니다. 서비스별 대표번호와 무료·유료 구분을 확인할 수 있습니다.',
  metaDescription:
    '온라인 고객센터 전화번호 – 쿠팡·배달의민족·네이버쇼핑·11번가·넷플릭스·구글플레이 등 서비스별 대표번호와 무료·유료 구분을 정부 포털 기준으로 정리했습니다.',
  audience: '주문·결제·환불 문의로 온라인 서비스에 전화해야 하는 사람',

  keyFacts: {
    쇼핑: {
      value: '쿠팡 1577-7011 · 네이버쇼핑 1588-3819 · 11번가 1599-0110 (모두 유료)',
      source: { url: PORTAL_SHOP, text: '쿠팡 1577-7011', verifiedAt: '2026-08-27' },
    },
    배달: {
      value: '배달의민족 1600-9880 (유료)',
      source: { url: PORTAL_SHOP, text: '배달의민족 1600-9880', verifiedAt: '2026-08-27' },
    },
    앱마켓: {
      value: '구글플레이 080-234-0051 · 앱스토어 080-333-4000 (둘 다 무료)',
      source: { url: PORTAL_APP, text: '구글플레이 080-234-0051', verifiedAt: '2026-08-27' },
    },
    OTT: {
      value: '넷플릭스 00-308-321-0058 · 웨이브 1599-3709 · 유튜브 1588-3829',
      source: { url: PORTAL_MEDIA, text: '넷플릭스 00-308-321-0058', verifiedAt: '2026-08-27' },
    },
    상담시간: {
      value: '포털에 상담시간 표기가 없다 — 없으면 없다고 표기한다',
      source: { url: PORTAL_SHOP, text: '고객센터 안내', verifiedAt: '2026-08-27' },
    },
  },

  qa: [
    {
      q: '온라인 서비스 고객센터 전화번호는 어디서 확인하나요?', anchor: 'q-numbers',
      intro:
        '방송미디어통신위원회가 운영하는 방송통신이용자정보포털에 사업자별로 모여 있습니다. 쇼핑·앱마켓·미디어로 나뉘어 있고, 회사가 직접 올린 번호가 아니라 포털이 정리한 것이라 한자리에서 볼 수 있습니다. 이 페이지의 회사별 글도 그 표에서 옮긴 번호만 씁니다.',
      highlights: ['방송통신이용자정보포털', '쇼핑', '앱마켓'],
      sourceNote: '* 출처: 와이즈유저 방송통신이용자정보포털 (2026-08-27 확인)',
    },
    {
      q: '앱에는 왜 전화번호가 안 보이나요?', anchor: 'q-app',
      intro:
        '앱 안에서는 채팅 상담이나 문의 양식을 먼저 띄우는 곳이 많습니다. 전화 상담은 사람이 붙어야 해서 비용이 크기 때문입니다. 그렇다고 전화 고객센터가 없는 건 아닙니다. 쿠팡 1577-7011, 배달의민족 1600-9880처럼 번호가 따로 있고, 포털에 올라와 있습니다.',
      highlights: ['채팅 상담', '1577-7011', '1600-9880'],
      sourceNote: '* 출처: 와이즈유저 방송통신이용자정보포털 (2026-08-27 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 어떻게 하나요?', anchor: 'q-apply',
      intro:
        'ARS 안내가 나오면 상담원 연결 항목을 고릅니다. 포털에는 단축번호까지는 올라와 있지 않아 안내 음성을 듣고 고르셔야 합니다. 서비스별 대표번호는 아래 목록에 모아 뒀습니다.',
      highlights: ['상담원 연결', '주문번호', '가입 이메일'],
      sourceNote: '* 출처: 와이즈유저 방송통신이용자정보포털 (2026-08-27 확인)',
    },
    {
      q: '상담시간은 몇 시부터 몇 시까지인가요?', anchor: 'q-hours',
      intro:
        '포털에는 상담시간이 적혀 있지 않습니다. 그래서 여기서는 시간을 쓰지 않고 표기 없음으로 둡니다. 다른 곳에서 본 시간을 옮겨 적으면 닫힌 창구에 전화하게 되기 때문입니다. 시간이 궁금하시면 대표번호로 걸어 ARS 안내를 들으시는 편이 확실합니다.',
      highlights: ['표기 없음', 'ARS 안내'],
      sourceNote: '* 출처: 와이즈유저 방송통신이용자정보포털 (2026-08-27 확인)',
    },
    {
      q: '무료 번호와 유료 번호는 뭐가 다른가요?', anchor: 'q-free',
      intro:
        '080으로 시작하는 번호는 무료입니다. 앱마켓이 그렇습니다 — 구글플레이 080-234-0051, 앱스토어 080-333-4000. 반면 쿠팡·배달의민족·11번가처럼 1577·1600·1599로 시작하는 번호는 발신자가 통화료를 냅니다. 넷플릭스 00-308-321-0058은 국제전화 형식이라 국내 번호처럼 걸면 연결되지 않습니다.',
      highlights: ['080', '무료', '00-308-321-0058'],
      sourceNote: '* 출처: 와이즈유저 방송통신이용자정보포털 (2026-08-27 확인)',
    },
  ],

  sources: [
    { name: '와이즈유저 포털 — 쇼핑 사업자 고객센터', url: PORTAL_SHOP },
    { name: '와이즈유저 포털 — 앱마켓 사업자 고객센터', url: PORTAL_APP },
    { name: '와이즈유저 포털 — 미디어 사업자 고객센터', url: PORTAL_MEDIA },
  ],
};

export const onlineCallCenterSpokes = [
  { slug: 'youtube', role: 'eligibility', title: '유튜브 고객센터 전화번호 및 상담원 연결·문의 안내' },
  { slug: 'wavve', role: 'eligibility', title: '웨이브 고객센터 전화번호 및 상담원 연결·문의 안내' },
  { slug: 'one-store', role: 'eligibility', title: '원스토어 고객센터 전화번호 및 상담원 연결·문의 안내' },
  { slug: 'netflix', role: 'eligibility', title: '넷플릭스 고객센터 전화번호 및 상담원 연결·문의 안내' },
  { slug: 'naver-shopping', role: 'eligibility', title: '네이버쇼핑 고객센터 전화번호 및 상담원 연결·문의 안내' },
  { slug: 'google-play', role: 'eligibility', title: '구글플레이 고객센터 전화번호 및 상담원 연결·문의 안내' },
  { slug: 'galaxy-store', role: 'eligibility', title: '갤럭시스토어 고객센터 전화번호 및 상담원 연결·문의 안내' },
  { slug: 'coupang', role: 'eligibility', title: '쿠팡 고객센터 전화번호 및 상담원 연결·문의 안내' },
  { slug: 'baemin', role: 'eligibility', title: '배달의민족 고객센터 전화번호 및 상담원 연결·문의 안내' },
  { slug: 'app-store', role: 'eligibility', title: '앱스토어 고객센터 전화번호 및 상담원 연결·문의 안내' },
  { slug: 'afreecatv', role: 'eligibility', title: '아프리카TV 고객센터 전화번호 및 상담원 연결·문의 안내' },
  { slug: '11st', role: 'eligibility', title: '11번가 고객센터 전화번호 및 상담원 연결·문의 안내' },
];
