import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          육아기 근로시간 단축급여는 <strong>고용보험 누리집(ei.go.kr)</strong>에서 온라인으로 신청합니다.
          사업주 확인서와 근로시간 단축 확인서를 먼저 제출받은 후
          본인이 매달 또는 분기별로 급여를 신청합니다.
          거주지 관할 고용센터 방문 신청도 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        단축 시작 전 사업주의 승인이 필요합니다.
        급여 신청은 자동으로 처리되지 않으므로 단축 기간 동안 정기적으로 신청해야 합니다.
        문의는 고용노동부 콜센터 ☎1350으로 합니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">신청 절차 5단계</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>방법</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>사업주 승인</td><td>근로시간 단축 신청서 → 사업주 서면 승인</td></tr>
              <tr><td><strong>2단계</strong></td><td>고용센터 확인</td><td>고용보험 누리집(ei.go.kr) 또는 고용센터 방문</td></tr>
              <tr><td><strong>3단계</strong></td><td>근로시간 단축 시작</td><td>승인된 단축 시간으로 근무 시작</td></tr>
              <tr><td><strong>4단계</strong></td><td>급여 신청</td><td>ei.go.kr → 개인 서비스 → 육아기 단축급여 신청 (매달/분기별)</td></tr>
              <tr><td><strong>5단계</strong></td><td>급여 수령</td><td>신청 후 심사 거쳐 본인 계좌 입금</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>육아기 근로시간 단축 확인서:</strong> 사업주가 작성·확인 (고용센터 제출)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>통상임금 확인서:</strong> 급여 계산을 위한 통상임금 증빙
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자녀 증빙:</strong> 가족관계증명서 또는 주민등록등본
          </div>
          <div className="info-box">
            <strong>통장 사본:</strong> 급여 수령 계좌
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="channel">
        <h2 className="detail-card-head">신청 채널</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> ei.go.kr → 개인 서비스 → 육아기 근로시간 단축급여
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 거주지 관할 고용센터 직접 방문
          </div>
          <div className="info-box">
            <strong>문의:</strong> 고용노동부 ☎1350
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            급여 계산, 신청 자격, 육아휴직과 차이까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/parental-work-reduction-pay" className="btn-cta">
            육아기 근로시간 단축급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 육아기근로시간단축급여신청방법eiGovKr절차SpokeContent: SpokeData = {
  h1: '육아기 근로시간 단축급여 신청 방법, ei.go.kr 절차와 필요 서류',
  breadcrumb: '신청방법eiGovKr절차',
  description:
    '육아기 근로시간 단축급여 신청: ei.go.kr 또는 고용센터 방문. 사업주 승인 → 확인서 제출 → 매달/분기별 급여 신청. 준비 서류: 단축 확인서·통상임금 확인서·가족관계증명서·통장 사본. ☎1350.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '사업주가 단축 신청을 거부하면 어떻게 하나요?',
      a: '사업주는 정당한 사유(대체 인력 채용 불가 등)가 없는 한 거부할 수 없습니다. 거부 시 ☎1350(고용노동부)이나 가까운 고용센터에 상담을 받고, 필요시 진정을 제기할 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '급여 신청을 한 달 늦게 했으면 이전 달 것도 받을 수 있나요?',
      a: '소급 신청이 가능한 경우도 있지만, 늦어지면 불이익이 생길 수 있습니다. 단축 시작 후 가능한 빨리 신청하는 것이 좋습니다. 정확한 소급 기준은 ☎1350에 문의하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '단축 기간 중 회사를 그만두면 급여는 어떻게 되나요?',
      a: '퇴직 시 단축급여는 퇴직일 기준으로 종료됩니다. 이미 신청하거나 지급된 급여는 정산 후 처리됩니다. 퇴직 전 고용센터에 변경 신고를 해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '매달 신청해야 하나요, 아니면 한 번만 하면 되나요?',
      a: '급여는 단축 기간 동안 매달 또는 분기별로 신청해야 합니다. 한 번 신청한다고 자동으로 지급되지 않으므로 정기적으로 신청하는 것을 잊지 마세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '육아휴직 후 복직해서 단축급여를 신청할 수 있나요?',
      a: '네. 육아휴직 후 복직해서 근로시간을 단축하는 경우에도 육아기 근로시간 단축급여를 신청할 수 있습니다. 육아휴직과 단축급여의 합산 사용 기간은 자녀당 최대 3년입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 육아기 근로시간 단축급여', url: 'https://www.moel.go.kr' },
    { name: '고용보험 누리집', url: 'https://www.ei.go.kr' },
  ],
};
