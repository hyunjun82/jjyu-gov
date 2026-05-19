import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          폐업 소상공인 지원(희망리턴패키지)과 새출발기금은 목적이 다릅니다.
          희망리턴패키지는 <strong>폐업 과정 지원</strong>이고,
          새출발기금은 <strong>금융 채무 조정</strong>입니다.
          두 프로그램을 동시에 이용하는 것이 가능합니다.
        </p>
      </div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">핵심 차이 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>희망리턴패키지 (폐업지원)</th><th>새출발기금 (채무조정)</th></tr></thead>
            <tbody>
              <tr><td>주관</td><td>중소벤처기업부·소진공</td><td>금융위원회·캠코·신복위</td></tr>
              <tr><td>목적</td><td>폐업 부담 완화, 재기 지원</td><td>금융 채무 원금 감면·기간 연장</td></tr>
              <tr><td>대상 채무</td><td>소진공 정책자금 (분할 상환 조정)</td><td>금융권 사업자 대출 전반</td></tr>
              <tr><td>원금 감면</td><td>없음 (상환 유예·분할만 가능)</td><td>최대 90% 감면 (부실차주 한정)</td></tr>
              <tr><td>점포 지원</td><td>철거비 최대 600만원</td><td>없음</td></tr>
              <tr><td>재기 지원</td><td>교육·취업·재창업 연계</td><td>취창업 프로그램 연계 가능</td></tr>
              <tr><td>신청처</td><td>sbiz.or.kr / ☎1357</td><td>새출발기금.kr / ☎1800-8180</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            희망리턴패키지의 채무조정 메뉴에서 새출발기금·신용회복위원회로 연계가 가능합니다.
            두 제도를 함께 이용하면 폐업 과정과 채무 정리를 동시에 처리할 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="when">
        <h2 className="detail-card-head">상황별 선택 가이드</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>상황</th><th>먼저 신청할 것</th></tr></thead>
            <tbody>
              <tr><td>점포 철거가 급하다</td><td>희망리턴패키지 (철거비 600만원)</td></tr>
              <tr><td>금융권 채무 연체 3개월 이상</td><td>새출발기금 (원금 감면)</td></tr>
              <tr><td>재취업·재창업을 준비 중</td><td>희망리턴패키지 (교육·취업 연계)</td></tr>
              <tr><td>둘 다 해당</td><td>동시 신청 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '폐업소상공인지원새출발기금차이',
  breadcrumb: '폐업소상공인지원새출발기금차이',
  title: '폐업 소상공인 지원 새출발기금 대상과 내용 차이',
  description: '희망리턴패키지(폐업지원)와 새출발기금(금융채무조정)의 목적·대상·원금감면·중복신청 여부를 비교합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 폐업소상공인채무조정폐업소상공인지원새출발기금차이SpokeContent };
