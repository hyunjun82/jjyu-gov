import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          육아기 근로시간 단축급여는 <strong>최초 10시간 단축분</strong>은 통상임금의
          <strong>100%(월 250만원 상한)</strong>, 나머지 단축분은 통상임금의
          <strong>80%(월 160만원 상한)</strong>으로 계산합니다.
          2026년 기준 이전보다 상한이 각각 30만원, 10만원 인상되었습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        본인이 주 5시간 단축하면 5시간×100%이고, 주 15시간 단축하면
        첫 10시간은 100%, 나머지 5시간은 80% 적용으로 계산됩니다.
        신청은 고용보험 누리집(ei.go.kr)에서 합니다.
      </p>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">단축 급여 계산 기준 (2026년)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단축 구간</th><th>지급 비율</th><th>월 상한액</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>최초 10시간 (1주)</strong></td><td>통상임금 100%</td><td>월 250만원 (2026년 인상)</td></tr>
              <tr><td><strong>나머지 단축분</strong></td><td>통상임금 80%</td><td>월 160만원 (2026년 인상)</td></tr>
              <tr><td><strong>참고: 2025년 이전</strong></td><td>동일</td><td>220만원 / 150만원</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="example">
        <h2 className="detail-card-head">계산 예시</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주 5시간 단축 시:</strong> 5시간 전부 10시간 이내 → 통상임금 100% × 5시간 비율
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주 15시간 단축 시:</strong> 첫 10시간 × 100% + 나머지 5시간 × 80%
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>단축 범위:</strong> 주 5~25시간 (근무시간 주 15~35시간으로 단축)
          </div>
          <div className="info-box">
            <strong>최대 기간:</strong> 자녀당 최대 2~3년
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 고용보험 누리집 (ei.go.kr) → 개인 서비스 → 육아기 근로시간 단축급여 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 거주지 관할 고용센터 방문 신청
          </div>
          <div className="info-box">
            <strong>문의:</strong> 고용노동부 콜센터 ☎1350
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 대상 자격, 육아휴직과 차이까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/parental-work-reduction-pay" className="btn-cta">
            육아기 근로시간 단축급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 육아기근로시간단축급여급여계산10시간250만나머지160만SpokeContent: SpokeData = {
  h1: '육아기 근로시간 단축급여 계산, 최초 10시간 250만원·나머지 160만원 기준',
  breadcrumb: '급여계산10시간250만나머지160만',
  description:
    '육아기 근로시간 단축급여 2026년: 최초 10시간 단축분 통상임금 100%(월 250만 상한), 나머지 80%(월 160만 상한). 2026년 상한 인상(기존 220만/150만). ei.go.kr 신청. ☎1350.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '단축 급여는 매달 자동으로 나오나요?',
      a: '아닙니다. 매달 또는 분기별로 급여 신청을 고용보험 누리집(ei.go.kr)에서 직접 해야 합니다. 자동 지급이 아니므로 신청을 잊지 않도록 주의하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '통상임금이 낮으면 급여도 적게 받나요?',
      a: '네. 급여는 통상임금 × 단축 비율로 계산되므로, 통상임금이 낮으면 받는 금액도 줄어듭니다. 250만원과 160만원은 상한액이므로 통상임금이 낮을수록 실제 지급액이 더 작습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '1시간 단축도 신청이 가능한가요?',
      a: '단축 범위는 주 5~25시간입니다. 주 5시간 미만 단축은 신청이 어렵습니다. 단, 근로기준법상 소정 근로시간 유지 조건 등이 있으니 ☎1350으로 정확한 적용 기준을 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '2026년에 상한액이 얼마나 올랐나요?',
      a: '최초 10시간 상한이 220만원 → 250만원(+30만원), 나머지 상한이 150만원 → 160만원(+10만원)으로 각각 인상되었습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '아이가 2명이면 각각 신청할 수 있나요?',
      a: '자녀당 별도로 신청 가능합니다. 다만 동시에 두 자녀에 대해 단축급여를 받는 경우 기간이 중복될 수 없으니 고용센터 또는 ☎1350으로 정확한 기준을 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 육아기 근로시간 단축급여', url: 'https://www.moel.go.kr' },
    { name: '고용보험 누리집', url: 'https://www.ei.go.kr' },
  ],
};
