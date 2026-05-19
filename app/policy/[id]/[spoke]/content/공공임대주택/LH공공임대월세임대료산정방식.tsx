import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          LH 공공임대 월세(임대료)는 <strong>인근 시세의 30~80% 수준</strong>으로 산정됩니다.
          유형별로 다르며, <strong>국민임대는 시세 60~80%</strong>, <strong>영구임대는 30% 이하</strong>입니다.
          임대보증금 선택에 따라 월 임대료가 달라집니다.
        </p>
      </div>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">유형별 임대료 시세 비율</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>임대 유형</th><th>시세 대비 임대료</th><th>임대보증금</th></tr>
            </thead>
            <tbody>
              <tr><td>영구임대</td><td>시세의 30% 이하</td><td>낮음</td></tr>
              <tr><td>국민임대</td><td>시세의 60~80%</td><td>중간</td></tr>
              <tr><td>행복주택</td><td>시세의 60~80%</td><td>선택 폭 있음</td></tr>
              <tr><td>통합공공임대</td><td>시세의 35~90%</td><td>소득에 따라 차등</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="convert">
        <h2 className="detail-card-head">보증금↔월세 전환 (보증금이 높으면 월세 낮아짐)</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8 }}>
            LH 임대주택은 보증금을 높일수록 월세가 줄고, 보증금을 낮출수록 월세가 늘어나는
            <strong> 보증금-월세 전환</strong> 방식을 허용합니다.
            전환율은 연 3.5% 수준이 일반적입니다.
          </p>
          <div className="info-box" style={{ marginTop: 12 }}>
            예시: 보증금 1,000만 원 추가 시 월세 약 29,000원 감소 (연 3.5% 기준).
          </div>
        </div>
      </section>

      <section className="detail-card" id="increase">
        <h2 className="detail-card-head">임대료 인상 규정</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td>인상 주기</td><td>2년마다 재계약 시 조정 가능</td></tr>
              <tr><td>인상 한도</td><td>연 5% 이내 (국민임대 기준)</td></tr>
              <tr><td>통보 시기</td><td>재계약 3개월 전 통보 의무</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>임의 퇴거 금지:</strong> 임대료 체납이 없는 한 LH가 임의로 계약 해지 불가.
          </div>
        </div>
      </section>

      <div className="info-box" style={{ marginTop: 20 }}>
        <strong>임대료 조회:</strong> LH청약플러스 → 내 임대차 정보 → 납부 내역 / 전화 1600-1004
      </div>
    </>
  );
}

const spokeData: SpokeData = {
  slug: 'LH공공임대월세임대료산정방식',
  breadcrumb: 'LH공공임대월세임대료산정방식',
  title: 'LH 공공임대 월세 임대료 어떻게 산정되나',
  description: 'LH 공공임대주택 임대료가 시세의 몇 %인지, 보증금-월세 전환 방식과 인상 한도를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 공공임대주택LH공공임대월세임대료산정방식SpokeContent };
