import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>장애수당</strong>은 경증 등록장애인(수급자·차상위) 대상 월 6만원이고,
          <strong>장애인연금</strong>은 중증 등록장애인 대상 월 최대 43만 9,700원입니다.
          두 제도는 <strong>중복 수급이 불가</strong>하며, 장애 정도에 따라 해당 제도가 자동으로 결정됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "장애수당과 장애인연금이 어떻게 다른가요? 둘 다 신청할 수 있나요?"
        두 제도의 차이와 중복 여부를 정리했습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">장애수당 vs 장애인연금 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>장애수당</th><th>장애인연금</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>대상</strong></td>
                <td>경증 등록장애인</td>
                <td>중증 등록장애인</td>
              </tr>
              <tr>
                <td><strong>소득 조건</strong></td>
                <td>수급자 또는 차상위계층</td>
                <td>소득인정액 기준 이하</td>
              </tr>
              <tr>
                <td><strong>연령</strong></td>
                <td>만 18세 이상 성인</td>
                <td>만 18세 이상 성인</td>
              </tr>
              <tr>
                <td><strong>월 지급액</strong></td>
                <td>월 6만원</td>
                <td>최대 월 43만 9,700원</td>
              </tr>
              <tr>
                <td><strong>중복 수급</strong></td>
                <td colSpan={2}>중복 불가 (장애 정도에 따라 하나만 적용)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="who-gets-what">
        <h2 className="detail-card-head">어떤 사람이 어떤 제도를 받나</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>경증 장애인:</strong> 장애수당 (월 6만원) — 수급자·차상위 조건 필요
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중증 장애인:</strong> 장애인연금 (월 최대 43만 9,700원) — 소득인정액 기준 이하
          </div>
          <div className="info-box">
            <strong>18세 미만 아동:</strong> 장애아동수당 (월 11만~22만원) — 별도 제도
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 거주지 읍·면·동 행정복지센터 또는 복지로(bokjiro.go.kr)
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
            장애수당 신청 자격, 지급 금액, 신청 방법 등<br />
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

export const 장애수당장애수당연금차이SpokeContent: SpokeData = {
  h1: '경증 장애수당과 장애인연금, 어떻게 다르고 중복 신청이 되는지',
  breadcrumb: '장애수당연금차이',
  description:
    '장애수당(경증·수급자·월 6만원) vs 장애인연금(중증·월 최대 43만 9,700원). 중복 수급 불가. 경증은 수당, 중증은 연금. 18세 미만은 장애아동수당 별도. 복지로 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '장애수당과 장애인연금을 동시에 받을 수 있나요?',
      a: '아니요, 중복 수급이 불가합니다. 경증 장애인은 장애수당, 중증 장애인은 장애인연금만 받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애수당은 얼마인가요?',
      a: '만 18세 이상 경증 등록장애인이 수급자 또는 차상위계층이면 월 6만원을 받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애인연금은 얼마인가요?',
      a: '2026년 기준 중증 장애인이 받을 수 있는 장애인연금은 월 최대 43만 9,700원입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '경증 장애인인데 소득이 없으면 장애인연금을 받을 수 있나요?',
      a: '아니요, 장애인연금은 중증 등록장애인만 신청할 수 있습니다. 경증은 장애수당(수급자·차상위 조건)이 해당합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '18세 미만 아동은 어떤 제도를 받나요?',
      a: '18세 미만 장애아동은 장애아동수당(월 11만~22만원)을 별도로 신청합니다. 장애수당과 장애인연금은 성인(18세 이상) 대상입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
