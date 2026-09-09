/* 카드사 고객센터 — 회사별 스포크를 받는 허브 (2026-08-26 신설)
 * 구성표: scripts/output/outline-card-call-center.md (도장 stage2-card-call-center.json)
 * 추출본: scripts/output/source-shinhan-card-call-center.txt 외
 *
 * 왜 허브가 필요한가
 *   지갑을 통째로 잃으면 카드 한 장이 아니라 서너 장을 연달아 신고해야 한다.
 *   그때 번호를 하나씩 검색하면 그 시간에 승인이 난다. 모여 있는 것 자체가 값이다.
 *
 * 보험사·증권사 허브와 같은 뼈대다(components/CallCenterHub.tsx). 업종 말만 갈린다.
 * 각 회사 스포크는 scripts/new-call-center.ts 가 data/call-centers/*.json 으로 찍는다.
 *
 * 카드사에서 조심할 것
 *   · 상담시간을 공개하지 않는 곳이 있다. 없는 시간을 지어 쓰면 닫힌 창구에 전화하게 된다.
 *     없는 시간을 09:00-18:00 으로 적으면 사람이 닫힌 창구에 전화한다 — 없으면 없다고 쓴다.
 *   · 분실신고가 대표번호와 다른 곳이 많다(신한카드 1544-7200).
 *   · 하이픈이 유니코드(‐)인 회사가 있다(신한카드). 숫자만 보고 대조해야 한다.
 *
 * 쓰지 않는 것
 *   · 회사별 평균 대기시간(공식 발표 없음)
 *   · 카드사별 수수료·한도(사람마다 달라 일괄 표기 불가)
 *   · 공식 페이지에 없는 상담시간
 */

const NAVER_MAP = 'https://map.naver.com/p/search/%EC%B9%B4%EB%93%9C%EC%82%AC';
const SHINHAN_ARS = 'https://www.shinhancard.com/mob/MOBFM154N/MOBFM154R01.shc?crustMenuId=ms374';

export const cardCallCenterPolicy = {
  id: '803', type: 'service' as const,
  title: '카드사 고객센터 전화번호 조회, 분실신고 번호 모르면 ARS 처음부터 다시',
  titleKeywords: {
    k1: '카드사 고객센터',
    k2: '전화번호',
    k3: '상담원 연결',
    k4: '분실신고',
  },
  slug: 'card-call-center',
  org: '각 카드사',
  cat: '고객센터',
  catSlug: 'call-center',
  amount: '대표번호 · 분실신고 전용번호 · 해외이용 상담',
  deadline: '상담시간은 회사마다 다르며 공개하지 않는 곳도 있다',
  hideAmountBox: true,
  views: 0,
  applyUrl: NAVER_MAP,
  ctaLabel: '가까운 지점 찾기',
  datePublished: '2026-08-26T09:00:00+09:00',
  dateModified: '2026-08-26T09:00:00+09:00',

  heroHook:
    '카드사 고객센터는 회사마다 대표번호가 하나씩 있고, 분실신고·승인문의·해외이용·카드대출은 번호가 따로 있습니다. 신한카드 대표번호는 1544-7000, 카드분실·승인 ARS 는 1544-7200 이며 상담 가능 시간은 공식 안내에 따로 표기돼 있지 않습니다. 아래 회사 목록에서 대표번호와 업무별 전용번호, 상담원 연결 순서, 고객센터 위치도 함께 확인할 수 있습니다.',

  summary:
    '카드사 고객센터는 대표번호 하나로 모든 업무가 들어가지만, 실제로는 분실신고·승인문의·해외이용·카드대출이 각각 다른 번호로 운영되는 곳이 많습니다. 신한카드는 공식 안내에 올라온 번호만 아홉 개입니다. 이 페이지는 회사별 공식 고객센터 안내 페이지를 직접 열어 확인한 번호만 모읍니다. 각 회사 페이지에서 대표번호, 분실신고 번호, 업무별 전용번호, 상담원 연결 방법을 확인할 수 있습니다.',
  metaDescription:
    '카드사 고객센터 전화번호와 분실신고 번호 – 회사별 대표번호, 분실·승인 전용번호, 해외이용 상담, 상담원 연결 방법을 공식 안내 기준으로 정리했습니다.',
  audience: '카드 분실·승인·결제 문의로 카드사에 전화해야 하는 사람',

  keyFacts: {
    대표번호: {
      value: '회사마다 다르며 각 회사 페이지에서 확인 (신한카드 1544-7000)',
      source: { url: SHINHAN_ARS, text: '고객센터 대표전화', verifiedAt: '2026-08-26' },
    },
    분실신고: {
      value: '대표번호와 다른 전용번호를 두는 곳이 많다 (신한카드 1544-7200)',
      source: { url: SHINHAN_ARS, text: '카드분실·승인 ARS', verifiedAt: '2026-08-26' },
    },
    해외이용: {
      value: '해외 결제·이용 문의는 별도 번호로 갈린다 (신한카드 1833-2092)',
      source: { url: SHINHAN_ARS, text: '해외이용 관련 상담', verifiedAt: '2026-08-26' },
    },
    통화료: {
      value: '유선전화는 시내 전화요금(3분당 39원), 이동전화는 가입 통신사 요금제 기준',
      source: { url: SHINHAN_ARS, text: '유선전화: 전국 어디서나 시내 전화요금', verifiedAt: '2026-08-26' },
    },
    상담시간: {
      value: '회사마다 다르다 — 공식 안내에 적혀 있으면 그 시간을, 없으면 없다고 표기한다',
      source: { url: SHINHAN_ARS, text: 'ARS 이용안내', verifiedAt: '2026-08-26' },
    },
  },

  qa: [
    {
      q: '카드 분실했을 때 어디로 거나요?', anchor: 'q-lost',
      intro:
        '분실신고 전용번호가 따로 있는 회사가 많습니다. 신한카드는 카드분실·승인 ARS 가 1544-7200 으로 대표번호(1544-7000)와 다릅니다. 대표번호로 걸어도 신고는 되지만 ARS 안내를 처음부터 들어야 합니다. 분실은 몇 분 사이에 승인이 나는 일이라 그 시간이 아깝습니다. 지갑에 카드가 여러 장이면 회사별 분실신고 번호를 미리 저장해 두시는 편이 낫습니다.',
      highlights: ['분실신고 전용번호', '1544-7200', '대표번호'],
      sourceNote: '* 출처: 각 카드사 공식 고객센터 안내 (2026-08-26 확인)',
    },
    {
      q: '카드사 고객센터 전화번호는 어디서 확인하나요?', anchor: 'q-numbers',
      intro:
        '회사별 페이지에서 확인하시면 됩니다. 대표번호 하나만 적어둔 안내가 많은데, 공식 페이지에는 업무별 전용번호가 훨씬 많이 올라와 있습니다. 신한카드만 해도 대표전화, 분실·승인, 카드대출, 할부금융, 외국어 상담, 해외이용까지 번호가 갈립니다. 용건이 정해져 있으면 전용번호가 빠릅니다. 대표번호는 안내를 거치지만 전용번호는 담당 창구로 바로 들어가기 때문입니다.',
      highlights: ['업무별 전용번호', '대표번호', '전용번호가 빠릅니다'],
      sourceNote: '* 출처: 각 카드사 공식 고객센터 안내 (2026-08-26 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 어떻게 하나요?', anchor: 'q-apply',
      intro:
        'ARS 안내가 나오면 상담원 연결 항목을 고릅니다. 회사마다 번호가 다르고, 공식 안내에 단축번호를 적지 않는 곳도 있습니다. 번호를 누르기 전에 카드번호나 생년월일을 먼저 넣어야 하는 회사가 많으니, 카드를 손에 들고 거시면 그만큼 짧아집니다. 카드를 잃어버려 번호를 모르면 생년월일로도 본인 확인이 되는 경우가 있습니다.',
      highlights: ['상담원 연결', '카드번호', '생년월일'],
      sourceNote: '* 출처: 각 카드사 공식 고객센터 안내 (2026-08-26 확인)',
    },
    {
      q: '상담시간은 몇 시부터 몇 시까지인가요?', anchor: 'q-hours',
      intro:
        '회사마다 다릅니다. 롯데카드는 상담원 연결이 평일 09시~18시이고, 삼성카드는 상담 직원 연결이 평일 09:00~18:00 입니다. 반면 공식 페이지에 상담시간을 적지 않는 회사도 있습니다. 여기서는 공식 안내에 시간이 적혀 있는 회사만 그 시간을 쓰고, 없는 회사는 표기 없음으로 둡니다. 다른 곳에서 본 시간을 옮겨 적으면 닫힌 창구에 전화하게 되기 때문입니다.',
      highlights: ['평일 09시~18시', '표기 없음'],
      sourceNote: '* 출처: 각 카드사 공식 고객센터 안내 (2026-08-26 확인)',
    },
    {
      q: '해외에서 카드 문제가 생기면 어디로 거나요?', anchor: 'q-abroad',
      intro:
        '해외 전용 번호가 따로 있습니다. 국내 대표번호가 해외에서 걸리지 않을 수 있어 국가번호를 붙인 번호를 따로 안내합니다. 신한카드는 해외에서 82-2-3420-7000, 해외이용 관련 상담은 1833-2092 로 갈립니다. 출국 전에 이 번호를 저장해 두시면 현지에서 검색하지 않아도 됩니다.',
      highlights: ['해외 전용 번호', '82-2-3420-7000', '국가번호'],
      sourceNote: '* 출처: 각 카드사 공식 고객센터 안내 (2026-08-26 확인)',
    },
  ],

  sources: [
    { name: '신한카드 ARS 이용안내', url: SHINHAN_ARS },
  ],
};

export const cardCallCenterSpokes = [
  { slug: 'woori-card', role: 'eligibility', title: '우리카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'suhyup-card', role: 'eligibility', title: '수협은행 카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'shinhan-card', role: 'eligibility', title: '신한카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'sc-card', role: 'eligibility', title: 'SC제일은행 카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'samsung-card', role: 'eligibility', title: '삼성카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'nh-card', role: 'eligibility', title: 'NH농협카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'lotte-card', role: 'eligibility', title: '롯데카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'knbank-card', role: 'eligibility', title: '경남은행 카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'kjbank-card', role: 'eligibility', title: '광주은행 카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'kfcc-card', role: 'eligibility', title: '새마을금고 카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'kb-card', role: 'eligibility', title: 'KB국민카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'jeju-card', role: 'eligibility', title: '제주은행 카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'jbbank-card', role: 'eligibility', title: '전북은행 카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'im-card', role: 'eligibility', title: 'iM카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'hyundai-card', role: 'eligibility', title: '현대카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'hana-card', role: 'eligibility', title: '하나카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'cu-card', role: 'eligibility', title: '신협 카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'busan-card', role: 'eligibility', title: '부산은행 카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
  { slug: 'bc-card', role: 'eligibility', title: 'BC카드 고객센터 전화번호 및 상담원 연결·분실신고 안내' },
];
