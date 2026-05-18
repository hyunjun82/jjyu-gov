import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민행복카드로 이용할 수 있는 바우처는 <strong>23종</strong>이며,
          임신출산진료비, 청소년산모 의료비, 첫만남이용권, 아이돌봄 등
          임신·출산·양육 관련 주요 서비스를 통합 지원합니다.
          잔액 조회는 <strong>바우처 포털(voucher.go.kr)</strong>에서 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        카드 1장으로 여러 바우처를 사용할 수 있지만, 바우처마다 사용처와 유효기간이 다릅니다.
        반드시 확인 후 이용하세요.
      </p>

      <section className="detail-card" id="major">
        <h2 className="detail-card-head">주요 바우처 종류와 지원 금액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>바우처명</th><th>지원 금액</th><th>유효기간</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>임신출산진료비</strong></td><td>단태아 100만원 / 다태아 140만원</td><td>분만 예정일 +1년</td></tr>
              <tr><td><strong>청소년산모 의료비</strong></td><td>120만원</td><td>분만 예정일 +1년</td></tr>
              <tr><td><strong>첫만남이용권</strong></td><td>첫째 200만원 / 둘째 이상 300만원</td><td>출생일 +1년</td></tr>
              <tr><td><strong>아이돌봄 서비스</strong></td><td>소득 기준별 차등</td><td>연간 단위</td></tr>
              <tr><td><strong>에너지바우처</strong></td><td>최대 연 31만 3천원</td><td>해당 연도</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="where">
        <h2 className="detail-card-head">사용처 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>임신출산진료비:</strong> 전국 요양기관(병·의원, 약국) 사용 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>첫만남이용권:</strong> 백화점·대형마트·온라인쇼핑몰 등 일반 가맹점
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>아이돌봄:</strong> 지정 아이돌봄 서비스 제공 기관
          </div>
          <div className="info-box">
            <strong>사용처 검색:</strong> voucher.go.kr → 가맹점 찾기
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="balance">
        <h2 className="detail-card-head">잔액 조회 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>PC:</strong> 바우처 포털(voucher.go.kr) → 로그인 → 잔액조회
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>모바일:</strong> 복지로 앱(bokjiro.go.kr) → 바우처 잔액 확인
          </div>
          <div className="info-box">
            <strong>카드사 앱:</strong> 각 카드사 앱에서도 바우처 잔액 조회 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            발급 조건, 카드사 신청, 임신 후 발급 순서까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/national-happiness-card" className="btn-cta">
            국민행복카드 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 국민행복카드23종바우처사용처잔액조회SpokeContent: SpokeData = {
  h1: '국민행복카드 23종 바우처 사용처와 잔액 조회 방법 총정리',
  breadcrumb: '23종바우처사용처잔액조회',
  description:
    '국민행복카드 23종 바우처: 임신출산진료비 100만원(다태아 140), 첫만남이용권 200~300만원, 청소년산모 의료비 120만원 등. 사용처·잔액은 voucher.go.kr 또는 복지로 앱에서 조회.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '23종 바우처를 모두 자동으로 받을 수 있나요?',
      a: '아닙니다. 바우처마다 대상과 신청 조건이 다릅니다. 임신출산진료비는 발급과 동시에 자동 적립되지만, 아이돌봄 등은 별도 신청이 필요합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '잔액이 남으면 현금으로 돌려받을 수 있나요?',
      a: '바우처 잔액은 현금 환급이 불가합니다. 유효기간 내에 지정 사용처에서 소진해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '임신출산진료비와 첫만남이용권의 차이는 무엇인가요?',
      a: '임신출산진료비는 임신 중 병·의원·약국에서만 사용 가능하며, 첫만남이용권은 출생 후 일반 가맹점(쇼핑몰, 마트 등)에서도 사용 가능한 범용 바우처입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '유효기간이 지나면 잔액이 어떻게 되나요?',
      a: '유효기간 만료 시 잔액은 소멸됩니다. 임신출산진료비는 분만 예정일로부터 1년 이내에 사용해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '바우처가 적립됐는데 왜 결제가 안 되나요?',
      a: '바우처 종류마다 이용 가능한 가맹점이 다릅니다. voucher.go.kr 가맹점 검색으로 사용 가능한 곳을 먼저 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
  ],
  sources: [
    { name: '사회서비스 전자바우처', url: 'https://www.voucher.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
  ],
};
