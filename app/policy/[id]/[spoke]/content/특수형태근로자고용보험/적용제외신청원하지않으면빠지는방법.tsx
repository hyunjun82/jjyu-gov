import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          특고 고용보험 적용을 원하지 않는 경우 <strong>적용 제외 신청</strong>을 할 수 있습니다.
          고용보험 취득 신고 후 <strong>90일 이내</strong>에 근로복지공단 지사 또는 온라인으로 신청해야 하며,
          제외 이후에는 실업급여·모성보호 급여를 받을 수 없습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        적용 제외 신청은 보험료 부담이 어렵거나 다른 소득이 주된 생계 수단인 경우에 한합니다.
        신청 사유를 소명해야 하며, 승인 후 소급 적용됩니다.
      </p>

      <section className="detail-card" id="reason">
        <h2 className="detail-card-head">적용 제외 신청 사유 및 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>신청 사유</strong></td><td>생계를 주로 다른 소득에 의존, 보험료 부담 과중 등</td></tr>
              <tr><td><strong>신청 기한</strong></td><td>고용보험 취득 신고 후 90일 이내</td></tr>
              <tr><td><strong>신청처</strong></td><td>근로복지공단 지사 방문 또는 고용24 온라인</td></tr>
              <tr><td><strong>효력</strong></td><td>승인 시 취득일로 소급 적용</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="consequence">
        <h2 className="detail-card-head">적용 제외 후 유의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>실업급여 수급 불가:</strong> 적용 제외 기간 중 이직해도 실업급여를 받을 수 없음
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>모성보호 급여 불가:</strong> 출산전후 급여, 육아휴직 급여 등 수급 불가
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재가입 가능:</strong> 적용 제외 후에도 요건 변경 시 재가입 신청 가능
          </div>
          <div className="info-box">
            <strong>피보험 기간 미산입:</strong> 적용 제외 기간은 피보험 기간으로 인정되지 않음
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            적용 직종, 보험료, 실업급여 조건까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/platform-worker-insurance" className="btn-cta">
            특수형태근로자고용보험 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 특수형태근로자고용보험적용제외신청원하지않으면빠지는방법SpokeContent: SpokeData = {
  h1: '특수형태근로자 고용보험 적용제외 신청, 원하지 않으면 빠지는 방법',
  breadcrumb: '적용제외신청원하지않으면빠지는방법',
  description:
    '특고 고용보험 적용 제외 신청: 취득 신고 후 90일 이내 근로복지공단 지사 또는 고용24 신청. 제외 후 실업급여·모성보호 급여 수급 불가. 승인 시 취득일 소급 적용.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '90일이 지나도 적용 제외 신청이 가능한가요?',
      a: '원칙적으로 취득 신고 후 90일 이내에 신청해야 합니다. 90일이 초과한 경우에는 적용 제외가 어려울 수 있으므로 취득 신고 즉시 결정해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '적용 제외 신청이 거부될 수도 있나요?',
      a: '신청 사유가 적용 제외 요건에 해당하지 않으면 거부될 수 있습니다. 단순히 보험료가 부담스럽다는 이유만으로는 인정이 어려울 수 있으며, 구체적인 사유를 소명해야 합니다.',
      source: '근로복지공단',
      sourceUrl: 'https://www.comwel.or.kr',
    },
    {
      q: '적용 제외 후 다시 가입하려면 어떻게 해야 하나요?',
      a: '적용 제외 후 재가입을 원하면 근로복지공단에 적용 제외 취소 신청을 할 수 있습니다. 이후 취득 신고를 통해 정상 적용됩니다.',
      source: '근로복지공단',
      sourceUrl: 'https://www.comwel.or.kr',
    },
    {
      q: '사업주도 적용 제외 신청을 해야 하나요?',
      a: '적용 제외 신청은 특고 종사자 본인이 합니다. 사업주는 취득 신고 의무를 이행하며, 종사자가 제외를 원하면 본인이 근로복지공단에 신청합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '월 보수가 80만원 미만이면 자동으로 적용 제외가 되나요?',
      a: '월 보수 80만원 미만이어도 자동 제외는 아닙니다. 적용 제외를 원한다면 별도로 신청해야 하며, 신청 전까지는 보험료가 부과될 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 특수형태근로종사자 고용보험', url: 'https://www.moel.go.kr' },
    { name: '근로복지공단', url: 'https://www.comwel.or.kr' },
  ],
};
