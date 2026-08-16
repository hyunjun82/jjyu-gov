/**
 * check-duplicate.ts — 같은 내용을 두 번 쓰고 있지 않은가
 *
 * 왜 만들었나 (2026-08-01):
 *   "부모급여 언제까지" 스포크를 처음부터 끝까지 다 쓰고 나서야
 *   가정양육수당 허브에 같은 내용(24개월 종료 → 양육수당 월 10만원 전환)이
 *   이미 있다는 걸 발견해 통째로 폐기했다. 1,689개 페이지 규모에서
 *   사람이 기억으로 중복을 피하는 건 불가능하다.
 *
 * 검사 축
 *   A 제목 중복   h1/title 의 핵심 토큰이 겹치는 글이 다른 데 있나
 *   B 질문 중복   qa[].q 소제목이 다른 글과 상당수 겹치나 (같은 주제를 다시 쓴 신호)
 *
 * 판정 방식
 *   조사·숫자·흔한 단어를 걷어낸 뒤 남은 토큰의 자카드 유사도.
 *   허브↔허브, 스포크↔스포크, 허브↔스포크를 모두 교차로 본다.
 *
 * 사용
 *   npx tsx scripts/check-duplicate.ts          # 변경분이 기존 글과 겹치는지 — 차단
 *   npx tsx scripts/check-duplicate.ts --all    # 전수 현황 — 차단 안 함
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { partition, PROBE } from './lib/changed-files';

const HUB_ROOT = 'data/policies';
const SPOKE_ROOT = 'app/policy/[id]/[spoke]/content';

/* 제목이 이만큼 겹치면 같은 글로 본다. 0.6이면 핵심 단어 5개 중 3개가 같은 수준. */
const TITLE_HIT = 0.6;
/* 소제목 집합이 이만큼 겹치면 같은 주제를 다시 쓴 것으로 본다. */
const QA_HIT = 0.5;

const args = process.argv.slice(2);
const all = args.includes('--all');

/* 어느 글에나 나오는 말 — 유사도 계산에서 빼야 신호가 남는다 */
const STOP = new Set([
  '신청', '방법', '조건', '기준', '지원', '금액', '얼마', '어떻게', '되나', '하나', '있나',
  '받는', '받나', '언제', '어디서', '무엇', '누가', '경우', '이거', '그거', '대상', '안내',
  '정보', '확인', '가능', '여부', '차이', '비교', '중복', '이란', '인가', '인지', '한다',
  '됩니다', '입니다', '나요', '까요', '건가요', '수', '것', '때', '등', '및', '또는',
]);

function tokens(s: string): Set<string> {
  const cleaned = s
    .replace(/[0-9]+/g, ' ')
    .replace(/[^\p{L}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const out = new Set<string>();
  for (const w of cleaned.split(' ')) {
    if (w.length < 2) continue;
    if (STOP.has(w)) continue;
    out.add(w);
  }
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter += 1;
  return inter / (a.size + b.size - inter);
}

type Doc = { file: string; kind: '허브' | '스포크'; title: string; tt: Set<string>; qa: Set<string> };

function walk(dir: string, ext: string): string[] {
  const out: string[] = [];
  if (!fs.existsSync(dir)) return out;
  const rec = (d: string) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const q = path.join(d, e.name);
      if (e.isDirectory()) rec(q);
      else if (e.name.endsWith(ext)) out.push(q);
    }
  };
  rec(dir);
  return out;
}

function loadDoc(file: string): Doc | null {
  const src = fs.readFileSync(file, 'utf8');
  const norm = file.split(path.sep).join('/');
  const isHub = norm.startsWith(HUB_ROOT);
  const m =
    src.match(/^\s*h1:\s*'([^']+)'/m) ||
    src.match(/^\s*title:\s*'([^']+)'/m) ||
    src.match(/^\s*h1:\s*"([^"]+)"/m);
  if (!m) return null;
  const title = m[1];
  /* 소제목: 허브는 q:, 스포크도 q: — 본문 FAQ 까지 포함되지만 주제 신호로는 충분하다 */
  const qs = [...src.matchAll(/\bq(?:uestion)?:\s*'([^']{4,})'/g)].map((x) => x[1]);
  const qa = new Set<string>();
  for (const q of qs) for (const t of tokens(q)) qa.add(t);
  return {
    file: norm,
    kind: isHub ? '허브' : '스포크',
    title,
    tt: tokens(title),
    qa,
  };
}

const files = [
  ...walk(HUB_ROOT, '.ts').filter((f) => !f.endsWith('manifest.ts')),
  ...walk(SPOKE_ROOT, '.tsx'),
];
const docs = files.map(loadDoc).filter(Boolean) as Doc[];

/* 검사 대상: 전수면 전부, 아니면 이번에 바뀐 파일만 */
let changed: Set<string>;
if (all) {
  changed = new Set(docs.map((d) => d.file));
} else {
  let diff = '';
  try {
    diff = execSync(`git diff --name-only origin/main...HEAD`, { encoding: 'utf8' });
  } catch {
    try {
      diff = execSync(`git diff --name-only HEAD~1`, { encoding: 'utf8' });
    } catch {
      diff = '';
    }
  }
  /* 제목·소제목이 그대로인 파일은 중복 검사에서 뺀다.
     2026-08-08: 카테고리(catSlug) 한 줄만 바꾼 허브 41개가 검사 대상이 되면서,
     내용은 손대지도 않은 기존 글끼리의 중복 14건이 push 를 막았다.
     중복 검사는 "이번에 쓴 글이 기존 글과 겹치나"를 보는 것이지
     "예전 글끼리 겹치나"를 볼 자리가 아니다(그건 --all 로 따로 본다). */
  /* 판정은 scripts/lib/changed-files.ts 한 곳에 있다 — 게이트마다 복사했더니
     같은 병이 factsheet → duplicate → cue-value 순으로 재발했다 (2026-08-08). */
  const cand = diff
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => (l.endsWith('.ts') || l.endsWith('.tsx')) && fs.existsSync(l));
  const part = partition(cand, PROBE.title);
  if (part.skipped > 0) {
    console.log(` ℹ 제목·소제목이 그대로인 ${part.skipped}개는 중복 검사에서 제외 (전수 점검은 --all)\n`);
  }
  changed = new Set(part.kept);
}

type Pair = { a: Doc; b: Doc; titleSim: number; qaSim: number };
const pairs: Pair[] = [];
const seen = new Set<string>();

for (const a of docs) {
  if (!changed.has(a.file)) continue;
  for (const b of docs) {
    if (a.file === b.file) continue;
    const key = [a.file, b.file].sort().join('|');
    if (seen.has(key)) continue;
    /* 지역·도시명만 다른 같은 시리즈는 중복이 아니다.
       "워터밤 부산" vs "워터밤 속초"는 각각 다른 검색어를 받는 별개 글이다.
       2026-08-02: 지역 지원금(의왕시·울주군…)을 늘리면 이 오탐이 계속 나온다. */
    const REGION = /(서울|부산|대구|인천|광주|대전|울산|세종|경기|강원|충북|충남|전북|전남|경북|경남|제주|속초|의왕|울주|시흥|광진|관악|중구)/g;
    const aRegions = (a.title.match(REGION) || []).join();
    const bRegions = (b.title.match(REGION) || []).join();
    if (aRegions && bRegions && aRegions !== bRegions) continue;

    const titleSim = jaccard(a.tt, b.tt);
    const qaSim = jaccard(a.qa, b.qa);
    if (titleSim >= TITLE_HIT || qaSim >= QA_HIT) {
      seen.add(key);
      pairs.push({ a, b, titleSim, qaSim });
    }
  }
}

pairs.sort((x, y) => Math.max(y.titleSim, y.qaSim) - Math.max(x.titleSim, x.qaSim));

console.log('='.repeat(60));
console.log(' 중복 검사 — 같은 내용을 두 번 쓰고 있지 않은가');
console.log('='.repeat(60));

if (!pairs.length) {
  console.log(`\n검사 ${changed.size}개 / 문서 ${docs.length}개 / 겹침 0건`);
  console.log('\n ✅ 통과 — 이미 있는 글과 겹치지 않는다');
  process.exit(0);
}

const LIMIT = all ? 40 : pairs.length;
for (const p of pairs.slice(0, LIMIT)) {
  const tag = p.titleSim >= TITLE_HIT ? '제목 중복' : '질문 중복';
  console.log(`\n${all ? '⚠️ ' : '❌'} [${tag}] 제목 ${(p.titleSim * 100) | 0}% · 소제목 ${(p.qaSim * 100) | 0}%`);
  console.log(`   (${p.a.kind}) ${p.a.title}`);
  console.log(`        ${p.a.file}`);
  console.log(`   (${p.b.kind}) ${p.b.title}`);
  console.log(`        ${p.b.file}`);
}

console.log(`\n검사 ${changed.size}개 / 문서 ${docs.length}개 / 겹침 ${pairs.length}건`);

if (all) {
  console.log('\n(--all 은 현황 파악용 — 차단하지 않는다)');
  process.exit(0);
}

console.log('\n' + '='.repeat(60));
console.log(' 중복 의심 — push 차단');
console.log(' 같은 주제를 두 번 쓰면 둘 다 순위가 안 나온다.');
console.log(' 기존 글을 보강하거나, 이 글의 각도를 바꾼다(대상·시점·상황별로).');
console.log('='.repeat(60));
process.exit(1);
