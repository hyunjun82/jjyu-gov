import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          가해자가 있더라도 <strong>피해 전부 또는 일부를 보상받지 못한 경우</strong>
          국가 범죄피해 구조금을 신청할 수 있습니다.
          단, 가해자로부터 받은 손해배상 금액은 구조금에서 공제됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "가해자가 잡혔는데도 구조금을 받을 수 있나요? 손해배상 소송이랑 중복되나요?"
        가해자가 있는 상황에서 구조금 지급 여부를 정리했습니다.
      </p>

      <section className="detail-card" id="with-offender">
        <h2 className="detail-card-head">가해자가 있을 때 구조금 지급 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>상황</th><th>구조금 가능 여부</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>가해자가 피해 전액 배상한 경우</td>
                <td>신청 불가 (이미 전액 보상)</td>
              </tr>
              <tr>
                <td>가해자가 일부만 배상한 경우</td>
                <td><strong>가능</strong> (나머지 금액 내에서 지급)</td>
              </tr>
              <tr>
                <td>가해자가 배상 능력 없는 경우</td>
                <td><strong>가능</strong></td>
              </tr>
              <tr>
                <td>가해자 미검거·불명 상태</td>
                <td><strong>가능</strong></td>
              </tr>
              <tr>
                <td>피해자에게 중대한 귀책 사유 있는 경우</td>
                <td>신청 불가 또는 감액</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="deduct">
        <h2 className="detail-card-head">손해배상과 구조금 중복 관계</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중복 공제 원칙:</strong> 가해자에게 손해배상을 받은 금액만큼
            구조금에서 공제됩니다. 이중으로 초과 지급은 되지 않습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>구조금 먼저 받은 경우:</strong> 국가가 구조금을 지급한 뒤 가해자에게
            구상권을 행사해 회수합니다. 피해자가 나중에 배상을 받으면 구조금에서 해당 금액이 반환 대상이 됩니다.
          </div>
          <div className="info-box">
            <strong>실질적 포인트:</strong> 가해자가 돈이 없어서 배상을 못 받고 있다면
            구조금을 먼저 신청하는 것이 좋습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="impossible">
        <h2 className="detail-card-head">구조금을 받을 수 없는 경우</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            피해자 본인이 범죄에 관여했거나 피해를 유발한 경우
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            가해자와 긴밀한 친족 관계(예: 가정폭력 등)에서 국가가 지급이 적절하지 않다고
            인정하는 경우 (일부 감액 또는 지급 제외)
          </div>
          <div className="info-box">
            가해자로부터 피해 전액을 이미 배상받은 경우
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            금액, 유족 신청 방법, 2026년 변경 사항 등<br />
            범죄피해구조금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/crime-victim-aid" className="btn-cta">
            범죄피해구조금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 범죄피해구조금가해자있을때SpokeContent: SpokeData = {
  h1: '가해자가 있는데도 국가에서 범죄피해 구조금을 받을 수 있는 경우와 없는 경우',
  breadcrumb: '가해자있을때',
  description:
    '가해자 있어도 피해 일부 미보상 시 구조금 신청 가능. 가해자 배상금 공제. 피해자 귀책 시 불가. 가해자 도주·무자력 시 구조금 먼저 신청 후 국가가 구상권 행사.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '가해자가 잡혔는데도 구조금을 받을 수 있나요?',
      a: '가해자가 있어도 피해를 전부 배상받지 못했다면 구조금을 신청할 수 있습니다. 가해자에게 받은 금액은 구조금에서 공제됩니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '가해자가 배상을 안 해주면 먼저 구조금을 받을 수 있나요?',
      a: '네. 가해자가 배상 능력이 없거나 거부하고 있다면 구조금을 먼저 신청할 수 있습니다. 이후 국가가 가해자에게 구상권을 행사합니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '가해자에게 손해배상 소송을 진행 중인데 구조금도 신청할 수 있나요?',
      a: '소송 진행 중에도 구조금 신청이 가능합니다. 다만 나중에 배상을 받으면 중복 부분은 반환해야 합니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '구조금을 받을 수 없는 경우가 있나요?',
      a: '피해자에게 중대한 귀책 사유가 있거나 가해자로부터 이미 전액 배상을 받은 경우에는 신청이 제한됩니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '가족 간 범죄도 구조금을 받을 수 있나요?',
      a: '친족 관계 범죄의 경우 국가가 지급이 적절하지 않다고 인정하는 경우 지급이 제외되거나 감액될 수 있습니다. 구체적인 사안은 지구심의회에서 판단합니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
  ],
  sources: [
    { name: '법무부', url: 'https://www.moj.go.kr' },
    { name: '찾기쉬운 생활법령정보', url: 'https://easylaw.go.kr' },
    { name: '범죄피해자지원센터', url: 'https://www.kcvc.or.kr' },
  ],
};
