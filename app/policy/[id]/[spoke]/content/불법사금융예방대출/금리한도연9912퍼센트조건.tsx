import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          불법사금융예방대출 금리는 일반 <strong>연 12.5%</strong>,
          사회적배려대상자 <strong>연 9.9%</strong>,
          6개월 이상 이용 후 완제 시 재대출 <strong>연 4.5%</strong>입니다.
          대출 한도는 <strong>1인당 최대 100만 원</strong>이며,
          2년 원리금균등분할상환으로 매달 같은 금액을 상환합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        중도상환수수료와 거치기간이 없어, 여건이 될 때 언제든지 조기 상환할 수 있습니다.
        성실하게 상환하면 다음 대출 시 연 4.5%의 파격적인 우대금리를 받을 수 있습니다.
      </p>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">금리 체계</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>대상</th><th>금리</th><th>적용 조건</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>일반</strong></td><td>연 12.5%</td><td>신용평점 하위 20% + 연소득 3,500만 원 이하</td></tr>
              <tr><td><strong>사회적배려대상자</strong></td><td>연 9.9%</td><td>기초수급자·차상위·장애인·한부모 등 증빙</td></tr>
              <tr><td><strong>완제자 재대출</strong></td><td>연 4.5%</td><td>최소 6개월 이상 이용 후 완제한 자</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="limit">
        <h2 className="detail-card-head">대출 한도</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>비연체자:</strong> 기본대출 100만 원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>금융권 연체자:</strong> 기본대출 50만 원 + 추가대출 50만 원 = 최대 100만 원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>의료·주거·교육비 증빙 연체자:</strong> 기본대출 100만 원 가능
          </div>
          <div className="info-box">
            <strong>상환방식:</strong> 2년 원리금균등분할상환 (거치기간·중도상환수수료 없음)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="incentive">
        <h2 className="detail-card-head">완제자 인센티브</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재대출 우대:</strong> 6개월 이상 이용 후 완제 → 재대출 시 연 4.5% 적용
          </div>
          <div className="info-box">
            <strong>상환 축하금:</strong> 만기 전 완제 → 납입이자의 50% 환급 (2025.6.9 이후 실행 대출 적용, 연 4.5% 이용자 제외)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 신청 방법, 사회적배려대상자 서류까지<br />
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

export const 불법사금융예방대출금리한도연9912퍼센트조건SpokeContent: SpokeData = {
  h1: '불법사금융예방대출 금리와 한도, 연 9.9~12.5% 실제 조건',
  breadcrumb: '금리한도연9912퍼센트조건',
  description:
    '불법사금융예방대출: 일반 연 12.5%, 사회적배려대상자 연 9.9%, 완제자 재대출 연 4.5%. 1인 최대 100만 원. 2년 원리금균등분할. 중도상환수수료 없음. 만기 전 완제 시 이자 50% 환급.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '연 12.5%면 사채보다 낮은 건가요?',
      a: '네, 불법 사채는 법적 최고금리(연 20%)를 훨씬 초과하는 경우가 많습니다. 불법사금융예방대출은 연 12.5%(사회적배려대상자 9.9%)로 훨씬 낮은 금리를 제공합니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '100만 원을 2년 동안 나눠 갚으면 매달 얼마인가요?',
      a: '연 12.5% 기준 100만 원을 24개월 원리금균등분할상환 시 매월 약 47,000원 수준입니다. 정확한 상환액은 센터 방문 상담 시 안내받으세요.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '완제자 재대출 연 4.5%는 언제부터 적용되나요?',
      a: '최소 6개월 이상 이용 후 대출을 완제한 경우, 이후 재대출 신청 시 연 4.5% 우대금리가 적용됩니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '상환 축하금은 얼마나 받을 수 있나요?',
      a: '만기 전에 조기 완제하면 납입한 이자의 50%를 상환 축하금으로 받습니다. 단, 2025년 6월 9일 이후 실행 대출에 한하며, 연 4.5% 이용자는 제외됩니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '중도에 일부 상환이 가능한가요?',
      a: '중도상환수수료가 없으므로 언제든지 상환이 가능합니다. 만기 전 전액 완제 시 납입이자 50%를 상환 축하금으로 받을 수 있습니다.',
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
