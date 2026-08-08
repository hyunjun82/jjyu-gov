/**
 * draft-scaffold.ts — 게이트를 통과하는 문구 초안을 "처음부터" 만들어주는 도구
 *
 * 왜 만들었나 (2026-08-07):
 *   게이트(check-cue-value)는 통과/차단만 하고 어떻게 고칠지는 알려주지 않는다.
 *   그래서 글 하나에 3~5번씩 되돌아가 다시 쓰는 일이 반복됐다. 사장님 표현으로 "손 많이 간다".
 *   차단 규칙을 "작성 규칙"으로 뒤집어, 규칙을 만족하는 뼈대를 먼저 뽑는다.
 *
 * 무엇을 자동으로 맞추나:
 *   L축 버튼 동사 도배 — 버튼 3개의 동사를 서로 다른 계열에서 뽑는다
 *   M축 읽는 버튼      — 최소 하나는 신청·접수·발급 계열로 강제
 *   P축 문구-버튼 불일치 — 버튼 동사에 대응하는 낱말을 cue 마지막 문장에 심는다
 *   N축 맺음 도배      — 이미 사이트에서 쓴 맺음 표현을 피해서 고른다
 *   K축 비문           — 지적받아 등록된 표현을 회피
 *   J축 버튼 길이·기관명 — 16자 이내, 기관명 금지
 *
 * 무엇을 사람이 채우나 (자동 생성하지 않는다):
 *   heroHook 본문과 각 카드의 설명 문장 — 주제를 모르는 템플릿 문장을 뿌리면 그게 도배다.
 *   이 도구는 "구조와 마지막 유도 문장, 버튼"만 맞춰준다.
 *
 * 사용:
 *   npx tsx scripts/draft-scaffold.ts spec.json          # 초안 md 출력
 *   npx tsx scripts/draft-scaffold.ts spec.json --check   # 만들고 바로 게이트 검사
 *
 * spec.json 예:
 * {
 *   "hero": "…공감·문제·해결까지 쓴 문단(사람이 작성)…",
 *   "cards": [
 *     { "body": "…카드 설명(사람이 작성)…", "what": "보청기 급여 대상", "kind": "조회", "url": "https://…" },
 *     { "body": "…", "what": "보조기기 급여",   "kind": "신청", "url": "https://…" },
 *     { "body": "…", "what": "경감 인정 서류",  "kind": "챙기기", "url": "https://…" }
 *   ]
 * }
 */
import fs from 'fs';
import path from 'path';

/* 버튼 동사 계열 — 서로 다른 계열에서 뽑아야 L축(동사 도배)에 안 걸린다.
   cueWord: 그 버튼 앞 문장에 반드시 들어가야 하는 낱말(P축 ACT_MAP과 짝) */
const KINDS: Record<string, { suffix: string; cueWord: string; isAction: boolean }> = {
  신청:   { suffix: '신청하기',   cueWord: '신청',   isAction: true },
  접수:   { suffix: '접수하기',   cueWord: '접수',   isAction: true },
  발급:   { suffix: '발급받기',   cueWord: '발급',   isAction: true },
  조회:   { suffix: '조회하기',   cueWord: '조회',   isAction: false },
  계산:   { suffix: '계산해보기', cueWord: '계산',   isAction: false },
  비교:   { suffix: '비교하기',   cueWord: '비교',   isAction: false },
  찾기:   { suffix: '찾아보기',   cueWord: '찾',     isAction: false },
  챙기기: { suffix: '챙기기',     cueWord: '서류',   isAction: false },
  내려받기: { suffix: '내려받기', cueWord: '양식',   isAction: false },
};

/* 이미 사이트에서 쓴 맺음 표현을 모아 피한다 (N축 맺음 도배) */
function usedEndings(): Set<string> {
  const dirs = ['data/policies', 'app/policy/[id]/[spoke]/content'];
  const found = new Set<string>();
  const walk = (d: string) => {
    if (!fs.existsSync(d)) return;
    for (const f of fs.readdirSync(d)) {
      const p = path.join(d, f);
      const st = fs.statSync(p);
      if (st.isDirectory()) walk(p);
      else if (/\.tsx?$/.test(f)) {
        const src = fs.readFileSync(p, 'utf8');
        for (const m of src.matchAll(/cue:\s*'([^']+)'/g)) {
          const tail = m[1].trim().split(/[.!?]\s*/).pop() ?? '';
          const e = tail.slice(-9);
          if (e) found.add(e);
        }
      }
    }
  };
  dirs.forEach(walk);
  return found;
}

/* 유도 문장 후보 — 앞에서 쓴 것과 겹치지 않는 것을 고른다 */
const CLOSERS = [
  (w: string, v: string) => `그럼 ${w}부터 ${v}보시면 됩니다.`,
  (w: string, v: string) => `${w}부터 ${v}보세요.`,
  (w: string, v: string) => `지금 ${w}을 ${v}두시면 나중에 두 번 걸음 하지 않습니다.`,
  (w: string, v: string) => `미루면 그만큼 늦어지니 ${w}부터 ${v}두세요.`,
  (w: string, v: string) => `${w}은 오늘 ${v}두시는 편이 낫습니다.`,
];

function build(spec: any): string {
  const used = usedEndings();
  const kinds: string[] = spec.cards.map((c: any) => c.kind);
  if (new Set(kinds).size < kinds.length) {
    console.error('⚠ 버튼 kind 가 겹칩니다 — 서로 다른 계열로 바꾸세요:', kinds.join(', '));
  }
  if (!kinds.some((k) => KINDS[k]?.isAction)) {
    console.error('⚠ 신청·접수·발급 계열 버튼이 하나도 없습니다 (M축 차단 대상)');
  }

  const out: string[] = [spec.hero.trim()];
  spec.cards.forEach((c: any, i: number) => {
    const k = KINDS[c.kind];
    if (!k) throw new Error(`알 수 없는 kind: ${c.kind} (가능: ${Object.keys(KINDS).join(', ')})`);
    const label = `${c.what} ${k.suffix}`.trim();
    if (label.replace(/\s/g, '').length > 16) {
      console.error(`⚠ 버튼 라벨이 16자를 넘습니다: "${label}" — what 을 줄이세요`);
    }
    /* 카드 설명 + 그 버튼에 맞는 유도 문장(P축 낱말 포함, N축 중복 회피) */
    let closer = '';
    for (const make of CLOSERS) {
      const cand = make(c.what, k.cueWord === '서류' ? '챙겨' : k.cueWord);
      const tail = cand.slice(-9);
      if (![...used].some((u) => u === tail)) { closer = cand; used.add(tail); break; }
    }
    if (!closer) closer = CLOSERS[i % CLOSERS.length](c.what, k.cueWord);
    out.push('');
    out.push(`${c.body.trim()} ${closer}`);
    out.push('');
    out.push(`[${label}]`);
  });
  return out.join('\n') + '\n';
}

const file = process.argv[2];
if (!file) {
  console.log('사용: npx tsx scripts/draft-scaffold.ts spec.json [--check]');
  process.exit(0);
}
const spec = JSON.parse(fs.readFileSync(file, 'utf8'));
const md = build(spec);
const outPath = file.replace(/\.json$/, '.md');
fs.writeFileSync(outPath, md, 'utf8');
console.log(md);
console.log(`\n→ 저장: ${outPath}`);
if (process.argv.includes('--check')) {
  const { execSync } = require('child_process');
  try {
    console.log(execSync(`npx tsx scripts/check-cue-value.ts --draft ${outPath}`, { encoding: 'utf8' }));
  } catch (e: any) {
    console.log(e.stdout || e.message);
    process.exit(1);
  }
}
