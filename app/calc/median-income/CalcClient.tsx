'use client';

/* 기준 중위소득 % 계산기 — "중위소득 125% 이하가 뭔데?"에 즉답하는 페이지.
 *
 * 수치 출처 (2026-08-04 교차검증):
 *   2026년: 보건복지부 보도자료 「2026년도 기준 중위소득 6.51% 인상」 (list_no=1487098)
 *   2027년: 제80차 중앙생활보장위원회 의결(2026.7.28), 6.70% 인상 — korea.kr 148968956
 *   검산: 2027 각 가구 = 2026 × 1.0670 원 단위 일치 확인
 */
import { useState } from 'react';
import Link from 'next/link';

const F = (n: number) => Math.round(n).toLocaleString('ko-KR');

const MEDIAN: Record<'2026' | '2027', number[]> = {
  // index 0 = 1인 … 5 = 6인
  '2026': [2_564_238, 4_199_292, 5_359_036, 6_494_738, 7_556_719, 8_555_952],
  '2027': [2_736_042, 4_480_645, 5_718_091, 6_929_885, 8_063_019, 9_129_201],
};

/* 자주 쓰이는 구간 — 어떤 제도의 문턱인지 함께 보여줘야 숫자가 의미를 가진다 */
const BANDS: { pct: number; use: string }[] = [
  { pct: 32, use: '생계급여' },
  { pct: 40, use: '의료급여' },
  { pct: 48, use: '주거급여' },
  { pct: 50, use: '교육급여 · 차상위계층' },
  { pct: 60, use: '한부모 양육비 지원 등' },
  { pct: 100, use: '재난적 의료비 등' },
  { pct: 120, use: '청년월세 등 일부 사업' },
  { pct: 125, use: '지자체 지원사업 다수' },
  { pct: 150, use: '서울형 긴급복지 등' },
];

export default function MedianCalcClient() {
  const [year, setYear] = useState<'2026' | '2027'>('2026');
  const [size, setSize] = useState(1);
  const [income, setIncome] = useState('');

  const base = MEDIAN[year][size - 1];
  const inc = (Number(income.replace(/[^0-9]/g, '')) || 0) * 10_000;
  const myPct = inc > 0 ? (inc / base) * 100 : null;

  return (
    <div className="bpc">
      <section className="bpc-form">
        <div className="bpc-row2">
          <label className="bpc-field">
            <span className="bpc-label">기준 연도</span>
            <span className="bpc-seg">
              <button type="button" className={year === '2026' ? 'on' : ''} onClick={() => setYear('2026')}>2026 (현행)</button>
              <button type="button" className={year === '2027' ? 'on' : ''} onClick={() => setYear('2027')}>2027 (확정)</button>
            </span>
          </label>
          <label className="bpc-field">
            <span className="bpc-label">가구원 수</span>
            <span className="bpc-seg">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <button type="button" key={n} className={size === n ? 'on' : ''} onClick={() => setSize(n)}>{n}인</button>
              ))}
            </span>
          </label>
        </div>
        <label className="bpc-field">
          <span className="bpc-label">내 가구 월 소득 (선택)</span>
          <span className="bpc-input-wrap">
            <input
              inputMode="numeric"
              value={income}
              onChange={(e) => setIncome(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="0"
            />
            <b>만원</b>
          </span>
          <span className="bpc-hint">넣으면 내 소득이 중위소득 몇 %인지 바로 표시됩니다. 급여 판정은 세전 소득이 아니라 소득인정액 기준입니다</span>
        </label>
      </section>

      <section className="bpc-result ok" style={{ marginTop: 16 }}>
        <p className="bpc-result-line">
          {year}년 {size}인 가구 기준 중위소득 <b>{F(base)}원</b>
        </p>
        {myPct !== null && (
          <p className="bpc-verdict">
            내 소득 {F(inc)}원은 중위소득 <b>약 {myPct.toFixed(0)}%</b> 수준입니다.
            {myPct <= 50
              ? ' 기초생활보장 급여 대상 범위에 들어올 수 있으니 아래 문턱을 확인해 보세요.'
              : myPct <= 125
                ? ' 청년월세·지자체 사업 등 이 구간을 쓰는 지원이 여럿 있습니다.'
                : ' 일반 복지사업 기준은 넘지만 150%까지 보는 사업도 있습니다.'}
          </p>
        )}
        <div style={{ overflowX: 'auto', marginTop: 12 }}>
          <table className="bpc-table">
            <thead>
              <tr><th>구간</th><th>월 소득 문턱</th><th>주로 쓰이는 곳</th></tr>
            </thead>
            <tbody>
              {BANDS.map((b) => {
                const th = (base * b.pct) / 100;
                const mine = myPct !== null && inc <= th;
                return (
                  <tr key={b.pct} className={mine ? 'hit' : ''}>
                    <td><b>{b.pct}%</b></td>
                    <td>{F(th)}원 이하</td>
                    <td>{b.use}{mine ? ' ✓' : ''}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="bpc-next">
          {year === '2026'
            ? '지금 신청하는 사업은 이 2026년 표가 기준인데요. 내년에는 6.70% 올라 올해 아깝게 넘었던 분들도 내년엔 들어올 수 있습니다.'
            : '2027년 표는 내년 1월부터 적용됩니다. 올해 신청은 2026년 기준으로 판정되니 지금 되는지부터 확인하는 게 순서겠죠.'}
        </p>
        <Link className="bpc-btn" href="/policy/basic-livelihood-allowance">
          생계급여 얼마 받는지 확인하러 가기
        </Link>
        <Link className="bpc-btn sub" href="/calc/basic-pension">
          기초연금 소득인정액 계산해보기
        </Link>
      </section>

      <p className="bpc-disclaimer">
        출처: 보건복지부 2026년도 기준 중위소득 고시, 제80차 중앙생활보장위원회 의결(2026.7.28, 2027년도 6.70% 인상).
        실제 수급 판정은 소득인정액(소득+재산 환산) 기준이며 최종 확인은 복지로·주민센터입니다. 본 사이트는 정부 공식 사이트가 아닙니다.
      </p>
    </div>
  );
}
