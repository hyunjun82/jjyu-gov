import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민취업지원제도는 <strong>1유형(저소득층)</strong>과 <strong>2유형(일반층)</strong>으로 나뉩니다.
          1유형은 소득·재산 기준을 충족하는 저소득층에게 구직촉진수당(월 60만원×6개월)을 지급하고,
          2유형은 수당 없이 취업 지원 서비스만 제공합니다.
          신청은 고용24(work24.go.kr) 온라인 또는 고용센터 방문으로 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        두 유형 모두 1:1 상담·직업훈련·일경험 등 통합 취업 지원 서비스를 1년간 받습니다.
        고용보험 미가입자도 참여 가능하며, 구직급여(실업급여)와는 별개 제도입니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">1유형 vs 2유형 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>1유형 (저소득)</th><th>2유형 (일반)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>구직촉진수당</strong></td><td>월 60만원 × 6개월</td><td>없음</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>중위소득 60% 이하 (청년 120%)</td><td>중위소득 100% 이하 또는 특정 취약계층</td></tr>
              <tr><td><strong>재산 기준</strong></td><td>4억원 이하 (청년 5억원)</td><td>별도 적용</td></tr>
              <tr><td><strong>취업 지원 서비스</strong></td><td>동일 (1년, 연장 최대 6개월)</td><td>동일</td></tr>
              <tr><td><strong>취업성공수당</strong></td><td>최대 150만원</td><td>해당 없음 (일부 예외)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>고용24(work24.go.kr) 접속 또는 거주지 고용센터 방문</td></tr>
              <tr><td><strong>2단계</strong></td><td>취업지원신청서 작성 및 제출 (온라인 또는 방문)</td></tr>
              <tr><td><strong>3단계</strong></td><td>유형 심사 및 자격 확인 (소득·재산 조회)</td></tr>
              <tr><td><strong>4단계</strong></td><td>참여 결정 통보 후 취업활동계획 수립 (1:1 상담)</td></tr>
              <tr><td><strong>5단계</strong></td><td>서비스 이용 시작 (훈련·상담·일경험 등)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="eligible">
        <h2 className="detail-card-head">2유형 포함 대상 (취업 취약계층)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>특정 취약계층:</strong> 결혼이민자, 노숙인, 수급자·차상위계층 등
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>청년:</strong> 만 18~34세 중 구직·취업 지원이 필요한 경우 (소득 기준 완화)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중장년:</strong> 만 35~69세 중 구직 활동 중인 경우
          </div>
          <div className="info-box">
            <strong>고용보험 미가입자:</strong> 자영업자·프리랜서 등도 참여 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            구직촉진수당 금액, 취업성공수당, 실업급여와 차이까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/national-employment-support" className="btn-cta">
            국민취업지원제도 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 국민취업지원제도1유형2유형자격차이신청방법SpokeContent: SpokeData = {
  h1: '국민취업지원제도 1유형·2유형 차이, 자격 기준과 고용24 신청 방법',
  breadcrumb: '1유형2유형자격차이신청방법',
  description:
    '국민취업지원 1유형(저소득·수당 月60만) vs 2유형(일반·수당 없음). 1유형 소득 중위60% 이하, 재산 4억 이하. 신청: 고용24(work24.go.kr) 또는 고용센터. 고용보험 미가입자 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '1유형과 2유형 중 어느 것을 신청해야 하나요?',
      a: '소득·재산 기준을 충족하면 1유형으로 자동 분류되어 수당을 받을 수 있습니다. 기준을 초과하면 2유형으로 분류됩니다. 신청 시 자격 심사를 거쳐 유형이 결정되므로 본인이 선택하지 않아도 됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '고용보험에 가입되지 않은 프리랜서도 신청할 수 있나요?',
      a: '네. 국민취업지원제도는 고용보험 미가입자(자영업자·프리랜서·농업인 등)도 참여 가능합니다. 실업급여와 달리 고용보험 가입이 필수 요건이 아닙니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '온라인으로 신청하면 고용센터를 꼭 방문해야 하나요?',
      a: '온라인(고용24)으로 신청서를 제출해도, 취업활동계획 수립을 위해 고용센터를 1회 이상 방문해야 합니다. 이후 상담은 비대면으로도 진행 가능합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '2유형은 어떤 서비스를 받나요?',
      a: '2유형은 수당 지급은 없지만 1:1 취업상담, 직업훈련 연계, 일경험 프로그램, 취업알선 등 취업 지원 서비스를 1년간 무료로 받을 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '실업급여를 받으면서 국민취업지원을 동시에 신청할 수 있나요?',
      a: '실업급여(구직급여)를 수급 중이면 국민취업지원 1유형의 구직촉진수당은 받을 수 없습니다. 다만 2유형 서비스는 병행 가능할 수 있으니 고용센터에서 확인하세요.',
      source: '고용노동부',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 국민취업지원제도', url: 'https://www.work24.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
  ],
};
