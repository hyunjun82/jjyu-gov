import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          국민연금 받고 있는데 기초연금도 받을 수 있는지 헷갈리시죠?
          기초연금은 국가 세금에서, 국민연금은 내가 낸 보험료에서 나옵니다.
          둘 다 받을 수 있지만, 국민연금이 월 524,550원을 넘으면
          기초연금이 감액됩니다.
        </p>
      </div>

      {/* [기] 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "국민연금 받고 있는데 기초연금도 되나요?" 주변에서 가장 많이 듣는 질문입니다.
        이름이 비슷해서 헷갈리지만 완전히 다른 제도이고, 대부분 둘 다 받을 수 있습니다.
        다만 국민연금 금액에 따라 기초연금이 줄 수 있으니 기준을 확인하세요.
      </p>

      {/* H2-1: 차이 비교 */}
      <section className="detail-card" id="difference">
        <h2 className="detail-card-head">기초연금과 노령연금, 뭐가 다른가?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>기초연금</th><th>국민연금 (노령연금)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>재원</td>
                <td>국가 세금 (100%)</td>
                <td>본인이 납부한 보험료</td>
              </tr>
              <tr>
                <td>대상</td>
                <td>소득하위 70% 만 65세 이상</td>
                <td>보험료 10년 이상 납부자</td>
              </tr>
              <tr>
                <td>금액</td>
                <td>최대 349,700원 (하위 50%: 40만원)</td>
                <td>납부금액·기간에 따라 다름</td>
              </tr>
              <tr>
                <td>개시 나이</td>
                <td>만 65세</td>
                <td>만 60세 (출생연도별 상이)</td>
              </tr>
              <tr>
                <td>납부 이력</td>
                <td>필요 없음</td>
                <td>10년 이상 납부 필수</td>
              </tr>
            </tbody>
          </table>
          <p>
            흔히 &quot;노령연금&quot;이라 부르는 것이 국민연금의 정식 급여 명칭입니다.
            &quot;기초노령연금&quot;은 기초연금의 옛 이름이니 헷갈리지 마세요.
            2014년에 기초노령연금에서 기초연금으로 바뀌었습니다.
          </p>
        </div>
      </section>

      {/* H2-2: 연계감액 */}
      <section className="detail-card" id="reduction">
        <h2 className="detail-card-head">국민연금 받으면 기초연금 깎이나?</h2>
        <div className="detail-card-body">
          <p>
            국민연금 수령액이 기준연금액(349,700원)의 150%인
            <strong> 월 524,550원을 초과</strong>하면 기초연금이 줄어듭니다.
            이걸 &quot;국민연금 연계감액&quot;이라고 합니다.
          </p>
          <p>
            감액 방식은 국민연금 수령액에 따라 단계적으로 적용됩니다.
            국민연금이 많을수록 기초연금이 줄어들지만,
            완전히 0원이 되지는 않습니다.
          </p>
          <div className="warning-box">
            <strong>최소 보장:</strong> 국민연금을 아무리 많이 받아도
            기초연금은 기준연금액의 50%인 <strong>174,850원</strong> 이상
            받을 수 있습니다. 기초연금이 0원이 되는 일은 없습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 감액 기준선 */}
      <section className="detail-card" id="threshold">
        <h2 className="detail-card-head">얼마까지 받아야 감액 안 되나?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>국민연금 수령액</th><th>기초연금 감액 여부</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>월 30만원</td>
                <td><strong>감액 없음</strong> — 기초연금 전액 수령</td>
              </tr>
              <tr>
                <td>월 524,550원 이하</td>
                <td><strong>감액 없음</strong> — 기초연금 전액 수령</td>
              </tr>
              <tr>
                <td>월 60만원</td>
                <td><strong>감액 대상</strong> — 초과분에 따라 기초연금 일부 차감</td>
              </tr>
            </tbody>
          </table>
          <p>
            국민연금 월 524,550원이 갈림길입니다.
            이 금액 이하면 기초연금을 한 푼도 안 깎이고 전부 받습니다.
            본인의 국민연금 수령액은 국민연금공단(☎1355)에 전화하면
            바로 확인할 수 있습니다.
          </p>
        </div>
      </section>

      {/* H2-4: 용어 정리 */}
      <section className="detail-card" id="terms">
        <h2 className="detail-card-head">노령연금·기초연금·국민연금 용어 정리</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>헷갈리는 이름</th><th>실제 의미</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>기초연금</td>
                <td>국가가 세금으로 주는 노후 지원금 (소득하위 70%)</td>
              </tr>
              <tr>
                <td>기초노령연금</td>
                <td>기초연금의 <strong>옛 이름</strong> (2014년 명칭 변경)</td>
              </tr>
              <tr>
                <td>노령연금</td>
                <td>국민연금의 정식 급여명. 내가 낸 보험료 기반</td>
              </tr>
              <tr>
                <td>기초생활수급</td>
                <td>기초연금과 <strong>완전히 다른 제도</strong>. 생활이 어려운 분을 위한 최저생활 보장</td>
              </tr>
            </tbody>
          </table>
          <p>
            &quot;기초&quot;가 들어간 이름이 세 가지나 되다 보니 혼동하기 쉽습니다.
            기초연금은 65세 이상 소득하위 70%,
            기초생활수급은 나이 무관 최저생활 보장이라는 점이 가장 큰 차이입니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="action">
        <h2 className="detail-card-head">내 감액 여부, 직접 확인하세요</h2>
        <div className="detail-card-body">
          <p>
            국민연금공단 ☎1355로 전화하면
            본인의 국민연금 수령액과 기초연금 감액 여부를 바로 확인할 수 있습니다.
          </p>
          <a href="tel:1355" className="btn-cta">
            국민연금공단 1355 전화하기
          </a>
        </div>
      </section>
    </>
  );
}

export const 국민연금차이SpokeContent: SpokeData = {
  h1: '기초연금 노령연금 차이, 둘 다 받을 수 있나',
  breadcrumb: '국민연금 차이',
  description:
    '기초연금과 국민연금(노령연금)의 차이를 비교합니다. 국민연금 월 524,550원 이하면 기초연금 감액 없이 전액 수령. 연계감액 기준, 최소 보장액, 헷갈리는 용어까지 정리했습니다.',
  datePublished: '2026-01-10T09:00:00+09:00',
  dateModified: '2026-03-21T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '국민연금 안 냈어도 기초연금 받을 수 있나요?',
      a: '받을 수 있습니다. 기초연금은 국민연금 납부 이력과 무관합니다. 소득인정액 기준만 충족하면 됩니다.',
      source: 'K-공감 기초연금 안내',
      sourceUrl: 'https://gonggam.korea.kr',
    },
    {
      q: '공무원연금 받으면 기초연금 못 받나요?',
      a: '직역연금(공무원·군인·사학·별정우체국) 수급권자 및 배우자는 기초연금 대상에서 제외됩니다. 단, 재직기간 10년 미만으로 일시금을 받은 경우에는 신청이 가능합니다.',
      source: '보건복지부 기초연금 제도안내',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    {
      q: '기초노령연금이랑 기초연금이 같은 건가요?',
      a: '같은 제도입니다. 2014년에 기초노령연금에서 기초연금으로 이름이 바뀌었습니다.',
      source: 'K-공감 기초연금 안내',
      sourceUrl: 'https://gonggam.korea.kr',
    },
    { q: '국민연금과 기초연금을 동시에 받을 수 있나요?', a: '원칙적으로 동시 수령이 가능하지만, 국민연금 수령액이 일정 금액을 초과하면 기초연금이 감액됩니다.', source: '보건복지부·국민연금공단 공식 안내', sourceUrl: 'https://www.mohw.go.kr' },
    { q: '기초연금 수급에 국민연금 가입이 영향을 미치나요?', a: '국민연금 가입 이력과 수령액이 기초연금 감액 여부를 결정하는 핵심 기준입니다. 국민연금 수령액이 높을수록 기초연금이 줄어들 수 있습니다.', source: '보건복지부·국민연금공단 공식 안내', sourceUrl: 'https://www.mohw.go.kr' },
  ],
  sources: [
    { name: 'K-공감 기초연금 안내 (2026.03.03)', url: 'https://gonggam.korea.kr' },
    { name: '보건복지부 기초연금 제도안내', url: 'https://basicpension.mohw.go.kr' },
    { name: '국민연금공단', url: 'https://www.nps.or.kr' },
  ],
};
