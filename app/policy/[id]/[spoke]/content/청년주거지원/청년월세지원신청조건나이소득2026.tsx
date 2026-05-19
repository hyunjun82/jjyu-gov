import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>2026년 청년 월세 지원은 <strong>만 19~34세 무주택 청년</strong>으로 월세 <strong>70만 원 이하</strong>,
        보증금 <strong>5,000만 원 이하</strong> 주택에 거주하며, 소득이 <strong>기준 중위소득 60% 이하</strong>인 경우 신청할 수 있습니다.</p>
      </div>
      <section className="detail-card" id="cond">
        <h2 className="detail-card-head">신청 자격 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>나이</td><td>만 19세 이상 ~ 34세 이하</td></tr>
              <tr><td>주택 요건</td><td>월세 70만 원 이하, 보증금 5,000만 원 이하</td></tr>
              <tr><td>소득(본인)</td><td>기준 중위소득 60% 이하</td></tr>
              <tr><td>소득(가구 합산)</td><td>중위소득 100% 이하</td></tr>
              <tr><td>거주 요건</td><td>부모와 별도 거주</td></tr>
              <tr><td>무주택</td><td>본인 명의 주택 없음</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="benefit">
        <h2 className="detail-card-head">지원 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>지원 금액</td><td>월 최대 20만 원</td></tr>
              <tr><td>지원 기간</td><td>최대 12개월</td></tr>
              <tr><td>신청처</td><td>복지로(bokjiro.go.kr) 또는 주민센터 방문</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '청년월세지원신청조건나이소득2026',
  breadcrumb: '청년월세지원신청조건나이소득2026',
  title: '청년월세지원 신청조건 — 나이·소득 기준 2026',
  description: '2026년 청년 월세 지원 신청 연령(19~34세)·소득·보증금·월세 기준과 신청 방법을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 청년주거지원청년월세지원신청조건나이소득2026SpokeContent };
