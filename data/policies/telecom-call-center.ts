/* 통신사 고객센터 — 회사별 스포크를 받는 허브 (2026-08-27 신설)
 * 구성표: scripts/output/outline-telecom-call-center.md (도장 stage2-telecom-call-center.json)
 * 추출본: scripts/output/source-skt-call-center.txt · source-kt-call-center.txt
 *         source-lguplus-call-center.txt
 *
 * 왜 허브가 필요한가
 *   114 는 자기가 쓰는 회사로만 연결된다. 다른 회사 번호를 알려면 국번 있는 번호가 있어야 하는데,
 *   그 번호는 회사 홈페이지 맨 아래에만 적혀 있다. 한자리에 모아 두는 것 자체가 값이다.
 *
 * 보험사·증권사·카드사 허브와 같은 뼈대다(components/CallCenterHub.tsx). 업종 말만 갈린다.
 *
 * 통신사에서 조심할 것
 *   · 휴대폰과 인터넷·TV 가 창구가 다르다. KT 는 휴대폰 114 / 인터넷·TV 100,
 *     LG유플러스는 휴대폰 114 / 인터넷·IPTV 101 이다. 잘못 걸면 이관된다.
 *   · 무료와 유료가 갈린다. 080 으로 시작하면 무료, 1588·1599·1544 는 발신자 부담이다.
 *   · 통신 3사 공식 홈페이지 첫 화면에 상담시간 표기가 없다 — 추정해 적지 않는다.
 *
 * 쓰지 않는 것
 *   · 회사별 상담시간(공식 첫 화면에 표기 없음)
 *   · 평균 대기시간(공식 발표 없음)
 *   · 알뜰폰 사업자별 번호(이 글에서는 다루지 않는다)
 */

const NAVER_MAP = 'https://map.naver.com/p/search/%ED%86%B5%EC%8B%A0%EC%82%AC';
const SKT_HOME = 'https://www.tworld.co.kr/web/home';
const KT_HOME = 'https://www.kt.com/';
const LGU_HOME = 'https://www.lguplus.com/';

export const telecomCallCenterPolicy = {
  id: '804', type: 'service' as const,
  title: '통신사 고객센터 전화번호 조회, 114 눌러도 안 되면 이 번호로',
  titleKeywords: {
    k1: '통신사 고객센터',
    k2: '전화번호',
    k3: '상담사 연결',
    k4: '114',
  },
  slug: 'telecom-call-center',
  org: '각 통신사',
  cat: '고객센터',
  catSlug: 'call-center',
  amount: '휴대폰 · 인터넷/TV · 가입문의 번호가 따로 있다',
  deadline: '무료 번호(080)와 유료 번호가 갈린다',
  hideAmountBox: true,
  views: 0,
  applyUrl: NAVER_MAP,
  ctaLabel: '가까운 매장 찾기',
  datePublished: '2026-08-27T09:00:00+09:00',
  dateModified: '2026-08-27T09:00:00+09:00',

  heroHook:
    '통신사 고객센터는 휴대폰과 인터넷·TV 번호가 따로 있습니다. SK텔레콤은 휴대폰이 국번 없이 114이고 인터넷·집전화는 1600-2000이며, KT는 휴대폰 114에 인터넷·TV가 100, LG유플러스는 휴대폰 114에 인터넷·IPTV가 101입니다. 114는 쓰는 회사 것으로 연결되므로 다른 회사 번호를 알려면 국번 있는 번호가 필요합니다. 아래 회사 목록에서 대표번호와 업무별 전용번호, 무료·유료 구분, 상담사 연결 순서를 함께 확인할 수 있습니다.',

  summary:
    '통신 3사 고객센터는 휴대폰과 인터넷·TV가 각각 다른 번호로 운영되고, 무료 번호와 유료 번호가 따로 있습니다. 114는 자기가 쓰는 회사로만 연결되기 때문에 다른 회사에 걸려면 국번 있는 번호가 필요합니다. 이 페이지는 회사별 공식 홈페이지에 적힌 번호만 모읍니다. 각 회사 페이지에서 대표번호, 업무별 전용번호, 무료·유료 구분을 확인할 수 있습니다.',
  metaDescription:
    '통신사 고객센터 전화번호 – SK텔레콤·KT·LG유플러스의 휴대폰과 인터넷/TV 번호, 무료·유료 구분, 가입문의 전용번호를 공식 안내 기준으로 정리했습니다.',
  audience: '개통·명의변경·요금 문의로 통신사에 전화해야 하는 사람',

  keyFacts: {
    휴대폰: {
      value: '통신 3사 모두 국번 없이 114 (무료)',
      source: { url: SKT_HOME, text: '휴대폰 국번 없이 114(무료)', verifiedAt: '2026-08-27' },
    },
    인터넷TV: {
      value: '회사마다 다르다 — SK텔레콤 1600-2000, KT 100, LG유플러스 101',
      source: { url: KT_HOME, text: '인터넷/TV/전화 국번없이 100(무료)', verifiedAt: '2026-08-27' },
    },
    무료번호: {
      value: '080 으로 시작하는 번호는 무료 (SK텔레콤 080-011-6000, KT 080-000-1618)',
      source: { url: SKT_HOME, text: '080-011-6000(무료)', verifiedAt: '2026-08-27' },
    },
    가입문의: {
      value: '가입 전용 번호를 따로 두는 곳이 있다 (LG유플러스 휴대폰 1644-7009)',
      source: { url: LGU_HOME, text: '가입문의 : 휴대폰 1644-7009(유료)', verifiedAt: '2026-08-27' },
    },
    상담시간: {
      value: '통신 3사 공식 홈페이지 첫 화면에 상담시간 표기가 없다',
      source: { url: SKT_HOME, text: '고객센터 대표', verifiedAt: '2026-08-27' },
    },
  },

  qa: [
    {
      q: '통신사 고객센터 전화번호는 어디서 확인하나요?', anchor: 'q-numbers',
      intro:
        '회사별 페이지에서 확인하시면 됩니다. 통신사는 대표번호 하나가 아니라 휴대폰·인터넷·TV·가입문의가 각각 다른 번호입니다. LG유플러스만 해도 공식 홈페이지에 여덟 개가 올라와 있습니다. 용건이 정해져 있으면 그 창구 번호로 거는 편이 빠릅니다. 다른 창구로 걸면 담당 부서로 이관되기 때문입니다.',
      highlights: ['휴대폰', '인터넷·TV', '가입문의'],
      sourceNote: '* 출처: 각 통신사 공식 홈페이지 (2026-08-27 확인)',
    },
    {
      q: '114는 어느 회사로 연결되나요?', anchor: 'q-114',
      intro:
        '자기가 쓰는 통신사로 연결됩니다. 통신 3사가 모두 114를 쓰기 때문에 SK텔레콤 가입자가 114를 누르면 SK텔레콤으로, KT 가입자가 누르면 KT로 갑니다. 그래서 다른 회사에 물어볼 일이 생기면 114로는 안 되고 국번 있는 번호를 눌러야 합니다. SK텔레콤은 1599-0011, KT는 1588-0010, LG유플러스는 1544-0010입니다.',
      highlights: ['114', '1599-0011', '1588-0010'],
      sourceNote: '* 출처: 각 통신사 공식 홈페이지 (2026-08-27 확인)',
    },
    {
      q: '상담사와 바로 연결하려면 어떻게 하나요?', anchor: 'q-apply',
      intro:
        'ARS 안내가 나오면 상담사 연결 항목을 고릅니다. 통신 3사는 공식 홈페이지에 단축번호를 적어 두지 않아서, 안내 음성을 듣고 고르셔야 합니다. 회사별 페이지에 업무별 전용번호를 정리해 뒀으니, 용건이 정해져 있으면 그 번호로 바로 거시는 편이 빠릅니다.',
      highlights: ['상담사 연결', '가입자 명의', '생년월일'],
      sourceNote: '* 출처: 각 통신사 공식 홈페이지 (2026-08-27 확인)',
    },
    {
      q: '상담시간은 몇 시부터 몇 시까지인가요?', anchor: 'q-hours',
      intro:
        '통신 3사 공식 홈페이지 첫 화면에는 상담시간이 적혀 있지 않습니다. 그래서 여기서는 시간을 쓰지 않고 표기 없음으로 둡니다. 다른 곳에서 본 시간을 옮겨 적으면 닫힌 창구에 전화하게 되기 때문입니다. 시간이 궁금하시면 대표번호로 걸어 ARS 안내를 들으시는 편이 확실합니다.',
      highlights: ['표기 없음', 'ARS 안내'],
      sourceNote: '* 출처: 각 통신사 공식 홈페이지 (2026-08-27 확인)',
    },
    {
      q: '무료 번호와 유료 번호는 뭐가 다른가요?', anchor: 'q-free',
      intro:
        '080으로 시작하는 번호는 무료입니다. SK텔레콤 080-011-6000, KT 080-000-1618이 그렇습니다. 반면 1588·1599·1544로 시작하는 번호는 발신자가 통화료를 냅니다. 휴대폰에서 114를 누르는 것도 무료입니다. 통화가 길어질 것 같으면 080으로 시작하는 번호를 쓰시는 편이 낫습니다.',
      highlights: ['080', '무료', '발신자'],
      sourceNote: '* 출처: 각 통신사 공식 홈페이지 (2026-08-27 확인)',
    },
  ],

  sources: [
    { name: 'SK텔레콤 T world', url: SKT_HOME },
    { name: 'KT 공식 홈페이지', url: KT_HOME },
    { name: 'LG U+ 공식 홈페이지', url: LGU_HOME },
  ],
};

export const telecomCallCenterSpokes = [
  { slug: 'kt', role: 'eligibility', title: 'KT 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'skt', role: 'eligibility', title: 'SK텔레콤 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'sk-telink', role: 'eligibility', title: 'SK텔링크 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'sk-broadband', role: 'eligibility', title: 'SK브로드밴드 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 's1-mobile', role: 'eligibility', title: '에스원 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'medialog', role: 'eligibility', title: '미디어로그 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'livem', role: 'eligibility', title: '리브엠모바일 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'lguplus', role: 'eligibility', title: 'LG유플러스 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'lg-hellovision', role: 'eligibility', title: 'LG헬로비전 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'kt-mmobile', role: 'eligibility', title: 'KT엠모바일 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'keunsaram', role: 'eligibility', title: '큰사람케넥트 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'kct', role: 'eligibility', title: '한국케이블텔레콤 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'inscobee', role: 'eligibility', title: '인스코비 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'hcn', role: 'eligibility', title: 'HCN 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'dlive', role: 'eligibility', title: '딜라이브 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'cmb', role: 'eligibility', title: 'CMB 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
  { slug: 'anex-telecom', role: 'eligibility', title: '에넥스텔레콤 고객센터 전화번호·상담원 연결·영업시간, 무료번호 있을까?' },
];
