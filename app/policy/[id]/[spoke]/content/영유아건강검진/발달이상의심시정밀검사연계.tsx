import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          영유아 건강검진에서 <strong>발달 지연·이상 의심</strong> 소견이 나오면
          별도로 운영되는 <strong>'영유아 발달 정밀검사 비용 지원사업'</strong>으로 연계됩니다.
          보건소 또는 국민건강보험공단을 통해 정밀검사 비용을 최대 40만원까지 지원받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        발달 이상 의심은 빨리 발견할수록 치료·개입 효과가 좋습니다.
        검진 결과지에 '추가 검사 필요' 표시가 있으면 즉시 보건소 또는
        국민건강보험공단(☎1577-1000)에 정밀검사 지원을 문의하세요.
      </p>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">이상 발견 후 대처 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>연락처</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>검진 결과 확인</td><td>우편·앱·검진기관에서 결과지 수령</td></tr>
              <tr><td><strong>2단계</strong></td><td>'추가 검사 필요' 확인 시 문의</td><td>☎1577-1000 또는 보건소</td></tr>
              <tr><td><strong>3단계</strong></td><td>발달 정밀검사 기관 안내</td><td>발달 클리닉·소아과·재활의학과 등</td></tr>
              <tr><td><strong>4단계</strong></td><td>정밀검사 비용 지원 신청</td><td>거주지 보건소 또는 공단</td></tr>
              <tr><td><strong>5단계</strong></td><td>치료·조기 개입 시작</td><td>발달치료·언어치료·물리치료 등</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="support">
        <h2 className="detail-card-head">영유아 발달 정밀검사 비용 지원</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원 대상:</strong> 영유아 건강검진에서 발달 이상 의심 소견을 받은 영유아
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원 금액:</strong> 최대 40만원 (정밀검사 비용)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 거주지 관할 보건소 또는 국민건강보험공단 ☎1577-1000
          </div>
          <div className="info-box">
            <strong>목적:</strong> 자폐 스펙트럼·언어 지연·운동 발달 지연 등 조기 발견 및 개입
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="types">
        <h2 className="detail-card-head">이상 발견 항목별 연계 지원</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>발달 지연·자폐 의심:</strong> 발달 정밀검사 비용 지원 → 발달 클리닉 연계
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>청력 이상:</strong> 이비인후과 정밀검사 → 보청기 지원 사업 안내
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>시력 이상:</strong> 안과 정밀검사 → 안경 지원 사업 안내
          </div>
          <div className="info-box">
            <strong>구강 이상:</strong> 구강 정밀검사 → 영유아 구강관리 사업 연계
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            검진 시기, 예약 방법, 시기 놓친 경우까지<br />
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

export const 영유아건강검진발달이상의심시정밀검사연계SpokeContent: SpokeData = {
  h1: '영유아 건강검진 발달 이상 의심 시, 정밀검사 비용 지원과 연계 절차',
  breadcrumb: '발달이상의심시정밀검사연계',
  description:
    '영유아 건강검진 이상 소견 시: 발달 정밀검사 비용 최대 40만원 지원. 보건소·☎1577-1000 신청. 발달 지연·자폐·청력·시력 등 항목별 전문 기관 연계. 조기 발견·개입이 핵심.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '검진 결과 이상이 나왔는데 어디에 먼저 연락해야 하나요?',
      a: '국민건강보험공단 ☎1577-1000 또는 거주지 보건소에 먼저 전화하면 정밀검사 지원 안내와 연계 기관을 안내받을 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '발달 정밀검사 지원 40만원은 모든 항목에 해당되나요?',
      a: '발달 이상 의심 소견을 받은 영유아가 대상입니다. 청력·시력 등 특정 항목 이상은 별도 지원 사업으로 연계될 수 있으므로 보건소에서 구체적인 지원 내용을 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '자폐 스펙트럼이 의심된다는 소견을 받았어요. 어떻게 해야 하나요?',
      a: '빨리 발달 정밀검사를 받는 것이 중요합니다. 보건소나 ☎1577-1000에 연락해 발달 클리닉·발달장애 전문 병원 연계 및 정밀검사 비용 지원 신청을 해주세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '정밀검사 기관은 어디로 가야 하나요?',
      a: '발달 정밀검사는 소아청소년과(발달 클리닉)·재활의학과·정신건강의학과 등 발달 전문 의료기관에서 받습니다. 보건소 또는 국민건강보험공단에서 가까운 지정 기관을 안내받을 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '검진 결과 정상인데도 발달이 걱정되면 어디에 문의할 수 있나요?',
      a: '검진 결과와 무관하게 발달이 걱정된다면 소아청소년과나 보건소 육아종합지원센터에 방문해 상담을 받을 수 있습니다. 보건소 방문 간호사 서비스도 이용 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단 영유아 건강검진', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
  ],
};
