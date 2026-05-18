import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          긴급복지지원은 <strong>주민센터 방문</strong>, <strong>☎129 (보건복지상담센터)</strong>,
          <strong>복지로(bokjiro.go.kr)</strong> 세 가지 채널로 신청할 수 있습니다.
          위기 상황 발생 즉시 신청하면 <strong>당일 또는 다음 날</strong> 지원 결정이 이루어집니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        긴급복지지원의 가장 큰 특징은 '선지원 후확인' 원칙입니다.
        자격 심사 없이 먼저 지원한 뒤 사후에 적격 여부를 확인하므로
        급박한 상황에서 빠르게 도움을 받을 수 있습니다.
      </p>

      <section className="detail-card" id="channel">
        <h2 className="detail-card-head">신청 채널 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>채널</th><th>방법</th><th>운영시간</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>주민센터</strong></td><td>주소지 관할 읍·면·동 방문 신청</td><td>평일 09:00~18:00</td></tr>
              <tr><td><strong>☎129</strong></td><td>보건복지상담센터 전화 신청·연계</td><td>24시간 (긴급)</td></tr>
              <tr><td><strong>복지로</strong></td><td>bokjiro.go.kr 온라인 신청</td><td>24시간</td></tr>
              <tr><td><strong>시·군·구청</strong></td><td>사회복지과 방문 신청</td><td>평일 09:00~18:00</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="step">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 위기 상황 발생 → ☎129 또는 주민센터 신고·신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 담당 공무원 현장 확인 (방문 또는 전화)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 선지원 결정 (당일~익일) — 생계비·의료비·주거비 등
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>4단계:</strong> 계좌로 지원금 입금 또는 현물 지급
          </div>
          <div className="info-box">
            <strong>5단계:</strong> 사후 적격 조사 (소득·재산 기준 확인)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신분증:</strong> 주민등록증·운전면허증 등
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>금융정보 동의서:</strong> 소득·재산 조회 동의 (담당자 제공)
          </div>
          <div className="info-box">
            <strong>위기 입증 자료:</strong> 해고통지서·폐업신고서·진단서·사고증명서 등 (가능한 경우 제출)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원금액, 신청자격, 의료·주거 추가 지원까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/emergency-welfare-support" className="btn-cta">
            긴급복지지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 긴급복지지원신청방법주민센터129복지로절차SpokeContent: SpokeData = {
  h1: '긴급복지지원 신청방법, 주민센터·129 전화상담·복지로 3단계 절차',
  breadcrumb: '신청방법주민센터129복지로절차',
  description:
    '긴급복지지원 신청: 주민센터 방문·☎129·복지로 온라인. 선지원 후확인 원칙으로 당일~익일 지급. 필요 서류: 신분증·금융정보동의서·위기 입증 자료.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '밤에 위기 상황이 생기면 어떻게 하나요?',
      a: '☎129 (보건복지상담센터)는 24시간 운영됩니다. 야간에도 전화하면 긴급 지원 연계가 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '온라인 신청도 빠르게 처리되나요?',
      a: '복지로에서 신청하면 담당 공무원에게 연결되어 처리됩니다. 급박한 상황이라면 ☎129 전화가 가장 빠릅니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '서류 없이도 신청할 수 있나요?',
      a: '긴급복지지원은 선지원 원칙이므로 서류가 없어도 신청 가능합니다. 위기 상황을 구두로 설명하면 담당자가 현장 확인 후 지원을 결정합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '주소지가 아닌 곳에서도 신청할 수 있나요?',
      a: '원칙적으로 주소지 관할 주민센터에 신청해야 합니다. 주소지 외 지역에서 위기 상황이 발생했다면 현 소재지 주민센터 또는 ☎129에 신고하면 연계 지원이 이루어집니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '지원 결정 후 부적격 판정이 나면 돈을 돌려줘야 하나요?',
      a: '사후 조사에서 부적격으로 판정되면 지원금 환수가 이루어질 수 있습니다. 다만 정말로 위기 상황이었다면 최대한 소명할 수 있으니, 관련 증빙 자료를 잘 보관해두세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 긴급복지지원', url: 'https://www.mohw.go.kr/menu.es?mid=a10708010100' },
    { name: '복지로 긴급복지 신청', url: 'https://www.gov.kr/portal/rcvfvrSvc/dtlEx/135200005003' },
  ],
};
