/* 연말정산 엔진 ↔ 홈택스 대조.
 * 사용: npx tsx scripts/calc/compare.ts <오라클결과.json ...>
 * 오라클 결과는 홈택스 "(모의계산) 연말정산 자동계산 2026년"에 같은 케이스를 넣어 받은 항목별 값이다.
 */
import fs from 'node:fs';
import { computeYearEnd, type YearEndInput } from '../../lib/year-end-tax/engine';

type Codes = Record<string, [number, number, number]>; // [사용금액, 대상금액, 공제금액]
interface Row { id: string; case: YearEndInput & { id: string }; codes?: Codes; error?: string }

// 비교 항목: 엔진 결과 이름 → 홈택스 코드(공제금액 칸)
const MAP: [keyof ReturnType<typeof computeYearEnd>, string, string][] = [
  ['earnedDeduction', '8901', '근로소득공제'],
  ['earnedIncome', '8902', '근로소득금액'],
  ['personalDeduction', '8917', '인적공제'],
  ['incomeDeductionTotal', '8925', '소득공제 합계'],
  ['taxableIncome', '8903', '과세표준'],
  ['calculatedTax', '8990', '산출세액'],
  ['creditTotal', '8923', '세액공제 합계'],
  ['determinedTax', '8992', '결정세액'],
  ['localTax', '8998', '지방소득세'],
];

// 케이스 입력값이 홈택스 응답에 그대로 찍혔는지(수집기가 입력을 놓친 경우 걸러낸다)
function inputEcho(r: Row): string | null {
  const c = r.case, codes = r.codes!;
  const chk: [number | undefined, string, string][] = [
    [c.insurance?.health, '8301', '건강보험료'], [c.insurance?.employ, '8305', '고용보험료'], [c.pension?.np, '8201', '국민연금'],
    [c.card?.credit, '8431', '신용카드'], [c.card?.debit, '8432', '체크카드'], [c.card?.cash, '8433', '현금영수증'],
    [c.card?.market, '8434', '전통시장'], [c.card?.transit, '8435', '대중교통'], [c.card?.cultCredit, '8461', '문화체육 신용'],
    [c.personalPension?.amt, '8401', '개인연금저축'], [c.smallBiz?.amt, '8402', '소기업공제'], [c.cover?.general, '8710', '보장성보험'],
  ];
  for (const [v, code, label] of chk) {
    const got = codes[code]?.[0] ?? 0;
    if ((v ?? 0) !== got) return label + ' 입력 ' + (v ?? 0) + ' ≠ 화면 ' + got;
  }
  return null;
}
const skipped: string[] = [];
// 폴더를 주면 그 안의 .json 을 모두 읽는다 (윈도 셸은 *.json 을 풀어 주지 않는다)
const files = process.argv.slice(2).flatMap((a) => (fs.existsSync(a) && fs.statSync(a).isDirectory() ? fs.readdirSync(a).filter((x) => x.endsWith('.json')).map((x) => a.replace(/[\/]+$/, '') + '/' + x) : [a]));
let total = 0, bad = 0;
const perKey: Record<string, number> = {};
const lines: string[] = [];
for (const f of files) {
  const rows: Row[] = JSON.parse(fs.readFileSync(f, 'utf8'));
  for (const r of rows) {
    if (r.error || !r.codes) continue;
    if ((r as any).bsc && Number((r as any).bsc.totaSnwAmt) !== r.case.salary) continue; // 입력이 어긋난 수집 결과는 제외
    const inconsistent = inputEcho(r);
    if (inconsistent) { skipped.push(r.id + ' ' + inconsistent); continue; }
    total++;
    const out = computeYearEnd(r.case);
    const diffs: string[] = [];
    for (const [key, code, label] of MAP) {
      let want = r.codes[code]?.[2] ?? 0;
      if (key === 'determinedTax') want = (r.codes['8992']?.[2] ?? 0) + (r.codes['8991']?.[0] ?? 0); // 8992 는 결정세액−기납부
      if (key === 'personalDeduction') want += r.codes['8918']?.[2] ?? 0; // 8917 기본공제 + 8918 추가공제
      const got = out[key] as number;
      if (Math.abs(want - got) > 0) { diffs.push(`${label}(${code}) 홈택스 ${want} ≠ 엔진 ${got}`); perKey[label] = (perKey[label] || 0) + 1; }
    }
    // 소득공제 항목별(홈택스 8919 연금보험료·8920 특별공제·8921 그 밖) 어디서 어긋나는지
    const fam: [string, string, string][] = [['dPension', '8919', '연금보험료'], ['dSpecial', '8920', '특별소득공제'], ['dOther', '8921', '그 밖의 소득공제']];
    for (const [k, code, label] of fam) {
      const want = r.codes[code]?.[2] ?? 0, got = out.detail[k] ?? 0;
      if (want !== got) { diffs.push(`[${label}(${code}) 홈택스 ${want} ≠ 엔진 ${got}]`); perKey[label] = (perKey[label] || 0) + 1; }
    }
    if (diffs.length) { bad++; lines.push(`✗ ${r.id}: ${diffs.join(' / ')}`); }
  }
}
console.log(lines.slice(0, Number(process.env.SHOW || 40)).join('\n'));
console.log(`\n대조 ${total}건 중 불일치 ${bad}건`, JSON.stringify(perKey));
process.exit(bad ? 1 : 0);
