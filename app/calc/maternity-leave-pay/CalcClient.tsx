'use client';

/* 출산전후휴가급여 계산기 — "출산휴가비 계산" 검색(네이버 노출 1,041/일)에 즉답.
 *
 * 수치 출처: 허브 maternity-leave-pay.ts 에 1:1 검증돼 있는 고용24 공식 수치 그대로.
 *   통상임금 100% / 2026 정부지원 상한 월 220만원 / 단태 90일·다태 120일
 *   우선지원대상기업: 전 기간 고용보험 지급(최초 60·75일은 상한 초과분 회사 보전)
 *   대기업: 최초 60일(다태 75일) 회사 지급, 이후 30일(45일)만 고용보험
 */
import { useState } from 'react';
import Link from 'next/link';

const F = (n: number) => Math.round(n).toLocaleString('ko-KR');
const CAP = 2_200_000; // 2026 정부지원 상한 (월)

export default function MaternityCalcClient() {
  const [wage, setWage] = useState('');
  const [twins, setTwins] = useState(false);
  const [priority, setPriority] = useState(true); // 우선지원대상기업(중소기업)
  const [done, setDone] = useState(false);

  const W = (Number(wage.replace(/[^0-9]/g, '')) || 0) * 10_000;
  const totalDays = twins ? 120 : 90;
  const firstDays = twins ? 75 : 60; // 회사 유급 의무 구간
  const lastDays = totalDays - firstDays;

  const daily = W / 30;
  const dailyCap = CAP / 30;
  const dailyEI = Math.min(daily, dailyCap);

  // 최초 구간: 통상임금 100% 보장 (우선지원=고용보험+회사 보전 / 대기업=회사 전액)
  const firstTotal = daily * firstDays;
  // 이후 구간: 고용보험만, 상한 적용
  const lastTotal = dailyEI * lastDays;
  const total = firstTotal + lastTotal;

  const eiPart = priority ? dailyEI * totalDays : dailyEI * lastDays;
  const coPart = total - eiPart;

  return (
    <div className="bpc">
      <section className="bpc-form">
        <label className="bpc-field">
          <span className="bpc-label">월 통상임금</span>
          <span className="bpc-input-wrap">
            <input
              inputMode="numeric"
              value={wage}
              onChange={(e) => { setWage(e.target.value.replace(/[^0-9]/g, '')); setDone(false); }}
              placeholder="0"
            />
            <b>만원</b>
          </span>
          <span className="bpc-hint">기본급+고정수당 기준. 상여·성과급 제외한 정기 지급분입니다</span>
        </label>
        <div className="bpc-row2">
          <label className="bpc-field">
            <span className="bpc-label">태아 수</span>
            <span className="bpc-seg">
              <button type="button" className={!twins ? 'on' : ''} onClick={() => { setTwins(false); setDone(false); }}>단태아 (90일)</button>
              <button type="button" className={twins ? 'on' : ''} onClick={() => { setTwins(true); setDone(false); }}>다태아 (120일)</button>
            </span>
          </label>
          <label className="bpc-field">
            <span className="bpc-label">회사 규모</span>
            <span className="bpc-seg">
              <button type="button" className={priority ? 'on' : ''} onClick={() => { setPriority(true); setDone(false); }}>중소기업</button>
              <button type="button" className={!priority ? 'on' : ''} onClick={() => { setPriority(false); setDone(false); }}>대기업</button>
            </span>
          </label>
        </div>
        <button type="button" className="bpc-calc" onClick={() => setDone(true)}>
          휴가 {totalDays}일 급여 계산하기
        </button>
      </section>

      {done && W > 0 && (
        <section className="bpc-result ok">
          <p className="bpc-result-line">
            {totalDays}일 예상 수령 총액 <b>{F(total)}원</b>
          </p>
          <p className="bpc-verdict">
            {W > CAP
              ? `통상임금이 상한(월 220만원)을 넘어, 마지막 ${lastDays}일은 고용보험 상한까지만 나옵니다. 최초 ${firstDays}일은 ${priority ? '고용보험+회사 보전으로' : '회사가'} 통상임금 100%를 받습니다.`
              : `통상임금이 상한(월 220만원) 이내라 전 기간 통상임금 100% 수준으로 받습니다.`}
          </p>
          <div className="bpc-detail">
            <span>고용보험 지급분 {F(eiPart)}원</span>
            <span>회사 지급분 {F(coPart)}원</span>
          </div>
          <p className="bpc-next">
            급여는 휴가 시작 30일 뒤부터 30일 단위로 나눠 신청하거나 일시금으로 받을 수 있는데요. 휴가가 끝난 뒤 12개월이 지나면 청구권이 사라집니다. 몰아서 받더라도 기한만은 넘기지 마세요.
          </p>
          <a className="bpc-btn" href="https://www.work24.go.kr/ei/b/b/1100/openHPEIBB1100M01Post.do">
            고용24에서 출산휴가급여 신청하기
          </a>
          <Link className="bpc-btn sub" href="/policy/maternity-leave-pay#q-company">
            중소기업·대기업 지급 구조 자세히 보기
          </Link>
        </section>
      )}

      <p className="bpc-disclaimer">
        2026년 고용노동부 고용24 기준(정부지원 상한 월 220만원). 통상임금이 최저임금에 못 미치면 최저임금 기준으로 보전됩니다.
        실제 지급액은 고용센터 심사로 확정되며, 본 사이트는 정부 공식 사이트가 아닙니다.
      </p>
    </div>
  );
}
