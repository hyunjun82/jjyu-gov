import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민취업지원제도 1유형 참여자가 취업에 성공하면
          <strong>취업 후 6개월 이상 유지 시 50만원, 12개월 이상 유지 시 100만원</strong>을
          추가로 받아 최대 <strong>150만원의 취업성공수당</strong>을 받을 수 있습니다.
          고용보험에 가입된 직장에 취업하여 안정적으로 근무를 유지해야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        취업성공수당은 구직촉진수당(월 60만원×6개월)과 별도로 지급됩니다.
        취업 후에도 고용센터에 취업 사실을 신고하고 기간 만료 후 수당을 신청해야 합니다.
      </p>

      <section className="detail-card" id="schedule">
        <h2 className="detail-card-head">취업성공수당 지급 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>시점</th><th>금액</th><th>조건</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>취업 후 6개월 시점</strong></td><td>50만원</td><td>고용보험 가입 직장 6개월 이상 근속</td></tr>
              <tr><td><strong>취업 후 12개월 시점</strong></td><td>100만원</td><td>동일 직장 또는 재취업 후 합산 12개월</td></tr>
              <tr><td><strong>합계</strong></td><td>최대 150만원</td><td>6개월 + 12개월 모두 충족 시</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">수령 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>취업 형태:</strong> 고용보험에 가입된 직장 (일용직·단기 계약직 제외 가능)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 국민취업지원 1유형 참여자 중 취업 성공자
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청:</strong> 취업 후 고용센터에 취업 사실 신고 → 6개월·12개월 시점에 수당 신청
          </div>
          <div className="info-box">
            <strong>주의:</strong> 신청을 잊으면 받지 못할 수 있으므로 기간 만료 전 반드시 신청
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="total">
        <h2 className="detail-card-head">1유형 총 수혜 금액 (최대)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>구직촉진수당:</strong> 60만원 × 6개월 = 360만원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>취업성공수당:</strong> 50만원 + 100만원 = 150만원
          </div>
          <div className="info-box">
            <strong>합계:</strong> 최대 510만원 (수당 총합)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            구직촉진수당 조건, 1·2유형 차이, 실업급여 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/national-employment-support" className="btn-cta">
            국민취업지원제도 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 국민취업지원제도취업성공수당150만원조건SpokeContent: SpokeData = {
  h1: '국민취업지원제도 취업성공수당 150만원, 6개월·12개월 근속 조건과 신청 방법',
  breadcrumb: '취업성공수당150만원조건',
  description:
    '국민취업지원 취업성공수당: 취업 후 6개월 50만원 + 12개월 100만원, 최대 150만원. 고용보험 가입 직장 필수. 구직촉진수당(360만)과 별도. 취업 후 고용센터 취업신고 후 기간별 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '취업성공수당을 받으려면 어디서 신청하나요?',
      a: '취업 사실을 관할 고용센터에 먼저 신고한 후, 6개월·12개월 시점에 고용24(work24.go.kr) 또는 고용센터에서 수당을 신청합니다. 기간이 지나면 신청할 수 없으므로 기간 만료 전 반드시 신청하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '12개월 안에 이직을 하면 수당을 못 받나요?',
      a: '동일 직장에서 12개월을 유지하지 않더라도 재취업 후 합산 12개월을 충족하면 받을 수 있는 경우가 있습니다. 이직 시 고용센터에 상황을 알리고 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '구직촉진수당 6개월이 끝나기 전에 취업하면 남은 수당은 어떻게 되나요?',
      a: '취업하면 구직촉진수당 지급은 중단됩니다. 남은 수당은 받을 수 없으나, 대신 취업성공수당(최대 150만원)을 받을 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '창업을 해도 취업성공수당을 받을 수 있나요?',
      a: '창업도 취업성공수당 지급 대상에 포함될 수 있습니다. 창업 후 사업이 안정적으로 유지되는 경우 고용센터에서 조건을 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '수당을 신청하지 않으면 자동으로 지급되나요?',
      a: '아닙니다. 취업성공수당은 자동 지급이 아니므로 반드시 본인이 직접 신청해야 합니다. 6개월·12개월 근속 후 고용24 또는 고용센터에서 신청하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 국민취업지원제도', url: 'https://www.work24.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
  ],
};
