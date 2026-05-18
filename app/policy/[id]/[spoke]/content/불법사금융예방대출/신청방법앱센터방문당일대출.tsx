import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          불법사금융예방대출은 <strong>최초 신청 시 전국 50개 서민금융통합지원센터를 반드시 방문</strong>해야 합니다.
          방문 전 <strong>☎1397로 사전 예약</strong>이 필수이며,
          금융교육 이수 또는 복지멤버십 가입 후 방문하면 당일 심사·지급도 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        추가대출과 재대출은 <strong>서민금융 잇다 앱</strong>으로도 신청할 수 있어 방문 없이 처리됩니다.
        최초 신청만 센터 방문이 필요합니다.
      </p>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">신청 절차 단계별 안내</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>방법</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>사전 준비</td><td>금융교육 이수(서금원 포털 3과목 중 1과목) 또는 복지멤버십 가입</td></tr>
              <tr><td><strong>2단계</strong></td><td>예약</td><td>☎1397 전화 또는 서민금융 잇다 앱으로 가까운 센터 예약</td></tr>
              <tr><td><strong>3단계</strong></td><td>서류 준비</td><td>신분증, 소득증빙, 사회적배려대상자는 추가 증빙서류</td></tr>
              <tr><td><strong>4단계</strong></td><td>센터 방문</td><td>예약 시간에 맞춰 전국 50개 서민금융통합지원센터 방문</td></tr>
              <tr><td><strong>5단계</strong></td><td>심사·지급</td><td>자격 확인 후 심사 통과 시 당일 지급 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>공통 서류:</strong> 신분증(주민등록증·운전면허증), 소득증빙(근로소득 원천징수영수증·사업소득 확인서 등)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>금융교육 이수 증빙:</strong> 서민금융진흥원 금융교육 이수증 (포털에서 출력)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>복지멤버십 가입 증빙:</strong> 복지멤버십 가입 확인서 (복지로 발급)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>연체자 추가서류(의료·주거·교육비):</strong> 해당 지출 증빙서류 (진료비 영수증, 임차계약서, 등록금 영수증 등)
          </div>
          <div className="info-box">
            <strong>사회적배려대상자 추가서류:</strong> 수급자증명서·장애인등록증·한부모가족증명서 등 해당 증빙
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="app">
        <h2 className="detail-card-head">앱으로 신청 가능한 경우</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>최초 신청:</strong> 센터 방문 필수 (앱 불가)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>추가대출:</strong> 서민금융 잇다 앱으로 신청 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재대출(완제자 우대):</strong> 서민금융 잇다 앱으로 신청 가능
          </div>
          <div className="info-box">
            <strong>앱 다운로드:</strong> 구글플레이·애플 앱스토어에서 "서민금융 잇다" 검색
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 금리·한도, 사회적배려대상자 서류까지<br />
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

export const 불법사금융예방대출신청방법앱센터방문당일대출SpokeContent: SpokeData = {
  h1: '불법사금융예방대출 신청 방법, 앱·센터 방문 예약부터 당일 대출까지',
  breadcrumb: '신청방법앱센터방문당일대출',
  description:
    '불법사금융예방대출 최초 신청은 전국 50개 서민금융통합지원센터 방문 필수. ☎1397 사전 예약 후 금융교육 이수 또는 복지멤버십 가입 증빙 지참. 추가·재대출은 서민금융 잇다 앱으로 신청 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '당일 대출이 가능한가요?',
      a: '센터 방문 후 자격 심사를 통과하면 당일 대출이 가능합니다. 단, 사전에 금융교육 이수 또는 복지멤버십 가입이 완료되어 있어야 하며, 필요 서류를 모두 지참해야 합니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '금융교육은 어디서 어떻게 받나요?',
      a: '서민금융진흥원 홈페이지(kinfa.or.kr) 내 금융교육포털에서 온라인으로 이수할 수 있습니다. 불법사금융예방대출 관련 교육 3과목 중 1과목을 선택해 이수하면 됩니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '복지멤버십은 어디서 가입하나요?',
      a: '보건복지부 복지로(bokjiro.go.kr) 홈페이지 또는 가까운 읍·면·동 행정복지센터에서 가입할 수 있습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '가까운 서민금융통합지원센터는 어디서 찾나요?',
      a: '☎1397로 문의하거나 서민금융 잇다 앱의 센터 찾기 기능을 이용하면 가장 가까운 서민금융통합지원센터를 찾을 수 있습니다. 전국 50개 센터가 운영 중입니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/financialProduct/smallLivingLoan.do',
    },
    {
      q: '추가대출은 얼마까지 받을 수 있나요?',
      a: '기본대출 50만 원을 받은 금융권 연체자는 추가대출 50만 원을 신청할 수 있어 합계 최대 100만 원까지 가능합니다. 추가대출은 서민금융 잇다 앱으로도 신청 가능합니다.',
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
