import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          두루누리 사회보험료 지원은 <strong>신규가입자</strong>에게
          <strong>고용보험·국민연금 보험료의 80%</strong>를
          <strong>최대 36개월</strong>간 지원합니다.
          2026년 기준 월평균 보수 <strong>270만원 미만</strong>이고
          <strong>10인 미만 사업장</strong>에 재직 중이어야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        신규가입자 36개월 기준이 어떻게 적용되는지, 기존 가입자와 어떻게 다른지
        확인하세요.
      </p>

      <section className="detail-card" id="newjoin">
        <h2 className="detail-card-head">신규가입자 36개월 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>신규가입자</th><th>기존 가입자</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>지원율</strong></td><td>80%</td><td>지원 제외</td></tr>
              <tr><td><strong>지원 기간</strong></td><td>최대 36개월</td><td>해당 없음</td></tr>
              <tr><td><strong>신규 기준</strong></td><td>지원 신청일 직전 6개월간 고용보험 미가입자</td><td>이미 가입 이력 있음</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="period">
        <h2 className="detail-card-head">36개월 적용 방식</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기산 시점:</strong> 두루누리 지원을 처음 받은 달부터 개월 수 산정
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>누적 계산:</strong> 사업장 이동 시에도 개인별로 누적 (36개월 합산)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중단 후 재개:</strong> 지원 중단 후 재취업해도 남은 기간만 지원
          </div>
          <div className="info-box">
            <strong>초과 시:</strong> 36개월 이후 지원 자동 종료
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">지원 잔여 기간 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> insurancesupport.or.kr → 지원 이력 조회
          </div>
          <div className="info-box">
            <strong>전화:</strong> 근로복지공단 1588-0075
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 대상 요건, 신청 방법, 지원 금액 계산까지<br />
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

export const 두루누리사회보험2026신규가입36개월기준SpokeContent: SpokeData = {
  h1: '2026 두루누리 사회보험료 80% 지원, 신규가입자 최대 36개월 기준 정리',
  breadcrumb: '2026신규가입36개월기준',
  description:
    '두루누리 2026 신규가입자 기준: 직전 6개월 고용보험 미가입자, 10인 미만 사업장, 월 270만원 미만. 80% 지원 최대 36개월. 사업장 이동 시 개인별 누적. insurancesupport.or.kr 조회.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '신규가입자 기준 6개월은 어디서 확인하나요?',
      a: '지원 신청일 직전 6개월간 고용보험 가입 이력이 없는 경우 신규가입자로 인정됩니다. 고용보험 가입 이력은 고용24(work24.go.kr)에서 확인할 수 있습니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '36개월이 끝나면 이후에는 지원을 전혀 못 받나요?',
      a: '신규가입자 36개월 지원이 종료되면 두루누리 지원 혜택은 더 이상 받을 수 없습니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '이직 후 새 직장에서도 두루누리를 신청할 수 있나요?',
      a: '이직 후 새 사업장에서도 지원 조건을 충족하면 신청 가능합니다. 단 개인별 36개월 이력이 누적되므로, 기존 사용 기간만큼 차감됩니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '2026년 지원 기준이 바뀌었나요?',
      a: '2026년 현재 월평균 보수 270만원 미만, 10인 미만 사업장, 신규가입자 80% 36개월 기준이 적용됩니다. 최신 변경사항은 insurancesupport.or.kr에서 확인하세요.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '육아휴직 중에도 36개월 기간이 계속 흐르나요?',
      a: '보험료 납부가 없는 기간(무급 휴직 등)은 지원 대상 기간에서 제외될 수 있습니다. 정확한 산정은 근로복지공단(1588-0075)에 문의하세요.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
  ],
  sources: [
    { name: '두루누리 사회보험료 지원', url: 'https://insurancesupport.or.kr' },
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '근로복지공단', url: 'https://www.kcomwel.or.kr' },
  ],
};
