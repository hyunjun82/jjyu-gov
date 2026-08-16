/**
 * check-click-value.ts — 스포크가 "버튼을 누르게 만드는 글"인지 검사
 *
 * gov-jjyu의 글은 정보 전달이 목적이 아니다. 방문자가 버튼을 눌러 내부로
 * 이동해야 전면광고(vignette)가 뜨고, 그게 수익의 지렛대다.
 * 실측: 전면광고 노출RPM $7.41 vs 디스플레이 $1.43 — 5배 차이인데
 * 전체 노출의 4.3%에 불과했다. 내부 이동을 늘리는 것이 남은 여지다.
 *
 * 그래서 이 게이트는 "잘 쓴 글"이 아니라 "누르게 되는 글"인지만 본다.
 *
 * 검사 항목:
 *   A 제목 행동성   h1이 행동으로 끝나는가 ("~란 무엇인가"면 읽고 나간다)
 *   B 버튼 수용     qa 7개 이상인가 (허브 버튼 3개가 2·4·마지막 슬롯에 들어감)
 *   C 외부 누수     스포크 본문에서 외부로 내보내는 CTA가 없는가
 *                   (스포크→허브→외부 순서를 지켜야 전면광고 기회를 안 버린다)
 *   D 종결어미 도배  제목이 '~법'으로 끝나지 않는가 (같은 어미 반복은 기계 생성처럼 보인다)
 *
 * 사용:
 *   npx tsx scripts/check-click-value.ts            # 변경분만 (pre-push)
 *   npx tsx scripts/check-click-value.ts --all      # 전수 현황 (차단 안 함)
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { split, rebase, prune, baselineCount } from './lib/baseline';

const ROOT = 'app/policy/[id]/[spoke]/content';

/** 눌러야 해결되는 동작. '안내·소개·정리·이해'는 읽으면 끝나므로 뺀다. */
const ACTION = /신청|조회|발급|다운로드|접수|제출|계산|신고|청구|납부|가입|등록|확인|받는|받기|찾는|찾기|여는|열기|개설|해지|변경|연장|재발급|비교|예매|예약|검색|열람|입찰|쓰는|쓰기|고르는|골라|갈아타|옮기는|바꾸는|지키는|챙기는/;

/** 정보형 종결 — 읽고 나가는 제목 */
const INFO_ONLY = /(무엇인가|이란\??$|의 모든 것|총정리$|알아보기$|정리$|이해하기$)/;

/**
 * 종결 도배 방지 — '~법' 한 가지만 막던 것을 빈도 기반으로 바꾼다 (2026-08-10)
 *
 * 왜 바꿨나:
 *   원래는 `/법\??$/` 하나만 봤다. 그런데 사이트 전체 타이틀 1,759개의 종결을
 *   실제로 세어보니 문제가 '법' 하나가 아니었다.
 *     …는 법 426개(24.2%) / …방법 61 / …차이 35 / …되나요 35 / …총정리 32 …
 *     **상위 20종이 전체의 50%**
 *   즉 '법'을 막아도 그 다음으로 몰릴 뿐이다. 어느 한 표현을 금지어로 박는 게 아니라
 *   "이미 붐비는 종결이면 피한다"로 규칙을 바꿔야 한다.
 *
 * 어떻게:
 *   글을 쓸 때마다 사이트 전체 타이틀의 종결(마지막 어절 끝 3글자) 빈도를 세고,
 *   새 타이틀의 종결이 이미 CROWDED 이상 쓰였으면 막는다.
 *   금지어 목록을 손으로 관리하지 않으므로 새 유행어가 생겨도 자동으로 잡힌다.
 *
 *   기존 위반은 baseline 이 흡수하므로(scripts/lib/baseline.ts) 이 변경으로
 *   옛 글이 무더기로 막히지는 않는다. 새로 쓰는 글만 다른 종결을 고르게 된다.
 */
const CROWDED = 20;

/** 종결 표지 — 물음표·마침표를 떼고 마지막 3글자 */
function endOf(t: string): string {
  return t.replace(/[?!.\s]+$/, '').slice(-3);
}

/** 사이트 전체 타이틀의 종결 빈도 (한 번만 계산해 재사용) */
let endFreqCache: Record<string, number> | null = null;
function endFreq(): Record<string, number> {
  if (endFreqCache) return endFreqCache;
  const freq: Record<string, number> = {};
  const add = (t: string) => {
    const e = endOf(t);
    freq[e] = (freq[e] || 0) + 1;
  };
  if (fs.existsSync(ROOT)) {
    for (const dir of fs.readdirSync(ROOT)) {
      const d = path.join(ROOT, dir);
      if (!fs.statSync(d).isDirectory()) continue;
      for (const f of fs.readdirSync(d)) {
        if (!f.endsWith('.tsx')) continue;
        const m = fs.readFileSync(path.join(d, f), 'utf8').match(/h1: '([^']+)'/);
        if (m) add(m[1]);
      }
    }
  }
  const POL = 'data/policies';
  if (fs.existsSync(POL)) {
    for (const f of fs.readdirSync(POL)) {
      if (!f.endsWith('.ts')) continue;
      const m = fs.readFileSync(path.join(POL, f), 'utf8').match(/^  title: '([^']+)'/m);
      if (m) add(m[1]);
    }
  }
  endFreqCache = freq;
  return freq;
}

type Issue = { axis: 'A' | 'B' | 'C' | 'D'; msg: string; fix: string };

function checkSpoke(file: string): Issue[] {
  const c = fs.readFileSync(file, 'utf8');
  const issues: Issue[] = [];

  // ── A. 제목이 행동으로 끝나는가 ──────────────────────
  const h1 = c.match(/h1: '([^']*)'/)?.[1] ?? '';
  if (h1) {
    if (INFO_ONLY.test(h1)) {
      issues.push({
        axis: 'A',
        msg: `제목이 정보형으로 끝남: "${h1}"`,
        fix: '행동 동사를 넣는다. 종결은 정본(docs/title-style-24.md)처럼 물음형·시나리오형으로 — "늦으면 못 받는 이유는?" "며칠 받나" "1분이면 끝"',
      });
    } else if (!ACTION.test(h1)) {
      issues.push({
        axis: 'A',
        msg: `제목에 행동 동사가 없음: "${h1}"`,
        fix: '신청·조회·발급·계산·신고 중 이 글이 유도하는 동작을 제목에 넣는다',
      });
    }

    // ── D. 종결 도배 ────────────────────────────────────
    const end = endOf(h1);
    const used = endFreq()[end] ?? 0;
    if (used >= CROWDED) {
      issues.push({
        axis: 'D',
        msg: `종결 "…${end}" 이 사이트에 이미 ${used}개 — 같은 끝이 몰린다: "${h1}"`,
        fix: '행동 동사는 문장 안에 두고 끝은 다르게 — "어디서 신청하나" "언제까지 내야 하나" "얼마 받나" "놓치면 어떻게 되나" (정본 docs/title-style-24.md)',
      });
    }
  }

  // ── B. 허브 버튼을 받을 구조인가 ─────────────────────
  // SpokeClient 가 qa 인덱스 2·4·마지막에 허브 버튼을 넣는다.
  // qa 가 적으면 버튼 슬롯이 겹쳐 실제로 3개가 안 나온다.
  const qa = (c.match(/anchor: '/g) || []).length;
  /* 2026-08-09: qa 개수 자체를 보던 것을 고친다.
     이전 규칙은 `qa < 6` 이면 무조건 차단이었다. 그런데 fix 문구는
     "억지로 늘릴 바에는 버튼을 2개로 줄인다"였다 — 조언대로 버튼을 줄여도
     그대로 차단당한다. 검사기가 자기 조언을 따를 수 없게 돼 있었다.
     CLAUDE.md·title-workflow.md 의 "소제목 개수는 타이틀이 정한다(하한 3)"
     와도 정면으로 충돌했다.

     실제로 잘못된 상태는 "qa 가 적다"가 아니라 **달아둔 버튼이 화면에 안 나오는 것**이다.
     SpokeClient 171행이 [...new Set([2, 4, qa.length-1])] 자리에만 렌더하므로,
     슬롯 수보다 act 를 많이 달면 그만큼 조용히 사라진다. 그것만 잡는다. */
  const slots = qa > 0 ? new Set([2, 4, qa - 1].filter((i) => i >= 0 && i < qa)).size : 0;
  const acts = (c.match(/^\s{6}act:\s*\{/gm) || []).length;
  if (acts > slots) {
    issues.push({
      axis: 'B',
      msg: `act ${acts}개인데 버튼이 뜨는 자리는 ${slots}개 — ${acts - slots}개가 화면에 안 나온다`,
      fix: `슬롯은 qa 인덱스 2·4·마지막뿐이다. act 를 ${slots}개로 줄이거나 qa 를 늘려 슬롯을 연다`,
    });
  }

  // ── C. 외부로 새는 CTA가 없는가 ──────────────────────
  // sources·faqData 의 출처 링크는 정상이다. 문제는 본문(qa) 안에서
  // 외부로 내보내는 링크다. 거기서 나가면 전면광고 기회를 버린다.
  const qaBlock = c.slice(c.indexOf('qa: ['), c.indexOf('faqData'));
  const leaks = [...qaBlock.matchAll(/href=["']https?:\/\/[^"']+["']/g)].length
    + [...qaBlock.matchAll(/<a\s/g)].length;
  if (leaks > 0) {
    issues.push({
      axis: 'C',
      msg: `본문에 외부 링크 ${leaks}건 — 여기서 나가면 전면광고가 안 뜬다`,
      fix: '본문 링크는 빼고 허브 CTA로 보낸다. 출처는 sources·faqData 에만 둔다',
    });
  }

  return issues;
}

// ── 대상 선정 ────────────────────────────────────────────
const args = process.argv.slice(2);
const all = args.includes('--all');

function allSpokes(): string[] {
  const out: string[] = [];
  if (!fs.existsSync(ROOT)) return out;
  for (const dir of fs.readdirSync(ROOT)) {
    const d = path.join(ROOT, dir);
    if (!fs.statSync(d).isDirectory()) continue;
    for (const f of fs.readdirSync(d)) if (f.endsWith('.tsx')) out.push(path.join(d, f));
  }
  return out;
}

let targets: string[];
if (all) {
  targets = allSpokes();
} else {
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
  targets = diff.split('\n').map((l) => l.trim()).filter((l) => l.endsWith('.tsx') && fs.existsSync(l));
}

// ── 실행 ────────────────────────────────────────────────
console.log('='.repeat(60));
console.log(' 클릭 유도 검사 — 제목 행동성 / 버튼 슬롯 / 외부 누수');
console.log('='.repeat(60));

if (!targets.length) {
  console.log(' 변경된 스포크 없음 — 검사 생략');
  process.exit(0);
}

const AXIS = { A: '제목 행동성', B: '버튼 슬롯', C: '외부 누수', D: '종결어미 도배' } as const;
let failed = 0;
const count = { A: 0, B: 0, C: 0, D: 0 };

/* 기준선(baseline): 원래 있던 결함은 경고, 이번에 새로 생긴 것만 차단.
   왜 이렇게 하는지는 scripts/lib/baseline.ts 머리말 참조. */
const GATE = 'click-value';
const collected: { file: string; axis: string; msg: string; fix: string }[] = [];
for (const f of targets) {
  for (const i of checkSpoke(f)) {
    collected.push({ file: f.replace(ROOT + path.sep, ''), axis: i.axis, msg: i.msg, fix: i.fix });
  }
}

if (process.argv.includes('--rebase-baseline')) {
  rebase(GATE, collected);
  console.log(` 기준선 재설정 — ${collected.length}개를 기존 결함으로 기록했다`);
  process.exit(0);
}

const { fresh, known } = split(GATE, collected);
fresh.forEach((i) => count[i.axis as keyof typeof count]++);
const freshFiles = new Set(fresh.map((i) => i.file));
failed = freshFiles.size;

if (!all) {
  for (const file of freshFiles) {
    console.log(`\n❌ ${file}`);
    for (const i of fresh.filter((x) => x.file === file)) {
      console.log(`   [${AXIS[i.axis as keyof typeof AXIS]}] ${i.msg}`);
      console.log(`      → ${i.fix}`);
    }
  }
  if (known.length) {
    console.log(`\n⚠ 원래 있던 결함 ${known.length}개는 기준선에 있어 차단하지 않는다`);
    console.log(`   (전체 현황: --all / 고친 뒤 기준선 정리: --prune-baseline)`);
  }
}

if (process.argv.includes('--prune-baseline')) {
  const gone = prune(GATE, collected);
  console.log(` 기준선 정리 — 고쳐진 ${gone}개를 뺐다 (남은 ${baselineCount(GATE)}개)`);
  process.exit(0);
}

console.log(`\n검사 ${targets.length}개 / 새 문제 ${failed}개 / 기존 ${known.length}개`);
console.log(`  제목 행동성 ${count.A}  버튼 슬롯 ${count.B}  외부 누수 ${count.C}  종결어미 도배 ${count.D}`);

if (all) {
  console.log('\n(--all 은 현황 파악용 — 차단하지 않는다)');
  process.exit(0);
}

if (failed) {
  console.log('\n' + '='.repeat(60));
  console.log(` 클릭 유도 기준 미달 ${failed}개 — push 차단`);
  console.log(' 정보를 잘 정리한 글이 아니라, 누르게 되는 글이어야 한다.');
  console.log('='.repeat(60));
  process.exit(1);
}

console.log('\n ✅ 통과 — 제목이 행동으로 끝나고, 버튼이 들어가고, 밖으로 안 샌다');
