/**
 * check-cue-value.ts — 허브 카드마다 "누를 이유(cue) + 버튼"이 있는지 검사
 *
 * 왜 이 게이트가 필요했나 (2026-07-30):
 *   버튼 앞 문구가 이 프로젝트에서 가장 중요한 규칙인데도, 게이트 5개 전부에
 *   act/cue를 보는 코드가 0줄이었다. 결과는 허브 703개 중 문구가 있는 게 9개(1.3%).
 *   Format A·qa≥7·Q1~Q13처럼 게이트가 붙은 규칙은 거의 100% 지켜졌다.
 *   → 검사하지 않는 규칙은 지켜지지 않는다. 그래서 검사한다.
 *
 * 이 게이트가 하지 않는 일:
 *   cue 문장을 자동 생성하지 않는다. 주제를 모르는 템플릿 문장을 703개에 뿌리면
 *   그게 곧 도배다(과거 hubCue() 자동생성을 만들었다가 폐기한 이유).
 *   문장은 사람이 주제를 보고 쓴다. 게이트는 "빠졌는지"와 "베껴 썼는지"만 본다.
 *
 * 검사 항목:
 *   A 문구 누락    qa 카드 수만큼 act.cue 가 있는가
 *   B 문구 도배    다른 정책 파일의 cue 와 문장이 똑같지 않은가
 *   C 목적지 뭉침  한 글의 act.url 이 전부 같은 곳을 가리키지 않는가
 *   D 딥링크 아님  act.url 이 기관 메인/루트가 아닌가 (그 카드의 행동 지점인가)
 *   E 어미 반복    한 글 안에서 같은 종결 표현이 3회 이상 반복되지 않는가
 *   F 라벨 정보형  버튼 라벨이 '…안내 보기'가 아니라 실제 행동인가
 *
 * 사용:
 *   npx tsx scripts/check-cue-value.ts          # 변경된 허브만 (pre-push, 차단)
 *   npx tsx scripts/check-cue-value.ts --all    # 전체 현황 (차단 안 함)
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = 'data/policies';

/**
 * 기관 메인/루트 — 그 카드의 행동 지점이 아니라 "홈페이지 가세요"에 가깝다.
 * 좁게 잡는다: 사업 전용 경로의 랜딩(fill4young.kinfa.or.kr/yfs/main 등)은
 * 그 사업의 안내 화면이라 딥링크로 인정한다. 오탐으로 push를 막으면 게이트를
 * 우회하게 되고, 그러면 게이트가 없는 것과 같아진다.
 */
const SHALLOW_PATTERNS: RegExp[] = [
  /^https?:\/\/[^/]+\/?$/i,                        // 도메인 루트
  /^https?:\/\/[^/]+\/(main|index)(\.\w+)?\/?$/i,   // 도메인 직하위 main
  /^https?:\/\/[^/]+\/\w+\/(main|index)\.\w+$/i,    // 포털 메인 (…/nportal/main.do)
];
/**
 * 쿼리스트링이 붙으면 딥링크로 본다.
 * ticket.melon.com/performance/index.htm?prodId=212031 처럼 파일명이 index여도
 * 파라미터가 특정 공연·특정 공고를 가리키면 그건 그 카드의 행동 지점이다.
 */
const isShallow = (u: string) => {
  const [base, query] = u.split('?');
  if (query && query.length > 2) return false;
  return SHALLOW_PATTERNS.some((r) => r.test(base));
};

/**
 * 버튼 라벨은 행동이어야 한다.
 * "상품 안내 보기 / 자세히 보기"는 정보라 눌릴 이유가 없다 — 실제로 이 라벨을 단
 * 카드가 클릭을 못 받았다(2026-07-30). 보는 건 행동이 아니다.
 */
const LABEL_ACTION =
  /신청|조회|발급|다운로드|내려받|접수|제출|계산|신고|청구|납부|가입|등록|확인|받|찾|열|개설|해지|변경|연장|비교|대조|예매|예약|검색|열람|입찰|고르|골라|갈아타|챙기|남기|문의|따라가|맞춰|넣어/;
const LABEL_WEAK = /(안내|정보|내용|자료)\s*(보기|확인)$|자세히\s*보기|^바로가기$|^보기$/;

type Issue = { axis: 'A' | 'B' | 'C' | 'D' | 'E' | 'F'; msg: string; fix: string };

/** 파일에서 cue/label/url 과 qa 카드 수를 뽑는다 (TS 실행 없이 정적 파싱) */
function parse(file: string) {
  const c = fs.readFileSync(file, 'utf8');
  const consts = new Map<string, string>();
  for (const m of c.matchAll(/^const\s+([A-Z0-9_]+)\s*=\s*'([^']+)'/gm)) {
    consts.set(m[1], m[2]);
  }
  const qaCount = (c.match(/^\s{4,6}anchor: '/gm) || []).length
    || (c.match(/anchor: '/g) || []).length;

  /* 문구 안에 작은따옴표가 있으면 "…" 로 감싸 쓴다(예: '대상 불가'로 끝납니다).
     한 종류만 읽으면 있는 문구를 없다고 잡아 헛차단이 난다 — 세 종류 다 읽는다. */
  const cues: string[] = [];
  for (const m of c.matchAll(/cue:\s*'((?:[^'\\]|\\.)*)'/g)) cues.push(m[1]);
  for (const m of c.matchAll(/cue:\s*"((?:[^"\\]|\\.)*)"/g)) cues.push(m[1]);
  for (const m of c.matchAll(/cue:\s*`((?:[^`\\]|\\.)*)`/g)) cues.push(m[1]);

  const labels: string[] = [];
  const urls: string[] = [];
  // act 블록 안의 url 만 — sources/faq 의 url 은 제외한다
  for (const m of c.matchAll(/act:\s*\{[\s\S]{0,900}?\}/g)) {
    const raw = m[0].match(/url:\s*(?:'([^']+)'|([A-Z0-9_]+))/);
    if (!raw) continue;
    urls.push(raw[1] ?? consts.get(raw[2] ?? '') ?? raw[2] ?? '');
    const lm = m[0].match(/label:\s*'([^']+)'/) ?? m[0].match(/label:\s*"([^"]+)"/);
    if (lm) labels.push(lm[1]);
  }

  const slug = c.match(/slug: '([^']+)'/)?.[1] ?? path.basename(file, '.ts');
  return { slug, qaCount, cues, urls, labels };
}

/** 종결 표현 — 마지막 어절 기준으로 거칠게 본다 */
function ending(s: string): string {
  const t = s.trim().replace(/[.!?~]+$/, '');
  const last = t.split(/[\s,]/).filter(Boolean).pop() ?? '';
  return last.slice(-6);
}

function checkHub(file: string, cueIndex: Map<string, string>): Issue[] {
  const { slug, qaCount, cues, urls, labels } = parse(file);
  const issues: Issue[] = [];

  // ── A. 문구 누락 ────────────────────────────────────
  if (cues.length < qaCount) {
    issues.push({
      axis: 'A',
      msg: `qa ${qaCount}개인데 act.cue ${cues.length}개 — ${qaCount - cues.length}개 카드가 문구 없이 버튼만 붙는다`,
      fix: '카드마다 act: { cue, label, url } 을 넣는다. 문구 없는 버튼은 눌리지 않는다',
    });
  }

  // ── B. 다른 글에서 그대로 베낀 문구 ──────────────────
  for (const cue of cues) {
    const key = cue.replace(/\s+/g, '');
    const owner = cueIndex.get(key);
    if (owner && owner !== slug) {
      issues.push({
        axis: 'B',
        msg: `문구가 ${owner} 와 완전히 동일: "${cue.slice(0, 34)}…"`,
        fix: '이 글의 주제·상황으로 다시 쓴다. 같은 문장이 여러 글에 있으면 도배로 읽힌다',
      });
    } else if (!owner) {
      cueIndex.set(key, slug);
    }
  }

  // ── C. 목적지가 한 곳으로 뭉쳤는가 ───────────────────
  if (urls.length >= 3 && new Set(urls).size === 1) {
    issues.push({
      axis: 'C',
      msg: `act.url ${urls.length}개가 모두 같은 곳 — 카드마다 하고 싶어진 행동이 다른데 목적지가 하나다`,
      fix: '금액 카드는 조회 화면, 신청 카드는 접수 화면처럼 그 카드의 행동 지점으로 나눈다',
    });
  }

  // ── D. 기관 메인으로 보내는가 ────────────────────────
  for (const u of urls) {
    if (isShallow(u)) {
      issues.push({
        axis: 'D',
        msg: `기관 메인/루트로 보냄: ${u}`,
        fix: '그 카드에서 하려는 행동의 실제 화면(조회·접수·다운로드 페이지)으로 바꾼다',
      });
    }
  }

  // ── F. 버튼 라벨이 행동인가 ──────────────────────────
  for (const L of labels) {
    if (LABEL_WEAK.test(L) || !LABEL_ACTION.test(L)) {
      issues.push({
        axis: 'F',
        msg: `버튼 라벨이 행동이 아님: "${L}"`,
        fix: '"…안내 보기"는 정보다. 그 카드에서 할 동작을 그대로 쓴다 — "내 지원구간 확인하기", "공고문 PDF 내려받기"',
      });
    }
  }

  // ── E. 한 글 안에서 어미가 반복되는가 ────────────────
  const tally = new Map<string, number>();
  for (const cue of cues) {
    const e = ending(cue);
    if (e) tally.set(e, (tally.get(e) ?? 0) + 1);
  }
  for (const [e, n] of tally) {
    if (n >= 3) {
      issues.push({
        axis: 'E',
        msg: `"…${e}" 로 끝나는 문구가 ${n}개 — 한 글 안에서 어미가 반복된다`,
        fix: '상황마다 맺음을 다르게 한다 (설명형·조건형·물음형을 섞는다)',
      });
    }
  }

  return issues;
}

// ── 대상 선정 ────────────────────────────────────────────
const all = process.argv.slice(2).includes('--all');

function allHubs(): string[] {
  if (!fs.existsSync(ROOT)) return [];
  return fs
    .readdirSync(ROOT)
    .filter((f) => f.endsWith('.ts') && f !== 'manifest.ts')
    .map((f) => path.join(ROOT, f));
}

let targets: string[];
if (all) {
  targets = allHubs();
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
  targets = diff
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.endsWith('.ts') && !l.endsWith('manifest.ts') && fs.existsSync(l));
}

/* ── 스포크 버튼 슬롯 검사 ──────────────────────────────
   SpokeClient 는 [...new Set([2, 4, qa.length - 1])] 세 자리에만 버튼을 렌더링한다.
   그 자리에 act.cue 가 없으면 문구 없는 버튼이 그대로 노출된다.
   허브만 보던 이 게이트가 못 잡아 2026-07-31 스포크 7곳이 그 상태로 통과했다. */
const SPOKE_ROOT = 'app/policy/[id]/[spoke]/content';

function allSpokes(): string[] {
  const out: string[] = [];
  const walk = (d: string) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const q = path.join(d, e.name);
      if (e.isDirectory()) walk(q);
      else if (e.name.endsWith('.tsx')) out.push(q);
    }
  };
  if (fs.existsSync(SPOKE_ROOT)) walk(SPOKE_ROOT);
  return out;
}

function checkSpokeSlots(file: string): string[] {
  const src = fs.readFileSync(file, 'utf8');
  const anchors = [...src.matchAll(/anchor: '([^']+)'/g)].map((m) => m[1]);
  if (anchors.length < 3) return [];
  const hasAct = anchors.map((a, i) => {
    const st = src.indexOf("anchor: '" + a + "'");
    const en = i + 1 < anchors.length ? src.indexOf("anchor: '" + anchors[i + 1] + "'") : src.length;
    return src.slice(st, en).includes('act:');
  });
  const slots = [...new Set([2, 4, anchors.length - 1])].filter((i) => i >= 0 && i < anchors.length);
  return slots.filter((i) => !hasAct[i]).map((i) => (i + 1) + '번째 카드(' + anchors[i] + ')');
}

let spokeTargets: string[];
if (all) {
  spokeTargets = allSpokes();
} else {
  let sdiff = '';
  try {
    sdiff = execSync('git diff --name-only origin/main...HEAD -- "' + SPOKE_ROOT + '"', { encoding: 'utf8' });
  } catch {
    try {
      sdiff = execSync('git diff --name-only HEAD~1 -- "' + SPOKE_ROOT + '"', { encoding: 'utf8' });
    } catch {
      sdiff = '';
    }
  }
  spokeTargets = sdiff
    .split(String.fromCharCode(10))
    .map((l) => l.trim())
    .filter((l) => l.endsWith('.tsx') && fs.existsSync(l));
}

// ── 실행 ────────────────────────────────────────────────
console.log('='.repeat(60));
console.log(' 문구·버튼 검사 — 누를 이유가 버튼 앞에 있는가');
console.log('='.repeat(60));

if (!targets.length && !spokeTargets.length) {
  console.log(' 변경된 허브 없음 — 검사 생략');
  process.exit(0);
}

/* 도배 검사는 전체 허브를 기준으로 봐야 의미가 있다.
   변경분만 볼 때도 나머지 허브의 cue 를 먼저 색인해 둔다. */
const cueIndex = new Map<string, string>();
if (!all) {
  const targetSet = new Set(targets.map((t) => path.resolve(t)));
  for (const f of allHubs()) {
    if (targetSet.has(path.resolve(f))) continue;
    const { slug, cues } = parse(f);
    for (const cue of cues) {
      const key = cue.replace(/\s+/g, '');
      if (!cueIndex.has(key)) cueIndex.set(key, slug);
    }
  }
}

const AXIS = {
  A: '문구 누락',
  B: '문구 도배',
  C: '목적지 뭉침',
  D: '딥링크 아님',
  E: '어미 반복',
  F: '라벨 정보형',
  G: '버튼 슬롯 빈 문구',
} as const;

let failed = 0;
let cueTotal = 0;
let qaTotal = 0;
const count = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0 };

for (const f of targets) {
  const { qaCount, cues } = parse(f);
  qaTotal += qaCount;
  cueTotal += cues.length;

  const issues = checkHub(f, cueIndex);
  if (!issues.length) continue;
  failed++;
  issues.forEach((i) => count[i.axis]++);
  if (!all) {
    console.log(`\n❌ ${path.basename(f, '.ts')}`);
    for (const i of issues) {
      console.log(`   [${AXIS[i.axis]}] ${i.msg}`);
      console.log(`      → ${i.fix}`);
    }
  }
}

let spokeFailed = 0;
for (const sf of spokeTargets) {
  const miss = checkSpokeSlots(sf);
  if (!miss.length) continue;
  spokeFailed++;
  count.G += miss.length;
  if (!all) {
    console.log('');
    console.log('❌ ' + path.basename(sf, '.tsx') + ' (스포크)');
    console.log('   [' + AXIS.G + '] 버튼이 뜨는 자리에 문구가 없음: ' + miss.join(', '));
    console.log('      → 스포크는 2·4·마지막 카드에만 버튼이 렌더링된다. 그 카드에 act:{cue,label,url} 을 넣는다');
  }
}

console.log(`\n검사 허브 ${targets.length}개 · 스포크 ${spokeTargets.length}개 / 문제 ${failed + spokeFailed}개`);
console.log(`  문구 ${cueTotal} / 카드 ${qaTotal}`);
console.log(
  `  문구누락 ${count.A}  문구도배 ${count.B}  목적지뭉침 ${count.C}  딥링크아님 ${count.D}  어미반복 ${count.E}  라벨정보형 ${count.F}  버튼슬롯 ${count.G}`,
);

if (all) {
  console.log('\n(--all 은 현황 파악용 — 차단하지 않는다)');
  process.exit(0);
}

if (failed || spokeFailed) {
  console.log('\n' + '='.repeat(60));
  console.log(` 문구·버튼 기준 미달 ${failed + spokeFailed}개 — push 차단`);
  console.log(' 버튼만 놓으면 아무도 안 누른다. 누를 이유를 버튼 바로 위에 둔다.');
  console.log('='.repeat(60));
  process.exit(1);
}

console.log('\n ✅ 통과 — 카드마다 누를 이유가 있고, 목적지가 그 행동으로 나뉘어 있다');
