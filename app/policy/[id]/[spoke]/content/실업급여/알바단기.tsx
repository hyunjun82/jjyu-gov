import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          실업급여를 받으면서 단기 알바는 <strong>가능합니다. 단, 반드시 신고해야 합니다.</strong>
          알바를 한 날 수만큼 구직급여가 차감됩니다 (시급 기준 아님, 일수 기준).
          신고하지 않으면 전액 환수 + 최대 5배 추가 징수 + 형사처벌까지 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "실업급여 받으면서 용돈벌이로 알바해도 되나요?"
        결론: 가능하지만 반드시 신고해야 합니다. 신고하면 일한 날만큼 차감되고,
        신고 안 하면 부정수급으로 훨씬 큰 손실이 생깁니다.
      </p>

      <section className="detail-card" id="rule">
        <h2 className="detail-card-head">실업급여 수급 중 알바 핵심 규칙</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>알바 가능 여부</td>
                <td>✅ 가능 (근로 자체는 불법 아님)</td>
              </tr>
              <tr>
                <td>신고 의무</td>
                <td>✅ 필수 (고용센터에 알바 일수·소득 신고)</td>
              </tr>
              <tr>
                <td>급여 차감 기준</td>
                <td>일한 날 수 × 1일 구직급여액 (시급 무관, 일수 기준)</td>
              </tr>
              <tr>
                <td>미신고 시 처벌</td>
                <td>전액 환수 + 최대 5배 추가 징수 + 형사처벌</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>핵심:</strong> 시급이 낮아도 하루만 일해도 그날의 구직급여는 나오지 않습니다.
            반드시 실업급여 신고 시 알바 일수를 정확히 기재하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="deduction">
        <h2 className="detail-card-head">알바 시 구직급여 차감 계산 예시</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8, marginBottom: 12 }}>
            예를 들어 하루 구직급여가 66,000원이고 한 달에 5일 알바를 했다면:
          </p>
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>금액</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1일 구직급여액</td>
                <td>66,000원</td>
              </tr>
              <tr>
                <td>알바 일수</td>
                <td>5일</td>
              </tr>
              <tr>
                <td>차감액</td>
                <td>330,000원 (= 66,000 × 5)</td>
              </tr>
              <tr>
                <td>실 지급 구직급여</td>
                <td>해당 월 구직급여 - 330,000원</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>중요:</strong> 알바 시급이 최저임금이든 높은 시급이든 차감 기준은 동일합니다.
            시급이 아니라 <strong>근무 일수</strong>만 봅니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="safe">
        <h2 className="detail-card-head">월 60시간 미만 알바, 어디까지 괜찮나</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주 15시간 미만 + 월 50만원 이하:</strong> 단기·초단시간 알바로 간주되어
            구직급여가 유지될 가능성이 높습니다. 단, 반드시 신고해야 합니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>고용보험 미가입 일용직:</strong> 하루짜리 단기 알바 중 고용보험 미가입 일용직은
            실업급여 수급에 영향이 없는 경우가 많습니다.
          </div>
          <div className="warning-box">
            <strong>주당 18시간 초과 또는 일액 이상 소득 발생 시:</strong>
            해당 일은 구직급여를 받지 못하며, 취업 신고를 해야 합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="report">
        <h2 className="detail-card-head">알바 신고 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 고용24:</strong> work24.go.kr → 실업급여 신청 → 취업(알바) 신고
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 고용센터 방문·전화:</strong> 관할 고용센터 방문 또는 1350 전화로 신고
          </div>
          <div className="info-box">
            <strong>③ 실업인정 신청 시 기재:</strong> 2주마다 실업인정 신청 때 알바 일수와 소득을 기재
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            수급 기간, 재수급, 자발적 퇴사 기준 등<br />
            실업급여 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/job-seeker-benefit" className="btn-cta">
            실업급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 알바단기SpokeContent: SpokeData = {
  h1: '실업급여 받으면서 알바해도 되나 | 월 60시간 기준과 신고 방법',
  breadcrumb: '알바·단기',
  description: '실업급여 받으면서 알바해도 됩니다. 단 반드시 신고 필수. 월 60시간(주 15시간) 미만이면 급여 유지 가능하나, 일한 날 수 × 1일 구직급여액이 차감됩니다. 미신고 시 전액 환수 + 최대 5배 추가 징수 + 형사처벌.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '실업급여 받으면서 알바해도 되나요?',
      a: '가능합니다. 단, 반드시 고용센터에 알바 일수와 소득을 신고해야 합니다. 신고하면 일한 날만큼 구직급여가 차감됩니다.',
      source: '고용보험 실업급여 안내',
      sourceUrl: 'https://www.ei.go.kr',
    },
    {
      q: '알바하면 실업급여가 얼마나 깎이나요?',
      a: '알바한 날 수 × 1일 구직급여액이 차감됩니다. 시급이 아니라 근무 일수가 기준입니다.',
      source: '고용보험 실업급여 수급 중 취업 안내',
      sourceUrl: 'https://www.ei.go.kr',
    },
    {
      q: '알바를 신고 안 하면 어떻게 되나요?',
      a: '부정수급으로 처리됩니다. 수령한 금액 전액 반환 + 최대 5배 추가 징수 + 형사처벌(징역 또는 벌금)을 받을 수 있습니다.',
      source: '고용보험법 제62조 부정수급 규정',
      sourceUrl: 'https://www.ei.go.kr',
    },
    {
      q: '주 15시간 미만 알바는 실업급여에 영향이 없나요?',
      a: '주 15시간 미만, 월 50만원 이하의 단기 알바는 영향이 적을 수 있지만 반드시 신고해야 합니다. 신고 여부가 핵심이며, 미신고는 어떤 경우에도 부정수급입니다.',
      source: '고용보험 실업급여 안내',
      sourceUrl: 'https://www.ei.go.kr',
    },
    {
      q: '실업급여 받는 중 알바 신고는 어떻게 하나요?',
      a: '2주마다 실업인정 신청 시 알바 일수와 소득을 기재하면 됩니다. 고용24(work24.go.kr) 온라인 또는 고용센터 방문(1350)으로 신고할 수 있습니다.',
      source: '고용24 실업급여 신청 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용보험 실업급여 안내 (ei.go.kr)', url: 'https://www.ei.go.kr' },
    { name: '고용24 실업급여 신청 포털', url: 'https://www.work24.go.kr' },
    { name: '고용노동부 고객상담센터 1350', url: 'https://www.moel.go.kr' },
  ],
};
