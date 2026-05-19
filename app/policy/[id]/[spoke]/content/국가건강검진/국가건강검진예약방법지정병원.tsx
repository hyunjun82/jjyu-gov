import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국가건강검진은 <strong>별도 예약 없이 검진기관에 방문</strong>하면 받을 수 있습니다.
          다만, 대기 시간을 줄이려면 검진기관에 미리 전화로 예약하는 것을 권장합니다.
          지정 검진기관은 건강보험공단 홈페이지 또는 <strong>☎1577-1000</strong>으로 확인할 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="find">
        <h2 className="detail-card-head">지정 검진기관 찾는 법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>온라인 검색</td><td>nhis.or.kr → 건강모아 → 기관 찾기 → 검진기관 찾기</td></tr>
              <tr><td>정부24</td><td>gov.kr → 건강검진 지정의료기관 검색</td></tr>
              <tr><td>전화 문의</td><td>☎1577-1000 (국민건강보험공단, 평일 09:00~18:00)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            검진기관 종류에는 의원, 병원, 종합병원, 보건소 등이 포함됩니다.
            가까운 동네 의원에서도 국가검진이 가능한 경우가 많으니 먼저 확인해 보세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="visit">
        <h2 className="detail-card-head">검진 당일 준비물</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>준비물</th><th>비고</th></tr></thead>
            <tbody>
              <tr><td>신분증</td><td>주민등록증, 운전면허증, 여권 중 하나</td></tr>
              <tr><td>건강검진표</td><td>공단에서 발송. 분실 시 온라인 출력 또는 지사 재발급</td></tr>
              <tr><td>공복 상태</td><td>전날 저녁 9시 이후 금식 필수</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            검진기관에 따라 검진 가능 항목이 다를 수 있습니다. 특히 구강검진, 암검진은 별도 기관에서 실시하는 경우도 있으니 방문 전 전화 확인을 권장합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="result">
        <h2 className="detail-card-head">결과 통보 및 확인</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>우편·이메일</td><td>검진 완료 후 15일 이내 검진기관에서 발송</td></tr>
              <tr><td>온라인 확인</td><td>건강모아 → 건강검진 결과조회 (nhis.or.kr)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 국가건강검진국가건강검진예약방법지정병원SpokeContent: SpokeData = {
  h1: '국가건강검진 예약 방법과 지정병원 찾는 법',
  breadcrumb: '국가건강검진예약방법지정병원',
  description: '국가건강검진 지정병원 찾는 방법, 당일 준비물, 결과 확인까지 단계별로 정리합니다.',
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
