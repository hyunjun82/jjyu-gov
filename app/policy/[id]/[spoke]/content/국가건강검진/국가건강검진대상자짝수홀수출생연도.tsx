import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국가건강검진은 <strong>2년마다 1회</strong> 실시됩니다.
          짝수 연도 출생자는 짝수 해에, 홀수 연도 출생자는 홀수 해에 검진을 받습니다.
          단, <strong>비사무직(생산직·현장직)</strong> 근로자는 매년 받을 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">2026년 검진 대상자</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>대상</th><th>주기</th></tr></thead>
            <tbody>
              <tr><td>지역가입자 세대주</td><td>짝수 연도 출생자 (2026년 대상)</td><td>2년마다</td></tr>
              <tr><td>직장가입자</td><td>짝수 연도 출생자 (2026년 대상)</td><td>2년마다</td></tr>
              <tr><td>20세 이상 세대원·피부양자</td><td>짝수 연도 출생자</td><td>2년마다</td></tr>
              <tr><td>의료급여수급권자 (20~64세)</td><td>짝수 연도 출생자</td><td>2년마다</td></tr>
              <tr><td>비사무직 근로자</td><td>출생연도 무관</td><td>매년</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            2026년은 짝수 해입니다. <strong>1990년, 1988년, 1978년</strong> 등 짝수 연도 출생자가 올해 검진 대상입니다.
            홀수 연도(1991년, 1989년 등) 출생자는 2027년에 받습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">내가 대상자인지 확인하는 법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>온라인 확인</td><td>국민건강보험 건강모아 → 나의 건강 → 검진대상 조회 (nhis.or.kr)</td></tr>
              <tr><td>전화 문의</td><td>☎1577-1000 (국민건강보험공단 고객센터)</td></tr>
              <tr><td>검진표 재발급</td><td>가까운 국민건강보험공단 지사 방문 또는 온라인 출력</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            전년도에 검진을 받지 못한 경우, 공단에 신청하면 올해 검진 대상으로 추가 등록이 가능합니다.
            검진 기간은 매년 1월 1일부터 12월 31일까지입니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="note">
        <h2 className="detail-card-head">검진 받을 때 주의사항</h2>
        <div className="detail-card-body">
          <div className="warning-box">
            검진 전날 저녁 9시 이후 금식 필수. 당일 아침은 물·커피·담배·껌 등 일체 금지.
            오후 검진 시 최소 8시간 이상 공복 유지 후 방문하세요.
          </div>
          <div className="info-box" style={{marginTop:12}}>
            신분증(주민등록증·운전면허증·여권)을 반드시 지참해야 검진기관에서 대상자 확인이 가능합니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const 국가건강검진국가건강검진대상자짝수홀수출생연도SpokeContent: SpokeData = {
  h1: '2026 국가건강검진 대상자 짝수 홀수 출생연도 확인',
  breadcrumb: '국가건강검진대상자짝수홀수출생연도',
  description: '2026년 국가건강검진 대상자는 짝수 연도 출생자입니다. 비사무직은 매년 가능. 대상 확인 방법과 주의사항을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '국가건강검진 대상자인지 어떻게 확인하나요?', a: '국민건강보험 홈페이지(nhis.or.kr) 또는 건강iN(hi.nhis.or.kr)에서 본인 인증 후 건강검진 대상 여부를 확인할 수 있습니다.', source: '국민건강보험공단 공식 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '건강검진을 받지 않으면 불이익이 있나요?', a: '직장 가입자의 경우 검진 미수검 시 과태료(최대 10만 원)가 부과될 수 있습니다. 지역가입자·피부양자는 과태료가 없으나 건강 관리를 위해 적극 권장됩니다.', source: '국민건강보험공단 공식 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '건강검진 비용이 따로 드나요?', a: '국가건강검진은 본인 부담 없이 무료로 받을 수 있습니다. 다만 암 검진의 일부 항목은 10% 본인 부담이 발생할 수 있습니다.', source: '국민건강보험공단 공식 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '건강검진 결과는 언제, 어떻게 받나요?', a: '검진 후 약 2~4주 이내에 우편 또는 건강iN 앱으로 결과를 받을 수 있습니다. 이상 소견이 있을 경우 해당 병원에서 직접 안내합니다.', source: '국민건강보험공단 공식 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '1년에 한 번씩 받을 수 있나요?', a: '일반건강검진은 직장 가입자는 매년, 지역 가입자·피부양자는 2년에 1회 실시됩니다. 홀수·짝수 출생연도에 따라 검진 연도가 나뉩니다.', source: '국민건강보험공단 공식 안내', sourceUrl: 'https://www.nhis.or.kr' },
  ],
  sources: [{ name: '국민건강보험공단 공식 안내', url: 'https://www.nhis.or.kr' }],
};
