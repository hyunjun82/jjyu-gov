import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          근로자 10인 미만 사업장에서 월 270만원 미만 급여를 받는다면
          <strong>고용보험·국민연금 보험료의 80%</strong>를 지원받을 수 있습니다.
          사업주가 <strong>4대보험 EDI 또는 근로복지공단(1588-0075)</strong>을 통해 신청하며,
          지원금은 <strong>보험료 고지서에서 자동 차감</strong>됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        80% 지원이 적용되면 사업주와 근로자 모두 보험료 부담이 크게 줄어듭니다.
        신청 방법과 지원 적용 방식을 확인하세요.
      </p>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 4대보험 EDI(edi.kcomwel.or.kr) → 두루누리 지원 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화:</strong> 근로복지공단 고객센터 1588-0075
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 가까운 근로복지공단 지사
          </div>
          <div className="info-box">
            <strong>신청자:</strong> 사업주 (근로자 대신 사업주가 일괄 신청)
          </div>
        </div>
      </section>

      <section className="detail-card" id="apply-result">
        <h2 className="detail-card-head">지원 적용 방식</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>지원율</strong></td><td>보험료의 80% (신규가입자 기준)</td></tr>
              <tr><td><strong>적용 방법</strong></td><td>월 보험료 고지서에서 자동 차감</td></tr>
              <tr><td><strong>지원 기간</strong></td><td>최대 36개월</td></tr>
              <tr><td><strong>조회</strong></td><td>insurancesupport.or.kr에서 지원 여부 확인 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tip">
        <h2 className="detail-card-head">신청 전 체크리스트</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사업장 인원 확인:</strong> 신청 시점 근로자 수 10인 미만 여부
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>근로자 보수 확인:</strong> 월평균 보수 270만원 미만 여부
          </div>
          <div className="info-box">
            <strong>이전 지원 이력:</strong> 근로자별 36개월 초과 여부 확인
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 대상 요건, 지원 기간, 신규가입자 기준까지<br />
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

export const 두루누리사회보험10인미만80퍼센트지원신청SpokeContent: SpokeData = {
  h1: '직원 월급 270만원 미만에 10명 미만 사업장이라면 두루누리 80% 지원 받는 방법',
  breadcrumb: '10인미만80%지원신청',
  description:
    '두루누리 80% 지원 신청: 10인 미만 사업장 사업주가 4대보험 EDI 또는 근로복지공단(1588-0075) 신청. 고용보험+국민연금 80% 자동 차감. 월 270만원 미만 근로자 대상.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '근로자 본인이 직접 신청할 수 있나요?',
      a: '두루누리 지원은 사업주가 신청합니다. 근로자는 사업주에게 신청을 요청하면 됩니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '지원금이 고지서에서 자동 차감되면 별도로 받을 수 있는 금액은 없나요?',
      a: '지원금은 보험료 납부 시 고지서에서 즉시 차감되는 방식입니다. 별도 현금 지급이 아니라 납부해야 할 보험료가 줄어드는 구조입니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '신청 후 언제부터 지원이 적용되나요?',
      a: '신청 다음 달부터 보험료 고지서에 지원금이 반영됩니다. 소급 적용은 되지 않으므로 빨리 신청할수록 유리합니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '사업장 근로자가 10명이 넘으면 지원이 중단되나요?',
      a: '근로자 수가 10인 이상이 되면 해당 월부터 지원이 중단됩니다. 다시 10인 미만이 되어도 기존 36개월 이력이 누적됩니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '4대보험 EDI가 무엇인가요?',
      a: '4대보험 EDI(edi.kcomwel.or.kr)는 근로복지공단에서 운영하는 4대 사회보험 통합 신고·관리 시스템입니다. 사업주가 두루누리 신청을 포함한 보험 관련 업무를 처리할 수 있습니다.',
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
