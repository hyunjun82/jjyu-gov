/* 2026 아이치·나고야 아시안게임 — 대회 조직위(AINAGOC) 공식 결과 사이트 + Olympics.com + 국내 중계사 특집 페이지
 * 추출본: scripts/output/source-ag2026-korea-matches.txt
 * 추출본: scripts/output/source-ag2026-bbl-els.txt
 * 추출본: scripts/output/source-ag2026-olympics-korea-schedule.txt
 * 추출본: scripts/output/source-ag2026-broadcast-munhwa.txt
 * 추출본: scripts/output/source-ag2026-kbs.txt
 * 추출본: scripts/output/source-ag2026-spotvnow.txt
 * 추출본: scripts/output/source-ag2026-chzzk.txt
 * 추출본: scripts/output/source-ag2026-tvchosun.txt
 * 추출본: scripts/output/source-ag2026-official-disciplines.txt
 * 추출본: scripts/output/source-ag2026-official-about.txt
 * 작성 기준일 2026-09-22(대회 3일차). 일본 현지 시간 = 한국 시간(UTC+9) — 공식 일정 19:00 경기가 KBS 편성표에도 19:00 으로 올라 있다.
 */
const RESULTS = 'https://results.asiangames2026.org/#/schedule/disciplines';
const OLYMPICS_KOR = 'https://www.olympics.com/ko/news/team-korea-day-by-day-highlights-aichi-nagoya-asian-games-2026';
const SPOTV_NOW = 'https://www.spotvnow.co.kr/2026ag/';
const CHZZK = 'https://chzzk.naver.com/home/sports/asian-games-2026';
const KBS = 'https://sports.kbs.co.kr/';
const MUNHWA = 'https://www.munhwa.com/article/11618060';

export const asianGames2026Policy = {
  id: '850', type: 'service' as const,
  title: '2026 나고야 아시안게임 일정 확인, 개막식부터 폐막식까지 경기일정표',
  titleKeywords: { k1: '나고야 아시안게임 일정', k2: '아시안게임 개막식 폐막식', k3: '아시안게임 경기일정표', k4: '아시안게임 한국 경기' },
  slug: 'asian-games-2026', org: '아이치·나고야 아시안게임 조직위원회(AINAGOC)', cat: '생활', catSlug: 'life',
  amount: '43개 종목, 9월 19일 개회식 ~ 10월 4일 폐회식', hideAmountBox: true,
  deadline: '2026.9.19(토) 개회식 ~ 10.4(일) 폐회식 · 농구 9.10, 축구 9.14 선행 경기', views: 0,
  applyUrl: SPOTV_NOW,
  ctaLabel: '오늘 한국 경기 중계 보기',
  heroHook:
    '아시안게임이 벌써 사흘째인데, 한국 경기가 언제 하는지 매번 찾아보기 번거로우시죠. 종목이 43개나 되다 보니 일정표를 열어도 한국 경기를 골라내기가 쉽지 않은데요. 대회는 9월 19일 개회식부터 10월 4일 폐회식까지 이어지고, 농구와 축구는 개막 전인 9월 10일과 14일에 먼저 시작했습니다. 다행히 일본 현지 시간이 한국 시간과 같아서 일정표에 적힌 시각을 그대로 보시면 됩니다. 남은 일정과 한국 경기만 골라 보는 법까지 확인해보겠습니다.',
  datePublished: '2026-09-22T09:00:00+09:00', dateModified: '2026-09-22T09:00:00+09:00',
  summary: '제20회 아시안게임은 2026년 9월 19일부터 10월 4일까지 일본 아이치현 나고야시에서 열립니다. 개회식은 9월 19일(토) 18시에 열렸고, 폐회식은 10월 4일(일)입니다. 종목은 모두 43개이며, 일부 종목은 개회식보다 먼저 시작해 남자 농구가 9월 10일, 여자 축구가 9월 14일에 첫 경기를 치렀습니다. 종목별·날짜별 경기일정표와 결과는 대회 조직위원회가 운영하는 공식 결과 사이트(results.asiangames2026.org)에서 확인할 수 있고, 일본 현지 시간이 한국 시간과 같아 적힌 시각이 곧 한국 시각입니다. 한국 경기는 KBS·MBC·SBS 지상파 3사와 TV조선, SPOTV, 네이버 치지직에서 중계합니다. 본 정보는 2026년 9월 22일 기준 공식 결과 사이트와 Olympics.com, 각 중계사 페이지를 직접 확인한 내용이며, 경기 일정은 대회 사정에 따라 바뀔 수 있어 최종 일정은 공식 채널에서 확인이 필요합니다.',
  metaDescription: '2026 나고야 아시안게임 일정 확인, 개막식부터 폐막식까지 경기일정표 – 9월 19일 개회식~10월 4일 폐회식, 농구 9.10·축구 9.14 선행. 공식 일정표 보는 법과 한국 경기만 골라 보는 법.',
  audience: '2026 아이치·나고야 아시안게임 전체 일정과 한국 경기 시간을 찾는 시청자',
  keyFacts: {
    대회기간: { value: '2026.9.19~10.4, 일본 아이치현 나고야시', source: { url: OLYMPICS_KOR, text: '제20회 아시안게임이 9월 19일부터 10월 4일까지 일본 아이치현 나고야시에서 열립니다', verifiedAt: '2026-09-22' } },
    개회식: { value: '9월 19일(토) 18:00', source: { url: OLYMPICS_KOR, text: '9월 19일 토요일 대회 0일·개회식 18:00 🎆개회식', verifiedAt: '2026-09-22' } },
    종목수: { value: '43개 종목', source: { url: OLYMPICS_KOR, text: '아이치-나고야 2026 대회는 총 43개 종목', verifiedAt: '2026-09-22' } },
    선행경기: { value: '남자 농구 9.10, 여자 축구 9.14 시작', source: { url: OLYMPICS_KOR, text: '9월 10일 목요일 대회 -9일차 … 16:00 🏀남자 농구 조별 예선 1차전: 대한민국 v 사우디아라비아 … 9월 14일 월요일 … 19:30 ⚽여자 축구 조별 예선 1차전: 대한민국 v 미얀마', verifiedAt: '2026-09-22' } },
    중계사: { value: 'KBS·MBC·SBS·TV조선·SPOTV·네이버 치지직', source: { url: MUNHWA, text: '지상파 3사를 비롯해 TV조선, SPOTV, 네이버 치지직(온라인) 등을 통해 동시 중계된다', verifiedAt: '2026-09-22' } },
  },
  qa: [
    {
      q: '나고야 아시안게임은 언제 열리나요?', anchor: 'q-when',
      intro: '9월 19일부터 10월 4일까지입니다. Olympics.com은 제20회 아시안게임이 9월 19일부터 10월 4일까지 일본 아이치현 나고야시에서 열린다고 안내하고, KBS·MBC·SBS 아시안게임 특집 페이지도 대회 기간을 같은 날짜로 적어 두었습니다. 일본이 아시안게임을 여는 것은 도쿄 1958 대회와 히로시마 1994 대회에 이어 32년 만의 세 번째입니다. 다만 모든 경기가 개회식 뒤에 시작하는 것은 아닙니다. 대회 조직위원회 공식 결과 사이트의 일정표는 9월 10일부터 열려 있는데, 이날 남자 농구 조별 예선이 가장 먼저 시작됐고 9월 14일에는 여자 축구, 15일에는 남자 축구가 첫 경기를 치렀습니다. 그래서 개회식 날짜만 보고 기다리셨다면 농구와 축구 초반 경기는 이미 지나간 셈입니다. 오늘 9월 22일은 대회 3일차로, 남은 기간은 폐회식까지 12일입니다.',
      highlights: ['대회 기간은 9월 19일부터 10월 4일까지', '남자 농구는 9월 10일, 여자 축구는 9월 14일 먼저 시작', '9월 22일은 대회 3일차'],
      table: {
        caption: '대회 일정 한눈에 (2026년)',
        headers: ['구분', '날짜'],
        rows: [
          ['남자 농구 첫 경기', '9월 10일(목)'],
          ['여자 축구 첫 경기', '9월 14일(월)'],
          ['남자 축구 첫 경기', '9월 15일(화)'],
          ['개회식', '9월 19일(토) 18:00'],
          ['폐회식', '10월 4일(일)'],
        ],
      },
      sourceNote: '* 출처: Olympics.com 한국 선수단 주요 경기 일정, 대회 공식 결과 사이트 (2026-09-22 확인)',
    },
    {
      q: '개막식과 폐막식 날짜는 언제인가요?', anchor: 'q-ceremony',
      intro: '개막식은 이미 열렸습니다. Olympics.com 일정표는 9월 19일 토요일을 대회 0일·개회식으로 두고 개회식 시각을 18시로 적었습니다. 폐막식은 대회 마지막 날인 10월 4일 일요일입니다. 공식 결과 사이트의 날짜 선택 칸도 10월 4일에서 끝나는데, 이날 경기가 남은 종목은 승마 하나로 표시돼 있어 사실상 폐막식이 대회를 닫는 날입니다. 폐막식 시작 시각은 이 글을 쓰는 9월 22일 기준으로 확인한 공식 페이지에 나와 있지 않습니다. 대회 공식 누리집의 개·폐회식 소개 페이지도 아직 준비 중으로 표시돼 있어, 정확한 시각은 폐막 직전 중계사 편성표로 확인하시는 것이 정확합니다. 한 가지 참고하실 점은 개회식이 19일이라고 해서 그 전에 경기가 없었던 것이 아니라는 점입니다. 남자 농구는 개회식 다음 날인 9월 20일 결승까지 모두 끝났습니다.',
      highlights: ['개회식은 9월 19일(토) 18시에 이미 열렸습니다', '폐회식은 10월 4일(일)', '폐회식 시작 시각은 아직 공식 페이지에 없음'],
      box: { label: '확인 필요', content: '폐회식 시작 시각과 중계 채널은 10월 4일 전후 각 중계사 편성표에서 확인하세요. 확인되지 않은 시각을 단정한 글은 주의가 필요합니다.' },
      sourceNote: '* 출처: Olympics.com 한국 선수단 주요 경기 일정, 대회 공식 결과 사이트 (2026-09-22 확인)',
    },
    {
      q: '종목별 경기일정표는 어디서 확인하나요?', anchor: 'q-schedule',
      intro: '대회 조직위원회가 운영하는 공식 결과 사이트가 가장 정확합니다. 대회 공식 누리집(aichi-nagoya2026.org)의 일정·결과 메뉴를 누르면 results.asiangames2026.org로 연결되는데, 이곳의 일정 메뉴는 날짜별, 종목별, 한눈에 보는 표, 지금 진행 중인 경기 네 가지로 나뉘어 있습니다. 종목별 화면에서는 종목마다 경기가 있는 날짜가 나란히 표시되고, 날짜를 누르면 그날 경기 시각과 경기장, 맞붙는 두 나라, 끝난 경기의 점수까지 나옵니다. 예를 들어 야구는 9월 21일부터 27일까지 경기일이 표시되고, 27일 18시 30분 경기가 결승으로 적혀 있습니다. 적힌 시각은 일본 현지 시간인데 한국과 시간대가 같아서 따로 계산할 필요가 없습니다. 공식 일정표 19시 축구 경기가 KBS 편성표에도 19시로 올라 있는 것으로 확인됩니다. 사이트는 영어로 되어 있어서, 종목 이름은 Baseball(야구), Football(축구), Esports(e스포츠)처럼 영문으로 찾으시면 됩니다.',
      highlights: ['공식 결과 사이트 results.asiangames2026.org', '날짜별·종목별·표·진행 중 경기 네 가지 보기', '적힌 시각이 곧 한국 시각', '종목 이름은 영문으로 표시'],
      table: {
        caption: '공식 결과 사이트 일정 메뉴',
        headers: ['메뉴', '보이는 것'],
        rows: [
          ['Days (날짜별)', '고른 날짜에 열리는 종목'],
          ['Disciplines (종목별)', '종목마다 경기가 있는 날짜'],
          ['Grid (표)', '전 종목 × 전 날짜 한눈에'],
          ['Live Events', '지금 진행 중인 경기'],
        ],
      },
      act: { cue: '종목 이름을 누르면 그 종목 날짜가 나오고, 날짜를 누르면 시각과 상대 팀까지 보입니다.', label: '종목별 경기일정표 열기', url: RESULTS },
      sourceNote: '* 출처: 아이치·나고야 아시안게임 공식 결과 사이트, 디지털 KBS 편성 (2026-09-22 확인)',
    },
    {
      q: '한국 경기만 골라 보려면 어떻게 하나요?', anchor: 'q-korea',
      intro: '공식 일정표에서는 국가 코드 KOR이 들어간 경기가 한국 경기입니다. 단체 종목은 경기마다 맞붙는 두 나라가 코드로 표시돼서, KOR만 찾으면 한국 경기를 골라낼 수 있습니다. 다만 수영이나 육상처럼 개인 종목은 일정표에 나라가 표시되지 않아 이 방법으로는 걸러지지 않습니다. 개인 종목까지 한 번에 보려면 Olympics.com이 정리한 한국 선수단 날짜별 주요 경기 일정이 편합니다. 날짜마다 한국 선수가 나서는 경기와 시각이 우리말로 적혀 있습니다. 9월 22일 기준 공식 일정표에서 KOR로 확인한 이번 주 주요 단체 경기는 아래와 같습니다. 오늘 저녁에는 야구 홍콩전과 남자 축구 사우디아라비아전이 30분 차이로 이어집니다. 경기마다 중계 채널은 날짜에 따라 달라서, KBS·MBC·SBS·TV조선·SPOTV·치지직 가운데 어디서 하는지는 당일 편성표를 보셔야 합니다. 치지직 아시안게임 페이지에는 KBS1·MBC·SBS 공식 중계 채널이 한곳에 모여 있습니다.',
      highlights: ['공식 일정표에서 KOR이 들어간 경기가 한국 경기', '개인 종목은 Olympics.com 한국 선수단 일정이 편함', '오늘 저녁 야구 홍콩전 18:30, 축구 사우디전 19:00', '중계 채널은 날짜마다 다름'],
      table: {
        caption: '이번 주 한국 주요 단체 경기 (공식 일정표 KOR 기준)',
        headers: ['날짜', '시각', '경기'],
        rows: [
          ['9월 22일(화)', '18:30', '야구 조별 예선 대한민국 vs 홍콩'],
          ['9월 22일(화)', '19:00', '남자 축구 조별 D조 대한민국 vs 사우디아라비아'],
          ['9월 23일(수)', '12:00', '야구 조별 예선 태국 vs 대한민국'],
          ['9월 25일(금)', '19:30', '여자 축구 8강 대한민국 vs 우즈베키스탄'],
          ['9월 27일(일)', '18:30', '야구 결승 (진출 팀 미정)'],
        ],
      },
      act: { cue: '어느 채널에서 하는지 헷갈리시면 방송사 공식 중계가 모여 있는 곳으로 가시면 됩니다.', label: '한국 경기 생중계 보러 가기', url: CHZZK },
      sourceNote: '* 출처: 공식 결과 사이트 종목별 일정(KOR), Olympics.com 한국 선수단 일정, 치지직 아시안게임 페이지 (2026-09-22 확인)',
    },
  ],
  faq: [
    { q: '나고야 아시안게임은 언제 끝나나요?', a: '10월 4일(일) 폐회식으로 끝납니다. 대회 기간은 9월 19일부터 10월 4일까지이며, 농구와 축구는 개회식 전인 9월 10일과 14일에 먼저 시작했습니다.', source: 'Olympics.com', sourceUrl: OLYMPICS_KOR },
    { q: '일정표 시각을 한국 시간으로 바꿔야 하나요?', a: '바꾸지 않으셔도 됩니다. 일본과 한국은 시간대가 같아서, 공식 일정표 19시 축구 경기가 KBS 편성표에도 19시로 올라 있습니다.', source: '공식 결과 사이트·디지털 KBS', sourceUrl: KBS },
    { q: '종목은 모두 몇 개인가요?', a: '43개 종목입니다. Olympics.com과 TV조선 아시안게임 페이지가 모두 43개 종목으로 안내하고 있습니다.', source: 'Olympics.com', sourceUrl: OLYMPICS_KOR },
    { q: '한국 경기는 어디서 중계하나요?', a: 'KBS·MBC·SBS 지상파 3사와 TV조선, SPOTV, 네이버 치지직에서 중계합니다. 같은 종목이라도 날짜마다 채널이 달라 당일 편성표를 확인하셔야 합니다.', source: '문화일보(2026.9.18)', sourceUrl: MUNHWA },
    { q: '공식 일정표는 한국어로 볼 수 있나요?', a: '공식 결과 사이트는 영어로 운영됩니다. 한국 선수 경기만 우리말로 보시려면 Olympics.com 한국 선수단 날짜별 일정을 이용하시면 됩니다.', source: 'Olympics.com', sourceUrl: OLYMPICS_KOR },
  ],
  sources: [
    { label: '아이치·나고야 아시안게임 공식 결과 사이트 — 종목별 경기일정', url: RESULTS },
    { label: 'Olympics.com — 한국 선수단 아시안게임 주요 경기 일정·시청 방법 (2026.9.14 업데이트)', url: OLYMPICS_KOR },
    { label: '문화일보 — 「아시안게임은 골라본다」 지상파3사 등 모두 중계 (2026.9.18)', url: MUNHWA },
    { label: '디지털 KBS — 2026 아이치-나고야 아시안게임 주요 경기일정', url: KBS },
    { label: 'SPOTV NOW — 아시안게임 중계 일정', url: SPOTV_NOW },
    { label: '치지직 — 2026 아시안게임 중계', url: CHZZK },
  ],
} as const;

export const asianGames2026Spokes = [
  { slug: 'medal-standings', role: 'eligibility', title: '나고야 아시안게임 메달 순위 실시간 조회, 한국 금메달 현황 확인' },
  { slug: 'korea-match-schedule', role: 'eligibility', title: '나고야 아시안게임 한국 경기 일정 확인, 종목별 시간과 중계 채널' },
  { slug: 'football-group-schedule', role: 'eligibility', title: '나고야 아시안게임 축구 조편성과 일정, 대표팀 명단과 중계 보는 법' },
  { slug: 'baseball-schedule-roster', role: 'eligibility', title: '나고야 아시안게임 야구 일정과 대표팀 명단, 중계 채널 확인' },
  { slug: 'lol-schedule-roster', role: 'eligibility', title: '나고야 아시안게임 롤 일정과 국가대표 명단, 중계 시청 방법' },
  { slug: 'broadcast-channels', role: 'apply', title: '나고야 아시안게임 중계 어디서 보나요, 방송사와 티빙 무료 시청 여부' },
];
