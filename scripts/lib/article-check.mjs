/**
 * 파이프라인 사전 검사 — 설계도(plan)·초안(draft) 을 파일에 쓰기 전에 JSON 상태로 잡는다.
 *
 * 여기서 걸리면 new-spoke·tsc·게이트까지 가지 않고 바로 고치기 호출로 간다 (호출 한 번이 비싸다).
 * 규칙은 이 저장소의 검사기와 훅에서 글자 그대로 옮겼다 — 최종 판정은 언제나 원본이 한다:
 *   · 숫자 ↔ 추출본       scripts/check-source-backing.ts (NUM) · check-source-match.ts (TOKEN·BANNED)
 *   · 버튼 슬롯 2·4·마지막  app/policy/[id]/[spoke]/SpokeClient.tsx 221행 · scripts/new-spoke.ts
 *   · 타이틀·소제목        spec 고정 (사장님이 준다 — 심판하지 않는다, 2026-09-19)
 *   · 라벨 구조            docs/hook-patterns.md "게이트 판정 방식" — [구체적 대상] + [행동 종결(…기)]
 * 규칙이 바뀌면 원본 검사기와 함께 바꾼다. 검사기를 새로 늘리지 않는다.
 */

/* ── check-source-backing.ts 와 같은 수치 규칙 (단위가 붙은 숫자만 수치다) ── */
const NUM = /(\d[\d,]*(?:\.\d+)?)\s*(세대|만원|억원|천원|원|%|세|회|일|배|개월|년|명|시간|주|건|점)/g;
const IGNORE_UNIT = new Set(["세대"]);
const stripComma = (s) => String(s).replace(/(\d),(?=\d)/g, "$1");

/* ── check-source-match.ts 의 근거 없는 말 ── */
const BANNED = [
  [/(?<![가-힣])약\s*\d/, "약 N"], [/대략/, "대략"], [/대충/, "대충"],
  [/\s정도\s/, "정도"], [/\d+\s*쯤/, "쯤"], [/아마도/, "아마도"],
  [/추정/, "추정"], [/예상\s*컨대/, "예상컨대"],
  [/대부분/, "대부분"], [/대개/, "대개"], [/경우가 많/, "경우가 많"],
  [/흔합니다/, "흔합니다"], [/대다수/, "대다수"], [/거의 모든/, "거의 모든"],
];

const norm = (s) => String(s || "").replace(/[\s"“”'’|·ㆍ!?，,.]/g, "").toLowerCase();
const READ_ONLY = /(보기|살펴보기|알아보기|읽어보기)$/;
const GENERIC_HEAD = /^(홈페이지|정보|자료|여기|더|그냥)\s/;
const isQuestion = (s) => /[?？]$/.test(String(s).trim());

/** 버튼이 화면에 그려지는 qa 인덱스 — SpokeClient.tsx 221행과 같은 식 */
export const slotsFor = (n) => [...new Set([2, 4, n - 1])].filter((i) => i >= 0 && i < n);

/** 사람이 읽는 문자열을 전부 모은다 (URL·날짜 제외) */
export function proseOf(v, key = "", out = []) {
  if (v == null) return out;
  if (typeof v === "string") {
    if (/^(href|url|sourceUrl|anchor|datePublished|dateModified)$/.test(key)) return out;
    if (/^https?:\/\//.test(v) || /^\/policy\//.test(v)) return out;
    out.push(v);
    return out;
  }
  if (Array.isArray(v)) { for (const x of v) proseOf(x, key, out); return out; }
  if (typeof v === "object") { for (const [k, x] of Object.entries(v)) proseOf(x, k, out); }
  return out;
}

/** 이 숫자(자릿수 문자열)가 원문 풀에 있는가 — 숫자 경계로 본다 (check-source-backing 과 같은 식) */
export function digitsInPool(d, pool) {
  const esc = d.split(".").join("\\.");
  return new RegExp(`(?<!\\d)${esc}(?!\\d)`).test(pool);
}

/** 본문 숫자 중 원문에 없는 것 */
export function unbackedNumbers(strings, poolRaw) {
  const pool = stripComma(poolRaw);
  const bad = new Map();
  for (const s of strings) {
    for (const m of stripComma(s).matchAll(NUM)) {
      if (IGNORE_UNIT.has(m[2])) continue;
      const d = m[1];
      if (d.length > 12) continue;
      if (!digitsInPool(d, pool)) bad.set(d + m[2], m[0]);
    }
  }
  return [...bad.values()];
}

export function bannedWords(strings, pool) {
  const body = strings.join(" ");
  return BANNED.filter(([re]) => re.test(body) && !re.test(pool)).map(([, l]) => l);
}

/* ══════════ 설계도 ══════════ */

/**
 * @param plan  claude 가 낸 설계도
 * @param ctx   { keyword, queries: string[], existingTitles: string[], hubPath, spokePaths: Set<string>, fixedTitle, fixedSubheads: string[] }
 */
/** 타이틀 안에서 한글 3자 머리가 두 토큰에 겹치면 그 머리들을 돌려준다 ("무해지" ← "무해지 보험료인상"+"무해지보험 판매중지") */
export function dupHeads(title) {
  const toks = String(title).split(/[\s,·?!:]+/).filter(Boolean);
  const seen = new Map();
  for (const t of toks) { const m = t.match(/^[가-힣]{3}/); if (!m) continue; seen.set(m[0], [...(seen.get(m[0]) || []), t]); }
  return [...seen.entries()].filter(([, ts]) => ts.length >= 2).map(([, ts]) => ts.join(" / "));
}

export function checkPlan(plan, ctx) {
  const errs = [];
  const title = String(plan.title || "").replace(/\s+/g, " ").trim();
  plan.title = title;

  /* 타이틀 — spec 그대로인지만 본다. 후킹·조각·길이·종결 판정은 2026-09-19 삭제 (사장님이 준다) */
  if (!title) errs.push("title 이 없다");
  else if (ctx.fixedTitle && norm(title) !== norm(ctx.fixedTitle)) errs.push(`title 이 spec 과 다르다 — 글자 그대로: "${ctx.fixedTitle}"`);
  for (const t of ctx.existingTitles) if (norm(t) === norm(title)) errs.push(`같은 타이틀의 글이 이미 있다: "${t}"`);

  /* 소제목 — spec 순서·글자 그대로. 개수는 spec 이 정한다 (보통 4) */
  const subs = Array.isArray(plan.subheads) ? plan.subheads : [];
  if (subs.length < 3 || subs.length > 7) errs.push(`subheads ${subs.length}개 — 3~7개`);
  const want = Array.isArray(ctx.fixedSubheads) ? ctx.fixedSubheads : [];
  if (want.length) {
    if (subs.length !== want.length) errs.push(`subheads ${subs.length}개 — spec 은 ${want.length}개`);
    subs.forEach((s, i) => { if (want[i] && norm(s?.q) !== norm(want[i])) errs.push(`subheads[${i}] 가 spec 과 다르다 — "${want[i]}"`); });
  } else subs.forEach((s, i) => { if (!String(s?.q || "").trim()) errs.push(`subheads[${i}] 의 q 가 비었다`); });

  /* 버튼 — 목적지는 설계 단계에서 정한다 (Playwright 가 다음 단계에서 연다) */
  const n = subs.length;
  const slots = slotsFor(n);
  const b = plan.buttons || {};
  const hero = b.hero || {};
  const labelErr = (label, where, max) => {
    const l = String(label || "").trim();
    if (!l) return `${where} 라벨이 비었다`;
    if (l.length > max) return `${where} 라벨 "${l}" ${l.length}자 — ${max}자까지`;
    if (!/기$/.test(l)) return `${where} 라벨 "${l}" — 행동 종결(…하기/받기/조회하기)로 끝낸다`;
    if (!/\s/.test(l)) return `${where} 라벨 "${l}" — [구체적 대상] + [행동] 두 어절 이상 ("확인하기" 만은 금지)`;
    if (GENERIC_HEAD.test(l)) return `${where} 라벨 "${l}" — 대상이 빈말(홈페이지·정보·자료·여기)`;
    return "";
  };
  const e1 = labelErr(hero.label, "hero", 16); if (e1) errs.push(e1);
  if (READ_ONLY.test(String(hero.label || ""))) errs.push(`hero 라벨 "${hero.label}" — 읽는 버튼("~보기") 금지, 행동을 시킨다`);
  const okUrl = (u) => /^https?:\/\/[^\s'"]+$/.test(String(u || "")) || String(u || "") === ctx.hubPath || ctx.spokePaths.has(String(u || ""));
  const rootUrl = (u) => /^https?:\/\/[^/]+\/?$/.test(String(u || ""));
  if (!okUrl(hero.url)) errs.push(`hero 버튼 목적지가 URL 이 아니다: "${hero.url}" (http 딥링크 또는 ${ctx.hubPath} 또는 기존 스포크 경로)`);
  const slotList = Array.isArray(b.slots) ? b.slots : [];
  const got = slotList.map((s) => Number(s?.qaIndex));
  if (got.length !== slots.length || slots.some((i) => !got.includes(i))) {
    errs.push(`buttons.slots 의 qaIndex 는 정확히 [${slots.join(", ")}] 이어야 한다 (지금 [${got.join(", ")}]) — 화면은 그 자리에만 버튼을 그린다`);
  }
  const labels = [String(hero.label || "")];
  for (const s of slotList) {
    const e = labelErr(s?.label, `slots[qa${s?.qaIndex}]`, 18); if (e) errs.push(e);
    if (!okUrl(s?.url)) errs.push(`slots[qa${s?.qaIndex}] 목적지가 URL 이 아니다: "${s?.url}"`);
    if (rootUrl(s?.url)) errs.push(`slots[qa${s?.qaIndex}] 목적지가 기관 루트다: ${s.url} — 그 일을 하는 화면(딥링크)만`);
    labels.push(String(s?.label || ""));
  }
  if (rootUrl(hero.url)) errs.push(`hero 목적지가 기관 루트다: ${hero.url} — 딥링크만`);
  const dupL = labels.filter((l, i) => l && labels.indexOf(l) !== i);
  if (dupL.length) errs.push(`같은 버튼 라벨이 반복된다: ${[...new Set(dupL)].join(" / ")}`);
  const ends = labels.map((l) => l.split(/\s+/).pop());
  if (labels.length >= 3 && new Set(ends).size === 1) errs.push(`버튼 4개의 끝 어절이 전부 "${ends[0]}" — 결을 바꾼다`);

  /* 출처 — 1차 출처만, 2~4개, 딥링크 */
  const srcs = Array.isArray(plan.sources) ? plan.sources : [];
  if (srcs.length < 1 || srcs.length > 5) errs.push(`sources ${srcs.length}개 — 1~5개`);
  srcs.forEach((s, i) => {
    if (!/^https?:\/\//.test(String(s?.url || ""))) errs.push(`sources[${i}] url 이 아니다: "${s?.url}"`);
    else if (rootUrl(s.url)) errs.push(`sources[${i}] 가 기관 루트다: ${s.url} — 그 내용이 실제로 적힌 화면`);
    if (/blog\.|tistory|brunch|news\.|\.co\.kr\/(news|article)|naver\.com\/(blog|cafe|kin)|daum\.net|youtube|namu\.wiki|wikipedia/i.test(String(s?.url || ""))) {
      errs.push(`sources[${i}] 는 1차 출처가 아니다 (블로그·언론·위키): ${s.url}`);
    }
    if (!String(s?.name || "").trim()) errs.push(`sources[${i}] name(기관 — 문서명)이 비었다`);
  });

  const faq = Array.isArray(plan.faq) ? plan.faq : [];
  if (faq.length !== 2) errs.push(`faq ${faq.length}개 — 2개 (2026-09-19 사장님 확정)`);
  if (!/^[가-힣A-Za-z][가-힣A-Za-z0-9]{1,15}$/.test(String(plan.fileName || ""))) errs.push(`fileName "${plan.fileName}" — 한글 2~16자, 공백·기호 없이 (파일명이자 export 이름)`);
  if (!String(plan.breadcrumb || "").trim() || String(plan.breadcrumb).length > 20) errs.push("breadcrumb — 20자 이내 명사구");
  return errs;
}

/* ══════════ 초안 ══════════ */

/**
 * @param draft { spoke, notUsing, caveats, sourceName }
 * @param plan  검증된 설계도 (buttons 는 Playwright 확인 뒤)
 * @param ctx   { pool: string, allowedUrls: Set<string>, hubPath, spokePaths: Set<string> }
 */
export function checkDraft(draft, plan, ctx) {
  const errs = [];
  const sp = draft?.spoke;
  if (!sp || typeof sp !== "object") return ["답에 spoke 객체가 없다"];
  const str = (v) => String(v ?? "").replace(/\s+/g, " ").trim();

  /* 제목·머리 */
  if (norm(sp.h1) !== norm(plan.title)) errs.push(`h1 이 설계도 타이틀과 다르다.\n   h1:   "${sp.h1}"\n   설계: "${plan.title}" — 글자 그대로 쓴다`);
  if (!str(sp.breadcrumb) || str(sp.breadcrumb).length > 20) errs.push("breadcrumb — 20자 이내");
  const desc = str(sp.description);
  if (desc.length < 60 || desc.length > 260) errs.push(`description ${desc.length}자 — 60~260자 (검색결과·서론에 쓰인다)`);
  const hook = str(sp.heroHook);
  const sents = hook.split(/(?<=[.다요죠])\s+/).filter(Boolean);
  if (hook.length < 100 || hook.length > 520) errs.push(`heroHook ${hook.length}자 — 100~520자 (2~5문장: 장면 → 사실+반전)`);
  if (sents.length < 2 || sents.length > 6) errs.push(`heroHook 문장 수 ${sents.length} — 2~6문장`);
  if (/하시길 바랍니다|바랍니다\.?$/.test(hook)) errs.push('heroHook 맺음 "…바랍니다" 금지 — 매번 다르게 맺는다');
  if (/알아보겠습니다|살펴보겠습니다|소개합니다|정리해 ?드리겠습니다/.test(hook)) errs.push("heroHook 에 도입 군더더기(알아보겠습니다·소개합니다) 금지 — 첫 문장이 장면이다");

  /* 상단 버튼 */
  const ha = sp.heroAct || {};
  const hl = str(ha.label);
  if (!hl) errs.push("heroAct.label 이 없다");
  else if (hl.length > 16) errs.push(`heroAct.label "${hl}" ${hl.length}자 — 16자까지 (저장 훅이 막는다)`);
  if (hl && READ_ONLY.test(hl)) errs.push(`heroAct.label "${hl}" — 읽는 버튼 금지`);
  if (hl && !/기$/.test(hl)) errs.push(`heroAct.label "${hl}" — 행동 종결(…기)`);
  if (!ctx.allowedUrls.has(str(ha.href))) errs.push(`heroAct.href "${ha.href}" 가 허용 목적지 밖이다 — 설계도에서 열어 본 주소만`);

  /* 핵심콕콕 */
  const kf = sp.keyFacts && typeof sp.keyFacts === "object" ? Object.entries(sp.keyFacts) : [];
  if (kf.length < 5 || kf.length > 14) errs.push(`keyFacts ${kf.length}행 — 5~14행`);
  for (const [k, v] of kf) if (!str(v) || str(v).length > 200) errs.push(`keyFacts "${k}" 값이 비었거나 200자를 넘는다`);
  for (const [k, arr] of Object.entries(sp.keyFactsHighlights || {})) {
    if (!(k in (sp.keyFacts || {}))) { errs.push(`keyFactsHighlights "${k}" — keyFacts 에 없는 키`); continue; }
    for (const h of arr || []) if (!String(sp.keyFacts[k]).includes(h)) errs.push(`keyFactsHighlights "${k}" 의 "${h}" 가 그 값 안에 없다`);
  }

  /* 카드 — 소제목은 설계도 그대로, 버튼은 슬롯에만 */
  const qa = Array.isArray(sp.qa) ? sp.qa : [];
  const subs = plan.subheads.map((s) => s.q);
  if (qa.length !== subs.length) errs.push(`qa ${qa.length}개 ≠ 설계도 소제목 ${subs.length}개`);
  const slots = slotsFor(subs.length);
  const cues = [], labels = [hl];
  qa.forEach((c, i) => {
    const q = str(c?.q);
    if (subs[i] && norm(q) !== norm(subs[i])) errs.push(`qa[${i}].q "${q}" ≠ 설계도 "${subs[i]}" — 소제목은 글자 그대로`);
    if (c?.anchor !== `q${i + 1}`) errs.push(`qa[${i}].anchor 는 "q${i + 1}"`);
    const intro = str(c?.intro);
    if (intro.length < 250) errs.push(`qa[${i}] intro ${intro.length}자 — 250자 이상 (정본은 500~900자)`);
    if (intro.length > 1600) errs.push(`qa[${i}] intro ${intro.length}자 — 1,600자 이하`);
    const hi = Array.isArray(c?.highlights) ? c.highlights : [];
    if (hi.length < 3 || hi.length > 5) errs.push(`qa[${i}] highlights ${hi.length}개 — 3~5개`);
    for (const h of hi) if (str(h).length > 40) errs.push(`qa[${i}] highlight "${h}" — 40자 이하`);
    if (c?.table) {
      const t = c.table;
      if (!Array.isArray(t.headers) || !Array.isArray(t.rows) || !t.rows.length) errs.push(`qa[${i}] table 에 headers·rows 가 있어야 한다`);
      else for (const r of t.rows) if (!Array.isArray(r) || r.length !== t.headers.length) errs.push(`qa[${i}] table 행의 칸 수가 headers(${t.headers.length})와 다르다`);
    }
    if (c?.box && !str(c.box.content)) errs.push(`qa[${i}] box.content 가 비었다`);
    const hasList = Array.isArray(c?.list) && c.list.filter((x) => str(x)).length >= 2;
    if (!c?.table && !c?.box && !c?.box2 && !hasList)
      errs.push(`qa[${i}] 에 눈으로 보는 것이 없다 — table·box·list 중 하나를 넣는다 (구간·금액 나열이면 table, 조문 한 덩어리면 box, 순서·서류면 list). 글자만 있는 카드는 안 읽힌다`);
    if (c?.act) {
      if (!slots.includes(i)) errs.push(`qa[${i}] 에 act 가 있다 — 버튼은 인덱스 ${slots.join("·")} 에만 그려진다. 다른 자리의 act 는 화면에 안 나온다`);
      const cue = str(c.act.cue), label = str(c.act.label), url = str(c.act.url);
      if (cue.length < 20 || cue.length > 160) errs.push(`qa[${i}] act.cue ${cue.length}자 — 20~160자 (두 문장 이내, 바로 위 문단에서 이어진다)`);
      if (!label) errs.push(`qa[${i}] act.label 이 없다`);
      else {
        if (label.length > 18) errs.push(`qa[${i}] act.label "${label}" ${label.length}자 — 18자까지`);
        if (!/기$/.test(label)) errs.push(`qa[${i}] act.label "${label}" — 행동 종결(…기)`);
        if (!/\s/.test(label)) errs.push(`qa[${i}] act.label "${label}" — [구체적 대상] + [행동] 두 어절 이상`);
      }
      if (!ctx.allowedUrls.has(url)) errs.push(`qa[${i}] act.url "${url}" 가 허용 목적지 밖이다`);
      cues.push(cue); labels.push(label);
    } else if (slots.includes(i)) {
      errs.push(`qa[${i}] 는 버튼 슬롯인데 act 가 없다 (슬롯 ${slots.join("·")} 전부 채운다)`);
    }
    const sn = str(c?.sourceNote);
    if (sn && !/^\*\s*출처:/.test(sn)) errs.push(`qa[${i}] sourceNote 는 "* 출처: …" 로 시작한다`);
  });
  const tableN = qa.filter((c) => c?.table).length;
  if (qa.length >= 3 && tableN < 1) errs.push("글 전체에 표가 하나도 없다 — 기준·금액·가구 유형이 나열된 카드 하나는 table 로 (정본은 표 3개)");
  const noteN = qa.filter((c) => str(c?.sourceNote)).length;
  if (qa.length >= 2 && noteN < Math.ceil(qa.length / 2)) errs.push(`sourceNote ${noteN}/${qa.length} — 절반 이상 (수치를 담은 카드에는 전부)`);
  const dupC = cues.filter((c, i) => c && cues.indexOf(c) !== i);
  if (dupC.length) errs.push("같은 cue 가 두 번 나온다");
  const dupL = labels.filter((l, i) => l && labels.indexOf(l) !== i);
  if (dupL.length) errs.push(`같은 버튼 라벨이 반복된다: ${[...new Set(dupL)].join(" / ")}`);
  const cueEnds = cues.map((c) => c.split(/\s+/).pop());
  if (cues.length >= 2 && new Set(cueEnds).size === 1) errs.push(`cue 의 끝 어절이 전부 "${cueEnds[0]}" — 맺음을 다르게`);
  const cueHeads = cues.map((c) => c.split(/\s+/)[0]);
  if (cues.length >= 3 && new Set(cueHeads).size === 1) errs.push(`cue 가 전부 "${cueHeads[0]}" 로 시작한다`);

  /* FAQ·출처 */
  const faq = Array.isArray(sp.faqData) ? sp.faqData : [];
  if (faq.length !== 2) errs.push(`faqData ${faq.length}개 — 2개 (2026-09-19 사장님 확정)`);
  faq.forEach((f, i) => {
    if (!str(f?.q) || !str(f?.a)) errs.push(`faqData[${i}] q·a 가 비었다`);
    if (str(f?.a).length < 40) errs.push(`faqData[${i}] a 가 ${str(f?.a).length}자 — 40자 이상`);
    if (!str(f?.source)) errs.push(`faqData[${i}] source(출처 이름)가 비었다 — 필수 필드(TS2739)`);
    if (!ctx.allowedUrls.has(str(f?.sourceUrl))) errs.push(`faqData[${i}] sourceUrl "${f?.sourceUrl}" 가 허용 출처 밖이다`);
  });
  const srcs = Array.isArray(sp.sources) ? sp.sources : [];
  if (srcs.length < 1 || srcs.length > 5) errs.push(`sources ${srcs.length}개 — 1~5개`);
  srcs.forEach((s, i) => { if (!str(s?.name) || !ctx.allowedUrls.has(str(s?.url))) errs.push(`sources[${i}] name 이 없거나 url "${s?.url}" 이 허용 출처 밖이다`); });

  /* 모든 주소는 열어 본 것만 */
  const urls = new Set();
  (function walk(v) {
    if (typeof v === "string") { if (/^https?:\/\//.test(v) || /^\/policy\//.test(v)) urls.add(v); return; }
    if (Array.isArray(v)) v.forEach(walk); else if (v && typeof v === "object") Object.values(v).forEach(walk);
  })(sp);
  for (const u of urls) if (!ctx.allowedUrls.has(u)) errs.push(`허용되지 않은 주소: ${u} — 설계도의 출처·버튼·${ctx.hubPath} 만`);

  /* 숫자 ↔ 원문 · 근거 없는 말 · TODO
     타이틀(h1)·소제목(q)은 사장님이 준 문구라 기계가 심판하지 않는다 — push 게이트(check-source-match claimStrings)도 안 본다.
     2026-09-19 계산공식: 소제목의 "34만9700원" 이 고시의 "34만9천7백원" 과 달라 고치기 2회를 헛돌고 실패했다. */
  const prose = proseOf({ ...sp, h1: undefined, qa: (Array.isArray(sp.qa) ? sp.qa : []).map((c) => ({ ...c, q: undefined })) });
  const unb = unbackedNumbers(prose, ctx.pool);
  if (unb.length) errs.push(`원문 추출본에 없는 숫자 ${unb.length}개: ${unb.slice(0, 20).join(" · ")}\n   → 추출본에 그 숫자가 글자 그대로(같은 자릿수) 있어야 한다. 없으면 그 숫자가 든 문장을 뺀다. 환산·반올림·합산 금지`);
  const ban = bannedWords(prose, ctx.pool);
  if (ban.length) errs.push(`근거 없는 말: ${ban.join(", ")} — 원문에 비율이 있으면 그 수치를, 없으면 조건문으로`);
  if (prose.some((s) => /TODO/.test(s))) errs.push("TODO 가 남아 있다");

  /* 단서 조항 — 팩트시트에 들어가고 게이트가 "글에 있나" 를 본다. 글에 없는 숫자를 단서로 적으면 push 가 막힌다 */
  const caveats = Array.isArray(draft.caveats) ? draft.caveats.map(str).filter(Boolean) : [];
  const body = stripComma(prose.join(" "));
  const dropped = [];
  draft.caveats = caveats.filter((c) => {
    const nums = [...stripComma(c).matchAll(NUM)].map((m) => m[1]);
    const ok = nums.every((d) => digitsInPool(d, body));
    if (!ok) dropped.push(c);
    return ok;
  });
  if (dropped.length) draft._droppedCaveats = dropped;
  if (!Array.isArray(draft.notUsing)) draft.notUsing = [];
  return errs;
}
