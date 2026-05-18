import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          K-패스는 <strong>월 15회 이상 이용 금액의 일정 비율을 환급</strong>하는 방식이고,
          모두의 교통카드는 <strong>월정액을 내고 대중교통을 무제한</strong> 이용하는 방식입니다.
          두 카드는 중복 발급이 가능하지만 <strong>중복 환급은 불가</strong>합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        이용 패턴에 따라 유리한 카드가 다릅니다.
        어떤 조건에서 어느 카드가 더 유리한지 비교하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">K-패스 vs 모두의 교통카드 전체 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>K-패스</th><th>모두의 교통카드</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>방식</strong></td><td>환급형 (이용 후 %환급)</td><td>정액 구독형 (무제한)</td></tr>
              <tr><td><strong>이용 조건</strong></td><td>월 15회 이상</td><td>월정액 납부</td></tr>
              <tr><td><strong>환급률</strong></td><td>일반 20%·청년 30%·저소득 53.3%</td><td>해당 없음</td></tr>
              <tr><td><strong>이용 횟수 제한</strong></td><td>월 60회</td><td>무제한</td></tr>
              <tr><td><strong>유리한 경우</strong></td><td>월 15~60회 이용</td><td>월 60회 초과 다수 이용</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="overlap">
        <h2 className="detail-card-head">중복 사용 가능 여부</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>발급:</strong> K-패스와 모두의 교통카드 동시 발급 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>환급 중복:</strong> 동일 이용 건에 두 카드의 환급을 동시 적용 불가
          </div>
          <div className="info-box">
            <strong>선택 전략:</strong> 자신의 월 이용 횟수에 따라 유리한 카드 선택
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="choice">
        <h2 className="detail-card-head">어느 카드가 유리한가</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>월 15~60회 이용:</strong> K-패스 환급형이 유리 (이용 금액에 비례 환급)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>월 60회 초과 이용:</strong> 모두의 교통카드 무제한형이 유리
          </div>
          <div className="info-box">
            <strong>청년·저소득층:</strong> K-패스 환급률이 최대 53.3%이므로 K-패스 우선 검토
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            K-패스 신청 방법, 카드사 비교, 환급률 계산까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/k-pass" className="btn-cta">
            K-패스 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 케이패스모두의카드환급형비교SpokeContent: SpokeData = {
  h1: 'K-패스와 모두의 카드 어떻게 다른가, 월 15회 환급형과 무제한 정액권 비교',
  breadcrumb: '모두의카드환급형비교',
  description:
    'K-패스(월 15회 이상·일반 20%·청년 30%·저소득 53.3% 환급, 월 60회 한도) vs 모두의 교통카드(무제한 정액). 동시 발급 가능, 중복 환급 불가. 이용 패턴에 따라 선택.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '모두의 교통카드 월정액은 얼마인가요?',
      a: '모두의 교통카드의 월정액과 상세 요금은 출시 시기와 지역에 따라 다를 수 있습니다. 정확한 금액은 korea-pass.kr 또는 운영 기관에서 확인하세요.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: 'K-패스로 월 60회를 초과하면 초과분은 환급이 안 되나요?',
      a: 'K-패스는 월 60회까지만 환급 대상입니다. 60회를 초과한 이용분에는 환급이 적용되지 않습니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '두 카드를 함께 사용하면 어떤 기준으로 환급이 적용되나요?',
      a: '동일 이용 건에 두 카드의 혜택을 중복 적용받을 수 없습니다. 실제 이용 카드에 따라 해당 카드의 혜택만 적용됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '청년이면 모두의 카드보다 K-패스가 무조건 유리한가요?',
      a: '청년 환급률 30%가 적용되는 K-패스가 대부분 유리하지만, 월 대중교통 이용 횟수가 매우 많다면 모두의 카드 무제한형이 더 경제적일 수 있습니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '현재 지하철 정기권을 사용 중인데 K-패스로 바꾸는 게 나은가요?',
      a: '지하철 정기권은 특정 노선·지역 한정인 경우가 많습니다. K-패스는 버스·지하철 전반에 환급이 적용되므로, 이용 노선과 횟수를 비교해 유리한 쪽을 선택하세요.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
  ],
  sources: [
    { name: 'K-패스 공식 사이트', url: 'https://korea-pass.kr' },
    { name: '국토교통부', url: 'https://www.molit.go.kr' },
    { name: '한국교통안전공단', url: 'https://www.kotsa.or.kr' },
  ],
};
