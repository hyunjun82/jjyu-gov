import type { SpokeData } from '../../page';
function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 국민건강검진 대상자는 <strong>짝수년도 출생자</strong>(1958년생, 1960년생, 1962년생 등)입니다.
          직장가입자·지역가입자·피부양자 모두 해당하며, 2년에 1회 무료로 검진을 받습니다.
          2026년 신규 추가 항목으로 <strong>폐기능검사</strong>(만 56세·만 66세 대상)가 시행됩니다.
        </p>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "2026년에 내가 건강검진 대상인가요?" 생년을 확인하면 바로 알 수 있습니다.
        짝수년도 출생이면 올해가 검진 연도입니다. 올해 검진을 놓치면 내년에 다시 기회가 옵니다.
        단, 일부 암검진은 2년마다 별도 대상자 기준이 적용됩니다.
      </p>
      <section className="detail-card" id="target">
        <h2 className="detail-card-head">2026년 일반건강검진 대상자 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>가입 유형</th><th>대상</th><th>검진 주기</th></tr></thead>
            <tbody>
              <tr><td>직장가입자</td><td>짝수년 출생자 (사무직)</td><td>2년마다 (매해 비사무직)</td></tr>
              <tr><td>지역가입자</td><td>짝수년 출생 세대주·세대원(만 20세 이상)</td><td>2년마다</td></tr>
              <tr><td>피부양자</td><td>짝수년 출생 (만 20세 이상)</td><td>2년마다</td></tr>
              <tr><td>의료급여수급권자</td><td>짝수년 출생 (만 19세, 만 41~64세)</td><td>2년마다</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>직장가입자 비사무직:</strong> 비사무직(생산직·현장직 등)은 홀수·짝수 관계없이 매년 검진 대상입니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="items">
        <h2 className="detail-card-head">2026년 일반건강검진 항목 전체 안내</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>검진 항목</th><th>대상</th><th>비고</th></tr></thead>
            <tbody>
              <tr><td>혈압 측정</td><td>전 연령</td><td>고혈압 조기 발견</td></tr>
              <tr><td>혈당 검사</td><td>전 연령</td><td>당뇨병 조기 발견</td></tr>
              <tr><td>지질 검사 (콜레스테롤)</td><td>만 24세 이상 4년마다</td><td>-</td></tr>
              <tr><td>간기능 검사</td><td>전 연령</td><td>-</td></tr>
              <tr><td>신장기능 검사</td><td>전 연령</td><td>-</td></tr>
              <tr><td>빈혈 검사</td><td>만 40세·66세</td><td>-</td></tr>
              <tr><td>흉부 X선</td><td>전 연령</td><td>폐결핵 등</td></tr>
              <tr><td>구강검사</td><td>전 연령 (치과)</td><td>-</td></tr>
              <tr><td>정신건강 (우울증)</td><td>만 20·30·40·50·60·70세</td><td>해당 연령 시</td></tr>
              <tr><td>폐기능검사 (신규)</td><td>만 56세·만 66세</td><td>2026년 신규 추가</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>폐기능검사 신규 도입:</strong> 2026년부터 만 56세(1970년생)와 만 66세(1960년생)에게
            스파이로메트리(폐활량 측정) 검사가 무료로 추가됩니다. COPD 조기 발견이 목적입니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="how">
        <h2 className="detail-card-head">건강검진 신청 및 이용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>① 대상자 확인:</strong> 국민건강보험공단 홈페이지(nhis.or.kr) 또는 The건강보험 앱에서 내 검진 대상 여부를 확인할 수 있습니다.
          </div>
          <div className="info-box" style={{ marginTop: 10 }}>
            <strong>② 검진 기관 예약:</strong> 공단에서 지정한 건강검진 기관 어디서나 받을 수 있습니다.
            사전 예약을 권장합니다.
          </div>
          <div className="info-box" style={{ marginTop: 10 }}>
            <strong>③ 본인부담금:</strong> 일반건강검진은 무료(본인부담 0원)입니다.
            단, 암검진은 일부 항목에서 본인부담이 있을 수 있습니다.
          </div>
          <div className="info-box" style={{ marginTop: 10 }}>
            <strong>④ 검진 기간:</strong> 매년 1월~12월. 연말에 몰리므로 상반기에 미리 받는 것을 권장합니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            폐기능검사 신규 도입 상세, 검진 미수검 불이익, 재검·확인검사 비용 등<br />
            국민건강검진 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/national-health-checkup" className="btn-cta">
            국민건강검진 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}
export const 국민건강검진2026대상자짝수년생추가항목SpokeContent: SpokeData = {
  h1: '2026 국민건강검진 대상자 짝수년생 확인과 추가 항목 안내',
  breadcrumb: '2026대상자짝수년생추가항목',
  description: '2026년 국민건강검진 대상자는 짝수년도 출생자입니다. 신규 항목으로 만 56세·만 66세 대상 폐기능검사(스파이로메트리)가 추가됩니다. 일반건강검진 본인부담금은 0원입니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '2026년 건강검진 대상자가 맞는지 어떻게 확인하나요?', a: '국민건강보험공단 홈페이지(nhis.or.kr) 또는 The건강보험 앱에 접속해 본인 인증 후 검진 대상 여부를 확인할 수 있습니다. 짝수년도 출생자면 2026년 대상자입니다.', source: '국민건강보험공단 건강검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '1970년생인데 2026년에 폐기능검사를 받나요?', a: '네. 1970년생은 2026년에 만 56세가 되므로 신규 추가된 폐기능검사(스파이로메트리) 대상입니다. 별도 신청 없이 일반건강검진 시 함께 받을 수 있습니다.', source: '국민건강보험공단 2026년 건강검진 변경 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '직장인인데 2026년이 짝수년이라 검진을 받아야 하나요?', a: '사무직 직장가입자는 짝수년도 출생자가 2026년 검진 대상입니다. 비사무직은 매년 대상이므로 출생년도에 무관하게 2026년에도 검진을 받을 수 있습니다.', source: '국민건강보험공단 건강검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '건강검진은 비용이 드나요?', a: '일반건강검진은 본인부담금이 없습니다(0원). 암검진은 일부 항목에서 소액의 본인부담이 있습니다. 폐기능검사를 포함한 2026년 신규 항목도 무료입니다.', source: '국민건강보험공단 건강검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '건강검진을 어디서 받을 수 있나요?', a: '국민건강보험공단이 지정한 건강검진 기관(병·의원, 보건소 등)에서 받을 수 있습니다. 공단 홈페이지에서 검진 기관을 검색하고 사전 예약 후 방문하면 됩니다.', source: '국민건강보험공단 건강검진 기관 안내', sourceUrl: 'https://www.nhis.or.kr' },
  ],
  sources: [
    { name: '국민건강보험공단 건강검진 안내', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부 2026년 건강검진 시행 공고', url: 'https://www.mohw.go.kr' },
  ],
};
