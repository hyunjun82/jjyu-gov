/**
 * 승인 도장 검사 — 구성표를 사람이 승인하지 않은 글은 push 되지 않는다.
 *
 * 왜 생겼나 (2026-08-20)
 *   4단계 중 2단계(구성표·문구 승인)만 기계가 안 잡았다.
 *   그 결과 같은 실수가 세 번 라이브까지 나갔다 — cue 도배, 읽는 버튼, 같은 틀 반복.
 *   승인은 채팅에서 일어나 기계가 못 본다. 그래서 파일에 도장을 남기고 그걸 본다.
 *
 * 사용
 *   npx tsx scripts/check-stage-approval.ts
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { judgeable } from './lib/evidence';

const ROOT = path.join('app', 'policy', '[id]', '[spoke]', 'content');
const OUT = path.join('scripts', 'output');

/**
 * 승인이 필요한 글을 고른다.
 *
 *   ① 새로 추가된 스포크
 *   ② 문구(heroHook·heroAct·act.cue)가 바뀐 기존 스포크
 *
 * ②가 없으면 이 게이트는 무의미하다. 2026-08-20 에 세 번 연속 터진 것이
 * 전부 "기존 글의 문구를 뜯어고친" 경우였는데, 새 글만 보는 규칙이었다면
 * 세 번 다 그대로 통과했다.
 * 오탈자·조항번호 같은 사실 교정은 승인 대상이 아니다 — 문구 줄이 바뀐 것만 본다.
 */
function git(cmd: string): string {
  try { return execSync(cmd, { encoding: 'utf8' }); } catch { return ''; }
}

function range(): string {
  return git('git rev-parse --verify origin/main').trim() ? 'origin/main...HEAD' : 'HEAD~1';
}

/** 문구 줄이 바뀌었나 — diff 에서 heroHook/heroAct/cue 가 추가·삭제됐는지 본다 */
function copyChanged(file: string, rev: string): boolean {
  const d = git(`git diff -U0 ${rev} -- "${file}"`);
  if (!d) return false;
  return d
    .split('\n')
    .filter((l) => (l.startsWith('+') || l.startsWith('-')) && !l.startsWith('+++') && !l.startsWith('---'))
    .some((l) => /heroHook|heroAct|\bcue:/.test(l));
}

/* 도장을 찍을 수단이 생긴 날 (2026-08-23, write.ts --approve).
   그 전 글은 도장을 찍을 방법 자체가 없었다. 그런데 이 게이트(2026-08-20 신설)가
   8/20 커밋의 스포크 63편을 소급해서 막아 push 가 통째로 섰다.
   소급 차단 판정은 scripts/lib/evidence.ts 의 judgeable 하나로 통일했다. */
const STAMP_SINCE = '2026-08-23';

function spokesNeedingApproval(): { file: string; why: string }[] {
  const rev = range();
  const out: { file: string; why: string }[] = [];

  const added = new Set(
    (git(`git diff --name-only --diff-filter=A ${rev} -- "${ROOT}"`) +
      git(`git ls-files --others --exclude-standard -- "${ROOT}"`))
      .split('\n').map((s) => s.trim()).filter((s) => s.endsWith('.tsx')),
  );
  for (const f of added) out.push({ file: f, why: '새 글' });

  const modified = git(`git diff --name-only --diff-filter=M ${rev} -- "${ROOT}"`)
    .split('\n').map((s) => s.trim()).filter((s) => s.endsWith('.tsx'));
  let skipped = 0;
  for (const f of modified) {
    if (added.has(f)) continue;
    if (!copyChanged(f, rev)) continue;
    if (!judgeable(f, STAMP_SINCE)) { skipped++; continue; }
    out.push({ file: f, why: '문구(서론·버튼·cue) 변경' });
  }
  if (skipped) console.log(` (도장 수단이 생기기 전(${STAMP_SINCE} 이전) 커밋의 문구 변경 ${skipped}건은 건너뜀)`);
  return out;
}

/** registry.ts 에서 "'slug': {varName}SpokeContent" 줄을 문자열로 찾는다 (정규식 없이) */
function slugFor(reg: string, varName: string): string | undefined {
  const needle = varName + 'SpokeContent';
  let from = 0;
  for (;;) {
    const i = reg.indexOf(needle, from);
    if (i < 0) return undefined;
    const lineStart = reg.lastIndexOf('\n', i) + 1;
    const line = reg.slice(lineStart, i);
    const q1 = line.indexOf("'");
    const q2 = q1 >= 0 ? line.indexOf("'", q1 + 1) : -1;
    if (q1 >= 0 && q2 > q1) {
      const s = line.slice(q1 + 1, q2);
      if (s && /^[a-z0-9-]+$/.test(s)) return s;
    }
    from = i + needle.length;
  }
}

console.log('='.repeat(60));
console.log(' 승인 도장 검사 — 구성표를 사람이 승인했나');
console.log('='.repeat(60));

const items = spokesNeedingApproval().filter((x) => fs.existsSync(x.file));
if (!items.length) {
  console.log(' 승인이 필요한 글 없음 — 생략');
  process.exit(0);
}

let reg = '';
try { reg = fs.readFileSync(path.join('data', 'spokes', 'registry.ts'), 'utf8'); } catch {}

let fail = 0;
for (const { file: f, why } of items) {
  const src = fs.readFileSync(f, 'utf8');
  const name = f.replace(/\\/g, '/').split('/').slice(-2).join('/') + ` — ${why}`;

  const m = src.match(/export const (\S+?)SpokeContent/);
  const slug = m ? slugFor(reg, m[1]) : undefined;

  if (!slug) {
    console.log(`\n❌ ${name} — registry 에서 슬러그를 못 찾았다`);
    fail++;
    continue;
  }

  const stage2 = path.join(OUT, `stage2-${slug}.json`);
  if (!fs.existsSync(stage2)) {
    console.log(`\n❌ ${name} — 구성표가 없다: ${stage2}`);
    console.log('   2단계(gov-outline)를 거치지 않고 본문부터 썼다.');
    fail++;
    continue;
  }

  let j: any = null;
  try { j = JSON.parse(fs.readFileSync(stage2, 'utf8')); } catch {}
  if (!j || j.approved !== true) {
    console.log(`\n❌ ${name} — 구성표가 승인되지 않았다 (approved: ${j ? j.approved : '파싱 실패'})`);
    console.log(`   ${stage2} 를 채팅에 올려 승인받은 뒤 approved:true 로 도장을 찍는다.`);
    fail++;
    continue;
  }

  console.log(` ✅ ${name} — 승인됨 (${j.approvedAt ?? '날짜 없음'})`);
}

console.log('');
if (fail) {
  console.log(` ${fail}건 — 승인 없이 쓴 글은 push 하지 않는다.`);
  process.exit(1);
}
console.log(' 통과');
