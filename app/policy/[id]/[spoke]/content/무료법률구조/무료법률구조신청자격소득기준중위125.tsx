import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          대한법률구조공단의 무료법률구조는 <strong>기준 중위소득 125% 이하</strong>인 국민이면 신청할 수 있습니다.
          소득 외에 농·어업인, 장애인, 한부모가족 등 특정 대상자는 소득 기준과 무관하게 지원받을 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득 기준 (기준 중위소득 125%)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>가구원 수</th><th>기준 중위소득 100%</th><th>신청 기준 125%</th></tr></thead>
            <tbody>
              <tr><td>1인</td><td>2,392,013원</td><td>2,990,016원 이하</td></tr>
              <tr><td>2인</td><td>3,932,658원</td><td>4,915,823원 이하</td></tr>
              <tr><td>3인</td><td>5,025,353원</td><td>6,281,691원 이하</td></tr>
              <tr><td>4인</td><td>6,097,773원</td><td>7,622,216원 이하</td></tr>
              <tr><td>5인</td><td>7,108,192원</td><td>8,885,240원 이하</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            월 평균 소득액 기준이며, 재산도 함께 심사합니다.
            금융재산·부동산 등을 포함한 환산 소득이 기준을 초과하면 일부 비용을 부담할 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="special">
        <h2 className="detail-card-head">소득 무관 우선 지원 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>대상</th><th>근거</th></tr></thead>
            <tbody>
              <tr><td>농·어업인</td><td>농어업인 삶의 질 향상 특별법</td></tr>
              <tr><td>장애인</td><td>장애인복지법</td></tr>
              <tr><td>한부모가족</td><td>한부모가족지원법</td></tr>
              <tr><td>북한이탈주민</td><td>북한이탈주민법</td></tr>
              <tr><td>성폭력·가정폭력 피해자</td><td>관련 특별법</td></tr>
              <tr><td>국가유공자</td><td>국가유공자법</td></tr>
              <tr><td>결혼이민자·다문화가족</td><td>다문화가족지원법</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            위 대상자는 소득 기준을 별도로 심사하지 않고 우선 지원합니다.
            법원을 통한 소송구조도 별도로 신청할 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="howcheck">
        <h2 className="detail-card-head">소득 기준 확인 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>안내</th></tr></thead>
            <tbody>
              <tr><td>전화 상담</td><td>☎ 132 (법률구조공단 콜센터, 24시간)</td></tr>
              <tr><td>온라인 신청</td><td>klac.or.kr → 법률지원 → 소송구조 신청</td></tr>
              <tr><td>방문 상담</td><td>전국 공단 지부·출장소 방문, 소득 서류 지참</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            소득 기준이 애매한 경우에도 일단 132번에 전화하면 자격 여부를 무료로 안내받을 수 있습니다.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '무료법률구조신청자격소득기준중위125',
  breadcrumb: '무료법률구조신청자격소득기준중위125',
  title: '무료법률구조 신청 자격 소득 기준 중위소득 125%',
  description: '대한법률구조공단 무료법률구조 신청 자격인 기준 중위소득 125% 이하 기준과 소득 무관 우선 지원 대상을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 무료법률구조무료법률구조신청자격소득기준중위125SpokeContent };
