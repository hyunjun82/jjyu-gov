import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 장애인연금 기초급여는 <strong>월 34만 9,700원</strong>으로,
          2025년 대비 <strong>7,190원(2.1%) 인상</strong>됐습니다.
          2025년 소비자물가변동률을 반영한 결과이며,
          선정기준액도 단독 <strong>140만원</strong>·부부 <strong>224만원</strong>으로 상향됐습니다.
          신청은 거주지 행정복지센터 또는 복지로(bokjiro.go.kr)에서 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "2026년 장애인연금 얼마 올랐나요?" 기초급여, 선정기준액 모두 인상됐습니다.
        인상 금액과 신청 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="increase">
        <h2 className="detail-card-head">2026년 장애인연금 기초급여 인상액 | 349,700원 확인과 신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>2025년</th><th>2026년</th><th>인상폭</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>기초급여</td>
                <td>342,510원</td>
                <td><strong>349,700원</strong></td>
                <td><strong>+7,190원 (2.1%)</strong></td>
              </tr>
              <tr>
                <td>선정기준 (단독)</td>
                <td>138만원</td>
                <td><strong>140만원</strong></td>
                <td>+2만원</td>
              </tr>
              <tr>
                <td>선정기준 (부부)</td>
                <td>220만 8천원</td>
                <td><strong>224만원</strong></td>
                <td>+3만 2천원</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            부가급여는 기초생활 수급 여부·가구 유형에 따라 다르며 2026년 기준 최대 9만원.
            기초급여+부가급여 합산 최대 <strong>43만 9,700원</strong>.
          </div>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법 — 지금 받고 있지 않다면 이렇게 신청</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 행정복지센터 방문:</strong> 거주지 읍·면·동 행정복지센터 →
            장애인연금 신청서 + 장애인등록증 + 신분증 + 소득재산신고서 + 금융정보 동의서 제출
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 복지로 온라인:</strong> bokjiro.go.kr → 서비스 신청 → 장애인연금
            (공동인증서 또는 간편인증 필요)
          </div>
          <div className="info-box">
            <strong>자격 심사 기간:</strong> 신청 후 약 2~4주. 자격 확인 후 다음 달부터 매월 지급.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="already">
        <h2 className="detail-card-head">이미 받고 있다면 — 자동 인상 적용 여부</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기존 수급자:</strong> 별도 신청 없이 2026년 1월부터 인상된 금액으로
            자동 지급됩니다.
          </div>
          <div className="info-box">
            <strong>지급 확인:</strong> 매월 정기 지급일에 등록된 계좌로 입금.
            금액 확인은 복지로(bokjiro.go.kr) 또는 행정복지센터에서 가능합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            장애수당 차이, 3급 기준, 금액 구성 등<br />
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

export const 장애인연금2026인상SpokeContent: SpokeData = {
  h1: '2026년 장애인연금 기초급여 인상액 | 349,700원 확인과 신청 방법',
  breadcrumb: '2026 인상',
  description:
    '2026년 장애인연금 기초급여는 월 34만 9,700원(7,190원·2.1% 인상). 선정기준액도 단독 140만원·부부 224만원으로 상향. 기존 수급자는 자동 적용. 신규 신청은 행정복지센터 또는 복지로(bokjiro.go.kr).',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 장애인연금 기초급여는 얼마인가요?',
      a: '월 34만 9,700원입니다. 2025년(34만 2,510원) 대비 7,190원(2.1%) 인상됐습니다.',
      source: '보건복지부 (2026)',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '이미 받고 있는데 인상액이 자동으로 적용되나요?',
      a: '네. 기존 수급자는 별도 신청 없이 2026년 1월부터 인상된 금액으로 자동 지급됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '2026년 선정기준액(소득 한도)이 올랐나요?',
      a: '네. 단독가구는 138만원→140만원(+2만원), 부부가구는 220만 8천원→224만원(+3만 2천원)으로 인상됐습니다.',
      source: '보건복지부 (2026)',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초급여 외에 부가급여도 올랐나요?',
      a: '부가급여는 기초생활 수급 여부와 가구 유형에 따라 다르며 정확한 인상 여부는 행정복지센터에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애인연금을 새로 신청하려면 어떻게 하나요?',
      a: '거주지 읍·면·동 행정복지센터 방문 또는 복지로(bokjiro.go.kr) 온라인 신청. 장애인등록증·신분증·소득재산신고서·금융정보 동의서를 준비하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 장애인연금 안내', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
