import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>새도약론은 <strong>2018년 6월 19일 이전 연체 발생</strong> 후 채무조정을 거쳐 현재도 잔여채무를 갚고 있는 분들을 위한 저금리 특례대출입니다. 아래 3가지 요건을 모두 충족해야 합니다.</p></div>
      <section className="detail-card" id="req"><h2 className="detail-card-head">신청 자격 3가지 요건</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>요건</th><th>기준</th></tr></thead><tbody><tr><td>연체 발생 시점</td><td>2018년 6월 19일 이전 최초 연체</td></tr><tr><td>채무조정 이행</td><td>신용회복위원회·법원 채무조정 이행 중</td></tr><tr><td>이행 기간</td><td>채무조정 이행 6개월 이상 경과</td></tr></tbody></table><div className="info-box" style={{marginTop:12}}>세 가지 모두 충족해야 신청 가능합니다. 하나라도 해당 안 되면 새도약론 대상이 아닙니다.</div></div></section>
      <section className="detail-card" id="confirm"><h2 className="detail-card-head">대상자 여부 확인 방법</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>방법</th><th>경로</th></tr></thead><tbody><tr><td>온라인 확인</td><td>서민금융진흥원(kinfa.or.kr) → 새도약론 안내</td></tr><tr><td>전화 상담</td><td>서민금융콜센터 1600-5500</td></tr><tr><td>방문 상담</td><td>서민금융통합지원센터 (전국 50여 곳)</td></tr></tbody></table></div></section>
      <section className="detail-card" id="limit"><h2 className="detail-card-head">대출 조건 요약</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>이행 기간</th><th>대출 한도</th><th>금리</th></tr></thead><tbody><tr><td>6~11개월</td><td>300만 원</td><td>연 4.0%</td></tr><tr><td>12~23개월</td><td>1,000만 원</td><td>연 3.8%</td></tr><tr><td>24~35개월</td><td>1,500만 원</td><td>연 3.5%</td></tr><tr><td>36개월 이상</td><td>1,500만 원</td><td>연 3.0%</td></tr></tbody></table></div></section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '새도약론신청자격대상자확인',
  breadcrumb: '새도약론신청자격대상자확인',
  title: '새도약론 신청자격 — 대상자 여부 확인 방법',
  description: '새도약론 신청 자격(2018년 이전 연체, 채무조정 이행 중)과 대상자 여부 확인 방법을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 새도약론새도약론신청자격대상자확인SpokeContent };
