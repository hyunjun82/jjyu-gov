import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          희망리턴패키지는 폐업(예정) 소상공인에게
          <strong>사업정리컨설팅·점포철거비·법률자문·채무조정·재취업·재창업</strong>을
          패키지로 제공하는 종합 재기 지원 사업입니다.
          소상공인시장진흥공단이 운영하며, 온라인으로 신청할 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="menu">
        <h2 className="detail-card-head">지원 항목 한눈에 보기</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th><th>한도</th></tr></thead>
            <tbody>
              <tr><td>사업정리 컨설팅</td><td>재기전략·세무·부동산·직무·심리 등 1:1 전문가 상담 (최대 3개 분야)</td><td>무료</td></tr>
              <tr><td>점포 철거비</td><td>인테리어 철거, 원상 복구 비용 지원</td><td>최대 600만 원</td></tr>
              <tr><td>법률 자문</td><td>임대차·노무·신용·가맹 등 전담 변호사 1:1 법률 자문</td><td>무료</td></tr>
              <tr><td>채무 조정</td><td>신용 전문가 상담 후 신복위·새출발기금·파산 연계</td><td>-</td></tr>
              <tr><td>재취업 지원</td><td>취업 알선, 직업 훈련 연계</td><td>-</td></tr>
              <tr><td>재창업 교육</td><td>재창업 준비 교육 및 멘토링</td><td>-</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">신청 자격</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>요건</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>대상</td><td>소상공인기본법에 따른 소상공인 (폐업 또는 폐업 예정)</td></tr>
              <tr><td>폐업일 (컨설팅·철거·법률)</td><td>2023년 1월 1일 이후 폐업자</td></tr>
              <tr><td>채무조정</td><td>폐업일 무관 (법인 제외)</td></tr>
              <tr><td>사업 개시일</td><td>사업자등록증 기준 60일 이상 경과</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            2026년 예산: 1,932억 원, 지원 목표: 44,250건 내외.
            신청: sbiz.or.kr (희망리턴패키지) / 전화: ☎1357, ☎1533-0100
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '희망리턴패키지폐업재기지원총정리',
  breadcrumb: '희망리턴패키지폐업재기지원총정리',
  title: '희망리턴패키지 폐업 후 재기 지원 총정리',
  description: '희망리턴패키지 컨설팅·점포철거 600만원·법률자문·채무조정·재취업·재창업 교육까지 전체 지원 항목을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 폐업소상공인채무조정희망리턴패키지폐업재기지원총정리SpokeContent };
