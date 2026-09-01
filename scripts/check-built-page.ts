/**
 * check-built-page.ts — 빌드 결과물이 그 회사 글이 맞나 (2026-09-01 신설)
 *
 * 왜 (사장님 지적 — "표 오차없고?")
 *   표를 검사하다 딴 게 나왔다. 온라인 고객센터 12편이 통째로 깨져 있었다.
 *     · /policy/online-call-center/youtube/  를 열면 11번가 정보가 나왔다
 *     · 쿠팡·넷플릭스·배민 등 11편은 본문이 비어 있었다 (h1 조차 없다)
 *
 *   8/27 온라인 업종을 통신에서 떼어낼 때 registry.ts 에서 11번가 하나만 옮겨졌고
 *   나머지 11편이 'telecom-call-center' 아래 남았다.
 *   JSON 의 industry 는 online, 허브 배열도 online — registry 만 어긋나 있었다.
 *
 * 왜 기존 게이트가 못 잡았나
 *   check-callcenter 는 JSON ↔ 글 파일(.tsx) 을 본다. 그 둘은 멀쩡했다.
 *   "그 글이 어느 주소로 나가는가" 는 아무도 안 봤다.
 *   registry 는 주소를 정하는 자리인데 검사 대상이 아니었다.
 *
 * 그래서 여기서는 빌드 결과물(out/)을 본다. 사람이 실제로 받는 파일이다.
 *   ① 그 회사 페이지가 만들어졌나
 *   ② 그 페이지의 h1 에 그 회사 이름이 있나 (남의 회사가 나오면 잡는다)
 *   ③ 한눈에 보기 표가 있고, 그 안에 JSON 의 번호·상담시간이 그대로 있나
 *
 * out/ 이 없으면 (빌드 전이면) 검사를 건너뛴다 — 빌드를 강제하지는 않는다.
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();
const OUT = path.join(ROOT, 'out');
const CC_DIR = path.join(ROOT, 'data', 'call-centers');

console.log('='.repeat(60));
console.log(' 빌드 결과 검사 — 그 주소에 그 회사가 나오나');
console.log('='.repeat(60));

if (!fs.existsSync(OUT)) {
  console.log('\n out/ 이 없다 — 빌드 전이라 생략한다.');
  console.log(' 배포 전에는 next build 후 이 검사를 돌린다.\n');
  process.exit(0);
}
if (!fs.existsSync(CC_DIR)) {
  console.log('\n 고객센터 데이터가 없다 — 생략\n');
  process.exit(0);
}

const flat = (s: string) => String(s).replace(/\s+/g, '');
const strip = (s: string) => s.replace(/<[^>]+>/g, '|');

type Bad = { name: string; kind: string; detail: string };
const bad: Bad[] = [];
let checked = 0;

/* out/policy/{hub}/{slug}/index.html 을 찾는다 — 허브가 뭐든 slug 로 건진다 */
const policyDir = path.join(OUT, 'policy');
const hubs = fs.existsSync(policyDir)
  ? fs.readdirSync(policyDir).filter((d) => fs.statSync(path.join(policyDir, d)).isDirectory())
  : [];

for (const f of fs.readdirSync(CC_DIR).filter((x) => x.endsWith('.json'))) {
  const c = JSON.parse(fs.readFileSync(path.join(CC_DIR, f), 'utf8'));
  const found = hubs
    .map((h) => path.join(policyDir, h, c.slug, 'index.html'))
    .filter((p) => fs.existsSync(p));

  if (!found.length) {
    bad.push({ name: c.name, kind: '페이지가 안 만들어졌다', detail: c.slug });
    continue;
  }

  const html = fs.readFileSync(found[0], 'utf8');
  checked++;

  /* ② 남의 회사가 나오나 */
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h1 = m ? m[1].replace(/<[^>]+>/g, '').trim() : '';
  if (!h1) {
    bad.push({ name: c.name, kind: '본문이 비어 있다 (h1 없음)', detail: c.slug });
    continue;
  }
  if (!h1.includes(c.name)) {
    bad.push({ name: c.name, kind: '남의 회사가 나온다', detail: h1.slice(0, 40) });
    continue;
  }

  /* ③ 한눈에 보기 표 */
  const t = html.match(/<table[^>]*>[\s\S]*?<\/table>/);
  if (!t) {
    bad.push({ name: c.name, kind: '한눈에 보기 표가 없다', detail: c.slug });
    continue;
  }
  const tb = flat(strip(t[0]));

  if (!tb.includes(flat(c.main.tel))) {
    bad.push({ name: c.name, kind: '대표번호가 표에 없다', detail: c.main.tel });
  }
  for (const [k, v] of Object.entries((c.hours ?? {}) as Record<string, string>)) {
    if (v && !tb.includes(flat(v))) {
      bad.push({ name: c.name, kind: `hours.${k} 가 표에 없다`, detail: String(v).slice(0, 34) });
    }
  }
  for (const n of (c.numbers ?? []) as { label: string; tel: string }[]) {
    if (n.tel === c.main.tel) continue;
    if (!tb.includes(flat(n.tel))) {
      bad.push({ name: c.name, kind: '번호가 표에 없다', detail: `${n.label} ${n.tel}` });
    }
  }
}

console.log('');
if (bad.length) {
  for (const b of bad.slice(0, 20)) {
    console.log(`❌ ${b.name.padEnd(16)} ${b.kind.padEnd(24)} ${b.detail}`);
  }
  if (bad.length > 20) console.log(`   … 외 ${bad.length - 20}건`);
  console.log('');
  console.log(` 빌드 결과 ${checked}편 중 ${bad.length}건에 문제`);
  console.log('');
  console.log(' "남의 회사가 나온다" · "본문이 비어 있다" 는 대개 data/spokes/registry.ts 가');
  console.log(' 그 글을 엉뚱한 허브 아래 걸어 둔 것이다 (JSON 의 industry 와 대조해 본다).');
  process.exit(1);
}
console.log(` ✅ 통과 — 빌드 결과 ${checked}편, 주소·회사·표 값이 데이터와 맞는다`);
process.exit(0);
