import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          산모신생아 건강관리(산후도우미) 지원사업은 <strong>정부 바우처로 본인부담을 낮춘 국가 지원 서비스</strong>이며,
          산후조리원은 <strong>별도 사비 부담</strong>이 원칙입니다.
          두 서비스는 동시 이용이 제한되며, 산후조리원 퇴소 후 산후도우미를 이용하는 것이 일반적입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        비용과 혜택을 비교해 본인 상황에 맞는 선택을 하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">산후도우미 vs 산후조리원 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>산후도우미(정부 지원)</th><th>산후조리원</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>비용</strong></td><td>본인부담 0~50% (소득 따라)</td><td>전액 사비 (평균 200~400만원)</td></tr>
              <tr><td><strong>서비스 장소</strong></td><td>자택 방문</td><td>시설 입소</td></tr>
              <tr><td><strong>기간</strong></td><td>5~15일 (출산 유형별)</td><td>보통 2~4주</td></tr>
              <tr><td><strong>지원 여부</strong></td><td>정부 바우처</td><td>별도 지원 없음 (일부 지자체 예외)</td></tr>
              <tr><td><strong>동시 이용</strong></td><td colSpan={2}>산후조리원 재원 중 산후도우미 이용 불가</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="cost">
        <h2 className="detail-card-head">산후도우미 실제 비용 예시</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기초수급자:</strong> 본인부담 없음 (전액 정부 지원)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중위소득 80% 가구:</strong> 본인부담 30% (나머지 70% 정부 지원)
          </div>
          <div className="info-box">
            <strong>중위소득 120% 가구:</strong> 본인부담 50% (예외 대상 해당 시)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="strategy">
        <h2 className="detail-card-head">합리적 이용 전략</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>추천 순서:</strong> 산후조리원(1~2주) → 귀가 후 산후도우미 이용
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>출산 후 90일 이내:</strong> 귀가 후에도 90일 이내면 산후도우미 이용 가능
          </div>
          <div className="info-box">
            <strong>출산 후 바로 귀가 시:</strong> 출산 당일부터 산후도우미 이용 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            본인부담금, 신청 기간, 쌍둥이 예외 지원까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/maternal-newborn-care" className="btn-cta">
            산모신생아 건강관리 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 산모신생아건강관리산후도우미산후조리원비용비교SpokeContent: SpokeData = {
  h1: '산후도우미와 산후조리원 비용 비교, 정부 지원과 사비 차이',
  breadcrumb: '산후도우미산후조리원비용비교',
  description:
    '산후도우미(산모신생아 지원): 정부 바우처 본인부담 0~50%, 자택 방문 5~15일. 산후조리원: 전액 사비 평균 200~400만원. 산후조리원 퇴소 후 산후도우미 순차 이용 전략 추천.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '산후조리원 비용에 정부 지원이 있나요?',
      a: '현재 산후조리원에 대한 직접 국비 지원은 없습니다. 일부 지방자치단체에서 별도 지원금을 제공하는 경우가 있으므로 거주 지역 주민센터에 문의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '산후조리원 이용 후 남은 기간에 산후도우미를 쓸 수 있나요?',
      a: '출산 후 90일 이내라면 산후조리원 퇴소 후에도 산후도우미 서비스를 이용할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '산후도우미가 어떤 서비스를 해주나요?',
      a: '산모 돌봄(산후 회복 지원, 모유수유 지원)과 신생아 돌봄(목욕, 수유 지원)을 함께 제공합니다. 청소·세탁 등 가사 보조도 포함됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '산후도우미를 하루에 얼마나 이용하나요?',
      a: '기본형(9시간)과 종일형(12시간) 중 선택할 수 있습니다. 종일형은 비용이 더 높습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '제공 기관은 어디서 찾나요?',
      a: '사회서비스 전자바우처(socialservice.or.kr)에서 가까운 제공 기관을 검색할 수 있습니다. 신청 후 바우처 카드를 받고 제공 기관과 일정을 협의하면 됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
  ],
  sources: [
    { name: '사회서비스 전자바우처', url: 'https://www.socialservice.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
