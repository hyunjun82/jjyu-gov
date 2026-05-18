import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          혼자 사는 부모님의 응급상황이 걱정된다면 <strong>1566-3232</strong>에 전화하거나
          거주지 <strong>행정복지센터</strong>를 방문해 신청하면 됩니다.
          신청 후 현장 실사를 거쳐 ICT 장비를 <strong>무상 설치</strong>하고
          24시간 자동 모니터링이 시작됩니다. 비용은 <strong>전혀 들지 않습니다</strong>.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        부모님이 혼자 계신 경우 낙상·화재·심정지 등 응급 상황에 빠르게 대응하기 어렵습니다.
        응급안전안심서비스를 신청하면 자동 감지 장비와 24시간 모니터링으로 이 문제를 해결할 수 있습니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">신청 절차 단계별 안내</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 1566-3232 전화 상담 또는 행정복지센터 방문
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 신청서 + 신분증 + 주거 상황 자료 제출
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 현장 실사 (거주 여건 확인 — 실제 독거 여부 등)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>4단계:</strong> 적합 장비 선정 후 무상 설치
          </div>
          <div className="info-box">
            <strong>5단계:</strong> 중앙모니터링센터(1566-3232) 24시간 365일 모니터링 개시
          </div>
        </div>
      </section>

      <section className="detail-card" id="cost">
        <h2 className="detail-card-head">비용 부담 — 얼마나 드나요?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>비용 항목</th><th>독거노인·장애인</th><th>비독거 어르신</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>장비 설치비</strong></td><td>무상</td><td>자부담</td></tr>
              <tr><td><strong>통신비</strong></td><td>무상</td><td>자부담</td></tr>
              <tr><td><strong>유지관리비</strong></td><td>무상</td><td>자부담</td></tr>
              <tr><td><strong>전기료</strong></td><td>본인 부담 (매우 소액)</td><td>본인 부담</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="emergency-works">
        <h2 className="detail-card-head">장비가 실제로 어떻게 작동하나요?</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>낙상·실신:</strong> 활동 감지 센서가 일정 시간 무활동 감지 → 모니터링센터 확인 → 응급 시 119 출동
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>화재:</strong> 화재 감지기가 연기·열 감지 → 즉시 119 신고 + 모니터링센터 알림
          </div>
          <div className="info-box">
            <strong>본인 호출:</strong> 응급호출 버튼 누르면 즉시 119 + 보호자 연락
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 장비 종류, 다른 노인 복지와 중복 수령 여부까지<br />
            응급안전안심서비스 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/elderly-emergency-safety" className="btn-cta">
            독거노인·장애인 응급안전안심서비스 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 응급안전안심서비스부모님응급신청절차SpokeContent: SpokeData = {
  h1: '혼자 사는 부모님 응급상황 걱정된다면 신청 절차와 비용 확인',
  breadcrumb: '부모님응급신청절차',
  description:
    '응급안전안심서비스 신청 절차: 1566-3232 전화 또는 행정복지센터 방문 → 현장 실사 → ICT 장비 무상 설치 → 24시간 모니터링. 독거노인·장애인은 설치비·통신비·유지관리비 모두 무상.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '혼자 사는 부모님을 위해 제가 신청할 수 있나요?',
      a: '네. 가족이 대신 신청할 수 있습니다. 1566-3232에 전화하거나 부모님 거주지 행정복지센터를 방문하면 됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '비용이 얼마나 드나요?',
      a: '독거노인과 장애인은 장비 설치비·통신비·유지관리비 모두 무상입니다. 전기료만 본인 부담이며 매우 소액입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '신청 후 얼마나 걸려서 장비가 설치되나요?',
      a: '신청 후 현장 실사를 거쳐 장비를 설치합니다. 정확한 기간은 지역 행정복지센터 또는 1566-3232에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장비가 실제로 응급 상황을 감지할 수 있나요?',
      a: '네. 활동 감지 센서가 낙상·실신을, 화재 감지기가 연기·열을 감지해 자동으로 119에 신고합니다. 응급호출 버튼을 누르면 즉시 119와 보호자에게 연락됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초연금, 노인 돌봄 서비스와 함께 받을 수 있나요?',
      a: '네. 기초연금, 노인맞춤 돌봄서비스, 치매안심센터, 장기요양 등 모든 노인 복지 사업과 중복 수령이 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '중앙모니터링센터 1566-3232', url: 'https://www.silvercare.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
