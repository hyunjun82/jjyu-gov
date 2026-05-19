import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 기준 국가장학금은 <strong>소득분위(학자금 지원구간) 1~9구간</strong>까지 지원하며,
          1구간 최대 <strong>연 560만 원</strong>, 8구간 <strong>연 100만 원</strong>입니다.
          9구간 이하이면 무조건 신청하세요.
        </p>
      </div>
      <section className="detail-card" id="table">
        <h2 className="detail-card-head">2026년 소득분위별 지원 금액 (Ⅰ유형)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>소득구간</th><th>연간 최대</th><th>학기당 최대</th></tr></thead>
            <tbody>
              <tr><td>1구간</td><td>560만 원</td><td>280만 원</td></tr>
              <tr><td>2구간</td><td>560만 원</td><td>280만 원</td></tr>
              <tr><td>3구간</td><td>520만 원</td><td>260만 원</td></tr>
              <tr><td>4구간</td><td>520만 원</td><td>260만 원</td></tr>
              <tr><td>5구간</td><td>368만 원</td><td>184만 원</td></tr>
              <tr><td>6구간</td><td>368만 원</td><td>184만 원</td></tr>
              <tr><td>7구간</td><td>120만 원</td><td>60만 원</td></tr>
              <tr><td>8구간</td><td>67.5만 원</td><td>33.75만 원</td></tr>
              <tr><td>9구간</td><td>지원 없음</td><td>-</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>등록금 범위 내에서만 지원. 등록금이 지원액보다 적으면 등록금 전액만 지원됩니다.</div>
        </div>
      </section>
      <section className="detail-card" id="bracket-calc">
        <h2 className="detail-card-head">소득구간 어떻게 산정되나</h2>
        <div className="detail-card-body">
          <p style={{lineHeight:1.8}}>
            가구의 소득·재산·금융정보를 건강보험료 환산소득으로 산정합니다.
            한국장학재단 홈페이지 <strong>학자금 지원구간 모의계산</strong> 메뉴에서 미리 확인할 수 있습니다.
          </p>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '국가장학금소득분위지급금액',
  breadcrumb: '국가장학금소득분위지급금액',
  title: '국가장학금 소득분위 몇 분위까지 얼마 받나',
  description: '2026년 국가장학금 소득분위(1~9구간)별 1학기 최대 지원 금액표를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 국가장학금국가장학금소득분위지급금액SpokeContent };
