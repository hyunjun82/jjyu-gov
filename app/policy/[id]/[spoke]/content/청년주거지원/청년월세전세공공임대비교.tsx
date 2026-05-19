import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>당장 월세 부담이 급하면 <strong>청년 월세 지원</strong>, 보증금 마련이 필요하면 <strong>청년 전세자금대출</strong>,
        장기 안정이 목표라면 <strong>공공임대 청약</strong> 순서로 접근하는 게 일반적입니다.</p>
      </div>
      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">3가지 청년 주거지원 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>유형</th><th>지원 내용</th><th>소득 기준</th><th>나이 제한</th></tr></thead>
            <tbody>
              <tr><td>청년 월세 지원</td><td>월 최대 20만 원 × 12개월</td><td>중위소득 60%</td><td>19~34세</td></tr>
              <tr><td>청년 버팀목 전세대출</td><td>최대 2억 원, 금리 1.2~2.1%</td><td>중위소득 100%</td><td>19~34세</td></tr>
              <tr><td>청년 공공임대(행복주택)</td><td>시세 60~80% 임대료</td><td>100~150%</td><td>19~39세</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="priority">
        <h2 className="detail-card-head">상황별 신청 우선순위</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>내 상황</th><th>우선 신청</th></tr></thead>
            <tbody>
              <tr><td>이미 월세 살고 있음</td><td>청년 월세 지원 → 이후 전세 전환 검토</td></tr>
              <tr><td>전세 보증금 부족</td><td>버팀목 전세대출</td></tr>
              <tr><td>장기 저렴한 주거 원함</td><td>행복주택 청약 대기</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>월세 지원과 버팀목 전세대출은 중복 수혜 불가. 전세 전환 시 월세 지원 중단됩니다.</div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '청년월세전세공공임대비교',
  breadcrumb: '청년월세전세공공임대비교',
  title: '청년 월세보조 vs 전세대출 vs 공공임대 뭐 먼저 신청할까',
  description: '청년 주거지원 3가지(월세지원·전세자금대출·공공임대)의 조건·혜택·신청 우선순위를 비교합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 청년주거지원청년월세전세공공임대비교SpokeContent };
