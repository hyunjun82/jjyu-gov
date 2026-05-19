import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>평생교육이용권은 <strong>lllcard.kr</strong>(평생교육이용권 공식 홈페이지)에서 지역·분야별로
        제휴 기관과 강좌를 검색할 수 있습니다. 자격증·어학·예체능·인문학 등 다양한 분야가 포함됩니다.</p>
      </div>
      <section className="detail-card" id="how">
        <h2 className="detail-card-head">사용 기관 검색 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>① 홈페이지 접속</td><td>lllcard.kr → 이용기관 검색</td></tr>
              <tr><td>② 지역 선택</td><td>시·도 / 시·군·구 선택</td></tr>
              <tr><td>③ 분야 선택</td><td>어학·IT·예체능·자격증 등</td></tr>
              <tr><td>④ 기관 방문 또는 연락</td><td>제휴 기관에 수강 신청</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="available">
        <h2 className="detail-card-head">사용 가능·불가 강좌</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>가능</th><th>불가</th></tr></thead>
            <tbody>
              <tr><td>어학(영어·중국어 등)</td><td>학원 입시 강좌</td></tr>
              <tr><td>컴퓨터·IT 자격증</td><td>대학 등록금</td></tr>
              <tr><td>요리·제빵·꽃꽂이</td><td>학교 교육과정 수업</td></tr>
              <tr><td>요가·필라테스·수영</td><td>도박·주류 관련</td></tr>
              <tr><td>인문학·역사·글쓰기</td><td>해외 연수</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '평생교육이용권사용가능기관강좌확인',
  breadcrumb: '평생교육이용권사용가능기관강좌확인',
  title: '평생교육이용권 사용 가능한 기관·강좌 확인 방법',
  description: '평생교육이용권(바우처)을 쓸 수 있는 기관과 강좌를 찾는 방법, 사용 불가 강좌를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 평생교육이용권평생교육이용권사용가능기관강좌확인SpokeContent };
