/* RPM 존 감사 — 기존 콘텐츠를 광고 단가 기준으로 자동 분류하는 시스템 (2026-08-05)
 *
 * 원리: 광고주는 주제가 아니라 "독자의 다음 행동"에 입찰한다.
 *   실증: 판시딜(의약) 클릭 1회 2만원대 / 삼성금융 글 일 $22 — 의료·금융 결정 직전 트래픽.
 *
 * 채점: 각 허브의 타이틀+본문에서 고입찰 intent 마커를 찾아 티어를 매긴다.
 *   T1 (최고단가): 보험 가입/비교, 대환·갈아타기, 회생·파산·채무조정, 임플란트·치과, 실손 청구, 상속·법률
 *   T2 (고단가):   대출 조건·금리, 세금 절세·환급, 자동차, 이사, 통신
 *   T3 (유입엔진): 수급·신청·지원금 — 트래픽은 크지만 민간 광고주 없음
 *
 * 출력: ① 수익존(T1·T2) 페이지 목록 ② 각 유입엔진(T3) 페이지가 수익존으로 링크하는지(배선 상태)
 * 사용: npx tsx scripts/rpm-audit.ts
 *
 * 이 스크립트는 후보를 고르는 도구다. 확정은 애드센스 페이지별 RPM 실측으로 한다 — 추측으로 끝내지 않는다.
 */
import fs from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'data', 'policies');

const T1: [RegExp, string][] = [
  [/치아보험|보험\s*가입|보험\s*비교|보장\s*분석/, '보험가입'],
  [/대환|갈아타|차환/, '대환대출'],
  [/회생|파산|채무조정|빚|연체.*(해결|정리)/, '채무·법률'],
  [/임플란트|틀니|치과/, '치과'],
  [/실손|실비.*(청구|중복|보상)/, '실손청구'],
  [/상속|증여|양도소득|종부세|절세/, '자산세금'],
];
const T2: [RegExp, string][] = [
  [/대출.*(금리|한도|조건)|전세자금|주택담보/, '대출'],
  [/환급|공제|연말정산|세액/, '세금환급'],
  [/자동차|중고차/, '자동차'],
  [/보험료|건강보험료|국민연금.*(납부|추납)/, '보험료'],
];

type Row = { slug: string; title: string; tier: string; tags: string[]; outLinks: string[] };

const rows: Row[] = [];
const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.ts') && !['manifest.ts', 'index.ts'].includes(f));

for (const f of files) {
  const c = fs.readFileSync(path.join(DIR, f), 'utf8');
  const title = (c.match(/^\s*title:\s*'([^']+)'/m) || [])[1] || f;
  const slug = f.replace(/\.ts$/, '');
  const tags = new Set<string>();
  let tier = 'T3';
  /* intent는 타이틀에 있어야 그 페이지의 '다음 행동'이다 — 본문 스침은 배선 후보일 뿐 (v2에서 조임) */
  for (const [re, tag] of T2) if (re.test(title)) { tier = 'T2'; tags.add(tag); }
  for (const [re, tag] of T1) if (re.test(title)) { tier = 'T1'; tags.add(tag); }
  // 이 글이 내부로 보내는 링크 (act url + related)
  const outLinks = [...c.matchAll(/url:\s*'\/(policy|calc)\/([^'#/]+)/g)].map((m) => m[2]);
  rows.push({ slug, title: title.slice(0, 46), tier, tags: [...tags], outLinks });
}

const t1 = rows.filter((r) => r.tier === 'T1');
const t2 = rows.filter((r) => r.tier === 'T2');
const t3 = rows.filter((r) => r.tier === 'T3');
const moneySlugs = new Set([...t1, ...t2].map((r) => r.slug));

console.log(`\n══ 수익존 T1 (최고단가) — ${t1.length}개 ══`);
t1.forEach((r) => console.log(`  [${r.tags.join(',')}] ${r.slug} — ${r.title}`));
console.log(`\n══ 수익존 T2 (고단가) — ${t2.length}개 ══`);
t2.forEach((r) => console.log(`  [${r.tags.join(',')}] ${r.slug} — ${r.title}`));

// 배선 감사: T3 유입 페이지 중 수익존으로 가는 링크가 하나도 없는 글
const unwired = t3.filter((r) => !r.outLinks.some((l) => moneySlugs.has(l)));
console.log(`\n══ 유입엔진 T3 — ${t3.length}개 중 수익존 링크 0개: ${unwired.length}개 ══`);
console.log('  (이 페이지들의 뷰는 저단가에서 소멸 — 재배선 대상)');
unwired.slice(0, 25).forEach((r) => console.log(`  ${r.slug} — ${r.title}`));
if (unwired.length > 25) console.log(`  … 외 ${unwired.length - 25}개`);

console.log(`\n요약: T1 ${t1.length} / T2 ${t2.length} / T3 ${t3.length} (수익존 미배선 ${unwired.length})`);
console.log('다음: ① 애드센스 페이지별 RPM으로 T1 실측 검증 ② 미배선 T3에 수익존 버튼·related 추가');
