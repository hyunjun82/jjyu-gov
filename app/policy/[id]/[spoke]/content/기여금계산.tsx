'use client';
import { useState } from 'react';
import type { SpokeData } from '../SpokeClient';

/* ── 유형별 기여금 데이터 ── */
const TIERS = [
  {
    key: 'A',
    label: '우대형 A — 소상공인 (연매출 1억 이하 + 중위 150%)',
    rate: 12,
    monthly: 60000,
    note: '월 50만 × 12%',
  },
  {
    key: 'B',
    label: '우대형 B — 재직자 (총급여 3,600만원 이하 + 중위 150%)',
    rate: 12,
    monthly: 60000,
    note: '월 50만 × 12%',
  },
  {
    key: 'C',
    label: '우대형 C — 신규취업 (2025년 최초취업 + 중기 + 6,000만원 이하)',
    rate: 12,
    monthly: 60000,
    note: '월 50만 × 12%',
  },
  {
    key: 'D',
    label: '우대형 D — 중소기업 29개월 이상 재직',
    rate: 12,
    monthly: 60000,
    note: '월 50만 × 12%',
  },
  {
    key: 'E',
    label: '일반형 A — 소상공인 (연매출 3억 이하 + 중위 200%)',
    rate: 6,
    monthly: 30000,
    note: '월 50만 × 6%',
  },
  {
    key: 'F',
    label: '일반형 B — 일반 (총급여 6,000만원 이하 + 중위 200%)',
    rate: 6,
    monthly: 30000,
    note: '월 50만 × 6%',
  },
  {
    key: 'G',
    label: '비과세만 — 총급여 6,000만~7,500만 + 중위 200%',
    rate: 0,
    monthly: 0,
    note: '이자소득세 면제만',
  },
];

function Content() {
  const [selectedKey, setSelectedKey] = useState<string>('A');
  const [deposit, setDeposit] = useState(500000);

  const tier = TIERS.find((t) => t.key === selectedKey) ?? TIERS[0];
  const monthlyContrib = Math.round((deposit * tier.rate) / 100);
  const total3y = monthlyContrib * 36;
  const totalDeposit3y = deposit * 36;

  return (
    <>
      <div className="answer-box">
        <p>
          청년미래적금 정부기여금은 월 납입금의 6% 또는 12%입니다.
          월 50만원 납입 기준, 일반형(6%)은 월 3만원·3년 총 108만원, 우대형(12%)은 월 6만원·3년 총 216만원을 정부가 지급합니다.
          총급여 6,000만~7,500만원 구간은 비과세 혜택만 적용됩니다.
        </p>
      </div>

      {/* ── 1. 기여금 계산기 ── */}
      <section className="detail-card" id="calculator">
        <h2 className="detail-card-head">내 유형이면 3년간 기여금 얼마?</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
            가입 유형과 월 납입액을 선택하면 3년 기여금 합계를 계산합니다.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                월 납입액
              </label>
              <select
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value))}
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-xs)', fontSize: 14 }}
              >
                {[100000, 200000, 300000, 400000, 500000].map((v) => (
                  <option key={v} value={v}>
                    {v / 10000}만원
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                가입 유형
              </label>
              <select
                value={selectedKey}
                onChange={(e) => setSelectedKey(e.target.value)}
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-xs)', fontSize: 14 }}
              >
                {TIERS.map((t) => (
                  <option key={t.key} value={t.key}>
                    {t.rate > 0 ? `${t.rate}% — ${t.key}` : '비과세만'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 결과 */}
          <div style={{ background: 'var(--success-bg)', borderRadius: 'var(--radius-sm)', padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>3년간 정부 기여금 합계</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: tier.rate > 0 ? 'var(--success)' : 'var(--text-muted)', marginTop: 4 }}>
              {tier.rate > 0 ? `${(total3y / 10000).toFixed(0)}만원` : '0원 (비과세만)'}
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8 }}>
              {tier.rate > 0
                ? `월 ${(monthlyContrib / 10000).toFixed(1)}만원 × 36개월 | 내 납입 총액 ${(totalDeposit3y / 10000).toFixed(0)}만원`
                : '이자소득세 면제만 적용됩니다'}
            </div>
          </div>

          <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 12, textAlign: 'center' }}>
            ※ 월 납입금 기준 비율 적용. 실제 금액은 금융기관에 따라 다를 수 있습니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* ── 2. 유형별 기여금표 ── */}
      <section className="detail-card" id="table">
        <h2 className="detail-card-head">유형별 기여금, 월 50만원 기준</h2>
        <div className="detail-card-body" style={{ padding: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <caption className="sr-only">청년미래적금 가입 유형별 기여금</caption>
              <thead>
                <tr>
                  <th scope="col">유형</th>
                  <th scope="col">기여금 비율</th>
                  <th scope="col">월 기여금</th>
                  <th scope="col" className="highlight">3년 합계</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="compare-label">우대형 (4가지 중 1가지)</td>
                  <td style={{ fontWeight: 700, color: 'var(--success)' }}>12%</td>
                  <td>6만원</td>
                  <td style={{ fontWeight: 700 }}>216만원</td>
                </tr>
                <tr>
                  <td className="compare-label">일반형 (소상공인/일반 근로자)</td>
                  <td style={{ fontWeight: 700 }}>6%</td>
                  <td>3만원</td>
                  <td style={{ fontWeight: 700 }}>108만원</td>
                </tr>
                <tr>
                  <td className="compare-label">비과세만 (총급여 6,000만~7,500만)</td>
                  <td>없음</td>
                  <td>0원</td>
                  <td>비과세만</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: '12px 20px', fontSize: 12, color: 'var(--text-muted)', borderTop: '1px solid var(--border-light)' }}>
            ※ 월 50만원 최대 납입 기준. 출처: 금융위원회 카드뉴스 2026.04.24
          </div>
        </div>
      </section>

      {/* ── 3. 우대형 vs 일반형 자격 상세 ── */}
      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">우대형(12%) vs 일반형(6%) 자격 조건</h2>
        <div className="detail-card-body" style={{ padding: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <caption className="sr-only">우대형 일반형 자격 조건 상세</caption>
              <thead>
                <tr>
                  <th scope="col">구분</th>
                  <th scope="col">대상</th>
                  <th scope="col">소득 조건</th>
                  <th scope="col">가구소득</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={4} style={{ fontWeight: 700, color: 'var(--success)', verticalAlign: 'middle' }}>
                    우대형 12%
                  </td>
                  <td>소상공인</td>
                  <td>연매출 1억원 이하</td>
                  <td>중위 150% 이하</td>
                </tr>
                <tr>
                  <td>재직자</td>
                  <td>총급여 3,600만원 이하</td>
                  <td>중위 150% 이하</td>
                </tr>
                <tr>
                  <td>신규취업</td>
                  <td>2025년 최초취업 + 중소기업 + 6,000만원 이하</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>중소기업 장기재직</td>
                  <td>29개월 이상 재직</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td rowSpan={2} style={{ fontWeight: 700, verticalAlign: 'middle' }}>
                    일반형 6%
                  </td>
                  <td>소상공인</td>
                  <td>연매출 3억원 이하</td>
                  <td>중위 200% 이하</td>
                </tr>
                <tr>
                  <td>일반 근로자</td>
                  <td>총급여 6,000만원 이하</td>
                  <td>중위 200% 이하</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700 }}>비과세만</td>
                  <td>근로자</td>
                  <td>총급여 6,000만~7,500만원</td>
                  <td>중위 200% 이하</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="source-inline" style={{ padding: '12px 16px' }}>
            출처:{' '}
            <a href="https://www.fsc.go.kr/no040101?cnId=3187" target="_blank" rel="noopener noreferrer">
              금융위원회 카드뉴스 (2026.04.24)
            </a>
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>
    </>
  );
}

export const ContribSpokeContent: SpokeData = {
  h1: '청년미래적금 정부기여금, 6%·12% 내 소득이면 얼마?',
  breadcrumb: '기여금 계산',
  description: '청년미래적금 기여금 계산기. 우대형 12%·일반형 6%·비과세 유형별 자격과 3년 기여금 합계를 확인하세요.',
  datePublished: '2026-04-24T09:00:00+09:00',
  dateModified: '2026-05-13T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기여금은 매달 통장에 들어오나요?',
      a: '아닙니다. 매월 적립되어 만기 또는 특별 중도해지 시 한 번에 지급됩니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '우대형과 일반형 중 어떻게 결정되나요?',
      a: '가입 신청 시 제출한 소득·매출·재직 증빙 서류를 기준으로 금융기관이 판단합니다. 조�