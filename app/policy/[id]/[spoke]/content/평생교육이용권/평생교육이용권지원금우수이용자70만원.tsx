import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>평생교육이용권 기본 지원금은 <strong>연 35만 원</strong>입니다.
        전년도 수강을 성실히 이수한 우수이용자로 선정되면 <strong>추가 35만 원을 더해 연 70만 원</strong>까지 받을 수 있습니다.</p>
      </div>
      <section className="detail-card" id="basic">
        <h2 className="detail-card-head">지원금 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>지원금</th><th>조건</th></tr></thead>
            <tbody>
              <tr><td>기본 지원</td><td>연 35만 원</td><td>선발 인원 약 30,000명 이내</td></tr>
              <tr><td>우수이용자 추가</td><td>추가 35만 원 (계 70만 원)</td><td>전년도 80% 이상 이수 + 학습일지 제출</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="excellent">
        <h2 className="detail-card-head">우수이용자 선정 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>수강 이수율</td><td>전년도 신청 강좌의 80% 이상 이수</td></tr>
              <tr><td>학습일지</td><td>lllcard.kr에 학습일지 정기 작성</td></tr>
              <tr><td>선발 규모</td><td>전년도 이용자 중 상위 일정 비율</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>우수이용자 추가 지원은 연초 별도 공고로 안내됩니다. 전년도부터 꾸준히 이수하고 일지를 작성해야 합니다.</div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '평생교육이용권지원금우수이용자70만원',
  breadcrumb: '평생교육이용권지원금우수이용자70만원',
  title: '평생교육이용권 지원금 35만원 — 우수이용자 70만원 추가 조건',
  description: '평생교육이용권 기본 지원금 35만 원과 우수이용자 추가 지원 70만 원의 조건을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 평생교육이용권평생교육이용권지원금우수이용자70만원SpokeContent };
