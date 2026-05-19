import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          저소득층 에너지효율 개선사업은 <strong>주민센터(읍·면·동) 방문 신청</strong>이 기본입니다.
          한국에너지재단 콜센터(☎ 1670-7653) 전화 신청도 가능합니다.
        </p>
      </div>

      <section className="detail-card" id="step">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>1단계</td><td>주민센터 방문 또는 ☎ 1670-7653 전화 신청</td></tr>
              <tr><td>2단계</td><td>기초수급·차상위 자격 확인 (공단 연계 자동 조회)</td></tr>
              <tr><td>3단계</td><td>한국에너지재단 담당자 현장 방문 조사</td></tr>
              <tr><td>4단계</td><td>지원 항목·시공 계획 결정 및 통보</td></tr>
              <tr><td>5단계</td><td>시공 업체 방문 → 공사 진행</td></tr>
              <tr><td>6단계</td><td>완공 확인 및 사후 점검</td></tr>
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
              <tr><td>신분증</td><td>주민등록증 또는 운전면허증</td></tr>
              <tr><td>수급자 증명서</td><td>기초생활수급자 증명서 또는 차상위 확인서</td></tr>
              <tr><td>주택 서류</td><td>자가: 등기부등본 / 임차: 임대차계약서 + 집주인 동의서</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            수급자 증명서는 주민센터에서 즉시 발급받을 수 있습니다.
            임차 가구는 집주인 동의서 없이 신청이 불가합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="timing">
        <h2 className="detail-card-head">신청 시기</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>신청 기간</td><td>연중 수시 (예산 소진 시 조기 마감)</td></tr>
              <tr><td>시공 시기</td><td>신청 후 수개월 내 (대기 순번에 따라 상이)</td></tr>
              <tr><td>난방 공사</td><td>동절기 이전 시공 우선 배정</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            예산 소진 전에 빨리 신청할수록 해당 연도 내 시공 가능성이 높아집니다.
          </div>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '저소득에너지효율개선신청방법주민센터절차',
  breadcrumb: '저소득에너지효율개선신청방법주민센터절차',
  title: '저소득 에너지효율 개선 신청 방법 주민센터 절차와 서류',
  description: '저소득층 에너지효율 개선사업 주민센터 방문 신청 절차, 준비 서류, 신청 시기를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 저소득에너지효율개선저소득에너지효율개선신청방법주민센터절차SpokeContent };
