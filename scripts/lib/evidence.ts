/**
 * evidence.ts — "이 글의 근거는 어디인가" 를 정하는 단 한 곳.
 *
 * 왜 생겼나 (2026-08-23 사장님 지적: "계속 나오네 평생 나오겠네")
 *   같은 글을 두고 게이트끼리 판정이 갈렸다.
 *     check-source-match   → 통과   (글 머리의 `추출본:` 줄을 읽는다)
 *     check-source-backing → 차단   (그 줄을 안 읽고 파일명으로만 찾는다)
 *   세대변천사.tsx 의 근거는 source-generation-history.txt 인데, 파일명이 한글이라
 *   source-세대변천사.txt 를 찾다가 못 찾고 "근거 없는 수치 15건"으로 push 를 막았다.
 *   연도 2009·2017·2021 은 추출본 안에 멀쩡히 있었다.
 *
 *   근거의 정의가 게이트마다 다르면 판정은 계속 어긋난다. 검사기를 더 만들 게 아니라
 *   정의를 하나로 합친다. 이 파일이 그 정의다 — 게이트는 여기에 물어본다.
 *
 * 또 하나: 소급 차단 금지 (judgeable).
 *   게이트는 사고 난 다음 날 급히 만들어진다. 그런데 그 게이트가 태어나기 전에 쓴 글까지
 *   심판하면 push 가 통째로 선다 — 8/20 스포크 63편이 그래서 막혔고, 사람은 결국
 *   --no-verify 로 게이트를 통째로 건너뛰게 된다(그러라고 .bat 7개가 있었다).
 *   새 게이트는 자기가 생긴 날 이후에 손댄 글만 심판한다.
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

export const OUT = path.join('scripts', 'output');
const SNAP = path.join(OUT, 'sources');

export type Evidence = {
  pool: string;          /* 대조에 쓸 원문 전체 */
  parts: string[];       /* 어디서 왔는지 — 실패 메시지에 그대로 보여준다 */
  urls: string[];        /* 글이 인용한 출처 URL */
  missing: string[];     /* 저장본이 아예 없는 URL */
  broken: string[];      /* 저장본은 있는데 내용이 없다 (JS 로딩·아코디언) */
};

const read = (p: string) => fs.readFileSync(p, 'utf8');

/** URL → 저장본 파일명. fetch-source.ts 와 같은 규칙이어야 한다. */
export function snapName(u: string): string {
  return u.replace(/^https?:\/\//, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 120) + '.txt';
}

/**
 * 이 글의 근거를 전부 모은다. 출처는 넷이고, 넷 다 본다.
 *   ① 글이 머리 주석에 스스로 가리키는 추출본  (`추출본: scripts/output/source-*.txt`)
 *   ② 슬러그로 찾는 추출본·팩트시트           (source-{slug}.txt / factsheet-{slug}.md)
 *   ③ 글이 인용한 URL 의 저장본               (scripts/output/sources/*.txt)
 *   ④ 글 안에 직접 옮겨 적은 조문             (source.text)
 * 하나라도 빼면 그 게이트만 다른 판정을 낸다.
 */
export function evidenceFor(file: string, slug?: string): Evidence {
  const src = fs.existsSync(file) ? read(file) : '';
  const parts: string[] = [];
  const missing: string[] = [];
  const broken: string[] = [];
  let pool = '';

  /* ① 글이 스스로 가리키는 추출본 — 파일명이 한글이어도 여기서 잡힌다 */
  const pointed = new Set<string>();
  for (const m of src.matchAll(/추출본:\s*([^\s*]+\.txt)/g)) pointed.add(m[1].replace(/^\.\//, ''));
  for (const p of pointed) {
    if (!fs.existsSync(p)) { missing.push(p); continue; }
    pool += '\n' + read(p);
    parts.push(path.basename(p));
  }

  /* ② 슬러그로 찾는 것 */
  const bases = [slug, path.basename(file).replace(/\.(tsx|ts)$/, '')].filter(Boolean) as string[];
  for (const b of bases) {
    for (const cand of [path.join(OUT, `source-${b}.txt`), path.join(OUT, `factsheet-${b}.md`)]) {
      if (!fs.existsSync(cand)) continue;
      if (parts.includes(path.basename(cand))) continue;
      pool += '\n' + read(cand);
      parts.push(path.basename(cand));
    }
  }

  /* ③ 인용한 URL 의 저장본 */
  const urls = [...new Set([...src.matchAll(/['"](https?:\/\/[^'"\s]+)['"]/g)].map((m) => m[1]))];
  for (const u of urls) {
    const f = path.join(SNAP, snapName(u));
    if (!fs.existsSync(f)) { missing.push(u); continue; }
    const t = read(f);
    pool += '\n' + t;
    if (t.replace(/^[\s\S]*?CHARS: (\d+)[\s\S]*$/, '$1') && t.length < 1500) broken.push(u);
  }

  /* ④ 글 안에 옮겨 적은 조문 */
  let m; const tRe = /text:\s*'([^']*)'/g;
  let had = false;
  while ((m = tRe.exec(src))) { pool += ' ' + m[1]; had = true; }
  if (had) parts.push('글 내 source.text');

  return { pool, parts, urls, missing, broken };
}

/**
 * 이 파일을 이 게이트가 심판해도 되는가.
 *   · 아직 커밋 안 됐거나 이번에 새로 추가됐다 → 언제나 심판한다
 *   · 마지막 커밋이 게이트 생긴 날보다 앞선다  → 심판하지 않는다 (소급 차단 금지)
 *
 * 게이트를 새로 만들면 born 에 그날 날짜를 적는다. 그것만 하면 옛 글이 무더기로
 * 막히는 일이 없다 — 무더기로 막히면 사람은 게이트를 끄지, 글을 고치지 않는다.
 */
/* 파일별 마지막 커밋 날짜를 한 번에 받아 둔다.
   전에는 파일마다 git log 를 불렀다 — 1042번 돌아 게이트 한 번에 6분 53초가 걸렸다.
   느린 게이트는 사람이 끄게 된다. 한 번의 git log 로 전부 채운다. */
let dateMap: Map<string, string> | null = null;

function lastCommitDates(): Map<string, string> {
  if (dateMap) return dateMap;
  dateMap = new Map();
  try {
    const out = execSync('git log --date=short --pretty=format:%ad --name-only', {
      encoding: 'utf8', maxBuffer: 256 * 1024 * 1024,
    });
    let cur = '';
    for (const line of out.split('\n')) {
      const s = line.trim();
      if (!s) continue;
      if (/^\d{4}-\d{2}-\d{2}$/.test(s)) { cur = s; continue; }
      if (!dateMap.has(s)) dateMap.set(s, cur);   /* 최신 커밋부터 오므로 첫 등장이 마지막 변경 */
    }
  } catch { /* git 없음 — 전부 심판 대상으로 본다 */ }
  return dateMap;
}

export function judgeable(file: string, born: string): boolean {
  const key = file.replace(/\\/g, '/');
  const last = lastCommitDates().get(key);
  if (!last) return true;      /* 커밋 이력이 없다 = 새 글 */
  return last >= born;
}
