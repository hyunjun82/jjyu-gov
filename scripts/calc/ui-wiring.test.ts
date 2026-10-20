/* 화면(/calc/year-end-tax/) 입력칸이 엔진 입력에 제대로 연결됐는지 시험한다.
 * 모든 입력칸을 한 번씩 채운 시나리오를 화면에 넣고, 같은 입력을 엔진에 직접 넣은 결과와 비교한다.
 * 사용: (개발 서버가 떠 있어야 한다)  npx tsx scripts/calc/ui-wiring.test.ts [주소]
 */
import { chromium, type Page } from 'playwright';
import { computeYearEnd, type YearEndInput } from '../../lib/year-end-tax/engine';

const URL = process.argv[2] || 'http://localhost:3000/calc/year-end-tax/';
const won = (n: number) => n.toLocaleString('ko-KR');

// 화면에 넣을 시나리오 (라벨 → 값) 와, 엔진에 직접 넣을 같은 입력
type Step =
  | { kind: 'money'; label: string; value: number; nth?: number }
  | { kind: 'count'; label: string; value: number }
  | { kind: 'toggle'; label: string; yes: boolean }
  | { kind: 'add'; section: string; button: string }
  | { kind: 'rowMoney'; section: string; row: number; label: string; value: number }
  | { kind: 'rowSelect'; section: string; row: number; value: string };

const steps: Step[] = [
  { kind: 'money', label: '총급여 (비과세 제외 연 급여)', value: 60_000_000 },
  { kind: 'money', label: '기납부세액 (이미 낸 소득세)', value: 2_000_000 },
  { kind: 'toggle', label: '배우자 공제 대상인가요?', yes: true },
  { kind: 'count', label: '직계존속 (부모·조부모)', value: 1 },
  { kind: 'count', label: '자녀·손자녀·입양자', value: 2 },
  { kind: 'count', label: '그 밖의 직계비속·형제자매', value: 1 },
  { kind: 'count', label: '만 70세 이상 (경로우대)', value: 1 },
  { kind: 'count', label: '장애인', value: 1 },
  { kind: 'toggle', label: '2026년에 혼인신고를 했나요?', yes: true },
  { kind: 'toggle', label: '2026년에 첫째를 출산·입양했나요?', yes: true },
  { kind: 'money', label: '국민연금 보험료', value: 2_000_000 },
  { kind: 'money', label: '공무원·군인·사학·별정우체국 연금', value: 300_000 },
  { kind: 'money', label: '건강보험료·노인장기요양보험료', value: 1_500_000 },
  { kind: 'money', label: '고용보험료', value: 300_000 },
  { kind: 'money', label: '주택임차차입금 원리금 상환액 (대출기관)', value: 3_000_000 },
  { kind: 'money', label: '15년 이상 · 그 밖의 대출 (800만원 한도)', value: 2_000_000 },
  { kind: 'money', label: '청약저축 납입액', value: 1_000_000 },
  { kind: 'money', label: '주택청약종합저축 납입액', value: 1_000_000 },
  { kind: 'money', label: '근로자주택마련저축 납입액', value: 500_000 },
  { kind: 'money', label: '신용카드', value: 10_000_000 },
  { kind: 'money', label: '체크카드·직불카드 등', value: 5_000_000 },
  { kind: 'money', label: '현금영수증', value: 3_000_000 },
  { kind: 'money', label: '전통시장', value: 2_000_000 },
  { kind: 'money', label: '대중교통', value: 2_000_000 },
  { kind: 'money', label: '문화체육 — 신용카드', value: 500_000 },
  { kind: 'money', label: '문화체육 — 체크카드·직불카드 등', value: 400_000 },
  { kind: 'money', label: '문화체육 — 현금영수증', value: 300_000 },
  { kind: 'money', label: '연금저축 납입액', value: 4_000_000 },
  { kind: 'money', label: '퇴직연금(IRP) 납입액', value: 3_000_000 },
  { kind: 'money', label: '과학기술인공제회 퇴직연금 납입액', value: 500_000 },
  { kind: 'money', label: 'ISA 만기금액을 연금저축으로 옮긴 금액', value: 1_000_000 },
  { kind: 'money', label: 'ISA 만기금액을 퇴직연금으로 옮긴 금액', value: 500_000 },
  { kind: 'money', label: '보장성보험료', value: 1_000_000 },
  { kind: 'money', label: '장애인전용 보장성보험료', value: 500_000 },
  { kind: 'money', label: '개인연금저축 (2000년 이전 가입)', value: 1_000_000 },
  { kind: 'add', section: '⑦ 의료비', button: '+ 의료비 입력하기' },
  { kind: 'rowMoney', section: '⑦ 의료비', row: 0, label: '의료비', value: 2_000_000 },
  { kind: 'rowMoney', section: '⑦ 의료비', row: 1, label: '일반 의료비', value: 3_000_000 },
  { kind: 'rowMoney', section: '⑦ 의료비', row: 1, label: '65세 이상·6세 이하·장애인·건강보험 산정특례자 의료비', value: 1_000_000 },
  { kind: 'rowMoney', section: '⑦ 의료비', row: 1, label: '난임시술비', value: 500_000 },
  { kind: 'rowMoney', section: '⑦ 의료비', row: 1, label: '미숙아·선천성이상아 의료비', value: 300_000 },
  { kind: 'rowMoney', section: '⑦ 의료비', row: 1, label: '실손의료보험금 수령액', value: 200_000 },
  { kind: 'add', section: '⑧ 교육비', button: '+ 교육비 추가' },
  { kind: 'rowSelect', section: '⑧ 교육비', row: 0, value: '대학교 교육비' },
  { kind: 'rowMoney', section: '⑧ 교육비', row: 0, label: '공납금(수업료·입학금 등)', value: 5_000_000 },
  { kind: 'add', section: '⑧ 교육비', button: '+ 교육비 추가' },
  { kind: 'rowSelect', section: '⑧ 교육비', row: 1, value: '초중고 교육비' },
  { kind: 'rowMoney', section: '⑧ 교육비', row: 1, label: '공납금(수업료·입학금 등)', value: 2_000_000 },
  { kind: 'rowMoney', section: '⑧ 교육비', row: 1, label: '교복구입비', value: 300_000 },
  { kind: 'rowMoney', section: '⑧ 교육비', row: 1, label: '체험학습비', value: 100_000 },
  { kind: 'add', section: '⑨ 기부금', button: '+ 기부금 추가' },
  { kind: 'rowSelect', section: '⑨ 기부금', row: 0, value: '정치자금기부금' },
  { kind: 'rowMoney', section: '⑨ 기부금', row: 0, label: '2026년 기부금액', value: 500_000 },
  { kind: 'add', section: '⑨ 기부금', button: '+ 기부금 추가' },
  { kind: 'rowMoney', section: '⑨ 기부금', row: 1, label: '2026년 기부금액', value: 1_000_000 },
  { kind: 'money', label: '월세 지급액 (연간)', value: 3_000_000 },
  { kind: 'money', label: '청년(취업 당시 15~34세) 감면 대상 급여', value: 10_000_000 },
];

// 위 화면 입력과 같은 뜻의 엔진 입력
const engineInput: YearEndInput = {
  salary: 60_000_000,
  paid: 2_000_000,
  human: { spouse: 1, parents: 1, children: 2, otherDesc: 1, siblings: 0, senior: 1, disabled: 1 },
  marriage: 1,
  child: { first: 1 },
  pension: { np: 2_000_000, gov: 300_000 },
  insurance: { health: 1_500_000, employ: 300_000 },
  housing: { '8311': 3_000_000, '8328': 2_000_000 },
  subscription: { saving: 1_000_000, comp: 1_000_000, worker: 500_000 },
  card: { credit: 10_000_000, debit: 5_000_000, cash: 3_000_000, market: 2_000_000, transit: 2_000_000, cultCredit: 500_000, cultDebit: 400_000, cultCash: 300_000 },
  pensionAcc: { savings: 4_000_000, retire: 3_000_000, sci: 500_000, isaSavings: 1_000_000, isaRetire: 500_000 },
  cover: { general: 1_000_000, disabled: 500_000 },
  personalPension: { amt: 1_000_000 },
  medical: [{ general: 2_000_000 }, { general: 3_000_000, special: 1_000_000, infertility: 500_000, premature: 300_000, insurance: 200_000 }],
  education: [{ kind: '대학교 교육비', fee: 5_000_000 }, { kind: '초중고 교육비', fee: 2_000_000, uniform: 300_000, field: 100_000 }],
  donation: [{ kind: '정치자금기부금', amt: 500_000 }, { kind: '일반기부금(종교단체 외)', amt: 1_000_000 }],
  other: { rent: 3_000_000 },
  reduction: { ibx_8608: 10_000_000 },
};

async function run(page: Page, salary: number) {
  const fieldByLabel = (label: string, nth = 0) =>
    page.locator('.yec-field', { has: page.locator('.yec-label', { hasText: new RegExp('^' + label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$') }) }).nth(nth);
  const section = (title: string) => page.locator('details.yec-sec', { has: page.locator('summary b', { hasText: title }) });
  for (const st of steps.map((x) => (x.kind === 'money' && x.label.startsWith('총급여') ? { ...x, value: salary } : x))) {
    if (st.kind === 'money' || st.kind === 'count') {
      const f = fieldByLabel(st.label, st.kind === 'money' ? st.nth ?? 0 : 0);
      const details = f.locator('xpath=ancestor::details');
      await details.evaluate((d) => ((d as HTMLDetailsElement).open = true));
      if (await f.locator('input').isDisabled()) continue; // 총급여 조건 때문에 화면이 막은 칸(엔진도 같은 조건으로 0 처리)
      await f.locator('input').fill(String(st.value));
    } else if (st.kind === 'toggle') {
      const f = fieldByLabel(st.label);
      await f.locator('xpath=ancestor::details').evaluate((d) => ((d as HTMLDetailsElement).open = true));
      await f.locator('button', { hasText: st.yes ? '예' : '아니오' }).click();
    } else if (st.kind === 'add') {
      const sec = section(st.section);
      await sec.evaluate((d) => ((d as HTMLDetailsElement).open = true));
      await sec.locator('button.yec-add', { hasText: st.button }).click();
    } else if (st.kind === 'rowMoney') {
      const row = section(st.section).locator('.yec-row').nth(st.row);
      await row.locator('.yec-field', { has: page.locator('.yec-label', { hasText: new RegExp('^' + st.label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$') }) }).locator('input').fill(String(st.value));
    } else if (st.kind === 'rowSelect') {
      await section(st.section).locator('.yec-row').nth(st.row).locator('select').selectOption({ label: st.value });
    }
  }
  await page.click('.yec-calc');
  await page.waitForSelector('.yec-result');
  const rows = await page.locator('.yec-table tr').evaluateAll((trs) =>
    trs.map((tr) => [(tr.querySelector('th')?.childNodes[0]?.textContent || '').trim(), (tr.querySelector('td')?.textContent || '').trim()]),
  );
  const toNum = (t: string) => (t.startsWith('−') ? -1 : 1) * Number(t.replace(/[^0-9]/g, ''));
  const table: Record<string, number> = {};
  for (const [k, v] of rows) table[k] = toNum(v);
  const head = (await page.locator('.yec-result-line').innerText()).split(/\s+/).join(' ');
  return { table, head };
}

(async () => {
  const b = await chromium.launch({ headless: true });
  let bad = 0;
  for (const salary of [60_000_000, 200_000_000]) {
    const p = await (await b.newContext({ viewport: { width: 420, height: 1000 } })).newPage();
    p.setDefaultTimeout(30_000);
    await p.goto(URL, { waitUntil: 'networkidle', timeout: 120_000 });
    const { table, head } = await run(p, salary);
    await p.close();
    const exp = computeYearEnd({ ...engineInput, salary });
    const checks: [string, number][] = [
      ['근로소득금액', exp.earnedIncome],
      ['소득공제 합계 (근로소득공제 제외)', -(exp.incomeDeductionTotal - exp.earnedDeduction)],
      ['과세표준', exp.taxableIncome],
      ['산출세액', exp.calculatedTax],
      ['세액감면', -exp.reduction],
      ['세액공제 합계', -exp.creditTotal],
      ['결정세액', exp.determinedTax],
    ];
    console.log('── 총급여 ' + won(salary) + '원');
    for (const [k, v] of checks) {
      if (k === '세액감면' && v === 0) continue; // 감면이 0이면 행이 없다
      const got = table[k];
      const ok = got === v;
      if (!ok) bad++;
      console.log(`${ok ? '✓' : '✗'} ${k}: 화면 ${won(got)} / 엔진 ${won(v)}`);
    }
    const shownPay = Number((head.match(/([0-9,]+)원/) || [])[1]?.replace(/,/g, ''));
    const okPay = shownPay === Math.abs(exp.payable);
    if (!okPay) bad++;
    console.log(`${okPay ? '✓' : '✗'} 예상 ${exp.payable < 0 ? '환급' : '추가 납부'}액: 화면 ${won(shownPay)} / 엔진 ${won(Math.abs(exp.payable))}`);
  }
  await b.close();
  console.log(bad ? `연결 불일치 ${bad}건` : '화면 입력이 엔진 입력과 모두 연결됨');
  process.exit(bad ? 1 : 0);
})();
