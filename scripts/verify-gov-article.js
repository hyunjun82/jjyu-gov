#!/usr/bin/env node
/**
 * verify-gov-article.js — 정부지원금 콘텐츠 12항목 검증기
 *
 * 사용법: node scripts/verify-gov-article.js <keyword> <spoke-slug>
 * 예시:   node scripts/verify-gov-article.js 기초연금 수급자격
 */

const fs = require('fs');
const path = require('path');

const keyword = process.argv[2];
const spokeSlug = process.argv[3];

if (!keyword) {
  console.error('Usage: node scripts/verify-gov-article.js <keyword> [spoke-slug]');
  process.exit(1);
}

/* ── 수집 검색어 로드 ── */
const kwPath = path.join(__dirname, 'output', `${keyword}.json`);
let collected = null;
if (fs.existsSync(kwPath)) {
  collected = JSON.parse(fs.readFileSync(kwPath, 'utf-8'));
}

/* ── 금지어 목록 ── */
const BANNED_WORDS = ['총정리', '완벽정리', '또한', '결론적으로', '다양한', '매우 중요'];
const BANNED_TITLES = ['총정리', '정리', '완벽정리'];
const FILLER_PATTERNS = [
  /에 대해 알아보겠습니다/,
  /에 대해서 살펴보겠습니다/,
  /자세히 살펴보겠습니다/,
  /함께 알아볼까요/,
  /지금부터 알아보겠습니다/,
];
const AI_SMELL = ['또한', '결론적으로', '다양한', '매우 중요', '흥미롭게도', '주목할 만한'];

/* ── 체크 함수들 ── */
const results = [];

function check(id, name, pass, detail) {
  results.push({ id, name, pass, detail });
}

function verifyContent(content, h1, h2s, faqQuestions, ctaUrl, componentIds) {
  // V1. 타이틀 검색어 일치
  if (collected) {
    const allKws = collected.merged?.all || [];
    const h1Lower = h1.toLowerCase();
    const matched = allKws.some(kw => h1Lower.includes(kw.toLowerCase()) || kw.toLowerCase().includes(keyword.toLowerCase()));
    check('V1', '타이틀 검색어 일치', matched, matched ? `H1에 수집 검색어 포함` : `H1 "${h1}"이 수집 검색어에 없음`);
  } else {
    check('V1', '타이틀 검색어 일치', false, `수집 데이터 없음 (${kwPath}). collect-keywords.ts 먼저 실행`);
  }

  // V2. H2 출처 검증
  if (collected && h2s.length > 0) {
    const allKws = collected.merged?.all || [];
    const paa = collected.google?.paa || [];
    const sources = [...allKws, ...paa];
    const unmatched = h2s.filter(h2 => {
      const h2Lower = h2.toLowerCase();
      return !sources.some(s => {
        const sLower = s.toLowerCase();
        // 부분 일치 허용 (핵심 단어 2개 이상 겹치면 OK)
        const sWords = sLower.split(/\s+/);
        const h2Words = h2Lower.split(/\s+/);
        const overlap = sWords.filter(w => h2Words.some(hw => hw.includes(w) || w.includes(hw)));
        return overlap.length >= 2 || h2Lower.includes(sLower) || sLower.includes(h2Lower);
      });
    });
    check('V2', 'H2 출처 검증', unmatched.length === 0,
      unmatched.length === 0 ? `H2 ${h2s.length}개 전부 수집 검색어에 근거`
        : `매칭 안 되는 H2: ${unmatched.join(', ')}`);
  } else {
    check('V2', 'H2 출처 검증', false, collected ? 'H2 없음' : '수집 데이터 없음');
  }

  // V3. Q1 공감 검증
  const firstSentence = content.split(/[.!?]\s/)[0] || '';
  const hasEmpathy = /하시|하죠|모르겠|궁금|고민|걱정|찾고|알아보|검색/.test(firstSentence);
  const startsThirdPerson = /^이 제도|^이 정책|^기초연금은|^본 제도/.test(firstSentence);
  check('V3', 'Q1 공감 검증',
    hasEmpathy && !startsThirdPerson,
    startsThirdPerson ? '서론이 제3자 시점으로 시작 (독자 공감 부족)'
      : hasEmpathy ? '서론에 독자 공감 표현 포함'
        : '서론 첫 문장에 독자 상황 공감이 없음');

  // V4. Q2 행동 완결
  const hasCta = !!ctaUrl;
  const isVagueCta = /자세한 내용|확인하세요|알아보세요/.test(content) && !hasCta;
  check('V4', 'Q2 행동 완결',
    hasCta && !isVagueCta,
    hasCta ? `CTA URL: ${ctaUrl}` : '딥링크 CTA 버튼 없음');

  // V5. Q3 정보 완결 — 스포크 의도 검색어가 본문에 답변되었는지
  // (간이 검사: H2 개수 >= 3)
  check('V5', 'Q3 정보 완결',
    h2s.length >= 3,
    `H2 ${h2s.length}개 (최소 3개 필요)`);

  // V6. Q4 컴포넌트 일치
  const hasRequiredComponents = componentIds.includes('C13') && componentIds.includes('C12');
  check('V6', 'Q4 컴포넌트 일치',
    hasRequiredComponents,
    hasRequiredComponents ? `필수 컴포넌트 포함: ${componentIds.join(', ')}`
      : `필수 컴포넌트(C12 딥링크, C13 요약카드) 누락`);

  // V7. 요약카드 존재
  const hasAnswerBox = /answer-box|요약|핵심 답변|한줄/.test(content);
  check('V7', '요약카드 존재', hasAnswerBox, hasAnswerBox ? '요약카드 감지' : '글 상단에 요약카드 없음');

  // V8. 소스 팩트 일치 (WARNING only)
  check('V8', '소스 팩트 일치', true, 'WARNING: 수동 확인 필요 (숫자·기준 ↔ 공식 소스 대조)');

  // V9. 문체 검사
  const foundBanned = BANNED_WORDS.filter(w => content.includes(w));
  const foundFiller = FILLER_PATTERNS.filter(p => p.test(content));
  const stylePass = foundBanned.length === 0 && foundFiller.length === 0;
  check('V9', '문체 검사', stylePass,
    stylePass ? '금지어·filler 없음'
      : `금지어: [${foundBanned.join(', ')}] / filler: ${foundFiller.length}개`);

  // V10. 타이틀 자연스러움
  const titleBanned = BANNED_TITLES.filter(w => h1.includes(w));
  const hasDash = h1.includes('ㅡ') || h1.includes('—') || h1.includes('–');
  check('V10', '타이틀 자연스러움',
    titleBanned.length === 0 && !hasDash,
    titleBanned.length > 0 ? `금지어 포함: ${titleBanned.join(', ')}`
      : hasDash ? '대시(ㅡ/—/–) 사용' : 'PASS');

  // V11. 딥링크 유효성 (URL 형식만 체크)
  const validUrl = ctaUrl && /^https?:\/\//.test(ctaUrl);
  check('V11', '딥링크 유효성', !!validUrl,
    validUrl ? `URL 형식 OK: ${ctaUrl}` : 'CTA URL 없거나 형식 오류');

  // V12. 스포크 연결
  const spokeLinks = (content.match(/\/policy\/\d+\/[^"'\s]+/g) || []);
  check('V12', '스포크 연결',
    spokeLinks.length >= 2,
    `관련 스포크 링크 ${spokeLinks.length}개 (최소 2개)`);
}

/* ── 리포트 ── */
function printReport() {
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`  gov-jjyu 콘텐츠 검증 리포트`);
  console.log(`  키워드: ${keyword}${spokeSlug ? ` / 스포크: ${spokeSlug}` : ''}`);
  console.log(`${'═'.repeat(60)}\n`);

  let passCount = 0;
  let failCount = 0;

  for (const r of results) {
    const icon = r.pass ? '✅' : '❌';
    if (r.pass) passCount++;
    else failCount++;
    console.log(`  ${icon} ${r.id} ${r.name}`);
    console.log(`     ${r.detail}\n`);
  }

  console.log(`${'─'.repeat(60)}`);
  console.log(`  결과: ${passCount} PASS / ${failCount} FAIL (총 ${results.length}개)`);

  if (failCount === 0) {
    console.log(`  🎉 모든 검증 통과!`);
  } else {
    console.log(`  ⚠️  ${failCount}개 항목 수정 필요`);
  }
  console.log(`${'═'.repeat(60)}\n`);

  return failCount;
}

/* ── 실행 ── */
// CLI 모드: 수집 데이터만 확인
if (!spokeSlug) {
  console.log(`\n수집 데이터 확인 모드 (스포크 미지정)`);
  if (collected) {
    const m = collected.merged;
    console.log(`\n총 수집 검색어: ${m.all.length}개`);
    console.log(`\n의도별 분류:`);
    for (const [intent, kws] of Object.entries(m.byIntent)) {
      if (kws.length > 0) {
        console.log(`  ${intent} (${kws.length}개):`);
        kws.slice(0, 5).forEach(k => console.log(`    - ${k}`));
        if (kws.length > 5) console.log(`    ... +${kws.length - 5}개`);
      }
    }
    console.log(`\n구글 PAA:`);
    (collected.google?.paa || []).forEach(q => console.log(`  Q: ${q}`));
  } else {
    console.log(`수집 데이터 없음. 먼저 실행: npx tsx scripts/collect-keywords.ts "${keyword}"`);
  }
} else {
  // 스포크 검증 모드 (향후: TSX 파일 파싱하여 자동 검증)
  console.log(`\n스포크 검증 모드: ${keyword} / ${spokeSlug}`);
  console.log(`(향후 TSX 파일 자동 파싱 연동 예정)`);

  // 예시 데이터로 검증 시연
  verifyContent(
    '부모님이 곧 65세인데, 기초연금 받을 수 있는지 궁금하시죠?',
    `기초연금 수급자격 2026 기준`,
    ['몇 살부터 받을 수 있나', '소득인정액 얼마 이하', '받을 수 없는 사람은', '국민연금 받아도 되나', '신청 전 확인할 3가지'],
    ['연금 안 냈어도 받나요?', '외국인도 되나요?'],
    'https://www.bokjiro.go.kr',
    ['C01', 'C05', 'C12', 'C13', 'C14', 'C15']
  );
  printReport();
}

module.exports = { verifyContent, check, results: () => results };
