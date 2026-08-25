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
import { evidenceFor } from './lib/evidence';

const DIR = 'data/policies';
const OUT = 'scripts/output';

/** 숫자+단위 토큰. 조문 번호(제N조·N항·N호·별표N)는 원문과 표기가 달라 제외 */
const TOKEN = /\d[\d,]*(?:\.\d+)?\s*(?:만원|억원|천원|원|%|퍼센트|개월|년|일|세|명|회|번|인실|인|시간|배|건|편|쪽)/g;  // '자'(글자수)는 뺐다 — "qa5 자활급여"를 "5 자"로 읽는 오탐

const norm = (s: string) => s.replace(/[\s,]/g, '');

/** 금액 표기 통일: "1만원"→"10000원", "1.2억원"→"120000000원"
 *  연도 축약 통일: 정부 문서의 "'27.1월"·"’26년" → "2027년"·"2026년" */
const canonMoney = (s: string) =>
  s.replace(/(\d+(?:\.\d+)?)억\s*원/g, (_, n) => `${Math.round(parseFloat(n) * 1e8)}원`)
   /* "3천만원" 처럼 자릿수 한글이 겹친 표기 (2026-08-25 신설).
      원문은 "3천만원", 글은 "3,000만원" 으로 쓰는데 둘을 다른 숫자로 보고 push 를 막았다.
      아래 만원 규칙은 숫자 바로 뒤에 "만" 이 와야 잡혀서 "3천만원" 이 통째로 남았다. */
   .replace(/(\d+(?:\.\d+)?)천만\s*원/g, (_, n) => `${Math.round(parseFloat(n) * 1e7)}원`)
   .replace(/(\d+(?:\.\d+)?)백만\s*원/g, (_, n) => `${Math.round(parseFloat(n) * 1e6)}원`)
   .replace(/(\d+(?:\.\d+)?)만\s*원/g, (_, n) => `${Math.round(parseFloat(n) * 1e4)}원`)
   .replace(/(\d+(?:\.\d+)?)천\s*원/g, (_, n) => `${Math.round(parseFloat(n) * 1e3)}원`)
   .replace(/['’‘]\s*(\d{2})\s*(?=[.년])/g, (_, y) => `20${y}년`);

/** 날짜 표기 통일 (2026-08-23 신설).
 *  글은 "2026년 5월 6일"로 쓰고 원문은 "2026.5.6"으로 적는다. 같은 날인데 토큰이 달라
 *  매번 오차로 떴다 — 간병인보험 한 편에서만 2026년·6일·2025년·9일·23일 다섯 개가
 *  오탐이었다. 오탐이 쌓이면 사람이 게이트를 끄게 된다. 점 표기를 년월일로 편다. */
const canonDate = (s: string) =>
  s.replace(/(\d{4})\s*\.\s*(\d{1,2})\s*\.\s*(\d{1,2})\.?/g, (_, y, m, d) => `${y}년${+m}월${+d}일`)
   .replace(/(\d{4})-(\d{2})-(\d{2})/g, (_, y, m, d) => `${y}년${+m}월${+d}일`); /* 추출본 머리의 RECEIVED: 2026-08-23 = 검수일 */

/** 한 토큰이 풀 안에 있는가 — 원표기·금액 환산·날짜 표기·"100분의 N" 4가지로 본다 */
const inPool = (tok: string, npool: string, npoolCanon: string): boolean => {
  const k = norm(tok);
  if (npool.includes(k)) return true;
  if (npoolCanon.includes(canonMoney(k))) return true;
  if (canonDate(npool).includes(k)) return true;
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

/* 근거의 정의는 scripts/lib/evidence.ts 하나뿐이다 (2026-08-23).
   전에는 이 게이트와 check-source-backing 이 각자 찾다가 같은 글에 다른 판정을 냈다. */
function sourcePool(slug: string, _articleSrc: string): { pool: string; parts: string[] } {
  const e = evidenceFor(path.join(DIR, `${slug}.ts`), slug);
  return { pool: e.pool, parts: e.parts };
}

/** 스포크 본문 파일 — 머리 주석의 `추출본: scripts/output/source-*.txt` 가 원문 풀을 가리킨다.
 *  허브는 slug 로 찾고, 스포크는 파일이 스스로 가리킨다. 가리키는 곳이 없으면 숫자를 쓸 수 없다. */
function checkSpoke(file: string): number {
  const name = file.replace(/\\/g, '/').split('/').slice(-2).join('/');
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/추출본:\s*(scripts\/output\/source-[\w.-]+\.txt)/);
  const nums = claimStrings(src).flatMap((s) => s.match(TOKEN) ?? []);
  if (!m) {
    if (!nums.length) { console.log(`   ${name} — 숫자 없음, 생략`); return 0; }
    console.log(`\n❌ ${name} — 숫자를 ${nums.length}개 쓰면서 추출본을 가리키지 않는다`);
    console.log('      → 파일 머리에 `/* 추출본: scripts/output/source-{slug}.txt` 를 적고 그 파일을 만든다');
    return 1;
  }
  if (!fs.existsSync(m[1])) {
    console.log(`\n❌ ${name} — 가리킨 추출본이 없다: ${m[1]}`);
    return 1;
  }
  /* 가리키라는 규칙은 그대로 두되, 대조할 원문은 공통 정의에서 받는다 */
  const e = evidenceFor(file);
  return compare(name, src, e.pool, e.parts, null);
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
  return compare(slug, src, pool, parts, slug);
}

function compare(label: string, src: string, pool: string, parts: string[], slug: string | null): number {
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
  const fact = slug ? path.join(OUT, `factsheet-${slug}.md`) : '';
  if (fact && fs.existsSync(fact)) {
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

  /* ③ 근거 없는 말 — 추측·빈도 단정.
     단, 원문이 그렇게 쓴 말은 근거가 있는 것이라 통과시킨다.
     2026-08-16: 금융위 원문이 "약 61%", "대부분"으로 쓴 걸 글이 옮겼는데 막혔다.
     이 검사의 취지는 내가 지어낸 말을 잡는 것이지 원문 인용을 막는 게 아니다. */
  const body = claimStrings(src).join(' ');
  const banned = BANNED.filter(([re]) => re.test(body) && !re.test(pool))
    .map(([, l]) => l);

  // ④ 출처 표기 — qa 카드 절반 이상에 sourceNote
  const qaCount = (src.match(/\n\s{4}\{\s*\n\s+anchor:/g) ?? []).length
    || (src.match(/anchor:\s*'/g) ?? []).length;
  const noteCount = (src.match(/sourceNote:\s*'/g) ?? []).length;
  const noteShort = qaCount >= 2 && noteCount < Math.ceil(qaCount / 2);

  if (!misses.length && !gaps.length && !banned.length && !noteShort) {
    console.log(`✅ ${label} — 숫자 ${seen.size}개 원문 일치 · 출처 ${noteCount}/${qaCount} (풀: ${parts.join(' + ')})`);
    return 0;
  }
  console.log(`\n❌ ${label}`);
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

/* 스포크 본문도 대조한다 (2026-08-19).
   허브(data/policies)만 보던 탓에 스포크 20편이 대조 없이 통과했다. 7편에 추출본에
   없는 숫자가 있었다. 스포크는 머리 주석의 `추출본:` 이 원문 풀을 가리킨다. */
const SPOKE_DIR = 'app/policy/[id]/[spoke]/content';
let spokeFiles: string[] = [];
if (!args.length) {
  let d = '';
  try { d = execSync(`git diff --name-only origin/main...HEAD -- "${SPOKE_DIR}"`, { encoding: 'utf8' }); }
  catch { try { d = execSync(`git diff --name-only HEAD~1 -- "${SPOKE_DIR}"`, { encoding: 'utf8' }); } catch {} }
  let u = '';
  try { u = execSync(`git ls-files --others --exclude-standard -- "${SPOKE_DIR}"`, { encoding: 'utf8' }); } catch {}
  spokeFiles = [...new Set((d + '\n' + u).split('\n').map((l) => l.trim()))]
    .filter((f) => f.endsWith('.tsx') && fs.existsSync(f));
}

console.log('='.repeat(60));
console.log(' 원문 대조 — 글의 숫자는 추출본에, 추출본의 단서는 글에');
console.log('='.repeat(60));
if (!targets.length && !spokeFiles.length) { console.log(' 변경된 글 없음 — 생략'); process.exit(0); }
const bad = targets.map(check).reduce((a, b) => a + b, 0)
  + spokeFiles.map(checkSpoke).reduce((a, b) => a + b, 0);
console.log(bad ? `\n ${bad}개 글에서 어긋남 — 위 항목을 원문과 다시 맞춘다` : '\n 전부 일치');
process.exit(bad ? 1 : 0);
