import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026학년도 2학기 국가장학금 <strong>1차 신청은 2026년 5월 20일부터 6월 중순</strong>까지입니다.
          1차 기간 내 신청하지 못하면 <strong>2차 신청(8~9월)</strong>이 마지막 기회입니다.
          2차는 지원금이 줄어들 수 있으니 1차를 놓치지 마세요.
        </p>
      </div>
      <section className="detail-card" id="schedule">
        <h2 className="detail-card-head">2026학년도 2학기 신청 일정</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>신청 기간</th><th>결과 발표</th></tr></thead>
            <tbody>
              <tr><td>1차 신청</td><td>2026.05.20 ~ 06.중순</td><td>2026년 7월</td></tr>
              <tr><td>2차 신청</td><td>2026.08 ~ 09.초</td><td>2026년 9~10월</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>2차 신청자는 예산 소진 여부에 따라 1차보다 지원금이 적을 수 있습니다. 반드시 1차 신청을 권장합니다.</div>
        </div>
      </section>
      <section className="detail-card" id="apply-way">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>PC 신청</td><td>한국장학재단 홈페이지 (kosaf.go.kr) → 로그인 → 국가장학금 신청</td></tr>
              <tr><td>모바일 신청</td><td>한국장학재단 앱 → 국가장학금 신청</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>신청 시 가족 정보·소득 확인을 위해 부모(또는 배우자)의 공인인증서·금융정보 제공 동의가 필요합니다.</div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '국가장학금2차신청기간2026',
  breadcrumb: '국가장학금2차신청기간2026',
  title: '국가장학금 2차 신청기간 언제까지인가',
  description: '2026학년도 2학기 국가장학금 1차·2차 신청기간, 마감일, 주의사항을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 국가장학금국가장학금2차신청기간2026SpokeContent };
