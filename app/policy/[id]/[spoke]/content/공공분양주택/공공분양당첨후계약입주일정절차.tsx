import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          공공분양 당첨 후에는 <strong>당첨 발표 → 서류 제출 → 계약 체결 → 중도금 납부 → 잔금·입주</strong> 순서로 진행됩니다.
          분양가의 10%를 계약금으로, 이후 중도금(60%), 잔금(30%)을 나눠 납부합니다.
        </p>
      </div>

      <section className="detail-card" id="timeline">
        <h2 className="detail-card-head">당첨 후 입주까지 전체 일정</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>시기</th></tr>
            </thead>
            <tbody>
              <tr><td>당첨 발표</td><td>청약 결과 확인 (청약홈·LH청약플러스)</td><td>청약 후 2~4주</td></tr>
              <tr><td>서류 제출</td><td>자격 검증 서류 제출 (7~14일 이내)</td><td>당첨 직후</td></tr>
              <tr><td>계약 체결</td><td>분양가 10% 계약금 납부 후 계약</td><td>서류 통과 후</td></tr>
              <tr><td>중도금 납부</td><td>분양가 60%를 6회 분할 납부</td><td>계약 후 수개월 간격</td></tr>
              <tr><td>입주 지정일</td><td>공사 완료 후 LH가 입주 일정 통보</td><td>분양 후 2~4년</td></tr>
              <tr><td>잔금·등기</td><td>30% 잔금 납부 + 소유권 이전 등기</td><td>입주 시</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="payment">
        <h2 className="detail-card-head">납부 구조 요약</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>납부 항목</th><th>비율</th><th>방법</th></tr>
            </thead>
            <tbody>
              <tr><td>계약금</td><td>분양가의 10%</td><td>계약 당일 현금</td></tr>
              <tr><td>중도금</td><td>분양가의 60%</td><td>6회 분할 (대출 활용 가능)</td></tr>
              <tr><td>잔금</td><td>분양가의 30%</td><td>입주 시 (주택담보대출 가능)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            중도금 대출은 LH 지정 금융기관에서 집단 대출 형태로 진행됩니다.
          </div>
        </div>
      </section>

      <div className="warning-box" style={{ marginTop: 20 }}>
        <strong>전매 제한 주의:</strong> 공공분양은 소유권 취득 후 5~10년간 전매가 금지됩니다. 기간 내 매도 시 환수 처분을 받습니다.
      </div>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '공공분양당첨후계약입주일정절차',
  breadcrumb: '공공분양당첨후계약입주일정절차',
  title: '공공분양 당첨 후 계약·입주까지 일정과 절차',
  description: '공공분양 당첨 후 서류 제출, 계약금·중도금·잔금 납부, 입주까지의 전체 일정과 절차를 단계별로 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 공공분양주택공공분양당첨후계약입주일정절차SpokeContent };
