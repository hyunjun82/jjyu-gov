'use client';

/* 기초연금 소득인정액 모의계산기 — 우리 사이트 안에서 계산하고 내부 동선으로 잇는다.
 *
 * 왜 직접 만들었나 (2026-08-04):
 *   모의계산 버튼이 복지로·기초연금 홈으로 나가면 그 순간 이탈이고 전면광고도 없다.
 *   계산 로직은 허브에 이미 1:1 검증된 공식 그대로다 (보건복지부 고시 2026-24·25호):
 *     소득평가액 = max(0, 근로소득-116만)×70% + 기타소득 + 공적이전(국민연금 등)
 *     재산환산액 = max(0, (일반재산-지역공제) + max(0,금융재산-2,000만) - 부채) × 4% ÷ 12
 *     소득인정액 = 소득평가액 + 재산환산액
 *   결과는 참고용 — 최종 판정은 복지로/공단이라는 면책을 반드시 노출한다.
 */
import { useState } from 'react';
import Link from 'next/link';

const F = (n: number) => Math.round(n).toLocaleString('ko-KR');

const BASE_DEDUCT: Record<string, number> = {
  대도시: 135_000_000,
  중소도시: 85_000_000,
  농어촌: 72_500_000,
};
const WORK_DEDUCT = 1_160_000; // 근로소득 기본공제 (2026)
const FIN_DEDUCT = 20_000_000; // 금융재산 공제
const RATE = 0.04; // 재산 소득환산율 연 4%
const LIMIT_SINGLE = 2_470_000; // 2026 선정기준액 단독
const LIMIT_COUPLE = 3_952_000; // 2026 선정기준액 부부
const PENSION = 349_700; // 2026 기준연금액
const PENSION_COUPLE_EACH = 279_760; // 부부감액 20% 적용
const NP_LINK_LIMIT = 524_550; // 국민연금 연계감액 기준 (기준연금액 150%)

export default function CalcClient() {
  const [couple, setCouple] = useState(false);
  const [region, setRegion] = useState('대도시');
  const [work, setWork] = useState('');
  const [other, setOther] = useState('');
  const [nationalPension, setNationalPension] = useState('');
  const [property, setProperty] = useState('');
  const [finance, setFinance] = useState('');
  const [debt, setDebt] = useState('');
  const [done, setDone] = useState(false);

  const num = (s: string) => Number(s.replace(/[^0-9]/g, '')) || 0;
  const manwon = (s: string) => num(s) * 10_000;

  const workEval = Math.max(0, manwon(work) - WORK_DEDUCT) * 0.7;
  const incomeEval = workEval + manwon(other) + manwon(nationalPension);
  const propBase =
    Math.max(0, manwon(property) - BASE_DEDUCT[region]) +
    Math.max(0, manwon(finance) - FIN_DEDUCT) -
    manwon(debt);
  const propEval = (Math.max(0, propBase) * RATE) / 12;
  const total = incomeEval + propEval;
  const limit = couple ? LIMIT_COUPLE : LIMIT_SINGLE;
  const pass = total <= limit;
  const npOver = manwon(nationalPension) > NP_LINK_LIMIT;

  const input = (
    label: string,
    v: string,
    set: (s: string) => void,
    hint: string,
  ) => (
    <label className="bpc-field">
      <span className="bpc-label">{label}</span>
      <span className="bpc-input-wrap">
        <input
          inputMode="numeric"
          value={v}
          onChange={(e) => set(e.target.value.replace(/[^0-9]/g, ''))}
          placeholder="0"
        />
        <b>만원</b>
      </span>
      <span className="bpc-hint">{hint}</span>
    </label>
  );

  return (
    <div className="bpc">
      <section className="bpc-form">
        <div className="bpc-row2">
          <label className="bpc-field">
            <span className="bpc-label">가구 유형</span>
            <span className="bpc-seg">
              <button type="button" className={!couple ? 'on' : ''} onClick={() => { setCouple(false); setDone(false); }}>단독가구</button>
              <button type="button" className={couple ? 'on' : ''} onClick={() => { setCouple(true); setDone(false); }}>부부가구</button>
            </span>
          </label>
          <label className="bpc-field">
            <span className="bpc-label">거주 지역</span>
            <span className="bpc-seg">
              {Object.keys(BASE_DEDUCT).map((r) => (
                <button type="button" key={r} className={region === r ? 'on' : ''} onClick={() => { setRegion(r); setDone(false); }}>{r}</button>
              ))}
            </span>
          </label>
        </div>
        {input('월 근로소득', work, setWork, '세전 급여. 116만원 공제 후 70%만 반영되니 생각보다 여유가 있습니다')}
        {input('월 국민연금 수령액', nationalPension, setNationalPension, '노령연금·분할연금 실수령액. 전액 반영됩니다')}
        {input('월 기타소득', other, setOther, '사업소득·임대소득·개인연금 등')}
        {input('일반재산 (집·토지 등)', property, setProperty, `시가표준액 기준. ${region} 기본공제 ${F(BASE_DEDUCT[region] / 10_000)}만원이 빠집니다`)}
        {input('금융재산 (예금·주식 등)', finance, setFinance, '2,000만원 공제 후 반영됩니다')}
        {input('부채', debt, setDebt, '대출·임대보증금 등. 재산에서 빠집니다')}
        <button type="button" className="bpc-calc" onClick={() => setDone(true)}>
          내 소득인정액 계산하기
        </button>
      </section>

      {done && (
        <section className={`bpc-result ${pass ? 'ok' : 'no'}`}>
          <p className="bpc-result-line">
            소득인정액 <b>{F(total / 10_000)}만원</b> / 선정기준액 {F(limit / 10_000)}만원
          </p>
          <p className="bpc-verdict">
            {pass
              ? couple
                ? `기준 이내입니다. 부부 모두 수급 시 각 ${F(PENSION_COUPLE_EACH)}원, 합산 ${F(PENSION_COUPLE_EACH * 2)}원 수준을 받을 수 있습니다.`
                : `기준 이내입니다. 단독가구 기준연금액은 월 ${F(PENSION)}원입니다.`
              : `기준을 ${F((total - limit) / 10_000)}만원 넘습니다. 다만 부채·공제 입력에 따라 달라질 수 있으니 정확한 판정은 공단 상담(1355)을 받아보세요.`}
          </p>
          {pass && npOver && (
            <p className="bpc-note">
              국민연금이 월 {F(NP_LINK_LIMIT)}원을 넘어 연계감액이 적용될 수 있습니다. 실제 수령액은 이보다 줄 수 있습니다.
            </p>
          )}
          <div className="bpc-detail">
            <span>소득평가액 {F(incomeEval / 10_000)}만원</span>
            <span>재산환산액 {F(propEval / 10_000)}만원</span>
          </div>
          {pass ? (
            <>
              <p className="bpc-next">
                기준 안에 들어오셨으면 이제 신청만 남았는데요. 만 65세 생일이 속한 달의 한 달 전부터 접수되고, 늦게 낸 달은 소급되지 않습니다.
              </p>
              <a className="bpc-btn" href="https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001164">
                기초연금 온라인 신청하기
              </a>
              <Link className="bpc-btn sub" href="/policy/basic-pension#q5-apply">
                신청 방법·필요 서류 보러 가기
              </Link>
            </>
          ) : (
            <>
              <p className="bpc-next">
                국민연금 감액이나 재산 산정에서 달라지는 경우가 많습니다. 감액 기준부터 따져보시면 답이 나옵니다.
              </p>
              <Link className="bpc-btn" href="/policy/basic-pension#q6-deduction">
                감액 기준 따져보러 가기
              </Link>
            </>
          )}
        </section>
      )}

      <p className="bpc-disclaimer">
        본 계산기는 보건복지부 고시(2026-24·25호) 공식을 그대로 적용한 참고용이며, 고급자동차·회원권 등 일부 항목은 반영되지 않습니다.
        최종 수급 여부와 금액은 복지로·국민연금공단(1355) 판정이 기준입니다. 본 사이트는 정부 공식 사이트가 아닙니다.
      </p>
    </div>
  );
}
