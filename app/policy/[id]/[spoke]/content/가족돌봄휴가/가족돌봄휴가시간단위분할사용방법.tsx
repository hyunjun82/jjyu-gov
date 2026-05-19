import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가족돌봄휴가는 <strong>1일 단위</strong>가 원칙이지만,
          근로자가 신청하면 <strong>시간 단위</strong>로도 분할 사용할 수 있습니다.
          시간 단위 사용 시 1일은 8시간으로 환산합니다.
        </p>
      </div>

      <section className="detail-card" id="unit">
        <h2 className="detail-card-head">사용 단위 규정</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>기본 단위</td><td>1일</td></tr>
              <tr><td>분할 사용</td><td>시간 단위 가능 (근로자 신청 시)</td></tr>
              <tr><td>1일 환산</td><td>8시간</td></tr>
              <tr><td>연간 총 한도</td><td>10일 (재난 특례 시 최대 20일 추가)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            예: 하루 2시간씩 사용하면 10일(80시간)을 40회 나누어 쓸 수 있습니다.
            시간 단위 사용은 사용자(사업주)가 거부할 수 없습니다 (남녀고용평등법 제22조의2).
          </div>
        </div>
      </section>

      <section className="detail-card" id="howto">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>1단계</td><td>사용 사유, 사용 기간(시간), 돌봄 대상 가족 명시해 서면 신청</td></tr>
              <tr><td>2단계</td><td>사업주에게 제출 (사전 신청 원칙, 긴급 시 사후 가능)</td></tr>
              <tr><td>3단계</td><td>사업주 수령 확인</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            구두 신청도 인정되지만, 분쟁 방지를 위해 서면(이메일 포함) 신청을 권장합니다.
            사업주가 사용을 거부하거나 불이익을 주면 500만 원 이하 과태료 대상입니다.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '가족돌봄휴가시간단위분할사용방법',
  breadcrumb: '가족돌봄휴가시간단위분할사용방법',
  title: '가족돌봄휴가 시간 단위 분할 사용 방법과 환산 기준',
  description: '가족돌봄휴가 시간 단위 분할 사용 가능 여부, 1일 8시간 환산 기준, 신청 방법을 남녀고용평등법 기준으로 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 가족돌봄휴가가족돌봄휴가시간단위분할사용방법SpokeContent };
