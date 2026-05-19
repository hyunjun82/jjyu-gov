import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년일자리도약장려금은 기업 소재지에 따라 지원 금액이 다릅니다.
          <strong>수도권은 최대 720만 원</strong>, <strong>비수도권은 최대 1,440만 원</strong>으로
          비수도권 기업이 2배 더 많이 받을 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지역별 지원 금액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>지원 금액</th><th>지급 방식</th></tr></thead>
            <tbody>
              <tr><td>수도권 (서울·경기·인천)</td><td>최대 720만 원</td><td>월 60만 원 × 12개월</td></tr>
              <tr><td>비수도권</td><td>최대 1,440만 원</td><td>월 60만 원 × 12개월 + 추가 지원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            지원 금액은 정부 예산 및 연도별 사업 지침에 따라 변경될 수 있습니다.
            정확한 금액은 고용24(work24.go.kr) 또는 고용노동부(☎ 1350)에서 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="payment">
        <h2 className="detail-card-head">지급 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>지급 시점</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>6개월 고용 유지 후</td><td>1차 지급</td></tr>
              <tr><td>12개월 고용 유지 후</td><td>2차 지급 (전액 완료)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            지원금은 기업에 지급됩니다. 청년 근로자에게 직접 지급되는 것이 아닙니다.
            기업이 지원금을 받으려면 청년을 정규직으로 채용하고 고용을 유지해야 합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="region">
        <h2 className="detail-card-head">수도권 해당 지역 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>수도권 (낮은 지원)</th><th>비수도권 (높은 지원)</th></tr></thead>
            <tbody>
              <tr><td>서울특별시</td><td>부산·대구·광주·대전·울산·세종·인천 외 지역</td></tr>
              <tr><td>경기도</td><td>강원·충북·충남·전북·전남·경북·경남·제주</td></tr>
              <tr><td>인천광역시</td><td>— (수도권 외 전 지역)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 청년일자리도약장려금청년일자리도약장려금지원금액수도권비수도권차이SpokeContent: SpokeData = {
  h1: '청년일자리도약장려금 지원 금액 수도권 720만원 비수도권 1440만원 차이',
  breadcrumb: '청년일자리도약장려금지원금액수도권비수도권차이',
  description: '청년일자리도약장려금 수도권 720만 원, 비수도권 1,440만 원 지역별 지원 금액 차이와 지급 구조를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '청년일자리도약장려금은 어떤 기업에 지급되나요?', a: '5인 이상 우선지원대상기업(중소기업)에서 취업 취약 청년(6개월 이상 실업, 고졸 이하, NEET 등)을 정규직으로 채용한 경우 지원합니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '지원 금액은 얼마인가요?', a: '채용 청년 1인당 최대 월 60만 원씩, 최대 2년(24개월) 동안 지원됩니다. 총 최대 1,440만 원까지 받을 수 있습니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '신청은 어디서 하나요?', a: '고용24(work24.go.kr) 또는 관할 고용센터를 통해 기업이 직접 신청합니다. 채용 후 6개월 이내에 신청해야 합니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '채용 후 바로 신청이 가능한가요?', a: '정규직 채용일로부터 6개월이 지난 후 지원 요건을 충족한 경우에 신청합니다. 6개월 고용 유지가 지급 요건입니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '지원금 수령 중 청년이 퇴사하면 어떻게 되나요?', a: '청년이 퇴사하면 해당 월부터 지원이 중단됩니다. 일정 기간 내 재채용하거나 다른 취약청년을 채용하면 계속 지원받을 수 있는 경우가 있습니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
  ],
  sources: [{ name: '고용노동부 공식 안내', url: 'https://www.moel.go.kr' }],
};
