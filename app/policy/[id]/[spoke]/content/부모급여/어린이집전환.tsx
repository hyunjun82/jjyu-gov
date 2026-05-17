import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          어린이집을 이용하면 부모급여가 <strong>보육료 바우처로 전환</strong>되어
          부모급여 전액이 아닌 <strong>보육료를 제외한 차액만 현금</strong>으로 받습니다.
          0세는 보육료가 부모급여(100만원)보다 낮아 차액이 생기지만,
          <strong>1세는 보육료가 부모급여(50만원)보다 높아 현금을 받지 못하는 경우</strong>가 많습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "아이를 어린이집에 보내면 부모급여를 아예 못 받는 건가요?"
        못 받는 게 아니라 보육료로 전환됩니다. 차액 계산 방법과 전환 기준을 정리했습니다.
      </p>

      <section className="detail-card" id="rule">
        <h2 className="detail-card-head">보육료 차액 계산 — 0세와 1세가 다르다</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>부모급여</th><th>기본 보육료(2026)</th><th>현금 차액</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>만 0세 어린이집 이용</td>
                <td>월 100만원</td>
                <td>약 54만원 (0세반)</td>
                <td><strong>약 46만원 현금</strong></td>
              </tr>
              <tr>
                <td>만 1세 어린이집 이용</td>
                <td>월 50만원</td>
                <td>약 47만 5천원 (1세반)</td>
                <td><strong>약 2만 5천원 현금</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>1세 주의:</strong> 1세 어린이집 이용 시 보육료가 부모급여보다 높을 경우
            현금 차액이 0원이 될 수 있습니다.
            보육료 확정액은 관할 시·군·구청 또는 아이행복카드 홈페이지에서 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">전환 기준 — 어린이집 등록하면 자동 전환</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>상황</th><th>적용 방식</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>가정 양육 (어린이집 미이용)</td>
                <td>부모급여 전액 현금 지급 (매월 25일)</td>
              </tr>
              <tr>
                <td>어린이집 이용 시작</td>
                <td>보육료 바우처로 자동 전환 → 차액 현금 지급 (익월 20일)</td>
              </tr>
              <tr>
                <td>어린이집 퇴소 후 가정 양육</td>
                <td>부모급여 현금 지급으로 다시 전환</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>별도 신청 불필요:</strong> 어린이집 입소 신청을 하면 보육료 지원이
            자동으로 처리됩니다. 부모급여 차액도 자동으로 계산되어 지급됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">가정 양육 vs 어린이집 — 어떤 선택이 더 유리한가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>가정 양육</th><th>어린이집 이용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>0세 현금 수령</td>
                <td><strong>월 100만원</strong></td>
                <td>약 46만원 (차액)</td>
              </tr>
              <tr>
                <td>1세 현금 수령</td>
                <td><strong>월 50만원</strong></td>
                <td>약 2~3만원 (차액) 또는 0원</td>
              </tr>
              <tr>
                <td>돌봄 서비스</td>
                <td>직접 양육</td>
                <td><strong>어린이집 보육 서비스</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            순수 현금 수령액 기준으로는 가정 양육이 더 높습니다.
            다만 어린이집 이용은 돌봄 서비스를 받으면서 일부 현금도 받는 구조입니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급금액, 신청 방법, 육아휴직 중복 여부 등<br />
            부모급여 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/parent-allowance" className="btn-cta">
            부모급여 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 어린이집전환SpokeContent: SpokeData = {
  h1: '어린이집 보내면 부모급여 못 받나 | 보육료 차액 계산과 전환 기준',
  breadcrumb: '어린이집 전환',
  description:
    '어린이집 이용 시 부모급여는 보육료 바우처로 전환되고 차액만 현금 지급됩니다. 0세는 보육료(약 54만원) 차감 후 약 46만원, 1세는 보육료가 부모급여(50만원)와 비슷해 차액이 거의 없습니다. 퇴소 후 가정 양육으로 전환 시 부모급여 전액 다시 지급.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '어린이집에 보내면 부모급여를 못 받나요?',
      a: '못 받는 것이 아니라 보육료 바우처로 전환됩니다. 부모급여에서 어린이집 기본 보육료를 제외한 차액을 현금으로 받습니다.',
      source: '보건복지부 부모급여 어린이집 이용 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '0세 어린이집 이용 시 얼마를 받나요?',
      a: '부모급여 100만원에서 0세반 기본 보육료(약 54만원)를 제외한 약 46만원을 현금으로 받습니다. 정확한 금액은 당해 연도 보육료 확정액에 따라 달라집니다.',
      source: '보건복지부 2026년 부모급여 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '1세 어린이집 이용 시 현금을 받지 못할 수도 있나요?',
      a: '네. 1세반 기본 보육료가 부모급여(50만원)와 비슷하거나 높으면 현금 차액이 거의 없거나 0원이 될 수 있습니다.',
      source: '대한민국 정책브리핑 부모급여 안내',
      sourceUrl: 'https://www.korea.kr',
    },
    {
      q: '어린이집 입소하면 자동으로 전환되나요?',
      a: '네. 어린이집 입소 신청 시 보육료 지원이 자동 처리되고 차액도 자동 계산됩니다. 별도 신청이 필요 없습니다.',
      source: '보건복지부 부모급여 전환 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '어린이집 퇴소 후 다시 현금으로 받을 수 있나요?',
      a: '네. 어린이집을 퇴소하고 가정 양육으로 전환하면 부모급여 전액이 다시 현금으로 지급됩니다.',
      source: '보건복지부 부모급여 안내',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 부모급여 어린이집 이용 안내', url: 'https://www.bokjiro.go.kr' },
    { name: '대한민국 정책브리핑 부모급여 카드뉴스', url: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148957936' },
  ],
};
