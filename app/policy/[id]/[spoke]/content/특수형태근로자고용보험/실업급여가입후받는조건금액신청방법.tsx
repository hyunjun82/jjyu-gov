import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          특고 고용보험에 가입한 후 <strong>피보험 기간 12개월 이상</strong>을 충족하고
          <strong>비자발적으로 이직</strong>(계약 종료·소득 감소 등)한 경우 실업급여를 받을 수 있습니다.
          수급액은 <strong>평균 보수의 60%</strong>이며, 수급 기간은 <strong>90~240일</strong>입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        특고 실업급여는 일반 근로자와 수급 요건이 일부 다릅니다.
        이직 확인서 제출, 수급자격 인정 신청, 구직활동 이행 등 절차를 따라야 합니다.
        고용24(work24.go.kr) 또는 고용센터에서 신청하세요.
      </p>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">수급 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>요건</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>피보험 기간</strong></td><td>이직일 전 24개월 중 12개월 이상</td></tr>
              <tr><td><strong>이직 사유</strong></td><td>비자발적 이직 (계약 종료·소득 감소 등)</td></tr>
              <tr><td><strong>구직 의사</strong></td><td>적극적 재취업 의지 및 구직활동 이행</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">수급 금액 및 기간</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>수급액:</strong> 평균 보수의 60% × 소정 급여일수
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>수급 기간:</strong> 90~240일 (피보험 기간·연령에 따라)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 고용24(work24.go.kr) 온라인 또는 고용센터 방문
          </div>
          <div className="info-box">
            <strong>신청 기한:</strong> 이직 후 12개월 이내 신청 (기한 초과 시 수급 불가)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            적용 직종, 보험료, 적용 제외 신청까지<br />
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

export const 특수형태근로자고용보험실업급여가입후받는조건금액신청방법SpokeContent: SpokeData = {
  h1: '특수형태근로자 실업급여, 고용보험 가입 후 받을 수 있는 조건',
  breadcrumb: '실업급여가입후받는조건금액신청방법',
  description:
    '특고 실업급여 수급 조건: 피보험 기간 12개월 이상 + 비자발적 이직. 수급액 평균 보수의 60%, 수급 기간 90~240일. 고용24(work24.go.kr) 또는 고용센터 신청. 이직 후 12개월 이내.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '소득이 줄어든 경우도 비자발적 이직으로 인정되나요?',
      a: '특고의 경우 계약 종료나 폐업 외에도 소득 감소(이전 3개월 평균 보수가 전년 동기 대비 30% 이상 감소 등)를 비자발적 이직 사유로 인정하는 경우가 있습니다. 구체적인 기준은 고용센터에서 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '실업급여 신청 전에 구직활동을 먼저 해야 하나요?',
      a: '수급자격 인정 신청(이직 후 지체 없이) → 수급자격 인정 → 실업 신고(구직등록) → 구직활동 이행 순서로 진행됩니다. 구직활동은 수급 개시 후 주기적으로 이행해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '특고 실업급여 수급 중 아르바이트를 하면 어떻게 되나요?',
      a: '수급 중 취업 또는 소득 발생은 반드시 고용센터에 신고해야 합니다. 미신고 시 부정수급으로 반환 명령 및 추가 제재를 받을 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '피보험 기간 12개월을 채우지 못하면 실업급여를 전혀 받을 수 없나요?',
      a: '피보험 기간이 12개월 미만이면 실업급여 수급 자격이 인정되지 않습니다. 단, 이전에 근로자로 고용보험에 가입한 기간이 있다면 합산 여부를 고용센터에 문의하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '240일 최대 수급 기간은 어떤 경우에 해당하나요?',
      a: '피보험 기간이 10년 이상이고 연령이 50세 이상(또는 장애인)인 경우 최대 240일까지 받을 수 있습니다. 피보험 기간과 연령에 따라 90·120·150·180·210·240일로 구분됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 특수형태근로종사자 고용보험', url: 'https://www.moel.go.kr' },
    { name: '고용24(work24.go.kr)', url: 'https://www.work24.go.kr' },
  ],
};
