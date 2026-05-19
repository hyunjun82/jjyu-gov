import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          집이 있어도 기초연금을 받을 수 있습니다. 주거용 재산에는
          기본공제(대도시 1.35억, 중소도시 8,500만원)가 적용되기 때문입니다.
          서울에 3억짜리 집을 갖고 있어도 대상이 되는 분이 많습니다.
        </p>
      </div>

      <section className="detail-card" id="why">
        <h2 className="detail-card-head">집이 있는데 왜 받을 수 있나?</h2>
        <div className="detail-card-body">
          <p>
            기초연금은 집 유무가 아니라 &quot;소득인정액&quot;으로 판단합니다.
            집값은 재산에 포함되지만, 거주용 부동산에는 큰 공제가 붙습니다.
          </p>
          <table className="compare-table">
            <thead>
              <tr><th>지역</th><th>재산 기본공제</th></tr>
            </thead>
            <tbody>
              <tr><td>대도시 (서울·부산·인천 등)</td><td><strong>1억 3,500만원</strong></td></tr>
              <tr><td>중소도시 (시 지역)</td><td><strong>8,500만원</strong></td></tr>
              <tr><td>농어촌 (군 지역)</td><td><strong>7,250만원</strong></td></tr>
            </tbody>
          </table>
          <p>
            공제 후 남은 금액을 월 4%÷12로 환산하기 때문에,
            집값이 수억이어도 월 소득인정액으로는 소액만 잡힙니다.
          </p>
        </div>
      </section>

      <section className="detail-card" id="examples">
        <h2 className="detail-card-head">집값별로 소득인정액이 얼마나 잡히나?</h2>
        <div className="detail-card-body">
          <p>서울 단독가구, 금융재산·소득 없는 경우 (순수 집값만):</p>
          <table className="compare-table">
            <thead>
              <tr><th>아파트 시가</th><th>재산 소득환산액(월)</th><th>기초연금 여부</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1억 5,000만원</td>
                <td><strong>5만원</strong></td>
                <td style={{ color: 'var(--success)' }}>대상 ✓</td>
              </tr>
              <tr>
                <td>3억원</td>
                <td><strong>55만원</strong></td>
                <td style={{ color: 'var(--success)' }}>대상 ✓</td>
              </tr>
              <tr>
                <td>5억원</td>
                <td><strong>121.7만원</strong></td>
                <td style={{ color: 'var(--success)' }}>대상 ✓</td>
              </tr>
              <tr>
                <td>8억원</td>
                <td><strong>221.7만원</strong></td>
                <td style={{ color: 'var(--success)' }}>대상 ✓ (여유 25.3만원)</td>
              </tr>
              <tr>
                <td>9억원</td>
                <td><strong>255만원</strong></td>
                <td style={{ color: 'var(--danger)' }}>초과 ✗</td>
              </tr>
            </tbody>
          </table>
          <p>
            서울 기준, 다른 소득·재산이 전혀 없다면 <strong>약 8억원 이하</strong> 집을 가진
            단독가구는 기초연금 대상이 됩니다. 부부가구라면 기준이 더 높으니(395.2만원)
            더 높은 집값까지 가능합니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="multiple">
        <h2 className="detail-card-head">집이 여러 채면 어떻게 되나?</h2>
        <div className="detail-card-body">
          <p>
            주거용 부동산은 모두 일반재산으로 합산합니다.
            기본공제(1.35억)는 전체 재산에서 한 번만 적용됩니다.
          </p>
          <p>
            2채 이상 보유하면 합산 시가가 높아져 소득인정액이 올라갑니다.
            거주하지 않는 집은 처분을 고려하거나,
            국민연금공단(☎1355)에서 모의계산을 받아보세요.
          </p>
        </div>
      </section>

      <section className="detail-card" id="jeonse">
        <h2 className="detail-card-head">전세 살고 있으면?</h2>
        <div className="detail-card-body">
          <p>
            전세보증금은 일반재산에 포함됩니다. 기본공제 후 나머지가 소득으로 환산되므로,
            서울에서 전세 1억에 사는 분이라면 기본공제(1.35억) 안에 들어가
            재산 소득환산액이 0원이 됩니다.
          </p>
          <p>
            월세 보증금 역시 같은 방식입니다. 월세 자체는 반영하지 않고
            보증금만 재산으로 봅니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="action">
        <h2 className="detail-card-head">집 있어서 포기했다면, 다시 확인하세요</h2>
        <div className="detail-card-body">
          <p>
            &quot;집이 있으니까 안 될 거야&quot;라고 포기하는 분이 많습니다.
            하지만 기본공제가 크기 때문에 서울 아파트 소유자도 상당수가 대상입니다.
          </p>
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>국민연금공단 ☎1355에 전화 → 모의계산 요청</li>
            <li>복지로(www.bokjiro.go.kr) → 기초연금 모의계산</li>
            <li>행정복지센터 방문 → 신분증+통장 사본만 가져가면 현장 확인 가능</li>
          </ol>
          <p>방문이 어려운 분은 국민연금공단의 &quot;찾아뵙는 서비스&quot;(☎1355)를 이용하세요.</p>
        </div>
      </section>
    </>
  );
}

export const 집있으면SpokeContent: SpokeData = {
  h1: '집 있어도 기초연금 받을 수 있나',
  breadcrumb: '집 있으면',
  description:
    '집이 있어도 기초연금 받을 수 있습니다. 서울 아파트 3억이면 재산 소득환산 55만원. 집값별 기초연금 수급 여부를 표로 한눈에 비교합니다.',
  datePublished: '2026-01-10T09:00:00+09:00',
  dateModified: '2026-03-21T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '집을 팔면 현금이 되는데, 기초연금에 불리한가요?',
      a: '집을 팔아 현금화하면 금융재산으로 분류됩니다. 금융재산 공제는 2,000만원뿐이라 부동산으로 보유할 때(기본공제 1.35억)보다 불리해질 수 있습니다. 처분 전 모의계산을 꼭 받으세요.',
      source: '보건복지부 기초연금 제도안내',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    {
      q: '자녀에게 집을 증여하면 유리한가요?',
      a: '증여일로부터 5년간은 증여한 재산이 본인 재산으로 포함됩니다(자연적 소비분 제외). 기초연금 수급을 위한 증여는 효과가 없을 수 있습니다.',
      source: '보건복지부 기초연금 제도안내',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    { q: '집 한 채가 있어도 기초연금을 받을 수 있나요?', a: '집이 있어도 소득인정액이 선정기준액 이하이면 기초연금 수급이 가능합니다. 자가 주택은 재산 환산 후 소득인정액에 포함됩니다.', source: '보건복지부·국민연금공단 공식 안내', sourceUrl: 'https://www.mohw.go.kr' },
    { q: '고가 주택 보유자도 받을 수 있나요?', a: '고가 주택은 재산 환산액이 커서 소득인정액을 높여 수급에서 탈락할 수 있습니다. 주민센터에서 정확한 판정을 받아야 합니다.', source: '보건복지부·국민연금공단 공식 안내', sourceUrl: 'https://www.mohw.go.kr' },
  ],
  sources: [
    { name: 'K-공감 기초연금 안내 (2026.03.03)', url: 'https://gonggam.korea.kr' },
    { name: '보건복지부 기초연금 제도안내', url: 'https://basicpension.mohw.go.kr' },
    { name: '복지로 기초연금 모의계산', url: 'https://www.bokjiro.go.kr' },
  ],
};
