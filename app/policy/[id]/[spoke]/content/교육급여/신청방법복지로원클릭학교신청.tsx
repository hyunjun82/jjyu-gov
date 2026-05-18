import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          교육급여는 <strong>복지로(bokjiro.go.kr)</strong>,
          <strong>교육비 원클릭(oneclick.neis.go.kr)</strong>,
          <strong>읍·면·동 주민센터 방문</strong> 세 가지 방법으로 신청합니다.
          교육비 원클릭 신청은 학교를 통해 한 번에 여러 교육비 지원을 동시 신청할 수 있어 편리합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        매년 3~4월 새 학년도가 시작되면 학교에서 교육비 지원 신청 안내가 발송됩니다.
        신청 기간을 놓쳐도 연중 수시 신청이 가능하지만, 3월에 신청하는 것이 지원을 빨리 받는 방법입니다.
      </p>

      <section className="detail-card" id="channel">
        <h2 className="detail-card-head">신청 채널 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>채널</th><th>방법</th><th>특징</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>복지로</strong></td><td>bokjiro.go.kr → 복지서비스 신청 → 교육급여</td><td>24시간 온라인 신청</td></tr>
              <tr><td><strong>교육비 원클릭</strong></td><td>oneclick.neis.go.kr → 교육급여 신청</td><td>교육비 관련 여러 지원 동시 신청</td></tr>
              <tr><td><strong>주민센터 방문</strong></td><td>거주지 읍·면·동 행정복지센터 방문</td><td>서류 지참, 담당자 도움 받을 수 있음</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">복지로 온라인 신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>bokjiro.go.kr 접속 → 로그인 (공동인증서·간편인증)</td></tr>
              <tr><td><strong>2단계</strong></td><td>복지서비스 신청 → 복지급여 신청 → 교육급여 선택</td></tr>
              <tr><td><strong>3단계</strong></td><td>가구원 정보·소득·재산 정보 입력</td></tr>
              <tr><td><strong>4단계</strong></td><td>신청서 제출 → 처리 결과 문자·복지로 내 알림 확인</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기본:</strong> 신분증 (주민센터 방문 시), 재직·사업자 증명서류
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 증빙:</strong> 근로소득원천징수영수증 또는 건강보험료 납부확인서
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재산 증빙:</strong> 임대차계약서, 금융정보 조회 동의서
          </div>
          <div className="info-box">
            <strong>온라인 신청 시:</strong> 공동인증서(공인인증서) 또는 간편인증 필요 — 서류는 공무원이 행정정보 공동이용으로 확인
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 소득 기준, 고교 무상교육 중복까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/education-benefit" className="btn-cta">
            교육급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 교육급여신청방법복지로원클릭학교신청SpokeContent: SpokeData = {
  h1: '교육급여 신청 방법, 복지로·교육비 원클릭·주민센터 3가지 채널 절차',
  breadcrumb: '신청방법복지로원클릭학교신청',
  description:
    '교육급여 신청: 복지로(bokjiro.go.kr), 교육비 원클릭(oneclick.neis.go.kr), 읍면동 주민센터 방문 3가지 채널. 매년 3~4월 안내, 연중 수시 신청 가능. ☎1544-9654.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '교육비 원클릭과 복지로는 어떻게 다른가요?',
      a: '복지로는 복지급여(교육급여 포함) 전반을 신청하는 포털이고, 교육비 원클릭은 교육청 시스템으로 급식비·교육비·방과후바우처 등 교육 관련 지원을 한 번에 신청할 수 있습니다. 교육비 원클릭에서 교육급여도 신청 가능합니다.',
      source: '교육부',
      sourceUrl: 'https://oneclick.neis.go.kr',
    },
    {
      q: '학교에서 신청서를 주는 건가요?',
      a: '매년 3~4월 새 학기가 시작되면 학교에서 교육비 지원 신청 안내 가정통신문을 발송합니다. 이 안내를 통해 교육비 원클릭에서 신청하거나 주민센터에 방문할 수 있습니다.',
      source: '교육부',
      sourceUrl: 'https://www.moe.go.kr',
    },
    {
      q: '신청 후 얼마나 기다려야 하나요?',
      a: '신청 후 소득·재산 조사를 거쳐 보통 30~45일 내에 결과가 통보됩니다. 처리 완료 후 바우처가 발급됩니다. 결과는 복지로 알림이나 문자메시지로 안내됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '중간에 이사를 가면 다시 신청해야 하나요?',
      a: '주소지가 변경되면 새 주소지 주민센터에 변경 신고를 해야 합니다. 기존 신청이 취소되는 것은 아니지만, 담당 기관이 바뀌므로 반드시 신고하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '작년에 받았으면 올해는 자동으로 계속 받나요?',
      a: '교육급여는 매년 수급 자격을 재확인합니다. 전년도에 받았더라도 소득·재산이 변동되면 자격이 달라질 수 있으므로, 변동 사항이 생기면 주민센터에 신고해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 교육급여', url: 'https://blog.bokjiro.go.kr/1810' },
    { name: '교육비 원클릭', url: 'https://oneclick.neis.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
