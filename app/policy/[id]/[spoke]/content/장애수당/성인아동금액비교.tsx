import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          성인 경증 장애수당은 <strong>월 6만원</strong>,
          18세 미만 장애아동수당은 <strong>월 11만~22만원</strong>입니다.
          중증 성인은 장애인연금(월 최대 43만 9,700원)을 별도로 신청합니다.
          세 제도는 각각 신청 대상과 금액이 다릅니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "장애수당이 월 6만원인데 아동은 더 많이 받는다고 하던데 맞나요?"
        장애 관련 현금 지원 3가지를 한 번에 비교했습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">장애 현금 지원 3종 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>제도</th><th>대상</th><th>소득 조건</th><th>월 지급액</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>장애수당</strong></td>
                <td>성인 경증 (18세 이상)</td>
                <td>수급자·차상위</td>
                <td>6만원</td>
              </tr>
              <tr>
                <td><strong>장애아동수당</strong></td>
                <td>아동 경증·중증 (18세 미만)</td>
                <td>수급자·차상위</td>
                <td>11만~22만원</td>
              </tr>
              <tr>
                <td><strong>장애인연금</strong></td>
                <td>성인 중증 (18세 이상)</td>
                <td>소득인정액 기준</td>
                <td>최대 43만 9,700원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="child-detail">
        <h2 className="detail-card-head">장애아동수당 금액 세부 (2026)</h2>
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

      <section className="detail-card" id="transition">
        <h2 className="detail-card-head">18세 도달 시 전환</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>경증 아동 → 성인:</strong> 장애아동수당 종료 → 장애수당(월 6만원) 신청 가능
          </div>
          <div className="info-box">
            <strong>중증 아동 → 성인:</strong> 장애아동수당 종료 → 장애인연금(월 최대 43만 9,700원) 신청 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            장애수당 신청 자격, 연금과의 차이 등<br />
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

export const 장애수당성인아동금액비교SpokeContent: SpokeData = {
  h1: '2026년 장애수당 성인과 장애아동수당 지급 금액 비교와 신청 방법',
  breadcrumb: '성인아동금액비교',
  description:
    '장애수당(성인 경증 월 6만원) vs 장애아동수당(18세 미만 경증 11만원, 중증 22만원) vs 장애인연금(중증 성인 최대 43만 9,700원). 18세 도달 시 전환 안내.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '성인 장애수당은 왜 아동수당보다 적은가요?',
      a: '장애수당(성인 경증)은 월 6만원, 장애아동수당은 중증·경증·소득 구분에 따라 최대 22만원까지 지급됩니다. 아동 발달 지원을 위해 아동에게 더 높은 금액이 책정됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '아이가 18세가 되면 장애아동수당이 자동으로 장애수당으로 바뀌나요?',
      a: '자동 전환은 되지 않습니다. 18세 이후에는 장애수당 또는 장애인연금을 별도로 신청해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애아동수당 중증 아동이 받는 최대 금액은 얼마인가요?',
      a: '중증 + 생계·의료급여 수급자 가구 아동이 월 22만원을 받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애수당과 장애아동수당을 동시에 받을 수 있나요?',
      a: '아니요, 장애수당은 18세 이상, 장애아동수당은 18세 미만 대상으로 동시 수급이 불가합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '신청은 어디서 하나요?',
      a: '거주지 읍·면·동 행정복지센터 방문 또는 복지로(bokjiro.go.kr) 온라인 신청이 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
