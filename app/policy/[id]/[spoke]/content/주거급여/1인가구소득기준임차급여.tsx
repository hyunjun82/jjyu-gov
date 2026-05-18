import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          주거급여 1인 가구는 <strong>중위소득 48% 이하</strong>이면 신청할 수 있습니다.
          임차급여(월세 지원)는 거주 지역에 따라 <strong>서울 34만 1,000원</strong>부터
          <strong>농어촌 18만 8,000원</strong>까지 지원됩니다.
          <strong>부양의무자 기준은 적용되지 않습니다.</strong>
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        1인 가구 기준 소득 조건과 지역별 임차급여 금액을 확인하고
        본인이 받을 수 있는 금액을 파악하세요.
      </p>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">1인 가구 소득 기준 (2026년)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>기준</th><th>금액</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1인 가구 중위소득 48%</strong></td><td>월 1,114,166원</td></tr>
              <tr><td><strong>소득인정액 기준</strong></td><td>실제 소득 + 재산 환산액</td></tr>
              <tr><td><strong>부양의무자 기준</strong></td><td>적용 없음 (폐지)</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>※ 정확한 소득 기준은 복지로(bokjiro.go.kr)에서 확인하세요.</p>
        </div>
      </section>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">1인 가구 지역별 임차급여 기준임대료</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>급지</th><th>지역</th><th>1인 가구</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1급지</strong></td><td>서울</td><td>341,000원</td></tr>
              <tr><td><strong>2급지</strong></td><td>경기·인천</td><td>268,000원</td></tr>
              <tr><td><strong>3급지</strong></td><td>광역시·세종·수도권 외</td><td>216,000원</td></tr>
              <tr><td><strong>4급지</strong></td><td>그 외 지역</td><td>188,000원</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>※ 실제 임차료가 기준임대료보다 낮으면 실제 임차료 지급</p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 복지로(bokjiro.go.kr) → 서비스 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 주민등록지 읍·면·동 주민센터
          </div>
          <div className="info-box">
            <strong>문의:</strong> 주거급여 콜센터 1600-0777
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            자가 수선유지급여, 신청 절차, 수급 조건 전체 내용까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/housing-benefit" className="btn-cta">
            주거급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 주거급여1인가구소득기준임차급여SpokeContent: SpokeData = {
  h1: '주거급여 1인 가구 소득 기준과 임차급여 금액 지역별 정리',
  breadcrumb: '1인가구소득기준임차급여',
  description:
    '주거급여 1인 가구: 중위소득 48%(월 약 111만원) 이하. 임차급여 서울 341,000원·경기인천 268,000원·광역시 216,000원·농어촌 188,000원. 부양의무자 기준 없음. 복지로(bokjiro.go.kr) 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '소득인정액이 중위소득 48%를 조금 넘으면 아예 못 받나요?',
      a: '소득인정액이 기준을 초과하면 수급 대상에서 제외됩니다. 단, 소득과 재산을 모두 환산한 소득인정액 기준이므로 복지로에서 모의 계산을 해보는 것이 좋습니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '임차급여는 실제 월세 전액을 지원받는 건가요?',
      a: '실제 임차료와 기준임대료 중 낮은 금액을 기준으로 지원합니다. 실제 월세가 기준임대료보다 낮으면 실제 월세 금액만 지급됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '부모님이 재산이 많아도 1인 가구 자녀가 신청할 수 있나요?',
      a: '주거급여는 부양의무자 기준이 폐지되어 부모님 재산과 관계없이 본인의 소득인정액 기준으로만 판단합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '2급지(경기·인천) 기준으로 서울 소재 직장인이 경기도에 거주하면 어느 급지인가요?',
      a: '주거급여 급지는 실제 거주지 기준으로 결정됩니다. 경기도에 거주하면 2급지(268,000원) 기준이 적용됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '전세도 임차급여를 받을 수 있나요?',
      a: '전세(보증금 방식)도 임차급여 대상입니다. 보증금은 월 환산하여 임차료에 포함시켜 계산합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
  ],
  sources: [
    { name: '국토교통부 주거급여', url: 'https://www.molit.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
    { name: '주거급여 콜센터', url: 'https://www.hb.go.kr' },
  ],
};
