/**
 * changed-files.ts — 게이트가 "무엇이 바뀌었나"를 판정하는 공용 함수
 *
 * 왜 (2026-08-08):
 *   게이트를 만들 때마다 각자 git diff 를 읽었다. 그래서 같은 병이 순서대로 재발했다.
 *     · check-factsheet  — catSlug 한 줄 바꾼 41개가 팩트시트를 요구받아 push 차단
 *     · check-duplicate  — 내용 손대지도 않은 기존 글끼리 중복 14건으로 차단
 *     · check-cue-value  — 같은 이유로 연금 허브 26개 차단
 *   하나씩 고쳤더니 이번엔 같은 판정 로직이 3개 파일에 복사됐다.
 *   임계값 복사가 충돌을 만든 것과 정확히 같은 구조다(check-threshold-drift 참조).
 *   그래서 여기 한 곳에 둔다. 게이트를 새로 만들 때는 이 함수를 쓴다.
 *
 * 원칙: "바뀌었나"가 아니라 "무엇이 바뀌었나"를 본다.
 *   메타데이터(catSlug·cat·id 등)만 바뀐 파일은 내용 게이트의 대상이 아니다.
 */
import { execSync } from 'child_process';
import { existsSync } from 'fs';

export type ChangeKind = 'A' | 'M';

const sh = (cmd: string): string => {
  try {
    return execSync(cmd, { encoding: 'utf8', maxBuffer: 40 * 1024 * 1024 });
  } catch {
    return '';
  }
};

/** origin/main 대비 추가(A)·수정(M)된 파일. origin/main 이 없으면 HEAD~1 로 폴백 */
export function changedFiles(filter?: (f: string) => boolean): { file: string; kind: ChangeKind }[] {
  let raw = sh('git diff --name-status origin/main...HEAD');
  if (!raw.trim()) raw = sh('git diff --name-status HEAD~1');
  return raw
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => /^[AM]\t/.test(l))
    .map((l) => ({ kind: l[0] as ChangeKind, file: l.slice(2).trim() }))
    .filter((x) => existsSync(x.file))
    .filter((x) => (filter ? filter(x.file) : true));
}

/**
 * 그 파일의 변경이 특정 종류의 내용을 건드렸나.
 *
 * @param file   대상 파일
 * @param probe  추가·삭제된 줄에서 찾을 패턴 (하나라도 맞으면 true)
 *
 * 판단 불가(diff 를 못 읽음)면 true — 놓치는 것보다 한 번 더 보는 쪽이 안전하다.
 */
export function diffTouches(file: string, probe: RegExp): boolean {
  const d = sh(`git diff -U0 origin/main...HEAD -- "${file}"`);
  if (!d.trim()) return true;
  return d
    .split('\n')
    .filter((l) => (l.startsWith('+') || l.startsWith('-')) && !l.startsWith('+++') && !l.startsWith('---'))
    .some((l) => probe.test(l));
}

/* 게이트별 관심사 — 여기 모아두면 "이 게이트는 뭘 보는가"가 한눈에 보인다.
   새 게이트를 만들면 여기에 한 줄 추가하고 diffTouches 로 쓴다. */
export const PROBE = {
  /** 사실: 수치·출처·본문 (팩트시트가 필요한 변경) */
  facts: /\d[\d,.]*\s*(원|%|만원|억|개월|년|일|세|점|배)|\b(source|url|verifiedAt|sourceUrl)\s*:|\b(intro|content|summary|q|a|question|value|text)\s*:|rows:|headers:|table:/,
  /** 본문 문구: 서론·cue·소제목 (상단 CTA 는 check-user-value 담당이라 제외) */
  copy: /\b(cue|act|heroHook|intro|q|a|h1)\s*:/,
  /** 제목·소제목: 중복·타이틀 검사가 보는 것 */
  title: /\b(title|h1|q|question|anchor)\s*:/,
} as const;

/** 메타데이터만 바뀐 개수를 세어 게이트가 안내 문구를 찍을 수 있게 한다 */
export function partition(
  files: string[],
  probe: RegExp,
): { kept: string[]; skipped: number } {
  const kept = files.filter((f) => diffTouches(f, probe));
  return { kept, skipped: files.length - kept.length };
}
