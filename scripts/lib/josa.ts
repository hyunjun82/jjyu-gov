/**
 * josa.ts — 한국어 조사 판정 한 곳 (2026-08-27 신설)
 *
 * 왜 빼냈나 (사장님 지적 — "100개 작성 후 또 오차 있어서 진행하면 사용량 2~3배 시간도 2~3배야")
 *   맞다. 오늘만 두 번 그랬다.
 *     · 보험 50편을 다 쓰고 나서 "상담 불가과"·"상담원가" 를 발견해 전부 다시 찍었다
 *     · 통신·온라인 30편을 다 쓰고 나서 "유튜브은"·"딜라이브은" 을 발견해 또 다시 찍었다
 *   두 번째가 특히 뼈아프다 — 생성기는 josa() 를 갖고 있었는데 그 한 자리만 안 거쳤다.
 *   게이트가 있었으면 30편이 아니라 1편에서 걸렸다.
 *
 *   그런데 게이트가 조사를 자기 식으로 다시 계산하면 판정이 갈린다.
 *   (CLAUDE.md — "게이트마다 다르게 찾으면 판정이 갈리고, 소급 차단하면 사람이 게이트를 끈다")
 *   그래서 생성기와 게이트가 이 파일 하나를 같이 쓴다.
 *
 * 숫자·영문도 본다
 *   1544-7004 뒤에는 "와" 다 (4 = 사, 받침 없음). 실제로 "1544-7004과" 가 나갔다.
 *   CMB 뒤에는 "는" (비), HCN 뒤에는 "은" (엔). 영문 약자는 한글 발음의 받침을 따른다.
 */

/** 한 자리 숫자를 한글로 읽었을 때 받침이 있는가 — 일(ㄹ) 삼(ㅁ) 육(ㄱ) 칠(ㄹ) 팔(ㄹ) 영(ㅇ) */
const JONG_NUM: Record<string, boolean> = {
  '0': true, '1': true, '2': false, '3': true, '4': false,
  '5': false, '6': true, '7': true, '8': true, '9': false,
};

/** 끝 글자에 받침이 있는가 */
export const jong = (w: string): boolean => {
  const m = String(w).replace(/[)\]\s"'’」』.,]+$/, '').match(/[가-힣0-9a-zA-Z]$/);
  if (!m) return false;
  const ch = m[0];
  if (/[0-9]/.test(ch)) return JONG_NUM[ch];
  const c = ch.charCodeAt(0);
  if (c >= 0xac00 && c <= 0xd7a3) return (c - 0xac00) % 28 !== 0;
  /* 영문 약자는 한글 발음의 받침을 따른다 — L(엘) M(엠) N(엔) R(알) 만 받침이 있다 */
  return /[lmnr]$/i.test(ch);
};

/** 끝 글자의 받침이 ㄹ인가 — "으로/로" 가 갈린다 */
export const rieul = (w: string): boolean => {
  const m = String(w).replace(/[)\]\s"'’」』.,]+$/, '').match(/[가-힣0-9]$/);
  if (!m) return false;
  if (/[0-9]/.test(m[0])) return m[0] === '1' || m[0] === '7' || m[0] === '8';
  const c = m[0].charCodeAt(0);
  return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 === 8;
};

export type JosaPair = '과' | '이' | '은' | '을' | '으로';

/** 앞말에 맞는 조사를 고른다. pair 에는 받침 있을 때 쓰는 쪽을 넣는다 */
export const josa = (w: string, pair: JosaPair): string => {
  if (pair === '으로') return !jong(w) || rieul(w) ? '로' : '으로';
  return jong(w) ? pair : ({ 과: '와', 이: '가', 은: '는', 을: '를' } as const)[pair];
};

/** 앞말 + 조사를 한 번에 (생성기에서 제일 많이 쓰는 꼴) */
export const withJosa = (w: string, pair: JosaPair): string => `${w}${josa(w, pair)}`;

/* 게이트가 쓰는 짝 — 한쪽이 나오면 다른 쪽이 맞는지 본다 */
export const JOSA_PAIRS: [JosaPair, string][] = [
  ['과', '와'], ['이', '가'], ['은', '는'], ['을', '를'], ['으로', '로'],
];
