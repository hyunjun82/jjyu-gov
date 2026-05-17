import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년미래적금은 <strong>이자소득세 전액 면제(비과세)</strong>입니다.
          총급여 7,500만원 이하(종합소득 6,300만원) 또는 연매출 3억원 이하 소상공인이면서
          3년 만기를 채우면 이자에 붙는 세금(15.4%)을 한 푼도 내지 않습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        일반 적금에 가입하면 이자에서 15.4%가 세금으로 빠져나갑니다.
        청년미래적금은 이 세금을 면제해 주는 비과세 상품입니다.
        만기까지 유지하는 것이 핵심 조건입니다.
      </p>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">이자소득세 면제 적용 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조건</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>소득 기준</td>
                <td>총급여 7,500만원 이하 (종합소득 6,300만원) 또는 연매출 3억원 이하 소상공인</td>
              </tr>
              <tr>
                <td>가구 소득</td>
                <td>기준 중위소득 200% 이하</td>
              </tr>
              <tr>
                <td>만기 조건</td>
                <td>3년 만기 충족 필수 (중도해지 시 비과세 불가)</td>
              </tr>
              <tr>
                <td>면제 세율</td>
                <td>이자소득 15.4% (소득세 14% + 지방소득세 1.4%) 전액 면제</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>핵심:</strong> 소득 기준을 충족하고 <strong>3년 만기</strong>를 채우면
            이자소득세가 100% 면제됩니다. 중도해지 시에는 비과세 혜택을 받을 수 없습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">일반 적금 vs 청년미래적금 세금 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>일반 적금</th><th>청년미래적금</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>이자소득세율</td>
                <td>15.4%</td>
                <td>0% (비과세)</td>
              </tr>
              <tr>
                <td>이자 100만원 시 세금</td>
                <td>약 154,000원</td>
                <td>0원</td>
              </tr>
              <tr>
                <td>이자 100만원 시 실수령</td>
                <td>약 846,000원</td>
                <td>1,000,000원</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#666', marginTop: 8 }}>
            ※ 이자 수령액은 확정 금리에 따라 달라집니다. 금리는 출시 시점 확정 예정.
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="income-bracket">
        <h2 className="detail-card-head">소득 구간별 비과세 혜택 적용 여부</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>소득 구간</th><th>정부 기여금</th><th>이자소득 비과세</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>총급여 2,400만원 이하<br />(종합소득 1,600만원)</td>
                <td>12% (우대형 조건 충족 시)</td>
                <td>✅ 적용</td>
              </tr>
              <tr>
                <td>총급여 2,400만~6,000만원</td>
                <td>6% (일반형) 또는 12% (우대형)</td>
                <td>✅ 적용</td>
              </tr>
              <tr>
                <td>총급여 6,000만~7,500만원<br />(종합소득 4,800만~6,300만원)</td>
                <td>❌ 없음</td>
                <td>✅ 적용</td>
              </tr>
              <tr>
                <td>총급여 7,500만원 초과</td>
                <td>❌ 없음</td>
                <td>❌ 미적용 (가입 불가)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>포인트:</strong> 총급여 6,000만~7,500만원 구간은 정부 기여금은 없지만
            <strong> 이자소득 비과세 혜택은 받을 수 있습니다.</strong>
          </div>
        </div>
      </section>

      <section className="detail-card" id="note">
        <h2 className="detail-card-head">비과세 혜택 관련 주의사항</h2>
        <div className="detail-card-body">
          <div className="warning-box">
            <strong>중도해지 시 비과세 불가:</strong> 3년 만기를 채우지 못하고 해지하면
            이자소득세 15.4%를 내야 합니다. 비과세 혜택은 만기 충족이 전제입니다.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>소득 확인 시점:</strong> 가입 시점의 소득 기준으로 판단하며,
            가입 후 소득이 늘어도 기존 혜택은 유지됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            정부 기여금 매칭, 6월 신청 일정, 도약계좌 갈아타기 등<br />
            청년미래적금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-future-savings" className="btn-cta">
            청년미래적금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 이자소득세SpokeContent: SpokeData = {
  h1: '청년미래적금 이자소득세 면제 비과세 조건 총정리',
  breadcrumb: '이자소득세',
  description: '청년미래적금 이자소득세 면제(비과세) 조건을 정리했습니다. 총급여 7,500만원 이하에서 3년 만기를 채우면 이자의 15.4% 세금을 전액 면제받습니다. 6,000~7,500만원 구간도 비과세 적용됩니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청년미래적금은 이자에 세금을 내지 않나요?',
      a: '맞습니다. 총급여 7,500만원 이하(종합소득 6,300만원)이면서 3년 만기를 채우면 이자소득세(15.4%)가 전액 면제됩니다.',
      source: '금융위원회 청년미래적금 카드뉴스',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '중도해지하면 이자소득세를 내야 하나요?',
      a: '네. 3년 만기를 충족하지 않으면 비과세 혜택이 취소되어 이자소득세 15.4%를 납부해야 합니다.',
      source: '경기도일자리포털 청년미래적금 총정리',
      sourceUrl: 'https://job.gg.go.kr/thema/exprcDtl',
    },
    {
      q: '총급여 6,000만~7,500만원도 비과세를 받나요?',
      a: '네. 이 구간은 정부 기여금은 없지만 이자소득 비과세 혜택은 적용됩니다. 3년 만기 조건을 충족해야 합니다.',
      source: '금융위원회 청년미래적금 카드뉴스',
      sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187',
    },
    {
      q: '일반 적금보다 이자소득세 절세 효과가 얼마나 되나요?',
      a: '이자 100만원 기준 15.4%(154,000원) 절세 효과가 있습니다. 이자가 클수록 절세 금액도 커집니다.',
      source: '금융위원회 청년미래적금 안내',
      sourceUrl: 'https://www.fsc.go.kr',
    },
    {
      q: '가입 후 소득이 늘어도 비과세 혜택이 유지되나요?',
      a: '가입 시점의 소득 기준으로 판단하므로, 가입 후 소득이 증가해도 기존 비과세 혜택은 유지됩니다.',
      source: '금융위원회 청년미래적금 안내',
      sourceUrl: 'https://www.fsc.go.kr',
    },
  ],
  sources: [
    { name: '금융위원회 청년미래적금 카드뉴스 (2026.04.24)', url: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { name: '경기도일자리포털 잡아바 청년미래적금 총정리', url: 'https://job.gg.go.kr/thema/exprcDtl' },
    { name: '금융위원회 공식 블로그 (2026.04.24)', url: 'https://blog.naver.com/blogfsc/224262511997' },
  ],
};
