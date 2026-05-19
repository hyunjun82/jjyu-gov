import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          저소득층 에너지효율 개선사업은 <strong>단열재·창호·보일러·에어컨</strong>을 포함한 다양한 항목을 지원합니다.
          주택 현황 조사 후 필요한 항목을 선정해 무상으로 시공해 줍니다.
        </p>
      </div>

      <section className="detail-card" id="items">
        <h2 className="detail-card-head">지원 항목</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>지원 항목</th></tr></thead>
            <tbody>
              <tr><td>단열</td><td>지붕·벽·바닥 단열재 시공, 창호 교체</td></tr>
              <tr><td>난방</td><td>보일러 교체 (가스·기름·전기)</td></tr>
              <tr><td>냉방</td><td>에어컨 설치 또는 교체</td></tr>
              <tr><td>기타</td><td>환기 설비, 조명 LED 교체 등</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            모든 항목이 동시에 지원되는 것은 아닙니다. 주택 현황 조사 결과에 따라 필요한 항목이 선정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="survey">
        <h2 className="detail-card-head">시공 전 현황 조사</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>조사 항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>주택 노후도</td><td>건축 연도, 단열 상태, 창호 상태</td></tr>
              <tr><td>난방 방식</td><td>보일러 종류, 연식, 작동 여부</td></tr>
              <tr><td>에너지 사용량</td><td>최근 전기·가스·등유 사용량 확인</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            한국에너지재단 직원이 현장 방문해 조사를 진행합니다.
            조사 결과에 따라 지원 항목과 시공 순서가 결정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="contact">
        <h2 className="detail-card-head">문의처</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>채널</th><th>연락처</th></tr></thead>
            <tbody>
              <tr><td>한국에너지재단 콜센터</td><td>☎ 1670-7653</td></tr>
              <tr><td>온라인</td><td>kew.or.kr</td></tr>
              <tr><td>방문</td><td>주민센터 사회복지 담당자</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '저소득에너지효율개선지원항목단열창호보일러에어컨',
  breadcrumb: '저소득에너지효율개선지원항목단열창호보일러에어컨',
  title: '저소득 에너지효율 개선 지원 항목 단열 창호 보일러 에어컨',
  description: '저소득층 에너지효율 개선사업 지원 항목인 단열재·창호·보일러·에어컨 시공 내용과 현황 조사 절차를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 저소득에너지효율개선저소득에너지효율개선지원항목단열창호보일러에어컨SpokeContent };
