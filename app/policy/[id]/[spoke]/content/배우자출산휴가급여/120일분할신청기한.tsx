import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          배우자 출산휴가는 출산일로부터 <strong>120일 이내</strong>에 사용해야 하며,
          <strong>3회까지 분할</strong> 사용할 수 있습니다.
          급여 신청 기한은 <strong>휴가 종료일 이후 12개월 이내</strong>이며,
          이 기한을 넘기면 급여를 받을 수 없습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        분할 사용 방법과 각 구간별 신청 기한을 정확히 파악하면
        바쁜 중에도 급여를 빠짐없이 챙길 수 있습니다.
      </p>

      <section className="detail-card" id="period">
        <h2 className="detail-card-head">사용 기간과 분할 규정</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>사용 가능 기간</strong></td><td>출산일로부터 120일 이내</td></tr>
              <tr><td><strong>분할 횟수</strong></td><td>최대 3회</td></tr>
              <tr><td><strong>최소 사용 일수</strong></td><td>없음 (1일도 가능)</td></tr>
              <tr><td><strong>총 사용 일수</strong></td><td>20일 (합산 기준)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="deadline">
        <h2 className="detail-card-head">급여 신청 기한</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 가능 시점:</strong> 각 휴가 구간 시작 후 1개월부터
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 마감:</strong> 각 구간 종료일로부터 12개월 이내
          </div>
          <div className="info-box">
            <strong>주의:</strong> 기한 초과 시 해당 구간 급여 지급 불가
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="example">
        <h2 className="detail-card-head">분할 사용 예시</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1차:</strong> 출산 직후 10일 사용 → 1개월 후부터 고용24 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2차:</strong> 출산 후 60일째 5일 사용 → 구간 종료 후 신청
          </div>
          <div className="info-box">
            <strong>3차:</strong> 출산 후 100일째 5일 사용 → 120일 이내 완료
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            급여 상한액, 우선지원대상기업 여부, 신청 서류까지<br />
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

export const 배우자출산휴가급여120일분할신청기한SpokeContent: SpokeData = {
  h1: '배우자 출산휴가 120일 이내 3회 분할 사용, 신청 기한 놓치면 못 받는 이유',
  breadcrumb: '120일분할신청기한',
  description:
    '배우자 출산휴가 출산일 120일 이내 사용, 최대 3회 분할 가능. 각 구간 종료 후 12개월 이내 고용24 신청 필수. 기한 초과 시 해당 구간 급여 불가. 통상임금 100% 월 최대 168만원.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '출산일 기준인가요, 출산 예정일 기준인가요?',
      a: '실제 출산일 기준입니다. 출산일로부터 120일 이내에 휴가를 모두 사용해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '3회 분할 중 1회를 1일만 사용해도 되나요?',
      a: '최소 사용 일수 제한이 없으므로 1일만 사용해도 됩니다. 단 총 20일을 초과할 수 없습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '신청 기한 12개월을 넘기면 정말 받을 수 없나요?',
      a: '고용보험법에 따라 신청 기한(각 구간 종료 후 12개월)을 초과하면 해당 구간의 급여를 받을 수 없습니다.',
      source: '고용노동부',
      sourceUrl: 'https://work24.go.kr',
    },
    {
      q: '배우자가 쌍둥이를 낳았을 때 120일 기준이 달라지나요?',
      a: '다태아라도 배우자 출산휴가의 사용 기한(120일)은 동일합니다. 다만 출산전후휴가는 다태아 기준이 별도입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '회사가 분할 사용을 거부할 수 있나요?',
      a: '사업주는 근로자가 청구한 시기에 배우자 출산휴가를 부여해야 합니다. 정당한 이유 없는 거부는 근로기준법 위반입니다.',
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
