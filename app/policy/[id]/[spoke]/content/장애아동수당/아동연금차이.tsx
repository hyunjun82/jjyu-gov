import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>장애아동수당</strong>은 만 18세 미만 경증·중증 장애아동에게 월 11만~22만원,
          <strong>장애인연금</strong>은 만 18세 이상 중증 장애인에게 월 최대 43만 9,700원을 지급합니다.
          두 제도는 연령과 장애 정도에 따라 구분되며 <strong>중복 수급이 불가</strong>합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "기초수급자 가구 아동이 장애아동수당과 장애인연금 중 무엇을 받을 수 있나요?"
        두 제도의 차이와 해당 대상을 정리했습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">장애아동수당 vs 장애인연금 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>장애아동수당</th><th>장애인연금</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>연령</strong></td>
                <td>만 18세 미만</td>
                <td>만 18세 이상 성인</td>
              </tr>
              <tr>
                <td><strong>장애 정도</strong></td>
                <td>경증·중증 모두</td>
                <td>중증만 해당</td>
              </tr>
              <tr>
                <td><strong>소득 조건</strong></td>
                <td>기초수급자·차상위</td>
                <td>소득인정액 기준 이하</td>
              </tr>
              <tr>
                <td><strong>월 지급액</strong></td>
                <td>11만~22만원</td>
                <td>최대 43만 9,700원</td>
              </tr>
              <tr>
                <td><strong>중복 수급</strong></td>
                <td colSpan={2}>불가 (연령·장애 정도에 따라 하나만 적용)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="who-gets">
        <h2 className="detail-card-head">기초수급자 가구 아동이 받을 수 있는 지원</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>18세 미만 + 중증:</strong> 장애아동수당 월 22만원 (생계·의료급여 기준)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>18세 미만 + 경증:</strong> 장애아동수당 월 11만원
          </div>
          <div className="info-box">
            <strong>18세 이상 + 중증:</strong> 장애인연금 (최대 월 43만 9,700원)으로 전환
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장애아동수당:</strong> 거주지 읍·면·동 행정복지센터 또는 복지로(bokjiro.go.kr)
          </div>
          <div className="info-box">
            <strong>신청자:</strong> 보호자(부모·후견인) 명의 신청
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            중증·경증 금액, 18세 이후 전환 등<br />
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

export const 장애아동수당아동연금차이SpokeContent: SpokeData = {
  h1: '장애아동수당과 장애인연금, 기초수급자 가구 아동이 받을 수 있는 게 무엇인지',
  breadcrumb: '아동연금차이',
  description:
    '장애아동수당(18세 미만 경증·중증 11~22만원) vs 장애인연금(18세 이상 중증 최대 43만 9,700원). 중복 불가. 기초수급 아동은 연령·장애 정도로 구분. 복지로 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '18세 미만 중증 장애아동이 장애인연금을 신청할 수 있나요?',
      a: '아니요, 장애인연금은 만 18세 이상 성인 중증 장애인만 신청할 수 있습니다. 18세 미만은 장애아동수당이 해당합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초수급자 가구 중증 아동이 받을 수 있는 최대 금액은 얼마인가요?',
      a: '생계·의료급여 기준 월 22만원입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애아동수당과 장애인연금을 동시에 받을 수 있나요?',
      a: '아니요, 연령과 장애 정도에 따라 하나만 적용됩니다. 중복 수급은 불가합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '경증 아동은 장애인연금을 받을 수 없나요?',
      a: '장애인연금은 중증 장애인만 해당합니다. 경증 아동은 장애아동수당(월 11만원)을 받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '신청은 어디서 하나요?',
      a: '거주지 읍·면·동 행정복지센터 방문 또는 복지로(bokjiro.go.kr)에서 보호자 명의로 신청합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
