/**
 * check-callcenter.ts — 고객센터 글 전용 게이트 (2026-08-26 신설)
 *
 * 왜 (사장님 지적 — "이 시스템이면 계속 오류날 수 있는 거 아냐? 작성할 글이 수천 개인데")
 *   맞다. 오늘 증권사 19곳에 보험 문구가 들어갔다.
 *     "사고접수는 야간·공휴일에도 가능합니다"  95건
 *     "자동차 사고접수와 긴급출동을 받습니다"  76건
 *     "상담사"(증권은 상담원)                302건
 *   생성기를 업종별로 나누면서 메타·타이틀만 갈라놓고 본문을 안 갈랐기 때문이다.
 *   그런데 이걸 잡은 건 게이트가 아니라 사람 눈이었다. 45편이라 눈에 띄었을 뿐,
 *   수천 편이면 못 본다. 그래서 눈이 하던 일을 여기로 옮긴다.
 *
 * 무엇을 보나 — 게이트가 아니면 못 잡는 것만
 *   ① 업종 교차 오염   증권 글에 보험 말, 보험 글에 증권 말
 *   ② 조사 오류        "업무을 받습니다" — 업종 문구를 갈아끼우면 받침이 바뀐다
 *   ③ 남의 회사 번호    A사 글에 B사 대표번호 (사람이 다른 회사로 전화한다)
 *   ④ 글 ↔ JSON      번호·상담시간·ARS·브랜드색이 데이터와 갈리는가
 *   ⑤ 추출본 대조      원문에 없는 번호를 쓰고 있는가
 *   ⑥ tel: 링크       보이는 번호와 걸리는 번호가 다른가 (글자만 봐선 못 잡는다)
 *
 * 업종을 늘릴 때
 *   INDUSTRY 에 한 줄 더한다. 나머지 업종의 고유어가 자동으로 금지어가 된다 —
 *   업종이 늘 때마다 금지어 목록을 손으로 관리하지 않는다.
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = execSync('git rev-parse --show-toplevel').toString().trim();

/* 업종별 고유어. 한 업종의 고유어는 다른 업종 글에 나오면 안 된다.
   own 에는 "그 업종에서만 쓰는 말"만 넣는다. 공용어(고객센터·전화번호)는 넣지 않는다. */
const INDUSTRY: Record<string, { dir: string; label: string; own: string[] }> = {
  insurance: {
    dir: '보험고객센터',
    label: '보험사',
    /* 상담사·상담원은 두 업종이 다 쓴다(소제목이 "상담원(상담사) 연결 방법"이다).
       고유어가 아닌 것을 넣으면 게이트가 멀쩡한 글을 잡는다 — 실제로 26편을 잡았다. */
    own: ['사고접수', '긴급출동', '보험금', '실손', '자동차보험'],
  },
  securities: {
    dir: '증권고객센터',
    label: '증권사',
    own: ['해외주식', '주문접수', '나이트데스크', '장중', '계좌개설'],
  },
  /* 카드사 (2026-08-26 신설). 여기 넣은 말은 다른 업종에서는 금지어가 된다.
     증권사에 "자동차 긴급출동" 이 들어갔던 사고(8/26)를 이 목록이 막는다. */
  card: {
    dir: '카드고객센터',
    label: '카드사',
    own: ['분실신고', '카드론', '현금서비스', '리볼빙', '승인문의'],
  },
  /* 통신사 (2026-08-27 신설). '요금제'·'통신사' 는 기존 글의 통화료 문구에
     이미 쓰여 금지어로 쓸 수 없다 — 겹치지 않는 말만 골랐다. */
  telecom: {
    dir: '통신고객센터',
    label: '통신사',
    own: ['개통', '명의변경', '유심', '로밍', '단말기'],
  },
  /* 온라인 서비스 (2026-08-27 신설) — 쇼핑·앱마켓·OTT.
     통신사에 묶었더니 "쿠팡 … 개통 문의" 가 나왔다. 업종을 갈랐다. */
  online: {
    dir: '온라인고객센터',
    label: '온라인 서비스',
    own: ['주문번호', '환불', '배송', '구독'],
  },
};

/* 조사 오류 — 업종 문구를 갈아끼우면 앞말 받침이 바뀌어 조사가 틀어진다.
   실제로 "해외주식 주문과 야간 데스크 업무을 받습니다" 가 나왔다. */
const PARTICLE = [
  '업무을', '데스크을', '접수을', '번호을', '시간을 받', '연결을 받',
  '주식를', '출동를', '금를', '센터를 받',
];

const d = (s: string) => String(s).replace(/[^0-9]/g, '');

type Center = {
  slug: string; name: string; industry?: string; brandColor: string;
  main: { label: string; tel: string };
  hours: Record<string, string | undefined>;
  ars: { day: { key: string; what: string }[]; night: { key: string; what: string }[] };
  numbers: { label: string; tel: string; smsOnly?: boolean }[];
};

const dir = path.join(ROOT, 'data', 'call-centers');
if (!fs.existsSync(dir)) {
  console.log('고객센터 데이터가 없다 — 생략');
  process.exit(0);
}
const all: Center[] = fs.readdirSync(dir).filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));

console.log('='.repeat(60));
console.log(' 고객센터 검사 — 업종·번호·원문이 서로 맞나');
console.log('='.repeat(60));

let bad = 0;
for (const c of all) {
  const ind = c.industry ?? 'insurance';
  const meta = INDUSTRY[ind];
  const p: string[] = [];
  if (!meta) { console.log(`❌ ${c.name} — 모르는 industry: ${ind}`); bad++; continue; }

  const file = path.join(ROOT, 'app', 'policy', '[id]', '[spoke]', 'content', meta.dir, `${c.slug}.tsx`);
  if (!fs.existsSync(file)) { console.log(`❌ ${c.name} — 글 파일이 없다: ${meta.dir}/${c.slug}.tsx`); bad++; continue; }
  const txt = fs.readFileSync(file, 'utf8');
  const flat = d(txt);

  /* ① 업종 교차 오염 — 다른 업종의 고유어 중, 내 업종 고유어가 아닌 것 */
  const mineWords = new Set(meta.own);
  for (const [k, v] of Object.entries(INDUSTRY)) {
    if (k === ind) continue;
    v.own.filter((w) => !mineWords.has(w)).forEach((w) => {
      if (txt.includes(w)) p.push(`업종에 안 맞는 말 "${w}" (${v.label} 용어)`);
    });
  }

  /* ② 조사 오류 */
  PARTICLE.forEach((w) => { if (txt.includes(w)) p.push(`조사 오류 "${w}"`); });

  /* ③④⑤⑥ 번호 */
  const mine = [c.main.tel, ...(c.numbers ?? []).map((n) => n.tel)];
  const mineSet = new Set(mine.map(d));
  mine.forEach((t) => { if (!flat.includes(d(t))) p.push(`글에 없는 번호 ${t}`); });
  all.filter((o) => o.slug !== c.slug && !mineSet.has(d(o.main.tel)))
    .forEach((o) => { if (flat.includes(d(o.main.tel))) p.push(`남의 대표번호 섞임 → ${o.name} ${o.main.tel}`); });
  Array.from(new Set((txt.match(/tel:([0-9+]+)/g) ?? []).map((x) => d(x))))
    .forEach((t) => { if (!mineSet.has(t)) p.push(`글에 없는 번호로 전화가 걸린다 tel:${t}`); });
  (c.numbers ?? []).filter((n) => n.smsOnly)
    .forEach((n) => { if (txt.includes(`tel:${d(n.tel)}`)) p.push(`문자 전용인데 tel: 이 걸려 있다 ${n.tel}`); });

  if (!txt.includes(c.name)) p.push('회사 이름이 글에 없다');
  if (!txt.includes(`"brandColor": "${c.brandColor}"`)) p.push(`brandColor 가 JSON(${c.brandColor})과 다르다`);
  [...(c.ars?.day ?? []), ...(c.ars?.night ?? [])]
    .forEach((a) => { if (!txt.includes(a.what)) p.push(`ARS 문구가 글에 없다 "${a.key}번 ${a.what}"`); });
  Object.entries(c.hours ?? {}).forEach(([k, v]) => {
    if (v && !txt.includes(String(v))) p.push(`hours.${k} 가 글과 다르다`);
  });

  const src = path.join(ROOT, 'scripts', 'output', `source-${c.slug}-call-center.txt`);
  if (!fs.existsSync(src)) p.push('추출본이 없다 — 공식 페이지를 뜬 적이 없다');
  else {
    const raw = fs.readFileSync(src, 'utf8');
    const s = d(raw);
    mine.forEach((t) => { if (!s.includes(d(t))) p.push(`추출본에 없는 번호 ${t}`); });

    /* ⑦ JSON ↔ 추출본 (2026-08-27 신설).
       이 게이트는 지금까지 "글 ↔ JSON" 과 "글의 번호 ↔ 추출본" 만 봤다.
       JSON 의 hours 값이 원문에 있는 말인지는 아무도 안 봤다 — 그래서
       원문에 없는 문장 43건이 게이트 3종을 다 통과하고 라이브에 나갔다(2026-08-26).
         · NH투자증권 추출본 3,383자에 '주말' 이 한 글자도 없는데
           글에는 "주말·공휴일은 별도 안내" 가 있었다.
         · 현대해상·삼성화재 야간·공휴일에 원문에 없는 "365일 24시간" 이 있었다.
       사람이 값을 다듬다가 원문에 없는 말을 만드는 것이 이 사고의 형태다.
       판정은 글자 대조로만 한다 — 공백만 지우고 원문에 그 문자열이 있는지 본다. */
    const flat = (x: string) => String(x).replace(/\s+/g, '');
    const srcFlat = flat(raw);
    /* 우리가 쓰는 말(원문에 있을 리 없다)은 면제한다 */
    const OURS = /표기 없음|미공개|공식 채널 확인|확인 필요/;
    Object.entries(c.hours ?? {}).forEach(([k, v]) => {
      if (!v || OURS.test(String(v))) return;
      if (!srcFlat.includes(flat(v))) p.push(`hours.${k} 가 원문에 없다: "${String(v).slice(0, 40)}"`);
    });
    [...(c.ars?.day ?? []), ...(c.ars?.night ?? [])].forEach((a) => {
      if (!srcFlat.includes(flat(a.what))) p.push(`ARS 문구가 원문에 없다 "${a.what}"`);
    });
  }

  if (p.length) { bad++; console.log(`❌ ${c.name} (${meta.label})`); p.forEach((x) => console.log(`     · ${x}`)); }
}

console.log('');
if (bad) {
  console.log(` 회사 글 ${all.length}편 중 ${bad}편에 문제`);
  console.log('');
  console.log(' 대부분은 data/call-centers/{회사}.json 을 고치고 다시 찍으면 된다:');
  console.log('   npx tsx scripts/new-call-center.ts data/call-centers/{회사}.json --approve');
  console.log(' 업종 말이 섞였으면 scripts/new-call-center.ts 의 INDUSTRY 를 고친다.');
  process.exit(1);
}
console.log(` ✅ 통과 — 회사 글 ${all.length}편, 업종 말·번호·원문이 서로 맞는다`);
process.exit(0);
