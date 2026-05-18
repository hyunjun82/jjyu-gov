import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          만 65세가 되면 장애인활동지원 대신 <strong>노인장기요양보험</strong> 신청이 권고됩니다.
          장기요양 등급을 받으면 활동지원은 종료되고, <strong>등급 외</strong> 판정 시에는
          활동지원을 계속 이용할 수 있습니다. 두 제도는 동시 이용이 불가합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        장애인활동지원(복지부)과 노인장기요양(건보공단)은 운영 주체·서비스 내용·급여 시간 등이
        다릅니다. 65세 이후에도 활동지원을 받고 싶다면 장기요양 신청 결과를 확인한 뒤 결정해야 합니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">장애인활동지원 vs 노인장기요양 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>장애인활동지원</th><th>노인장기요양</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대상 연령</strong></td><td>만 6~65세 미만</td><td>만 65세 이상 (또는 노인성 질환자)</td></tr>
              <tr><td><strong>운영 주체</strong></td><td>보건복지부</td><td>국민건강보험공단</td></tr>
              <tr><td><strong>서비스 유형</strong></td><td>활동보조·방문목욕·방문간호</td><td>재가·시설·특별현금급여</td></tr>
              <tr><td><strong>급여 시간</strong></td><td>종합조사 결과로 결정 (더 많음)</td><td>장기요양 등급으로 결정</td></tr>
              <tr><td><strong>동시 이용</strong></td><td colSpan={2} style={{ textAlign: 'center' }}>불가 (둘 중 하나만 선택)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="transition">
        <h2 className="detail-card-head">65세 전환 시 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 만 65세 도달 전 노인장기요양보험 신청 (건보공단 지사 또는 복지로)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 등급판정위원회 심사 — 1~5등급 또는 인지지원등급, 등급 외
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계-A (등급 받은 경우):</strong> 장기요양 서비스 이용 → 활동지원 종료
          </div>
          <div className="info-box">
            <strong>3단계-B (등급 외 판정):</strong> 활동지원 계속 이용 가능 — 기관에 등급 외 증명서 제출
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tip">
        <h2 className="detail-card-head">활동지원이 유리한 경우</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>급여 시간이 더 많다:</strong> 동일 장애 상태라면 활동지원 급여 시간이 장기요양보다 많은 경우가 많습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사회참여 지원:</strong> 장애인활동지원은 외출·사회참여 보조까지 폭넓게 지원합니다.
          </div>
          <div className="info-box">
            <strong>등급 외 판정 유도:</strong> 장기요양 등급 외 판정을 받으면 활동지원이 유지됩니다. 등급판정 신청 전 전문가 상담 권장.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청자격, 급여 단가, 신청 절차까지<br />
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

export const 장애인활동지원노인장기요양65세이후서비스전환차이SpokeContent: SpokeData = {
  h1: '장애인활동지원 vs 노인장기요양, 65세 이후 서비스 전환과 차이점',
  breadcrumb: '노인장기요양65세이후서비스전환차이',
  description:
    '만 65세 도달 시 노인장기요양 신청 권고. 등급 받으면 활동지원 종료, 등급 외 판정 시 활동지원 유지. 동시 이용 불가. 활동지원이 급여 시간·사회참여 범위 더 넓음.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '65세가 되면 활동지원이 자동으로 끊기나요?',
      a: '자동 종료되지 않습니다. 장기요양 등급을 받은 경우에 한해 활동지원이 종료됩니다. 장기요양 신청을 하지 않거나 등급 외 판정을 받으면 65세 이후에도 활동지원을 계속 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장기요양과 활동지원을 동시에 받을 수 없나요?',
      a: '원칙적으로 동시 이용이 불가합니다. 장기요양 급여를 받으면 활동지원은 종료됩니다. 둘 중 본인에게 유리한 서비스를 선택해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장기요양 등급 외 판정을 받으면 어떻게 되나요?',
      a: '등급 외 판정을 받으면 활동지원을 계속 이용할 수 있습니다. 담당 활동지원 기관에 등급 외 판정 결과를 제출하면 서비스가 유지됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '활동지원을 유지하고 싶으면 장기요양 신청을 안 하면 되나요?',
      a: '만 65세 이상도 장기요양 신청을 하지 않으면 활동지원을 계속 받을 수 있습니다. 다만 지자체 담당자가 신청을 권고할 수 있습니다. 본인의 상황에 맞게 전문가와 상담 후 결정하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '65세 이후에도 활동지원이 장기요양보다 유리한가요?',
      a: '중증 장애인의 경우 활동지원 급여 시간이 장기요양보다 훨씬 많고, 외출·사회참여까지 지원합니다. 단순 신체 기능 지원만 필요하다면 장기요양이 적합할 수 있습니다. 개인 상황에 맞게 비교해보세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 장애인활동지원', url: 'https://www.mohw.go.kr/menu.es?mid=a10710040700' },
    { name: '국민건강보험공단 노인장기요양', url: 'https://www.nhis.or.kr' },
  ],
};
