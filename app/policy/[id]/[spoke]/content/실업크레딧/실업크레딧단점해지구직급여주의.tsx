import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>실업크레딧의 주요 단점은 <strong>소득 인정 상한(70만 원)</strong>이 있어 고소득자는 혜택이 작고, <strong>구직급여 종료 시 자동 해지</strong>됩니다. 재취업하면 즉시 일반 납부로 전환됩니다.</p></div>
      <section className="detail-card" id="cons"><h2 className="detail-card-head">주요 단점</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>내용</th></tr></thead><tbody><tr><td>소득 상한</td><td>기준 소득 상한 70만 원 → 이전 소득 높을수록 혜택 상대적으로 작음</td></tr><tr><td>생애 한도</td><td>최대 12개월 (한 번 쓰면 차감)</td></tr><tr><td>임의 해지</td><td>본인이 해지하면 재신청 불가 (해당 기간 소진)</td></tr></tbody></table></div></section>
      <section className="detail-card" id="terminate"><h2 className="detail-card-head">자동 해지 조건</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>사유</th><th>처리</th></tr></thead><tbody><tr><td>구직급여 수급 종료</td><td>실업크레딧 자동 종료</td></tr><tr><td>재취업(근로소득 발생)</td><td>수급 자격 상실 → 자동 해지</td></tr><tr><td>본인 납부 3회 연속 미납</td><td>자동 해지</td></tr></tbody></table><div className="warning-box" style={{marginTop:12}}>재취업 후 실업크레딧이 자동 해지되므로 이후에는 직장 국민연금으로 전환됩니다. 별도 조치는 불필요합니다.</div></div></section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '실업크레딧단점해지구직급여주의',
  breadcrumb: '실업크레딧단점해지구직급여주의',
  title: '실업크레딧 단점·해지 — 구직급여와 함께 신청할 때 주의사항',
  description: '실업크레딧의 단점, 자동 해지 조건, 구직급여 수급 종료 시 처리 방법을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 실업크레딧실업크레딧단점해지구직급여주의SpokeContent };
