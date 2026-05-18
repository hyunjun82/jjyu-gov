import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          긴급복지지원은 <strong>갑작스러운 위기상황</strong>으로 생계 유지가 어려운 가구라면
          소득·재산 기준(중위소득 75% 이하) 충족 시 신청할 수 있습니다.
          실직·폐업·중한 질병·가정폭력·사고 등 법령에서 정한 위기 사유가 있어야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        긴급복지지원의 핵심은 '갑작스러운' 위기입니다. 이미 오래된 빈곤 상태보다는
        갑자기 닥친 경제적 어려움에 신속 지원하는 제도입니다.
        위기 상황이 발생하면 빠르게 신청하는 것이 중요합니다.
      </p>

      <section className="detail-card" id="crisis">
        <h2 className="detail-card-head">인정되는 위기 사유</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>위기 유형</th><th>해당 사례</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>주소득자 상실</strong></td><td>사망·가출·행방불명·구금·입원</td></tr>
              <tr><td><strong>실직·폐업</strong></td><td>주소득자 실직, 사업 폐업·화재</td></tr>
              <tr><td><strong>중한 질병·부상</strong></td><td>치료에 장기간 소요되는 질병 또는 사고</td></tr>
              <tr><td><strong>가정폭력·성폭력</strong></td><td>피해로 인한 주거 이탈 등</td></tr>
              <tr><td><strong>화재·재해</strong></td><td>자연재해·화재로 거주지 피해</td></tr>
              <tr><td><strong>복지시설 퇴소</strong></td><td>보호시설에서 퇴소하여 생계 곤란</td></tr>
              <tr><td><strong>기타 위기</strong></td><td>담당자 판단으로 위기 사유 인정 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득·재산 기준 (2026)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득:</strong> 기준 중위소득 75% 이하 (4인 가구 기준 약 430만원 이하)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>재산:</strong> 대도시 2억 4,100만원 / 중소도시 1억 5,200만원 / 농어촌 1억 3,000만원 이하
          </div>
          <div className="info-box">
            <strong>금융재산:</strong> 600만원 이하 (주거지원 별도 기준)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="exclude">
        <h2 className="detail-card-head">신청 불가 대상</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기초생활수급자:</strong> 이미 정기 지원을 받으므로 원칙 제외
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득·재산 기준 초과:</strong> 기준 초과 시 지원 불가
          </div>
          <div className="info-box">
            <strong>2년 이내 동일 사유 재신청:</strong> 동일한 위기 사유로는 2년 이내 재지원 불가
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원금액표, 신청방법, 의료·주거 추가 지원까지<br />
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

export const 긴급복지지원신청자격실직폐업질병위기상황확인SpokeContent: SpokeData = {
  h1: '긴급복지지원 신청자격, 실직·폐업·질병 위기상황 해당 여부 확인',
  breadcrumb: '신청자격실직폐업질병위기상황확인',
  description:
    '긴급복지지원 위기 사유: 실직·폐업·중한 질병·가정폭력·화재 등. 소득 중위 75%·재산 2억4천만원(대도시) 이하. 기초수급자 제외. 갑작스러운 위기에 즉시 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '실직 후 얼마 만에 신청해야 하나요?',
      a: '위기 상황이 발생한 즉시 신청하는 것이 좋습니다. 늦게 신청할수록 지원 개시 시점이 늦어질 수 있으므로 실직·폐업 직후 주민센터나 ☎129에 연락하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '폐업 예정인데 지금 신청할 수 있나요?',
      a: '폐업 예정만으로는 위기 사유로 인정되기 어렵습니다. 실제 폐업 후 생계 유지가 어려워진 상황에서 신청하는 것이 원칙입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '오래된 빈곤 상태도 긴급복지지원을 받을 수 있나요?',
      a: '긴급복지지원은 갑작스러운 위기 상황을 전제로 합니다. 만성적 빈곤의 경우 기초생활보장 수급 신청이 더 적합합니다. 주민센터에서 본인 상황에 맞는 제도를 안내받으세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '가정폭력 피해자도 신청할 수 있나요?',
      a: '네. 가정폭력·성폭력 피해로 주거를 이탈하거나 생계가 어려워진 경우 위기 사유로 인정됩니다. 여성긴급전화 ☎1366 또는 주민센터에서 신청 안내를 받으세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '차량이 있으면 신청이 안 되나요?',
      a: '차량은 재산에 포함됩니다. 단, 생계용 차량이거나 가액이 낮은 경우 예외 적용이 가능합니다. 정확한 판단은 담당 공무원 상담을 통해 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 긴급복지지원', url: 'https://www.mohw.go.kr/menu.es?mid=a10708010100' },
    { name: '찾기쉬운 생활법령정보 긴급복지지원', url: 'https://easylaw.go.kr' },
  ],
};
