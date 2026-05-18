import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          재난적의료비 지원은 <strong>기준 중위소득 100% 이하</strong> 가구가 대상입니다.
          중위소득 100%를 초과해도 <strong>소득 대비 의료비 부담이 일정 수준을 넘으면</strong>
          개별 심사를 통해 지원받을 수 있습니다.
          지원 대상 질환은 <strong>암·뇌혈관·심장·희귀·중증난치·중증화상</strong>입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        신청 자격과 지원 금액을 미리 확인하면 큰 의료비 부담을 줄일 수 있습니다.
      </p>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득 기준 및 가구별 중위소득 100%</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가구원 수</th><th>기준 중위소득 100% (월)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1인</strong></td><td>약 228만 5천원</td></tr>
              <tr><td><strong>2인</strong></td><td>약 385만원</td></tr>
              <tr><td><strong>3인</strong></td><td>약 497만원</td></tr>
              <tr><td><strong>4인</strong></td><td>약 609만원</td></tr>
              <tr><td><strong>5인</strong></td><td>약 716만원</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>
            ※ 2026년 기준, 건강보험료 기준으로 소득 확인
          </p>
        </div>
      </section>

      <section className="detail-card" id="disease">
        <h2 className="detail-card-head">지원 대상 질환</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>입원:</strong> 모든 질환 입원 진료 (중위소득 100% 이하)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>외래:</strong> 암·뇌혈관·심장·희귀·중증난치·중증화상 질환에 한해 외래 지원
          </div>
          <div className="info-box">
            <strong>개별 심사:</strong> 중위소득 100% 초과 ~ 200% 이하이나 의료비 부담이 과중한 경우
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 퇴원 병원 의료사회복지사 또는 가까운 국민건강보험공단 지사
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 국민건강보험공단 홈페이지(nhis.or.kr) → 재난적의료비 신청
          </div>
          <div className="info-box">
            <strong>신청 기한:</strong> 퇴원일(외래 종료일)로부터 180일 이내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 암·뇌혈관 질환 신청, 본인부담상한제 중복 여부까지<br />
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

export const 재난적의료비중위소득100이하신청자격SpokeContent: SpokeData = {
  h1: '재난적의료비 신청 자격, 중위소득 100% 이하 기준과 대상 질환',
  breadcrumb: '중위소득100이하신청자격',
  description:
    '재난적의료비 지원 자격: 기준 중위소득 100% 이하(4인 가구 월 약 609만원). 입원 전 질환·외래 6개 중증질환 대상. 중위소득 200% 이하 과중 부담 시 개별 심사. 퇴원 후 180일 이내 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '건강보험료로 소득을 확인하나요?',
      a: '네, 소득은 건강보험료 납부액을 기준으로 확인합니다. 직장가입자와 지역가입자 기준이 다르므로 국민건강보험공단에서 확인하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '중위소득 100% 초과해도 신청이 가능한가요?',
      a: '중위소득 100~200% 이하이고 소득 대비 의료비 부담이 일정 수준을 넘으면 개별 심사를 통해 지원받을 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '외래 치료도 지원받을 수 있나요?',
      a: '암, 뇌혈관, 심장, 희귀, 중증난치, 중증화상 6개 중증질환의 경우 외래 진료도 지원 대상입니다. 일반 외래는 입원 기준으로만 지원됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '퇴원 후 몇 일 안에 신청해야 하나요?',
      a: '퇴원일(또는 외래 진료 종료일)로부터 180일 이내에 신청해야 합니다. 기한을 넘기면 지원받기 어렵습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '같은 해에 여러 차례 입원해도 지원받을 수 있나요?',
      a: '연간 지원 한도(최대 2천만원, 특례 5천만원) 범위 내에서 여러 번 지원 신청이 가능합니다.',
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
