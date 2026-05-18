import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          고령운전자 교통안전교육은 <strong>65세 이상 무료 권장</strong>,
          <strong>75세 이상 무료 의무</strong>로 운영됩니다.
          65세는 자발적으로 받으면 되고, 75세 이상은
          <strong>면허 갱신(적성검사) 전 반드시 이수</strong>해야 합니다.
          두 구간 모두 교육비는 무료입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        나이에 따라 교육 의무 여부와 이수 방법이 달라집니다.
        본인 나이에 해당하는 기준을 먼저 확인하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">65세 권장 vs 75세 의무 핵심 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>65세 이상 (권장)</th><th>75세 이상 (의무)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>이수 의무</strong></td><td>자율 (권장)</td><td>필수 (면허 갱신 조건)</td></tr>
              <tr><td><strong>교육비</strong></td><td>무료</td><td>무료</td></tr>
              <tr><td><strong>이수 방식</strong></td><td>오프라인(교육장)만</td><td>온라인 + 오프라인</td></tr>
              <tr><td><strong>면허 갱신 연계</strong></td><td>연계 없음</td><td>이수 후 적성검사 → 갱신</td></tr>
              <tr><td><strong>갱신 주기</strong></td><td>5년마다 (65~75세)</td><td>3년마다 (75세 이상)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="age65">
        <h2 className="detail-card-head">65세 이상 권장 교육</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 만 65세 이상 ~ 75세 미만 운전자
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>내용:</strong> 운전능력 자가진단, 위험상황 대처, 안전운전 교육
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방법:</strong> 전국 도로교통공단 교육장 방문 (오프라인만)
          </div>
          <div className="info-box">
            <strong>예약:</strong> 도로교통공단 안전운전 통합민원(safedriving.or.kr) 온라인 예약
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="age75">
        <h2 className="detail-card-head">75세 이상 의무 교육</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 만 75세 이상 운전자 (면허 갱신 시)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>내용:</strong> 인지기능 측정 + 교통안전교육 (65세 교육보다 강화)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 도로교통공단 이러닝센터 (trafficedu.koroad.or.kr)
          </div>
          <div className="info-box">
            <strong>오프라인:</strong> 전국 도로교통공단 교육장 방문 예약
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            고령운전자 교육 온라인 이수 방법, 면허 갱신 절차, 예약 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/elderly-driver-safety" className="btn-cta">
            고령운전자 교통안전교육 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 고령운전자교통안전교육65세무료75세의무비교SpokeContent: SpokeData = {
  h1: '65세 무료 권장 vs 75세 의무, 고령운전자 교통안전교육 어떻게 다른가',
  breadcrumb: '65세무료75세의무비교',
  description:
    '고령운전자 교통안전교육: 65세 이상 무료 권장(오프라인만), 75세 이상 무료 의무(면허갱신 필수·온·오프라인 가능). 65세 갱신주기 5년, 75세 이상 3년. 모두 무료. 도로교통공단 safedriving.or.kr 예약.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '65세와 75세 이상의 가장 큰 차이는 무엇인가요?',
      a: '65세 이상은 교육이 권장(자율)이며 면허 갱신에 영향을 주지 않습니다. 75세 이상은 의무로서 교육 미이수 시 면허 갱신이 불가합니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
    {
      q: '65세도 온라인으로 교육을 받을 수 있나요?',
      a: '아니요. 65세 이상 권장 대상자는 오프라인 교육장에서만 교육을 받을 수 있습니다. 온라인(이러닝) 이수는 75세 이상에게만 가능합니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
    {
      q: '두 구간 모두 교육비가 무료인가요?',
      a: '네. 65세 이상 권장 교육과 75세 이상 의무 교육 모두 무료로 운영됩니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
    {
      q: '면허 갱신 주기가 다른가요?',
      a: '65세~75세 미만은 5년마다, 75세 이상은 3년마다 면허 갱신(적성검사)이 필요합니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
    {
      q: '교육 예약은 어디서 하나요?',
      a: '도로교통공단 안전운전 통합민원(safedriving.or.kr)에서 온라인 예약하거나, 전국 도로교통공단 교육장에 방문 예약할 수 있습니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.safedriving.or.kr',
    },
  ],
  sources: [
    { name: '도로교통공단', url: 'https://www.koroad.or.kr' },
    { name: '도로교통공단 안전운전 통합민원', url: 'https://www.safedriving.or.kr' },
    { name: '도로교통공단 이러닝센터', url: 'https://trafficedu.koroad.or.kr' },
  ],
};
