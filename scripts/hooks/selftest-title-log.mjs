/* title-log 훅 자체 시험 10종 — node scripts/hooks/selftest-title-log.mjs
 * 통과만 세지 않는다. 뚫리는 경로를 일부러 넣어 잡히는지 본다.
 * 2026-08-11 신설(허위 인용 8건이 통과한 뒤). */
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync, renameSync, mkdirSync, unlinkSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const logPath = join(root, 'docs', 'title-log.md');
const idxPath = join(root, 'reference', 'titles', 'INDEX.md');
const idxHide = idxPath + '.hidden';
const logBak = readFileSync(logPath, 'utf8');

const SID = 'selftest-session';
const DEF = "  h1: '테스트 실비 청구하기'," + String.fromCharCode(10) + "  heroAct: { label: 'ㄱ', href: 'https://www.silson24.or.kr/claim/web/' },";
const run = (file, content = DEF, sid = SID) => {
  const payload = JSON.stringify({ session_id: sid, tool_name: 'Write', tool_input: { file_path: file, content } });
  try {
    execSync('node scripts/hooks/require-title-log.mjs', { input: payload, encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    return { pass: true, msg: '' };
  } catch (e) {
    return { pass: false, msg: (e.stderr || '').split('\n').filter(Boolean)[0] ?? '' };
  }
};
const spoke = (s) => `app/policy/[id]/[spoke]/content/실손보험/${s}.tsx`;
const addEntry = (slug, cap, pat = '- 패턴: ⑥ 함정 경고형 — 시험용') =>
  writeFileSync(logPath, logBak + `\n\n## ${slug}\n${cap}\n${pat}\n- 타이틀: 시험\n`, 'utf8');

/* 캡처 열람 기록 — 이 세션이 이미지를 열었다고 기록해 둔다(정상 경로 재현) */
const seenPath = join(root, '.claude', 'state', 'session-activity.jsonl');
const seenBak = existsSync(seenPath) ? readFileSync(seenPath, 'utf8') : null;
const line = (o) => JSON.stringify({ session_id: SID, at: new Date().toISOString(), ...o }) + String.fromCharCode(10);
const OK_URL = 'https://www.silson24.or.kr/claim/web/';
const markAll = () => writeFileSync(seenPath, line({kind:'capture-read',file:'보험타이틀.png'}) + line({kind:'navigate',url:OK_URL}) + line({kind:'screenshot',file:'x.png'}), 'utf8');
const markSeen = markAll;
const clearSeen = () => writeFileSync(seenPath, '', 'utf8');
mkdirSync(join(root, '.claude', 'state'), { recursive: true });
markSeen();

const T = [];
const t = (name, expectPass, fn) => T.push({ name, expectPass, fn });

t('1. 기록이 아예 없는 새 글', false, () => { writeFileSync(logPath, logBak); return run(spoke('시험1없음')); });

t('2. 형식 완벽 + 캡처에 없는 제목 (오늘 뚫린 그 경로)', false, () => {
  addEntry('시험2가짜', '- 캡처: 보험타이틀.png — "존재하지 않는 제목 실비 청구 가능할까?"');
  return run(spoke('시험2가짜'));
});

t('3. 형식 완벽 + 캡처에 있는 제목', true, () => {
  addEntry('시험3진짜', '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"');
  return run(spoke('시험3진짜'));
});

t('4. 캡처 줄은 맞는데 패턴 줄이 없음', false, () => {
  addEntry('시험4패턴없음', '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"', '- 타이틀만 있음');
  return run(spoke('시험4패턴없음'));
});

t('5. 둥근 따옴표(“ ”)로 적어도 인식', true, () => {
  addEntry('시험5따옴표', '- 캡처: 대출 타이틀.png — “스트레스 DSR 3단계 시행, 대출 한도 얼만큼 줄었을까?”');
  return run(spoke('시험5따옴표'));
});

t('6. 제목 앞부분만 인용(부분 일치 허용)', true, () => {
  addEntry('시험6부분', '- 캡처: 연금 타이틀.png — "퇴직연금 디폴트옵션 언제 적용될까?"');
  return run(spoke('시험6부분'));
});

t('7. INDEX.md 가 없을 때 (대조 불가 → 통과가 아니라 차단이어야)', false, () => {
  addEntry('시험7인덱스없음', '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"');
  renameSync(idxPath, idxHide);
  const r = run(spoke('시험7인덱스없음'));
  renameSync(idxHide, idxPath);
  return r;
});

t('8. 허브 파일(data/policies/*.ts)도 막히나', false, () => {
  writeFileSync(logPath, logBak);
  return run('data/policies/시험8허브.ts', "  title: '시험 허브 타이틀',");
});

t('9. 글이 아닌 파일(registry.ts)은 간섭 없이 통과', true, () => run('data/spokes/registry.ts', "  'x': y,"));

t('10. 타이틀 없이 본문만 고치는 수정은 통과', true, () => run(spoke('아무거나'), "  intro: '본문만 고친다',"));

t('11. 캡처를 한 장도 안 연 세션이 글을 쓰려 하면', false, () => {
  addEntry('시험11안봄', '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"');
  clearSeen();
  const r = run(spoke('시험11안봄'));
  markSeen();
  return r;
});

t('12. 캡처를 연 세션이면 통과', true, () => {
  addEntry('시험12봄', '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"');
  markSeen();
  return run(spoke('시험12봄'));
});

t('13. 다른 세션이 연 기록은 내 세션에 안 쳐준다', false, () => {
  addEntry('시험13남의세션', '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"');
  writeFileSync(seenPath, JSON.stringify({ session_id: 'someone-else', file: '보험타이틀.png', at: new Date().toISOString() }) + String.fromCharCode(10), 'utf8');
  const r = run(spoke('시험13남의세션'));
  markSeen();
  return r;
});

t('14. 버튼 목적지를 안 열었으면 (2단계)', false, () => {
  addEntry('시험14목적지', '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"');
  writeFileSync(seenPath, line({kind:'capture-read',file:'보험타이틀.png'}) + line({kind:'screenshot',file:'x.png'}), 'utf8');
  const r = run(spoke('시험14목적지'));
  markAll();
  return r;
});

t('15. 1차 출처 캡처를 안 찍었으면 (3단계)', false, () => {
  addEntry('시험15원문캡처', '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"');
  writeFileSync(seenPath, line({kind:'capture-read',file:'보험타이틀.png'}) + line({kind:'navigate',url:OK_URL}), 'utf8');
  const r = run(spoke('시험15원문캡처'));
  markAll();
  return r;
});

let fail = 0;
for (const c of T) {
  const r = c.fn();
  const ok = r.pass === c.expectPass;
  if (!ok) fail++;
  console.log(`${ok ? 'OK  ' : '★실패'} ${c.name} → ${r.pass ? '통과' : '차단'} (기대 ${c.expectPass ? '통과' : '차단'})`);
  if (!r.pass && r.msg) console.log(`       ${r.msg.slice(0, 110)}`);
}
writeFileSync(logPath, logBak, 'utf8');
if (existsSync(idxHide)) renameSync(idxHide, idxPath);
if (seenBak === null) { try { unlinkSync(seenPath); } catch {} } else writeFileSync(seenPath, seenBak, 'utf8');
console.log(`\n${T.length}종 중 ${T.length - fail}종 기대대로. 실패 ${fail}종.`);
console.log(`title-log 원복: ${readFileSync(logPath, 'utf8') === logBak ? '확인' : '★어긋남★'}`);
process.exit(fail ? 1 : 0);
