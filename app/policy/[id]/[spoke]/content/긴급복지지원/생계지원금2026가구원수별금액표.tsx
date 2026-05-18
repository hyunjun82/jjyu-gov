import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 긴급복지지원 생계지원금은 <strong>1인 가구 783,000원</strong>부터
          <strong>6인 가구 2,636,700원</strong>까지 가구원수에 따라 지급됩니다.
          최대 6회(6개월)까지 반복 지원이 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        긴급복지지원은 갑작스러운 위기상황(실직·폐업·중한 질병·가정폭력 등)으로
        생계 유지가 어려워진 가구에 즉시 지원되는 제도입니다.
        소득·재산 기준을 충족하면 빠르게 현금 지원을 받을 수 있습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">2026년 가구원수별 생계지원금</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가구원수</th><th>월 지원금액</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1인</strong></td><td>783,000원</td></tr>
              <tr><td><strong>2인</strong></td><td>1,286,600원</td></tr>
              <tr><td><strong>3인</strong></td><td>1,644,000원</td></tr>
              <tr><td><strong>4인</strong></td><td>1,994,600원</td></tr>
              <tr><td><strong>5인</strong></td><td>2,324,400원</td></tr>
              <tr><td><strong>6인</strong></td><td>2,636,700원</td></tr>
              <tr><td><strong>7인 이상</strong></td><td>1인 추가 시 286,900원씩 가산</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="duration">
        <h2 className="detail-card-head">지원 횟수 및 기간</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기본 지원:</strong> 1회 (월 단위)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>연장 지원:</strong> 위기 상황 지속 시 최대 6회 (6개월)까지 연장 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재지원:</strong> 동일 위기 사유로 2년 이내 재지원 불가 (신규 위기 사유 발생 시 가능)
          </div>
          <div className="info-box">
            <strong>지급 방식:</strong> 현금 (계좌 입금) 또는 현물
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="criteria">
        <h2 className="detail-card-head">소득·재산 기준 (2026년)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 기준:</strong> 기준 중위소득 75% 이하
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재산 기준:</strong> 대도시 2억 4,100만원 / 중소도시 1억 5,200만원 / 농어촌 1억 3,000만원 이하
          </div>
          <div className="info-box">
            <strong>금융재산:</strong> 600만원 이하 (단, 주거지원은 별도 기준 적용)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청자격, 신청방법, 의료·주거 추가 지원까지<br />
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

export const 긴급복지지원생계지원금2026가구원수별금액표SpokeContent: SpokeData = {
  h1: '긴급복지지원 생계지원금, 2026년 가구원수별 최대 370만원 금액표',
  breadcrumb: '생계지원금2026가구원수별금액표',
  description:
    '2026년 긴급복지 생계지원금: 1인 783,000원~6인 2,636,700원. 최대 6회(6개월) 연장 가능. 소득 중위 75% 이하·재산 2억4천만원 이하. 현금 계좌 입금.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '긴급복지지원 생계비를 받은 후 추가 연장이 가능한가요?',
      a: '위기 상황이 지속된다면 최대 6회(6개월)까지 연장 지원을 받을 수 있습니다. 연장 시에는 담당 공무원이 위기 상황을 재확인합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '가구원수는 어떻게 계산하나요?',
      a: '주민등록상 같은 주소에 거주하는 가구원을 기준으로 산정합니다. 실제 생계를 같이 하지 않는 가구원은 제외될 수 있으니 담당자에게 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '재산이 기준을 초과해도 지원받을 수 있나요?',
      a: '재산 기준을 초과하면 원칙적으로 대상에서 제외됩니다. 다만 주거용 부동산의 경우 일부 예외 적용이 가능하니 담당 공무원에게 상담받으세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초생활수급자도 긴급복지지원을 받을 수 있나요?',
      a: '기초생활수급자는 이미 정기적 지원을 받으므로 긴급복지지원 대상에서 원칙적으로 제외됩니다. 다만 기존 급여로 해결되지 않는 새로운 위기 상황에서는 예외 지원이 가능할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '현금 대신 물품(현물)으로도 받을 수 있나요?',
      a: '생계지원의 경우 현금 지급이 원칙이나, 상황에 따라 식료품·의복 등 현물로도 지원될 수 있습니다. 의료·주거 지원은 별도로 신청해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 긴급복지지원', url: 'https://www.mohw.go.kr/menu.es?mid=a10708010100' },
    { name: '복지로 긴급복지 생계지원금', url: 'https://www.bokjiro.go.kr' },
  ],
};
