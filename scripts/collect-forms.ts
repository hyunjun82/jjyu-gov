/**
 * collect-forms.ts — 법령 하나의 별지 서식 목록과 다운로드 링크를 통째로 정리한다
 *
 * 왜 (2026-08-14 사장님 지시):
 *   "신청서·양식 다운로드" 글은 검색 의도가 좁고 확실해 롱테일이 안정적이다.
 *   구조는 허브(안내) → 스포크(서식별) → 파일 다운로드다.
 *   ⚠ 전면광고는 파일 다운로드가 아니라 허브→스포크 "페이지 이동"에서 뜬다.
 *      그래서 서식마다 스포크를 하나씩 만드는 것이 곧 수익 동선이다.
 *   법령 하나에 서식이 30개가 넘어 손으로는 감당이 안 되므로 목록을 기계로 만든다.
 *
 * 왜 fetch 를 안 쓰나:
 *   law.go.kr 는 본문을 중첩 iframe(lsInfoP.do)으로 내려줘 서버 fetch 로는
 *   "[별지 …]" 문자열이 아예 안 잡힌다(2026-08-14 실측 0건). Playwright 로 열어
 *   화면 텍스트를 뽑아 넘긴다 — 화면을 거치므로 절대규칙 7-A 와도 맞다.
 *
 * 사용:
 *   1) Playwright 로 법령 페이지를 연다
 *        https://www.law.go.kr/법령/노인장기요양보험법시행규칙
 *   2) evaluate: document.querySelector('iframe').contentDocument.body.innerText
 *   3) 결과를 파일로 저장한 뒤
 *        npx tsx scripts/collect-forms.ts "노인장기요양보험법 시행규칙" --from <파일>
 *
 * 결과: scripts/output/forms-{법령명}.json
 *   [{ no, name, deleted, viewUrl }]
 *
 * ⚠ 이 스크립트는 목록만 만든다. 실제 다운로드 링크(flSeq)와 개정일은 각 viewUrl 을
 *   Playwright 로 열어 화면에서 확인한다. 서식은 개정되면 낡은 파일이 반려 사유가 되므로
 *   스포크 본문에 개정일을 반드시 적는다.
 */
import { execSync } from 'child_process';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();
const OUT = join(ROOT, 'scripts', 'output');
const args = process.argv.slice(2);
const lawName = args.find((a) => !a.startsWith('--') && !args[args.indexOf(a) - 1]?.startsWith('--from'));

if (!lawName) {
  console.log('사용: npx tsx scripts/collect-forms.ts "{법령명}" --from <목록파일>');
  process.exit(1);
}

const LAW_URL = `https://www.law.go.kr/법령/${lawName.replace(/\s+/g, '')}`;

const fromIdx = args.indexOf('--from');
const fromFile = fromIdx >= 0 ? args[fromIdx + 1] : '';

console.log(`\n▶ ${lawName} 서식 목록 정리`);
console.log(`   원본 확인: ${LAW_URL}`);

if (!fromFile || !existsSync(fromFile)) {
  console.log('\n   ⚠ --from <파일> 이 필요하다.');
  console.log('   1) Playwright 로 위 주소를 연다');
  console.log("   2) evaluate: document.querySelector('iframe').contentDocument.body.innerText");
  console.log('   3) 결과를 파일로 저장해 --from 으로 넘긴다');
  process.exit(1);
}

const text = readFileSync(fromFile, 'utf8');

const re = /\[별지\s*제([0-9의]+)호서식\]\s*([^\[\n]{1,60}?)(?=\s{2,}|\[별지|\n|$)/g;
const forms: { no: string; name: string; deleted: boolean; viewUrl: string }[] = [];
const seen = new Set<string>();

for (const m of text.matchAll(re)) {
  const no = m[1].trim();
  const name = m[2].replace(/\s+/g, ' ').trim();
  if (seen.has(no)) continue;
  seen.add(no);
  const deleted = /^삭제/.test(name);
  /* 뷰어 URL — bylNo 는 4자리 0 패딩. "제1의2호" 처럼 가지번호가 붙으면 앞 숫자를 쓰고
     bylBrNo 에 가지번호를 넣는다(법령정보센터 규칙). */
  const [main, branch] = no.split('의');
  const bylNo = main.padStart(4, '0');
  const bylBrNo = (branch ?? '0').padStart(2, '0');
  const viewUrl =
    'https://www.law.go.kr/LSW/lsBylInfoPLinkR.do' +
    `?lsiSeq=0&bylNo=${bylNo}&bylBrNo=${bylBrNo}&bylCls=BF&bylEfYd=&bylEfYdYn=Y` +
    `&lsNm=${encodeURIComponent(lawName)}`;
  forms.push({ no: `제${no}호`, name, deleted, viewUrl });
}

if (!forms.length) {
  console.log('   ⚠ 서식을 하나도 못 찾았다 — 넘긴 파일에 "[별지 제N호서식]" 이 있는지 본다');
  process.exit(1);
}

const alive = forms.filter((f) => !f.deleted);
mkdirSync(OUT, { recursive: true });
const outFile = join(OUT, `forms-${lawName.replace(/\s+/g, '-')}.json`);
writeFileSync(
  outFile,
  JSON.stringify(
    { 법령: lawName, 수집일: new Date().toISOString().slice(0, 10), 총: forms.length, 유효: alive.length, forms },
    null,
    2,
  ),
  'utf8',
);

console.log(`\n   서식 ${forms.length}개 (삭제 ${forms.length - alive.length}개 제외 → ${alive.length}개)`);
alive.forEach((f) => console.log(`     ${f.no.padEnd(9)} ${f.name}`));
console.log(`\n   저장: ${outFile}`);
console.log('\n   다음: 스포크로 쓸 서식을 고르고 각 viewUrl 을 Playwright 로 열어');
console.log('         다운로드 링크(flSeq)와 개정일을 화면에서 확인한다.');
