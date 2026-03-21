import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          만 65세 이상이고, 소득인정액이 단독가구 247만원(부부 395.2만원) 이하라면
          기초연금을 받을 수 있습니다. 소득 하위 70%가 대상이니, 10명 중 7명은
          해당됩니다. 2026년부터 소득하위 50%는 월 40만원을 받습니다.
        </p>
      </div>

      {/* [기] 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        나이도 됐고 소득도 많지 않은데, 진짜 내가 받을 수 있는 건지 확신이 안 서시죠?
        조건은 딱 3가지입니다. 나이, 소득인정액, 직역연금 여부.
        아래에서 하나씩 확인하면 1분이면 답이 나옵니다.
      </p>

      {/* H2-1: 나이 조건 */}
      <section className="detail-card" id="age">
        <h2 className="detail-card-head">몇 살부터 받을 수 있나?</h2>
        <div className="detail-card-body">
          <p>
            만 65세 이상이면 신청할 수 있습니다.
            65세 생일이 속하는 달의 1개월 전 첫날부터 미리 신청이 가능합니다.
          </p>
          <p>
            예를 들어 1961년 8월생이라면 2026년 7월 1일부터 신청서를 낼 수 있습니다.
            미리 낸다고 불이익은 없으니, 생일 직전 달에 바로 신청하세요.
          </p>
        </div>
      </section>

      {/* H2-2: 소득인정액 기준 */}
      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득인정액, 얼마 이하여야 하나?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가구 유형</th><th>선정기준액 (2026년)</th></tr>
            </thead>
            <tbody>
              <tr><td>단독가구</td><td><strong>247만원</strong></td></tr>
              <tr><td>부부가구</td><td><strong>395만 2,000원</strong></td></tr>
            </tbody>
          </table>
          <p>
            소득인정액은 실제 월수입과 다릅니다. 근로소득은 116만원 공제 후
            30% 추가공제가 되고, 재산은 기본공제(대도시 1.35억) 후 연 4%로
            환산합니다. 실제 소득보다 소득인정액이 낮게 나오는 경우가 많습니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 직역연금 제외 */}
      <section className="detail-card" id="exclusion">
        <h2 className="detail-card-head">받을 수 없는 사람은?</h2>
        <div className="detail-card-body">
          <p>소득인정액 기준을 충족해도 아래에 해당하면 대상에서 제외됩니다.</p>
          <ul style={{ listStyle: 'disc', paddingLeft: 20, lineHeight: 2 }}>
            <li>공무원연금 수급권자 및 그 배우자</li>
            <li>사립학교 교직원연금 수급권자 및 그 배우자</li>
            <li>군인연금 수급권자 및 그 배우자</li>
            <li>별정우체국직원연금 수급권자 및 그 배우자</li>
          </ul>
          <div className="warning-box">
            <strong>예외:</strong> 직역연금 재직기간이 10년 미만인 분이 일시금을 받은 경우,
            직역연금 연계퇴직연금을 받는 경우, 유족연금을 받는 경우에는
            기초연금 신청이 가능합니다.
          </div>
        </div>
      </section>

      {/* H2-4: 국민연금과의 관계 */}
      <section className="detail-card" id="national-pension">
        <h2 className="detail-card-head">국민연금 받고 있어도 되나?</h2>
        <div className="detail-card-body">
          <p>
            국민연금과 기초연금은 별개 제도이므로 동시에 받을 수 있습니다.
            다만, 국민연금 수령액이 기준연금액(34만 9,700원)의 150%인
            <strong>월 524,550원을 초과</strong>하면 기초연금이 일부 감액됩니다.
          </p>
          <p>
            국민연금 월 524,550원 이하면 기초연금 전액을 받습니다.
            초과하더라도 기초연금이 0원이 되지는 않고,
            최소 174,850원(기준연금액의 50%)은 보장됩니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-5: 지금 해야 할 것 */}
      <section className="detail-card" id="action">
        <h2 className="detail-card-head">신청 전 확인할 3가지</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>
              <strong>나이 확인:</strong> 만 65세 이상 (생일 1개월 전부터 신청 가능)
            </li>
            <li>
              <strong>소득인정액 확인:</strong> 국민연금공단 ☎1355에서 모의계산 가능
            </li>
            <li>
              <strong>직역연금 여부:</strong> 공무원·군인연금 수급자는 확인 필요
            </li>
          </ol>
          <p>
            세 가지 모두 통과한다면 행정복지센터에 신분증과 통장 사본만 가져가면 됩니다.
            복지로(www.bokjiro.go.kr)에서 온라인 신청도 가능합니다.
          </p>
        </div>
      </section>
    </>
  );
}

export const 수급자격SpokeContent: SpokeData = {
  h1: '기초연금 수급자격, 나도 받을 수 있을까',
  breadcrumb: '수급자격',
  description:
    '2026년 기초연금 수급자격을 알아봅니다. 만 65세 이상, 소득인정액 단독 228만원·부부 364.8만원 이하면 대상입니다. 제외 대상, 신청 시기, 확인 방법까지.',
  datePublished: '2026-01-10T09:00:00+09:00',
  dateModified: '2026-03-21T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '연금 하나도 안 내고 살았는데 기초연금 받을 수 있나요?',
      a: '받을 수 있습니다. 기초연금은 국민연금 납부 이력과 무관합니다. 만 65세 이상이고 소득인정액 기준만 충족하면 됩니다.',
      source: 'K-공감 기초연금 안내',
      sourceUrl: 'https://gonggam.korea.kr',
    },
    {
      q: '외국인도 기초연금을 받을 수 있나요?',
      a: '대한민국 국적자만 받을 수 있습니다. 다만 외국 국적 취득 후 복수국적자라면 국내 거주 기간 등에 따라 다를 수 있으니 행정복지센터에 확인하세요.',
      source: '보건복지부 기초연금 FAQ',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    {
      q: '소득인정액은 어디서 확인하나요?',
      a: '국민연금공단(☎1355)에 전화하면 모의 계산을 해줍니다. 복지로(www.bokjiro.go.kr)에서도 모의계산 서비스를 이용할 수 있습니다.',
      source: '소득인정액 계산법 가이드',
      sourceUrl: '/policy/2/소득인정액-계산',
    },
  ],
  sources: [
    { name: 'K-공감 기초연금 안내 (2026.03.03)', url: 'https://gonggam.korea.kr' },
    { name: '보건복지부 기초연금 제도안내', url: 'https://basicpension.mohw.go.kr' },
    { name: '복지로 기초연금 신청', url: 'https://www.bokjiro.go.kr' },
  ],
};
