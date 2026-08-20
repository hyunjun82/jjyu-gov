/**
 * 버튼 문구 도배 검사 — 한 정책 안에서 같은 틀이 반복되면 push 를 막는다.
 *
 * 왜 생겼나 (2026-08-20)
 *   실손 62편을 세 번 연속으로 찍어냈다.
 *     1차  cue 129개 중 124개가 "내 증권이 몇 세대인지" · 같은 꼬리 19회
 *     2차  heroAct 62개가 전부 "~ 보기" (읽는 버튼, 누를 이유가 없다)
 *     3차  고친다며 넣은 것이 61개가 "내 ~", 24개가 "…되는지 확인하기"
 *   셋 다 사람이 라이브에서 발견했다. 기존 게이트는 한 페이지 안의 중복만 보고
 *   배치 전체에 같은 틀이 깔리는 것은 보지 못한다. 그 구멍을 메운다.
 *
 * 사용
 *   npx tsx scripts/check-button-variety.ts            # 변경된 정책 폴더
 *   npx tsx scripts/check-button-variety.ts 실손보험     # 특정 폴더
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = path.join('app', 'policy', '[id]', '[spoke]', 'content');

/** 읽기만 시키는 꼬리 — 행동이 아니다 */
const READ_ONLY = /(보기|살펴보기|알아보기|읽어보기)$/;

type Label = { file: string; text: string; kind: 'heroAct' | 'cue' };

function collect(dir: string): Label[] {
  const out: Label[] = [];
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.tsx'))) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    const hero = src.match(/heroAct: \{ label: '([^']*)'/);
    if (hero) out.push({ file: f, text: hero[1], kind: 'heroAct' });
    for (const m of src.matchAll(/cue:\s*\n?\s*'([^']*)'/g))
      out.push({ file: f, text: m[1], kind: 'cue' });
  }
  return out;
}

/** 문장의 "틀" — 끝 어절 하나. 여기가 겹치면 같은 결로 읽힌다. */
const frameOf = (s: string) => s.trim().split(/\s+/).slice(-1)[0];
/** 시작 어절 — "내 ~" 도배를 잡는다 */
const headOf = (s: string) => s.trim().split(/\s+/)[0];

function ratio(n: number, total: number) {
  return total ? Math.round((n / total) * 100) : 0;
}

function checkGroup(name: string, labels: Label[], limits: {
  frame: number; head: number; readOnly: number;
}): string[] {
  const bad: string[] = [];
  const total = labels.length;
  if (total < 5) return bad; // 표본이 작으면 판단하지 않는다

  const tally = (fn: (s: string) => string) => {
    const c = new Map<string, number>();
    for (const l of labels) c.set(fn(l.text), (c.get(fn(l.text)) ?? 0) + 1);
    return [...c.entries()].sort((a, b) => b[1] - a[1]);
  };

  const [topFrame, topFrameN] = tally(frameOf)[0];
  if (ratio(topFrameN, total) > limits.frame)
    bad.push(
      `${name} — 끝 어절 "${topFrame}" 이 ${topFrameN}/${total}개 (${ratio(topFrameN, total)}%). ` +
        `상한 ${limits.frame}%. 같은 틀을 돌려쓰고 있다.`,
    );

  const [topHead, topHeadN] = tally(headOf)[0];
  if (ratio(topHeadN, total) > limits.head)
    bad.push(
      `${name} — 첫 어절 "${topHead}" 이 ${topHeadN}/${total}개 (${ratio(topHeadN, total)}%). ` +
        `상한 ${limits.head}%. 문장을 같은 말로 열고 있다.`,
    );

  if (limits.readOnly >= 0) {
    const ro = labels.filter((l) => READ_ONLY.test(l.text));
    if (ratio(ro.length, total) > limits.readOnly)
      bad.push(
        `${name} — 읽는 버튼("~보기")이 ${ro.length}/${total}개 (${ratio(ro.length, total)}%). ` +
          `상한 ${limits.readOnly}%. 버튼은 행동을 시켜야 한다.\n` +
          ro.slice(0, 6).map((l) => `        · ${l.file}: ${l.text}`).join('\n'),
      );
  }

  // 완전히 같은 문장
  const dup = tally((s) => s).filter(([, n]) => n > 1);
  for (const [text, n] of dup)
    bad.push(`${name} — 같은 문장이 ${n}번: "${text.slice(0, 50)}"`);

  return bad;
}

function changedDirs(): string[] {
  let out = '';
  try {
    out = execSync(`git diff --name-only origin/main...HEAD -- "${ROOT}"`, { encoding: 'utf8' });
  } catch {
    try { out = execSync(`git diff --name-only HEAD~1 -- "${ROOT}"`, { encoding: 'utf8' }); } catch {}
  }
  try { out += execSync(`git ls-files --others --exclude-standard -- "${ROOT}"`, { encoding: 'utf8' }); } catch {}
  const dirs = new Set<string>();
  for (const line of out.split('\n').map((s) => s.trim()).filter(Boolean)) {
    const parts = line.replace(/\\/g, '/').split('/');
    const i = parts.indexOf('content');
    if (i >= 0 && parts[i + 1]) dirs.add(parts[i + 1]);
  }
  return [...dirs];
}

const arg = process.argv[2];
const targets = arg ? [arg] : changedDirs();

console.log('='.repeat(60));
console.log(' 버튼 문구 도배 검사 — 같은 틀을 몇 번 돌려썼나');
console.log('='.repeat(60));

if (!targets.length) {
  console.log(' 변경된 정책 폴더 없음 — 생략');
  process.exit(0);
}

let fail = 0;
for (const t of targets) {
  const dir = path.join(ROOT, t);
  if (!fs.existsSync(dir)) continue;
  const labels = collect(dir);
  const hero = labels.filter((l) => l.kind === 'heroAct');
  const cues = labels.filter((l) => l.kind === 'cue');

  /* heroAct 는 화면에 나란히 뜨지 않으니 끝 어절은 조금 너그럽게,
     대신 읽는 버튼은 거의 허용하지 않는다.
     cue 는 문장이라 끝맺음이 겹치면 티가 크게 난다. */
  const problems = [
    ...checkGroup(`[${t}] 상단 버튼`, hero, { frame: 40, head: 40, readOnly: 10 }),
    ...checkGroup(`[${t}] cue`, cues, { frame: 25, head: 30, readOnly: -1 }),
  ];

  if (problems.length) {
    fail += problems.length;
    console.log('');
    for (const p of problems) console.log(` ❌ ${p}`);
  } else {
    console.log(` ✅ ${t} — 상단 버튼 ${hero.length}개 · cue ${cues.length}개, 틀 반복 없음`);
  }
}

console.log('');
if (fail) {
  console.log(` ${fail}건 — 문구를 서로 다른 결로 다시 쓴다.`);
  console.log(' 정본: docs/button-copy.md · 규칙: .claude/rules/action-copy.md');
  process.exit(1);
}
console.log(' 통과');
