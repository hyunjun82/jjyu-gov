import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민건강검진은 <strong>별도 예약 없이</strong> 공단 지정 검진기관 어디서나 받을 수 있습니다.
          대부분의 검진기관은 전화 또는 홈페이지로 예약을 받으며,
          검진기관은 <strong>건강모아 앱</strong> 또는 <strong>국민건강보험 홈페이지</strong>에서
          가까운 곳을 찾을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        검진 당일에는 신분증과 건강검진표(또는 앱에서 확인)를 지참하고,
        전날 저녁 9시 이후 금식을 유지한 후 방문하면 됩니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">검진 받는 절차 4단계</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>방법</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>대상자 확인</td><td>건강모아 앱 → 검진대상 조회 또는 ☎1577-1000</td></tr>
              <tr><td><strong>2단계</strong></td><td>검진기관 찾기</td><td>건강모아 앱 → 기관 찾기 또는 공단 홈페이지</td></tr>
              <tr><td><strong>3단계</strong></td><td>예약</td><td>검진기관 전화 또는 홈페이지 예약 (당일 방문도 가능)</td></tr>
              <tr><td><strong>4단계</strong></td><td>방문·검진</td><td>신분증 + 검진표 지참, 금식 후 방문</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="find">
        <h2 className="detail-card-head">검진기관 찾는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강모아 앱:</strong> 병·의원/검진기관 찾기 → 지역·종류 설정 → 가까운 기관 목록
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>공단 홈페이지:</strong> nhis.or.kr → 건강모아 → 기관 찾기
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화 문의:</strong> ☎1577-1000 → 가까운 검진기관 안내
          </div>
          <div className="info-box">
            <strong>검진기관 범위:</strong> 동네 내과·가정의학과·종합병원 등 공단 지정기관 모두 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="prepare">
        <h2 className="detail-card-head">검진 당일 준비사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지참물:</strong> 신분증(주민등록증·운전면허증·여권), 건강검진표(앱 또는 우편)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>금식:</strong> 전날 저녁 9시 이후 금식 (물·커피·껌도 삼가)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문 시간:</strong> 오전 중 권장 (오후는 최소 8시간 공복 후)
          </div>
          <div className="info-box">
            <strong>검진 비용:</strong> 일반건강검진 전액 무료 (공단 부담), 일부 추가 검사는 본인부담 발생 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            대상자 확인, 검진 항목, 미수검 불이익까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/national-health-checkup" className="btn-cta">
            국민건강검진 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 국민건강검진예약방법검진기관찾기절차SpokeContent: SpokeData = {
  h1: '국민건강검진 예약 방법, 가까운 검진기관 찾고 당일 검사 받는 절차',
  breadcrumb: '예약방법검진기관찾기절차',
  description:
    '국민건강검진 예약: 건강모아 앱 또는 nhis.or.kr에서 가까운 지정기관 검색 → 전화 예약 또는 당일 방문. 신분증+검진표 지참, 전날 9시 이후 금식 필수. ☎1577-1000 기관 안내.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '예약 없이 당일 바로 가도 되나요?',
      a: '검진기관에 따라 당일 방문도 가능하지만, 혼잡할 수 있어 전화 예약 후 방문하는 것이 좋습니다. 일부 대형 병원은 사전 예약이 필수인 경우도 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '검진표가 없어도 검진 받을 수 있나요?',
      a: '건강모아 앱에서 검진대상 확인서를 출력하거나, 신분증만으로도 검진기관에서 대상자 여부를 확인한 후 검진을 받을 수 있습니다. 검진표를 분실했다면 ☎1577-1000에서 재발급 신청하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '검진 결과는 언제 나오나요?',
      a: '검진기관은 검진 완료 후 15일 이내에 우편 또는 이메일로 결과를 통보합니다. 건강모아 앱에서도 결과 조회가 가능합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '검진기관을 중간에 바꿀 수 있나요?',
      a: '네. 지정 검진기관이면 언제든지 원하는 곳에서 받을 수 있습니다. 검진표에 특정 기관이 지정된 경우에도 다른 공단 지정 검진기관으로 방문 가능합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
    {
      q: '검진 후 추가 검사가 필요하다고 하면 비용이 드나요?',
      a: '확진 검사(고혈압·당뇨·이상지질혈증·C형간염 등)는 검진 다음 연도 3월 31일까지 지정 의료기관에서 받을 수 있습니다. 일부 항목은 본인부담이 발생할 수 있으므로 검진기관에서 확인하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do',
    },
  ],
  sources: [
    { name: '국민건강보험 일반건강검진 안내', url: 'https://www.nhis.or.kr/nhis/healthin/wbhaca04500m01.do' },
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
  ],
};
