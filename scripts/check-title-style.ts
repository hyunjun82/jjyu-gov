/**
 * 타이틀 스타일 게이트 — 후보를 사용자에게 제시하기 전에 스스로 거른다
 *
 * 배경 (2026-08-07): "전체적으로 니가 뽑은 타이틀 존나 부자연스러워".
 * 원인은 실검색어 조각을 그냥 이어붙인 것. 정본 docs/title-corpus-kb.md 의
 * 패턴 8개에 걸리지 않으면 공고문이 된다. 그 판정을 사람이 아니라 여기서 한다.
 *
 * 사용:
 *   npx tsx scripts/check-title-style.ts "타이틀1" "타이틀2" ...
 *   npx tsx scripts/check-title-style.ts --file candidates.txt   (한 줄에 하나)
 *
 * 종료코드: 하나라도 실패면 1 (후보 제시 전 자가 점검용)
 */

type Check = { code: string; name: string; test: (t: string) => boolean; hint: string };

/* ── 패턴 8개 (docs/title-corpus-kb.md) — 하나 이상 걸려야 통과 ── */
const PATTERNS: { key: string; label: string; re: RegExp }[] = [
  { key: '①', label: '전환·해지 검증형', re: /(전환해도|전환하면|갈아타[기도]|갈아탈까|해지하면|해지해도|바꿔도|계속 (둬도|내도))/ },
  { key: '②', label: 'A vs B 유리형', re: /(vs|어떤 게|어느 쪽이|차이(는|와)|유리할까)/ },
  { key: '③', label: '절차 처음~끝 묶음형', re: /(부터[^,]{0,20}까지|까지$|까지\?$)/ },
  { key: '④', label: '자기대입 시나리오형', re: /(다면\?|받(고 있)?는데|났는데|됐는데|하는데도|나올까|가능할까|받을 수 있을까|어떻게 되나|되나[,\s]|되나$|해당될까|되나요\?|못 받나요\?)/ },
  { key: '⑤', label: '손실 계산형', re: /(얼마나? (깎|줄|덜|더|떼|나오|받)|깎일까|얼마나 오르|얼마 받|얼마일까|매달 얼마|며칠 받|언제 (되|나오)|몇 살까지|언제까지|평생 (받|나오))/ },
  { key: '⑥', label: '함정 경고형', re: /(못 받(는|나|을까|아)|안 되(나|는)|늦으면|안 하면|놓치면|빠뜨리면|불이익|단점|이유는\?)/ },
  { key: '⑦', label: '도구로 끝내기형', re: /(1분이면|간편|계산기|모의계산|조회까지|한 번에)/ },
  { key: '⑧', label: '바뀌는 것 예고형', re: /(바뀌는|신설|달라지(는|나)|개편|전환 \| |부터 달라)/ },
  /* ⑨ 2026-08-07 추가: 첫 회귀 테스트에서 사장님 정본 "무조건 신청하라던데, 내 감액
     계산해보면 다를까?"가 어느 패턴에도 안 걸려 발견. 유행 문구를 타고 들어와 검증으로
     받아치는 형 — 실검색어에 유행 문구가 있으면 이 형 후보를 반드시 1개 낸다. */
  { key: '⑨', label: '통념 받아치기형', re: /(라던데|다던데|맞을까|다를까|진짜일까|정말일까|사실일까)/ },
];

/* ── 금지 규칙 (CLAUDE.md 타이틀 조립 2대 금지 + D축) ── */
const CHECKS: Check[] = [
  {
    code: 'A',
    name: '~법 종결 도배',
    test: (t) => /(하는 법|받는 법|내는 법|법)\s*$/.test(t.trim()),
    hint: '종결을 물음형·시나리오형·"…까지"로 바꾼다 (허브 1233개 중 422개가 ~법으로 끝난 전력)',
  },
  {
    code: 'B',
    name: '자격 숫자로 모수 좁힘',
    test: (t) =>
      /(\d+\s*년\s*\d+\s*개월|재직\s*\d+\s*년|가입\s*\d+\s*년|\d+\s*년\s*이상\s*(근무|재직|납부))/.test(t),
    hint: '자격 숫자(19년 6개월·재직 10년)는 대상을 잘라낸다. 본문 소제목으로 내리고 타이틀은 넓게',
  },
  {
    code: 'C',
    name: '행동 동사 기계 부착',
    test: (t) => /(확인|계산|조회|신청)하기\s*$/.test(t.trim()),
    hint: '"~확인하기" 꼬리를 못박으면 공고문이 된다. 행동은 문장 안에 자연스럽게',
  },
  {
    code: 'D',
    name: '총정리 남발',
    test: (t) => /총정리/.test(t) && t.length > 34,
    hint: '긴 타이틀에 총정리까지 붙으면 나열형이 된다. 하나는 뺀다',
  },
  {
    code: 'E',
    name: '길이 초과',
    test: (t) => t.trim().length > 45,
    hint: '45자 넘으면 검색결과에서 잘린다',
  },
  {
    /* 2026-08-07 사장님 지시: "타이틀 중에 해요 합니다 요 다는 빼는 걸로" */
    code: 'F',
    name: '해요·합니다체 종결',
    test: (t) => /(해요|하세요|해보세요|합니다|입니다|돼요|되세요|드려요|드립니다|있어요|없어요|해야 해요|[가-힣]요[!.]?|[는온간된한]다[!.]?)\s*$/.test(t.trim()),
    hint: '타이틀 종결에 해요체·합니다체·~다 금지 — 물음형("깎일까?")·명사형("조회까지")으로 끝낸다',
  },
];

function evaluate(title: string) {
  const hits = PATTERNS.filter((p) => p.re.test(title));
  const viols = CHECKS.filter((c) => c.test(title));
  return { hits, viols };
}

const args = process.argv.slice(2);
let titles: string[] = [];
if (args[0] === '--file') {
  titles = require('fs').readFileSync(args[1], 'utf8').split('\n').map((s: string) => s.trim()).filter(Boolean);
} else {
  titles = args;
}

if (titles.length === 0) {
  console.log('사용: npx tsx scripts/check-title-style.ts "타이틀" ... | --file 목록.txt');
  process.exit(0);
}

console.log('============================================================');
console.log(' 타이틀 스타일 검사 — 검색어 조각 × KB 패턴인가');
console.log('============================================================\n');

let fail = 0;
for (const t of titles) {
  const { hits, viols } = evaluate(t);
  const ok = hits.length > 0 && viols.length === 0;
  if (!ok) fail++;
  console.log(`${ok ? '✅' : '❌'} ${t}`);
  console.log(`   패턴: ${hits.length ? hits.map((h) => `${h.key} ${h.label}`).join(', ') : '없음 — 나열형이다'}`);
  for (const v of viols) console.log(`   [${v.code} ${v.name}] ${v.hint}`);
  if (!hits.length) console.log('   → docs/title-corpus-kb.md 패턴 8개 중 하나로 다시 조립한다');
  console.log('');
}

console.log(`검사 ${titles.length}개 / 부적합 ${fail}개`);
if (fail > 0) {
  console.log('\n 부적합 후보는 사용자에게 제시하지 않는다 — 다시 조립한다.');
  process.exit(1);
}
console.log('\n ✅ 전부 통과 — 이 후보들은 제시해도 된다');
