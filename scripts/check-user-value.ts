/**
 * check-user-value.ts — 사용자 중심 문제해결 게이트
 *
 * verify-quality(Q1~Q13)가 구조·분량을 보는 반면, 이 스크립트는
 * "사용자가 이 글로 문제를 해결하고 다음 행동으로 넘어갈 수 있는가"만 본다.
 *
 * 3축:
 *   1축 타이틀 ↔ 소제목  — 타이틀이 약속한 키워드를 qa[].q가 실제로 다루는가
 *   2축 버튼 CTA        — ctaLabel이 행동을 부르는가 / applyUrl이 딥링크인가
 *   3축 허브-스포크      — 스포크가 registry에 물려 허브로 이어지는가
 *
 * 왜 부피(표·박스 개수)를 안 보나:
 *   전수 측정 결과 구조 점수는 67~93으로 이미 균일하다. 여기에 하한을 걸면
 *   통과하려고 표를 채우게 되고 그게 곧 찍어내기다. 부피는 verify-quality가 본다.
 *
 * 차단 범위:
 *   기본은 "이번에 변경된 파일"만 차단한다(--all 로 전수 점검 가능).
 *   기존 위반분까지 차단하면 당장 아무것도 push할 수 없으므로,
 *   신규 유입을 먼저 막고 기존은 목록을 보며 순차 정리한다.
 *
 * 사용:
 *   npx tsx scripts/check-user-value.ts            # 변경분만 (pre-push)
 *   npx tsx scripts/check-user-value.ts --all      # 전수 (경고만)
 *   npx tsx scripts/check-user-value.ts {slug}     # 단건
 */
import fs from 'fs';
import { split, rebase, prune, baselineCount } from './lib/baseline';
import path from 'path';
import { execSync } from 'child_process';

const DIR = 'data/policies';

/** 행동 동사 — 사용자가 "누를 수 있는" 동작만. '안내·소개·정보'는 행동이 아니다. */
/* 2026-08-02: 동사 화이트리스트를 버린다. "케스파컵 시청 바로가기"가 목록에 '시청'이
   없다는 이유로 막혔는데, 그건 사용자가 직접 고른 문구였다. check-cue-value 의 F축과
   같은 구조 검사로 통일한다 — 두 게이트가 같은 라벨을 다르게 판정하면 안 된다. */
const LABEL_IDIOM = /(안내|정보|내용|자료)\s*(보기|확인)$|자세히\s*보기|^바로가기$|^보기$/;
const WEAK_WORD =
  /^(안내|정보|자료|내용|페이지|홈페이지|사이트|여기|이곳|저기|더|그냥|각종|관련|해당|자세히|상세|눌러|눌러서|클릭|바로)$/;
/** 행동으로 끝나는가 — '…기' 종결 또는 '바로가기' 형태 */
const VERB_END = /(기|가기)$/;

function judgeCtaLabel(raw: string): string | null {
  const t = raw.trim();
  if (LABEL_IDIOM.test(t)) return '"…안내 보기 / 자세히 보기" 류 관용구 — 행동이 아니다';
  if (!VERB_END.test(t)) return '행동으로 끝나지 않는다';
  const words = t.split(/\s+/);
  if (words.length < 2) return '대상 없이 동사만 있다';
  const real = words.slice(0, -1).filter((w) => !WEAK_WORD.test(w));
  if (real.length === 0) return '대상이 빈말이다';
  return null;
}

/** 기관 메인으로 판정할 경로 (딥링크가 아님) */
const ROOT_PATHS = new Set(['', '/', '/index.do', '/main.do', '/index.jsp', '/main.jsp', '/index.html']);

type Issue = { axis: 1 | 2 | 3; msg: string; fix: string; warn?: boolean };

function readTitle(c: string): string {
  return c.match(/^ {2}title: '([^']*)'/m)?.[1] ?? '';
}

/**
 * 타이틀에서 "약속한 것"만 추출.
 * 숫자+단위와 3자 이상 한글 고유명사가 사용자가 기대하는 알맹이다.
 * 조사·일반동사는 본문에 형태가 달라져 나타나므로 검사 대상에서 뺀다.
 */
function titlePromises(title: string): string[] {
  const out = new Set<string>();
  for (const m of title.matchAll(/\d[\d,.]*\s*(만원|원|만|%|퍼센트|일|개월|년|세|회|배|명)/g)) {
    out.add(m[0].replace(/\s+/g, ''));
  }
  for (const m of title.matchAll(/[가-힣]{3,}/g)) {
    const w = m[0];
    if (/^(하는법|하는|받는|이란|어떻게|얼마나|무엇을|경우에|때문에|까지도)$/.test(w)) continue;
    out.add(w);
  }
  return [...out];
}

/**
 * 조사가 붙은 형태를 벗겨 후보를 만든다.
 * 타이틀의 "대상기간과"를 본문이 "대상기간"으로 다루면 다룬 것이다 —
 * 조사까지 통째로 찾으면 멀쩡한 글이 걸린다(실측으로 확인).
 */
const PARTICLES = ['으로써', '으로', '에서', '까지', '부터', '과', '와', '은', '는', '이', '가', '을', '를', '의', '에', '로', '도', '만'];
function forms(word: string): string[] {
  const out = [word];
  for (const p of PARTICLES) {
    if (word.length - p.length >= 2 && word.endsWith(p)) out.push(word.slice(0, -p.length));
  }
  return out;
}

function checkFile(file: string): Issue[] {
  const c = fs.readFileSync(path.join(DIR, file), 'utf8');
  const slug = file.replace(/\.ts$/, '');
  const issues: Issue[] = [];

  // ── 1축: 타이틀 ↔ 소제목 ────────────────────────────────
  const title = readTitle(c);
  // 본문은 파일 전체(타이틀 줄 제외) — 표·박스·핵심콕콕에서 다루는 것도 다룬 것이다.
  // intro/q 만 보면 표에 정리된 항목을 "없다"고 잡는 오탐이 난다(실측으로 확인).
  const norm = (s: string) => s.replace(/[\s,·()"'`]/g, '');
  const nBody = norm(c.replace(/^ {2}title: '[^']*',?$/m, ''));

  for (const p of titlePromises(title)) {
    if (!forms(p).some((f) => nBody.includes(norm(f)))) {
      issues.push({
        axis: 1,
        msg: `타이틀의 "${p}" 를 본문이 다루지 않음`,
        fix: `qa[].q 에 "${p}" 를 다루는 소제목을 넣거나, 타이틀에서 뺀다`,
      });
    }
  }

  // ── 2축: 버튼 CTA ──────────────────────────────────────
  const label = c.match(/ctaLabel: '([^']*)'/)?.[1];
  // applyUrl 을 상수로 빼 쓰는 파일이 있다(`applyUrl: IHAENG_APPLY`).
  // 리터럴만 찾으면 멀쩡한 딥링크를 "없음"으로 잡는다 — 상수 선언을 뒤져 푼다.
  let url = c.match(/applyUrl: '(https?:\/\/[^']*)'/)?.[1];
  if (!url) {
    const ref = c.match(/applyUrl: ([A-Za-z_$][\w$]*)/)?.[1];
    if (ref) url = c.match(new RegExp(`const ${ref}\\s*=\\s*'(https?://[^']*)'`))?.[1];
  }

  if (!label) {
    issues.push({
      axis: 2,
      msg: 'ctaLabel 없음 — 버튼이 "신청하기"로 뭉뚱그려짐',
      fix: '이 글의 행동에 맞는 ctaLabel 지정 (예: 자격 조회하기 / 서식 다운로드)',
    });
  } else {
    const why = judgeCtaLabel(label);
    if (why) {
      issues.push({
        axis: 2,
        msg: `ctaLabel "${label}" — ${why}`,
        fix: '[구체적 대상] + [행동] 으로 쓴다 (docs/button-copy.md 규칙 3)',
      });
    }
  }

  if (!url) {
    issues.push({ axis: 2, msg: 'applyUrl 없음 — 버튼이 죽어 있음', fix: '해당 서비스 페이지 URL 지정' });
  } else {
    const p = new URL(url).pathname.replace(/\/+$/, '');
    if (ROOT_PATHS.has(p) && !new URL(url).search) {
      issues.push({
        axis: 2,
        msg: `applyUrl 이 기관 메인 (${url})`,
        fix: '해당 정책 서비스 페이지로 (예: gov.kr/mw/AA020InfoCappView.do?CappBizCD=…)',
      });
    }
  }

  // ── 3축: 허브-스포크 ───────────────────────────────────
  // 깨진 배선(고아 허브·매니페스트 불일치)은 verify-integrity.ts 가 차단한다.
  // 여기서 보는 건 "사용자가 더 볼 게 있는가"뿐 — 스포크 0개는 아직 안 만든 것이지
  // 깨진 게 아니므로 경고만 한다. 차단으로 두면 680개 중 508개가 막힌다(실측).
  if (countSpokes(slug) === 0) {
    issues.push({
      axis: 3,
      msg: '연결된 스포크 0개 — 허브가 막다른 길',
      fix: 'registry.ts 에 스포크를 등록하면 체류가 늘고 허브로 권위가 모인다',
      warn: true,
    });
  }

  return issues;
}

/**
 * registry.ts 는 `'{policySlug}': { '{spokeSlug}': Content, … }` 중첩 구조.
 * 정책 블록을 찾아 그 안의 키 개수를 센다.
 */
let spokeMap: Record<string, number> | null = null;
function countSpokes(slug: string): number {
  if (spokeMap === null) {
    spokeMap = {};
    const p = 'data/spokes/registry.ts';
    const c = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
    const body = c.slice(c.indexOf('export const SpokesRegistry'));
    // 들여쓰기 2칸 = 정책 키, 4칸 = 스포크 키
    let cur = '';
    for (const line of body.split('\n')) {
      const policy = line.match(/^ {2}'([^']+)':\s*\{/);
      if (policy) { cur = policy[1]; spokeMap[cur] = 0; continue; }
      if (/^ {2}\},?\s*$/.test(line)) { cur = ''; continue; }
      if (cur && /^ {4}'[^']+':/.test(line)) spokeMap[cur]++;
    }
  }
  return spokeMap[slug] ?? 0;
}

// ── 대상 선정 ────────────────────────────────────────────
const args = process.argv.slice(2);
const all = args.includes('--all');
const named = args.filter((a) => !a.startsWith('--'));

let targets: string[];
if (all) {
  targets = fs.readdirSync(DIR).filter((f) => f.endsWith('.ts') && !['manifest.ts', 'index.ts'].includes(f));
} else if (named.length) {
  targets = named.map((s) => (s.endsWith('.ts') ? s : `${s}.ts`));
} else {
  // 변경분만 — push 대상 커밋에서 건드린 정책 파일
  let diff = '';
  try {
    diff = execSync('git diff --name-only origin/main...HEAD -- data/policies', { encoding: 'utf8' });
  } catch {
    try {
      diff = execSync('git diff --name-only HEAD~1 -- data/policies', { encoding: 'utf8' });
    } catch {
      diff = '';
    }
  }
  targets = diff
    .split('\n')
    .filter((l) => l.trim().endsWith('.ts'))
    .map((l) => path.basename(l.trim()))
    .filter((f) => !['manifest.ts', 'index.ts'].includes(f) && fs.existsSync(path.join(DIR, f)));
}

// ── 실행 ────────────────────────────────────────────────
console.log('='.repeat(60));
console.log(' 사용자 중심 검사 — 타이틀↔소제목 / 버튼 CTA / 허브-스포크');
console.log('='.repeat(60));

if (!targets.length) {
  console.log(' 변경된 정책 파일 없음 — 검사 생략');
  process.exit(0);
}

const AXIS = { 1: '타이틀↔소제목', 2: '버튼 CTA', 3: '허브-스포크' } as const;
let failed = 0;
const axisCount = { 1: 0, 2: 0, 3: 0 };

let warned = 0;

/* 기준선(baseline) — 원래 있던 결함은 경고, 새로 생긴 것만 차단.
   사유는 scripts/lib/baseline.ts 머리말 참조 (2026-08-10). */
const GATE = 'user-value';
const collected: { file: string; axis: string; msg: string; fix: string; warn?: boolean }[] = [];
for (const f of targets) {
  for (const i of checkFile(f)) {
    collected.push({ file: f.replace(/\.ts$/, ''), axis: String(i.axis), msg: i.msg, fix: i.fix, warn: i.warn });
  }
}

if (process.argv.includes('--rebase-baseline')) {
  rebase(GATE, collected);
  console.log(` 기준선 재설정 — ${collected.length}개를 기존 결함으로 기록했다`);
  process.exit(0);
}

const { fresh, known } = split(GATE, collected);
fresh.forEach((i) => axisCount[Number(i.axis) as 1 | 2 | 3]++);
const freshFiles = new Set(fresh.map((i) => i.file));
failed = [...freshFiles].filter((f) => fresh.some((i) => i.file === f && !i.warn)).length;
warned = freshFiles.size - failed;

if (!all) {
  for (const file of freshFiles) {
    const mine = fresh.filter((x) => x.file === file);
    console.log(`\n${mine.some((i) => !i.warn) ? '❌' : '⚠️ '} ${file}`);
    for (const i of mine) {
      console.log(`   ${i.warn ? '(경고)' : ''}[${AXIS[Number(i.axis) as 1 | 2 | 3]}] ${i.msg}`);
      console.log(`      → ${i.fix}`);
    }
  }
  if (known.length) {
    console.log(`\n⚠ 원래 있던 결함 ${known.length}개는 기준선에 있어 차단하지 않는다`);
    console.log('   (전체 현황: --all / 고친 뒤 기준선 정리: --prune-baseline)');
  }
}

if (process.argv.includes('--prune-baseline')) {
  const gone = prune(GATE, collected);
  console.log(` 기준선 정리 — 고쳐진 ${gone}개를 뺐다 (남은 ${baselineCount(GATE)}개)`);
  process.exit(0);
}

console.log(`\n검사 ${targets.length}개 / 차단 ${failed}개 / 경고만 ${warned}개`);
console.log(`  타이틀↔소제목 ${axisCount[1]}  버튼CTA ${axisCount[2]}  허브-스포크 ${axisCount[3]}(경고)`);

if (all) {
  console.log('\n(--all 은 현황 파악용 — 차단하지 않는다)');
  process.exit(0);
}

if (failed) {
  console.log('\n' + '='.repeat(60));
  console.log(` 사용자 중심 기준 미달 ${failed}개 — push 차단`);
  console.log(' 위 항목을 고치고 다시 push한다. 부피를 늘리지 말고 내용을 맞춘다.');
  console.log('='.repeat(60));
  process.exit(1);
}

console.log('\n ✅ 통과 — 타이틀이 약속한 걸 본문이 다루고, 버튼이 갈 곳으로 간다');
