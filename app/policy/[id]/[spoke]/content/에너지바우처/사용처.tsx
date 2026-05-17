import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          에너지바우처는 <strong>전기·도시가스·지역난방·등유·LPG·연탄</strong>
          6가지 에너지를 구입하는 데 사용할 수 있습니다.
          전기·도시가스·지역난방은 <strong>요금 자동 차감</strong> 방식으로,
          등유·LPG·연탄은 <strong>국민행복카드</strong>로 가맹점에서 직접 구매합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "에너지바우처로 어디에서 쓸 수 있나요?" 에너지 종류별로 사용 방식이 다릅니다.
        사용처와 가맹점 확인 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="usage">
        <h2 className="detail-card-head">에너지바우처는 전기·도시가스·LPG 모두 쓸 수 있다 | 사용처와 가맹점</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>에너지 종류</th><th>사용 방식</th><th>신청·결제처</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>전기</td>
                <td><strong>요금 자동 차감</strong></td>
                <td>한국전력공사 요금에서 자동 차감</td>
              </tr>
              <tr>
                <td>도시가스</td>
                <td><strong>가상계좌 이체</strong></td>
                <td>지역 도시가스사 요금 납부</td>
              </tr>
              <tr>
                <td>지역난방</td>
                <td><strong>요금 자동 차감</strong></td>
                <td>한국지역난방공사 열요금 납부</td>
              </tr>
              <tr>
                <td>등유·LPG</td>
                <td><strong>국민행복카드 결제</strong></td>
                <td>에너지바우처 가맹점에서 직접 구매</td>
              </tr>
              <tr>
                <td>연탄</td>
                <td><strong>국민행복카드 결제</strong></td>
                <td>에너지바우처 가맹점에서 직접 구매</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="two-methods">
        <h2 className="detail-card-head">요금차감 방식 vs 국민행복카드 방식 — 어떤 걸 선택하나</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>방식</th><th>특징</th><th>대상 에너지</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>요금차감 (가상카드)</td>
                <td>전기·도시가스·지역난방 요금에서 자동 차감. 별도 카드 불필요.</td>
                <td>전기·도시가스·지역난방</td>
              </tr>
              <tr>
                <td>국민행복카드 (실물카드)</td>
                <td>가맹점에서 카드로 직접 결제. 등유·LPG·연탄 구매 가능.</td>
                <td>등유·LPG·연탄 (+ 전기·가스도 가능)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            주로 전기·가스를 사용하는 가구는 요금차감이 편리하고,
            등유·LPG를 사용하는 가구는 국민행복카드가 필요합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="merchants">
        <h2 className="detail-card-head">가맹점 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인 조회:</strong> energyv.or.kr → 사용방법 → 가맹점 조회에서
            등유·LPG·연탄 판매 가맹점 검색 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>콜센터:</strong> 1600-3190 (평일 09:00~18:00, 점심 12~13시 제외)
          </div>
          <div className="info-box">
            <strong>주민센터:</strong> 읍·면·동 행정복지센터에서 가맹점 안내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 지원금액, 자동신청 여부 등<br />
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

export const 에너지바우처사용처SpokeContent: SpokeData = {
  h1: '에너지바우처는 전기·도시가스·LPG 모두 쓸 수 있다 | 사용처와 가맹점',
  breadcrumb: '사용처',
  description:
    '에너지바우처 사용처: 전기(한국전력 자동차감)·도시가스·지역난방·등유·LPG·연탄 6가지. 요금차감(가상카드) 또는 국민행복카드(실물카드) 중 선택. 가맹점 조회는 energyv.or.kr 또는 1600-3190.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '에너지바우처로 전기요금을 낼 수 있나요?',
      a: '네. 요금차감 방식을 선택하면 한국전력공사 전기요금에서 자동으로 차감됩니다.',
      source: '에너지바우처 사용안내',
      sourceUrl: 'https://www.energyv.or.kr/info/use_info.do',
    },
    {
      q: '에너지바우처로 등유를 살 수 있나요?',
      a: '네. 국민행복카드를 이용해 에너지바우처 가맹 등유 판매점에서 결제할 수 있습니다. 가맹점 조회는 energyv.or.kr에서 가능합니다.',
      source: '에너지바우처 사용안내',
      sourceUrl: 'https://www.energyv.or.kr/info/use_info.do',
    },
    {
      q: '요금차감과 국민행복카드 중 어떤 걸 선택해야 하나요?',
      a: '전기·도시가스·지역난방을 주로 사용하면 요금차감이 편리합니다. 등유·LPG·연탄을 사용한다면 국민행복카드가 필요합니다.',
      source: '에너지바우처 사용안내',
      sourceUrl: 'https://www.energyv.or.kr/info/use_info.do',
    },
    {
      q: '가맹점은 어디서 확인하나요?',
      a: 'energyv.or.kr에서 가맹점을 조회하거나, 콜센터 1600-3190(평일 09:00~18:00)에 문의하면 됩니다.',
      source: '에너지바우처 홈',
      sourceUrl: 'https://www.energyv.or.kr',
    },
    {
      q: '아파트 관리비에 에너지바우처를 쓸 수 있나요?',
      a: '지역난방이나 전기요금이 포함된 경우 해당 에너지 부분은 요금차감 방식으로 지원받을 수 있습니다. 관리비 전체에 직접 사용하는 방식은 불가합니다.',
      source: '에너지바우처 사용안내',
      sourceUrl: 'https://www.energyv.or.kr/info/use_info.do',
    },
  ],
  sources: [
    { name: '에너지바우처 사용안내', url: 'https://www.energyv.or.kr/info/use_info.do' },
    { name: '에너지바우처 홈', url: 'https://www.energyv.or.kr' },
  ],
};
