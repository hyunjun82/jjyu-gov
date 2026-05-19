import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 일반상환학자금대출 금리는 <strong>연 1.7%(고정금리)</strong>입니다.
          재학 중에는 이자만 납부하고, 졸업 후 원금·이자를 분할 상환합니다.
          학기당 생활비 200만 원, 등록금 전액이 한도입니다.
        </p>
      </div>
      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">2026년 금리 현황</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>적용 금리</td><td>연 1.7% (2026 기준 고정금리)</td></tr>
              <tr><td>등록금 대출 한도</td><td>학기별 등록금 전액</td></tr>
              <tr><td>생활비 대출 한도</td><td>학기당 200만 원</td></tr>
              <tr><td>나이 제한</td><td>만 35세 이하 (선취업 후진학자 만 45세)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="interest-example">
        <h2 className="detail-card-head">이자 예시 계산</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>대출 잔액</th><th>월 이자(연 1.7%)</th><th>연 이자</th></tr></thead>
            <tbody>
              <tr><td>1,000만 원</td><td>약 14,200원</td><td>약 170,000원</td></tr>
              <tr><td>3,000만 원</td><td>약 42,500원</td><td>약 510,000원</td></tr>
              <tr><td>5,000만 원</td><td>약 70,800원</td><td>약 850,000원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>재학 중 이자는 매월 납부. 미납 시 연체 가산이자 발생.</div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '일반상환학자금2026금리이자',
  breadcrumb: '일반상환학자금2026금리이자',
  title: '일반상환학자금 2026 금리와 실제 이자 얼마나 내나',
  description: '2026년 일반상환학자금대출 금리(연 1.7%)와 재학 중·졸업 후 이자 납부 구조를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 일반상환학자금대출일반상환학자금2026금리이자SpokeContent };
