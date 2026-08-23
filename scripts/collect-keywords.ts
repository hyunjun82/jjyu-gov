/**
 * 키워드 수집기 — 자동완성(네이버·구글 suggest API) + byTheme(A~F) 분류
 *
 * 사용법: npx tsx scripts/collect-keywords.ts "기초연금"
 * 출력: scripts/output/{keyword}.json
 *
 * 구조: ① 네이버·구글 suggest API 직접 fetch(견고) + 주제 씨앗어 16종 → 수백 개 자동완성
 *       ② 브라우저(빙·다음·구글/네이버 SERP)는 best-effort(크래시해도 ① 보존)
 * ※ PAA·연관검색어(질문형)는 헤드리스로 안 잡힌다 → 작성 시 실브라우저(MCP Playwright)로
 *   SERP 직접 수확(CLAUDE.md §2-B Step1②, docs/title-style-24.md §5). 10회 테스트로 검증.
 */

import { chromium, type Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const KEYWORD = process.argv[2];
if (!KEYWORD) {
  console.error('Usage: npx tsx scripts/collect-keywords.ts "키워드"');
  process.exit(1);
}

interface CollectedKeywords {
  seed: string;
  synonyms: string[];
  collectedAt: string;
  naver: { autocomplete: string[]; related: string[] };
  google: { autocomplete: string[]; paa: string[]; related: string[] };
  bing: { autocomplete: string[] };
  daum: { autocomplete: string[] };
  merged: {
    all: string[];
    byIntent: {
      info: string[];       // 정보형: ~이란, ~뜻
      condition: string[];  // 조건형: ~자격, ~기준, ~대상
      action: string[];     // 행동형: ~신청, ~방법, ~서류
      compare: string[];    // 비교형: ~차이, ~vs
      calculate: string[];  // 계산형: ~계산, ~얼마
      confirm: string[];    // 확인형: ~조회, ~확인, ~가능
      question: string[];   // 질문형 (PAA): ~인가요?, ~할 수 있나요?
    };
    // 주제 분류 (docs/title-style-24.md §3 — 24개 정본 그룹)
    byTheme: {
      A_condition: string[]; // 조건·자격·사유
      B_amount: string[];    // 금액·기간·계산
      C_apply: string[];     // 신청·절차·서류
      D_caution: string[];   // 수급 중 주의 (부정수급·중복·환수·페널티)
      E_target: string[];    // 대상별·특수 (계약직·자영·고령·특고·세금·보험료)
      F_compare: string[];   // 비교·중복·차이
    };
  };
}

/* ── 의도 분류 ── */
function classifyIntent(kw: string): string {
  if (/이란|뜻|개념|정의|설명/.test(kw)) return 'info';
  if (/자격|조건|기준|대상|요건|이하|이상|제외/.test(kw)) return 'condition';
  if (/신청|방법|서류|준비|어디서|어떻게|절차|필요/.test(kw)) return 'action';
  if (/차이|vs|비교|다른|뭐가/.test(kw)) return 'compare';
  if (/계산|얼마|금액|지급|수령|월/.test(kw)) return 'calculate';
  if (/조회|확인|가능|받을 수|대상자|해당/.test(kw)) return 'confirm';
  if (/[?？]|나요|한가요|될까|인가|는지/.test(kw)) return 'question';
  return 'info'; // 기본값
}

/* ── 주제 분류 (A~F) — 타이틀 라인업용 ── */
function classifyTheme(kw: string): string {
  if (/차이|vs|비교|중복|다른|뭐가|같이|동시/.test(kw)) return 'F_compare';
  if (/부정수급|환수|추징|반환|감액|반복|벌금|처벌|불이익|신고|페널티|아르바이트|알바|투잡/.test(kw)) return 'D_caution';
  if (/계약직|일용|자영업|특고|예술인|노무|외국인|고령|65세|장애|세금|건강보험|국민연금|보험료|군인|공무원|대학생/.test(kw)) return 'E_target';
  if (/신청|방법|서류|절차|단계|기간|언제|어디서|증빙|접수|기한/.test(kw)) return 'C_apply';
  if (/얼마|금액|계산|상한|하한|일수|며칠|수령|모의|월급|지급액|한도|일당/.test(kw)) return 'B_amount';
  if (/자격|조건|사유|대상|요건|되나|될까|받을 수|받나|인정|이하|이상|제외/.test(kw)) return 'A_condition';
  return 'A_condition'; // 기본값
}

/* ── 네이버 연관검색어 (SERP, 실측 셀렉터) ── */
async function collectNaver(page: Page, keyword: string): Promise<{ autocomplete: string[]; related: string[] }> {
  const autocomplete: string[] = []; // 자동완성은 API가 담당 — 여기선 SERP 연관검색어 수확
  const related: string[] = [];

  try {
    await page.goto(`https://search.naver.com/search.naver?query=${encodeURIComponent(keyword)}`, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(1500);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight)).catch(() => {});
    await page.waitForTimeout(1000);

    const rel = await page.evaluate(() => {
      const out: string[] = [];
      /* 실측: .related_srch .keyword 가 질문형 연관검색어를 담는다.
         2026-06-26 에 "혹시 클래스명이 바뀔까 봐" 넣어둔 와일드카드 폴백
         [class*=related] 와 .api_subject_bx ._keyword 는 2026-08-23 에 뺐다.
         네이버 SERP 에는 실시간 급상승 검색어 블록이 같이 붙어 있어서,
         이 두 개가 "로또당첨번호·태풍경로·하이닉스 주가"를 연관검색어로 긁어왔다.
         (간병비 실비.json 17개 중 8개가 그날의 급상승어였다.)
         셀렉터가 안 잡히면 빈손으로 돌아오는 게 맞다 — 오염된 목록이 더 나쁘다. */
      ['.related_srch .keyword', '.lst_related_srch .keyword'].forEach((s) => {
        document.querySelectorAll(s).forEach((e) => {
          const t = e.textContent?.trim();
          if (t && t.length > 1) out.push(t);
        });
      });
      return out;
    });
    related.push(...rel);
  } catch (e) {
    console.warn('[네이버] 연관 수집 실패:', (e as Error).message);
  }

  return { autocomplete, related };
}

/* ── 구글 자동완성 + PAA ── */
async function collectGoogle(page: Page, keyword: string): Promise<{ autocomplete: string[]; paa: string[]; related: string[] }> {
  const autocomplete: string[] = [];
  const paa: string[] = [];
  const related: string[] = [];

  try {
    // 검색 결과 페이지에서 PAA(People Also Ask) + 관련검색어 수집 (실측 셀렉터)
    await page.goto(`https://www.google.com/search?q=${encodeURIComponent(keyword)}&hl=ko`, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(2000);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight)).catch(() => {});
    await page.waitForTimeout(1000);

    const res = await page.evaluate(() => {
      const paa: string[] = [];
      const related: string[] = [];
      // PAA: heading 역할 요소 중 질문형(물음표·나요·까요…) + 이모지 위젯 제외
      document.querySelectorAll('[jsname][role="heading"], .related-question-pair span, div[data-q]').forEach((e: any) => {
        const t = (e.getAttribute && e.getAttribute('data-q')) || e.textContent?.trim();
        if (t && t.length > 6 && /[?]|나요|까요|있나|되나|얼마|어떻게|언제|무엇|몇/.test(t) && !/[💡🔎📌▶]/.test(t)) paa.push(t);
      });
      // 관련검색어 (하단): 실측 .y6Uyqe / .AuVD
      document.querySelectorAll('.y6Uyqe, .AuVD, .k8XOCe .s75CSd').forEach((e) => {
        const t = e.textContent?.trim();
        if (t && t.length > 2) related.push(t);
      });
      return { paa, related };
    });
    paa.push(...res.paa);
    related.push(...res.related);
  } catch (e) {
    console.warn('[구글] 수집 실패:', (e as Error).message);
  }

  return { autocomplete, paa, related };
}

/* ── 빙 자동완성 ── */
async function collectBing(page: Page, keyword: string): Promise<{ autocomplete: string[] }> {
  const autocomplete: string[] = [];

  try {
    await page.goto(`https://www.bing.com/search?q=${encodeURIComponent(keyword)}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);

    // 연관검색어 (빙은 하단에 표시)
    const relEls = await page.$$('.b_rs a, .b_suggest a');
    for (const el of relEls) {
      const text = await el.textContent();
      if (text?.trim()) autocomplete.push(text.trim());
    }

    // 자동완성
    const searchInput = page.locator('#sb_form_q');
    await searchInput.click();
    await searchInput.clear();
    await searchInput.fill(keyword);
    await page.waitForTimeout(2000);

    const acEls = await page.$$('.sa_sg .sa_tm, #sa_ul li .sa_tm');
    for (const el of acEls) {
      const text = await el.textContent();
      if (text?.trim()) autocomplete.push(text.trim());
    }
  } catch (e) {
    console.warn('[빙] 수집 실패:', (e as Error).message);
  }

  return { autocomplete };
}

/* ── 다음 자동완성 ── */
async function collectDaum(page: Page, keyword: string): Promise<{ autocomplete: string[] }> {
  const autocomplete: string[] = [];

  try {
    await page.goto(`https://search.daum.net/search?q=${encodeURIComponent(keyword)}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);

    // 연관검색어
    const relEls = await page.$$('.relate_keyword .keyword, #netizen_lists_top a');
    for (const el of relEls) {
      const text = await el.textContent();
      if (text?.trim()) autocomplete.push(text.trim());
    }
  } catch (e) {
    console.warn('[다음] 수집 실패:', (e as Error).message);
  }

  return { autocomplete };
}

/* ── 동의어 생성 ── */
function generateSynonyms(keyword: string): string[] {
  const synonymMap: Record<string, string[]> = {
    '기초연금': ['기초노령연금', '노인연금', '65세 연금', '어르신 연금'],
    '근로장려금': ['EITC', '근로장려세제', '장려금'],
    '국가장학금': ['한국장학재단 장학금', '대학생 장학금'],
    '육아휴직급여': ['육아휴직 급여', '육아휴직 수당', '육휴 급여'],
    '기초생활수급자': ['기초수급자', '수급자', '기초생활보장'],
    '주거급여': ['주거 급여', '월세 지원', '임차료 지원'],
  };
  return synonymMap[keyword] || [];
}

/* ── 자동완성 API 직접 fetch (Node, CORS 무관 — DOM 스크래핑보다 견고) ── */
async function fetchGoogleSuggest(kw: string): Promise<string[]> {
  try {
    const url = `https://suggestqueries.google.com/complete/search?client=firefox&hl=ko&q=${encodeURIComponent(kw)}`;
    const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const j: any = await r.json();
    return Array.isArray(j?.[1]) ? j[1].filter((x: any) => typeof x === 'string') : [];
  } catch { return []; }
}

async function fetchNaverSuggest(kw: string): Promise<string[]> {
  try {
    const url = `https://ac.search.naver.com/nx/ac?q=${encodeURIComponent(kw)}&con=1&frm=nv&ans=2&r_format=json&r_enc=UTF-8&r_unicode=0&t_koreng=1&run=2&rev=4&q_enc=UTF-8&st=100`;
    const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', Referer: 'https://search.naver.com/' } });
    const j: any = await r.json();
    const out: string[] = [];
    for (const group of j?.items || []) {
      if (!Array.isArray(group)) continue;
      for (const pair of group) {
        if (Array.isArray(pair) && typeof pair[0] === 'string') out.push(pair[0]);
      }
    }
    return out;
  } catch { return []; }
}

// 주제(A~F)별 하위 씨앗어 — 자동완성 API에 붙여 롱테일을 풍성하게 수집
const THEME_SEEDS = ['자격', '조건', '대상', '얼마', '계산', '금액', '신청', '방법', '기간', '서류', '부정수급', '중복', '계약직', '자영업', '세금', '비교'];

/* 자음 — 자동완성에 붙이면 우리가 생각 못 한 실검색어가 나온다 */
const JAMO = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

/* ── 메인 ── */
async function main() {
  console.log(`\n🔍 "${KEYWORD}" 검색어 수집 시작...\n`);

  const synonyms = generateSynonyms(KEYWORD);
  const allKeywords = [KEYWORD, ...synonyms];

  let naverResult = { autocomplete: [] as string[], related: [] as string[] };
  let googleResult = { autocomplete: [] as string[], paa: [] as string[], related: [] as string[] };
  let bingResult = { autocomplete: [] as string[] };
  let daumResult = { autocomplete: [] as string[] };

  // ① 자동완성 API 직접 수집 (Node fetch — 브라우저 불필요, 가장 견고한 1차 소스)
  //    기본 키워드 + 동의어 + 주제 하위 씨앗어로 롱테일 확보
  const apiSeeds = [
    ...allKeywords,
    ...allKeywords.flatMap((k) => THEME_SEEDS.map((s) => `${k} ${s}`)),
    /* 자음 확장 (2026-08-20 신설) — 주제 씨앗어는 우리가 고른 말이라 우리가
       예상한 것만 나온다. 자음 하나만 붙이면 자동완성이 실제로 많이 찍히는
       말을 알아서 뱉는다. '간병인 보험' 로 재보니 9개 → 38개(4배)였고
       "단점·디시·더쿠·들어야 하나요" 처럼 씨앗어로는 안 나오는 것이 잡혔다. */
    ...allKeywords.flatMap((k) => JAMO.map((c) => `${k} ${c}`)),
  ];
  console.log(`  [API] 자동완성 직접 수집 (${apiSeeds.length}개 씨앗어)...`);
  for (const seed of apiSeeds) {
    const [g, n] = await Promise.all([fetchGoogleSuggest(seed), fetchNaverSuggest(seed)]);
    googleResult.autocomplete.push(...g);
    naverResult.autocomplete.push(...n);
  }

  // ② 브라우저 SERP 수집 (빙·다음 자동완성 + 구글/네이버 연관·PAA) — best-effort.
  //    헤드리스가 크래시·차단돼도 위 ① API 결과는 보존된다.
  //    ※ PAA·연관검색어는 실브라우저가 더 잘 잡힘 — 작성 시 MCP Playwright로 보강(CLAUDE.md §2-B Step1②).
  try {
    // 브라우저 SERP 수집은 best-effort 보너스(빙·다음 등). 기본 헤드리스.
    // ※ 구글 PAA·연관검색어는 자동화 브라우저가 consent/봇차단으로 못 긁고, 네이버 연관도 세션·AB로 불안정 →
    //   이 부분은 작성 시 MCP 실브라우저로 수확(CLAUDE.md §2-B Step1②). 자동완성(API)이 수집 backbone.
    // HEADFUL=1 로 헤드풀 시도 가능(되는 세션에선 일부 잡힐 수 있음).
    const browser = await chromium.launch({ headless: process.env.HEADFUL !== '1', channel: process.env.HEADFUL === '1' ? 'chrome' : undefined });
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      locale: 'ko-KR',
    });
    const page = await context.newPage();

    for (const kw of allKeywords) {
      console.log(`  [네이버] "${kw}" 수집 중...`);
      const n = await collectNaver(page, kw);
      naverResult.autocomplete.push(...n.autocomplete);
      naverResult.related.push(...n.related);

      console.log(`  [구글] "${kw}" 수집 중...`);
      const g = await collectGoogle(page, kw);
      googleResult.autocomplete.push(...g.autocomplete);
      googleResult.paa.push(...g.paa);
      googleResult.related.push(...g.related);

      console.log(`  [빙] "${kw}" 수집 중...`);
      const b = await collectBing(page, kw);
      bingResult.autocomplete.push(...b.autocomplete);

      console.log(`  [다음] "${kw}" 수집 중...`);
      const d = await collectDaum(page, kw);
      daumResult.autocomplete.push(...d.autocomplete);
    }
    await browser.close();
  } catch (e) {
    console.warn(`  [브라우저] 수집 건너뜀 (API 결과는 보존): ${(e as Error).message}`);
  }

  // 중복 제거 + 병합
  const dedup = (arr: string[]) => [...new Set(arr.map(s => s.trim()).filter(Boolean))];

  naverResult = { autocomplete: dedup(naverResult.autocomplete), related: dedup(naverResult.related) };
  googleResult = { autocomplete: dedup(googleResult.autocomplete), paa: dedup(googleResult.paa), related: dedup(googleResult.related) };
  bingResult = { autocomplete: dedup(bingResult.autocomplete) };
  daumResult = { autocomplete: dedup(daumResult.autocomplete) };

  /* ── 씨앗어와 무관한 것은 버린다 (2026-08-23 신설) ──
     SERP 스크래핑은 언제든 옆 블록(실시간 급상승·광고·인기글)을 집을 수 있다.
     셀렉터를 좁히는 것만으로는 부족해서, 합치는 자리에서 한 번 더 거른다.
     기준은 단순하다 — 연관검색어는 씨앗어와 글자를 나눠 갖는다.
     "로또당첨번호"는 "간병인보험"과 두 글자도 겹치지 않는다. */
  const bigrams = (s: string) => {
    const t = s.replace(/\s+/g, '');
    return new Set(Array.from({ length: Math.max(0, t.length - 1) }, (_, i) => t.slice(i, i + 2)));
  };
  const seedGrams = new Set<string>();
  for (const k of [KEYWORD, ...synonyms]) bigrams(k).forEach((g) => seedGrams.add(g));
  const related = (kw: string) => [...bigrams(kw)].some((g) => seedGrams.has(g));

  const rawMerged = dedup([
    ...naverResult.autocomplete, ...naverResult.related,
    ...googleResult.autocomplete, ...googleResult.paa, ...googleResult.related,
    ...bingResult.autocomplete,
    ...daumResult.autocomplete,
  ]);
  const allMerged = rawMerged.filter(related);
  const dropped = rawMerged.filter((k) => !related(k));
  if (dropped.length) {
    console.log(`  [거름] 씨앗어와 무관해 버린 ${dropped.length}개: ${dropped.slice(0, 12).join(', ')}${dropped.length > 12 ? ' …' : ''}`);
  }
  naverResult.related = naverResult.related.filter(related);
  googleResult.related = googleResult.related.filter(related);
  googleResult.paa = googleResult.paa.filter(related);

  // 의도 분류
  const byIntent: Record<string, string[]> = {
    info: [], condition: [], action: [], compare: [], calculate: [], confirm: [], question: [],
  };
  for (const kw of allMerged) {
    const intent = classifyIntent(kw);
    byIntent[intent].push(kw);
  }

  // 주제 분류 (A~F)
  const byTheme: Record<string, string[]> = {
    A_condition: [], B_amount: [], C_apply: [], D_caution: [], E_target: [], F_compare: [],
  };
  for (const kw of allMerged) {
    byTheme[classifyTheme(kw)].push(kw);
  }

  const result: CollectedKeywords = {
    seed: KEYWORD,
    synonyms,
    collectedAt: new Date().toISOString(),
    naver: naverResult,
    google: googleResult,
    bing: bingResult,
    daum: daumResult,
    merged: {
      all: allMerged,
      byIntent: byIntent as CollectedKeywords['merged']['byIntent'],
      byTheme: byTheme as CollectedKeywords['merged']['byTheme'],
    },
  };

  // 저장
  const outDir = path.join(__dirname, 'output');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${KEYWORD}.json`);
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf-8');

  // 리포트
  console.log(`\n✅ 수집 완료!`);
  console.log(`   네이버: 자동완성 ${naverResult.autocomplete.length}개 + 연관 ${naverResult.related.length}개`);
  console.log(`   구글: 자동완성 ${googleResult.autocomplete.length}개 + PAA ${googleResult.paa.length}개 + 연관 ${googleResult.related.length}개`);
  console.log(`   빙: ${bingResult.autocomplete.length}개`);
  console.log(`   다음: ${daumResult.autocomplete.length}개`);
  console.log(`   총 고유 검색어: ${allMerged.length}개`);
  console.log(`\n   의도별:`);
  for (const [intent, kws] of Object.entries(byIntent)) {
    if (kws.length > 0) console.log(`     ${intent}: ${kws.length}개`);
  }
  const themeLabel: Record<string, string> = {
    A_condition: 'A 조건·자격·사유', B_amount: 'B 금액·기간', C_apply: 'C 신청·절차',
    D_caution: 'D 수급 중 주의', E_target: 'E 대상별·특수', F_compare: 'F 비교·중복',
  };
  console.log(`\n   주제별 (타이틀 라인업용 — docs/title-style-24.md):`);
  for (const [theme, kws] of Object.entries(byTheme)) {
    if (kws.length > 0) console.log(`     ${themeLabel[theme]}: ${kws.length}개`);
  }
  console.log(`\n   저장: ${outPath}`);
  console.log(`   → 다음: byTheme 그룹별로 24식 자연 롱테일 타이틀 합성 후 사용자 승인 (CLAUDE.md §2-B)`);
}

main().catch(console.error);
