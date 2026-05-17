import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2025년도 에너지바우처 신청 기간은
          <strong>2025년 6월 9일부터 12월 31일</strong>까지이며,
          사용 기간은 <strong>2025년 7월 1일~2026년 5월 25일</strong>입니다.
          지원금액은 가구원 수에 따라
          <strong>1인 295,200원~4인 이상 701,300원</strong>이며,
          하절기와 동절기로 나눠 지원됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "에너지바우처 신청 기간이 언제까지인가요?" 신청 기간과 사용 기간은 다릅니다.
        2025년도 기준으로 신청 일정과 지원금액을 정리했습니다.
      </p>

      <section className="detail-card" id="period">
        <h2 className="detail-card-head">2026년 에너지바우처 신청 기간과 지원금액 | 하절기·동절기 구분</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>기간</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>신청 기간</strong></td>
                <td>2025년 6월 9일 ~ 2025년 12월 31일</td>
              </tr>
              <tr>
                <td><strong>사용 기간 (하절기)</strong></td>
                <td>2025년 7월 1일 ~ 2025년 9월 30일</td>
              </tr>
              <tr>
                <td><strong>사용 기간 (동절기)</strong></td>
                <td>2025년 10월 1일 ~ 2026년 5월 25일</td>
              </tr>
              <tr>
                <td><strong>요금차감 마감</strong></td>
                <td>2026년 5월 25일 (전기·가스·지역난방)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            신청은 2025년 12월 31일까지이지만, 사용(차감) 기간은 2026년 5월 25일까지입니다.
            신청 후 자동 차감 또는 국민행복카드로 사용 기간 내에 써야 합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">가구원 수별 지원금액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가구원 수</th><th>지원금액 (연간)</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1인</td>
                <td><strong>295,200원</strong></td>
              </tr>
              <tr>
                <td>2인</td>
                <td><strong>407,500원</strong></td>
              </tr>
              <tr>
                <td>3인</td>
                <td><strong>532,700원</strong></td>
              </tr>
              <tr>
                <td>4인 이상</td>
                <td><strong>701,300원</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            지원금액은 하절기·동절기로 나뉘어 지급됩니다.
            요금차감 방식은 전기·가스·지역난방 요금에서 자동 차감,
            국민행복카드 방식은 등유·LPG·연탄 가맹점에서 직접 결제합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="how-to-apply">
        <h2 className="detail-card-head">신청 방법 — 신규 신청과 자동신청 구분</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신규 신청:</strong> 거주지 읍·면·동 행정복지센터(주민센터) 방문 신청.
            거동이 불편한 경우 친족이 대리 신청 가능.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자동 신청:</strong> 전년도 수급자이고 자격·세대원·주소 변동 없으면 별도 신청 불필요.
          </div>
          <div className="info-box">
            <strong>확인:</strong> energyv.or.kr 또는 콜센터 1600-3190(평일 09:00~18:00)에서
            자동신청 여부 및 신청 상태 확인 가능.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            사용처, 대상자 확인, 자동신청 여부 등<br />
            에너지바우처 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/energy-voucher" className="btn-cta">
            에너지바우처 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 에너지바우처신청기간SpokeContent: SpokeData = {
  h1: '2026년 에너지바우처 신청 기간과 지원금액 | 하절기·동절기 구분',
  breadcrumb: '신청기간',
  description:
    '에너지바우처 신청기간: 2025년 6월 9일~12월 31일. 사용기간: 하절기 2025.7.1~9.30, 동절기 2025.10.1~2026.5.25. 지원금액: 1인 295,200원, 2인 407,500원, 3인 532,700원, 4인 이상 701,300원. 신규는 주민센터 방문, 전년도 수급자는 자동신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '에너지바우처 신청 기간이 언제인가요?',
      a: '2025년도 에너지바우처 신청 기간은 2025년 6월 9일부터 12월 31일까지입니다.',
      source: '에너지바우처 신청안내',
      sourceUrl: 'https://www.energyv.or.kr/info/apl_info.do',
    },
    {
      q: '신청은 했는데 언제까지 사용해야 하나요?',
      a: '사용 기간은 하절기(2025.7.1~9.30)와 동절기(2025.10.1~2026.5.25)로 나뉩니다. 요금차감 방식은 2026년 5월 25일까지 자동 처리됩니다.',
      source: '에너지바우처 사용안내',
      sourceUrl: 'https://www.energyv.or.kr/info/use_info.do',
    },
    {
      q: '1인 가구는 얼마나 받나요?',
      a: '1인 가구는 연간 295,200원을 지원받습니다. 2인은 407,500원, 3인은 532,700원, 4인 이상은 701,300원입니다.',
      source: '에너지바우처 신청안내',
      sourceUrl: 'https://www.energyv.or.kr/info/apl_info.do',
    },
    {
      q: '하절기와 동절기 지원금액이 다른가요?',
      a: '연간 지원금액이 하절기와 동절기로 나뉘어 지급됩니다. 동절기 지원 비중이 더 큽니다. 정확한 시기별 금액은 energyv.or.kr에서 확인하세요.',
      source: '에너지바우처 홈',
      sourceUrl: 'https://www.energyv.or.kr',
    },
    {
      q: '신청 기간이 지나면 신청할 수 없나요?',
      a: '신청 기간 내에 신청해야 합니다. 기간이 지난 후에는 신청이 불가하므로 기간 내에 반드시 신청하세요.',
      source: '에너지바우처 신청안내',
      sourceUrl: 'https://www.energyv.or.kr/info/apl_info.do',
    },
  ],
  sources: [
    { name: '에너지바우처 신청안내', url: 'https://www.energyv.or.kr/info/apl_info.do' },
    { name: '에너지바우처 사용안내', url: 'https://www.energyv.or.kr/info/use_info.do' },
    { name: '에너지바우처 홈', url: 'https://www.energyv.or.kr' },
  ],
};
