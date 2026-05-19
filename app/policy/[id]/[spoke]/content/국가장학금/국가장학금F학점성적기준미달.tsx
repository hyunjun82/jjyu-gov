import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국가장학금 계속 수급을 위해서는 직전 학기 <strong>성적 70점(B0) 이상</strong>,
          <strong>12학점 이상 이수</strong>가 필요합니다.
          F학점이 있어도 평균 70점 이상이면 받을 수 있지만, 미달 시 다음 학기 지원이 중단됩니다.
        </p>
      </div>
      <section className="detail-card" id="grade">
        <h2 className="detail-card-head">성적 기준 상세</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>기준</th><th>예외</th></tr></thead>
            <tbody>
              <tr><td>평점</td><td>직전학기 70점(B0) 이상</td><td>신입생 첫 학기·편입생·장애학생 제외</td></tr>
              <tr><td>이수학점</td><td>직전학기 12학점 이상</td><td>장애학생·졸업학기는 완화</td></tr>
              <tr><td>F학점</td><td>평균에 반영됨</td><td>평균 70점 이상이면 F 있어도 수급 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="fail">
        <h2 className="detail-card-head">성적 미달 시 어떻게 되나</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>상황</th><th>결과</th></tr></thead>
            <tbody>
              <tr><td>처음 성적 미달</td><td>다음 학기 지원 중단 (경고 1회)</td></tr>
              <tr><td>다음 학기 성적 회복</td><td>지원 재개 가능</td></tr>
              <tr><td>연속 2회 미달</td><td>일정 기간 지원 불가 (심화 제재)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>신입생·편입생은 첫 학기 성적 기준 없이 지원받고, 이후 학기부터 성적 기준이 적용됩니다.</div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '국가장학금F학점성적기준미달',
  breadcrumb: '국가장학금F학점성적기준미달',
  title: '국가장학금 F학점·성적 기준 — 미달 시 어떻게 되나',
  description: '국가장학금 성적 기준(70점 이상, 12학점 이상)과 F학점이 있을 때 지원이 어떻게 달라지는지 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 국가장학금국가장학금F학점성적기준미달SpokeContent };
