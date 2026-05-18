import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민행복카드는 <strong>임신 확인 → 임신확인서 발급 → 카드사 신청 → 카드 수령</strong>
          순서로 진행됩니다.
          임신 확인 후 최대한 빨리 신청해야 임신출산진료비를
          진료 초기부터 사용할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        카드 수령까지 1~2주 소요되므로 임신 확인 직후 바로 신청하는 것을 권장합니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">발급 단계별 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Step 1. 산부인과 방문</strong> — 임신 확인 및 임신확인서(또는 산모수첩) 발급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Step 2. 카드사 선택</strong> — 국민·신한·우리·하나·롯데 중 1개 선택
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Step 3. 신청</strong> — 카드사 앱·홈페이지 온라인 신청 또는 영업점 방문 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Step 4. 카드 수령</strong> — 우편 수령(통상 7~14일) 또는 영업점 직접 수령
          </div>
          <div className="info-box">
            <strong>Step 5. 바우처 적립 확인</strong> — voucher.go.kr에서 잔액 확인 후 사용
          </div>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>서류</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>임신확인서</strong></td><td>산부인과 발급, 분만 예정일 명시 필수</td></tr>
              <tr><td><strong>신분증</strong></td><td>주민등록증·운전면허증·여권 중 1개</td></tr>
              <tr><td><strong>건강보험증</strong></td><td>직장·지역 건강보험 가입 확인용 (온라인 신청 시 생략 가능)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="online">
        <h2 className="detail-card-head">온라인 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>복지로:</strong> www.bokjiro.go.kr → 서비스 신청 → 국민행복카드
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>정부24:</strong> www.gov.kr → 국민행복카드 검색 → 신청
          </div>
          <div className="info-box">
            <strong>카드사 앱:</strong> 각 카드사 앱에서 국민행복카드 신청 메뉴 이용
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            23종 바우처 사용처, 잔액 조회, 남편 명의 신청까지<br />
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

export const 국민행복카드임신확인후발급순서SpokeContent: SpokeData = {
  h1: '국민행복카드 임신 확인 후 발급 순서, 임신확인서부터 카드 수령까지',
  breadcrumb: '임신확인후발급순서',
  description:
    '국민행복카드 발급 순서: 산부인과 임신확인서 발급 → 5개 카드사 중 선택 신청 → 카드 수령(7~14일). 온라인(복지로·정부24·카드사 앱) 신청 가능. 임신 확인 직후 즉시 신청 권장.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '임신 몇 주 차부터 신청할 수 있나요?',
      a: '임신 확인 후 즉시 신청 가능합니다. 주 수에 관계없이 산부인과에서 임신확인서를 발급받으면 바로 신청할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '임신확인서는 어디서 발급받나요?',
      a: '산부인과(산부인과 전문병원, 종합병원 산부인과 등)를 방문해 임신 확인 후 발급받을 수 있습니다. 분만 예정일이 명시돼야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '카드 수령 전에도 진료비를 신청할 수 있나요?',
      a: '카드 발급 전에는 사용이 불가합니다. 카드 수령 후 바우처 적립 확인 후 진료비를 사용할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '여러 카드사에 중복 신청이 가능한가요?',
      a: '국민행복카드는 1인당 1개만 발급됩니다. 중복 발급은 불가하며, 카드사를 반드시 1개만 선택해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '신청 후 카드사를 바꿀 수 있나요?',
      a: '발급 완료 후 카드사 변경은 불가합니다. 발급 전 신청을 취소하고 다른 카드사로 신청하는 것은 가능하나 절차가 복잡합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
  ],
  sources: [
    { name: '사회서비스 전자바우처', url: 'https://www.voucher.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
    { name: '정부24', url: 'https://www.gov.kr' },
  ],
};
