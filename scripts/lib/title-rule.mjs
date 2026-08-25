/* 타이틀 공식의 단일 소스 — [메인키워드 + 세부키워드 + 후킹] + 종결.
 *
 * 왜 여기로 뺐나 (2026-08-25)
 *   저장 훅(title-formula.mjs)만 이 규칙을 알고, 후보를 만드는 write.ts 는 몰랐다.
 *   그래서 1단계가 내놓은 후보 21개가 게이트를 하나도 통과하지 못했고,
 *   사장님이 고른 번호로 본문을 다 쓴 뒤에야 반려됐다. 되돌아가서 제목을 고쳤다.
 *   게이트가 뒤에만 있으면 "만들 때는 조용하다가 다 만든 뒤에 막는" 일이 매번 난다.
 *   규칙을 앞으로 옮긴다 — 후보를 만들 때부터 이 파일을 본다.
 *
 *   복사하지 말 것. 두 곳이 각자 목록을 들면 판정이 갈린다(evidence.ts 와 같은 이유).
 */

/* 세부키워드 — 사람이 메인키워드와 "같이 치는" 말 */
export const SUB = [
  '언제', '신청방법', '신청 방법', '방법', '사용처', '조회', '서류', '얼마',
  '금액', '조건', '자격', '기간', '대상', '준비물', '나이', '기준',
  '비교', '차이', '계산', '한도', '후기', '어디서', '어디로', '뭐뭐', '몇',
  /* 문의·창구 영역 (2026-08-25 추가).
     "db손해보험 고객센터" 로 1단계를 돌렸더니 후보가 0개였다.
     전화번호·위치·시간은 메인키워드와 같이 치는 대표적인 말인데 목록에 없었다.
     목록이 좁으면 새 영역에서 후보가 통째로 사라진다. */
  '전화번호', '번호', '연락처', '위치', '주소', '시간', '영업시간', '운영시간',
  '연결', '접수', '상담', '창구', '지점',
];

/* 후킹 — 맨 뒤에 붙는 클릭 이유 (docs/hook-patterns.md 4축) */
export const HOOK = [
  '손해', '놓치면', '모르면', '빠뜨리면', '헛걸음', '못 받', '안 되', '안 나온',
  '날린', '날아', '깎', '토해', '거절', '탈락', '제외', '아니다', '아닙니다',
  '며칠', '마감', '남았', '까지만', '늦으면', '지나면',
  '되나', '될까', '있을까', '없을까', '가능할까', '얼마나', '왜',
];

/* 행동어 — 허브는 정보형으로 끝나면 안 된다 */
export const ACTION = [
  '신청 방법', '신청방법', '신청', '가입 방법', '가입방법', '가입',
  '조회', '발급', '접수', '다운로드', '예약', '등록', '해지', '청구', '환급받',
];

/* 종결 — 해요체·합니다체 금지. '요'는 어미일 때만 막는다(주요·필요·개요는 통과) */
const HAEYO = /(?:나요|까요|세요|어요|아요|여요|해요|에요|예요|데요|래요|워요|봐요|져요|죠)[.!?]*$/;
const HAPNIDA = /(?:다)[.!?]*$/;

export const hasSub    = (t) => SUB.some((k) => t.includes(k));
export const hasHook   = (t) => HOOK.some((k) => t.includes(k)) || /[?？]/.test(t);
export const hasAction = (t) => ACTION.some((k) => t.includes(k));
export const badEnding = (t) => HAEYO.test(String(t).trim()) || HAPNIDA.test(String(t).trim());

/** 게이트를 통과하나. isHub 면 행동어까지 본다. */
export function judgeTitle(t, isHub = false) {
  const r = {
    sub: hasSub(t),
    hook: hasHook(t),
    action: !isHub || hasAction(t),
    ending: !badEnding(t),
  };
  return { ...r, pass: r.sub && r.hook && r.action && r.ending };
}

/** 못 채운 축 이름 (사람에게 보여줄 용도) */
export function missingAxes(t, isHub = false) {
  const r = judgeTitle(t, isHub);
  const out = [];
  if (!r.sub) out.push('세부키워드');
  if (!r.hook) out.push('후킹');
  if (!r.action) out.push('행동어');
  if (!r.ending) out.push('종결');
  return out;
}
