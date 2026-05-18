import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          장애수당을 받으려면 <strong>만 18세 이상 경증 등록장애인</strong>이면서
          <strong>기초생활 수급자 또는 차상위계층</strong>이어야 합니다.
          세 조건을 모두 충족하면 월 <strong>6만원</strong>이 지급됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "경증 장애인인데 기초수급자입니다. 장애수당을 신청할 수 있나요?"
        신청 자격 3가지 조건을 정리했습니다.
      </p>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">자격 3대 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조건</th><th>기준</th><th>제외 대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>연령</strong></td>
                <td>만 18세 이상</td>
                <td>18세 미만 → 장애아동수당</td>
              </tr>
              <tr>
                <td><strong>장애 등록</strong></td>
                <td>경증 등록장애인</td>
                <td>중증 → 장애인연금</td>
              </tr>
              <tr>
                <td><strong>소득·재산</strong></td>
                <td>기초수급자 또는 차상위계층</td>
                <td>초과 시 대상 제외</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지급 금액</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>성인 경증 장애수당:</strong> 월 6만원 (수급자·차상위 모두 동일)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지급 방식:</strong> 매월 정기 계좌 입금
          </div>
          <div className="info-box">
            <strong>중증 장애인연금:</strong> 월 최대 43만 9,700원 (별도 제도)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 거주지 읍·면·동 행정복지센터 (연중 신청 가능)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 복지로(bokjiro.go.kr) 신청
          </div>
          <div className="info-box">
            <strong>준비 서류:</strong> 장애인등록증, 신분증, 소득재산신고서, 금융정보 동의서
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            장애수당과 장애인연금 차이, 아동수당 등<br />
            장애수당 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/disability-allowance" className="btn-cta">
            장애수당 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 장애수당성인수급자자격SpokeContent: SpokeData = {
  h1: '경증 등록장애인인데 기초수급자라면 장애수당 신청 자격과 월 지급액 확인',
  breadcrumb: '성인수급자자격',
  description:
    '장애수당 자격: 만 18세 이상 + 경증 등록장애인 + 기초수급자·차상위계층. 월 6만원 지급. 중증은 장애인연금(월 최대 43만 9,700원). 복지로·행정복지센터 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '경증 장애인이면서 기초수급자인데 장애수당을 받을 수 있나요?',
      a: '네, 만 18세 이상, 경증 등록장애인, 기초수급자 조건을 모두 충족하면 월 6만원을 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '차상위계층도 장애수당을 받을 수 있나요?',
      a: '네, 기초수급자와 차상위계층 모두 동일하게 월 6만원을 지급받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '경증인지 중증인지 어떻게 확인하나요?',
      a: '장애인등록증 또는 장애 정도 판정 결과에서 확인할 수 있습니다. 모르면 행정복지센터에서 안내받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애수당은 언제부터 지급되나요?',
      a: '자격 확인 후 다음 달부터 매월 정기 지급됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '온라인으로도 신청할 수 있나요?',
      a: '네, 복지로(bokjiro.go.kr)에서 온라인 신청이 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
