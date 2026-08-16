/**
 * check-source-match.ts — 4단계 대조기. 이거 하나다.
 *
 *   ① 글 → 추출본   글에 쓴 숫자가 원문 추출본에 있는가 (없으면 오차)
 *   ② 추출본 → 글   팩트시트 단서·오해소지 섹션의 숫자가 글에 있는가 (없으면 누락)
 *
 * 원문 풀 = scripts/output/source-{slug}.txt (3단계 추출본, 있으면)
 *         + scripts/output/factsheet-{slug}.md (원문 인용 포함)
 *         + 글 안의 source.text (조문 직접 인용)
 *
 * 2026-08-16 사장님 정리: "텍스트 추출본 + 작성글 대조, 이게 끝인데?"
 * 검사 16축을 쌓는 대신, 다 쓴 글과 떠온 원문을 맞춰본다.
 *
 * 사용:
 *   npx tsx scripts/check-source-match.ts <slug> [slug...]   # 지정 글
 *   npx tsx scripts/check-source-match.ts                    # 변경분 (git diff)
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const DIR = 'data/policies';
const OUT = 'scripts/output';

/** 숫자+단위 토큰. 조문 번호(제N조·N항·N호·별표N)는 원문과 표기가 달라 제외 */
const TOKEN = /\d[\d,]*(?:\.\d+)?\s*(?:만원|억원|천원|원|%|퍼센트|개월|년|일|세|명|회|번|인실|인|시간|배|건|편|쪽|자)/g;

const norm = (s: string) => s.replace(/[\s,]/g, '');

/** 금액 표기 통일: "1만원"→"10000원", "1.2억원"→"120000000원" */
const canonMoney = (s: string) =>
  s.replace(/(\d+(?:\.\d+)?)억\s*원/g, (_, n) => `${Math.round(parseFloat(n) * 1e8)}원`)
   .replace(/(\d+(?:\.\d+)?)만\s*원/g, (_, n) => `${Math.round(parseFloat(n) * 1e4)}원`)
   .replace(/(\d+(?:\.\d+)?)천\s*원/g, (_, n) => `${Math.round(parseFloat(n) * 1e3)}원`);

/** 한 토큰이 풀 안에 있는가 — 원표기·금액 환산·"100분의 N" 3가지로 본다 */
const inPool = (tok: string, npool: string, npoolCanon: string): boolean => {
  const k = norm(tok);
  if (npool.includes(k)) return true;
  if (npoolCanon.includes(canonMoney(k))) return true;
  const m = k.match(/^([\d.]+)(%|퍼센트)$/);
  if (m && npool.includes(`100분의${m[1]}`)) return true;
  return false;
};

/** 근거 없이 쓰면 안 되는 말 — 추측(Q12) + 빈도 단정(옛 check-factsheet) */
const BANNED: [RegExp, string][] = [
  [/(?<![가-힣])약\s*\d/, '약 N'], [/대략/, '대략'], [/대충/, '대충'],
  [/\s정도\s/, '정도'], [/\d+\s*쯤/, '쯤'], [/아마도/, '아마도'],
  [/추정/, '추정'], [/예상\s*컨대/, '예상컨대'],
  [/대부분/, '대부분'], [/대개/, '대개'], [/경우가 많/, '경우가 많'],
  [/흔합니다/, '흔합니다'], [/대다수/, '대다수'], [/거의 모든/, '거의 모든'],
];

/** 글에서 독자가 읽는 문장만 뽑는다 (메타·날짜·source 제외) */
function claimStrings(src: string): string[] {
  const out: string[] = [];
  const FIELDS = ['heroHook', 'intro', 'value', 'content', 'cue'];
  for (const f of FIELDS) {
    const re = new RegExp(`${f}:\\s*\\n?\\s*'([^']*)'`, 'g');
    let m; while ((m = re.exec(src))) out.push(m[1]);
  }
  // faq 의 a: 와 table rows 도 독자가 읽는다
  let m;
  const aRe = /\ba:\s*'([^']*)'/g;
  while ((m = aRe.exec(src))) out.push(m[1]);
  const rowRe = /rows:\s*\[([\s\S]*?)\]\s*,?\s*\n\s*(?:sourceNote|caption|\])/g;
  while ((m = rowRe.exec(src))) out.push(m[1]);
  return out;
}

function sourcePool(slug: string, articleSrc: string): { pool: string; parts: string[] } {
  const parts: string[] = [];
  let pool = '';
  const srcFile = path.join(OUT, `source-${slug}.txt`);
  if (fs.existsSync(srcFile)) { pool += fs.readFileSync(srcFile, 'utf8'); parts.push(`source-${slug}.txt`); }
  const fact = path.join(OUT, `factsheet-${slug}.md`);
  if (fs.existsSync(fact)) { pool += fs.readFileSync(fact, 'utf8'); parts.push(`factsheet-${slug}.md`); }
  let m; const tRe = /text:\s*'([^']*)'/g;
  while ((m = tRe.exec(articleSrc))) pool += ' ' + m[1];
  if (tRe.lastIndex) parts.push('글 내 source.text');
  return { pool, parts };
}

function check(slug: string): number {
  const file = path.join(DIR, `${slug}.ts`);
  if (!fs.existsSync(file)) { console.log(`  ? ${slug} — 파일 없음`); return 0; }
  const src = fs.readFileSync(file, 'utf8');
  const { pool, parts } = sourcePool(slug, src);
  if (!pool.trim()) {
    console.log(`\n❌ ${slug} — 대조할 원문이 하나도 없다 (source-${slug}.txt 도 팩트시트도 없음)`);
    return 1;
  }
  const npool = norm(pool);
  const npoolCanon = canonMoney(npool);

  // ① 글 → 추출본
  const misses: string[] = [];
  const seen = new Set<string>();
  for (const s of claimStrings(src)) {
    for (const tok of s.match(TOKEN) ?? []) {
      const key = norm(tok);
      if (seen.has(key)) continue;
      seen.add(key);
      if (!inPool(key, npool, npoolCanon)) misses.push(tok.trim());
    }
  }

  // ② 추출본 → 글 : 팩트시트의 "단서"·"오해" 제목이 붙은 섹션 숫자가 글에 있는가
  const gaps: string[] = [];
  const fact = path.join(OUT, `factsheet-${slug}.md`);
  if (fs.existsSync(fact)) {
    const f = fs.readFileSync(fact, 'utf8');
    const sec = f.split(/^## /m).filter((b) => /(단서|오해)/.test(b.split('\n')[0] ?? ''));
    const nbody = norm(src);
    const nbodyCanon = canonMoney(nbody);
    for (const b of sec) {
      for (const tok of b.match(TOKEN) ?? []) {
        if (!inPool(norm(tok), nbody, nbodyCanon)) gaps.push(tok.trim());
      }
    }
  }

  // ③ 근거 없는 말 — 추측·빈도 단정
  const body = claimStrings(src).join(' ');
  const banned = BANNED.filter(([re]) => re.test(body)).map(([, l]) => l);

  // ④ 출처 표기 — qa 카드 절반 이상에 sourceNote
  const qaCount = (src.match(/\n\s{4}\{\s*\n\s+anchor:/g) ?? []).length
    || (src.match(/anchor:\s*'/g) ?? []).length;
  const noteCount = (src.match(/sourceNote:\s*'/g) ?? []).length;
  const noteShort = qaCount >= 2 && noteCount < Math.ceil(qaCount / 2);

  if (!misses.length && !gaps.length && !banned.length && !noteShort) {
    console.log(`✅ ${slug} — 숫자 ${seen.size}개 원문 일치 · 출처 ${noteCount}/${qaCount} (풀: ${parts.join(' + ')})`);
    return 0;
  }
  console.log(`\n❌ ${slug}`);
  if (banned.length) {
    console.log(`   [근거 없는 말] ${banned.join(', ')}`);
    console.log('      → 원문에 비율이 있으면 그 수치를, 없으면 조건문으로 ("~인 경우입니다")');
  }
  if (noteShort) {
    console.log(`   [출처 표기] sourceNote ${noteCount}/${qaCount} — 절반 이상이어야 한다`);
    console.log('      → 수치를 담은 카드에 * 출처: … 를 단다');
  }
  if (misses.length) {
    console.log(`   [오차 의심] 원문 추출본에 없는 숫자 ${misses.length}개:`);
    misses.forEach((t) => console.log(`      · ${t}`));
    console.log('      → 원문에 있으면 추출본/팩트시트에 그 부분을 옮겨 적는다. 없으면 글에서 뺀다.');
  }
  if (gaps.length) {
    console.log(`   [누락 의심] 팩트시트 단서·오해소지의 숫자가 글에 없다 ${gaps.length}개:`);
    [...new Set(gaps)].forEach((t) => console.log(`      · ${t}`));
    console.log('      → 원문에 있는데 글에 없는 게 최다 실수다. 본문에 반영했는지 확인한다.');
  }
  return 1;
}

// ── 대상 ──
const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
let targets: string[] = args;
if (!targets.length) {
  let diff = '';
  try { diff = execSync('git diff --name-only origin/main...HEAD -- data/policies', { encoding: 'utf8' }); }
  catch { try { diff = execSync('git diff --name-only HEAD~1 -- data/policies', { encoding: 'utf8' }); } catch {} }
  targets = diff.split('\n').map((l) => path.basename(l.trim(), '.ts'))
    .filter((s) => s && s !== 'manifest' && fs.existsSync(path.join(DIR, `${s}.ts`)));
}

console.log('='.repeat(60));
console.log(' 원문 대조 — 글의 숫자는 추출본에, 추출본의 단서는 글에');
console.log('='.repeat(60));
if (!targets.length) { console.log(' 변경된 글 없음 — 생략'); process.exit(0); }
const bad = targets.map(check).reduce((a, b) => a + b, 0);
console.log(bad ? `\n ${bad}개 글에서 어긋남 — 위 항목을 원문과 다시 맞춘다` : '\n 전부 일치');
process.exit(bad ? 1 : 0);
