import type { SpokeData } from '../../page';
function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년부터 일반건강검진에 <strong>폐기능검사(스파이로메트리)가 신규 추가</strong>됩니다.
          대상은 <strong>만 56세(1970년생)</strong>와 <strong>만 66세(1960년생)</strong>이며,
          COPD(만성폐쇄성폐질환) 조기 발견이 목적입니다.
          본인부담금 없이 <strong>무료</strong>로 받을 수 있으며, 흡연력과 무관하게 해당 연령 모두 대상입니다.
        </p>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        COPD는 국내 사망 원인 상위 질환임에도 증상이 없는 초기에는 발견이 어렵습니다.
        폐기능검사를 통해 조기에 발견하고 치료하면 병의 진행을 크게 늦출 수 있습니다.
        2026년에 만 56세·만 66세에 해당한다면 반드시 검진을 받아보세요.
      </p>
      <section className="detail-card" id="target">
        <h2 className="detail-card-head">2026년 폐기능검사 신규 도입 핵심 정보</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>도입 시점</td><td>2026년 (신규 추가)</td></tr>
              <tr><td>대상 연령</td><td>만 56세 (1970년생), 만 66세 (1960년생)</td></tr>
              <tr><td>검사 방법</td><td>스파이로메트리 (폐활량 측정기 이용)</td></tr>
              <tr><td>목적</td><td>COPD(만성폐쇄성폐질환) 조기 발견</td></tr>
              <tr><td>본인부담금</td><td>없음 (무료)</td></tr>
              <tr><td>흡연력 조건</td><td>흡연력 무관 — 해당 연령 모두 대상</td></tr>
              <tr><td>신청 방법</td><td>일반건강검진 예약 시 자동 포함</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>COPD란?</strong> 만성폐쇄성폐질환은 담배 연기나 오염 물질로 인해 폐가 만성적으로 손상되는 질환입니다.
            초기에는 증상이 없다가 서서히 숨이 차고 기침·가래가 심해집니다. 조기 발견이 핵심입니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="how">
        <h2 className="detail-card-head">스파이로메트리 검사 방법과 소요 시간</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>준비</td><td>코를 클립으로 막고 기계 마우스피스를 입에 문다</td></tr>
              <tr><td>최대 흡기</td><td>숨을 최대한 들이마신다</td></tr>
              <tr><td>최대 호기</td><td>힘껏 빠르게 끝까지 내쉰다 (6초 이상)</td></tr>
              <tr><td>반복</td><td>보통 3회 반복 측정</td></tr>
              <tr><td>소요 시간</td><td>약 10~15분</td></tr>
              <tr><td>결과</td><td>FEV1/FVC 비율로 폐 기능 평가</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>기관지확장제 흡입 후 재검:</strong> 1차 검사에서 이상이 발견되면 기관지확장제 흡입 후 재검사를 진행합니다.
            이 재검도 건강검진 기관에서 무료로 받을 수 있습니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="age-compare">
        <h2 className="detail-card-head">2026년 기준 폐기능검사 대상 확인</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>출생년도</th><th>2026년 나이</th><th>폐기능검사 대상</th></tr></thead>
            <tbody>
              <tr><td>1970년생</td><td>만 56세</td><td>대상 (신규)</td></tr>
              <tr><td>1960년생</td><td>만 66세</td><td>대상 (신규)</td></tr>
              <tr><td>그 외 연령</td><td>-</td><td>비대상 (해당 연령에만 실시)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>다음 검사는 10년 후:</strong> 폐기능검사는 만 56세·만 66세에만 시행합니다.
            두 나이 사이에는 일반건강검진의 흉부 X선으로 기본적인 폐 상태를 확인합니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            2026년 짝수년생 검진 대상 확인, 검진 미수검 불이익, 재검 비용 등<br />
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
export const 국민건강검진폐기능검사신규만56세만66세SpokeContent: SpokeData = {
  h1: '2026 국민건강검진 폐기능검사 신규 도입, 만 56세·만 66세 대상',
  breadcrumb: '폐기능검사신규만56세만66세',
  description: '2026년부터 일반건강검진에 폐기능검사(스파이로메트리)가 신규 추가됩니다. 대상은 만 56세(1970년생)와 만 66세(1960년생)이며 COPD 조기 발견 목적입니다. 본인부담금 없이 무료입니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '2026년 폐기능검사 대상자는 누구인가요?', a: '만 56세(1970년생)와 만 66세(1960년생)가 대상입니다. 흡연 여부와 무관하게 해당 연령이면 모두 받을 수 있습니다.', source: '국민건강보험공단 2026년 건강검진 변경 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '폐기능검사는 비용이 드나요?', a: '아니요. 일반건강검진에 포함된 폐기능검사는 본인부담금 없이 무료입니다.', source: '국민건강보험공단 건강검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '담배를 피우지 않아도 폐기능검사를 받아야 하나요?', a: '네. 2026년 폐기능검사는 흡연력과 무관하게 만 56세·만 66세 모두가 대상입니다. 비흡연자도 COPD 위험이 있으므로 반드시 받아보세요.', source: '국민건강보험공단 2026년 건강검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '스파이로메트리 검사는 어떻게 하나요?', a: '코를 클립으로 막고 마우스피스를 입에 문 후, 숨을 최대한 들이마셨다가 힘껏 빠르게 내쉬는 방식입니다. 보통 3회 반복하며 10~15분 정도 소요됩니다.', source: '국민건강보험공단 건강검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
    { q: '폐기능검사에서 이상이 나오면 어떻게 되나요?', a: '이상 소견이 발견되면 기관지확장제 흡입 후 재검사를 실시합니다. 재검 결과에 따라 전문 진료를 안내받을 수 있으며, 이후 진료는 건강보험이 적용됩니다.', source: '국민건강보험공단 건강검진 안내', sourceUrl: 'https://www.nhis.or.kr' },
  ],
  sources: [
    { name: '국민건강보험공단 건강검진 안내', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부 2026년 건강검진 시행 공고', url: 'https://www.mohw.go.kr' },
  ],
};
