import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          영유아 건강검진은 <strong>별도 신청 없이</strong> 검진 시기가 되면 국민건강보험공단이
          보호자에게 안내장을 자동 발송합니다. 가까운 <strong>지정 의료기관에 전화 예약</strong> 후 방문하면 됩니다.
          지정 의료기관은 <strong>건강모아 앱</strong>이나 공단 홈페이지에서 찾을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        검진 당일에는 안내장(또는 앱 확인서)과 아이의 건강보험증을 지참합니다.
        검진 비용은 전액 무료(건강보험 부담)이며, 검진 이외의 일반 진료를 함께 받으면 별도 비용이 발생할 수 있습니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">영유아 건강검진 받는 4단계</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>방법</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>검진 시기 확인</td><td>안내장 수령 또는 건강모아 앱·☎1577-1000</td></tr>
              <tr><td><strong>2단계</strong></td><td>지정 기관 검색</td><td>건강모아 앱 → 기관 찾기 or 공단 홈페이지</td></tr>
              <tr><td><strong>3단계</strong></td><td>예약</td><td>선택 기관 전화 또는 홈페이지 예약</td></tr>
              <tr><td><strong>4단계</strong></td><td>방문·검진</td><td>안내장·건강보험증 지참, 무료 검진</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="find">
        <h2 className="detail-card-head">지정 기관 찾는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강모아 앱:</strong> 앱 → 나의 건강 → 검진기관 찾기 → 영유아 검진 선택
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>공단 홈페이지:</strong> nhis.or.kr → 건강모아 → 검진기관 검색
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화 문의:</strong> ☎1577-1000 → 가까운 영유아 검진 기관 안내
          </div>
          <div className="info-box">
            <strong>범위:</strong> 소아청소년과·내과·가정의학과 등 공단 지정 기관
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="bring">
        <h2 className="detail-card-head">검진 당일 준비물</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>검진표(안내장):</strong> 우편 수령 또는 건강모아 앱 확인서 출력
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강보험증:</strong> 아이의 건강보험증(또는 부모 신분증)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>아이 수첩:</strong> 예방접종 기록이 있는 아이 수첩 (권장)
          </div>
          <div className="info-box">
            <strong>비용:</strong> 검진 항목 전액 무료 (일반 진료 동시 시 본인부담 발생)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            검진 시기, 이상 발견 시 대처, 시기 놓친 경우까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/infant-health-checkup" className="btn-cta">
            영유아 건강검진 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 영유아건강검진예약방법지정기관찾기SpokeContent: SpokeData = {
  h1: '영유아 건강검진 예약 방법, 가까운 지정 의료기관 찾고 무료로 받는 절차',
  breadcrumb: '예약방법지정기관찾기',
  description:
    '영유아 건강검진: 별도 신청 불필요, 공단 자동 안내장 발송. 건강모아 앱·nhis.or.kr·☎1577-1000으로 지정 기관 검색 → 전화 예약 → 안내장·건강보험증 지참 방문. 전액 무료.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '안내장이 도착하지 않으면 어떻게 하나요?',
      a: '안내장이 없어도 건강모아 앱이나 ☎1577-1000으로 검진 대상 여부를 확인할 수 있습니다. 안내장이 필요하면 공단에서 재발급받거나 앱에서 확인서를 출력하면 됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '예약 없이 당일 방문해도 되나요?',
      a: '기관에 따라 당일 방문이 가능하지만 대기가 길 수 있습니다. 소아과는 특히 오전에 혼잡하므로 전화로 예약 후 방문하는 것을 권장합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '어린이집이나 병원에서 대신 신청해 줄 수 있나요?',
      a: '영유아 건강검진은 보호자가 직접 지정 기관을 선택하고 예약합니다. 어린이집이 단체 검진을 안내하는 경우도 있지만, 기본적으로 보호자가 직접 예약해야 합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '검진 당일 아이가 아프면 어떻게 하나요?',
      a: '아이 컨디션이 좋지 않으면 예약을 다시 잡으세요. 검진 시기 구간 내에서 날짜를 바꿀 수 있습니다. 다만 구간을 넘기지 않도록 주의하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '검진 결과는 언제 받을 수 있나요?',
      a: '검진기관에 따라 다르지만, 결과는 방문 시 또는 1~2주 이내 우편·이메일·앱을 통해 받을 수 있습니다. 이상 소견이 있으면 즉시 안내를 받게 됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단 영유아 건강검진', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
  ],
};
