import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          배우자 출산휴가는 <strong>20일 전부 유급</strong>이며,
          급여는 <strong>통상임금 100%</strong>로 지급됩니다.
          우선지원대상기업 근로자는 <strong>고용보험에서 전액 지원</strong>되며,
          상한액은 <strong>월 약 168만원</strong>입니다.
          신청은 <strong>고용24(work24.go.kr)</strong>에서 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        2025년 2월부터 5일에서 20일로 확대된 배우자 출산휴가 급여를
        빠짐없이 받으려면 지급 기준과 신청 방법을 미리 파악하세요.
      </p>

      <section className="detail-card" id="basic">
        <h2 className="detail-card-head">배우자 출산휴가 기본 정보</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>휴가 일수</strong></td><td>20일 (유급)</td></tr>
              <tr><td><strong>급여 기준</strong></td><td>통상임금 100%</td></tr>
              <tr><td><strong>지급 상한</strong></td><td>월 약 168만원</td></tr>
              <tr><td><strong>사용 기한</strong></td><td>출산일로부터 120일 이내</td></tr>
              <tr><td><strong>분할 사용</strong></td><td>3회까지 분할 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">급여 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 고용24(work24.go.kr) 온라인 또는 고용센터 방문
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 가능 시점:</strong> 휴가 시작 후 1개월부터
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 기한:</strong> 휴가 종료일 이후 12개월 이내
          </div>
          <div className="info-box">
            <strong>자격 요건:</strong> 고용보험 피보험 단위기간 180일 이상
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="support">
        <h2 className="detail-card-head">기업 규모별 지급 주체</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>지급 주체</th><th>상한액</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>우선지원대상기업</strong></td><td>고용보험(정부) 전액 지원</td><td>월 약 168만원</td></tr>
              <tr><td><strong>대규모기업</strong></td><td>사업주 부담 (정부 미지원)</td><td>통상임금 100%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            회사·정부 구간 분리, 비과세 여부, 출산전후휴가급여와 차이까지<br />
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

export const 배우자출산휴가급여배우자출산휴가급여20일유급기준SpokeContent: SpokeData = {
  h1: '배우자 출산휴가 20일 전부 유급, 통상임금 100% 지급 기준과 신청 방법',
  breadcrumb: '배우자출산휴가급여20일유급기준',
  description:
    '배우자 출산휴가 20일 전부 유급, 통상임금 100% 월 최대 168만원. 우선지원대상기업 고용보험 전액 지원. 출산일 120일 이내 3회 분할. 고용24(work24.go.kr) 신청, 180일 이상 피보험 필수.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '배우자 출산휴가 20일은 언제부터 적용됐나요?',
      a: '2025년 2월 23일부터 기존 10일에서 20일로 확대됐습니다. 2026년 기준으로도 20일이 적용됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '20일을 한 번에 사용하지 않아도 되나요?',
      a: '출산일로부터 120일 이내에 3회까지 분할해 사용할 수 있습니다. 최소 사용 일수 제한은 없습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '고용보험 미가입 사업장이면 급여를 못 받나요?',
      a: '고용보험 미가입 사업장 근로자는 정부 급여 지원을 받을 수 없습니다. 사업주는 근로기준법에 따라 유급 처리 의무가 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '상한액 168만원 초과분은 어떻게 되나요?',
      a: '정부 지원 상한(월 약 168만원)을 초과하는 부분은 사업주가 지급할 의무가 없습니다. 통상임금이 높다면 차액 지급은 회사 재량입니다.',
      source: '고용노동부',
      sourceUrl: 'https://work24.go.kr',
    },
    {
      q: '배우자 출산휴가를 쓰지 않으면 급여도 못 받나요?',
      a: '배우자 출산휴가급여는 실제 휴가를 사용한 일수만큼만 지급됩니다. 휴가 미사용 시 급여 신청이 불가합니다.',
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
