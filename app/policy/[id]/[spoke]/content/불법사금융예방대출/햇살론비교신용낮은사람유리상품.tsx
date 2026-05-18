import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          신용평점 하위 20%라면 <strong>불법사금융예방대출</strong>이 유리합니다.
          햇살론은 신용평점 하위 20~45% 수준을 주요 대상으로 하며,
          불법사금융예방대출보다 한도가 크고 용도가 다양하지만
          <strong>신용이 더 낮은 분은 불법사금융예방대출만 신청 가능</strong>한 경우가 많습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        두 상품 모두 서민금융진흥원이 관여하지만, 대상과 한도·금리가 다릅니다.
        1397로 상담하면 본인에게 맞는 상품을 안내받을 수 있습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">불법사금융예방대출 vs 햇살론 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>불법사금융예방대출</th><th>햇살론(15 기준)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>신용 요건</strong></td><td>신용평점 하위 20% 이하</td><td>신용평점 하위 20~45% 수준</td></tr>
              <tr><td><strong>소득 요건</strong></td><td>연소득 3,500만 원 이하</td><td>연소득 3,500만 원 이하</td></tr>
              <tr><td><strong>금리</strong></td><td>연 9.9~12.5% (대상별 상이)</td><td>연 15.9% 이내</td></tr>
              <tr><td><strong>한도</strong></td><td>최대 100만 원</td><td>최대 700만 원</td></tr>
              <tr><td><strong>상환 기간</strong></td><td>2년 원리금균등분할</td><td>3~5년</td></tr>
              <tr><td><strong>연체자 신청</strong></td><td>가능 (한도 조정)</td><td>어려운 경우 있음</td></tr>
              <tr><td><strong>신청처</strong></td><td>서민금융통합지원센터 방문 필수</td><td>서민금융통합지원센터·은행 등</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="who">
        <h2 className="detail-card-head">상황별 유리한 상품</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신용평점 최하위(하위 20%)이고 소액(100만 원 이내)이 필요한 경우:</strong> 불법사금융예방대출
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신용은 낮지만 더 큰 금액(100만 원 초과)이 필요한 경우:</strong> 햇살론 또는 햇살론15
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>금융권 연체가 있는 경우:</strong> 불법사금융예방대출 (연체자도 신청 가능)
          </div>
          <div className="info-box">
            <strong>어떤 상품이 맞는지 모르는 경우:</strong> ☎1397 무료 상담으로 맞춤 안내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="note">
        <h2 className="detail-card-head">신청 전 확인 사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중복 신청 제한:</strong> 불법사금융예방대출과 햇살론을 동시에 받는 것은 각 상품의 심사 결과에 따라 달라집니다. 센터에서 확인이 필요합니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자격 조회 먼저:</strong> 서민금융 잇다 앱에서 본인 적합 상품을 먼저 확인하면 헛걸음을 줄일 수 있습니다.
          </div>
          <div className="info-box">
            <strong>상환 축하금 혜택:</strong> 불법사금융예방대출은 만기 전 완제 시 납입이자의 50%를 환급받는 혜택이 있습니다(2025.6.9 이후 실행 대출, 연 4.5% 이용자 제외).
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 금리·한도, 신청 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/illegal-loan-prevention" className="btn-cta">
            불법사금융예방대출 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 불법사금융예방대출햇살론비교신용낮은사람유리상품SpokeContent: SpokeData = {
  h1: '불법사금융예방대출 vs 햇살론, 신용 낮은 사람이 유리한 상품 비교',
  breadcrumb: '햇살론비교신용낮은사람유리상품',
  description:
    '신용평점 하위 20%는 불법사금융예방대출(최대 100만 원, 연 9.9~12.5%), 더 큰 금액 필요 시 햇살론(최대 700만 원). 연체자도 불법사금융예방대출 신청 가능. ☎1397 맞춤 상담.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '불법사금융예방대출과 햇살론을 동시에 받을 수 있나요?',
      a: '동시 이용 가능 여부는 각 상품의 심사 기준에 따라 달라집니다. 정확한 확인은 서민금융통합지원센터 방문 또는 ☎1397 상담을 통해 확인하세요.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '신용평점 하위 20%인지 어디서 알 수 있나요?',
      a: '서민금융 잇다 앱 또는 서민금융통합지원센터 방문 시 자격조회를 통해 확인할 수 있습니다. ☎1397로 문의해도 됩니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '불법사금융예방대출 100만 원으로 부족한데 추가로 더 받을 방법은?',
      a: '불법사금융예방대출은 1인당 최대 100만 원이 한도입니다. 더 큰 금액이 필요하다면 햇살론, 바꿔드림론 등 다른 서민금융 상품을 함께 상담받는 것이 좋습니다. ☎1397에서 맞춤 상품을 안내받을 수 있습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '햇살론과 불법사금융예방대출 금리 중 어느 쪽이 낮나요?',
      a: '불법사금융예방대출이 연 9.9~12.5%로, 햇살론15(연 15.9% 이내)보다 낮습니다. 다만 불법사금융예방대출은 최대 100만 원으로 한도가 작습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '연체가 있으면 햇살론도 신청할 수 있나요?',
      a: '햇살론은 연체가 있는 경우 심사에서 불리할 수 있습니다. 반면 불법사금융예방대출은 금융권 연체자도 신청이 가능하며, 연체 유형에 따라 기본대출 50만 원 또는 100만 원 지원을 받을 수 있습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
  ],
  sources: [
    { name: '서민금융진흥원 불법사금융예방대출', url: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do' },
    { name: '서민금융진흥원', url: 'https://www.kinfa.or.kr' },
    { name: '불법사금융예방대출 신청 사이트', url: 'https://sloan.kinfa.or.kr' },
  ],
};
