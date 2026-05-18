import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          암환자 의료비 지원 신청은 <strong>주소지 관할 보건소(읍·면·동)</strong> 방문 또는
          <strong>국립암센터</strong>에서 할 수 있습니다.
          준비 서류는 <strong>암 진단서, 의료비 영수증, 소득 증빙 서류</strong>이며,
          신청 후 자격 확인을 거쳐 지원이 결정됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        신청 전 국립암센터 암정보상담센터(☎1577-8899)에 전화하면 필요 서류와 절차를
        미리 안내받을 수 있습니다. 지원은 신청일 이후 발생한 의료비부터 적용되므로 빠른 신청이 중요합니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">신청 절차 4단계</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>방법</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>사전 안내 확인</td><td>☎1577-8899 (암정보상담센터) 또는 보건소 문의</td></tr>
              <tr><td><strong>2단계</strong></td><td>서류 준비</td><td>진단서·영수증·소득 증빙 등 준비</td></tr>
              <tr><td><strong>3단계</strong></td><td>보건소 방문·신청</td><td>주소지 관할 보건소 방문 또는 국립암센터 신청</td></tr>
              <tr><td><strong>4단계</strong></td><td>자격 확인 및 지원 결정</td><td>소득 조사 후 지원 여부·금액 통보</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>암 진단서:</strong> 해당 병원에서 발급, 암종·진단일 명시
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>의료비 영수증:</strong> 지원 신청할 암 치료 관련 의료비 영수증
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 증빙:</strong> 건강보험료 납부확인서, 소득증명서 등
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신분증:</strong> 신청인 주민등록증·운전면허증
          </div>
          <div className="info-box">
            <strong>통장 사본:</strong> 지원금 수령 계좌
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="channels">
        <h2 className="detail-card-head">신청 채널</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>보건소 방문:</strong> 주소지 관할 읍·면·동 보건소 — 가장 일반적인 방법
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>국립암센터:</strong> 경기도 고양시 국립암센터 내방 신청
          </div>
          <div className="info-box">
            <strong>문의:</strong> 국립암센터 암정보상담센터 ☎1577-8899
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            성인·소아 지원 기준, 산정특례 중복 여부까지<br />
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

export const 암환자의료비지원신청방법보건소접수서류절차SpokeContent: SpokeData = {
  h1: '암환자 의료비 지원 신청 방법, 보건소 접수 절차와 필요 서류 총정리',
  breadcrumb: '신청방법보건소접수서류절차',
  description:
    '암환자 의료비 지원 신청: 주소지 관할 보건소 방문 또는 국립암센터. 준비 서류: 암 진단서·의료비 영수증·소득 증빙·통장 사본. 사전 문의 ☎1577-8899. 신청일 이후 의료비부터 적용.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '보건소에 전화로 신청할 수 있나요?',
      a: '원칙적으로 보건소 방문 신청이 필요합니다. 단, 거동이 불편한 경우 보건소에 전화하여 우편·대리 신청 가능 여부를 문의하거나, 국립암센터 ☎1577-8899에서 안내를 받으세요.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '진단서는 최신 것이어야 하나요?',
      a: '일반적으로 발급 후 일정 기간(보통 3~6개월) 이내의 진단서를 요구합니다. 보건소마다 다를 수 있으므로 방문 전 미리 확인하세요.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '매년 갱신 신청을 해야 하는 건가요?',
      a: '네. 암환자 의료비 지원은 매년 갱신 신청이 필요합니다. 갱신 시에도 자격 확인(소득·암 치료 지속 여부)이 이루어지며, 지원 기간이 남아 있어야 합니다.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '이미 발생한 의료비도 소급해서 받을 수 있나요?',
      a: '원칙적으로 신청일 이후 발생한 의료비부터 지원됩니다. 소급 지원은 제한적이므로 암 진단 후 가능한 한 빨리 신청하는 것이 중요합니다.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
    {
      q: '다른 시·군·구로 이사하면 재신청해야 하나요?',
      a: '네. 주소지가 변경되면 새 주소지 관할 보건소에 다시 신청해야 합니다. 이전 지원 기록은 인계되므로 남은 지원 기간이 유지됩니다.',
      source: '국립암센터',
      sourceUrl: 'https://www.ncc.re.kr',
    },
  ],
  sources: [
    { name: '국립암센터 암환자 의료비 지원 안내', url: 'https://www.ncc.re.kr/cancerStatsView.ncc?bbsnum=613' },
    { name: '국립암센터', url: 'https://www.ncc.re.kr' },
  ],
};
