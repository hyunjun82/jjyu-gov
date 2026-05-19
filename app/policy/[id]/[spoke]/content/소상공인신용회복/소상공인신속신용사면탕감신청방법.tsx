import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2025~2026년 정부는 소액 연체 채무를 전액 상환한 서민·소상공인 <strong>292.8만 명</strong>에게
          신용 정보 해제 혜택을 제공했습니다.
          연체 기록이 삭제되면 신용점수가 회복되어 대출·카드 발급이 다시 가능해집니다.
        </p>
      </div>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">신속 신용회복 지원 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>조건</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>연체 기간</td><td>2020년 1월~2025년 8월 중 발생한 소액 연체</td></tr>
              <tr><td>채무 규모</td><td>5천만 원 이하 소액 연체</td></tr>
              <tr><td>상환 조건</td><td>2025년 12월 31일까지 연체 금액 전액 상환</td></tr>
              <tr><td>자동 적용</td><td>요건 충족 시 별도 신청 없이 신용 정보 자동 해제</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            신용 사면 후 KCB 신용점수 평균 39점 상승, 23만 명이 신용카드를 새로 발급받는 효과가 있었습니다.
            (출처: 신용회복위원회·금융위원회, 2026.1)
          </div>
        </div>
      </section>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">내 신용 사면 여부 확인 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>올크레딧</td><td>www.allcredit.co.kr → 신용회복지원 확인</td></tr>
              <tr><td>나이스 신용정보</td><td>www.credit.co.kr</td></tr>
              <tr><td>전화 문의</td><td>☎1600-5500 (신용회복위원회)</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            신속 신용 사면은 한시적 조치입니다. 2025년 말 기준 상환 완료가 조건이므로, 현재 시점에 따라 혜택 여부가 다를 수 있습니다. 공단에 직접 확인하세요.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '소상공인신속신용사면탕감신청방법',
  breadcrumb: '소상공인신속신용사면탕감신청방법',
  title: '소상공인 신속 신용 사면 채무 탕감 조건과 신청 방법',
  description: '2025~2026년 서민·소상공인 신속 신용 사면: 5천만원 이하 연체 후 전액 상환 시 신용 정보 자동 해제. 292.8만명 혜택.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 소상공인신용회복소상공인신속신용사면탕감신청방법SpokeContent };
