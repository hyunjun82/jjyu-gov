import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          재난적의료비 지원 금액은 <strong>본인부담 의료비의 50%</strong>를 지원합니다.
          연간 <strong>최대 2천만원</strong>이며,
          중증질환자(암 등) 특례 적용 시 <strong>최대 5천만원</strong>까지 지원받을 수 있습니다.
          소득 수준에 따라 지원 비율이 달라집니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        본인부담금 산정 기준과 소득 구간별 지원 비율을 미리 파악해 두세요.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">소득 구간별 지원 비율과 한도</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>소득 기준</th><th>지원 비율</th><th>연간 한도</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>기초수급자·차상위</strong></td><td>80%</td><td>최대 2천만원</td></tr>
              <tr><td><strong>중위소득 50% 이하</strong></td><td>60%</td><td>최대 2천만원</td></tr>
              <tr><td><strong>중위소득 50~100% 이하</strong></td><td>50%</td><td>최대 2천만원</td></tr>
              <tr><td><strong>중증질환 특례</strong></td><td>50~80%</td><td>최대 5천만원</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="calc">
        <h2 className="detail-card-head">지원 금액 계산 예시</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>예시 1:</strong> 중위소득 70% 가구, 본인부담 1천만원 → 지원 500만원(50%)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>예시 2:</strong> 기초수급자, 본인부담 500만원 → 지원 400만원(80%)
          </div>
          <div className="info-box">
            <strong>예시 3:</strong> 암 환자 특례, 본인부담 3천만원 → 지원 1,500~2,400만원(50~80%)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="exclude">
        <h2 className="detail-card-head">지원 제외 항목</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>비급여 중 일부:</strong> 상급병실료 차액, 선택진료비 등은 제외될 수 있음
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>타 제도 지원분:</strong> 본인부담상한제·의료급여 등으로 이미 지원받은 금액은 제외
          </div>
          <div className="info-box">
            <strong>자동차보험·산재 등:</strong> 제3자 부담분도 제외
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 암·뇌혈관 질환 신청, 본인부담상한제 중복 여부까지<br />
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

export const 재난적의료비지원금액본인부담50퍼센트SpokeContent: SpokeData = {
  h1: '재난적의료비 지원 금액, 본인부담 50% 지원 기준과 연간 한도',
  breadcrumb: '지원금액본인부담50퍼센트',
  description:
    '재난적의료비 지원: 본인부담 의료비의 50%(기초수급 80%) 지원. 연간 최대 2천만원, 중증질환 특례 5천만원. 소득 구간별 지원 비율 차등. 본인부담상한제 등 타 지원분 제외 후 산정.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '본인부담금이란 정확히 무엇인가요?',
      a: '건강보험이 적용된 후 환자가 직접 부담하는 금액입니다. 비급여 중 일부도 포함되지만, 제외되는 항목(상급병실료 차액 등)이 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '2천만원 한도를 초과한 금액은 어떻게 되나요?',
      a: '연간 2천만원(특례 5천만원) 초과분은 지원받을 수 없습니다. 단 중증질환 특례 요건에 해당하면 한도가 상향됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '본인부담상한제와 재난적의료비를 같이 받을 수 있나요?',
      a: '본인부담상한제로 이미 지원받은 금액은 재난적의료비 산정에서 제외됩니다. 두 제도 중복 지원은 불가하지만, 각각 적용 후 남은 금액에 대해 재난적의료비를 신청할 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '지원금은 언제 입금되나요?',
      a: '신청 후 심사를 거쳐 통상 2~4주 내에 신청인 계좌로 입금됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '비급여 의료비도 지원 대상인가요?',
      a: '비급여 의료비 중 일부는 지원 대상에 포함되지만, 상급병실료 차액·선택진료비 등은 제외됩니다. 심사 시 항목별로 확인됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
