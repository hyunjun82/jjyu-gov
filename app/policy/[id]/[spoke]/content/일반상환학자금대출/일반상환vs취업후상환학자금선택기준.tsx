import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          소득이 불안정하거나 졸업 후 취업이 불확실하면 <strong>취업후상환</strong>이 유리합니다.
          소득이 어느 정도 예상되고 빨리 갚고 싶다면 <strong>일반상환</strong>이 적합합니다.
          두 유형 간 전환도 가능합니다.
        </p>
      </div>
      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">일반상환 vs 취업후상환 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>일반상환</th><th>취업후상환</th></tr></thead>
            <tbody>
              <tr><td>2026 금리</td><td>연 1.7%</td><td>연 1.7%</td></tr>
              <tr><td>상환 시작</td><td>졸업 후 상환 의무 시작</td><td>소득이 기준 초과 시 자동 상환</td></tr>
              <tr><td>상환 기준소득</td><td>없음 (정기 분할 상환)</td><td>연 2,900만 원 초과 시 상환</td></tr>
              <tr><td>미취업 기간</td><td>거치기간 선택 가능</td><td>소득 없으면 상환 유예 자동</td></tr>
              <tr><td>소득 기준</td><td>소득 무관 신청 가능</td><td>8구간 이하만 신청 가능</td></tr>
              <tr><td>상환 기간</td><td>최대 20년</td><td>정해진 기간 없음</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="choose">
        <h2 className="detail-card-head">선택 가이드</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>내 상황</th><th>추천</th></tr></thead>
            <tbody>
              <tr><td>졸업 후 취업 불확실, 소득 낮을 수 있음</td><td>취업후상환 (소득 없으면 자동 유예)</td></tr>
              <tr><td>소득 9구간 이상, 빨리 갚고 싶음</td><td>일반상환</td></tr>
              <tr><td>대학원 진학 예정</td><td>일반상환 (취업후상환 미적용)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>취업후상환 → 일반상환으로 전환 가능. 반대는 불가.</div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '일반상환vs취업후상환학자금선택기준',
  breadcrumb: '일반상환vs취업후상환학자금선택기준',
  title: '일반상환 vs 취업후상환 — 어떤 유형이 나에게 유리한가',
  description: '일반상환과 취업후상환 학자금대출의 금리·상환 방식·전환 가능 여부를 비교해 선택 기준을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 일반상환학자금대출일반상환vs취업후상환학자금선택기준SpokeContent };
