import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          불법사금융예방대출은 <strong>신용평점 하위 20%</strong>이면서
          <strong>연소득 3,500만 원 이하</strong>인 분이 신청할 수 있습니다.
          여기에 더해 금융교육 이수 또는 복지멤버십 가입이 필수 조건입니다.
          연체가 있어도 신청 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        대부업조차 이용이 어려운 최저 신용등급의 분들을 위한 상품으로,
        불법 사채를 쓰지 않아도 되도록 설계되었습니다.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>기본대출</th><th>추가대출</th><th>합계</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>비연체자</strong></td><td>100만 원</td><td>-</td><td>100만 원</td></tr>
              <tr><td><strong>금융권 연체자</strong></td><td>50만 원</td><td>50만 원</td><td>최대 100만 원</td></tr>
              <tr><td><strong>의료·주거·교육비 증빙 연체자</strong></td><td>100만 원</td><td>-</td><td>100만 원</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="requirements">
        <h2 className="detail-card-head">공통 필수 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신용평점:</strong> 신용평점 하위 20% 이하
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득:</strong> 연소득 3,500만 원 이하
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>필수 이수:</strong> 금융교육 이수 (서금원 포털, 3과목 중 1과목) OR 복지멤버십 가입 중 택 1
          </div>
          <div className="info-box">
            <strong>신청처:</strong> 전국 50개 서민금융통합지원센터 방문 (사전 예약 ☎1397 필수)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="social">
        <h2 className="detail-card-head">사회적배려대상자 우대</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>일반 금리:</strong> 연 12.5%
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사회적배려대상자 금리:</strong> 연 9.9%
          </div>
          <div className="info-box">
            <strong>해당 대상:</strong> 기초수급자·차상위·자활근로자·근로장려금 수급자·등록 장애인·한부모가족·다문화가족·북한이탈주민
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            금리·한도 상세, 신청 방법, 완제자 인센티브까지<br />
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

export const 불법사금융예방대출신청자격신용평점하위20기준SpokeContent: SpokeData = {
  h1: '불법사금융예방대출 신청 자격, 신용평점 하위 20% 이하 기준 확인',
  breadcrumb: '신청자격신용평점하위20기준',
  description:
    '불법사금융예방대출 신청 자격: 신용평점 하위 20% + 연소득 3,500만 원 이하. 금융교육 이수 또는 복지멤버십 가입 필수. 연체자도 신청 가능(한도 조정). 사회적배려대상자 연 9.9%.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '신용평점 하위 20%인지 어떻게 확인하나요?',
      a: '서민금융통합지원센터 방문 또는 서민금융 잇다 앱에서 자격조회를 통해 확인할 수 있습니다. 방문 전 ☎1397로 문의해도 됩니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '금융교육은 어디서 받나요?',
      a: '서민금융진흥원 금융교육포털(서금원 홈페이지 내)에서 불법사금융예방대출용 교육 3과목 중 1과목을 이수하면 됩니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '복지멤버십은 어디서 가입하나요?',
      a: '보건복지부 복지로(bokjiro.go.kr) 또는 읍·면·동 행정복지센터에서 가입할 수 있습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '대부업 이용 중인데도 신청할 수 있나요?',
      a: '네, 신청 가능합니다. 신용평점 하위 20%이면서 연소득 3,500만 원 이하면 신청할 수 있습니다. 다만 기존 금융권에 연체가 있는 경우 기본 한도가 50만 원이 됩니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '온라인으로 신청할 수 있나요?',
      a: '최초 신청은 전국 50개 서민금융통합지원센터를 직접 방문해야 합니다. 추가대출이나 재대출은 서민금융 잇다 앱으로도 신청이 가능합니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
  ],
  sources: [
    { name: '서민금융진흥원 불법사금융예방대출', url: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do' },
    { name: '서민금융진흥원', url: 'https://www.kinfa.or.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
