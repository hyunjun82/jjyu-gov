import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          주택연금과 기초연금은 <strong>동시에 받을 수 있습니다.</strong>
          단, 주택연금 가입 시 주택이 재산으로 반영되어
          기초연금 수급 자격 심사(재산 기준)에 영향을 줄 수 있습니다.
          주택연금 수령액 자체가 기초연금에서 차감되지는 않습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        두 제도 모두 활용하려면 재산 산정 방식과 기초연금 수급 기준을 함께 확인해야 합니다.
      </p>

      <section className="detail-card" id="overlap">
        <h2 className="detail-card-head">주택연금·기초연금 중복 수령 정리</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>중복 수령 가능 여부</strong></td><td>가능 (법적 제한 없음)</td></tr>
              <tr><td><strong>주택연금 수령액 차감</strong></td><td>없음 (기초연금에서 차감 안 함)</td></tr>
              <tr><td><strong>재산 반영</strong></td><td>주택은 기초연금 재산 심사에 포함됨</td></tr>
              <tr><td><strong>소득 인정액 영향</strong></td><td>주택연금 월 수령액은 소득 인정액에 포함</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득 인정액 계산 시 주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재산 부분:</strong> 주택연금 가입 주택은 재산으로 산정되나, 시가표준액의 일부만 반영
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>수령액 부분:</strong> 매월 받는 주택연금액은 기타소득으로 소득 인정액에 산입
          </div>
          <div className="info-box">
            <strong>결론:</strong> 소득 인정액이 선정 기준액(2인 가구 약 388만원, 2026년)을 넘으면 기초연금 탈락 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">기초연금 유지 가능 여부 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>국민연금공단 상담:</strong> 1355 (기초연금 소득 인정액 시뮬레이션 요청)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>HF 상담:</strong> 1688-8114 (주택연금 수령액·재산 반영 방식 확인)
          </div>
          <div className="info-box">
            <strong>복지로:</strong> www.bokjiro.go.kr → 복지 서비스 모의 계산
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            가입 조건, 월 수령액, 해지 시 주의사항까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/home-equity-pension" className="btn-cta">
            주택연금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 주택연금기초연금중복감액여부SpokeContent: SpokeData = {
  h1: '주택연금 받으면 기초연금 감액되나, 중복 수령과 소득 인정액 영향',
  breadcrumb: '기초연금중복감액여부',
  description:
    '주택연금과 기초연금 동시 수령 가능. 주택연금 수령액이 기초연금에서 직접 차감되지는 않으나, 소득 인정액에 포함돼 기초연금 선정 기준에 영향 가능. 국민연금공단 1355 시뮬레이션 권장.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '주택연금 받으면 기초연금이 자동으로 줄어드나요?',
      a: '자동 차감되지 않습니다. 다만 주택연금 월 수령액이 소득 인정액에 포함되어 선정 기준액 초과 시 기초연금 탈락이 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '주택이 재산 심사에서 어떻게 반영되나요?',
      a: '주택연금 가입 주택은 일반 재산과 동일하게 시가표준액을 기준으로 소득 인정액에 반영됩니다. 단 실거주 주택은 기본재산액 공제가 적용됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초연금 받다가 주택연금 가입하면 어떻게 되나요?',
      a: '주택연금 가입 시 소득 인정액이 변동될 수 있어 기초연금 재심사가 이루어질 수 있습니다. 미리 국민연금공단(1355)에서 시뮬레이션을 받아보세요.',
      source: '국민연금공단',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '부부 모두 주택연금을 받을 수 있나요?',
      a: '주택 1채를 담보로 부부 공동으로 가입합니다. 1명이 사망해도 생존 배우자가 동일 금액을 계속 수령합니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
    {
      q: '국민연금과 주택연금도 함께 받을 수 있나요?',
      a: '네, 국민연금·기초연금·주택연금은 모두 동시에 수령할 수 있습니다. 단 기초연금은 소득 인정액 기준을 초과하지 않아야 합니다.',
      source: '한국주택금융공사',
      sourceUrl: 'https://www.hf.go.kr',
    },
  ],
  sources: [
    { name: '한국주택금융공사', url: 'https://www.hf.go.kr' },
    { name: '보건복지부 기초연금', url: 'https://www.mohw.go.kr' },
    { name: '국민연금공단', url: 'https://www.nps.or.kr' },
  ],
};
