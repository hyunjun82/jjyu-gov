import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          공공분양 일반공급 자격은 <strong>무주택 세대구성원</strong>이면서 소득 기준
          <strong>도시근로자 월평균 소득 100% 이하</strong>, 자산 기준
          <strong>부동산 2억 1,550만 원 이하, 자동차 3,708만 원 이하</strong>를 모두 충족해야 합니다.
        </p>
      </div>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득 기준 (일반공급)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가구원 수</th><th>월평균 소득 100%</th><th>120%(신혼·생애최초)</th></tr>
            </thead>
            <tbody>
              <tr><td>2인</td><td>약 5,415,000원</td><td>약 6,498,000원</td></tr>
              <tr><td>3인</td><td>약 6,817,000원</td><td>약 8,180,000원</td></tr>
              <tr><td>4인</td><td>약 8,102,000원</td><td>약 9,722,000원</td></tr>
              <tr><td>5인</td><td>약 8,720,000원</td><td>약 10,464,000원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            신혼·생애최초 특별공급은 소득 기준이 일반공급보다 완화됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="asset">
        <h2 className="detail-card-head">자산 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td>부동산(토지+건물)</td><td>2억 1,550만 원 이하</td></tr>
              <tr><td>자동차</td><td>3,708만 원 이하</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            세대원 전원 합산 기준. 부모님 명의 부동산도 세대 분리가 안 돼 있으면 포함됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="supply-type">
        <h2 className="detail-card-head">공급 유형별 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>비율</th><th>주요 대상</th></tr>
            </thead>
            <tbody>
              <tr><td>일반공급</td><td>15%</td><td>무주택 세대구성원 전체</td></tr>
              <tr><td>신혼부부 특공</td><td>30%</td><td>혼인 7년 이내</td></tr>
              <tr><td>생애최초 특공</td><td>25%</td><td>생애 첫 주택 구매자</td></tr>
              <tr><td>다자녀 특공</td><td>10%</td><td>미성년 자녀 3명 이상</td></tr>
              <tr><td>노부모부양 특공</td><td>5%</td><td>만 65세 이상 부모 3년 이상 부양</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '공공분양일반공급청약자격소득자산기준',
  breadcrumb: '공공분양일반공급청약자격소득자산기준',
  title: '공공분양 일반공급 청약자격 — 소득·자산 기준',
  description: '공공분양주택 일반공급 신청 자격인 소득 100% 기준, 부동산·자동차 자산 한도를 가구원수별로 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 공공분양주택공공분양일반공급청약자격소득자산기준SpokeContent };
