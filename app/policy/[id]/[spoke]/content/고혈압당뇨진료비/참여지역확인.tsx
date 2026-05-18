import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          고혈압·당뇨 등록관리사업은 <strong>전국 일부 시·군·구만 참여</strong>합니다.
          내가 사는 지역이 참여 지역인지는 <strong>거주지 보건소에 전화</strong>하거나
          질병관리청 홈페이지(kdca.go.kr)에서 확인할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "우리 동네도 고혈압·당뇨 등록관리사업 참여 지역인가요?"
        지역 확인 방법과 2026년 주요 참여 지역을 정리했습니다.
      </p>

      <section className="detail-card" id="check-method">
        <h2 className="detail-card-head">참여 지역 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방법 1 (가장 빠름):</strong> 거주지 보건소에 전화하여 "고혈압·당뇨 등록관리사업 참여 지역인지"와 "참여 의원 목록"을 문의
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방법 2:</strong> 질병관리청 홈페이지(kdca.go.kr) → 정보·홍보 → 사업 안내에서 참여 지자체 목록 확인
          </div>
          <div className="info-box">
            <strong>방법 3:</strong> 복지로(bokjiro.go.kr)에서 '고혈압 당뇨 등록관리' 검색 → 지원 지역 안내
          </div>
        </div>
      </section>

      <section className="detail-card" id="region-list">
        <h2 className="detail-card-head">2026년 주요 참여 지역 (일부)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>광역</th><th>참여 시·군·구</th></tr>
            </thead>
            <tbody>
              <tr><td>서울</td><td>성동구</td></tr>
              <tr><td>광주</td><td>광산구</td></tr>
              <tr><td>울산</td><td>중구</td></tr>
              <tr><td>세종</td><td>세종시</td></tr>
              <tr><td>경기</td><td>광명·남양주·안산·부천·하남</td></tr>
              <tr><td>강원</td><td>동해·홍천</td></tr>
              <tr><td>전북</td><td>진안</td></tr>
              <tr><td>전남</td><td>목포·여수·장성</td></tr>
              <tr><td>경북</td><td>경주·포항</td></tr>
              <tr><td>경남</td><td>사천</td></tr>
              <tr><td>제주</td><td>제주시</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            매년 참여 지역이 추가·변경될 수 있습니다. 최신 정보는 반드시 거주지 보건소에서 확인하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="not-in-region">
        <h2 className="detail-card-head">참여 지역이 아닌 경우 대안</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강생활실천지원금:</strong> 걷기·금연·절주 행동을 실천하면 포인트를 지급하는 제도로, 참여 지역 제한 없이 신청 가능합니다.
          </div>
          <div className="info-box">
            <strong>보건소 만성질환 관리 서비스:</strong> 대부분의 보건소에서 혈압·혈당 무료 측정과 상담 서비스를 제공합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 지원 금액, 2026년 달라진 조건 등<br />
            고혈압·당뇨 진료비 지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/hypertension-medical-fee" className="btn-cta">
            고혈압·당뇨 진료비 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 고혈압당뇨참여지역확인SpokeContent: SpokeData = {
  h1: '고혈압 당뇨 등록관리사업 내 사는 지역이 참여 지역인지 확인하려면',
  breadcrumb: '참여지역확인',
  description:
    '고혈압·당뇨 등록관리사업은 전국 일부 시·군·구만 참여. 거주지 보건소 전화 또는 질병관리청(kdca.go.kr)에서 확인. 2026년 주요 참여 지역: 서울 성동구, 경기 광명·안산·부천 등.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '참여 지역이 아니면 신청할 수 없나요?',
      a: '네, 이 사업은 참여 지자체 거주자만 이용 가능합니다. 참여 지역이 아닌 경우 건강생활실천지원금이나 보건소 만성질환 관리 서비스를 이용할 수 있습니다.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '참여 지역 확인은 어디서 하나요?',
      a: '거주지 보건소에 전화하거나 질병관리청 홈페이지(kdca.go.kr)에서 확인할 수 있습니다.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '매년 참여 지역이 바뀌나요?',
      a: '네, 매년 참여 지역이 추가되거나 변경될 수 있습니다. 신청 전 반드시 최신 정보를 확인하세요.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '참여 지역이지만 보건소가 아닌 동네 의원에서도 신청 가능한가요?',
      a: '네, 사업에 참여하는 의원(참여 의원)에서도 신청 가능합니다. 참여 의원 목록은 거주지 보건소에 문의하거나 질병관리청 안내 자료에서 확인하세요.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '참여 지역이 아닌데 혈압·혈당 관리 지원을 받을 방법이 없나요?',
      a: '대부분의 보건소에서 혈압·혈당 무료 측정 서비스를 제공하며, 건강생활실천지원금(걷기·금연·절주 포인트)은 전국 어디서나 신청 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '질병관리청', url: 'https://www.kdca.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
