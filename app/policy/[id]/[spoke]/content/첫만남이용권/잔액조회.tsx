import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          첫만남이용권 잔액은 <strong>voucher.go.kr</strong>에서 로그인 후 조회하거나,
          <strong>카드 발급 은행 앱</strong>에서 실시간으로 확인할 수 있습니다.
          ARS 전화로도 조회 가능하며, 소멸 예정일 <strong>30일 전</strong>에 문자 알림이 자동 발송됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "잔액이 얼마 남았는지 모르겠다"는 분들을 위해
        가장 빠르게 확인하는 방법과 소멸 전 체크리스트를 정리했습니다.
      </p>

      <section className="detail-card" id="check-method">
        <h2 className="detail-card-head">첫만남이용권 잔액 조회 방법 | 국민행복카드 앱에서 바로 확인</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>방법</th><th>경로</th><th>특징</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>voucher.go.kr</td>
                <td>사회서비스 전자바우처 홈페이지 → 잔액조회</td>
                <td>소멸 예정일도 함께 확인</td>
              </tr>
              <tr>
                <td>카드사 앱</td>
                <td>BC·농협·KB·신한·하나·우리 등 카드사 앱 → 국민행복카드 → 잔액</td>
                <td>실시간 잔액 확인</td>
              </tr>
              <tr>
                <td>ARS 전화</td>
                <td>카드 뒷면 고객센터 번호 → 잔액조회 ARS</td>
                <td>앱 없이 확인 가능</td>
              </tr>
              <tr>
                <td>고객센터</td>
                <td>1566-3232 (바우처 통합 콜센터)</td>
                <td>사용 내역도 조회 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="alert">
        <h2 className="detail-card-head">소멸 30일 전 자동 문자 알림 — 이후 대처법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>알림 시점:</strong> 사용 가능 기간(2년) 종료 30일 전에 등록된 전화번호로
            문자 알림 자동 발송
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>알림 수령 후 할 것:</strong> 잔액을 확인하고 국민행복카드 가맹점에서
            사용 가능한 항목에 집중 사용 (마트·온라인쇼핑·병원·약국 등)
          </div>
          <div className="warning-box">
            <strong>주의:</strong> 알림 문자가 오지 않아도 기한은 동일하게 적용됩니다.
            수시로 직접 잔액과 소멸 예정일을 확인하는 것이 안전합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="history">
        <h2 className="detail-card-head">사용 내역 조회와 환불 가능 여부</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>사용 내역 조회</td>
                <td>voucher.go.kr 또는 카드사 앱에서 결제 내역 확인 가능</td>
              </tr>
              <tr>
                <td>잔액 환불</td>
                <td><strong>불가 — 현금 전환 없음</strong></td>
              </tr>
              <tr>
                <td>소멸된 잔액</td>
                <td><strong>복구 불가</strong></td>
              </tr>
              <tr>
                <td>타인 양도</td>
                <td>불가 — 신청 가구만 사용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            사용처, 유효기간, 신청 방법 등<br />
            첫만남이용권 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/first-meet" className="btn-cta">
            첫만남이용권 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 첫만남잔액조회SpokeContent: SpokeData = {
  h1: '첫만남이용권 잔액 조회 방법 | 국민행복카드 앱에서 바로 확인',
  breadcrumb: '잔액조회',
  description:
    '첫만남이용권 잔액은 voucher.go.kr, 카드사 앱(BC·농협·KB·신한 등), ARS로 확인 가능합니다. 소멸 예정일 30일 전 자동 문자 알림. 잔액 환불·현금 전환 불가. 소멸된 잔액은 복구 불가.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '첫만남이용권 잔액을 어디서 확인하나요?',
      a: 'voucher.go.kr(사회서비스 전자바우처 홈페이지)에서 확인하거나, 카드사 앱(BC·농협·KB·신한·하나·우리 등)에서 실시간으로 조회할 수 있습니다.',
      source: '사회서비스 전자바우처',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '잔액 소멸 전에 알림이 오나요?',
      a: '네. 사용 가능 기간(2년) 종료 30일 전에 등록된 전화번호로 문자 알림이 자동 발송됩니다.',
      source: '사회서비스 전자바우처',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '남은 잔액을 현금으로 돌려받을 수 있나요?',
      a: '불가합니다. 국민행복카드 포인트는 현금 전환이 안 됩니다. 소멸 전에 가맹점에서 모두 사용해야 합니다.',
      source: '국민행복카드 사용 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '카드사 앱 없이 잔액을 확인할 수 있나요?',
      a: 'voucher.go.kr 웹사이트에서 로그인 후 조회하거나, 카드 뒷면 고객센터 ARS(자동응답)를 이용하면 앱 없이도 확인할 수 있습니다.',
      source: '사회서비스 전자바우처',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '소멸된 잔액을 복구할 수 있나요?',
      a: '불가합니다. 유효기간(출생 후 2년)이 지나면 남은 포인트는 자동 소멸되고 복구가 되지 않습니다.',
      source: '보건복지부 첫만남이용권 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '사회서비스 전자바우처', url: 'https://www.voucher.go.kr' },
    { name: '보건복지부 첫만남이용권 안내', url: 'https://www.mohw.go.kr' },
  ],
};
