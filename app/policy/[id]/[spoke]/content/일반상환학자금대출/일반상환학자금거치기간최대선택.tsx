import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          일반상환학자금 거치기간은 <strong>최대 10년</strong>까지 선택 가능합니다.
          이 기간에는 이자만 납부하고 원금은 갚지 않습니다.
          이후 상환기간(최대 10년) 동안 원리금을 분할 납부합니다.
        </p>
      </div>
      <section className="detail-card" id="structure">
        <h2 className="detail-card-head">거치·상환 기간 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>대출자 유형</th><th>총 기간</th><th>거치 최대</th><th>상환 최대</th></tr></thead>
            <tbody>
              <tr><td>일반 대학(원)생</td><td>20년</td><td>10년</td><td>10년</td></tr>
              <tr><td>전문대학원생(경영 등)</td><td>15년</td><td>5년</td><td>10년</td></tr>
              <tr><td>의·치·한의·약학 대학원</td><td>20년</td><td>10년</td><td>10년</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="choose">
        <h2 className="detail-card-head">거치기간 선택 전략</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>상황</th><th>추천</th></tr></thead>
            <tbody>
              <tr><td>졸업 후 취업까지 시간 필요</td><td>거치기간 길게 설정 (최대 10년)</td></tr>
              <tr><td>취업 후 빨리 상환하고 싶음</td><td>거치기간 짧게 → 원금 조기 상환</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>거치기간 중에도 이자는 계속 발생합니다. 거치기간이 길수록 총 이자 납부액이 늘어납니다.</div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '일반상환학자금거치기간최대선택',
  breadcrumb: '일반상환학자금거치기간최대선택',
  title: '일반상환학자금 거치기간 최대 몇 년까지 선택 가능한가',
  description: '일반상환학자금대출 거치기간(이자만 내는 기간) 최대 10년, 상환기간 최대 10년 구조를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 일반상환학자금대출일반상환학자금거치기간최대선택SpokeContent };
