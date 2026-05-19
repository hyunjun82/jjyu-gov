import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          새출발기금은 <strong>금융 채무 조정</strong>에 특화된 프로그램이고,
          희망리턴패키지는 <strong>폐업 후 재기 지원</strong>(점포 철거·재교육·취업 연계)에 특화된 프로그램입니다.
          둘은 목적이 달라 <strong>동시에 신청</strong>하는 것이 가능합니다.
        </p>
      </div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">새출발기금 vs 희망리턴패키지 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>새출발기금</th><th>희망리턴패키지</th></tr></thead>
            <tbody>
              <tr><td>주관</td><td>금융위원회·캠코·신복위</td><td>중소벤처기업부·소진공</td></tr>
              <tr><td>목적</td><td>금융 채무 조정·감면</td><td>폐업 부담 완화·재기 지원</td></tr>
              <tr><td>주요 내용</td><td>원금 최대 90% 감면, 상환 기간 연장</td><td>점포 철거비·법률 상담·재교육·채무 조정 연계</td></tr>
              <tr><td>대상</td><td>소상공인·자영업자 (현 영업 중 or 폐업)</td><td>폐업(예정) 소상공인</td></tr>
              <tr><td>신청처</td><td>새출발기금.kr / ☎1800-8180</td><td>sbiz.or.kr / ☎1357</td></tr>
              <tr><td>중복 신청</td><td>가능 (희망리턴 채무조정 메뉴에서 연계)</td><td>가능</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            희망리턴패키지 내에도 채무조정 메뉴가 있으며, 여기서 새출발기금·신용회복위원회·개인파산 등을 연계하여 안내받을 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="choose">
        <h2 className="detail-card-head">어떤 경우에 어느 쪽을 신청하나</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>상황</th><th>추천</th></tr></thead>
            <tbody>
              <tr><td>금융권 채무가 많고 연체 중</td><td>새출발기금 먼저 신청</td></tr>
              <tr><td>폐업 예정이고 점포 정리가 필요</td><td>희망리턴패키지 먼저 신청</td></tr>
              <tr><td>폐업 후 채무도 있고 재기도 필요</td><td>두 가지 동시 신청 가능</td></tr>
              <tr><td>재창업 자금이 필요</td><td>희망리턴패키지 → 재도전특별자금 연계</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '새출발기금희망리턴패키지차이',
  breadcrumb: '새출발기금희망리턴패키지차이',
  title: '새출발기금 희망리턴패키지 소상공인 채무 재기 지원 뭐가 다른가',
  description: '새출발기금(금융채무조정)과 희망리턴패키지(폐업재기)의 차이, 동시 신청 가능 여부, 상황별 선택 방법을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 새출발기금새출발기금희망리턴패키지차이SpokeContent };
