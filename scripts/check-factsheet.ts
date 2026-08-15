/**
 * check-factsheet.ts — 신규 글에 팩트시트가 있는가, 근거 없는 빈도 표현을 썼는가
 *
 * 2026-08-15: 313줄 → 이 크기로 줄였다.
 *   원래 일곱 가지를 봤다 — 파일 유무 / 참조 주석 / 미기입 / 관할 섹션 /
 *   원문 캡처 확인 칸 / 교차출처 자기참조 / 근거 없는 빈도 주장.
 *   그중 실제로 오류를 잡은 건 빈도 주장 하나였고, 원문 캡처 칸 검사는
 *   본문에 쓴 "(예/아니오)" 를 템플릿으로 오인해 멀쩡한 글을 막았다.
 *   사장님 지시로 둘만 남긴다.
 *
 *     ① 신규 글에 팩트시트 파일이 있는가 (1차 출처 대조 흔적)
 *     ② "대부분·경우가 많다" 같은 근거 없는 빈도 표현을 쓰지 않았는가
 *
 * 사용:
 *   npx tsx scripts/check-factsheet.ts          # 변경분만 (pre-push)
 *   npx tsx scripts/check-factsheet.ts --all    # 전수
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const DIR = 'data/policies';
const SHEET_DIR = 'scripts/output';

/** 원문에 비율이 없으면 쓰면 안 되는 표현 */
/* 2026-08-15: '흔히'·'보통은' 을 뺐다. "흔히 도는 방법"(떠도는 얘기)처럼
   사실 주장이 아닌 문장을 잡아 멀쩡한 글을 막았다. 사실의 빈도를 단정하는 말만 남긴다. */
const FREQ = ['대부분', '대개', '경우가 많', '흔합니다', '대다수', '거의 모든'];

type Issue = { slug: string; msg: string; fix: string; sample?: string };

function factsheetPath(slug: string): string | null {
  const candidates = [
    path.join(SHEET_DIR, `factsheet-${slug}.md`),
    path.join(SHEET_DIR, `factsheet-${slug}.MD`),
  ];
  return candidates.find((p) => fs.existsSync(p)) ?? null;
}

function check(file: string): Issue[] {
  const slug = file.replace(/\.ts$/, '');
  const body = fs.readFileSync(path.join(DIR, file), 'utf8');
  const out: Issue[] = [];

  if (!factsheetPath(slug)) {
    out.push({
      slug,
      msg: '팩트시트가 없다 — 1차 출처를 대조한 흔적이 없다',
      fix: `scripts/output/factsheet-${slug}.md 에 관할·수치·단서·쓰지 않는 것을 적는다`,
    });
  }

  for (const w of FREQ) {
    const i = body.indexOf(w);
    if (i < 0) continue;
    out.push({
      slug,
      msg: `근거 없는 빈도 주장 "${w}"`,
      fix: '조건문으로 바꾼다 ("~인 경우입니다", "~일 수 있습니다") / 원문에 비율이 있으면 그 수치를 쓴다',
      sample: body.slice(Math.max(0, i - 40), i + 40).replace(/\s+/g, ' '),
    });
    break; // 한 글에 하나만 알려주면 충분하다
  }

  return out;
}

// ── 대상 선정 ────────────────────────────────────────────
const args = process.argv.slice(2);
const all = args.includes('--all');
const named = args.filter((a) => !a.startsWith('--'));

let targets: string[];
if (all) {
  targets = fs.readdirSync(DIR).filter((f) => f.endsWith('.ts') && !['manifest.ts', 'index.ts'].includes(f));
} else if (named.length) {
  targets = named.map((s) => (s.endsWith('.ts') ? s : `${s}.ts`));
} else {
  let diff = '';
  try {
    diff = execSync('git diff --name-only origin/main...HEAD -- data/policies', { encoding: 'utf8' });
  } catch {
    try { diff = execSync('git diff --name-only HEAD~1 -- data/policies', { encoding: 'utf8' }); } catch { diff = ''; }
  }
  targets = diff
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.endsWith('.ts') && !l.endsWith('manifest.ts'))
    .map((l) => path.basename(l))
    .filter((f) => fs.existsSync(path.join(DIR, f)));
}

if (!targets.length) {
  console.log('변경된 정책 파일 없음 — 검사 생략');
  process.exit(0);
}

const issues = targets.flatMap((f) => (fs.existsSync(path.join(DIR, f)) ? check(f) : []));

console.log('='.repeat(60));
console.log(' 팩트시트 검사 — 1차 출처 대조 흔적과 빈도 표현');
console.log('='.repeat(60));

if (!issues.length) {
  console.log(`\n ✅ 통과 — 검사 ${targets.length}개`);
  process.exit(0);
}

for (const i of issues) {
  console.log(`\n❌ ${i.slug}`);
  console.log(`   ${i.msg}`);
  if (i.sample) console.log(`      · …${i.sample}…`);
  console.log(`   → ${i.fix}`);
}
console.log(`\n 문제 ${issues.length}개 — push 차단`);
process.exit(all ? 0 : 1);
