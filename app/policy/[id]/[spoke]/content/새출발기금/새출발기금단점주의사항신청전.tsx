import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          새출발기금은 채무 조정 후 <strong>신용 정보에 기록</strong>이 남아 일정 기간 금융 거래가 제한됩니다.
          또한 <strong>1회만 신청 가능</strong>하므로 신중하게 결정해야 합니다.
          신청 전 반드시 금융 전문가 상담을 받는 것을 권장합니다.
        </p>
      </div>

      <section className="detail-card" id="cons">
        <h2 className="detail-card-head">주요 단점 및 주의사항</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>신용 정보 등록</td><td>채무 조정 사실이 신용 정보에 기록 → 신규 대출·카드 발급 제한</td></tr>
              <tr><td>1회 신청 제한</td><td>생애 1회만 신청 가능 (반복 신청 불가)</td></tr>
              <tr><td>이자 면제 없음</td><td>부실우려차주는 원금 감면 없고 이자 조정만</td></tr>
              <tr><td>담보 처분 가능성</td><td>담보채무는 담보물(부동산 등) 처분 조건이 붙을 수 있음</td></tr>
              <tr><td>취업·창업 프로그램</td><td>일부 감면 조건으로 취창업 교육 이수 의무</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            채무 조정 이후 약정을 어기면 조정 혜택이 취소될 수 있습니다. 약정 이후 성실 이행이 중요합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">신청 전 고려사항</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>상황</th><th>권장 선택</th></tr></thead>
            <tbody>
              <tr><td>3개월 이상 연체, 비담보 채무</td><td>새출발기금 (원금 감면 가능)</td></tr>
              <tr><td>연체 없으나 상환 어려움</td><td>새출발기금 부실우려차주 or 신용회복위원회</td></tr>
              <tr><td>폐업 후 채무 정리</td><td>희망리턴패키지 + 새출발기금 병행 검토</td></tr>
              <tr><td>개인 채무 (사업 외)</td><td>신용회복위원회 또는 개인회생 별도 검토</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            서민금융진흥원 '서민금융이음' 서비스를 통해 금융·고용·복지 복합 상담을 무료로 받을 수 있습니다.
            ☎1397 (서민금융콜센터)
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '새출발기금단점주의사항신청전',
  breadcrumb: '새출발기금단점주의사항신청전',
  title: '새출발기금 단점과 주의사항 신청 전 확인할 것',
  description: '새출발기금 신청 전 알아야 할 단점: 신용 정보 등록, 1회 제한, 담보 처분 등 주의사항을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 새출발기금새출발기금단점주의사항신청전SpokeContent };
