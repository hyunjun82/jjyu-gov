import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>주거급여 수급 가구의 <strong>만 19세 이상 30세 미만 청년</strong>이 부모와 별도 거주하면
        청년에게 <strong>별도 주거급여</strong>가 지급됩니다. 지역과 가구 규모에 따라 월 수십만 원 수준입니다.</p>
      </div>
      <section className="detail-card" id="who">
        <h2 className="detail-card-head">청년주거급여 분리지급 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>나이</td><td>만 19세 이상 ~ 30세 미만</td></tr>
              <tr><td>가구 조건</td><td>부모 세대가 주거급여 수급 중</td></tr>
              <tr><td>거주 요건</td><td>부모와 별도 주거(임차)</td></tr>
              <tr><td>취학·구직 등 사유</td><td>교육·취업 목적 별거 인정</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지급 금액 (2026년 기준)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>지역</th><th>1인 기준 월 최대</th></tr></thead>
            <tbody>
              <tr><td>서울</td><td>341,000원</td></tr>
              <tr><td>경기·인천</td><td>268,000원</td></tr>
              <tr><td>광역시·세종</td><td>216,000원</td></tr>
              <tr><td>그 외 지역</td><td>178,000원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>실제 월세와 기준임대료 중 낮은 금액이 지급됩니다. 신청처: 주민센터 방문 또는 복지로.</div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '청년주거급여분리지급조건금액',
  breadcrumb: '청년주거급여분리지급조건금액',
  title: '청년주거급여 분리지급 — 부모랑 따로 살면 얼마나',
  description: '주거급여 수급 가구에서 분리된 청년에게 별도로 지급되는 청년주거급여 분리지급 조건과 금액을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 청년주거지원청년주거급여분리지급조건금액SpokeContent };
