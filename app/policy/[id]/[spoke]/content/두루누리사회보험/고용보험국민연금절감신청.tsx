import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          두루누리 지원을 받으면 <strong>고용보험과 국민연금 보험료를 80%</strong> 절감할 수 있습니다.
          신청은 사업주가 <strong>insurancesupport.or.kr</strong> 또는
          <strong>근로복지공단(1588-0075)</strong>을 통해 하며,
          승인되면 다음 달 보험료 고지서부터 자동 차감됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        고용보험과 국민연금을 얼마나 절감할 수 있는지, 지원 이력은 어디서 조회하는지
        확인하세요.
      </p>

      <section className="detail-card" id="saving">
        <h2 className="detail-card-head">보험료 절감 효과</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>보험 종류</th><th>사업주 절감</th><th>근로자 절감</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>고용보험</strong></td><td>월 최대 57,780원</td><td>월 최대 52,560원</td></tr>
              <tr><td><strong>국민연금</strong></td><td>월 최대 59,710원</td><td>월 최대 59,740원</td></tr>
              <tr><td><strong>합계</strong></td><td>월 최대 117,490원</td><td>월 최대 112,300원</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 및 조회 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청:</strong> insurancesupport.or.kr 또는 근로복지공단(1588-0075)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청자:</strong> 사업주 (근로자 대신 일괄 신청)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원 이력 조회:</strong> insurancesupport.or.kr → 지원 내역 확인
          </div>
          <div className="info-box">
            <strong>적용 시점:</strong> 신청 승인 후 다음 달 보험료부터 차감
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">지원 받기 위한 조건 요약</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사업장:</strong> 근로자 수 10인 미만
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>근로자:</strong> 월평균 보수 270만원 미만
          </div>
          <div className="info-box">
            <strong>가입 형태:</strong> 고용보험 + 국민연금 동시 가입 필수
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신규가입자 36개월 기준, 지원 대상, 제외 사유까지<br />
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

export const 두루누리사회보험고용보험국민연금절감신청SpokeContent: SpokeData = {
  h1: '고용보험 국민연금 80% 절감, 두루누리 지원금 신청 방법과 조회 방법',
  breadcrumb: '고용보험국민연금절감신청',
  description:
    '두루누리 고용보험·국민연금 80% 절감: 사업주 월 최대 117,490원·근로자 112,300원. insurancesupport.or.kr 신청·조회. 10인 미만 사업장, 월 270만원 미만 근로자 대상.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '고용보험과 국민연금 중 하나만 신청할 수 있나요?',
      a: '두루누리 지원은 고용보험과 국민연금을 동시에 신청해야 합니다. 한 가지만 선택해서 신청하는 것은 불가능합니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '지원 이력은 어디서 조회할 수 있나요?',
      a: 'insurancesupport.or.kr에서 사업자등록번호 또는 근로자 주민번호로 지원 이력과 잔여 기간을 확인할 수 있습니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '신청하지 않으면 보험료가 자동 할인되지 않나요?',
      a: '두루누리 지원은 자동으로 적용되지 않습니다. 사업주가 직접 신청해야 다음 달부터 고지서에 차감이 적용됩니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '근로자가 퇴사하면 지원이 어떻게 되나요?',
      a: '퇴사 시 해당 근로자에 대한 지원은 자동 종료됩니다. 새 근로자를 채용하면 해당 근로자의 지원 요건을 다시 확인해 신청해야 합니다.',
      source: '근로복지공단',
      sourceUrl: 'https://insurancesupport.or.kr',
    },
    {
      q: '지원받은 사실을 모르고 전액 납부했는데 환급받을 수 있나요?',
      a: '소급 적용은 되지 않습니다. 신청 후 다음 달부터 차감이 시작되므로, 이미 납부한 보험료는 환급되지 않습니다.',
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
