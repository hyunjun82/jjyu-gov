import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          출산육아기 고용안정장려금은 지원금의 <strong>50%가 복직 후 지급</strong>됩니다.
          복직 후 <strong>6개월간 고용을 유지</strong>한 사업주에게 나머지 금액이 지급되며,
          복직 후 지급분을 받으려면 <strong>육아휴직 종료일로부터 12개월 이내</strong>에 신청해야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "출산육아기 장려금 절반은 복직 후에 준다고 하던데, 언제, 어떻게 받나요?"
        복직 후 지급 조건과 절차를 정리했습니다.
      </p>

      <section className="detail-card" id="payment-structure">
        <h2 className="detail-card-head">출산육아기 고용안정장려금 복직 후 지급 — 조건과 신청 시기</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>지급 시점</th><th>비율</th><th>조건</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>육아휴직 중</strong></td>
                <td>50%</td>
                <td>3개월 주기로 분할 지급</td>
              </tr>
              <tr>
                <td><strong>복직 후</strong></td>
                <td>50%</td>
                <td>복직 후 6개월 고용 유지 확인 후 일괄 지급</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            복직 후 지급분은 근로자가 복직한 날로부터 6개월이 경과한 후, 사업주가 별도로 신청해야 합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">복직 후 지급분 수령 요건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 복직:</strong> 육아휴직 종료 후 동일 사업장에 복직
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 6개월 고용 유지:</strong> 복직일로부터 6개월 이상 계속 고용
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 신청 기한:</strong> 육아휴직 종료일로부터 12개월 이내
          </div>
          <div className="warning-box">
            복직 후 6개월 이내에 근로자가 퇴직하면 복직 후 지급분을 받을 수 없습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">복직 후 지급분 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 고용24(work24.go.kr) → 기업 서비스 → 출산육아기 고용안정장려금 → 복직 후 지급 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>필요 서류:</strong> 복직 확인서, 6개월 이상 고용 유지 증빙 (임금 지급 내역 등)
          </div>
          <div className="info-box">
            <strong>문의:</strong> 고용노동부 고객상담센터 ☎1350
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            사업주 신청 방법, 대체인력 지원 금액 등<br />
            출산육아기 고용안정장려금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/birth-care-employment-grant" className="btn-cta">
            출산육아기 고용안정장려금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 출산장려금복직후지급SpokeContent: SpokeData = {
  h1: '출산육아기 고용안정장려금 복직 후 지급 — 조건과 신청 시기',
  breadcrumb: '복직후지급',
  description:
    '출산육아기 고용안정장려금 50%는 복직 후 지급. 복직 후 6개월 고용 유지 확인 후 사업주가 별도 신청. 육아휴직 종료일로부터 12개월 이내 신청 필수. 고용24(work24.go.kr)에서 신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '복직 후 지급되는 장려금은 얼마인가요?',
      a: '출산육아기 고용안정장려금의 50%가 복직 후 지급됩니다. 예를 들어 12개월 육아휴직 시 총 360만원 중 180만원이 복직 후에 지급됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '복직 후 얼마나 있어야 지급받을 수 있나요?',
      a: '복직일로부터 6개월간 고용을 유지한 후 신청할 수 있습니다. 6개월이 지나지 않으면 신청이 불가합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '복직 후 직원이 6개월 안에 퇴직하면 어떻게 되나요?',
      a: '복직 후 6개월 이내에 근로자가 퇴직하면 복직 후 지급분(50%)을 받을 수 없습니다. 이미 수령한 육아휴직 중 지급분(50%)은 영향이 없습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '복직 후 지급분 신청 기한은 언제까지인가요?',
      a: '육아휴직 종료일로부터 12개월 이내에 신청해야 합니다. 기한을 넘기면 지급받을 수 없으므로 복직 후 6개월이 되는 시점에 바로 신청하는 것을 권장합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '복직 후 지급분은 자동으로 입금되나요?',
      a: '아닙니다. 사업주가 직접 고용24(work24.go.kr) 또는 관할 고용센터에 별도 신청해야 합니다. 자동 지급되지 않습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
  ],
};
