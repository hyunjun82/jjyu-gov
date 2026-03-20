'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { SpokeData } from '../page';

/* ── 계산 로직 ── */
const RATE = 0.045; // 기본금리 4.5%
const CANCEL_RATE_RATIO = 0.7; // 중도해지 금리 = 기본의 70%
const TAX_RATE = 0.154; // 이자소득세 15.4%

const CONTRIB_MAP: Record<string, { label: string; monthly: number }> = {
  low: { label: '2,400만원 이하', monthly: 33000 },
  mid1: { label: '2,400~3,600만원', monthly: 29000 },
  mid2: { label: '3,600~4,800만원', monthly: 25000 },
  mid3: { label: '4,800~6,000만원', monthly: 21000 },
  high: { label: '6,000~7,500만원', monthly: 0 },
};

function calcResult(monthlyDeposit: number, months: number, incomeKey: string) {
  const contrib = CONTRIB_MAP[incomeKey]?.monthly || 0;
  const totalDeposit = monthlyDeposit * months;
  const maturityMonths = 60;

  // 만기 시
  const maturityDeposit = monthlyDeposit * maturityMonths;
  const maturityInterest = Math.round(maturityDeposit * RATE * (maturityMonths / 24));
  const maturityContrib = contrib * maturityMonths;
  const maturityContribInterest = Math.round(maturityContrib * RATE * (maturityMonths / 48));
  const maturityTotal = maturityDeposit + maturityInterest + maturityContrib + maturityContribInterest;

  // 해지 시
  const cancelInterest = Math.round(totalDeposit * RATE * CANCEL_RATE_RATIO * (months / 24));
  const under3y = months < 36;
  const tax = under3y ? Math.round(cancelInterest * TAX_RATE) : 0;
  const cancelContrib = under3y ? 0 : Math.round(contrib * months * 0.6);
  const cancelTotal = totalDeposit + cancelInterest - tax + cancelContrib;

  const loss = maturityTotal - cancelTotal;

  return { totalDeposit, maturityTotal, cancelTotal, cancelInterest, tax, cancelContrib, loss, under3y };
}

/* ── 시나리오 비교표 데이터 (월 50만원, 소득 2400만원 이하) ── */
const scenarios = [
  { months: 12, label: '1년', deposit: 600, cancel: 612, maturity: 5000, loss: 4388 },
  { months: 24, label: '2년', deposit: 1200, cancel: 1238, maturity: 5000, loss: 3762 },
  { months: 36, label: '3년', deposit: 1800, cancel: 1980, maturity: 5000, loss: 3020 },
  { months: 48, label: '4년', deposit: 2400, cancel: 2740, maturity: 5000, loss: 2260 },
  { months: 60, label: '5년 (만기)', deposit: 3000, cancel: 0, maturity: 5000, loss: 0 },
];

/* ── 의사결정 체커 ── */
type Decision = null | 'pause' | 'partial' | 'special' | 'cancel3y' | 'cancel';

const decisionResult: Record<Exclude<Decision, null>, { title: string; desc: string; color: string }> = {
  pause: {
    title: '납입중단으로 충분합니다',
    desc: '0원 넣어도 계좌 유지됩니다. 해당 월 기여금만 안 나오고, 다음 달부터 다시 넣으면 됩니다. 해지할 필요 없습니다.',
    color: 'var(--success)',
  },
  partial: {
    title: '부분인출을 검토하세요',
    desc: '가입 2년 경과 후, 납입금의 40%까지 1회 인출 가능합니다. 3년 이상이면 비과세와 기여금 60%도 유지됩니다.',
    color: 'var(--gov-primary)',
  },
  special: {
    title: '특별중도해지로 혜택 전액 받으세요',
    desc: '혼인·출산·퇴직·주택구입·질병 등 9가지 사유에 해당하면 기여금 + 비과세를 전부 받습니다. 은행 영업점에서 신청하세요.',
    color: 'var(--success)',
  },
  cancel3y: {
    title: '3년까지 버틸 수 있다면 버티세요',
    desc: '3년 넘기면 기여금 60% + 비과세가 유지됩니다. 2년 11개월에 해지하면 기여금 0원입니다. 몇 개월 차이로 수십만원이 달라집니다.',
    color: '#B45309',
  },
  cancel: {
    title: '해지 시 받는 금액을 위 계산기로 확인하세요',
    desc: '일반 해지는 최후의 수단입니다. 위 계산기에서 정확한 손해액을 확인한 후 결정하세요.',
    color: 'var(--danger)',
  },
};

function Content() {
  /* 계산기 state */
  const [deposit, setDeposit] = useState(500000);
  const [months, setMonths] = useState(18);
  const [income, setIncome] = useState('low');
  const [showResult, setShowResult] = useState(false);

  /* 체커 state */
  const [decision, setDecision] = useState<Decision>(null);

  const result = calcResult(deposit, months, income);

  return (
    <>
      {/* 답변 박스 */}
      <div className="answer-box">
        <p>
          3년 미만에 해지하면 정부기여금 전액 환수 + 이자소득세 15.4% 부과됩니다.
          3년 이상 유지 후 해지하면 기여금 60%는 받고 비과세도 유지됩니다.
          해지 전에 납입중단·부분인출·특별해지를 먼저 검토하세요.
        </p>
      </div>

      {/* ── 1. 손해 계산기 ── */}
      <section className="detail-card" id="calculator">
        <h2 className="detail-card-head">지금 해지하면 얼마나 손해인가?</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
            내 납입 조건을 입력하면 만기 대비 손해액을 계산합니다.
          </p>

          {/* 입력 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 20 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                월 납입액
              </label>
              <select
                value={deposit}
                onChange={(e) => { setDeposit(Number(e.target.value)); setShowResult(false); }}
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-xs)', fontSize: 14 }}
              >
                <option value={100000}>10만원</option>
                <option value={200000}>20만원</option>
                <option value={300000}>30만원</option>
                <option value={400000}>40만원</option>
                <option value={500000}>50만원</option>
                <option value={600000}>60만원</option>
                <option value={700000}>70만원</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                가입 기간
              </label>
              <select
                value={months}
                onChange={(e) => { setMonths(Number(e.target.value)); setShowResult(false); }}
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-xs)', fontSize: 14 }}
              >
                {[6,12,18,24,30,36,42,48,54].map(m => (
                  <option key={m} value={m}>{m}개월 ({(m/12).toFixed(1)}년)</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                소득구간
              </label>
              <select
                value={income}
                onChange={(e) => { setIncome(e.target.value); setShowResult(false); }}
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-xs)', fontSize: 14 }}
              >
                {Object.entries(CONTRIB_MAP).map(([k, v]) => (
                  <option key={k} value={k}>{v.label}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={() => setShowResult(true)}
            className="btn-cta"
            style={{ width: '100%', marginBottom: 20 }}
          >
            손해액 계산하기
          </button>

          {/* 결과 */}
          {showResult && (
            <div style={{ borderTop: '2px solid var(--border)', paddingTop: 20 }}>
              {/* 핵심 비교 */}
              <div className="highlight-numbers">
                <div className="highlight-num-item">
                  <span className="highlight-num-label">지금 해지하면</span>
                  <span className="highlight-num-value">{(result.cancelTotal / 10000).toFixed(0)}만원</span>
                  <span className="highlight-num-sub">
                    원금 {(result.totalDeposit / 10000).toFixed(0)}만 + 이자 {(result.cancelInterest / 10000).toFixed(0)}만
                    {result.cancelContrib > 0 && ` + 기여금 ${(result.cancelContrib / 10000).toFixed(0)}만`}
                    {result.tax > 0 && ` - 세금 ${(result.tax / 10000).toFixed(0)}만`}
                  </span>
                </div>
                <div className="highlight-num-vs">vs</div>
                <div className="highlight-num-item primary">
                  <span className="highlight-num-label">만기까지 가면</span>
                  <span className="highlight-num-value">{(result.maturityTotal / 10000).toFixed(0)}만원</span>
                  <span className="highlight-num-sub">5년 만기 예상 수령액</span>
                </div>
              </div>

              {/* 손해액 강조 */}
              <div style={{
                textAlign: 'center',
                padding: '16px 0',
                marginTop: 16,
                background: 'var(--danger-bg)',
                borderRadius: 'var(--radius-sm)',
              }}>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>만기 대비 손해액</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--danger)', marginTop: 4 }}>
                  -{(result.loss / 10000).toFixed(0)}만원
                </div>
                {result.under3y && (
                  <div style={{ fontSize: 12, color: 'var(--danger)', marginTop: 4 }}>
                    3년 미만 해지 → 기여금 0원 + 이자소득세 15.4% 부과
                  </div>
                )}
                {!result.under3y && (
                  <div style={{ fontSize: 12, color: '#B45309', marginTop: 4 }}>
                    3년 이상 유지 → 기여금 60% 지급 + 비과세 유지
                  </div>
                )}
              </div>

              <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 12, textAlign: 'center' }}>
                ※ 기본금리 4.5% 기준 추정. 실제 금액은 은행·우대금리에 따라 다를 수 있습니다.
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* ── 2. 시나리오 비교표 ── */}
      <section className="detail-card" id="scenarios">
        <h2 className="detail-card-head">해지 시점별, 받는 금액은 얼마인가?</h2>
        <div className="detail-card-body" style={{ padding: 0 }}>
          <div className="answer-box-inline" style={{ margin: '16px 16px 0' }}>
            월 50만원, 소득 2,400만원 이하 기준입니다.
            3년이 분기점 — 2년 11개월 해지는 기여금 0원, 3년 넘기면 60%를 받습니다.
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <caption className="sr-only">청년도약계좌 해지 시점별 수령액 비교</caption>
              <thead>
                <tr>
                  <th scope="col">해지 시점</th>
                  <th scope="col">내가 넣은 돈</th>
                  <th scope="col">해지 시 받는 돈</th>
                  <th scope="col" className="highlight">만기 대비 손해</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((s, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{s.label}</td>
                    <td>{s.deposit.toLocaleString()}만원</td>
                    <td>{s.months === 60 ? <span className="text-success" style={{fontWeight:600}}>{s.maturity.toLocaleString()}만원</span> : `약 ${s.cancel.toLocaleString()}만원`}</td>
                    <td>{s.loss > 0 ? <span className="text-danger" style={{fontWeight:600}}>-{s.loss.toLocaleString()}만원</span> : <span className="text-success" style={{fontWeight:600}}>만기 수령</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="source-inline" style={{ padding: '12px 16px' }}>
            출처: <a href="https://www.fsc.go.kr/no010101/81550" target="_blank" rel="noopener noreferrer">금융위원회</a> 기여금·금리 기준 자체 산출
          </p>
        </div>
      </section>

      {/* ── 3. 의사결정 체커 ── */}
      <section className="detail-card" id="decision">
        <h2 className="detail-card-head">해지 말고 다른 방법은 없나?</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
            상황에 맞는 항목을 선택하세요. 해지보다 나은 방법이 있을 수 있습니다.
          </p>

          <fieldset className="elig-fieldset">
            <legend className="sr-only">해지 대안 확인</legend>

            <div
              className={`elig-item ${decision === 'pause' ? 'pass' : ''}`}
              onClick={() => setDecision('pause')}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ flex: 1 }}>
                <span className="elig-q">이번 달만 돈이 부족하다</span>
              </div>
            </div>

            <div
              className={`elig-item ${decision === 'partial' ? 'pass' : ''}`}
              onClick={() => setDecision('partial')}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ flex: 1 }}>
                <span className="elig-q">급전이 필요한데 가입한 지 2년 넘었다</span>
              </div>
            </div>

            <div
              className={`elig-item ${decision === 'special' ? 'pass' : ''}`}
              onClick={() => setDecision('special')}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ flex: 1 }}>
                <span className="elig-q">결혼·출산·퇴직·주택구입·질병 중 하나에 해당한다</span>
              </div>
            </div>

            <div
              className={`elig-item ${decision === 'cancel3y' ? 'pass' : ''}`}
              onClick={() => setDecision('cancel3y')}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ flex: 1 }}>
                <span className="elig-q">5년이 너무 길어서 해지하고 싶다</span>
              </div>
            </div>

            <div
              className={`elig-item ${decision === 'cancel' ? 'fail' : ''}`}
              onClick={() => setDecision('cancel')}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ flex: 1 }}>
                <span className="elig-q">위 항목에 해당하지 않고, 해지하려 한다</span>
              </div>
            </div>
          </fieldset>

          {decision && (
            <div className={`elig-result ${decision === 'cancel' ? 'fail' : 'pass'}`} style={{ marginTop: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: decisionResult[decision].color }}>
                {decisionResult[decision].title}
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8, lineHeight: 1.7 }}>
                {decisionResult[decision].desc}
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* ── 4. 특별중도해지 사유 (간결하게) ── */}
      <section className="detail-card" id="special">
        <h2 className="detail-card-head">특별중도해지 사유 9가지</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            아래 사유에 해당하면 가입 기간과 관계없이 정부기여금 + 비과세 전액 보장됩니다.
            해지일로부터 6개월 이내 사유여야 합니다 (사망·해외이주 제외).
          </div>
          <div className="info-checklist">
            <strong>혜택 전액 보장 사유</strong>
            <ul>
              <li><span className="check-icon">&#10003;</span> 사망 / 해외이주</li>
              <li><span className="check-icon">&#10003;</span> 퇴직 / 사업장 폐업</li>
              <li><span className="check-icon">&#10003;</span> 천재지변</li>
              <li><span className="check-icon">&#10003;</span> 3개월 이상 입원·요양 필요한 상해·질병</li>
              <li><span className="check-icon">&#10003;</span> 생애최초 주택 구입</li>
              <li><span className="check-icon">&#10003;</span> 혼인 (2024년 추가)</li>
              <li><span className="check-icon">&#10003;</span> 출산 — 배우자 출산 포함 (2024년 추가)</li>
            </ul>
          </div>
          <p className="source-inline">
            출처: <a href="https://www.hankyung.com/article/2025092958461" target="_blank" rel="noopener noreferrer">한국경제</a>
            {' / '}<a href="https://www.fsc.go.kr/no010101/81550" target="_blank" rel="noopener noreferrer">금융위원회</a>
          </p>
        </div>
      </section>
    </>
  );
}

export const CancelSpokeContent: SpokeData = {
  h1: '청년도약계좌 중도해지하면 얼마나 손해인가?',
  breadcrumb: '중도해지 손실',
  description: '청년도약계좌 중도해지 손해 계산기. 월 납입액·가입기간별 손해액을 즉시 확인하고, 해지 전 대안을 검토하세요.',
  datePublished: '2026-02-10T09:00:00+09:00',
  dateModified: '2026-03-20T09:00:00+09:00',
  Content,
  faqData: [
    { q: '이번 달 돈이 없어서 못 넣으면 해지되나요?', a: '아닙니다. 0원 납입해도 계좌는 유지됩니다. 해당 월 기여금만 안 나오고, 다음 달부터 다시 넣으면 됩니다.', source: '복지로 Q&A', sourceUrl: '/policy/1' },
    { q: '해지 후 재가입할 수 있나요?', a: '해지 2개월 후 재가입 가능합니다. 단, 기여금이 (60개월-기가입기간)/60개월로 줄어듭니다. 12개월 가입 후 재가입하면 80% 수준입니다.', source: '청년도약계좌 전체 정보', sourceUrl: '/policy/1' },
    { q: '결혼하면 특별중도해지 가능한가요?', a: '가능합니다. 2024년부터 혼인·출산이 추가되었습니다. 기여금과 비과세 전액 보장됩니다.', source: '자격확인', sourceUrl: '/policy/1#eligibility' },
    { q: '부분인출은 언제 가능한가요?', a: '가입 2년 경과 후, 납입금 40% 이내로 1회만 됩니다. 3년 이상이면 비과세와 기여금 60%가 유지됩니다.', source: '경기도 일자리재단', sourceUrl: '/policy/1' },
  ],
  sources: [
    { name: '금융위원회 – 청년도약계좌 안내', url: 'https://www.fsc.go.kr/no010101/81550' },
    { name: '한경매거진 – 해지율 15.9%', url: 'https://magazine.hankyung.com/job-joy/article/202509245745d' },
    { name: '복지로 – 납입 없어도 계좌 유지', url: 'https://www.bokjiro.go.kr/ssis-tbu/cms/pc/news/news/1305050_1114.html' },
    { name: '한국경제 – 특별중도해지 기여금 보장', url: 'https://www.hankyung.com/article/2025092958461' },
  ],
};
