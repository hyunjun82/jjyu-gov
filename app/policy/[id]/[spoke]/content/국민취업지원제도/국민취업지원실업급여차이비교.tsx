import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민취업지원제도와 실업급여(구직급여)는 완전히 별개의 제도입니다.
          실업급여는 <strong>고용보험에 가입된 근로자가 비자발적으로 퇴직</strong>했을 때 지급되고,
          국민취업지원제도는 <strong>고용보험 미가입자도 포함</strong>해 취업을 원하는 사람에게
          취업 지원 서비스와 수당을 제공합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        실업급여를 수급 중이면 국민취업지원 1유형의 구직촉진수당은 받을 수 없습니다.
        실업급여가 종료된 후 취업이 어려운 경우 국민취업지원을 이어서 신청하는 방식이 일반적입니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">실업급여 vs 국민취업지원제도 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>실업급여(구직급여)</th><th>국민취업지원제도</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대상</strong></td><td>고용보험 가입 피보험자 (비자발적 퇴직)</td><td>만 15~69세 구직자 (고용보험 미가입자 포함)</td></tr>
              <tr><td><strong>수당 금액</strong></td><td>이직 전 평균임금의 60% (하한·상한 있음)</td><td>월 60만원 고정 (1유형만)</td></tr>
              <tr><td><strong>지급 기간</strong></td><td>피보험기간·나이에 따라 90~270일</td><td>최대 6개월 (구직촉진수당)</td></tr>
              <tr><td><strong>자발적 퇴직</strong></td><td>원칙적으로 불가</td><td>가능</td></tr>
              <tr><td><strong>취업 지원</strong></td><td>기본 취업 서비스</td><td>1:1 집중 취업 지원 (1년)</td></tr>
              <tr><td><strong>동시 수령</strong></td><td colSpan={2} style={{ textAlign: 'center' }}>불가 (실업급여 수급 중 1유형 수당 중복 불가)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="strategy">
        <h2 className="detail-card-head">효율적인 활용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>고용보험 가입자 퇴직 시:</strong> 실업급여 먼저 수급 → 종료 후 취업이 어려우면 국민취업지원 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>고용보험 미가입자(프리랜서·자영업자 등):</strong> 실업급여 없음 → 국민취업지원 직접 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자발적 퇴직자:</strong> 실업급여 수급 어려움 → 소득·재산 기준 충족 시 국민취업지원 1유형 신청
          </div>
          <div className="info-box">
            <strong>청년 구직자:</strong> 고용보험 이력 적어도 국민취업지원 2유형 또는 1유형(소득 기준 완화)으로 취업 지원 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청처</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>실업급여:</strong> 고용보험 누리집(ei.go.kr) 또는 고용센터
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>국민취업지원제도:</strong> 고용24(work24.go.kr) 또는 고용센터
          </div>
          <div className="info-box">
            <strong>문의:</strong> 고용노동부 ☎1350
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            구직촉진수당 조건, 1·2유형 차이, 취업성공수당까지<br />
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

export const 국민취업지원제도국민취업지원실업급여차이비교SpokeContent: SpokeData = {
  h1: '국민취업지원제도 vs 실업급여 차이, 고용보험 없어도 받는 방법과 비교',
  breadcrumb: '국민취업지원실업급여차이비교',
  description:
    '국민취업지원(고용보험 미가입자 가능·월60만 고정) vs 실업급여(고용보험 필수·평균임금60%). 동시 수령 불가. 실업급여 종료 후 취업 어려우면 국민취업지원 연계 가능. ☎1350.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '실업급여를 다 받고 나서 국민취업지원을 신청할 수 있나요?',
      a: '네. 실업급여(구직급여) 수급이 종료된 후 국민취업지원을 신청할 수 있습니다. 소득·재산 요건을 충족하면 1유형으로 구직촉진수당을 받으면서 취업 지원을 받을 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '실업급여보다 국민취업지원 수당이 더 적지 않나요?',
      a: '실업급여는 이직 전 평균임금의 60%이므로 임금이 높았다면 수당이 많을 수 있습니다. 반면 국민취업지원 구직촉진수당은 월 60만원 고정입니다. 그러나 국민취업지원은 취업 지원 서비스가 집중적으로 제공된다는 장점이 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '계약직으로 자연 종료되면 실업급여와 국민취업지원 중 어느 것을 받나요?',
      a: '계약 만료로 인한 퇴직은 비자발적으로 인정되어 실업급여 신청이 가능합니다. 고용보험 가입 기간이 180일 이상이면 실업급여를 먼저 신청하는 것이 일반적으로 유리합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.ei.go.kr',
    },
    {
      q: '자발적으로 퇴직하면 아무것도 못 받나요?',
      a: '자발적 퇴직은 실업급여를 받기 어렵지만, 소득·재산 기준을 충족하면 국민취업지원제도 1유형 구직촉진수당을 신청할 수 있습니다. 퇴직 후 구직 활동 중이라면 고용센터에 문의하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '아르바이트만 했는데 고용보험이 없으면 어떻게 하나요?',
      a: '고용보험 미가입자는 실업급여를 받을 수 없지만 국민취업지원제도는 신청 가능합니다. 소득·재산 기준을 충족하면 1유형으로 월 60만원을 받으면서 취업 지원 서비스를 이용할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 국민취업지원제도', url: 'https://www.work24.go.kr' },
    { name: '고용보험 누리집', url: 'https://www.ei.go.kr' },
  ],
};
