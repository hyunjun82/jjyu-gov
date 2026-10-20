/* 연말정산 모의계산 엔진 — 2026년 귀속(2027년 2월 정산) 기준.
 *
 * 검증: 홈택스 "(모의계산) 연말정산 자동계산 2026년"과 무작위 케이스로 단계별 대조한다
 *   (scripts/calc/ 의 하니스). 한 단계라도 다르면 통과시키지 않는다.
 * 순수 함수만 둔다 — 화면(CalcClient)과 대조 하니스가 같은 코드를 쓴다.
 */

export interface MedicalRow {
  general?: number; // 일반 의료비
  premature?: number; // 미숙아·선천성이상아
  infertility?: number; // 난임시술비
  special?: number; // 본인·65세 이상·6세 이하·장애인·건강보험 산정특례자
  insurance?: number; // 실손의료보험금(차감)
}
export interface EducationRow {
  kind: '소득자본인' | '미취학아동 교육비' | '초중고 교육비' | '대학교 교육비' | '장애인';
  fee?: number;
  uniform?: number;
  field?: number;
}
export interface DonationRow {
  kind:
    | '정치자금기부금'
    | '고향사랑기부금(특별재난지역)'
    | '고향사랑기부금(일반)'
    | '특례기부금'
    | '우리사주조합기부금'
    | '일반기부금(종교단체 외)'
    | '일반기부금(종교단체)';
  year?: number;
  amt: number;
}
export interface YearEndInput {
  salary: number; // 총급여
  paid?: number; // 기납부세액
  human?: {
    spouse?: number;
    parents?: number;
    children?: number;
    otherDesc?: number;
    siblings?: number;
    recipient?: number;
    foster?: number;
    senior?: number;
    disabled?: number;
    woman?: number;
    singleParent?: number;
  };
  pension?: { np?: number; gov?: number; mil?: number; school?: number; post?: number };
  insurance?: { health?: number; employ?: number };
  housing?: Record<string, number>; // 8311·8312(임차차입금) 8321~8329(장기주택저당차입금 이자)
  personalPension?: { amt?: number };
  smallBiz?: { amt?: number };
  subscription?: { saving?: number; comp?: number; worker?: number };
  card?: {
    credit?: number;
    debit?: number;
    cash?: number;
    cultCredit?: number;
    cultDebit?: number;
    cultCash?: number;
    market?: number;
    transit?: number;
  };
  reduction?: Record<string, number>;
  marriage?: number;
  child?: { count?: number; first?: number; second?: number; third?: number };
  pensionAcc?: { sci?: number; retire?: number; savings?: number; isaRetire?: number; isaSavings?: number };
  cover?: { general?: number; disabled?: number };
  medical?: MedicalRow[];
  education?: EducationRow[];
  donation?: DonationRow[];
  other?: { union?: number; houseLoan?: number; foreignTax?: number; foreignPay?: number; rent?: number };
}

export interface YearEndResult {
  earnedDeduction: number; // 근로소득공제
  earnedIncome: number; // 근로소득금액
  personalDeduction: number; // 인적공제 합계
  incomeDeductionTotal: number; // 소득공제 합계(근로소득공제 포함)
  taxableIncome: number; // 과세표준
  rate: number; // 적용 세율
  calculatedTax: number; // 산출세액
  reduction: number; // 세액감면
  creditTotal: number; // 세액공제 합계(표준세액공제 포함)
  determinedTax: number; // 결정세액
  localTax: number; // 지방소득세(결정세액의 10%)
  payable: number; // 결정세액 − 기납부세액 (+ 추가납부, − 환급)
  detail: Record<string, number>;
}

const n = (v: number | undefined): number => (v && v > 0 ? v : 0);
/** 원 단위 내림. 0.15×정수 같은 계산의 부동소수 오차(…99999.9999)로 1원이 빠지지 않게 아주 작은 값을 더한다 */
const fl = (v: number): number => Math.floor(v + 1e-6);
const sumRows = <T,>(rows: T[] | undefined, f: (r: T) => number): number => (rows ?? []).reduce((a, r) => a + f(r), 0);

/** 근로소득공제 */
export function earnedIncomeDeduction(s: number): number {
  let d: number;
  if (s <= 5_000_000) d = s * 0.7;
  else if (s <= 15_000_000) d = 3_500_000 + (s - 5_000_000) * 0.4;
  else if (s <= 45_000_000) d = 7_500_000 + (s - 15_000_000) * 0.15;
  else if (s <= 100_000_000) d = 12_000_000 + (s - 45_000_000) * 0.05;
  else d = 14_750_000 + (s - 100_000_000) * 0.02;
  return Math.min(fl(d), 20_000_000);
}

/** 종합소득세율(2026년) → [산출세액, 세율] */
export function incomeTax(base: number): { tax: number; rate: number } {
  // [상한, 세율(%), 누진공제]
  const t: [number, number, number][] = [
    [14_000_000, 6, 0],
    [50_000_000, 15, 1_260_000],
    [88_000_000, 24, 5_760_000],
    [150_000_000, 35, 15_440_000],
    [300_000_000, 38, 19_940_000],
    [500_000_000, 40, 25_940_000],
    [1_000_000_000, 42, 35_940_000],
    [Infinity, 45, 65_940_000],
  ];
  const b = Math.max(0, fl(base));
  for (const [lim, pct, ded] of t) if (b <= lim) return { tax: fl((b * pct) / 100) - ded, rate: pct / 100 };
  return { tax: 0, rate: 0 };
}

/** 근로소득세액공제 */
export function earnedTaxCredit(calcTax: number, salary: number): number {
  const raw = calcTax <= 1_300_000 ? calcTax * 0.55 : 715_000 + (calcTax - 1_300_000) * 0.3;
  let cap: number;
  if (salary <= 33_000_000) cap = 740_000;
  else if (salary <= 70_000_000) cap = Math.max(660_000, 740_000 - (salary - 33_000_000) * 0.008);
  else if (salary <= 120_000_000) cap = Math.max(500_000, 660_000 - (salary - 70_000_000) * 0.5 / 1);
  else cap = Math.max(200_000, 500_000 - (salary - 120_000_000) * 0.5);
  return fl(Math.min(raw, cap));
}

/** 세액감면 입력칸(홈택스 화면 id) → 감면율. 홈택스 자동계산 대조로 확인한 것만 둔다 */
export const REDUCTION_RATE: Record<string, number> = {
  ibx_8601: 1.0, // 소득세법에 의한 감면
  ibx_8602: 0.5, // 외국인기술자 50% 해당분
  ibx_8612: 0.7, // 외국인기술자 70% 해당분
  ibx_8606: 1.0, // 조세조약(원어민교사 등)
  ibx_8607: 0.7, // 중소기업 취업자: 60세 이상·장애인·경력단절여성 (연 200만원 한도, 8608과 합산)
  ibx_8608: 0.9, // 중소기업 취업자: 15~34세 청년 (연 200만원 한도, 8607과 합산)
  ibx_8609: 0.5, // 성과공유 중소기업 경영성과급 (총급여 7천만원 이하)
  ibx_8610: 0.5, // 중소기업 핵심인력 성과보상기금 (중소기업 50%)
  ibx_8611: 0.5, // 내국인 우수 인력 국내 복귀
  ibx_8614: 0.3, // 핵심인력 성과보상기금 (중견 30%)
  ibx_8616: 0.5, // 핵심인력 성과보상기금 (중견 50%)
  ibx_8617: 0.9, // 핵심인력 성과보상기금 (중소 90%)
};

/** 표준세액공제(13만원)와 특별공제(보험료·주택자금 소득공제, 보장성보험·의료비·교육비·기부금·월세 세액공제) 중 세금이 적은 쪽을 고른다 */
export function computeYearEnd(inp: YearEndInput): YearEndResult {
  const withSpecial = calc(inp, true);
  const withStandard = calc(inp, false);
  return withSpecial.determinedTax <= withStandard.determinedTax ? withSpecial : withStandard;
}

/** 세액공제 적용 순서 (홈택스 대조로 확정한 순서) */
function calc(inp: YearEndInput, useSpecial: boolean): YearEndResult {
  const s = n(inp.salary);
  const detail: Record<string, number> = {};
  const earnedDeduction = earnedIncomeDeduction(s);
  const earnedIncome = s - earnedDeduction;

  let remain = earnedIncome; // 공제는 근로소득금액을 넘길 수 없다 (순서대로 한도 적용)
  const take = (amt: number): number => {
    const v = Math.max(0, Math.min(fl(amt), remain));
    remain -= v;
    return v;
  };

  // ── 인적공제
  const h = inp.human ?? {};
  const persons = 1 + n(h.spouse) + n(h.parents) + n(h.children) + n(h.otherDesc) + n(h.siblings) + n(h.recipient) + n(h.foster);
  let personalRaw = persons * 1_500_000 + n(h.senior) * 1_000_000 + n(h.disabled) * 2_000_000;
  if (n(h.singleParent)) personalRaw += 1_000_000;
  else if (n(h.woman) && earnedIncome <= 30_000_000) personalRaw += 500_000;
  const personalDeduction = take(personalRaw);

  // ── 특별소득공제(보험료·주택자금) — 표준세액공제를 고르면 0
  detail.dSpecial = 0;
  let housingCap = 4_000_000; // 주택임차차입금·장기주택저당차입금 이자·주택마련저축 합계 한도(장기주택 유형 한도가 더 크면 그 한도)
  let housingUsed = 0;
  let rentUsed = 0;
  if (useSpecial) {
    const ins = inp.insurance ?? {};
    detail.dSpecial += take(n(ins.health) + n(ins.employ));
    const hs = inp.housing ?? {};
    const rentLoan = n(hs['8311']) * 0.4 + (s <= 50_000_000 ? n(hs['8312']) * 0.4 : 0);
    const longLimits: Record<string, number> = {
      '8321': 6_000_000, '8322': 10_000_000, '8323': 15_000_000, '8324': 20_000_000, '8325': 18_000_000,
      '8326': 20_000_000, '8327': 18_000_000, '8328': 8_000_000, '8329': 6_000_000,
    };
    let longInterest = 0;
    let longCap = 0;
    for (const [k, lim] of Object.entries(longLimits)) {
      if (n(hs[k])) { longInterest += n(hs[k]); longCap = Math.max(longCap, lim); }
    }
    housingCap = Math.max(longCap, 4_000_000);
    const rentPart = Math.min(rentLoan, 4_000_000);
    const longPart = Math.min(longInterest, longCap);
    const housing = take(Math.min(rentPart + longPart, housingCap));
    detail.dSpecial += housing;
    housingUsed = housing;
    rentUsed = Math.min(rentPart, housing);
  }

  // ── 그 밖의 소득공제
  detail.dOther = take(Math.min(n(inp.personalPension?.amt), 1_800_000) * 0.4);
  const smallBizLimit = earnedIncome <= 40_000_000 ? 6_000_000 : earnedIncome <= 60_000_000 ? 5_000_000 : earnedIncome <= 100_000_000 ? 4_000_000 : 2_000_000;
  const smallBiz = Math.min(n(inp.smallBiz?.amt), smallBizLimit);
  const sub = inp.subscription ?? {};
  const subscriptionRaw = s <= 70_000_000 ? (Math.min(n(sub.saving), 3_000_000) + Math.min(n(sub.comp), 3_000_000) + Math.min(n(sub.worker), 1_800_000)) * 0.4 : 0;
  const subscription = Math.min(subscriptionRaw, Math.max(0, 4_000_000 - rentUsed), Math.max(0, housingCap - housingUsed));
  const card = cardDeduction(inp.card ?? {}, s, n(inp.human?.children) + n(inp.human?.foster));
  detail.dOther += take(Math.min(smallBiz + subscription + card, 25_000_000));
  detail.cardDeduction = card;

  // ── 연금보험료 (홈택스는 소득공제 중 맨 마지막에 적용한다)
  const pn = inp.pension ?? {};
  detail.dPension = take(n(pn.np) + n(pn.gov) + n(pn.mil) + n(pn.school) + n(pn.post));

  const incomeDeductionTotal = earnedDeduction + (earnedIncome - remain);
  const taxableIncome = remain;
  const { tax: calculatedTax, rate } = incomeTax(taxableIncome);

  // ── 세액감면: 산출세액 × (감면대상 급여 ÷ 총급여) × 감면율
  let reduction = 0;
  let youthJob = 0; // 중소기업 취업자 감면(8607+8608)은 합쳐서 연 200만원 한도
  for (const [id, rate] of Object.entries(REDUCTION_RATE)) {
    const pay = n(inp.reduction?.[id]);
    if (pay <= 0 || s <= 0) continue;
    if (id === 'ibx_8609' && s > 70_000_000) continue;
    const amt = fl((calculatedTax * Math.min(pay, s)) / s * rate);
    if (id === 'ibx_8607' || id === 'ibx_8608') youthJob += amt;
    else reduction += amt;
  }
  const youthJobRed = Math.min(youthJob, 2_000_000);
  reduction += youthJobRed;
  reduction = Math.min(reduction, calculatedTax);

  // ── 세액공제: 산출세액을 넘길 수 없고 순서대로 적용된다
  let taxLeft = Math.max(0, calculatedTax - reduction);
  const grant = (amt: number): number => {
    const v = Math.max(0, Math.min(fl(amt), taxLeft));
    taxLeft -= v;
    return v;
  };
  const credits: Record<string, number> = {};
  // 중소기업 취업자 감면(8607·8608)이 있으면 근로소득세액공제는 (산출세액−그 감면세액)/산출세액 비율만큼만 적용된다
  credits.earned = grant(calculatedTax > 0 ? (earnedTaxCredit(calculatedTax, s) * (calculatedTax - youthJobRed)) / calculatedTax : 0);
  credits.marriage = grant(n(inp.marriage) ? 500_000 : 0);

  // 자녀 (8세 이상 기본공제 자녀) + 출산·입양
  const kids = n(inp.human?.children) + n(inp.human?.foster);
  let childCredit = kids <= 0 ? 0 : kids === 1 ? 250_000 : kids === 2 ? 550_000 : 550_000 + (kids - 2) * 400_000;
  const ch = inp.child ?? {};
  childCredit += (n(ch.first) ? 300_000 : 0) + (n(ch.second) ? 500_000 : 0) + n(ch.third) * 700_000;
  credits.child = grant(childCredit);

  credits.donationOther = grant(donationCreditOf(inp.donation, earnedIncome, 'other'));
  const cv = inp.cover ?? {};
  const rent = n(inp.other?.rent);
  const rentRate = s <= 55_000_000 ? 0.17 : s <= 80_000_000 ? 0.15 : 0;
  if (useSpecial) {
    credits.insurance = grant(Math.min(n(cv.general), 1_000_000) * 0.12 + Math.min(n(cv.disabled), 1_000_000) * 0.15);
    credits.medical = grant(medicalCreditOf(inp.medical, s));
    credits.education = grant(educationCreditOf(inp.education));
    credits.donation = grant(donationCreditOf(inp.donation, earnedIncome, 'special'));
  }
  const pa = inp.pensionAcc ?? {};
  // ISA 만기금액을 연금계좌로 넣은 금액의 10%(최대 300만원)만큼 한도가 늘어난다 (연금저축 600만원·합계 900만원)
  const isaExtra = Math.min((n(pa.isaRetire) + n(pa.isaSavings)) * 0.1, 3_000_000);
  const retireBase = n(pa.sci) + n(pa.retire) + n(pa.isaRetire);
  const savingsBase = Math.min(n(pa.savings) + n(pa.isaSavings), 6_000_000 + isaExtra);
  const pensionBase = Math.min(retireBase + savingsBase, 9_000_000 + isaExtra);
  credits.pensionAccount = grant(pensionBase * (s <= 55_000_000 ? 0.15 : 0.12));
  if (!useSpecial) credits.standard = grant(130_000);
  const ot = inp.other ?? {};
  credits.union = grant(Math.min(n(ot.union), 1_000_000));
  credits.houseLoan = grant(n(ot.houseLoan) * 0.3);
  credits.foreign = grant(n(ot.foreignPay) > 0 ? Math.min(n(ot.foreignTax), (calculatedTax * n(ot.foreignPay)) / Math.max(1, s)) : 0);
  if (useSpecial) credits.rent = grant(s <= 80_000_000 ? Math.min(rent, 10_000_000) * rentRate : 0);
  const creditTotal = Object.values(credits).reduce((a, v) => a + v, 0);
  Object.assign(detail, credits);

  const determinedTax = Math.max(0, calculatedTax - reduction - creditTotal);
  const localTax = fl(determinedTax * 0.1);
  return {
    earnedDeduction, earnedIncome, personalDeduction, incomeDeductionTotal, taxableIncome, rate,
    calculatedTax, reduction, creditTotal, determinedTax, localTax,
    payable: determinedTax - n(inp.paid), detail,
  };
}

/** 의료비 세액공제 — 홈택스 대조로 확정한 계산 순서
 *  1) 실손보험금은 같은 사람 지출에서 일반 → 특례(65세 이상 등) → 미숙아·선천성이상아 → 난임 순으로 뺀다.
 *  2) 총급여 3% 문턱은 [그 밖의 부양가족 일반의료비] → [본인·65세 이상 등] → [난임시술비] 순으로 채운다.
 *  3) 그 밖의 부양가족은 문턱을 뺀 뒤 합계 700만원 한도. 15%(일반) · 난임 30% · 미숙아·선천성이상아 20%.
 *  4) 문턱이 다 채워지지 않고 남으면 미숙아·선천성이상아 공제는 받지 못한다. */
const INS_ORDER: string[] = ['general', 'special', 'premature', 'infertility'];
export function medicalCreditOf(rows: MedicalRow[] | undefined, salary: number): number {
  const r = rows ?? [];
  let family = 0, own = 0, inf = 0, pre = 0;
  r.forEach((x, i) => {
    let ins = n(x.insurance);
    const take = (v: number): number => { const t = Math.min(v, ins); ins -= t; return v - t; };
    const v: Record<string, number> = { general: n(x.general), special: i === 0 ? 0 : n(x.special), infertility: n(x.infertility), premature: n(x.premature) };
    for (const k of INS_ORDER) v[k] = take(v[k]);
    const { general, special, infertility, premature } = v;
    if (i === 0) own += general; else { family += general; own += special; }
    inf += infertility;
    pre += premature;
  });
  let floor = salary * 0.03;
  const eat = (v: number): number => { const t = Math.min(v, floor); floor -= t; return v - t; };
  family = Math.min(eat(family), 7_000_000);
  own = eat(own);
  pre = eat(pre);
  inf = eat(inf);
  return (family + own) * 0.15 + inf * 0.3 + pre * 0.2;
}

/** 교육비 세액공제 15% */
export function educationCreditOf(rows: EducationRow[] | undefined): number {
  let total = 0;
  for (const r of rows ?? []) {
    const fee = n(r.fee) + Math.min(n(r.uniform), 500_000) + Math.min(n(r.field), 300_000);
    if (r.kind === '소득자본인' || r.kind === '장애인') total += fee;
    else if (r.kind === '대학교 교육비') total += Math.min(fee, 9_000_000);
    else total += Math.min(fee, 3_000_000);
  }
  return total * 0.15;
}

/** 기부금 세액공제 — 홈택스 대조로 확정
 *  정치자금: 10만원 이하 100/110, 초과 15%(3천만원 초과분 25%).
 *  고향사랑: 처음 10만원 100/110, 다음 10만원 40%, 그 위 15%(특별재난지역 30%). 연 2천만원까지.
 *  특례·우리사주·일반(종교 외)·일반(종교): 합산 1천만원까지 15%, 초과분 30%.
 *  한도(소득금액 기준): 우리사주·일반(종교 외) 30%, 종교단체 10%(+종교 외 기부금과 20% 중 작은 값),
 *  종교 외+종교 합계가 30%를 넘을 수 없다. */
export function donationCreditOf(rows: DonationRow[] | undefined, income: number, part: 'other' | 'special'): number {
  const sum = (kind: DonationRow['kind']) => (rows ?? []).filter((r) => r.kind === kind).reduce((a, r) => a + n(r.amt), 0);
  const political = Math.min(sum('정치자금기부금'), Math.max(0, income));
  const homeGen = Math.min(sum('고향사랑기부금(일반)'), 20_000_000);
  const homeDis = Math.min(sum('고향사랑기부금(특별재난지역)'), 20_000_000);
  let credit = Math.min(political, 100_000) * (100 / 110) + Math.min(Math.max(0, political - 100_000), 29_900_000) * 0.15 + Math.max(0, political - 30_000_000) * 0.25;
  // 고향사랑기부금 두 종류를 합쳐 처음 10만원은 100/110, 다음 10만원은 40%. 이 두 구간은 일반 → 특별재난지역 순으로 채우고 나머지는 일반 15%·특별재난지역 30%
  let t1 = 100_000, t2 = 100_000;
  for (const [amt, top] of [[homeGen, 0.15], [homeDis, 0.3]] as const) {
    const a1 = Math.min(amt, t1); t1 -= a1;
    const a2 = Math.min(amt - a1, t2); t2 -= a2;
    credit += a1 * (100 / 110) + a2 * 0.4 + (amt - a1 - a2) * top;
  }

  // 한도 기준 소득금액은 정치자금 → 고향사랑 → 특례 → 우리사주 순으로 앞에서 인정된 금액을 차례로 뺀다 (홈택스 대조).
  // 일반기부금(소득세법 제59조의4 제4항): 종교단체 기부가 있으면 (소득금액×10% + 소득금액×20%와 종교단체 외 기부액 중 작은 값), 없으면 소득금액×30% — 종교·종교 외 합쳐서 적용
  const home = Math.min(homeGen + homeDis, Math.max(0, income - political));
  const special = Math.min(sum('특례기부금'), Math.max(0, income - political - home));
  const stockBase = Math.max(0, income - political - home - special);
  const stock = Math.min(sum('우리사주조합기부금'), stockBase * 0.3);
  const base = Math.max(0, stockBase - stock);
  const out = sum('일반기부금(종교단체 외)'), rel = sum('일반기부금(종교단체)');
  const generalLimit = rel > 0 ? base * 0.1 + Math.min(base * 0.2, out) : base * 0.3;
  const general = Math.min(out + rel, generalLimit);
  // 정치자금·고향사랑·우리사주는 표준세액공제와 함께 받는다. 특례·일반·종교는 특별세액공제(표준과 택일)
  const total = special + stock + general;
  const tiered = (t: number) => Math.min(t, 10_000_000) * 0.15 + Math.max(0, t - 10_000_000) * 0.3;
  const special2 = tiered(total) - tiered(total - stock);
  return part === 'other' ? credit + special2 : tiered(total - stock);
}

/** 신용카드 등 사용금액 소득공제 — 조세특례제한법 제126조의2(2025. 12. 23. 개정)와 홈택스 대조로 확정
 *  최저사용액(총급여 25%)은 신용카드 → 직불·현금영수증 → 문화체육 → 전통시장 → 대중교통 순으로 채우고,
 *  초과분에 신용 15%·직불/현금 30%·문화체육 30%·전통시장/대중교통 40%.
 *  기본한도: 총급여 7천만 이하 300만원, 초과 250만원. 자녀등(자녀·손자녀·입양자·위탁아동)이 있으면
 *  7천만 이하 1명 350만·2명 이상 400만, 초과 1명 275만·2명 이상 300만.
 *  한도를 넘는 공제액은 전통시장·대중교통 공제액(7천만 이하는 문화체육 포함)을 연 200만원(7천만 이하 300만원)까지 더 공제한다.
 *  총급여 7천만원 초과면 문화체육 사용분은 일반 신용/직불·현금으로 합친다. */
export function cardDeduction(c: NonNullable<YearEndInput['card']>, salary: number, kids = 0): number {
  const low = salary <= 70_000_000;
  let credit = n(c.credit), debit = n(c.debit) + n(c.cash);
  let cult = 0;
  if (low) cult = n(c.cultCredit) + n(c.cultDebit) + n(c.cultCash);
  else { credit += n(c.cultCredit); debit += n(c.cultDebit) + n(c.cultCash); }
  let market = n(c.market), transit = n(c.transit);
  let floor = salary * 0.25;
  const use = (amt: number): number => { const f = Math.min(floor, amt); floor -= f; return amt - f; };
  credit = use(credit); debit = use(debit); cult = use(cult); market = use(market); transit = use(transit);
  const cardPart = credit * 0.15 + debit * 0.3;
  const cultPart = cult * 0.3, marketPart = market * 0.4, transitPart = transit * 0.4;
  const total = cardPart + cultPart + marketPart + transitPart;
  const base = low ? (kids >= 2 ? 4_000_000 : kids === 1 ? 3_500_000 : 3_000_000) : (kids >= 2 ? 3_000_000 : kids === 1 ? 2_750_000 : 2_500_000);
  const extraCap = Math.min(marketPart + transitPart + (low ? cultPart : 0), low ? 3_000_000 : 2_000_000);
  return fl(Math.min(total, base) + Math.min(Math.max(0, total - base), extraCap));
}
