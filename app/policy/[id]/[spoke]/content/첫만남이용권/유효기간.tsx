import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          첫만남이용권 200만원(300만원)은 <strong>출생일로부터 2년 이내</strong>에 모두 사용해야 합니다.
          2년이 지나면 남은 잔액은 <strong>자동 소멸</strong>되며 환불되지 않습니다.
          중도에 사용하지 않아도 이자나 현금으로 바꿀 수 없습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "2년 안에 다 써야 하나요?" 맞습니다.
        사용기한 내에 모두 쓰지 못하면 잔액이 사라집니다.
        소멸 전에 챙겨야 할 것들을 정리했습니다.
      </p>

      <section className="detail-card" id="expiry">
        <h2 className="detail-card-head">첫만남이용권 200만원, 2년 안에 다 써야 한다 — 유효기간 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>출생 순위</th><th>지급 금액</th><th>유효기간</th><th>소멸 시점</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>첫째아</td>
                <td><strong>200만원</strong></td>
                <td>출생일로부터 2년</td>
                <td>만 2세 생일 이후 자동 소멸</td>
              </tr>
              <tr>
                <td>둘째아 이상</td>
                <td><strong>300만원</strong></td>
                <td>출생일로부터 2년</td>
                <td>만 2세 생일 이후 자동 소멸</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>예시:</strong> 2024년 3월 5일 출생 → 2026년 3월 4일까지 사용 가능.<br />
            이후 남은 포인트는 자동 소멸, 환불 불가.
          </div>
        </div>
      </section>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">잔액 소멸 전 확인해야 할 것들</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>잔액 조회:</strong> voucher.go.kr 또는 카드 발급 은행 앱에서 실시간 확인.
            소멸 예정일 30일 전에 문자 알림이 발송됩니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사용처 확대:</strong> 유효기간 내 대부분의 국민행복카드 가맹점에서 사용 가능.
            쿠팡·온라인쇼핑몰 포함.
          </div>
          <div className="info-box">
            <strong>현금 전환 불가:</strong> 국민행복카드 포인트는 현금 인출이 안 됩니다.
            반드시 가맹점 결제로만 사용해야 합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="late-apply">
        <h2 className="detail-card-head">늦게 신청하면 유효기간이 줄어든다</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>신청 시점</th><th>잔여 사용기간</th><th>소멸 여부</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>출생 후 60일 이내</td>
                <td>약 2년 전체</td>
                <td>소멸 없음</td>
              </tr>
              <tr>
                <td>출생 후 1년</td>
                <td>약 1년만 남음</td>
                <td>기간 단축</td>
              </tr>
              <tr>
                <td>출생 후 2년 경과</td>
                <td><strong>권리 소멸</strong></td>
                <td>신청 불가</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            출생 후 2년이 지나면 신청 자체가 불가합니다. 출생 직후 바로 신청하는 것을 권장합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            사용처, 신청 방법, 잔액 조회 등<br />
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

export const 첫만남유효기간SpokeContent: SpokeData = {
  h1: '첫만남이용권 200만원, 2년 안에 다 써야 한다 | 유효기간과 잔액 소멸',
  breadcrumb: '유효기간',
  description:
    '첫만남이용권은 출생일로부터 2년 이내 사용해야 합니다. 2년 경과 시 잔액 자동 소멸, 환불 불가. 늦게 신청할수록 잔여 사용기간이 줄어들며, 출생 2년 후에는 신청 자체가 불가합니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '첫만남이용권 유효기간이 언제까지인가요?',
      a: '출생일로부터 2년 이내입니다. 예를 들어 2024년 3월 5일에 태어난 아이라면 2026년 3월 4일까지 사용해야 합니다.',
      source: '보건복지부 첫만남이용권 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '유효기간 내 다 쓰지 못하면 환불받을 수 있나요?',
      a: '환불이 안 됩니다. 2년이 지나면 남은 포인트는 자동으로 소멸됩니다. 현금 전환도 불가합니다.',
      source: '사회서비스 전자바우처',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '잔액 소멸 전에 알림이 오나요?',
      a: '네. 소멸 예정일 30일 전에 문자 알림이 발송됩니다. 또한 voucher.go.kr 또는 카드사 앱에서 잔액과 소멸 예정일을 직접 확인할 수 있습니다.',
      source: '사회서비스 전자바우처',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '출생 후 1년이 됐는데 아직 신청 안 했어요. 신청할 수 있나요?',
      a: '네, 신청 가능합니다. 단 남은 사용기간이 1년 밖에 안 됩니다. 출생 후 2년이 지나면 신청 자체가 불가하므로 빠르게 신청하세요.',
      source: '보건복지부 첫만남이용권 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '잔액을 현금으로 인출할 수 있나요?',
      a: '불가합니다. 국민행복카드 포인트는 현금 인출이 안 됩니다. 국민행복카드 가맹점에서 결제로만 사용할 수 있습니다.',
      source: '국민행복카드 사용 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 첫만남이용권 안내', url: 'https://www.mohw.go.kr' },
    { name: '사회서비스 전자바우처', url: 'https://www.voucher.go.kr' },
  ],
};
