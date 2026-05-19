import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국가건강검진은 <strong>법적 의무는 아니지만</strong>, 직장가입자(사무직)는 사업장에서
          검진 여부를 관리합니다. 검진을 안 받아도 직접적인 과태료는 없지만,
          <strong>건강보험료 할인 혜택을 받지 못할 수 있고</strong>, 사업주는 미수검자 명단 관리 의무가 있습니다.
        </p>
      </div>

      <section className="detail-card" id="obligation">
        <h2 className="detail-card-head">검진 의무 여부 구분</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>대상</th><th>의무 여부</th><th>미수검 시 불이익</th></tr></thead>
            <tbody>
              <tr><td>직장가입자 (사무직)</td><td>2년마다 수검 권고</td><td>사업주가 미수검자 명단 관리</td></tr>
              <tr><td>직장가입자 (비사무직)</td><td>매년 수검 권고</td><td>산업안전보건법에 따라 사업주 관리</td></tr>
              <tr><td>지역가입자·피부양자</td><td>법적 의무 없음</td><td>직접 불이익 없음</td></tr>
              <tr><td>의료급여수급권자</td><td>수검 권고</td><td>직접 과태료 없음</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            비사무직 근로자는 산업안전보건법에 따라 매년 일반건강검진을 받아야 하며, 사업주가 미수검 시 관련 법에 따라 조치를 받을 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="benefit">
        <h2 className="detail-card-head">검진 받으면 받을 수 있는 혜택</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>혜택</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>운전면허 적성검사 간소화</td><td>최근 2년 내 국가검진 수검 시 신체검사(시력·청력) 면제</td></tr>
              <tr><td>채용 신체검사 대체</td><td>일반건강검진 결과통보서로 채용 신체검사 대체 가능</td></tr>
              <tr><td>조기 질병 발견</td><td>고혈압·당뇨·이상지질혈증 등 조기 발견 시 확진검사 비용 지원</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            전년도 미수검자는 해당 연도에 공단에 신청하면 추가 등록이 가능합니다. 기간을 놓쳤다면 ☎1577-1000으로 문의하세요.
          </div>
        </div>
      </section>
    </>
  );
}

export const 국가건강검진국가건강검진안하면불이익의무여부SpokeContent: SpokeData = {
  h1: '국가건강검진 안 하면 불이익 있나 의무 여부 확인',
  breadcrumb: '국가건강검진안하면불이익의무여부',
  description: '국가건강검진은 법적 의무가 아니지만 직장가입자 비사무직은 매년 수검 권고 대상입니다. 미수검 시 불이익과 혜택을 정리합니다.',
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
