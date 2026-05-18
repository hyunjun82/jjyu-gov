import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          장애아동수당은 <strong>만 18세 미만 등록장애아동</strong> 중
          기초생활수급자 또는 차상위계층 가구에 지급됩니다.
          중증은 월 <strong>17만~22만원</strong>, 경증은 월 <strong>11만원</strong>이며
          소득 구분에 따라 금액이 달라집니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "장애아동수당 신청 자격은 어떻게 되고 중증과 경증은 얼마나 받나요?"
        대상 조건과 지급 금액을 한 번에 정리했습니다.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격 3가지</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조건</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>연령</strong></td>
                <td>만 18세 미만</td>
              </tr>
              <tr>
                <td><strong>장애 등록</strong></td>
                <td>경증 또는 중증 등록장애아동</td>
              </tr>
              <tr>
                <td><strong>소득·재산</strong></td>
                <td>기초수급자(생계·의료·주거·교육) 또는 차상위계층</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">2026년 지급 금액 (월)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>장애 정도</th><th>생계·의료급여</th><th>주거·교육급여</th><th>차상위</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>중증</strong></td>
                <td>22만원</td>
                <td>17만원</td>
                <td>17만원</td>
              </tr>
              <tr>
                <td><strong>경증</strong></td>
                <td>11만원</td>
                <td>11만원</td>
                <td>11만원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 거주지 읍·면·동 행정복지센터 방문 또는 복지로(bokjiro.go.kr) 온라인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청자:</strong> 보호자(부모·후견인) 명의로 신청
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
            18세 이후 전환, 성인 수당과의 차이 등<br />
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

export const 장애아동수당대상조건금액SpokeContent: SpokeData = {
  h1: '2026년 장애아동수당 대상 조건과 중증·경증·소득별 월 지급액 전체 정리',
  breadcrumb: '대상조건금액',
  description:
    '장애아동수당 자격: 만 18세 미만 + 등록장애아동 + 수급자·차상위. 2026년 금액: 중증 생계·의료 22만원, 주거·교육·차상위 17만원, 경증 11만원. 복지로 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '장애아동수당 신청 자격이 어떻게 되나요?',
      a: '만 18세 미만 등록장애아동이면서 기초생활수급자 또는 차상위계층 가구여야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '경증 아동이 생계급여 수급자 가구라면 얼마를 받나요?',
      a: '경증은 소득 구분에 관계없이 월 11만원을 받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '보호자가 온라인으로 신청할 수 있나요?',
      a: '네, 복지로(bokjiro.go.kr)에서 보호자 명의로 온라인 신청이 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애 등록을 하지 않은 아이도 신청할 수 있나요?',
      a: '아니요, 반드시 장애인 등록(경증 또는 중증)이 완료된 아동이어야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '매년 재심사가 있나요?',
      a: '네, 매년 자격 재심사가 이루어집니다. 소득·재산 변화로 자격이 바뀔 수 있으니 변경 사항 발생 시 행정복지센터에 신고해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
