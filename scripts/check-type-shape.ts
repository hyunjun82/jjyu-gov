/**
 * check-type-shape.ts — 이번에 건드린 글이 빌드를 죽일 타입인지 본다
 *
 * 왜 (2026-08-09):
 *   청년문화예술패스 스포크를 올렸는데 `faqData:` 를 `faq:` 로 썼다.
 *   허브(PolicyData)는 `faq`, 스포크(SpokeData)는 `faqData` 라 이름이 다르다.
 *   한 세션에서 허브를 고치고 이어서 스포크를 쓰면 반드시 섞인다. 실제로 섞였다.
 *
 *   문제는 아무도 못 잡았다는 것이다:
 *     · tsc        — 잡는다. "error TS2353: 'faq' does not exist in type 'SpokeData'"
 *     · next build — 못 잡는다. next.config.mjs 의 typescript.ignoreBuildErrors: true
 *     · 게이트 10종 — 안 본다. 문구·사실·중복만 본다
 *     · 프리렌더    — 여기서 터진다. spoke.faqData.map → undefined
 *   즉 가장 이르게 알 수 있는 신호(tsc)를 버리고, 가장 늦고 비싼 자리(빌드)에서 죽었다.
 *
 * 왜 tsc 전체를 게이트로 안 쓰나:
 *   레포에 기존 오류가 1,230개 있다. 전부 요구하면 아무도 push 를 못 한다.
 *   (ignoreBuildErrors 가 켜져 있는 이유이기도 하다. 그건 그대로 둔다 —
 *    빌드 설정은 build-deploy.md 가 단일 정답을 갖는 자리다.)
 *
 * 그래서: **이번에 바뀐 글 파일**에 한해, **빌드를 실제로 죽이는 오류 코드**만 본다.
 *   TS2353 — 타입에 없는 프로퍼티를 썼다 (faq/faqData 사고가 정확히 이것)
 *   TS2739/TS2741 — 필수 프로퍼티가 빠졌다 (렌더에서 undefined.map 으로 죽는다)
 *   TS2551 — 오타난 프로퍼티명 (제안까지 붙어 나온다)
 */
import { execSync } from 'child_process';
import { changedFiles } from './lib/changed-files';

const FATAL = new Set(['TS2353', 'TS2739', 'TS2741', 'TS2551']);

const sh = (cmd: string): string => {
  try {
    return execSync(cmd, { encoding: 'utf8', maxBuffer: 60 * 1024 * 1024 });
  } catch (e: any) {
    return (e.stdout || '') + (e.stderr || '');
  }
};

const isContent = (f: string) =>
  f.startsWith('data/policies/') || f.includes('/[spoke]/content/');

const changed = new Set(
  changedFiles(isContent).map((c) => c.file.split('\\').join('/')),
);

console.log('='.repeat(60));
console.log(' 타입 형태 검사 — 이번에 쓴 글이 빌드를 죽이나');
console.log('='.repeat(60));

if (!changed.size) {
  console.log(' 변경된 글 없음 — 검사 생략');
  process.exit(0);
}

const out = sh('npx tsc --noEmit');
const hits: string[] = [];

for (const raw of out.split('\n')) {
  /* CRLF 주의: tsc 출력 줄 끝에 \r 이 남는다. JS 정규식의 `.` 는 \r 을 매칭하지 않아
     `(.+)$` 가 통째로 실패한다 — 검사기가 조용히 "문제 0개"를 찍는다.
     2026-08-09 이 게이트를 만들면서 실제로 당했고, 같은 날 check-cue-value 의
     riskyFrequency 도 정규식이 조용히 실패해 검사를 못 하고 있었다.
     그래서 자르고 시작한다. */
  const line = raw.replace(/\r$/, '');
  const m = line.match(/^(.+?)\((\d+),\d+\):\s*error (TS\d+):\s*(.+)$/);
  if (!m) continue;
  const file = m[1].split('\\').join('/');
  if (!changed.has(file)) continue;
  if (!FATAL.has(m[3])) continue;
  hits.push(`❌ ${file}:${m[2]}\n   [${m[3]}] ${m[4]}`);
}

if (!hits.length) {
  console.log(` 검사 ${changed.size}개 / 문제 0개`);
  console.log('\n ✅ 통과 — 이번에 쓴 글의 필드 이름과 필수 항목이 타입과 맞는다');
  process.exit(0);
}

console.log(hits.join('\n'));
console.log(`\n 검사 ${changed.size}개 / 문제 ${hits.length}개`);
console.log('\n' + '='.repeat(60));
console.log(` 타입 불일치 ${hits.length}개 — push 차단`);
console.log(' TS2353(없는 필드) — 허브는 faq, 스포크는 faqData 다. 섞이면 프리렌더에서 죽는다.');
console.log(' TS2739/2741(필수 누락) — faqData 의 source·sourceUrl 처럼 빠진 항목이다.');
console.log('   전체 1,015개 스포크 중 938개가 출처를 달고 있다. 그게 표준이다(절대규칙 2).');
console.log('='.repeat(60));
process.exit(1);
