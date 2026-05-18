import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          정년 도달 직원을 재고용하려면 먼저 <strong>취업규칙이나 단체협약에 재고용 규정</strong>을 명시한 후
          고용24(work24.go.kr) 또는 관할 고용센터에 계속고용장려금을 신청합니다.
          재고용 후 사업주가 <strong>1인당 월 30만원</strong>을 최대 3년간 지원받습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        정년 도달 직원을 재고용하면 숙련 인력을 유지하면서 동시에 정부 인건비 지원까지 받을 수 있습니다.
        아래 절차를 순서대로 따라하면 신청이 어렵지 않습니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">재고용을 통한 장려금 신청 단계</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 취업규칙·단체협약에 정년퇴직자 재고용 규정 추가 (노사 합의)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 정년 도달 예정 근로자 확인 (계속고용제도 시행일부터 5년 이내)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 정년 도달 후 재고용 계약 체결 (새 근로계약서 작성)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>4단계:</strong> 고용24(work24.go.kr) 또는 관할 고용센터에 장려금 신청
          </div>
          <div className="info-box">
            <strong>5단계:</strong> 분기 단위 장려금 지급 (월 30만원)
          </div>
        </div>
      </section>

      <section className="detail-card" id="reemploy-vs-extend">
        <h2 className="detail-card-head">재고용 시 임금·근로 조건은?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>방법</th><th>임금 기준</th><th>근로 조건</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>정년 연장</strong></td>
                <td>기존 조건 유지가 원칙</td>
                <td>기존 근로 조건 그대로</td>
              </tr>
              <tr>
                <td><strong>정년 폐지</strong></td>
                <td>기존 조건 유지</td>
                <td>정년 없이 계속 근무</td>
              </tr>
              <tr>
                <td><strong>재고용</strong></td>
                <td>새 계약으로 협의 가능</td>
                <td>임금·시간 협의 (일부 조정 가능)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>취업규칙 또는 단체협약:</strong> 재고용 규정이 명시된 개정본
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>근로계약서:</strong> 재고용 체결 근로계약서
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>근로자 명단:</strong> 계속 고용 대상 근로자 정보
          </div>
          <div className="info-box">
            <strong>사업장 등록 서류:</strong> 사업자등록증 등 (고용센터 안내에 따름)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 비수도권 우대, 다른 장려금과의 중복 여부까지<br />
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

export const 계속고용장려금재고용신청방법SpokeContent: SpokeData = {
  h1: '정년 도달한 직원 재고용 고민된다면 계속고용장려금 신청 방법',
  breadcrumb: '재고용신청방법',
  description:
    '정년퇴직자 재고용 시 계속고용장려금 신청 방법: 취업규칙에 재고용 규정 추가 → 재고용 계약 체결 → 고용24 신청 → 월 30만원 최대 3년. 재고용 시 임금·근로조건은 새 계약으로 협의 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '정년퇴직자를 재고용하면 계속고용장려금을 받을 수 있나요?',
      a: '네. 정년퇴직자 재고용은 계속고용제도 세 가지(정년 연장·폐지·재고용) 중 하나로 인정되어 장려금을 신청할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '재고용 시 임금은 어떻게 되나요?',
      a: '재고용은 새 근로계약을 체결하는 방식이라 임금·근로시간을 새로 협의할 수 있습니다. 정년 연장과 달리 일부 조정이 가능합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '재고용하기 전에 취업규칙을 반드시 바꿔야 하나요?',
      a: '네. 취업규칙 또는 단체협약에 정년퇴직자 재고용 규정을 명시한 후 장려금을 신청해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '고용24(work24.go.kr) 또는 관할 고용센터에서 신청합니다. 취업규칙·근로계약서·근로자 명단이 필요합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '재고용 후 얼마나 지나야 장려금을 받나요?',
      a: '분기 단위로 신청하여 지급받습니다. 재고용 후 매분기마다 신청하면 월 30만원씩 지급됩니다.',
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
