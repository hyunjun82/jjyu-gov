import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년일자리도약장려금을 전액 받으려면 채용한 청년을 <strong>12개월 이상 고용 유지</strong>해야 합니다.
          6개월 시점에 1차, 12개월 시점에 2차로 지원금이 나뉘어 지급됩니다.
        </p>
      </div>

      <section className="detail-card" id="period">
        <h2 className="detail-card-head">고용 유지 기간 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>시점</th><th>조건</th><th>지급 내용</th></tr></thead>
            <tbody>
              <tr><td>6개월 고용 유지</td><td>동일 청년 정규직 유지</td><td>1차 지원금 지급</td></tr>
              <tr><td>12개월 고용 유지</td><td>동일 청년 정규직 유지</td><td>2차 지원금 지급 (잔여분)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            6개월 미만 퇴직 시 지원금 전액 지급이 불가합니다.
            6~12개월 사이 퇴직 시 1차만 지급되고 2차는 지급되지 않습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="exception">
        <h2 className="detail-card-head">고용 유지 예외 인정 사유</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>사유</th><th>처리</th></tr></thead>
            <tbody>
              <tr><td>청년 자발적 퇴사</td><td>해당 청년에 대한 지원 종료 (기업 귀책 아님)</td></tr>
              <tr><td>청년 사망·질병 등</td><td>관할 고용센터 판단에 따라 예외 적용 가능</td></tr>
              <tr><td>기업 귀책 해고</td><td>지원 취소 및 기수령액 환수 가능</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            청년이 자발적으로 퇴직한 경우, 기업 귀책이 아니므로 이미 충족된 기간 지원금은 유지됩니다.
            단, 동일 청년이 아닌 다른 청년으로 대체해 나머지 지원금을 계속 받기는 어렵습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="obligation">
        <h2 className="detail-card-head">기업 의무 사항</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>의무</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>최저임금 준수</td><td>지원 기간 내 최저임금 이상 지급 필수</td></tr>
              <tr><td>4대 보험 가입 유지</td><td>고용보험 포함 4대 보험 가입 유지</td></tr>
              <tr><td>고용 유지 보고</td><td>고용24에서 고용 현황 정기 확인</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            의무 위반 시 지원금 환수 처분을 받을 수 있습니다.
            문의는 고용24(work24.go.kr) 또는 고용노동부 ☎ 1350으로 하세요.
          </div>
        </div>
      </section>
    </>
  );
}

export const 청년일자리도약장려금청년일자리도약장려금고용유지기간조건SpokeContent: SpokeData = {
  h1: '청년일자리도약장려금 고용 유지 기간 조건과 중도 퇴직 처리',
  breadcrumb: '청년일자리도약장려금고용유지기간조건',
  description: '청년일자리도약장려금 6·12개월 고용 유지 조건, 중도 퇴직 시 지원금 처리, 기업 의무 사항을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '청년일자리도약장려금은 어떤 기업에 지급되나요?', a: '5인 이상 우선지원대상기업(중소기업)에서 취업 취약 청년(6개월 이상 실업, 고졸 이하, NEET 등)을 정규직으로 채용한 경우 지원합니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '지원 금액은 얼마인가요?', a: '채용 청년 1인당 최대 월 60만 원씩, 최대 2년(24개월) 동안 지원됩니다. 총 최대 1,440만 원까지 받을 수 있습니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '신청은 어디서 하나요?', a: '고용24(work24.go.kr) 또는 관할 고용센터를 통해 기업이 직접 신청합니다. 채용 후 6개월 이내에 신청해야 합니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '채용 후 바로 신청이 가능한가요?', a: '정규직 채용일로부터 6개월이 지난 후 지원 요건을 충족한 경우에 신청합니다. 6개월 고용 유지가 지급 요건입니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '지원금 수령 중 청년이 퇴사하면 어떻게 되나요?', a: '청년이 퇴사하면 해당 월부터 지원이 중단됩니다. 일정 기간 내 재채용하거나 다른 취약청년을 채용하면 계속 지원받을 수 있는 경우가 있습니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
  ],
  sources: [{ name: '고용노동부 공식 안내', url: 'https://www.moel.go.kr' }],
};
