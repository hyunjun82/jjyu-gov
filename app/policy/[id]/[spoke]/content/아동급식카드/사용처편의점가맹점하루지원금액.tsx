import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          아동급식카드는 지자체가 지정한 <strong>가맹 편의점·식당·마트</strong>에서 사용할 수 있으며,
          하루 지원 금액은 지역마다 다르지만 보통 <strong>8,000원~10,000원</strong> 수준입니다.
          전국 대부분 GS25·CU·세븐일레븐에서 사용 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        아동급식카드 사용처는 지역별로 지정되므로 카드 발급 시 안내받은 가맹점 목록을 확인하세요.
        편의점은 거의 모든 지역에서 공통 가맹점으로 등록되어 있어 가장 편리하게 이용할 수 있습니다.
      </p>

      <section className="detail-card" id="store">
        <h2 className="detail-card-head">주요 사용처</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>사용처 유형</th><th>예시</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>편의점</strong></td><td>GS25, CU, 세븐일레븐, 이마트24</td><td>전국 대부분 가맹</td></tr>
              <tr><td><strong>식당</strong></td><td>지역 가맹 음식점</td><td>지역별 상이</td></tr>
              <tr><td><strong>슈퍼마켓</strong></td><td>동네 슈퍼, 중소 마트</td><td>가맹 여부 확인 필요</td></tr>
              <tr><td><strong>학교 매점</strong></td><td>일부 지역 학교</td><td>지역별 상이</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지원 금액 및 사용 제한</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>하루 한도:</strong> 지역별 8,000~10,000원 수준 (지자체별 상이)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>월 한도:</strong> 사용일수 × 일 한도 (미사용분 이월 여부 지역별 상이)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사용 제한 품목:</strong> 담배·주류·복권·카드 충전 등 불가
          </div>
          <div className="info-box">
            <strong>현금 인출:</strong> 불가 (카드 결제만 가능)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="nonuse">
        <h2 className="detail-card-head">사용 불가 품목 주의</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>절대 불가:</strong> 담배, 주류, 복권, 상품권 구입
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>불가:</strong> 카드 충전, 현금 인출, 비가맹점 결제
          </div>
          <div className="info-box">
            <strong>주의:</strong> 부정 사용 적발 시 카드 이용 정지 및 환수 처분 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원대상, 신청방법, 방학 중 지원 안내까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/child-meal-card" className="btn-cta">
            아동급식카드 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 아동급식카드사용처편의점가맹점하루지원금액SpokeContent: SpokeData = {
  h1: '아동급식카드 사용처, 편의점·가맹점 어디서 쓸 수 있고 금액은',
  breadcrumb: '사용처편의점가맹점하루지원금액',
  description:
    '아동급식카드 사용처: GS25·CU·세븐일레븐 등 편의점, 지역 가맹 식당. 하루 한도 8,000~10,000원(지역별 상이). 담배·주류·복권 사용 불가. 현금 인출 불가.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '모든 편의점에서 쓸 수 있나요?',
      a: '전국 대부분의 GS25·CU·세븐일레븐·이마트24는 아동급식카드 가맹점입니다. 다만 일부 소규모 편의점은 가맹되지 않을 수 있으니 결제 전 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '남은 잔액은 다음 달로 넘어가나요?',
      a: '지역에 따라 미사용 잔액의 이월 여부가 다릅니다. 일부 지역은 월말 소멸, 일부는 이월 가능합니다. 카드 발급 시 담당자에게 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '학원 앞 분식집에서도 쓸 수 있나요?',
      a: '해당 분식집이 가맹점으로 등록되어 있어야 합니다. 가맹 여부는 카드 가맹점 조회 앱 또는 주민센터에서 확인할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '하루 한도 이상 사용하면 어떻게 되나요?',
      a: '한도 초과분은 결제가 거부됩니다. 초과 금액은 본인이 부담해야 하며, 한도 내에서만 급식카드로 결제됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '편의점에서 음식 말고 다른 것도 살 수 있나요?',
      a: '식품류(음료·간식·도시락 등)는 구매 가능합니다. 담배·주류·복권·상품권 등은 구매 불가합니다. 제한 품목은 결제 시 자동으로 거부됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '나무위키 아동급식카드', url: 'https://namu.wiki/w/%EC%95%84%EB%8F%99%EA%B8%89%EC%8B%9D%EC%B9%B4%EB%93%9C' },
    { name: '복지로 아동급식카드', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003999' },
  ],
};
