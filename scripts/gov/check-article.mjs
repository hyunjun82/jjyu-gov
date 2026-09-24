/**
 * ④ 글 대조 — 완성 글 ↔ facts.json. 모델이 판정하지 않는다. (2026-09-23)
 *
 *   node scripts/gov/check-article.mjs <slug> [--spec scripts/specs/x.md]
 *
 *   숫자     독자가 읽는 모든 문자열(표 칸 포함)의 숫자가, 단위와 상관없이 전부 facts 의 값·인용 또는 타이틀·소제목에 있어야 한다
 *   범위     scopeWord 가 있는 사실은, 글에서 그 값이 나오는 문장에 scopeWord 가 같이 있어야 한다 (서울 수치를 전국처럼 쓰기 방지)
 *   필수     must: true 인 사실의 값이 글에 있어야 한다 (원문에 있는데 글에 없는 것 — 최다 실수)
 *   추측어   대부분·대개·약 N 등 — 원문이 그렇게 쓴 말이 아니면 막는다
 *   버튼     applyUrl·applyUrl2·act.url 이 수집 단계에서 실제로 열린 주소여야 한다
 */
import fs from 'node:fs';
import path from 'node:path';
import { DIR_OF, loadFacts, norm, nums, numsLoose, ranges, canonMoney, canonDate } from './verify-facts.mjs';
import { metaOf, allArticles } from './target.mjs';

/* 짝 검사용 — 숫자 앞뒤 낱말(앞 두 글자로 줄인 것).
   "숫자가 facts 에 있나"만 보면 facts 의 다른 자리 숫자를 가져다 써도 통과한다
   (기존 카드 3,000원→4,000원, 시청 12번 출구→19번: 4,000원·19 는 다른 사실에 있다 — 2026-09-23 시험) */
const canonT = (s) => canonMoney(canonDate(s)).replace(/(\d),(?=\d{3})/g, '$1');
const numAt = (t, n, from) => {
  for (let i = t.indexOf(n, from); i >= 0; i = t.indexOf(n, i + 1)) {
    if (!/[\d.]/.test(t[i - 1] ?? '') && !/\d/.test(t[i + n.length] ?? '') && !(t[i + n.length] === '.' && /\d/.test(t[i + n.length + 1] ?? ''))) return i;
  }
  return -1;
};
/* 이름표는 숫자 앞에 온다("기존 카드는 3,000원") — 앞 12자·뒤 6자만 본다.
   넓게 보면 옆 값의 이름표("신규 카드는 4,000원")까지 들어와 뒤바뀐 값을 통과시킨다 */
/** 숫자+단위 — "12번출구"→"12|번", "16~20시"→"16|시","20|시"(범위 시작은 끝의 단위를 따른다), "4,000원"→"4000|원" */
const UNIT = /^(개월|개소|호선|원|곳|번|호|층|세|%|명|회|배|건|권|개|주|일|월|년|시|분)/;
export const typedNums = (text) => {
  const t = canonT(text), out = [];
  for (const m of t.matchAll(/\d+(?:\.\d+)?/g)) {
    if (/[\d.]/.test(t[m.index - 1] ?? '')) continue;
    let rest = t.slice(m.index + m[0].length).trimStart();
    // '부터'는 뒤에 '까지'가 올 때만 범위다 — "10월 12일부터 75세 이상"을 10.12~75 범위로 읽어 날짜에 '세'가 붙었고,
    //   [순서]가 날짜·나이 순서를 따져 멀쩡한 문장을 거꾸로 고치게 했다 (2026-09-24 독감 어르신 스포크)
    const rng = rest.match(/^~\s*(?:만\s*)?\d+(?:\.\d+)?\s*/)
      || (/^부터\s*(?:만\s*)?\d+(?:\.\d+)?\s*[가-힣%]{0,3}\s*까지/.test(rest) ? rest.match(/^부터\s*(?:만\s*)?\d+(?:\.\d+)?\s*/) : null);
    if (rng) rest = rest.slice(rng[0].length);
    out.push(`${m[0]}|${rest.match(UNIT)?.[1] ?? ''}`);
  }
  return out;
};
const stemsAt = (t, i, n) => new Set((t.slice(Math.max(0, i - 12), i + n.length + 6).match(/[가-힣A-Za-z]{2,}/g) || []).map((w) => w.slice(0, 2)));
const ctxStems = (text, n) => {
  const t = canonT(text), out = new Set();
  for (let i = numAt(t, n, 0); i >= 0; i = numAt(t, n, i + 1)) for (const st of stemsAt(t, i, n)) out.add(st);
  return out;
};

/** 한정 표현 — [원문에 이게 있으면, 글 문장에 이 중 하나가 있어야, 이름] */
export const MODAL = [
  [/계획|예정/, /계획|예정/, '계획·예정'],
  [/협의\s*중|협의중|검토\s*중/, /협의|검토/, '협의 중'],
  [/선착순/, /선착순/, '선착순'],
  [/한정|소진\s*시|조기\s*마감/, /한정|소진|조기\s*마감|마감될/, '수량 한정'],
  [/변동될|변경될|바뀔\s*수/, /변동|변경|바뀔/, '변동 가능'],
  [/필수|반드시/, /필수|반드시|꼭|해야/, '필수'],
  [/불가|할\s*수\s*없/, /불가|수\s*없|안\s*됩|되지\s*않|못\s/, '불가'],
];

/* ── 서론(heroHook) — 200자 이내, 행동 유도 한 문장, 먼저 쓴 글과 같은 틀 금지 (2026-09-23 사장님)
   예시 문장("그럼 확인부터 하셔야겠죠")을 지시문에 박아 두자 세 편이 전부 "그럼 ○○부터 확인하셔야겠죠"로 나왔다 */
export function heroOf(src) {
  const hero = (src.match(/heroHook:\s*\n?\s*'((?:[^'\\]|\\.)*)'/)?.[1] || '').replace(/\\'/g, "'");
  const label = src.match(/ctaLabel:\s*'((?:[^'\\]|\\.)*)'/)?.[1] || src.match(/heroAct:\s*\{\s*label:\s*'((?:[^'\\]|\\.)*)'/)?.[1] || '';
  return { hero, label };
}
/* 행동 유도 = 독자에게 권하는 끝맺음. '부터'는 넣지 않는다 — "10월 12일부터 시작" 같은 날짜 문장을
   행동 유도로 잘못 집어, 진짜 유도 문장을 지워도 검사가 통과했다 (2026-09-23 코로나 글 합격 시험)
   권하는 말 '~세요'·'~시길'은 동사를 가리지 않는다 — "병원부터 고르세요"를 못 집어 서론이 두 번 고쳐지고도 떨어졌다 (2026-09-24 독감 허브) */
//   '버튼을 눌러'·'~두시면'도 행동이다 — "버튼을 눌러 … 골라 두시면 됩니다"를 못 집어 두 번 고치고도 떨어졌다 (같은 날 임신부 스포크)
const ACTION = /하셔야|보셔야|해\s?두|챙기|찾아\s?두|확인해\s?보|[가-힣]세요|시길|눌러|두시면/;
/** 행동 유도 문장 — 맺음 문장("…알아보겠습니다")을 뺀 문장 중 행동 표시가 있는 **마지막** 문장.
 *  앞에서부터 찾으면 공감 문장의 "어디서부터 손대야 할지 막막하셨을 텐데요"를 행동 유도로 집는다 */
export function bridgeOf(hero) {
  const s = hero.split(/(?<=[.?!])\s+/).map((x) => x.trim()).filter(Boolean);
  return s.slice(0, -1).filter((x) => ACTION.test(x) && !/어디서부터|어디부터/.test(x)).pop() || '';
}
/** 틀 = 첫마디 … 끝말 */
export const frameOf = (sen) => {
  const w = sen.replace(/[.?!,…·]/g, ' ').split(/\s+/).filter(Boolean);
  return w.length ? `${w[0]} … ${w[w.length - 1]}` : '';
};
/** 서론 첫 문장(공감) */
export const openingOf = (hero) => hero.split(/(?<=[.?!])\s+/)[0]?.trim() || '';
/** 서론끼리 닮은 정도 — 공백을 뺀 3글자 조각의 겹침(Jaccard).
 *  실측(2026-09-23): 다른 주제 0.03~0.04, 같은 주제(허브↔스포크) 0.07, 주제어만 바꿔 찍어낸 서론 0.61 → 기준 0.25 */
export function heroSimilarity(a, b) {
  const g = (s) => { const t = s.replace(/\s+/g, ''); const set = new Set(); for (let i = 0; i + 3 <= t.length; i++) set.add(t.slice(i, i + 3)); return set; };
  const A = g(a), B = g(b); let x = 0;
  for (const s of A) if (B.has(s)) x++;
  return A.size + B.size - x ? x / (A.size + B.size - x) : 0;
}
/* ── 문장 찾기 기준 — 검사기와 합격 시험(test-mutations)이 **같은 함수**를 쓴다.
   따로 구현했더니 시험이 검사기가 보지 않는 문장을 건드려 가짜 '놓침'이 났다 (2026-09-23) */
/** 표 행 문자열 → 열 제목을 붙여 읽는 함수. 표 행의 범위어는 열 제목에 있을 수 있다 */
export function headerReader(src) {
  const headerOf = new Map();
  for (const m of src.matchAll(/headers:\s*\[([^\]]*)\],\s*\n?\s*rows:\s*\[([\s\S]*?)\n\s*\],/g)) {
    const head = (m[1].match(/'((?:[^'\\]|\\.)*)'/g) || []).map((h) => h.slice(1, -1)).join(' ');
    for (const line of m[2].split('\n')) {
      const cells = (line.match(/'((?:[^'\\]|\\.)*)'/g) || []).map((c) => c.slice(1, -1));
      if (cells.length) headerOf.set(cells.join(' · '), head);
    }
  }
  return (s) => (headerOf.has(s) ? `${s} ${headerOf.get(s)}` : s);
}
export const sentencesOf = (strings) => strings.flatMap((s) => s.split(/(?<=[.?!])\s+|(?<=다\.)|\n/));
const distinctKey = (x) => [...new Set(nums(x.value))].filter((n) => n.includes('.') || n.length >= 2);
const isDistinct = (key) => key.length >= 2 || key.some((n) => n.replace(/\..*/, '').length >= 3);
/** 범위어 사실이 쓰인 문장인가 — 값 문구 통째 또는 (숫자가 뚜렷하고 다른 범위 사실과 안 겹치면) 그 숫자들 */
export function scopeHit(x, facts) {
  const v = norm(x.value), key = distinctKey(x);
  // 같은 숫자가 범위가 다른 사실에도 나오면(3만원 = 선불에도 후불에도) 숫자로는 범위를 못 가른다
  const shared = facts.some((o) => o !== x && o.scopeWord !== x.scopeWord && key.every((n) => nums(o.value).includes(n)));
  const distinct = !shared && isDistinct(key);
  // 같은 숫자를 가진 다른 사실의 범위어만 든 문장은 그 사실의 문장이다 — "고위험군은 … 10월 6일(화)부터"를
  //   '75세 이상 10월 6일(화)부터' 사실로 집어 범위어 누락이라 했다 (2026-09-24 독감 3가·4가 스포크)
  const sharers = facts.filter((o) => o !== x && o.scopeWord && o.scopeWord !== x.scopeWord && key.length && key.every((n) => nums(o.value).includes(n)));
  const others = (t) => !t.includes(x.scopeWord) && sharers.some((o) => t.includes(o.scopeWord));
  return (t) => !others(t) && (norm(t).includes(v) || (distinct && key.every((n) => nums(t).includes(n))));
}
/** 지킬 말(keepWord) 사실이 쓰인 문장인가. 지킬 말 자체는 기준에서 뺀다 — 빼고 남는 게 없으면 항목 이름으로 */
export function keepHit(x, facts) {
  const key = distinctKey(x);
  // 같은 숫자가 한정 없는 다른 사실에도 있으면 숫자로는 어느 사실 문장인지 못 가른다
  const shared = isDistinct(key) && facts.some((o) => o !== x && !o.keepWord && key.every((n) => nums(o.value).includes(n)));
  const strip = (s) => String(s || '').split(/\s+/).map((w) => w.split(x.keepWord).join('')).filter((w) => w.length >= 2);
  // 핵심어가 지킬 말 자체('필수예방접종')면 빼고 남는 게 없다 → 항목 이름('코로나19 … 전환')으로 찾는다
  const words = strip(x.key).length ? strip(x.key) : strip(x.item);
  return (t) => (isDistinct(key) && !shared && key.every((n) => nums(t).includes(n))) || (words.length > 0 && words.every((w) => t.includes(w)));
}
export const keepOk = (x) => {
  const mode = MODAL.find(([q]) => q.test(x.keepWord));
  return (sen) => sen.includes(x.keepWord) || Boolean(mode && mode[1].test(sen));
};

const labelWords = (label) => label.replace(/[☞→]/g, ' ').split(/\s+/)
  .map((w) => w.replace(/(확인하기|하기|보기|찾기)$/, '')).filter((w) => w.length >= 2 && !/^(확인|바로가기)$/.test(w));

export const BANNED = [[/(?<![가-힣])약\s*\d/, '약 N'], [/대략/, '대략'], [/대부분/, '대부분'], [/대개/, '대개'],
  [/경우가 많/, '경우가 많'], [/대다수/, '대다수'], [/거의 모든/, '거의 모든'], [/추정/, '추정'], [/아마/, '아마']];

/** 글 파일에서 독자가 읽는 문자열만 — 출처 표기·주소·날짜 메타는 뺀다 */
export function readerStrings(src) {
  const body = src
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/^const \w+ = '[^']*';$/gm, '')
    .replace(/source:\s*\{[^{}]*\}/g, '')
    // highlights 는 본문 문장 안의 형광펜 조각이다 — 따로 읽히는 문장이 아니고, 본문에서 이미 검사된다
    .replace(/highlights:\s*\[[^\]]*\]/g, '')
    .replace(/\b(sourceNote|source|sourceUrl|url|href|applyUrl2?|datePublished|dateModified|verifiedAt|slug|catSlug|id|type):\s*(\w+|'(?:[^'\\]|\\.)*')/g, '')
    .replace(/sources:\s*\[[\s\S]*?\n\s{2}\],/g, '');
  // 한 줄에 있는 문자열은 묶는다 — 표 한 행 ['팩스', '02-…'] 을 칸마다 떼어 보면 '팩스'가 없다고 오탐한다
  return body.split('\n')
    .map((line) => [...line.matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1].replace(/\\'/g, "'")).join(' · '))
    .filter((s) => s.trim());
}

/** spec 에서 타이틀·소제목 줄만 — 출처 URL 숫자가 허용 목록에 섞이면 안 된다. 경로를 안 주면 slug 로 찾는다 */
export function specNumsText(slug, file) {
  // 타이틀·소제목은 meta 에 있다 (없으면 옛 방식대로 spec 을 slug 로 찾는다)
  const meta = metaOf(slug);
  if (!file && meta.title) return `title: ${meta.title}\n${(meta.subs || []).map((x) => `sub: ${x}`).join('\n')}`;
  const f = file || fs.readdirSync(path.join('scripts', 'specs')).map((n) => path.join('scripts', 'specs', n))
    .find((p) => p.endsWith('.md') && new RegExp(`^slug:\\s*${slug}\\s*$`, 'm').test(fs.readFileSync(p, 'utf8')));
  return f ? fs.readFileSync(f, 'utf8').split('\n').filter((l) => /^(title|sub):/.test(l)).join('\n') : '';
}

export function checkArticle(slug, specText = specNumsText(slug)) {
  // 글 파일은 meta 가 가리키는 곳 — 허브(data/policies) 또는 스포크(content/<dir>)
  const file = metaOf(slug).file;
  const src = fs.readFileSync(file, 'utf8');
  const facts = loadFacts(slug);
  const dir = DIR_OF(slug);
  const srcPool = fs.readdirSync(dir).filter((f) => /^src-\d+\.txt$/.test(f)).map((f) => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n');
  const strings = readerStrings(src);
  const text = strings.join('\n');
  const errors = [];

  // 숫자
  const allowed = new Set([...facts.flatMap((x) => [...numsLoose(x.value), ...numsLoose(x.quote)]), ...numsLoose(specText)]);
  const bad = new Map();
  // 순서 표시("4단계"·"2번째")는 원문 수치가 아니다 — 절차 표의 단계 번호를 없는 숫자로 잡아
  //   모델이 "처음·둘째·…·마지막"으로 바꿔 쓰게 만들었다 (2026-09-24 독감 증명서 스포크)
  const ORDINAL = /(?<![\d.,])\d{1,2}\s*(?:단계|번째)/g;
  for (const s of strings) for (const n of nums(s.replace(ORDINAL, ''))) if (!allowed.has(n) && !bad.has(n)) bad.set(n, s);
  for (const [n, s] of bad) errors.push(`[숫자] ${n} — facts 에 없다: "${s.slice(0, 80)}"`);

  // 짝 ① 숫자+단위 — 글의 "19번"은 facts 에도 "19번"이 있어야 한다 ("19세"·"19일"만 있으면 엉뚱한 자리의 숫자다).
  //   날짜·시각 단위(일·월·년·시·분)는 뺀다 — 범위 쌍·순서 검사가 본다
  const factText = facts.map((x) => `${x.value} ${x.quote}`);
  const typed = new Set(factText.flatMap((ft) => typedNums(ft)));
  const typedSeen = new Set();
  for (const s of strings) {
    for (const tn of typedNums(s)) {
      const [n, u] = tn.split('|');
      // 원문에 단위 없이 나온 숫자(표 머리에 단위가 있는 표)는 단위를 가릴 수 없다 — 다른 단위로만 나올 때 막는다
      if (!u || /^(일|월|년|시|분)$/.test(u) || bad.has(n) || typed.has(tn) || typed.has(`${n}|`) || typedSeen.has(tn)) continue;
      typedSeen.add(tn);
      const has = [...typed].filter((x) => x.startsWith(`${n}|`)).map((x) => x.split('|')[1] || '(단위 없음)');
      errors.push(`[짝] ${n}${u} — 원문에서 ${n} 은 ${has.join('·') || '다른 단위'} 로만 나온다: "${s.slice(0, 70)}"`);
    }
  }

  // 짝 ② 금액·% 이름표 — 글에서 그 금액 바로 앞 낱말이, 원문에서 같은 금액 바로 앞 낱말과 하나라도 겹쳐야 한다.
  //   (기존 카드는 3,000원 → 4,000원 — 4,000원은 facts 에 '신규' 카드 값으로 있다). 흔한 낱말(사실 25% 넘게)은 근거로 안 친다
  const df = new Map();
  for (const ft of factText) for (const st of new Set((canonT(ft).match(/[가-힣A-Za-z]{2,}/g) || []).map((w) => w.slice(0, 2)))) df.set(st, (df.get(st) || 0) + 1);
  const common = (st) => (df.get(st) || 0) > facts.length * 0.25;
  // 이름표 → 원문에서 그 이름표가 바로 앞(12자)에 붙는 금액들 ("기존" → {3000}). 이름표는 숫자 앞에만 온다
  // 숫자에 붙은 단위 조각("30일권"의 '일권')은 이름표가 아니다 — 숫자 바로 뒤 글자는 뺀다
  const preStems = (tt, i, span = 12) => new Set((tt.slice(Math.max(0, i - span), i).match(/(?<![\d가-힣A-Za-z])[가-힣A-Za-z]{2,}|(?<=\s)[가-힣A-Za-z]{2,}/g) || [])
    .filter((w, _, arr) => w).map((w) => w.slice(0, 2)));
  const labelOf = new Map(), moneyOwners = new Map();
  for (const ft of factText) {
    const tt = canonT(ft);
    for (const m of tt.matchAll(/\d+(?:\.\d+)?(?=\s*(?:원|%))/g)) {
      if (/[\d.]/.test(tt[m.index - 1] ?? '')) continue;
      const pre = preStems(tt, m.index);
      for (const st of pre) (labelOf.get(st) || labelOf.set(st, new Set()).get(st)).add(m[0]);
      (moneyOwners.get(m[0]) || moneyOwners.set(m[0], []).get(m[0])).push(pre);
    }
  }
  const seenPair = new Set();
  for (const s of strings) {
    for (const n of new Set(nums(s))) {
      if (n.replace('.', '').length < 2 || bad.has(n) || seenPair.has(`${n}|${s}`)) continue;
      seenPair.add(`${n}|${s}`);
      // 날짜·시각(뒤에 시·일·월·년·분, 또는 2026-09-23 꼴)은 어느 문맥에나 나온다 — 짝을 못 가린다. 범위 쌍 검사가 따로 본다
      const t = canonT(s);
      const occ = [];
      for (let i = numAt(t, n, 0); i >= 0; i = numAt(t, n, i + 1)) occ.push(i);
      const isDateTime = (i) => n.includes('.') || /^(19|20)\d{2}$/.test(n) || /^[시일월년분\-]/.test(t.slice(i + n.length).trimStart()) || t[i - 1] === '-';
      if (!occ.length || occ.every(isDateTime)) continue;
      const owners = factText.filter((ft) => nums(ft).includes(n)).map((ft) => ctxStems(ft, n));
      if (!owners.length) continue;
      // 금액(원)·% 자리만 — 나올 때마다 따로 (같은 문장의 두 번째 자리가 맞다고 첫 번째 자리 오류가 묻히면 안 된다).
      // "하나라도 겹치면 통과"는 '카드' 같은 말 하나로 뚫렸다 → 뚜렷한 증거가 있을 때만 막는다:
      //   글에서 이 금액 앞 이름표가, 원문에서는 다른 금액의 이름표이고 이 금액 앞에는 한 번도 없을 때
      const isMoney = (i) => /^\s*(원|%)/.test(t.slice(i + n.length));
      // 원문에서 금액으로 적힌 숫자만 (표 머리에 단위가 있는 '62,000' 같은 건 이름표를 가릴 수 없다)
      const mOwners = moneyOwners.get(n);
      if (!mOwners) continue;
      for (const i of occ.filter((p) => !isDateTime(p) && isMoney(p))) {
        // 글 쪽은 바로 앞 8자만 — 12자 앞의 "기후동행카드" 같은 남의 낱말을 이름표로 오인했다
        const wrong = [...preStems(t, i, 8)].find((st) => !common(st) && labelOf.has(st) && !labelOf.get(st).has(n) && !mOwners.some((o) => o.has(st)));
        if (wrong) {
          errors.push(`[짝] ${n} — 글에서 '${wrong}…' 이름표를 달았는데 원문에서 그 이름표는 ${[...labelOf.get(wrong)].join('·')} 의 것이다: "${t.slice(Math.max(0, i - 25), i + n.length + 10)}"`);
          break;
        }
      }
    }
  }

  // 표 행은 열 제목과 함께 읽는다 — "다음 신청일 · 10.12 · 10.20" 의 '여권1·여권2'는 열 제목에 있다
  const withHead = headerReader(src);

  // 범위 — 문장 단위 (문장 찾기 기준은 scopeHit — 합격 시험과 같은 함수)
  const sentences = sentencesOf(strings);
  for (const x of facts.filter((f) => f.scopeWord)) {
    const hit = scopeHit(x, facts);
    for (const sen of sentences.filter(hit)) {
      if (!withHead(sen).includes(x.scopeWord)) errors.push(`[범위] ${x.item} "${x.value}" 는 '${x.scopeWord}' 한정인데 그 말 없이 썼다: "${sen.slice(0, 80)}"`);
    }
  }

  // 순서 — 숫자가 둘 이상인 사실이 한 문장에 다 나오면, 원문과 같은 순서여야 한다 (두 값 자리 바꾸기 방지)
  //   한 자리 숫자(1·2·9 …)는 문장 곳곳에 흔해 오탐만 낸다 — 두 자리 이상만 본다.
  //   판정: 원문 순서의 숫자열이 문장 숫자열의 부분 수열로 한 번이라도 나오면 통과
  const isSubseq = (need, have) => { let i = 0; for (const h of have) if (h === need[i]) i++; return i === need.length; };
  //   같은 단위끼리만 본다 — "10월 12일부터 70세 이상"을 "70세 이상은 10월 12일"로 쓰는 건 뜻이 같다(날짜와 나이는
  //   종류가 달라 어느 쪽이 먼저 와도 된다, 2026-09-23 코로나 글 오탐). 뒤바뀌면 안 되는 건 19~34세 → 19~39세 같은 같은 종류 값
  for (const x of facts) {
    const byUnit = new Map();
    for (const tn of typedNums(x.value)) {
      const [n, u] = tn.split('|');
      if (n.replace(/\..*/, '').length < 2 && !n.includes('.')) continue;
      const k = u || '·';
      if (!byUnit.has(k)) byUnit.set(k, []);
      if (!byUnit.get(k).includes(n)) byUnit.get(k).push(n);
    }
    for (const [u, vn] of byUnit) {
      if (vn.length < 2) continue;
      const bad = sentences.find((sen) => { const sn = nums(sen); return vn.every((n) => sn.includes(n)) && !isSubseq(vn, sn); });
      if (bad) errors.push(`[순서] ${x.item} — 원문은 ${vn.join(' → ')}${u === '·' ? '' : ` (${u})`} 순서인데 글은 뒤바뀌었다: "${bad.slice(0, 80)}"`);
    }
  }

  // 한정 표현 — 숫자는 맞는데 뜻이 바뀌는 오해를 막는다 ("관리할 계획" → "운영합니다", "선착순" 누락).
  //   원문 인용에 한정 표현이 있으면, 글에서 그 사실을 쓴 문장(뚜렷한 숫자나 핵심어가 나오는 문장)에도 같은 한정이 있어야 한다
  //   무엇을 살릴지는 사실 단계에서 모델이 문맥으로 정한다(keepWord). 코드는 그것만 강제한다 — 일괄 규칙은
  //   1월 공지의 "신청 예정"(지금은 시행 중)까지 매 문장 "예정"을 붙이라고 해 틀린 글을 강요했다(2026-09-23)
  for (const x of facts.filter((f) => f.keepWord)) {
    const ok = keepOk(x), hit = keepHit(x, facts);
    // 어긴 문장을 한꺼번에 전부 — 하나씩 알려 주면 고침 두 번으로 안 끝난다
    for (const sen of sentences.filter(hit).filter((s) => !ok(s))) {
      errors.push(`[단정] ${x.item} — 원문의 '${x.keepWord}' 를 빼고 썼다: "${sen.slice(0, 90)}"`);
    }
  }

  // 범위 쌍 — 글의 "A~B"가 원문에 없고 거꾸로 "B~A"만 있으면 뒤집어 쓴 것 (10~18시 → 18~10시)
  const factPairs = new Set(facts.flatMap((x) => [...ranges(x.value), ...ranges(x.quote)]).map(([a, b]) => `${a}|${b}`));
  for (const s of strings) {
    for (const [a, b] of ranges(s)) {
      if (!factPairs.has(`${a}|${b}`) && factPairs.has(`${b}|${a}`)) errors.push(`[순서] ${a}~${b} — 원문은 ${b}~${a} 인데 뒤집어 썼다: "${s.slice(0, 80)}"`);
    }
  }

  // 필수 — 값 문구를 통째로 찾으면 모델이 문구를 괄호째 박아 넣는다(2026-09-23 실측).
  //   숫자 사실: 그 숫자가 글에 있나(표기 무관) / 말 사실: facts 의 짧은 핵심어(key)가 글에 있나
  const nt = norm(text);
  const articleNums = new Set(strings.flatMap(numsLoose));
  for (const x of facts.filter((f) => f.must)) {
    const vn = numsLoose(x.value).filter((n) => !/^\d{1,2}\.\d{1,2}$/.test(n));
    // 핵심어는 낱말들이 한 문장 안에 다 있으면 된다 — 글자 그대로 요구하면 "환불 이용자로 보아" 같은 억지 문장이 생긴다
    const words = String(x.key || '').split(/\s+/).filter(Boolean);
    const keyOk = !words.length || nt.includes(norm(x.key)) || sentences.some((s) => words.every((w) => s.includes(w)));
    const ok = vn.length ? vn.every((n) => articleNums.has(n)) : keyOk;
    if (!ok) errors.push(`[누락] ${x.item} — 원문 핵심인데 글에 없다 (${vn.length ? `숫자 ${vn.join(', ')}` : `핵심어 "${x.key}"`})`);
  }

  // 서론 — 길이·행동 유도·틀 반복
  const { hero, label } = heroOf(src);
  if (hero) {
    const len = [...hero].length;
    if (len > 200) errors.push(`[서론] ${len}자 — 200자 이내로 줄인다`);
    const bridge = bridgeOf(hero);
    if (!bridge) errors.push('[서론] 행동 유도 문장이 없다 — 상단 버튼으로 넘어가는 한 문장(독자가 지금 먼저 할 일)을 맺음 앞에 둔다');
    const lw = labelWords(label);
    if (lw.length && !lw.some((w) => hero.includes(w))) errors.push(`[서론] 상단 버튼 '${label}' 의 말(${lw.join('·')})이 서론에 없다 — 버튼은 서론에서 나온 말이어야 이어진다`);
    // 먼저 쓴 글과만 비교한다 — 같은 주제·같은 키워드라도 서론이 찍어낸 듯 닮으면 막는다 (2026-09-23 사장님)
    const list = allArticles();
    const idx = list.findIndex((m) => m.key === slug);
    const earlier = (idx >= 0 ? list.slice(0, idx) : list.filter((m) => m.key !== slug))
      .map((o) => ({ key: o.key, hero: heroOf(fs.readFileSync(o.file, 'utf8')).hero })).filter((o) => o.hero);
    const myOpen = frameOf(openingOf(hero)), myBridge = bridge ? frameOf(bridge) : '';
    const sameOpen = earlier.find((o) => frameOf(openingOf(o.hero)) === myOpen);
    if (sameOpen) errors.push(`[틀 반복] 서론 첫 문장이 먼저 쓴 글(${sameOpen.key})과 같은 틀 '${myOpen}' — "${openingOf(sameOpen.hero).slice(0, 50)}"`);
    const sameBridge = myBridge && earlier.find((o) => frameOf(bridgeOf(o.hero)) === myBridge);
    if (sameBridge) errors.push(`[틀 반복] 서론 행동 유도가 먼저 쓴 글(${sameBridge.key})과 같은 틀 '${myBridge}' — "${bridgeOf(sameBridge.hero).slice(0, 50)}"`);
    const twin = earlier.map((o) => ({ ...o, sim: heroSimilarity(hero, o.hero) })).sort((a, b) => b.sim - a.sim)[0];
    if (twin && twin.sim >= 0.25) errors.push(`[닮음] 서론이 먼저 쓴 글(${twin.key})과 ${Math.round(twin.sim * 100)}% 겹친다 — 주제어만 바꾼 찍어내기처럼 읽힌다. 다른 각도로 새로 쓴다`);
  }

  // 구성 고정 — 소제목(qa) 4개, FAQ 2개 (2026-09-23 사장님: FAQ 가 많으면 시간만 먹는다)
  const qaN = (src.match(/\banchor:\s*'/g) || []).length;
  const faqN = ((src.match(/\bfaq(?:Data)?:\s*\[([\s\S]*?)\n\s{2}\],/) || [])[1]?.match(/\bq:\s*'/g) || []).length;
  if (qaN !== 4) errors.push(`[구성] 소제목 카드가 ${qaN}개 — 4개여야 한다`);
  if (faqN !== 2) errors.push(`[구성] FAQ 가 ${faqN}개 — 2개여야 한다`);

  // 표 모양 — 모바일(폭 360px)에서 4열 이상은 칸 글자가 서너 줄로 꺾인다(국가유산 여권 1·2 비교표, 2026-09-23)
  for (const m of src.matchAll(/caption:\s*'([^']*)',\s*\n?\s*headers:\s*\[([^\]]*)\]/g)) {
    const cols = (m[2].match(/'(?:[^'\\]|\\.)*'/g) || []).length;
    if (cols > 3) errors.push(`[표] '${m[1]}' 가 ${cols}열 — 모바일에서 칸이 꺾인다. 3열 이하로 나누거나 행·열을 바꾼다`);
  }

  // 추측어
  for (const [re, l] of BANNED) if (re.test(text) && !re.test(srcPool)) errors.push(`[추측어] '${l}' — 원문에 없는 단정`);

  // 버튼
  const opened = new Set(JSON.parse(fs.readFileSync(path.join(dir, 'sources.json'), 'utf8'))
    .filter((s) => !s.error).flatMap((s) => [s.url, s.finalUrl]));
  const consts = Object.fromEntries([...src.matchAll(/^const (\w+) = '([^']+)';$/gm)].map((m) => [m[1], m[2]]));
  for (const m of src.matchAll(/(?:applyUrl2?|url|href):\s*(\w+|'[^']+')/g)) {
    const u = m[1].startsWith("'") ? m[1].slice(1, -1) : consts[m[1]];
    if (u && /^https?:/.test(u) && !opened.has(u)) errors.push(`[버튼] ${u} — 수집 단계에서 열어 본 주소가 아니다`);
  }
  return { errors, strings: strings.length, numbers: [...new Set(strings.flatMap(nums))].length };
}

if (process.argv[1]?.replace(/\\/g, '/').endsWith('gov/check-article.mjs')) {
  const slug = process.argv[2];
  const si = process.argv.indexOf('--spec');
  const r = checkArticle(slug, specNumsText(slug, si > 0 ? process.argv[si + 1] : undefined));
  r.errors.forEach((e) => console.log(`  ❌ ${e}`));
  console.log(r.errors.length ? `❌ 글 대조 실패 ${r.errors.length}건` : `✅ 글 대조 통과 — 문자열 ${r.strings}개 · 숫자 ${r.numbers}종 전부 facts 에 있음`);
  process.exit(r.errors.length ? 1 : 0);
}
