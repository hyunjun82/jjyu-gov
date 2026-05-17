import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          정기신청(5~6월)은 <strong>8월 말~9월 중</strong>, 반기 하반기분(3월 신청)은 <strong>6월 말</strong>,
          반기 상반기분(9월 신청)은 <strong>12월 말</strong> 입금됩니다.
          기한 후 신청(6월 2일~12월 1일)은 산정액의 95%만 지급되고 신청월에서 약 3개월 후 입금됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        신청은 했는데 돈이 언제 들어오는지 가장 궁금하죠. 정기인지 반기인지,
        상반기·하반기 중 어느 시기인지에 따라 입금일이 달라집니다.
        아래 표에서 내 신청 유형을 찾아 지급일을 바로 확인하세요.
      </p>

      <section className="detail-card" id="schedule">
        <h2 className="detail-card-head">2026 근로장려금 지급일 전체 일정표</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>신청 유형</th><th>신청 기간</th><th>지급 시기</th><th>신청 가능 대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>반기 하반기분</td>
                <td>3월 1일 ~ 3월 16일</td>
                <td><strong>6월 말</strong></td>
                <td>근로소득자만</td>
              </tr>
              <tr>
                <td>정기신청</td>
                <td>5월 1일 ~ 6월 1일</td>
                <td><strong>8월 말~9월 중</strong></td>
                <td>근로·사업·종교인</td>
              </tr>
              <tr>
                <td>기한 후 신청</td>
                <td>6월 2일 ~ 12월 1일</td>
                <td><strong>신청월 +3개월</strong></td>
                <td>근로·사업·종교인</td>
              </tr>
              <tr>
                <td>반기 상반기분</td>
                <td>9월 1일 ~ 9월 15일</td>
                <td><strong>12월 말</strong></td>
                <td>근로소득자만</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>기한 후 신청 주의:</strong> 6월 1일 마감 이후 신청하면 산정액의 <strong>95%</strong>만 지급됩니다.
            5%를 포기하더라도 아예 안 받는 것보다 낫습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="regular">
        <h2 className="detail-card-head">정기신청 지급일: 8월 말~9월 중</h2>
        <div className="detail-card-body">
          <p>
            5월 1일부터 6월 1일까지 정기신청하면, 국세청이 소득·재산 자료를 심사한 후
            <strong> 8월 말부터 9월 중</strong>에 순차적으로 지급합니다. 신청 시점과 관계없이
            같은 기간 내에 신청한 사람은 모두 같은 시기에 받습니다.
          </p>
          <p>
            정기신청은 근로소득자 외에 사업소득자·종교인도 신청할 수 있는 유일한 기회입니다.
            반기신청을 놓쳤거나 사업·종교인 소득자라면 반드시 정기신청을 이용하세요.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="semi">
        <h2 className="detail-card-head">반기신청 지급일: 6월 말 또는 12월 말</h2>
        <div className="detail-card-body">
          <p>
            반기신청은 <strong>근로소득자만</strong> 신청할 수 있으며, 연 2회 나눠 받습니다.
            정기신청보다 2~3개월 빨리 받을 수 있다는 게 장점입니다.
          </p>
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>신청 기간</th><th>지급 시기</th><th>지급 비율</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>하반기분</td>
                <td>3월 1일~16일</td>
                <td><strong>6월 말</strong></td>
                <td rowSpan={2}>예상 연간액의 35%씩</td>
              </tr>
              <tr>
                <td>상반기분</td>
                <td>9월 1일~15일</td>
                <td><strong>12월 말</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            반기신청은 예상 연간 산정액의 35%씩 두 번 받고, 이듬해(2027년) 9월에 정산됩니다.
            실제보다 적게 받은 경우 차액이 추가 지급되고, 초과 수령한 경우 환수됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">내 근로장려금 지급일 지금 조회하는 방법</h2>
        <div className="detail-card-body">
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, lineHeight: 2.2 }}>
            <li>홈택스(hometax.go.kr) 또는 손택스 앱 로그인</li>
            <li>상단 메뉴 → <strong>장려금·연말정산·전자기부금</strong> 클릭</li>
            <li>근로·자녀장려금 → <strong>장려금 심사 진행 상황 조회</strong> 선택</li>
            <li>심사 중 / 지급 결정 / 지급 완료 여부 확인</li>
          </ol>
          <p style={{ marginTop: 8 }}>
            전화 조회도 가능합니다: <strong>국세청 상담센터 ☎126</strong> (평일 9시~18시)
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="cases">
        <h2 className="detail-card-head">이런 경우 지급일이 달라질 수 있어요</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>계좌번호를 잘못 입력한 경우</strong><br />
            지급 불능 처리됩니다. 홈택스에서 계좌를 정정하면 다음 지급 차수에 입금됩니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사업소득자가 반기신청을 한 경우</strong><br />
            반기신청은 자동으로 정기신청으로 처리되어 다음 해 9월에 정산·지급됩니다.
          </div>
          <div className="info-box">
            <strong>6월 이후 기한 후 신청한 경우</strong><br />
            산정액의 95%만 받고 신청월 기준 약 3개월 후 입금됩니다.
            (예: 7월 신청 → 10월 지급, 9월 신청 → 12월 지급)
          </div>
        </div>
      </section>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급액 기준(단독 165만·홑벌이 285만·맞벌이 330만원), 신청 조건,<br />
            자녀장려금 중복 등 근로장려금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/earned-income-tax-credit" className="btn-cta">
            2026 근로장려금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 지급일SpokeContent: SpokeData = {
  h1: '2026 근로장려금 지급일 정기·반기 언제 입금되나요',
  breadcrumb: '지급일',
  description:
    '2026 근로장려금 지급일을 정리했습니다. 정기신청(5~6월)은 8월 말~9월 중, 반기 하반기분(3월 신청)은 6월 말, 반기 상반기분(9월 신청)은 12월 말 입금됩니다. 조회 방법과 지연 사례까지 안내합니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '근로장려금 정기신청하면 언제 입금되나요?',
      a: '5월 1일~6월 1일에 정기신청하면 8월 말~9월 중에 입금됩니다. 신청 시점과 관계없이 같은 시기에 일괄 지급됩니다.',
      source: '삼쩜삼 2026 근로장려금 반기 신청 안내',
      sourceUrl: 'https://blog.3o3.co.kr/2026_work_incentives/',
    },
    {
      q: '반기신청과 정기신청 지급일 차이가 얼마나 나나요?',
      a: '반기 하반기분(3월 신청)은 6월 말 지급으로 정기신청보다 약 2~3개월 빠릅니다. 단, 근로소득자만 반기신청이 가능합니다.',
      source: '삼쩜삼 2026 근로장려금 반기 신청 안내',
      sourceUrl: 'https://blog.3o3.co.kr/2026_work_incentives/',
    },
    {
      q: '6월 1일을 넘겨서 신청하면 받을 수 있나요?',
      a: '받을 수 있습니다. 6월 2일~12월 1일에 기한 후 신청하면 산정액의 95%가 신청월 기준 약 3개월 후 지급됩니다.',
      source: '위기브 2026 근로장려금 정기신청 지급일 안내',
      sourceUrl: 'https://www.wegive.co.kr/wezine/detail?id=1308',
    },
    {
      q: '반기신청 금액은 왜 적게 나오나요?',
      a: '반기신청은 예상 연간 산정액의 35%씩만 지급됩니다. 나머지는 다음 해 정기신청 때 정산되어 추가 지급되거나 환수됩니다.',
      source: '삼쩜삼 2026 근로장려금 반기 신청 안내',
      sourceUrl: 'https://blog.3o3.co.kr/2026_work_incentives/',
    },
    {
      q: '지급 여부를 어디서 확인하나요?',
      a: '홈택스(hometax.go.kr) → 장려금·연말정산·전자기부금 → 장려금 심사 진행 상황 조회에서 확인하거나, 국세청 ☎126으로 전화 조회하면 됩니다.',
      source: '국세청 홈택스',
      sourceUrl: 'https://hometax.go.kr',
    },
  ],
  sources: [
    { name: '국세청 근로·자녀장려금 신청기간 및 방법', url: 'https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?mi=2339&cntntsId=7931' },
    { name: '삼쩜삼 2026 근로장려금 반기 신청 안내 (2026.03.03)', url: 'https://blog.3o3.co.kr/2026_work_incentives/' },
    { name: '위기브 2026 근로장려금 정기신청 지급일 안내 (2026.04.18)', url: 'https://www.wegive.co.kr/wezine/detail?id=1308' },
  ],
};
