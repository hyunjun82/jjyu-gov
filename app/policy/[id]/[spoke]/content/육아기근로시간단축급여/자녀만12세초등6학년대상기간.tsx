import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          육아기 근로시간 단축은 <strong>만 12세 이하(초등학교 6학년 이하)</strong> 자녀를 양육하는
          근로자가 신청할 수 있습니다.
          고용보험 피보험자격 <strong>180일 이상</strong>이어야 하며,
          자녀당 최대 <strong>2년(육아휴직 미사용 기간 합산 최대 3년)</strong>까지 사용 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        2024년 법 개정으로 대상 연령이 만 8세(초등 2학년)에서 만 12세(초등 6학년)로 확대되었습니다.
        초등학교 입학 이후에도 방과 후 돌봄이 어려운 경우 활용할 수 있습니다.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>요건</th><th>기준</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>자녀 연령</strong></td><td>만 12세 이하 (초등 6학년 이하)</td><td>2024년 개정 확대</td></tr>
              <tr><td><strong>고용보험</strong></td><td>피보험자격 180일 이상</td><td>과거 모든 사업장 합산</td></tr>
              <tr><td><strong>근로 형태</strong></td><td>주 40시간 이상 근무자 (주 15시간 미만 단시간 제외)</td><td>단시간근로자 예외 있음</td></tr>
              <tr><td><strong>육아휴직 이력</strong></td><td>해당 자녀로 미사용 기간 있으면 합산 가능</td><td>합산 최대 3년</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="period">
        <h2 className="detail-card-head">사용 가능 기간</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기본:</strong> 자녀당 최대 2년 (육아휴직 미사용 기간 가산)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>합산 최대:</strong> 육아휴직과 합산 자녀당 최대 3년
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>예시:</strong> 육아휴직 1년 + 단축급여 2년 = 합산 3년
          </div>
          <div className="info-box">
            <strong>분할 사용:</strong> 자녀 만 12세 이내에서 나눠서 사용 가능 (최대 3회 분할)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="age-change">
        <h2 className="detail-card-head">연령 확대 적용 기준 (2024년 개정)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>개정 전</th><th>개정 후 (현행)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>신청 대상 자녀 연령</strong></td><td>만 8세 또는 초등 2학년 이하</td><td>만 12세 또는 초등 6학년 이하</td></tr>
              <tr><td><strong>최대 사용 기간</strong></td><td>합산 1년</td><td>합산 최대 3년 (단축 단독 2년)</td></tr>
              <tr><td><strong>시행일</strong></td><td>—</td><td>2024년 개정 적용</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            급여 계산, 신청 방법, 육아휴직과 차이까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/parental-work-reduction-pay" className="btn-cta">
            육아기 근로시간 단축급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 육아기근로시간단축급여자녀만12세초등6학년대상기간SpokeContent: SpokeData = {
  h1: '육아기 근로시간 단축 대상, 만 12세 초등 6학년까지 최대 3년 사용 기준',
  breadcrumb: '자녀만12세초등6학년대상기간',
  description:
    '육아기 근로시간 단축: 만 12세(초등 6학년) 이하 자녀 양육, 고용보험 180일 이상. 자녀당 최대 2년(육아휴직 합산 3년). 2024년 개정으로 만 8세→12세 확대. 분할 최대 3회. ☎1350.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '자녀가 초등 6학년인데 아직 신청할 수 있나요?',
      a: '네. 만 12세 이하(초등 6학년)까지 신청 가능합니다. 단, 단축 기간 중 자녀가 만 12세를 넘기면 그 이후에는 단축급여가 종료됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '고용보험 180일 기준은 현재 직장만 해당하나요?',
      a: '아닙니다. 고용보험 피보험자격 180일은 과거 모든 사업장의 가입 기간을 합산합니다. 이직 후 새 직장에서도 합산 180일이 넘으면 신청 가능합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '자녀가 2명이면 각각 별도로 사용할 수 있나요?',
      a: '네. 자녀당 별도로 최대 2년(합산 3년)이 부여됩니다. 자녀가 2명이면 각각 해당 자녀의 만 12세 이내에서 별도로 신청할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '분할 사용이란 무엇이고 몇 번까지 가능한가요?',
      a: '단축급여를 한 번에 연속으로 사용하지 않고 나눠서 사용하는 것입니다. 최대 3회까지 분할하여 사용할 수 있습니다. 예: 1년 사용 → 복직 → 6개월 사용 → 복직 → 남은 기간 사용.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '육아휴직을 이미 1년 다 사용했으면 단축급여는 얼마나 쓸 수 있나요?',
      a: '육아휴직 1년을 이미 사용한 경우, 합산 최대 3년에서 1년을 제한 2년까지 단축급여를 사용할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 육아기 근로시간 단축급여', url: 'https://www.moel.go.kr' },
    { name: '고용보험 누리집', url: 'https://www.ei.go.kr' },
  ],
};
