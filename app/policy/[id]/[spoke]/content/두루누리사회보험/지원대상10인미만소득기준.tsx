import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          두루누리 사회보험료 지원은 <strong>근로자 10인 미만 사업장</strong>에서 일하는
          <strong>월평균 보수 270만원 미만</strong> 근로자가 대상입니다.
          신규가입자는 <strong>고용보험·국민연금 보험료의 80%</strong>를 최대
          <strong>36개월</strong>간 지원받습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        지원 대상인지 먼저 확인하고, 사업주와 근로자 각각 얼마를 지원받는지
        파악하면 신청 여부를 결정하기 쉽습니다.
      </p>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">지원 대상 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>요건</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>사업장 규모</strong></td><td>근로자 수 10인 미만</td></tr>
              <tr><td><strong>근로자 소득</strong></td><td>월평균 보수 270만원 미만</td></tr>
              <tr><td><strong>가입 보험</strong></td><td>고용보험 + 국민연금 동시 가입</td></tr>
              <tr><td><strong>지원 기간</strong></td><td>신규가입자 최대 36개월</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">월 지원 한도액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>대상</th><th>고용보험</th><th>국민연금</th><th>합계</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>사업주</strong></td><td>최대 57,780원</td><td>최대 59,710원</td><td>최대 117,490원</td></tr>
              <tr><td><strong>근로자</strong></td><td>최대 52,560원</td><td>최대 59,740원</td><td>최대 112,300원</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="exclusion">
        <h2 className="detail-card-head">지원 제외 대상</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기지원자:</strong> 지원 이력이 36개월을 초과한 경우
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>월 보수 초과:</strong> 월평균 보수 270만원 이상인 근로자
          </div>
          <div className="info-box">
            <strong>대규모 사업장:</strong> 근로자 10인 이상 사업장 소속 근로자
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 80% 지원 적용 방식, 사업주 신청 절차까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/durunuri-social-insurance" className="btn-cta">
            두루누리 사회보험 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 두루누리사회보험지원대상10인미만소득기준SpokeContent: SpokeData = {
  h1: '두루누리 사회보험료 지원 대상 확인, 10인 미만 사업장 월 270만원 기준',
  breadcrumb: '지원대상10인미만소득기준',
  description:
    '두루누리 사회보험 지원 대상: 10인 미만 사업장, 월 보수 270만원 미만 근로자. 고용보험+국민연금 80% 지원, 최대 36개월. 사업주 월 최대 117,490원·근로자 112,300원.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '10인 미만 사업장 기준은 언제 기준으로 계산하나요?',
      a: '지원 신청 시점의 사업장 근로자 수를 기준으로 합니다. 월별로 근로자 수가 변동되더라도 신청 시점 기준으로 판단합니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '월 270만원에 세금 포함인가요?',
      a: '월평균 보수는 세전 총액 기준입니다. 비과세 항목을 제외한 실제 보수액으로 계산합니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '이미 고용보험만 가입되어 있으면 어떻게 하나요?',
      a: '두루누리 지원을 받으려면 고용보험과 국민연금 모두 가입되어 있어야 합니다. 국민연금 미가입이라면 추가 가입 후 신청하세요.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '지원 기간 36개월은 근로자 기준인가요, 사업장 기준인가요?',
      a: '근로자 개인 기준으로 36개월 적용됩니다. 사업장을 이동하더라도 본인의 지원 기간이 누적됩니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '일용직 근로자도 지원받을 수 있나요?',
      a: '일용직 근로자도 고용보험·국민연금에 가입된 경우 지원 대상이 됩니다. 월평균 보수 기준을 충족해야 합니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
  ],
  sources: [
    { name: '두루누리 사회보험료 지원', url: 'https://insurancesupport.or.kr' },
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
  ],
};
