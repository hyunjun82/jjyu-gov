import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          소아 암환자 의료비 지원은 <strong>만 18세 미만</strong> 아동·청소년 암환자에게
          <strong>연간 최대 3,000만원</strong>을 <strong>18세가 될 때까지</strong> 지원합니다.
          성인(연 300만원)보다 10배 많은 지원으로, 집중 치료가 필요한 소아암의 특성을 반영합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        소아 암환자는 성인과 소득 기준이 다를 수 있습니다.
        정확한 소득 기준과 신청 요건은 주소지 관할 보건소 또는
        국립암센터 암정보상담센터(☎1577-8899)에서 확인하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">소아 vs 성인 암환자 지원 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>소아 암환자</th><th>성인 암환자</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>연령</strong></td><td>만 18세 미만</td><td>만 18세 이상</td></tr>
              <tr><td><strong>연간 지원 한도</strong></td><td>최대 3,000만원</td><td>최대 300만원</td></tr>
              <tr><td><strong>지원 기간</strong></td><td>18세가 될 때까지</td><td>최대 3년</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>별도 기준 (보건소 확인)</td><td>중위소득 120% 이하</td></tr>
              <tr><td><strong>신청처</strong></td><td>보건소 · 국립암센터</td><td>보건소 · 국립암센터</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="criteria">
        <h2 className="detail-card-head">소아 암환자 지원 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상 연령:</strong> 만 18세 미만 (18세 생일 전날까지)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>진단 조건:</strong> 소아암 진단 필수 (백혈병·뇌종양·림프종 등 포함)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 기준:</strong> 성인과 별도 기준 — 보건소 또는 ☎1577-8899로 확인
          </div>
          <div className="info-box">
            <strong>갱신:</strong> 매년 갱신 신청 (18세까지 계속 지원 가능)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="coverage">
        <h2 className="detail-card-head">소아암 의료비 지원 범위</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>입원·외래 진료비:</strong> 소아암 치료 관련 건강보험 본인부담금
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>항암·방사선·수술:</strong> 암 치료 직접 관련 비용
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
            성인 지원 기준, 신청 방법, 산정특례 중복 여부까지<br />
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

export const 암환자의료비지원소아암3000만원18세까지조건SpokeContent: SpokeData = {
  h1: '소아 암환자 의료비 지원, 연 3,000만원 18세까지 받는 조건과 신청 방법',
  breadcrumb: '소아암3000만원18세까지조건',
  description:
    '소아 암환자(18세 미만) 의료비 지원: 연 최대 3,000만원, 18세까지. 성인(연 300만원)의 10배 지원. 소득 기준 별도(보건소 확인). 보건소·국립암센터 신청. ☎1577-8899.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '소아암 진단 후 바로 3,000만원을 받을 수 있나요?',
      a: '연간 한도 3,000만원 내에서 실제 발생한 의료비를 청구하는 방식입니다. 일시 지급이 아니며, 치료 과정에서 의료비 영수증을 제출할 때마다 지원받습니다.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '18세가 되면 지원이 바로 끊기나요?',
      a: '만 18세 생일이 지나면 소아 암환자 지원은 종료됩니다. 이후에는 성인 암환자 의료비 지원(중위소득 120% 이하, 연 최대 300만원)으로 전환 신청이 가능합니다.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '백혈병·뇌종양도 소아암 지원 대상인가요?',
      a: '네. 백혈병·뇌종양·림프종·신경모세포종 등 소아 암으로 진단받은 모든 암종이 대상입니다. 정확한 대상 암종은 보건소나 ☎1577-8899로 확인하세요.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '부모 소득이 높아도 소아암 지원을 받을 수 있나요?',
      a: '소아 암환자는 성인과 다른 소득 기준이 적용됩니다. 성인과 달리 소득 기준이 완화되어 있을 수 있으므로, 보건소 또는 ☎1577-8899에서 정확한 소득 기준을 확인하고 신청하세요.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '치료가 완료된 소아암 환자도 계속 지원받을 수 있나요?',
      a: '치료 완료 후 추적 관찰 중에도 일정 기간 지원이 가능할 수 있습니다. 단, 지원 범위와 기간은 상황에 따라 달라지므로 주소지 보건소나 국립암센터에 문의하여 정확한 기준을 확인하세요.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
  ],
  sources: [
    { name: '국립암센터 암환자 의료비 지원 안내', url: 'https://www.ncc.re.kr/cancerStatsView.ncc?bbsnum=613' },
    { name: '국립암센터', url: 'https://www.ncc.re.kr' },
  ],
};
