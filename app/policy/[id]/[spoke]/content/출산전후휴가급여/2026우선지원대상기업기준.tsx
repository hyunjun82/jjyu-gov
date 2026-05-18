import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>우선지원대상기업</strong> 근로자는 출산전후휴가 <strong>90일 전기간</strong>에 대해
          정부(고용보험)에서 <strong>월 최대 210만원</strong>을 지원합니다.
          대규모기업은 최초 60일은 회사 부담, 마지막 30일만 정부가 지원합니다.
          다태아(쌍둥이 등)는 <strong>120일</strong>이 기준입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        우선지원대상기업 여부에 따라 출산전후휴가급여 지원 범위가 크게 달라집니다.
        본인 사업장이 해당하는지 먼저 확인하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">우선지원대상기업 vs 대규모기업 지원 구분</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>우선지원대상기업</th><th>대규모기업</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>정부 지원 구간</strong></td><td>전기간 90일 (다태아 120일)</td><td>마지막 30일 (다태아 45일)</td></tr>
              <tr><td><strong>회사 부담 구간</strong></td><td>없음 (정부 전액 지원)</td><td>최초 60일 (다태아 75일)</td></tr>
              <tr><td><strong>정부 지원 상한액</strong></td><td>월 최대 210만원</td><td>월 최대 210만원 (30일 구간만)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="standard">
        <h2 className="detail-card-head">우선지원대상기업 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>제조업:</strong> 상시 근로자 500인 이하
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>광업·건설업·운수업·통신업:</strong> 300인 이하
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>도소매업·서비스업 등:</strong> 100인 이하
          </div>
          <div className="info-box">
            <strong>확인 방법:</strong> 고용24(work24.go.kr) 또는 가까운 고용센터 문의
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지급 금액 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>지급 금액</th><th>기간</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>단태아</strong></td><td>통상임금 100% (상한 월 210만원)</td><td>90일</td></tr>
              <tr><td><strong>다태아</strong></td><td>통상임금 100% (상한 월 210만원)</td><td>120일</td></tr>
              <tr><td><strong>유산·사산</strong></td><td>임신 기간에 따라 5~90일</td><td>별도 기준 적용</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            출산전후휴가급여 신청 방법, 비과세 여부, 급여 계산 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/maternity-leave-pay" className="btn-cta">
            출산전후휴가급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 출산전후휴가급여2026우선지원대상기업기준SpokeContent: SpokeData = {
  h1: '2026 출산전후휴가급여 우선지원대상기업 월 최대 210만원 지급 기준',
  breadcrumb: '2026우선지원대상기업기준',
  description:
    '출산전후휴가급여: 우선지원대상기업 90일 전기간 월 최대 210만원 정부 지원, 대규모기업은 마지막 30일만 지원. 다태아 120일. 통상임금 100%. 고용24(work24.go.kr) 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '우선지원대상기업인지 어떻게 확인하나요?',
      a: '고용24(work24.go.kr) 또는 가까운 고용센터에 문의하면 확인할 수 있습니다. 업종별 상시 근로자 수 기준으로 판단합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '통상임금이 210만원보다 낮으면 통상임금 전액을 받나요?',
      a: '네. 통상임금이 상한액(월 210만원)보다 낮으면 통상임금 100%를 지급받습니다. 상한액은 최대 한도입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '대규모기업 근로자는 최초 60일 급여를 어디서 받나요?',
      a: '대규모기업 근로자의 최초 60일(다태아 75일) 휴가급여는 사업주가 지급합니다. 마지막 30일(다태아 45일)은 고용보험에서 최대 월 210만원 지원합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '다태아 출산 시 휴가 기간은 얼마인가요?',
      a: '쌍둥이 등 다태아 출산 시 출산전후휴가는 120일이 부여됩니다. 우선지원대상기업은 120일 전기간, 대규모기업은 마지막 45일에 대해 정부 지원을 받습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '휴가 시작 전에 미리 신청할 수 있나요?',
      a: '출산전후휴가급여는 휴가 시작일 이후에 신청할 수 있습니다. 휴가 종료일로부터 12개월 이내에 신청해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://work24.go.kr' },
    { name: '고용노동부 일생활균형', url: 'https://www.worklife.kr' },
  ],
};
