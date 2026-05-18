import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>고용장려금, 고용촉진장려금, 채용지원금</strong>은 이름이 비슷하지만 다른 제도입니다.
          고용촉진장려금은 취약계층을 신규 채용한 사업주에게 <strong>1인당 최대 720만원</strong>을 지원합니다.
          동일한 근로자에 대해 다른 인건비 장려금과 <strong>중복 지원은 제한</strong>되므로
          신청 전 고용센터에서 확인이 필요합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        다양한 고용 장려금이 있어 헷갈리는 경우가 많습니다.
        어떤 장려금이 어떻게 다르고 중복 신청이 가능한지 정리했습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">주요 고용 장려금 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>장려금</th><th>대상</th><th>지원 금액</th><th>중복 여부</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>고용촉진장려금</strong></td>
                <td>취약계층 신규 채용 사업주</td>
                <td>1인당 최대 720만원 (1년)</td>
                <td>동일 근로자 중복 제한</td>
              </tr>
              <tr>
                <td><strong>고용창출장려금</strong></td>
                <td>일자리 창출 사업주</td>
                <td>사업별 다름</td>
                <td>동일 근로자 중복 제한</td>
              </tr>
              <tr>
                <td><strong>청년일자리 도약장려금</strong></td>
                <td>청년 신규 채용 사업주</td>
                <td>최대 960만원 (2년)</td>
                <td>대상 연령 다름 (별도 운영)</td>
              </tr>
              <tr>
                <td><strong>계속고용장려금</strong></td>
                <td>정년 이후 계속 고용 사업주</td>
                <td>1인당 월 30만원 최대 3년</td>
                <td>대상 다름, 별도 확인</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="overlap-rule">
        <h2 className="detail-card-head">중복 신청 제한 규칙</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>원칙:</strong> 동일 근로자에게 여러 인건비 장려금 동시 지급 제한
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>고용촉진 + 고용창출:</strong> 동일 근로자 중복 신청 불가
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>고용촉진 + 청년 도약:</strong> 대상 연령이 다르면 별도 운영 가능
          </div>
          <div className="info-box">
            <strong>안전한 방법:</strong> 신청 전 관할 고용센터 또는 1350 사전 상담 필수
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="recommend">
        <h2 className="detail-card-head">어떤 장려금이 유리한가 — 상황별 추천</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>취약계층(장애인·고령자 등) 채용 시:</strong> 고용촉진장려금 (1인당 최대 720만원)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>청년 채용 시:</strong> 청년일자리 도약장려금 (최대 960만원, 2년)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>정년 초과 직원 계속 고용 시:</strong> 계속고용장려금 (월 30만원, 최대 3년)
          </div>
          <div className="info-box">
            <strong>판단 어려울 때:</strong> 고용센터 1350 또는 work24에서 사전 상담
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            고용촉진장려금 신청 조건, 사전 신청 방법, 지원 금액까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/employment-promotion" className="btn-cta">
            고용촉진장려금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 고용촉진장려금채용지원금중복차이SpokeContent: SpokeData = {
  h1: '고용장려금, 고용촉진장려금, 채용지원금 어떻게 다르고 중복 신청 되나',
  breadcrumb: '채용지원금중복차이',
  description:
    '고용촉진장려금(취약계층 1인당 720만원) vs 고용창출장려금 vs 청년도약장려금 vs 계속고용장려금. 동일 근로자에 중복 지원 제한. 취약계층이면 고용촉진, 청년이면 도약장려금, 정년 후면 계속고용장려금.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '고용촉진장려금과 고용창출장려금은 어떻게 다른가요?',
      a: '고용촉진장려금은 취약계층(장애인·고령자 등) 신규 채용 시 1인당 최대 720만원을 지원합니다. 고용창출장려금은 일자리 자체를 늘리는 사업주에게 지원하는 별도 제도입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '두 장려금을 동시에 받을 수 있나요?',
      a: '동일 근로자에 대해 고용촉진장려금과 고용창출장려금을 동시에 받기는 어렵습니다. 정확한 중복 여부는 신청 전 고용센터 또는 1350에서 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '청년과 취약계층을 동시에 채용하면 두 가지 장려금을 모두 받을 수 있나요?',
      a: '대상이 다른 근로자(청년 1명, 취약계층 1명)를 각각 채용했다면 각각 다른 장려금을 신청할 수 있습니다. 한 명에게 두 가지 장려금을 동시에 받는 것은 원칙적으로 불가합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '취약계층 채용에 가장 유리한 장려금은 무엇인가요?',
      a: '취약계층(장애인·고령자·여성가장·취업지원 참여자 등) 채용이라면 고용촉진장려금(1인당 최대 720만원)이 가장 직접적입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '어떤 장려금이 나에게 맞는지 어떻게 알 수 있나요?',
      a: '고용센터(1350) 또는 고용24(work24.go.kr)에서 사업장 상황에 맞는 장려금을 사전 상담받을 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
    { name: '고용노동부 콜센터 1350', url: 'https://www.moel.go.kr' },
  ],
};
