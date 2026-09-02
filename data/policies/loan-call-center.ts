/* 대출 고객센터 — 회사별 스포크를 받는 허브 (2026-08-27 신설)
 * 구성표: scripts/output/outline-loan-call-center.md (도장 stage2-loan-call-center.json)
 * 추출본: scripts/output/source-welcome-savings-loan.txt · source-kb-savings-call-center.txt
 *         source-kb-bank-loan.txt
 *
 * 왜 이 허브가 따로 필요한가
 *   "고객센터" 와 "대출 고객센터" 는 같은 회사인데 번호가 갈린다.
 *     · 웰컴저축은행  수신 1661-9400 / 여신(대출)          1661-0001
 *     · 국민은행     대표 1588-9999 / 대출 단기연체·만기안내 1588-9008
 *     · 교보생명     대표 1588-1001 / 여신(대출)          1588-1010
 *   웰컴저축은행은 예금 번호로 걸면 대출 창구로 안 간다. 검색어가 따로 있는 이유다.
 *
 * 보험사·증권사·카드사·통신사·온라인 허브와 같은 뼈대다(components/CallCenterHub.tsx).
 *
 * 조심할 것 — 이 업종에서 제일 위험한 사고
 *   대출 전용 번호가 안 보인다고 대표번호를 대출 번호처럼 적는 것.
 *   대표번호 하나로 다 받는 회사가 실제로 있다 (KB저축은행 1899-0900).
 *   신한은행 1544-8000 / 1544-8008 은 개인 / 기업 구분이지 대출 구분이 아니다.
 *
 * 버튼 목적지 — 화면까지 찍어 확인한 곳만 건다
 *   웰컴저축은행 /ib20/mnu/BZW02001 은 텍스트에 번호가 다 잡혀서 처음엔 이걸 걸려고 했다.
 *   그런데 화면을 찍어 보니 본문이 "화면 실행 중 오류가 발생했습니다" 였다 —
 *   번호는 푸터에서 나온 것이었다. 홈(/ib20/mnu/IBN000000000)으로 바꿨다.
 *   국민은행 obank.kbstar.com/quics?page=C019095 도 열었더니 C055068(예금 계좌조회)로 튕겨서 뺐다.
 *   1588-9008 은 추출본에 남아 있으니 사실로는 쓰고 링크만 안 건다.
 *
 * 쓰지 않는 것
 *   · 금리·한도·심사 기간 (수시로 바뀌고, 이 페이지는 번호를 다루는 곳이다)
 *   · 평균 대기시간 (공식 발표 없음)
 *   · 확인 못 한 회사의 대출 번호 (대표번호로 대체하지 않는다)
 */

const WELCOME = 'https://www.welcomebank.co.kr/ib20/mnu/IBN000000000';
const KBSAVINGS = 'https://www.kbsavings.com/websquare/websquare.jsp?w2xPath=/jsp/consumerCenter/question/questionView.xml';

export const loanCallCenterPolicy = {
  id: '806', type: 'service' as const,
  title: '대출 고객센터 전화번호 조회, 대표번호로 걸면 대출 상담이 안 되는 이유',
  titleKeywords: {
    k1: '대출 고객센터',
    k2: '전화번호',
    k3: '대출 상담',
    k4: '대표번호',
  },
  slug: 'loan-call-center',
  org: '각 금융사',
  cat: '고객센터',
  catSlug: 'call-center',
  amount: '은행 · 저축은행 · 캐피탈 · 카드 · 보험 대출 창구',
  deadline: '대표번호와 대출 번호가 갈리는 곳이 있다',
  hideAmountBox: true,
  views: 0,
  applyUrl: WELCOME,
  ctaLabel: '웰컴저축은행 안내에서 보기',
  datePublished: '2026-08-27T09:00:00+09:00',
  dateModified: '2026-08-27T09:00:00+09:00',

  heroHook:
    '대출 문의로 대표번호에 걸었다가 다른 창구로 넘겨진 적 있으실 겁니다. 회사에 따라 대출 번호가 따로 있기 때문입니다. 웰컴저축은행은 예금이 1661-9400, 여신(대출)이 1661-0001로 아예 다릅니다. 국민은행은 대표번호가 1588-9999이고 대출 단기연체·만기안내는 1588-9008이며, 교보생명은 대표 1588-1001에 여신(대출)이 1588-1010입니다. 반대로 KB저축은행처럼 1899-0900 하나로 다 받는 곳도 있습니다. 아래 목록에서 회사별로 대출 창구 번호가 따로 있는지부터 확인하실 수 있습니다.',

  summary:
    '대출 상담은 회사에 따라 대표번호가 아니라 별도 번호로 받습니다. 웰컴저축은행은 수신 1661-9400과 여신 1661-0001이 다르고, 국민은행은 대표 1588-9999와 대출 만기안내 1588-9008이 다릅니다. 이 페이지는 회사별 공식 안내에 적힌 번호만 모읍니다. 대출 전용 번호가 있는 곳과 대표번호 하나로 받는 곳을 함께 확인할 수 있습니다.',
  metaDescription:
    '대출 고객센터 전화번호 – 은행·저축은행·캐피탈·카드·보험사의 대출 상담 전용 번호와 대표번호 구분을 공식 안내 기준으로 정리했습니다.',
  audience: '대출 상담·만기연장·중도상환 문의로 금융사에 전화해야 하는 사람',

  keyFacts: {
    저축은행: {
      value: '웰컴저축은행 수신 1661-9400 / 여신(대출) 1661-0001',
      source: { url: WELCOME, text: '여신(대출) 대표번호 : 1661-0001', verifiedAt: '2026-08-27' },
    },
    번호가하나인곳: {
      value: 'KB저축은행은 1899-0900 하나로 받는다',
      source: { url: KBSAVINGS, text: '고객상담센터(☏1899-0900, 평일 9:00~18:00)', verifiedAt: '2026-08-27' },
    },
    마이데이터: {
      value: '웰컴저축은행은 마이데이터도 1661-9500으로 따로 둔다',
      source: { url: WELCOME, text: '마이데이터 대표번호 : 1661-9500', verifiedAt: '2026-08-27' },
    },
    상담시간: {
      value: 'KB저축은행 평일 9:00~18:00 — 회사마다 다르고, 공식 안내에 적힌 곳만 표기한다',
      source: { url: KBSAVINGS, text: '평일 9:00~18:00', verifiedAt: '2026-08-27' },
    },
  },

  qa: [
    {
      q: '대출 고객센터 전화번호는 어디서 확인하나요?', anchor: 'q-numbers',
      intro:
        '회사별 페이지에서 확인하시면 됩니다. 대출은 대표번호와 창구가 갈리는 곳이 있어 한 번호로 정리되지 않습니다. 웰컴저축은행만 해도 공식 안내에 수신 1661-9400, 여신(대출) 1661-0001, 마이데이터 1661-9500이 따로 적혀 있습니다. 용건이 대출이면 그 번호로 바로 거는 편이 빠릅니다.',
      highlights: ['1661-0001', '여신(대출)', '대표번호'],
      sourceNote: '* 출처: 웰컴저축은행 공식 홈페이지 안내 (2026-08-27 확인)',
    },
    {
      q: '대표번호로 걸면 대출 상담이 안 되나요?', anchor: 'q-main',
      intro:
        '회사에 따라 다릅니다. 웰컴저축은행처럼 수신과 여신 번호를 나눠 둔 곳은 예금 번호로 걸면 대출 창구가 아닙니다. 반대로 KB저축은행은 1899-0900 하나로 받습니다. 거시기 전에 그 회사가 번호를 나눠 뒀는지부터 보시는 편이 낫습니다. 아래 회사 목록에 그 구분을 적어 뒀습니다.',
      highlights: ['수신', '여신', '1899-0900'],
      sourceNote: '* 출처: 각 금융사 공식 안내 (2026-08-27 확인)',
    },
    {
      q: '상담원과 바로 연결하려면 어떻게 하나요?', anchor: 'q-apply',
      intro:
        'ARS 안내가 나오면 대출 항목을 고릅니다. 공식 안내에 단축번호까지 적어 둔 회사는 많지 않습니다. 그런 곳은 안내 음성을 듣고 고르셔야 합니다. 이미 받은 대출 건이라면 대출 계좌번호를 미리 꺼내 두시면 그만큼 짧아집니다. 단축번호가 공개된 회사는 회사별 페이지에 그 번호를 적어 뒀습니다.',
      highlights: ['ARS', '대출 계좌번호', '단축번호'],
      sourceNote: '* 출처: 각 금융사 공식 안내 (2026-08-27 확인)',
    },
    {
      q: '상담시간은 몇 시부터 몇 시까지인가요?', anchor: 'q-hours',
      intro:
        '회사마다 다릅니다. KB저축은행은 공식 안내에 평일 9:00~18:00으로 적혀 있습니다. 반면 시간을 아예 적어 두지 않은 회사도 있는데, 그런 곳은 여기서도 표기 없음으로 둡니다. 다른 곳에서 본 시간을 옮겨 적으면 닫힌 창구에 전화하게 되기 때문입니다.',
      highlights: ['평일 9:00~18:00', '표기 없음'],
      sourceNote: '* 출처: KB저축은행 공식 고객센터 안내 (2026-08-27 확인)',
    },
    {
      q: '만기연장이나 중도상환도 같은 번호인가요?', anchor: 'q-jobs',
      intro:
        '나눠 둔 곳이 있습니다. 국민은행은 대표번호 1588-9999와 별도로 대출 단기연체·만기안내를 1588-9008, 1566-9008로 안내합니다. 만기 안내를 받으셨다면 그 번호가 담당 창구입니다. 회사별 페이지에 업무별로 나뉜 번호를 그대로 옮겨 적었습니다.',
      highlights: ['1588-9008', '만기안내', '단기연체'],
      sourceNote: '* 출처: KB국민은행 공식 고객센터 안내 (2026-08-27 확인)',
    },
  ],

  sources: [
    { name: '웰컴저축은행 공식 홈페이지', url: WELCOME },
    { name: 'KB저축은행 고객문의·민원', url: KBSAVINGS },
  ],
};

export const loanCallCenterSpokes = [
  { slug: 'sbi-savings-loan', role: 'eligibility', title: 'SBI저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'samsung-fire-loan', role: 'eligibility', title: '삼성화재 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'samsung-card-loan', role: 'eligibility', title: '삼성카드 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'ok-savings-loan', role: 'eligibility', title: 'OK저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'miraeasset-life-loan', role: 'eligibility', title: '미래에셋생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kyobo-life-loan', role: 'eligibility', title: '교보생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kb-capital-loan', role: 'eligibility', title: 'KB캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'hyundai-marine-loan', role: 'eligibility', title: '현대해상 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'heungkuk-fire-loan', role: 'eligibility', title: '흥국화재 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'db-insurance-loan', role: 'eligibility', title: 'DB손해보험 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'yebyeol-loan', role: 'eligibility', title: '예별손해보험 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'woori-savings-loan', role: 'eligibility', title: '우리금융저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'woori-card-loan', role: 'eligibility', title: '우리카드 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'woori-capital-loan', role: 'eligibility', title: '우리금융캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'woori-bank-loan', role: 'eligibility', title: '우리은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'welcome-savings-loan', role: 'eligibility', title: '웰컴저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'tossbank-loan', role: 'eligibility', title: '토스뱅크 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'tongyang-life-loan', role: 'eligibility', title: '동양생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'suhyup-bank-loan', role: 'eligibility', title: 'Sh수협은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'shinhan-savings-loan', role: 'eligibility', title: '신한저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'shinhan-life-loan', role: 'eligibility', title: '신한라이프 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'shinhan-card-loan', role: 'eligibility', title: '신한카드 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'shinhan-capital-loan', role: 'eligibility', title: '신한캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'shinhan-bank-loan', role: 'eligibility', title: '신한은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'sc-bank-loan', role: 'eligibility', title: 'SC제일은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'sangsangin-savings-loan', role: 'eligibility', title: '상상인저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'samsung-life-loan', role: 'eligibility', title: '삼성생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'pepper-savings-loan', role: 'eligibility', title: '페퍼저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'osb-savings-loan', role: 'eligibility', title: 'OSB저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'nhuf-loan', role: 'eligibility', title: '주택도시기금 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'nh-savings-loan', role: 'eligibility', title: 'NH저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'nh-property-loan', role: 'eligibility', title: 'NH농협손해보험 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'nh-life-loan', role: 'eligibility', title: 'NH농협생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'nh-card-loan', role: 'eligibility', title: 'NH농협카드 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'nh-bank-loan', role: 'eligibility', title: 'NH농협은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'moa-savings-loan', role: 'eligibility', title: '모아저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'mirae-capital-loan', role: 'eligibility', title: '미래에셋캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'metlife-loan', role: 'eligibility', title: '메트라이프생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'meritz-fire-loan', role: 'eligibility', title: '메리츠화재 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'meritz-capital-loan', role: 'eligibility', title: '메리츠캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'lotte-insurance-loan', role: 'eligibility', title: '롯데손해보험 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'lotte-card-loan', role: 'eligibility', title: '롯데카드 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'lotte-capital-loan', role: 'eligibility', title: '롯데캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'knbank-loan', role: 'eligibility', title: 'BNK경남은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kjbank-card-loan', role: 'eligibility', title: '광주은행 카드 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kiwoom-loan', role: 'eligibility', title: '키움증권 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kinfa-loan', role: 'eligibility', title: '서민금융진흥원 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kfcc-loan', role: 'eligibility', title: '새마을금고 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kdb-loan', role: 'eligibility', title: 'KDB산업은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kdb-capital-loan', role: 'eligibility', title: 'KDB캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kblife-loan', role: 'eligibility', title: 'KB라이프생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kbank-loan', role: 'eligibility', title: '케이뱅크 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kb-savings-loan', role: 'eligibility', title: 'KB저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kb-insurance-loan', role: 'eligibility', title: 'KB손해보험 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kb-card-loan', role: 'eligibility', title: 'KB국민카드 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kb-bank-loan', role: 'eligibility', title: 'KB국민은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kamco-loan', role: 'eligibility', title: '캠코 한국자산관리공사 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'kakaobank-loan', role: 'eligibility', title: '카카오뱅크 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'jt-savings-loan', role: 'eligibility', title: 'JT친애저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'jeju-bank-loan', role: 'eligibility', title: '제주은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'jbbank-card-loan', role: 'eligibility', title: '전북은행 카드 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'jb-woori-capital-loan', role: 'eligibility', title: 'JB우리캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'imcap-loan', role: 'eligibility', title: 'iM캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'imbank-loan', role: 'eligibility', title: 'iM뱅크 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'ibk-savings-loan', role: 'eligibility', title: 'IBK저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'ibk-loan', role: 'eligibility', title: 'IBK기업은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'ibk-capital-loan', role: 'eligibility', title: 'IBK캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'hyundai-commercial-loan', role: 'eligibility', title: '현대커머셜 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'hyundai-card-loan', role: 'eligibility', title: '현대카드 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'hyundai-capital-loan', role: 'eligibility', title: '현대캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'hf-loan', role: 'eligibility', title: '한국주택금융공사 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'heungkuk-life-loan', role: 'eligibility', title: '흥국생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'hanwha-life-loan', role: 'eligibility', title: '한화생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'hankook-savings-loan', role: 'eligibility', title: '한국투자저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'hana-savings-loan', role: 'eligibility', title: '하나저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'hana-life-loan', role: 'eligibility', title: '하나생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'hana-card-loan', role: 'eligibility', title: '하나카드 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'hana-capital-loan', role: 'eligibility', title: '하나캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'hana-bank-loan', role: 'eligibility', title: '하나은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'fubon-hyundai-loan', role: 'eligibility', title: '푸본현대생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'db-life-loan', role: 'eligibility', title: 'DB생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'daol-savings-loan', role: 'eligibility', title: '다올저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'cu-loan', role: 'eligibility', title: '신협 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'citibank-loan', role: 'eligibility', title: '한국씨티은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'citi-card-loan', role: 'eligibility', title: '씨티카드 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'chubb-life-loan', role: 'eligibility', title: '처브라이프생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'busanbank-loan', role: 'eligibility', title: 'BNK부산은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'bnk-capital-loan', role: 'eligibility', title: 'BNK캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'bc-card-loan', role: 'eligibility', title: 'BC카드 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'aia-life-loan', role: 'eligibility', title: 'AIA생명 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'acuon-savings-loan', role: 'eligibility', title: '애큐온저축은행 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
  { slug: 'acuon-capital-loan', role: 'eligibility', title: '애큐온캐피탈 대출 고객센터 전화번호·상담 연결·영업시간, 대표번호로 될까?' },
];
