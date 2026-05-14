/**
 * lib/title-generator.ts
 *
 * KB Think 스타일 타이틀 자동 생성기.
 * 정책당 6개 페이지(hub + 5 spoke)에 대해 키워드 5-7개를 자연스럽게 묶은 타이틀 생성.
 *
 * 사용 예:
 *   import { genTitle, TitleContext } from '@/lib/title-generator';
 *   const ctx: TitleContext = {
 *     k1: '신청 자격', k2: '금액', k3: '사용처',
 *     compare: '부모급여',
 *     amt1: '첫째', amt2: '둘째',
 *     edge1: '외국인 부모', edge2: '보호시설 아동',
 *     exclude: '제외 업종',
 *     examples: '마트·병원·온라인',
 *     bonus: '출산축하금',
 *     deadline: '60일 이내',
 *     q: '누가 받나',
 *   };
 *   const title = genTitle('hub', '첫만남 이용권', ctx);
 *   // → "첫만남 이용권 신청 자격, 금액, 사용처 | 부모급여와 차이는?"
 */

export type Role = 'hub' | 'amount' | 'apply' | 'eligibility' | 'usage' | 'overlap';

export interface TitleContext {
  // hub용 키워드 3개 + 비교 정책 1개
  k1: string;
  k2: string;
  k3: string;
  compare: string;

  // amount: 금액 구분 2개 + 특수 케이스 1개 + 의문 1개
  amt1: string;
  amt2: string;
  amtCase: string;     // ex) 쌍둥이 합산

  // apply: 신청 채널·서류 등 2개 + 마감 1개
  applyK1: string;     // ex) 신청 방법 (보통 고정)
  applyK2: string;     // ex) 필요 서류
  deadline: string;    // ex) 60일 이내

  // eligibility: 엣지 케이스 2개 + 의문
  edge1: string;
  edge2: string;
  eligQ: string;       // ex) 누가 받나

  // usage: 사용처/사용기한 + 제외 + 예시
  usageK1: string;
  usageK2: string;
  exclude: string;
  examples: string;

  // overlap: 비교 정책 2개 + 보너스
  overlap1: string;
  overlap2: string;
  bonus: string;
}

/**
 * 역할별 타이틀 패턴.
 * 각 역할은 키워드 5-7개를 자연체로 묶는다.
 * 사이트명·플랫폼명은 박지 않는다 (검색 의도 외부로 새지 않도록).
 */
const PATTERNS: Record<Role, (kw: string, c: TitleContext) => string> = {
  hub: (kw, c) =>
    `${kw} ${c.k1}, ${c.k2}, ${c.k3} | ${c.compare}와 차이는?`,

  amount: (kw, c) =>
    `${kw} 금액, ${c.amt1} ${c.amt2} 차이 | ${c.amtCase} 합산은?`,

  apply: (kw, c) =>
    `${kw} ${c.applyK1}, ${c.applyK2} | ${c.deadline} 끝내기`,

  eligibility: (kw, c) =>
    `${kw} 신청 자격, ${c.edge1}, ${c.edge2} | ${c.eligQ}?`,

  usage: (kw, c) =>
    `${kw} ${c.usageK1}, ${c.usageK2}, ${c.exclude} | ${c.examples} 정리`,

  overlap: (kw, c) =>
    `${kw} ${c.overlap1} ${c.overlap2} 중복 | ${c.bonus}까지 다 받기`,
};

/**
 * 메인 함수. 역할 + 키워드 + ctx → 타이틀 문자열.
 */
export function genTitle(role: Role, keyword: string, ctx: TitleContext): string {
  const fn = PATTERNS[role];
  if (!fn) throw new Error(`Unknown role: ${role}`);
  return fn(keyword, ctx);
}

/**
 * 6개 페이지 타이틀 일괄 생성.
 */
export function genAllTitles(keyword: string, ctx: TitleContext): Record<Role, string> {
  return {
    hub: genTitle('hub', keyword, ctx),
    amount: genTitle('amount', keyword, ctx),
    apply: genTitle('apply', keyword, ctx),
    eligibility: genTitle('eligibility', keyword, ctx),
    usage: genTitle('usage', keyword, ctx),
    overlap: genTitle('overlap', keyword, ctx),
  };
}

/**
 * 타이틀에 들어간 핵심 키워드 추출 (검증용).
 * verify-quality.ts Q11(타이틀-본문 일치)에서 사용.
 */
export function extractKeywords(role: Role, ctx: TitleContext): string[] {
  const map: Record<Role, string[]> = {
    hub: [ctx.k1, ctx.k2, ctx.k3, ctx.compare],
    amount: [ctx.amt1, ctx.amt2, ctx.amtCase],
    apply: [ctx.applyK1, ctx.applyK2, ctx.deadline],
    eligibility: [ctx.edge1, ctx.edge2, ctx.eligQ],
    usage: [ctx.usageK1, ctx.usageK2, ctx.exclude, ctx.examples],
    overlap: [ctx.overlap1, ctx.overlap2, ctx.bonus],
  };
  return map[role];
}
