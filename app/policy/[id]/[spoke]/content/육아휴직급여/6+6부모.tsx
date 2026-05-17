import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          엄마·아빠가 모두 육아휴직을 쓰면
          <strong>6+6 부모함께 육아휴직</strong>이 적용됩니다.
          부부가 동시 또는 순차로 첫 6개월 동안 각자 통상임금 100%를 받으며,
          상한액이 6개월째에 <strong>월 450만원</strong>까지 단계적으로 올라갑니다.
          부모 각자에게 적용되므로 합산하면 최대 900만원 수준입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "남편도 같이 쓰면 더 받는다는데 얼마나 더 받나요?"
        순서별·개월별 금액과 조건을 구체적으로 정리했습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">6+6 부모함께 — 개월별 상한액 (부모 각자 기준)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>개월 차</th><th>통상임금 비율</th><th>월 상한액 (각자)</th></tr>
            </thead>
            <tbody>
              <tr><td>1개월</td><td>100%</td><td><strong>월 250만원</strong></td></tr>
              <tr><td>2개월</td><td>100%</td><td><strong>월 250만원</strong></td></tr>
              <tr><td>3개월</td><td>100%</td><td><strong>월 300만원</strong></td></tr>
              <tr><td>4개월</td><td>100%</td><td><strong>월 350만원</strong></td></tr>
              <tr><td>5개월</td><td>100%</td><td><strong>월 400만원</strong></td></tr>
              <tr><td>6개월</td><td>100%</td><td><strong>월 450만원</strong></td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>부부 합산:</strong> 6개월 차에 각자 최대 450만원 = 합산 최대 900만원.
            이 상한액은 통상임금이 상한보다 높을 때 적용됩니다.
            통상임금이 낮으면 통상임금 전액을 받습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">6+6 적용 조건 — 동시·순차 모두 가능한가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조건</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>대상 자녀</td>
                <td>생후 18개월 이내 자녀 (2024년 이후 출생 자녀부터 적용)</td>
              </tr>
              <tr>
                <td>사용 방식</td>
                <td>동시 사용 또는 순차 사용 모두 가능</td>
              </tr>
              <tr>
                <td>엄마·아빠 각자</td>
                <td>각자 첫 6개월에 대해 단계 상한 적용</td>
              </tr>
              <tr>
                <td>일반 육아휴직과 차이</td>
                <td>일반 육아휴직보다 상한액이 높음 (예: 3개월째 일반 250만 → 6+6 300만)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>주의:</strong> 6+6 부모함께 육아휴직은 <strong>생후 18개월 이내 자녀</strong>가 있을 때 적용됩니다.
            만 8세 이하라도 생후 18개월 초과이면 일반 육아휴직 급여가 적용됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">일반 육아휴직 vs 6+6 부모함께 — 3개월 차 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>일반 육아휴직</th><th>6+6 부모함께</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1개월 상한</td>
                <td>250만원</td>
                <td>250만원 (동일)</td>
              </tr>
              <tr>
                <td>3개월 상한</td>
                <td>250만원</td>
                <td><strong>300만원</strong></td>
              </tr>
              <tr>
                <td>5개월 상한</td>
                <td>200만원 (4~6월 구간)</td>
                <td><strong>400만원</strong></td>
              </tr>
              <tr>
                <td>6개월 상한</td>
                <td>200만원</td>
                <td><strong>450만원</strong></td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#666', marginTop: 8 }}>
            ※ 6+6 부모함께는 부모 각자에게 위 상한이 적용됩니다. 부부 합산 시 효과 배가.
          </p>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">6+6 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>별도 신청 불필요:</strong> 육아휴직급여 신청 시 고용보험 시스템이 자동으로
            6+6 적용 여부를 판단합니다. 배우자가 같은 자녀로 육아휴직을 사용했거나 사용 중이면 자동 적용됩니다.
          </div>
          <div className="info-box">
            <strong>신청 창구:</strong> 고용보험 누리집(ei.go.kr) 또는 가까운 고용센터
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            1~3월 급여 계산법, 신청 조건, 회사 부담 여부 등<br />
            육아휴직급여 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/parental-leave-pay" className="btn-cta">
            육아휴직급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 부모함께SpokeContent: SpokeData = {
  h1: '엄마 아빠 모두 육아휴직 쓰면 6+6 급여 얼마 더 받나 | 순서별 금액',
  breadcrumb: '6+6 부모함께',
  description:
    '6+6 부모함께 육아휴직은 부부가 동시·순차로 육아휴직을 쓸 때 각자 첫 6개월간 통상임금 100%에 단계별 상한을 적용합니다. 6개월 차 상한은 각자 월 450만원. 생후 18개월 이내 자녀에게 적용. 별도 신청 없이 고용보험 시스템이 자동 판단합니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '6+6 부모함께 육아휴직이란 무엇인가요?',
      a: '부부가 동시 또는 순차로 육아휴직을 쓸 때, 각자 첫 6개월간 통상임금 100%를 지급하고 상한액을 단계적으로 올려주는 제도입니다. 6개월 차에는 각자 최대 450만원을 받습니다.',
      source: '고용노동부 6+6 부모함께 육아휴직 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '6+6 부모함께 적용 조건은 무엇인가요?',
      a: '생후 18개월 이내 자녀가 있어야 합니다. 부부가 동시에 또는 순차적으로 해당 자녀를 이유로 육아휴직을 사용하면 자동 적용됩니다.',
      source: '고용노동부 6+6 부모함께 육아휴직 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '6+6 부모함께를 따로 신청해야 하나요?',
      a: '별도 신청이 필요 없습니다. 육아휴직급여 신청 시 고용보험 시스템이 배우자 사용 여부를 확인하여 자동으로 적용합니다.',
      source: '고용보험 누리집 육아휴직급여 안내',
      sourceUrl: 'https://www.ei.go.kr',
    },
    {
      q: '부부가 동시에 써야 하나요, 순서대로 써야 하나요?',
      a: '동시 사용과 순차 사용 모두 가능합니다. 부부가 같은 자녀에 대해 육아휴직을 사용한 이력이 있으면 6+6이 적용됩니다.',
      source: '고용노동부 6+6 부모함께 육아휴직 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '6개월째에 450만원을 받으려면 통상임금이 얼마여야 하나요?',
      a: '통상임금이 450만원 이상이어야 합니다. 통상임금이 450만원 미만이면 실제 통상임금이 지급됩니다.',
      source: '고용노동부 육아휴직급여 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 6+6 부모함께 육아휴직 안내', url: 'https://www.moel.go.kr' },
    { name: '고용보험 누리집 육아휴직급여 신청', url: 'https://www.ei.go.kr' },
  ],
};
