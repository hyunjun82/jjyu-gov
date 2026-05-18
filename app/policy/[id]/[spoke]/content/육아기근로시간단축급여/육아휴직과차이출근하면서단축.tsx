import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          육아기 근로시간 단축은 <strong>출근하면서 근무시간만 줄이는</strong> 제도입니다.
          육아휴직은 완전히 일을 쉬는 반면, 단축급여는 주 15~35시간 범위에서
          근무를 유지하며 단축분에 대한 급여를 받습니다.
          소득이 완전히 끊기는 것이 부담스러울 때 유리합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        육아휴직과 단축급여는 자녀당 최대 합산 3년(육아휴직 최대 1년 포함)까지 사용할 수 있습니다.
        두 제도는 순서 없이 교대로 사용 가능하며, 직장을 유지하면서 육아를 병행할 수 있는 장점이 있습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">육아휴직 vs 육아기 근로시간 단축 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>육아휴직</th><th>육아기 근로시간 단축</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>근무 여부</strong></td><td>완전 휴직 (출근 안 함)</td><td>출근하면서 시간 단축</td></tr>
              <tr><td><strong>소득</strong></td><td>통상임금 80% (상한 150만원)</td><td>단축분 100%·80% (상한 250만/160만)</td></tr>
              <tr><td><strong>적용 시간</strong></td><td>주 0시간 근무</td><td>주 15~35시간 근무</td></tr>
              <tr><td><strong>최대 기간</strong></td><td>자녀당 최대 1년</td><td>자녀당 최대 2년 (합산 3년)</td></tr>
              <tr><td><strong>사회보험</strong></td><td>고용보험·국민연금 유지</td><td>계속 납부 (고용 유지)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="worktime">
        <h2 className="detail-card-head">단축 가능 근무시간</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>단축 범위:</strong> 주 5~25시간 단축 (현재 근무시간에서)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>최소 근무시간:</strong> 단축 후 주 15시간 이상 유지 필수
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>최대 단축:</strong> 주 25시간 단축 → 주 15시간 근무
          </div>
          <div className="info-box">
            <strong>사업주 승인:</strong> 시작 전 서면 승인 필수 (사업주는 정당한 이유 없이 거부 불가)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="merit">
        <h2 className="detail-card-head">단축급여가 유리한 상황</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>직장 유지가 중요한 경우:</strong> 경력 단절 없이 육아 가능, 승진·연차 계속 쌓임
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 유지가 필요한 경우:</strong> 일부 근로소득 + 단축급여로 생활비 충당
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>육아휴직 후 복직한 경우:</strong> 복직 후에도 단축급여 신청 가능
          </div>
          <div className="info-box">
            <strong>배우자와 교대 돌봄:</strong> 한 명은 휴직·한 명은 단축으로 역할 분담 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            급여 계산, 신청 절차, 대상 자격까지<br />
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

export const 육아기근로시간단축급여육아휴직과차이출근하면서단축SpokeContent: SpokeData = {
  h1: '육아휴직 vs 근로시간 단축, 출근하면서 자녀 돌보는 차이와 선택 기준',
  breadcrumb: '육아휴직과차이출근하면서단축',
  description:
    '육아기 근로시간 단축: 출근하면서 주 15~35시간 근무, 단축분 급여 수령. 육아휴직(완전 휴직·상한 150만)과 달리 직장 유지·소득 일부 보전. 합산 최대 3년. 사업주 서면 승인 필수. ☎1350.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '육아휴직 중에 단축급여로 전환할 수 있나요?',
      a: '네. 육아휴직과 단축급여는 교대로 사용할 수 있습니다. 육아휴직 중 복직 후 단축급여로 전환하거나, 반대로 단축 중 육아휴직으로 전환하는 것도 가능합니다. 전환 시 고용센터에 변경 신고를 해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '근로시간 단축 중에도 연차가 쌓이나요?',
      a: '네. 근로시간 단축은 고용 관계를 유지하면서 시간만 줄이는 것이므로, 연차 발생 및 승진 기간 산정에도 포함됩니다. 육아휴직과 달리 경력 단절 없이 지속적으로 쌓입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '주 15시간보다 더 줄여 주 10시간만 일할 수 있나요?',
      a: '아닙니다. 단축 후 최소 근무시간은 주 15시간이며, 이보다 더 줄이면 단축급여가 아닌 육아휴직으로 분류될 수 있습니다. 주 15시간 미만 근무를 원한다면 육아휴직을 고려하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '사업주가 단축을 거부하면 어떻게 하나요?',
      a: '사업주는 대체 인력 채용이 불가하는 등 정당한 사유가 없는 한 거부할 수 없습니다. 거부 시 ☎1350 고용노동부 콜센터 또는 관할 고용센터에 진정을 제기할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '배우자도 동시에 단축급여를 신청할 수 있나요?',
      a: '네. 부부가 동시에 각자의 사업장에서 근로시간을 단축하고 각각 단축급여를 신청하는 것이 가능합니다. 서로 다른 사업장이므로 각자 별도로 신청합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 육아기 근로시간 단축급여', url: 'https://www.moel.go.kr' },
    { name: '고용보험 누리집', url: 'https://www.ei.go.kr' },
  ],
};
