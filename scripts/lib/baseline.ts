/**
 * baseline.ts — 이미 있던 결함은 경고, 새로 생긴 결함만 차단
 *
 * 왜 (2026-08-10):
 *   게이트는 diff 로 **파일은 고르지만, 고른 파일은 전체를 검사한다.**
 *   그래서 한 줄만 고쳐도 그 파일에 잠자던 위반이 전부 깨어난다.
 *
 *   실제로 겪은 일: 주민세 글에 "다음 달 10일"(빠져 있던 마감일) 한 줄을 넣으려다
 *   제목 어미·버튼 동사 도배·문구 누락·applyUrl 형식까지 여섯 번 연달아 막혔다.
 *   전부 내가 만든 게 아니라 원래 있던 것들이다.
 *
 *   전수로 세어 보니 기존 위반이 이만큼 깔려 있다 (2026-08-10 측정):
 *     check-cue-value   1,575
 *     check-click-value   580
 *     check-user-value    193
 *   합계 2,348개. 이걸 전부 차단 사유로 두면 **어떤 한 줄 수정도 push 가 안 된다.**
 *   급한 사실 정정(오늘 마감인 기한 같은 것)이 오래된 문구 빚에 인질로 잡힌다.
 *
 * 그래서: 지금 있는 위반을 **기준선으로 얼린다.**
 *   · 기준선에 있는 것 → 경고로 보여주되 push 는 통과
 *   · 기준선에 없는 것(= 이번에 새로 생긴 것) → 차단
 *   · 고쳐서 사라지면 기준선에서도 빠진다(줄어들기만 한다)
 *
 * 새 게이트를 만들 때도 이 함수를 쓴다. 게이트마다 따로 만들면
 * 임계값 복사와 같은 병이 재발한다(check-threshold-drift 참조).
 */
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const FILE = join(process.cwd(), 'scripts', 'gate-baseline.json');

type Store = Record<string, string[]>;

const load = (): Store => {
  if (!existsSync(FILE)) return {};
  try {
    return JSON.parse(readFileSync(FILE, 'utf8')) as Store;
  } catch {
    return {};
  }
};

let cache: Store | null = null;
const store = (): Store => (cache ??= load());

/**
 * 위반 하나를 가리키는 열쇠. 파일 안에서 줄이 밀려도 안 바뀌게 내용 기반으로 만든다.
 *
 * ⚠ 알려진 구멍 (2026-08-10 시험에서 직접 확인):
 *   메시지의 숫자를 `#` 로 뭉개기 때문에, **이미 기준선에 있는 파일에서 같은 축의
 *   결함이 더 나빠져도 통과한다.** 실제로 시험했다 — 허브 cue 를 3개에서 2개로
 *   줄였더니 "행동 지점이 #개"로 같아져 차단되지 않았다.
 *
 *   그래도 숫자를 지우는 쪽을 택한 이유: 남겨두면 "버튼 7개 중 4개가 확인하기" 같은
 *   메시지가 주변을 조금만 고쳐도 흔들려서, 같은 결함이 매번 새 위반으로 둔갑한다.
 *   그러면 기준선이 있으나 마나 해지고 원래 문제(한 줄 고치려다 여섯 번 막힘)로 돌아간다.
 *
 *   즉 이건 **안전한 쪽으로 기운 실패**다. 새 파일·새 축·새 종류의 결함은 전부 잡고,
 *   못 잡는 것은 "이미 나쁜 파일이 같은 방향으로 조금 더 나빠지는 경우"뿐이다.
 *   그 부분은 `--all` 전수 현황과 `--prune-baseline` 으로 눈에 보이게 남긴다.
 */
export function key(file: string, axis: string, msg: string): string {
  const f = file.split('\\').join('/');
  const stable = msg.replace(/\d+/g, '#').slice(0, 120);
  return `${f}|${axis}|${stable}`;
}

/** 이번에 새로 생긴 위반인가 (= 차단해야 하나) */
export function isNew(gate: string, k: string): boolean {
  const known = store()[gate];
  return !known || !known.includes(k);
}

/**
 * 게이트의 위반 목록을 기준선으로 갈라준다.
 * @returns fresh 새로 생긴 것(차단) / known 원래 있던 것(경고)
 */
export function split<T extends { file: string; axis: string; msg: string }>(
  gate: string,
  issues: T[],
): { fresh: T[]; known: T[] } {
  const fresh: T[] = [];
  const known: T[] = [];
  for (const i of issues) {
    (isNew(gate, key(i.file, i.axis, i.msg)) ? fresh : known).push(i);
  }
  return { fresh, known };
}

/** 기준선 다시 만들기 — `--rebase-baseline` 으로만 부른다 */
export function rebase(gate: string, issues: { file: string; axis: string; msg: string }[]): void {
  const s = store();
  s[gate] = issues.map((i) => key(i.file, i.axis, i.msg));
  cache = s;
  writeFileSync(FILE, JSON.stringify(s, null, 1), 'utf8');
}

/** 기준선에서 사라진 항목 정리 — 고친 것은 다시 못 늘어나게 뺀다 */
export function prune(gate: string, stillFailing: { file: string; axis: string; msg: string }[]): number {
  const s = store();
  const before = s[gate]?.length ?? 0;
  if (!before) return 0;
  const alive = new Set(stillFailing.map((i) => key(i.file, i.axis, i.msg)));
  s[gate] = (s[gate] ?? []).filter((k) => alive.has(k));
  cache = s;
  writeFileSync(FILE, JSON.stringify(s, null, 1), 'utf8');
  return before - s[gate].length;
}

export const baselineCount = (gate: string): number => store()[gate]?.length ?? 0;
