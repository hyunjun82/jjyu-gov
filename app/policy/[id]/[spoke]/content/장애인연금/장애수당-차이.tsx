import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          장애인연금과 장애수당은 <strong>다른 제도</strong>입니다.
          장애인연금은 <strong>중증장애인</strong>(만 18세 이상)이 대상으로 월 최대 43만 9,700원,
          장애수당은 <strong>경증장애인</strong> 중 수급자·차상위계층이 대상으로 월 6만원입니다.
          같은 사람이 두 제도를 동시에 받을 수 없습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "장애인연금이랑 장애수당이 어떻게 다른가요?" 가장 많이 헷갈리는 질문입니다.
        중증과 경증의 차이, 금액 차이, 동시 수령 가능 여부를 정리했습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">장애인연금과 장애수당, 같은 건가 다른 건가 | 중증·경증 기준 차이</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>장애인연금</th><th>장애수당</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>대상 장애 정도</td>
                <td><strong>중증장애인</strong></td>
                <td><strong>경증장애인</strong></td>
              </tr>
              <tr>
                <td>연령</td>
                <td>만 18세 이상</td>
                <td>만 18세 이상</td>
              </tr>
              <tr>
                <td>소득 조건</td>
                <td>소득인정액 단독 140만원·부부 224만원 이하</td>
                <td>기초생활수급자 또는 차상위계층</td>
              </tr>
              <tr>
                <td>월 지급액</td>
                <td><strong>최대 43만 9,700원</strong></td>
                <td><strong>6만원</strong></td>
              </tr>
              <tr>
                <td>동시 수령</td>
                <td colspan="2" style={{ textAlign: 'center' }}>
                  <strong>불가 — 중증·경증 대상이 다름</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>장애아동수당</strong>은 별도: 만 18세 미만 등록 장애아동 대상,
            가구 유형별 월 최대 22만원.
          </div>
        </div>
      </section>

      <section className="detail-card" id="detail">
        <h2 className="detail-card-head">중증·경증 장애 기준 — 어떻게 결정되나</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중증 (연금 대상):</strong> 장애 정도가 심한 장애인.
            2019년 7월부터 기존 1~2급 + 3급 중복장애가 '심한 장애인'으로 통합됨.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>경증 (수당 대상):</strong> 장애 정도가 심하지 않은 장애인.
            기존 3~6급 중 중증 해당자를 제외한 나머지.
          </div>
          <div className="warning-box">
            <strong>기존 3급이라면:</strong> 2019년 이후 등록 또는 재심사 기준에 따라
            '심한 장애'(중증)에 포함되는지 여부가 달라집니다.
            거주지 행정복지센터에서 확인하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="child">
        <h2 className="detail-card-head">18세 미만 자녀라면 — 장애아동수당</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>대상</td>
                <td>만 18세 미만 등록 장애아동 + 수급자·차상위 가구</td>
              </tr>
              <tr>
                <td>지급액</td>
                <td>가구 유형별 월 최대 22만원</td>
              </tr>
              <tr>
                <td>신청</td>
                <td>행정복지센터 또는 복지로(bokjiro.go.kr)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급금액, 수급자격, 신청방법 등<br />
            장애인연금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/disability-pension" className="btn-cta">
            장애인연금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 장애수당차이SpokeContent: SpokeData = {
  h1: '장애인연금과 장애수당, 같은 건가 다른 건가 | 중증·경증 기준 차이',
  breadcrumb: '장애수당 차이',
  description:
    '장애인연금(중증, 월 최대 43만 9,700원)과 장애수당(경증 수급·차상위, 월 6만원)은 다른 제도입니다. 중증·경증 대상이 달라 동시 수령 불가. 18세 미만은 장애아동수당(월 최대 22만원) 별도 운영.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '장애인연금과 장애수당을 동시에 받을 수 있나요?',
      a: '불가합니다. 장애인연금은 중증장애인, 장애수당은 경증장애인 대상으로 대상 자체가 달라 동시 수령이 안 됩니다.',
      source: '보건복지부 장애인연금 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애수당은 얼마를 받나요?',
      a: '경증장애인 중 기초생활수급자 또는 차상위계층이 대상이며 월 6만원을 받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '3급 장애인인데 연금 대상인가요, 수당 대상인가요?',
      a: '2019년 7월 이후 장애 등급제 개편으로 3급은 중증(심한 장애)에 포함될 수도 있습니다. 정확한 판정은 거주지 행정복지센터에서 확인하세요.',
      source: '보건복지부 장애인연금 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '아이(18세 미만)에게는 어떤 지원이 있나요?',
      a: '만 18세 미만 등록 장애아동은 장애아동수당 대상입니다. 수급자·차상위 가구 기준 월 최대 22만원입니다. 행정복지센터 또는 복지로에서 신청합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애인연금과 기초연금을 동시에 받을 수 있나요?',
      a: '만 65세가 되면 장애인연금에서 기초연금으로 전환되거나 일부 조정이 됩니다. 65세 도달 전에 거주지 행정복지센터에서 재상담을 받는 것을 권장합니다.',
      source: '보건복지부 장애인연금 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 장애인연금 안내', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
