import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          우선지원대상기업 근로자는 <strong>90일 전기간 고용보험에서 지원</strong>받고,
          대규모기업 근로자는 <strong>최초 60일은 회사, 마지막 30일만 정부</strong>가 지원합니다.
          두 경우 모두 정부 지원 상한액은 <strong>월 최대 210만원</strong>이며,
          통상임금이 낮으면 통상임금 전액을 받습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        같은 출산전후휴가라도 사업장 규모에 따라 정부 지원 범위가 크게 다릅니다.
        본인이 어느 기업에 해당하는지 먼저 파악하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">우선지원대상기업 vs 대규모기업 전체 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>우선지원대상기업</th><th>대규모기업</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>최초 60일 (다태아 75일)</strong></td><td>고용보험 지원</td><td>사업주 부담</td></tr>
              <tr><td><strong>마지막 30일 (다태아 45일)</strong></td><td>고용보험 지원</td><td>고용보험 지원</td></tr>
              <tr><td><strong>정부 지원 상한</strong></td><td>월 최대 210만원 (전기간)</td><td>월 최대 210만원 (30일만)</td></tr>
              <tr><td><strong>기업 판단 기준</strong></td><td>업종별 근로자 수 기준</td><td>우선지원대상기업 外</td></tr>
              <tr><td><strong>신청자</strong></td><td>근로자 (고용24)</td><td>근로자 (고용24, 30일 구간)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="choice">
        <h2 className="detail-card-head">우선지원대상기업 업종별 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>업종</th><th>상시 근로자 수</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>제조업</strong></td><td>500인 이하</td></tr>
              <tr><td><strong>광업·건설업·운수업·통신업</strong></td><td>300인 이하</td></tr>
              <tr><td><strong>도소매업·서비스업 등</strong></td><td>100인 이하</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tip">
        <h2 className="detail-card-head">대규모기업 근로자 유의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>최초 60일:</strong> 회사가 통상임금 100% 지급 의무 — 미지급 시 진정 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>마지막 30일:</strong> 근로자가 직접 고용24에서 신청
          </div>
          <div className="info-box">
            <strong>신청 기한:</strong> 휴가 종료 후 12개월 이내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            출산전후휴가급여 지급 금액, 신청 방법, 비과세 여부까지<br />
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

export const 출산전후휴가급여우선지원대규모기업비교SpokeContent: SpokeData = {
  h1: '우선지원대상기업과 대규모기업, 출산전후휴가급여 지급 범위 어떻게 다른가',
  breadcrumb: '우선지원대규모기업비교',
  description:
    '출산전후휴가급여: 우선지원대상기업(90일 전기간 정부 지원) vs 대규모기업(최초 60일 회사+마지막 30일 정부). 상한액 동일 월 210만원. 제조업 500인 이하, 도소매 100인 이하 기준.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '대규모기업이면 정부 지원을 전혀 못 받나요?',
      a: '아닙니다. 대규모기업 근로자도 마지막 30일(다태아 45일)에 대해 고용보험에서 월 최대 210만원을 지원받을 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '100인 이하 서비스업이면 우선지원대상기업인가요?',
      a: '네. 도소매업, 서비스업 등은 상시 근로자 100인 이하이면 우선지원대상기업에 해당합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '회사 규모가 중간에 바뀌면 어떻게 되나요?',
      a: '출산전후휴가 시작 시점의 사업장 규모를 기준으로 적용됩니다. 휴가 중 규모가 변동되더라도 시작 시점 기준으로 판단합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '프리랜서나 계약직도 받을 수 있나요?',
      a: '고용보험에 가입된 근로자라면 계약직도 수급 가능합니다. 프리랜서는 고용보험 가입 형태(예술인·노무제공자 등)에 따라 다릅니다.',
      source: '고용노동부',
      sourceUrl: 'https://work24.go.kr',
    },
    {
      q: '고용24 말고 다른 방법으로 신청할 수 있나요?',
      a: '가까운 고용센터를 직접 방문해 신청할 수도 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://work24.go.kr' },
    { name: '찾기쉬운 생활법령정보', url: 'https://www.easylaw.go.kr' },
  ],
};
