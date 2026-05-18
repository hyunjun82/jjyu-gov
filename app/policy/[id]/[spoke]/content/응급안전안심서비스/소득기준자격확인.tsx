import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2024년 개선 이후 독거노인은 <strong>소득 기준이 완전히 폐지</strong>되어
          만 65세 이상 실제 독거 어르신이라면 소득·재산과 관계없이 신청할 수 있습니다.
          기존에는 소득·재산 제한이 있어 신청하지 못했던 분들도 지금은 신청이 가능합니다.
          장애인은 <strong>거주 여건을 고려</strong>해 대상을 선정합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        2026 응급안전안심서비스의 자격 기준을 소득·연령·거주 형태별로 정리했습니다.
        이전에 소득 기준으로 탈락한 경험이 있다면 지금 다시 신청하면 됩니다.
      </p>

      <section className="detail-card" id="criteria">
        <h2 className="detail-card-head">대상별 자격 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>대상</th><th>연령</th><th>소득 기준</th><th>거주 조건</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>독거노인</strong></td>
                <td>만 65세 이상</td>
                <td>폐지 (2024~)</td>
                <td>실제 독거 (주민등록 무관)</td>
              </tr>
              <tr>
                <td><strong>장애인</strong></td>
                <td>연령 무관</td>
                <td>거주 여건 고려</td>
                <td>장애인 등록 + 거주 여건</td>
              </tr>
              <tr>
                <td><strong>비독거 어르신</strong></td>
                <td>만 65세 이상</td>
                <td>자부담 방식</td>
                <td>가족 동거 가능 (2024 확대)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="before-after">
        <h2 className="detail-card-head">2024 개선 전후 비교</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2023년까지:</strong> 독거노인 소득·재산 기준 충족자만 무상 이용 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2024년부터:</strong> 독거노인 소득 기준 완전 폐지 → 만 65세+ 실제 독거이면 누구나
          </div>
          <div className="info-box">
            <strong>추가 확대:</strong> 비독거 어르신도 자부담 방식으로 이용 가능 (낮 시간 혼자 있는 경우 등)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">자격 확인 — 이런 경우도 신청 가능</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>주민등록상 자녀 동거:</strong> 실제로는 혼자 산다면 신청 가능 (현장 실사로 확인)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>아파트 거주:</strong> 주거 형태와 무관하게 신청 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>이전 탈락:</strong> 2023년 이전 소득 기준으로 탈락했다면 지금 재신청 가능
          </div>
          <div className="info-box">
            <strong>장기요양 등급자:</strong> 등급 유무와 관계없이 중복 신청 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            설치 장비 종류, 응급 감지 방식, 신청 절차까지<br />
            응급안전안심서비스 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/elderly-emergency-safety" className="btn-cta">
            독거노인·장애인 응급안전안심서비스 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 응급안전안심서비스소득기준자격확인SpokeContent: SpokeData = {
  h1: '소득기준 없이 누구나 되나, 2026 응급안전안심서비스 자격 기준',
  breadcrumb: '소득기준자격확인',
  description:
    '2024년부터 독거노인 소득 기준 완전 폐지. 만 65세 이상 실제 독거 어르신이면 소득·재산 무관하게 신청 가능. 주민등록상 동거 가족이 있어도 실제 독거이면 OK. 장기요양 등급자도 중복 신청 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '소득이 높아도 응급안전안심서비스를 신청할 수 있나요?',
      a: '네. 2024년부터 독거노인 소득 기준이 폐지됐습니다. 만 65세 이상 실제 독거 어르신이면 소득·재산과 관계없이 무상으로 신청할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '2023년 이전에 소득 기준으로 탈락했는데 다시 신청할 수 있나요?',
      a: '네. 2024년부터 소득 기준이 폐지됐으므로 지금 다시 신청하면 됩니다. 1566-3232 또는 행정복지센터에서 상담하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '주민등록상 자녀와 같은 집에 살아도 신청할 수 있나요?',
      a: '실제로 혼자 거주한다면 주민등록상 동거 가족이 있어도 신청이 가능합니다. 현장 실사로 실제 거주 여건을 확인합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '노인장기요양보험 등급을 받은 분도 신청할 수 있나요?',
      a: '네. 장기요양 등급 유무와 관계없이 신청할 수 있습니다. 두 서비스는 성격이 달라 중복 이용이 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '가족이 동거 중인데 낮 시간에만 혼자 있어요. 신청할 수 있나요?',
      a: '2024년부터 비독거 어르신도 자부담 방식으로 이용할 수 있게 됐습니다. 정확한 자부담 금액은 1566-3232에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '중앙모니터링센터 1566-3232', url: 'https://www.silvercare.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
