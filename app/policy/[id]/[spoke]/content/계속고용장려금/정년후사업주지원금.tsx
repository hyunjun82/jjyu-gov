import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          정년을 지난 직원을 계속 고용하면 사업주가 <strong>1인당 월 30만원</strong>을
          최대 <strong>3년(총 1,080만원)</strong>까지 지원받습니다.
          우선지원대상기업·중견기업·사회적기업이 대상이며
          정년 연장·정년 폐지·재고용 중 하나 이상을 도입하면 신청할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        고령자 계속고용장려금은 사업주가 받는 인건비 보조 제도입니다.
        정년 이후에도 직원을 계속 고용하면 정부가 인건비를 직접 지원해 사업주의 부담을 줄여줍니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">사업주가 받는 지원금 규모</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>기간</th><th>지원금</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>매월</strong></td><td>30만원</td><td>근로자 1인당</td></tr>
              <tr><td><strong>연간</strong></td><td>360만원</td><td>12개월 × 30만원</td></tr>
              <tr><td><strong>최대 3년</strong></td><td>1,080만원</td><td>1인당 최대 누적</td></tr>
              <tr><td><strong>2026 비수도권</strong></td><td>추가 우대</td><td>고용노동부 별도 안내</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">사업주 신청 자격</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기업 유형:</strong> 우선지원대상기업 또는 중견기업 또는 사회적기업
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>제외:</strong> 대기업, 공기업
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>계속고용 방법:</strong> 정년 연장(1년 이상) 또는 정년 폐지 또는 정년퇴직자 재고용 중 1가지 이상
          </div>
          <div className="info-box">
            <strong>근로자 요건:</strong> 계속고용제도 시행일부터 5년 이내 정년 도달자
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="effect">
        <h2 className="detail-card-head">근로자 입장에서의 효과</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원금 수령자:</strong> 사업주 (근로자 직접 수령 아님)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>효과:</strong> 사업주의 인건비 부담 감소 → 정년 후 고용 연장 기회 증가
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>근로자 확인:</strong> 회사 인사팀에 본 장려금 활용 여부 문의
          </div>
          <div className="info-box">
            <strong>신청처:</strong> 사업주가 고용24(work24.go.kr) 또는 관할 고용센터
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            정년 연장·폐지·재고용 차이, 비수도권 우대, 중복 장려금 여부까지<br />
            계속고용장려금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/elderly-continue-employ" className="btn-cta">
            고령자 계속고용장려금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 계속고용장려금정년후사업주지원금SpokeContent: SpokeData = {
  h1: '고령자 계속고용장려금, 정년 지난 직원 계속 쓰면 사업주가 받는 지원금',
  breadcrumb: '정년후사업주지원금',
  description:
    '고령자 계속고용장려금: 정년 지난 직원 계속 고용 시 1인당 월 30만원, 최대 3년 1,080만원. 우선지원대상기업·중견기업·사회적기업 대상. 정년 연장·폐지·재고용 중 1가지 이상 도입 필수.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '계속고용장려금은 얼마나 받나요?',
      a: '근로자 1인당 월 30만원이 사업주에게 지원되며, 최대 3년간 1인당 1,080만원까지 받을 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '어떤 회사가 신청할 수 있나요?',
      a: '우선지원대상기업, 중견기업, 사회적기업이 대상입니다. 대기업과 공기업은 제외됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '정년 연장, 정년 폐지, 재고용 중 하나만 해도 되나요?',
      a: '네. 정년 연장(1년 이상), 정년 폐지, 정년퇴직자 재고용 중 하나 이상 도입하면 신청이 가능합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '근로자가 직접 이 지원금을 받을 수 있나요?',
      a: '아니요. 지원금은 사업주에게 지급됩니다. 근로자는 본인 회사가 이 장려금을 신청했는지 인사팀에 문의하면 됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '비수도권 기업은 추가 혜택이 있나요?',
      a: '2026년부터 비수도권 기업에 대한 지원이 확대됐습니다. 정확한 우대 내용은 고용노동부 또는 관할 고용센터에서 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
    { name: '찾기쉬운 생활법령정보', url: 'https://www.easylaw.go.kr' },
  ],
};
