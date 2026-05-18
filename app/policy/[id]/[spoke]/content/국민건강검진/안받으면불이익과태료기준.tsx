import type { SpokeData } from '../../page';
function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>직장가입자 미수검 시 사업주에게 과태료 최대 1,000만원</strong>이 부과됩니다(사업주 의무 조항).
          근로자가 검진을 거부할 경우 근로자 본인에게도 <strong>최대 300만원</strong>의 과태료가 부과될 수 있습니다.
          개인(지역가입자·피부양자)에게는 별도 과태료가 없습니다.
          단, 검진을 받지 않으면 일부 지자체 건강보험료 인센티브 혜택을 받지 못하며,
          <strong>암검진 미수검 시</strong>도 별도 과태료는 없습니다.
        </p>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "검진 안 받으면 벌금 있나요?" 많이 오시는 질문입니다. 개인에게는 직접 과태료가 없지만,
        직장 내 사업주는 산업안전보건법에 따른 의무를 이행해야 합니다.
        또한 건강검진을 미수검하면 자신의 건강 상태를 놓쳐 큰 비용이 발생할 수 있습니다.
      </p>
      <section className="detail-card" id="penalty">
        <h2 className="detail-card-head">건강검진 미수검 불이익 및 과태료 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>대상</th><th>불이익</th><th>법적 근거</th></tr></thead>
            <tbody>
              <tr><td>직장 사업주</td><td>과태료 최대 1,000만원 (건강검진 미실시 시)</td><td>산업안전보건법 제132조</td></tr>
              <tr><td>직장가입자 (검진 거부)</td><td>과태료 최대 300만원 (귀책이 근로자에게 있을 경우)</td><td>산업안전보건법 제132조</td></tr>
              <tr><td>직장가입자 (단순 미수검)</td><td>직접 과태료 없음 (사업주가 책임)</td><td>-</td></tr>
              <tr><td>지역가입자·피부양자</td><td>직접 과태료 없음</td><td>-</td></tr>
              <tr><td>의료급여수급권자</td><td>직접 과태료 없음</td><td>-</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>사업주 의무:</strong> 사업주는 근로자가 건강검진을 받을 수 있도록 시간을 주고 비용을 지원해야 합니다.
            건강검진을 이유로 임금을 삭감하면 이 또한 위법입니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="incentive">
        <h2 className="detail-card-head">건강검진 수검 시 혜택 및 미수검 손실</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>수검 시</th><th>미수검 시</th></tr></thead>
            <tbody>
              <tr><td>건강보험료</td><td>일부 지자체 인센티브(감면) 적용 가능</td><td>인센티브 미적용</td></tr>
              <tr><td>암검진</td><td>무료 또는 본인부담 10%</td><td>기회 소멸 (내년 재신청)</td></tr>
              <tr><td>이상 소견 발견</td><td>조기 치료로 의료비 절감</td><td>진행 후 고액 치료비 발생 위험</td></tr>
              <tr><td>직장 내</td><td>사업주 의무 이행</td><td>사업주 과태료 최대 1,000만원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>암검진은 별도 대상:</strong> 위암·대장암·간암·유방암·자궁경부암·폐암은 별도 나이·주기 기준이 있습니다.
            암검진 미수검에는 직접 과태료가 없지만, 조기 발견 기회를 놓치게 됩니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="cancer">
        <h2 className="detail-card-head">암검진 종류별 대상·주기·본인부담 정리</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>암 종류</th><th>대상</th><th>주기</th><th>본인부담</th></tr></thead>
            <tbody>
              <tr><td>위암</td><td>만 40세 이상</td><td>2년마다</td><td>10%</td></tr>
              <tr><td>대장암</td><td>만 50세 이상</td><td>1년마다 (분변잠혈검사)</td><td>없음</td></tr>
              <tr><td>간암</td><td>만 40세 이상 고위험군</td><td>6개월마다</td><td>10%</td></tr>
              <tr><td>유방암</td><td>만 40세 이상 여성</td><td>2년마다</td><td>10%</td></tr>
              <tr><td>자궁경부암</td><td>만 20세 이상 여성</td><td>2년마다</td><td>없음</td></tr>
              <tr><td>폐암</td><td>만 54~74세 흡연자</td><td>2년마다</td><td>10%</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>의료급여수급자·건강보험 하위 50%:</strong> 위암·대장암·유방암·자궁경부암·폐암 본인부담금이 없습니다(0원).
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            2026년 대상자 확인, 폐기능검사 신규 도입, 재검·확인검사 비용 등<br />
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
export const 국민건강검진안받으면불이익과태료기준SpokeContent: SpokeData = {
  h1: '국민건강검진 안 받으면 불이익·과태료는? 건강보험료와 관계',
  breadcrumb: '안받으면불이익과태료기준',
  description: '직장가입자 건강검진 미실시 시 사업주에게 과태료 최대 1,000만원이 부과됩니다. 근로자 개인이 거부 시 최대 300만원. 지역가입자·피부양자는 직접 과태료 없음. 미수검 시 인센티브 혜택 소멸.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '건강검진 안 받으면 개인에게 과태료가 부과되나요?', a: '지역가입자·피부양자 개인에게는 직접 과태료가 없습니다. 단, 직장가입자의 경우 사업주가 건강검진 미실시로 과태료 최대 300만원을 받을 수 있습니다.', source: '국민건강보험공단 건강검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '건강검진을 미수검하면 건강보험료가 오르나요?', a: '건강검진 미수검이 직접적으로 건강보험료를 올리지는 않습니다. 다만, 일부 지자체에서 건강검진 수검자에게 보험료 인센티브(감면)를 제공하므로, 미수검 시 이 혜택을 받지 못합니다.', source: '국민건강보험공단 건강검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '사업주가 건강검진을 못 받게 하면 어떻게 되나요?', a: '사업주는 근로자의 건강검진을 방해할 수 없습니다. 건강검진을 이유로 임금을 삭감하거나 불이익을 주면 위법입니다. 건강검진은 근무시간 내 받을 수 있습니다.', source: '산업안전보건법 제132조', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '암검진을 안 받으면 과태료가 있나요?', a: '암검진 미수검에는 별도 과태료가 없습니다. 그러나 암을 조기에 발견할 기회를 놓치게 됩니다. 해당 연도에 받지 못하면 다음 주기에 다시 신청하세요.', source: '국민건강보험공단 암검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '건강검진 결과에서 이상이 나오면 치료비도 지원되나요?', a: '검진 결과 이상 소견이 있으면 이후 진료와 치료는 건강보험이 적용됩니다. 본인부담금이 발생하지만 건강보험 혜택을 받을 수 있습니다. 의료급여수급자는 본인부담이 더 낮습니다.', source: '국민건강보험공단 건강검진 사후 관리 안내', sourceUrl: 'https://www.nhis.or.kr' },
  ],
  sources: [
    { name: '국민건강보험공단 건강검진 안내', url: 'https://www.nhis.or.kr' },
    { name: '산업안전보건법 제132조 (고용노동부)', url: 'https://www.moel.go.kr' },
  ],
};
