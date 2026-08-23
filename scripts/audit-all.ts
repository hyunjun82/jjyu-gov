/**
 * audit-all.ts — 사이트 전체 상태를 한 화면에 요약
 *
 * 왜 만들었나 (2026-08-01):
 *   게이트는 전부 "이번에 바뀐 파일"만 본다(그래야 작업이 진행된다).
 *   그 결과 기존 1,689개 페이지의 상태를 아무도 보지 않게 됐고,
 *   CTA가 기관 메인으로 가는 허브 94곳·중복 219쌍이 조용히 쌓여 있었다.
 *   이 스크립트는 차단하지 않는다. "지금 어디가 비어 있나"만 보여준다.
 *
 * 2026-08-23: 검사 6개 중 5개가 없는 파일을 부르고 있었다(check-cue-value·
 * check-click-value·check-user-value·check-freshness·check-duplicate).
 * 조용히 건너뛰고 배선 하나만 돌면서 "통과"처럼 보였다. 실제로 도는 것만 남겼다.
 *
 * 사용
 *   npm run audit
 */
import { execSync } from 'child_process';

type Probe = { name: string; cmd: string; pick: RegExp[] };

const PROBES: Probe[] = [
  {
    name: '원문 대조 (글의 숫자가 추출본에 있나)',
    cmd: 'npx tsx scripts/check-source-match.ts',
    pick: [/\d+개 글에서 어긋남.*/, /통과.*/],
  },
  {
    name: '버튼 문구 도배 (같은 틀을 몇 번 돌려썼나)',
    cmd: 'npx tsx scripts/check-button-variety.ts',
    pick: [/상단 버튼 \d+개.*/, /통과.*/],
  },
  {
    name: '타입 형태 (faq/faqData 등 필드명)',
    cmd: 'npx tsx scripts/check-type-shape.ts',
    pick: [/\d+건.*/, /통과.*/],
  },
  {
    name: '배선 정합성 (고아 허브·매니페스트)',
    cmd: 'npx tsx scripts/verify-integrity.ts',
    pick: [/허브\(PoliciesBySlug\).*/, /스포크 없는 허브.*/, /배선 오류 \d+개.*/],
  },
];

console.log('='.repeat(64));
console.log(' 사이트 전수 감사 — 지금 어디가 비어 있나');
console.log('='.repeat(64));

for (const p of PROBES) {
  let out = '';
  try {
    out = execSync(p.cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  } catch (e: unknown) {
    /* 게이트가 exit 1 로 끝나도 stdout 은 읽는다 */
    const err = e as { stdout?: string };
    out = err.stdout ?? '';
  }
  console.log(`\n■ ${p.name}`);
  const lines: string[] = [];
  for (const re of p.pick) {
    for (const line of out.split('\n')) {
      const m = line.match(re);
      if (m) {
        lines.push('   ' + line.trim());
        break;
      }
    }
  }
  if (lines.length) console.log(lines.join('\n'));
  else console.log('   (요약을 못 읽음 — 개별 실행으로 확인)');
}

console.log('\n' + '='.repeat(64));
console.log(' 글 한 편을 끝까지 끌고 가려면');
console.log('   npx tsx scripts/write.ts "{키워드}"');
console.log('='.repeat(64));
