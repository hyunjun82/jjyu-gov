/**
 * 독립유공자 명단 데이터 접근 — 국가보훈부 공공데이터 (2026-07-22 수정본, 18,776명)
 * 출처: 공공데이터포털 「국가보훈부_독립유공자 명단」 (데이터 15125208, 이용허락범위 제한 없음)
 * 빌드 타임에만 읽는다 — 클라이언트로 전체 데이터를 보내지 않는다.
 */
import raw from '@/data/patriots.json';

export type Patriot = {
  n: string;  // 성명
  b: string;  // 출생 연도
  d: string;  // 사망 연도
  r1: string; // 본적(도)
  r2: string; // 본적(시군)
  m: string;  // 운동계열
  h: string;  // 훈격
  y: string;  // 포상년도
};

export const PATRIOTS: Patriot[] = raw as Patriot[];

const count = <K extends string>(get: (p: Patriot) => K | '') => {
  const map = new Map<string, number>();
  for (const p of PATRIOTS) {
    const k = get(p);
    if (!k) continue;
    map.set(k, (map.get(k) ?? 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
};

/** 성씨(첫 글자) → 인원 수, 많은 순 */
export const SURNAMES = count((p) => (p.n[0] as string) || '');
/** 본적 도 단위 → 인원 수 */
export const REGIONS = count((p) => p.r1);
/** 운동계열 → 인원 수 */
export const MOVEMENTS = count((p) => p.m);

export const bySurname = (s: string) => PATRIOTS.filter((p) => p.n.startsWith(s));
export const byRegion = (r: string) => PATRIOTS.filter((p) => p.r1 === r);
export const byMovement = (m: string) => PATRIOTS.filter((p) => p.m === m);
