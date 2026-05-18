import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          계속고용장려금을 받으려면 <strong>정년 연장(1년 이상)</strong>,
          <strong>정년 폐지</strong>, <strong>정년퇴직자 재고용</strong> 중 하나 이상을 도입해야 합니다.
          세 가지 방법은 임금·근로 조건 유지 방식이 다르므로 회사 상황에 맞게 선택하면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        계속고용제도 세 가지를 비교해 어떤 방식이 회사와 근로자 모두에게 적합한지 확인하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">세 가지 계속고용 방법 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>방법</th><th>내용</th><th>임금 기준</th><th>근로자 효과</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>정년 연장</strong></td>
                <td>정년 자체를 1년 이상 늦춤 (취업규칙·단협 개정)</td>
                <td>기존 조건 유지 원칙</td>
                <td>기존 직책·직급·임금 유지</td>
              </tr>
              <tr>
                <td><strong>정년 폐지</strong></td>
                <td>정년 자체를 없앰 (연령 제한 삭제)</td>
                <td>기존 조건 유지</td>
                <td>정년 없이 계속 근무 가능</td>
              </tr>
              <tr>
                <td><strong>정년퇴직자 재고용</strong></td>
                <td>정년 후 새 계약으로 재채용</td>
                <td>새 계약으로 협의 가능</td>
                <td>임금·시간 일부 조정 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="pros-cons">
        <h2 className="detail-card-head">각 방법의 특징 — 회사 선택 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>정년 연장 선택 시:</strong> 숙련 인력을 기존 조건 그대로 유지하고 싶을 때. 임금 협의 부담이 없는 반면 인건비 그대로 유지됨
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>정년 폐지 선택 시:</strong> 장기적으로 연령 제한 없이 고용하고 싶을 때. 가장 과감한 방식
          </div>
          <div className="info-box">
            <strong>재고용 선택 시:</strong> 정년은 유지하되 우수 인력만 선별해 재계약하고 싶을 때. 임금·시간 조정이 가능해 유연함
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="worker-view">
        <h2 className="detail-card-head">근로자 입장에서의 차이</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>정년 연장·폐지:</strong> 기존 조건 유지, 근로자에게 가장 안정적
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재고용:</strong> 새 계약이라 임금 협의 필요, 일부 조정 가능성 있음
          </div>
          <div className="info-box">
            <strong>공통:</strong> 어떤 방식이든 장려금은 사업주에게 지급, 근로자는 고용 연장 기회 확보
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 신청 자격, 비수도권 우대, 신청 절차까지<br />
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

export const 계속고용장려금세가지고용방법차이SpokeContent: SpokeData = {
  h1: '정년 연장, 정년 폐지, 재고용 세 가지 계속고용 방법 어떻게 다른가',
  breadcrumb: '세가지고용방법차이',
  description:
    '계속고용제도 3가지 비교: 정년 연장(기존 조건 유지), 정년 폐지(연령 제한 삭제), 재고용(새 계약 협의 가능). 어떤 방법이든 사업주에게 월 30만원 최대 3년 지원. 재고용이 가장 유연함.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '정년 연장과 재고용의 차이가 무엇인가요?',
      a: '정년 연장은 정년 자체를 늦춰 기존 근로 조건을 그대로 유지합니다. 재고용은 정년 후 새 계약을 체결해 임금·근로시간을 협의할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '세 가지 중 하나만 도입해도 장려금을 받을 수 있나요?',
      a: '네. 정년 연장(1년 이상), 정년 폐지, 정년퇴직자 재고용 중 하나 이상만 도입하면 장려금 신청이 가능합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '재고용 시 임금을 낮출 수 있나요?',
      a: '재고용은 새 계약이라 임금·근로시간을 협의할 수 있습니다. 단, 최저임금 이상은 보장해야 합니다. 노동조합이나 노무사 자문을 받는 것을 권장합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '정년을 폐지하면 장점이 있나요?',
      a: '정년 폐지는 연령 제한 자체를 없애는 가장 과감한 방식입니다. 우수 인력을 장기적으로 유지하기 쉽지만, 인력 관리 유연성이 낮아질 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '어떤 방식을 선택하는 것이 좋나요?',
      a: '숙련 인력을 기존 조건 그대로 유지하고 싶으면 정년 연장, 임금·시간을 조정하고 싶으면 재고용, 장기적으로 연령 제한 없이 운영하고 싶으면 정년 폐지가 적합합니다. 관할 고용센터 상담 권장.',
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
