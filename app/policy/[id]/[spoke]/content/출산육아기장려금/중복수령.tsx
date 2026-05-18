import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          출산육아기 고용안정장려금과 대체인력지원금은 <strong>동시 수령 가능</strong>합니다.
          단, 같은 사유로 <strong>다른 고용장려금과의 중복 수급은 제한</strong>될 수 있습니다.
          육아휴직 급여(근로자 수령)와 사업주 장려금은 별개 제도로, <strong>서로 영향을 주지 않습니다.</strong>
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "출산육아기 고용안정장려금과 대체인력지원금을 같이 받아도 되나요?"
        중복 수령 가능 여부를 항목별로 정리했습니다.
      </p>

      <section className="detail-card" id="overlap-table">
        <h2 className="detail-card-head">출산육아기 고용안정장려금 · 대체인력지원금 중복 수령 가능 여부</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조합</th><th>중복 여부</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>출산육아기장려금 + 대체인력지원금</td>
                <td>✅ 가능</td>
                <td>별도 제도, 각각 신청</td>
              </tr>
              <tr>
                <td>사업주 장려금 + 근로자 육아휴직 급여</td>
                <td>✅ 가능</td>
                <td>수령 주체가 달라 무관</td>
              </tr>
              <tr>
                <td>출산육아기장려금 + 고용촉진장려금(동일 근로자)</td>
                <td>❌ 불가</td>
                <td>같은 근로자 대상 중복 지원 제한</td>
              </tr>
              <tr>
                <td>대체인력지원금 + 청년일자리도약장려금(동일 대체인력)</td>
                <td>❌ 불가</td>
                <td>동일 인건비 중복 지원 금지</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            동일 근로자(또는 동일 대체인력)에 대해 인건비 보조 성격의 장려금을 중복 지원받는 경우는 제한됩니다.
            복수 신청 전 관할 고용센터에 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="worker-vs-employer">
        <h2 className="detail-card-head">근로자 육아휴직 급여 vs 사업주 장려금 — 별개 제도</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>근로자 수령:</strong> 육아휴직 급여 (고용보험에서 지급, 월 최대 250만원)
          </div>
          <div className="info-box">
            <strong>사업주 수령:</strong> 출산육아기 고용안정장려금 + 대체인력지원금 (고용센터에서 지급)
          </div>
          <div className="warning-box" style={{ marginTop: 12 }}>
            두 제도는 수령 주체가 다르므로, 직원의 육아휴직 급여 수령과 사업주의 장려금 수령은 완전히 독립적입니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 및 중복 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중복 확인 문의:</strong> 관할 고용센터 또는 고용노동부 고객상담센터 ☎1350
          </div>
          <div className="info-box">
            <strong>신청처:</strong> 고용24(work24.go.kr) → 기업 서비스 메뉴
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

export const 출산장려금중복수령SpokeContent: SpokeData = {
  h1: '출산육아기 고용안정장려금 · 대체인력지원금 중복 수령 가능 여부',
  breadcrumb: '중복수령',
  description:
    '출산육아기 고용안정장려금+대체인력지원금 동시 수령 가능. 근로자 육아휴직 급여와 사업주 장려금은 수령 주체가 달라 무관. 동일 근로자 대상 다른 고용장려금과는 중복 제한.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '출산육아기 고용안정장려금과 대체인력지원금을 같이 받을 수 있나요?',
      a: '네, 가능합니다. 두 제도는 별개로 운영되며, 각각 요건을 갖추면 동시에 신청·수령할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '직원이 육아휴직 급여를 받으면 사업주 장려금은 못 받나요?',
      a: '아닙니다. 육아휴직 급여는 근로자가, 고용안정장려금은 사업주가 받는 별개 제도입니다. 서로 영향을 주지 않습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '같은 직원에 대해 고용촉진장려금도 신청할 수 있나요?',
      a: '동일 근로자에 대해 인건비 보조 성격의 장려금을 중복으로 받는 것은 제한될 수 있습니다. 신청 전 관할 고용센터에 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '대체인력에 대해 청년일자리도약장려금도 신청할 수 있나요?',
      a: '동일 대체인력에 대해 대체인력지원금과 청년일자리도약장려금을 중복 수령하는 것은 불가합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '중복 가능 여부를 어떻게 확인하나요?',
      a: '관할 고용센터를 방문하거나 고용노동부 고객상담센터(☎1350)에 문의하면 사업장 상황에 맞게 안내받을 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
  ],
};
