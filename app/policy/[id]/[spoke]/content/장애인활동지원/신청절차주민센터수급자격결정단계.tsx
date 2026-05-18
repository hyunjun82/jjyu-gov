import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          장애인활동지원 신청은 <strong>주민센터(읍·면·동) 방문 신청</strong>으로 시작하며,
          국민연금공단 종합조사 → 수급자격 결정 → 기관 선택 순으로 진행됩니다.
          신청부터 서비스 시작까지 보통 <strong>1~2개월</strong>이 소요됩니다.
        </p>
      </div>

      <section className="detail-card" id="step">
        <h2 className="detail-card-head">신청 절차 단계별 안내</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>처리 기관</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>주민센터 방문 신청 (서비스 신청서·개인정보 동의서 제출)</td><td>읍·면·동 주민센터</td></tr>
              <tr><td><strong>2단계</strong></td><td>국민연금공단 서비스 지원 종합조사 (방문 평가)</td><td>국민연금공단 지사</td></tr>
              <tr><td><strong>3단계</strong></td><td>시·군·구 수급자격심의위원회 심의</td><td>시·군·구청</td></tr>
              <tr><td><strong>4단계</strong></td><td>수급자격 결정 통보 (구간 1~15 + 월 급여 시간)</td><td>시·군·구청</td></tr>
              <tr><td><strong>5단계</strong></td><td>활동지원기관 선택 및 계약 체결</td><td>수급자 직접 선택</td></tr>
              <tr><td><strong>6단계</strong></td><td>서비스 이용 시작</td><td>활동지원기관</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>필수:</strong> 서비스 신청서, 개인정보 수집·이용·제공 동의서
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신분 확인:</strong> 신청인 신분증 (본인 또는 대리인)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장애 확인:</strong> 장애인등록증 또는 복지카드 (주민센터 전산 확인 가능)
          </div>
          <div className="info-box">
            <strong>대리 신청:</strong> 법정대리인의 경우 위임장 + 대리인 신분증
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="period">
        <h2 className="detail-card-head">소요 기간 및 문의처</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>종합조사:</strong> 신청 후 약 2~4주 (국민연금공단 방문 일정 잡기)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>수급자격 결정:</strong> 조사 완료 후 약 2주
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기관 계약~서비스 시작:</strong> 수급 결정 후 1~2주
          </div>
          <div className="info-box">
            <strong>문의:</strong> ☎1350 (보건복지상담) / ☎1355 (국민연금공단) / 주민센터 담당자
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청자격, 급여 단가, 장기요양 전환 기준까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/disability-activity-support" className="btn-cta">
            장애인활동지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 장애인활동지원신청절차주민센터수급자격결정단계SpokeContent: SpokeData = {
  h1: '장애인활동지원 신청 절차, 주민센터 방문부터 수급자격 결정까지',
  breadcrumb: '신청절차주민센터수급자격결정단계',
  description:
    '장애인활동지원 신청: 주민센터 신청 → 국민연금공단 종합조사 → 수급자격 결정 → 기관 계약. 총 1~2개월 소요. ☎1350·1355 문의. 필요 서류: 신분증·장애인등록증.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '온라인으로도 신청할 수 있나요?',
      a: '복지로(bokjiro.go.kr)에서 온라인 신청도 가능합니다. 다만 종합조사는 국민연금공단이 직접 방문하므로 일정 조율이 필요합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '수급자격을 받지 못하면 이의신청을 할 수 있나요?',
      a: '수급자격 탈락 또는 급여 구간에 이의가 있으면 결정 통보 후 90일 이내 이의신청을 할 수 있습니다. 주민센터 또는 시·군·구청에 문의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '가족이 대신 신청해도 되나요?',
      a: '법정대리인 또는 위임을 받은 대리인이 신청할 수 있습니다. 대리 신청 시 위임장과 대리인 신분증을 지참하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '종합조사는 집에 직접 오나요?',
      a: '네. 국민연금공단 직원이 신청인 가정을 직접 방문하여 일상생활 기능 상태 등을 평가합니다. 방문 일정은 신청 후 공단에서 연락이 옵니다.',
      source: '국민연금공단',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '신청 후 서비스 시작까지 너무 오래 걸리면 어떻게 하나요?',
      a: '긴급 상황이라면 긴급활동지원 신청을 통해 수급자격 결정 전에 임시로 서비스를 이용할 수 있습니다. 주민센터나 ☎1350에 긴급 상황임을 알리세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 장애인활동지원', url: 'https://www.mohw.go.kr/menu.es?mid=a10710040700' },
    { name: '복지로 장애인활동지원', url: 'https://www.bokjiro.go.kr' },
  ],
};
