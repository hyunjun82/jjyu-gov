import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          출산전후휴가급여는 <strong>고용24(work24.go.kr)</strong>에서 온라인 신청하거나
          가까운 고용센터를 방문해 신청합니다.
          급여는 <strong>비과세</strong>(소득세 제외) 적용되며,
          피보험단위기간 <strong>180일 이상</strong>이 신청 조건입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        신청 시기를 놓치면 받을 수 없으니 휴가 시작 후 바로 신청하세요.
        비과세 여부와 급여 계산 기준도 함께 확인하세요.
      </p>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 고용24 (work24.go.kr) → 출산전후휴가급여 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 가까운 고용센터 (신분증 지참)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 기한:</strong> 휴가 종료일로부터 12개월 이내
          </div>
          <div className="info-box">
            <strong>신청 가능 시점:</strong> 출산전후휴가 시작일 이후부터
          </div>
        </div>
      </section>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">신청 자격 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>요건</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>피보험 기간</strong></td><td>휴가 종료일 이전 180일 이상</td></tr>
              <tr><td><strong>고용보험 가입</strong></td><td>필수 (미가입 시 지원 불가)</td></tr>
              <tr><td><strong>소득 발생 제한</strong></td><td>휴가 중 월 150만원 이상 소득 발생 시 지급 제한</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tax">
        <h2 className="detail-card-head">비과세 여부</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>비과세 적용:</strong> 출산전후휴가급여는 소득세법 제12조에 따라 비과세
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강보험료:</strong> 비과세 급여이므로 건강보험료 산정에 미포함
          </div>
          <div className="info-box">
            <strong>연말정산:</strong> 비과세 소득으로 처리 (별도 신고 불필요)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            우선지원대상기업 기준, 회사·정부 구간 구분, 지급 금액 비교까지<br />
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

export const 출산전후휴가급여신청방법비과세계산SpokeContent: SpokeData = {
  h1: '출산전후휴가급여 신청 방법과 비과세 여부, 급여 계산 방법 정리',
  breadcrumb: '신청방법비과세계산',
  description:
    '출산전후휴가급여 신청: 고용24(work24.go.kr) 온라인 또는 고용센터 방문. 휴가 종료 후 12개월 내. 피보험 180일 이상 필수. 비과세 적용(소득세법 제12조). 월 최대 210만원.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '출산전후휴가급여는 소득세가 붙지 않나요?',
      a: '네. 출산전후휴가급여는 소득세법 제12조에 따라 비과세 소득에 해당합니다. 연말정산 시 별도 신고 없이 비과세 처리됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '피보험단위기간 180일을 채우지 못하면 어떻게 되나요?',
      a: '피보험단위기간이 180일 미만이면 출산전후휴가급여를 받을 수 없습니다. 근무 기간이 짧다면 사업주를 통해 피보험 기간을 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '휴가 중 아르바이트를 하면 급여가 줄어드나요?',
      a: '휴가 중 월 150만원 이상의 소득이 발생하면 출산전후휴가급여가 지급되지 않습니다. 주 15시간 이상 취업 시에도 동일하게 지급이 제한됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://work24.go.kr',
    },
    {
      q: '고용24 없이 방문 신청만 가능한가요?',
      a: '고용24(work24.go.kr) 온라인 신청과 고용센터 방문 신청 모두 가능합니다. 온라인 신청이 더 빠르고 편리합니다.',
      source: '고용노동부',
      sourceUrl: 'https://work24.go.kr',
    },
    {
      q: '급여 계산은 어떻게 하나요?',
      a: '출산전후휴가급여는 통상임금 × 일수로 계산합니다. 월 통상임금이 210만원 이상이면 상한액인 210만원이 지급됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://work24.go.kr' },
    { name: '국세청', url: 'https://www.nts.go.kr' },
  ],
};
