/**
 * 키워드 수집기 — 네이버/구글/빙/다음 자동완성 + 구글 PAA
 *
 * 사용법: npx tsx scripts/collect-keywords.ts "기초연금"
 * 출력: scripts/output/{keyword}.json
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

/* ── 네이버 자동완성 ── */
async function collectNaver(page: Page, keyword: string): Promise<{ autocomplete: string[]; related: string[] }> {
  const autocomplete: string[] = [];
  const related: string[] = [];

  try {
    await page.goto(`https://search.naver.com/search.naver?query=${encodeURIComponent(keyword)}`, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);

    // 연관검색어
    const relatedEls = await page.$$('.related_srch .keyword');
    for (const el of relatedEls) {
      const text = await el.textContent();
      if (text?.trim()) related.push(text.trim());
    }

    // 자동완성: 검색창 클릭 후 수집
    const searchInput = page.locator('#nx_query');
    await searchInput.click();
    await page.waitForTimeout(1500);

    const acEls = await page.$$('.ac_list .acw');
    for (const el of acEls) {
      const text = await el.textContent();
      if (text?.trim()) autocomplete.push(text.trim());
    }
  } catch (e) {
    console.warn('[네이버] 수집 실패:', (e as Error).message);
  }

  return { autocomplete, related };
}

/* ── 구글 자동완성 + PAA ── */
async function collectGoogle(page: Page, keyword: string): Promise<{ autocomplete: string[]; paa: string[]; related: string[] }> {
  const autocomplete: string[] = [];
  const paa: string[] = [];
  const related: string[] = [];

  try {
    // 검색 결과 페이지에서 PAA + 연관검색어 수집
    await page.goto(`https://www.google.com/search?q=${encodeURIComponent(keyword)}&hl=ko`, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);

    // PAA (People Also Ask)
    const paaEls = await page.$$('[data-sgrd] [role="heading"], .related-question-pair [role="heading"], div[jsname] span.CSkcDe');
    for (const el of paaEls) {
      const text = await el.textContent();
      if (text?.trim() && text.length > 5) paa.push(text.trim());
    }

    // 대안: aria-label에서 PAA 추출
    if (paa.length === 0) {
      const altPaa = await page.$$('div[data-q]');
      for (const el of altPaa) {
        const q = await el.getAttribute('data-q');
        if (q?.trim()) paa.push(q.trim());
      }
    }

    // 연관검색어
    const relEls = await page.$$('.k8XOCe .s75CSd, .brs_col .nVcaUb');
    for (const el of relEls) {
      const text = await el.textContent();
      if (text?.trim()) related.push(text.trim());
    }

    // 자동완성: 새 탭에서 수집
    await page.goto('https://www.google.com/?hl=ko', { waitUntil: 'domcontentloaded', timeout: 10000 });
    await page.waitForTimeout(1000);
    const gInput = page.locator('textarea[name="q"], input[name="q"]').first();
    await gInput.click();
    await gInput.fill(keyword);
    await page.waitForTimeout(2000);

    const acEls = await page.$$('ul[role="listbox"] li span, .OBMEnb .wM6W7d span');
    for (const el of acEls) {
      const text = await el.textContent();
      if (text?.trim() && text.length > 2) autocomplete.push(text.trim());
    }
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

/* ── 메인 ── */
async function main() {
  console.log(`\n🔍 "${KEYWORD}" 검색어 수집 시작...\n`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    locale: 'ko-KR',
  });

  const page = await context.newPage();
  const synonyms = generateSynonyms(KEYWORD);
  const allKeywords = [KEYWORD, ...synonyms];

  // 각 포털 수집
  let naverResult = { autocomplete: [] as string[], related: [] as string[] };
  let googleResult = { autocomplete: [] as string[], paa: [] as string[], related: [] as string[] };
  let bingResult = { autocomplete: [] as string[] };
  let daumResult = { autocomplete: [] as string[] };

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

  // 중복 제거 + 병합
  const dedup = (arr: string[]) => [...new Set(arr.map(s => s.trim()).filter(Boolean))];

  naverResult = { autocomplete: dedup(naverResult.autocomplete), related: dedup(naverResult.related) };
  googleResult = { autocomplete: dedup(googleResult.autocomplete), paa: dedup(googleResult.paa), related: dedup(googleResult.related) };
  bingResult = { autocomplete: dedup(bingResult.autocomplete) };
  daumResult = { autocomplete: dedup(daumResult.autocomplete) };

  const allMerged = dedup([
    ...naverResult.autocomplete, ...naverResult.related,
    ...googleResult.autocomplete, ...googleResult.paa, ...googleResult.related,
    ...bingResult.autocomplete,
    ...daumResult.autocomplete,
  ]);

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
