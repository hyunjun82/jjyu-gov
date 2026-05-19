import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 국가근로장학금 시간당 단가는 <strong>교내 근로 10,320원, 교외 근로 12,790원</strong>입니다.
          학기 중 주 20시간, 방학 중 주 40시간 이내로 근무할 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">2026년 시간당 단가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>근로 유형</th><th>시간당 단가</th><th>지급 주체</th></tr></thead>
            <tbody>
              <tr><td>교내 근로</td><td>10,320원</td><td>한국장학재단</td></tr>
              <tr><td>교외 근로 (일반)</td><td>12,790원</td><td>한국장학재단</td></tr>
              <tr><td>교외 근로 (사회적기업 등)</td><td>12,790원</td><td>한국장학재단</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            2026년 최저임금(10,030원)보다 높은 수준으로 책정됩니다.
            시간당 단가는 매년 최저임금 인상에 맞춰 조정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="hours">
        <h2 className="detail-card-head">근무 시간 한도</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>기간</th><th>주당 근무 한도</th><th>월 최대 예상 수령</th></tr></thead>
            <tbody>
              <tr><td>학기 중</td><td>주 20시간 이내</td><td>약 825,600원 (교내 기준)</td></tr>
              <tr><td>방학 중</td><td>주 40시간 이내</td><td>약 1,651,200원 (교내 기준)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            학기당 지원 한도(시간)가 별도로 설정됩니다. 초과 근무분은 장학금으로 지급되지 않습니다.
            실제 근무 시간은 학교와 협의해 결정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="payment">
        <h2 className="detail-card-head">지급 방식</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>지급 시기</td><td>매월 근무 실적 확인 후 익월 지급</td></tr>
              <tr><td>지급 방법</td><td>본인 계좌 직접 입금</td></tr>
              <tr><td>세금</td><td>비과세 (소득세 미부과)</td></tr>
              <tr><td>확인처</td><td>kosaf.go.kr → 장학금 → 국가근로장학금</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '국가근로장학금시간당단가교내교외2026',
  breadcrumb: '국가근로장학금시간당단가교내교외2026',
  title: '국가근로장학금 시간당 단가 교내 교외 2026년 기준',
  description: '2026년 국가근로장학금 시간당 단가 교내 10,320원 교외 12,790원, 근무 시간 한도와 지급 방식을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 국가근로장학금국가근로장학금시간당단가교내교외2026SpokeContent };
