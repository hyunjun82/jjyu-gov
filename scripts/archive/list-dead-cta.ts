/**
 * list-dead-cta.ts — 죽은 CTA 작업 목록을 만든다
 *
 * 왜 (2026-08-08):
 *   audit-all 이 "죽은 CTA 83개"라고만 알려준다. 어느 글의 어떤 행동을
 *   어디로 보내야 하는지는 알려주지 않아, 매번 처음부터 찾아야 한다.
 *   88개를 하나씩 고치려면 목록이 먼저 있어야 한다.
 *
 *   applyUrl 이 기관 루트인 허브를 뽑아, 그 글이 약속한 행동(제목의 동사)과
 *   함께 표로 내놓는다. 이 표를 보고 딥링크를 하나씩 찾아 채운다.
 *
 * 사용:
 *   npx tsx scripts/list-dead-cta.ts            # 전체
 *   npx tsx scripts/list-dead-cta.ts --md       # 마크다운 표 (작업 문서에 붙여넣기)
 */
import { PoliciesBySlug } from '@/data/policies/manifest';

const ROOT_URL = /^https?:\/\/[^/]+\/?$/;

/* 제목에서 사용자가 할 행동을 뽑는다 — 딥링크를 찾을 때 무엇을 찾을지가 여기서 정해진다 */
const ACTION_HINT: { re: RegExp; hint: string }[] = [
  { re: /신청|접수/, hint: '온라인 신청 화면' },
  { re: /조회|확인|검색/, hint: '조회 화면' },
  { re: /계산|모의/, hint: '모의계산기' },
  { re: /예약/, hint: '예약 화면' },
  { re: /발급|증명/, hint: '발급 화면' },
  { re: /상담|콜센터/, hint: '상담 안내·신청' },
  { re: /비교|차이/, hint: '비교표·공시' },
  { re: /납부|결제/, hint: '납부 화면' },
];

const hintOf = (title: string) => ACTION_HINT.find((a) => a.re.test(title))?.hint ?? '해당 제도 안내 페이지';

const rows: any[] = Object.values(PoliciesBySlug as any);
const dead = rows
  .filter((p) => p.applyUrl && ROOT_URL.test(p.applyUrl))
  .map((p) => ({
    slug: p.slug,
    title: p.title,
    cat: p.catSlug,
    url: p.applyUrl.replace(/^https?:\/\//, '').replace(/\/$/, ''),
    hint: hintOf(p.title),
  }))
  .sort((a, b) => a.url.localeCompare(b.url) || a.slug.localeCompare(b.slug));

if (process.argv.includes('--md')) {
  console.log('| # | 허브 | 현재 목적지(루트) | 찾아야 할 것 | 제목 |');
  console.log('|---|---|---|---|---|');
  dead.forEach((d, i) =>
    console.log(`| ${i + 1} | \`${d.slug}\` | ${d.url} | ${d.hint} | ${d.title.slice(0, 46)} |`),
  );
} else {
  console.log(`죽은 CTA ${dead.length}개 — applyUrl 이 기관 루트라 클릭해도 그 행동을 못 한다\n`);
  dead.forEach((d, i) =>
    console.log(
      `${String(i + 1).padStart(3)}. ${d.url.padEnd(24)} ${d.hint.padEnd(14)} ${d.slug.padEnd(34)} ${d.title.slice(0, 40)}`,
    ),
  );
  console.log(`\n작업 순서: 위에서부터 Playwright 로 그 기관 사이트를 열고,`);
  console.log(`"찾아야 할 것" 화면의 실제 URL 을 찾아 applyUrl·ctaLabel 을 채운다.`);
  console.log(`ctaLabel 은 [구체적 대상]+[행동] 16자 이내 (check-cue-value J축).`);
}
