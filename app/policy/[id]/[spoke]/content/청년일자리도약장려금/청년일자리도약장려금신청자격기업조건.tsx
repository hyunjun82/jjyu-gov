import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년일자리도약장려금은 <strong>5인 이상 우선지원대상기업</strong>이 신청할 수 있습니다.
          청년은 <strong>만 15~34세</strong>여야 하며, 정규직으로 채용한 경우에만 지원받을 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="corp">
        <h2 className="detail-card-head">기업 자격 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>요건</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>기업 규모</td><td>우선지원대상기업 (중소기업 해당)</td></tr>
              <tr><td>고용보험</td><td>고용보험 가입 사업장</td></tr>
              <tr><td>체불 이력</td><td>임금체불로 명단 공개된 기업 제외</td></tr>
              <tr><td>고용유지 의무</td><td>참여 직전 3개월 내 집단 해고 없어야 함</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            우선지원대상기업은 제조업 500인 이하, 건설업 300인 이하, 서비스업 100인 이하 등 업종별 기준이 다릅니다.
            고용24(work24.go.kr)에서 해당 여부를 확인할 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="youth">
        <h2 className="detail-card-head">채용 청년 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>요건</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>연령</td><td>만 15~34세 (군필자 최대 39세까지 인정)</td></tr>
              <tr><td>취업 형태</td><td>정규직 신규 채용</td></tr>
              <tr><td>이전 고용</td><td>동일 기업 최근 3개월 내 고용된 적 없어야 함</td></tr>
              <tr><td>우대 대상</td><td>장애인, 고졸 청년, 자립준비청년 등 추가 우대</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="exclude">
        <h2 className="detail-card-head">지원 제외 사업장</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>제외 유형</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>공공기관</td><td>국가·지자체, 공기업, 준정부기관</td></tr>
              <tr><td>임금체불 명단 공개</td><td>고용노동부 명단 공개 기업</td></tr>
              <tr><td>최저임금 위반</td><td>최저임금법 위반 사실 확정 기업</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '청년일자리도약장려금신청자격기업조건',
  breadcrumb: '청년일자리도약장려금신청자격기업조건',
  title: '청년일자리도약장려금 신청 자격 기업 조건과 청년 요건',
  description: '청년일자리도약장려금 신청 가능한 기업 요건(우선지원대상기업), 채용 청년 연령(만 15~34세), 지원 제외 사업장을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 청년일자리도약장려금청년일자리도약장려금신청자격기업조건SpokeContent };
