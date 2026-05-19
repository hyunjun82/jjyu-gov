import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          저소득층 에너지효율 개선사업의 가구당 평균 지원 금액은 <strong>약 243만 원</strong>입니다.
          지원금은 현금이 아닌 <strong>무상 시공</strong> 형태로 제공되며, 지원 항목과 규모에 따라 달라집니다.
        </p>
      </div>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지원 금액 수준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>가구당 평균 지원액</td><td>약 243만 원 (시공비 기준)</td></tr>
              <tr><td>지원 형태</td><td>현금 지급 아님, 무상 시공</td></tr>
              <tr><td>본인 부담</td><td>없음 (전액 무상)</td></tr>
              <tr><td>재료비·인건비</td><td>한국에너지재단이 시공 업체에 직접 지급</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            243만 원은 평균값입니다. 단열·창호·보일러·에어컨 등 시공 항목 수와 주택 규모에 따라
            실제 지원 금액은 더 많거나 적을 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="byitem">
        <h2 className="detail-card-head">항목별 시공 비용 (참고)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>시공 항목</th><th>비용 수준</th></tr></thead>
            <tbody>
              <tr><td>보일러 교체</td><td>70~120만 원 수준</td></tr>
              <tr><td>창호 교체</td><td>창 크기·수량에 따라 상이</td></tr>
              <tr><td>단열재 시공</td><td>주택 면적에 따라 상이</td></tr>
              <tr><td>에어컨 설치</td><td>30~70만 원 수준</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            위 금액은 참고용이며, 실제 시공 범위와 자재는 현장 조사 후 결정됩니다.
            수혜자가 원하는 항목을 임의로 선택할 수 없습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="contact">
        <h2 className="detail-card-head">신청 및 문의</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>채널</th><th>연락처</th></tr></thead>
            <tbody>
              <tr><td>한국에너지재단 콜센터</td><td>☎ 1670-7653</td></tr>
              <tr><td>홈페이지</td><td>kew.or.kr</td></tr>
              <tr><td>방문 신청</td><td>거주지 읍·면·동 주민센터</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '저소득에너지효율개선지원금액가구당243만원',
  breadcrumb: '저소득에너지효율개선지원금액가구당243만원',
  title: '저소득 에너지효율 개선 지원 금액 가구당 평균 243만원',
  description: '저소득층 에너지효율 개선사업 가구당 평균 지원 금액 243만 원, 무상 시공 방식, 항목별 비용 수준을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 저소득에너지효율개선저소득에너지효율개선지원금액가구당243만원SpokeContent };
