import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>실업크레딧은 <strong>구직급여 수급 기간 중</strong>에만 신청할 수 있습니다. <strong>구직급여 종료일이 속하는 달의 다음 달 15일</strong>이 신청 마감입니다. 수급 중 국민연금공단 또는 고용센터에서 신청합니다.</p></div>
      <section className="detail-card" id="when"><h2 className="detail-card-head">신청 가능 시기</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>내용</th></tr></thead><tbody><tr><td>신청 가능 기간</td><td>구직급여 수급 기간 중</td></tr><tr><td>신청 마감</td><td>구직급여 종료일 다음 달 15일까지</td></tr><tr><td>소급 신청</td><td>불가</td></tr></tbody></table></div></section>
      <section className="detail-card" id="how"><h2 className="detail-card-head">신청 방법</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>방법</th><th>경로</th></tr></thead><tbody><tr><td>온라인</td><td>국민연금공단 홈페이지(nps.or.kr) → 실업크레딧 신청</td></tr><tr><td>방문</td><td>가까운 국민연금공단 지사 또는 고용센터</td></tr><tr><td>전화</td><td>국민연금공단 콜센터 1355</td></tr></tbody></table><div className="info-box" style={{marginTop:12}}>신청 자격: 구직급여 수급자 중 국민연금 보험료 1개월 이상 납부 이력이 있는 분.</div></div></section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '실업크레딧퇴사후신청방법시기',
  breadcrumb: '실업크레딧퇴사후신청방법시기',
  title: '퇴사 후 실업크레딧 언제부터 어떻게 신청하나',
  description: '퇴사 후 구직급여 수급 기간 중 실업크레딧 신청 시기, 방법, 신청처를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 실업크레딧실업크레딧퇴사후신청방법시기SpokeContent };
