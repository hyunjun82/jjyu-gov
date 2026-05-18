import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          임산부 친환경농산물 지원과 산모신생아 건강관리 지원서비스는
          <strong>목적이 달라 중복 신청·수령이 가능</strong>합니다.
          친환경농산물은 식품(먹거리) 지원이고,
          산모신생아 건강관리는 산후도우미 서비스로 서로 다른 제도입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        두 제도 모두 출산 후 일정 기간 신청이 가능하며,
        중복 혜택을 최대한 활용하려면 출산 직후 두 제도를 동시에 신청하는 것을 권장합니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">두 제도 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>임산부 친환경농산물</th><th>산모신생아 건강관리</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>목적</strong></td><td>친환경 식품 지원</td><td>산후도우미 파견 서비스</td></tr>
              <tr><td><strong>대상</strong></td><td>임신 중~출산 후 1년 이내</td><td>출산 후 일정 기간 내</td></tr>
              <tr><td><strong>지원 내용</strong></td><td>친환경 농산물 꾸러미</td><td>산후도우미 가정 방문</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>없음</td><td>기준 중위소득 150% 이하 우선</td></tr>
              <tr><td><strong>중복 수령</strong></td><td colSpan={2} style={{ textAlign: 'center' }}>가능 (별도 신청)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tip">
        <h2 className="detail-card-head">동시 활용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>친환경농산물 신청:</strong> 에코몰(ecoemall.com) 온라인 또는 주민센터 방문
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>산모신생아 건강관리 신청:</strong> 복지로(bokjiro.go.kr) 또는 주민센터
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 시기:</strong> 출산 후 가능한 빨리 두 제도 동시 신청 권장
          </div>
          <div className="info-box">
            <strong>주의:</strong> 두 제도는 별도 신청이며 한 번에 통합 신청되지 않음
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 지원 금액, 신청 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/pregnant-eco-farm" className="btn-cta">
            임산부친환경농산물 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 임산부친환경농산물산모신생아건강관리중복수령가능여부SpokeContent: SpokeData = {
  h1: '임산부 친환경농산물 vs 산모신생아건강관리, 중복 수령 가능 여부',
  breadcrumb: '산모신생아건강관리중복수령가능여부',
  description:
    '임산부 친환경농산물(식품 지원)과 산모신생아 건강관리(산후도우미 서비스)는 목적이 달라 중복 신청·수령 가능. 두 제도 별도 신청 필요. 출산 직후 동시 신청 권장.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '산모신생아 건강관리 서비스도 소득 기준 없이 받을 수 있나요?',
      a: '산모신생아 건강관리 서비스는 기준 중위소득 150% 이하 가구를 우선 지원하지만, 예산 여유가 있을 경우 소득 기준 초과 가구도 자비 부담으로 이용할 수 있습니다. 친환경농산물 지원과 달리 소득 기준이 존재합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '임신 중에 친환경농산물을 받다가 출산 후 산모신생아 서비스와 동시에 이용할 수 있나요?',
      a: '네. 임신 중부터 친환경농산물을 받고, 출산 후 산모신생아 건강관리 서비스를 추가 신청해 동시에 이용하는 것이 가능합니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '두 제도를 한 곳에서 같이 신청할 수 있나요?',
      a: '주민센터(읍·면·동)를 방문하면 두 제도를 함께 안내받을 수 있으나 신청서는 각각 별도로 작성해야 합니다. 한 번에 통합 신청되는 시스템은 아닙니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '산후조리원 이용 중에도 친환경농산물 꾸러미를 받을 수 있나요?',
      a: '친환경농산물 꾸러미는 자택으로 배송됩니다. 산후조리원 입소 기간에는 배송이 어려울 수 있으니 퇴소 후 배송되도록 주문 시기를 조율하세요.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '남편(배우자)도 산모신생아 건강관리 서비스를 신청할 수 있나요?',
      a: '산모신생아 건강관리 서비스는 출산 가정(산모)을 대상으로 하며, 배우자도 대리 신청이 가능합니다. 복지로(bokjiro.go.kr) 또는 주민센터에서 신청하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '농림축산식품부 임산부 친환경농산물', url: 'https://www.mafra.go.kr' },
    { name: '보건복지부 산모신생아 건강관리', url: 'https://www.mohw.go.kr' },
  ],
};
