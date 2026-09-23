/**
 * 합격 시험 — 글·facts 에 일부러 오차를 넣고 검사기가 잡는지 본다. 끝나면 원래대로 되돌린다. (2026-09-23)
 *
 *   node scripts/gov/test-mutations.mjs <slug>
 *
 * 오차는 글과 facts.json 을 읽어 자동으로 만든다 — 글이 바뀔 때마다 시험 문장을 손으로 고르지 않는다.
 *   ① 숫자 바꾸기   글에 쓴 facts 금액 하나를 1,000 올린다
 *   ② 자리 바꾸기   두 자리 이상 숫자가 둘인 사실이 한 문장에 나오면 두 숫자를 맞바꾼다
 *   ③ 범위 지우기   범위어(scopeWord) 사실이 나오는 문장에서 범위어를 지운다
 *   ④ 없는 숫자     heroHook 끝에 원문에 없는 금액 문장을 붙인다
 *   ⑤ 표 칸 바꾸기  표 행의 숫자 하나를 바꾼다
 *   ⑥ 필수 빼기     must 사실의 핵심어·숫자를 글에서 지운다
 *   ⑦ 추측어       '대부분'을 넣는다
 *   ⑧ 인용 조작     facts 인용 앞에 없는 말을 붙인다
 *   ⑨ 값 조작      facts 값의 숫자를 인용에 없는 숫자로 바꾼다
 * 하나라도 못 잡으면 exit 1.
 */
import fs from 'node:fs';
import path from 'node:path';
import { DIR_OF, verifyFacts, nums, ranges } from './verify-facts.mjs';
import { checkArticle, readerStrings, bridgeOf, headerReader, sentencesOf, scopeHit, keepHit, keepOk, BANNED } from './check-article.mjs';
import { metaOf } from './target.mjs';

const slug = process.argv[2];
const files = { article: metaOf(slug).file, facts: path.join(DIR_OF(slug), 'facts.json') };
const orig = Object.fromEntries(Object.entries(files).map(([k, f]) => [k, fs.readFileSync(f, 'utf8')]));
const A = orig.article;
const facts = JSON.parse(orig.facts).facts;
const judge = (t) => (t === 'facts' ? verifyFacts(slug).errors : checkArticle(slug).errors);
const cases = [];
const add = (name, target, find, replace, all = false) => find && cases.push({ name, target, find, replace, all });
// 문자열 하나를 바꿀 때 — 따옴표째 찾고(형광펜·주석의 같은 글자를 피한다), 이스케이프 등으로 못 찾으면 글자만으로
const lit1 = (t, t2) => (A.includes(`'${t}'`) ? [`'${t}'`, `'${t2}'`] : [t, t2]);
// 그 문장이 든 글자열 — 문장을 통째로 품은 것 먼저, 없으면(표 줄은 칸으로 나뉜다) 문장 안에서 그 말이 든 가장 긴 칸.
//   짧은 칸('불가')을 고르면 다른 줄의 같은 칸이 바뀌어 가짜 '놓침'이 난다(heritage ⑩)
const cut = (t, sen, w) => (t.includes(sen) ? t.replace(sen, sen.replace(w, '')) : t.replace(w, ''));
const litOf = (sen, w) => lit.find((l) => l.includes(sen)) || lit.filter((l) => sen.includes(l) && l.includes(w)).sort((a, b) => b.length - a.length)[0];
// 독자에게 보이는 문장만 건드린다 — 주석·형광펜 목록을 바꾸면 검사기가 안 잡는 게 맞다 (첫 시험의 가짜 '놓침' 2건)
const visible = readerStrings(A).flatMap((line) => line.split(' · '));
const lit = visible.filter((t) => A.includes(t));

// ① 금액 하나 +1,000 (글 전체에서 같은 금액을 모두)
const moneyLine = lit.find((t) => /\d{1,3}(?:,\d{3})+원/.test(t));
const money = moneyLine?.match(/\d{1,3}(?:,\d{3})+원/)[0];
if (money) { const v = Number(money.replace(/[,원]/g, '')) + 1000; add(`① 숫자 바꾸기 (${money} → ${v.toLocaleString()}원)`, 'article', money, `${v.toLocaleString()}원`, true); }

// ② 범위 뒤집기 — 원문 범위 쌍 "A~B" 가 글에 있으면 "B~A" 로
const pairs = new Set(facts.flatMap((x) => [...ranges(x.value), ...ranges(x.quote)]).map(([a, b]) => `${a}|${b}`));
for (const t of lit) {
  const m = t.match(/(\d{2,})\s*~\s*(\d{2,})/);
  if (m && pairs.has(`${m[1]}|${m[2]}`)) { add(`② 범위 뒤집기 (${m[0]} → ${m[2]}~${m[1]})`, 'article', t, t.replace(m[0], `${m[2]}~${m[1]}`)); break; }
}

// ③ 범위어 지우기 — 검사기와 같은 함수(scopeHit·headerReader)로 "검사기가 실제로 보는 문장"만 고른다
const withHead = headerReader(A);
const sens = sentencesOf(readerStrings(A));
outer3: for (const x of facts.filter((f) => f.scopeWord)) {
  const hit = scopeHit(x, facts);
  for (const sen of sens) {
    // 열 제목까지 포함해 범위어가 한 번만 있고, 지운 뒤에도 그 사실 문장으로 잡혀야 한다(값 문구가 범위어를 품으면 지우는 순간 안 잡힌다)
    if (!hit(sen) || withHead(sen).split(x.scopeWord).length !== 2 || !sen.includes(x.scopeWord) || !hit(sen.replace(x.scopeWord, ''))) continue;
    const t = litOf(sen, x.scopeWord);
    // 따옴표째 찾는다 — 같은 글자가 형광펜 목록·머리 주석에 먼저 나오면 엉뚱한 곳이 바뀌었다
    if (t) { add(`③ 범위 지우기 (${x.item}: '${x.scopeWord}' 삭제)`, 'article', ...lit1(t, cut(t, sen, x.scopeWord))); break outer3; }
  }
}

// ④ 없는 금액
const hero = A.match(/heroHook:\s*\n?\s*'((?:[^'\\]|\\.)*)'/);
if (hero) add('④ 원문에 없는 숫자 넣기 (최대 7만 원 추가)', 'article', hero[1], `${hero[1]} 교환하면 최대 7만 원을 추가로 돌려받습니다.`);

// ⑤ 표 칸 — rows: 블록 안의 행에서, 두 자리 이상 숫자 하나를 바꾼다
const rowsBlock = A.match(/rows:\s*\[([\s\S]*?)\n\s*\],/)?.[1] || '';
const row = rowsBlock.split('\n').map((l) => l.trim()).find((l) => /^\[.*\d{2,}.*\],?$/.test(l));
if (row) { const n = row.match(/\d{2,}/)[0]; add(`⑤ 표 칸 숫자 바꾸기 (${n} → ${Number(n) + 7})`, 'article', row, row.replace(n, String(Number(n) + 7))); }

// ⑥ 필수 빼기 — 말로 된 must 의 핵심어를 글 전체에서 지운다
const mk = facts.find((f) => f.must && f.key && !nums(f.value).length && A.includes(f.key));
if (mk) add(`⑥ 필수 단서 빼기 (${mk.item}: '${mk.key}' 전부 삭제)`, 'article', mk.key, '', true);

// ⑩ 한정 표현 지우기 — 검사기와 같은 함수(keepHit·keepOk)로. 지운 뒤 같은 뜻의 말('~해야')이 남으면 뜻이 안 바뀌니 시험으로 쓰지 않는다
outer10: for (const x of facts.filter((f) => f.keepWord)) {
  const hit = keepHit(x, facts), ok = keepOk(x);
  for (const sen of sens) {
    if (!hit(sen) || !ok(sen) || sen.split(x.keepWord).length !== 2) continue;
    const after = sen.replace(x.keepWord, '');
    if (!hit(after) || ok(after)) continue;
    const t = litOf(sen, x.keepWord);
    if (t) { add(`⑩ 한정 표현 지우기 (${x.item}: '${x.keepWord}' 삭제)`, 'article', ...lit1(t, cut(t, sen, x.keepWord))); break outer10; }
  }
}

// ⑪ 서론 행동 유도 문장 지우기 — 유도 문장을 전부 지운다(하나만 지우고 다른 유도가 남으면 뜻이 안 바뀐다)
const heroM = A.match(/heroHook:\s*\n?\s*'((?:[^'\\]|\\.)*)'/);
if (heroM) {
  let h = heroM[1], b;
  while ((b = bridgeOf(h))) h = h.replace(b, '').replace(/\s{2,}/g, ' ').trim();
  if (h !== heroM[1]) add('⑪ 서론 행동 유도 문장 지우기', 'article', heroM[1], h);
}

// ⑦ 추측어 — 원문에 없는 말로 넣는다(원문이 "대부분"이라 쓴 글은 그 말이 허용된다)
const srcPool = fs.readdirSync(DIR_OF(slug)).filter((f) => /^src-\d+\.txt$/.test(f)).map((f) => fs.readFileSync(path.join(DIR_OF(slug), f), 'utf8')).join('\n');
const guess = ['대부분', '대개', '대략', '아마'].find((w) => !srcPool.includes(w) && BANNED.some(([re]) => re.test(w)));
const qa1 = A.match(/intro:\s*\n?\s*'([^'.]{10,}?\.)/);
if (qa1 && guess) add(`⑦ 추측어 넣기 (${guess})`, 'article', qa1[1], `${guess} ${qa1[1]}`);

// ⑧ ⑨ facts
const fq = facts.find((f) => !/\.png$/.test(f.src));
if (fq) add(`⑧ 인용 조작 (${fq.id} 인용 앞에 없는 말)`, 'facts', `"quote": ${JSON.stringify(fq.quote)}`, `"quote": ${JSON.stringify('조작된 ' + fq.quote)}`);
const fv = facts.find((f) => /\d{2,}/.test(f.value) && !/\.png$/.test(f.src));
if (fv) { const n = fv.value.match(/\d{2,}/)[0]; add(`⑨ 값 조작 (${fv.id} ${n} → ${n}7)`, 'facts', `"value": ${JSON.stringify(fv.value)}`, `"value": ${JSON.stringify(fv.value.replace(n, n + '7'))}`); }

// 기준선: 손대지 않은 상태는 통과해야 한다
const base = [...judge('facts'), ...judge('article')];
if (base.length) { console.log(`❌ 기준선이 이미 실패 — 시험 무효\n  ${base.join('\n  ')}`); process.exit(1); }

let missed = 0;
try {
  for (const c of cases) {
    const src = orig[c.target];
    if (!src.includes(c.find)) { console.log(`?  ${c.name} — 바꿀 글자를 못 찾음`); missed++; continue; }
    fs.writeFileSync(files[c.target], c.all ? src.split(c.find).join(c.replace) : src.replace(c.find, c.replace));
    const errs = judge(c.target);
    fs.writeFileSync(files[c.target], src);
    if (errs.length) console.log(`✅ 잡음  ${c.name}\n         → ${errs[0].slice(0, 110)}`);
    else { console.log(`❌ 놓침  ${c.name}`); missed++; }
  }
} finally {
  for (const [k, f] of Object.entries(files)) fs.writeFileSync(f, orig[k]);
}
const made = cases.length;
console.log(missed ? `\n❌ ${made}건 중 ${missed}건 놓침` : `\n✅ 자동 생성 ${made}건 전부 잡음 — 원본 복구 완료`);
process.exit(missed || made < 7 ? 1 : 0);
