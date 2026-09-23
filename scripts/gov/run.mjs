/**
 * gov 파이프라인 (2026-09-23) — 수집 → 사실 → 작성 → 대조 → 합격 시험 → 보고서. 판정은 전부 코드가 한다.
 *
 *   node scripts/gov/run.mjs scripts/specs/<x>.md [--only <slug>] [--from facts|write|check] [--to facts|write]
 *
 * spec — 한 편(허브)
 *   slug: / cat: / catSlug: / title: / sub:(정확히 4줄) / source:(1차 출처) / button:(버튼 목적지)
 * spec — 허브 확장(스포크 여러 편). 머리에 hub:·dir:, 글마다 --- 로 나눈다
 *   hub: basic-pension          ← 이미 있는 허브 slug
 *   dir: 기초연금               ← 그 허브의 스포크 폴더
 *   ---
 *   slug: …  title: …  sub: ×4  source: …
 *   ---
 *   …
 *
 *   ① collect.mjs        코드   원문 텍스트·표·iframe·PDF·이미지 크롭·행동 링크 (시민기자·블로그 자동 제외)
 *   ② 사실               모델   facts.json (30개 이내, 인용은 원문 글자 그대로, 한정 표현 keepWord/keepWhy)
 *      verify-facts.mjs  코드   틀리면 틀린 사실만 고쳐 받고, 그래도 틀리면 글을 쓰지 않는다
 *   ③ 작성               모델   허브 data/policies/<slug>.ts · 스포크 content/<dir>/<File>.tsx (+ 배선은 코드)
 *   ④ check-article.mjs  코드   틀리면 바꿀 부분만 고쳐 받는다 (2회)
 *   ⑤ test-mutations.mjs 코드   오차를 일부러 넣어 검사기가 전부 잡는지 → scripts/reports/<key>.md
 *
 * 모델 호출은 저장소 밖에서 한다 — 이 저장소의 CLAUDE.md·메모리(옛 규칙)가 섞이지 않게.
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { ask, extractJson, newMeter, addUsage, fmtUsage } from '../lib/headless.mjs';
import { DIR_OF, verifyFacts } from './verify-facts.mjs';
import { checkArticle, heroOf, bridgeOf, frameOf, openingOf } from './check-article.mjs';
import { targetOf, saveMeta, wireSpoke, allArticles } from './target.mjs';

const argv = process.argv.slice(2);
const specFile = argv.find((a) => !a.startsWith('--') && a.endsWith('.md'));
const flag = (k, d) => { const i = argv.indexOf(`--${k}`); return i > 0 ? argv[i + 1] : d; };
const FROM = flag('from', 'collect');
const TO = flag('to', 'check');
const ONLY = flag('only', '');
const MODEL = flag('model', 'opus');
const STEPS = ['collect', 'facts', 'write', 'check'];
const run = (s) => STEPS.indexOf(s) >= STEPS.indexOf(FROM) && STEPS.indexOf(s) <= STEPS.indexOf(TO);
const today = new Date().toISOString().slice(0, 10);
const OUTSIDE = path.join(os.tmpdir(), 'gov-pipeline');
fs.mkdirSync(OUTSIDE, { recursive: true });

// ── spec ──
function parseBlock(text) {
  const lines = text.split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
  const one = (k) => lines.find((l) => l.startsWith(`${k}:`))?.slice(k.length + 1).trim();
  const many = (k) => lines.filter((l) => l.startsWith(`${k}:`)).map((l) => l.slice(k.length + 1).trim());
  return { hub: one('hub'), dir: one('dir'), slug: one('slug'), cat: one('cat'), catSlug: one('catSlug'), role: one('role'),
    title: one('title'), subs: many('sub'), sources: many('source'), buttons: many('button') };
}
const blocks = fs.readFileSync(specFile, 'utf8').split(/^---\s*$/m).map(parseBlock);
const head = blocks[0];
const articles = (head.slug ? [head] : blocks.slice(1))
  .map((b) => ({ ...b, hub: b.hub || head.hub, dir: b.dir || head.dir, cat: b.cat || head.cat || '생활', catSlug: b.catSlug || head.catSlug || 'life' }))
  .filter((b) => !ONLY || b.slug === ONLY);
if (!articles.length) throw new Error(ONLY ? `spec 에 slug '${ONLY}' 가 없다` : 'spec 에 글이 없다');
for (const a of articles) {
  if (!a.slug || !a.title || a.subs.length !== 4 || !a.sources.length) throw new Error(`${a.slug || '(slug 없음)'}: slug·title·sub(정확히 4개)·source 가 필요하다`);
  if (a.hub && !a.dir) throw new Error(`${a.slug}: 스포크는 dir: (허브의 스포크 폴더) 가 필요하다`);
}

// ── 공통 작성 규칙 (허브·스포크 같다) ──
const COMMON = (a, facts, urls, used) => `사실 — 이 facts.json 밖의 숫자·날짜·금액·나이·시간은 한 글자도 쓰지 않는다. 계산해서 새 숫자를 만들지 않는다.
${facts}

- scopeWord 가 있는 사실은 그 값을 쓰는 문장에 scopeWord 를 반드시 같이 쓴다.
- keepWord 가 있는 사실은 그 사실을 쓰는 모든 문장·표 칸에 keepWord 를 살린다 ("관리할 계획입니다", "선착순으로").
- must: true 인 사실은 전부 글에 넣는다.

버튼 — 주소는 이 목록에서만:
${urls}
- 상단 버튼 = 타이틀 "${a.title}" 에 나오는 행동어. 타이틀에 없는 행동은 상단에 올리지 않고 해당 소제목 카드의 act 로.
- 소제목에 행동(교환·등록·신청·조회·찾기)이 있는 카드에 act: { label, url }. 버튼은 소제목 바로 아래에 뜬다 —
  label 은 그 소제목의 행동을 평범한 말로("교환 장소 확인하기", "페이백 신청하기"). 행동이 없는 소제목엔 act 를 달지 않는다.

카드 구성 (소제목 → 버튼 → 표 → 텍스트)
- 표가 먼저 보인다. 독자가 찾는 답(장소·날짜·금액·순서)은 표로 준다. 표 caption 은 짧은 제목만.
- intro 는 표를 다시 읊지 않는다. 표를 읽는 법과 표에 없는 조건·예외·주의점을 말한다.
- 표는 3열 이하(모바일 폭 360px). 칸 글자는 짧게. 비교할 항목이 많으면 열이 아니라 행을 늘린다.
- qa intro 는 400~700자. facts 를 다 쓰지 않는다 — 소제목에 답하는 데 필요한 것 + must 만.
- facts 의 value 문구를 괄호로 붙여 넣지 않는다. 날짜는 "9월 21일"처럼 풀어 쓴다("9.21~9.23"은 표 안에서만).

문체
- heroHook 은 200자 이내, 서너 문장: 공감(독자가 막히는 지점) → 가장 중요한 혜택이나 조건 하나 → 행동 유도 한 문장 → 맺음("…알아보겠습니다" 또는 "…확인해보겠습니다").
- 행동 유도 문장은 상단 버튼으로 이어지는 말이다. 버튼 라벨의 말을 담아, 이 글의 독자가 지금 먼저 할 일을 이 글의 말로 짚는다.
- 같은 주제·같은 키워드라도 찍어낸 느낌이 없게: 첫 문장과 행동 유도 문장의 첫마디·끝말을 아래 '이미 쓴 서론'과 겹치지 않게 쓰고,
  주제어만 바꾼 듯 닮은 서론(글자 조각 25% 이상 겹침)도 코드가 막는다. 이 글의 독자가 막히는 지점에서 새로 시작한다.
이미 쓴 서론 (이 틀을 피한다):
${used}
- 말하듯 잇는다("~인데요", "~입니다"). 단정형으로 뚝뚝 끊지 않는다. 본문 문장 끝(어미)을 연달아 똑같이 하지 않는다 — 서론 맺음 문장만은 위 두 가지 중 하나.
- 금지: 대부분·대개·약 N·추정·아마, "~다고요." 종결, "서울시는 ~라고 답했다" 같은 메타 서술, 정부 슬로건.
- 각 qa 에 sourceNote: '* 출처: … (${today} 확인)'.`;

let failed = 0;
for (const a of articles) failed += await runOne(a);
process.exit(failed ? 1 : 0);

async function runOne(a) {
  const t = targetOf(a);
  const KEY = t.key;
  const DIR = DIR_OF(KEY);
  const ABS_DIR = path.resolve(DIR);
  const specNums = `title: ${a.title}\n${a.subs.map((s) => `sub: ${s}`).join('\n')}`;
  saveMeta({ ...t, title: a.title, subs: a.subs });
  const meter = newMeter();
  const t0 = Date.now();
  const log = (s, m) => console.log(`[${((Date.now() - t0) / 60000).toFixed(1)}분] ${s.padEnd(7)} ${m}`);
  const call = async (prompt, label, tools = []) => {
    log(label, `모델 호출 (${MODEL}, 지시문 ${(prompt.length / 1000).toFixed(0)}k자)`);
    const r = await ask(prompt, { model: MODEL, tools, label, timeoutMs: 30 * 60 * 1000, cwd: OUTSIDE, addDirs: tools.includes('Read') ? [ABS_DIR] : [] });
    addUsage(meter, r.usage, label);
    return r.text;
  };
  console.log(`\n━━ ${t.kind === 'spoke' ? `스포크 ${a.hub}/` : '허브 '}${a.slug} — ${a.title}`);

  // ① 수집
  if (run('collect')) {
    log('collect', `원문 ${a.sources.length} + 버튼 ${a.buttons.length}`);
    execFileSync('node', ['scripts/gov/collect.mjs', KEY, ...a.sources, ...a.buttons], { stdio: 'inherit' });
  }
  const sources = JSON.parse(fs.readFileSync(path.join(DIR, 'sources.json'), 'utf8'));
  const primary = sources.filter((s) => !s.error && s.primary !== false);
  const srcBlock = () => primary.map((s) => `===== ${s.file} (${s.title}) =====\n${fs.readFileSync(path.join(DIR, s.file), 'utf8')}`).join('\n\n');
  const imgList = primary.flatMap((s) => (s.images || []).map((im) => `${path.join(ABS_DIR, im.file).replace(/\\/g, '/')}  (alt: ${im.alt})`));
  const factsText = () => fs.readFileSync(path.join(DIR, 'facts.json'), 'utf8');
  // 다른 글들의 서론 — 첫 문장·행동 유도의 틀을 피하라고 보여 준다 (최근 12편). 같은 주제·같은 키워드라도 찍어낸 느낌이 없게
  const usedBridges = () => allArticles().filter((m) => m.key !== KEY)
    .map((m) => heroOf(fs.readFileSync(m.file, 'utf8')).hero).filter(Boolean).slice(-12)
    .map((h) => `- 첫 문장 [${frameOf(openingOf(h))}] ${openingOf(h)}\n  행동 유도 [${frameOf(bridgeOf(h))}] ${bridgeOf(h)}`).join('\n') || '(아직 없음)';
  const urls = () => primary.map((s) => `- ${s.finalUrl}  (${s.title}) — 추출본 ${DIR.replace(/\\/g, '/')}/${s.file}`).join('\n');

  // ② 사실
  if (run('facts')) {
    const P = `너는 정부 원문에서 사실을 뽑아 JSON 으로만 답한다. 요약·해석·계산으로 새 숫자를 만들지 않는다.

글 주제
- 타이틀: ${a.title}
${a.subs.map((s, i) => `- 소제목 ${i + 1}: ${s}`).join('\n')}

원문 (파일마다 ===== 파일명 ===== 으로 시작. 메뉴 글자가 섞여 있으니 본문만 본다)
${srcBlock()}

이미지 (Read 도구로 직접 열어 읽는다 — 텍스트에 없는 정보가 이미지에만 있을 수 있다)
${imgList.join('\n') || '(없음)'}

규칙
1. quote 는 원문에서 글자 그대로 복사한다. 띄어쓰기·기호·숫자 표기(쉼표, ~, ·)까지 그대로. 한 문장 또는 표 한 줄. 줄이지 않는다.
2. value 는 글에 쓸 값. value 에 든 숫자는 전부 quote 안에 있어야 한다. 단위를 바꾸거나 합산하지 않는다.
3. 값이 특정 지역·대상·기간에만 맞으면 scope 에 적고, 글에서 그 값과 같은 문장에 반드시 있어야 할 한정어 하나를 scopeWord 에 적는다 (예: "서울", "청년", "선불"). 전국·전원이면 비운다.
4. 소제목 4개와 FAQ 2개에 답하는 데 필요한 사실만, 30개 이내로 뽑는다(날짜·기한·금액·나이·장소·시간·절차 순서·예외·주의사항).
   글에 안 쓸 사실은 적지 않는다 — 적는 만큼 시간이 든다.
5. must: true 는 독자가 놓치면 돈·시간을 잃는 단서(마감 기한, 안 되는 경우, 미리 해야 할 일)에만, 10개 이내로.
   must 사실에는 key 도 적는다 — quote 안에 그대로 있는 2~8자 핵심어(예: "등록 삭제", "수기 신청"). 글에 이 말이 있는지로 누락을 본다.
6. 이미지에서만 보이는 사실은 src 에 이미지 파일 이름(예: img-6-1.png), quote 에 이미지 속 글자 그대로.
7. 원문끼리 값이 다르면 둘 다 적고 conflict: true 와 어느 원문이 더 최신인지 note 에 적는다.
8. 버튼 목적지로 쓸 URL 은 원문 '행동 링크' 줄에서만 고른다.
9. src 는 파일 이름만 (src-3.txt, img-6-1.png).
10. quote 에 계획·예정·협의 중·검토 중·선착순·한정·조기 마감·변동될·변경될·바뀔 수·필수·반드시·불가 가 있으면 판단해서 둘 중 하나를 적는다:
   - keepWord: 글에서 이 사실을 쓸 때 반드시 살릴 말 (quote 안의 말 그대로). 빠지면 뜻이 바뀌는 경우 — 예: "관리할 계획"의 '계획', "선착순".
   - keepWhy: 살리지 않아도 되는 이유 — 예: "1월 공지의 '예정'이고 지금은 시행 중(src-4 신청 페이지)".
   오늘 날짜는 ${today} 이다.

출력 — JSON 하나만:
{"facts":[{"id":"f1","item":"항목","value":"값","scope":"","scopeWord":"","quote":"원문 그대로","src":"src-1.txt","must":false,"key":"","keepWord":"","keepWhy":""}],
 "notUsed":[{"item":"뽑지 않은 것","reason":"이유"}]}`;
    const j = extractJson(await call(P, 'facts', ['Read']));
    fs.writeFileSync(path.join(DIR, 'facts.json'), JSON.stringify(j, null, 2));

    // 이미지 사실은 따로 한 번 더 읽는다 — 첫 번째 읽기 결과를 보여 주지 않는다
    const imgFacts = j.facts.filter((f) => /\.png$/i.test(f.src));
    const byImg = imgFacts.reduce((m, f) => ((m[f.src] ||= []).push(f), m), {});
    for (const [img, list] of Object.entries(byImg)) {
      const R = `Read 도구로 ${path.join(ABS_DIR, img).replace(/\\/g, '/')} 이미지를 열어라.
아래 항목마다 이미지에 적힌 글자를 그대로 옮겨 적는다. 추측하지 않는다. 안 보이면 "없음".
${list.map((f) => `- ${f.id}: ${f.item}`).join('\n')}
출력 JSON 하나만: {"f1":"이미지 글자 그대로", ...}`;
      const r2 = extractJson(await call(R, 'read2', ['Read']));
      for (const f of list) f.read2 = r2[f.id] ?? '';
    }
    if (imgFacts.length) fs.writeFileSync(path.join(DIR, 'facts.json'), JSON.stringify(j, null, 2));

    let v = verifyFacts(KEY);
    if (v.errors.length) {
      log('facts', `사실 검사 ${v.errors.length}건 — 틀린 사실만 고친다`);
      const wrong = j.facts.filter((x) => v.errors.some((e) => e.startsWith(`${x.id} `)));
      const F = `코드 검사가 틀렸다고 한 사실만 고친다. 나머지 사실은 다시 쓰지 않는다.
quote 는 원문에서 글자 그대로 다시 복사한다. 원문에서 못 찾으면 그 id 를 drop 에 넣는다.
검사 결과:
${v.errors.join('\n')}

원문:
${srcBlock()}

틀린 사실:
${JSON.stringify(wrong, null, 2)}

출력 JSON 하나만: {"fix":[{고친 사실 한 개 전체 — id 그대로}], "drop":["f3"]}`;
      const p = extractJson(await call(F, 'factsfix', ['Read']));
      const drop = new Set(p.drop || []);
      j.facts = j.facts.filter((x) => !drop.has(x.id)).map((x) => {
        const nf = (p.fix || []).find((y) => y.id === x.id);
        return nf ? { ...nf, read2: nf.read2 || x.read2 } : x;
      });
      fs.writeFileSync(path.join(DIR, 'facts.json'), JSON.stringify(j, null, 2));
      v = verifyFacts(KEY);
    }
    v.warns.forEach((w) => log('facts', `⚠ ${w}`));
    if (v.errors.length) { v.errors.forEach((e) => log('facts', `❌ ${e}`)); log('facts', '사실 검사 실패 — 이 글은 쓰지 않는다'); return 1; }
    log('facts', `✅ 사실 ${v.facts.length}개 검사 통과`);
  }

  // ③ 작성 — 파일은 코드가 쓰고, 등록·배선도 코드가 한다
  const writeTarget = (code) => {
    const fenced = String(code).match(/```(?:ts|typescript|tsx)?\s*\n([\s\S]*?)```/);
    fs.mkdirSync(path.dirname(t.file), { recursive: true });
    fs.writeFileSync(t.file, (fenced ? fenced[1] : String(code)).trimEnd() + '\n');
    if (t.kind === 'spoke') { wireSpoke(t, { title: a.title, role: a.role || 'guide' }); return; }
    const EXPORT = a.slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()) + 'Policy';
    const mf = 'data/policies/manifest.ts';
    let m = fs.readFileSync(mf, 'utf8');
    if (m.includes(`'./${a.slug}'`)) return;
    const anchor = (s) => { if (!m.includes(s)) throw new Error(`manifest 기준 줄 없음: ${s}`); return s; };
    m = m.replace(anchor(`import { deliveryMutualInsurancePolicy, deliveryMutualInsuranceSpokes } from './delivery-mutual-insurance';`),
      (s) => `${s}\nimport { ${EXPORT}, ${EXPORT.replace(/Policy$/, 'Spokes')} } from './${a.slug}';`);
    m = m.replace(anchor(`  'delivery-mutual-insurance': deliveryMutualInsurancePolicy,`), (s) => `${s}\n  '${a.slug}': ${EXPORT},`);
    m = m.replace(anchor(`  'delivery-mutual-insurance': deliveryMutualInsuranceSpokes,`), (s) => `${s}\n  '${a.slug}': ${EXPORT.replace(/Policy$/, 'Spokes')},`);
    fs.writeFileSync(mf, m);
  };
  if (run('write')) {
    let W;
    if (t.kind === 'hub') {
      const nextId = () => String(Math.max(...fs.readdirSync('data/policies').filter((f) => f.endsWith('.ts'))
        .flatMap((f) => [...fs.readFileSync(path.join('data/policies', f), 'utf8').matchAll(/\bid: '(\d+)'/g)].map((x) => +x[1]))) + 1);
      const id = fs.existsSync(t.file) ? (fs.readFileSync(t.file, 'utf8').match(/\bid: '(\d+)'/)?.[1] ?? nextId()) : nextId();
      const EXPORT = a.slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()) + 'Policy';
      W = `gov.jjyu.co.kr 허브 글 한 편을 TypeScript 파일로 쓴다. 아래 '예시 파일'과 같은 모양으로, 내용만 새로.

고정값
- export 이름: ${EXPORT} (그리고 빈 배열 ${EXPORT.replace(/Policy$/, 'Spokes')})
- id: '${id}', slug: '${a.slug}', cat: '${a.cat}', catSlug: '${a.catSlug}', type: 'service'
- title: '${a.title}'  ← 글자 그대로
- qa 4개의 q = 아래 소제목 글자 그대로, 순서 그대로
${a.subs.map((s, i) => `  ${i + 1}. ${s}`).join('\n')}
- cardLayout: 'act-first', titleTail: false, hideAmountBox: true, datePublished·dateModified: '${today}T10:00:00+09:00', verifiedAt: '${today}'
- 상단 버튼: applyUrl·ctaLabel(타이틀 첫 행동), 행동이 둘이면 applyUrl2·ctaLabel2
- keyFacts 6개 안팎: value 와 source.text(=facts 의 quote 그대로), source.url(=그 사실의 원문 URL)
- faq 정확히 2개: { q, a, source, sourceUrl }. 본문 소제목과 겹치지 않는 질문, 답은 두세 문장
- 머리 주석: 아래 '버튼' 목록의 추출본 경로, '쓰지 않는 것'(facts.json notUsed)

${COMMON(a, factsText(), urls(), usedBridges())}

예시 파일 (모양만 참고 — 내용·숫자는 절대 가져오지 않는다. FAQ 개수도 따라 하지 않는다):
${fs.readFileSync('data/policies/heritage-visitor-passport-application.ts', 'utf8')}

출력: TypeScript 파일 전체를 코드블록 하나로.`;
    } else {
      W = `gov.jjyu.co.kr 스포크 글 한 편을 TypeScript 파일로 쓴다. 아래 '예시 파일'과 같은 모양(SpokeData)으로, 내용만 새로.

고정값
- 첫 줄: import type { SpokeData } from '../../SpokeClient';
- export const ${t.exportName}: SpokeData = { … };
- h1: '${a.title}'  ← 글자 그대로
- breadcrumb: 10자 안팎 짧은 이름, description: 검색 설명 한두 문장, metaDescription: 150자 이내
- qa 4개의 q = 아래 소제목 글자 그대로, 순서 그대로, anchor 는 영문 kebab
${a.subs.map((s, i) => `  ${i + 1}. ${s}`).join('\n')}
- cardLayout: 'act-first', datePublished·dateModified: '${today}T10:00:00+09:00'
- 상단 버튼: heroAct: { label, href } (href 는 아래 버튼 목록의 주소)
- keyFacts: { '항목': '값' } 6개 안팎 (값은 facts 의 value)
- faqData 정확히 2개: { q, a, source, sourceUrl }. 본문 소제목과 겹치지 않는 질문, 답은 두세 문장
- sources: [{ name, url }] — 아래 버튼 목록의 1차 출처
- 머리 주석: 추출본 경로(아래 목록), '쓰지 않는 것'(facts.json notUsed)

${COMMON(a, factsText(), urls(), usedBridges())}

예시 파일 (모양만 참고 — 내용·숫자는 절대 가져오지 않는다. 옛 글이라 cardLayout·act.url 이 없으니 위 고정값을 따른다):
${fs.readFileSync(path.join('app', 'policy', '[id]', '[spoke]', 'content', '기초연금', '부부감액단독신청비교.tsx'), 'utf8')}

출력: TypeScript 파일 전체를 코드블록 하나로.`;
    }
    writeTarget(await call(W, 'write'));
    log('write', `✅ ${t.file}${t.kind === 'spoke' ? ' + registry·허브 배선' : ' + manifest 등록'}`);
  }

  // ④ 대조 (틀리면 바꿀 부분만, 두 번까지)
  if (!run('check')) { log('stop', `--to ${TO} 에서 멈춤 · ${fmtUsage(meter)}`); return 0; }
  let res = checkArticle(KEY, specNums);
  for (let i = 0; i < 2 && res.errors.length; i++) {
    log('check', `❌ ${res.errors.length}건 — 고침 ${i + 1}`);
    res.errors.forEach((e) => log('check', `   ${e}`));
    const X = `아래 파일에서 코드 검사가 지적한 곳만 고친다. 파일 전체를 다시 쓰지 않는다.
틀린 숫자는 facts.json 의 값으로 바꾸거나 그 말을 뺀다. 새 숫자를 만들지 않는다.
빠진 사실·빠진 한정 표현은 가까운 문장에 자연스럽게 녹인다. facts 의 value 문구를 괄호로 붙여 넣지 않는다. 날짜는 "9월 21일"처럼 풀어 쓴다.
표가 4열 이상이면 그 table 블록을 3열 이하로 바꾼다. FAQ 개수가 틀리면 2개로 맞춘다.
[서론]·[틀 반복] 이 있으면 heroHook 전체를 새로 쓴다: 200자 이내, 공감 → 핵심 하나 → 행동 유도 한 문장(상단 버튼의 말) → "…알아보겠습니다/…확인해보겠습니다".
[닮음] 이 있으면 다른 각도로 새로 쓴다. 첫 문장·행동 유도의 첫마디·끝말은 이 목록과 겹치지 않게:
${usedBridges()}
검사 결과:
${res.errors.join('\n')}

facts.json:
${factsText()}

버튼 주소 목록:
${urls()}

파일:
${fs.readFileSync(t.file, 'utf8')}

출력 JSON 하나만: {"edits":[{"find":"파일에 있는 글자 그대로(한 곳만 맞도록 충분히 길게)","replace":"고친 글자"}]}`;
    const { edits = [] } = extractJson(await call(X, 'fix'));
    let src = fs.readFileSync(t.file, 'utf8'), missed = 0;
    for (const e of edits) {
      if (e.find && src.includes(e.find)) src = src.replace(e.find, e.replace ?? '');
      else missed++;
    }
    fs.writeFileSync(t.file, src);
    log('check', `고친 곳 ${edits.length - missed}/${edits.length}${missed ? ` (못 찾은 ${missed}곳은 다음 고침에서 다시)` : ''}`);
    res = checkArticle(KEY, specNums);
  }
  execFileSync('npx', ['tsx', 'scripts/build-search-index.ts'], { stdio: 'ignore', shell: true });

  // ⑤ 합격 시험 — 이 글에 일부러 오차를 넣어 검사기가 잡는지. 못 잡으면 이 글의 대조 결과를 믿을 수 없다
  let selfTest = '(대조 실패로 생략)';
  if (!res.errors.length) {
    try { selfTest = execFileSync('node', ['scripts/gov/test-mutations.mjs', KEY], { encoding: 'utf8' }); }
    catch (e) { selfTest = String(e.stdout || e.message); res.errors.push('[합격 시험] 검사기가 일부러 넣은 오차를 놓쳤다 — 보고서 참고'); }
    log('test', selfTest.trim().split('\n').pop());
  }

  // 보고서
  const fj = JSON.parse(factsText());
  const v = verifyFacts(KEY);
  const url = t.kind === 'spoke' ? `https://gov.jjyu.co.kr/policy/${a.hub}/${a.slug}` : `https://gov.jjyu.co.kr/policy/${a.slug}`;
  const rep = [`# ${res.errors.length ? '❌' : '✅'} ${a.title}`, '',
    `- ${t.kind === 'spoke' ? `스포크 (허브 ${a.hub})` : '허브'} · 파일: ${t.file} · 모델: ${MODEL} · ${((Date.now() - t0) / 60000).toFixed(1)}분 · ${fmtUsage(meter)}`,
    `- 주소: ${url}`, '',
    `## 글 대조 (코드) — ${res.errors.length ? `❌ ${res.errors.length}건` : `✅ 숫자 ${res.numbers}종 전부 facts 에 있음`}`, ...res.errors.map((e) => `- ${e}`), '',
    '## 합격 시험 (일부러 넣은 오차를 검사기가 잡는가)', '```', selfTest.trim(), '```', '',
    '## 한정 표현 판단 (살린 말 / 안 살린 이유) — 오해 소지 확인',
    ...fj.facts.filter((f) => f.keepWord || f.keepWhy).map((f) => `- ${f.item}: ${f.keepWord ? `**살림 '${f.keepWord}'**` : `안 살림 — ${f.keepWhy}`}  ← "${String(f.quote).slice(0, 80)}"`), '',
    '## 🖼 이미지에서 읽은 사실 — 사장님 눈 확인', ...v.rows.filter((r) => r.isImg).map((r) => `- ${r.item}: **${r.value}** ← ${DIR}/${r.src}`), '',
    `## 사실 ${fj.facts.length}개 — 인용은 원문에 글자 그대로 있음을 코드가 확인`, '',
    '| id | 항목 | 값 | 범위어 | 출처 | 교차 | 원문 인용 |', '|---|---|---|---|---|---|---|',
    ...v.rows.map((r) => `| ${r.id} | ${r.item} | ${r.value} | ${r.scopeWord || ''} | ${r.isImg ? `🖼 ${r.src}` : r.src} | ${r.isImg ? `두 번 읽기: ${r.read2}` : r.seenIn.length} | ${String(r.quote).replace(/\|/g, '/').slice(0, 120)} |`), '',
    '## ⚠ 한 곳에만 있는 값 (교차 확인 못 함)', ...v.warns.map((w) => `- ${w}`), '',
    '## 쓰지 않은 것', ...(fj.notUsed || []).map((n) => `- ${n.item} — ${n.reason}`)].join('\n');
  fs.mkdirSync('scripts/reports', { recursive: true });
  fs.writeFileSync(`scripts/reports/${KEY}.md`, rep);
  log('done', `${res.errors.length ? '❌ 대조 실패 — 보고서 확인' : '✅ 완료'} → scripts/reports/${KEY}.md`);
  return res.errors.length ? 1 : 0;
}
