'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { SpokeData } from '../page';

const RATE = 0.045;

const INCOME_TIERS = [
  { key: 'a', label: '2,400만원 이하', monthly: 33000, rate: '6.0%', note: '최고 구간' },
  { key: 'b', label: '2,400~3,600만원', monthly: 29000, rate: '4.6%', note: '' },
  { key: 'c', label: '3,600~4,800만원', monthly: 25000, rate: '3.7%', note: '' },
  { key: 'd', label: '4,800~6,000만원', monthly: 21000, rate: '3.0%', note: '' },
  { key: 'e', label: '6,000~7,500만원', monthly: 0, rate: '없음', note: '비과세만' },
];

function calcMaturity(monthlyDeposit: number, tierIdx: number) {
  const months = 60;
  const contrib = INCOME_TIERS[tierIdx].monthly;
  const totalDeposit = monthlyDeposit * months;
  const interest = Math.round(totalDeposit * RATE * (months / 24));
  const totalContrib = contrib * months;
  const contribInterest = Math.round(totalContrib * RATE * (months / 48));
  return { totalDeposit, interest, totalContrib, contribInterest, total: totalDeposit + interest + totalContrib + contribInterest };
}

function Content() {
  const [deposit, setDeposit] = useState(500000);
  const [tierIdx, setTierIdx] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const result = calcMaturity(deposit, tierIdx);
  const tier = INCOME_TIERS[tierIdx];

  return (
    <>
      <div className="answer-box">
        <p>
          소득이 낮을수록 기여금 비율이 높습니다.
          총급여 2,400만원 이하면 월 3.3만원, 5년간 약 198만원을 정부가 얹어줍니다.
          6,000만원 넘으면 기여금 없이 비과세만 적용됩니다.
        </p>
      </div>

      {/* ── 1. 기여금 계산기 ── */}
      <section className="detail-card" id="calculator">
        <h2 className="detail-card-head">내 소득이면 5년 후 얼마 받나?</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
            월 납입액과 소득구간을 선택하면 5년 만기 수령액을 계산합니다.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                월 납입액
              </label>
              <select
                value={deposit}
                onChange={(e) => { setDeposit(Number(e.target.value)); setShowResult(false); }}
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-xs)', fontSize: 14 }}
              >
                {[100000,200000,300000,400000,500000,600000,700000].map(v => (
                  <option key={v} value={v}>{(v/10000)}만원</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                총급여 (세전)
              </label>
              <select
                value={tierIdx}
                onChange={(e) => { setTierIdx(Number(e.target.value)); setShowResult(false); }}
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-xs)', fontSize: 14 }}
              >
                {INCOME_TIERS.map((t, i) => (
                  <option key={i} value={i}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>

          <button onClick={() => setShowResult(true)} className="btn-cta" style={{ width: '100%', marginBottom: 20 }}>
            만기 수령액 계산하기
          </button>

          {showResult && (
            <div style={{ borderTop: '2px solid var(--border)', paddingTop: 20 }}>
              {/* 총 수령액 */}
              <div style={{ textAlign: 'center', padding: '20px 0', background: 'var(--success-bg)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>5년 만기 예상 수령액</div>
                <div style={{ fontSize: 32, fontWeight: 800, color: 'var(--success)', marginTop: 4 }}>
                  약 {(result.total / 10000).toFixed(0)}만원
                </div>
              </div>

              {/* 상세 내역 */}
              <table className="mini-table" style={{ marginTop: 16 }}>
                <caption className="sr-only">수령액 상세 내역</caption>
                <tbody>
                  <tr><td style={{fontWeight:600}}>내가 넣는 돈</td><td>{(result.totalDeposit / 10000).toFixed(0)}만원 (월 {(deposit/10000)}만 × 60개월)</td></tr>
                  <tr><td style={{fontWeight:600}}>이자 수익</td><td>약 {(result.interest / 10000).toFixed(0)}만원 (연 4.5% 기준)</td></tr>
                  <tr><td style={{fontWeight:600}}>정부기여금</td><td>{tier.monthly > 0 ? `${(result.totalContrib / 10000).toFixed(0)}만원 (월 ${(tier.monthly/10000).toFixed(1)}만 × 60개월)` : '해당 없음 (비과세만)'}</td></tr>
                  <tr><td style={{fontWeight:600}}>기여금 이자</td><td>약 {(result.contribInterest / 10000).toFixed(0)}만원</td></tr>
                  <tr><td style={{fontWeight:600}}>세금</td><td className="text-success" style={{fontWeight:600}}>0원 (비과세)</td></tr>
                </tbody>
              </table>

              <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 12, textAlign: 'center' }}>
                ※ 기본금리 4.5% 기준. 우대금리 포함 시 수령액 증가. 실제 금액은 은행에 따라 다름.
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* ── 2. 소득구간별 기여금표 ── */}
      <section className="detail-card" id="table">
        <h2 className="detail-card-head">소득구간별 기여금, 정확히 얼마인가?</h2>
        <div className="detail-card-body" style={{ padding: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <caption className="sr-only">소득구간별 정부기여금</caption>
              <thead>
                <tr>
                  <th scope="col">총급여</th>
                  <th scope="col">매칭비율</th>
                  <th scope="col">월 기여금</th>
                  <th scope="col" className="highlight">5년 합계</th>
                </tr>
              </thead>
              <tbody>
                {INCOME_TIERS.map((t, i) => (
                  <tr key={i}>
                    <td className="compare-label">{t.label}</td>
                    <td>{t.rate}</td>
                    <td>{t.monthly > 0 ? `${(t.monthly/10000).toFixed(1)}만원` : '0원'}</td>
                    <td style={{ fontWeight: 700 }}>{t.monthly > 0 ? `${(t.monthly * 60 / 10000).toFixed(0)}만원` : '비과세만'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: '12px 20px', fontSize: 12, color: 'var(--text-muted)', borderTop: '1px solid var(--border-light)' }}>
            ※ 2025년 1월 개정 기준. 월 70만원 최대 납입 시.
          </div>
        </div>
      </section>

      {/* ── 3. 유지심사 ── */}
      <section className="detail-card" id="review">
        <h2 className="detail-card-head">연봉 오르면 기여금이 줄어드나?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            네. 매년 유지심사가 있습니다.
            소득 구간이 올라가면 기여금 비율이 낮아지고, 6,000만원 초과 시 기여금 0원입니다.
            단, 비과세는 7,500만원까지 유지됩니다.
          </div>
          <table className="mini-table">
            <caption className="sr-only">유지심사 소득변동 시나리오</caption>
            <thead><tr><th scope="col">상황</th><th scope="col">기여금</th><th scope="col">비과세</th></tr></thead>
            <tbody>
              <tr><td>소득 변동 없음</td><td className="text-success" style={{fontWeight:600}}>유지</td><td className="text-success" style={{fontWeight:600}}>유지</td></tr>
              <tr><td>소득 증가 (구간 상승)</td><td style={{fontWeight:600}}>낮은 비율로 변경</td><td className="text-success" style={{fontWeight:600}}>유지</td></tr>
              <tr><td>소득 6,000만원 초과</td><td className="text-danger" style={{fontWeight:600}}>0원</td><td className="text-success" style={{fontWeight:600}}>유지</td></tr>
              <tr><td>소득 7,500만원 초과</td><td className="text-danger" style={{fontWeight:600}}>0원</td><td className="text-danger" style={{fontWeight:600}}>소멸</td></tr>
            </tbody>
          </table>
          <p className="source-inline">
            출처: <a href="https://ylaccount.kinfa.or.kr/ylt/step5" target="_blank" rel="noopener noreferrer">서민금융진흥원 유지심사</a>
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>
    </>
  );
}

export const ContribSpokeContent: SpokeData = {
  h1: '청년도약계좌 정부기여금, 내 소득이면 얼마 받나?',
  breadcrumb: '기여금 계산',
  description: '청년도약계좌 기여금 계산기. 소득구간·납입액별 5년 만기 수령액을 즉시 확인하세요.',
  datePublished: '2026-02-15T09:00:00+09:00',
  dateModified: '2026-03-20T09:00:00+09:00',
  Content,
  faqData: [
    { q: '기여금은 매달 통장에 들어오나요?', a: '아닙니다. 매월 적립되지만 실제 입금은 만기 또는 해지 시 한 번에 받습니다.', source: '서민금융진흥원', sourceUrl: '/policy/1' },
    { q: '40만원만 넣어도 기여금이 같다던데요?', a: '2024년까지는 맞았습니다. 2025년부터 매칭한도가 70만원으로 확대되어, 70만원 넣으면 3.3만원으로 늘어납니다. 40만원이면 2.4만원입니다.', source: '기여금 계산', sourceUrl: '/policy/1/기여금-계산#table' },
    { q: '연봉 2,400만원이 세전인가요?', a: '세전 총급여 기준입니다. 원천징수영수증의 "총급여액"을 확인하세요.', source: '금융위원회', sourceUrl: '/policy/1#details' },
    { q: '기여금에도 이자가 붙나요?', a: '네. 동일 금리가 적용됩니다. 기본금리 4.5% 기준 5년간 기여금 이자만 약 16만원 추가됩니다.', source: '금융위원회 보도자료', sourceUrl: '/policy/1' },
  ],
  sources: [
    { name: '금융위원회 – 기여금 확대 보도자료', url: 'https://www.fsc.go.kr/no010101/83729' },
    { name: '서민금융진흥원 – 상품안내', url: 'https://ylaccount.kinfa.or.kr/main' },
    { name: '서민금융진흥원 – 유지심사', url: 'https://ylaccount.kinfa.or.kr/ylt/step5' },
  ],
};
