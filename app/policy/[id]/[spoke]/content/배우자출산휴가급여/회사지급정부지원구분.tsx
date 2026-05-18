import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          배우자 출산휴가 급여는 <strong>우선지원대상기업 근로자는 정부(고용보험)</strong>가 지원하고,
          <strong>대규모기업 근로자는 사업주</strong>가 부담합니다.
          두 경우 모두 <strong>통상임금 100% 유급</strong>이며,
          정부 지원 상한은 <strong>월 약 168만원</strong>입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        내가 다니는 회사가 어느 유형인지에 따라 급여를 신청하는 곳이 달라집니다.
        본인 상황을 먼저 확인하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">기업 규모별 급여 부담 주체 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>우선지원대상기업</th><th>대규모기업</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>급여 지급 주체</strong></td><td>고용보험(정부)</td><td>사업주(회사)</td></tr>
              <tr><td><strong>지급 상한</strong></td><td>월 약 168만원</td><td>통상임금 100%</td></tr>
              <tr><td><strong>근로자 신청</strong></td><td>고용24에서 직접 신청</td><td>신청 없음 (회사가 지급)</td></tr>
              <tr><td><strong>해당 기업</strong></td><td>업종별 일정 인원 이하</td><td>우선지원대상 외 기업</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="criteria">
        <h2 className="detail-card-head">우선지원대상기업 업종별 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>업종</th><th>상시 근로자 수</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>제조업</strong></td><td>500인 이하</td></tr>
              <tr><td><strong>광업·건설·운수·통신</strong></td><td>300인 이하</td></tr>
              <tr><td><strong>도소매·서비스업 등</strong></td><td>100인 이하</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">우선지원대상기업 근로자 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 고용24(work24.go.kr) → 배우자 출산휴가급여 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 가까운 고용센터
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
            20일 유급 기준, 분할 사용 방법, 비과세 여부까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/spouse-birth-leave-pay" className="btn-cta">
            배우자 출산휴가급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 배우자출산휴가급여회사지급정부지원구분SpokeContent: SpokeData = {
  h1: '배우자 출산휴가 급여 회사가 부담하는지 정부가 지원하는지 구분 방법',
  breadcrumb: '회사지급정부지원구분',
  description:
    '배우자 출산휴가급여: 우선지원대상기업(정부 전액·월 168만원 상한) vs 대규모기업(사업주 부담). 제조업 500인·건설 300인·서비스 100인 이하 우선지원대상. 고용24(work24.go.kr) 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '대규모기업 근로자는 정부 급여를 하나도 못 받나요?',
      a: '배우자 출산휴가는 사업주 부담이 원칙입니다. 출산전후휴가와 달리 대규모기업 근로자에 대한 정부 구간 분리 지원이 없습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '회사가 급여를 안 줄 경우 어떻게 하나요?',
      a: '배우자 출산휴가는 유급 의무가 있으므로, 급여를 지급하지 않는 사업주는 고용노동부에 진정을 제기할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '스타트업도 우선지원대상기업인가요?',
      a: '업종에 따라 다릅니다. 대부분의 스타트업(서비스업)은 100인 이하이면 우선지원대상기업에 해당합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '우선지원대상 여부는 어디서 확인하나요?',
      a: '고용24(work24.go.kr) 또는 고용센터에서 사업장 정보를 조회하면 우선지원대상기업 해당 여부를 확인할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://work24.go.kr',
    },
    {
      q: '대위 신청이란 무엇인가요?',
      a: '사업주가 근로자 대신 급여를 미리 지급한 뒤 고용보험에서 환급받는 방식입니다. 우선지원대상기업에서 사업주가 급여를 지급한 경우 활용할 수 있습니다.',
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
