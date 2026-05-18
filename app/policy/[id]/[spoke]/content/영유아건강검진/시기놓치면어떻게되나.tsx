import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          영유아 건강검진 시기를 놓치면 <strong>해당 차수는 받을 수 없습니다.</strong>
          각 차수마다 정해진 월령 구간이 있어 구간을 초과하면 그 검진은 받을 수 없습니다.
          단, 다음 차수 검진은 해당 시기가 되면 정상적으로 받을 수 있으며,
          안내장이 다시 자동 발송됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        안내장이 도착하면 최대한 빨리 예약하세요. 시기를 놓치지 않도록
        건강모아 앱에서 검진 주기를 미리 확인하는 것도 방법입니다.
      </p>

      <section className="detail-card" id="miss">
        <h2 className="detail-card-head">차수별 시기 놓쳤을 때 대처법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>상황</th><th>대처 방법</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>구간 내 (아직 기간 남음)</strong></td><td>즉시 예약 후 방문 — 아직 받을 수 있음</td></tr>
              <tr><td><strong>구간 초과 (이미 넘김)</strong></td><td>해당 차수 불가 — 다음 차수 기다림</td></tr>
              <tr><td><strong>시기 확인 불확실</strong></td><td>☎1577-1000 또는 건강모아 앱으로 잔여 차수 확인</td></tr>
              <tr><td><strong>안내장 미수령</strong></td><td>☎1577-1000 문의 → 재발급 또는 앱 확인서 출력</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="tips">
        <h2 className="detail-card-head">시기 놓치지 않는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강모아 앱 활용:</strong> 앱 → 나의 건강 → 영유아 검진 일정 확인 및 알림 설정
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>안내장 도착 즉시 예약:</strong> 안내장을 받은 날 바로 예약 전화하는 습관
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>아이 수첩에 기록:</strong> 검진일을 아이 수첩에 기록해 놓으면 놓치지 않음
          </div>
          <div className="info-box">
            <strong>어린이집 알림 활용:</strong> 어린이집에서 검진 시기를 안내하는 경우도 있음
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">잔여 검진 차수 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강모아 앱:</strong> 나의 건강 → 영유아 건강검진 이력·잔여 차수 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>공단 홈페이지:</strong> nhis.or.kr 로그인 → 건강검진 → 검진 이력 조회
          </div>
          <div className="info-box">
            <strong>전화 문의:</strong> ☎1577-1000 → 잔여 차수·다음 검진 시기 안내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            검진 8회 시기표, 예약 방법, 이상 발견 시 대처까지<br />
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

export const 영유아건강검진시기놓치면어떻게되나SpokeContent: SpokeData = {
  h1: '영유아 건강검진 시기 놓치면 어떻게 되나, 대처법과 잔여 차수 확인 방법',
  breadcrumb: '시기놓치면어떻게되나',
  description:
    '영유아 건강검진 시기 초과 시 해당 차수 불가. 다음 차수 안내장 자동 재발송. 건강모아 앱·☎1577-1000으로 잔여 차수·시기 확인. 안내장 도착 즉시 예약하는 것이 최선.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '7차를 놓쳤는데 8차는 받을 수 있나요?',
      a: '네. 7차를 놓쳤어도 8차(66~71개월)는 해당 시기가 되면 정상적으로 받을 수 있습니다. 각 차수는 독립적으로 운영됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '몇 차를 받았는지 기억이 안 나요. 어떻게 확인하나요?',
      a: '건강모아 앱 또는 국민건강보험공단 홈페이지(nhis.or.kr)에서 본인 인증 후 영유아 건강검진 이력을 확인할 수 있습니다. ☎1577-1000으로 문의해도 됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '시기를 며칠 넘겼는데 받을 수 있나요?',
      a: '월령 구간(예: 30~36개월)을 초과했다면 아쉽게도 해당 차수를 받을 수 없습니다. 정확한 본인 상황은 ☎1577-1000으로 확인하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '아이가 해외에 있어서 검진을 못 받았어요.',
      a: '귀국 후 해당 차수의 월령 구간 내에 있다면 받을 수 있습니다. 구간이 지났다면 해당 차수는 불가하고 다음 차수 시기에 받게 됩니다. 귀국 후 ☎1577-1000에 문의하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '놓친 검진을 나중에 소급해서 받을 수 있는 방법이 있나요?',
      a: '아닙니다. 영유아 건강검진은 각 발달 단계를 적시에 확인하는 것이 목적이므로 소급 수검이 불가합니다. 현재 시기에 맞는 차수를 받는 것이 최선입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단 영유아 건강검진', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
  ],
};
