import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          부부가 둘 다 기초연금을 받으면 각각 20% 감액됩니다.
          1인 기준 349,700원이 279,760원으로 줄고, 부부 합산 559,520원을 받게 됩니다.
          2027년부터 감액률이 10%로 축소될 예정입니다.
        </p>
      </div>

      {/* [기] 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        배우자와 둘 다 65세가 넘었는데, "부부면 깎인다"는 말에 불안하셨을 겁니다.
        감액은 되지만, 그래도 한 명만 받는 것보다 두 명이 받는 게 훨씬 이득입니다.
        정확히 얼마가 깎이고 얼마를 받는지 아래에서 확인하세요.
      </p>

      {/* H2-1: 감액률 */}
      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">부부감액, 얼마나 깎이나?</h2>
        <div className="detail-card-body">
          <p>
            부부가 모두 기초연금 수급자로 선정되면, 각각의 기초연금에서
            <strong> 20%</strong>를 감액합니다. 세대(가구) 단위로 보면 연금이
            과도하게 집중된다는 이유인데, 실질적으로 부부 합산 금액은
            단독 수급보다 여전히 많습니다.
          </p>
          <div className="highlight-numbers">
            <div className="highlight-num-item">
              <strong>349,700원</strong>
              <span>단독가구 1인</span>
            </div>
            <div className="highlight-num-item">
              <strong>279,760원</strong>
              <span>부부 각각</span>
            </div>
            <div className="highlight-num-item">
              <strong>559,520원</strong>
              <span>부부 합산</span>
            </div>
          </div>
          <p>
            소득하위 50% 대상자는 기준연금액이 40만원이지만 부부감액은 동일하게 적용됩니다.
            이 경우 각각 32만원, 합산 64만원을 수령합니다.
          </p>
        </div>
      </section>

      {/* H2-2: 시나리오별 최대 수령액 */}
      <section className="detail-card" id="max">
        <h2 className="detail-card-head">부부 합산 최대 얼마 받나?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>시나리오</th>
                <th>월 수령액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>단독가구 1인</td>
                <td><strong>349,700원</strong> (소득하위 50%: 400,000원)</td>
              </tr>
              <tr>
                <td>부부 둘 다 수급</td>
                <td>각 279,760원 = <strong>합산 559,520원</strong></td>
              </tr>
              <tr>
                <td>부부 중 한 명만 수급</td>
                <td><strong>349,700원</strong> (감액 없음)</td>
              </tr>
            </tbody>
          </table>
          <p>
            부부 중 한 명이 직역연금(공무원·군인연금 등) 수급 배우자라면
            기초연금 대상에서 제외됩니다. 나머지 한 명은 단독가구 기준으로
            감액 없이 전액을 받을 수 있습니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 한 명만 신청 */}
      <section className="detail-card" id="single">
        <h2 className="detail-card-head">한 명만 신청하면 감액 안 되나?</h2>
        <div className="detail-card-body">
          <p>
            맞습니다. 부부 중 한 명만 수급자이면 부부감액 없이 전액을 받습니다.
            다만 소득인정액 산정은 부부가구 기준(선정기준액 395.2만원)으로 합니다.
            부부의 소득·재산을 합산해서 따지기 때문에, 단독가구 기준(247만원)보다
            기준액 자체는 높지만 소득인정액도 커질 수 있습니다.
          </p>
          <div className="warning-box">
            일부러 한 명만 신청하는 건 손해일 수 있습니다.
            두 명이 감액되더라도 합산 559,520원이 한 명 349,700원보다
            <strong> 209,820원 더 많습니다.</strong>
          </div>
        </div>
      </section>

      {/* H2-4: 2027 개편 */}
      <section className="detail-card" id="reform">
        <h2 className="detail-card-head">2027년부터 감액률이 줄어든다?</h2>
        <div className="detail-card-body">
          <p>
            정부는 2027년부터 부부감액률을 현행 20%에서 <strong>10%</strong>로
            축소할 계획입니다. 10% 감액이 적용되면 부부 각각 약 31만 4,730원,
            합산 약 62만 9,460원을 받게 됩니다.
          </p>
          <p>
            장기적으로 부부감액을 완전 폐지하는 방향으로 추진 중입니다.
            감액이 폐지되면 부부 합산 최대 699,400원까지 가능해집니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <a
          href="https://www.bokjiro.go.kr"
          className="btn-cta"
        >
          복지로에서 부부 수령액 계산해보기
        </a>
      </div>
    </>
  );
}

export const 부부감액SpokeContent: SpokeData = {
  h1: '기초연금 부부 둘 다 받으면 감액되나',
  breadcrumb: '부부감액',
  description:
    '기초연금 부부감액 기준을 정리합니다. 부부 둘 다 수급 시 각 20% 감액, 합산 559,520원. 한 명만 받을 때와 비교, 2027년 감액률 축소 일정까지.',
  datePublished: '2026-01-10T09:00:00+09:00',
  dateModified: '2026-03-21T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '부부 중 한 명이 공무원연금을 받으면?',
      a: '직역연금 수급 배우자는 기초연금 대상에서 제외됩니다. 나머지 한 명은 단독가구로 신청할 수 있으며, 부부감액이 적용되지 않습니다.',
      source: 'K-공감 기초연금 안내',
      sourceUrl: 'https://gonggam.korea.kr',
    },
    {
      q: '사실혼 부부도 부부감액 되나요?',
      a: '사실혼(주민등록상 동거인)도 부부가구로 봅니다. 부부감액이 동일하게 적용됩니다.',
      source: '보건복지부 기초연금 제도안내',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    {
      q: '이혼하면 각각 단독가구로 받을 수 있나요?',
      a: '법적 이혼 시 각각 단독가구로 산정됩니다. 단독 선정기준액(247만원)이 적용되고 부부감액도 없습니다.',
      source: '보건복지부 기초연금 FAQ',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    { q: '부부 중 한 명만 기초연금을 받아도 감액되나요?', a: '부부 중 한 명만 수급하는 경우에는 부부 감액(20%)이 적용되지 않습니다. 둘 다 수급할 때만 각 20% 감액됩니다.', source: '보건복지부·국민연금공단 공식 안내', sourceUrl: 'https://www.mohw.go.kr' },
    { q: '부부 감액 기준은 어떻게 계산하나요?', a: '기준연금액의 20%를 각각 감액합니다. 예를 들어 월 34만 원 기준이면 부부 각자 27만 2천 원씩 받게 됩니다.', source: '보건복지부·국민연금공단 공식 안내', sourceUrl: 'https://www.mohw.go.kr' },
  ],
  sources: [
    { name: 'K-공감 기초연금 안내 (2026.03.03)', url: 'https://gonggam.korea.kr' },
    { name: '보건복지부 기초연금 제도안내', url: 'https://basicpension.mohw.go.kr' },
  ],
};
