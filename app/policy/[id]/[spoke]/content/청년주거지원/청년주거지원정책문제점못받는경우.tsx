import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>청년 주거지원은 예산 소진으로 <strong>선착순 마감</strong>되거나,
        <strong>부모 소득 합산 기준</strong>에서 탈락하거나, <strong>중복 수급 제한</strong>에 걸려 못 받는 경우가 많습니다.
        신청 시기와 서류 준비가 중요합니다.</p>
      </div>
      <section className="detail-card" id="issues">
        <h2 className="detail-card-head">주요 탈락·제한 사유</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>사유</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>예산 소진 선착순 마감</td><td>공고 후 며칠 내 마감. 알림 신청 필수</td></tr>
              <tr><td>부모 소득 합산 초과</td><td>본인 소득은 낮아도 가구 소득이 기준 초과 시 탈락</td></tr>
              <tr><td>중복 수급 불가</td><td>LH 임대·청년전세자금대출 수혜 중이면 월세 지원 불가</td></tr>
              <tr><td>보증금 초과</td><td>보증금 5,000만 원 초과 주택은 신청 불가</td></tr>
              <tr><td>월세 형태 아님</td><td>전세·보증금만 있는 경우 해당 없음</td></tr>
              <tr><td>부모와 같은 주소</td><td>주민등록상 부모와 동일 주소 시 분리 인정 안 됨</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="tips">
        <h2 className="detail-card-head">통과 확률 높이는 방법</h2>
        <div className="detail-card-body">
          <p style={{lineHeight:1.8}}>① 공고 첫날 신청<br/>② 주민등록 분리 완료 확인<br/>③ 월세 계약서·통장 이체 내역 준비<br/>④ 복지로에서 사전 모의 자격 확인</p>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '청년주거지원정책문제점못받는경우',
  breadcrumb: '청년주거지원정책문제점못받는경우',
  title: '청년 주거지원 정책 문제점 — 자격 있어도 못 받는 경우',
  description: '청년 주거지원 정책에서 자격 기준 충족에도 지원을 못 받는 실제 사례와 이유를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 청년주거지원청년주거지원정책문제점못받는경우SpokeContent };
