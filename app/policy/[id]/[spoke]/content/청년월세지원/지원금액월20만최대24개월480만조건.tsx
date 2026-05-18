import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년월세지원은 실제 납부 월세의 <strong>월 최대 20만원</strong>을
          <strong>최대 24개월(2년)</strong> 동안 지원합니다.
          최대 수령 총액은 <strong>480만원</strong>이며 생애 1회 지원입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        실제 월세가 20만원 미만이라면 실제 납부 금액만큼 지원됩니다.
        월세가 20만원을 초과해도 지원 상한은 20만원입니다.
        지원금은 매월 청년 본인 계좌로 직접 입금됩니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지원 금액 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>월 지원 상한</strong></td><td>20만원 (실 납부 월세와 비교하여 낮은 금액)</td></tr>
              <tr><td><strong>지원 기간</strong></td><td>최대 24개월 (2년)</td></tr>
              <tr><td><strong>총 지원 상한</strong></td><td>최대 480만원</td></tr>
              <tr><td><strong>지급 방식</strong></td><td>매월 청년 본인 계좌 입금</td></tr>
              <tr><td><strong>지원 횟수</strong></td><td>생애 1회</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="calc">
        <h2 className="detail-card-head">실제 지원 사례</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>월세 30만원:</strong> 상한 20만원 지원 → 24개월 × 20만원 = 총 480만원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>월세 15만원:</strong> 실납부액 15만원 지원 → 24개월 × 15만원 = 총 360만원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>월세 50만원:</strong> 상한 20만원 지원 → 초과분 30만원은 본인 부담
          </div>
          <div className="info-box">
            <strong>중도 이사:</strong> 이사 후에도 요건 충족 시 잔여 기간 계속 지원
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="note">
        <h2 className="detail-card-head">주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>생애 1회:</strong> 이전에 청년월세지원을 받은 경우 재신청 불가
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중복 수급 불가:</strong> 자치구 청년월세지원·청년주거급여 분리지급과 동시 수령 불가
          </div>
          <div className="info-box">
            <strong>조건 변화 시 중단:</strong> 지원 기간 중 주택 취득·소득 초과 등 자격 상실 시 지원 중단
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청자격, 신청방법, 주거급여 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-monthly-rent" className="btn-cta">
            청년월세지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 청년월세지원지원금액월20만최대24개월480만조건SpokeContent: SpokeData = {
  h1: '청년월세지원 지원금액, 월 20만원 최대 24개월 480만원 받는 조건',
  breadcrumb: '지원금액월20만최대24개월480만조건',
  description:
    '청년월세지원 금액: 월 최대 20만원(실납부액 기준), 최대 24개월, 총 480만원. 생애 1회. 매월 본인 계좌 입금. 자치구 청년월세·주거급여 분리지급과 중복 불가.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '월세가 20만원을 넘어도 20만원만 주나요?',
      a: '네. 월 지원 상한은 20만원입니다. 실제 월세가 50만원이라면 20만원만 지원되고 나머지 30만원은 본인 부담입니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '24개월을 연속으로 받아야 하나요?',
      a: '연속이 아니어도 됩니다. 지원 기간 중 자격 미충족 기간은 제외되고, 총 24개월 한도 내에서 지원받을 수 있습니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '이미 1년을 받았으면 나머지 1년을 나중에 받을 수 있나요?',
      a: '자격 요건을 충족하는 기간에만 지원됩니다. 자격 상실 후 요건을 다시 충족하면 잔여 기간에 대해 신청할 수 있습니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '지원금이 집주인에게 직접 가나요?',
      a: '아닙니다. 지원금은 청년 본인 계좌로 직접 입금됩니다. 집주인에게 직접 지급되지 않습니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '지원받다가 이사하면 계속 받을 수 있나요?',
      a: '새 주거지가 조건(보증금 5천만원·월세 70만원 이하)을 충족하면 계속 지원받을 수 있습니다. 이사 후 변경 신고를 해야 합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
  ],
  sources: [
    { name: '국토교통부 청년월세지원', url: 'https://www.molit.go.kr' },
    { name: '토스뱅크 2026 청년월세지원', url: 'https://www.tossbank.com/articles/youth-monthly-rent' },
  ],
};
