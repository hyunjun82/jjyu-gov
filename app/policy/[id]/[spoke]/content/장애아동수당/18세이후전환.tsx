import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          아이가 <strong>만 18세가 되면 장애아동수당은 자동 종료</strong>됩니다.
          이후 경증이면 <strong>장애수당</strong>(월 6만원),
          중증이면 <strong>장애인연금</strong>(월 최대 43만 9,700원)을
          별도로 신청해야 합니다. 자동 전환은 되지 않습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "아이가 곧 18세인데 장애아동수당은 계속 나오나요? 성인이 되면 어떤 수당을 받나요?"
        18세 이후 전환 과정을 정리했습니다.
      </p>

      <section className="detail-card" id="transition">
        <h2 className="detail-card-head">18세 도달 시 전환 경로</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>장애 정도</th><th>18세 미만</th><th>18세 이후</th><th>월 지급액</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>경증</strong></td>
                <td>장애아동수당 (11만원)</td>
                <td>장애수당 신청</td>
                <td>6만원</td>
              </tr>
              <tr>
                <td><strong>중증</strong></td>
                <td>장애아동수당 (17~22만원)</td>
                <td>장애인연금 신청</td>
                <td>최대 43만 9,700원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="timing">
        <h2 className="detail-card-head">전환 시 주의 사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자동 전환 없음:</strong> 18세 도달 후 성인 수당·연금을 직접 신청해야 합니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 시기:</strong> 18세 생일이 속한 달 또는 이후에 행정복지센터에 신청
          </div>
          <div className="info-box">
            <strong>공백 방지:</strong> 아동수당 종료 전에 미리 성인 수당 신청 일정을 확인하면 수급 공백을 줄일 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="adult-apply">
        <h2 className="detail-card-head">성인 수당 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장애수당(경증):</strong> 거주지 읍·면·동 행정복지센터 또는 복지로(bokjiro.go.kr)
          </div>
          <div className="info-box">
            <strong>장애인연금(중증):</strong> 거주지 읍·면·동 행정복지센터 또는 복지로(bokjiro.go.kr)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급 금액, 중증·경증 차이, 신청 방법 등<br />
            장애아동수당 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/disability-child-allowance" className="btn-cta">
            장애아동수당 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 장애아동수당18세이후전환SpokeContent: SpokeData = {
  h1: '아이가 18세가 되면 장애아동수당이 끊기는지, 성인 수당으로 어떻게 바뀌는지',
  breadcrumb: '18세이후전환',
  description:
    '장애아동수당 18세 도달 시 자동 종료. 경증→장애수당(월 6만원), 중증→장애인연금(최대 43만 9,700원) 별도 신청 필요. 자동 전환 없음. 복지로·행정복지센터 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '18세가 되면 장애아동수당이 자동으로 끊기나요?',
      a: '네, 만 18세 도달 시 장애아동수당은 자동 종료됩니다. 이후 성인 대상 수당을 별도로 신청해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '경증 아동이 18세가 되면 어떤 수당을 받나요?',
      a: '경증이면 장애수당(월 6만원)을 신청할 수 있습니다. 수급자 또는 차상위계층 조건이 필요합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '중증 아동이 18세가 되면 어떤 연금을 받나요?',
      a: '중증이면 장애인연금을 신청할 수 있습니다. 2026년 기준 월 최대 43만 9,700원을 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '자동으로 전환되지 않으면 언제 신청해야 하나요?',
      a: '18세 생일이 속한 달 또는 이후에 신청해야 합니다. 미리 행정복지센터에 확인해 수급 공백을 줄이는 것이 좋습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '성인 수당 신청 시 필요한 서류는 무엇인가요?',
      a: '장애인등록증, 신분증, 소득재산신고서, 금융정보 동의서가 필요합니다. 행정복지센터에서 안내받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
