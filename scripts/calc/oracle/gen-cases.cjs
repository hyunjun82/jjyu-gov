// 무작위 케이스 생성 (재현 가능한 시드). 사용: node gen-cases.cjs <seed> <개수> <접두어> > out.json
const [, , seedArg, nArg, prefix = 'r'] = process.argv;
let a = Number(seedArg) >>> 0;
const rnd = () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const int = (lo, hi) => lo + Math.floor(rnd() * (hi - lo + 1));
const pick = (arr) => arr[int(0, arr.length - 1)];
const won = (lo, hi, unit = 10000) => Math.round(int(lo, hi) / unit) * unit;
const chance = (p) => rnd() < p;

function salary() {
  const r = rnd();
  if (r < 0.15) return won(5_000_000, 20_000_000);
  if (r < 0.55) return won(20_000_000, 55_000_000);
  if (r < 0.8) return won(55_000_000, 90_000_000);
  if (r < 0.95) return won(90_000_000, 160_000_000);
  return won(160_000_000, 350_000_000);
}

function make(i) {
  const s = salary();
  const c = { id: `${prefix}${String(i).padStart(3, '0')}`, salary: s, paid: chance(0.5) ? won(0, Math.round(s * 0.08)) : 0 };
  const mode = rnd(); // 0.35: 한두 가지만 켠 단순 케이스, 나머지: 여러 가지
  const keys = ['human', 'pension', 'insurance', 'housing', 'personalPension', 'smallBiz', 'subscription', 'card', 'reduction', 'marriage', 'child', 'pensionAcc', 'cover', 'medical', 'education', 'donation', 'other'];
  const on = new Set();
  if (mode < 0.35) { const n = int(1, 2); while (on.size < n) on.add(pick(keys)); }
  else keys.forEach((k) => { if (chance(0.55)) on.add(k); });

  if (on.has('human') || on.has('child')) {
    const h = {};
    if (chance(0.5)) h.spouse = 1;
    if (chance(0.4)) h.parents = int(1, 2);
    const kids = chance(0.5) ? int(1, 3) : 0;
    if (kids) h.children = kids;
    const sp = chance(0.1) && !h.spouse && kids > 0; // 한부모공제는 배우자가 없고 자녀가 있어야 한다 (홈택스가 요건을 확인하라고 거절)
    if (chance(0.15)) h.otherDesc = 1;
    if (chance(0.15)) h.siblings = 1;
    if (chance(0.2)) h.senior = 1;
    if (chance(0.12)) h.disabled = 1;
    if (chance(0.15)) h.woman = 1;
    if (sp) h.singleParent = 1;
    c.human = h;
    if (on.has('child') && kids) {
      c.child = { count: kids };
      if (chance(0.3)) c.child.first = 1;
      if (chance(0.25)) c.child.second = 1;
      if (chance(0.15)) c.child.third = int(1, 2);
    }
  }
  if (on.has('pension')) c.pension = { np: won(0, Math.min(5_900_000, Math.round(s * 0.045) + 500_000)) , ...(chance(0.15) ? { gov: won(500_000, 6_000_000) } : {}) };
  if (on.has('insurance')) c.insurance = { health: won(0, Math.round(s * 0.05)), employ: won(0, Math.round(s * 0.01)) };
  if (on.has('housing')) {
    const h = {};
    if (chance(0.5)) h['8311'] = won(500_000, 12_000_000);
    if (chance(0.3)) h['8312'] = won(500_000, 8_000_000);
    if (chance(0.5)) h[pick(['8321', '8322', '8323', '8324', '8325', '8326', '8327', '8328', '8329'])] = won(500_000, 22_000_000);
    c.housing = h;
  }
  if (on.has('personalPension')) c.personalPension = { amt: won(500_000, 9_000_000) };
  if (on.has('smallBiz')) c.smallBiz = { amt: won(500_000, 6_000_000) };
  if (on.has('subscription')) c.subscription = { comp: won(500_000, 4_000_000), ...(chance(0.2) ? { saving: won(500_000, 4_000_000) } : {}) };
  if (on.has('card')) {
    const k = {};
    const tot = Math.round(s * (0.1 + rnd() * 0.6));
    const w = [rnd(), rnd(), rnd(), rnd() * 0.3, rnd() * 0.3, rnd() * 0.2];
    const sum = w.reduce((x, y) => x + y, 0) || 1;
    ['credit', 'debit', 'cash', 'market', 'transit', 'cultCredit'].forEach((n, j) => { if (chance(0.85)) k[n] = won(0, Math.round((tot * w[j]) / sum), 1000); });
    if (chance(0.3)) k.cultDebit = won(0, 1_500_000);
    if (chance(0.3)) k.cultCash = won(0, 1_500_000);
    c.card = k;
  }
  if (on.has('reduction') && chance(0.4)) c.reduction = { ibx_8610: won(1_000_000, 20_000_000) };
  if (on.has('marriage')) c.marriage = 1;
  if (on.has('pensionAcc')) {
    const p = {};
    if (chance(0.7)) p.savings = won(500_000, 9_000_000);
    if (chance(0.5)) p.retire = won(500_000, 9_000_000);
    if (chance(0.15)) p.sci = won(500_000, 3_000_000);
    if (chance(0.1)) { p.isaSavings = won(500_000, 3_000_000); }
    c.pensionAcc = p;
  }
  if (on.has('cover')) c.cover = { general: won(0, 2_000_000), ...(chance(0.2) ? { disabled: won(500_000, 2_000_000) } : {}) };
  if (on.has('medical')) {
    const rows = [];
    const n = int(1, 3);
    for (let j = 0; j < n; j++) {
      const r = {};
      if (chance(0.7)) r.general = won(0, 12_000_000);
      if (chance(0.3)) r.special = won(0, 8_000_000);
      if (chance(0.1)) r.premature = won(0, 6_000_000);
      if (chance(0.1)) r.infertility = won(0, 6_000_000);
      if (chance(0.15)) r.insurance = won(0, 2_000_000);
      rows.push(r);
    }
    c.medical = rows;
  }
  if (on.has('education')) {
    const kinds = ['소득자본인', '미취학아동 교육비', '초중고 교육비', '대학교 교육비', '장애인'];
    c.education = Array.from({ length: int(1, 3) }, () => {
      const kind = pick(kinds);
      const r = { kind, fee: won(500_000, kind === '대학교 교육비' ? 12_000_000 : 5_000_000) };
      if (kind === '초중고 교육비' && chance(0.4)) r.uniform = won(100_000, 700_000);
      if ((kind === '초중고 교육비' || kind === '미취학아동 교육비') && chance(0.3)) r.field = won(100_000, 500_000);
      return r;
    });
  }
  if (on.has('donation')) {
    const kinds = ['정치자금기부금', '고향사랑기부금(일반)', '고향사랑기부금(특별재난지역)', '특례기부금', '우리사주조합기부금', '일반기부금(종교단체 외)', '일반기부금(종교단체)'];
    c.donation = Array.from({ length: int(1, 3) }, () => ({ kind: pick(kinds), year: 2026, amt: won(50_000, 15_000_000) }));
  }
  if (on.has('other')) {
    const o = {};
    if (chance(0.3)) o.union = won(100_000, 2_000_000);
    if (chance(0.15)) o.houseLoan = won(500_000, 3_000_000);
    if (chance(0.15)) { o.foreignTax = won(100_000, 2_000_000); o.foreignPay = won(2_000_000, 20_000_000); }
    if (chance(0.6)) o.rent = won(2_000_000, 14_000_000);
    c.other = o;
  }
  return c;
}
const n = Number(nArg || 10);
console.log(JSON.stringify(Array.from({ length: n }, (_, i) => make(i + 1)), null, 0));
