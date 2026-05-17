import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 장애인연금은 기초급여 <strong>월 34만 9,700원</strong> +
          부가급여 <strong>월 최대 9만원</strong>으로 합산 <strong>월 최대 43만 9,700원</strong>입니다.
          기초급여는 2025년 소비자물가변동률 2.1%를 반영해 7,190원 인상됐습니다.
          부가급여는 기초생활수급 여부와 가구 유형에 따라 달라집니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "기초급여와 부가급여를 합치면 얼마인가요?"
        기초수급자 기준 최대 금액과 유형별 금액을 정리했습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">장애인연금 기초급여 + 부가급여 | 기초수급자 합산 최대 금액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>월 지급액</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>기초급여</td>
                <td><strong>34만 9,700원</strong></td>
                <td>2026년 2.1% 인상 (7,190원↑)</td>
              </tr>
              <tr>
                <td>부가급여 (기초수급자 기준)</td>
                <td><strong>9만원</strong></td>
                <td>가구 유형별 차등</td>
              </tr>
              <tr>
                <td>합산 최대</td>
                <td><strong>43만 9,700원</strong></td>
                <td>기초수급자 + 중증장애 기준</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            정확한 부가급여 금액은 기초생활 수급 여부, 가구 유형, 연령(18~64세 vs 65세+)에 따라
            달라집니다. 거주지 행정복지센터에서 본인 금액을 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="rise">
        <h2 className="detail-card-head">2026년 인상 — 기초급여 7,190원 올랐다</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>연도</th><th>기초급여</th><th>인상폭</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>2025년</td>
                <td>34만 2,510원</td>
                <td>-</td>
              </tr>
              <tr>
                <td>2026년</td>
                <td><strong>34만 9,700원</strong></td>
                <td><strong>+7,190원 (2.1%)</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            기초급여는 전년도 소비자물가변동률을 반영해 매년 조정됩니다.
            2026년은 2025년 소비자물가변동률 2.1%를 적용했습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">수령을 위한 소득 기준 — 선정기준액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가구 유형</th><th>2025년</th><th>2026년</th><th>인상폭</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>단독가구</td>
                <td>138만원</td>
                <td><strong>140만원</strong></td>
                <td>+2만원</td>
              </tr>
              <tr>
                <td>부부가구</td>
                <td>220만 8천원</td>
                <td><strong>224만원</strong></td>
                <td>+3만 2천원</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            소득인정액(소득 + 재산 환산액)이 기준 이하인 경우에만 수령할 수 있습니다.
            신청 시 행정복지센터에서 자동 산정됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            장애수당 차이, 3급 기준, 신청방법 등<br />
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

export const 장애인연금금액SpokeContent: SpokeData = {
  h1: '장애인연금 기초급여 + 부가급여 | 기초수급자 합산 최대 금액',
  breadcrumb: '지급금액',
  description:
    '2026년 장애인연금 기초급여 월 34만 9,700원(2.1% 인상) + 부가급여 최대 9만원 = 합산 최대 43만 9,700원. 수령 자격: 소득인정액 단독 140만원·부부 224만원 이하. 부가급여는 기초수급 여부에 따라 다름.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 장애인연금 기초급여는 얼마인가요?',
      a: '월 34만 9,700원입니다. 2025년 대비 7,190원(2.1%) 인상됐습니다.',
      source: '보건복지부 (2026)',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '부가급여는 얼마인가요?',
      a: '기초생활수급자 기준 월 9만원입니다. 가구 유형과 기초생활 수급 여부에 따라 다르므로 정확한 금액은 행정복지센터에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초급여와 부가급여를 합하면 최대 얼마인가요?',
      a: '기초수급자 기준 기초급여 34만 9,700원 + 부가급여 9만원 = 월 최대 43만 9,700원입니다.',
      source: '보건복지부 (2026)',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '소득이 얼마 이하여야 장애인연금을 받을 수 있나요?',
      a: '2026년 기준 소득인정액이 단독가구 140만원, 부부가구 224만원 이하여야 합니다.',
      source: '보건복지부 (2026)',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애인연금 기초급여는 매년 바뀌나요?',
      a: '네. 전년도 소비자물가변동률을 반영해 매년 조정됩니다. 2026년에는 2025년 소비자물가변동률 2.1%를 반영해 7,190원 인상됐습니다.',
      source: '보건복지부 (2026)',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 장애인연금 안내', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
