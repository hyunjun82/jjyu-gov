import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          공공분양은 <strong>내 집 마련(소유권 취득)</strong>이 목적이고,
          공공임대는 <strong>장기 저렴한 거주(임대)</strong>가 목적입니다.
          자산 형성이 목표라면 공공분양, 당장 주거 안정이 급하면 공공임대가 적합합니다.
        </p>
      </div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">공공분양 vs 공공임대 핵심 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>공공분양</th><th>공공임대</th></tr>
            </thead>
            <tbody>
              <tr><td>소유권</td><td>취득 (내 집)</td><td>없음 (임차)</td></tr>
              <tr><td>초기 자금</td><td>분양가 10~20% 계약금 필요</td><td>보증금만 (상대적으로 적음)</td></tr>
              <tr><td>월 부담</td><td>대출 원리금 상환</td><td>월 임대료</td></tr>
              <tr><td>거주 기간</td><td>전매 제한 후 자유</td><td>국민임대 최장 30년</td></tr>
              <tr><td>소득 기준</td><td>100% 이하</td><td>70% 이하 (국민임대)</td></tr>
              <tr><td>자산 변화</td><td>시세 상승 시 자산 증가</td><td>자산 형성 없음</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="choose">
        <h2 className="detail-card-head">상황별 선택 가이드</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>내 상황</th><th>추천</th></tr>
            </thead>
            <tbody>
              <tr><td>초기 자금 부족, 저소득</td><td>공공임대 (보증금 낮음)</td></tr>
              <tr><td>자산 형성·내 집 원함</td><td>공공분양</td></tr>
              <tr><td>청약 가점 낮음·당첨 어려움</td><td>공공임대 먼저 입주 후 대기</td></tr>
              <tr><td>특별공급 자격 있음 (신혼·생애최초)</td><td>공공분양 특별공급 도전</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            공공임대 입주 중에도 공공분양 청약 신청은 가능합니다. 당첨 시 임대 계약을 해지하고 이사하면 됩니다.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '공공분양vs공공임대뭘신청해야하나',
  breadcrumb: '공공분양vs공공임대뭘신청해야하나',
  title: '공공분양 vs 공공임대 — 뭘 신청해야 하나',
  description: '소유와 임차의 차이, 초기 자금·소득 기준·자산 형성 관점에서 공공분양과 공공임대 중 어떤 게 나에게 맞는지 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 공공분양주택공공분양vs공공임대뭘신청해야하나SpokeContent };
