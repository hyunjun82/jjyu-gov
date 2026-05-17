'use client';
import { useState } from 'react';
import type { SpokeData } from '../SpokeClient';

type Decision = null | 'special' | 'wait' | 'cancel';

const decisionResult: Record<Exclude<Decision, null>, { title: string; desc: string; ok: boolean }> = {
  special: {
    title: '특별 중도해지 사유에 해당합니다',
    desc: '기여금을 돌려받고 이자소득세 비과세도 유지됩니다. 취급 금융기관 앱 또는 영업점에서 사유 증빙 서류와 함께 신청하세요.',
    ok: true,
  },
  wait: {
    title: '만기까지 유지하는 것이 유리합니다',
    desc: '3년 만기 후 수령하면 기여금 전액과 비과세를 모두 받습니다. 납입이 부담스러우면 해당 월에 납입을 쉬어도 계좌는 유지됩니다.',
    ok: true,
  },
  cancel: {
    title: '일반 중도해지: 기여금 전액 환수',
    desc: '기여금이 전부 환수되고 이자소득세(15.4%)도 부과됩니다. 일반 적금 금리만 적용됩니다. 해지 전에 다시 한번 특별 사유에 해당하는지 확인하세요.',
    ok: false,
  },
};

function Content() {
  const [decision, setDecision] = useState<Decision>(null);
  const r = decision ? decisionResult[decision] : null;

  return (
    <>
      <div className="answer-box">
        <p>
          청년미래적금을 중도해지하면 정부기여금이 전액 환수되고, 이자소득세 15.4%가 부과됩니다.
          단, 사망·해외이주·천재지변·퇴직·6개월 이상 입원 등 특별 사유에 해당하면 기여금을 보전받을 수 있습니다.
          도약계좌에서 미래적금으로 갈아타기(2026.6 한정)도 특별 중도해지로 인정됩니다.
        </p>
      </div>

      {/* ── 1. 의사결정 체커 ── */}
      <section className="detail-card" id="checker">
        <h2 className="detail-card-head">내 상황에 맞는 결과를 확인하세요</h2>
        <div className="detail-card-body">
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
            현재 상황에 해당하는 항목을 선택하세요.
          </p>

          <fieldset className="elig-fieldset">
            <legend className="sr-only">중도해지 사유 확인</legend>

            <div
              className={`elig-item ${decision === 'special' ? 'pass' : ''}`}
              onClick={() => setDecision('special')}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ flex: 1 }}>
                <span className="elig-q">사망·해외이주·천재지변·퇴직(실직)·6개월 이상 입원 중 하나에 해당한다</span>
              </div>
            </div>

            <div
              className={`elig-item ${decision === 'special' ? 'pass' : ''}`}
              onClick={() => setDecision('special')}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ flex: 1 }}>
                <span className="elig-q">청년도약계좌를 미래적금으로 갈아타고 싶다 (2026년 6월)</span>
              </div>
            </div>

            <div
              className={`elig-item ${decision === 'wait' ? 'pass' : ''}`}
              onClick={() => setDecision('wait')}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ flex: 1 }}>
                <span className="elig-q">이번 달만 납입이 어렵다 (긴급 자금 부족)</span>
              </div>
            </div>

            <div
              className={`elig-item ${decision === 'cancel' ? 'fail' : ''}`}
              onClick={() => setDecision('cancel')}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ flex: 1 }}>
                <span className="elig-q">위 항목에 해당하지 않고 그냥 해지하려 한다</span>
              </div>
            </div>
          </fieldset>

          {r && (
            <div className={`elig-result ${r.ok ? 'pass' : 'fail'}`} style={{ marginTop: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: r.ok ? 'var(--success)' : 'var(--danger)' }}>
                {r.title}
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8, lineHeight: 1.7 }}>
                {r.desc}
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* ── 2. 일반 vs 특별 중도해지 비교 ── */}
      <section className="detail-card" id="types">
        <h2 className="detail-card-head">일반 해지 vs 특별 해지, 무엇이 다른가?</h2>
        <div className="detail-card-body" style={{ padding: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <caption className="sr-only">일반 중도해지와 특별 중도해지 비교</caption>
              <thead>
                <tr>
                  <th scope="col">항목</th>
                  <th scope="col" className="highlight">특별 중도해지</th>
                  <th scope="col">일반 중도해지</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="compare-label">정부기여금</td>
                  <td style={{ fontWeight: 600, color: 'var(--success)' }}>보전 (환수 없음)</td>
                  <td style={{ fontWeight: 600, color: 'var(--danger)' }}>전액 환수</td>
                </tr>
                <tr>
                  <td className="compare-label">이자소득세</td>
                  <td style={{ fontWeight: 600, color: 'var(--success)' }}>비과세 유지</td>
                  <td style={{ fontWeight: 600, color: 'var(--danger)' }}>15.4% 과세</td>
                </tr>
                <tr>
                  <td className="compare-label">적용 금리</td>
                  <td>약정 금리 적용</td>
                  <td>일반 적금 금리만</td>
                </tr>
                <tr>
                  <td className="compare-label">중도인출</td>
                  <td className="text-danger">불가 (전액 해지만 가능)</td>
                  <td className="text-danger">불가 (전액 해지만 가능)</td>
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

      {/* ── 3. 특별 중도해지 사유 ── */}
      <section className="detail-card" id="special">
        <h2 className="detail-card-head">특별 중도해지 인정 사유</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            아래 사유에 해당하면 가입 기간과 관계없이 정부기여금이 보전되고 비과세도 유지됩니다.
          </div>
          <div className="info-checklist">
            <strong>기여금 보전 사유</strong>
            <ul>
              <li><span className="check-icon">&#10003;</span> 사망 / 해외이주</li>
              <li><span className="check-icon">&#10003;</span> 천재지변</li>
              <li><span className="check-icon">&#10003;</span> 퇴직 (실직 포함)</li>
              <li><span className="check-icon">&#10003;</span> 6개월 이상 입원 치료가 필요한 상해·질병</li>
              <li><span className="check-icon">&#10003;</span> 청년도약계좌 → 청년미래적금 갈아타기 (2026년 6월 한정)</li>
            </ul>
          </div>
          <div className="warning-box">
            <strong>중도인출 없음:</strong> 청년미래적금은 부분 인출을 지원하지 않습니다.
            자금이 필요하면 전액 해지만 가능하므로, 특별 사유 해당 여부를 먼저 확인하세요.
          </div>
          <p className="source-inline">
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

export const CancelSpokeContent: SpokeData = {
  h1: '청년미래적금 중도해지하면 기여금 전액 환수',
  breadcrumb: '중도해지',
  description: '청년미래적금 중도해지 시 정부기여금 전액 환수·비과세 소멸. 특별 중도해지 사유 5가지와 갈아타기 조건.',
  datePublished: '2026-04-24T09:00:00+09:00',
  dateModified: '2026-05-13T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '이번 달 납입을 못 하면 해지되나요?',
      a: '아닙니다. 자유적립식이므로 납입하지 않아도 계좌는 유지됩니다. 해당 월 기여금만 발생하지 않습니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '중도해지 후 재가입할 수 있나요?',
      a: '재가입 가능 여부는 금융기관 정책에 따라 다릅니다. 연 2회(6월·12월) 모집 기간에 다시 신청해야 합니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '퇴직하면 특별 중도해지가 되나요?',
      a: '가능합니다. 퇴직(실직)은 특별 중도해지 사유에 해당하며, 기여금 보전과 비과세가 유지됩니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '도약계좌 갈아타기도 특별 중도해지인가요?',
      a: '네. 2026년 6월에 한해 청년도약계좌를 청년미래적금으로 갈아타는 경우, 특별 중도해지로 인정되어 기여금과 비과세 혜택이 유지됩니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '일반 해지 시 원금은 돌려받나요?',
      a: '원금(납입금)은 전액 돌려받습니다. 다만 기여금은 환수되고, 이자에는 15.4% 세금이 붙으며 일반 적금 금리만 적용됩니다.',
      source: '금융위원회 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
  ],
  sources: [
    { name: '금융위원회 카드뉴스 (2026.04.24)', url: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { name: '금융위원회', url: 'https://www.fsc.go.kr' },
    { name: '서민금융진흥원', url: 'https://www.kinfa.or.kr' },
  ],
};
