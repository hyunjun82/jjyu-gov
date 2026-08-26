/**
 * new-call-center.ts — 보험사 고객센터 스포크를 회사 JSON 하나로 찍어낸다.
 *
 * 왜 (2026-08-25 사장님 지시)
 *   "타이틀 대부분 비슷하고 연관검색어만 조금씩 다르다. 나머지는 고정,
 *    실제 보험사 색상 그 부분만 바꾸면 된다."
 *   맞다. 회사마다 손으로 쓰면 30개사에서 반드시 틀린다.
 *   실제로 손으로 만든 첫 템플릿에서 ARS 단축번호 3개가 틀렸다 —
 *   1번을 "사고접수"로 적었는데 공식은 "자동차 고장 긴급출동"이다.
 *   사고 나서 급하게 1번 누르면 엉뚱한 데로 간다.
 *
 * 쓰는 법
 *   npx tsx scripts/new-call-center.ts data/call-centers/db-insurance.json
 *
 * 만드는 것
 *   app/policy/[id]/[spoke]/content/보험고객센터/{slug}.tsx   (SpokeData · Format A)
 *   registry.ts + 허브 Spokes 배열 배선
 *
 * 안 만드는 것
 *   추출본(source-{slug}.txt)이 없으면 죽는다. 공식 페이지를 뜬 적이 없다는 뜻이다.
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();
const die = (m: string) => { console.error('❌ ' + m); process.exit(1); };

const specPath = process.argv[2];
if (!specPath) die('회사 JSON 경로를 준다: npx tsx scripts/new-call-center.ts data/call-centers/{회사}.json');
if (!fs.existsSync(specPath)) die(`파일이 없다: ${specPath}`);

const C = JSON.parse(fs.readFileSync(specPath, 'utf8'));

/* ── 있어야 하는 것부터 본다. 없으면 만들지 않는다 ── */
/* hq(본사 주소)는 필수가 아니다. 고객센터 페이지에서 사람이 찾는 건 번호·시간·ARS 이고
   본사 주소는 곁가지다. 주소 하나 때문에 페이지를 못 찍으면 순서가 뒤집힌 것이다.
   주소가 있으면 카드로 보여주고, 없으면 지도 검색으로 넘긴다. */
for (const k of ['slug', 'name', 'brandColor', 'official', 'sourceUrl', 'verifiedAt', 'main', 'hours', 'ars', 'numbers']) {
  if (!C[k]) die(`JSON 에 ${k} 가 없다`);
}

const SPOKE_SLUG = `${C.slug}-call-center`;
const SRC_FILE = path.join('scripts', 'output', `source-${SPOKE_SLUG}.txt`);
if (!fs.existsSync(path.join(ROOT, SRC_FILE)))
  die(`추출본이 없다: ${SRC_FILE.split(path.sep).join('/')}\n   먼저: npx tsx scripts/capture-source.ts ${SPOKE_SLUG} "${C.sourceUrl}" "${C.official}"`);

/* 추출본에 그 번호가 실제로 있는지 — 없는 번호를 글에 쓰면 사람이 잘못 건다 */
const src = fs.readFileSync(path.join(ROOT, SRC_FILE), 'utf8').replace(/\s+/g, '');
/* 번호는 숫자만 보고 맞춘다 (2026-08-26 AIG손해보험).
   AIG 는 공식 페이지에 "1544.2792" 로 점을 찍어 쓴다. 하이픈 문자열로 찾으면
   원문에 버젓이 있는 번호를 "추출본에 없다"고 판정해 회사를 통째로 버린다.
   게이트(check-callcenter)도 숫자만 본다 — 여기만 더 빡빡하면 안 맞는다. */
const digits = (x: string) => String(x).replace(/[^0-9]/g, '');
const srcDigits = digits(src);
const missing = (C.numbers as any[]).map((n) => n.tel).filter((t: string) => !srcDigits.includes(digits(t)));
if (missing.length) die(`추출본에 없는 번호 ${missing.length}개: ${missing.join(', ')}\n   공식 페이지에서 확인되지 않은 번호는 쓰지 않는다.`);

/* ── 번호만 보던 걸 셋으로 늘린다 (2026-08-25) ──
   지금까지 게이트는 numbers 만 대조했다. ARS 메뉴와 운영시간은 아무도 안 봤다.
   사람이 채우든 검색 에이전트가 채우든, 안 보는 칸에서 틀린다.
   셋 다 추출본에 있어야 통과한다. */

// ① 출처가 공식 도메인인가 — 블로그를 1차 출처로 쓰면 여기서 죽는다
const hostOf = (u: string) => String(u).replace(/^https?:\/\//, '').split('/')[0].replace(/^www\./, '');
const officialHost = hostOf(C.official);
const srcHost = hostOf(C.sourceUrl);
if (!srcHost.endsWith(officialHost))
  die(`sourceUrl 이 공식 도메인이 아니다: ${srcHost} (공식 ${officialHost})
   블로그·언론은 1차 출처가 아니다.`);

// ② ARS 메뉴 문구가 추출본에 있는가
const arsAll = [...(C.ars.day ?? []), ...(C.ars.night ?? [])] as any[];
const arsMissing = arsAll.filter((a) => !src.includes(String(a.what).replace(/\s+/g, '')));
if (arsMissing.length)
  die(`추출본에 없는 ARS 문구 ${arsMissing.length}개: ${arsMissing.map((a) => a.key + '번 ' + a.what).join(' / ')}
   ARS 는 잘못 안내하면 사람이 엉뚱한 메뉴를 누른다.`);

// ③ 운영시간의 숫자가 추출본에 있는가 (표기는 달라도 시각은 같아야 한다)
for (const [k, v] of Object.entries(C.hours as Record<string, string>)) {
  if (!v) continue;
  const nums = String(v).match(/\d{1,2}:\d{2}|\d{1,2}시|\d+일|\d+시간/g) ?? [];
  const gone = nums.filter((n) => !src.includes(n.replace(/\s+/g, '')));
  if (gone.length) die(`hours.${k} 의 ${gone.join(', ')} 가 추출본에 없다: "${v}"`);
}

/* 업종 — 보험사만 있던 걸 증권사·카드사까지 열어 둔다.
   회사 JSON 의 industry 로 고르고, 없으면 지금까지처럼 보험사다.
   여기를 못박아 두면 업종이 늘 때마다 이 파일을 복사하게 된다. */
const INDUSTRY: Record<string, { hub: string; dir: string; word: string; labels: string[]; jobs: string; remote: string; q5q: string; q5a: string; h1: (n: string) => string; night: string; goods: string; offhour: string; offhourLong: string; agent: string; heroLead: string; dayNote: string }> = {
  insurance: {
    hub: 'insurance-call-center',
    dir: '보험고객센터',
    word: '보험사',
    labels: ['보험사 번호 모아보기', '다른 보험사 번호 보기', '보험사별 고객센터 목록', '보험사 전체 목록 열기'],
    jobs: '보험금 청구, 계약 조회·변경, 사고접수',
    remote: '보험금 청구나 계약 변경',
    q5q: '다른 보험사 고객센터 번호도 필요한데요',
    q5a: '보험은 한 곳만 들지 않습니다. 자동차는 이쪽, 실손은 저쪽인 경우가 흔해서 사고 한 번에 두세 곳에 전화하게 됩니다.',
    h1: (n: string) => `${n} 고객센터 전화번호 및 빠른 상담사 연결·위치 안내`,
    /* 메타 디스크립션의 야간 설명 — 업종마다 야간에 도는 창구가 다르다.
       2026-08-26 까지 증권사 19곳에도 보험 문구(사고접수·긴급출동)가 들어가 있었다. */
    night: '야간·공휴일에는 사고접수·긴급출동만 접수됩니다',
    goods: '업무별 번호',
    /* 야간에 도는 창구 이름 — 보험은 사고접수, 증권은 야간 데스크다.
       이 말이 안 갈려서 증권사 19곳에 "자동차 긴급출동"이 들어갔었다(2026-08-26). */
    offhour: '사고접수·긴급출동',
    offhourLong: '자동차 사고접수와 긴급출동을 받습니다',
    agent: '상담사',
    heroLead: '사고접수는 야간·공휴일에도 가능합니다',
    dayNote: '계약 조회·변경과 보험금 청구는 평일 상담시간에 거는 편이 빠릅니다.',
  },
  securities: {
    hub: 'securities-call-center',
    dir: '증권고객센터',
    word: '증권사',
    labels: ['증권사 번호 모아보기', '다른 증권사 번호 보기', '증권사별 고객센터 목록', '증권사 전체 목록 열기'],
    jobs: '계좌 개설, 주문·체결 문의, 입출금',
    remote: '계좌 개설이나 비밀번호 초기화',
    q5q: '다른 증권사 고객센터 번호도 필요한데요',
    q5a: '증권 계좌는 한 곳만 쓰지 않습니다. 국내는 이쪽, 해외주식은 저쪽으로 나눠 쓰는 경우가 흔해서 장중에 두 곳에 전화하게 됩니다.',
    /* 2026-08-26 사장님 확정 — 채용·연봉은 버리고 전화번호·상담시간·상담원 연결로 간다 */
    h1: (n: string) => `${n} 고객센터 전화번호와 상담시간, 상담원 연결`,
    night: '상담시간이 지나면 해외주식·야간 데스크가 따로 있습니다',
    goods: '주문·해외주식 등 업무별 번호',
    offhour: '주문접수·야간 데스크',
    offhourLong: '해외주식 주문과 야간 데스크 업무를 받습니다',
    agent: '상담원',
    heroLead: '상담시간이 지나면 야간 데스크로 갈립니다',
    dayNote: '계좌 개설과 입출금·이체 문의는 평일 상담시간에 거는 편이 빠릅니다.',
  },
};
const IND = INDUSTRY[C.industry ?? 'insurance'];
if (!IND) die(`모르는 industry: ${C.industry} (쓸 수 있는 값: ${Object.keys(INDUSTRY).join(', ')})`);

const HUB_SLUG = IND.hub;
const DIR = path.join('app', 'policy', '[id]', '[spoke]', 'content', IND.dir);
const OUT = path.join(DIR, `${C.slug}.tsx`);
const REG = path.join('data', 'spokes', 'registry.ts');

const q = (s: string) => String(s).replace(/'/g, "\\'");
const NL = String.fromCharCode(10);
const telHref = (t: string) => `tel:${String(t).replace(/-/g, '')}`;
/* 회사명으로 검색하면 전국 지점 목록이 뜬다. 본사 도로명 주소로 걸어야
   그 건물에 핀이 꽂힌다(괄호 안 건물명은 뗀다). 화면도 같은 규칙을 쓴다. */
const mapUrl = `https://map.naver.com/p/search/${encodeURIComponent(C.hq ? String(C.hq).replace(/\(.*$/, '').trim() : C.name)}`;

const arsRow = (a: any[]) => a.map((x) => `['${q(x.key)}번', '${q(x.what)}']`).join(', ');
const numRow = (n: any) => `['${q(n.label)}', '${q(n.tel)}', '${q(n.note ?? '-')}']`;

const exportName = `${C.slug.replace(/-([a-z])/g, (_m, c) => c.toUpperCase())}CallCenterSpokeContent`;
const day = C.ars.day as any[];
const night = C.ars.night as any[];
const agent = day.find((x) => /상담사|상담원/.test(x.what));
/* 점심시간 — 검색은 많이 되는데 공식 안내에 없는 경우가 많다.
   없으면 "표기 없음"이 사실이다. 있으면 사람이 JSON 에 적어야 한다(문장이 회사마다 다르다). */
const lunchInSrc = /점심|중식/.test(src);
if (lunchInSrc && !C.hours.lunch) {
  die('원문에 점심시간 언급이 있다. data/call-centers/' + C.slug + '.json 의 hours.lunch 에 원문 그대로 적고 다시 돌려라.');
}
const LUNCH = C.hours.lunch ?? '공식 안내에 점심 휴무 표기 없음';

/* 조사·시간문구 — 값이 회사마다 달라서 문장에 그대로 박으면 반드시 틀어진다. (2026-08-26)
   전에는 "${hours.night}과 ${hours.holiday}에는 ${offhour} 위주로 돌아갑니다" 한 틀로 찍었다.
   50편 전부에서 터졌다: "상담 불가과", "상담원가 받고", "18시 ~ 09시과",
   "콜센터 운영 시간 : 평일 9시…에는"(원문 라벨째), 야간=공휴일이 같은 회사는 같은 문구 2번.
   제일 무거운 건 왜곡이다 — 상담이 닫힌 시간을 "돌아갑니다"라 쓰고,
   조회·납입·시스템점검 시간을 "사고접수 위주"라고 단정했다. 원문에 없는 말이다. */
const JONG_NUM: Record<string, boolean> = { '0': true, '1': true, '2': false, '3': true, '4': false, '5': false, '6': true, '7': true, '8': true, '9': false };
const jong = (w: string): boolean => {
  const m = String(w).replace(/[)\]\s"'’」』.,]+$/, '').match(/[가-힣0-9a-zA-Z]$/);
  if (!m) return false;
  const ch = m[0];
  if (/[0-9]/.test(ch)) return JONG_NUM[ch];
  const c = ch.charCodeAt(0);
  if (c >= 0xac00 && c <= 0xd7a3) return (c - 0xac00) % 28 !== 0;
  return /[lmnr]$/i.test(ch);
};
const rieul = (w: string): boolean => {
  const m = String(w).replace(/[)\]\s"'’」』.,]+$/, '').match(/[가-힣0-9]$/);
  if (!m) return false;
  if (/[0-9]/.test(m[0])) return m[0] === '1' || m[0] === '7' || m[0] === '8';
  const c = m[0].charCodeAt(0);
  return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 === 8;
};
const josa = (w: string, pair: '과' | '이' | '은' | '을' | '으로'): string => {
  if (pair === '으로') return !jong(w) || rieul(w) ? '로' : '으로';
  return jong(w) ? pair : ({ 과: '와', 이: '가', 은: '는', 을: '를' } as const)[pair];
};

/* 원문 라벨을 값에 같이 적어 둔 회사가 많다 — "콜센터 운영 시간 : 평일 9시 ~ 18시".
   JSON 은 원문 그대로 두는 게 맞다(keyFacts·게이트가 원문을 본다). 문장에 넣을 때만 벗긴다. */
const hoursText = (v: unknown): string => String(v ?? '')
  .replace(/^[^0-9,·]{0,20}[:：]\s*/, '')   // "콜센터 운영 시간 : " 같은 짧은 라벨만 벗긴다
  .replace(/\s*[:：]\s+/g, ' ')             // 앞말이 길면 그건 내용이다 — 콜론만 없앤다
  .replace(/평\s+일/g, '평일')               // 원문 공백 오타 ("평 일 09:00")
  .replace(/^단,\s*/, '')                   // 원문 각주 조각 ("단, 18:00~20:00 …")
  .replace(/\s{2,}/g, ' ')
  .trim();

const HW = hoursText(C.hours.weekday);
/* 상담시간을 아예 안 적는 회사가 있다 (카디프생명·증권사 13곳).
   시각이 하나도 없으면 "이 시간을 벗어나면" 같은 말이 성립하지 않는다.
   경쟁사는 이런 곳에 임의로 09:00-18:00 을 적는다 — 그게 제일 위험하다. */
const NO_HOURS = !/[0-9]/.test(HW);
const closedHours = (v: string) => /불가|휴무|미운영|운영하지|받지\s*않|하지\s*않|쉽니다/.test(v);
/* "토, 공휴일 제외" 처럼 시간이 아니라 단서만 적힌 값이 있다.
   문장에 넣으면 "토, 공휴일 제외에는 주문접수 위주로 돌아갑니다" 가 된다 — 뜻이 뒤집힌다. */
const noteOnly = (v: string) => !/[0-9]/.test(v);
/* 조회·납입·이체 시간을 "사고접수 위주" 라고 쓰면 원문에 없는 말을 지어내는 것이다.
   한화생명 야간이 "출금·입금·보험료 납입 07:00 ~ 23:30" 인데 사고접수라고 나갔었다. */
const nonOffWork = (v: string) => /조회|납입|출금|입금|이체|송금|대체|대출|점검|환급|가입|납부|정보변경/.test(v);
/* "365일 24시간" 만으로는 사고접수라 단정할 수 없다 — 건보공단 야간은 디지털ARS·셀프서비스다.
   업무 이름이 값에 실제로 적혀 있을 때만 그 업무라고 쓴다. */
const offhourish = (v: string) => !nonOffWork(v) && /사고|출동|접수|데스크|주문|긴급/.test(v);

/* 닫힌 시간은 빼고, 같은 문구는 한 번만 쓴다 */
const OFF: string[] = [];
for (const v of [hoursText(C.hours.night), hoursText(C.hours.holiday)]) {
  if (v && !closedHours(v) && !noteOnly(v) && !OFF.includes(v)) OFF.push(v);
}

/* 값이 시간구가 아니라 문장인 회사가 있다 — "24시간 가능합니다", "콜백서비스는 24시간 상시운영 됩니다".
   여기에 조사를 붙이면 "24시간 가능합니다에는 주문접수 위주로 돌아갑니다" 가 된다.
   문장은 문장대로 따로 세운다. 원문 표현을 줄이면 뜻이 바뀌니 그대로 인용한다. */
const isSentence = (v: string) => /(다|요)\.?$/.test(v.trim());
const PH = OFF.filter((v) => !isSentence(v));   // 시간구 — 조사를 붙여도 되는 것
const SE = OFF.filter(isSentence);              // 문장 — 따로 세울 것

const OFF_TXT = PH.length === 2 ? `${PH[0]}${josa(PH[0], '과')} ${PH[1]}` : (PH[0] ?? '');
const OFF_OPEN = PH.length > 0 && PH.some(offhourish);
/* 값에 이미 들어 있는 말을 뒤에서 또 한다 —
   "사고접수·긴급출동 365일 24시간에는 사고접수·긴급출동 위주로 돌아갑니다" */
const OFF_DUP = OFF_OPEN && IND.offhour.split('·').every((w) => OFF_TXT.includes(w));

const dot = (s: string) => (/[.]$/.test(s.trim()) ? s.trim() : s.trim() + '.');
const SE_TXT = SE.length ? `공식 안내에는 그 밖의 시간을 "${SE.map((s) => s.replace(/[.]$/, '')).join(' / ')}" 로 적어 두었습니다.` : '';

const OFF_CLAUSE = !OFF_TXT ? ''
  : OFF_DUP ? dot(`${OFF_TXT}${josa(OFF_TXT, '은')} 따로 돌아갑니다`)
  : OFF_OPEN ? dot(`${OFF_TXT}에는 ${IND.offhour} 위주로 돌아갑니다`)
  : dot(`${OFF_TXT}${josa(OFF_TXT, '은')} 따로 안내돼 있습니다`);

/* 서론 끝 문장 — 업종 고정값(IND.heroLead)이었다. (2026-08-26 사장님 지적)
   보험사 26곳 전부에 "사고접수는 야간·공휴일에도 가능합니다" 가 박혔는데,
   삼성생명 야간은 "상담사 연결 불가"고 건보공단 야간은 디지털ARS·셀프서비스다.
   화면 맨 위에 뜨는 문장이라 여기가 틀리면 페이지 전체가 틀린 말이 된다.
   회사 hours 에서 만든다 — 단정할 근거가 없으면 단정하지 않는다. */
const LEAD = NO_HOURS
  ? `공식 안내에 상담 가능 시간이 따로 표기돼 있지 않습니다`
  : OFF.length === 0
  ? `이 시간을 벗어나면 ${IND.agent} 연결이 안 됩니다`
  : OFF_OPEN
    ? `${IND.offhour}는 야간·공휴일에도 접수됩니다`
    : '야간·공휴일 운영은 공식 안내에 따로 적혀 있습니다';
const META_NIGHT = NO_HOURS
  ? '공식 안내에 상담 가능 시간 표기 없음'
  : OFF.length === 0
  ? `${IND.agent} 연결은 이 시간 안에서만 됩니다`
  : OFF_OPEN
    ? `야간·공휴일에는 ${IND.offhour} 중심으로 접수됩니다`
    : '야간·공휴일 운영은 공식 안내 표기 기준';

/* 화면 "자주 찾는 문의" 아래 박스 — 이 문장은 components/CallCenterPage.tsx 에
   "{night} 과 {holiday} 에는 사고접수·긴급출동 위주로 돌아갑니다" 로 박혀 있었다.
   SpokeClient 주석이 이미 경고한 그대로다 — 코드에 문장을 박으면 전 스포크가 같아진다.
   건보공단 야간은 디지털ARS·셀프서비스인데 사고접수라고 떴다(2026-08-26 사장님 캡처). */
const OFFHOUR_NOTE = `${NO_HOURS
  ? `${C.name} 공식 안내에는 상담 가능 시간이 적혀 있지 않습니다. 임의로 짐작해 적지 않으니, 통화 전 공식 홈페이지에서 한 번 더 확인하세요.`
  : OFF.length === 0
  ? `공식 안내 기준으로 ${HW}${josa(HW, '을')} 벗어나면 ${IND.agent} 연결이 안 됩니다.`
  : [OFF_CLAUSE, SE_TXT].filter(Boolean).join(' ')}${NO_HOURS ? '' : ' ' + IND.dayNote}`;

/* 서론 첫 문장 — 시간 표기가 없는 회사는 "운영시간은 …표기 없음이며 …표기돼 있지 않습니다" 로
   같은 말을 두 번 하게 된다. 절 자체를 뺀다. */
const INTRO_FACT = NO_HOURS
  ? `${C.name} 고객센터 대표번호는 ${C.main.tel}입니다. ${LEAD}`
  : `${C.name} 고객센터 대표번호는 ${C.main.tel}, 상담 운영시간은 ${C.hours.weekday}이며 ${LEAD}`;

const HOOK_TIME = NO_HOURS
  ? `공식 안내에 상담 가능 시간이 적혀 있지 않습니다.`
  : OFF.length === 0
  ? `${HW}에는 ${IND.agent}${josa(IND.agent, '이')} 받고, 그 밖의 시간에는 ${IND.agent} 연결이 안 됩니다.`
  : `${HW}에는 ${IND.agent}${josa(IND.agent, '이')} 받고, ${[OFF_CLAUSE, SE_TXT].filter(Boolean).join(' ')}`;

const Q3_INTRO = NO_HOURS
  ? `${C.name} 공식 안내에는 ${IND.agent} 상담 가능 시간이 표기돼 있지 않습니다. 다른 곳에서 본 시간을 옮겨 적으면 헛걸음이 되므로, 여기서는 없는 시간을 만들어 쓰지 않습니다. 대표번호로 걸어 ARS 안내를 듣는 편이 가장 확실합니다.`
  : OFF_OPEN
  ? `${IND.agent} 상담은 ${HW}입니다. 그 밖의 시간이 완전히 닫히는 건 아닙니다. ${OFF_TXT}에는 별도 ARS 가 돌아가서 ${IND.offhourLong} 아래가 야간·휴일에 눌러야 하는 번호입니다. 주간과 번호가 다르니 그대로 누르면 엉뚱한 곳으로 갑니다.`
  : OFF.length > 0
    ? `${IND.agent} 상담은 ${HW}입니다. ${[OFF_CLAUSE, SE_TXT].filter(Boolean).join(' ')} 다만 이 시간에 ${IND.agent} 연결까지 되는지는 공식 안내에 없으니, 상담이 필요하면 ${HW} 안에 거시는 편이 확실합니다.`
    : `${IND.agent} 상담은 ${HW}입니다. 공식 안내 기준으로 이 시간을 벗어나면 ${IND.agent} 연결이 안 됩니다. 야간·공휴일 운영 표기가 따로 없으니, 급한 용건도 ${HW} 안에 거셔야 합니다.`;

const FAQ_HOURS = NO_HOURS
  ? `${C.name} 공식 안내에는 상담 가능 시간이 적혀 있지 않습니다. 통화 전 공식 홈페이지에서 확인하시는 편이 확실합니다.`
  : OFF_OPEN
  ? `${IND.agent} 상담은 ${HW}입니다. ${OFF_TXT}에는 ${IND.offhour} 중심의 ARS 가 운영됩니다.`
  : OFF.length > 0
    ? `${IND.agent} 상담은 ${HW}입니다. ${[OFF_CLAUSE, SE_TXT].filter(Boolean).join(' ')}`
    : `${IND.agent} 상담은 ${HW}입니다. 공식 안내에 야간·공휴일 운영 표기가 없어, 이 시간을 벗어나면 연결되지 않습니다.`;


/* ARS 단축번호가 공개되지 않은 회사가 있다 — 구성도를 이미지로만 올리는 곳,
   메뉴 이름만 적고 번호를 안 적는 곳(하나손보·흥국생명).
   번호를 순서로 추정하면 사람이 엉뚱한 메뉴를 누른다. 없으면 없다고 쓴다. */
const HAS_ARS = day.length > 0;
/* 원문이 "0 상담사 연결" 처럼 '번' 없이 적는 곳이 많다.
   글에 "0번" 이라고 쓰면 원문 대조 게이트가 추출본에 없는 숫자로 잡는다.
   게이트가 맞다 — 원문에 없는 표기를 만들어 쓰는 것이다. 있을 때만 쓴다. */
const AGENT_KEY = agent ? agent.key : (HAS_ARS ? '0' : '');
const KEY_OK = HAS_ARS && src.includes(`${AGENT_KEY}번`);

/* 버튼·cue 를 회사마다 다른 결로 쓴다 (2026-08-25).
   23곳을 한 틀로 찍었더니 상단 버튼 끝 어절 "걸기" 가 100%, cue 가 23번 같은 문장이었다.
   게이트가 막았고, 막는 게 맞다 — 찍어낸 티가 나면 사람이 안 누른다.
   회사 slug 로 고른다. 같은 회사는 항상 같은 문구가 나와 재생성해도 안 흔들린다. */
const pick = <T,>(arr: T[]): T => {
  let h = 0;
  for (const ch of String(C.slug)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return arr[h % arr.length];
};

/* 끝 어절이 겹치면 게이트가 막는다 — 상한 40%.
   전에는 6개 풀에 "통화"로 끝나는 게 2개라, 24곳을 돌리니 42%가 됐다.
   풀을 늘리는 게 아니라 "끝 어절을 전부 다르게" 만들어야 확률이 몰리지 않는다. */
const HERO_LABELS = [
  `${C.main.tel} 전화 걸기`,
  `${C.main.tel} 지금 연결하기`,
  `${C.main.tel} 바로 통화`,
  `${C.main.tel} 상담 연결`,
  `${C.main.tel} 로 문의하기`,
  `${C.main.tel} 눌러서 걸기`,
  `${C.main.tel} 통화 시작`,
  `${C.main.tel} 상담 신청`,
  `${C.main.tel} 연결 요청`,
  `${C.main.tel} 바로 접수`,
  `${C.main.tel} 지금 문의`,
  `${C.main.tel} 상담 받기`,
];

/* cue 는 풀에서 고르지 않는다. 6개 풀로 23곳을 돌리면 같은 문장이 8번 나온다.
   그 회사의 사실(번호 개수·본사 유무·야간 운영)에서 문장을 만들면 자연히 갈린다.
   회사가 늘어도 겹치지 않는다 — 사실이 회사마다 다르기 때문이다. */
const hqShort = C.hq ? String(C.hq).replace(/\(.*$/, '').trim().split(/\s+/).slice(0, 3).join(' ') : '';
const nightOpen = /24시간|365일/.test(`${C.hours.night} ${C.hours.holiday}`);

/* 끝 어절까지 갈려야 한다 — 같은 맺음이 넷 중 하나를 넘으면 게이트가 막는다.
   앞 문장은 회사 사실에서, 맺음은 slug 로 고른다. */
const MAP_TAILS = [
  '거기까지 가실 일은 많지 않습니다.',
  '창구에서만 되는 일이 아니면 안 가셔도 됩니다.',
  '헛걸음하지 않게 위치부터 짚고 나서시죠.',
  '가시기 전에 문 여는 시간을 같이 보세요.',
  '가까운 곳이 어디인지부터 확인하는 편이 빠릅니다.',
];
const MAP_CUE = C.hq
  ? `${C.name} 본사는 ${hqShort} 쪽입니다. ${pick(MAP_TAILS)}`
  : `${C.name}은 공식 안내에 지점 주소를 따로 걸어두지 않습니다. ${pick(MAP_TAILS)}`;
const MAP_LABELS = ['가까운 지점 찾기', '지점 위치 확인하기', '지도에서 위치 보기', '가까운 창구 찾아보기'];

const HUB_TAILS = [
  `다른 ${IND.word}는 몇 시까지인지 함께 확인해 두세요.`,
  '회사마다 갈리니 한자리에서 비교해 보세요.',
  '가입한 곳이 여럿이면 미리 봐 두는 게 낫습니다.',
  '급할 때 다시 찾지 않게 목록을 열어 두시죠.',
  '어디가 지금 받는지는 목록에서 바로 갈립니다.',
];
const HUB_CUE = nightOpen
  ? `${C.name}은 야간에도 접수를 받지만 회사마다 이게 다릅니다. ${pick(HUB_TAILS)}`
  : `${C.name} 상담은 ${String(C.hours.weekday).replace(/^[^0-9]*/, '').slice(0, 20)} 안에서만 됩니다. ${pick(HUB_TAILS)}`;
const HUB_LABELS = IND.labels;
const ARS_FACT = KEY_OK ? `ARS 에서 ${AGENT_KEY}번` : (HAS_ARS ? `ARS 안내에서 ${IND.agent} 연결 선택` : '공식 안내에 ARS 단축번호 미공개');
const ARS_HL = KEY_OK ? `'${AGENT_KEY}번'` : `'${IND.agent} 연결'`;
const ARS_META = KEY_OK
  ? `${IND.agent} 연결은 ARS ${AGENT_KEY}번. `
  : '';
const ARS_HOOK = KEY_OK
  ? `다만 그냥 걸면 ARS 안내가 길게 이어져서, ${IND.agent} 목소리를 들으려면 ${AGENT_KEY}번을 눌러야 합니다. `
  : '다만 공식 안내에 ARS 단축번호가 공개돼 있지 않아, 안내 음성을 듣고 해당 항목을 고르셔야 합니다. ';
const ARS_Q2 = KEY_OK
  ? `ARS 안내가 나오면 ${AGENT_KEY}번을 누릅니다. 그러면 순번 대기 후 ${IND.agent}에게 연결됩니다.`
  : `${q(C.name)} 공식 안내는 ${IND.agent} 연결 항목을 번호와 함께 표기하지 않습니다. 안내 음성을 끝까지 듣고 ${IND.agent} 연결 항목을 고르시면 됩니다.`;
const ARS_FAQ = KEY_OK
  ? `ARS 안내에서 ${AGENT_KEY}번을 누르면 순번 대기 후 ${IND.agent}에게 연결됩니다.`
  : `공식 안내에 ARS 단축번호가 나와 있지 않습니다. 안내 음성에 따라 ${IND.agent} 연결 항목을 고르세요.`;
/* 핵심콕콕의 본사 행 — 주소가 있을 때만 한 줄 만든다.
   출력 문자열 안에 조건문을 그대로 두면 생성된 파일에 코드가 박힌다. */
const HQ_FACT = C.hq ? `    '본사': '${q(C.hq)}${C.hqZip ? ` (우 ${C.hqZip})` : ''}',
` : '';

const file = `import type { SpokeData } from '../../SpokeClient';

/* 추출본: ${SRC_FILE.split(path.sep).join('/')}
 * 1차 출처: ${q(C.sourceName ?? C.name + ' 공식')} (${C.sourceUrl})
 * 확인일: ${C.verifiedAt}
 *
 * 이 파일은 scripts/new-call-center.ts 가 ${path.basename(specPath)} 로 찍어낸다.
 * 손으로 고치지 말고 JSON 을 고친 뒤 다시 돌린다 — 손으로 쓰면 ARS 번호가 틀린다.
 *
 * 쓰지 않는 것: 공식 페이지에 없는 번호·시간. 생성기가 추출본과 대조해 막는다.
 */

const TEL = '${telHref(C.main.tel)}';
const OFFICIAL = '${C.official}';
const MAP = '${mapUrl}';
const HUB = '/policy/${HUB_SLUG}';

export const ${exportName}: SpokeData = {
  h1: '${q(IND.h1(C.name))}',
  breadcrumb: '${q(C.name)} 고객센터',
  description:
    '${q(INTRO_FACT)}. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, ${q(IND.agent)} 연결 순서·부가 번호·고객센터 위치도 함께 확인할 수 있습니다.',
  datePublished: '${C.verifiedAt}T09:00:00+09:00',
  /* 검색결과에 뜰 문장 — 앞 150자 안에 사실을 몰아넣는다.
     서론(description)은 읽히려고 쓴 문장이라 앞부분이 인사말로 채워진다.
     검색은 첫 줄에서 갈리므로 번호·시간·ARS 번호를 앞에 세운다. */
  metaDescription:
    '${q(C.name)} 고객센터 전화번호 ${C.main.tel}. ${ARS_META}상담시간 ${q(C.hours.weekday)}, ${q(META_NIGHT)}. ${q(IND.goods)} ${C.numbers.length}개와 상담원 연결 방법까지 ${C.verifiedAt} 공식 안내 기준.',
  dateModified: '${C.verifiedAt}T09:00:00+09:00',

  heroHook:
    '${q(INTRO_FACT)}. 아래 대표번호 버튼을 누르면 바로 전화가 연결되고, ${q(IND.agent)} 연결 순서·부가 번호·고객센터 위치도 함께 확인할 수 있습니다.',
  heroAct: { label: '${q(pick(HERO_LABELS))}', href: TEL },

  keyFacts: {
    '대표번호': '${C.main.tel} (${q(C.main.label)})',
    '상담 가능 시간': '${q(C.hours.weekday)}',
    '야간': '${q(C.hours.night)}',
    '공휴일': '${q(C.hours.holiday)}',
    '${q(IND.agent)} 연결': '${ARS_FACT}',
${HQ_FACT}    '통화료': '${q(C.callFee ?? '통화료는 발신자 요금제 기준으로 부과됩니다.')}',
  },
  keyFactsHighlights: {
    '대표번호': ['${C.main.tel}'],
    '상담 가능 시간': ['${q(C.hours.weekday)}'],
    '${q(IND.agent)} 연결': [${ARS_HL}],
  },

  qa: [
    {
      q: '${q(C.name)} 고객센터 전화번호 몇 번인가요?', anchor: 'q1',
      intro:
        '대표번호는 ${C.main.tel}입니다. ${IND.jobs}까지 이 번호 하나로 들어갑니다. 다만 용건이 정해져 있으면 전용번호로 거는 편이 빠릅니다. 대표번호는 ARS 를 거치지만 전용번호는 담당 부서로 바로 연결되기 때문입니다. ${C.verifiedAt} 기준 공식 안내에 올라와 있는 번호는 아래 ${C.numbers.length}개입니다.',
      highlights: ['${C.main.tel}', '대표번호', '전용번호'],
      table: {
        headers: ['구분', '번호', '비고'],
        rows: [${(C.numbers as any[]).map(numRow).join(', ')}],
      },
      sourceNote: '* 출처: ${q(C.sourceName ?? C.name)} (${C.verifiedAt} 확인)',
    },
    {
      q: '${q(IND.agent)}와 바로 연결하려면 몇 번 누르나요?', anchor: 'q2',
      intro:
        '${ARS_Q2} 다만 이건 ${q(HW)}에만 됩니다. 그 시간을 벗어나면 ${q(IND.agent)} 연결 항목 자체가 없고 ${q(IND.offhour)} 같은 접수 기능만 돌아갑니다. 아래는 시간대별로 번호가 어떻게 갈리는지 정리한 것입니다.',
      highlights: [${ARS_HL}, '${q(C.hours.weekday)}'],
      table: {
        headers: ['번호', '평일 주간 (${q(C.hours.weekday)})'],
        rows: [${arsRow(day)}],
      },
      box: {
        label: '대기를 줄이는 법',
        content: '문의를 한 문장으로 정리해 두면 부서 이관 횟수가 줄어듭니다. 계약자 본인이 아니면 위임 확인 절차가 더 붙으니, 계약자 주민번호·증권번호를 미리 꺼내 두는 편이 빠릅니다.',
      },
      sourceNote: '* 출처: ${q(C.sourceName ?? C.name)} (${C.verifiedAt} 확인)',
    },
    {
      q: '고객센터 영업시간·운영시간은 어떻게 되나요?', anchor: 'q3',
      intro:
        '${q(Q3_INTRO)}',
      highlights: ['${q(C.hours.weekday)}', '${q(C.hours.night)}', '${q(C.hours.holiday)}'],
      table: {
        headers: ['번호', '야간·휴일 (${q(C.hours.night)} / ${q(C.hours.holiday)})'],
        rows: [${arsRow(night)}],
      },
      box: {
        label: '통화료',
        content: '${q(C.callFee ?? '통화료는 발신자 요금제 기준으로 부과됩니다.')}',
      },
      sourceNote: '* 출처: ${q(C.sourceName ?? C.name)} (${C.verifiedAt} 확인)',
    },
    {
      q: '${q(C.name)} 고객센터 위치는 어디인가요?', anchor: 'q4',
      intro:
        '${C.hq ? `본사는 ${q(C.hq)}에 있습니다. ` : ''}다만 ${IND.remote}은 방문하지 않아도 전화·앱·홈페이지로 끝나는 일이 많습니다. 서류 원본을 내야 하거나 대면 상담이 필요할 때만 움직이시는 편이 낫습니다. 방문하실 거라면 집에서 가까운 지점을 먼저 찾아보세요. 지도에서 회사명으로 검색하면 가까운 순으로 나옵니다.',
      highlights: [${C.hq ? `'${q(C.hq)}'` : `'가까운 지점'`}],
      act: {
        cue: '${q(MAP_CUE)}',
        label: '${q(pick(MAP_LABELS))}',
        url: MAP,
      },
      sourceNote: '* 출처: ${q(C.corp ?? C.name)} 사업자 정보 (${C.verifiedAt} 확인)',
    },
    {
      q: '${IND.q5q}', anchor: 'q5',
      intro:
        '${IND.q5a} 회사마다 대표번호도 다르고 ${q(IND.agent)} 연결 번호도 다릅니다. ${IND.word}별 고객센터 번호를 한자리에 모아 뒀으니 필요한 곳을 바로 찾으시면 됩니다.',
      highlights: ['${IND.word}별', '대표번호'],
      act: {
        cue: '${q(HUB_CUE)}',
        label: '${q(pick(HUB_LABELS))}',
        url: HUB,
      },
      sourceNote: '* 출처: 각 ${IND.word} 공식 고객센터 안내',
    },
  ],

  faqData: [
    {
      q: '${q(C.name)} 고객센터 전화번호는 몇 번인가요?',
      a: '대표번호는 ${C.main.tel}입니다. (${C.verifiedAt} 확인 기준)',
      source: '${q(C.sourceName ?? C.name)}',
      sourceUrl: '${C.sourceUrl}',
    },
    {
      q: '${q(IND.agent)}와 바로 통화하려면 어떻게 하나요?',
      a: '${ARS_FAQ} ${q(HW)}에만 가능합니다.',
      source: '${q(C.sourceName ?? C.name)}',
      sourceUrl: '${C.sourceUrl}',
    },
    {
      q: '주말이나 공휴일에도 상담이 되나요?',
      a: '${q(FAQ_HOURS)}',
      source: '${q(C.sourceName ?? C.name)}',
      sourceUrl: '${C.sourceUrl}',
    },
    {
      q: '전화 요금은 어떻게 부과되나요?',
      a: '${q(C.callFee ?? '발신자 요금제 기준으로 부과됩니다.')}',
      source: '${q(C.sourceName ?? C.name)}',
      sourceUrl: '${C.sourceUrl}',
    },
    {
      q: '점심시간에도 상담이 되나요?',
      a: '${q(C.name)} 공식 고객센터 안내에는 점심시간 휴무 표기가 없습니다. 상담 가능 시간은 ${q(HW)}${josa(HW, '으로')} 안내되어 있고, 그 시간 안에서는 점심시간이라고 따로 끊긴다는 안내가 없습니다. 다만 ${q(IND.agent)} 수가 줄어 대기가 길어질 수는 있으니, 급하지 않다면 오전 이른 시간에 거는 편이 낫습니다.',
      source: '${q(C.sourceName ?? C.name)}',
      sourceUrl: '${C.sourceUrl}',
    },
    {
      q: '대구·부산·인천 등 지역 고객센터 번호는 따로 있나요?',
      a: '전화 상담은 지역과 관계없이 ${C.main.tel} 한 번호로 연결됩니다. 지역별 고객센터 번호는 따로 안내되지 않습니다. 방문이 필요하면 지점·서비스망 위치를 공식 홈페이지의 지점 찾기나 지도에서 확인하세요. 지점 위치와 운영 여부는 수시로 바뀌어 이 글에는 주소를 적어두지 않습니다.',
      source: '${q(C.sourceName ?? C.name)}',
      sourceUrl: '${C.sourceUrl}',
    },
    {
      q: '${C.hq ? '본사 주소는 어디인가요?' : '방문 상담은 어디로 가야 하나요?'}',
      a: '${C.hq ? `${q(C.hq)}입니다. 방문 상담이 필요하면 가까운 지점을 먼저 확인하세요.` : `${q(C.name)} 지점·서비스망 위치는 수시로 바뀌어 이 글에 주소를 적어두지 않습니다. 공식 홈페이지의 지점 찾기나 지도에서 지역을 넣어 검색하면 현재 운영 중인 곳이 나옵니다. ${IND.remote}은 방문하지 않아도 전화·앱으로 처리되는 경우입니다.`}',
      source: '${q(C.corp ?? C.name)} 사업자 정보',
      sourceUrl: '${C.official}',
    },
  ],

  sources: [
    { name: '${q(C.sourceName ?? C.name + ' 고객상담센터 안내')}', url: '${C.sourceUrl}' },
    { name: '${q(C.name)} 공식 홈페이지', url: OFFICIAL },
  ],

  /* 화면(components/CallCenterPage.tsx)이 읽는 회사 데이터.
     Downloads/db-customer-center.html 원본의 {{ }} 자리표시자에 그대로 꽂힌다.
     글은 위 qa/faqData 가 그대로 쓰고, 이건 화면 전용이다. */
  callCenter: ${JSON.stringify(
    {
      slug: C.slug,
      name: C.name,
      brandColor: C.brandColor ?? '#1F4E79',
      official: C.official,
      sourceUrl: C.sourceUrl,
      sourceName: C.sourceName ?? C.name,
      verifiedAt: C.verifiedAt,
      main: C.main,
      hours: { ...C.hours, lunch: LUNCH },
      offhourNote: OFFHOUR_NOTE,
      callFee: C.callFee,
      ars: C.ars,
      numbers: C.numbers,
      hq: C.hq,
      hqZip: C.hqZip,
    },
    null,
    2,
  ).split(NL).join(NL + '  ')},
};
`;

fs.mkdirSync(path.join(ROOT, DIR), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUT), file, 'utf8');

/* ── 배선 ── */
let reg = fs.readFileSync(path.join(ROOT, REG), 'utf8');
const importLine = `import { ${exportName} } from '@/app/policy/[id]/[spoke]/content/${IND.dir}/${C.slug}';`;
if (!reg.includes(importLine)) {
  const lastImport = reg.lastIndexOf('\nimport ');
  const impEnd = reg.indexOf('\n', reg.indexOf(';', lastImport));
  reg = reg.slice(0, impEnd) + '\n' + importLine + reg.slice(impEnd);
}
const mapKey = `  '${HUB_SLUG}': {`;
if (!reg.includes(mapKey)) {
  const anchor = 'export const SpokesRegistry: Record<string, Record<string, SpokeData>> = {';
  reg = reg.replace(anchor, `${anchor}\n${mapKey}\n  },`);
}
if (!reg.includes(`'${C.slug}': ${exportName},`))
  reg = reg.replace(mapKey, `${mapKey}\n    '${C.slug}': ${exportName},`);
fs.writeFileSync(path.join(ROOT, REG), reg, 'utf8');

/* 허브 목록에도 넣는다 — registry 만 넣고 여기를 빼면 404 다.
   2026-08-25: 삼성화재가 registry 에는 있는데 이 목록에 없어서 페이지가 안 열렸다.
   타이틀은 글의 h1 과 같아야 한다. 두 곳에 다른 제목이 있으면 목록과 글이 갈린다. */
const HUB_FILE = path.join('data', 'policies', `${HUB_SLUG}.ts`);
const hubLines = fs.readFileSync(path.join(ROOT, HUB_FILE), 'utf8').split(String.fromCharCode(13)).join('').split(NL);
const hubTitle = IND.h1(C.name);
const hubEntry = `  { slug: '${C.slug}', role: 'eligibility', title: '${q(hubTitle)}' },`;
/* 같은 slug 줄은 전부 걷어낸다 — 정규식으로 찾아 바꾸다 중복이 났다.
   줄 단위로 지우고 다시 넣으면 몇 번을 돌려도 한 줄이다. */
const kept = hubLines.filter((ln) => !ln.includes(`{ slug: '${C.slug}',`));
const listAnchor = `export const ${HUB_SLUG.replace(/-([a-z])/g, (_m, c) => c.toUpperCase())}Spokes = [`;
const at = kept.findIndex((ln) => ln.startsWith(listAnchor));
if (at < 0) die(`허브 목록을 못 찾았다: ${listAnchor}`);
kept.splice(at + 1, 0, hubEntry);
fs.writeFileSync(path.join(ROOT, HUB_FILE), kept.join(NL), 'utf8');

/* ── 승인 도장 (--approve) ──
   사람이 채팅에서 구성표를 승인한 뒤에만 붙인다. 자동으로 찍지 않는다.
   찍는 값은 write.ts 의 도장과 같은 모양이라 check-stage-approval 이 그대로 읽는다. */
if (process.argv.includes('--approve')) {
  const stampPath = path.join('scripts', 'output', `stage2-${C.slug}.json`);
  const stamp = {
    slug: C.slug,
    keyword: `${C.name} 고객센터`,
    title: `${IND.h1(C.name)}`,
    pattern: `고객센터 — 번호 모음 · ${IND.agent} 연결 · 영업시간 · 위치`,
    subheads: [
      `${C.name} 고객센터 전화번호 모음`,
      `${C.name} 고객센터 ${IND.agent} 연결 방법`,
      '고객센터 영업시간·운영시간',
      `${C.name} 고객센터 위치`,
      `${C.name} 고객센터 지역별로 찾기`,
    ],
    source: C.sourceUrl,
    outline: `data/call-centers/${C.slug}.json`,
    approved: true,
    approvedAt: C.verifiedAt,
  };
  fs.writeFileSync(path.join(ROOT, stampPath), JSON.stringify(stamp, null, 2) + NL, 'utf8');
  console.log(`   도장   ${stampPath}`);
}

console.log(`✅ ${C.name} (${C.slug})`);
console.log(`   본문   ${OUT}`);
console.log(`   번호   ${C.numbers.length}개 · ARS 주간 ${day.length} / 야간 ${night.length}`);
console.log(`   지도   ${mapUrl}`);
console.log(`   배선   registry.ts → ${HUB_SLUG}/${C.slug}`);
console.log(`   → 다음: npx tsx scripts/check-source-match.ts`);
