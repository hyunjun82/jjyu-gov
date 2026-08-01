/**
 * audit-all.ts — 사이트 전체 상태를 한 화면에 요약
 *
 * 왜 만들었나 (2026-08-01):
 *   게이트는 전부 "이번에 바뀐 파일"만 본다(그래야 작업이 진행된다).
 *   그 결과 기존 1,689개 페이지의 상태를 아무도 보지 않게 됐고,
 *   CTA가 기관 메인으로 가는 허브 94곳·중복 219쌍이 조용히 쌓여 있었다.
 *   이 스크립트는 차단하지 않는다. "지금 어디가 비어 있나"만 보여준다.
 *
 * 사용
 *   npm run audit
 */
import { execSync } from 'child_process';

type Probe = { name: string; cmd: string; pick: RegExp[] };

const PROBES: Probe[] = [
  {
    name: '문구·버튼 (누를 이유가 버튼 앞에 있나)',
    cmd: 'npx tsx scripts/check-cue-value.ts --all',
    pick: [/문구 \d+ \/ 카드 \d+/, /문구누락 .*버튼슬롯 \d+/],
  },
  {
    name: '클릭 유도 (제목 행동성·외부 누수)',
    cmd: 'npx tsx scripts/check-click-value.ts --all',
    pick: [/제목 행동성 .*종결어미 도배 \d+/],
  },
  {
    name: '사용자 중심 (타이틀↔소제목·버튼 CTA)',
    cmd: 'npx tsx scripts/check-user-value.ts --all',
    pick: [/타이틀↔소제목 .*허브-스포크 \d+/],
  },
  {
    name: '수치 신선도 (낡은 값·대조 불가 출처)',
    cmd: 'npx tsx scripts/check-freshness.ts --all',
    pick: [/검사 \d+개 \/ 지적 \d+개/, /검수만료 .*연도불일치 \d+/],
  },
  {
    name: '중복 (같은 내용 두 번 썼나)',
    cmd: 'npx tsx scripts/check-duplicate.ts --all',
    pick: [/검사 \d+개 \/ 문서 \d+개 \/ 겹침 \d+건/],
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
console.log(' 개별 상세');
console.log('   npx tsx scripts/check-cue-value.ts --all');
console.log('   npx tsx scripts/check-freshness.ts --all --top 30');
console.log('   npx tsx scripts/check-duplicate.ts --all');
console.log('='.repeat(64));
