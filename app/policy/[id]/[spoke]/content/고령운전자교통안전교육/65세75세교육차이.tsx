import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          고령운전자 교통안전교육은 <strong>65세 이상은 권장(무료)</strong>,
          <strong>75세 이상은 의무(면허 갱신 필수)</strong>로 구분됩니다.
          65세는 도로교통공단 교육장 오프라인 교육만 가능하며,
          75세 이상은 <strong>온라인·오프라인 모두 이수 가능</strong>합니다.
          무료 교육이므로 수수료 부담 없이 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        65세와 75세 이상의 교육 방식과 의무 여부가 다릅니다.
        본인 나이에 맞는 교육 방법을 확인하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">65세 vs 75세 이상 교육 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>65세 이상</th><th>75세 이상</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>교육 구분</strong></td><td>권장 (임의)</td><td>의무 (면허갱신 필수)</td></tr>
              <tr><td><strong>교육 방식</strong></td><td>오프라인 교육만</td><td>온라인 + 오프라인</td></tr>
              <tr><td><strong>교육 내용</strong></td><td>운전 특성 진단 + 안전운전 교육</td><td>인지기능 측정 + 교통안전교육</td></tr>
              <tr><td><strong>비용</strong></td><td>무료</td><td>무료</td></tr>
              <tr><td><strong>면허 갱신 연계</strong></td><td>미연계</td><td>이수 후 적성검사와 연계</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="reservation">
        <h2 className="detail-card-head">예약 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인 예약:</strong> 도로교통공단 안전운전 통합민원(safedriving.or.kr)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>이러닝 이수:</strong> 도로교통공단 이러닝센터 (75세 이상만 가능)
          </div>
          <div className="info-box">
            <strong>방문 교육:</strong> 전국 도로교통공단 교육장 예약 후 방문
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="content">
        <h2 className="detail-card-head">교육 내용</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>운전능력 자가진단:</strong> 개인별 인지·반응 능력 점검
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>위험상황 대처:</strong> 고령 운전자 특성을 고려한 위험 상황 교육
          </div>
          <div className="info-box">
            <strong>자동차 특성:</strong> 안전운전에 필요한 차량 특성 및 지식
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            고령운전자 면허 갱신 절차, 온라인 이수 방법, 교육장 안내까지<br />
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

export const 고령운전자교통안전교육65세75세교육차이SpokeContent: SpokeData = {
  h1: '고령운전자 교통안전교육, 65세와 75세 이상 의무·권장 차이와 예약 방법',
  breadcrumb: '65세75세교육차이',
  description:
    '고령운전자 교통안전교육: 65세 이상 권장(무료·오프라인만), 75세 이상 의무(면허갱신 필수·온·오프라인 가능). 도로교통공단 안전운전 통합민원 예약. 운전능력 자가진단 포함. 무료 교육.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '65세가 넘었는데 교통안전교육을 꼭 받아야 하나요?',
      a: '65세 이상은 권장 대상으로 의무는 아닙니다. 다만 75세 이상은 면허 갱신 시 의무적으로 이수해야 합니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
    {
      q: '75세 이상은 온라인으로 교육을 받을 수 있나요?',
      a: '네. 75세 이상은 도로교통공단 이러닝센터를 통해 온라인으로 교육을 이수할 수 있습니다. 65세는 오프라인 교육만 운영됩니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
    {
      q: '교육 비용이 드나요?',
      a: '고령운전자 교통안전교육은 무료로 운영됩니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
    {
      q: '예약은 어떻게 하나요?',
      a: '도로교통공단 안전운전 통합민원(safedriving.or.kr)에서 온라인 예약하거나, 전국 도로교통공단 교육장을 방문하면 됩니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.safedriving.or.kr',
    },
    {
      q: '교육을 받으면 어떤 내용이 포함되나요?',
      a: '운전능력 자가진단, 위험 상황 대처 능력 배양, 자동차 특성 및 안전운전 지식이 포함됩니다. 75세 이상은 인지기능 측정도 포함됩니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
  ],
  sources: [
    { name: '도로교통공단', url: 'https://www.koroad.or.kr' },
    { name: '도로교통공단 안전운전 통합민원', url: 'https://www.safedriving.or.kr' },
    { name: '대한민국 정책브리핑', url: 'https://www.korea.kr' },
  ],
};
