import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          한국장학재단은 대학생의 주거 부담 완화를 위해
          <strong>기숙사 지원 프로그램</strong>을 운영합니다.
          생활비 장학금(대출)과 별개로, 창업 준비 대학생에게는
          <strong>창업기숙사</strong>를 무상으로 제공하기도 합니다.
        </p>
      </div>

      <section className="detail-card" id="program">
        <h2 className="detail-card-head">한국장학재단 주거 지원 프로그램</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>프로그램</th><th>대상</th><th>지원 내용</th></tr></thead>
            <tbody>
              <tr><td>창업기숙사</td><td>창업 준비 대학생·대학원생</td><td>주거+사무 공간 무상 제공</td></tr>
              <tr><td>생활비 대출</td><td>소득 8분위 이하 대학생</td><td>연간 최대 350만 원 (생활비·주거비 포함)</td></tr>
              <tr><td>긴급복지 지원</td><td>갑작스러운 가정 위기 학생</td><td>긴급 생활비·주거비 지원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            한국장학재단은 기숙사를 직접 운영하지 않습니다.
            기숙사비 지원은 생활비 장학금(대출) 또는 소속 대학의 장학 제도를 활용하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="local">
        <h2 className="detail-card-head">지자체 대학생 기숙사비 지원</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>지역</th><th>프로그램</th><th>지원 대상</th></tr></thead>
            <tbody>
              <tr><td>경기도</td><td>경기푸른미래관 (기숙사 제공)</td><td>경기도 출신 취약계층 대학생</td></tr>
              <tr><td>서울시</td><td>희망하우징, 행복(공공)기숙사</td><td>서울 소재 대학 재학생</td></tr>
              <tr><td>각 지자체</td><td>지자체별 대학생 주거 지원</td><td>지역 출신 대학생</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            거주하는 지자체 홈페이지 또는 복지로(bokjiro.go.kr)에서 지역별 대학생 주거 지원 사업을 검색하세요.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '대학생기숙사비지원한국장학재단',
  breadcrumb: '대학생기숙사비지원한국장학재단',
  title: '대학생 기숙사비 지원 한국장학재단과 지자체 지원금',
  description: '한국장학재단 창업기숙사·생활비 대출과 지자체별 대학생 기숙사 지원 프로그램을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 대학생주거지원대학생기숙사비지원한국장학재단SpokeContent };
