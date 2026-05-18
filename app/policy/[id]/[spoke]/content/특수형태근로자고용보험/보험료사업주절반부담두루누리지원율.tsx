import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          특고 고용보험 보험료율은 <strong>1.4%</strong>(실업급여 기준)로,
          특고 종사자와 사업주(원청)가 각각 <strong>0.7%씩 반반 부담</strong>합니다.
          소규모 사업장·저소득 특고는 <strong>두루누리 사회보험료 지원</strong>으로
          최대 80%까지 지원받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        두루누리 지원은 10인 미만 사업장의 저소득 특고에게 적용됩니다.
        고용24(work24.go.kr) 또는 근로복지공단에서 신청할 수 있습니다.
      </p>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">보험료율 및 부담 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>보험료율</th><th>부담자</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>전체 보험료율</strong></td><td>1.4%</td><td>특고 + 사업주</td></tr>
              <tr><td><strong>특고 종사자 부담</strong></td><td>0.7%</td><td>본인</td></tr>
              <tr><td><strong>사업주(원청) 부담</strong></td><td>0.7%</td><td>원청 사업주</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="durunuri">
        <h2 className="detail-card-head">두루누리 사회보험료 지원</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원 대상:</strong> 10인 미만 사업장 + 월 보수 270만원 미만 특고 종사자
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원율:</strong> 최대 80% (특고 본인 부담분 기준)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 고용24(work24.go.kr) 또는 근로복지공단 지사
          </div>
          <div className="info-box">
            <strong>주의:</strong> 신규 가입자와 기존 가입자 지원율이 다를 수 있으므로 신청 시 확인 필요
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            적용 직종, 실업급여 조건, 적용 제외 신청까지<br />
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

export const 특수형태근로자고용보험보험료사업주절반부담두루누리지원율SpokeContent: SpokeData = {
  h1: '특수형태근로자 고용보험 보험료, 사업주 절반 부담과 두루누리 지원',
  breadcrumb: '보험료사업주절반부담두루누리지원율',
  description:
    '특고 고용보험 보험료율 1.4%, 특고·사업주 각 0.7% 반반 부담. 10인 미만 사업장 월 보수 270만원 미만 특고는 두루누리 지원 최대 80%. 고용24 또는 근로복지공단 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '보험료는 어떻게 납부하나요?',
      a: '보험료는 사업주(원청)가 원천공제하여 근로복지공단에 납부하는 것이 원칙입니다. 사업주가 특고 본인 부담분(0.7%)을 원천공제 후 자신의 부담분(0.7%)과 함께 납부합니다.',
      source: '근로복지공단',
      sourceUrl: 'https://www.comwel.or.kr',
    },
    {
      q: '두루누리 지원을 받으면 실업급여 수급에 영향이 있나요?',
      a: '두루누리 지원은 보험료 납부 지원이며 실업급여 수급 요건(피보험 기간, 이직 사유 등)에는 영향을 주지 않습니다. 보험료만 지원받는 것이므로 수급 자격은 동일하게 유지됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '월 보수가 달마다 다른 경우 보험료는 어떻게 계산하나요?',
      a: '월 보수가 변동되는 경우 각 월의 실제 보수를 기준으로 보험료가 산정됩니다. 연간 정산을 통해 차액이 조정될 수 있습니다.',
      source: '근로복지공단',
      sourceUrl: 'https://www.comwel.or.kr',
    },
    {
      q: '두루누리 지원 신청은 특고 본인이 해야 하나요?',
      a: '두루누리 지원은 사업주가 신청하는 것이 원칙이나, 특고 본인도 고용24(work24.go.kr)를 통해 신청을 확인하고 요청할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '두루누리 지원을 받는 도중 사업장 규모가 10인 이상으로 늘면 어떻게 되나요?',
      a: '사업장 근로자 수가 10인 이상으로 증가하면 두루누리 지원 대상에서 제외됩니다. 변경된 시점부터 정상 보험료를 납부해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 두루누리 사회보험', url: 'https://www.moel.go.kr' },
    { name: '근로복지공단', url: 'https://www.comwel.or.kr' },
  ],
};
