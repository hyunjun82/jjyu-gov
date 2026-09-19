/**
 * 초안(JSON) → 스포크 파일(.tsx)·배선·산출물.
 *
 * 파일 모양은 정본(실손보험/나이별실비보험료.tsx)과 같다:
 *   머리 주석(추출본 · 1차 출처 · 쓰지 않는 것) → URL 상수 → export const …SpokeContent: SpokeData
 * 게이트가 정규식으로 읽는 자리를 그대로 지킨다 —
 *   check-source-match  : 파일 머리 `추출본: scripts/output/source-*.txt`, `intro: '…'`, `cue: '…'`, `a: '…'`, rows
 *   check-button-variety: `heroAct: { label: '…'`, `cue:\n '…'`, `heroHook: '…'`
 *   check-stage-approval: registry 의 `'slug': …SpokeContent,` 줄
 * 그래서 사람이 읽는 문자열은 전부 작은따옴표 한 줄이고, 안의 작은따옴표는 ’ 로 바꾼다
 * (\\' 로 이스케이프하면 [^']* 정규식이 거기서 끊긴다).
 *
 * 배선(registry.ts + 허브 Spokes 배열)은 scripts/new-spoke.ts 가 한다. 여기서는 그 뼈대 위에
 * 본문을 덮어쓰고, 실패했을 때 new-spoke 가 넣은 줄만 정확히 빼는 unwire 를 둔다.
 */
import fs from "node:fs";
import path from "node:path";

export const CONTENT_DIR = path.join("app", "policy", "[id]", "[spoke]", "content");
export const REG = path.join("data", "spokes", "registry.ts");

const one = (s) => String(s ?? "").replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
/** 작은따옴표 한 줄 문자열 */
const q = (s) => `'${one(s).replace(/\\/g, "\\\\").replace(/'/g, "’")}'`;

/** URL → 상수 이름 표. 첫 출처 SRC, 둘째부터 SRC2…, 허브 HUB. 나머지는 문자열 그대로 */
function urlConsts(plan, spoke) {
  const map = new Map();
  const srcUrls = [...new Set([...(plan.sources || []).filter((s) => s.ok !== false).map((s) => s.url), ...(spoke.sources || []).map((s) => s.url)])];
  srcUrls.forEach((u, i) => map.set(u, i === 0 ? "SRC" : `SRC${i + 1}`));
  map.set(plan.hubPath, "HUB");
  return map;
}
const ref = (map, u) => (map.has(u) ? map.get(u) : q(u));

export function tsxOf({ draft, plan, slug, today, exportName }) {
  const sp = draft.spoke;
  const map = urlConsts(plan, sp);
  const notUsing = (draft.notUsing || []).map(one).filter(Boolean);
  const okSources = (plan.sources || []).filter((s) => s.ok !== false);
  const L = [];
  L.push("import type { SpokeData } from '../../SpokeClient';", "");
  L.push(`/* 추출본: scripts/output/source-${slug}.txt`);
  L.push(` * 팩트시트: scripts/output/factsheet-${slug}.md · 구성표: scripts/output/outline-${slug}.md`);
  okSources.forEach((s, i) => {
    L.push(` * ${i === 0 ? "1차 출처" : "출처 " + (i + 1)}: ${one(s.name)}`);
    L.push(` *   ${s.url}`);
  });
  L.push(` * ${today} scripts/article.mjs (claude -p sonnet) — Playwright 추출본 ${okSources.length}곳 + 화면 캡처 ${Object.keys(plan.capturesReviewed || {}).length}장 대조로 작성`);
  L.push(" * 쓰지 않는 것:");
  if (notUsing.length) for (const n of notUsing) L.push(` *   - ${n}`);
  else L.push(" *   - (없음)");
  L.push(" */", "");
  for (const [u, name] of map) if (name !== "HUB") L.push(`const ${name} = ${q(u)};`);
  L.push(`const HUB = ${q(plan.hubPath)};`, "");
  L.push(`export const ${exportName}: SpokeData = {`);
  L.push(`  h1: ${q(sp.h1)},`);
  L.push(`  breadcrumb: ${q(sp.breadcrumb)},`);
  L.push(`  description:`, `    ${q(sp.description)},`);
  if (sp.metaDescription) L.push(`  metaDescription: ${q(sp.metaDescription)},`);
  const stamp = `${today}T09:00:00+09:00`;
  L.push(`  datePublished: '${stamp}',`, `  dateModified: '${stamp}',`);
  L.push(`  heroHook:`, `    ${q(sp.heroHook)},`);
  L.push(`  heroAct: { label: ${q(sp.heroAct.label)}, href: ${ref(map, sp.heroAct.href)} },`);
  L.push("  keyFacts: {");
  for (const [k, v] of Object.entries(sp.keyFacts || {})) L.push(`    ${q(k)}: ${q(v)},`);
  L.push("  },");
  L.push("  keyFactsHighlights: {");
  for (const [k, arr] of Object.entries(sp.keyFactsHighlights || {})) L.push(`    ${q(k)}: [${(arr || []).map(q).join(", ")}],`);
  L.push("  },");
  L.push("  qa: [");
  (sp.qa || []).forEach((c) => {
    L.push("    {");
    L.push(`      q: ${q(c.q)}, anchor: ${q(c.anchor)},`);
    L.push(`      intro:`, `        ${q(c.intro)},`);
    L.push(`      highlights: [${(c.highlights || []).map(q).join(", ")}],`);
    if (c.table) {
      L.push("      table: {");
      if (c.table.caption) L.push(`        caption: ${q(c.table.caption)},`);
      L.push(`        headers: [${c.table.headers.map(q).join(", ")}],`);
      L.push("        rows: [");
      for (const r of c.table.rows) L.push(`          [${r.map(q).join(", ")}],`);
      L.push("        ],", "      },");
    }
    for (const bk of ["box", "box2"]) {
      const b = c[bk];
      if (!b) continue;
      L.push(`      ${bk}: {`);
      if (b.label) L.push(`        label: ${q(b.label)},`);
      if (b.title) L.push(`        title: ${q(b.title)},`);
      L.push(`        content: ${q(b.content)},`, "      },");
    }
    if (Array.isArray(c.list) && c.list.length) L.push(`      list: [${c.list.map(q).join(", ")}],`);
    if (c.act) {
      L.push("      act: {");
      L.push(`        cue: ${q(c.act.cue)},`);
      L.push(`        label: ${q(c.act.label)},`);
      L.push(`        url: ${ref(map, c.act.url)},`);
      L.push("      },");
    }
    if (c.sourceNote) L.push(`      sourceNote: ${q(c.sourceNote)},`);
    L.push("    },");
  });
  L.push("  ],");
  L.push("  faqData: [");
  for (const f of sp.faqData || []) {
    L.push("    {");
    L.push(`      q: ${q(f.q)},`);
    L.push(`      a: ${q(f.a)},`);
    L.push(`      source: ${q(f.source)}, sourceUrl: ${ref(map, f.sourceUrl)},`);
    L.push("    },");
  }
  L.push("  ],");
  L.push("  sources: [");
  for (const s of sp.sources || []) L.push(`    { name: ${q(s.name)}, url: ${ref(map, s.url)} },`);
  L.push("  ],");
  L.push("};", "");
  return L.join("\n");
}

/** new-spoke.ts 에 줄 spec — 그 스크립트의 spec 형식 그대로 */
export function specOf({ plan, slug, sourceFile, hubSlug, policyDir }) {
  const first = (plan.sources || []).find((s) => s.ok !== false) || plan.sources?.[0] || {};
  return {
    slug,
    policyDir,
    fileName: plan.fileName,
    hubSlug,
    role: plan.role || "eligibility",
    h1: plan.title,
    breadcrumb: plan.breadcrumb,
    description: plan.breadcrumb,
    sourceFile,
    sourceName: first.name || "",
    sourceUrl: first.url || "",
    hubPath: plan.hubPath,
    qa: plan.subheads.map((s) => s.q),
    faq: plan.faq || [],
  };
}

export const exportNameOf = (policyDir, fileName) => `${policyDir}${fileName}SpokeContent`;
export const contentPathOf = (policyDir, fileName) => path.join(CONTENT_DIR, policyDir, `${fileName}.tsx`);

/** new-spoke.ts 가 넣은 세 줄을 정확히 뺀다 — 다른 글의 배선은 건드리지 않는다 */
export function unwire({ slug, hubSlug, policyDir, fileName, title }) {
  const exportName = exportNameOf(policyDir, fileName);
  const hubFile = path.join("data", "policies", `${hubSlug}.ts`);
  let n = 0;
  if (fs.existsSync(REG)) {
    let reg = fs.readFileSync(REG, "utf8");
    const before = reg;
    reg = reg.replace(new RegExp(`\\r?\\nimport \\{ ${exportName} \\} from '[^']*';`), "");
    reg = reg.replace(new RegExp(`\\r?\\n    '${slug}': ${exportName},`), "");
    if (reg !== before) { fs.writeFileSync(REG, reg); n++; }
  }
  if (fs.existsSync(hubFile)) {
    let hub = fs.readFileSync(hubFile, "utf8");
    const before = hub;
    hub = hub.replace(new RegExp(`\\r?\\n  \\{ slug: '${slug}', role: '[a-z]+', title: '[^\\n]*' \\},`), "");
    if (hub !== before) { fs.writeFileSync(hubFile, hub); n++; }
  }
  return n;
}

export const isWired = (slug) => fs.existsSync(REG) && fs.readFileSync(REG, "utf8").includes(`'${slug}':`);

/* ── 산출물: 승인 도장 · 구성표 · 팩트시트 · 타이틀 기록 ── */

export function stage2Of({ plan, slug, keyword, today }) {
  return {
    slug, keyword,
    title: plan.title,
    subheads: plan.subheads.map((s) => s.q),
    source: (plan.sources || []).filter((s) => s.ok !== false).map((s) => s.url).join(" , "),
    extract: `scripts/output/source-${slug}.txt`,
    outline: `scripts/output/outline-${slug}.md`,
    approved: true,
    approvedAt: today,
    approvedBy: "scripts/article.mjs (자동 — 사람 승인은 scripts/reports/" + slug + ".md 를 보고 push 전에 한다)",
    note: "대화창 없이 claude -p 로 설계·작성. 구성표는 outline 파일, 판단 근거는 보고서에 있다.",
  };
}

export function outlineMd({ plan, draft, slug, keyword, today }) {
  const sp = draft?.spoke || {};
  const n = plan.subheads.length;
  const slotOf = (i) => (plan.buttons.slots || []).find((s) => Number(s.qaIndex) === i);
  const L = [`# 구성표 — ${keyword} (${slug})`, "", `**타이틀** ${plan.title} (spec 고정 — 사장님이 줌)`, ""];
  L.push("## hero (서론)", "", one(sp.heroHook || plan.heroPlan || ""), "", `**← 상단 버튼: [${plan.buttons.hero.label}]** ${plan.buttons.hero.url}`, "");
  L.push("## 소제목 — spec 그대로", "", "| # | 소제목 | 버튼 |", "|---|---|---|");
  plan.subheads.forEach((s, i) => L.push(`| qa${i + 1} | ${s.q} | ${slotOf(i) ? "**슬롯**" : ""} |`));
  L.push("", "## 버튼 — 목적지는 Playwright 로 열어 확인했다", "", "| 슬롯 | 앞 문장(cue) | 라벨 | 목적지 | 확인 |", "|---|---|---|---|---|");
  const hc = plan.ctaChecked?.[plan.buttons.hero.url];
  L.push(`| hero | (서론) | ${plan.buttons.hero.label} | ${plan.buttons.hero.url} | ${hc ? (hc.ok ? "✓ " + one(hc.title).slice(0, 40) : "✗ " + hc.why) : "내부"} |`);
  for (const s of plan.buttons.slots || []) {
    const c = plan.ctaChecked?.[s.url];
    const cue = sp.qa?.[s.qaIndex]?.act?.cue || "";
    L.push(`| qa${Number(s.qaIndex) + 1} | ${one(cue)} | ${s.label} | ${s.url} | ${c ? (c.ok ? "✓ " + one(c.title).slice(0, 40) : "✗ " + c.why) : "내부"} |`);
  }
  L.push("", "## 오해 소지 — 본문에서 반드시 풀 것", "");
  (plan.misconceptions || []).forEach((m, i) => L.push(`${i + 1}. ${m}`));
  L.push("", `_${today} scripts/article.mjs 가 만들었다 (소제목 ${n}개)_`, "");
  return L.join("\n");
}

export function factsheetMd({ plan, draft, slug, keyword, today, sourceChars }) {
  const sp = draft?.spoke || {};
  const okSources = (plan.sources || []).filter((s) => s.ok !== false);
  const L = [`# 팩트시트 — ${keyword} (${slug})`, "", `**타이틀** ${plan.title}`, ""];
  L.push("## 0. 관할 확정", "", "| 항목 | 내용 |", "|---|---|");
  L.push(`| 1차 출처 | ${okSources.map((s) => one(s.name)).join(" · ") || "(없음)"} |`);
  L.push(`| 추출본 | scripts/output/source-${slug}.txt (${sourceChars}자, Playwright) |`, "");
  L.push("## 0-B. 원문 캡처 확인 — 화면을 눈(vision)으로 읽은 기록", "");
  const caps = Object.entries(plan.capturesReviewed || {});
  if (caps.length) for (const [f, l] of caps) L.push(`- ${f}: ${one(l)}`);
  else L.push("- (캡처 없음)");
  L.push("", "## 1. 수치 표 (글에 들어간 숫자 — 핵심콕콕 기준)", "", "| 항목 | 값 | 1차 출처 | 교차 출처 |", "|---|---|---|---|");
  for (const [k, v] of Object.entries(sp.keyFacts || {})) L.push(`| ${one(k)} | ${one(v)} | ${okSources[0]?.url || ""} | ${okSources[1]?.url || "(추출본 내 동일 문서)"} |`);
  L.push("", "## 2. 행동 검증 (버튼이 실제로 되는가)", "");
  for (const [u, c] of Object.entries(plan.ctaChecked || {})) L.push(`- ${u} — ${c.ok ? "✓ 열림" : "✗ " + c.why}${c.title ? ` (${one(c.title).slice(0, 60)})` : ""}`);
  L.push("", "## 3. 단서 조항 (긍정문 뒤집는 '다만' — 본문에 반영한 것)", "");
  const cav = draft?.caveats || [];
  if (cav.length) cav.forEach((c) => L.push(`- ${one(c)}`)); else L.push("- (원문에서 단서를 따로 뽑지 않음)");
  L.push("", "## 4. 확보하지 못한 것 (본문에 쓰지 않음)", "");
  const nu = draft?.notUsing || [];
  if (nu.length) nu.forEach((c) => L.push(`- ${one(c)}`)); else L.push("- (없음)");
  if (draft?._droppedCaveats?.length) { L.push("", "### 단서로 적었으나 본문 숫자와 안 맞아 뺀 것", ""); draft._droppedCaveats.forEach((c) => L.push(`- ${one(c)}`)); }
  L.push("", `_${today} scripts/article.mjs_`, "");
  return L.join("\n");
}
