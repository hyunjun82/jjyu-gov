/**
 * 카페 글 조회수 스냅샷 — 공개 목록 API 로 전체 글의 조회수·좋아요·댓글을 읽어 시각과 함께 저장하고, 직전 스냅샷과 비교한다 (2026-10-12)
 *
 *   node scripts/cafe/views-snapshot.mjs [--since=2026-10-12]   기본: 최근 글만 비교 표시(오늘 올린 글)
 *
 * - 읽기 전용(로그인·쓰기 없음). 결과: scripts/output/cafe-views/{시각}.json
 * - 같은 글의 시간별 조회수 증가를 비교해 '노출이 열렸는지'를 본다(최고 기록 284, 1,000 넘으면 뚜렷한 신호).
 */
import fs from 'node:fs';
import path from 'node:path';
const CLUB = '31711613';
const since = (process.argv.find((a) => a.startsWith('--since=')) || '').replace('--since=', '') || new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);
const kst = (ts) => new Date(ts + 9 * 3600e3).toISOString().replace('T', ' ').slice(0, 16);
const all = [];
for (let page = 1; page <= 12; page++) {
  const u = `https://apis.naver.com/cafe-web/cafe2/ArticleListV2dot1.json?search.clubid=${CLUB}&search.queryType=lastArticle&search.page=${page}&search.perPage=50&ad=false&uuid=x&adUnit=MW_CAFE_ARTICLE_LIST_RS`;
  const j = await (await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0', referer: 'https://m.cafe.naver.com/' } })).json();
  const r = j.message.result; all.push(...r.articleList); if (!r.hasNext) break; await new Promise((s) => setTimeout(s, 300));
}
const now = new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 16).replace(/[-:T]/g, '');
const dir = path.join('scripts', 'output', 'cafe-views'); fs.mkdirSync(dir, { recursive: true });
const snap = all.map((a) => ({ id: a.articleId, t: a.subject, b: a.menuName, v: a.readCount, l: a.likeItCount, c: a.commentCount, ts: a.writeDateTimestamp }));
const prevFile = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort().pop();
const prev = prevFile ? new Map(JSON.parse(fs.readFileSync(path.join(dir, prevFile), 'utf8')).map((x) => [x.id, x])) : new Map();
fs.writeFileSync(path.join(dir, `${now}.json`), JSON.stringify(snap, null, 1));
const rows = snap.filter((x) => kst(x.ts).slice(0, 10) >= since).sort((a, b) => b.ts - a.ts);
console.log(`스냅샷 ${now} KST · 전체 ${snap.length}편 · ${since} 이후 ${rows.length}편 · 직전 ${prevFile || '없음'}`);
for (const x of rows) { const p = prev.get(x.id); console.log(`${kst(x.ts)} | 조회 ${String(x.v).padStart(4)} ${p ? `(+${x.v - p.v})` : '(신규)'} | 좋아요 ${x.l} 댓글 ${x.c} | ${x.t.slice(0, 44)}`); }
const mx = [...snap].sort((a, b) => b.v - a.v)[0]; console.log(`\n전체 최고 조회 ${mx.v} — ${mx.t.slice(0, 40)}`);
