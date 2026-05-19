import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국가건강검진의 공통 항목은 누구나 동일하게 받고,
          <strong>성별·연령에 따라 추가 검사 항목</strong>이 달라집니다.
          40세부터는 생애전환기 검진이 추가되고, 56세·66세에는 폐기능 검사, 54·60·66세 여성은 골밀도 검사가 추가됩니다.
        </p>
      </div>

      <section className="detail-card" id="common">
        <h2 className="detail-card-head">공통 검사 항목 (전 연령)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>진찰 및 상담</td><td>의사 문진, 건강 상담</td></tr>
              <tr><td>신체계측</td><td>신장, 체중, 허리둘레, 비만도(BMI)</td></tr>
              <tr><td>시력·청력 검사</td><td>시력, 청력 측정</td></tr>
              <tr><td>혈압 측정</td><td>고혈압 조기 발견</td></tr>
              <tr><td>흉부 방사선 검사</td><td>폐결핵, 폐암 등 이상 소견 확인</td></tr>
              <tr><td>혈액 검사</td><td>혈색소, 공복혈당, AST·ALT·γ-GTP, 혈청크레아티닌, e-GFR</td></tr>
              <tr><td>요검사</td><td>단백뇨, 혈뇨 등 신장 이상 확인</td></tr>
              <tr><td>구강검진</td><td>충치, 잇몸 질환, 치주 상태 확인</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="age">
        <h2 className="detail-card-head">연령별 추가 검사 항목</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>검사 항목</th><th>대상</th><th>주기</th></tr></thead>
            <tbody>
              <tr><td>이상지질혈증 (콜레스테롤)</td><td>남 24세↑, 여 40세↑</td><td>4년마다</td></tr>
              <tr><td>B형간염 검사</td><td>40세 (보균자·면역자 제외)</td><td>1회</td></tr>
              <tr><td>C형간염 검사</td><td>56세</td><td>1회</td></tr>
              <tr><td>폐기능 검사</td><td>56세, 66세</td><td>해당 연령</td></tr>
              <tr><td>골밀도 검사</td><td>54·60·66세 여성</td><td>해당 연령</td></tr>
              <tr><td>인지기능장애 검사</td><td>66세 이상</td><td>2년마다</td></tr>
              <tr><td>정신건강검사 (우울증)</td><td>20~79세</td><td>연령대별 1회</td></tr>
              <tr><td>노인신체기능 검사</td><td>66·70·80세</td><td>해당 연령</td></tr>
              <tr><td>생활습관 평가</td><td>40·50·60·70세</td><td>해당 연령</td></tr>
              <tr><td>치면세균막 검사</td><td>40세 (구강검진 포함)</td><td>1회</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            암검진(위암·대장암·간암·유방암·자궁경부암·폐암)은 별도 일정으로 진행되며, 일반건강검진과 함께 받을 수 있습니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const 국가건강검진국가건강검진연령별항목검사목록SpokeContent: SpokeData = {
  h1: '국가건강검진 연령별 검사 항목 내가 받을 수 있는 목록',
  breadcrumb: '국가건강검진연령별항목검사목록',
  description: '국가건강검진 공통항목과 연령·성별별 추가 항목을 표로 정리합니다. 56세 폐기능, 54·60세 골밀도 등 확인하세요.',
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
