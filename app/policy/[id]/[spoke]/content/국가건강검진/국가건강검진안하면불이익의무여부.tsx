import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국가건강검진은 <strong>법적 의무는 아니지만</strong>, 직장가입자(사무직)는 사업장에서
          검진 여부를 관리합니다. 검진을 안 받아도 직접적인 과태료는 없지만,
          <strong>건강보험료 할인 혜택을 받지 못할 수 있고</strong>, 사업주는 미수검자 명단 관리 의무가 있습니다.
        </p>
      </div>

      <section className="detail-card" id="obligation">
        <h2 className="detail-card-head">검진 의무 여부 구분</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>대상</th><th>의무 여부</th><th>미수검 시 불이익</th></tr></thead>
            <tbody>
              <tr><td>직장가입자 (사무직)</td><td>2년마다 수검 권고</td><td>사업주가 미수검자 명단 관리</td></tr>
              <tr><td>직장가입자 (비사무직)</td><td>매년 수검 권고</td><td>산업안전보건법에 따라 사업주 관리</td></tr>
              <tr><td>지역가입자·피부양자</td><td>법적 의무 없음</td><td>직접 불이익 없음</td></tr>
              <tr><td>의료급여수급권자</td><td>수검 권고</td><td>직접 과태료 없음</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            비사무직 근로자는 산업안전보건법에 따라 매년 일반건강검진을 받아야 하며, 사업주가 미수검 시 관련 법에 따라 조치를 받을 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="benefit">
        <h2 className="detail-card-head">검진 받으면 받을 수 있는 혜택</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>혜택</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>운전면허 적성검사 간소화</td><td>최근 2년 내 국가검진 수검 시 신체검사(시력·청력) 면제</td></tr>
              <tr><td>채용 신체검사 대체</td><td>일반건강검진 결과통보서로 채용 신체검사 대체 가능</td></tr>
              <tr><td>조기 질병 발견</td><td>고혈압·당뇨·이상지질혈증 등 조기 발견 시 확진검사 비용 지원</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            전년도 미수검자는 해당 연도에 공단에 신청하면 추가 등록이 가능합니다. 기간을 놓쳤다면 ☎1577-1000으로 문의하세요.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '국가건강검진안하면불이익의무여부',
  breadcrumb: '국가건강검진안하면불이익의무여부',
  title: '국가건강검진 안 하면 불이익 있나 의무 여부 확인',
  description: '국가건강검진은 법적 의무가 아니지만 직장가입자 비사무직은 매년 수검 권고 대상입니다. 미수검 시 불이익과 혜택을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 국가건강검진국가건강검진안하면불이익의무여부SpokeContent };
