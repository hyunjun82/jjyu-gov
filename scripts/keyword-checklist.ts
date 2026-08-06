/* 키워드 만능 체크리스트 — 글을 쓰기 전에 이 세 가지를 통과해야 한다 (2026-08-06)
 *
 * 출처: 본질센스 수강생 사례 영상($4/일 → $116/일, 페이지 RPM 110)에서 정리된 기준.
 *   제작자 본인이 "수익화 기준 3가지"로 명시한 것을 우리 파이프라인에 이식.
 *
 *   ① 잠재 트래픽  — 지금 시점에 그 키워드를 찾는 사람이 있는가
 *                    (7월에 크리스마스 키워드를 쓰면 노출돼도 수요가 없다)
 *   ② 노출 가능성  — 남이 아니라 "내가" 상위에 뜰 수 있는가
 *   ③ 들어올 이유  — 같은 제목이 즐비할 때 내 것을 누를 이유가 제목에 있는가
 *
 * 추가 축 (같은 영상):
 *   ④ 행동력 높은 독자층인가 — 연령대가 높은 독자(요양보호사·아침마당 류)는
 *      광고 클릭·전환이 많아 RPM이 높게 나오는 경향. 우리 기초연금·틀니·연금 클러스터가 여기 해당.
 *      ※ 경향이지 확정이 아니다. 최종 판단은 애드센스 페이지별 RPM 실측으로 한다.
 *
 * 사용: npx tsx scripts/keyword-checklist.ts "요양보호사 자격증"
 *       (collect-keywords 결과 JSON이 있으면 자동으로 읽어 ①을 채점)
 */
import fs from 'fs';
import path from 'path';

const kw = process.argv.slice(2).join(' ').trim();
if (!kw) {
  console.log('사용법: npx tsx scripts/keyword-checklist.ts "키워드"');
  process.exit(1);
}

/* ④ 행동력 높은 독자층 신호 — 연령대가 높거나 생계·건강이 걸린 주제 */
const HIGH_ACTION = [
  [/요양|간병|치매|틀니|임플란트|보청기|무릎|관절/, '고령 의료'],
  [/기초연금|국민연금|주택연금|농지연금|노령|은퇴|퇴직/, '노후·연금'],
  [/자격증|시험|취득|교육원|수료/, '자격 취득(중장년 다수)'],
  [/장례|상속|유산|묘지|납골/, '상속·장례'],
  [/보험|실손|암보험|치아보험/, '보험 결정'],
  [/대출|대환|회생|파산|채무/, '금융 결정'],
];

/* ① 시기성 — 지금(월) 수요가 있는 주제인가 */
const SEASON: [RegExp, number[], string][] = [
  [/연말정산|소득공제|세액공제/, [1, 2, 12], '연말정산철'],
  [/크리스마스|스키|눈꽃|방한/, [11, 12, 1], '겨울'],
  [/수시|원서|입시|졸업예정/, [8, 9, 12, 1], '입시철'],
  [/피서|물놀이|바캉스|휴가/, [6, 7, 8], '여름'],
  [/김장|난방|한파/, [10, 11, 12], '늦가을~겨울'],
  [/장마|폭우|침수/, [6, 7], '장마'],
  [/종합소득세/, [5, 6], '5월 신고'],
];

const month = Number(process.env.MONTH_OVERRIDE || new Date().getMonth() + 1);

console.log(`\n키워드: ${kw}\n${'='.repeat(50)}`);

/* ① 잠재 트래픽 */
const jsonPath = path.join(process.cwd(), 'scripts', 'output', `${kw}.json`);
let volumeNote = '수집 안 됨 — npx tsx scripts/collect-keywords.ts "' + kw + '" 먼저 실행';
if (fs.existsSync(jsonPath)) {
  const raw = fs.readFileSync(jsonPath, 'utf8');
  const count = (raw.match(/"/g) || []).length;
  const uniq = new Set([...raw.matchAll(/"([^"]{3,30})"/g)].map((m) => m[1])).size;
  volumeNote = `자동완성·연관 검색어 약 ${uniq}종 수집됨`;
}
const seasonHit = SEASON.find(([re]) => re.test(kw));
let seasonNote = '연중 수요 (시기 제약 없음)';
if (seasonHit) {
  const [, months, label] = seasonHit;
  seasonNote = months.includes(month)
    ? `✅ 지금이 ${label} — 시기 적중 (현재 ${month}월)`
    : `⚠️ ${label} 키워드인데 지금은 ${month}월 — 수요가 없을 때 쓰면 노출돼도 안 들어온다`;
}
console.log(`\n① 잠재 트래픽`);
console.log(`   검색어 규모: ${volumeNote}`);
console.log(`   시기성: ${seasonNote}`);

/* ② 노출 가능성 — 자동 판정 불가, 확인 절차를 강제 */
console.log(`\n② 노출 가능성 (사람이 확인)`);
console.log(`   [ ] 네이버에서 이 키워드 검색 → 1페이지가 대형 매체·병원광고로만 차 있지 않은가`);
console.log(`   [ ] 우리가 가진 각도(공식 조회처·해결형·계산기)가 상위 글들에 없는가`);
console.log(`   → 레드오션이면 키워드를 한 칸 옆으로 옮긴다 (예: "마운자로 가격" → "병원별 가격 조회")`);

/* ③ 들어올 이유 */
console.log(`\n③ 내 글에 들어올 이유 (타이틀)`);
console.log(`   [ ] 숫자·손실·기한·물음 중 하나가 제목에 있는가`);
console.log(`   [ ] 같은 제목이 즐비한 자리에 "그래도 이건 눌러야 할" 이유가 있는가`);
console.log(`   → 게이트가 자동 검사: npx tsx scripts/check-click-value.ts`);

/* ④ 행동력 높은 독자층 */
const actionHits = HIGH_ACTION.filter(([re]) => re.test(kw)).map(([, tag]) => tag);
console.log(`\n④ 독자층 행동력`);
if (actionHits.length) {
  console.log(`   ✅ 행동력 높은 층 신호: ${actionHits.join(', ')}`);
  console.log(`   → 연령대가 높거나 결정을 앞둔 독자는 광고 클릭·전환이 많아 RPM이 높게 나오는 경향`);
} else {
  console.log(`   신호 없음 — 트래픽은 나와도 RPM이 낮을 수 있다`);
  console.log(`   → 같은 주제라도 고령층·결정 직전 각도로 틀 수 있는지 본다`);
}

console.log(`\n${'='.repeat(50)}`);
console.log('※ ①③④는 참고 신호일 뿐, 확정은 애드센스 페이지별 RPM 실측이다.');
console.log('   우리 사이트에서 실제로 RPM이 높게 나온 키워드가 "나만의 키워드"다.\n');
