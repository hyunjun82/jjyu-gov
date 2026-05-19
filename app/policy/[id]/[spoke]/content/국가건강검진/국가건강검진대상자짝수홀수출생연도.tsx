import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국가건강검진은 <strong>2년마다 1회</strong> 실시됩니다.
          짝수 연도 출생자는 짝수 해에, 홀수 연도 출생자는 홀수 해에 검진을 받습니다.
          단, <strong>비사무직(생산직·현장직)</strong> 근로자는 매년 받을 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">2026년 검진 대상자</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>대상</th><th>주기</th></tr></thead>
            <tbody>
              <tr><td>지역가입자 세대주</td><td>짝수 연도 출생자 (2026년 대상)</td><td>2년마다</td></tr>
              <tr><td>직장가입자</td><td>짝수 연도 출생자 (2026년 대상)</td><td>2년마다</td></tr>
              <tr><td>20세 이상 세대원·피부양자</td><td>짝수 연도 출생자</td><td>2년마다</td></tr>
              <tr><td>의료급여수급권자 (20~64세)</td><td>짝수 연도 출생자</td><td>2년마다</td></tr>
              <tr><td>비사무직 근로자</td><td>출생연도 무관</td><td>매년</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            2026년은 짝수 해입니다. <strong>1990년, 1988년, 1978년</strong> 등 짝수 연도 출생자가 올해 검진 대상입니다.
            홀수 연도(1991년, 1989년 등) 출생자는 2027년에 받습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">내가 대상자인지 확인하는 법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>온라인 확인</td><td>국민건강보험 건강모아 → 나의 건강 → 검진대상 조회 (nhis.or.kr)</td></tr>
              <tr><td>전화 문의</td><td>☎1577-1000 (국민건강보험공단 고객센터)</td></tr>
              <tr><td>검진표 재발급</td><td>가까운 국민건강보험공단 지사 방문 또는 온라인 출력</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            전년도에 검진을 받지 못한 경우, 공단에 신청하면 올해 검진 대상으로 추가 등록이 가능합니다.
            검진 기간은 매년 1월 1일부터 12월 31일까지입니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="note">
        <h2 className="detail-card-head">검진 받을 때 주의사항</h2>
        <div className="detail-card-body">
          <div className="warning-box">
            검진 전날 저녁 9시 이후 금식 필수. 당일 아침은 물·커피·담배·껌 등 일체 금지.
            오후 검진 시 최소 8시간 이상 공복 유지 후 방문하세요.
          </div>
          <div className="info-box" style={{marginTop:12}}>
            신분증(주민등록증·운전면허증·여권)을 반드시 지참해야 검진기관에서 대상자 확인이 가능합니다.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '국가건강검진대상자짝수홀수출생연도',
  breadcrumb: '국가건강검진대상자짝수홀수출생연도',
  title: '2026 국가건강검진 대상자 짝수 홀수 출생연도 확인',
  description: '2026년 국가건강검진 대상자는 짝수 연도 출생자입니다. 비사무직은 매년 가능. 대상 확인 방법과 주의사항을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 국가건강검진국가건강검진대상자짝수홀수출생연도SpokeContent };
