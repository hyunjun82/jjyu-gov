import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          의료급여 65세 이상 수급자는 <strong>평생 2개</strong>까지 치과 임플란트를
          본인부담 <strong>1종 5%·2종 15%</strong>로 받을 수 있습니다.
          어금니·앞니 모두 가능하며, 시술 전 <strong>의료급여 지정 치과에서 사전 등록</strong>이 필수입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        사전 등록 없이 임플란트 시술을 받으면 의료급여 혜택이 적용되지 않아 전액 본인부담이 됩니다.
        반드시 시술 시작 전 치과에서 공단 등록을 완료하세요.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">임플란트 신청·시술 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>방법</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>자격 확인</td><td>시·군·구청 또는 정부24에서 의료급여 1종·2종 확인</td></tr>
              <tr><td><strong>2단계</strong></td><td>지정 치과 방문</td><td>의료급여 지정 치과 선택 — ☎1577-1000으로 확인 가능</td></tr>
              <tr><td><strong>3단계</strong></td><td>사전 등록</td><td>치과에서 국민건강보험공단 사전 등록 신청</td></tr>
              <tr><td><strong>4단계</strong></td><td>시술 시작</td><td>등록 완료 후 임플란트 시술 진행</td></tr>
              <tr><td><strong>5단계</strong></td><td>본인 부담 납부</td><td>1종 5% / 2종 15% 해당 금액만 납부</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">임플란트 지원 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상 연령:</strong> 만 65세 이상 의료급여수급자 (1종·2종 모두)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>한도:</strong> 평생 2개 (어금니·앞니 구분 없음)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>본인부담:</strong> 1종 5% / 2종 15%
          </div>
          <div className="info-box">
            <strong>제외 항목:</strong> 골이식 등 추가 시술은 별도 본인부담 발생
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="caution">
        <h2 className="detail-card-head">주의 사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지정 치과만 가능:</strong> 의료급여 지정 치과에서만 혜택 적용 — 비지정 치과는 전액 본인부담
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사전 등록 필수:</strong> 시술 전 치과에서 공단 등록 완료 후에만 혜택 적용
          </div>
          <div className="info-box">
            <strong>2개 초과 시:</strong> 3번째부터는 일반 건강보험 요금(30% 또는 비급여)이 적용됨
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            1종·2종 본인부담 비교, 틀니 주기, 신청 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/medical-aid-elderly-denture" className="btn-cta">
            노인 틀니·임플란트 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 노인틀니임플란트임플란트평생2개신청방법SpokeContent: SpokeData = {
  h1: '의료급여 치과임플란트 평생 2개 지원, 65세 이상 신청 방법과 지정 치과 안내',
  breadcrumb: '임플란트평생2개신청방법',
  description:
    '의료급여 노인 임플란트: 65세 이상 1종·2종 수급자 평생 2개, 1종 5%·2종 15% 본인부담. 의료급여 지정 치과에서 사전 등록 후 시술. 골이식 등 추가 시술은 별도 본인부담. ☎1577-1000.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '임플란트 1개를 이미 받았으면 1개 더 받을 수 있나요?',
      a: '네. 평생 2개 한도이므로 1개를 받은 경우 추가로 1개를 더 받을 수 있습니다. 공단에서 이력을 관리하므로 ☎1577-1000으로 잔여 한도를 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '65세가 되기 전에 받은 임플란트는 한도에 포함되나요?',
      a: '의료급여 임플란트 급여는 65세 이상부터 적용됩니다. 65세 이전에 받은 임플란트는 일반 본인부담이 적용된 것이므로, 65세 이후 평생 2개 한도는 별도로 적용됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '어금니와 앞니 중 어느 것을 먼저 받는 게 좋나요?',
      a: '한도는 어금니·앞니 구분 없이 평생 2개입니다. 씹는 기능에 더 중요한 어금니를 먼저 받는 것이 일반적이지만, 의사와 상담 후 결정하는 것이 좋습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '골이식이 필요하다고 하는데 비용이 많이 드나요?',
      a: '골이식, 상악동 거상술 등 임플란트 보조 시술은 급여 적용이 되지 않아 별도로 본인부담이 발생합니다. 사전에 치과에서 전체 비용을 안내받으세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '임플란트가 나중에 빠지거나 망가지면 다시 받을 수 있나요?',
      a: '평생 2개 한도 내에서는 재시술이 가능합니다. 이미 2개를 받은 경우에는 일반 건강보험 요금(30% 또는 비급여)이 적용됩니다. ☎1577-1000으로 상황을 확인하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
  ],
  sources: [
    { name: '보건복지부 의료급여 틀니·임플란트 지원', url: 'https://www.mohw.go.kr' },
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
  ],
};
