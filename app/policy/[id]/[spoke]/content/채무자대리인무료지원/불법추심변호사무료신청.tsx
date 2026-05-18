import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          불법 추심을 당하고 있다면 <strong>채무자대리인 무료 지원 제도</strong>를
          통해 국가가 선임한 <strong>변호사를 무료로 배정</strong>받을 수 있습니다.
          금융감독원(1332) 또는 <strong>fss.or.kr</strong>에서 신청하며,
          대한법률구조공단 소속 변호사가 추심 대응을 지원합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        불법 추심은 채무자의 권리를 침해하는 범죄 행위입니다.
        혼자 대응하지 말고 무료 변호사 지원 절차를 먼저 확인하세요.
      </p>

      <section className="detail-card" id="eligible">
        <h2 className="detail-card-head">지원 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>대상 유형</th><th>주요 사례</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>불법 대부업자 피해자</strong></td><td>미등록 대부업체, 불법 사채 이용</td></tr>
              <tr><td><strong>불법 추심 피해자</strong></td><td>협박·폭언·야간 연락 등 불법 추심 행위</td></tr>
              <tr><td><strong>최고금리 초과 피해자</strong></td><td>법정 최고금리(연 20%) 초과 대출</td></tr>
              <tr><td><strong>불법 사금융 피해자</strong></td><td>불법 고리대금, 담보 불법 취득</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="support">
        <h2 className="detail-card-head">지원 내용</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>변호사 선임:</strong> 대한법률구조공단 소속 변호사 무료 배정
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>추심 대응:</strong> 불법 추심 행위에 대한 법적 대응 지원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>채무 조정:</strong> 과도한 이자·원금에 대한 법적 정리 지원
          </div>
          <div className="info-box">
            <strong>비용:</strong> 무료 (정부 지원)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="howto">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화:</strong> 금융감독원 불법사금융신고센터 1332
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 금융감독원 누리집 (fss.or.kr) → 불법금융신고
          </div>
          <div className="info-box">
            <strong>방문:</strong> 전국 금융감독원 지원 또는 대한법률구조공단 지부
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            채무자대리인 신청 대상, 최고금리 초과 기준, 일반 변호사와의 차이까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/debtor-lawyer-free-support" className="btn-cta">
            채무자대리인 무료 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 채무자대리인무료지원불법추심변호사무료신청SpokeContent: SpokeData = {
  h1: '불법 추심 당하고 있다면 채무자대리인 변호사 무료 신청으로 대응하는 방법',
  breadcrumb: '불법추심변호사무료신청',
  description:
    '채무자대리인 무료 지원: 불법 대부업·불법 추심·최고금리(연 20%) 초과 피해자에게 대한법률구조공단 변호사 무료 배정. 금융감독원 1332 또는 fss.or.kr 신청. 비용 무료.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '불법 추심이라는 것을 어떻게 증명해야 하나요?',
      a: '녹취, 문자 메시지, 통화 기록 등 불법 추심 행위 증거를 수집해두면 도움이 됩니다. 신청 후 변호사가 증거 수집·법적 대응을 함께 지원합니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '금리가 얼마를 넘으면 최고금리 초과인가요?',
      a: '법정 최고금리는 연 20%입니다. 이를 초과하는 이자를 요구하는 대출 계약은 초과분이 무효이며, 피해자는 채무자대리인 지원을 신청할 수 있습니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '신청 후 변호사가 바로 배정되나요?',
      a: '금융감독원 신고 접수 후 대한법률구조공단을 통해 변호사가 배정됩니다. 구체적인 배정 일정은 금융감독원(1332)에 문의하세요.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '등록 대부업체의 불법 추심도 해당되나요?',
      a: '등록 여부와 관계없이 불법 추심 행위(협박, 폭언, 야간 연락, 제3자 통보 등)에 해당하면 지원 대상이 될 수 있습니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '변호사 비용은 어떻게 지원되나요?',
      a: '정부 예산으로 변호사 비용이 지원되므로 신청자는 비용을 부담하지 않습니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
  ],
  sources: [
    { name: '금융감독원', url: 'https://www.fss.or.kr' },
    { name: '대한법률구조공단', url: 'https://www.klac.or.kr' },
    { name: '금융위원회', url: 'https://www.fsc.go.kr' },
  ],
};
