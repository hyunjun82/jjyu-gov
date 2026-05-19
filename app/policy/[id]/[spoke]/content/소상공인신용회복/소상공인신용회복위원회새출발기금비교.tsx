import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          신용회복위원회는 <strong>부실우려차주(연체 없음)</strong>도 신청 가능하고,
          새출발기금은 <strong>부실차주(연체 3개월↑)</strong>에게 원금 감면을 제공합니다.
          두 제도는 동시 신청이 불가하므로 상황에 맞게 선택해야 합니다.
        </p>
      </div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">신용회복위원회 vs 새출발기금 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>신용회복위원회</th><th>새출발기금</th></tr></thead>
            <tbody>
              <tr><td>주관</td><td>신용회복위원회 (금융위 산하)</td><td>캠코·신복위 (금융위 주도)</td></tr>
              <tr><td>대상</td><td>연체 없어도 신청 가능 (부실우려차주)</td><td>연체 3개월↑ (부실차주) 또는 부실우려</td></tr>
              <tr><td>원금 감면</td><td>원칙적 불가</td><td>비담보채무 최대 90% 감면</td></tr>
              <tr><td>이자 조정</td><td>이자 감면·금리 인하</td><td>이자 감면 포함</td></tr>
              <tr><td>상환 기간</td><td>최장 10년 분할</td><td>최장 20년 분할</td></tr>
              <tr><td>중복 신청</td><td>새출발기금과 중복 불가</td><td>신복위와 중복 불가</td></tr>
              <tr><td>신청처</td><td>ccrs.or.kr / ☎1600-5500</td><td>새출발기금.kr / ☎1800-8180</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="choose">
        <h2 className="detail-card-head">어떤 경우에 어느 쪽이 유리한가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>상황</th><th>추천</th></tr></thead>
            <tbody>
              <tr><td>연체 없고 상환이 어려운 경우</td><td>신용회복위원회 (부실우려차주)</td></tr>
              <tr><td>3개월 이상 연체, 비담보 채무</td><td>새출발기금 (원금 최대 90% 감면)</td></tr>
              <tr><td>상환 기간을 최대한 늘리고 싶다</td><td>새출발기금 (최장 20년)</td></tr>
              <tr><td>소진공 정책자금 채무만 있다</td><td>희망리턴패키지 채무조정 메뉴</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '소상공인신용회복위원회새출발기금비교',
  breadcrumb: '소상공인신용회복위원회새출발기금비교',
  title: '소상공인 신용회복위원회 새출발기금 어떤 경우에 유리한가',
  description: '신용회복위원회(연체 없어도 가능)와 새출발기금(원금 90% 감면)의 차이, 중복 불가 여부, 상황별 선택법을 비교합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 소상공인신용회복소상공인신용회복위원회새출발기금비교SpokeContent };
