import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          성인 암환자 의료비 지원은 <strong>기준 중위소득 120% 이하</strong>인 만 18세 이상 암환자에게
          <strong>연간 최대 300만원</strong>을 최대 3년간 지원합니다.
          암 종류에 제한 없이 모든 암종이 대상이며,
          매년 갱신 신청이 필요합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        의료급여 수급자도 지원 대상에 포함됩니다.
        치료 중인 환자뿐 아니라 완치 후 재발·전이가 확인된 경우도 신청 가능합니다.
        신청은 주소지 관할 보건소 또는 국립암센터에서 합니다.
      </p>

      <section className="detail-card" id="criteria">
        <h2 className="detail-card-head">성인 암환자 지원 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>연령</strong></td><td>만 18세 이상</td></tr>
              <tr><td><strong>진단</strong></td><td>암(모든 암종) 진단 필수</td></tr>
              <tr><td><strong>소득</strong></td><td>기준 중위소득 120% 이하</td></tr>
              <tr><td><strong>지원 금액</strong></td><td>연간 최대 300만원</td></tr>
              <tr><td><strong>지원 기간</strong></td><td>최대 3년 (매년 갱신)</td></tr>
              <tr><td><strong>재발·전이</strong></td><td>신청 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">기준 중위소득 120% 기준 안내</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기준 중위소득:</strong> 보건복지부가 매년 고시하는 가구 소득 기준 (가구원 수에 따라 다름)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>확인 방법:</strong> 복지로(bokjiro.go.kr) → 복지 자가진단 → 소득 기준 조회
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>의료급여 수급자:</strong> 소득 기준과 무관하게 지원 대상
          </div>
          <div className="info-box">
            <strong>소득 증빙:</strong> 건강보험료 납부확인서·소득증명서 등으로 확인
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="coverage">
        <h2 className="detail-card-head">지원 가능한 의료비 항목</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>급여 본인부담금:</strong> 입원·외래 건강보험 본인부담금
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>항암·수술·방사선:</strong> 암 치료 직접 관련 의료비
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>약제비:</strong> 처방 항암제·관련 약제 비용
          </div>
          <div className="info-box">
            <strong>제외:</strong> 미용·성형·건강보조식품 등 치료와 무관한 비용
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            소아암 지원, 신청 방법, 산정특례 중복 여부까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/cancer-patient-medical-aid" className="btn-cta">
            암환자 의료비 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 암환자의료비지원성인중위소득120이하300만원SpokeContent: SpokeData = {
  h1: '암환자 의료비 지원 성인 기준, 중위소득 120% 이하면 연 300만원 받는다',
  breadcrumb: '성인중위소득120이하300만원',
  description:
    '성인 암환자 의료비 지원: 기준 중위소득 120% 이하 만 18세 이상, 연 최대 300만원 최대 3년. 모든 암종 가능, 재발·전이도 신청 가능. 보건소·국립암센터 신청. ☎1577-8899.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '3년 후에는 지원이 완전히 끊기나요?',
      a: '성인 암환자 의료비 지원은 최대 3년입니다. 3년 종료 후에도 치료가 계속된다면 산정특례·의료급여 등 다른 제도를 활용해야 합니다. 정확한 연장 가능 여부는 보건소나 ☎1577-8899로 문의하세요.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '중위소득 120%가 나를 초과하면 아무것도 못 받나요?',
      a: '소득이 120%를 초과하면 암환자 의료비 지원은 받지 못할 수 있지만, 건강보험 산정특례(본인부담 5%)를 통해 의료비 부담을 줄일 수 있습니다. 산정특례는 소득 기준 없이 암 진단만으로 적용됩니다.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '연간 300만원은 한 번에 지급되나요?',
      a: '의료비가 발생할 때마다 영수증을 제출하여 지원을 받는 방식입니다. 연간 한도 300만원 내에서 실제 발생한 의료비를 청구하며, 일시 지급이 아닙니다.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '암 진단 후 바로 신청해야 하나요?',
      a: '암 진단 후 가능한 한 빨리 신청하는 것이 좋습니다. 신청일 이후 발생한 의료비부터 지원받을 수 있으며, 소급 지원은 제한됩니다. 주소지 관할 보건소 또는 ☎1577-8899로 신청 시기를 확인하세요.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '갑상선암·초기암도 지원되나요?',
      a: '갑상선암을 포함한 모든 암종이 지원 대상입니다. 다만 암의 진행 단계나 치료 여부에 따라 지원 세부 내용이 다를 수 있으므로 보건소나 국립암센터에서 확인하세요.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
  ],
  sources: [
    { name: '국립암센터 암환자 의료비 지원 안내', url: 'https://www.ncc.re.kr/cancerStatsView.ncc?bbsnum=613' },
    { name: '국립암센터', url: 'https://www.ncc.re.kr' },
  ],
};
