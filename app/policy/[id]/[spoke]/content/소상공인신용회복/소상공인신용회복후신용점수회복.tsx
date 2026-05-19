import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          신용회복 지원 후 KCB 신용점수는 평균 <strong>39점 상승</strong>합니다.
          신용 정보 해제 후 카드 발급·대출 신청이 다시 가능해지며,
          신용점수 591점 이상 회복 시 카드 발급이 가능한 수준이 됩니다.
        </p>
      </div>

      <section className="detail-card" id="score">
        <h2 className="detail-card-head">신용점수 회복 효과</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>평균 점수 상승</td><td>KCB 기준 평균 39점 상승</td></tr>
              <tr><td>카드 발급 기준</td><td>KCB 591점 이상 → 카드 발급 가능 수준</td></tr>
              <tr><td>신규 카드 발급</td><td>신용 사면 이후 23만 명 신규 발급 실적</td></tr>
              <tr><td>점수 회복 기간</td><td>신용 정보 해제 후 즉시 반영 (수일 내)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            신용 정보 해제 = 연체 기록 삭제를 의미합니다.
            단, 채무 조정 자체의 기록은 일정 기간 남을 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="after">
        <h2 className="detail-card-head">신용회복 후 대출·금융 이용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>가능 여부</th></tr></thead>
            <tbody>
              <tr><td>신용카드 발급</td><td>신용점수 회복 후 가능 (카드사별 기준 상이)</td></tr>
              <tr><td>소액 대출</td><td>서민금융진흥원 새희망홀씨·햇살론 등 이용 가능</td></tr>
              <tr><td>은행권 대출</td><td>점수 회복 정도에 따라 다름 (일반 대출은 추가 시간 필요)</td></tr>
              <tr><td>소상공인 정책자금</td><td>신용 회복 후 소진공 정책자금 재신청 가능</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            신용 정보 해제 후에도 금융사 내부 심사 기준에 따라 대출이 제한될 수 있습니다.
            신청 전 각 기관에 직접 문의하세요.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '소상공인신용회복후신용점수회복',
  breadcrumb: '소상공인신용회복후신용점수회복',
  title: '소상공인 신용회복 후 신용점수 몇 점 오르나',
  description: '소상공인 신용회복 후 KCB 평균 39점 상승. 카드 발급 기준(591점)과 대출 재이용 가능 여부를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 소상공인신용회복소상공인신용회복후신용점수회복SpokeContent };
