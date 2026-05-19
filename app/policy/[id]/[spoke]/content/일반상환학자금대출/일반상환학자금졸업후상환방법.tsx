import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          졸업(또는 거치기간 종료) 후에는 <strong>원금·이자를 매월 분할 납부</strong>합니다.
          상환 기간은 최대 10년이며, 여유 자금이 생기면 <strong>언제든 중도·조기 상환</strong>이 가능합니다.
          실직·육아휴직 시 상환 유예 신청도 가능합니다.
        </p>
      </div>
      <section className="detail-card" id="repay">
        <h2 className="detail-card-head">졸업 후 상환 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>상환 방식</td><td>원리금 균등 분할 상환</td></tr>
              <tr><td>납부 주기</td><td>매월 자동이체 또는 인터넷뱅킹</td></tr>
              <tr><td>상환 기간</td><td>최대 10년</td></tr>
              <tr><td>조기 상환</td><td>가능 (중도상환 수수료 없음)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="deferral">
        <h2 className="detail-card-head">상환 유예 신청 가능 상황</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>사유</th><th>유예 기간</th></tr></thead>
            <tbody>
              <tr><td>실직·퇴직</td><td>최대 2년</td></tr>
              <tr><td>육아휴직</td><td>육아휴직 기간</td></tr>
              <tr><td>군입대</td><td>복무 기간</td></tr>
              <tr><td>질병·재해</td><td>치료·회복 기간</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>유예 신청: 한국장학재단 홈페이지 또는 1599-2000 콜센터.</div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '일반상환학자금졸업후상환방법',
  breadcrumb: '일반상환학자금졸업후상환방법',
  title: '일반상환학자금 졸업 후 상환기간과 분할납부 방법',
  description: '일반상환학자금대출 졸업 후 원리금 상환 방법, 조기상환, 유예 신청 절차를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 일반상환학자금대출일반상환학자금졸업후상환방법SpokeContent };
