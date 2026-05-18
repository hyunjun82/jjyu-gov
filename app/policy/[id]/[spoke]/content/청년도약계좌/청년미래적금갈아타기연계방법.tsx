import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년도약계좌를 유지 중이라면 <strong>2026년 6월 출시 예정인 청년미래적금에 갈아타기</strong>가 가능합니다.
          금융위원회는 청년도약계좌 → 청년미래적금 연계 가입을 공식 허용했습니다(2026년 6월 최초 가입 기간 한정).
          청년미래적금은 월 최대 50만원, 3년 만기, <strong>기본금리 5% + 기관별 우대금리 2~3%p</strong>로
          최대 7~8% 수준 금리가 적용됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        청년도약계좌(5년 만기)를 마친 후 청년미래적금(3년)으로 연속 가입하면 8년간 꾸준한 자산 형성이 가능합니다.
        정부기여금 일반형 6%, 중소기업 재직자 우대형 12%가 각각 적용되므로
        본인 해당 유형을 미리 확인하고 준비하는 것이 중요합니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">청년도약계좌 → 청년미래적금 핵심 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>청년도약계좌</th><th>청년미래적금</th></tr></thead>
            <tbody>
              <tr><td>신규가입</td><td>2025년 12월 31일 종료</td><td>2026년 6월 출시 예정</td></tr>
              <tr><td>월 납입 한도</td><td>최대 70만원</td><td>최대 50만원</td></tr>
              <tr><td>만기</td><td>5년</td><td>3년</td></tr>
              <tr><td>기본금리</td><td>은행별 상이</td><td>연 5% (3년 고정)</td></tr>
              <tr><td>기관별 우대금리</td><td>-</td><td>+2~3%p (최대 7~8%)</td></tr>
              <tr><td>정부기여금 (일반형)</td><td>소득별 최대 6%</td><td>6%</td></tr>
              <tr><td>정부기여금 (우대형)</td><td>해당 없음</td><td>12% (중소기업 재직자 등)</td></tr>
              <tr><td>이자소득세</td><td>비과세</td><td>비과세</td></tr>
              <tr><td>최대 수령액</td><td>최대 5,000만원</td><td>최대 약 2,255만원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>갈아타기 허용:</strong> 금융위원회는 청년도약계좌 → 청년미래적금 연계 가입을 공식 허용합니다.
            단, 2026년 6월 최초 가입 기간에 한정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">청년미래적금 가입 자격</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>요건</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>나이</td><td>만 19~34세 (병역 이행 기간 최대 6년 산입)</td></tr>
              <tr><td>개인 소득</td><td>총급여 7,500만원 이하 (종합소득 6,300만원 이하)</td></tr>
              <tr><td>가구 소득</td><td>기준 중위소득 200% 이하</td></tr>
              <tr><td>소상공인</td><td>연 매출 3억원 이하</td></tr>
              <tr><td>우대형 조건</td><td>총 29개월 이상 중소기업 재직, 이직 2회까지 허용</td></tr>
              <tr><td>1991.1~5월 특례</td><td>만 35세 초과이지만 가입 가능</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>우대형(기여금 12%) 조건:</strong> 중소기업 재직자로 만기 전까지 총 29개월 이상 재직해야 합니다.
            이직은 2회까지 허용되지만 대기업 이직 시 우대형 자격이 박탈될 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="howto">
        <h2 className="detail-card-head">갈아타기 절차 (2026년 6월 기준)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>① 도약계좌 상태 확인:</strong> 만기 또는 중도해지(특별 사유) 후 수령금 확보.
          </div>
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>② 청년미래적금 출시 일정 확인:</strong> 2026년 6월 취급기관 15곳에서 동시 출시.
            비대면 앱으로만 신청 가능.
          </div>
          <div className="info-box" style={{ marginBottom: 10 }}>
            <strong>③ 도약계좌 연계 증빙 제출:</strong> 우대형 신청 시 청년도약계좌 만기 증빙서류 제출.
          </div>
          <div className="info-box">
            <strong>④ 정부기여금 유형 확인:</strong> 일반형(6%) / 우대형(12%) 중 해당 유형 확인 후 납입 시작.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신규가입 종료 현황, 중도해지 기여금 환수 기준, 부분인출 조건 등<br />
            청년도약계좌 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-asset-formation" className="btn-cta">
            청년도약계좌 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 청년도약계좌청년미래적금갈아타기연계방법SpokeContent: SpokeData = {
  h1: '청년도약계좌 → 청년미래적금 갈아타기 연계 방법 (2026년 6월)',
  breadcrumb: '청년미래적금갈아타기연계방법',
  description: '청년도약계좌 → 청년미래적금 갈아타기는 2026년 6월 최초 가입 기간에 허용됩니다. 기본금리 5% + 기관별 우대금리 2~3%p. 정부기여금 일반형 6%, 우대형(중소기업 29개월 이상 재직) 12%. 취급기관 15곳, 비대면 앱 신청.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청년도약계좌 만기 전에 청년미래적금으로 갈아탈 수 있나요?',
      a: '만기 전 갈아타기는 공식 안내가 없습니다. 금융위원회는 청년도약계좌와 청년미래적금 연계 가입을 허용했지만, 2026년 6월 최초 가입 기간에 한정되므로 만기 시점과 출시 시점을 맞춰 확인해야 합니다.',
      source: '금융위원회 청년미래적금 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '청년미래적금 우대형 기여금 12%는 누가 받나요?',
      a: '중소기업 재직자로 만기 전까지 총 29개월 이상 재직한 경우 우대형(12%) 기여금을 받을 수 있습니다. 이직은 2회까지 허용되나 대기업 이직 시 자격이 박탈될 수 있습니다.',
      source: '대한민국 정책브리핑 청년미래적금 안내',
      sourceUrl: 'https://www.korea.kr',
    },
    {
      q: '청년미래적금 금리는 얼마인가요?',
      a: '기본금리 연 5%(3년 고정) + 취급기관별 우대금리 2~3%p가 더해져 최대 7~8% 수준입니다. 취급기관 15곳이 확정되었으며, 기관별 금리는 출시 시점에 비교하세요.',
      source: '대한민국 정책브리핑 청년미래적금 금리 공개',
      sourceUrl: 'https://www.korea.kr',
    },
    {
      q: '청년미래적금 신청은 어디서 하나요?',
      a: '2026년 6월부터 취급기관 15곳의 비대면 앱으로만 신청할 수 있습니다. 창구 방문 신청은 불가능합니다.',
      source: '금융위원회 청년미래적금 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '도약계좌 없이도 청년미래적금에 가입할 수 있나요?',
      a: '네. 청년미래적금은 청년도약계좌 미가입자도 가입할 수 있습니다. 도약계좌 만기자에게는 연계 가입 시 별도 우대 혜택이 제공됩니다.',
      source: '금융위원회 청년미래적금 카드뉴스 (2026.04.24)',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
  ],
  sources: [
    { name: '금융위원회 청년미래적금 카드뉴스 (2026.04.24)', url: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { name: '대한민국 정책브리핑 청년미래적금 금리 공개 (2026.05.15)', url: 'https://www.korea.kr' },
  ],
};
