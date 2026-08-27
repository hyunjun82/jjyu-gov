/**
 * check-sentence.ts — 생성기가 만든 문장이 깨졌나 (2026-08-27 신설)
 *
 * 왜 (사장님 지적 — "100개 작성 후 또 오차 있어서 진행하면 사용량 2~3배 시간도 2~3배야")
 *   오늘 난 오차는 세 종류였는데 둘은 게이트가 있었고 하나는 없었다.
 *     ① 원문에 없는 값을 JSON 에 씀      43건  → check-callcenter ⑦ 이 잡는다
 *     ② 업종 말 섞임                    302건  → check-callcenter ① 이 잡는다
 *     ③ 생성기가 만든 문장이 깨짐        68편  → 아무도 안 봤다. 사람 눈이 잡았다.
 *
 *   ③ 이 제일 비쌌다. 다 쓰고 나서 발견해 131편을 다시 찍는 데 40분이 들었다.
 *   1편에서 걸렸으면 1분이었다. 그래서 ③ 을 여기로 옮긴다.
 *
 * 오늘 실제로 나간 네 가지 꼴 — 이것만 본다
 *   A 빈칸    "한국케이블텔레콤 상담은  안에서만 됩니다"
 *             변수가 빈 문자열이 되면 공백 두 개가 남는다. 58편에 있었다.
 *   B 잘림    "상담은 09:00~18:00(주말, 공휴일  안에서만 됩니다"
 *             slice(0,20) 이 괄호 안에서 끊었다. 괄호 짝이 안 맞는다.
 *   C 조사    "유튜브은"·"딜라이브은"·"1544-7004과"
 *             josa() 를 안 거친 자리. 판정은 scripts/lib/josa.ts 하나로만 한다.
 *   D 라벨    "상담은 이용시간 평일 08:00 ~ 18:00 안에서만 됩니다"
 *             원문 라벨이 값에 붙어 온 것을 문장에 그대로 넣었다.
 *
 * 왜 이 네 개만인가
 *   전부 "사람이 읽으면 1초에 아는데 기계는 안 보던" 것이다.
 *   문장 품질 일반을 판정하려 들면 멀쩡한 글을 잡고, 그러면 사람이 게이트를 끈다.
 *
 * 소급 차단 안 한다
 *   이 게이트가 생긴 날 이전에 커밋된 글은 심판하지 않는다 (CLAUDE.md 규칙).
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { josa, type JosaPair } from './lib/josa';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();
const BORN = '2026-08-27';

/* 조사를 판정할 앞말 — 받침을 기계가 확실히 아는 말만.
   회사 이름(JSON 의 name·aliases)과 전화번호가 그것이다. */
const HEADS: string[] = (() => {
  const out = new Set<string>();
  const dir = path.join(ROOT, 'data', 'call-centers');
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.json'))) {
      const c = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
      [c.name, ...(c.aliases ?? [])].filter(Boolean).forEach((n: string) => out.add(n));
      [c.main?.tel, ...(c.numbers ?? []).map((n: { tel?: string }) => n.tel)]
        .filter(Boolean).forEach((t: string) => out.add(t));
    }
  }
  /* 긴 이름부터 봐야 "농협" 이 "NH농협손해보험" 을 가로채지 않는다 */
  return [...out].sort((a, b) => b.length - a.length);
})();

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/* 문장 안에서 뽑아 검사할 자리 — 생성기가 변수를 끼워 넣는 곳만 */
const FIELDS = ['cue', 'heroHook', 'intro', 'lead', 'summary', 'metaDescription', 'h1', 'note'];

type Hit = { file: string; kind: string; text: string };

const files: string[] = [];
const walk = (d: string) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.tsx')) files.push(p);
  }
};
/* 고객센터 글만 본다 — 핵심콕콕 템플릿에는 이 게이트를 대지 않는다 (2026-08-27 사장님 지적)
 *
 * 왜 나누나
 *   여기서 잡는 네 가지는 전부 new-call-center.ts 가 문장을 조립하다 낸 버그다.
 *   핵심콕콕 글은 사람이 쓰거나 new-spoke.ts 가 만든다 — 실패하는 자리가 다르다.
 *
 *   섞으면 멀쩡한 글을 잡는다. 조사 판정에 쓰는 회사 이름 144개가 4글자 이하인데
 *   그중에 "숲"(SOOP)·"대신"·"한양"·"신영" 처럼 보통 낱말이 있다.
 *   핵심콕콕 글의 "대신은"·"숲을" 이 회사 이름으로 읽혀 push 가 막힌다.
 *   게이트가 멀쩡한 걸 잡으면 사람이 게이트를 끈다 — 그게 제일 나쁘다.
 *
 * 생성기를 새로 만들면 그 폴더를 여기 한 줄 더한다.
 */
const DIRS = ['보험고객센터', '증권고객센터', '카드고객센터', '통신고객센터', '온라인고객센터', '대출고객센터'];
const CONTENT = path.join(ROOT, 'app', 'policy', '[id]', '[spoke]', 'content');
DIRS.map((d) => path.join(CONTENT, d)).filter((d) => fs.existsSync(d)).forEach(walk);

/* 이 게이트보다 오래된 글은 건드리지 않는다 */
const isOld = (f: string): boolean => {
  try {
    const first = execSync(`git log --diff-filter=A --format=%ad --date=short -1 -- "${f.replace(/\\/g, '/')}"`,
      { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    return !!first && first < BORN;
  } catch { return false; }
};

console.log('='.repeat(60));
console.log(' 문장 검사 — 변수가 빈칸이 되거나 조사가 틀어졌나');
console.log('='.repeat(60));

const hits: Hit[] = [];

for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8');
  const rel = path.relative(ROOT, f).replace(/\\/g, '/');
  if (isOld(f)) continue;

  /* 검사할 문자열만 뽑는다 — 코드가 아니라 사람이 읽는 문장 */
  const vals: string[] = [];
  for (const k of FIELDS) {
    const re = new RegExp(`\\b${k}:\\s*'((?:[^'\\\\]|\\\\.)*)'`, 'g');
    let m: RegExpExecArray | null;
    while ((m = re.exec(txt))) vals.push(m[1]);
  }

  for (const v of vals) {
    /* A 빈칸 — 한글·숫자 사이에 공백 두 개는 변수가 비었다는 뜻이다.
       들여쓰기가 아니라 문장 한가운데만 본다. */
    if (/[가-힣0-9)][ ]{2,}[가-힣]/.test(v)) hits.push({ file: rel, kind: 'A 빈칸', text: v });

    /* B 잘림 — 괄호가 열리고 안 닫혔다 */
    const open = (v.match(/[(（[]/g) ?? []).length;
    const close = (v.match(/[)）\]]/g) ?? []).length;
    if (open > close) hits.push({ file: rel, kind: 'B 괄호 안 닫힘', text: v });

    /* C 조사 — 회사 이름과 전화번호 뒤만 본다.
       처음엔 모든 말 뒤의 조사를 봤더니 "있는"·"없는" 을 조사로 오판했다.
       그건 조사가 아니라 관형형 어미다 (있 + 는). 멀쩡한 글 35편을 잡았다.
       게이트가 멀쩡한 걸 잡으면 사람이 게이트를 끈다 — 그게 제일 나쁘다.

       그래서 "받침을 기계가 확실히 아는 말" 뒤로만 좁힌다.
       실제로 사고가 난 자리도 정확히 여기였다: "유튜브은", "1544-7004과". */
    for (const head of HEADS) {
      const re = new RegExp(`${escapeRe(head)}(은|는|이|가|을|를|와|과|으로|로)(?=[\\s.,!?)]|$)`, 'g');
      let m: RegExpExecArray | null;
      while ((m = re.exec(v))) {
        const used = m[1];
        const pair = ({ 은: '은', 는: '은', 이: '이', 가: '이', 을: '을', 를: '을', 와: '과', 과: '과', 으로: '으로', 로: '으로' } as const)[used as '은'] as JosaPair;
        const want = josa(head, pair);
        if (want !== used) {
          hits.push({ file: rel, kind: `C 조사 "${head}${used}" → "${head}${want}"`, text: v });
          break;
        }
      }
    }

    /* D 라벨 — 원문 라벨이 값에 붙은 채 문장에 들어갔다 */
    if (/(상담은|시간은) (이용시간|운영시간|상담시간|콜센터|고객센터) /.test(v)) {
      hits.push({ file: rel, kind: 'D 원문 라벨이 문장에 남음', text: v });
    }
  }
}

console.log('');
if (hits.length) {
  const byFile = new Map<string, Hit[]>();
  hits.forEach((h) => byFile.set(h.file, [...(byFile.get(h.file) ?? []), h]));
  for (const [f, hs] of byFile) {
    console.log(`❌ ${f}`);
    hs.slice(0, 4).forEach((h) => console.log(`     · ${h.kind}\n       "${h.text.slice(0, 78)}"`));
    if (hs.length > 4) console.log(`     · 외 ${hs.length - 4}건`);
  }
  console.log('');
  console.log(` ${byFile.size}편에 깨진 문장 ${hits.length}건`);
  console.log('');
  console.log(' 대부분은 생성기의 문장 조립을 고치고 다시 찍으면 된다.');
  console.log(' 조사는 scripts/lib/josa.ts 의 josa() 를 거치게 한다 — 손으로 적지 않는다.');
  process.exit(1);
}
console.log(` ✅ 통과 — ${files.length}편, 빈칸·잘림·조사 오류 없음`);
process.exit(0);
