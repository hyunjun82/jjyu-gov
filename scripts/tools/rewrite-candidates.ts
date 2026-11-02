/**
 * rewrite-candidates.ts — "노출 안 되는 구버전 글" 리라이트 대상 목록 (2026-11-02)
 *
 *   npx tsx scripts/tools/rewrite-candidates.ts [--since=2026-10-01]
 *   → scripts/output/rewrite-candidates-{날짜}.md (+ .json)
 *
 * 구버전(옛 글)의 정의 — 추측하지 않고 코드가 남긴 흔적만 본다:
 *   · scripts/output/gov/<key>/facts.json 이 없다 = scripts/gov 파이프라인으로 쓰거나 리라이트한 적이 없다
 *     (meta.json 의 file 경로로 맞춘다 — 새출발기금 13편은 key 가 new-start-fund 인데 실제 허브는 small-biz-bank-debt 라 key 로는 빗나간다)
 *   · dateModified 가 --since(기본 2026-10-01) 이전이고, since 이후 "리라이트" 커밋에도 들어가지 않았다
 *     (국민연금 전자민원 62편은 facts 도 dateModified 갱신도 없이 타이틀·본문만 고쳤다 — git 메시지로만 잡힌다.
 *      이 저장소가 얕은 클론(shallow)이면 보이는 범위의 커밋만 본다는 뜻이고, 보고서 머리에 그 범위를 적는다)
 *   · 고객센터 글(catSlug call-center · callCenter 화면)은 글 템플릿이 달라 대상에서 뺀다
 * 옛 템플릿 신호(리라이트 spec 머리에 적힌 그대로 — "서론 없음·카드 7~12개"): 서론(heroHook) 없음 또는 카드(qa) 7개 이상.
 *   서론이 있고 카드 6개 이하인 글은 "새 모양(facts 없음)"으로 따로 센다 — 9월에 손으로 쓴 글이 여기 온다.
 *
 * 노출: scripts/output/searchadvisor-expose-all-gov*.json (searchadvisor-expose-all.mjs 결과, 로컬 전용·커밋 안 함)
 *   파일이 있으면 60일 노출 0 인 글만 "대상"으로 남기고, 없으면 후보 전체를 내고 그 사실을 머리에 적는다.
 *   노출 0 = 서치어드바이저 상위 웹문서 목록에 없다는 뜻(rewrite-list.mjs 와 같은 정의).
 */
import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { PoliciesBySlug } from '../../data/policies/manifest';
import { SpokesRegistry } from '../../data/spokes/registry';

const OUT = path.join('scripts', 'output');
const GOV = path.join(OUT, 'gov');
const arg = (k: string, d: string) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || '').split('=')[1] || d;
const SINCE = arg('since', '2026-10-01');
const TODAY = new Date().toISOString().slice(0, 10);
const norm = (p: string) => p.replace(/\\/g, '/');

/* ── 글 URL → 파일. 스포크는 레지스트리의 import 와 등록 블록을 읽어 잇는다 ── */
const reg = fs.readFileSync(path.join('data', 'spokes', 'registry.ts'), 'utf8');
const importOf = new Map<string, string>();
for (const m of reg.matchAll(/import\s*\{\s*([^}]+)\}\s*from\s*'@\/(app\/policy\/\[id\]\/\[spoke\]\/content\/[^']+)'/g))
  for (const n of m[1].split(',').map((s) => s.trim().split(/\s+as\s+/).pop()!).filter(Boolean)) importOf.set(n, `${m[2]}.tsx`);   // `X as Y` 는 Y 로 등록된다
const spokeFile = new Map<string, string>();
{
  let hub: string | null = null;
  for (const line of reg.slice(reg.indexOf('REGISTRY')).split('\n')) {
    const h = line.match(/^\s{2}'([^']+)':\s*\{/);
    if (h) { hub = h[1]; continue; }
    const s = line.match(/^\s{4}'([^']+)':\s*([A-Za-z0-9_가-힣]+)/);
    if (s && hub && importOf.has(s[2])) spokeFile.set(`/policy/${hub}/${s[1]}`, importOf.get(s[2])!);
  }
}
const fileOf = (kind: 'hub' | 'spoke', url: string, hub: string) => kind === 'hub' ? `data/policies/${hub}.ts` : spokeFile.get(url) || '';

/* ── 새 글(파이프라인) 집합: facts.json 이 있는 글의 파일 경로 ── */
const factsFiles = new Set<string>();
for (const k of fs.existsSync(GOV) ? fs.readdirSync(GOV) : []) {
  if (!fs.existsSync(path.join(GOV, k, 'facts.json'))) continue;
  const metaP = path.join(GOV, k, 'meta.json');
  if (fs.existsSync(metaP)) factsFiles.add(norm(JSON.parse(fs.readFileSync(metaP, 'utf8')).file || ''));
  else factsFiles.add(`data/policies/${k}.ts`);   // 허브는 meta 없이 slug 폴더만 있을 수 있다 (target.mjs)
}

/* ── git: 보이는 범위에서 파일별 마지막 커밋(날짜|메시지) + 파일을 만진 "리라이트" 커밋(마지막이 아니어도) ── */
const lastCommit = new Map<string, { date: string; msg: string }>();
const rewriteCommit = new Map<string, { date: string; msg: string }>();   // 허브는 스포크 배선으로 뒤에 또 바뀌어 마지막 커밋만 보면 리라이트가 가려진다
let gitOldest = '';
let shallow = false;
try {
  shallow = execFileSync('git', ['rev-parse', '--is-shallow-repository'], { encoding: 'utf8' }).trim() === 'true';
  /* 얕은 클론의 경계 커밋은 저장소 전체 파일을 "추가"한 것으로 보여 — 12,595개 — 그 커밋에 든 파일은 이력을 모르는 것이지 손댄 것이 아니다 */
  const boundary = new Set(shallow ? execFileSync('git', ['log', '--max-parents=0', '--pretty=format:%H'], { encoding: 'utf8' }).split('\n').map((s) => s.trim()).filter(Boolean) : []);
  const log = execFileSync('git', ['log', '--date=short', '--pretty=format:@@%H|%ad|%s', '--name-only'], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  let cur: { date: string; msg: string } | null = null;
  for (const l of log.split('\n')) {
    if (l.startsWith('@@')) {
      const [hash, date, ...rest] = l.slice(2).split('|');
      cur = boundary.has(hash) ? null : { date, msg: rest.join('|') };
      if (!boundary.has(hash)) gitOldest = date;
      continue;
    }
    const f = l.trim();
    if (!f || !cur) continue;
    if (!lastCommit.has(f)) lastCommit.set(f, cur);
    if (cur.date >= SINCE && REWRITE_RE.test(cur.msg) && !rewriteCommit.has(f)) rewriteCommit.set(f, cur);
  }
} catch { /* git 없음 — dateModified 만 본다 */ }
const REWRITE_RE = /리라이트|rewrite|새 템플릿/i;

/* ── 노출(선택) ── */
type Exp = { exposeCount?: number; clickCount?: number; ctr?: number; exposedRank?: number };
const expFile = fs.existsSync(OUT) ? fs.readdirSync(OUT).filter((f) => f.startsWith('searchadvisor-expose-all-gov')).sort().pop() : undefined;
let exp60 = new Map<string, Exp>();
if (expFile) {
  const d = JSON.parse(fs.readFileSync(path.join(OUT, expFile), 'utf8')).result;
  const nu = (u: string) => decodeURIComponent(u).replace('https://gov.jjyu.co.kr', '').replace(/\/$/, '');
  exp60 = new Map((d['60']?.urls || []).map((u: any) => [nu(u.key), u]));
}

type Group = 'new' | 'callcenter' | 'recent' | 'old';
type Row = {
  kind: 'hub' | 'spoke'; url: string; file: string; hub: string; hubTitle: string; cat: string; title: string;
  published: string; modified: string; cards: number; hook: boolean; actFirst: boolean;
  gitDate: string; gitMsg: string; oldTemplate: boolean;
  e60: number | null; c60: number | null; ctr: number | null; rank: number | null; group: Group;
};
const day = (s?: string) => (s || '').slice(0, 10);
const rows: Row[] = [];

function make(kind: 'hub' | 'spoke', url: string, hub: string, hubTitle: string, cat: string, title: string, d: any, isCallCenter: boolean) {
  const file = fileOf(kind, url, hub);
  const modified = day(d.dateModified);
  const g = rewriteCommit.get(file) || lastCommit.get(file);   // 리라이트 커밋이 있으면 그것을 보여준다
  const gitDate = g?.date || '', gitMsg = g?.msg || '';
  const cards = Array.isArray(d.qa) ? d.qa.length : 0;
  const hook = !!d.heroHook;
  let group: Group;
  if (isCallCenter || cat === 'call-center') group = 'callcenter';
  else if (factsFiles.has(file)) group = 'new';
  else if (modified >= SINCE || (gitDate >= SINCE && REWRITE_RE.test(gitMsg))) group = 'recent';
  else group = 'old';
  const e = expFile ? exp60.get(url) || {} : null;
  rows.push({
    kind, url, file, hub, hubTitle, cat, title, published: day(d.datePublished), modified, cards, hook,
    actFirst: d.cardLayout === 'act-first', gitDate, gitMsg, oldTemplate: !hook || cards >= 7,
    e60: e ? e.exposeCount || 0 : null, c60: e ? e.clickCount || 0 : null, ctr: e ? e.ctr || 0 : null, rank: e ? e.exposedRank || 0 : null, group,
  });
}

for (const [slug, p] of Object.entries(PoliciesBySlug) as [string, any][]) {
  if (!p?.title) continue;
  make('hub', `/policy/${slug}`, slug, p.title, p.catSlug || '', p.title, p, false);
}
for (const [hubSlug, spokes] of Object.entries(SpokesRegistry) as [string, any][]) {
  const hub: any = (PoliciesBySlug as any)[hubSlug];
  for (const [spokeSlug, d] of Object.entries(spokes || {}) as [string, any][]) {
    const title = d?.h1 || d?.breadcrumb;
    if (!title) continue;
    make('spoke', `/policy/${hubSlug}/${spokeSlug}`, hubSlug, hub?.title || hubSlug, hub?.catSlug || '', title, d, !!d.callCenter);
  }
}

/* ── 집계 ── */
const n = (g: Group) => rows.filter((r) => r.group === g).length;
const old = rows.filter((r) => r.group === 'old');
const pool = old.filter((r) => r.oldTemplate);
const newShape = old.filter((r) => !r.oldTemplate);
const target = expFile ? pool.filter((r) => r.e60 === 0) : pool;
const exposed = expFile ? pool.filter((r) => (r.e60 || 0) > 0) : [];

type Bundle = { hub: string; hubTitle: string; cat: string; items: Row[]; hubIsTarget: boolean };
const bundles = new Map<string, Bundle>();
for (const r of target) {
  const b = bundles.get(r.hub) || { hub: r.hub, hubTitle: r.hubTitle, cat: r.cat, items: [], hubIsTarget: false };
  b.items.push(r);
  if (r.kind === 'hub') b.hubIsTarget = true;
  bundles.set(r.hub, b);
}
const bl = [...bundles.values()].sort((a, b) => b.items.length - a.items.length || a.hub.localeCompare(b.hub));
const range = (xs: string[]) => { const s = xs.filter(Boolean).sort(); return s.length ? (s[0] === s[s.length - 1] ? s[0] : `${s[0]}~${s[s.length - 1]}`) : '-'; };
const cardRange = (xs: number[]) => { const s = [...xs].sort((a, b) => a - b); return s.length ? (s[0] === s[s.length - 1] ? `${s[0]}` : `${s[0]}~${s[s.length - 1]}`) : '-'; };
const cell = (s: string) => s.replace(/\|/g, '/');
const byHubOrder = (x: Row, y: Row) => (x.kind === 'hub' ? 0 : 1) - (y.kind === 'hub' ? 0 : 1) || x.url.localeCompare(y.url);

const md: string[] = [];
md.push(`# 구버전 글 리라이트 대상 (${TODAY})`, '');
md.push(expFile
  ? `노출 원본: ${expFile} (서치어드바이저 gov.jjyu.co.kr 최근 60일). **대상 = 옛 템플릿 구버전이면서 60일 노출 0** ${target.length}편.`
  : `**노출 데이터 없음** — scripts/output/searchadvisor-expose-all-gov*.json 이 이 환경에 없다(커밋하지 않는 로컬 파일). 아래는 옛 템플릿 구버전 후보 전체 ${target.length}편이고, 노출 0 필터는 아직 안 걸렸다.`);
md.push('', `구버전 = facts.json 없음(파이프라인으로 쓴 적 없음) + dateModified < ${SINCE} + ${SINCE} 이후 리라이트 커밋에 없음. 옛 템플릿 = 서론 없음 또는 카드 7개 이상. 고객센터 글 제외.`);
if (gitOldest) md.push(`git 은 ${shallow ? `얕은 클론이라 ${gitOldest} 이후 커밋만 보인다` : `${gitOldest} 부터 전부 보인다`}.`);
md.push('', '| 구분 | 글 수 |', '|---|---|',
  `| 전체 글(허브+스포크) | ${rows.length} |`,
  `| 새 글·이미 리라이트(facts.json 있음) | ${n('new')} |`,
  `| 고객센터(제외) | ${n('callcenter')} |`,
  `| ${SINCE} 이후 손댄 글, facts 없음(제외, 부록 B) | ${n('recent')} |`,
  `| 구버전인데 새 모양(서론 있음·카드 6개 이하, 부록 C) | ${newShape.length} |`,
  `| **옛 템플릿 구버전 후보** | **${pool.length}** |`);
if (expFile) md.push(`| ├ 60일 노출 0 → **대상** | **${target.length}** |`, `| └ 노출 있음(업그레이드 묶음, 부록 A) | ${exposed.length} |`);
md.push('');

md.push(`## 허브 묶음별 (${bl.length}묶음 · 글 수 많은 순)`, '', '| 번호 | 허브 slug | 허브 제목 | 카테고리 | 대상 글 수 | 허브 본글 포함 | 서론 없는 글 | 카드 수 | 마지막 수정 |', '|---|---|---|---|---|---|---|---|---|');
bl.forEach((b, i) => md.push(`| ${i + 1} | ${b.hub} | ${cell(b.hubTitle)} | ${b.cat} | ${b.items.length} | ${b.hubIsTarget ? 'O' : '-'} | ${b.items.filter((r) => !r.hook).length} | ${cardRange(b.items.map((r) => r.cards))} | ${range(b.items.map((r) => r.modified))} |`));
md.push('');

md.push(`## 글별 상세 (${target.length}편 · 허브 묶음 순)`, '', `| 경로 | 지금 타이틀 | 카드 | 서론 | 수정일 | 최근 git |${expFile ? ' 60일 노출 | 클릭 |' : ''}`, `|---|---|---|---|---|---|${expFile ? '---|---|' : ''}`);
for (const b of bl) for (const r of b.items.sort(byHubOrder))
  md.push(`| ${r.url.replace('/policy/', '')} | ${cell(r.title)} | ${r.cards} | ${r.hook ? 'O' : '없음'} | ${r.modified || '-'} | ${r.gitDate || '-'} |${expFile ? ` ${r.e60} | ${r.c60} |` : ''}`);
md.push('');

if (expFile && exposed.length) {
  md.push(`## 부록 A — 옛 템플릿인데 노출 있는 글 ${exposed.length}편 (이번 대상 아님, 업그레이드 묶음)`, '', '| 경로 | 타이틀 | 60일 노출 | 클릭 | CTR | 순위 |', '|---|---|---|---|---|---|');
  for (const r of exposed.sort((a, b) => (b.e60 || 0) - (a.e60 || 0))) md.push(`| ${r.url.replace('/policy/', '')} | ${cell(r.title)} | ${r.e60} | ${r.c60} | ${r.ctr} | ${r.rank} |`);
  md.push('');
}
const recent = rows.filter((r) => r.group === 'recent');
if (recent.length) {
  const byHub = new Map<string, Row[]>();
  for (const r of recent) byHub.set(r.hub, [...(byHub.get(r.hub) || []), r]);
  md.push(`## 부록 B — ${SINCE} 이후 손댔지만 facts.json 없는 글 ${recent.length}편 (허브별 · 이번 대상에서 뺌)`, '', '| 허브 | 글 수 | dateModified | 최근 git 커밋 |', '|---|---|---|---|');
  for (const [h, xs] of [...byHub.entries()].sort((a, b) => b[1].length - a[1].length)) {
    const msgs = [...new Set(xs.map((r) => r.gitMsg).filter(Boolean))].map((m) => m.slice(0, 60));
    md.push(`| ${h} | ${xs.length} | ${range(xs.map((r) => r.modified))} | ${cell(msgs.slice(0, 2).join(' / '))}${msgs.length > 2 ? ' …' : ''} |`);
  }
  md.push('');
}
if (newShape.length) {
  const byHub = new Map<string, Row[]>();
  for (const r of newShape) byHub.set(r.hub, [...(byHub.get(r.hub) || []), r]);
  md.push(`## 부록 C — 구버전(facts 없음)인데 새 모양인 글 ${newShape.length}편 (서론 있음·카드 6개 이하 · 허브별)`, '', '| 허브 | 글 수 | 카드 수 | dateModified |', '|---|---|---|---|');
  for (const [h, xs] of [...byHub.entries()].sort((a, b) => b[1].length - a[1].length)) md.push(`| ${h} | ${xs.length} | ${cardRange(xs.map((r) => r.cards))} | ${range(xs.map((r) => r.modified))} |`);
  md.push('');
}
if (!expFile) md.push('## 노출 0 필터를 거는 법 (사장님 PC)', '', '```', 'node scripts/tools/searchadvisor-expose-all.mjs https://gov.jjyu.co.kr --periods=7,30,60', 'npx tsx scripts/tools/rewrite-candidates.ts', '```', '', '첫 줄이 로그인된 네이버 세션(scripts/cafe/.profile)으로 노출 JSON 을 받고, 둘째 줄이 이 표를 노출 0 글만으로 다시 만든다.', '');

fs.mkdirSync(OUT, { recursive: true });
const base = path.join(OUT, `rewrite-candidates-${TODAY}`);
fs.writeFileSync(`${base}.md`, md.join('\n') + '\n');
fs.writeFileSync(`${base}.json`, JSON.stringify({ since: SINCE, exposure: expFile || null, gitOldest, shallow, rows }, null, 1));
console.log(`전체 ${rows.length} · 새 글 ${n('new')} · 고객센터 ${n('callcenter')} · 최근손댐 ${n('recent')} · 구버전 ${old.length} (옛 템플릿 ${pool.length} / 새 모양 ${newShape.length})${expFile ? ` · 노출0 대상 ${target.length}` : ' · 노출 데이터 없음'}`);
console.log(`파일 못 찾은 스포크 ${rows.filter((r) => r.kind === 'spoke' && !r.file).length} · 허브 묶음 ${bl.length}개 · 저장: ${base}.md`);
