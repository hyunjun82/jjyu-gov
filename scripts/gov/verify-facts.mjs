/**
 * ② 사실 검사 — facts.json 을 원문과 코드로 대조한다. 모델이 판정하지 않는다. (2026-09-23)
 *
 *   node scripts/gov/verify-facts.mjs <slug>
 *
 * facts.json = { facts: [{ id, item, value, scope?, scopeWord?, quote, src, must?, read2? }] }
 *   quote     원문에서 글자 그대로 복사한 문장 — src 파일 안에 그대로 있어야 한다 (공백·줄바꿈만 무시)
 *   value     글에 쓸 값 — 값의 숫자가 전부 quote 안에 있어야 한다
 *   scopeWord 값이 한정된 범위(예: "서울")면 그 말 — 글에서 이 값이 나오는 문장에 함께 있어야 한다 (check-article)
 *   src       src-N.txt 또는 img-N-K.png
 *   read2     이미지 사실만 — 두 번째로 따로 읽은 결과. quote 와 숫자가 같아야 한다
 *
 * 하나라도 틀리면 exit 1 — 글을 쓰기 전에 멈춘다.
 */
import fs from 'node:fs';
import path from 'node:path';

export const DIR_OF = (slug) => path.join('scripts', 'output', 'gov', slug);
/** 뜻을 바꾸는 한정 표현 — 빠지면 오해가 생긴다 ("관리할 계획" → "운영한다") */
export const HEDGE = ['계획', '예정', '협의 중', '협의중', '검토 중', '선착순', '한정', '조기 마감', '변동될', '변경될', '바뀔 수', '필수', '반드시', '불가'];
/** 대조용 정규화 — 공백·줄바꿈을 지우고 따옴표·가운뎃점·물결·대시 모양을 하나로 */
export const norm = (s) => String(s ?? '')
  .replace(/\s+/g, '')
  .replace(/[‘’`´]/g, "'").replace(/[“”]/g, '"')
  .replace(/[·ㆍ・•∙]/g, '·').replace(/[~〜～]/g, '~').replace(/[‐‑‒–—―]/g, '-');
/** 숫자 토큰 — 쉼표를 뗀 숫자열 */
/** 금액을 원 단위 숫자 하나로 — "5만 원"을 5 와 만으로 떼어 보면 5 는 어디에나 있어 통과해 버린다(2026-09-23 시험).
 *  "1만3천 원"→13000, "3만원"→30000, "2천 원"→2000, "1.5억"→150000000. 표기가 달라도 같은 금액은 같은 숫자가 된다 */
const toNum = (t) => Number(String(t).replace(/,/g, ''));
export const canonMoney = (s) => String(s ?? '')
  .replace(/(\d[\d,]*(?:\.\d+)?)\s*억\s*(?:(\d[\d,]*)\s*만)?/g, (_, a, b) => String(Math.round(toNum(a) * 1e8 + (b ? toNum(b) * 1e4 : 0))))
  .replace(/(\d[\d,]*)\s*만\s*(\d[\d,]*)\s*천/g, (_, a, b) => String(toNum(a) * 1e4 + toNum(b) * 1e3))
  .replace(/(\d[\d,]*(?:\.\d+)?)\s*만(?=\s*(?:원|명|곳|개|건|$|[^\d가-힣]))/g, (_, a) => String(Math.round(toNum(a) * 1e4)))
  .replace(/(\d[\d,]*)\s*천(?=\s*원)/g, (_, a) => String(toNum(a) * 1e3));
/** 날짜를 "M.D" 하나로 — 원문 "9.21"·"9. 21."·"2026. 9. 21." 과 글 "9월 21일"이 같은 날짜로 읽혀야
 *  범위어·순서 검사가 날짜에도 걸린다 (2026-09-23 시험에서 '평일' 삭제를 놓쳤다) */
export const canonDate = (s) => String(s ?? '')
  .replace(/(\d{4})\.\s*(\d{1,2})\.\s*(\d{1,2})\.?/g, '$1 $2.$3')
  .replace(/(?<![\d.])(\d{1,2})\.\s+(\d{1,2})\.(?!\d)/g, '$1.$2')
  .replace(/(?<!\d)(\d{1,2})월\s*(\d{1,2})일/g, '$1.$2');
export const nums = (s) => (canonMoney(canonDate(s)).match(/\d[\d,]*(?:\.\d+)?/g) ?? []).map((t) => t.replace(/,/g, ''));
/** 범위 쌍 — "10~18시", "9월 1일부터 10월 2일까지", "만 19~34세" → [[10,18], [9.1,10.2], [19,34]] */
export const ranges = (s) => [...canonMoney(canonDate(s)).matchAll(/(\d[\d,]*(?:\.\d+)?)\s*(?:\([가-힣]{1,2}\))?\s*[가-힣]{0,2}\s*(?:~|부터)\s*(?:만\s*)?(\d[\d,]*(?:\.\d+)?)/g)]
  .map((m) => [m[1].replace(/,/g, ''), m[2].replace(/,/g, '')]);
/** 허용 목록용 — "9.21" 같은 날짜 표기는 글에서 "9월 21일"로 풀어 쓰므로 9·21 로도 쪼개 넣는다 */
export const numsLoose = (s) => nums(s).flatMap((t) => (/^\d{1,2}\.\d{1,2}$/.test(t) ? [t, ...t.split('.')] : [t]));

export function loadFacts(slug) {
  const f = path.join(DIR_OF(slug), 'facts.json');
  if (!fs.existsSync(f)) throw new Error(`facts.json 없음: ${f}`);
  const j = JSON.parse(fs.readFileSync(f, 'utf8'));
  return Array.isArray(j) ? j : j.facts;
}

export function verifyFacts(slug) {
  const dir = DIR_OF(slug);
  const facts = loadFacts(slug);
  const texts = Object.fromEntries(fs.readdirSync(dir).filter((f) => /^src-\d+\.txt$/.test(f))
    .map((f) => [f, norm(fs.readFileSync(path.join(dir, f), 'utf8'))]));
  const errors = [], warns = [], rows = [];
  const srcs = fs.existsSync(path.join(dir, 'sources.json')) ? JSON.parse(fs.readFileSync(path.join(dir, 'sources.json'), 'utf8')) : [];
  const notPrimary = new Map(srcs.filter((s) => s.primary === false).flatMap((s) => [[s.file, s.byline], ...(s.images || []).map((im) => [im.file, s.byline])]));
  // 1차 출처가 아닌 원문은 교차 확인 수에도 넣지 않는다
  for (const f of notPrimary.keys()) delete texts[f];

  for (const x of facts) {
    const tag = `${x.id} ${x.item}`;
    if (!x.quote || !x.value || !x.src) { errors.push(`${tag} — quote·value·src 중 빈 칸`); continue; }
    if (notPrimary.has(x.src)) { errors.push(`${tag} — 출처 ${x.src} 는 1차 출처가 아니다 (${notPrimary.get(x.src)})`); continue; }
    const isImg = /\.png$/i.test(x.src);
    if (!fs.existsSync(path.join(dir, x.src))) { errors.push(`${tag} — 출처 파일 없음: ${x.src}`); continue; }

    // 1) 인용이 원문에 글자 그대로 있나
    if (!isImg && !texts[x.src]?.includes(norm(x.quote))) {
      errors.push(`${tag} — 인용이 ${x.src} 에 글자 그대로 없다: "${x.quote.slice(0, 70)}"`);
    }
    // 2) 값의 숫자가 전부 인용 안에 있나
    const qn = new Set(nums(x.quote));
    const miss = nums(x.value).filter((n) => !qn.has(n));
    if (miss.length) errors.push(`${tag} — 값의 숫자 ${miss.join(', ')} 가 인용에 없다 (값 "${x.value}")`);
    // 2-1) 필수 사실의 핵심어도 원문 인용 안의 말이어야 한다 (글 대조가 이 말로 누락을 본다)
    if (x.key && !norm(x.quote).includes(norm(x.key))) errors.push(`${tag} — 핵심어 "${x.key}" 가 인용 안에 없다`);
    // 2-2) 한정 표현 — 인용에 계획·예정·선착순… 이 있으면 살릴 말(keepWord) 이나 안 살리는 이유(keepWhy) 중 하나는 적어야 한다.
    //      같은 '예정'도 1월 공지의 예정(지금은 시행 중)과 "관리할 계획"(아직 안 함)은 다르다 — 문맥 판단은 모델, 강제는 코드
    const hedge = HEDGE.find((h) => x.quote.includes(h));
    if (hedge && !x.keepWord && !x.keepWhy) errors.push(`${tag} — 인용에 '${hedge}' 가 있는데 keepWord(살릴 말)도 keepWhy(안 살리는 이유)도 없다`);
    if (x.keepWord && !norm(x.quote).includes(norm(x.keepWord))) errors.push(`${tag} — keepWord "${x.keepWord}" 가 인용 안에 없다`);
    // 3) 이미지는 두 번 따로 읽어 숫자가 같아야 한다
    if (isImg) {
      if (!x.read2) errors.push(`${tag} — 이미지 사실인데 두 번째 읽기(read2)가 없다`);
      else if (nums(x.quote).join('|') !== nums(x.read2).join('|')) {
        errors.push(`${tag} — 이미지 두 번 읽기가 다르다: "${x.quote}" ↔ "${x.read2}"`);
      }
    }
    // 4) 교차 확인 — 값이 몇 개 원문에 나오나 (규칙 2: 2곳 이상). 한 곳뿐이면 경고
    // 값은 요약된 말이라 통째로는 안 나온다 — 값의 숫자가 전부 (다른 숫자의 일부가 아니게) 나오는 원문을 센다
    const vn = nums(x.value);
    const hasNum = (t, n) => new RegExp(`(^|[^\\d.])${n.replace('.', '\\.')}(?![\\d])`).test(t.replace(/,/g, ''));
    const seenIn = Object.entries(texts).filter(([, t]) => vn.every((n) => hasNum(t, n))).map(([f]) => f);
    if (vn.length && seenIn.length < 2 && !isImg && !/^https?:/.test(x.value)) warns.push(`${tag} — 값 숫자(${vn.join(', ')})가 원문 ${seenIn.length}곳에만 있다`);
    rows.push({ ...x, isImg, seenIn });
  }
  return { facts, rows, errors, warns };
}

if (process.argv[1]?.replace(/\\/g, '/').endsWith('gov/verify-facts.mjs')) {
  const slug = process.argv[2];
  if (!slug) { console.error('사용: node scripts/gov/verify-facts.mjs <slug>'); process.exit(2); }
  const { facts, rows, errors, warns } = verifyFacts(slug);
  console.log(`사실 ${facts.length}개 · 이미지 ${rows.filter((r) => r.isImg).length}개`);
  warns.forEach((w) => console.log(`  ⚠ ${w}`));
  errors.forEach((e) => console.log(`  ❌ ${e}`));
  console.log(errors.length ? `❌ 사실 검사 실패 ${errors.length}건 — 글을 쓰지 않는다` : '✅ 사실 검사 통과 — 인용 전부 원문에 글자 그대로, 값 숫자 전부 인용 안');
  process.exit(errors.length ? 1 : 0);
}
