import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국가장학금은 학생 통장이 아닌 <strong>대학 등록금 계좌로 직접 지급</strong>됩니다.
          보통 <strong>등록금 납부 기간 전후(학기 시작 1~2개월 전)</strong>에 대학으로 입금되어
          등록금에서 차감 처리됩니다.
        </p>
      </div>
      <section className="detail-card" id="timing">
        <h2 className="detail-card-head">학기별 지급 시기</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>학기</th><th>등록금 납부</th><th>장학금 반영 시기</th></tr></thead>
            <tbody>
              <tr><td>1학기 (1차 신청)</td><td>2~3월</td><td>2~3월 등록금 납부 시 차감</td></tr>
              <tr><td>2학기 (1차 신청)</td><td>8~9월</td><td>8~9월 등록금 납부 시 차감</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            장학금이 등록금을 초과하는 경우, 초과분은 학생 본인 계좌로 환급됩니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="check">
        <h2 className="detail-card-head">지급 현황 확인 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>한국장학재단 홈페이지</td><td>kosaf.go.kr → 장학금 → 지급현황 조회</td></tr>
              <tr><td>모바일 앱</td><td>한국장학재단 앱 → 나의 장학금</td></tr>
              <tr><td>문의</td><td>1599-2000 (한국장학재단 콜센터)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '국가장학금지급일통장입금시기',
  breadcrumb: '국가장학금지급일통장입금시기',
  title: '국가장학금 지급일 — 통장에 언제 들어오나',
  description: '국가장학금이 등록금 납부 계좌로 입금되는 시기와 과정을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 국가장학금국가장학금지급일통장입금시기SpokeContent };
