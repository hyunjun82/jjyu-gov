import type { SpokeData } from '../../page';
function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년도약계좌 신규가입은 <strong>2025년 12월 31일부로 완전 종료</strong>되었습니다.
          2026년 현재 신규가입은 불가능하며, <strong>청년미래적금(2026년 6월 출시 예정)</strong>이 후속 상품으로 대체됩니다.
          기존 가입자는 가입일로부터 <strong>5년 만기</strong>까지 계좌를 계속 유지할 수 있습니다.
        </p>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "2026년에도 청년도약계좌 신규 가입이 가능한가요?" 많이 오시는 질문입니다. 결론부터 말씀드리면,
        2025년 말 신규가입이 마감되었고 2026년에는 청년미래적금이 새롭게 출시될 예정입니다.
        기존 가입자라면 만기까지 유지하면 정부기여금과 비과세 혜택을 그대로 받을 수 있습니다.
      </p>
      <section className="detail-card" id="status">
        <h2 className="detail-card-head">청년도약계좌 신규가입 종료 현황</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>신규가입 마감일</td><td>2025년 12월 31일</td></tr>
              <tr><td>2026년 신규가입</td><td>불가 (종료)</td></tr>
              <tr><td>기존 가입자 만기</td><td>가입일로부터 5년 (계속 유지 가능)</td></tr>
              <tr><td>정부기여금 지급</td><td>기존 가입자 — 만기까지 정상 지급</td></tr>
              <tr><td>비과세 혜택</td><td>기존 가입자 — 만기까지 유지</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>기존 가입자 주의:</strong> 중도해지 시 정부기여금이 환수될 수 있습니다.
            특히 가입 3년 미만 해지는 기여금 전액이 환수되므로 만기까지 유지를 권장합니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="successor">
        <h2 className="detail-card-head">후속 상품: 청년미래적금과 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>청년도약계좌 (종료)</th><th>청년미래적금 (2026.6 출시)</th></tr></thead>
            <tbody>
              <tr><td>가입 가능 여부</td><td>신규 불가</td><td>2026년 6월부터 가능</td></tr>
              <tr><td>월 납입 한도</td><td>최대 70만원</td><td>최대 50만원</td></tr>
              <tr><td>만기</td><td>5년</td><td>3년</td></tr>
              <tr><td>정부기여금</td><td>소득별 최대 6%</td><td>일반형 6% / 우대형 12%</td></tr>
              <tr><td>이자소득세</td><td>비과세</td><td>비과세</td></tr>
              <tr><td>연령 요건</td><td>만 19~34세</td><td>만 19~34세 (병역 6년 산입)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>갈아타기 가능:</strong> 청년도약계좌 → 청년미래적금 연계 가입이 허용됩니다(2026년 6월 최초 가입 기간 한정).
            중소기업 재직자(29개월 이상) 우대형은 정부기여금 12%가 적용됩니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="special">
        <h2 className="detail-card-head">2026년 기존 가입자 주요 체크리스트</h2>
        <div className="detail-card-body">
          <div className="info-box">
            <strong>① 만기까지 유지 권장:</strong> 가입 5년 만기를 채우면 정부기여금 전액 + 비과세 이자를 모두 받습니다.
          </div>
          <div className="info-box" style={{ marginTop: 10 }}>
            <strong>② 중도해지 전 반드시 확인:</strong> 3년 미만 해지 시 기여금 전액 환수, 3년 이상 해지 시 60% 지급.
            사망·해외이주·퇴직·폐업 등 특별 사유는 기여금 전액 지급됩니다.
          </div>
          <div className="info-box" style={{ marginTop: 10 }}>
            <strong>③ 부분인출 활용:</strong> 가입 2년 경과 후 납입원금의 40% 이내에서 부분인출이 가능합니다.
            계좌는 유지되며, 인출 금액에는 기여금이 지급되지 않습니다.
          </div>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            청년도약계좌 중도해지 기여금 환수 기준, 부분인출 조건,<br />
            청년미래적금 갈아타기 방법은 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-asset-formation" className="btn-cta">
            청년도약계좌 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}
export const 청년도약계좌신규가입종료후2026재개여부SpokeContent: SpokeData = {
  h1: '청년도약계좌 신규가입 2025년 12월 31일 종료 후 2026년 재개 여부',
  breadcrumb: '신규가입종료후2026재개여부',
  description: '청년도약계좌 신규가입은 2025년 12월 31일 종료되었습니다. 2026년 재개는 없으며 청년미래적금(2026년 6월)이 후속 상품입니다. 기존 가입자는 5년 만기까지 정부기여금과 비과세 혜택이 유지됩니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '2026년에 청년도약계좌 신규 가입이 가능한가요?', a: '아니요. 청년도약계좌 신규가입은 2025년 12월 31일부로 종료되었습니다. 2026년에는 신규가입이 불가능합니다.', source: '금융위원회 청년도약계좌 안내', sourceUrl: 'https://www.fsc.go.kr' },
    { q: '기존 가입자는 2026년에도 계좌를 유지할 수 있나요?', a: '네. 기존 가입자는 가입일로부터 5년 만기까지 계좌를 계속 유지할 수 있으며, 정부기여금과 비과세 혜택도 그대로 적용됩니다.', source: '서민금융진흥원 청년도약계좌 안내', sourceUrl: 'https://www.kinfa.or.kr' },
    { q: '청년도약계좌 대신 가입할 수 있는 상품이 있나요?', a: '청년미래적금이 2026년 6월 출시 예정입니다. 월 최대 50만원, 3년 만기로 정부기여금과 이자소득세 면제 혜택을 받을 수 있습니다.', source: '금융위원회 청년미래적금 카드뉴스', sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { q: '청년도약계좌 만기 수령금으로 청년미래적금에 가입할 수 있나요?', a: '네. 청년도약계좌 만기 수령금을 청년미래적금에 연계 가입 시 우대금리(12%)가 적용될 예정입니다.', source: '금융위원회 청년미래적금 카드뉴스', sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { q: '청년도약계좌를 지금 중도해지하면 손해가 큰가요?', a: '3년 미만 해지 시 정부기여금 전액이 환수됩니다. 3년 이상 해지 시 기여금의 60%만 받습니다. 특별 중도해지 사유(사망, 해외이주, 퇴직, 폐업 등)에 해당하면 기여금 전액을 받을 수 있습니다.', source: '서민금융진흥원 청년도약계좌 중도해지 안내', sourceUrl: 'https://www.kinfa.or.kr' },
  ],
  sources: [
    { name: '금융위원회 청년미래적금 카드뉴스 (2026.04.24)', url: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { name: '서민금융진흥원 청년도약계좌 안내', url: 'https://www.kinfa.or.kr' },
  ],
};
