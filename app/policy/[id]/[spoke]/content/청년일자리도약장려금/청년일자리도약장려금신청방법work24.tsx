import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년일자리도약장려금은 <strong>고용24(work24.go.kr)</strong>에서 온라인으로 신청합니다.
          청년 채용 후 <strong>1개월 이내</strong>에 신청해야 하며, 기간을 넘기면 해당 채용 건은 지원받을 수 없습니다.
        </p>
      </div>

      <section className="detail-card" id="step">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>1단계</td><td>고용24(work24.go.kr) → 기업 로그인 (공동인증서)</td></tr>
              <tr><td>2단계</td><td>청년일자리도약장려금 → 참여 신청</td></tr>
              <tr><td>3단계</td><td>사업장 정보, 채용 청년 정보 입력</td></tr>
              <tr><td>4단계</td><td>관할 고용센터 심사 (적격 여부 확인)</td></tr>
              <tr><td>5단계</td><td>참여 확정 통보 → 고용 유지 관리</td></tr>
              <tr><td>6단계</td><td>6개월 후 1차 지급 신청 → 12개월 후 2차 지급 신청</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            지급 신청도 고용24에서 진행하며, 각 시점(6개월·12개월)에 별도로 신청해야 합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="deadline">
        <h2 className="detail-card-head">신청 기한</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>시점</th><th>기한</th></tr></thead>
            <tbody>
              <tr><td>참여 신청</td><td>청년 채용일로부터 1개월 이내</td></tr>
              <tr><td>1차 지급 신청</td><td>6개월 고용 유지 확인 후 3개월 이내</td></tr>
              <tr><td>2차 지급 신청</td><td>12개월 고용 유지 확인 후 3개월 이내</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">준비 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>서류</th><th>비고</th></tr></thead>
            <tbody>
              <tr><td>근로계약서 사본</td><td>정규직 채용 증명</td></tr>
              <tr><td>고용보험 취득 확인서</td><td>고용보험 EDI 자동 연동 가능</td></tr>
              <tr><td>사업자등록증 사본</td><td>최초 신청 시</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            문의: 고용노동부 고객상담센터 ☎ 1350 또는 관할 고용센터 방문
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '청년일자리도약장려금신청방법work24',
  breadcrumb: '청년일자리도약장려금신청방법work24',
  title: '청년일자리도약장려금 신청 방법 고용24 work24 절차',
  description: '청년일자리도약장려금 고용24(work24.go.kr) 신청 절차, 기한(채용 후 1개월 이내), 준비 서류를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 청년일자리도약장려금청년일자리도약장려금신청방법work24SpokeContent };
