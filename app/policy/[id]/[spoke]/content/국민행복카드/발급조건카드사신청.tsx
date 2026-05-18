import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민행복카드는 <strong>임신 확인 후 산부인과에서 임신확인서</strong>를 발급받아
          <strong>5개 카드사(국민·신한·우리·하나·롯데)</strong> 중 하나를 선택해 신청합니다.
          온라인(카드사 앱·홈페이지)과 오프라인(카드사 영업점) 모두 신청 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        국민행복카드 1장으로 임신출산진료비를 포함한 23종 바우처를 한 번에 이용할 수 있습니다.
        발급 조건과 카드사별 혜택을 비교해 유리한 카드를 선택하세요.
      </p>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">발급 대상 및 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>발급 대상</strong></td><td>건강보험 가입 임신부 (직장·지역 모두)</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>없음 (소득 무관 전체 지원)</td></tr>
              <tr><td><strong>신청 시기</strong></td><td>임신 확인 후 즉시 신청 가능</td></tr>
              <tr><td><strong>지원 금액</strong></td><td>단태아 100만원, 다태아(쌍둥이 이상) 140만원</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="cards">
        <h2 className="detail-card-head">5개 카드사 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>카드사</th><th>신청 경로</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>국민카드</strong></td><td>KB국민카드 앱·홈페이지·영업점</td></tr>
              <tr><td><strong>신한카드</strong></td><td>신한카드 앱·홈페이지·영업점</td></tr>
              <tr><td><strong>우리카드</strong></td><td>우리카드 앱·홈페이지·영업점</td></tr>
              <tr><td><strong>하나카드</strong></td><td>하나카드 앱·홈페이지·영업점</td></tr>
              <tr><td><strong>롯데카드</strong></td><td>롯데카드 앱·홈페이지·영업점</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>
            ※ 카드사별 추가 혜택(포인트·할인)이 다를 수 있으므로 비교 후 선택 권장
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 산부인과에서 임신확인서 발급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 5개 카드사 중 1개 선택 후 신청 (앱·홈페이지 또는 영업점)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 카드 수령 (우편 또는 영업점 수령, 통상 1~2주)
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 임신출산 진료비 결제 시 카드 사용 (요양기관 전국 이용 가능)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            23종 바우처 사용처, 잔액 조회, 발급 순서까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/national-happiness-card" className="btn-cta">
            국민행복카드 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 국민행복카드발급조건카드사신청SpokeContent: SpokeData = {
  h1: '국민행복카드 발급 조건과 5개 카드사 신청 방법, 임신 후 즉시 신청 가능',
  breadcrumb: '발급조건카드사신청',
  description:
    '국민행복카드 발급: 건강보험 가입 임신부, 소득 무관. 임신확인서 지참 후 국민·신한·우리·하나·롯데 5개 카드사 중 선택 신청. 단태아 100만원, 다태아 140만원 임신출산진료비 지원.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '이미 신용카드가 있어도 국민행복카드를 따로 발급받아야 하나요?',
      a: '네, 국민행복카드는 바우처 기능이 탑재된 별도 카드입니다. 기존 카드에 추가되지 않으며 새로 발급받아야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '카드사를 고를 때 어떤 기준으로 선택하나요?',
      a: '바우처 기능은 동일하므로 카드사별 부가 혜택(포인트 적립, 할인 제휴처 등)을 비교해 선택하면 됩니다. 이미 주거래 카드사가 있다면 같은 카드사를 선택하면 관리가 편리합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '임신 초기에 바로 신청해야 하나요?',
      a: '임신 확인 후 바로 신청하는 것이 좋습니다. 출산 후에는 임신출산진료비 잔액이 소멸하므로 최대한 일찍 신청하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '카드를 분실하면 바우처도 사라지나요?',
      a: '카드 분실 시 카드사에 즉시 분실 신고 후 재발급을 받으면 됩니다. 바우처 잔액은 유지됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '한 가정에서 두 번째 임신 시 다시 발급받나요?',
      a: '출산 이후에도 바우처는 지원되며, 둘째 임신 시 다시 발급 신청이 가능합니다. 이전 카드를 재활성화하거나 새로 신청하는 절차를 카드사에 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
  ],
  sources: [
    { name: '사회서비스 전자바우처', url: 'https://www.voucher.go.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
  ],
};
