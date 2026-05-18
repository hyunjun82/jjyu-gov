import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          에너지캐시백 신청 자격은 <strong>주택용 전기를 사용</strong>하며,
          <strong>신청 주소지에 주민등록이 되어 있는 사람</strong>이면 누구나 가능합니다.
          단독주택·아파트·빌라 등 주거 형태와 무관하게 신청할 수 있으며,
          <strong>직전 2개년 중 1개년 이상 전기 사용 이력</strong>이 있어야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        소득·재산 기준은 없습니다. 전기요금 복지할인을 받는 기초수급자·장애인도 별도로 신청하여
        중복 혜택을 받을 수 있습니다.
      </p>

      <section className="detail-card" id="eligible">
        <h2 className="detail-card-head">신청 가능·불가 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>신청 여부</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>단독주택 거주자</strong></td><td>✅ 가능</td><td>주민등록 주소지 일치 필요</td></tr>
              <tr><td><strong>아파트 세대주</strong></td><td>✅ 가능</td><td>개별 세대 단위 신청</td></tr>
              <tr><td><strong>빌라·다세대 세입자</strong></td><td>✅ 가능</td><td>주민등록·전기요금 납부자 기준</td></tr>
              <tr><td><strong>복지할인 수급자</strong></td><td>✅ 가능 (중복)</td><td>에너지캐시백 별도 신청 필요</td></tr>
              <tr><td><strong>사업용 전기 사용자</strong></td><td>❌ 불가</td><td>주택용 전기 계약 아닌 경우</td></tr>
              <tr><td><strong>직전 2개년 사용 이력 없음</strong></td><td>❌ 불가</td><td>신규 세대 등 이력 1개년 미만</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">신청 자격 3가지 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 주택용 전기 사용:</strong> 한국전력으로부터 주택용 요금 계약으로 전기를 공급받는 경우
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 주민등록 일치:</strong> 신청 주소지에 주민등록이 되어 있어야 함
          </div>
          <div className="info-box">
            <strong>③ 사용 이력:</strong> 직전 2개년 중 최소 1개년 이상 전기 사용 이력 존재
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">내가 신청 대상인지 확인하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자동 검증:</strong> en-ter.co.kr 신청 화면에서 주소 입력 시 자격 여부 자동 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화 문의:</strong> 한국전력 고객센터 ☎123
          </div>
          <div className="info-box">
            <strong>전기요금 영수증 확인:</strong> 요금 유형이 '주택용'인지 확인
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            캐시백 금액 계산, 신청 방법, 에너지바우처 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/energy-cashback" className="btn-cta">
            에너지캐시백 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 에너지캐시백신청대상주민등록주택용기준SpokeContent: SpokeData = {
  h1: '에너지캐시백 신청 대상, 주민등록·주택용 전기 기준으로 내가 해당되는지',
  breadcrumb: '신청대상주민등록주택용기준',
  description:
    '에너지캐시백 신청 자격: ① 주택용 전기 사용 ② 신청 주소지 주민등록 일치 ③ 직전 2개년 중 1개년 이상 사용 이력. 소득 기준 없음. 복지할인 수급자도 중복 신청 가능. en-ter.co.kr 자동 검증.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '전기요금을 집주인이 내는데 세입자도 신청할 수 있나요?',
      a: '원칙적으로 신청 주소지에 주민등록이 되어 있고 실제로 전기를 사용하는 사람이 신청해야 합니다. 전기요금 명의자와 다른 경우 신청이 제한될 수 있으니 en-ter.co.kr 신청 화면에서 자격 여부를 확인하거나 ☎123으로 문의하세요.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/main/main.do',
    },
    {
      q: '오피스텔도 주택용으로 신청할 수 있나요?',
      a: '오피스텔은 주거용으로 사용하더라도 전기요금 계약 유형이 일반용(사업용)인 경우가 많습니다. 전기요금 청구서의 계약 종별이 "주택용"인지 확인 후 신청하세요.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/main/main.do',
    },
    {
      q: '아파트 관리비에 포함된 전기요금도 해당되나요?',
      a: '아파트 개별 세대 단위로 한전에 직접 전기요금을 납부하는 경우 신청 가능합니다. 관리비에 통합 청구되더라도 개별 계약 방식이면 신청할 수 있습니다. 정확한 계약 유형은 관리사무소나 ☎123으로 확인하세요.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/main/main.do',
    },
    {
      q: '주민등록 주소와 실거주지가 다르면 어떻게 하나요?',
      a: '신청 주소지에 주민등록이 되어 있어야 신청이 가능합니다. 실거주지와 주민등록 주소가 다른 경우 주민등록 이전 후 신청하거나, 실거주지 기준으로 신청하는 방법을 ☎123으로 문의하세요.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/main/main.do',
    },
    {
      q: '기초수급자인데 에너지캐시백도 받을 수 있나요?',
      a: '네. 전기요금 복지할인(기초수급자·장애인 등)과 에너지캐시백은 중복 수혜가 가능합니다. en-ter.co.kr에서 별도로 신청하시면 됩니다.',
      source: '에너지마켓플레이스 EN:TER',
      sourceUrl: 'https://en-ter.co.kr/main.do',
    },
  ],
  sources: [
    { name: '한국전력공사 에너지캐시백 공식 사이트', url: 'https://en-ter.co.kr/ec/main/main.do' },
    { name: '에너지마켓플레이스 EN:TER', url: 'https://en-ter.co.kr/main.do' },
  ],
};
