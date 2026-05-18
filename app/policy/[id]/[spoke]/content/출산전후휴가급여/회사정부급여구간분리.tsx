import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          출산전후휴가 90일 중 <strong>최초 60일은 유급 처리</strong>되며,
          우선지원대상기업은 <strong>정부(고용보험)가 전기간 지원</strong>하고
          대규모기업은 <strong>최초 60일은 회사, 마지막 30일은 정부</strong>가 부담합니다.
          다태아는 최초 75일 + 마지막 45일로 구분됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        회사가 내는 구간인지, 정부가 내는 구간인지에 따라 신청처가 달라집니다.
        본인 상황에 맞는 구간을 확인하세요.
      </p>

      <section className="detail-card" id="period">
        <h2 className="detail-card-head">90일 구간별 부담 주체</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구간</th><th>우선지원대상기업</th><th>대규모기업</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>최초 60일 (다태아 75일)</strong></td><td>고용보험(정부) 지원</td><td>사업주(회사) 부담</td></tr>
              <tr><td><strong>마지막 30일 (다태아 45일)</strong></td><td>고용보험(정부) 지원</td><td>고용보험(정부) 지원</td></tr>
              <tr><td><strong>지급 상한</strong></td><td>월 최대 210만원</td><td>마지막 30일 월 최대 210만원</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="paid">
        <h2 className="detail-card-head">유급 처리 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>유급 구간:</strong> 최초 60일 (다태아 75일) — 근로기준법에 따라 유급 의무
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>급여 기준:</strong> 통상임금 100% 지급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>마지막 30일:</strong> 무급이지만 고용보험에서 최대 월 210만원 지원
          </div>
          <div className="info-box">
            <strong>출산 전후 배분:</strong> 출산 후 45일 이상 반드시 확보해야 함
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>우선지원대상기업:</strong> 근로자가 직접 고용24(work24.go.kr) 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대규모기업 마지막 30일:</strong> 근로자가 고용24에서 신청
          </div>
          <div className="info-box">
            <strong>신청 기한:</strong> 휴가 종료일 이후 12개월 이내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            출산전후휴가급여 지급 기준, 비과세 여부, 신청 절차까지<br />
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

export const 출산전후휴가급여회사정부급여구간분리SpokeContent: SpokeData = {
  h1: '출산휴가 90일 중 회사가 주는 구간과 정부가 지원하는 구간 어떻게 나뉘나',
  breadcrumb: '회사정부급여구간분리',
  description:
    '출산전후휴가 90일 구간 분리: 우선지원대상기업은 전기간 고용보험 지원, 대규모기업은 최초 60일 회사+마지막 30일 정부. 다태아 75일+45일. 통상임금 100%, 월 최대 210만원. 고용24 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '최초 60일 급여를 회사에서 안 주면 어떻게 하나요?',
      a: '사업주는 근로기준법에 따라 최초 60일을 유급으로 처리할 의무가 있습니다. 지급하지 않으면 고용노동부에 진정을 제기할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '출산 전에 모두 쓰고 출산 후 45일을 못 채우면 어떻게 되나요?',
      a: '출산 후 45일(다태아 60일) 이상의 휴가를 반드시 확보해야 합니다. 이를 위반한 사업주는 형사처벌 대상입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '대규모기업 근로자가 고용보험에서 급여를 받으려면 언제 신청하나요?',
      a: '마지막 30일(다태아 45일)이 시작된 이후에 고용24(work24.go.kr)에 신청합니다. 휴가 종료 후 12개월 이내에 신청해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://work24.go.kr',
    },
    {
      q: '통상임금이 210만원을 초과하면 차액은 누가 주나요?',
      a: '통상임금이 정부 상한액(월 210만원)을 초과하는 경우, 차액분은 사업주가 지급할 의무가 없습니다. 정부는 상한액 내에서만 지원합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '분할 사용할 수 있나요?',
      a: '출산전후휴가는 1회에 한해 분할 사용할 수 있습니다. 출산 후 45일 이상 확보 조건은 분할 시에도 동일하게 적용됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://work24.go.kr' },
    { name: '찾기쉬운 생활법령정보', url: 'https://www.easylaw.go.kr' },
  ],
};
