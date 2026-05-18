import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          맞벌이 가구는 아이돌봄서비스를 신청할 때 <strong>두 사람의 소득을 합산</strong>하되,
          <strong>낮은 소득자의 25%를 차감</strong>한 뒤 판정합니다.
          맞벌이 가구가 아이돌봄서비스 신청 시에는
          <strong>맞벌이 확인 서류(재직증명서·사업자등록증 등)</strong>를 함께 제출해야
          유리한 소득 판정을 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "맞벌이인데 아이돌봄서비스 신청하면 소득 합산이 어떻게 되나요?"
        맞벌이 가구 소득 판정 방식과 신청 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="income-calc">
        <h2 className="detail-card-head">맞벌이 가구 아이돌봄서비스 신청 | 소득 합산 계산 방식</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>소득 합산 방식</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>일반 가구</strong></td>
                <td>가구원 전체 소득 합산</td>
              </tr>
              <tr>
                <td><strong>맞벌이 가구</strong></td>
                <td>낮은 소득자 소득 × 25% 차감 후 합산</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            예시: 부부 각각 건강보험료 20만원 / 15만원 납부 시 → 낮은 15만원의 25%(3.75만원) 차감 →
            합산 20만원 + 11.25만원 = 31.25만원으로 판정
          </div>
        </div>
      </section>

      <section className="detail-card" id="documents">
        <h2 className="detail-card-head">맞벌이 확인 필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>근로자:</strong> 재직증명서 또는 건강보험 자격득실확인서
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자영업자·프리랜서:</strong> 사업자등록증 또는 소득금액증명원
          </div>
          <div className="info-box">
            맞벌이 확인 서류를 제출하지 않으면 단독 소득자로 판정될 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="priority">
        <h2 className="detail-card-head">맞벌이 가구 우선순위</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            아이돌봄서비스는 돌봄 공백이 발생하는 가구를 우선 지원합니다.
            <strong>맞벌이 가구</strong>는 일반 가구 대비 서비스 배정 우선순위가 높습니다.
          </div>
          <div className="info-box">
            <strong>우선 지원 가구:</strong> 한부모 가족, 맞벌이 가구, 장애아동 가구, 다자녀 가구 등
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 아이돌봄서비스(idolbom.go.kr) 또는 복지로(bokjiro.go.kr)
          </div>
          <div className="info-box">
            <strong>방문:</strong> 거주지 읍·면·동 주민센터 (맞벌이 서류 지참)
          </div>
        </div>
      </section>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            본인부담금, 소득 기준, 시간제·종합형 차이 등<br />
            아이돌봄서비스 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/child-care-service" className="btn-cta">
            아이돌봄서비스 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 아이돌봄맞벌이신청SpokeContent: SpokeData = {
  h1: '맞벌이 가구 아이돌봄서비스 신청 | 소득 합산 계산 방식',
  breadcrumb: '맞벌이신청',
  description:
    '맞벌이 가구 아이돌봄서비스: 두 소득 합산 시 낮은 소득자 25% 차감 후 판정. 재직증명서·사업자등록증 등 맞벌이 확인 서류 필수. 맞벌이 가구는 서비스 배정 우선순위 높음. idolbom.go.kr 신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '맞벌이면 소득을 합산해서 보나요?',
      a: '두 사람의 건강보험료를 합산하되, 낮은 소득자 금액의 25%를 차감한 후 판정합니다. 맞벌이 확인 서류를 제출해야 이 방식이 적용됩니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '맞벌이 확인 서류를 안 내면 어떻게 되나요?',
      a: '맞벌이 서류를 제출하지 않으면 단독 소득자로 판정될 수 있어, 더 높은 소득 구간이 적용돼 본인부담금이 늘어날 수 있습니다.',
      source: '아이돌봄서비스',
      sourceUrl: 'https://www.idolbom.go.kr',
    },
    {
      q: '프리랜서 배우자의 소득은 어떻게 증빙하나요?',
      a: '사업자등록증 또는 소득금액증명원으로 소득을 증빙할 수 있습니다.',
      source: '아이돌봄서비스',
      sourceUrl: 'https://www.idolbom.go.kr',
    },
    {
      q: '맞벌이 가구가 배정 우선순위가 높나요?',
      a: '네. 아이돌봄서비스는 돌봄 공백이 발생하는 가구를 우선 지원하며, 맞벌이 가구는 우선 지원 대상에 포함됩니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '아이돌봄서비스 홈페이지(idolbom.go.kr) 또는 복지로(bokjiro.go.kr)에서 온라인으로 신청하거나, 거주지 주민센터를 방문해 신청할 수 있습니다.',
      source: '아이돌봄서비스',
      sourceUrl: 'https://www.idolbom.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부', url: 'https://www.mogef.go.kr' },
    { name: '아이돌봄서비스', url: 'https://www.idolbom.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
