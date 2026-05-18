import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          차상위계층 경증 장애인은 장애수당 <strong>월 6만원</strong> 외에
          차상위 건강보험료 경감, 통신비 감면 등 추가 혜택도 받을 수 있습니다.
          장애수당은 기초수급자와 차상위계층 모두 동일한 금액이 지급됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "차상위계층 경증 장애인인데 장애수당 외에 더 받을 수 있는 지원이 있나요?"
        차상위계층 장애인이 받을 수 있는 추가 지원을 정리했습니다.
      </p>

      <section className="detail-card" id="extra-support">
        <h2 className="detail-card-head">차상위계층 장애인 추가 지원 항목</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>지원 항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>장애수당</strong></td>
                <td>월 6만원 (차상위계층 포함 동일)</td>
              </tr>
              <tr>
                <td><strong>건강보험료 경감</strong></td>
                <td>차상위 건강보험료 50~100% 경감</td>
              </tr>
              <tr>
                <td><strong>통신비 감면</strong></td>
                <td>장애인 통신요금 감면 (이동통신사 신청)</td>
              </tr>
              <tr>
                <td><strong>장애인 활동지원</strong></td>
                <td>중증 대상이나 경증도 일부 조건 충족 시 신청 가능</td>
              </tr>
              <tr>
                <td><strong>에너지바우처</strong></td>
                <td>차상위계층 해당 시 신청 가능 (매년 신청)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="compare-sugeup">
        <h2 className="detail-card-head">기초수급자 vs 차상위계층 장애수당 차이</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기초수급자 경증:</strong> 장애수당 월 6만원 + 기초수급 급여 (생계·의료·주거·교육) 별도 수급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>차상위계층 경증:</strong> 장애수당 월 6만원 + 차상위 건강보험료 경감 등 차상위 혜택
          </div>
          <div className="info-box">
            <strong>장애수당 금액:</strong> 두 계층 모두 동일하게 월 6만원
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장애수당:</strong> 거주지 읍·면·동 행정복지센터 또는 복지로
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>통신비 감면:</strong> 이동통신사 고객센터 또는 대리점
          </div>
          <div className="info-box">
            <strong>에너지바우처:</strong> 매년 신청 기간에 읍·면·동 행정복지센터
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            장애수당 자격, 장애인연금과의 차이 등<br />
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

export const 장애수당차상위추가지원SpokeContent: SpokeData = {
  h1: '장애수당이 월 6만원인 이유와 차상위계층 장애인이 받을 수 있는 추가 지원',
  breadcrumb: '차상위추가지원',
  description:
    '차상위계층 경증 장애인 장애수당 월 6만원(수급자 동일). 추가 지원: 건강보험료 경감·통신비 감면·에너지바우처·장애인 활동지원. 복지로·행정복지센터 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '차상위계층 경증 장애인도 장애수당을 받나요?',
      a: '네, 기초수급자와 차상위계층 모두 월 6만원을 동일하게 받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '차상위계층 장애인이 장애수당 외에 받을 수 있는 추가 혜택은 무엇인가요?',
      a: '차상위 건강보험료 경감, 통신비 감면, 에너지바우처 등이 있습니다. 각 항목은 별도로 신청해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애수당이 6만원밖에 안 되는 이유가 있나요?',
      a: '장애수당은 경증 장애인 보조 수당으로, 중증 장애인 대상의 장애인연금(최대 43만 9,700원)과는 별도로 설계된 소액 보조 지원입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '통신비 감면은 어디서 신청하나요?',
      a: '이동통신사 고객센터나 대리점에서 장애인 등록증을 제출하면 신청할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '에너지바우처도 장애수당처럼 자동으로 받을 수 있나요?',
      a: '에너지바우처는 매년 신청 기간에 별도 신청해야 합니다. 거주지 읍·면·동 행정복지센터에서 신청하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
