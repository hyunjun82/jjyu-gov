'use client';

/* 연말정산 모의계산기 — 2026년 귀속(2027년 2월 정산).
 *
 * 계산 로직은 lib/year-end-tax/engine.ts. 홈택스 "(모의계산) 연말정산 자동계산 2026년"과
 * 같은 입력으로 무작위 케이스를 넣어 단계별로 대조했다 (scripts/calc/compare.ts, 결과는 scripts/calc/data).
 * 안내 문구의 숫자는 그 대조에서 확인한 것만 쓴다. 결과는 참고용 — 최종 금액은 회사 정산과 국세청 확정이 기준이다.
 */
import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  computeYearEnd,
  type DonationRow,
  type EducationRow,
  type MedicalRow,
  type YearEndInput,
} from '@/lib/year-end-tax/engine';

const F = (n: number) => Math.round(n).toLocaleString('ko-KR');
const num = (s: string) => Number(s.replace(/[^0-9]/g, '')) || 0;

function Money({ label, value, onChange, hint, disabled }: { label: string; value: number | undefined; onChange: (v: number) => void; hint?: string; disabled?: boolean }) {
  return (
    <label className={`yec-field${disabled ? ' off' : ''}`}>
      <span className="yec-label">{label}</span>
      <span className="yec-input-wrap">
        <input
          inputMode="numeric"
          value={value ? F(value) : ''}
          onChange={(e) => onChange(num(e.target.value))}
          placeholder="0"
          disabled={disabled}
        />
        <b>원</b>
      </span>
      {hint ? <span className="yec-hint">{hint}</span> : null}
    </label>
  );
}
function Count({ label, value, onChange, hint }: { label: string; value: number | undefined; onChange: (v: number) => void; hint?: string }) {
  return (
    <label className="yec-field">
      <span className="yec-label">{label}</span>
      <span className="yec-input-wrap">
        <input inputMode="numeric" value={value ? String(value) : ''} onChange={(e) => onChange(Math.min(20, num(e.target.value)))} placeholder="0" />
        <b>명</b>
      </span>
      {hint ? <span className="yec-hint">{hint}</span> : null}
    </label>
  );
}
function Toggle({ label, value, onChange, hint, disabled }: { label: string; value: boolean; onChange: (v: boolean) => void; hint?: string; disabled?: boolean }) {
  return (
    <div className={`yec-field${disabled ? ' off' : ''}`}>
      <span className="yec-label">{label}</span>
      <span className="yec-seg">
        <button type="button" className={!value ? 'on' : ''} disabled={disabled} onClick={() => onChange(false)}>아니오</button>
        <button type="button" className={value ? 'on' : ''} disabled={disabled} onClick={() => onChange(true)}>예</button>
      </span>
      {hint ? <span className="yec-hint">{hint}</span> : null}
    </div>
  );
}
function Section({ title, sub, open, children }: { title: string; sub?: string; open?: boolean; children: React.ReactNode }) {
  return (
    <details className="yec-sec" open={open}>
      <summary>
        <b>{title}</b>
        {sub ? <span>{sub}</span> : null}
      </summary>
      <div className="yec-sec-body">{children}</div>
    </details>
  );
}

const EDU_KINDS: EducationRow['kind'][] = ['소득자본인', '미취학아동 교육비', '초중고 교육비', '대학교 교육비', '장애인'];
const DON_KINDS: DonationRow['kind'][] = [
  '정치자금기부금', '고향사랑기부금(일반)', '고향사랑기부금(특별재난지역)', '특례기부금', '우리사주조합기부금', '일반기부금(종교단체 외)', '일반기부금(종교단체)',
];
/* 홈택스 화면의 항목 이름 그대로 (id = 홈택스 항목 코드) */
const LONG_LOAN_OLD: [string, string][] = [
  ['8321', '15년 미만 (600만원 한도)'],
  ['8322', '15년~29년 (1,000만원 한도)'],
  ['8323', '30년 이상 (1,500만원 한도)'],
  ['8324', '15년 이상 · 고정금리이고 비거치상환 (2,000만원 한도)'],
  ['8325', '15년 이상 · 고정금리 또는 비거치상환 (1,800만원 한도)'],
];
const LONG_LOAN_NEW: [string, string][] = [
  ['8326', '15년 이상 · 고정금리이고 비거치상환 (2,000만원 한도)'],
  ['8327', '15년 이상 · 고정금리 또는 비거치상환 (1,800만원 한도)'],
  ['8328', '15년 이상 · 그 밖의 대출 (800만원 한도)'],
  ['8329', '10년~15년 · 고정금리 또는 비거치상환 (600만원 한도)'],
];

export default function CalcClient() {
  const [inp, setInp] = useState<YearEndInput>({ salary: 0 });
  const [done, setDone] = useState(false);
  const set = (patch: Partial<YearEndInput>) => { setInp((p) => ({ ...p, ...patch })); setDone(false); };
  const sub = <K extends keyof YearEndInput>(k: K, patch: Partial<NonNullable<YearEndInput[K]>>) =>
    set({ [k]: { ...((inp[k] as object) ?? {}), ...patch } } as Partial<YearEndInput>);

  const h = inp.human ?? {};
  const medical = inp.medical ?? [];
  const education = inp.education ?? [];
  const donation = inp.donation ?? [];
  const setMedical = (rows: MedicalRow[]) => set({ medical: rows });
  const setEducation = (rows: EducationRow[]) => set({ education: rows });
  const setDonation = (rows: DonationRow[]) => set({ donation: rows });
  const patchRow = <T,>(rows: T[], i: number, patch: Partial<T>): T[] => rows.map((r, j) => (j === i ? { ...r, ...patch } : r));

  const low70 = inp.salary > 0 && inp.salary <= 70_000_000;
  const result = useMemo(() => (done && inp.salary > 0 ? computeYearEnd(inp) : null), [done, inp]);
  const refund = result ? result.payable < 0 : false;
  const standardUsed = result ? (result.detail.standard ?? 0) > 0 : false;

  const stepRows: [string, number, string?][] = result
    ? [
        ['총급여', inp.salary],
        ['근로소득공제', -result.earnedDeduction],
        ['근로소득금액', result.earnedIncome],
        ['소득공제 합계 (근로소득공제 제외)', -(result.incomeDeductionTotal - result.earnedDeduction), `인적공제 ${F(result.personalDeduction)}원 포함`],
        ['과세표준', result.taxableIncome, `세율 ${Math.round(result.rate * 100)}%`],
        ['산출세액', result.calculatedTax],
        ...(result.reduction > 0 ? ([['세액감면', -result.reduction]] as [string, number][]) : []),
        ['세액공제 합계', -result.creditTotal, standardUsed ? '표준세액공제 13만원 적용' : '특별공제 적용'],
        ['결정세액', result.determinedTax, `지방소득세 ${F(result.localTax)}원 별도`],
        ['기납부세액', -(inp.paid ?? 0)],
      ]
    : [];

  return (
    <div className="yec">
      <section className="yec-form">
        <Section title="① 급여" sub="총급여·기납부세액" open>
          <Money label="총급여 (비과세 제외 연 급여)" value={inp.salary || undefined} onChange={(v) => set({ salary: v })} hint="원천징수영수증의 '총급여'. 월급×12가 아니라 상여까지 합친 연 금액입니다" />
          <Money label="기납부세액 (이미 낸 소득세)" value={inp.paid} onChange={(v) => set({ paid: v })} hint="1~12월 급여에서 떼인 소득세 합계. 지방소득세는 빼고 입력합니다" />
        </Section>

        <Section title="② 가족·인적공제" sub="본인은 자동 포함">
          <Toggle label="배우자 공제 대상인가요?" value={!!h.spouse} onChange={(v) => sub('human', { spouse: v ? 1 : 0, singleParent: v ? 0 : h.singleParent })} hint="연간 소득금액 100만원(근로소득만 있으면 총급여 500만원) 이하" />
          <Count label="직계존속 (부모·조부모)" value={h.parents} onChange={(v) => sub('human', { parents: v })} hint="만 60세 이상" />
          <Count label="자녀·손자녀·입양자" value={h.children} onChange={(v) => sub('human', { children: v })} hint="만 20세 이하. 만 8세 이상 자녀는 자녀세액공제도 함께 계산합니다" />
          <Count label="그 밖의 직계비속·형제자매" value={(h.otherDesc ?? 0) + (h.siblings ?? 0) || undefined} onChange={(v) => sub('human', { otherDesc: v, siblings: 0 })} hint="만 20세 이하 또는 만 60세 이상" />
          <Count label="만 70세 이상 (경로우대)" value={h.senior} onChange={(v) => sub('human', { senior: v })} />
          <Count label="장애인" value={h.disabled} onChange={(v) => sub('human', { disabled: v })} />
          <Toggle label="부녀자 공제" value={!!h.woman} onChange={(v) => sub('human', { woman: v ? 1 : 0 })} hint="근로소득금액 3천만원 이하이고, 배우자가 있거나 부양가족이 있는 세대주 여성" />
          <Toggle label="한부모 공제" value={!!h.singleParent} disabled={!!h.spouse} onChange={(v) => sub('human', { singleParent: v ? 1 : 0 })} hint="배우자 없이 기본공제 대상 자녀를 키우는 경우. 배우자공제와 함께 받을 수 없고, 부녀자공제와 겹치면 한부모공제가 적용됩니다" />
          <Toggle label="2026년에 혼인신고를 했나요?" value={!!inp.marriage} onChange={(v) => set({ marriage: v ? 1 : 0 })} hint="혼인세액공제 50만원" />
          <Toggle label="2026년에 첫째를 출산·입양했나요?" value={!!inp.child?.first} onChange={(v) => sub('child', { first: v ? 1 : 0 })} />
          <Toggle label="2026년에 둘째를 출산·입양했나요?" value={!!inp.child?.second} onChange={(v) => sub('child', { second: v ? 1 : 0 })} />
          <Count label="2026년에 셋째 이상 출산·입양" value={inp.child?.third} onChange={(v) => sub('child', { third: v })} />
        </Section>

        <Section title="③ 4대보험·연금" sub="전액 소득공제">
          <Money label="국민연금 보험료" value={inp.pension?.np} onChange={(v) => sub('pension', { np: v })} />
          <Money label="공무원·군인·사학·별정우체국 연금" value={inp.pension?.gov} onChange={(v) => sub('pension', { gov: v })} />
          <Money label="건강보험료·노인장기요양보험료" value={inp.insurance?.health} onChange={(v) => sub('insurance', { health: v })} />
          <Money label="고용보험료" value={inp.insurance?.employ} onChange={(v) => sub('insurance', { employ: v })} />
        </Section>

        <Section title="④ 주택" sub="전세대출·주택담보대출·청약저축">
          <Money label="주택임차차입금 원리금 상환액 (대출기관)" value={inp.housing?.['8311']} onChange={(v) => sub('housing', { '8311': v })} hint="무주택 세대주. 상환액의 40% 공제" />
          <Money label="주택임차차입금 원리금 상환액 (개인 등 거주자)" value={inp.housing?.['8312']} onChange={(v) => sub('housing', { '8312': v })} hint="총급여 5천만원 이하만" disabled={inp.salary > 50_000_000} />
          <p className="yec-group">장기주택저당차입금 이자 상환액 — 2011년 이전 차입분</p>
          {LONG_LOAN_OLD.map(([code, label]) => (
            <Money key={code} label={label} value={inp.housing?.[code]} onChange={(v) => sub('housing', { [code]: v })} />
          ))}
          <p className="yec-group">장기주택저당차입금 이자 상환액 — 2012년 이후 차입분</p>
          {LONG_LOAN_NEW.map(([code, label]) => (
            <Money key={code} label={label} value={inp.housing?.[code]} onChange={(v) => sub('housing', { [code]: v })} />
          ))}
          <Money
            label="청약저축 납입액"
            value={inp.subscription?.saving}
            onChange={(v) => sub('subscription', { saving: v })}
            hint="납입액의 40% (연 300만원 납입 한도). 총급여 7천만원 이하 무주택 세대주만"
            disabled={!!inp.salary && !low70}
          />
          <Money
            label="주택청약종합저축 납입액"
            value={inp.subscription?.comp}
            onChange={(v) => sub('subscription', { comp: v })}
            hint="납입액의 40% (연 300만원 납입 한도). 총급여 7천만원을 넘으면 공제받을 수 없습니다"
            disabled={!!inp.salary && !low70}
          />
          <Money
            label="근로자주택마련저축 납입액"
            value={inp.subscription?.worker}
            onChange={(v) => sub('subscription', { worker: v })}
            hint="납입액의 40% (연 180만원 납입 한도)"
            disabled={!!inp.salary && !low70}
          />
        </Section>

        <Section title="⑤ 신용카드 등 사용액" sub="총급여 25% 초과분">
          <Money label="신용카드" value={inp.card?.credit} onChange={(v) => sub('card', { credit: v })} hint="공제율 15%" />
          <Money label="체크카드·직불카드 등" value={inp.card?.debit} onChange={(v) => sub('card', { debit: v })} hint="공제율 30%" />
          <Money label="현금영수증" value={inp.card?.cash} onChange={(v) => sub('card', { cash: v })} hint="공제율 30%" />
          <Money label="전통시장" value={inp.card?.market} onChange={(v) => sub('card', { market: v })} hint="신용·체크·현금영수증 합산. 공제율 40%" />
          <Money label="대중교통" value={inp.card?.transit} onChange={(v) => sub('card', { transit: v })} hint="신용·체크·현금영수증 합산. 공제율 40%" />
          <p className="yec-group">문화체육 (도서·공연·박물관·미술관·영화관람·체육시설)</p>
          <Money label="문화체육 — 신용카드" value={inp.card?.cultCredit} onChange={(v) => sub('card', { cultCredit: v })} hint="총급여 7천만원 이하는 공제율 30%. 7천만원을 넘으면 일반 사용분과 같이 계산합니다" />
          <Money label="문화체육 — 체크카드·직불카드 등" value={inp.card?.cultDebit} onChange={(v) => sub('card', { cultDebit: v })} />
          <Money label="문화체육 — 현금영수증" value={inp.card?.cultCash} onChange={(v) => sub('card', { cultCash: v })} />
        </Section>

        <Section title="⑥ 연금·보험·저축 세액공제" sub="IRP·연금저축·보장성보험">
          <Money label="연금저축 납입액" value={inp.pensionAcc?.savings} onChange={(v) => sub('pensionAcc', { savings: v })} hint="연 600만원까지" />
          <Money label="퇴직연금(IRP) 납입액" value={inp.pensionAcc?.retire} onChange={(v) => sub('pensionAcc', { retire: v })} hint="연금저축과 합쳐 연 900만원까지" />
          <Money label="과학기술인공제회 퇴직연금 납입액" value={inp.pensionAcc?.sci} onChange={(v) => sub('pensionAcc', { sci: v })} />
          <Money label="ISA 만기금액을 연금저축으로 옮긴 금액" value={inp.pensionAcc?.isaSavings} onChange={(v) => sub('pensionAcc', { isaSavings: v })} hint="옮긴 금액의 10%(최대 300만원)만큼 공제 한도가 늘어납니다" />
          <Money label="ISA 만기금액을 퇴직연금으로 옮긴 금액" value={inp.pensionAcc?.isaRetire} onChange={(v) => sub('pensionAcc', { isaRetire: v })} />
          <Money label="보장성보험료" value={inp.cover?.general} onChange={(v) => sub('cover', { general: v })} hint="연 100만원까지 12%" />
          <Money label="장애인전용 보장성보험료" value={inp.cover?.disabled} onChange={(v) => sub('cover', { disabled: v })} hint="연 100만원까지 15%" />
          <Money label="개인연금저축 (2000년 이전 가입)" value={inp.personalPension?.amt} onChange={(v) => sub('personalPension', { amt: v })} hint="납입액 연 180만원까지의 40%" />
        </Section>

        <Section title="⑦ 의료비" sub="총급여 3% 초과분">
          {medical.map((row, i) => (
            <div className="yec-row" key={i}>
              <p className="yec-row-title">{i === 0 ? '본인' : `가족 ${i}`}</p>
              <Money label={i === 0 ? '의료비' : '일반 의료비'} value={row.general} onChange={(v) => setMedical(patchRow(medical, i, { general: v }))} hint={i === 0 ? '본인 의료비는 한도 없이 공제됩니다' : '그 밖의 부양가족 의료비는 가족 전체 합계 연 700만원까지'} />
              {i > 0 ? <Money label="65세 이상·6세 이하·장애인·건강보험 산정특례자 의료비" value={row.special} onChange={(v) => setMedical(patchRow(medical, i, { special: v }))} hint="한도 없이 공제됩니다" /> : null}
              <Money label="난임시술비" value={row.infertility} onChange={(v) => setMedical(patchRow(medical, i, { infertility: v }))} hint="공제율 30%" />
              <Money label="미숙아·선천성이상아 의료비" value={row.premature} onChange={(v) => setMedical(patchRow(medical, i, { premature: v }))} hint="공제율 20%" />
              <Money label="실손의료보험금 수령액" value={row.insurance} onChange={(v) => setMedical(patchRow(medical, i, { insurance: v }))} hint="보험사에서 돌려받은 금액은 의료비에서 뺍니다" />
              {i > 0 ? <button type="button" className="yec-mini" onClick={() => setMedical(medical.filter((_, j) => j !== i))}>이 사람 지우기</button> : null}
            </div>
          ))}
          <button type="button" className="yec-add" onClick={() => setMedical(medical.length ? [...medical, {}] : [{}, {}])}>
            {medical.length ? '+ 가족 추가' : '+ 의료비 입력하기'}
          </button>
        </Section>

        <Section title="⑧ 교육비" sub="공제 대상자별로">
          {education.map((row, i) => (
            <div className="yec-row" key={i}>
              <label className="yec-field">
                <span className="yec-label">누구의 교육비인가요?</span>
                <select value={row.kind} onChange={(e) => setEducation(patchRow(education, i, { kind: e.target.value as EducationRow['kind'] }))}>
                  {EDU_KINDS.map((k) => <option key={k} value={k}>{k}</option>)}
                </select>
              </label>
              <Money
                label="공납금(수업료·입학금 등)"
                value={row.fee}
                onChange={(v) => setEducation(patchRow(education, i, { fee: v }))}
                hint={row.kind === '대학교 교육비' ? '한 사람당 연 900만원까지' : row.kind === '미취학아동 교육비' || row.kind === '초중고 교육비' ? '한 사람당 연 300만원까지' : '한도 없이 공제됩니다'}
              />
              {row.kind === '초중고 교육비' ? <Money label="교복구입비" value={row.uniform} onChange={(v) => setEducation(patchRow(education, i, { uniform: v }))} hint="학생 1명당 50만원까지" /> : null}
              {row.kind === '초중고 교육비' || row.kind === '미취학아동 교육비' ? <Money label="체험학습비" value={row.field} onChange={(v) => setEducation(patchRow(education, i, { field: v }))} hint="학생 1명당 30만원까지" /> : null}
              <button type="button" className="yec-mini" onClick={() => setEducation(education.filter((_, j) => j !== i))}>지우기</button>
            </div>
          ))}
          <button type="button" className="yec-add" onClick={() => setEducation([...education, { kind: '소득자본인' }])}>+ 교육비 추가</button>
        </Section>

        <Section title="⑨ 기부금" sub="고향사랑·정치자금 포함">
          {donation.map((row, i) => (
            <div className="yec-row" key={i}>
              <label className="yec-field">
                <span className="yec-label">기부금 종류</span>
                <select value={row.kind} onChange={(e) => setDonation(patchRow(donation, i, { kind: e.target.value as DonationRow['kind'] }))}>
                  {DON_KINDS.map((k) => <option key={k} value={k}>{k}</option>)}
                </select>
              </label>
              <Money label="2026년 기부금액" value={row.amt || undefined} onChange={(v) => setDonation(patchRow(donation, i, { amt: v }))} />
              <button type="button" className="yec-mini" onClick={() => setDonation(donation.filter((_, j) => j !== i))}>지우기</button>
            </div>
          ))}
          <button type="button" className="yec-add" onClick={() => setDonation([...donation, { kind: '일반기부금(종교단체 외)', amt: 0 }])}>+ 기부금 추가</button>
        </Section>

        <Section title="⑩ 월세" sub="총급여 8천만원 이하">
          <Money label="월세 지급액 (연간)" value={inp.other?.rent} onChange={(v) => sub('other', { rent: v })} hint="무주택 세대주. 총급여 5,500만원 이하 17%, 8,000만원 이하 15%, 연 1,000만원까지" />
        </Section>

        <Section title="⑪ 소득세 감면" sub="중소기업 취업자 감면">
          <Money label="청년(취업 당시 15~34세) 감면 대상 급여" value={inp.reduction?.ibx_8608} onChange={(v) => sub('reduction', { ibx_8608: v })} hint="중소기업 취업일부터 5년 이내에 받은 급여. 소득세의 90%, 연 200만원까지 감면됩니다" />
          <Money label="60세 이상·장애인·경력단절여성 감면 대상 급여" value={inp.reduction?.ibx_8607} onChange={(v) => sub('reduction', { ibx_8607: v })} hint="중소기업 취업일부터 3년 이내에 받은 급여. 소득세의 70%, 연 200만원까지 감면됩니다 (청년 감면과 합쳐 200만원)" />
        </Section>

        <button type="button" className="yec-calc" disabled={!inp.salary} onClick={() => setDone(true)}>
          내 연말정산 계산하기
        </button>
      </section>

      {result && (
        <section className={`yec-result ${refund ? 'ok' : 'no'}`}>
          <p className="yec-result-line">
            {refund ? '예상 환급액' : result.payable === 0 ? '추가 납부·환급 없음' : '예상 추가 납부액'}
            <b>{F(Math.abs(result.payable))}원</b>
          </p>
          <p className="yec-verdict">
            결정세액 {F(result.determinedTax)}원에서 이미 낸 세금 {F(inp.paid ?? 0)}원을 뺀 값입니다. 지방소득세 {F(result.localTax)}원은 별도입니다.
          </p>
          <table className="yec-table">
            <tbody>
              {stepRows.map(([k, v, note]) => (
                <tr key={k}>
                  <th>{k}{note ? <small>{note}</small> : null}</th>
                  <td>{v < 0 ? '−' : ''}{F(Math.abs(v))}원</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="yec-next">공제를 더 받을 수 있는지는 항목별 글에서 기준을 확인하시면 됩니다.</p>
          <Link className="yec-btn" href="/policy/year-end-tax">연말정산 순서·공제 항목 보러 가기</Link>
          <a className="yec-btn sub" href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&tmIdx=45&tm2lIdx=4505100000&tm3lIdx=4505101200">홈택스 연말정산 자동계산으로 비교하기</a>
        </section>
      )}

      <p className="yec-disclaimer">
        2026년 귀속(2027년 2월 정산) 세법 기준의 참고용 계산입니다. 홈택스 연말정산 자동계산과 같은 항목·같은 입력으로 대조해 만들었지만,
        이 화면에 없는 항목(이월 기부금, 외국납부세액, 그 밖의 감면 등)과 가족 사이의 공제 중복 배제는 반영하지 않습니다.
        최종 금액은 회사 정산과 국세청 확정이 기준이며, 본 사이트는 정부 공식 사이트가 아닙니다.
      </p>
    </div>
  );
}
