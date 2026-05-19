import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          저소득층 에너지효율 개선사업은 <strong>기초생활수급자와 차상위계층</strong>을 대상으로 합니다.
          주거 환경이 노후하거나 에너지 효율이 낮은 주택에 거주하는 경우 우선 선정됩니다.
        </p>
      </div>

      <section className="detail-card" id="eligible">
        <h2 className="detail-card-head">신청 자격</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>기초생활수급자</td><td>생계·의료·주거·교육급여 수급자 전체</td></tr>
              <tr><td>차상위계층</td><td>소득 기준 중위소득 50% 이하 (차상위 확인서 보유)</td></tr>
              <tr><td>주택 조건</td><td>자가 또는 사용 동의를 받은 임차 주택</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            임차 가구는 집주인의 사용 동의서가 필요합니다.
            아파트 등 공동주택보다 단독·연립주택 거주자가 우선 선정되는 경우가 많습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="priority">
        <h2 className="detail-card-head">우선 선정 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>우선 순위</th><th>대상</th></tr></thead>
            <tbody>
              <tr><td>1순위</td><td>기초생활수급자 중 에너지 취약 가구</td></tr>
              <tr><td>2순위</td><td>차상위계층 중 노후 주택 거주 가구</td></tr>
              <tr><td>우대</td><td>장애인, 노인, 영유아 포함 가구</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            예산 한도 내에서 지원하므로 신청해도 해당 연도에 시공이 이루어지지 않을 수 있습니다.
            신청은 한국에너지재단(kew.or.kr) 또는 주민센터를 통해 할 수 있습니다.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '저소득에너지효율개선신청자격기초수급차상위',
  breadcrumb: '저소득에너지효율개선신청자격기초수급차상위',
  title: '저소득 에너지효율 개선 신청 자격 기초수급 차상위 기준',
  description: '저소득층 에너지효율 개선사업 신청 자격인 기초생활수급자·차상위계층 기준과 우선 선정 기준을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 저소득에너지효율개선저소득에너지효율개선신청자격기초수급차상위SpokeContent };
