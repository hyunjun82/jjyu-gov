import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          재난적의료비 지원과 본인부담상한제는 <strong>중복 적용이 제한</strong>됩니다.
          본인부담상한제로 이미 환급받은 금액은 재난적의료비 산정 대상에서 제외됩니다.
          단, 두 제도의 <strong>적용 시점과 대상이 달라</strong>
          상황에 따라 순차 활용이 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        두 제도를 정확히 이해하면 실제 받을 수 있는 의료비 지원을 최대화할 수 있습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">두 제도 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>본인부담상한제</th><th>재난적의료비 지원</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>지원 방식</strong></td><td>상한액 초과분 자동 환급</td><td>신청 후 심사 지급</td></tr>
              <tr><td><strong>대상 의료비</strong></td><td>급여 본인부담금</td><td>급여+비급여 본인부담금</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>있음 (7구간)</td><td>중위소득 100% 이하 (특례 가능)</td></tr>
              <tr><td><strong>연간 한도</strong></td><td>구간별 상한액 (81~780만원)</td><td>최대 2천만원 (특례 5천만원)</td></tr>
              <tr><td><strong>중복 여부</strong></td><td colSpan={2}>중복 수령 불가 (이미 지원받은 금액 제외)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="sequential">
        <h2 className="detail-card-head">순차 활용 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Step 1:</strong> 본인부담상한제 — 급여 본인부담금이 상한액 초과 시 자동 환급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Step 2:</strong> 재난적의료비 — 상한제 환급 후 남은 의료비(비급여 포함)에 대해 신청 가능
          </div>
          <div className="info-box">
            <strong>핵심:</strong> 상한제 적용 후 잔여 의료비 부담이 크면 재난적의료비로 추가 지원 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tip">
        <h2 className="detail-card-head">신청 순서 팁</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>본인부담상한제:</strong> 퇴원 후 공단이 자동 정산 (별도 신청 불필요)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재난적의료비:</strong> 퇴원(외래 종료) 후 180일 이내 직접 신청
          </div>
          <div className="info-box">
            <strong>상담:</strong> 국민건강보험공단 1577-1000에서 두 제도 동시 상담 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 지원 금액, 암·뇌혈관 질환 신청까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/catastrophic-medical-expenses" className="btn-cta">
            재난적의료비 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 재난적의료비본인부담상한제중복가능여부SpokeContent: SpokeData = {
  h1: '재난적의료비와 본인부담상한제 중복 가능한지, 순차 활용 방법',
  breadcrumb: '본인부담상한제중복가능여부',
  description:
    '재난적의료비와 본인부담상한제 중복 수령 불가. 상한제 환급 후 잔여 의료비(비급여 포함)에 재난적의료비 신청 가능. 퇴원 후 180일 이내 신청. 공단 1577-1000 동시 상담 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '본인부담상한제는 어떻게 적용되나요?',
      a: '소득 수준에 따라 연간 본인부담 상한액(81~780만원)을 초과한 급여 진료비는 건강보험공단이 자동으로 환급합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '본인부담상한제 환급 후 비급여 비용도 재난적의료비로 받을 수 있나요?',
      a: '네, 상한제는 급여 본인부담금에만 적용되므로, 비급여 부분은 재난적의료비 지원 대상이 될 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '두 제도를 동시에 신청할 수 있나요?',
      a: '본인부담상한제는 퇴원 후 자동 정산되고, 재난적의료비는 별도 신청입니다. 상한제 환급 결과를 확인한 뒤 재난적의료비를 신청하는 것이 유리합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '의료급여 수급자도 두 제도 모두 받을 수 있나요?',
      a: '의료급여 수급자는 본인부담상한제 대신 의료급여법이 적용됩니다. 재난적의료비는 별도로 신청 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '실손보험이 있으면 재난적의료비 지원이 줄어드나요?',
      a: '실손보험 지급액은 재난적의료비 산정 시 제외됩니다. 보험으로 이미 보전된 금액은 지원 대상에서 빠집니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
