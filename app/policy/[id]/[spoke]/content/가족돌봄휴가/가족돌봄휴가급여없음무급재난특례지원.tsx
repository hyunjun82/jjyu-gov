import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가족돌봄휴가는 <strong>원칙적으로 무급</strong>입니다.
          다만 감염병 재난 등 특례 상황에서는 정부가 <strong>하루 5만 원</strong> 수준의 긴급지원을 별도 실시한 사례가 있습니다.
          평상시에는 회사 내규나 단체협약에 유급 규정이 없으면 급여가 지급되지 않습니다.
        </p>
      </div>

      <section className="detail-card" id="unpaid">
        <h2 className="detail-card-head">무급 원칙</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>법적 급여 지급 의무</td><td>없음 (무급)</td></tr>
              <tr><td>근거 법령</td><td>남녀고용평등법 제22조의2</td></tr>
              <tr><td>사용자 임의 유급 전환</td><td>가능 (회사 재량)</td></tr>
              <tr><td>단체협약·취업규칙</td><td>유급으로 정하면 그에 따름</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            사용하기 전에 회사 취업규칙·단체협약을 확인하세요.
            일부 기업은 연간 일정일 유급으로 운영합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="disaster">
        <h2 className="detail-card-head">재난 특례 지원 (별도 제도)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>지원 요건</td><td>감염병 재난 등 정부 특례 선포 시</td></tr>
              <tr><td>지원 금액</td><td>1일 5만 원 (특례 기간·예산에 따라 상이)</td></tr>
              <tr><td>지원 한도</td><td>특례 기간 내 사용일수 기준</td></tr>
              <tr><td>신청처</td><td>고용노동부 또는 가족돌봄휴가 긴급지원 시스템</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            재난 특례 지원은 상시 운영이 아닙니다. 코로나19 팬데믹 당시처럼 정부가 별도 선포한 경우에만 적용됩니다.
            현재 특례 시행 여부는 고용노동부(☎ 1350) 또는 고용24(work24.go.kr)에서 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="alternative">
        <h2 className="detail-card-head">무급 보완 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>가족돌봄휴직</td><td>연간 최장 90일, 무급 (휴직 기간 고용보험 지원 없음)</td></tr>
              <tr><td>육아기 근로시간 단축</td><td>자녀 12세 이하, 단축분 급여 일부 지원</td></tr>
              <tr><td>연차 유급휴가 병행 사용</td><td>가족돌봄휴가 대신 연차를 사용하면 유급 유지</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 가족돌봄휴가가족돌봄휴가급여없음무급재난특례지원SpokeContent: SpokeData = {
  h1: '가족돌봄휴가 급여 없음 무급 원칙과 재난 특례 지원',
  breadcrumb: '가족돌봄휴가급여없음무급재난특례지원',
  description: '가족돌봄휴가 무급 원칙, 재난 특례 시 하루 5만 원 지원 여부, 무급을 보완하는 대안 제도를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '가족돌봄휴가는 유급인가요 무급인가요?', a: '가족돌봄휴가는 원칙적으로 무급입니다. 다만 회사 취업규칙·단체협약에 유급 규정이 있으면 그에 따릅니다. 재난 특례 시 정부 지원이 별도 지급된 사례가 있습니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '연간 며칠까지 사용할 수 있나요?', a: '연간 최대 10일(단, 가족 1명당 5일 한도)이며, 감염병 재난 등 정부가 특례를 선포한 경우 20일까지 연장됩니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '가족돌봄휴가 신청 시 필요한 서류는 무엇인가요?', a: '가족관계증명서, 진단서 또는 확인서(입원·감염 등) 등 돌봄 사유를 증명하는 서류가 필요합니다. 회사마다 양식이 다를 수 있으니 HR팀에 먼저 문의하세요.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '사업주가 가족돌봄휴가 신청을 거부할 수 있나요?', a: '법령상 사업주는 정당한 사유 없이 거부할 수 없습니다. 거부 시 500만 원 이하 과태료가 부과됩니다. 고용노동부 고객상담센터(☎1350)에 신고할 수 있습니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '가족돌봄휴가와 가족돌봄휴직의 차이는 무엇인가요?', a: '가족돌봄휴가는 단기(연 최대 10~20일)이고, 가족돌봄휴직은 장기(연 최대 90일)입니다. 둘 다 무급이지만 사용 기간·절차가 다릅니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
  ],
  sources: [{ name: '고용노동부 공식 안내', url: 'https://www.moel.go.kr' }],
};
