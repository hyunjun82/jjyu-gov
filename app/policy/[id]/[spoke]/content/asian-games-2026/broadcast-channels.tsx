import type { SpokeData } from '../../SpokeClient';

/* 추출본: scripts/output/source-ag2026-broadcast-munhwa.txt
 * 추출본: scripts/output/source-ag2026-olympics-korea-schedule.txt
 * 추출본: scripts/output/source-ag2026-kbs.txt
 * 추출본: scripts/output/source-ag2026-mbc.txt
 * 추출본: scripts/output/source-ag2026-mbc-pr-day3.txt
 * 추출본: scripts/output/source-ag2026-kbs-onair.txt
 * 추출본: scripts/output/source-ag2026-tvchosun.txt
 * 추출본: scripts/output/source-ag2026-spotvnow.txt
 * 추출본: scripts/output/source-ag2026-chzzk.txt
 * 1차 출처: 각 중계사 아시안게임 특집 페이지(KBS·MBC·TV조선·SPOTV NOW·치지직) — 2026-09-22 Playwright 확인
 * 출처 2: 문화일보 2026-09-18 「아시안게임은 골라본다」(중계사 구성) ↔ Olympics.com 한국 선수단 시청 방법
 * 2026-09-22 대화창 작성
 *
 * 교차 확인이 맞은 항목:
 *   - 중계사 구성 KBS·MBC·SBS·TV조선·SPOTV·치지직 : 문화일보 ↔ Olympics.com
 *   - 9/22 남자 축구 사우디전 편성 : KBS2 19:00 ↔ MBC 보도자료 ↔ TV조선 18:00 편성 ↔ SPOTV NOW 19:00 무료
 *
 * 버튼 목적지 (Playwright 로 열림 확인):
 *   상단 치지직 https://chzzk.naver.com/home/sports/asian-games-2026 — 아시안게임 KBS1·MBC·SBS 인증 채널 편성
 *   q3 KBS2 온에어 — 로그인 없이 플레이어 열림
 *   q4 SPOTV NOW 2026ag — 경기마다 '무료' 표시
 *   MBC 24시간 Live(/program/live/…) 는 다시보기 목록이라 생중계 버튼으로 쓰지 않았다
 *
 * 쓰지 않는 것:
 *   - 치지직 무료 화질 기준(480p·720p) — 1차 출처 없음(나무위키뿐). 화면 문구 "네이버 멤버십 시작하고 고화질로"까지만
 *   - 티빙·웨이브가 중계를 "안 한다"는 단정 — 두 곳의 공식 안내를 확인하지 않았다. "중계사 명단에 없다"까지만
 *   - SBS 의 9/22 축구 편성 여부 — SBS 편성표를 확인하지 않았다
 *   - 지상파 온에어의 로그인·요금 조건 — 확인하지 않았다
 */

const MUNHWA = 'https://www.munhwa.com/article/11618060';
const OLYMPICS_KOR = 'https://www.olympics.com/ko/news/team-korea-day-by-day-highlights-aichi-nagoya-asian-games-2026';
const KBS = 'https://sports.kbs.co.kr/';
const KBS2_ONAIR = 'https://onair.kbs.co.kr/index.html?sname=onair&stype=live&ch_code=12';
const MBC = 'https://m.imbc.com/program/1006923100000100000';
const MBC_PR = 'https://m.imbc.com/enews/view/518997';
const SBS = 'https://ag2026.sbs.co.kr/';
const TVCHOSUN = 'https://broadcast.tvchosun.com/broadcast/agOnair.cstv?year=2026';
const SPOTV_NOW = 'https://www.spotvnow.co.kr/2026ag/';
const CHZZK = 'https://chzzk.naver.com/home/sports/asian-games-2026';
const HUB = '/policy/asian-games-2026';

export const asianGames2026BroadcastChannelsSpokeContent: SpokeData = {
  h1: '나고야 아시안게임 중계 어디서 보나요, 방송사와 티빙 무료 시청 여부',
  breadcrumb: '아시안게임 중계',
  description:
    '2026 나고야 아시안게임은 KBS·MBC·SBS 지상파 3사와 TV조선, SPOTV, 네이버 치지직에서 중계합니다. 티빙·웨이브는 중계사 명단에 없고, SPOTV NOW는 경기마다 무료로 편성해 두었습니다.',
  datePublished: '2026-09-22T09:00:00+09:00',
  dateModified: '2026-09-22T09:00:00+09:00',
  heroHook:
    '아시안게임 한국 경기를 보려고 채널을 돌리다 보면, 어디서 하는지 몰라 한참 헤매게 되시죠. 지난 동계올림픽은 한 방송사만 중계해서 채널이 없으면 볼 수가 없었는데요. 이번 나고야 대회는 KBS·MBC·SBS 지상파 3사와 TV조선, SPOTV, 네이버 치지직까지 여러 곳에서 함께 중계합니다. 다만 같은 경기라도 날짜마다 맡는 채널이 달라서, 오늘 경기가 어디서 나오는지는 따로 봐야 합니다. 방송사별로 어디서 보면 되는지 알아보겠습니다.',
  heroAct: { label: '아시안게임 중계 보러 가기', href: CHZZK },
  keyFacts: {
    '중계사': 'KBS·MBC·SBS 지상파 3사, TV조선, SPOTV, 네이버 치지직',
    '지상파 3사': '세 곳 모두 중계 (KBS는 KBS1·KBS2 두 채널)',
    '티빙·웨이브': '중계사 명단에 없음',
    '무료 시청': 'SPOTV NOW 아시안게임 편성에 경기마다 무료 표시',
    '치지직 고화질': '네이버 멤버십 가입 시 고화질 시청 안내',
    '채널 배정': '같은 종목도 날짜마다 채널이 다름 — 당일 편성표 확인',
    '근거': '문화일보(2026.9.18), Olympics.com, 각 중계사 아시안게임 페이지 (2026-09-22 확인)',
  },
  keyFactsHighlights: {
    '중계사': ['지상파 3사', 'TV조선', 'SPOTV', '네이버 치지직'],
    '티빙·웨이브': ['명단에 없음'],
    '무료 시청': ['무료'],
  },
  qa: [
    {
      q: '나고야 아시안게임 중계는 어느 방송사가 하나요?', anchor: 'q1',
      intro:
        '여섯 곳입니다. 문화일보는 개막 전날인 9월 18일 보도에서 2026 아이치-나고야 아시안게임이 지상파 3사를 비롯해 TV조선, SPOTV, 네이버 치지직(온라인) 등을 통해 동시 중계된다고 전했습니다. Olympics.com도 한국 선수단 경기 시청 방법으로 KBS, SBS, MBC, TV조선, SPOTV NOW, 치지직을 똑같이 안내하고 있어 두 곳의 목록이 일치합니다. 방송사마다 아시안게임 전용 페이지를 따로 열어 두었습니다. KBS는 디지털 KBS 아시안게임 페이지에 날짜별 주요 경기와 KBS1·KBS2 채널별 중계 일정을 올려 두었고, MBC와 SBS, TV조선도 특집 페이지에서 생중계와 경기 영상을 모아 보여 줍니다. 온라인으로는 SPOTV NOW와 네이버 치지직에서 볼 수 있는데, 치지직 아시안게임 페이지에는 아시안게임 KBS1, 아시안게임 MBC, 아시안게임 SBS처럼 방송사 인증 채널이 한곳에 편성돼 있습니다. TV가 없어도 휴대전화로 볼 수 있다는 뜻입니다.',
      highlights: ['지상파 3사와 TV조선, SPOTV, 네이버 치지직', '문화일보와 Olympics.com 목록이 일치', '방송사마다 아시안게임 전용 페이지', '치지직에 KBS1·MBC·SBS 인증 채널'],
      table: {
        caption: '방송사별 아시안게임 중계 페이지',
        headers: ['중계사', '볼 수 있는 곳'],
        rows: [
          ['KBS', 'KBS1·KBS2, 디지털 KBS 아시안게임 페이지'],
          ['MBC', 'MBC, iMBC 아시안게임 페이지'],
          ['SBS', 'SBS, SBS 아시안게임 페이지'],
          ['TV조선', 'TV조선, TV조선 아시안게임 생중계 페이지'],
          ['SPOTV', 'SPOTV NOW 아시안게임 페이지'],
          ['네이버', '치지직 아시안게임 페이지 (방송사 채널 모음)'],
        ],
      },
      sourceNote: '* 출처: 문화일보(2026.9.18), Olympics.com 한국 선수단 시청 방법, 각 중계사 아시안게임 페이지 (2026-09-22 확인)',
    },
    {
      q: '지상파 세 곳 다 중계하나요?', anchor: 'q2',
      intro:
        '네, KBS·MBC·SBS 세 곳 모두 중계합니다. 문화일보는 이번 아시안게임이 KBS, MBC, SBS를 비롯해 다양한 채널과 플랫폼을 통해 중계되면서 보편적 시청권을 획득하게 됐다고 전했습니다. 같은 기사에 따르면 지난 동계 올림픽은 JTBC 단독 중계, 북중미 월드컵은 JTBC·KBS만 참여해 반쪽 행사라는 비판을 받았는데, 이번에는 그 오명을 벗게 됐다는 설명입니다. 다만 세 곳이 매 경기를 똑같이 중계하는 것은 아닙니다. 9월 22일 한국 경기를 방송사 편성으로 맞춰 보면, 남자 축구 사우디아라비아전은 KBS2가 19시부터 중계하고 MBC도 이날 야구 홍콩전과 남자축구 사우디아라비아전을 중계한다고 밝혔습니다. 야구 홍콩전은 KBS2도 18시 30분부터 중계합니다. TV조선도 18시 편성에 축구와 야구를 함께 넣었고, SPOTV NOW도 두 경기를 편성했습니다. 반면 KBS는 같은 날 하키·배구·핸드볼 같은 다른 한국 경기를 KBS1에 따로 배정했습니다. 인기 경기는 여러 곳에서 겹쳐 중계하고, 나머지 종목은 채널마다 나눠 맡는 구조라 보고 싶은 경기가 정해졌다면 당일 편성표를 먼저 보시는 편이 빠릅니다.',
      highlights: ['KBS·MBC·SBS 세 곳 모두 중계', '보편적 시청권을 획득', '인기 경기는 여러 곳에서 겹쳐 중계', '종목마다 채널이 나뉘어 당일 편성표 확인'],
      table: {
        caption: '9월 22일 한국 경기 편성 예 (각 방송사 편성 기준)',
        headers: ['경기', '편성한 곳'],
        rows: [
          ['야구 대한민국 vs 홍콩 (18:30)', 'KBS2, MBC, TV조선, SPOTV NOW'],
          ['남자 축구 대한민국 vs 사우디아라비아 (19:00)', 'KBS2, MBC, TV조선, SPOTV NOW'],
          ['남자 하키 인도네시아 vs 대한민국', 'KBS1'],
          ['여자 배구 동메달 결정전 대한민국 vs 태국', 'KBS1, MBC, SPOTV NOW'],
        ],
      },
      sourceNote: '* 출처: 문화일보(2026.9.18), 디지털 KBS 주요 경기일정, MBC 보도자료(2026.9.22), TV조선·SPOTV NOW 편성 (2026-09-22 확인)',
    },
    {
      q: '티빙이나 웨이브에서도 볼 수 있나요?', anchor: 'q3',
      intro:
        '이번 대회 중계사 명단에는 티빙과 웨이브가 없습니다. 문화일보가 전한 중계사는 지상파 3사와 TV조선, SPOTV, 네이버 치지직이고, Olympics.com이 안내한 시청처도 KBS, SBS, MBC, TV조선, SPOTV NOW, 치지직 여섯 곳입니다. 두 목록 어디에도 티빙이나 웨이브는 들어 있지 않습니다. 평소 드라마나 예능을 OTT로 보셨다면 아시안게임도 거기서 찾게 되지만, 이번 대회는 방송사가 직접 운영하는 페이지와 SPOTV NOW, 치지직으로 가셔야 합니다. 방송사 온에어는 TV 채널을 그대로 인터넷으로 보여 주는 곳이라, 편성표에 그 방송사가 적혀 있다면 휴대전화로도 같은 경기를 볼 수 있습니다. 예를 들어 9월 22일 남자 축구 사우디아라비아전은 KBS2가 중계해서 KBS 온에어의 KBS2 화면에서 보시면 됩니다. KBS 온에어 화면에는 생중계와 함께 지난 경기 다시보기도 날짜별로 올라와 있어서, 놓친 경기를 챙겨 보기에도 편합니다.',
      highlights: ['중계사 명단에는 티빙과 웨이브가 없습니다', '방송사 페이지와 SPOTV NOW, 치지직으로', '편성표에 적힌 방송사 온에어로 보면 된다', 'KBS 온에어에 지난 경기 다시보기도'],
      act: {
        cue: '티빙에서 못 찾으셨다면 방송사 온에어가 대신입니다. 9월 22일 축구 사우디아라비아전은 KBS2에서 합니다.',
        label: 'KBS2 온에어로 바로 보기',
        url: KBS2_ONAIR,
      },
      sourceNote: '* 출처: 문화일보(2026.9.18), Olympics.com 한국 선수단 시청 방법, 디지털 KBS·KBS 온에어 (2026-09-22 확인)',
    },
    {
      q: '무료로 보는 방법이 있나요?', anchor: 'q4',
      intro:
        'SPOTV NOW가 가장 분명합니다. SPOTV NOW 아시안게임 페이지의 중계 일정표를 보면 경기마다 중계 정보 칸에 무료와 한국어가 표시돼 있습니다. 9월 22일 일정만 봐도 18시 30분 야구 대한민국 대 홍콩, 19시 남자 축구 대한민국 대 사우디아라비아, 16시 여자 배구 동메달 결정전 대한민국 대 태국이 모두 무료로 올라 있습니다. SPOTV는 이 페이지에서 한국에서 2026 아이치·나고야 아시안게임 주요 종목 경기를 생중계 및 다시보기로 제공하는 공식 스포츠 중계 플랫폼이라고 소개하고 있습니다. 치지직도 아시안게임 페이지에서 방송사 채널을 볼 수 있는데, 치지직 첫 화면에는 네이버 멤버십 시작하고 아시안게임 고화질로 시청하세요라는 안내가 붙어 있습니다. 멤버십이 있으면 화질이 올라간다는 뜻이라, 화질을 따지지 않는다면 먼저 그냥 들어가 보셔도 됩니다. TV가 있다면 KBS·MBC·SBS 지상파 채널과 TV조선 채널에서 편성된 경기를 보시면 됩니다.',
      highlights: ['SPOTV NOW 일정표에 경기마다 무료 표시', '야구 홍콩전·축구 사우디전 모두 무료', '치지직은 네이버 멤버십이면 고화질', 'TV는 지상파와 TV조선 채널'],
      table: {
        caption: '9월 22일 SPOTV NOW 한국 경기 편성',
        headers: ['시각', '경기', '중계 정보'],
        rows: [
          ['16:00', '여자 배구 동메달 결정전 대한민국 vs 태국', '무료·한국어'],
          ['16:00', '여자 농구 조별리그 대한민국 vs 대만', '무료·한국어'],
          ['18:30', '야구 조별리그 대한민국 vs 홍콩', '무료·한국어'],
          ['19:00', '남자 축구 조별리그 대한민국 vs 사우디아라비아', '무료·한국어'],
        ],
      },
      act: {
        cue: '경기마다 무료 표시가 붙어 있으니, 보고 싶은 한국 경기를 골라 바로 들어가시면 됩니다.',
        label: 'SPOTV NOW 무료 중계 보기',
        url: SPOTV_NOW,
      },
      sourceNote: '* 출처: SPOTV NOW 아시안게임 중계 일정, 치지직 첫 화면 안내 (2026-09-22 확인)',
    },
  ],
  faqData: [
    {
      q: '같은 경기를 여러 채널에서 동시에 하나요?',
      a: '인기 경기는 그렇습니다. 9월 22일 남자 축구 사우디아라비아전은 KBS2, MBC, TV조선, SPOTV NOW가 모두 편성했습니다. 반면 하키 같은 종목은 한 채널만 맡는 경우가 있어 당일 편성표를 확인하셔야 합니다.',
      source: '디지털 KBS·MBC 보도자료·TV조선·SPOTV NOW 편성', sourceUrl: KBS,
    },
    {
      q: '치지직에서는 어떤 채널을 볼 수 있나요?',
      a: '치지직 아시안게임 페이지에는 아시안게임 KBS1, 아시안게임 MBC, 아시안게임 SBS 같은 방송사 인증 채널이 편성돼 있습니다. 치지직은 네이버 멤버십을 시작하면 고화질로 시청할 수 있다고 안내합니다.',
      source: '치지직 아시안게임 페이지', sourceUrl: CHZZK,
    },
  ],
  sources: [
    { name: '문화일보 — 「아시안게임은 골라본다」 지상파3사 등 모두 중계 (2026.9.18)', url: MUNHWA },
    { name: 'Olympics.com — 한국 선수단 경기 시청 방법', url: OLYMPICS_KOR },
    { name: '디지털 KBS — 아시안게임 주요 경기일정', url: KBS },
    { name: 'KBS 온에어 — KBS2', url: KBS2_ONAIR },
    { name: 'iMBC — 2026 아이치-나고야 아시안게임', url: MBC },
    { name: 'MBC — 아시안게임 3일 차 중계 일정 (2026.9.22)', url: MBC_PR },
    { name: 'SBS — 2026 나고야 아시안게임', url: SBS },
    { name: 'TV조선 — 아시안게임 생중계', url: TVCHOSUN },
    { name: 'SPOTV NOW — 아시안게임 중계 일정', url: SPOTV_NOW },
    { name: '치지직 — 2026 아시안게임', url: CHZZK },
    { name: '아시안게임 허브 — 전체 일정 보기', url: HUB },
  ],
};
