import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          개인연금(사적연금)을 받으면 기초연금이 <strong>직접 감액되지 않습니다.</strong>
          다만, 개인연금 수령액은 <strong>소득인정액에 포함</strong>되어 수급 자격 선정기준에 영향을 줍니다.
          소득인정액이 단독가구 월 247만원을 초과하면 기초연금을 받을 수 없습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "개인연금 받으면 기초연금이 깎인다는데 맞나요?"
        정확히 말하면 깎이는 것이 아니라, 소득인정액이 높아져 수급 자격을 잃을 수 있는 것입니다.
        차이를 명확히 이해하면 기초연금 수급 전략을 세울 수 있습니다.
      </p>

      <section className="detail-card" id="private-pension-rule">
        <h2 className="detail-card-head">개인연금이 기초연금에 미치는 영향</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>직접 감액 여부</td>
                <td>❌ 없음 (개인연금 수령 자체가 기초연금액을 줄이지 않음)</td>
              </tr>
              <tr>
                <td>소득인정액 영향</td>
                <td>✅ 있음 (개인연금 수령액이 기타소득 등으로 소득인정액에 반영)</td>
              </tr>
              <tr>
                <td>결과</td>
                <td>소득인정액이 선정기준액 초과 시 기초연금 수급 자격 탈락</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>핵심:</strong> 개인연금 수령액이 크면 소득인정액이 높아져 기초연금 탈락 가능성이 있습니다.
            개인연금 수령 전에 소득인정액 모의계산을 꼭 해보세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="threshold">
        <h2 className="detail-card-head">2026년 기초연금 선정기준액 (소득인정액 상한)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가구 유형</th><th>선정기준액 (소득인정액 상한)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>단독가구</td>
                <td>월 247만원 이하</td>
              </tr>
              <tr>
                <td>부부가구</td>
                <td>월 395만 2,000원 이하</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            개인연금 수령액이 이 선정기준액 초과에 결정적 역할을 한다면
            기초연금을 받을 수 없습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="types">
        <h2 className="detail-card-head">개인연금 유형별 소득인정액 반영 방식</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>개인연금 유형</th><th>소득인정액 반영 방식</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>연금저축·IRP 수령</td>
                <td>연금 수령액이 기타소득으로 반영될 수 있음</td>
              </tr>
              <tr>
                <td>연금보험(보험사 생존연금)</td>
                <td>금융재산 또는 기타소득으로 반영 가능</td>
              </tr>
              <tr>
                <td>국민연금·공무원연금 등 공적연금</td>
                <td>공적이전소득으로 소득인정액에 포함 + 국민연금연계감액 적용</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            개인연금 유형과 수령액에 따라 소득인정액 산정 방식이 달라질 수 있습니다.
            정확한 계산은 <strong>국민연금공단(1355)</strong> 또는 복지로 모의계산기를 활용하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="strategy">
        <h2 className="detail-card-head">개인연금과 기초연금 동시 수령 전략</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 수령 시기 분산:</strong> 개인연금 수령을 나눠서 월 수령액을 줄이면 소득인정액을 낮출 수 있습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 모의계산 먼저:</strong> 복지로(bokjiro.go.kr) 또는 국민연금공단 1355에서
            개인연금 수령액을 포함한 소득인정액 모의계산을 해보세요.
          </div>
          <div className="info-box">
            <strong>③ 전문 상담 활용:</strong> 개인연금 수령 시기·방식에 따라 기초연금 영향이 다르므로
            국민연금공단 지사에서 무료 상담을 받으세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            소득인정액 계산법, 재산 기준, 국민연금 연계 감액 등<br />
            기초연금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/basic-pension" className="btn-cta">
            기초연금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 개인연금감액SpokeContent: SpokeData = {
  h1: '기초연금 개인연금 있으면 감액되나요 소득인정액 영향 총정리',
  breadcrumb: '개인연금 영향',
  description: '개인연금(사적연금)을 받아도 기초연금이 직접 감액되지 않습니다. 다만 개인연금 수령액이 소득인정액에 포함되어 선정기준액(단독 247만원)을 초과하면 수급 자격을 잃을 수 있습니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '개인연금을 받으면 기초연금이 깎이나요?',
      a: '직접 깎이지 않습니다. 다만 개인연금 수령액이 소득인정액에 포함되어 선정기준액(단독 월 247만원)을 초과하면 기초연금 수급 자격을 잃을 수 있습니다.',
      source: '보건복지부 기초연금 선정기준액 고시',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '2026년 기초연금 소득인정액 기준은 얼마인가요?',
      a: '단독가구 월 247만원, 부부가구 월 395만 2,000원 이하여야 기초연금을 받을 수 있습니다.',
      source: '보건복지부 2026년 기초연금 선정기준액 고시',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '개인연금 월 100만원 받으면 기초연금에 영향이 있나요?',
      a: '개인연금 수령액이 소득인정액에 반영됩니다. 기타 소득·재산이 없는 경우 월 147만원 이하라면 단독가구 기준(247만원)을 초과하지 않을 수 있으나, 정확한 계산은 복지로 모의계산기나 국민연금공단(1355)을 통해 확인하세요.',
      source: '국민연금공단 기초연금 안내',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '연금저축을 수령하면 소득인정액이 얼마나 늘어나나요?',
      a: '연금저축 수령액은 기타소득으로 소득인정액에 반영될 수 있습니다. 정확한 금액은 개인 상황에 따라 다르며, 복지로 모의계산기(bokjiro.go.kr)에서 확인하세요.',
      source: '보건복지부 기초연금 소득인정액 안내',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '개인연금과 기초연금을 동시에 받으려면 어떻게 해야 하나요?',
      a: '개인연금 수령 시기와 금액을 분산하여 월 소득인정액이 선정기준액 이하가 되도록 설계하면 됩니다. 국민연금공단 지사에서 무료 상담을 받을 수 있습니다.',
      source: '국민연금공단 기초연금 상담 안내',
      sourceUrl: 'https://www.nps.or.kr',
    },
  ],
  sources: [
    { name: '보건복지부 2026년 기초연금 선정기준액 고시', url: 'https://www.mohw.go.kr' },
    { name: '국민연금공단 기초연금 안내 (1355)', url: 'https://www.nps.or.kr' },
    { name: '복지로 기초연금 모의계산', url: 'https://www.bokjiro.go.kr' },
  ],
};
