/**
 * check-freshness.ts — 수치가 낡았는지, 출처가 대조 가능한지 검사
 *
 * 왜 만들었나 (2026-08-01):
 *   영유아보육료 허브에 2024년 값(0세 51만)과 2025년 값(54만)이 섞여 있었고
 *   실제 2026년 단가는 58만 4천원이었다. 학자금 생활비도 150만원(과거) → 실제 200만원.
 *   두 건 모두 다른 작업 중 우연히 발견했다. 기존 게이트는 전부 "형식"만 봤고
 *   verify-policy.ts 는 source.text 가 페이지에 있는지 보는데,
 *   출처 URL이 기관 메인(https://www.mohw.go.kr)이면 대조 자체가 성립하지 않는다.
 *   즉 낡은 수치는 아무도 못 잡는 상태였다.
 *
 * 검사 축
 *   A 검수 만료   verifiedAt 이 STALE_DAYS 를 넘었나 (수치가 낡았을 수 있다)
 *   B 대조 불가   source.url / sourceUrl 이 경로 없는 기관 루트인가 (1:1 대조가 불가능)
 *   C 죽은 CTA    applyUrl 이 경로 없는 기관 루트인가 (버튼이 홈으로 떨어진다)
 *   D 연도 불일치  본문에 과거 연도(작년 이전)가 "N년 기준"으로 남아 있나
 *   E 지난 마감    "~까지/마감" 날짜가 이미 지났는데 본문에 살아 있나 (시간압박 후킹의 신뢰 장치)
 *
 * 사용
 *   npx tsx scripts/check-freshness.ts          # 변경된 허브만 — 차단
 *   npx tsx scripts/check-freshness.ts --all    # 전수 현황 — 차단 안 함
 *   npx tsx scripts/check-freshness.ts --all --top 30
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = 'data/policies';

/* 검수일이 이만큼 지나면 "수치가 바뀌었을 수 있다"고 본다.
   정부 지원금은 연 1회(1월) 또는 회계연도(3월) 개정이 대부분이라 180일이면 한 번은 지난다. */
const STALE_DAYS = 180;
/* 이 이상이면 사실상 방치. 전수 모드에서 우선순위를 매기는 기준. */
const ROTTEN_DAYS = 365;

const args = process.argv.slice(2);
const all = args.includes('--all');
const topIdx = args.indexOf('--top');
const TOP = topIdx >= 0 ? Number(args[topIdx + 1]) || 30 : 30;

const TODAY = new Date();

function daysSince(iso: string): number {
  const d = new Date(iso + 'T00:00:00+09:00');
  if (Number.isNaN(d.getTime())) return -1;
  return Math.floor((TODAY.getTime() - d.getTime()) / 86400000);
}

/** 경로 없는 기관 루트인가. 쿼리스트링이나 의미 있는 경로가 붙으면 딥링크로 본다. */
function isBareRoot(url: string): boolean {
  try {
    const u = new URL(url);
    const p = u.pathname.replace(/\/+$/, '');
    if (u.search) return false;
    if (p === '' || p === '/') return true;
    /* /index.jsp, /main.do 같은 첫 화면도 루트로 본다 */
    return /^\/(index|main|home)\.(jsp|do|html?|php)$/i.test(p);
  } catch {
    return false;
  }
}

function targetFiles(): string[] {
  const listAll = () =>
    fs.existsSync(ROOT)
      ? fs
          .readdirSync(ROOT)
          .filter((f) => f.endsWith('.ts') && f !== 'manifest.ts')
          .map((f) => path.join(ROOT, f))
      : [];
  if (all) return listAll();
  let diff = '';
  try {
    diff = execSync(`git diff --name-only origin/main...HEAD -- "${ROOT}"`, { encoding: 'utf8' });
  } catch {
    try {
      diff = execSync(`git diff --name-only HEAD~1 -- "${ROOT}"`, { encoding: 'utf8' });
    } catch {
      diff = '';
    }
  }
  return diff
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.endsWith('.ts') && !l.endsWith('manifest.ts') && fs.existsSync(l));
}

type Finding = { axis: 'A' | 'B' | 'C' | 'D' | 'E'; msg: string; hint?: string };
type Row = { file: string; slug: string; oldestDays: number; findings: Finding[] };

const AXIS: Record<string, string> = {
  A: '검수 만료',
  B: '대조 불가',
  C: '죽은 CTA',
  D: '연도 불일치',
  E: '지난 마감',
};

const rows: Row[] = [];
const count = { A: 0, B: 0, C: 0, D: 0, E: 0 };

for (const file of targetFiles()) {
  const src = fs.readFileSync(file, 'utf8');
  const slug = path.basename(file, '.ts');
  const findings: Finding[] = [];

  /* ── A. 검수일이 얼마나 지났나 ─────────────────────── */
  const dates = [...src.matchAll(/verifiedAt:\s*'(\d{4}-\d{2}-\d{2})'/g)].map((m) => m[1]);
  let oldestDays = -1;
  if (dates.length) {
    const ages = dates.map(daysSince).filter((n) => n >= 0);
    oldestDays = ages.length ? Math.max(...ages) : -1;
    if (oldestDays >= STALE_DAYS) {
      const oldest = dates[ages.indexOf(oldestDays)];
      findings.push({
        axis: 'A',
        msg: `가장 오래된 검수일 ${oldest} — ${oldestDays}일 지남`,
        hint: '공식 페이지를 Playwright로 다시 열어 수치를 대조하고 verifiedAt 을 갱신한다',
      });
    }
  }

  /* ── B. 출처가 대조 가능한 주소인가 ─────────────────── */
  const srcUrls = new Set<string>();
  for (const m of src.matchAll(/(?:source(?:Url)?|url):\s*'(https?:\/\/[^']+)'/g)) srcUrls.add(m[1]);
  const bareSources = [...srcUrls].filter(isBareRoot);
  if (bareSources.length) {
    findings.push({
      axis: 'B',
      msg: `출처가 기관 루트 ${bareSources.length}개 — 1:1 대조가 불가능하다: ${bareSources.slice(0, 3).join(', ')}`,
      hint: '그 수치가 실제로 적힌 화면(고시·안내 페이지)의 주소로 바꾼다',
    });
  }

  /* ── C. CTA가 홈으로 떨어지나 ──────────────────────── */
  const apply = src.match(/applyUrl:\s*'(https?:\/\/[^']+)'/);
  if (apply && isBareRoot(apply[1])) {
    findings.push({
      axis: 'C',
      msg: `applyUrl 이 기관 메인 — ${apply[1]}`,
      hint: '그 글이 유도하는 행동의 실제 화면(신청·조회·발급)으로 바꾸고 ctaLabel 을 맞춘다',
    });
  }

  /* ── E. 지난 마감일이 살아 있나 ────────────────────
     "9월 30일까지·5일 남음" 같은 시간압박 후킹(hook-patterns ③)을 허용하는 대신,
     마감이 지나면 그 문구가 거짓이 된다. 지난 날짜가 "까지/마감/신청기간"과 함께
     남아 있으면 차단해서, 후킹의 신뢰를 시스템이 지킨다. */
  /* 날짜 표기는 형태가 제각각이라 한 패턴으로는 다 못 잡는다.
     2026-08-01 확인: 원래 정규식은 "2026. 5. 31. 마감", "3/31 마감", "2026년 3월 말까지",
     "2026년 6월 접수 마감"을 전부 놓쳤다. 형태별로 나눠 본다. */
  const passed: string[] = [];
  const pushIfPast = (y: number, m: number, d: number, label: string) => {
    if (!y || !m || m > 12 || d > 31) return;
    const dt = new Date(y, m - 1, d, 23, 59);
    if (dt.getTime() < TODAY.getTime()) passed.push(label);
  };
  const thisY = TODAY.getFullYear();

  /* 과거 날짜라고 다 지난 마감은 아니다.
     2026-08-02 확인: 울주군 공고의 "개업일 2026. 02. 08. 까지 신청가능"은 마감이 아니라
     자격 기준일이다 — 그날 이전에 개업했어야 한다는 뜻이라 날짜가 과거인 게 정상이다.
     이런 기준일을 마감으로 잡으면 정확한 글이 차단된다. 날짜 앞 문맥으로 걸러낸다. */
  const CUTOFF_CONTEXT =
    /(개업|창업|설립|등록|출생|전입|거주|가입|취득|계약|입주|퇴사|이직|졸업|기준일|기준\s*시점|시행)[^.]{0,20}$/;
  const isCutoff = (idx: number) => CUTOFF_CONTEXT.test(src.slice(Math.max(0, idx - 40), idx));

  /* ① 연·월·일이 다 있는 형태: 2026년 5월 31일까지 / 2026.5.31. 마감 / 2026-05-31 접수마감 */
  for (const m of src.matchAll(
    /(20\d{2})\s*[.\-/년]\s*(\d{1,2})\s*[.\-/월]\s*(\d{1,2})\s*일?\.?\s*(?:[가-힣]{0,4}\s*)?(?:까지|마감|종료)/g,
  )) {
    if (isCutoff(m.index!)) continue;
    pushIfPast(+m[1], +m[2], +m[3], `${m[1]}.${m[2]}.${m[3]}`);
  }
  /* ② 연·월만: 2026년 3월 말까지 / 2026년 6월 접수 마감 → 그 달 말일로 본다 */
  for (const m of src.matchAll(
    /(20\d{2})\s*년\s*(\d{1,2})\s*월\s*(?:말|중)?\s*(?:[가-힣]{0,4}\s*)?(?:까지|마감|종료)/g,
  )) {
    if (isCutoff(m.index!)) continue;
    const last = new Date(+m[1], +m[2], 0).getDate();
    pushIfPast(+m[1], +m[2], last, `${m[1]}.${m[2]}월`);
  }
  /* ③ 연도 없는 월/일: 3/31 마감 → 올해로 본다(작년 것을 올해로 보면 미탐이 되므로 안전한 쪽) */
  for (const m of src.matchAll(/(?<![\d.])(\d{1,2})\s*\/\s*(\d{1,2})\s*(?:[가-힣]{0,4}\s*)?(?:까지|마감|종료)/g)) {
    if (isCutoff(m.index!)) continue;
    pushIfPast(thisY, +m[1], +m[2], `${thisY}.${m[1]}.${m[2]}`);
  }

  if (passed.length) {
    findings.push({
      axis: 'E',
      msg: `지난 마감일이 본문에 남아 있음: ${[...new Set(passed)].slice(0, 3).join(', ')} — 시간압박 문구가 거짓이 된 상태`,
      hint: '마감 문구를 제거하거나 다음 회차 일정으로 갱신한다. 공식 페이지에서 새 일정을 확인할 것',
    });
  }

  /* ── D. 본문에 지난 연도가 "기준"으로 박혀 있나 ─────── */
  const thisYear = TODAY.getFullYear();
  const staleYears = new Set<string>();
  for (const m of src.matchAll(/(20\d{2})년\s*(?:기준|고시|단가|적용)/g)) {
    const y = Number(m[1]);
    if (y < thisYear) staleYears.add(m[1]);
  }
  if (staleYears.size) {
    findings.push({
      axis: 'D',
      msg: `본문이 ${[...staleYears].join('·')}년 기준을 인용 — 올해 값으로 갱신됐는지 확인 필요`,
      hint: '연도 표기만 바꾸지 말고 실제 수치를 공식 출처에서 다시 확인한다',
    });
  }

  if (findings.length) {
    findings.forEach((f) => (count[f.axis] += 1));
    rows.push({ file, slug, oldestDays, findings });
  }
}

/* ── 출력 ──────────────────────────────────────────── */
console.log('='.repeat(60));
console.log(' 수치 신선도 검사 — 낡은 값이 살아있지 않은가');
console.log('='.repeat(60));

if (all) {
  /* 전수 모드: 오래된 순으로 우선순위를 매겨 보여준다 */
  rows.sort((a, b) => b.oldestDays - a.oldestDays);
  const rotten = rows.filter((r) => r.oldestDays >= ROTTEN_DAYS);
  console.log(`\n검사 ${targetFiles().length}개 / 지적 ${rows.length}개`);
  console.log(
    `  검수만료 ${count.A}  대조불가 ${count.B}  죽은CTA ${count.C}  연도불일치 ${count.D}  지난마감 ${count.E}`,
  );
  if (rotten.length) {
    console.log(`\n※ 검수 1년 이상 방치: ${rotten.length}개 — 여기부터 손대는 게 효율이 높다`);
  }
  console.log(`\n── 오래된 순 상위 ${Math.min(TOP, rows.length)}개 ──`);
  for (const r of rows.slice(0, TOP)) {
    const age = r.oldestDays >= 0 ? `${r.oldestDays}일` : '검수일 없음';
    console.log(`\n  ${r.slug}  (${age})`);
    for (const f of r.findings) console.log(`     [${AXIS[f.axis]}] ${f.msg}`);
  }
  console.log('\n(--all 은 현황 파악용 — 차단하지 않는다)');
  process.exit(0);
}

/* 차단은 A(검수 만료)·C(죽은 CTA)·D(연도 불일치)만.
   B(대조 불가)는 착수 시점에 582개가 이미 그 상태라 전면 차단하면 작업이 멈춘다.
   대신 경고로 계속 보여줘서, 그 허브를 손댈 때 같이 고치도록 유도한다(래칫). */
const BLOCKING: Array<Finding['axis']> = ['A', 'C', 'D', 'E'];
const blocked = rows.filter((r) => r.findings.some((f) => BLOCKING.includes(f.axis)));
const warnOnly = rows.filter((r) => !r.findings.some((f) => BLOCKING.includes(f.axis)));

for (const r of blocked) {
  console.log(`\n❌ ${r.slug}`);
  for (const f of r.findings) {
    console.log(`   [${AXIS[f.axis]}] ${f.msg}`);
    if (f.hint) console.log(`      → ${f.hint}`);
  }
}
for (const r of warnOnly) {
  console.log(`\n⚠️  ${r.slug}`);
  for (const f of r.findings) console.log(`   (경고)[${AXIS[f.axis]}] ${f.msg}`);
}

console.log(
  `\n검사 ${targetFiles().length}개 / 차단 ${blocked.length}개 / 경고만 ${warnOnly.length}개`,
);
console.log(`  검수만료 ${count.A}  대조불가 ${count.B}(경고)  죽은CTA ${count.C}  연도불일치 ${count.D}  지난마감 ${count.E}`);

if (!blocked.length) {
  console.log('\n ✅ 통과 — 검수일이 살아있고, 버튼이 홈으로 떨어지지 않는다');
  process.exit(0);
}

console.log('\n' + '='.repeat(60));
console.log(' 수치 신선도 미달 — push 차단');
console.log(' 틀린 금액은 품질 문제가 아니라 신뢰 문제다. 공식 출처로 다시 대조한다.');
console.log('='.repeat(60));
process.exit(1);
