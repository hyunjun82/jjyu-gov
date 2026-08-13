/* title-log 훅 자체 시험 10종 — node scripts/hooks/selftest-title-log.mjs
 * 통과만 세지 않는다. 뚫리는 경로를 일부러 넣어 잡히는지 본다.
 * 2026-08-11 신설(허위 인용 8건이 통과한 뒤). */
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, appendFileSync, existsSync, renameSync, mkdirSync, unlinkSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const logPath = join(root, 'docs', 'title-log.md');
const idxPath = join(root, 'reference', 'titles', 'INDEX.md');
const idxHide = idxPath + '.hidden';
const logBak = readFileSync(logPath, 'utf8');

const SID = 'selftest-session';
const DEF = "  h1: '테스트 실비 청구하기'," + String.fromCharCode(10) + "  heroHook: '장면으로 시작하는 충분히 긴 서론입니다. 그럼 먼저 확인부터 하셔야겠죠.'," + String.fromCharCode(10) + "  heroAct: { label: 'ㄱ', href: 'https://www.silson24.or.kr/claim/web/' },";
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

/* 2단계(구성표 승인) 보조 — 구성표를 만들고, 사장님이 답하신 흔적을 남긴다.
   순서가 규칙이다: 구성표 저장 → 사장님 발언 → 본문 저장 */
const outPath = (s) => join(root, 'scripts', 'output', `outline-${s}.md`);
const OUTLINE_OK = [
  '## hero (서론)', '고지서를 받아든 순간부터 시작한다.', '',
  '## 소제목', '- 확정일자 인터넷 발급 되나요?', '- 수수료 얼마인가요?', '- 주민센터와 뭐가 다른가요?', '',
  '## 버튼', '- 슬롯 qa2 — 확정일자 받으러 가기 — https://www.iros.go.kr/',
].join(String.fromCharCode(10));
const writeOutline = (s, body = OUTLINE_OK) => {
  mkdirSync(join(root, 'scripts', 'output'), { recursive: true });
  writeFileSync(outPath(s), body, 'utf8');
  appendFileSync(seenPath, line({ kind: 'outline-write', slug: s }), 'utf8');
};
const userTurn = () => appendFileSync(seenPath, line({ kind: 'user-turn' }), 'utf8');
const cleanOutline = (s) => { try { unlinkSync(outPath(s)); } catch {} };
/* 통과를 기대하는 시험은 승인까지 끝난 상태를 만든다 */
const approve = (s) => { writeOutline(s); userTurn(); };
/* 저장이 끝난 뒤 PostToolUse(record-session-activity.mjs)가 찍는 완료 도장을 흉내 낸다.
   2026-08-13: 전에는 require-title-log 가 직접 찍었는데, PreToolUse 훅이 나란히 돌아
   다른 훅이 막은 호출에도 도장이 찍히는 사고가 실사용에서 났다. 도장 자리를 옮겼으므로
   시험도 "저장된 뒤에만 찍힌다"를 그대로 재현한다. */
const stamp = (s) => appendFileSync(seenPath, line({ kind: 'article-write', file: s }), 'utf8');
const OUTLINES = [];
const useOutline = (s) => { OUTLINES.push(s); approve(s); return s; };
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
  useOutline('시험3진짜');
  return run(spoke('시험3진짜'));
});

t('4. 캡처 줄은 맞는데 패턴 줄이 없음', false, () => {
  addEntry('시험4패턴없음', '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"', '- 타이틀만 있음');
  return run(spoke('시험4패턴없음'));
});

/* markAll() 은 "이 글을 위해 캡처·목적지·원문을 새로 확인했다"는 뜻이다.
   글 한 편마다 새로 요구하므로(19번 시험) 통과를 기대하는 시험은 매번 호출한다. */
t('5. 둥근 따옴표(“ ”)로 적어도 인식', true, () => {
  markAll();
  addEntry('시험5따옴표', '- 캡처: 대출 타이틀.png — “스트레스 DSR 3단계 시행, 대출 한도 얼만큼 줄었을까?”');
  useOutline('시험5따옴표');
  return run(spoke('시험5따옴표'));
});

t('6. 제목 앞부분만 인용(부분 일치 허용)', true, () => {
  markAll();
  addEntry('시험6부분', '- 캡처: 연금 타이틀.png — "퇴직연금 디폴트옵션 언제 적용될까?"');
  useOutline('시험6부분');
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
  useOutline('시험12봄');
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

t('16. heroHook 이 없는 새 글 (서론 없이 버튼만)', false, () => {
  addEntry('시험16서론없음', '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"');
  markAll();
  return run(spoke('시험16서론없음'), "  h1: '테스트 실비 청구하기'," + String.fromCharCode(10) + "  heroAct: { label: 'ㄱ', href: OK_URL },");
});

t('17. 라벨이 16자를 넘으면', false, () => {
  addEntry('시험17긴라벨', '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"');
  markAll();
  const body = "  h1: '테스트 실비 청구하기'," + String.fromCharCode(10)
    + "  heroHook: '장면으로 시작하는 충분히 긴 서론입니다. 그럼 먼저 확인부터 하셔야겠죠.'," + String.fromCharCode(10)
    + "  heroAct: { label: '내 대학이 되는지 확인하고 신청하기', href: OK_URL },";
  return run(spoke('시험17긴라벨'), body);
});

t('18. 서론 있고 라벨 짧으면 통과', true, () => {
  addEntry('시험18정상', '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"');
  markAll();
  const body = "  h1: '테스트 실비 청구하기'," + String.fromCharCode(10)
    + "  heroHook: '장면으로 시작하는 충분히 긴 서론입니다. 그럼 먼저 확인부터 하셔야겠죠.'," + String.fromCharCode(10)
    + "  heroAct: { label: '실비 청구하기', href: OK_URL },";
  useOutline('시험18정상');
  return run(spoke('시험18정상'), body);
});

/* 19~20: 검사 단위가 "세션"이 아니라 "글 한 편"인지 (2026-08-13 신설).
   실제 사고: 8/11 07:56 에 캡처 한 장을 열자 8/12 04:51 까지 20.9시간 동안
   쓴 글이 전부 무검사 통과했다. 8/12 하루에 16편을 썼는데 캡처는 6번 열었다.
   훅이 acts.some(...) 으로 세션 전체를 봤기 때문이고, 이 시험이 없어서 안 잡혔다. */
const bodyOK = "  h1: '테스트 실비 청구하기'," + String.fromCharCode(10)
  + "  heroHook: '장면으로 시작하는 충분히 긴 서론입니다. 그럼 먼저 확인부터 하셔야겠죠.'," + String.fromCharCode(10)
  + "  heroAct: { label: '실비 청구하기', href: OK_URL },";
const capLine = '- 캡처: 보험타이틀.png — "비뇨기과 실비 보험 청구 가능할까? 요로결석, STD 검사 보장 기준"';

t('19. 캡처 한 장으로 두 번째 글을 쓰면', false, () => {
  markAll();
  addEntry('시험19첫글', capLine);
  useOutline('시험19첫글');
  run(spoke('시험19첫글'), bodyOK);            // 1편째 — 저장 성공
  stamp('시험19첫글');                          // PostToolUse 가 찍는 완료 도장
  addEntry('시험19둘째글', capLine);
  return run(spoke('시험19둘째글'), bodyOK);    // 2편째 — 캡처를 새로 안 열었다
});

t('20. 두 번째 글도 캡처를 새로 열면 통과', true, () => {
  markAll();
  addEntry('시험20첫글', capLine);
  useOutline('시험20첫글');
  run(spoke('시험20첫글'), bodyOK);
  stamp('시험20첫글');
  markAll();                                   // 캡처·목적지·원문을 새로 확인
  addEntry('시험20둘째글', capLine);
  useOutline('시험20둘째글');
  return run(spoke('시험20둘째글'), bodyOK);
});

/* 21~24: 2단계(구성표 승인)가 강제되는가 (2026-08-13 신설).
   3주간 재작업 223건 중 116건(43%)이 문구·버튼에서 났다. 이 단계만 장치가 없었다. */
t('21. 구성표 없이 본문을 쓰면', false, () => {
  markAll();
  addEntry('시험21구성표없음', capLine);
  cleanOutline('시험21구성표없음');
  return run(spoke('시험21구성표없음'), bodyOK);
});

t('22. 구성표는 있는데 사장님 확인이 없으면', false, () => {
  markAll();
  addEntry('시험22미승인', capLine);
  writeOutline('시험22미승인');           // 구성표만 만들고 바로 본문 (승인 없음)
  const r = run(spoke('시험22미승인'), bodyOK);
  cleanOutline('시험22미승인');
  return r;
});

t('23. 구성표 올린 뒤 사장님이 답하시면 통과', true, () => {
  markAll();
  addEntry('시험23승인', capLine);
  writeOutline('시험23승인');
  userTurn();                             // 사장님 발언 = 승인 시점
  const r = run(spoke('시험23승인'), bodyOK);
  cleanOutline('시험23승인');
  return r;
});

t('24. 구성표에 버튼 목적지가 없으면', false, () => {
  markAll();
  addEntry('시험24불완전', capLine);
  writeOutline('시험24불완전', '## hero (서론)' + String.fromCharCode(10) + '- 되나요?' + String.fromCharCode(10) + '- 얼마?' + String.fromCharCode(10) + '- 언제?');
  userTurn();
  const r = run(spoke('시험24불완전'), bodyOK);
  cleanOutline('시험24불완전');
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
for (const o of OUTLINES) cleanOutline(o);
console.log(`\n${T.length}종 중 ${T.length - fail}종 기대대로. 실패 ${fail}종.`);
console.log(`title-log 원복: ${readFileSync(logPath, 'utf8') === logBak ? '확인' : '★어긋남★'}`);
process.exit(fail ? 1 : 0);
