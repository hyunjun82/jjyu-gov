import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          새출발기금의 원금 감면은 <strong>부실차주(3개월 이상 연체)</strong>에 한해 적용되며,
          담보채무와 비담보채무에 따라 감면율이 다릅니다.
          최대 <strong>원금 90% 감면</strong>까지 가능하며, 채무 규모·상환 능력에 따라 결정됩니다.
        </p>
      </div>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">채무 유형별 감면 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>채무 유형</th><th>감면 내용</th><th>대상</th></tr></thead>
            <tbody>
              <tr><td>비담보채무</td><td>원금 최대 90% 감면</td><td>부실차주 (3개월↑ 연체)</td></tr>
              <tr><td>담보채무</td><td>상환 기간 연장 + 금리 조정</td><td>부실차주</td></tr>
              <tr><td>부실우려차주</td><td>이자율 인하, 상환기간 연장 (원금 감면 없음)</td><td>연체 없는 상환 어려움</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            원금 감면은 부실차주에게만 해당합니다. 부실우려차주는 원금 감면 없이 이자·기간 조정만 가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">감면 결정 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>1단계</td><td>새출발기금.kr에서 신청 자격 확인</td></tr>
              <tr><td>2단계</td><td>캠코(한국자산관리공사) 채무 현황 분석</td></tr>
              <tr><td>3단계</td><td>상환 능력 심사 후 감면율 결정</td></tr>
              <tr><td>4단계</td><td>채무조정 약정 체결</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            감면 후 잔여 채무는 최장 20년 분할 상환이 가능합니다.
            채무조정 약정 체결 후 재기·취업 프로그램 연계 지원도 받을 수 있습니다.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '새출발기금원금탕감감면조건',
  breadcrumb: '새출발기금원금탕감감면조건',
  title: '새출발기금 원금 탕감 얼마나 감면되나',
  description: '새출발기금 원금 감면율은 최대 90%. 비담보채무 부실차주만 해당. 담보·비담보 구분과 감면 절차를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 새출발기금새출발기금원금탕감감면조건SpokeContent };
