import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민내일배움카드는 발급 후 <strong>5년간 기본 300만원</strong>을 지원합니다.
          저소득·한부모·국가유공자 등 추가지원 대상은 <strong>최대 500만원</strong>까지 늘어납니다.
          훈련비의 45~85%를 정부가 부담하며 나머지 <strong>15~55%는 본인 부담</strong>입니다.
          국가기간·전략산업 분야(AI·반도체 등)는 본인 부담 0%, 전액 지원입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "300만원인 줄 알았는데 500만원도 된다고요?" 지원 한도와 본인 부담금을 헷갈리는 경우가 많습니다.
        대상별 지원 한도와 실제 자기부담률을 정리했습니다.
      </p>

      <section className="detail-card" id="limit">
        <h2 className="detail-card-head">300만원에서 500만원까지 — 대상별 지원 한도</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>한도</th><th>해당 대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>일반 대상자</td>
                <td><strong>300만원</strong></td>
                <td>재직자·실업자·자영업자 공통</td>
              </tr>
              <tr>
                <td>추가지원 대상 I</td>
                <td><strong>400만원</strong></td>
                <td>국민취업지원제도 참여자 등</td>
              </tr>
              <tr>
                <td>추가지원 대상 II</td>
                <td><strong>500만원</strong></td>
                <td>저소득·한부모·국가유공자·특성화고 등</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>5년 누적 한도:</strong> 한 과정 수강 후 남은 잔액으로 다른 과정을 계속 수강할 수 있습니다.
            잔액은 고용24(work24.go.kr)에서 확인 가능합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="self-pay">
        <h2 className="detail-card-head">자기부담금 15~55% — 계층·분야별 실제 부담액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>정부 지원율</th><th>자기부담률</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>일반 재직자</td>
                <td>45~70%</td>
                <td><strong>30~55%</strong></td>
              </tr>
              <tr>
                <td>일반 실업자</td>
                <td>50~80%</td>
                <td><strong>20~50%</strong></td>
              </tr>
              <tr>
                <td>취약계층 (저소득·한부모)</td>
                <td>85~100%</td>
                <td><strong>0~15%</strong></td>
              </tr>
              <tr>
                <td>국가기간·전략산업 분야</td>
                <td>100%</td>
                <td><strong>0% (전액 지원)</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>AI·반도체·바이오 등 국가기간·전략산업 분야</strong>는 자기부담금이 없습니다.
            본인 부담 없이 수강할 수 있는 IT·디지털 과정을 먼저 찾아보세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="allowance">
        <h2 className="detail-card-head">훈련장려금 별도 지급 — 실업자에게 월 최대 11만 6천원</h2>
        <div className="detail-card-body">
          <p style={{ lineHeight: 1.8 }}>
            실업자가 훈련과정을 수강하면 훈련비 지원 외에 <strong>훈련장려금</strong>을 별도로 받을 수 있습니다.
            월 출석률 80% 이상을 충족한 경우 월 최대 11만 6천원이 지급됩니다.
            자영업자의 경우 월 최대 36만원까지 지원됩니다.
          </p>
          <table className="compare-table" style={{ marginTop: 12 }}>
            <thead>
              <tr><th>대상</th><th>훈련장려금</th><th>조건</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>실업자</td>
                <td><strong>월 최대 11만 6천원</strong></td>
                <td>출석률 80% 이상, 1개월 이상 훈련</td>
              </tr>
              <tr>
                <td>자영업자 (피보험자)</td>
                <td><strong>월 최대 36만원</strong></td>
                <td>출석률 80% 이상</td>
              </tr>
              <tr>
                <td>재직자</td>
                <td>해당 없음</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">잔액 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>고용24 온라인:</strong> work24.go.kr → 마이페이지 → 내일배움카드 잔액 조회
          </div>
          <div className="info-box">
            <strong>1350 전화:</strong> 고용노동부 고객상담센터 1350 → 잔액 조회
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            사용처, 재직자 조건, 실업급여 병행 여부 등<br />
            국민내일배움카드 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/learning-card" className="btn-cta">
            국민내일배움카드 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 지원금액SpokeContent: SpokeData = {
  h1: '내일배움카드 300만원에서 500만원까지 | 추가 지원 조건과 자기부담금 15~55%',
  breadcrumb: '지원금액',
  description:
    '국민내일배움카드는 5년간 기본 300만원을 지원하며, 저소득·한부모·국가유공자 등 추가대상은 최대 500만원까지 늘어납니다. 자기부담금은 15~55%이며, 국가기간·전략산업(AI·반도체) 분야는 본인 부담 0%. 실업자는 훈련장려금 월 최대 11만 6천원 별도 지급.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '내일배움카드 지원금액은 얼마인가요?',
      a: '기본 300만원이며, 저소득·한부모·국가유공자 등 추가지원 대상은 최대 500만원까지 한도가 늘어납니다. 발급 후 5년간 누적 사용 가능합니다.',
      source: '고용노동부 국민내일배움카드 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '자기부담금은 얼마나 되나요?',
      a: '훈련 분야와 계층에 따라 15~55%입니다. 재직자는 30~55%, 실업자는 20~50%, 취약계층은 0~15%, 국가기간·전략산업 분야는 0%(전액 지원)입니다.',
      source: '고용노동부 국민내일배움카드 자부담 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '훈련장려금은 누가 받나요?',
      a: '실업자가 1개월 이상 출석률 80% 이상으로 훈련에 참여하면 월 최대 11만 6천원의 훈련장려금을 받습니다. 자영업자 피보험자는 월 최대 36만원입니다.',
      source: '고용24 훈련장려금 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '300만원에서 500만원이 되는 조건은 무엇인가요?',
      a: '저소득층, 한부모가족, 국가유공자, 특성화고 졸업생, 국민취업지원제도 참여자 등이 추가지원 대상입니다. 각 대상별로 +100만원 또는 +200만원이 추가 적립됩니다.',
      source: '고용노동부 국민내일배움카드 지원 한도 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '잔액은 어떻게 확인하나요?',
      a: 'work24.go.kr(고용24) 마이페이지에서 확인하거나, 고용노동부 고객상담센터 1350으로 전화하면 잔액을 조회할 수 있습니다.',
      source: '고용24 내일배움카드 잔액 조회',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 국민내일배움카드 안내', url: 'https://www.work24.go.kr' },
    { name: '고용24 훈련장려금 안내', url: 'https://www.work24.go.kr/selectIssuGudn' },
  ],
};
