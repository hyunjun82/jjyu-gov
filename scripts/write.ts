/**
 * write.ts — 키워드 하나로 글 한 편을 끝까지 끌고 가는 진행기
 *
 * 왜 (2026-08-13 사장님 지시 "3개 자동화하게 만들라고"):
 *   지금까지 만든 건 전부 "틀리면 막는" 장치였다(훅 3개 + push 게이트 12개).
 *   막기만 하니 나는 매번 본문부터 쓰고 막히고 끼워맞췄다 — 3주간 신규 글 165편에
 *   fix 커밋이 223건 붙었고 그중 116건(43%)이 문구·버튼이었다.
 *   필요한 건 검사기가 아니라 순서를 끌고 가는 진행기다.
 *
 * 4단계 — 이게 전부다:
 *   1  타이틀   reference/titles 캡처를 보고, 실검색어 조각으로 조립
 *   2  구성표   hero 서론 + 질문형 소제목 + 버튼 문구·목적지 → 사장님 승인
 *   3  사실     Playwright 로 1차 출처 열고 텍스트 + 화면 캡처로 대조
 *   4  마무리   오차·오해 소지 전수 검토 후 커밋
 *
 * 사용:
 *   npx tsx scripts/write.ts "확정일자"          # 시작 / 다음 할 일 보기
 *   npx tsx scripts/write.ts "확정일자" --status # 현재 상태만
 *
 * 이 스크립트는 판단하지 않는다. 어디까지 왔고 다음에 뭘 해야 하는지만 말한다.
 * 실제 차단은 훅(require-title-log.mjs)과 pre-push 가 한다.
 */
import { execSync } from 'child_process';
import { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();
const args = process.argv.slice(2);
const keyword = args.find((a) => !a.startsWith('--'));
const statusOnly = args.includes('--status');

if (!keyword) {
  console.log('사용: npx tsx scripts/write.ts "{키워드}"');
  process.exit(1);
}

const OUT = join(ROOT, 'scripts', 'output');
mkdirSync(OUT, { recursive: true });

/* ─────────── 상태 읽기 — 파일이 있으면 그 단계는 끝난 것이다 ─────────── */

const kwFile = () => {
  /* collect-keywords 결과는 "{키워드}.json" 으로 떨어진다 */
  if (!existsSync(OUT)) return '';
  const hit = readdirSync(OUT).find((f) => f.endsWith('.json') && f.includes(keyword));
  return hit ? join(OUT, hit) : '';
};

const CAPTURES = [
  ['대출 타이틀.png', '대출·전세·주택·금리'],
  ['보험타이틀.png', '보험·실손·연금보험·의료비'],
  ['생활타이틀.png', '생활·행정·발급·신고·송금'],
  ['세금 타이틀.png', '세금·연말정산·재산세·양도세'],
  ['연금 타이틀.png', '연금·퇴직·노후·수급'],
] as const;

const titleLog = existsSync(join(ROOT, 'docs/title-log.md'))
  ? readFileSync(join(ROOT, 'docs/title-log.md'), 'utf8')
  : '';

/* 이 키워드로 시작한 글들의 구성표 */
const outlines = existsSync(OUT)
  ? readdirSync(OUT).filter((f) => /^outline-.+\.md$/.test(f))
  : [];

const factsheet = existsSync(OUT)
  ? readdirSync(OUT).find((f) => f.startsWith('factsheet-') && f.includes(keyword))
  : undefined;

const hasKeywords = !!kwFile();
const hasFactsheet = !!factsheet;

/* ─────────── 출력 ─────────── */

const line = '─'.repeat(64);
console.log(`\n${line}\n 글 진행기 — "${keyword}"\n${line}`);

const step = (n: number, name: string, done: boolean, detail: string[]) => {
  console.log(`\n${done ? '✅' : '⬜'} ${n}단계 ${name}`);
  if (!done) detail.forEach((d) => console.log(`     ${d}`));
};

step(1, '타이틀 — 캡처 보고 실검색어로', hasKeywords, [
  '① 주제와 가까운 캡처를 Read 로 연다 (앞 글에서 연 건 안 쳐준다):',
  ...CAPTURES.map(([f, w]) => `     · reference/titles/${f}  — ${w}`),
  `② npx tsx scripts/collect-keywords.ts "${keyword}"`,
  '③ 후보 2~3개를 "어느 검색어 + 어느 KB 패턴"과 함께 채팅에 올린다',
  '④ docs/title-log.md 에 캡처·패턴·타이틀 3줄을 적는다',
]);

step(2, '구성표 — 소제목과 버튼 문구를 먼저', outlines.length > 0, [
  '① scripts/output/outline-{slug}.md 를 만든다:',
  '     ## hero (서론)   — 장면 한 줄 → 금액·반전 → 버튼으로 넘기는 한 줄',
  '     ## 소제목        — 질문형 3개 이상, 실검색어 그대로. 행동(신청·청구)이 맨 위',
  '     ## 버튼          — 슬롯 qa2·qa4·마지막, 각 버튼의 문구와 목적지 URL',
  '② 버튼 목적지를 Playwright 로 먼저 연다 (로그인·세션토큰 걸리는지)',
  '③ 구성표를 채팅에 그대로 올려 사장님 승인을 받는다  ← 여기서 멈춘다',
]);

step(3, '사실 — Playwright 로 원문 대조', hasFactsheet, [
  '① 1차 출처를 browser_navigate 로 연다 (블로그·언론 금지)',
  '② browser_take_screenshot 으로 화면을 캡처해 눈으로 본다',
  '     표·구간·단서는 텍스트로 뽑으면 뭉개진다 (절대규칙 7-A)',
  `③ scripts/output/factsheet-${keyword}.md 를 채운다 (관할·수치·단서·교차출처)`,
  '④ 수치는 2개 이상 출처 교차 + 계산 정합성 검산',
]);

step(4, '마무리 — 오차·오해 소지 검토', false, [
  '① npx tsx scripts/write.ts "' + keyword + '" --final   ← 아래 검사를 한 번에 돌린다',
  '② 통과하면 커밋. push 는 사장님 확인 후',
]);

/* ─────────── 4단계: 마무리 검토 일괄 실행 ─────────── */

if (args.includes('--final')) {
  console.log(`\n${line}\n 마무리 검토 — 오차·오해 소지 전수\n${line}\n`);
  const CHECKS: [string, string][] = [
    ['배선 무결성', 'npx tsx scripts/verify-integrity.ts --strict'],
    ['타입 형태', 'npx tsx scripts/check-type-shape.ts'],
    ['스포크 품질', 'bash scripts/check-spoke-quality.sh'],
    ['타이틀↔소제목', 'npx tsx scripts/check-user-value.ts'],
    ['제목 행동·버튼 슬롯', 'npx tsx scripts/check-click-value.ts'],
    ['팩트시트', 'npx tsx scripts/check-factsheet.ts'],
    ['타이틀 출처(캡처)', 'npx tsx scripts/check-title-source.ts'],
    ['임계값 복사', 'npx tsx scripts/check-threshold-drift.ts'],
    ['문구·버튼', 'npx tsx scripts/check-cue-value.ts'],
    ['수치 신선도', 'npx tsx scripts/check-freshness.ts'],
    ['중복', 'npx tsx scripts/check-duplicate.ts'],
  ];
  let bad = 0;
  for (const [name, cmd] of CHECKS) {
    try {
      execSync(cmd, { cwd: ROOT, stdio: 'pipe' });
      console.log(`  ✅ ${name}`);
    } catch (e: any) {
      bad++;
      console.log(`  ❌ ${name}`);
      const out = `${e.stdout ?? ''}${e.stderr ?? ''}`.trim().split('\n').slice(-8);
      out.forEach((l) => console.log(`       ${l}`));
    }
  }
  console.log(`\n${bad === 0 ? '통과 — 커밋해도 된다' : `${bad}건 남았다 — 고치고 다시 돌린다`}\n`);
  process.exit(bad ? 1 : 0);
}

if (!statusOnly) {
  const next = !hasKeywords ? 1 : outlines.length === 0 ? 2 : !hasFactsheet ? 3 : 4;
  console.log(`\n${line}\n 지금 할 것: ${next}단계\n${line}\n`);
}
