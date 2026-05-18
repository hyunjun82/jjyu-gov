import type { SpokeData } from '../../page';
function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          1차 일반건강검진은 <strong>본인부담금 0원(무료)</strong>입니다.
          이상 소견 후 <strong>2차 확인검사(당뇨·고혈압 등)</strong>도 건강보험 급여로 별도 부담이 없습니다.
          암검진 이상 소견 후 확진검사는 <strong>건강보험 본인부담(외래 30~60%)</strong>이 적용됩니다.
          의료급여수급자와 건강보험 하위 50%는 암검진 본인부담이 없습니다.
        </p>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "건강검진에서 이상이 나오면 재검 비용을 내야 하나요?" 많이 오시는 질문입니다.
        일반건강검진 후 2차 확인검사는 공단 부담이지만, 암검진 이상 후 확진 진료는
        일반 외래 진료로 전환되어 건강보험 본인부담이 발생합니다.
      </p>
      <section className="detail-card" id="cost">
        <h2 className="detail-card-head">건강검진 단계별 본인부담금 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>검진 단계</th><th>일반 건강보험 가입자</th><th>의료급여수급자·하위 50%</th></tr></thead>
            <tbody>
              <tr><td>1차 일반건강검진</td><td>0원 (무료)</td><td>0원 (무료)</td></tr>
              <tr><td>2차 확인검사 (당뇨·고혈압)</td><td>0원 (건강보험 급여)</td><td>0원</td></tr>
              <tr><td>암검진 (위암·대장암 등)</td><td>10% 본인부담 (일부 무료)</td><td>0원 (무료)</td></tr>
              <tr><td>암검진 이상 후 확진 진료</td><td>외래 30~60% 본인부담</td><td>감면 적용</td></tr>
              <tr><td>폐기능검사 (2026년 신규)</td><td>0원 (무료)</td><td>0원 (무료)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>대장암 분변잠혈검사:</strong> 1차 대장암 검진(분변잠혈검사)은 무료입니다.
            이상 소견 시 2차 대장내시경 검사는 건강보험 급여로 진행되며 본인부담이 발생합니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="process">
        <h2 className="detail-card-head">이상 소견 후 확인검사 진행 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>절차</th><th>비용</th></tr></thead>
            <tbody>
              <tr><td>일반검진 혈당 이상</td><td>검진 기관에서 2차 확인검사 안내 → 공단 통보 → 무료 재검</td><td>0원</td></tr>
              <tr><td>일반검진 혈압 이상</td><td>동일 기관 또는 의원 방문 → 건강보험 외래 진료</td><td>외래 30% 본인부담</td></tr>
              <tr><td>위암검진 이상</td><td>위내시경 결과 이상 → 조직검사·CT → 건강보험 급여 적용</td><td>외래 30~60%</td></tr>
              <tr><td>대장암 분변잠혈 양성</td><td>대장내시경 검사 → 건강보험 급여</td><td>외래 본인부담</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>산정특례 대상 확진:</strong> 암으로 확진되면 건강보험 산정특례가 적용되어 본인부담금이 5%로 대폭 낮아집니다.
            5년간 산정특례 혜택을 받을 수 있습니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="reduce">
        <h2 className="detail-card-head">검진 비용 추가 절감 방법</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>① 의료급여수급자:</strong> 위암·대장암·간암·유방암·자궁경부암·폐암 암검진 모두 무료.
          </div>
          <div className="info-box" style={{ marginTop: 10 }}>
            <strong>② 건강보험료 하위 50%:</strong> 위암·유방암·자궁경부암·폐암 검진 본인부담금 없음(0원).
          </div>
          <div className="info-box" style={{ marginTop: 10 }}>
            <strong>③ 암 확진 후 산정특례:</strong> 암으로 확진되면 5년간 외래·입원 본인부담금 5% 적용.
          </div>
          <div className="info-box" style={{ marginTop: 10 }}>
            <strong>④ 희귀질환 등록:</strong> COPD 등 특정 질환은 희귀·중증 난치 질환 산정특례 적용 가능.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            2026년 대상자 확인, 폐기능검사 신규 도입, 검진 미수검 불이익 등<br />
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
export const 국민건강검진결과재검확인검사비용본인부담SpokeContent: SpokeData = {
  h1: '국민건강검진 결과 재검·확인검사 비용 본인부담 기준',
  breadcrumb: '결과재검확인검사비용본인부담',
  description: '1차 일반건강검진은 무료입니다. 이상 소견 후 2차 확인검사(당뇨·고혈압)는 본인부담 없음. 암검진 이상 후 확진검사는 외래 30~60% 본인부담이 적용됩니다. 의료급여수급자·하위 50%는 암검진 무료입니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '건강검진 기본 검사는 무료인가요?', a: '네. 1차 일반건강검진은 본인부담금 없이 무료입니다. 2026년 신규 추가되는 폐기능검사도 무료입니다.', source: '국민건강보험공단 건강검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '혈당이 높게 나오면 추가 검사 비용을 내야 하나요?', a: '일반건강검진에서 혈당 이상 소견이 나오면 2차 확인검사(75g 경구당부하검사 등)를 받을 수 있으며, 이 확인검사는 건강보험 급여로 본인부담이 없습니다.', source: '국민건강보험공단 건강검진 사후 관리 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '위암검진에서 이상이 나오면 조직검사도 무료인가요?', a: '아니요. 위암검진 이상 후 조직검사·CT 등 확진 검사는 일반 외래 진료로 건강보험 본인부담(30~60%)이 적용됩니다. 단, 암으로 확진되면 산정특례(본인부담 5%)가 적용됩니다.', source: '국민건강보험공단 암검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '저소득층은 건강검진 비용 혜택이 있나요?', a: '네. 의료급여수급자와 건강보험료 하위 50%는 위암·대장암·간암·유방암·자궁경부암·폐암 암검진 본인부담금이 없습니다(무료).', source: '국민건강보험공단 암검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '암으로 확진되면 치료비가 얼마나 드나요?', a: '암으로 확진되면 건강보험 산정특례가 적용되어 외래·입원 본인부담금이 5%로 낮아집니다. 5년간 혜택을 받을 수 있으며, 재발 시 추가 산정특례 신청이 가능합니다.', source: '국민건강보험공단 산정특례 안내', sourceUrl: 'https://www.nhis.or.kr' },
  ],
  sources: [
    { name: '국민건강보험공단 건강검진 안내', url: 'https://www.nhis.or.kr' },
    { name: '국민건강보험공단 암검진 사후 관리 안내', url: 'https://www.nhis.or.kr' },
  ],
};
