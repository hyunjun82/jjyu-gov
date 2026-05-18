import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          서민금융통합지원센터에서는 <strong>미소금융, 햇살론, 바꿔드림론, 햇살론15</strong> 등
          다양한 서민금융 상품을 안내하고 신청을 연계합니다. 저소득·저신용자,
          고금리 대출 이용자, 창업자금이 필요한 분 모두 이용할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        어떤 상품이 본인에게 맞는지 모르겠다면, 1397로 전화하거나 센터를 방문해
        1:1 맞춤 상담을 받으면 됩니다.
      </p>

      <section className="detail-card" id="products">
        <h2 className="detail-card-head">주요 서민금융 상품</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>상품</th><th>대상</th><th>특징</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>미소금융</strong></td><td>창업·운영자금 필요자, 긴급생계</td><td>소액, 미소금융재단 운영</td></tr>
              <tr><td><strong>햇살론</strong></td><td>저신용·저소득자</td><td>보증부 대출, 서민금융진흥원</td></tr>
              <tr><td><strong>바꿔드림론</strong></td><td>고금리 대출 이용자</td><td>고금리 → 저금리 전환</td></tr>
              <tr><td><strong>햇살론15</strong></td><td>저소득층 소액 대출</td><td>국민행복기금 운영</td></tr>
              <tr><td><strong>불법사금융예방대출</strong></td><td>신용평점 하위 20%, 연소득 3,500만 원 이하</td><td>최대 100만 원, 연 12.5%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">대출 연계 이용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화 먼저:</strong> ☎1397로 본인 상황 설명 → 적합한 상품 안내
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>센터 방문:</strong> 방문 후 기초 상담 → 해당 상품 창구로 연계
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>앱 자격조회:</strong> 서민금융 잇다 앱에서 본인 적합 상품 확인 후 신청
          </div>
          <div className="info-box">
            <strong>추가 연계:</strong> 신용회복위원회·국민행복기금·주택금융공사 등 유관기관 연결도 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="note">
        <h2 className="detail-card-head">대출 신청 시 주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>센터는 안내 창구:</strong> 1397 전화는 상담·안내 서비스, 실제 대출 신청은 해당 기관 진행
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자격 심사 별도:</strong> 각 상품별 대출 자격 심사가 진행되며 승인이 보장되지 않음
          </div>
          <div className="info-box">
            <strong>상품별 서류 상이:</strong> 신청 전 필요 서류를 센터 또는 1397을 통해 확인 필요
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            채무조정 방법, 고용복지 연계, 1397 이용법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/seomin-financial-center" className="btn-cta">
            서민금융통합지원센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 서민금융통합지원센터대출종류한도서민금융상품SpokeContent: SpokeData = {
  h1: '서민금융통합지원센터에서 받을 수 있는 대출 종류와 한도',
  breadcrumb: '대출종류한도서민금융상품',
  description:
    '서민금융통합지원센터 대출: 미소금융(창업·생계), 햇살론(저신용), 바꿔드림론(고금리→저금리), 햇살론15, 불법사금융예방대출(최대 100만 원). ☎1397로 상담 후 연계.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '1397에 전화하면 바로 대출을 받을 수 있나요?',
      a: '1397은 상담·안내 전화입니다. 실제 대출 신청은 해당 기관 창구 방문이나 온라인 신청으로 진행합니다. 1397에서 적합한 상품과 기관을 안내받은 후 신청하시면 됩니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/microfinanceCallCenter1397.do',
    },
    {
      q: '고금리 대출을 저금리로 바꾸려면 어떻게 하나요?',
      a: '바꿔드림론을 통해 고금리 대출을 저금리로 전환할 수 있습니다. 구체적인 자격 조건과 한도는 1397로 문의하거나 센터를 방문해 상담받으세요.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
    {
      q: '창업 자금을 빌리려면 어떤 상품이 맞나요?',
      a: '미소금융은 창업·운영자금 및 긴급생계자금을 소액으로 지원합니다. 센터를 방문하거나 1397로 문의하면 본인 상황에 맞는 창업 자금 지원 상품을 안내받을 수 있습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
    {
      q: '대출이 거절될 경우 다른 방법이 있나요?',
      a: '대출이 어려운 경우 채무조정(개인워크아웃, 프리워크아웃), 고용·복지 연계 서비스, 긴급복지지원 등 다른 지원 방법을 센터에서 함께 안내받을 수 있습니다.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
    {
      q: '이미 연체가 있으면 대출이 불가능한가요?',
      a: '연체가 있는 경우 일반 대출 상품은 어려울 수 있지만, 불법사금융예방대출 등 연체자도 신청 가능한 상품이 있습니다. 1397로 문의해 본인에게 맞는 방법을 확인하세요.',
      source: '서민금융진흥원',
      sourceUrl: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do',
    },
  ],
  sources: [
    { name: '서민금융진흥원 센터 소개', url: 'https://www.kinfa.or.kr/counselingSupport/centerIntroduction.do' },
    { name: '서민금융진흥원 1397 콜센터', url: 'https://www.kinfa.or.kr/counselingSupport/microfinanceCallCenter1397.do' },
    { name: '서민금융진흥원', url: 'https://www.kinfa.or.kr' },
  ],
};
