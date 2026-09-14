#!/usr/bin/env node
/**
 * 글 파이프라인 — 키워드 → 설계 → 버튼 확인(Playwright) → 수집(Playwright 추출본+캡처) → 캡처 읽기 → 작성 → 삽입·배선 → 게이트 → 보고.
 *
 * 왜 (2026-09-10 사장님 지시 "사용량이 너무 많이 나갔다")
 *   보험글을 대화창에서 한 편씩 썼더니 48시간 창 하나가 2,642회 호출·"다시 읽기" 12.9억 토큰을 먹었다.
 *   4단계 시스템(타이틀·구성표·사실·대조)과 게이트는 그대로 두고, **돌리는 방식**만 바꾼다 —
 *   판단이 필요한 단계(설계·캡처 읽기·작성·고치기)는 글 한 편마다 `claude -p` 를 새로 불러
 *   대화창에 아무것도 쌓이지 않게 한다. 나머지는 이미 있던 결정적 스크립트다:
 *     write.ts --1(타이틀 후보) · capture-source · fetch-source · new-spoke · check-source-match ·
 *     check-source-backing · check-button-variety · check-stage-approval · check-source-links · verify-integrity
 *   구조는 wiki-site scripts/article.mjs 와 같다. 글의 모양은 이 저장소의 정본 스포크(article-prompts.mjs CANON)다.
 *
 *   npm run article -- <slug> --keyword "무해지 보험" --hub term-vs-whole-life-insurance --dir 정기종신보험
 *                     [--title "…"] [--from plan|cta|collect|captures|write|gates] [--max-fix 2] [--model sonnet]
 *                     [--skip-render] [--skip-captures] [--keep-on-fail] [--commit] [--budget 4] [--example <tsx>]
 *   npm run article -- --batch scripts/batch.txt        # 줄마다: slug | 키워드 | 허브slug | 폴더 | 타이틀(생략 가능)
 *
 * 산출물 (같은 명령을 다시 돌리면 끝난 단계는 재사용한다)
 *   scripts/output/plan-<slug>.json           설계도 (타이틀·소제목·버튼·출처·버튼 확인 결과·캡처 읽은 것)
 *   scripts/output/source-<slug>.txt          추출본 + captures/<slug>-N.png (capture-source.ts)
 *   scripts/output/stage2|outline|factsheet|spec-<slug>.*   4단계 산출물 (게이트가 읽는다)
 *   scripts/drafts/<slug>.json                초안 (실패해도 남는다)
 *   app/policy/[id]/[spoke]/content/<폴더>/<파일>.tsx + registry·허브 배선  — 통과한 글만 남는다
 *   scripts/reports/<slug>.md/.png            보고서 + 렌더 캡처. 사람이 보는 건 이것과 push 전 승인이다
 */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import http from "node:http";
import { spawn, spawnSync } from "node:child_process";
import { ask as askRaw, extractJson, assertSubscriptionOnly, newMeter, addUsage, fmtUsage } from "./lib/headless.mjs";
import { checkPlan, checkDraft, slotsFor } from "./lib/article-check.mjs";
import { planPrompt, capturesPrompt, writePrompt, fixPrompt, evidenceDigest, CANON } from "./lib/article-prompts.mjs";
import { snapName } from "./lib/snap-name.mjs";
import { tsxOf, specOf, unwire, isWired, exportNameOf, contentPathOf, stage2Of, outlineMd, factsheetMd, titleLogBlock, CONTENT_DIR, REG } from "./lib/spoke-emit.mjs";

const STAGES = ["plan", "cta", "collect", "captures", "write", "gates"];
const PORT = 3111;
const isWin = process.platform === "win32";
const ROOT = process.cwd();
const OUT = path.join("scripts", "output");
const DRAFTS = path.join("scripts", "drafts");
const REPORTS = path.join("scripts", "reports");
for (const d of [OUT, DRAFTS, REPORTS, path.join(OUT, "captures"), path.join(OUT, "sources")]) fs.mkdirSync(d, { recursive: true });

const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
const hms = () => new Date().toTimeString().slice(0, 8);
const log = (stage, msg) => console.log(`[${hms()}] ${String(stage).padEnd(9)} ${msg}`);
const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
const writeJson = (p, v) => fs.writeFileSync(p, JSON.stringify(v, null, 2) + "\n");
const mins = (ms) => `${(ms / 60000).toFixed(1)}분`;
const norm = (s) => String(s || "").replace(/[\s"“”'’|·ㆍ!?，,.]/g, "").toLowerCase();
const one = (s) => String(s ?? "").replace(/\s+/g, " ").trim();

/* ── 사용량 계량 · 상한 ── */
const batchMeter = newMeter();
let budget = { perArticle: 4, batch: 30 };
class BudgetError extends Error {}
async function ask(ctx, prompt, opt = {}) {
  const m = ctx.meter;
  if (m.cost >= budget.perArticle) throw new BudgetError(`이 글이 상한 $${budget.perArticle} 를 넘었습니다 (지금 $${m.cost.toFixed(2)}, 호출 ${m.calls}회). --budget <숫자> 로 올릴 수 있습니다`);
  if (batchMeter.cost >= budget.batch) throw new BudgetError(`묶음이 상한 $${budget.batch} 를 넘었습니다 (지금 $${batchMeter.cost.toFixed(2)}). --batch-budget <숫자>`);
  const r = await askRaw(prompt, { ...opt, model: opt.model || ctx.model, logDir: ctx.logDir });
  const stage = String(opt.label || "ask").replace(/\d+$/, "");
  addUsage(m, r.usage, stage); addUsage(batchMeter, r.usage, stage);
  log(opt.label, `[${(r.usage.models || []).filter((x) => !/haiku/.test(x)).join(",") || ctx.model}] ${fmtUsage(r.usage)} · ${(r.ms / 1000).toFixed(0)}초 (이 글 ${m.calls}회 ${fmtUsage(m)})`);
  return r;
}

/* ── 인자 ── */
function parseArgs(argv) {
  const flags = {}; const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const k = a.slice(2); const nxt = argv[i + 1];
      if (nxt !== undefined && !nxt.startsWith("--")) { flags[k] = nxt; i++; } else flags[k] = true;
    } else positional.push(a);
  }
  return { flags, positional };
}

/* ── 자식 프로세스 ── */
function runCmd(cmd, args, { quiet = true, shell = false, env = {} } = {}) {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, { shell, env: { ...process.env, ...env } });
    let out = "";
    const onData = (d) => { const s = d.toString(); out += s; if (!quiet) process.stdout.write(s); };
    child.stdout.on("data", onData); child.stderr.on("data", onData);
    child.on("close", (code) => resolve({ code, out }));
    child.on("error", (e) => resolve({ code: -1, out: `${out}\n${e.message}` }));
  });
}
/* tsx 는 로컬에 없고 npx 로 돈다 → 셸이 필요하고, 셸은 인자를 공백에서 자르므로 직접 감싼다 (한글은 살아남는다) */
const sq = (a) => (isWin ? `"${String(a).replace(/"/g, '\\"')}"` : `'${String(a).replace(/'/g, `'\\''`)}'`);
const runShell = (cmd, args, opt) => runCmd(`${cmd} ${args.map(sq).join(" ")}`, [], { ...opt, shell: true });
const runTsx = (script, args = [], opt) => runShell("npx", ["tsx", script, ...args], opt);

/* ── dev 서버 (화면 검사·캡처용) ── */
const ping = (url) => new Promise((res) => {
  const req = http.get(url, (r) => { r.resume(); res(r.statusCode === 200); });
  req.on("error", () => res(false));
  req.setTimeout(240000, () => { req.destroy(); res(false); });
});
const dev = { proc: null, up: false, external: false };
let devPromise = null;
const ensureDev = (firstUrl) => { if (dev.up) return Promise.resolve(); if (!devPromise) devPromise = startDev(firstUrl).catch((e) => { devPromise = null; throw e; }); return devPromise; };
async function startDev(firstUrl) {
  if (await ping(`http://localhost:${PORT}/`)) { log("dev", `dev 서버가 이미 ${PORT} 에 있음 — 그대로 씁니다`); dev.up = true; dev.external = true; return; }
  log("dev", `dev 서버 기동 (포트 ${PORT}) — 첫 컴파일이 몇 분 걸립니다`);
  dev.proc = spawn("npx", ["next", "dev", "-p", String(PORT)], { stdio: ["ignore", "pipe", "pipe"], shell: isWin, env: { ...process.env, NODE_ENV: "development" } });
  dev.proc.stdout.on("data", () => {}); dev.proc.stderr.on("data", () => {});
  const deadline = Date.now() + 360000;
  while (Date.now() < deadline) {
    if (await ping(firstUrl)) { dev.up = true; return; }
    await new Promise((r) => setTimeout(r, 2000));
  }
  throw new Error("dev 서버가 360초 안에 뜨지 않았습니다");
}
function stopDev() {
  if (!dev.proc || dev.external) return;
  if (isWin) spawnSync("taskkill", ["/pid", String(dev.proc.pid), "/T", "/F"], { stdio: "ignore" });
  else dev.proc.kill("SIGTERM");
  dev.proc = null; dev.up = false;
}
process.on("exit", stopDev);
process.on("SIGINT", () => { stopDev(); process.exit(130); });

/* ── 문맥 ── */
function makeCtx(slug, flags) {
  const ctx = {
    slug,
    keyword: String(flags.keyword || "").trim(),
    hubSlug: String(flags.hub || "").trim(),
    policyDir: String(flags.dir || "").trim(),
    fixedTitle: typeof flags.title === "string" ? flags.title.trim() : "",
    from: typeof flags.from === "string" ? flags.from : "",
    maxFix: Number(flags["max-fix"] ?? 2),
    // 전 단계 sonnet. 비워 두면 계정 기본 모델을 상속해 큰 모델 한도를 먹는다
    model: typeof flags.model === "string" ? flags.model : "sonnet",
    skipRender: Boolean(flags["skip-render"]),
    skipCaptures: Boolean(flags["skip-captures"]),
    keepOnFail: Boolean(flags["keep-on-fail"]),
    commit: Boolean(flags.commit),
    example: typeof flags.example === "string" ? flags.example : CANON,
    logDir: path.join(REPORTS, "logs", slug),
    t0: Date.now(), timings: {}, notes: [], fixRounds: 0, rounds: [], emitted: false,
    meter: newMeter(),
  };
  if (ctx.from && !STAGES.includes(ctx.from)) throw new Error(`--from 은 ${STAGES.join("|")} 중 하나`);
  ctx.redo = (stage) => Boolean(ctx.from) && STAGES.indexOf(ctx.from) <= STAGES.indexOf(stage);
  ctx.planFile = path.join(OUT, `plan-${slug}.json`);
  ctx.sourceFile = path.join(OUT, `source-${slug}.txt`);
  ctx.draftFile = path.join(DRAFTS, `${slug}.json`);
  ctx.hubFile = path.join("data", "policies", `${ctx.hubSlug}.ts`);
  ctx.hubPath = `/policy/${ctx.hubSlug}`;
  return ctx;
}
async function timed(ctx, stage, fn) {
  const t = Date.now();
  try { return await fn(); } finally { ctx.timings[stage] = (ctx.timings[stage] || 0) + (Date.now() - t); }
}

/* ── 0. 문지기 · 자료 ── */
function loadKeywords(keyword) {
  const txt = path.join(OUT, `${keyword}.txt`);
  if (fs.existsSync(txt)) {
    const lines = [...new Set(fs.readFileSync(txt, "utf8").split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith("#")))];
    return { file: txt, queries: lines, byTheme: null };
  }
  const exact = path.join(OUT, `${keyword}.json`);
  const cand = fs.existsSync(exact) ? exact
    : fs.readdirSync(OUT).filter((f) => f.endsWith(".json") && !/^(state|stage2|spec|plan)-/.test(f) && f.includes(keyword)).map((f) => path.join(OUT, f))[0];
  if (!cand) return null;
  const j = readJson(cand);
  const all = [...new Set([...(j.merged?.all || []), ...(j.google?.paa || []), ...(j.naver?.related || []), ...(j.google?.related || [])].map(one).filter(Boolean))];
  return { file: cand, queries: all, byTheme: j.merged?.byTheme || null };
}
function existingSpokes(ctx) {
  const dir = path.join(CONTENT_DIR, ctx.policyDir);
  const titles = [];
  if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".tsx"))) {
    const m = fs.readFileSync(path.join(dir, f), "utf8").match(/h1:\s*['"]([^'"\n]+)['"]/);
    if (m) titles.push(m[1]);
  }
  const reg = fs.existsSync(REG) ? fs.readFileSync(REG, "utf8") : "";
  const blk = reg.split(`\n  '${ctx.hubSlug}': {`)[1]?.split("\n  },")[0] || "";
  const slugs = [...blk.matchAll(/^\s+'([a-z0-9-]+)':/gm)].map((m) => m[1]);
  const paths = slugs.flatMap((s) => [`${ctx.hubPath}/${s}`, `${ctx.hubPath}/${s}/`]);
  return { titles, slugs, paths };
}
/** 지금까지 Playwright 로 열어 본문 추출에 성공한 주소 — 설계가 여기서 고르면 수집이 덜 실패한다 */
function sourceRegistry(keyword) {
  const toks = keyword.split(/\s+/).filter((t) => t.length >= 2);
  const seen = new Map();
  const add = (url, chars, hint) => { if (!/^https?:\/\//.test(url)) return; const p = seen.get(url); if (!p || p.chars < chars) seen.set(url, { url, chars, hint }); };
  const snapDir = path.join(OUT, "sources");
  if (fs.existsSync(snapDir)) for (const f of fs.readdirSync(snapDir)) {
    try {
      const head = fs.readFileSync(path.join(snapDir, f), "utf8").slice(0, 400);
      const u = head.match(/^URL:\s*(\S+)/m)?.[1]; const c = Number(head.match(/^CHARS:\s*(\d+)/m)?.[1] || 0);
      if (u && c >= 1500) add(u, c, "저장본");
    } catch {}
  }
  for (const f of fs.readdirSync(OUT).filter((x) => x.startsWith("source-") && x.endsWith(".txt"))) {
    try {
      const t = fs.readFileSync(path.join(OUT, f), "utf8");
      for (const m of t.matchAll(/===== \[\d+\] (https?:\/\/\S+) =====\s*\n(?:CAPTURED-BY:[^\n]*\n)?(?:SHOT:[^\n]*\n)?CHARS:\s*(\d+)/g)) add(m[1], Number(m[2]), f.replace(/^source-|\.txt$/g, ""));
    } catch {}
  }
  const ins = /knia|klia|fss\.or\.kr|fsc\.go\.kr|e-insmarket|silson24|law\.go\.kr|insure|nhis|hira|보험/i;
  const list = [...seen.values()];
  const score = (r) => (toks.some((t) => r.hint.includes(t)) ? 2 : 0) + (ins.test(r.url) ? 1 : 0);
  return list.sort((a, b) => score(b) - score(a) || b.chars - a.chars).slice(0, 60);
}
/** 주제어 — 키워드에서 흔한 말을 뺀 것. 추출본에 이 말이 없으면 그 출처는 주제와 다른 문서다 (2026-09-10 첫 시험: '무해지' 글에 실손 페이지 4개가 붙었다) */
const STOP = new Set(["보험", "실비", "실손", "청구", "신청", "방법", "조건", "가입", "보험료", "보험금", "비용", "기준", "대상", "종류", "추천", "비교", "차이", "정리", "뜻", "이란"]);
function topicTokens(keyword) {
  const toks = String(keyword).split(/\s+/).map((t) => t.replace(/[^가-힣A-Za-z0-9]/g, "")).filter((t) => t.length >= 2 && !STOP.has(t));
  return toks.length ? toks : String(keyword).split(/\s+/).filter((t) => t.length >= 2);
}
/** 공식 도메인 한정 검색 — Playwright 로 네이버 웹문서 탭을 연다 (collect-keywords 와 같은 길).
 *  fetch 로 여는 DDG·Bing 은 몇 번 만에 봇 판정을 받아 0건을 돌려줬다 (2026-09-10 2차 시험).
 *  설계가 URL 을 지어내지 않게, 실제로 있는 공식 페이지의 제목·주소를 준다. */
const OFFICIAL = ["fss.or.kr", "fsc.go.kr", "knia.or.kr", "klia.or.kr", "law.go.kr", "korea.kr", "e-insmarket.or.kr"];
async function discoverSources(ctx) {
  const file = path.join(OUT, `found-${ctx.slug}.json`);
  if (fs.existsSync(file) && !ctx.redo("plan")) { const f = readJson(file); if (f.length) return f; }
  const found = [];
  const seen = new Set();
  const { chromium } = await import("playwright");
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const queries = OFFICIAL.map((dom) => ({ q: `${ctx.keyword} site:${dom}`, dom }));
  queries.push({ q: `${ctx.topic.join(" ")} 보험 유의사항 금융감독원`, dom: "일반" });
  for (const { q, dom } of queries) {
    try {
      await page.goto(`https://search.naver.com/search.naver?where=web&query=${encodeURIComponent(q)}`, { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForTimeout(1500);
      const rows = await page.evaluate(() => {
        const best = new Map();
        for (const a of Array.from(document.querySelectorAll("a[href]"))) {
          const u = a.href;
          if (!/^https?:/.test(u) || /naver\.com|navercorp|pstatic|naver\.me/.test(u)) continue;
          const t = (a.textContent || "").replace(/새 창 열림/g, "").replace(/\s+/g, " ").trim();
          if (t.length < 6 || /›/.test(t)) continue;
          const p = best.get(u);
          if (!p || (t.length > p.length && t.length <= 90)) best.set(u, t);
        }
        return [...best.entries()];
      });
      let n = 0;
      for (const [u, t] of rows) {
        if (seen.has(u) || n >= 6) continue;
        if (/fileDown|FileDown|\.(pdf|hwp|hwpx|xlsx?|docx?|zip)(\?|$)/i.test(u) || /^https?:\/\/[^/]+\/?$/.test(u)) continue;
        if (dom !== "일반" && !u.includes(dom)) continue;
        if (dom === "일반" && !/\.(go|or)\.kr/.test(u)) continue;
        seen.add(u); n++;
        found.push({ title: t.slice(0, 90), url: u, dom });
      }
    } catch (e) { ctx.notes.push(`검색 실패 (${q}): ${String(e.message).split("\n")[0].slice(0, 80)}`); }
  }
  await browser.close();
  writeJson(file, found);
  return found;
}
/** 추출본에서 주제와 맞는 출처 블록만 남긴다 — 작성·대조 풀에 무관한 문서의 숫자가 섞이지 않게 */
function relevantSourceText(text, okUrls) {
  const parts = String(text || "").split(/(?=\n===== \[\d+\] )/);
  const keep = parts.filter((p) => { const m = p.match(/^\n?===== \[\d+\] (\S+) =====/); return m ? okUrls.has(m[1]) : false; });
  return keep.join("\n");
}
async function guard(ctx) {
  assertSubscriptionOnly();
  if (!/^[a-z0-9-]+$/.test(ctx.slug)) throw new Error(`slug 는 영문 lowercase-hyphen 만: ${ctx.slug}`);
  if (!ctx.keyword) throw new Error('--keyword "실검색어 키워드" 가 필요합니다 (scripts/output/{키워드}.txt 또는 .json)');
  if (!ctx.hubSlug || !fs.existsSync(ctx.hubFile)) throw new Error(`--hub 허브 slug 가 없거나 파일이 없습니다: ${ctx.hubFile}`);
  if (!ctx.policyDir) throw new Error("--dir 폴더(content/{폴더}) 가 필요합니다 (예: 실손보험)");
  if (!/^[가-힣A-Za-z0-9]+$/.test(ctx.policyDir)) throw new Error(`폴더 이름은 한글·영숫자만 (export 이름의 뿌리가 된다): ${ctx.policyDir}`);
  if (isWired(ctx.slug) && !fs.existsSync(ctx.planFile)) throw new Error(`${ctx.slug} 는 registry 에 이미 있습니다. 다른 slug 를 씁니다`);
  if (!fs.existsSync(ctx.example)) throw new Error(`정본 글이 없습니다: ${ctx.example}`);
  const hubSrc = fs.readFileSync(ctx.hubFile, "utf8");
  ctx.hubTitle = hubSrc.match(/^\s{2}title:\s*'([^']+)'/m)?.[1] || ctx.hubSlug;
  if (!/export const \w+Spokes\s*=\s*\[/.test(hubSrc)) throw new Error(`허브 파일에 Spokes 배열이 없습니다: ${ctx.hubFile}`);

  let kw = loadKeywords(ctx.keyword);
  if (!kw) {
    log("keywords", `실검색어 자료가 없어 수집합니다: npx tsx scripts/collect-keywords.ts "${ctx.keyword}" (Playwright)`);
    const r = await runTsx(path.join("scripts", "collect-keywords.ts"), [ctx.keyword]);
    kw = loadKeywords(ctx.keyword);
    if (!kw) throw new Error(`실검색어 수집 실패 (exit ${r.code})\n${r.out.slice(-800)}\n  scripts/output/${ctx.keyword}.txt 에 한 줄에 하나씩 적어 두면 그걸 씁니다`);
  }
  if (kw.queries.length < 5) throw new Error(`실검색어가 ${kw.queries.length}개뿐입니다 (${kw.file}) — 타이틀·소제목을 조립할 수 없습니다. 목록을 더 넣습니다`);
  ctx.keywords = kw;
  const ex = existingSpokes(ctx);
  ctx.existingTitles = ex.titles; ctx.spokePaths = new Set(ex.paths);
  ctx.indexTitles = fs.existsSync(path.join("reference", "titles", "INDEX.md"))
    ? fs.readFileSync(path.join("reference", "titles", "INDEX.md"), "utf8").split("\n").filter((l) => /^-\s+\S/.test(l)).map((l) => l.replace(/^-\s+/, "").trim())
    : [];
  ctx.registry = sourceRegistry(ctx.keyword);
  ctx.topic = topicTokens(ctx.keyword);
  log("guard", `실검색어 ${kw.queries.length}개 (${path.basename(kw.file)}) · 허브 "${ctx.hubTitle}" 스포크 ${ex.slugs.length}개 · 출처 등록부 ${ctx.registry.length}건`);
}

/* ── 1. 설계 ── */
async function titleCandidates(ctx) {
  if (ctx.fixedTitle) return [];
  const state = path.join(OUT, `state-${ctx.slug}.json`);
  const r = await runTsx(path.join("scripts", "write.ts"), [ctx.keyword, "--1", "--slug", ctx.slug]);
  try {
    const s = readJson(state);
    if (s.keyword === ctx.keyword && Array.isArray(s.candidates) && s.candidates.length) return s.candidates;
  } catch {}
  ctx.notes.push(`write.ts --1 이 후보를 못 냈다 (exit ${r.code}) — 설계 단계가 실검색어 조각으로 직접 조립`);
  return [];
}
function normalizePlan(p, ctx, candidates) {
  const pick = Number(p.titlePick);
  if (!ctx.fixedTitle && pick && candidates.length) {
    const c = candidates.find((x) => x.n === pick);
    if (c && (!p.title || norm(p.title) === norm(c.title))) { p.title = c.title; p.pattern = p.pattern || c.pattern; p.titleFrom = [...new Set([...(p.titleFrom || []), ...c.from])]; }
  }
  if (ctx.fixedTitle) p.title = ctx.fixedTitle;
  p.subheads = (Array.isArray(p.subheads) ? p.subheads : []).map((s) => (typeof s === "string" ? { q: one(s), from: "" } : { q: one(s?.q), from: one(s?.from) }));
  p.buttons = p.buttons || {}; p.buttons.hero = p.buttons.hero || {}; p.buttons.slots = Array.isArray(p.buttons.slots) ? p.buttons.slots : [];
  p.sources = (Array.isArray(p.sources) ? p.sources : []).map((s) => ({ url: one(s?.url), name: one(s?.name), why: one(s?.why) }));
  const rel = (u) => String(u || "").replace(/^https?:\/\/gov\.jjyu\.co\.kr(\/policy\/[^\s"']*)$/, "$1");
  p.buttons.hero.url = rel(p.buttons.hero.url);
  for (const s of p.buttons.slots) s.url = rel(s?.url);
  p.faq = (Array.isArray(p.faq) ? p.faq : []).map(one).filter(Boolean);
  p.misconceptions = (Array.isArray(p.misconceptions) ? p.misconceptions : []).map(one).filter(Boolean);
  Object.assign(p, { slug: ctx.slug, keyword: ctx.keyword, hubSlug: ctx.hubSlug, hubPath: ctx.hubPath, policyDir: ctx.policyDir });
  return p;
}
async function stagePlan(ctx, deadCtas = [], extraNote = "") {
  if (fs.existsSync(ctx.planFile) && !ctx.redo("plan") && !deadCtas.length && !extraNote) {
    const p = readJson(ctx.planFile);
    if (!ctx.fixedTitle || p.title === ctx.fixedTitle) { log("plan", `설계도 재사용 — "${p.title}" (소제목 ${p.subheads.length})`); return p; }
    log("plan", "저장된 설계도의 타이틀이 고정 타이틀과 달라 다시 세웁니다");
  }
  const candidates = await titleCandidates(ctx);
  ctx.found = ctx.found || await discoverSources(ctx);
  const given = path.join(OUT, `urls-${ctx.slug}.txt`);
  if (fs.existsSync(given)) {
    const urls = fs.readFileSync(given, "utf8").split(/\r?\n/).map((l) => l.trim()).filter((l) => /^https?:\/\//.test(l));
    ctx.found = [...urls.map((u) => ({ title: "사람이 준 1차 출처 — 반드시 sources 에 넣는다", url: u, dom: "given" })), ...ctx.found.filter((f) => !urls.includes(f.url))];
  }
  log("plan", `공식 도메인 검색 후보 ${ctx.found.length}건 (found-${ctx.slug}.json) · 주제어 ${ctx.topic.join("·")}`);
  const base = {
    found: ctx.found, topic: ctx.topic,
    slug: ctx.slug, keyword: ctx.keyword, hubSlug: ctx.hubSlug, hubTitle: ctx.hubTitle, hubPath: ctx.hubPath, policyDir: ctx.policyDir,
    queries: ctx.keywords.queries, byTheme: ctx.keywords.byTheme, candidates, existingTitles: ctx.existingTitles,
    spokePaths: [...ctx.spokePaths].filter((p) => p.endsWith("/")), registry: ctx.registry, today: today(), fixedTitle: ctx.fixedTitle,
  };
  let retryNote = [
    deadCtas.length ? `이 버튼 주소들은 Playwright 로 열어 보니 죽어 있었습니다. 다시 고르지 마세요:\n${deadCtas.map((c) => `- ${c.url} — ${c.why}`).join("\n")}\n확실하지 않으면 허브 경로 ${ctx.hubPath} 나 기존 스포크 경로를 씁니다.` : "",
    extraNote,
  ].filter(Boolean).join("\n\n");
  const cctx = { keyword: ctx.keyword, queries: ctx.keywords.queries, existingTitles: ctx.existingTitles, indexTitles: ctx.indexTitles, hubPath: ctx.hubPath, spokePaths: ctx.spokePaths, fixedTitle: ctx.fixedTitle };
  for (let attempt = 1; attempt <= 3; attempt++) {
    log("plan", `설계도 작성 ${attempt}/3 (claude -p, 후보 ${candidates.length}개)`);
    const { text } = await ask(ctx, planPrompt({ ...base, retryNote }), { label: `plan${attempt}`, expect: "1~2분" });
    let plan;
    try { plan = normalizePlan(extractJson(text), ctx, candidates); } catch (e) { retryNote = e.message; continue; }
    const errs = checkPlan(plan, cctx);
    if (!errs.length) {
      plan.plannedAt = today();
      if (deadCtas.length) plan.deadCtas = deadCtas;
      writeJson(ctx.planFile, plan);
      log("plan", `"${plan.title}" [${plan.pattern}] — 소제목 ${plan.subheads.length} · 버튼 ${1 + plan.buttons.slots.length} · 출처 ${plan.sources.length}`);
      return plan;
    }
    retryNote = errs.map((e) => `- ${e}`).join("\n");
    log("plan", `설계도 거부 ${errs.length}건:\n${retryNote.split("\n").map((l) => "           " + l).join("\n")}`);
  }
  throw new Error("설계도를 3번 만들어도 규칙을 못 맞췄습니다:\n" + retryNote);
}

/* ── 2. 버튼 목적지 실접속 — 목적지가 확정되기 전에는 문구를 쓰지 않는다 (title-workflow.md) ── */
const BAD_TITLE = /^(안내|공지|점검|오류|error|404|페이지를 찾을 수 없|접근이 거부|Access Denied|Forbidden)|개편\s*안내|서비스\s*종료|이전\s*안내|매크로|Mbuster/i;
async function stageCta(ctx, plan) {
  const urls = [...new Set([plan.buttons.hero.url, ...plan.buttons.slots.map((s) => s.url)].filter(Boolean))];
  plan.ctaChecked = plan.ctaChecked || {};
  const todo = urls.filter((u) => !plan.ctaChecked[u] || ctx.redo("cta"));
  if (!todo.length) { log("cta", `버튼 ${urls.length}곳 전부 확인됨 (기록 있음)`); return plan; }
  const internal = (u) => u === ctx.hubPath || u === ctx.hubPath + "/" || ctx.spokePaths.has(u);
  let browser = null;
  for (const u of todo) {
    let ok = false, title = "", why = "";
    if (internal(u)) { ok = true; title = "내부 경로"; }
    else if (!/^https?:\/\//.test(u)) why = "주소가 아니다";
    else {
      if (!browser) { const { chromium } = await import("playwright"); browser = await chromium.launch(); }
      const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
      try {
        const res = await page.goto(u, { waitUntil: "domcontentloaded", timeout: 45000 });
        await page.waitForTimeout(1500);
        title = one(await page.title().catch(() => ""));
        const status = res?.status() ?? 0;
        const text = one(await page.locator("body").innerText({ timeout: 10000 }).catch(() => ""));
        if (status >= 400) why = `HTTP ${status}`;
        else if (BAD_TITLE.test(title) || BAD_TITLE.test(text.slice(0, 200))) why = `안내·차단 페이지 (제목: ${title.slice(0, 40)})`;
        else if (text.length < 120) why = `본문이 ${text.length}자 — 빈 화면·차단`;
        else ok = true;
      } catch (e) { why = `열리지 않음: ${String(e.message).split("\n")[0].slice(0, 80)}`; }
      finally { await page.close().catch(() => {}); }
    }
    plan.ctaChecked[u] = { ok, title, why, at: today() };
    log("cta", `${ok ? "✓" : "✗"} ${u}${ok ? (title ? ` (${title.slice(0, 40)})` : "") : ` — ${why}`}`);
  }
  if (browser) await browser.close();
  const dead = urls.filter((u) => !plan.ctaChecked[u]?.ok);
  if (dead.length) {
    const list = dead.map((u) => ({ url: u, why: plan.ctaChecked[u].why }));
    // 한 번은 설계를 다시 시킨다. 그래도 죽으면 허브로 보낸다 (스포크 버튼은 허브로 모으는 것이 원래 규칙 — lib/cta.ts hubCta)
    if (!ctx.ctaReplanned) {
      ctx.ctaReplanned = true;
      log("cta", `죽은 버튼 ${dead.length}개 — 설계를 한 번 다시 세웁니다`);
      const next = await stagePlan(ctx, [...(plan.deadCtas || []), ...list]);
      return stageCta(ctx, next);
    }
    for (const u of dead) {
      if (plan.buttons.hero.url === u) plan.buttons.hero.url = ctx.hubPath;
      for (const s of plan.buttons.slots) if (s.url === u) s.url = ctx.hubPath;
    }
    ctx.notes.push(`죽은 버튼을 허브로 돌렸다: ${list.map((c) => `${c.url} — ${c.why}`).join(" / ")}`);
  }
  writeJson(ctx.planFile, plan);
  return plan;
}

/* ── 3. 사실 — Playwright 추출본 + 화면 캡처 (capture-source.ts) + URL 저장본 (fetch-source.ts) ── */
function sourceHas(text, u) { return text.includes(`] ${u} =====`); }
async function stageCollect(ctx, plan) {
  const urls = plan.sources.map((s) => s.url);
  let text = fs.existsSync(ctx.sourceFile) ? fs.readFileSync(ctx.sourceFile, "utf8") : "";
  const need = ctx.redo("collect") ? urls : urls.filter((u) => !sourceHas(text, u));
  if (need.length) {
    log("collect", `Playwright 추출 — 출처 ${need.length}곳 (capture-source.ts)`);
    const r = await runTsx(path.join("scripts", "capture-source.ts"), [ctx.slug, ...need], { quiet: false });
    ctx.collectTail = r.out.slice(-1500);
    text = fs.existsSync(ctx.sourceFile) ? fs.readFileSync(ctx.sourceFile, "utf8") : "";
    plan.capturesReviewed = {}; // 캡처 파일 번호가 이번 실행 기준으로 다시 매겨진다 — 옛 기록은 다른 화면을 가리킨다
  } else log("collect", `추출본 재사용 — ${urls.length}곳 전부 있음`);
  // 저장본(scripts/output/sources/)도 받아 둔다 — check-source-backing 이 글이 인용한 URL 마다 이걸 찾는다
  const snapDir = path.join(OUT, "sources");
  const noSnap = urls.filter((u) => !fs.existsSync(path.join(snapDir, snapName(u))));
  if (noSnap.length) await runTsx(path.join("scripts", "fetch-source.ts"), noSnap);
  /* 열렸다고 근거가 아니다 — 그 문서가 이 주제를 다루는지 본다. 블록에 주제어가 없으면 다른 문서다 */
  const blockOf = (u) => { const i = text.indexOf(`] ${u} =====`); if (i < 0) return ""; const j = text.indexOf("\n===== [", i + 10); return text.slice(i, j < 0 ? undefined : j); };
  for (const s of plan.sources) {
    const b = blockOf(s.url);
    if (!b) { s.ok = false; s.why = "열리지 않음"; continue; }
    const hit = ctx.topic.some((t) => b.includes(t));
    s.ok = hit; s.why = hit ? "" : `본문에 주제어(${ctx.topic.join("·")})가 없다 — 다른 문서`;
  }
  const ok = plan.sources.filter((s) => s.ok);
  const fails = plan.sources.filter((s) => !s.ok);
  if (fails.length) ctx.notes.push(`근거로 쓰지 않은 출처: ${fails.map((s) => `${s.url} (${s.why})`).join(" / ")}`);
  if (!ok.length) {
    const note = `이 출처들은 열렸지만 본문에 주제어(${ctx.topic.join("·")})가 한 번도 없었습니다 — 주제와 다른 문서입니다. 다시 고르지 마세요:\n${fails.map((s) => `- ${s.url} — ${s.why}`).join("\n")}\n아래 "공식 도메인 검색 후보" 의 제목을 보고 이 주제를 실제로 다루는 페이지를 고릅니다. 없으면 sources 를 비우지 말고 가장 가까운 공식 안내 페이지를 적되, 확신이 없으면 그 사실을 "why" 에 씁니다.`;
    if (!ctx.sourceReplanned) {
      ctx.sourceReplanned = true;
      log("collect", "주제와 맞는 출처가 하나도 없다 — 설계를 한 번 다시 세운다");
      let next = await stagePlan(ctx, plan.deadCtas || [], note);
      next = await stageCta(ctx, next);
      return stageCollect(ctx, next);
    }
    throw new Error(`주제와 맞는 1차 출처를 못 찾았습니다 (열린 출처 ${plan.sources.length}곳 모두 '${ctx.topic.join("·")}' 언급 없음).\n  scripts/output/${ctx.keyword}.txt 옆에 출처 URL 을 아는 대로 적어 주면 됩니다: scripts/output/urls-${ctx.slug}.txt (한 줄에 하나)\n${ctx.collectTail || ""}`);
  }
  ctx.sourceText = relevantSourceText(text, new Set(ok.map((s) => s.url)));
  const short = text.length < 3000;
  if (short) ctx.notes.push(`추출본이 ${text.length}자로 짧다 — 아코디언·JS 로딩·차단 의심. 캡처를 본다`);
  writeJson(ctx.planFile, plan);
  log("collect", `추출본 ${ctx.sourceText.length}자 (주제 일치 블록만) · 출처 ${ok.length}/${plan.sources.length} · 캡처 ${capturesOf(ctx).length}장`);
  return plan;
}
const capturesOf = (ctx) => fs.readdirSync(path.join(OUT, "captures")).filter((f) => f.startsWith(ctx.slug + "-") && f.endsWith(".png"));

/* ── 3-B. 캡처 읽기 (vision) — 텍스트 추출은 표의 열을 뭉갠다. 어느 행이 어느 회사인지는 눈으로 본다 ── */
async function stageCaptures(ctx, plan) {
  plan.capturesReviewed = plan.capturesReviewed || {};
  if (ctx.skipCaptures) { log("captures", "건너뜀 (--skip-captures)"); return; }
  const pngs = capturesOf(ctx);
  let unread = pngs.filter((f) => !String(plan.capturesReviewed[f] || "").trim() || ctx.redo("captures"));
  if (!unread.length) { log("captures", `캡처 ${pngs.length}장 전부 읽음 (기록 있음)`); return; }
  for (let attempt = 1; attempt <= 2 && unread.length; attempt++) {
    log("captures", `캡처 ${unread.length}장 읽기 ${attempt}/2 (claude -p + Read)`);
    const files = unread.map((f) => path.resolve(OUT, "captures", f).replace(/\\/g, "/"));
    const { text } = await ask(ctx, capturesPrompt({ files }), { tools: ["Read"], label: `captures${attempt}`, expect: "30초~1분" });
    let obj = {};
    try { obj = extractJson(text); } catch (e) { ctx.notes.push(`캡처 답 JSON 실패 ${attempt}: ${e.message.split("\n")[0]}`); continue; }
    for (const [k, v] of Object.entries(obj)) {
      const name = path.basename(String(k).replace(/\\/g, "/"));
      if (pngs.includes(name) && String(v).trim().length >= 10) plan.capturesReviewed[name] = String(v).trim();
    }
    writeJson(ctx.planFile, plan);
    unread = pngs.filter((f) => !String(plan.capturesReviewed[f] || "").trim());
  }
  if (unread.length) ctx.notes.push(`캡처 ${unread.length}장을 읽지 못했다: ${unread.join(", ")}`);
  log("captures", `capturesReviewed ${Object.keys(plan.capturesReviewed).length}장 기록`);
}

/* ── 4. 작성 ── */
function writerInputs(ctx, plan) {
  const sourceUrls = plan.sources.filter((s) => s.ok).map((s) => s.url);
  const allowedUrls = new Set([...sourceUrls, plan.buttons.hero.url, ...plan.buttons.slots.map((s) => s.url), ctx.hubPath, ctx.hubPath + "/", ...ctx.spokePaths].filter(Boolean));
  const captures = Object.entries(plan.capturesReviewed || {}).map(([f, l]) => `- ${f}: ${l}`).join("\n");
  const pool = ctx.sourceText + "\n" + captures;
  return { sourceUrls, allowedUrls, captures, pool, digest: evidenceDigest(ctx.sourceText), n: plan.subheads.length };
}
const normalizeDraft = (d) => {
  if (d && d.abort) throw new Error(`작성 중단 — 모델이 근거 부족을 알렸다: ${one(d.abort)}`);
  if (d && d.spoke && typeof d.spoke === "object") return { spoke: d.spoke, sourceName: one(d.sourceName), caveats: Array.isArray(d.caveats) ? d.caveats : [], notUsing: Array.isArray(d.notUsing) ? d.notUsing : [] };
  if (d && d.h1 && d.qa) return { spoke: d, sourceName: "", caveats: [], notUsing: [] };
  throw new Error("답에 spoke 객체가 없습니다");
};
async function stageWrite(ctx, plan, inputs) {
  if (fs.existsSync(ctx.draftFile) && !ctx.redo("write")) { log("write", "초안 재사용 (scripts/drafts)"); return readJson(ctx.draftFile); }
  const prompt = writePrompt({
    plan, digest: inputs.digest, captures: inputs.captures, canonSrc: fs.readFileSync(ctx.example, "utf8"), n: inputs.n,
    hubPath: ctx.hubPath, allowedUrls: inputs.allowedUrls, sourceUrls: inputs.sourceUrls, existingTitles: ctx.existingTitles, today: today(),
  });
  log("write", `글 작성 (claude -p, 지시문 ${(prompt.length / 1000).toFixed(0)}k자, 정본 ${path.basename(ctx.example)}) — 이 단계가 가장 깁니다`);
  const { text, ms } = await ask(ctx, prompt, { label: "write", expect: "4~8분", timeoutMs: 30 * 60 * 1000 });
  const draft = normalizeDraft(extractJson(text));
  writeJson(ctx.draftFile, draft);
  log("write", `초안 저장 — 카드 ${draft.spoke.qa?.length ?? 0} · ${mins(ms)}`);
  return draft;
}

/* ── 5. 삽입·배선 (new-spoke.ts 가 뼈대와 배선을 만들고, 그 위에 본문을 덮어쓴다) ── */
function emit(ctx, plan, draft) {
  const contentPath = contentPathOf(ctx.policyDir, plan.fileName);
  const specPath = path.join(OUT, `spec-${ctx.slug}.json`);
  const spec = specOf({ plan, slug: ctx.slug, sourceFile: ctx.sourceFile, hubSlug: ctx.hubSlug, policyDir: ctx.policyDir });
  writeJson(specPath, spec);
  if (!isWired(ctx.slug)) {
    if (fs.existsSync(contentPath)) throw new Error(`${contentPath} 가 이미 있는데 registry 에는 없다 — 손으로 정리한 뒤 다시`);
    const r = spawnSync(`npx ${["tsx", path.join("scripts", "new-spoke.ts"), "--spec", specPath].map(sq).join(" ")}`, [], { shell: true, encoding: "utf8" });
    if (r.status !== 0 || !fs.existsSync(contentPath)) throw new Error(`new-spoke.ts 실패:\n${(r.stdout || "") + (r.stderr || "")}`);
    log("insert", `뼈대·배선 — registry.ts + ${ctx.hubSlug}.ts (new-spoke.ts)`);
  }
  fs.writeFileSync(contentPath, tsxOf({ draft, plan, slug: ctx.slug, today: today(), exportName: exportNameOf(ctx.policyDir, plan.fileName) }));
  ctx.contentPath = contentPath; ctx.emitted = true;
  writeJson(path.join(OUT, `stage2-${ctx.slug}.json`), stage2Of({ plan, slug: ctx.slug, keyword: ctx.keyword, today: today() }));
  fs.writeFileSync(path.join(OUT, `outline-${ctx.slug}.md`), outlineMd({ plan, draft, slug: ctx.slug, keyword: ctx.keyword, today: today() }));
  fs.writeFileSync(path.join(OUT, `factsheet-${ctx.slug}.md`), factsheetMd({ plan, draft, slug: ctx.slug, keyword: ctx.keyword, today: today(), sourceChars: ctx.sourceText.length }));
  log("insert", `본문 ${path.relative(ROOT, contentPath)} + stage2·outline·factsheet`);
}
function rollback(ctx, plan) {
  if (!ctx.emitted) return;
  try { if (ctx.contentPath && fs.existsSync(ctx.contentPath)) fs.rmSync(ctx.contentPath); } catch {}
  const n = unwire({ slug: ctx.slug, hubSlug: ctx.hubSlug, policyDir: ctx.policyDir, fileName: plan.fileName, title: plan.title });
  ctx.emitted = false;
  log("rollback", `본문 삭제 · 배선 ${n}곳 되돌림 (초안·설계도·추출본은 남는다)`);
}

/* ── 6. 게이트 — pre-push 와 같은 검사기를 이 글에만 돌린다 ── */
function trimOut(out, max = 4000) {
  const lines = String(out).split(/\r?\n/).filter((l) => l.trim() && !/^=+$/.test(l) && !/npm warn|ExperimentalWarning/i.test(l));
  const s = lines.join("\n");
  return s.length > max ? s.slice(-max) : s;
}
async function varietyProblems(ctx) {
  const r = await runTsx(path.join("scripts", "check-button-variety.ts"), [ctx.policyDir]);
  return r.out.split(/\r?\n/).filter((l) => /^\s*❌/.test(l)).map((l) => l.trim());
}
async function gates(ctx, plan) {
  const results = [];
  const file = ctx.contentPath;
  const rel = path.relative(ROOT, file).replace(/\\/g, "/");
  const fname = path.basename(file);

  // tsc — 이 파일만 (레포에 기존 오류 1,230개가 있어 전체를 물을 수 없다: check-type-shape.ts 와 같은 이유)
  log("gate", "tsc (이 파일만)");
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "gov-tsc-"));
  fs.writeFileSync(path.join(tmp, "tsconfig.json"), JSON.stringify({
    extends: path.resolve("tsconfig.json").replace(/\\/g, "/"),
    compilerOptions: { noEmit: true, incremental: false, composite: false, skipLibCheck: true },
    include: [], files: [path.resolve(file).replace(/\\/g, "/"), path.resolve("next-env.d.ts").replace(/\\/g, "/")].filter(fs.existsSync),
  }));
  const t = await runShell("npx", ["tsc", "-p", path.join(tmp, "tsconfig.json"), "--noEmit"]);
  const mine = t.out.split(/\r?\n/).filter((l) => l.includes(fname) && /error TS\d+/.test(l));
  results.push({ name: "tsc (타입)", ok: mine.length === 0, out: mine.join("\n") || (t.code === 0 ? "ok" : "(이 파일 오류 없음 — 다른 파일 오류는 무시)") });
  if (mine.length) return results;

  const run = async (name, script, args) => {
    log("gate", name);
    const r = await runTsx(path.join("scripts", script), args);
    results.push({ name, ok: r.code === 0, out: trimOut(r.out) });
    return r;
  };
  await run("원문 대조 (check-source-match)", "check-source-match.ts", [rel]);
  await run("수치 ↔ 출처 (check-source-backing)", "check-source-backing.ts", [rel]);
  log("gate", "버튼 문구 도배 (check-button-variety, 이 글이 새로 만든 문제만)");
  const after = await varietyProblems(ctx);
  const fresh = after.filter((l) => !ctx.varietyBaseline.includes(l));
  results.push({ name: "버튼 도배 (check-button-variety)", ok: fresh.length === 0, out: fresh.join("\n") || `ok (폴더에 원래 있던 지적 ${ctx.varietyBaseline.length}건은 이 글 책임이 아니다)` });
  await run("승인 도장 (check-stage-approval)", "check-stage-approval.ts", []);
  await run("출처 링크 (check-source-links)", "check-source-links.ts", []);
  await run("배선 (verify-integrity)", "verify-integrity.ts", ["--strict"]);

  if (!ctx.skipRender) {
    const url = `http://localhost:${PORT}${ctx.hubPath}/${ctx.slug}/`;
    try {
      await ensureDev(url);
      log("gate", "화면 (dev 서버 렌더 + 캡처)");
      const { chromium } = await import("playwright");
      const b = await chromium.launch();
      const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
      await p.goto(url, { waitUntil: "domcontentloaded", timeout: 240000 });
      await p.waitForTimeout(2500);
      const text = one(await p.locator("body").innerText({ timeout: 30000 }).catch(() => ""));
      const title = await p.title().catch(() => "");
      const shot = path.join(REPORTS, `${ctx.slug}.png`);
      await p.screenshot({ path: shot, fullPage: true }).catch(async () => p.screenshot({ path: shot }));
      await b.close();
      const problems = [];
      if (/404|not found/i.test(title)) problems.push(`페이지 제목이 404: ${title}`);
      if (!text.includes(one(plan.title).slice(0, 12))) problems.push("h1 이 화면에 없다");
      const btnN = (text.match(new RegExp(plan.buttons.hero.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
      if (!btnN) problems.push(`상단 버튼 "${plan.buttons.hero.label}" 이 화면에 없다`);
      if (!/핵심콕콕/.test(text)) problems.push("핵심콕콕 박스가 화면에 없다");
      results.push({ name: "화면 (dev 렌더)", ok: problems.length === 0, out: problems.join("\n") || `ok — ${url}` });
      ctx.shot = shot;
    } catch (e) {
      results.push({ name: "화면 (dev 렌더)", ok: false, out: `렌더 확인 실패: ${e.message.split("\n")[0]}` });
    }
  }
  return results;
}

/* ── 7. 보고 ── */
function writeReport(ctx, { ok, plan, error }) {
  const L = [];
  L.push(`# ${ok ? "✅ 통과" : "❌ 실패"} — ${ctx.slug}`, "");
  L.push(`- 타이틀: ${plan?.title || "(설계도 없음)"}${plan?.pattern ? ` [${plan.pattern}]` : ""}`);
  L.push(`- 키워드: ${ctx.keyword} · 허브: ${ctx.hubTitle || ctx.hubSlug} (${ctx.hubPath}) · 폴더: ${ctx.policyDir}`);
  L.push(`- 실행: ${new Date().toLocaleString("ko-KR")} · 총 ${mins(Date.now() - ctx.t0)} · 고친 횟수 ${ctx.fixRounds} · 모델 ${ctx.model}`);
  if (ctx.contentPath && ok) L.push(`- 글: ${path.relative(ROOT, ctx.contentPath).replace(/\\/g, "/")} → https://gov.jjyu.co.kr${ctx.hubPath}/${ctx.slug}/`);
  L.push(`- 정본으로 쓴 글: ${path.relative(ROOT, ctx.example).replace(/\\/g, "/")}`, "");
  L.push("## 단계별 시간·사용량", "| 단계 | 시간 | 모델 호출 | 입력 토큰 | 출력 토큰 | 환산 $ |", "|---|---|---|---|---|---|");
  const kk = (n) => (n >= 1000 ? `${Math.round(n / 1000)}k` : String(n || 0));
  for (const [k, v] of Object.entries(ctx.timings)) {
    const u = ctx.meter.byStage[k];
    L.push(`| ${k} | ${mins(v)} | ${u?.calls ?? "-"} | ${u ? kk(u.input) : "-"} | ${u ? kk(u.output) : "-"} | ${u?.cost ? u.cost.toFixed(2) : "-"} |`);
  }
  const m = ctx.meter;
  L.push(`| **합계** | **${mins(Date.now() - ctx.t0)}** | **${m.calls}** | **${kk(m.input)}** | **${kk(m.output)}** | **${m.cost.toFixed(2)}** |`, "");
  L.push("> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다. 호출마다 고정비(시스템 프롬프트) 약 3만 토큰이 붙습니다.", "");
  if (plan) {
    L.push("## 설계도 (구성표)");
    L.push(`- 타이틀 조각: ${(plan.titleFrom || []).join(" · ")} · 참조 캡처: ${plan.refCapture} — "${plan.refTitle}"`);
    const slots = slotsFor(plan.subheads.length);
    plan.subheads.forEach((s, i) => L.push(`${i + 1}. ${s.q}${slots.includes(i) ? "  ← 버튼 슬롯" : ""}${s.from ? `  (실검색어: ${s.from})` : ""}`));
    L.push(`- 상단 버튼: [${plan.buttons.hero.label}] → ${plan.buttons.hero.url}`);
    for (const s of plan.buttons.slots) L.push(`- qa${Number(s.qaIndex) + 1} 버튼: [${s.label}] → ${s.url}`);
    for (const [u, c] of Object.entries(plan.ctaChecked || {})) L.push(`  - ${c.ok ? "✓" : "✗"} ${u}${c.title ? ` (${one(c.title).slice(0, 50)})` : ""}${c.why ? ` — ${c.why}` : ""}`);
    L.push(`- 출처: ${plan.sources.map((s) => `${s.ok === false ? "✗ " : ""}${s.url}`).join(" , ")}`);
    if (plan.misconceptions?.length) L.push(`- 오해 소지: ${plan.misconceptions.join(" / ")}`);
    L.push("");
    L.push("## 증거");
    L.push(`- 추출본 scripts/output/source-${ctx.slug}.txt ${ctx.sourceText ? ctx.sourceText.length + "자" : "(없음)"} · 캡처 ${capturesOf(ctx).length}장 (scripts/output/captures/${ctx.slug}-*.png)`);
    for (const [f, l] of Object.entries(plan.capturesReviewed || {})) L.push(`  - ${f}: ${l}`);
    L.push("");
  }
  if (ctx.rounds.length) {
    L.push("## 검사 (회차별)");
    L.push(`| 검사 | ${ctx.rounds.map((_, i) => (i === 0 ? "초안" : `고침 ${i}`)).join(" | ")} |`, `|---|${ctx.rounds.map(() => "---").join("|")}|`);
    const names = [...new Set(ctx.rounds.flatMap((r) => r.map((x) => x.name)))];
    for (const n of names) L.push(`| ${n} | ${ctx.rounds.map((r) => { const x = r.find((y) => y.name === n); return x ? (x.ok ? "✓" : "✗") : "·"; }).join(" | ")} |`);
    L.push("");
    ctx.rounds.forEach((r, i) => {
      const bad = r.filter((x) => !x.ok);
      if (!bad.length) return;
      L.push(`## 실패 내용 — ${i === 0 ? "초안" : `고침 ${i}`}`);
      for (const x of bad) L.push(`### ${x.name}`, "```", trimOut(x.out, i === ctx.rounds.length - 1 ? 5000 : 1500), "```");
      L.push("");
    });
  }
  if (error) L.push("## 오류", "```", String(error), "```", "");
  if (ctx.notes.length) L.push("## 메모", ...ctx.notes.map((n) => `- ${n}`), "");
  if (ctx.shot) L.push("## 렌더 캡처", `![${ctx.slug}](${path.basename(ctx.shot)})`, "");
  L.push("## 다음");
  if (ok) L.push("- 이 보고서와 캡처를 보고 승인 → 배치가 다 끝나면 한 번에 커밋·푸시 (pre-push 게이트가 한 번 더 본다). 자동 푸시는 없다.", `- 산출물: scripts/output/{plan,stage2,outline,factsheet,spec}-${ctx.slug}.* · source-${ctx.slug}.txt · captures/${ctx.slug}-*.png`);
  else if (fs.existsSync(ctx.draftFile)) L.push(`- 초안은 scripts/drafts/${ctx.slug}.json 에 남아 있다. 실패 내용을 보고: 같은 명령 다시(초안 재사용, 검사만) · --from write (다시 쓰기) · --from plan (설계부터)`);
  else L.push("- 같은 명령을 다시 실행하면 끝난 단계(설계도·추출본)는 재사용하고 멈춘 곳부터 이어서 돈다");
  const file = path.join(REPORTS, `${ctx.slug}.md`);
  fs.writeFileSync(file, L.join("\n") + "\n");
  return file;
}
function commit(ctx, plan) {
  const paths = [ctx.contentPath, REG, ctx.hubFile, path.join("public", "search-index.json"), path.join("docs", "title-log.md"),
    ...["plan", "stage2", "spec"].map((k) => path.join(OUT, `${k}-${ctx.slug}.json`)),
    ...["outline", "factsheet"].map((k) => path.join(OUT, `${k}-${ctx.slug}.md`)),
    ctx.sourceFile, ...capturesOf(ctx).map((f) => path.join(OUT, "captures", f)),
    path.join(REPORTS, `${ctx.slug}.md`), ctx.shot].filter((p) => p && fs.existsSync(p));
  const add = spawnSync("git", ["add", "--", ...paths], { encoding: "utf8" });
  if (add.status !== 0) { ctx.notes.push("git add 실패: " + add.stderr); return ""; }
  const r = spawnSync("git", ["commit", "-m", `feat: ${plan.title}`, "-m", `npm run article ${ctx.slug} · 설계→버튼 확인→Playwright 추출→캡처 읽기→작성→게이트 자동 (claude -p sonnet, 고친 횟수 ${ctx.fixRounds})\n\nCo-Authored-By: Claude <noreply@anthropic.com>`], { encoding: "utf8" });
  if (r.status !== 0) { ctx.notes.push("git commit 실패: " + (r.stderr || r.stdout)); return ""; }
  return (ctx.committed = spawnSync("git", ["rev-parse", "--short", "HEAD"], { encoding: "utf8" }).stdout.trim());
}

/* ── 한 편 ── */
async function runOne(slug, flags) {
  const ctx = makeCtx(slug, flags);
  let plan = null, ok = false, error = null;
  console.log(`\n══════════ ${slug} ══════════`);
  console.log(`한 편에 보통 10~18분. 단계: 설계(1~2분) → 버튼 확인 → Playwright 추출(1~2분) → 캡처 읽기(1분) → 작성(4~8분) → 검사(2~4분) → 필요하면 고쳐 쓰기.`);
  console.log(`모델 ${ctx.model} · 호출 3~5회 · 상한 이 글 $${budget.perArticle}${flags.batch ? ` / 묶음 $${budget.batch}` : ""}`);
  try {
    await timed(ctx, "guard", () => guard(ctx));
    plan = await timed(ctx, "plan", () => stagePlan(ctx));
    plan = await timed(ctx, "cta", () => stageCta(ctx, plan));
    plan = await timed(ctx, "collect", () => stageCollect(ctx, plan));
    await timed(ctx, "captures", () => stageCaptures(ctx, plan));
    const inputs = writerInputs(ctx, plan);
    let draft = await timed(ctx, "write", () => stageWrite(ctx, plan, inputs));
    ctx.varietyBaseline = await varietyProblems(ctx);
    const cctx = { pool: inputs.pool, allowedUrls: inputs.allowedUrls, hubPath: ctx.hubPath, spokePaths: ctx.spokePaths };
    for (;;) {
      let results;
      const pre = checkDraft(draft, plan, cctx);
      if (pre.length) {
        log("check", `사전 검사 ${pre.length}건 실패`);
        for (const p of pre) console.log(`           · ${p.length > 200 ? p.slice(0, 200) + "…" : p}`);
        results = [{ name: "사전 검사 (article-check)", ok: false, out: pre.map((p) => "❌ " + p).join("\n") }];
      } else {
        log("check", "사전 검사 통과");
        await timed(ctx, "gates", async () => { emit(ctx, plan, draft); results = await gates(ctx, plan); });
      }
      ctx.rounds.push(results);
      ok = results.every((r) => r.ok);
      if (ok || ctx.fixRounds >= ctx.maxFix) break;
      ctx.fixRounds++;
      const failed = results.filter((r) => !r.ok);
      log("fix", `고치기 ${ctx.fixRounds}/${ctx.maxFix} — ${failed.map((r) => r.name).join(", ")}`);
      const failures = failed.map((r) => `### ${r.name}\n${trimOut(r.out)}`).join("\n\n");
      const { text } = await timed(ctx, "fix", () => ask(ctx, fixPrompt({ draft, failures, plan, digest: inputs.digest, captures: inputs.captures, n: inputs.n, hubPath: ctx.hubPath, allowedUrls: inputs.allowedUrls, sourceUrls: inputs.sourceUrls, today: today() }), { label: `fix${ctx.fixRounds}`, expect: "3~5분", timeoutMs: 30 * 60 * 1000 }));
      fs.copyFileSync(ctx.draftFile, `${ctx.draftFile}.r${ctx.fixRounds - 1}`);
      draft = normalizeDraft(extractJson(text));
      writeJson(ctx.draftFile, draft);
    }
    if (ok) {
      fs.appendFileSync(path.join("docs", "title-log.md"), titleLogBlock({ plan, slug }));
      if (ctx.commit) commit(ctx, plan);
    }
  } catch (e) {
    error = e.stack || e.message;
    console.error(`\n✗ ${slug}: ${e.message}`);
  }
  if (!ok && !ctx.keepOnFail && plan) rollback(ctx, plan);
  const report = writeReport(ctx, { ok, plan, error });
  console.log(`\n${ok ? "✅ 통과" : "❌ 실패"} — 보고서 ${report}${ctx.shot ? ` · 캡처 ${ctx.shot}` : ""}`);
  console.log(`   이 글이 쓴 양: 모델 호출 ${ctx.meter.calls}회 · ${fmtUsage(ctx.meter)} · ${mins(Date.now() - ctx.t0)}`);
  return { slug, ok, title: plan?.title || "", report, shot: ctx.shot || "", error: error ? String(error).split("\n")[0] : "", fixRounds: ctx.fixRounds, ms: Date.now() - ctx.t0, usage: { ...ctx.meter } };
}

/* ── 묶음 ── */
function parseBatch(file) {
  return fs.readFileSync(file, "utf8").split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith("#")).map((l) => {
    const [slug, keyword, hub, dir, title] = l.split("|").map((s) => s.trim());
    return { slug, keyword, hub, dir, title };
  });
}

const { flags, positional } = parseArgs(process.argv.slice(2));
if (flags.budget) budget.perArticle = Number(flags.budget);
if (flags["batch-budget"]) budget.batch = Number(flags["batch-budget"]);
try {
  if (flags.batch) {
    const items = parseBatch(String(flags.batch));
    const t0 = Date.now();
    console.log(`묶음 ${items.length}편 — 한 편씩 차례로 (글마다 claude -p 새 호출, 대화창에 쌓이지 않는다)`);
    const summary = [];
    for (const it of items) {
      const f = { ...flags, keyword: it.keyword, hub: it.hub, dir: it.dir, title: it.title || "" };
      delete f.batch;
      summary.push(await runOne(it.slug, f));
    }
    if (summary.some((s) => s.ok)) {
      log("index", "검색 색인 갱신 (build-search-index.ts) — pre-push 가 요구한다");
      await runTsx(path.join("scripts", "build-search-index.ts"), []);
    }
    const kk = (n) => (n >= 1000 ? `${Math.round(n / 1000)}k` : String(n || 0));
    const L = [`# 묶음 결과 — ${new Date().toLocaleString("ko-KR")}`, "", "| slug | 결과 | 타이틀 | 고침 | 시간 | 호출 | 입력 | 출력 | 환산 $ | 보고서 |", "|---|---|---|---|---|---|---|---|---|---|"];
    for (const s of summary) L.push(`| ${s.slug} | ${s.ok ? "✅" : "❌"} | ${s.title} | ${s.fixRounds} | ${mins(s.ms)} | ${s.usage.calls} | ${kk(s.usage.input)} | ${kk(s.usage.output)} | ${s.usage.cost.toFixed(2)} | ${path.basename(s.report)}${s.error ? ` — ${s.error}` : ""} |`);
    L.push(`| **합계 ${summary.filter((s) => s.ok).length}/${summary.length} 통과** | | | | ${mins(Date.now() - t0)} | **${batchMeter.calls}** | **${kk(batchMeter.input)}** | **${kk(batchMeter.output)}** | **${batchMeter.cost.toFixed(2)}** | |`);
    L.push("", "> 구독이라 실제 청구는 없습니다. 환산 $ 는 사용 한도를 얼마나 먹었는지의 척도입니다.", "", "다음: 보고서·캡처를 보고 승인 → `git add -A && git commit` → `git push` (pre-push 12단 게이트). 자동 푸시는 없다.");
    const file = path.join(REPORTS, `batch-${today()}.md`);
    fs.writeFileSync(file, L.join("\n") + "\n");
    console.log(`\n══════════ 묶음 끝: ${summary.filter((s) => s.ok).length}/${summary.length} 통과 · ${mins(Date.now() - t0)} · 모델 호출 ${batchMeter.calls}회 · ${fmtUsage(batchMeter)} — ${file}`);
    process.exitCode = summary.every((s) => s.ok) ? 0 : 1;
  } else {
    if (!positional[0]) throw new Error('사용: npm run article -- <slug> --keyword "키워드" --hub <허브slug> --dir <폴더>  |  npm run article -- --batch scripts/batch.txt');
    const r = await runOne(positional[0], flags);
    if (r.ok) { log("index", "검색 색인 갱신 (build-search-index.ts)"); await runTsx(path.join("scripts", "build-search-index.ts"), []); }
    process.exitCode = r.ok ? 0 : 1;
  }
} finally {
  stopDev();
}
