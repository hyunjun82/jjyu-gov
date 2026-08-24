/**
 * 수치 ↔ 출처 대조 — "링크가 살아 있는가" 가 아니라 "그 페이지에 이 숫자가 있는가".
 *
 * 왜 생겼나 (2026-08-23)
 *   실손 24편이 손보협회 FAQ 를 출처로 걸었는데, 그 페이지는 질문 제목 9개(907자)뿐이고
 *   답변이 없었다. "가입연령 65~70세", "재가입 주기 5년" 은 그 페이지에 존재하지 않는다.
 *   링크는 200 이었다. 200 인 것과 근거가 있는 것은 다른 말이다.
 *
 * 규칙 (하나뿐이고, 숫자 대조라 오탐이 없다)
 *   본문의 모든 수치는, 그 글이 건 출처 URL 의 저장된 본문 중 최소 하나에 존재해야 한다.
 *   - "최소 하나" 인 이유: 한 문단이 협회 FAQ 와 금융위 보도자료를 같이 인용할 수 있다.
 *   - 저장본이 없으면 대조 자체가 불가능하다 → 그것도 막는다.
 *
 * 사용
 *   npx tsx scripts/check-source-backing.ts                # content 전체
 *   npx tsx scripts/check-source-backing.ts {경로|폴더}     # 그것만
 *   npx tsx scripts/check-source-backing.ts --list         # 받아야 할 URL 목록
 */
import fs from 'fs';
import path from 'path';
import { evidenceFor, judgeable } from './lib/evidence';

const CONTENT = path.join('app', 'policy', '[id]', '[spoke]', 'content');

/** 이 게이트가 생긴 날. 이보다 먼저 커밋된 글은 심판하지 않는다 (소급 차단 금지) */
const BORN = '2026-08-23';

/** 숫자 옆 단위가 붙은 것만 수치로 본다. 날짜·세대 번호는 수치가 아니다. */
const NUM = /(\d[\d,]*(?:\.\d+)?)\s*(세대|만원|억원|천원|원|%|세|회|일|배|개월|년|명|시간|주|건|점)/g;
const IGNORE_UNIT = new Set(['세대']);
const B = String.fromCharCode(92); /* 백슬래시 */

/** 따옴표 안 한국어 문장만 모은다 — import·URL·날짜 필드는 뺀다 */
function claimText(src: string): string {
  const out: string[] = [];
  for (const line of src.split('\n')) {
    if (/^\s*import\b/.test(line)) continue;
    if (/date(Published|Modified)/.test(line)) continue;
    for (const m of line.matchAll(/'([^']{4,})'|"([^"]{4,})"/g)) {
      const s = m[1] ?? m[2] ?? '';
      if (/^https?:\/\//.test(s)) continue;
      if (!/[가-힣]/.test(s)) continue;
      out.push(s);
    }
  }
  return out.join('\n');
}

const normalize = (s: string) => s.replace(/(\d),(?=\d)/g, '$1');

/* 근거의 정의는 scripts/lib/evidence.ts 하나뿐이다 (2026-08-23).
   전에는 이 게이트가 자기 방식으로 찾다가 check-source-match 와 판정이 갈렸다. */
function poolFor(file: string) {
  const e = evidenceFor(file);
  return {
    pool: normalize(e.pool),
    urls: e.urls,
    missing: e.missing.filter((x) => /^https?:/.test(x)),
    broken: e.broken,
  };
}

function walk(p: string): string[] {
  if (!fs.existsSync(p)) return [];
  if (fs.statSync(p).isFile()) return p.endsWith('.tsx') ? [p] : [];
  return fs.readdirSync(p).flatMap((f) => walk(path.join(p, f)));
}

const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const files = (args.length ? args : [CONTENT]).flatMap(walk);

if (process.argv.includes('--list')) {
  const need = new Set<string>();
  for (const f of files) poolFor(f).missing.forEach((u) => need.add(u));
  [...need].sort().forEach((u) => console.log(u));
  console.log('\n' + need.size + '개 — npx tsx scripts/fetch-source.ts <URL> 로 받는다');
  process.exit(0);
}

console.log('='.repeat(64));
console.log(' 수치 ↔ 출처 대조 — 그 페이지에 이 숫자가 실제로 있는가');
console.log('='.repeat(64));

let badFiles = 0, badNums = 0, noSnap = 0, realBad = 0, skippedOld = 0;
for (const f of files) {
  const { pool, urls, missing, broken } = poolFor(f);
  const text = normalize(claimText(fs.readFileSync(f, 'utf8')));
  const unbacked = new Map<string, string>();
  for (const m of text.matchAll(NUM)) {
    if (IGNORE_UNIT.has(m[2])) continue;
    const d = m[1].replace(/,/g, '');
    if (d.length > 12) continue;
    const re = new RegExp('(?<!' + B + 'd)' + d.split('.').join(B + '.') + '(?!' + B + 'd)');
    if (!re.test(pool)) unbacked.set(d + m[2], m[0]);
  }
  if (!unbacked.size && !missing.length && !broken.length) continue;
  /* 지적할 게 생긴 파일만 git 에 물어본다 — 전부에게 물으면 900번 돌아 느려진다 */
  if (!judgeable(f, BORN)) { skippedOld++; continue; }

  badFiles++;
  console.log('\n■ ' + f.split(path.sep).join('/'));
  if (!urls.length) console.log('   ⚠ 출처 URL 이 파일에 하나도 없다 — 본문이 이름으로만 인용하고 있다');
  if (missing.length) {
    noSnap += missing.length;
    console.log('   저장본 없음 ' + missing.length + '개:');
    missing.forEach((u) => console.log('      ' + u));
  }
  if (broken.length) {
    noSnap += broken.length;
    console.log('   저장본이 비었다(JS 로딩·아코디언) ' + broken.length + '개 — Playwright 로 다시 받아야 한다:');
    broken.forEach((u) => console.log('      ' + u));
  }
  if (unbacked.size) {
    const list = [...unbacked.values()].slice(0, 14).join(' · ');
    if (missing.length || broken.length) {
      console.log('   ▸ 대조 불가 수치 ' + unbacked.size + '개 (저장본이 성해지면 대부분 풀린다): ' + list);
    } else {
      badNums += unbacked.size;
      realBad++;
      console.log('   ❌ 근거 없는 수치 ' + unbacked.size + '개 — 저장본은 성한데 그 안에 없다: ' + list);
    }
  }
}

console.log('');
if (skippedOld) console.log(' (이 게이트가 생긴 ' + BORN + ' 이전에 커밋된 ' + skippedOld + '편은 심판하지 않는다 — 소급 차단 금지)');
if (badFiles) {
  console.log(' ' + files.length + '편 중 ' + badFiles + '편에 문제');
  console.log('   저장본 없음·비었음: ' + noSnap + '건 — 이건 출처를 다시 받으면 된다');
  console.log('   ❌ 진짜 근거 없는 수치: ' + realBad + '편 ' + badNums + '건 — 이건 글을 고쳐야 한다');
  console.log(' 저장본부터: npx tsx scripts/check-source-backing.ts --list');
  process.exit(realBad ? 1 : 0);
}
console.log(' ' + files.length + '편 전부 통과');
