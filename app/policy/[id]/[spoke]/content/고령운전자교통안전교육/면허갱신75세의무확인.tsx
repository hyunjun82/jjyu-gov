import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>만 75세 이상</strong> 운전자는 면허 갱신(적성검사) 시
          <strong>고령운전자 교통안전교육을 의무적으로 이수</strong>해야 합니다.
          교육 미이수 시 면허 갱신이 불가합니다.
          갱신 주기는 <strong>생일 전후 6개월</strong> 이내이며,
          교육은 무료로 제공됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        운전면허 갱신 시기가 다가온 75세 이상이라면 교통안전교육을 먼저 예약하세요.
        교육 이수 후 적성검사와 연계하여 면허 갱신을 완료할 수 있습니다.
      </p>

      <section className="detail-card" id="renewal">
        <h2 className="detail-card-head">75세 이상 면허 갱신 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>교통안전교육 예약 (온라인 또는 방문)</td></tr>
              <tr><td><strong>2단계</strong></td><td>교통안전교육 이수 (온라인 또는 교육장)</td></tr>
              <tr><td><strong>3단계</strong></td><td>적성검사 (신체·인지 기능 확인)</td></tr>
              <tr><td><strong>4단계</strong></td><td>면허증 갱신 발급</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="period">
        <h2 className="detail-card-head">면허 갱신 기간</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>갱신 기간:</strong> 생일 전후 6개월 이내 (생일 기준 ±6개월)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>갱신 주기:</strong> 3년마다 (75세 이상 기준)
          </div>
          <div className="info-box">
            <strong>기간 초과 시:</strong> 면허 효력 정지 → 재취득 필요
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="education">
        <h2 className="detail-card-head">교육 이수 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인 이수:</strong> 도로교통공단 이러닝센터 (trafficedu.koroad.or.kr)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>오프라인 이수:</strong> 전국 도로교통공단 교육장 방문 예약
          </div>
          <div className="info-box">
            <strong>비용:</strong> 무료
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            고령운전자 교육 65세·75세 차이, 온라인 이수 방법, 예약 안내까지<br />
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

export const 고령운전자교통안전교육면허갱신75세의무확인SpokeContent: SpokeData = {
  h1: '운전면허 갱신 앞둔 75세 이상이라면 고령운전자 교육 이수 의무 확인',
  breadcrumb: '면허갱신75세의무확인',
  description:
    '75세 이상 고령운전자 교통안전교육 의무: 면허 갱신(적성검사) 시 교육 이수 필수. 갱신 주기 3년, 생일 전후 6개월 내. 절차: 교육 예약→이수→적성검사→면허 갱신. 온라인(이러닝) 또는 오프라인, 무료.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '교통안전교육을 받지 않으면 면허를 갱신할 수 없나요?',
      a: '네. 75세 이상은 고령운전자 교통안전교육 이수가 면허 갱신(적성검사)의 필수 조건입니다. 교육 미이수 시 면허 갱신이 불가합니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
    {
      q: '면허 갱신은 언제까지 해야 하나요?',
      a: '생일 전후 6개월 이내에 갱신해야 합니다. 기간을 초과하면 면허 효력이 정지되고 재취득 절차가 필요할 수 있습니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
    {
      q: '온라인으로 교육을 이수할 수 있나요?',
      a: '네. 75세 이상은 도로교통공단 이러닝센터(trafficedu.koroad.or.kr)를 통해 온라인으로 교육을 이수할 수 있습니다.',
      source: '도로교통공단',
      sourceUrl: 'https://trafficedu.koroad.or.kr',
    },
    {
      q: '교육 이수 후 바로 면허 갱신이 되나요?',
      a: '교육 이수 후 적성검사를 받아야 면허 갱신이 완료됩니다. 적성검사는 신체·인지 기능을 확인하는 절차입니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
    {
      q: '교육 비용이 있나요?',
      a: '고령운전자 교통안전교육은 무료로 운영됩니다.',
      source: '도로교통공단',
      sourceUrl: 'https://www.koroad.or.kr',
    },
  ],
  sources: [
    { name: '도로교통공단', url: 'https://www.koroad.or.kr' },
    { name: '도로교통공단 이러닝센터', url: 'https://trafficedu.koroad.or.kr' },
    { name: '도로교통공단 안전운전 통합민원', url: 'https://www.safedriving.or.kr' },
  ],
};
