import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          에너지캐시백, 에너지바우처, 전기요금 복지할인은 모두 별개의 제도입니다.
          <strong>에너지캐시백</strong>은 전기를 아낀 만큼 돌려받는 인센티브,
          <strong>에너지바우처</strong>는 취약계층에게 냉난방비를 지원하는 바우처,
          <strong>전기요금 복지할인</strong>은 기초수급자·장애인 등에게 요금을 직접 할인해 주는 제도입니다.
          세 가지 모두 중복 수혜가 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        소득이 낮은 취약계층이라면 에너지바우처 + 전기요금 복지할인 + 에너지캐시백을
        동시에 받으면 전기요금 부담을 크게 줄일 수 있습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">에너지캐시백 vs 에너지바우처 vs 전기요금 복지할인 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>에너지캐시백</th><th>에너지바우처</th><th>전기요금 복지할인</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>운영 기관</strong></td><td>한국전력공사</td><td>한국에너지공단</td><td>한국전력공사</td></tr>
              <tr><td><strong>대상</strong></td><td>주택용 전기 고객 (전체)</td><td>소득 기준 취약계층</td><td>기초수급자·장애인 등</td></tr>
              <tr><td><strong>지원 방식</strong></td><td>절감량 × 단가, 요금 차감</td><td>바우처(전기·가스·등유·연탄)</td><td>요금 직접 할인</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>없음 (보편)</td><td>있음 (취약계층)</td><td>있음 (수급자·장애인 등)</td></tr>
              <tr><td><strong>신청처</strong></td><td>en-ter.co.kr</td><td>복지로·주민센터</td><td>한국전력·복지로</td></tr>
              <tr><td><strong>중복 수혜</strong></td><td>가능</td><td>가능</td><td>가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="voucher">
        <h2 className="detail-card-head">에너지바우처란?</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 생계·의료급여 수급가구 중 노인·영유아·장애인·임산부·중증질환자 포함 가구
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지원:</strong> 연 1회 바우처 지급 — 전기·도시가스·등유·연탄 결제 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청:</strong> 복지로(bokjiro.go.kr) 또는 주민센터
          </div>
          <div className="info-box">
            <strong>문의:</strong> 한국에너지공단 ☎1600-3190
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="strategy">
        <h2 className="detail-card-head">취약계층 최대 혜택 조합</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Step 1:</strong> 에너지바우처 신청 (주민센터·복지로)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>Step 2:</strong> 전기요금 복지할인 적용 확인 (한전 ☎123)
          </div>
          <div className="info-box">
            <strong>Step 3:</strong> 에너지캐시백 추가 신청 (en-ter.co.kr) — 전기를 아끼면 캐시백까지
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 캐시백 계산법, 신청 자격까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/energy-cashback" className="btn-cta">
            에너지캐시백 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 에너지캐시백에너지바우처절전요금할인비교SpokeContent: SpokeData = {
  h1: '에너지캐시백 vs 에너지바우처 vs 전기요금 복지할인, 차이와 중복 수혜 방법',
  breadcrumb: '에너지바우처절전요금할인비교',
  description:
    '에너지캐시백(절약 인센티브)·에너지바우처(취약계층 냉난방비)·전기요금 복지할인(기초수급·장애인) 비교. 세 제도 중복 수혜 가능. 취약계층은 3가지 모두 신청 시 전기요금 부담 최소화.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '에너지바우처와 에너지캐시백을 동시에 받을 수 있나요?',
      a: '네. 두 제도는 별개이므로 중복 수혜가 가능합니다. 에너지바우처는 주민센터·복지로에서, 에너지캐시백은 en-ter.co.kr에서 각각 신청해야 합니다.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/main/main.do',
    },
    {
      q: '전기요금 복지할인을 받으면 에너지캐시백 단가가 달라지나요?',
      a: '아닙니다. 전기요금 복지할인 여부와 에너지캐시백 단가는 무관합니다. 캐시백은 절감률 구간별로 동일하게 적용(30~100원/kWh)됩니다.',
      source: '에너지마켓플레이스 EN:TER',
      sourceUrl: 'https://en-ter.co.kr/main.do',
    },
    {
      q: '에너지바우처 신청 자격은 어떻게 되나요?',
      a: '생계급여·의료급여 수급가구 중 노인(65세 이상), 영유아(6세 미만), 장애인, 임산부, 중증질환자, 한부모 가구원이 있는 경우가 대상입니다. 자세한 자격은 주민센터나 ☎1600-3190으로 문의하세요.',
      source: '한국에너지공단 에너지바우처',
      sourceUrl: 'https://www.energyvoucher.or.kr',
    },
    {
      q: '절전 노력을 해도 에너지바우처 사용 금액이 줄어드는 건 아닌가요?',
      a: '에너지바우처는 연 1회 지정 금액을 지급하는 방식으로, 절전 여부와 무관하게 전액을 사용할 수 있습니다. 에너지캐시백은 별도로 절전한 만큼 추가로 받는 것이므로 함께 활용하면 더 유리합니다.',
      source: '한국에너지공단 에너지바우처',
      sourceUrl: 'https://www.energyvoucher.or.kr',
    },
    {
      q: '도시가스 요금은 에너지캐시백 대상인가요?',
      a: '아닙니다. 에너지캐시백은 주택용 전기 절약에 대한 혜택입니다. 도시가스 절약 혜택을 원한다면 에너지바우처(도시가스 결제 가능)나 도시가스 사업자의 별도 절약 프로그램을 활용하세요.',
      source: '한국전력공사 에너지캐시백',
      sourceUrl: 'https://en-ter.co.kr/ec/main/main.do',
    },
  ],
  sources: [
    { name: '한국전력공사 에너지캐시백 공식 사이트', url: 'https://en-ter.co.kr/ec/main/main.do' },
    { name: '에너지마켓플레이스 EN:TER', url: 'https://en-ter.co.kr/main.do' },
    { name: '한국에너지공단 에너지바우처', url: 'https://www.energyvoucher.or.kr' },
  ],
};
