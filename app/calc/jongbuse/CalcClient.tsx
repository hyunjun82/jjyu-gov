'use client';

/* 종부세 계산기 — 현행 vs 2026 세제개편안 나란히 비교. 홈택스는 현행만 되지만 우리는 개편 후가 보인다.
 *
 * 수치 출처 (전부 2026-08-04 Playwright 직접 대조):
 *   국세청 종합부동산세 세율(cntntsId=7736): 2주택 이하 0.5~2.7% / 3주택 이상 0.5~5.0% (7구간)
 *   국세청 세액계산 흐름도(7735): 과세표준 = (공시합산 − 공제) × 공정시장가액비율 60%
 *   국세청 궁금해요 종부세법(7739): 세액공제 연령 60/65/70세 = 20/30/40%, 보유 5/10/15년 = 20/40/50%, 한도 80%
 *   국세청 종부세 개요(7733): 기본공제 9억 / 1세대1주택 12억
 *   기재부 2026 세제개편안 FAQ(mofe.go.kr/2026/taxlaw.do):
 *     거주 1주택 기본공제 12→14억 / 비거주 1주택 12→9억 / 다주택 9억→4억+(5억 중 거주주택 비중)
 *     3주택 이상 공정시장가액비율 60→80% / 1주택 세액공제 한도 신설('27 800만, '28~ 600만)
 *     ※ 세율 체계 주택수→가액 일원화는 세부 세율표 미공개 → 세율은 현행 그대로 적용하고 그 사실을 명시
 *
 * 정직한 한계 (화면에도 명시): 재산세 중복분 공제·세부담상한(150%) 반영 전 금액.
 * 실제 고지액은 이보다 줄어들 수 있다 — 부풀리는 방향이 아니라 안전한 방향의 오차.
 */
import { useState } from 'react';
import Link from 'next/link';

const F = (n: number) => Math.round(n).toLocaleString('ko-KR');
const EOK = 100_000_000;

// 국세청 개인 세율표 ('23년 이후)
const R_UNDER2: [number, number][] = [[3, 0.005], [6, 0.007], [12, 0.010], [25, 0.013], [50, 0.015], [94, 0.020], [Infinity, 0.027]];
const R_OVER3: [number, number][] = [[3, 0.005], [6, 0.007], [12, 0.010], [25, 0.020], [50, 0.030], [94, 0.040], [Infinity, 0.050]];

function progressive(baseEok: number, table: [number, number][]) {
  let tax = 0, prev = 0;
  for (const [cap, rate] of table) {
    if (baseEok <= prev) break;
    tax += (Math.min(baseEok, cap) - prev) * EOK * rate;
    prev = cap;
  }
  return tax;
}

type Mode = { deduct: number; ratio: number; creditCap: number | null; note: string };

export default function JongbuseCalcClient() {
  const [priceEok, setPriceEok] = useState(''); // 공시가격 합산 (억)
  const [houses, setHouses] = useState<'1r' | '1n' | '2' | '3'>('1r'); // 거주1 / 비거주1 / 2주택 / 3주택+
  const [age, setAge] = useState<'-' | '60' | '65' | '70'>('-');
  const [hold, setHold] = useState<'-' | '5' | '10' | '15'>('-');
  const [done, setDone] = useState(false);

  const P = Number(priceEok.replace(/[^0-9.]/g, '')) || 0;

  const ageRate = { '-': 0, '60': 0.2, '65': 0.3, '70': 0.4 }[age];
  const holdRate = { '-': 0, '5': 0.2, '10': 0.4, '15': 0.5 }[hold];
  const creditRate = Math.min(0.8, ageRate + holdRate);
  const isOneLive = houses === '1r';
  const table = houses === '3' ? R_OVER3 : R_UNDER2;

  // 현행: 1주택(거주·비거주 무관) 12억 / 그 외 9억, 비율 60%, 공제한도 없음
  const now: Mode = {
    deduct: houses === '1r' || houses === '1n' ? 12 : 9,
    ratio: 0.6,
    creditCap: null,
    note: '현행 (2026년 귀속)',
  };
  // 개편안: 거주1주택 14억 / 비거주1주택 9억 / 다주택 4억(거주주택 비중 따라 최대 9억) / 3주택+ 비율 80% / 공제한도 600만('28~)
  const plan: Mode = {
    deduct: houses === '1r' ? 14 : houses === '1n' ? 9 : 4,
    ratio: houses === '3' ? 0.8 : 0.6,
    creditCap: 6_000_000,
    note: '개편안 (국회 통과 전)',
  };

  const calc = (m: Mode) => {
    const base = Math.max(0, (P - m.deduct)) * m.ratio; // 과세표준 (억)
    const gross = progressive(base, table);
    let credit = isOneLive ? gross * creditRate : 0;
    if (m.creditCap !== null) credit = Math.min(credit, m.creditCap);
    return { base, gross, credit, net: Math.max(0, gross - credit) };
  };
  const a = calc(now);
  const b = calc(plan);

  const seg = (opts: [string, string][], v: string, set: (s: any) => void) => (
    <span className="bpc-seg">
      {opts.map(([val, label]) => (
        <button type="button" key={val} className={v === val ? 'on' : ''} onClick={() => { set(val); setDone(false); }}>{label}</button>
      ))}
    </span>
  );

  return (
    <div className="bpc">
      <section className="bpc-form">
        <label className="bpc-field">
          <span className="bpc-label">보유 주택 공시가격 합산</span>
          <span className="bpc-input-wrap">
            <input inputMode="decimal" value={priceEok} onChange={(e) => { setPriceEok(e.target.value.replace(/[^0-9.]/g, '')); setDone(false); }} placeholder="예: 15.5" />
            <b>억원</b>
          </span>
          <span className="bpc-hint">시세가 아니라 공시가격입니다. 부동산공시가격 알리미에서 확인한 값을 넣으세요 (시가의 대략 70% 수준)</span>
        </label>
        <label className="bpc-field">
          <span className="bpc-label">주택 수</span>
          {seg([['1r', '1주택 거주'], ['1n', '1주택 비거주'], ['2', '2주택'], ['3', '3주택 이상']], houses, setHouses)}
        </label>
        {isOneLive && (
          <div className="bpc-row2">
            <label className="bpc-field">
              <span className="bpc-label">나이 (세액공제)</span>
              {seg([['-', '60세 미만'], ['60', '60세~'], ['65', '65세~'], ['70', '70세~']], age, setAge)}
            </label>
            <label className="bpc-field">
              <span className="bpc-label">보유 기간</span>
              {seg([['-', '5년 미만'], ['5', '5년~'], ['10', '10년~'], ['15', '15년~']], hold, setHold)}
            </label>
          </div>
        )}
        <button type="button" className="bpc-calc" onClick={() => setDone(true)}>
          현행 vs 개편안 종부세 계산하기
        </button>
      </section>

      {done && P > 0 && (
        <section className={`bpc-result ${b.net <= a.net ? 'ok' : 'no'}`}>
          <p className="bpc-result-line">
            공시가격 {priceEok}억 · {houses === '1r' ? '거주 1주택' : houses === '1n' ? '비거주 1주택' : houses === '2' ? '2주택' : '3주택 이상'}
          </p>
          <div style={{ overflowX: 'auto', marginTop: 10 }}>
            <table className="bpc-table">
              <thead>
                <tr><th>구분</th><th>현행</th><th>개편안*</th></tr>
              </thead>
              <tbody>
                <tr><td>기본공제</td><td>{now.deduct}억원</td><td>{plan.deduct}억원{houses === '2' ? ' (거주 비중 따라 최대 9억)' : ''}</td></tr>
                <tr><td>공정시장가액비율</td><td>60%</td><td>{plan.ratio * 100}%</td></tr>
                <tr><td>과세표준</td><td>{a.base <= 0 ? '—' : `${F(a.base * EOK / 10_000)}만원`}</td><td>{b.base <= 0 ? '—' : `${F(b.base * EOK / 10_000)}만원`}</td></tr>
                <tr><td>세액공제</td><td>{a.credit > 0 ? `-${F(a.credit / 10_000)}만원` : '—'}</td><td>{b.credit > 0 ? `-${F(b.credit / 10_000)}만원 (한도 600만)` : '—'}</td></tr>
                <tr className="hit"><td><b>종부세</b></td><td><b>{a.net === 0 ? '0원 (비과세)' : `약 ${F(a.net / 10_000)}만원`}</b></td><td><b>{b.net === 0 ? '0원 (비과세)' : `약 ${F(b.net / 10_000)}만원`}</b></td></tr>
              </tbody>
            </table>
          </div>
          <p className="bpc-verdict" style={{ marginTop: 12 }}>
            {b.net === 0 && a.net === 0
              ? '현행으로도 개편안으로도 종부세 비과세 구간입니다.'
              : b.net < a.net
                ? `개편안 기준으로 연 ${F((a.net - b.net) / 10_000)}만원 줄어듭니다.`
                : b.net > a.net
                  ? `개편안 기준으로 연 ${F((b.net - a.net) / 10_000)}만원 늘어납니다. 시행은 2027년부터 단계 적용이라 대응할 시간은 있습니다.`
                  : '개편 전후 변동이 없는 구간입니다.'}
          </p>
          <p className="bpc-note">
            * 개편안은 국회 통과 전이며, 세율 체계 개편(주택수→가액 기준) 세부 세율표는 미공개라 세율은 현행을 적용했습니다.
            재산세 중복분 공제·세부담상한(150%) 반영 전 금액이라 실제 고지액은 이보다 줄어들 수 있습니다.
          </p>
          <p className="bpc-next">
            {houses === '2' || houses === '3'
              ? '다주택은 양도세 중과가 2027~28년 한시 완화(+5~15%p)되는 것까지 같이 봐야 파느냐 버티느냐 계산이 됩니다. 개편안 전체 내용부터 확인해 보셔야겠죠.'
              : '종부세 말고 양도세 공제(250만→2,500만)도 바뀌는데요. 내 집에 해당하는 항목이 더 있는지 개편안 전체를 확인해 보셔야겠죠.'}
          </p>
          <a className="bpc-btn" href="https://www.mofe.go.kr/2026/taxlaw.do">
            세제개편안 홈페이지 바로가기
          </a>
          <Link className="bpc-btn sub" href="/calc/median-income">
            다른 계산기: 중위소득 % 계산해보기
          </Link>
        </section>
      )}

      <p className="bpc-disclaimer">
        세율·공제율은 국세청 종합부동산세 안내(2026.08.04 확인), 개편안 수치는 기획재정부 2026 세제개편안 FAQ 기준입니다.
        본 계산기는 참고용이며 재산세 중복공제·세부담상한·합산배제 등은 반영되지 않습니다. 최종 세액은 국세청(126)·홈택스 기준입니다.
        본 사이트는 정부 공식 사이트가 아닙니다.
      </p>
    </div>
  );
}
