import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          노인 보청기 건강보험 급여는 <strong>청각장애 등록</strong>이 된 경우에만 적용됩니다.
          보청기 1개 기준 <strong>최대 131만 7천원</strong>을 5년에 1회 지원받을 수 있으며,
          의료급여 1종은 전액, 일반 건강보험 가입자는 본인부담 20%가 발생합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        보청기 건강보험 급여는 청각장애 등록 후 이비인후과에서 처방전을 받아
        건강보험 등록 판매점에서 구입해야 적용됩니다.
        미등록 판매점에서 구입하면 급여 적용이 불가하므로 반드시 등록 여부를 확인하세요.
      </p>

      <section className="detail-card" id="benefit">
        <h2 className="detail-card-head">급여 유형별 지원금액 및 본인부담률</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>급여 유형</th><th>지원 한도</th><th>본인부담률</th><th>실 본인부담액</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>의료급여 1종</strong></td><td>131만 7천원</td><td>0%</td><td>0원</td></tr>
              <tr><td><strong>의료급여 2종</strong></td><td>131만 7천원</td><td>10%</td><td>약 13만 2천원</td></tr>
              <tr><td><strong>일반 건강보험</strong></td><td>131만 7천원</td><td>20%</td><td>약 26만 3천원</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">급여 적용 필수 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>청각장애 등록:</strong> 국민연금공단 장애심사를 거쳐 주민센터에서 장애인 등록 완료 필수
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>처방전 발급:</strong> 이비인후과 전문의가 발행한 보청기 처방전 지참
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>등록 판매점:</strong> 건강보험공단에 등록된 보청기 판매점에서 구입
          </div>
          <div className="info-box">
            <strong>지원 주기:</strong> 5년에 1회 (동일 기준으로 재지원 가능)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 절차, 본인부담 비교, 지자체 추가 혜택까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/elderly-hearing-aid" className="btn-cta">
            노인보청기지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 노인보청기지원건강보험장애인보조기기급여131만조건SpokeContent: SpokeData = {
  h1: '노인 보청기 지원, 건강보험·장애인 보조기기 급여 131만원 받는 조건',
  breadcrumb: '건강보험장애인보조기기급여131만조건',
  description:
    '노인 보청기 건강보험 급여: 청각장애 등록 후 최대 131만 7천원 5년 1회 지원. 의료급여 1종 전액, 2종 본인부담 10%, 일반 건강보험 본인부담 20%. 등록 판매점 구입 필수.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청각장애 등록 없이 보청기를 사면 건강보험 급여가 적용되나요?',
      a: '아닙니다. 건강보험 보청기 급여는 청각장애인으로 등록된 분에게만 적용됩니다. 먼저 이비인후과에서 청각검사를 받고 장애 등록 절차를 거쳐야 합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '5년이 지나지 않았는데 보청기가 고장 나면 어떻게 하나요?',
      a: '5년 이내에는 수리비도 급여 한도 내에서 일부 지원됩니다. 수리비 지원 한도는 연간 일정 금액이 적용되며, 건강보험공단에 별도 청구해야 합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '131만 7천원보다 비싼 보청기를 구입하면 차액은 어떻게 되나요?',
      a: '급여 한도(131만 7천원) 초과 금액은 전액 본인 부담입니다. 급여 한도 내에서만 건강보험이 적용되며 초과분은 지원되지 않습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '양쪽 귀 모두 보청기가 필요한 경우 각각 지원받을 수 있나요?',
      a: '원칙적으로 보청기 급여는 1개(1귀) 기준으로 지원됩니다. 양측 청각장애의 경우 의사 소견에 따라 별도 검토가 필요하며, 건강보험공단에 문의하시기 바랍니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '건강보험 등록 판매점은 어떻게 확인하나요?',
      a: '국민건강보험공단 홈페이지(nhis.or.kr) 또는 건강보험공단 고객센터(1577-1000)에서 등록된 보청기 판매점 목록을 확인할 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단 보조기기 급여', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부 장애인 보조기기', url: 'https://www.mohw.go.kr' },
  ],
};
