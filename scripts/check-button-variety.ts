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

/* 사장님이 지적한 어색한 버튼·cue 표현 (2026-09-21, 세금 22편).
   "갈래 잡기 이런 표현을 쓰냐", "뭘 따져", "뽑아두기가 뭐냐" — 한 편씩 짚어 가며 고치느라
   손이 많이 갔다. 사람이 버튼은 평범한 말(확인하기·신청하기·납부하기·이동)로 쓴다.
   새로 지적받으면 여기에 추가한다 — 이 목록이 늘어나는 게 시스템이 배우는 방식이다. */
const AWKWARD: { re: RegExp; say: string; labelOnly?: boolean }[] = [
  { re: /따지기|따져/, say: '따지기 → 확인하기' },
  { re: /짚기|짚어|짚으/, say: '짚기 → 확인하기' },
  { re: /펴기|펴보기|펼쳐보기|들춰/, say: '조문 펴기 → 무엇을 얻는지로 (예: 사유부터 확인하기)' },
  { re: /훑기|훑어/, say: '훑기 → 보기·확인하기' },
  { re: /견주/, say: '견주기 → 비교하기' },
  { re: /뽑아두/, say: '뽑아두기 → 확인하기·출력하기' },
  { re: /되짚|다시 밟/, say: '되짚기·다시 밟기 → 신고하러 가기 등 행동으로' },
  { re: /갈래/, say: '갈래 → 가지' },
  { re: /가려내/, say: '가려내기 → 확인하기' },
  { re: /요건 맞추|한 줄씩 맞추/, say: '맞추기 → 확인하기' },
  { re: /대조하기/, say: '대조하기 → 확인하기' },
  { re: /살피기/, say: '살피기 → 확인하기' },
  { re: /넘어가기|이어가기|마저 끝내/, say: '넘어가기·이어가기 → 납부하기·신고하기' },
  { re: /누리집/, say: '누리집 → 홈페이지', labelOnly: true },
  { re: /조문/, say: '버튼에 "조문"을 쓰지 않는다 — 누르면 얻는 것을 쓴다', labelOnly: true },
];

type Label = { file: string; text: string; kind: 'heroAct' | 'cue' | 'heroHook' };

function collect(dir: string): Label[] {
  const out: Label[] = [];
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.tsx'))) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    const hero = src.match(/heroAct: \{ label: '([^']*)'/);
    if (hero) out.push({ file: f, text: hero[1], kind: 'heroAct' });
    for (const m of src.matchAll(/cue:\s*\n?\s*'([^']*)'/g))
      out.push({ file: f, text: m[1], kind: 'cue' });
    /* 서론도 본다 (2026-09-01 사장님 지적)
       고객센터 227편의 서론 끝 문장이 하나였다 —
       "…버튼을 누르면 바로 전화가 연결되고, {상담원} 연결 순서·부가 번호·
       고객센터 위치도 함께 확인할 수 있습니다." 업종별 단어 하나만 갈렸다.
       이 게이트가 버튼(cue·heroAct)만 보고 있어서 못 봤다.
       서론은 길어서 끝 어절만으로는 안 갈린다 — 마지막 문장을 통째로 본다. */
    const hook = src.match(/heroHook:\s*'([^']*)'/);
    if (hook) {
      const sents = hook[1].split('. ').map((x) => x.trim()).filter(Boolean);
      const last = sents[sents.length - 1] ?? '';
      if (last) out.push({ file: f, text: last, kind: 'heroHook' });
    }
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

/** 문제 하나 = 메시지 + 그 문제에 기여한 파일들. 기여 파일을 알아야 "이번 push 탓인가"를 가릴 수 있다 (2026-09-19) */
type Problem = { msg: string; files: string[] };

function checkGroup(name: string, labels: Label[], limits: {
  frame: number; head: number; readOnly: number;
}): Problem[] {
  const bad: Problem[] = [];
  const total = labels.length;
  if (total < 5) return bad; // 표본이 작으면 판단하지 않는다

  const tally = (fn: (s: string) => string) => {
    const c = new Map<string, number>();
    for (const l of labels) c.set(fn(l.text), (c.get(fn(l.text)) ?? 0) + 1);
    return [...c.entries()].sort((a, b) => b[1] - a[1]);
  };
  const filesWhere = (fn: (s: string) => boolean) => labels.filter((l) => fn(l.text)).map((l) => l.file);

  const [topFrame, topFrameN] = tally(frameOf)[0];
  if (ratio(topFrameN, total) > limits.frame)
    bad.push({
      msg: `${name} — 끝 어절 "${topFrame}" 이 ${topFrameN}/${total}개 (${ratio(topFrameN, total)}%). ` +
        `상한 ${limits.frame}%. 같은 틀을 돌려쓰고 있다.`,
      files: filesWhere((s) => frameOf(s) === topFrame),
    });

  const [topHead, topHeadN] = tally(headOf)[0];
  if (ratio(topHeadN, total) > limits.head)
    bad.push({
      msg: `${name} — 첫 어절 "${topHead}" 이 ${topHeadN}/${total}개 (${ratio(topHeadN, total)}%). ` +
        `상한 ${limits.head}%. 문장을 같은 말로 열고 있다.`,
      files: filesWhere((s) => headOf(s) === topHead),
    });

  if (limits.readOnly >= 0) {
    const ro = labels.filter((l) => READ_ONLY.test(l.text));
    if (ratio(ro.length, total) > limits.readOnly)
      bad.push({
        msg: `${name} — 읽는 버튼("~보기")이 ${ro.length}/${total}개 (${ratio(ro.length, total)}%). ` +
          `상한 ${limits.readOnly}%. 버튼은 행동을 시켜야 한다.\n` +
          ro.slice(0, 6).map((l) => `        · ${l.file}: ${l.text}`).join('\n'),
        files: ro.map((l) => l.file),
      });
  }

  // 완전히 같은 문장
  const dup = tally((s) => s).filter(([, n]) => n > 1);
  for (const [text, n] of dup)
    bad.push({ msg: `${name} — 같은 문장이 ${n}번: "${text.slice(0, 50)}"`, files: filesWhere((s) => s === text) });

  return bad;
}

/** 이번 push 가 건드린 글 — "폴더/파일.tsx" 꼴 */
function changedFiles(): Set<string> {
  let out = '';
  try {
    out = execSync(`git diff --name-only origin/main...HEAD -- "${ROOT}"`, { encoding: 'utf8' });
  } catch {
    try { out = execSync(`git diff --name-only HEAD~1 -- "${ROOT}"`, { encoding: 'utf8' }); } catch {}
  }
  try { out += execSync(`git ls-files --others --exclude-standard -- "${ROOT}"`, { encoding: 'utf8' }); } catch {}
  const files = new Set<string>();
  for (const line of out.split('\n').map((s) => s.trim()).filter(Boolean)) {
    const parts = line.replace(/\\/g, '/').split('/');
    const i = parts.indexOf('content');
    if (i >= 0 && parts[i + 1] && parts[i + 2]) files.add(`${parts[i + 1]}/${parts[i + 2]}`);
  }
  return files;
}
const changed = changedFiles();
const changedDirs = () => [...new Set([...changed].map((f) => f.split('/')[0]))];

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

  /* 어색한 표현 — 버튼 라벨(상단·본문 act)과 cue 를 한 줄씩 본다 */
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.tsx'))) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    const texts: { text: string; isLabel: boolean }[] = [
      ...[...src.matchAll(/label:\s*'([^']*)'/g)].map((m) => ({ text: m[1], isLabel: true })),
      ...[...src.matchAll(/cue:\s*\n?\s*'([^']*)'/g)].map((m) => ({ text: m[1], isLabel: false })),
    ];
    for (const { text, isLabel } of texts)
      for (const a of AWKWARD)
        if ((isLabel || !a.labelOnly) && a.re.test(text))
          problems.push({ msg: `[${t}] 어색한 표현 — ${f}: "${text.slice(0, 40)}" (${a.say})`, files: [f] });
  }

  /* 소급 차단 금지 (2026-09-19): git 모드(인자 없음)에서는 이번 push 가 건드린 글이 그 문제에
     기여했을 때만 막는다. 옛 글끼리 만든 도배는 ⚠ 로 보여만 준다 — 새 글 한 편 붙였다고
     폴더의 옛 문제 3건이 push 를 세웠다(기초연금). 폴더 인자로 부르면(파이프라인) 전부 본다. */
  const mine = (p: Problem) => Boolean(arg) || p.files.some((f) => changed.has(`${t}/${f}`));
  const block = problems.filter(mine);
  const old = problems.filter((p) => !mine(p));
  if (problems.length) console.log('');
  for (const p of old) console.log(` ⚠ (옛 글끼리 — 이번 push 탓 아님) ${p.msg}`);
  if (block.length) {
    fail += block.length;
    for (const p of block) console.log(` ❌ ${p.msg}`);
  } else {
    console.log(` ✅ ${t} — 상단 버튼 ${hero.length}개 · cue ${cues.length}개${old.length ? ` (옛 글 경고 ${old.length}건은 막지 않는다)` : ', 틀 반복 없음'}`);
  }
}

console.log('');
if (fail) {
  console.log(` ${fail}건 — 문구를 서로 다른 결로 다시 쓴다.`);
  console.log(' 정본: docs/button-copy.md · 규칙: .claude/rules/action-copy.md');
  process.exit(1);
}
console.log(' 통과');
