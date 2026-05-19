import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          공공분양은 <strong>분양가가 시세보다 저렴</strong>하고 <strong>소득·자산 기준</strong>이 있는 반면,
          민간분양은 <strong>자격 제한이 없지만 분양가가 비쌉니다</strong>.
          무주택 기간이 길고 소득이 낮을수록 공공분양이 유리합니다.
        </p>
      </div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">공공분양 vs 민간분양 핵심 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>공공분양</th><th>민간분양</th></tr>
            </thead>
            <tbody>
              <tr><td>분양가</td><td>시세의 70~80%</td><td>시세 연동 (상한 없음)</td></tr>
              <tr><td>자격 제한</td><td>소득·자산·무주택 기간</td><td>청약통장만 있으면 됨</td></tr>
              <tr><td>전매 제한</td><td>5~10년 (지역별 상이)</td><td>1~3년</td></tr>
              <tr><td>청약통장</td><td>납입 횟수 중요</td><td>납입 금액 중요</td></tr>
              <tr><td>공급 주체</td><td>LH·SH·GH 등</td><td>민간 건설사</td></tr>
              <tr><td>입지</td><td>공공택지 위주</td><td>민간택지 포함</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="choose">
        <h2 className="detail-card-head">어떤 경우에 공공분양이 유리한가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>상황</th><th>추천</th></tr>
            </thead>
            <tbody>
              <tr><td>무주택 기간 5년 이상 + 소득 낮음</td><td>공공분양 (당첨 확률 높음)</td></tr>
              <tr><td>신혼부부·생애최초·다자녀</td><td>공공분양 특별공급 우선 도전</td></tr>
              <tr><td>청약통장 납입 금액 많음 + 소득 높음</td><td>민간분양 1순위 노리기</td></tr>
              <tr><td>원하는 지역에 민간단지만 있음</td><td>민간분양</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="info-box" style={{ marginTop: 20 }}>
        공공분양 당첨 후 전매 제한 기간 중 팔면 환수 대상이 됩니다. 장기 거주 계획이 있을 때 공공분양이 적합합니다.
      </div>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '공공분양vs민간분양유리한점차이',
  breadcrumb: '공공분양vs민간분양유리한점차이',
  title: '공공분양 vs 민간분양 — 어떤 게 나에게 유리한가',
  description: '공공분양과 민간분양의 분양가·자격·전매제한을 비교하고 내 상황에 맞는 선택 기준을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 공공분양주택공공분양vs민간분양유리한점차이SpokeContent };
