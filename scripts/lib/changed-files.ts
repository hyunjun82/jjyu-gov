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

/* ── 출처 링크만 깊어진 경우는 사실 변경이 아니다 ──────────────
   2026-08-08: 기관 루트(fss.or.kr/)를 그 기관의 실제 페이지로 바꾼 수정이
   "출처가 바뀌었다"로 잡혀 팩트시트를 요구했다. 같은 기관이 같은 말을 하는데
   주소만 정확해진 것이라 사실 위험이 늘지 않는다.
   (원문 문자열이 그 페이지에 실제로 있는지는 verify-policy.ts 가 따로 본다.)
   다른 기관 URL이 새로 들어오면 그건 근거가 바뀐 것이므로 사실 변경으로 본다. */
const domainsOf = (lines: string[]): Set<string> => {
  const out = new Set<string>();
  for (const l of lines) {
    for (const m of l.matchAll(/https?:\/\/([a-z0-9.-]+)/gi)) {
      out.add(m[1].toLowerCase().replace(/^www\./, ''));
    }
  }
  return out;
};

/** 사실이 바뀌었나 — 수치·본문·표는 그대로 잡고, 같은 기관 링크 심화는 뺀다 */
export function touchesFacts(file: string): boolean {
  const d = sh(`git diff -U0 origin/main...HEAD -- "${file}"`);
  if (!d.trim()) return true;
  const changed = d
    .split('\n')
    .filter((l) => (l.startsWith('+') || l.startsWith('-')) && !l.startsWith('+++') && !l.startsWith('---'));
  if (!changed.length) return false;

  const NON_URL = /\d[\d,.]*\s*(원|%|만원|억|개월|년|일|세|점|배)|\b(intro|content|summary|q|a|question|value|text|verifiedAt)\s*:|rows:|headers:|table:/;
  /* 본문 문장은 속성명 다음 줄에 따로 오는 경우가 많다(intro: 줄바꿈 후 '…').
     그래서 속성명만 찾으면 놓친다 — 긴 한글 인용문 자체를 본문으로 본다.
     (2026-08-08 검증에서 지원구간최신화의 intro 수정이 면제로 새어나갔다) */
  /* 본문이 아닌 짧은 라벨류 — 버튼 문구·출처명·표 제목은 사실 주장이 아니다.
     (2026-08-08: ctaLabel 한 줄 바꾼 허브가 본문 변경으로 잡혀 팩트시트를 요구받았다) */
  const NOT_BODY = /\b(name|url|ctaLabel|label|breadcrumb|caption|anchor|href)\s*:/;
  const BODY_TEXT = (l: string) => {
    if (NOT_BODY.test(l)) return false;
    const m = l.match(/'([^']{30,})'/);
    if (!m) return false;
    /* 한글 "연속" 10자를 요구하면 띄어쓰기가 있는 정상 문장이 전부 빠진다
       (2026-08-08 검증에서 실제로 새어나갔다). 총 개수로 센다. */
    const korean = (m[1].match(/[가-힣]/g) || []).length;
    return korean >= 10 && !/^https?:/.test(m[1]);
  };
  const isSubstantive = (l: string) => NON_URL.test(l) || BODY_TEXT(l);
  const urlOnly = changed.filter((l) => !isSubstantive(l));
  const substantive = changed.filter(isSubstantive);
  /* 지우기만 한 수정은 위험을 줄인다 — 근거 없는 주장을 뺀 경우가 그렇다.
     새로 들어온 줄(+)에 사실이 없으면 팩트시트를 요구하지 않는다.
     (수치를 X→Y 로 바꾸면 + 줄에 Y 가 있으므로 그대로 잡힌다) */
  if (substantive.some((l) => l.startsWith('+'))) return true;
  if (substantive.length) return false;

  /* url 만 바뀐 경우 — 기관(도메인) 집합이 그대로면 링크 심화로 본다 */
  const removed = domainsOf(urlOnly.filter((l) => l.startsWith('-')));
  const added = domainsOf(urlOnly.filter((l) => l.startsWith('+')));
  if (!added.size && !removed.size) return false;
  for (const a of added) if (!removed.has(a)) return true; // 새 기관이 들어왔다
  return false;
}
