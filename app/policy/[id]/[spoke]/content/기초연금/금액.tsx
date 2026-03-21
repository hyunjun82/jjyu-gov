import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      {/* 빠른 답변 */}
      <div className="answer-box">
        <p>
          65세가 넘었는데 기초연금이 정확히 얼마인지 헷갈리시죠.
          2026년 기준, 소득 하위 50%는 <strong>월 40만원</strong>,
          50~70%는 <strong>월 349,700원</strong>을 받습니다.
          부부가 함께 받으면 각각 20% 감액돼서 합산 <strong>559,520원</strong>입니다.
        </p>
      </div>

      {/* [기] 서론 */}
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        65세가 넘어 기초연금을 신청하려는데, 뉴스마다 금액이 다르게 나와서
        혼란스러우셨을 겁니다. 2026년부터 소득 수준에 따라 금액이 달라졌기 때문입니다.
        아래에서 내 상황에 맞는 정확한 금액을 확인하세요.
      </p>

      {/* H2-1: 2026년 기초연금 금액 */}
      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">2026년 기초연금, 얼마 받나?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr>
                <th>구분</th>
                <th>단독가구</th>
                <th>부부가구 (1인당)</th>
                <th>부부 합산</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>소득 하위 50%</td>
                <td><strong>400,000원</strong></td>
                <td>320,000원</td>
                <td>640,000원</td>
              </tr>
              <tr>
                <td>소득 하위 50~70%</td>
                <td><strong>349,700원</strong></td>
                <td>279,760원</td>
                <td>559,520원</td>
              </tr>
            </tbody>
          </table>
          <p>
            기준연금액(감액 전 최대치)은 349,700원입니다.
            2026년부터 소득 하위 50% 어르신에게는 여기에 50,300원을 더해
            월 40만원을 지급합니다.
          </p>
          <div className="warning-box">
            <strong>부부감액 주의:</strong> 부부가 둘 다 받으면 각각 20%씩 깎입니다.
            40만원 대상이라도 1인당 32만원, 합산 64만원이 됩니다.
            2027년부터는 감액률이 10%로 줄어들 예정입니다.
          </div>
        </div>
      </section>

      {/* H2-2: 모의계산 */}
      <section className="detail-card" id="calculator">
        <h2 className="detail-card-head">내 수령액 모의계산</h2>
        <div className="detail-card-body">
          <p>
            기초연금은 소득인정액에 따라 금액이 달라지기 때문에
            직접 계산해보는 게 가장 정확합니다.
          </p>
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>
              <strong>복지로 모의계산:</strong>{' '}
              <a href="https://www.bokjiro.go.kr">www.bokjiro.go.kr</a>에서
              &quot;기초연금 모의계산&quot; 검색
            </li>
            <li>
              <strong>전화 상담:</strong> 국민연금공단 ☎1355 (평일 09~18시)
            </li>
            <li>
              <strong>방문 상담:</strong> 가까운 행정복지센터(주민센터)
            </li>
          </ol>
          <p>
            모의계산에 필요한 정보는 월소득, 재산(부동산 공시가격·예금·차량),
            부채 정도입니다. 미리 준비하면 5분이면 끝납니다.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-3: 40만원 인상 */}
      <section className="detail-card" id="increase">
        <h2 className="detail-card-head">기초연금 40만원 인상, 나도 해당되나?</h2>
        <div className="detail-card-body">
          <p>
            2026년 40만원 인상 대상은 <strong>소득 하위 50%</strong>입니다.
            선정기준액(단독 247만원) 이하 중에서도 소득인정액이
            더 낮은 절반이 해당됩니다.
          </p>
          <table className="compare-table">
            <thead>
              <tr><th>연도</th><th>40만원 대상</th><th>나머지</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>2026년</td>
                <td>소득 하위 50%</td>
                <td>50~70%는 349,700원</td>
              </tr>
              <tr>
                <td>2027년</td>
                <td>전체 수급자</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <p>
            지금 349,700원을 받고 있다면 2027년부터 자동으로 40만원으로 오릅니다.
            별도 재신청은 필요 없습니다.
          </p>
        </div>
      </section>

      {/* H2-4: 지급일 */}
      <section className="detail-card" id="payday">
        <h2 className="detail-card-head">매달 언제 들어오나</h2>
        <div className="detail-card-body">
          <p>
            기초연금은 <strong>매월 25일</strong>에 본인 명의 계좌로 입금됩니다.
            25일이 토요일·일요일·공휴일이면 그 직전 영업일에 앞당겨 지급합니다.
          </p>
          <div className="warning-box">
            <strong>첫 수령 시기:</strong> 신청한 달부터 지급 대상이 되지만,
            심사에 1~2개월 걸릴 수 있습니다. 심사가 끝나면 신청월분부터
            소급해서 한꺼번에 입금됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* CTA */}
      <section className="detail-card" id="action">
        <h2 className="detail-card-head">내 기초연금 금액 확인하기</h2>
        <div className="detail-card-body">
          <p>
            소득·재산 정보를 입력하면 예상 수령액을 바로 확인할 수 있습니다.
          </p>
          <a href="https://www.bokjiro.go.kr" className="btn-cta">
            복지로에서 모의계산 해보기
          </a>
        </div>
      </section>
    </>
  );
}

export const 금액SpokeContent: SpokeData = {
  h1: '2026 기초연금 금액, 최대 40만원 받으려면',
  breadcrumb: '금액',
  description:
    '2026년 기초연금 금액을 정리합니다. 소득하위 50%는 월 40만원, 50~70%는 349,700원. 부부 합산 559,520원. 40만원 인상 대상과 지급일까지 확인하세요.',
  datePublished: '2026-01-10T09:00:00+09:00',
  dateModified: '2026-03-21T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기초연금 40만원은 모든 어르신이 받나요?',
      a: '2026년에는 소득 하위 50%만 40만원을 받습니다. 50~70%는 349,700원입니다. 2027년부터 전체 수급자에게 40만원이 확대됩니다.',
      source: 'K-공감 기초연금 인상 안내',
      sourceUrl: 'https://gonggam.korea.kr',
    },
    {
      q: '국민연금 받으면 기초연금이 줄어드나요?',
      a: '국민연금 수령액이 기준연금액의 150%(524,550원)를 넘으면 기초연금이 일부 감액됩니다. 524,550원 이하라면 감액 없이 전액 수령합니다.',
      source: '보건복지부 기초연금 제도안내',
      sourceUrl: 'https://basicpension.mohw.go.kr',
    },
    {
      q: '부부가 둘 다 받으면 80만원인가요?',
      a: '아닙니다. 부부가 둘 다 수급하면 각각 20% 감액됩니다. 40만원 대상이라도 1인당 32만원, 합산 64만원입니다. 349,700원 대상이면 합산 559,520원입니다.',
      source: 'K-공감 기초연금 안내',
      sourceUrl: 'https://gonggam.korea.kr',
    },
  ],
  sources: [
    { name: 'K-공감 기초연금 안내 (2026.03.03)', url: 'https://gonggam.korea.kr' },
    { name: '보건복지부 기초연금 제도안내', url: 'https://basicpension.mohw.go.kr' },
    { name: '복지로 기초연금 모의계산', url: 'https://www.bokjiro.go.kr' },
  ],
};
