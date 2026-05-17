import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>2026년 5월 현재, 기초연금은 반드시 직접 신청해야 합니다.</strong>
          신청하지 않으면 자동으로 지급되지 않습니다.
          단, 장애인연금 수급자가 만 65세가 되면 기초연금이 자동 지급됩니다.
          정부는 자동 지급 법안을 추진 중이며, 아직 시행 전입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "신청 안 해도 기초연금이 나온다는 소문이 있던데 맞나요?"
        결론부터: 현재는 맞지 않습니다. 신청해야 받을 수 있습니다.
        다만, 정부가 자동 지급 법안을 추진 중이라 앞으로 바뀔 수 있습니다.
      </p>

      <section className="detail-card" id="current">
        <h2 className="detail-card-head">현재 기초연금 — 신청 필수 (자동 지급 X)</h2>
        <div className="detail-card-body">
          <div className="warning-box">
            <strong>신청하지 않으면 기초연금을 받을 수 없습니다.</strong><br />
            만 65세 생일이 지나도 신청하기 전까지는 한 푼도 지급되지 않습니다.
            생일 1개월 전부터 신청이 가능하니, 미리 준비하세요.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>신청 가능 시점:</strong> 만 65세 생일이 속한 달의 1개월 전부터<br />
            <strong>신청 창구:</strong> 주민센터(읍·면·동), 국민연금공단 지사, 복지로(bokjiro.go.kr)
          </div>
        </div>
      </section>

      <section className="detail-card" id="exception">
        <h2 className="detail-card-head">예외 — 장애인연금 수급자는 자동 지급</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8 }}>
            장애인연금을 받고 있던 분이 만 65세가 되면,
            기초연금을 별도로 신청하지 않아도 <strong>자동으로 기초연금이 지급</strong>됩니다.
            이는 두 급여의 연계 처리를 위한 예외 조항입니다.
          </p>
          <table className="compare-table" style={{ marginTop: 12 }}>
            <thead>
              <tr><th>대상</th><th>자동 지급 여부</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>만 65세 이상 일반 어르신</td>
                <td>❌ 직접 신청 필수</td>
              </tr>
              <tr>
                <td>장애인연금 수급자 → 만 65세 도달</td>
                <td>✅ 자동 전환 지급</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="future">
        <h2 className="detail-card-head">앞으로는 자동 지급이 될까요?</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8 }}>
            정부는 2026년 5월 기초연금, 아동수당 등 복지급여 자동 지급 법안 6개를 개정 추진한다고 발표했습니다.
            이 법안이 국회를 통과하면, 정부가 수급 자격을 확인한 경우 신청 없이도 자동 지급됩니다.
          </p>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>현재 상황 (2026.5 기준):</strong> 법안 추진 발표 단계. 아직 국회 통과 전이므로
            기초연금은 여전히 <strong>직접 신청</strong>이 필요합니다.
          </div>
          <div className="warning-box" style={{ marginTop: 12 }}>
            자동 지급 시행 전까지 신청 없이 기다리면 그 기간만큼 연금을 받지 못합니다.
            지금 바로 신청하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="apply-guide">
        <h2 className="detail-card-head">기초연금 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 주민센터 방문:</strong> 주소지 읍·면·동 주민센터에서 신청서 제출
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 국민연금공단 방문·전화:</strong> 가까운 국민연금공단 지사 방문 또는 1355 전화 신청
          </div>
          <div className="info-box">
            <strong>③ 복지로 온라인:</strong> bokjiro.go.kr → 기초연금 신청 (공동인증서 필요)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            수급 자격, 지급액, 감액 기준 등<br />
            기초연금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/basic-pension" className="btn-cta">
            기초연금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 자동지급SpokeContent: SpokeData = {
  h1: '기초연금 신청 안 해도 자동지급 되나요 2026 정확한 답변',
  breadcrumb: '자동지급',
  description: '기초연금은 2026년 현재 반드시 직접 신청해야 받을 수 있습니다. 장애인연금 수급자가 만 65세 되면 자동 전환됩니다. 정부가 자동 지급 법안을 추진 중이나 아직 시행 전입니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기초연금은 신청 안 해도 자동으로 나오나요?',
      a: '아니요. 2026년 5월 현재는 반드시 직접 신청해야 합니다. 만 65세 생일이 지나도 신청하지 않으면 지급되지 않습니다.',
      source: '보건복지부 공식 인스타그램',
      sourceUrl: 'https://www.instagram.com/mohw_kr/',
    },
    {
      q: '장애인연금 받던 분이 65세가 되면 자동으로 기초연금이 나오나요?',
      a: '네. 장애인연금 수급자가 만 65세가 되면 별도 신청 없이 기초연금이 자동 전환 지급됩니다.',
      source: '한겨레 기초연금 자동지급 기사 (2026.05.13)',
      sourceUrl: 'https://www.hani.co.kr/arti/society/rights/1196279.html',
    },
    {
      q: '기초연금 자동 지급 법안이 통과됐나요?',
      a: '2026년 5월 기준 법안 추진 발표 단계입니다. 국회 통과 전이므로 아직 시행되지 않았습니다. 현재는 직접 신청이 필수입니다.',
      source: '한겨레 기초연금 자동지급 기사 (2026.05.13)',
      sourceUrl: 'https://www.hani.co.kr/arti/society/rights/1196279.html',
    },
    {
      q: '기초연금 신청은 어디서 하나요?',
      a: '주소지 주민센터, 국민연금공단 지사(1355), 또는 복지로(bokjiro.go.kr) 온라인으로 신청할 수 있습니다. 만 65세 생일 1개월 전부터 신청 가능합니다.',
      source: '국민연금공단 기초연금 신청 안내',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '기초연금 신청을 늦게 하면 소급해서 받을 수 있나요?',
      a: '신청한 달부터 지급됩니다. 소급 지급은 원칙적으로 불가합니다. 늦게 신청할수록 그만큼 받지 못하므로 자격이 생기면 바로 신청하세요.',
      source: '국민연금공단 기초연금 안내',
      sourceUrl: 'https://www.nps.or.kr',
    },
  ],
  sources: [
    { name: '보건복지부 기초연금 공식 안내', url: 'https://www.mohw.go.kr' },
    { name: '국민연금공단 기초연금 신청 안내 (1355)', url: 'https://www.nps.or.kr' },
    { name: '복지로 기초연금 신청', url: 'https://www.bokjiro.go.kr' },
  ],
};
