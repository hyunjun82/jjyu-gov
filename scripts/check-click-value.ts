/**
 * check-click-value.ts — 스포크가 "버튼을 누르게 만드는 글"인지 검사
 *
 * gov-jjyu의 글은 정보 전달이 목적이 아니다. 방문자가 버튼을 눌러 내부로
 * 이동해야 전면광고(vignette)가 뜨고, 그게 수익의 지렛대다.
 * 실측: 전면광고 노출RPM $7.41 vs 디스플레이 $1.43 — 5배 차이인데
 * 전체 노출의 4.3%에 불과했다. 내부 이동을 늘리는 것이 남은 여지다.
 *
 * 그래서 이 게이트는 "잘 쓴 글"이 아니라 "누르게 되는 글"인지만 본다.
 *
 * 검사 항목:
 *   A 제목 행동성   h1이 행동으로 끝나는가 ("~란 무엇인가"면 읽고 나간다)
 *   B 버튼 수용     qa 7개 이상인가 (허브 버튼 3개가 2·4·마지막 슬롯에 들어감)
 *   C 외부 누수     스포크 본문에서 외부로 내보내는 CTA가 없는가
 *                   (스포크→허브→외부 순서를 지켜야 전면광고 기회를 안 버린다)
 *
 * 사용:
 *   npx tsx scripts/check-click-value.ts            # 변경분만 (pre-push)
 *   npx tsx scripts/check-click-value.ts --all      # 전수 현황 (차단 안 함)
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = 'app/policy/[id]/[spoke]/content';

/** 눌러야 해결되는 동작. '안내·소개·정리·이해'는 읽으면 끝나므로 뺀다. */
const ACTION = /신청|조회|발급|다운로드|접수|제출|계산|신고|청구|납부|가입|등록|확인|받는|받기|찾는|찾기|여는|열기|개설|해지|변경|연장|재발급|비교|예매|예약|검색|열람|입찰|쓰는|쓰기|고르는|골라|갈아타|옮기는|바꾸는|지키는|챙기는/;

/** 정보형 종결 — 읽고 나가는 제목 */
const INFO_ONLY = /(무엇인가|이란\??$|의 모든 것|총정리$|알아보기$|정리$|이해하기$)/;

type Issue = { axis: 'A' | 'B' | 'C'; msg: string; fix: string };

function checkSpoke(file: string): Issue[] {
  const c = fs.readFileSync(file, 'utf8');
  const issues: Issue[] = [];

  // ── A. 제목이 행동으로 끝나는가 ──────────────────────
  const h1 = c.match(/h1: '([^']*)'/)?.[1] ?? '';
  if (h1) {
    if (INFO_ONLY.test(h1)) {
      issues.push({
        axis: 'A',
        msg: `제목이 정보형으로 끝남: "${h1}"`,
        fix: '"~하는 법 / ~신청하기 / ~조회하고 확인하기"처럼 행동으로 끝낸다',
      });
    } else if (!ACTION.test(h1)) {
      issues.push({
        axis: 'A',
        msg: `제목에 행동 동사가 없음: "${h1}"`,
        fix: '신청·조회·발급·계산·신고 중 이 글이 유도하는 동작을 제목에 넣는다',
      });
    }
  }

  // ── B. 허브 버튼을 받을 구조인가 ─────────────────────
  // SpokeClient 가 qa 인덱스 2·4·마지막에 허브 버튼을 넣는다.
  // qa 가 적으면 버튼 슬롯이 겹쳐 실제로 3개가 안 나온다.
  const qa = (c.match(/anchor: '/g) || []).length;
  if (qa < 7) {
    issues.push({
      axis: 'B',
      msg: `qa ${qa}개 — 허브 버튼 3개가 다 들어가지 않음`,
      fix: 'qa를 7개 이상으로 늘린다 (버튼 슬롯이 2·4·마지막이라 겹친다)',
    });
  }

  // ── C. 외부로 새는 CTA가 없는가 ──────────────────────
  // sources·faqData 의 출처 링크는 정상이다. 문제는 본문(qa) 안에서
  // 외부로 내보내는 링크다. 거기서 나가면 전면광고 기회를 버린다.
  const qaBlock = c.slice(c.indexOf('qa: ['), c.indexOf('faqData'));
  const leaks = [...qaBlock.matchAll(/href=["']https?:\/\/[^"']+["']/g)].length
    + [...qaBlock.matchAll(/<a\s/g)].length;
  if (leaks > 0) {
    issues.push({
      axis: 'C',
      msg: `본문에 외부 링크 ${leaks}건 — 여기서 나가면 전면광고가 안 뜬다`,
      fix: '본문 링크는 빼고 허브 CTA로 보낸다. 출처는 sources·faqData 에만 둔다',
    });
  }

  return issues;
}

// ── 대상 선정 ────────────────────────────────────────────
const args = process.argv.slice(2);
const all = args.includes('--all');

function allSpokes(): string[] {
  const out: string[] = [];
  if (!fs.existsSync(ROOT)) return out;
  for (const dir of fs.readdirSync(ROOT)) {
    const d = path.join(ROOT, dir);
    if (!fs.statSync(d).isDirectory()) continue;
    for (const f of fs.readdirSync(d)) if (f.endsWith('.tsx')) out.push(path.join(d, f));
  }
  return out;
}

let targets: string[];
if (all) {
  targets = allSpokes();
} else {
  let diff = '';
  try {
    diff = execSync(`git diff --name-only origin/main...HEAD -- "${ROOT}"`, { encoding: 'utf8' });
  } catch {
    try {
      diff = execSync(`git diff --name-only HEAD~1 -- "${ROOT}"`, { encoding: 'utf8' });
    } catch {
      diff = '';
    }
  }
  targets = diff.split('\n').map((l) => l.trim()).filter((l) => l.endsWith('.tsx') && fs.existsSync(l));
}

// ── 실행 ────────────────────────────────────────────────
console.log('='.repeat(60));
console.log(' 클릭 유도 검사 — 제목 행동성 / 버튼 슬롯 / 외부 누수');
console.log('='.repeat(60));

if (!targets.length) {
  console.log(' 변경된 스포크 없음 — 검사 생략');
  process.exit(0);
}

const AXIS = { A: '제목 행동성', B: '버튼 슬롯', C: '외부 누수' } as const;
let failed = 0;
const count = { A: 0, B: 0, C: 0 };

for (const f of targets) {
  const issues = checkSpoke(f);
  if (!issues.length) continue;
  failed++;
  issues.forEach((i) => count[i.axis]++);
  if (!all) {
    console.log(`\n❌ ${f.replace(ROOT + path.sep, '')}`);
    for (const i of issues) {
      console.log(`   [${AXIS[i.axis]}] ${i.msg}`);
      console.log(`      → ${i.fix}`);
    }
  }
}

console.log(`\n검사 ${targets.length}개 / 문제 ${failed}개`);
console.log(`  제목 행동성 ${count.A}  버튼 슬롯 ${count.B}  외부 누수 ${count.C}`);

if (all) {
  console.log('\n(--all 은 현황 파악용 — 차단하지 않는다)');
  process.exit(0);
}

if (failed) {
  console.log('\n' + '='.repeat(60));
  console.log(` 클릭 유도 기준 미달 ${failed}개 — push 차단`);
  console.log(' 정보를 잘 정리한 글이 아니라, 누르게 되는 글이어야 한다.');
  console.log('='.repeat(60));
  process.exit(1);
}

console.log('\n ✅ 통과 — 제목이 행동으로 끝나고, 버튼이 들어가고, 밖으로 안 샌다');
