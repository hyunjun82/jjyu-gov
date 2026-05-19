import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          서울에는 <strong>희망하우징(SH)</strong>과 <strong>행복(공공)기숙사</strong> 두 가지 공공기숙사가 있습니다.
          희망하우징은 SH공사가 운영하는 원룸형 기숙사이고,
          행복기숙사는 여러 대학 학생이 함께 사용하는 연합형 공공기숙사입니다.
        </p>
      </div>

      <section className="detail-card" id="types">
        <h2 className="detail-card-head">서울 대학생 공공기숙사 종류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>종류</th><th>운영</th><th>특징</th><th>신청처</th></tr></thead>
            <tbody>
              <tr><td>희망하우징</td><td>SH 서울주택도시공사</td><td>원룸형, 기숙사형. 대학생 전용 공공임대</td><td>i-sh.co.kr</td></tr>
              <tr><td>행복(공공)기숙사</td><td>서울시·한국사학진흥재단</td><td>여러 대학 연합. 월세 저렴</td><td>housing.seoul.go.kr</td></tr>
              <tr><td>동소문·홍제 행복기숙사</td><td>한국사학진흥재단</td><td>시내 위치. 월 10만원대 수준</td><td>happydorm.or.kr</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법 및 자격</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>프로그램</th><th>자격</th><th>신청 시기</th></tr></thead>
            <tbody>
              <tr><td>희망하우징</td><td>서울 소재 대학 재학생, 소득 기준 충족</td><td>공고 시 (SH 홈페이지)</td></tr>
              <tr><td>행복기숙사</td><td>해당 협약 대학 재학생, 학교 추천</td><td>학기 초 (대학별 공고)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            희망하우징은 i-sh.co.kr에서 공고를 확인하고 온라인 청약으로 신청합니다.
            행복기숙사는 소속 대학의 기숙사 담당 부서를 통해 신청하세요.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '서울대학생공공기숙사종류신청방법',
  breadcrumb: '서울대학생공공기숙사종류신청방법',
  title: '서울 대학생 공공기숙사 종류와 신청 방법',
  description: '서울 희망하우징(SH)과 행복기숙사 종류, 자격 조건, 신청 시기와 방법을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 대학생주거지원서울대학생공공기숙사종류신청방법SpokeContent };
