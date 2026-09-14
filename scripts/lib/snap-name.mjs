/**
 * URL → 저장본 파일명. scripts/fetch-source.ts · scripts/lib/evidence.ts 의 snapName 과 같은 규칙이어야 한다.
 * (mjs 파이프라인이 ts 를 import 할 수 없어 한 줄을 여기 둔다 — 규칙이 바뀌면 셋을 같이 바꾼다)
 */
export function snapName(u) {
  return String(u).replace(/^https?:\/\//, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 120) + ".txt";
}
