import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          집이나 예금이 좀 있으면 기초연금 못 받는 거 아닌가 걱정되시죠.
          재산이 있어도 소득인정액(소득+재산을 합산한 금액)이
          단독 <strong>247만원</strong> 이하면 받을 수 있습니다.
          대도시 기준 <strong>아파트 1억 3,500만원</strong>까지 기본공제됩니다.
        </p>
      </div>

      {/* [기] 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        아파트가 있으니 기초연금은 안 될 거라고 미리 포기하셨나요?
        실제로는 재산 그 자체가 아니라 소득인정액으로 판단하기 때문에,
        집이 있어도 받는 분이 많습니다. 내 재산이 기준에 걸리는지 아래에서 확인하세요.
      </p>

      {/* H2-1: 재산 기준 */}
      <section className="detail-card" id="limit">
        <h2 className="detail-card-head">재산이 얼마까지면 받을 수 있나?</h2>
        <div className="detail-card-body">
          <p>
            기초연금은 &quot;재산이 얼마 이하&quot;가 아니라 <strong>소득인정액</strong>으로
            판단합니다. 소득인정액은 월소득(근로·연금·이자 등)에
            재산을 월소득으로 환산한 금액을 더한 값입니다.
          </p>
          <table className="compare-table">
            <thead>
              <tr><th>가구 유형</th><th>선정기준액 (2026년)</th></tr>
            </thead>
            <tbody>
              <tr><td>단독가구</td><td><strong>247만원</strong></td></tr>
              <tr><td>부부가구</td><td><strong>395만 2,000원</strong></td></tr>
            </tbody>
          </table>
          <div className="warning-box">
            <strong>재산만으로는 판단 불가:</strong> 아파트 5억이 있어도 월소득이 없고
            기본공제를 적용하면 기준 이하일 수 있습니다. 반대로 재산이 적어도
            연금소득이 높으면 탈락할 수 있습니다. 반드시 소득+재산 합산으로 확인하세요.
          </div>
        </div>
      </section>

      {/* H2-2: 재산 종류별 계산법 */}
      <section className="detail-card" id="calculation">
        <h2 className="detail-card-head">집·예금·차 어떻게 계산되나?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>재산 종류</th><th>평가 방법</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>일반재산 (집, 토지)</td>
                <td>공시가격 (시세가 아님)</td>
                <td>지역별 기본공제 적용</td>
              </tr>
              <tr>
                <td>금융재산 (예금·적금·주식·보험)</td>
                <td>잔액 합산</td>
                <td>2,000만원 공제</td>
              </tr>
              <tr>
                <td>자동차</td>
                <td>시가표준액</td>
                <td>3,000cc 이상 또는 4,000만원 이상은 월소득 100% 환산</td>
              </tr>
              <tr>
                <td>부채</td>
                <td>금융기관 부채</td>
                <td>재산에서 차감</td>
              </tr>
            </tbody>
          </table>
          <p>
            재산의 월소득 환산 공식은 이렇습니다:
          </p>
          <p style={{ background: '#f8f9fa', padding: '12px 16px', borderRadius: 8 }}>
            (일반재산 - 기본공제) + (금융재산 - 2,000만원) - 부채 = 순재산<br />
            순재산 × <strong>연 4%</strong> ÷ 12 = 월 소득환산액
          </p>
          <p>
            공시가격은 실거래가의 60~80% 수준이므로 시세 5억 아파트라도
            공시가격이 3억대일 수 있습니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 지역별 기본공제 */}
      <section className="detail-card" id="region">
        <h2 className="detail-card-head">대도시·중소도시·농어촌 기본공제 차이</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>지역</th><th>기본공제액</th></tr>
            </thead>
            <tbody>
              <tr><td>대도시 (특별시·광역시 구)</td><td><strong>1억 3,500만원</strong></td></tr>
              <tr><td>중소도시 (도 시 지역)</td><td><strong>8,500만원</strong></td></tr>
              <tr><td>농어촌 (도 군 지역)</td><td><strong>7,250만원</strong></td></tr>
            </tbody>
          </table>
          <p>
            기본공제는 주거 유지에 필요한 최소 재산을 인정해주는 것입니다.
            서울에 공시가격 1억 3,500만원짜리 아파트가 있다면
            재산 환산액은 0원이 됩니다.
          </p>
          <div className="warning-box">
            <strong>지역 판정 기준:</strong> 본인이 거주하는 곳이 아니라
            재산 소재지 기준입니다. 서울에 살면서 지방에 땅이 있으면
            서울 집은 대도시 공제, 지방 땅은 해당 지역 공제가 각각 적용됩니다.
          </div>
        </div>
      </section>

      {/* H2-4: 실제 사례 */}
      <section className="detail-card" id="example">
        <h2 className="detail-card-head">재산 있어도 받는 실제 사례</h2>
        <div className="detail-card-body">
          <p>
            <strong>사례:</strong> 서울에 공시가격 3억원 아파트 보유,
            예금 3,000만원, 월소득 없음, 부채 없음, 단독가구
          </p>
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>계산</th><th>결과</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>일반재산</td>
                <td>3억 - 1억 3,500만원(기본공제)</td>
                <td>1억 6,500만원</td>
              </tr>
              <tr>
                <td>금융재산</td>
                <td>3,000만원 - 2,000만원(공제)</td>
                <td>1,000만원</td>
              </tr>
              <tr>
                <td>순재산 합계</td>
                <td>1억 6,500만원 + 1,000만원</td>
                <td>1억 7,500만원</td>
              </tr>
              <tr>
                <td>월 소득환산액</td>
                <td>1억 7,500만원 × 4% ÷ 12</td>
                <td><strong>약 58만 3,333원</strong></td>
              </tr>
            </tbody>
          </table>
          <p>
            월소득이 없으니 소득인정액은 약 58만원입니다.
            선정기준액 247만원보다 훨씬 낮으므로 <strong>기초연금 수급 가능</strong>합니다.
            서울에 3억짜리 아파트가 있어도 받을 수 있다는 뜻입니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="action">
        <h2 className="detail-card-head">내 소득인정액 확인하기</h2>
        <div className="detail-card-body">
          <p>
            재산과 소득 정보를 넣으면 소득인정액을 바로 계산해줍니다.
            기준 이하인지 5분이면 확인 가능합니다.
          </p>
          <a href="https://www.bokjiro.go.kr" className="btn-cta">
            소득인정액 모의계산 해보기
          </a>
        </div>
      </section>
    </>
  );
}

export const 재산기준SpokeContent: SpokeData = {
  h1: '기초연금 재산기준 2026년 — 집 있어도 받을 수 있을까?',
  breadcrumb: '재산기준',
  description:
    '2026년 기초연금 재산기준을 정리합니다. 대도시 아파트 1.35억 기본공제, 금융재산 2,000만원 공제. 재산 종류별 계산법과 실제 사례 시뮬레이션까지 확인하세요.',
  datePublished: '2026-01-10T09:00:00+09:00',
  dateModified: '2026-03-21T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '아파트 3억짜리 있으면 기초연금 못 받나요?',
      a: '시세 3억이라도 공시가격은 그보다 낮고, 대도시 기본공제 1억 3,500만원이 적용됩니다. 다른 소득이 적다면 충분히 받을 수 있습니다.',
      source: 'K-공감 기초연금 안내',
      sourceUrl: 'https://gonggam.korea.kr',
    },
    {
      q: '자녀 명의 재산도 계산되나요?',
      a: '아닙니다. 기초연금은 본인과 배우자 명의 재산만 봅니다. 자녀 명의 부동산이나 예금은 소득인정액에 포함되지 않습니다.',
      source: '보건복지부 기초연금 제도안내',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    {
      q: '전세금도 재산에 포함되나요?',
      a: '임차보증금(전세금)은 일반재산으로 포함됩니다. 다만 지역별 기본공제가 적용되므로 전세금 전액이 그대로 반영되지는 않습니다.',
      source: '보건복지부 기초연금 FAQ',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
  ],
  sources: [
    { name: 'K-공감 기초연금 안내 (2026.03.03)', url: 'https://gonggam.korea.kr' },
    { name: '보건복지부 기초연금 제도안내', url: 'https://basicpension.mohw.go.kr' },
    { name: '복지로 기초연금 모의계산', url: 'https://www.bokjiro.go.kr' },
  ],
};
