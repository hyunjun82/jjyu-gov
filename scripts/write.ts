/**
 * write.ts — 글 한 편을 4단계로 "실행하는" 파이프라인 (안내판이 아니다)
 *
 * 왜 갈아엎었나 (2026-08-23 사장님 지시 "4개 작동하게 만드는 자동화가 그렇게 어렵니?")
 *   전까지 이 파일 머리에는 이렇게 적혀 있었다 —
 *     "이 스크립트는 판단하지 않는다. 다음에 뭘 해야 하는지만 말한다."
 *   그래서 1~4단계 실행은 매번 내 맨손이었고, 맨손이라 매번 달랐고,
 *   다를 때마다 막는 장치를 붙였다. 7월 이후 도구 커밋 203건, fix 커밋 223건.
 *   게이트는 사후 검사라 "틀린 것"만 막지 "하게" 만들지 못한다.
 *   이제 이 파일이 각 단계를 직접 실행한다. 사람이 서는 곳은 두 곳뿐이다:
 *     ① 타이틀 후보 번호 고르기   ② 구성표 승인
 *
 * 사용 (순서대로. 인자 없이 부르면 지금 칠 명령 한 줄을 알려준다)
 *   npx tsx scripts/write.ts "기초연금"              현재 상태 + 다음 명령
 *   npx tsx scripts/write.ts "기초연금" --1          준 실검색어로 타이틀 후보 번호 목록
 *                                                  (목록: scripts/output/기초연금.txt 한 줄에 하나)
 *   npx tsx scripts/write.ts "기초연금" --pick 7     후보 확정 → 구성표 뼈대 자동 생성
 *   npx tsx scripts/write.ts "기초연금" --2          구성표 빈칸 점검
 *   npx tsx scripts/write.ts "기초연금" --approve    승인 도장 (stage2-{slug}.json)
 *   npx tsx scripts/write.ts "기초연금" --3          구성표의 URL 전부 열어 추출본 저장
 *   npx tsx scripts/write.ts "기초연금" --4          추출본 ↔ 완성글 대조 + 게이트
 *
 * 상태: scripts/output/state-{slug}.json — 세션이 끊겨도 여기서 이어진다.
 * 영문 슬러그를 쓸 글이면 --slug lowercase-hyphen 을 붙인다.
 */
import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';
import { snapName } from './fetch-source';
import { classifyIntent, classifyTheme } from './collect-keywords';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();
const OUT = join(ROOT, 'scripts', 'output');
mkdirSync(OUT, { recursive: true });

const args = process.argv.slice(2);
const flagVal = (name: string) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const positional = args.filter(
  (a, i) => !a.startsWith('--') && args[i - 1] !== '--pick' && args[i - 1] !== '--slug',
);
const keyword = positional[0];
const has = (f: string) => args.includes(f);

if (!keyword) {
  console.log('사용: npx tsx scripts/write.ts "{키워드}" [--1 | --pick N | --2 | --approve | --3 | --4]');
  process.exit(1);
}

const SLUG = flagVal('--slug') ?? keyword.replace(/\s+/g, '-');
const LINE = '─'.repeat(66);
const STATE = join(OUT, `state-${SLUG}.json`);
const OUTLINE = join(OUT, `outline-${SLUG}.md`);
const DRAFT = join(OUT, `draft-${SLUG}.md`);
const FACT = join(OUT, `factsheet-${SLUG}.md`);
const STAGE2 = join(OUT, `stage2-${SLUG}.json`);
const SOURCE = join(OUT, `source-${SLUG}.txt`);

type Cand = { n: number; title: string; pattern: string; from: string[] };
type State = {
  keyword: string; slug: string; step: number;
  candidates?: Cand[]; title?: string; pattern?: string; from?: string[];
  subheads?: string[]; approvedAt?: string;
  sources?: { url: string; chars: number; file: string }[];
};

const loadState = (): State =>
  existsSync(STATE) ? JSON.parse(readFileSync(STATE, 'utf8')) : { keyword, slug: SLUG, step: 0 };
const saveState = (s: State) => writeFileSync(STATE, JSON.stringify(s, null, 2), 'utf8');
const today = () => new Date().toISOString().slice(0, 10);
const norm = (s: string) => s.replace(/\s+/g, '');

/* ══════════ 1단계 — 실검색어 조각으로 타이틀 후보를 조립한다 ══════════
   조각은 전부 수집된 실검색어에서 나온다. 이 스크립트는 문장을 짓지 않는다.
   짓는 순간 매번 달라지고, 달라지면 또 검사기를 붙이게 된다. */

function kwFile(): string {
  const hit = readdirSync(OUT).find(
    (f) => f.endsWith('.json') && !f.startsWith('state-') && !f.startsWith('stage2-') && f.includes(keyword),
  );
  return hit ? join(OUT, hit) : '';
}

/** 사장님이 준 실검색어 목록 (한 줄에 하나). scripts/output/{키워드}.txt */
function kwTxtFile(): string {
  const hit = readdirSync(OUT).find((f) => f.endsWith('.txt') && f.slice(0, -4) === keyword);
  return hit ? join(OUT, hit) : '';
}

/** 텍스트 목록을 수집본과 같은 모양으로 세운다 — 뒤 단계는 형태만 보고 돌아간다.
    분류 규칙은 collect-keywords 의 것을 그대로 쓴다. 여기서 따로 만들면 판정이 갈린다. */
function fromTxt(file: string): any {
  const lines = Array.from(new Set(
    readFileSync(file, 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#')),
  ));
  const byIntent: Record<string, string[]> = {
    info: [], condition: [], action: [], compare: [], calculate: [], confirm: [], question: [],
  };
  const byTheme: Record<string, string[]> = {
    A_condition: [], B_amount: [], C_apply: [], D_caution: [], E_target: [], F_compare: [],
  };
  for (const kw of lines) {
    byIntent[classifyIntent(kw)].push(kw);
    byTheme[classifyTheme(kw)].push(kw);
  }
  return {
    seed: keyword,
    collectedAt: new Date().toISOString(),
    givenBy: '사람이 준 목록',
    naver: { autocomplete: [], related: [] },
    google: { autocomplete: [], paa: [], related: [] },
    merged: { all: lines, byIntent, byTheme },
  };
}

/* 2026-08-25 — 자음 ㄱ~ㅎ 자동 수집을 뗐다. 실검색어는 사장님이 준다.
   네이버를 열어 긁는 자리였는데, 긁힌 목록이 얕으면 타이틀이 통째로 얕아졌다.
   collect-keywords.ts 는 남겨 둔다 — 필요할 때 따로 돌린다. */
function keywordData(): any {
  const txt = kwTxtFile();
  if (txt) return fromTxt(txt);
  const json = kwFile();
  if (json) return JSON.parse(readFileSync(json, 'utf8'));
  console.log(`\n${LINE}`);
  console.log(' 실검색어 목록이 없다.');
  console.log(`   scripts/output/${keyword}.txt 에 한 줄에 하나씩 적는다.`);
  console.log('   (직접 긁고 싶으면: npx tsx scripts/collect-keywords.ts "' + keyword + '")');
  console.log(`${LINE}\n`);
  process.exit(1);
}

/** 실검색어에서 메인키워드를 뺀 나머지 = 조각. 접두가 아니거나 복합어 꼬리면 버린다. */
function fragOf(kw: string): string {
  const s = norm(keyword);
  let i = 0;
  let j = 0;
  while (i < kw.length && j < s.length) {
    const c = kw[i];
    if (/\s/.test(c)) { i++; continue; }
    if (c === s[j]) { i++; j++; continue; }
    return '';
  }
  if (j < s.length) return '';
  const tail = kw.slice(i);
  const rest = tail.trim();
  /* 붙여쓴 복합어 꼬리는 조각이 아니다. "간병인보험료 60대" 를 그냥 자르면
     "료 60대"가 나와 타이틀이 망가진다(2026-08-23 첫 실행에서 3건). */
  if (!/^\s/.test(tail) && /^(료|비|금|액|증|사|원|자|인|용|중|권|제)/.test(rest)) return '';
  if (!/^\s/.test(tail) && rest.length <= 2) return '';
  if (/^(은|는|이|가|의|를|을|와|과|도|만)/.test(rest) && rest.length <= 3) return '';
  return rest;
}

/** 받침 있으면 앞을, 없으면 뒤를 — "단점라던데" 같은 조사 오류를 막는다 */
function josa(word: string, withJong: string, noJong: string): string {
  const c = word.charCodeAt(word.length - 1);
  if (c < 0xac00 || c > 0xd7a3) return noJong;
  return (c - 0xac00) % 28 !== 0 ? withJong : noJong;
}

/** 사실상 같은 말인가 — "신청하는방법"과 "신청"을 짝지으면 타이틀이 겹말이 된다 */
function tooClose(a: string, b: string): boolean {
  return a === b || a.includes(b) || b.includes(a) || a.slice(0, 2) === b.slice(0, 2);
}

type Frag = { frag: string; src: string; rank: number };

function buildTitles(kj: any): Cand[] {
  const all: string[] = Array.from(new Set<string>(kj.merged?.all ?? []));
  const rank = new Map<string, number>();
  all.forEach((k, i) => rank.set(k, i)); /* 자동완성 순서 ≈ 검색량 순서 */

  const pool: Frag[] = all
    .map((src) => ({ frag: fragOf(src), src, rank: rank.get(src) ?? 999 }))
    .filter((f) => f.frag.length >= 2 && f.frag.length <= 14);

  const bucket = (re: RegExp, limit = 6): Frag[] => {
    const seen = new Set<string>();
    return pool
      .filter((f) => re.test(f.frag))
      .filter((f) => (seen.has(f.frag) ? false : (seen.add(f.frag), true)))
      .sort((a, b) => a.rank - b.rank)
      .slice(0, limit);
  };

  const A = bucket(/자격|조건|대상|요건|되나|가능|해당|나이|기준/);
  const B = bucket(/얼마|금액|일당|한도|계산|비용|가격|보험료|수령|일수/);
  const C = bucket(/신청|방법|서류|절차|기간|어디|접수|준비|발급|가입/);
  const D = bucket(/단점|해지|전환|갈아타|후회|손해|거절|못\s?받|안\s?되|주의|비추|부정수급|환수|감액|깎/, 8);
  const E = bucket(/\d0대|고령|남편|아내|부모|자녀|직장인|자영업|계약직|무직|외국인|주부/);
  const F = bucket(/차이|비교|중복|어떤|vs|둘\s?다|같이/);
  const T = bucket(/계산기|조회|홈페이지|앱|사이트|모의|센터/);

  const Dsw = D.filter((x) => /해지|전환|갈아타|바꾸/.test(x.frag));
  const Dtrap = D.filter((x) => /단점|못\s?받|안\s?되|거절|손해|후회|주의|비추/.test(x.frag));
  const Dcut = D.filter((x) => /감액|깎|환수|부정수급|줄어/.test(x.frag));
  const year = (all.find((k) => /20\d\d/.test(k)) ?? '').match(/20\d\d/)?.[0];

  const K = keyword;
  const out: Cand[] = [];
  const add = (pattern: string, title: string, from: Frag[]) =>
    out.push({ n: 0, title: title.replace(/\s+/g, ' ').trim(), pattern, from: from.map((f) => f.src) });

  /** 서로 다른 조각 두 개를 앞쪽(검색량 높은 쪽)부터 n 쌍 */
  const pair = (a: Frag[], b: Frag[], n: number): [Frag, Frag][] => {
    const r: [Frag, Frag][] = [];
    for (let i = 0; i < a.length && r.length < n; i++) {
      for (let j = 0; j < b.length && r.length < n; j++) {
        if (!tooClose(a[i].frag, b[j].frag)) r.push([a[i], b[j]]);
      }
    }
    return r;
  };

  /* docs/title-corpus-kb.md 패턴 9개 — 구조는 고정, 조각은 실검색어 */
  Dsw.slice(0, 2).forEach((d) => add('①전환·해지', `${K} ${d.frag}, 지금 해도 괜찮을까?`, [d]));
  F.slice(0, 2).forEach((f) => add('②A vs B', `${K} ${f.frag}, 어떤 쪽이 유리할까?`, [f]));
  pair(C, C, 3).forEach(([c1, c2]) => add('③절차 묶음', `${K} ${c1.frag}부터 ${c2.frag}까지`, [c1, c2]));
  pair(E, A, 3).forEach(([e, a]) => add('④자기대입', `${e.frag}도 ${K} ${a.frag}?`, [e, a]));
  pair(B, Dcut, 3).forEach(([b, d]) => add('⑤손실 계산', `${K} ${b.frag}, ${d.frag}면 얼마나 줄어드나`, [b, d]));
  pair(C, Dtrap, 4).forEach(([c, d]) => add('⑥함정 경고', `${K} ${c.frag}, ${d.frag}까지`, [c, d]));
  pair(B, T, 2).forEach(([b, t]) => add('⑦도구로 끝', `${K} ${b.frag}, ${t.frag}로 1분이면 끝`, [b, t]));
  if (year) C.slice(0, 2).forEach((c) => add('⑧바뀌는 것', `${year}년 ${K} ${c.frag}, 달라지는 것`, [c]));
  pair(Dtrap, A, 3).forEach(([d, a]) =>
    add('⑨통념 받아치기', `${K} ${d.frag}${josa(d.frag, '이라던데', '라던데')}, ${a.frag}도 그런가?`, [d, a]),
  );

  /* ── 얕은 수집 대비 (2026-08-23) ──
     위 아홉 패턴은 조각을 두 개씩 짝지어 쓴다. "간병비 지원"처럼 자동완성이 39개밖에
     안 붙는 주제는 D·E·F 통이 통째로 비어서 후보가 0개로 나왔다.
     0개를 내놓고 "수집을 다시 하라"고 하면 자동화가 아니다.
     조각 하나로도 서는 틀을 준비해 둔다 — 조각은 여전히 실검색어에서만 온다. */
  if (out.length < 8) {
    const seenFrag = new Set<string>();
    const top = pool
      .filter((f) => (seenFrag.has(f.frag) ? false : (seenFrag.add(f.frag), true)))
      .sort((a, b) => a.rank - b.rank)
      .slice(0, 10);
    for (const f of top) {
      add('④자기대입', `${K} ${f.frag}, 어디까지 되나`, [f]);
      add('⑥함정 경고', `${K} ${f.frag}, 대상에서 빠지는 경우까지`, [f]);
    }
    pair(top, top, 4).forEach(([x, y]) => add('③절차 묶음', `${K} ${x.frag}부터 ${y.frag}까지`, [x, y]));
  }

  /* 규칙 필터 — docs/title-corpus-kb.md 금지 3종 + title-formula 훅의 세부키워드 */
  const SUB = /언제|신청|방법|사용처|조회|서류|얼마|금액|조건|자격|기간|대상|준비|나이|기준|비교|차이|계산|한도|어디|단점|해지|전환|일당|비용|가격|가입|발급|감액|중복/;
  const seen = new Set<string>();
  return out
    .filter((c) => !/(요|다)[!?.]?$/.test(c.title))               /* 해요체·합니다체 종결 금지 */
    .filter((c) => !/\d+년\s*\d*개월|\d+년\s*이상/.test(c.title)) /* 자격 숫자로 모수 좁히기 금지 */
    .filter((c) => SUB.test(c.title))                             /* 세부키워드 필수 */
    .filter((c) => c.title.length >= 14 && c.title.length <= 52)
    .filter((c) => (seen.has(norm(c.title)) ? false : (seen.add(norm(c.title)), true)))
    .map((c, i) => ({ ...c, n: i + 1 }))
    .slice(0, 30);
}

function step1() {
  const kj = keywordData();
  const cands = buildTitles(kj);
  const s = loadState();

  console.log(`\n${LINE}\n 1단계 타이틀 — 실검색어 조각으로만 조립한 후보 ${cands.length}개\n${LINE}`);
  if (!cands.length) {
    console.log('\n 후보가 안 나왔다 — 준 목록이 얕다. 실검색어를 더 넣는다.\n');
    process.exit(1);
  }
  for (const c of cands) {
    console.log(`\n ${String(c.n).padStart(2)} [${c.pattern}]  ${c.title}`);
    console.log(`     ← ${c.from.join(' · ')}`);
  }
  saveState({ ...s, keyword, slug: SLUG, step: 1, candidates: cands });
  const slugArg = flagVal('--slug') ? ` --slug ${SLUG}` : '';
  console.log(`\n${LINE}`);
  console.log(` 고른 뒤:  npx tsx scripts/write.ts "${keyword}" --pick {번호}${slugArg}`);
  console.log(`${LINE}\n`);
}

/* ══════════ 2단계 — 고른 타이틀의 조각이 곧 소제목이다 ══════════ */

function subheadsFrom(kj: any): string[] {
  const q: string[] = [
    ...(kj.merged?.byIntent?.question ?? []),
    ...(kj.google?.paa ?? []),
    ...(kj.naver?.related ?? []),
  ];
  const themes = kj.merged?.byTheme ?? {};
  const spread = ['A_condition', 'C_apply', 'B_amount', 'D_caution', 'F_compare', 'E_target']
    .flatMap((k) => (themes[k] ?? []).slice(0, 2) as string[]);

  /* 질문형 실검색어가 우선. 명사구는 뒤에 채우고, 물음표는 붙이지 않는다 —
     "간병인보험비용?" 같은 가짜 질문을 만드느니 2단계 점검에서 걸리게 둔다. */
  const isQ = (s: string) => /(나요|인가요|되나요|할까|을까|까요|[?？])/.test(s);

  /* 수집본에 실시간 급상승어가 섞여 있을 수 있다(2026-06-26~08-23 셀렉터 버그).
     타이틀은 fragOf 가 씨앗 접두만 받아서 애초에 안 들어가지만, 소제목은 뚫린다.
     쓰는 자리에서 막는다 — 수집본을 지우면 정당한 연관어까지 죽는다. */
  const bigrams = (x: string) => {
    const t = x.replace(/\s+/g, '');
    return Array.from({ length: Math.max(0, t.length - 1) }, (_, i) => t.slice(i, i + 2));
  };
  const seedGrams = new Set(bigrams(keyword));
  const onTopic = (s: string) => bigrams(s).some((g) => seedGrams.has(g));
  const picked: string[] = [];
  const take = (list: string[], want: boolean) => {
    for (const raw of list) {
      if (picked.length >= 6) return;
      const s = String(raw).trim();
      if (s.length < 5 || s.length > 40) continue;
      if (norm(s) === norm(keyword)) continue;         /* 키워드 그 자체는 소제목이 아니다 */
      if (!onTopic(s)) continue;                       /* 급상승어 오염 차단 */
      if (isQ(s) !== want) continue;
      const f = fragOf(s) || s;
      if (picked.some((p) => tooClose(fragOf(p) || p, f))) continue;
      picked.push(isQ(s) && !/[?？]$/.test(s) ? `${s}?` : s);
    }
  };
  take(q, true);
  take(spread, true);
  take(spread, false);
  return picked;
}

function pick(nRaw: string) {
  const s = loadState();
  const n = Number(nRaw);
  const c = (s.candidates ?? []).find((x) => x.n === n);
  if (!c) {
    console.log(`후보 ${nRaw} 번이 없다. 먼저 --1 을 돌린다.`);
    process.exit(1);
  }

  const kj = keywordData();
  const subs = subheadsFrom(kj);
  const slot = (i: number) => (i === 1 || i === 3 || i === subs.length - 1 ? '**슬롯**' : '');

  writeFileSync(
    OUTLINE,
    [
      `# 구성표 — ${keyword} (${SLUG})`,
      '',
      `**타이틀** ${c.title}`,
      `**패턴** ${c.pattern}`,
      `**출처 검색어** ${c.from.join(' · ')}`,
      '',
      '## hero (서론) — 여기만 사람이 쓴다',
      '',
      '(공감 → 대안이 왜 어려운가 → 그래서 이게 있다(금액) → 다만 다 되는 건 아니다 → 넘기는 한 줄)',
      '',
      '**← 상단 버튼: [행동 라벨]**',
      '',
      '## 소제목 — 실검색어 그대로 (스크립트가 채웠다)',
      '',
      '| # | 소제목 | 버튼 |',
      '|---|---|---|',
      ...subs.map((t, i) => `| qa${i + 1} | ${t} | ${slot(i)} |`),
      '',
      '## 버튼 — 목적지를 3단계가 실제로 연다',
      '',
      '| 슬롯 | 앞 문장(유도) | 라벨 | 목적지 |',
      '|---|---|---|---|',
      '| hero | ...하셔야겠죠 | [행동 라벨] | https:// |',
      '| qa2 |  |  | https:// |',
      '| qa4 |  |  | https:// |',
      '',
      '## 오해 소지 — 본문에서 반드시 풀 것',
      '',
      '1. ',
      '2. ',
      '3. ',
      '',
    ].join('\n'),
    'utf8',
  );

  if (!existsSync(FACT)) {
    writeFileSync(
      FACT,
      [
        `# 팩트시트 — ${keyword} (${SLUG})`, '',
        `**타이틀** ${c.title}`, '',
        '## 0. 관할 확정', '', '| 항목 | 내용 |', '|---|---|', '| 소관 | |', '| 1차 출처 | |', '',
        '## 1. 수치', '', '| 항목 | 값 | 1차 출처 | 교차 출처 |', '|---|---|---|---|', '',
        '## 2. 단서 조항', '',
        '## 3. 확보하지 못한 것 (본문에 쓰지 않음)', '',
        '## 4. 오해 소지 — 본문에서 푼 자리', '',
      ].join('\n'),
      'utf8',
    );
  }
  if (!existsSync(DRAFT)) {
    writeFileSync(
      DRAFT,
      [`# 문구 초안 — ${keyword}`, '', `**타이틀** ${c.title}`, '', '(서론)', '', '**[행동 라벨]** (https://)', ''].join('\n'),
      'utf8',
    );
  }

  saveState({ ...s, step: 2, title: c.title, pattern: c.pattern, from: c.from, subheads: subs });

  console.log(`\n${LINE}\n 2단계 구성표 — 뼈대를 만들었다\n${LINE}\n`);
  console.log(` 타이틀  ${c.title}`);
  console.log(` 패턴    ${c.pattern}`);
  console.log(` 소제목  ${subs.length}개 (실검색어 그대로)`);
  subs.forEach((t, i) => console.log(`         qa${i + 1} ${t}`));
  console.log(`\n 채울 곳: scripts/output/outline-${SLUG}.md 의 hero 서론 + 버튼 라벨·목적지`);
  console.log(` 채운 뒤: npx tsx scripts/write.ts "${keyword}" --2\n`);
}

function step2check() {
  const s = loadState();
  if (!existsSync(OUTLINE)) {
    console.log('구성표가 없다. 먼저 --1 → --pick N.');
    process.exit(1);
  }
  const md = readFileSync(OUTLINE, 'utf8');
  const holes: string[] = [];
  if (/\(공감 → 대안이/.test(md)) holes.push('hero 서론이 안내문 그대로다');
  if (/\[행동 라벨\]/.test(md)) holes.push('버튼 라벨이 비었다');
  if ((md.match(/https?:\/\/\S{4,}/g) ?? []).length < 2) holes.push('버튼 목적지 URL 이 2개 미만이다');
  if (/\| qa1 \|\s*\|/.test(md)) holes.push('소제목이 비었다');
  /* 명사구로 채워진 소제목은 질문형으로 다듬어야 한다 (스크립트는 문장을 짓지 않는다).
     버튼 표에도 qa 행이 있으므로 소제목 절만 잘라서 본다 */
  const subSection = md.split('## 소제목')[1]?.split('\n## ')[0] ?? '';
  const flat = (subSection.match(/^\| qa\d+ \| ([^|]+)\|/gm) ?? [])
    .map((l) => l.split('|')[2].trim())
    .filter((t) => t && !/[?？]$/.test(t));
  if (flat.length) holes.push(`소제목 ${flat.length}개가 질문형이 아니다: ${flat.join(' / ')}`);

  console.log(`\n${LINE}\n 2단계 점검 — ${s.title ?? '(타이틀 없음)'}\n${LINE}\n`);
  if (holes.length) {
    holes.forEach((h) => console.log(`  ❌ ${h}`));
    console.log(`\n  scripts/output/outline-${SLUG}.md 를 채우고 다시 돌린다.\n`);
    process.exit(1);
  }
  console.log('  ✅ 빈칸 없음 — 구성표를 채팅에 올려 승인받는다');
  console.log(`\n  승인되면: npx tsx scripts/write.ts "${keyword}" --approve\n`);
}

function approve() {
  const s = loadState();
  if (!existsSync(OUTLINE)) {
    console.log('구성표가 없다.');
    process.exit(1);
  }
  const md = readFileSync(OUTLINE, 'utf8');
  if (/\(공감 → 대안이|\[행동 라벨\]/.test(md)) {
    console.log('빈칸이 남았다 — 먼저 --2 로 점검한다.');
    process.exit(1);
  }
  const stamp = {
    slug: SLUG,
    keyword,
    title: s.title ?? '',
    pattern: s.pattern ?? '',
    subheads: s.subheads ?? [],
    outline: `scripts/output/outline-${SLUG}.md`,
    approved: true,
    approvedAt: today(),
  };
  writeFileSync(STAGE2, JSON.stringify(stamp, null, 2), 'utf8');
  saveState({ ...s, step: 3, approvedAt: stamp.approvedAt });
  console.log(`\n ✅ 승인 도장 — scripts/output/stage2-${SLUG}.json (${stamp.approvedAt})`);
  console.log(` 다음: npx tsx scripts/write.ts "${keyword}" --3\n`);
}

/* ══════════ 3단계 — 구성표에 적힌 URL 을 전부 열어 추출본을 만든다 ══════════ */

function step3() {
  const s = loadState();
  const texts = [OUTLINE, FACT, DRAFT].filter(existsSync).map((f) => readFileSync(f, 'utf8')).join('\n');
  const urls = Array.from(
    new Set((texts.match(/https?:\/\/[^\s)|\]]+/g) ?? []).map((u) => u.replace(/[.,]$/, ''))),
  ).filter((u) => u.length > 12);

  console.log(`\n${LINE}\n 3단계 사실 — 출처 ${urls.length}곳을 연다\n${LINE}\n`);
  if (!urls.length) {
    console.log(' 구성표·팩트시트에 URL 이 없다. 1차 출처를 먼저 적는다.\n');
    process.exit(1);
  }

  try {
    execSync(`npx tsx scripts/fetch-source.ts ${urls.map((u) => `"${u}"`).join(' ')}`, {
      cwd: ROOT,
      stdio: 'inherit',
    });
  } catch {
    /* 개별 실패는 아래에서 파일 유무로 다시 판정한다 */
  }

  const got: { url: string; chars: number; file: string }[] = [];
  const short: string[] = [];
  const missing: string[] = [];
  const merged: string[] = [];

  for (const u of urls) {
    const f = join(OUT, 'sources', snapName(u));
    if (!existsSync(f)) {
      missing.push(u);
      continue;
    }
    const body = readFileSync(f, 'utf8');
    const chars = Number(body.match(/^CHARS: (\d+)/m)?.[1] ?? body.length);
    got.push({ url: u, chars, file: `scripts/output/sources/${snapName(u)}` });
    if (chars < 1500) short.push(`${u} (${chars}자)`);
    merged.push(`\n===== ${u} =====\n${body}`);
  }

  if (merged.length) writeFileSync(SOURCE, merged.join('\n'), 'utf8');
  saveState({ ...s, step: 4, sources: got });

  console.log(`\n 받음 ${got.length} / ${urls.length}`);
  if (short.length) {
    console.log('\n ⚠ 짧다 — 아코디언·JS 로딩이라 본문이 안 왔다. Playwright MCP 로 직접 열어라:');
    short.forEach((x) => console.log(`     · ${x}`));
  }
  if (missing.length) {
    console.log('\n ❌ 못 받음 — 봇 차단이면 Claude in Chrome → law.go.kr/easylaw → korea.kr PDF 순으로:');
    missing.forEach((x) => console.log(`     · ${x}`));
  }
  console.log(`\n 추출본: scripts/output/source-${SLUG}.txt`);
  console.log(` 본문을 쓴 뒤: npx tsx scripts/write.ts "${keyword}" --4\n`);
  if (missing.length) process.exit(1);
}

/* ══════════ 4단계 — 추출본과 완성글을 맞춰본다 ══════════ */

function step4() {
  console.log(`\n${LINE}\n 4단계 대조 — 추출본 ↔ 완성글\n${LINE}\n`);

  /* 대조할 글이 없으면 검사기는 "볼 것 없음"으로 전부 통과한다.
     그 초록불이 제일 위험하다 — 안 쓴 글에 합격 도장이 찍힌다. */
  /* 스포크 파일 이름은 한글인데 slug 는 영문이라 파일명으로는 못 찾는다.
     registry 에 그 slug 가 등록돼 있으면 글이 있는 것이다 (2026-08-24 교정). */
  let registered = false;
  try {
    registered = readFileSync(join(ROOT, 'data', 'spokes', 'registry.ts'), 'utf8').includes(`'${SLUG}':`);
  } catch { /* registry 없으면 아래 파일 검사로 */ }
  const written =
    registered ||
    existsSync(join(ROOT, 'data', 'policies', `${SLUG}.ts`)) ||
    (execSync(`git ls-files "app/policy/[id]/[spoke]/content/**/${SLUG}.tsx"`, { cwd: ROOT })
      .toString().trim().length > 0);
  if (!written) {
    console.log(` ❌ 대조할 글이 없다 — data/policies/${SLUG}.ts 도, 같은 이름 스포크도 없다`);
    console.log('    본문을 먼저 쓴다. 글 없이 통과한 초록불은 합격이 아니다.\n');
    process.exit(1);
  }
  if (!existsSync(SOURCE)) console.log(` ⚠ 추출본이 없다(source-${SLUG}.txt) — 3단계를 건너뛰었다\n`);

  /* 화면 캡처가 없으면 막는다 (2026-08-24 신설).
     텍스트만으로 표를 옮기면 어느 행이 어느 회사인지 추정하게 된다.
     그 추정이 틀려 하루에 7건이 나갔다. 캡처는 선택이 아니라 3단계의 절반이다. */
  const shotDir4 = join(OUT, 'captures');
  const shots4 = existsSync(shotDir4)
    ? readdirSync(shotDir4).filter((f) => f.startsWith(SLUG + '-') && f.endsWith('.png'))
    : [];
  if (!shots4.length) {
    console.log(' ❌ 화면 캡처가 없다 — scripts/output/captures/' + SLUG + '-*.png');
    console.log('    3단계는 텍스트 추출 + 이미지 추출 둘 다다. 캡처 없이 쓴 글은 통과시키지 않는다.');
    console.log(`    다시: npx tsx scripts/write.ts "${keyword}" --slug ${SLUG} --3\n`);
    process.exit(1);
  }
  console.log(` 화면 캡처 ${shots4.length}장 확인 (captures/${SLUG}-*.png)\n`);

  const CHECKS: [string, string][] = [
    ['원문 대조 (오차·누락·근거없는말·출처)', `npx tsx scripts/check-source-match.ts ${SLUG}`],
    ['배선 무결성', 'npx tsx scripts/verify-integrity.ts --strict'],
    ['타입 형태', 'npx tsx scripts/check-type-shape.ts'],
  ];
  let bad = 0;
  for (const [name, cmd] of CHECKS) {
    try {
      execSync(cmd, { cwd: ROOT, stdio: 'pipe' });
      console.log(`  ✅ ${name}`);
    } catch (e: any) {
      bad++;
      console.log(`  ❌ ${name}`);
      `${e.stdout ?? ''}${e.stderr ?? ''}`
        .trim()
        .split('\n')
        .slice(-8)
        .forEach((l) => console.log(`       ${l}`));
    }
  }
  console.log(`\n ${bad === 0 ? '통과 — 커밋해도 된다' : `${bad}건 남았다 — 고치고 다시 돌린다`}\n`);
  process.exit(bad ? 1 : 0);
}

/* ══════════ 상태판 (인자 없이 부를 때) ══════════ */

function status() {
  const s = loadState();
  /* 같은 주제 글이 이미 있나 — 경력증명서 건에서 id 660 을 모르고 덮어썼다 */
  const POLICY = join(ROOT, 'data', 'policies');
  const dup: string[] = [];
  if (existsSync(POLICY)) {
    for (const f of readdirSync(POLICY)) {
      if (!f.endsWith('.ts') || /^(manifest|index|registry)\.ts$/.test(f)) continue;
      const t = readFileSync(join(POLICY, f), 'utf8').match(/^\s{2}title:\s*'([^']+)'/m)?.[1] ?? '';
      if (keyword.split(/\s+/).filter((w) => w.length > 1).some((w) => `${f} ${t}`.includes(w))) {
        dup.push(`${f.replace(/\.ts$/, '')} — ${t}`);
      }
    }
  }

  console.log(`\n${LINE}\n 글 진행기 — "${keyword}" (${SLUG})\n${LINE}`);
  if (dup.length) {
    console.log(`\n ⚠ 같은 주제 글 ${dup.length}건 — 덮어쓰지 말고 먼저 열어볼 것`);
    dup.slice(0, 5).forEach((d) => console.log(`     · ${d}`));
  }
  const mark = (n: number, name: string, done: boolean, extra = '') =>
    console.log(` ${done ? '✅' : '⬜'} ${n}단계 ${name}${extra ? '  ' + extra : ''}`);

  console.log('');
  mark(1, '타이틀', !!s.title, s.title ?? '');
  mark(2, '구성표 승인', !!s.approvedAt, s.approvedAt ?? '');
  mark(3, '출처 추출', existsSync(SOURCE), s.sources ? `${s.sources.length}곳` : '');
  mark(4, '대조', false);

  const next = !s.candidates
    ? '--1'
    : !s.title
      ? '--pick {번호}'
      : !s.approvedAt
        ? '--2 → --approve'
        : !existsSync(SOURCE)
          ? '--3'
          : '--4';
  console.log(`\n${LINE}\n 지금 칠 것:  npx tsx scripts/write.ts "${keyword}" ${next}\n${LINE}\n`);
}

/* ══════════ 라우팅 ══════════ */

if (has('--1')) step1();
else if (flagVal('--pick')) pick(flagVal('--pick')!);
else if (has('--2')) step2check();
else if (has('--approve')) approve();
else if (has('--3')) step3();
else if (has('--4') || has('--final')) step4();
else status();
