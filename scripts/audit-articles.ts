/**
 * audit-articles.ts — 이미 나간 글을 새 기준으로 다시 재는 도구
 *
 * 왜 (2026-08-08):
 *   게이트는 "지금 push하는 글"만 본다. 기준이 생기기 전에 나간 글은 영원히 검사되지 않는다.
 *   실제로 마운자로 오류는 나간 뒤에 발견됐고, 그때야 사람이 눈으로 찾았다.
 *   기준이 새로 생기면 과거 글도 다시 재야 한다. 그걸 사람이 하면 매번 빠뜨린다.
 *
 * 검사 항목 (게이트와 같은 기준, 대상만 과거 글):
 *   A 팩트시트 없음         — 사실 검증 기록이 아예 없는 글
 *   B 근거 없는 빈도 표현   — 대부분/대개/경우가 많 (공감 표현은 제외)
 *   C 타이틀 코드 노출      — F00·제57조 같은 검색 안 하는 문자열
 *   D 출처가 기관 루트      — 1:1 대조가 불가능한 출처
 *   E 단정 표현             — 절대/무조건/반드시 받습니다 류
 *   F 추측 표현             — 약·정도·대략 (절대규칙 1 위반)
 *   G 버튼 슬롯 어긋남      — act가 qa 3·5·마지막이 아닌 자리
 *   H 수치 있는데 출처 없음 — 금액·비율을 쓰면서 sources가 빈약
 *
 * 사용:
 *   npx tsx scripts/audit-articles.ts --since 2026-08-01   # 그 이후 만들어진 글
 *   npx tsx scripts/audit-articles.ts <파일경로> [...]      # 특정 글만
 */
import { execSync } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();
const sh = (c: string) => {
  try {
    return execSync(c, { cwd: ROOT, maxBuffer: 40 * 1024 * 1024 }).toString();
  } catch {
    return '';
  }
};

/* ── 대상 파일 고르기 ───────────────────────────────────────── */
const argv = process.argv.slice(2);
let targets: string[] = [];
const sinceIdx = argv.indexOf('--since');
if (sinceIdx >= 0) {
  const since = argv[sinceIdx + 1];
  targets = [
    ...new Set(
      sh(`git log --since="${since}" --diff-filter=A --name-only --pretty=format: -- app/policy`)
        .split('\n')
        .map((s) => s.trim())
        .filter((s) => s.endsWith('.tsx'))
    ),
  ];
} else {
  targets = argv.filter((a) => a.endsWith('.tsx'));
}
targets = targets.filter((f) => existsSync(join(ROOT, f)));

if (!targets.length) {
  console.log('대상 글이 없다. --since 2026-08-01 처럼 범위를 주거나 파일 경로를 넘긴다.');
  process.exit(0);
}

/* ── 본문 문자열 뽑기 (정규식 이스케이프 사고를 피해 직접 파싱) ── */
function quotedTexts(src: string): string[] {
  const out: string[] = [];
  for (const key of ['intro:', 'content:', 'a:', 'cue:']) {
    let from = 0;
    for (;;) {
      const k = src.indexOf(key, from);
      if (k < 0) break;
      const q1 = src.indexOf("'", k + key.length);
      if (q1 < 0) break;
      const q2 = src.indexOf("'", q1 + 1);
      if (q2 < 0) break;
      const body = src.slice(q1 + 1, q2);
      if (body.length >= 30) out.push(body);
      from = q2 + 1;
    }
  }
  return out;
}

const FREQ = ['대부분', '대개', '경우가 많', '흔합니다'];
const EMPATHY = ['당황하셨', '놀라셨', '겪으셨', '아셨다면', '계신 분이 많', '기억나지 않는 경우가 많', '막막하셨', '포기하셨'];
/* 절대규칙 1: 추정·예시 수치 금지 / §9 금지어
   "약"은 계약·특약·투약·약 이름에도 들어간다. 수치를 흐리는 경우만 잡는다.
   (2026-08-08 1차 실행에서 28건 중 26건이 이런 오탐이었다. 가짜 경고가 섞이면 게이트를 안 보게 된다) */
const GUESS_RE: { re: RegExp; label: string }[] = [
  { re: /(^|[^가-힣])약\s*\d/g, label: '약 + 숫자' },
  { re: /\d[\d,.]*\s*(만원|원|%|일|개월|년)?\s*(정도|가량|남짓|안팎)/g, label: '숫자 + 정도·가량' },
  { re: /대략\s*\d/g, label: '대략 + 숫자' },
  { re: /수준입니다/g, label: '수준입니다(값 흐림)' },
];
const ABSOLUTE = ['무조건 받', '절대 안 됩니다', '반드시 받습니다', '100% 지급', '누구나 받'];

const CODE_IN_TITLE: { re: RegExp; why: string }[] = [
  { re: /\b[A-Z]\d{2}(\.\d)?\b/, why: '질병분류코드' },
  { re: /제\s?\d+조(의\d+)?/, why: '법 조문번호' },
  { re: /\b(ICD|KCD)-?\d*\b/i, why: '분류체계 약어' },
];

type Finding = { axis: string; detail: string };
const report: { file: string; title: string; findings: Finding[] }[] = [];

for (const f of targets) {
  const src = readFileSync(join(ROOT, f), 'utf8');
  const title = (src.match(/h1:\s*'([^']+)'/) || [])[1] || '';
  const findings: Finding[] = [];

  /* A 팩트시트 */
  const fsRef = src.match(/팩트시트:\s*(\S+)/);
  if (!fsRef) findings.push({ axis: 'A 팩트시트없음', detail: '사실 검증 기록이 없다 — 수치 근거를 되짚을 방법이 없음' });
  else if (!existsSync(join(ROOT, fsRef[1]))) findings.push({ axis: 'A 팩트시트없음', detail: `참조는 있는데 파일이 없다: ${fsRef[1]}` });

  /* B 근거 없는 빈도 */
  const texts = quotedTexts(src);
  /* 같은 "경우가 많다"도 무게가 다르다.
     "탈락하는 경우가 많다"는 제도 판정을 예측하는 말이라 근거가 필요하고,
     "자녀가 대신 접수하는 경우가 많다"는 상황 묘사라 근거가 필요 없다.
     둘을 한 덩어리로 세면 진짜 위험이 묻힌다 (2026-08-08 1차 실행에서 22건이 섞여 있었다). */
  const VERDICT = ['탈락', '지급', '보상', '승인', '거절', '심사', '제외', '해당', '수급', '환급', '감액', '깎', '받으실 수', '못 받'];
  const b1 = new Set<string>();
  const b2 = new Set<string>();
  for (const t of texts) {
    for (const w of FREQ) {
      let i = t.indexOf(w);
      while (i >= 0) {
        const around = t.slice(Math.max(0, i - 45), i + 45);
        if (!EMPATHY.some((e) => around.includes(e))) {
          const snip = around.replace(/\s+/g, ' ').trim();
          if (VERDICT.some((v) => around.includes(v))) b1.add(snip);
          else b2.add(snip);
        }
        i = t.indexOf(w, i + 1);
      }
    }
  }
  for (const h of b1) findings.push({ axis: 'B1 판정에빈도', detail: h });
  for (const h of b2) findings.push({ axis: 'B2 상황묘사(참고)', detail: h });

  /* C 타이틀 코드 */
  for (const c of CODE_IN_TITLE) if (c.re.test(title)) findings.push({ axis: 'C 타이틀코드', detail: `${c.why} — ${title}` });

  /* D 출처가 기관 루트 */
  const roots: string[] = [];
  for (const m of src.matchAll(/url:\s*'(https?:\/\/[^']+)'/g)) {
    const u = m[1];
    if (/^https?:\/\/[^/]+\/?$/.test(u)) roots.push(u);
  }
  for (const u of [...new Set(roots)]) findings.push({ axis: 'D 출처가루트', detail: `${u} — 1:1 대조 불가` });

  /* E 단정 / F 추측 */
  for (const t of texts) {
    for (const w of ABSOLUTE) if (t.includes(w)) findings.push({ axis: 'E 단정표현', detail: `"${w}" — ${t.slice(0, 60)}` });
    for (const g of GUESS_RE) {
      g.re.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = g.re.exec(t)) !== null) {
        findings.push({ axis: 'F 추측표현', detail: `${g.label} — ${t.slice(Math.max(0, m.index - 30), m.index + 45)}` });
      }
    }
  }

  /* G 버튼 슬롯 — act 는 qa 3번째·5번째·마지막에만 보인다 */
  const qaCount = (src.match(/^\s{4}q:\s*'/gm) || []).length;
  const actIdx: number[] = [];
  {
    let idx = -1;
    let pos = 0;
    for (;;) {
      const nq = src.indexOf('\n      q: ', pos);
      const na = src.indexOf('\n      act: ', pos);
      if (nq < 0 && na < 0) break;
      if (nq >= 0 && (na < 0 || nq < na)) { idx++; pos = nq + 5; }
      else { actIdx.push(idx); pos = na + 5; }
    }
  }
  if (qaCount >= 7) {
    const ok = new Set([2, 4, qaCount - 1]);
    for (const a of actIdx) if (!ok.has(a)) findings.push({ axis: 'G 버튼슬롯', detail: `qa[${a}] 의 버튼은 화면에 안 보인다 (보이는 자리: 3·5·마지막)` });
  }

  /* H 수치는 많은데 출처가 빈약 */
  const nums = (src.match(/\d[\d,]{2,}원|\d+(\.\d+)?%/g) || []).length;
  const srcCount = (src.match(/\{\s*name:\s*'/g) || []).length;
  if (nums >= 8 && srcCount < 3) findings.push({ axis: 'H 출처빈약', detail: `수치 ${nums}개인데 출처 ${srcCount}개` });

  report.push({ file: f, title, findings });
}

/* ── 출력 ───────────────────────────────────────────────────── */
console.log('============================================================');
console.log(` 기존 글 재검사 — 새 기준으로 과거 글을 다시 잰다 (${targets.length}개)`);
console.log('============================================================\n');

const axisCount: Record<string, number> = {};
let dirty = 0;
for (const r of report.sort((a, b) => b.findings.length - a.findings.length)) {
  if (!r.findings.length) continue;
  dirty++;
  console.log(`❌ ${r.file.split('/').slice(-2).join('/')}`);
  console.log(`   ${r.title}`);
  for (const fd of r.findings) {
    axisCount[fd.axis] = (axisCount[fd.axis] || 0) + 1;
    console.log(`   [${fd.axis}] ${fd.detail.slice(0, 140)}`);
  }
  console.log('');
}

console.log('------------------------------------------------------------');
console.log(` 문제 있는 글 ${dirty}개 / 검사 ${targets.length}개`);
for (const [k, v] of Object.entries(axisCount).sort((a, b) => b[1] - a[1])) console.log(`   ${k}: ${v}건`);
console.log('------------------------------------------------------------');
console.log(' 이 도구는 차단하지 않는다. 고칠 목록을 만드는 용도다.');
