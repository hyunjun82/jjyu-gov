import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          새출발기금은 코로나19 피해 소상공인·자영업자를 위한 채무 조정 프로그램입니다.
          <strong>부실차주</strong>(3개월 이상 연체)와 <strong>부실우려차주</strong>(연체 없으나 상환 어려움)로 나뉘며,
          각각 신청 경로와 지원 내용이 다릅니다.
        </p>
      </div>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">신청 자격 구분</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>기준</th><th>신청 경로</th></tr></thead>
            <tbody>
              <tr><td><strong>부실차주</strong></td><td>협약 금융기관 대출 3개월 이상 연체</td><td>캠코(새출발기금.kr)</td></tr>
              <tr><td><strong>부실우려차주</strong></td><td>연체는 없으나 향후 상환이 어려운 경우</td><td>신용회복위원회</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            신청 대상 기간: 2020년 4월~2025년 사이 코로나 관련 대출이 있는 소상공인·자영업자.
            새출발기금 신청은 <strong>1회만 가능</strong>합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="eligible">
        <h2 className="detail-card-head">공통 신청 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>요건</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>사업자 형태</td><td>개인사업자 또는 법인 소상공인</td></tr>
              <tr><td>대출 종류</td><td>은행·비은행 금융권의 사업자 대출</td></tr>
              <tr><td>신청 횟수</td><td>1회만 가능 (중복 불가)</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            불법 채무(사채), 최근 3년간 세법·공정거래법 위반으로 형사처벌받은 경우, 유흥주점 등 불건전 업종 운영자는 신청 불가합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>온라인 (부실차주)</td><td>새출발기금.kr (캠코 운영)</td></tr>
              <tr><td>온라인 (부실우려차주)</td><td>신용회복위원회 ccrs.or.kr</td></tr>
              <tr><td>전화 문의</td><td>☎1800-8180 (새출발기금 콜센터)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '새출발기금신청자격부실차주기준',
  breadcrumb: '새출발기금신청자격부실차주기준',
  title: '새출발기금 신청 자격 부실차주 부실우려차주 기준',
  description: '새출발기금 신청 자격을 부실차주(3개월 연체)와 부실우려차주로 구분하여 각각의 기준과 신청 경로를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 새출발기금새출발기금신청자격부실차주기준SpokeContent };
