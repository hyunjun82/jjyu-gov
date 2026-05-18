import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          계속고용장려금은 근로자 <strong>1인당 월 30만원</strong>을
          <strong>최대 3년간</strong> 지원합니다.
          3년을 모두 채우면 <strong>1인당 총 1,080만원</strong>이 사업주에게 지급됩니다.
          지원 기간은 최초로 계속 고용된 날부터 최대 3년이며,
          2020년 1월 1일 이전 계속 고용된 경우 2020년 1월 1일부터 산정합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        계속고용장려금의 지원 기간과 금액을 헷갈리는 경우가 많습니다.
        아래에서 월별·연도별·최대 누적액을 한눈에 정리했습니다.
      </p>

      <section className="detail-card" id="amount-table">
        <h2 className="detail-card-head">지원 기간별 금액 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>기간</th><th>금액</th><th>산정 방식</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>월</strong></td><td>30만원</td><td>근로자 1인당, 일할 계산 적용</td></tr>
              <tr><td><strong>1년</strong></td><td>360만원</td><td>30만원 × 12개월</td></tr>
              <tr><td><strong>2년</strong></td><td>720만원</td><td>30만원 × 24개월</td></tr>
              <tr><td><strong>3년 (최대)</strong></td><td>1,080만원</td><td>30만원 × 36개월</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="period-rules">
        <h2 className="detail-card-head">지원 기간 산정 규칙</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>시작일:</strong> 근로자가 최초로 계속 고용된 날부터
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>최대 기간:</strong> 근로자 1인당 최대 3년 (36개월)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소급 기준:</strong> 2020년 1월 1일 이전 계속 고용된 경우 → 2020년 1월 1일부터 산정
          </div>
          <div className="info-box">
            <strong>일할 계산:</strong> 월 중간 입사·퇴직 시 일할 계산하여 지급
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply-timing">
        <h2 className="detail-card-head">신청 방법과 지급 주기</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 주체:</strong> 사업주
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 고용24(work24.go.kr) 또는 관할 고용센터
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지급 주기:</strong> 분기 단위 신청 후 지급
          </div>
          <div className="info-box">
            <strong>필요 서류:</strong> 취업규칙, 단체협약, 근로자 명단 등
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 정년 연장·폐지·재고용 차이, 비수도권 우대까지<br />
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

export const 계속고용장려금월30만원3년기준SpokeContent: SpokeData = {
  h1: '월 30만원 최대 3년, 계속고용장려금 지원 기간과 금액 기준',
  breadcrumb: '월30만원3년기준',
  description:
    '계속고용장려금 금액: 근로자 1인당 월 30만원, 1년 360만원, 최대 3년 1,080만원. 최초 계속 고용일부터 산정. 2020년 1월 1일 이전 계속 고용 시 2020년 1월 1일부터 기산. 분기 단위 지급.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '계속고용장려금은 월 얼마를 받나요?',
      a: '근로자 1인당 월 30만원이 사업주에게 지급됩니다. 월 중간에 입사·퇴직한 경우 일할 계산합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '최대 얼마까지 받을 수 있나요?',
      a: '최대 3년 동안 1인당 1,080만원(30만원 × 36개월)입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '지원 기간은 언제부터 계산하나요?',
      a: '최초로 계속 고용된 날부터 최대 3년입니다. 2020년 1월 1일 이전에 계속 고용된 경우에는 2020년 1월 1일부터 산정합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '지급은 언제 받나요?',
      a: '분기 단위로 신청하여 지급받습니다. 사업주가 고용24(work24.go.kr) 또는 관할 고용센터에 신청합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '여러 명 동시에 받을 수 있나요?',
      a: '네. 계속 고용 요건을 갖춘 근로자 각각에 대해 1인당 월 30만원씩 지원됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
    { name: '국가법령정보센터 고령자 고용안정지원금 지급 규정', url: 'https://law.go.kr' },
  ],
};
