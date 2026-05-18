import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가정양육수당은 <strong>복지로(bokjiro.go.kr)</strong> 온라인 신청 또는
          <strong>주민센터(읍·면·동) 방문 신청</strong>으로 접수할 수 있습니다.
          출생신고와 동시에 복지 서비스를 한 번에 신청하는 <strong>'행복출산 원스톱 서비스'</strong>도
          이용 가능합니다. 매월 25일 보호자 계좌로 입금됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        신청일 기준으로 지급되며 소급 적용은 원칙적으로 되지 않습니다.
        아이가 만 24개월이 되는 시점에 바로 신청하거나, 출생 시 일괄 신청해 두면 자동 전환됩니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">신청 절차 4단계</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>방법</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>자격 확인</td><td>만 24~86개월 미만 아동, 어린이집·유치원 미이용</td></tr>
              <tr><td><strong>2단계</strong></td><td>신청</td><td>복지로 온라인 or 주민센터 방문</td></tr>
              <tr><td><strong>3단계</strong></td><td>서류 제출</td><td>신분증, 통장 사본 (방문 시)</td></tr>
              <tr><td><strong>4단계</strong></td><td>지급 개시</td><td>신청일 기준 익월 25일부터 입금</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="channels">
        <h2 className="detail-card-head">신청 채널별 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>복지로 온라인:</strong> bokjiro.go.kr → 서비스 신청 → 복지급여 신청 → 양육수당
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주민센터 방문:</strong> 거주지 읍·면·동 주민센터 → 가정양육수당 신청서 작성·제출
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>행복출산 원스톱:</strong> 출생신고 시 주민센터에서 양육수당·아동수당·부모급여 등 일괄 신청 가능
          </div>
          <div className="info-box">
            <strong>정부24:</strong> gov.kr → 양육수당 신청 (복지로 연계)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>공통:</strong> 사회보장급여 신청서 (현장 작성 가능)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청인 신분증:</strong> 주민등록증·운전면허증·여권
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>통장 사본:</strong> 보호자 계좌 (지급받을 계좌)
          </div>
          <div className="info-box">
            <strong>기타:</strong> 위임장·대리인 신분증 (대리 신청 시)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급 금액, 어린이집 전환, 부모급여 차이까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/home-childcare-allowance" className="btn-cta">
            가정양육수당 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 가정양육수당신청방법복지로주민센터절차SpokeContent: SpokeData = {
  h1: '가정양육수당 신청 방법, 복지로·주민센터 절차와 필요 서류 한눈에',
  breadcrumb: '신청방법복지로주민센터절차',
  description:
    '가정양육수당 신청: 복지로(bokjiro.go.kr) 온라인 또는 주민센터 방문. 출생신고 시 행복출산 원스톱 일괄 신청 가능. 신분증·통장 사본 지참. 신청일 기준 익월 25일 입금.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '복지로에서 신청하면 바로 처리되나요?',
      a: '복지로 온라인 신청 후 시·군·구에서 자격 확인 절차를 거칩니다. 통상 신청 후 1~2주 이내에 처리되며, 지급은 신청일이 속한 달 또는 다음 달 25일에 이루어집니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '부모가 아닌 조부모가 신청할 수 있나요?',
      a: '네. 조부모 등 보호자가 신청할 수 있습니다. 대리 신청 시 위임장과 대리인 신분증, 아동의 가족관계증명서를 지참하여 주민센터에 방문하면 됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '이사를 하면 재신청해야 하나요?',
      a: '관내(같은 시·군·구) 이사는 주소 변경 신고만으로 계속 지급됩니다. 타 시·군·구로 이사한 경우에는 새 주소지 주민센터에 이전 신청을 해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '출생신고 전에도 신청할 수 있나요?',
      a: '아닙니다. 출생신고 이후에 신청할 수 있습니다. 출생신고와 동시에 행복출산 원스톱 서비스로 양육수당을 포함한 여러 복지 서비스를 한꺼번에 신청하는 것을 추천합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '25일이 지나도 입금이 안 되면 어디에 문의하나요?',
      a: '보건복지상담센터 ☎129 또는 주민센터로 문의하세요. 계좌 정보가 잘못 등록된 경우 반환 처리 후 재지급됩니다. 정확한 계좌 정보를 사전에 꼭 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 가정양육수당', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
