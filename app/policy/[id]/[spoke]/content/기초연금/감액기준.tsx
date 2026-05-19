import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          기초연금이 깎이는 경우는 크게 3가지입니다. 국민연금 연계감액,
          부부감액, 소득역전방지감액. 어떤 경우든 기준연금액의
          50%(174,850원)는 반드시 보장됩니다.
        </p>
      </div>

      {/* [기] 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        기초연금을 받고 있는데 갑자기 금액이 줄어들까 봐 걱정되시죠?
        감액 기준을 미리 알아두면 불안할 이유가 없습니다.
        어떤 경우에 깎이고, 최소 얼마는 보장되는지 정리했습니다.
      </p>

      {/* H2-1: 국민연금 연계감액 */}
      <section className="detail-card" id="nps">
        <h2 className="detail-card-head">국민연금 연계감액이란?</h2>
        <div className="detail-card-body">
          <p>
            국민연금 월 수령액이 <strong>524,550원</strong>(기준연금액 349,700원의 150%)을
            초과하면 기초연금이 줄어듭니다. 국민연금을 많이 받을수록 기초연금이
            단계적으로 감액되는 구조입니다.
          </p>
          <p>
            감액되더라도 기준연금액의 50%인 <strong>최소 174,850원</strong>은
            보장됩니다. 국민연금이 아무리 많아도 기초연금이 0원이 되지는 않습니다.
          </p>
          <table className="compare-table">
            <thead>
              <tr>
                <th>국민연금 수령액</th>
                <th>기초연금 (예상)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>40만원</td>
                <td><strong>349,700원</strong> (감액 없음)</td>
              </tr>
              <tr>
                <td>60만원</td>
                <td>약 <strong>30만원</strong></td>
              </tr>
              <tr>
                <td>100만원 이상</td>
                <td><strong>174,850원</strong> (최소 보장)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* H2-2: 부부감액 */}
      <section className="detail-card" id="couple">
        <h2 className="detail-card-head">부부감액은 얼마나?</h2>
        <div className="detail-card-body">
          <p>
            부부가 둘 다 기초연금 수급자이면 각각 20%가 감액됩니다.
            1인 349,700원에서 각 279,760원으로 줄고, 부부 합산 559,520원을 받습니다.
          </p>
          <p>
            2027년부터 감액률이 10%로 축소될 예정이고, 장기적으로 폐지를 추진 중입니다.
            구체적인 시나리오별 금액은{' '}
            <a href="/policy/2/부부감액">부부감액 상세 가이드</a>에서 확인하세요.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 소득역전방지감액 */}
      <section className="detail-card" id="reversal">
        <h2 className="detail-card-head">소득역전방지감액이란?</h2>
        <div className="detail-card-body">
          <p>
            소득인정액에 기초연금을 더한 금액이 선정기준액을 넘으면,
            넘는 만큼 기초연금에서 깎는 제도입니다. 선정기준액 근처에서
            기초연금 때문에 비수급자보다 총소득이 역전되는 걸 막기 위한 장치입니다.
          </p>
          <p>
            <strong>예시:</strong> 단독가구, 소득인정액 240만원인 경우
          </p>
          <ul style={{ listStyle: 'disc', paddingLeft: 20, lineHeight: 2 }}>
            <li>소득인정액 240만원 + 기초연금 34.97만원 = 274.97만원</li>
            <li>선정기준액 247만원 초과분: 27.97만원</li>
            <li>기초연금 34.97만원 − 27.97만원 = <strong>실수령 약 7만원</strong></li>
          </ul>
          <div className="warning-box">
            선정기준액 턱걸이로 통과한 분은 소득역전방지감액으로
            실수령액이 크게 줄 수 있습니다. 소득인정액이 기준 근처라면
            미리 국민연금공단(☎1355)에 문의해보세요.
          </div>
        </div>
      </section>

      {/* H2-4: 감액 피하는 법 */}
      <section className="detail-card" id="tips">
        <h2 className="detail-card-head">감액 피하는 방법 있나?</h2>
        <div className="detail-card-body">
          <ul style={{ listStyle: 'disc', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>
              <strong>국민연금 연계감액:</strong> 법정 기준이라 피할 방법이 없습니다.
              국민연금 수령액을 조절할 수 없으니 그대로 받는 게 유리합니다.
            </li>
            <li>
              <strong>부부감액:</strong> 2027년 10%로 축소 예정이며,
              장기적으로 폐지를 추진 중입니다.
            </li>
            <li>
              <strong>소득역전방지:</strong> 소득이 줄면 자동으로 해소됩니다.
              매년 소득·재산 정기 재조사가 이루어집니다.
            </li>
          </ul>
          <p>
            어떤 감액이 중복으로 적용되더라도 기준연금액의 50%인
            <strong> 최소 174,850원은 반드시 보장</strong>됩니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* [결] CTA */}
      <section className="detail-card" id="action">
        <h2 className="detail-card-head">내 감액 여부 확인하기</h2>
        <div className="detail-card-body">
          <p>
            복지로 모의계산에서 소득·재산 정보를 넣으면 감액 여부와
            예상 수령액을 바로 확인할 수 있습니다.
          </p>
          <a href="https://www.bokjiro.go.kr" className="btn-cta">
            복지로에서 감액 여부 확인하기
          </a>
        </div>
      </section>
    </>
  );
}

export const 감액기준SpokeContent: SpokeData = {
  h1: '기초연금 감액되는 경우 3가지',
  breadcrumb: '감액기준',
  description:
    '기초연금이 감액되는 3가지 경우를 정리합니다. 국민연금 연계감액(524,550원 초과 시), 부부감액(20%), 소득역전방지감액 기준과 계산 예시, 최소 보장액까지.',
  datePublished: '2026-01-10T09:00:00+09:00',
  dateModified: '2026-03-21T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기초연금이 0원이 될 수도 있나요?',
      a: '불가능합니다. 기준연금액의 50%(174,850원)는 어떤 감액이 적용되더라도 반드시 보장됩니다.',
      source: '보건복지부 기초연금 제도안내',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    {
      q: '소득이 늘면 기초연금이 바로 줄어드나요?',
      a: '바로 줄지는 않습니다. 매년 소득·재산 정기조사로 반영되며, 소득 변동이 있으면 다음 조사에서 조정됩니다.',
      source: 'K-공감 기초연금 안내',
      sourceUrl: 'https://gonggam.korea.kr',
    },
    {
      q: '감액 기준에 대해 이의신청할 수 있나요?',
      a: '가능합니다. 결정 통지를 받은 날부터 90일 이내에 이의신청할 수 있습니다. 읍면동 행정복지센터 또는 복지로에서 접수하세요.',
      source: '보건복지부 기초연금 FAQ',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    { q: '기초연금이 감액되는 주요 이유는 무엇인가요?', a: '국민연금 수령액이 기준연금액의 150%를 초과하거나, 부부가 함께 수급하거나, 고소득·고재산의 경우 감액될 수 있습니다.', source: '보건복지부·국민연금공단 공식 안내', sourceUrl: 'https://www.mohw.go.kr' },
    { q: '감액 후에도 최소 지급 금액이 있나요?', a: '부부 2인 수급 감액은 각 20%이며, 국민연금 연계 감액은 최대 50%까지 적용됩니다. 최소 지급 하한선은 별도 없지만 0원으로는 감액되지 않습니다.', source: '보건복지부·국민연금공단 공식 안내', sourceUrl: 'https://www.mohw.go.kr' },
  ],
  sources: [
    { name: 'K-공감 기초연금 안내 (2026.03.03)', url: 'https://gonggam.korea.kr' },
    { name: '보건복지부 기초연금 제도안내', url: 'https://basicpension.mohw.go.kr' },
    { name: '국민연금공단 기초연금 안내', url: 'https://www.nps.or.kr' },
  ],
};
