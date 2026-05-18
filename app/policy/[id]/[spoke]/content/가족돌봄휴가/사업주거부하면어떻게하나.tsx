import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          사업주가 가족돌봄휴가를 거부하면, <strong>거부 사유를 서면으로 요청</strong>한 뒤
          <strong>고용노동부 ☎1350</strong>에 상담하거나 관할 고용센터에 진정을 제기할 수 있습니다.
          사업주는 <strong>"사업 운영에 중대한 지장"</strong>이 있는 경우에만 거부할 수 있으며,
          정당한 사유 없이 거부하면 과태료 대상이 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        가족돌봄휴가는 남녀고용평등법에 따라 보장된 법정 권리입니다.
        거부 자체가 불법은 아니지만, 거부 사유가 정당하지 않으면 법 위반에 해당합니다.
        거부를 당했을 때의 구체적인 절차를 알아두세요.
      </p>

      <section className="detail-card" id="refuse">
        <h2 className="detail-card-head">거부가 허용되는 경우 vs 불법인 경우</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>거부 사유</th><th>적법 여부</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대체 인력 구하기 불가</strong></td><td>적법할 수 있음</td><td>사업 운영에 중대한 지장 입증 필요</td></tr>
              <tr><td><strong>전체 인력 부족</strong></td><td>판단 필요</td><td>사업주가 소명해야 함</td></tr>
              <tr><td><strong>"바쁘다", "어렵다" 구두 거부</strong></td><td>불법 가능성</td><td>구체적 사유 없는 거부는 위법</td></tr>
              <tr><td><strong>불이익·보복 위협</strong></td><td>불법</td><td>남녀고용평등법 위반 — 과태료</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="action">
        <h2 className="detail-card-head">거부 당했을 때 대처 단계</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 거부 사유를 서면(이메일·문자)으로 요청하여 기록 확보
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> ☎1350 (고용노동부 콜센터)에 상담 — 사유가 정당한지 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 관할 고용센터 또는 노동청에 진정(민원) 제기
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 필요 시 노동위원회 구제 신청 또는 소송 (법률구조 ☎132)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="penalty">
        <h2 className="detail-card-head">위반 시 제재</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>정당한 사유 없는 거부:</strong> 500만원 이하 과태료 (남녀고용평등법)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>불이익 처우(해고·강등 등):</strong> 3년 이하 징역 또는 3,000만원 이하 벌금
          </div>
          <div className="info-box">
            <strong>신고처:</strong> 관할 고용노동부 지방청 (1350) 또는 온라인 민원 (minwon.go.kr)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            연 10일 기준, 돌봄 가족 범위, 가족돌봄휴직까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/family-care-leave" className="btn-cta">
            가족돌봄휴가 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 가족돌봄휴가사업주거부하면어떻게하나SpokeContent: SpokeData = {
  h1: '가족돌봄휴가 사업주가 거부하면, 진정 방법과 과태료 대상 기준 정리',
  breadcrumb: '사업주거부하면어떻게하나',
  description:
    '가족돌봄휴가 거부 대처: 사유 서면 요청 → ☎1350 상담 → 고용센터 진정. 정당한 사유 없는 거부는 500만원 이하 과태료. 불이익 처우는 3년 이하 징역. 법정 권리 보장(남녀고용평등법).',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '사업주가 "바쁘니까 안 된다"고 하면 어떻게 하나요?',
      a: '단순히 "바쁘다"는 이유는 가족돌봄휴가 거부의 정당한 사유가 되지 않습니다. 거부 사유를 서면으로 달라고 요청하고, ☎1350에 상담하거나 관할 고용센터에 진정을 제기하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '진정을 내면 회사에서 보복할까봐 걱정됩니다.',
      a: '법적으로 가족돌봄휴가 사용 후 불이익 처우(해고·강등·임금 삭감 등)는 3년 이하 징역 또는 3,000만원 이하 벌금으로 처벌됩니다. 보복이 우려된다면 진정 전에 ☎1350에서 상담을 받고 진행하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '진정을 내면 어떤 절차로 처리되나요?',
      a: '고용센터(노동청)에 진정을 접수하면 조사관이 사업주를 조사합니다. 위반 사실이 확인되면 시정 지시 또는 과태료·형사 처벌 절차가 진행됩니다. 처리 기간은 보통 1~3개월입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '소규모 사업장(5인 미만)에서도 같은 보호를 받나요?',
      a: '5인 미만 사업장에는 남녀고용평등법 일부 조항 적용이 제한될 수 있습니다. 정확한 적용 여부는 ☎1350에서 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '구두로 거부를 당했는데 증거가 없으면 어떻게 하나요?',
      a: '구두 거부는 증거 확보가 어렵습니다. 이후 이메일이나 문자로 휴가 신청과 거부 사실을 기록으로 남겨두세요. 대화 내용을 메모해 두거나 동료 증인을 확보하는 것도 도움이 됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 가족돌봄휴가', url: 'https://www.moel.go.kr' },
    { name: '남녀고용평등법', url: 'https://www.law.go.kr' },
  ],
};
