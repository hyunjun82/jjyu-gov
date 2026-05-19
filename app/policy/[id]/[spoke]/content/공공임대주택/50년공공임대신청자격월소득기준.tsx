import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          50년 공공임대(국민임대·통합공공임대)는 <strong>무주택 세대구성원</strong>으로서
          해당 세대 월평균 소득이 <strong>전년도 도시근로자 가구원수별 월평균 소득의 70% 이하</strong>이면 신청할 수 있습니다.
          맞벌이 부부는 90%까지 완화됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        50년 공공임대는 사실상 영구에 가까운 장기 임대 유형입니다. 국민임대·통합공공임대가 이에 해당하며,
        입주 자격 중 소득 기준이 가장 중요합니다. 아래에서 2026년 기준을 확인하세요.
      </p>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">2026년 국민임대 소득 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가구원 수</th><th>월평균 소득 100%</th><th>70% 이하(기준)</th><th>90% 이하(맞벌이)</th></tr>
            </thead>
            <tbody>
              <tr><td>1인</td><td>약 3,482,000원</td><td>약 2,437,000원</td><td>약 3,134,000원</td></tr>
              <tr><td>2인</td><td>약 5,415,000원</td><td>약 3,791,000원</td><td>약 4,874,000원</td></tr>
              <tr><td>3인</td><td>약 6,817,000원</td><td>약 4,772,000원</td><td>약 6,135,000원</td></tr>
              <tr><td>4인</td><td>약 8,102,000원</td><td>약 5,671,000원</td><td>약 7,292,000원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            ※ 정확한 수치는 입주자모집공고문 기준. 공고마다 적용 연도가 다를 수 있음.
          </div>
        </div>
      </section>

      <section className="detail-card" id="asset">
        <h2 className="detail-card-head">소득 외 자산 기준도 확인하세요</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td>총자산</td><td>3억 4,500만 원 이하</td></tr>
              <tr><td>자동차</td><td>3,708만 원 이하</td></tr>
              <tr><td>무주택 기간</td><td>입주자모집공고일 기준 세대 전원 무주택</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>주의:</strong> 소득 기준을 통과해도 자산 기준 초과 시 입주 불가. 부동산·금융자산 모두 포함됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="type">
        <h2 className="detail-card-head">장기 임대 유형별 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>임대 기간</th><th>소득 기준</th><th>특징</th></tr>
            </thead>
            <tbody>
              <tr><td>국민임대</td><td>최장 30년</td><td>70%(맞벌이 90%)</td><td>가장 규모 큼</td></tr>
              <tr><td>통합공공임대</td><td>30년 이상</td><td>150% 이하</td><td>기존 유형 통합</td></tr>
              <tr><td>영구임대</td><td>영구</td><td>수급자·한부모 우선</td><td>최저소득층 대상</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="info-box" style={{ marginTop: 20 }}>
        <strong>신청처:</strong> LH청약플러스(apply.lh.or.kr), 마이홈포털(myhome.go.kr), 각 지역 SH·GH 포털에서 공고 확인 후 신청.
      </div>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '50년공공임대신청자격월소득기준',
  breadcrumb: '50년공공임대신청자격월소득기준',
  title: '50년 공공임대 신청자격 — 월소득 기준 얼마까지',
  description: '국민임대·통합공공임대 신청을 위한 가구원수별 월소득 70% 기준과 자산 기준을 2026년 최신 수치로 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 공공임대주택50년공공임대신청자격월소득기준SpokeContent };
