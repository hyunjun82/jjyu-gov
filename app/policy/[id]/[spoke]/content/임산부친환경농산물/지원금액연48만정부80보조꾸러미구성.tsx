import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          임산부 친환경농산물 지원사업은 연 <strong>48만원 상당</strong>의 친환경 농산물 꾸러미를 제공합니다.
          정부가 <strong>80%(약 38만 4천원)</strong>를 보조하고,
          개인 자부담은 <strong>20%(약 9만 6천원)</strong>입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        꾸러미는 월 1~4회, 회당 3만~10만원 상당으로 구성되며
        친환경 인증을 받은 채소·과일·잡곡 등이 포함됩니다.
        배송 주기와 구성은 지자체 및 운영 업체에 따라 다를 수 있습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지원 금액 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>금액</th><th>비율</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>총 지원액(연간)</strong></td><td>약 48만원 상당</td><td>100%</td></tr>
              <tr><td><strong>정부 보조금</strong></td><td>약 38만 4천원</td><td>80%</td></tr>
              <tr><td><strong>개인 자부담</strong></td><td>약 9만 6천원</td><td>20%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="box">
        <h2 className="detail-card-head">꾸러미 구성 및 배송 방식</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>배송 주기:</strong> 월 1~4회 (신청 시 선택 또는 운영 업체 기준)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>회당 금액:</strong> 약 3만~10만원 상당 친환경 농산물
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>품목:</strong> 친환경 인증 채소, 과일, 잡곡 등 (계절·지역에 따라 구성 상이)
          </div>
          <div className="info-box">
            <strong>인증 기준:</strong> 친환경농산물 인증(유기농·무농약 등) 제품만 포함
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 신청 방법, 산모신생아 중복 수령까지<br />
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

export const 임산부친환경농산물지원금액연48만정부80보조꾸러미구성SpokeContent: SpokeData = {
  h1: '임산부 친환경농산물 지원금액, 연 48만원 정부 80% 보조 꾸러미 구성',
  breadcrumb: '지원금액연48만정부80보조꾸러미구성',
  description:
    '임산부 친환경농산물: 연 48만원 상당 꾸러미, 정부 80%(약 38만 4천원) 보조, 개인 자부담 20%(약 9만 6천원). 월 1~4회 배송, 친환경 인증 채소·과일·잡곡 구성.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '자부담 9만 6천원은 한 번에 내야 하나요?',
      a: '자부담금은 꾸러미를 주문할 때마다 회당 금액에서 20%를 결제하는 방식입니다. 연간 전체 금액을 한 번에 납부하는 것이 아닙니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '원하는 품목을 직접 선택할 수 있나요?',
      a: '꾸러미 구성은 운영 업체에서 계절·수급에 맞게 구성합니다. 일부 업체는 품목 선택 옵션을 제공하기도 하나, 기본적으로는 업체 기준 구성입니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '친환경 인증이란 무엇인가요?',
      a: '친환경농산물 인증은 농림축산식품부에서 관리하며 유기농(화학비료·농약 불사용), 무농약(농약 불사용), 저농약(농약 기준치 1/2 이하) 등으로 구분됩니다. 저농약 인증은 2016년부터 신규 인증 폐지.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '도서 산간 지역에도 배송이 되나요?',
      a: '도서·산간 지역은 배송비 추가 또는 배송 불가 지역이 있을 수 있습니다. 신청 시 배송 가능 지역을 운영 업체 또는 에코몰에서 확인하세요.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '연 48만원을 모두 사용하지 않으면 이월되나요?',
      a: '미사용 지원 금액은 이월되지 않으며, 지원 기간(출산 후 1년 이내) 내에 사용해야 합니다. 기간이 지나면 잔여 금액은 소멸됩니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
  ],
  sources: [
    { name: '농림축산식품부 임산부 친환경농산물', url: 'https://www.mafra.go.kr' },
    { name: '에코몰(ecoemall.com)', url: 'https://www.ecoemall.com' },
  ],
};
