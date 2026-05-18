import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          K-패스는 <strong>korea-pass.kr</strong>에서 회원가입 후 참여 카드사의 K-패스 카드를 발급받으면 됩니다.
          월 <strong>15회 이상</strong> 대중교통 이용 시 일반 <strong>20%</strong>,
          청년 <strong>30%</strong>, 저소득층 <strong>53.3%</strong>를 다음 달에 환급받습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        어느 카드사를 선택하느냐에 따라 추가 혜택이 달라집니다.
        신청 절차와 카드사별 혜택을 비교하세요.
      </p>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">K-패스 신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> korea-pass.kr 또는 K-패스 앱에서 회원 가입
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 참여 카드사 선택 후 K-패스 카드 발급 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 카드 수령 후 교통카드로 등록
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 월 15회 이상 이용 시 다음 달 환급
          </div>
        </div>
      </section>

      <section className="detail-card" id="card">
        <h2 className="detail-card-head">참여 카드사 현황</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>카드사</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>신한카드</strong></td><td>K-패스 신한카드</td></tr>
              <tr><td><strong>우리카드</strong></td><td>K-패스 우리카드</td></tr>
              <tr><td><strong>하나카드</strong></td><td>K-패스 하나카드</td></tr>
              <tr><td><strong>현대카드</strong></td><td>K-패스 현대카드</td></tr>
              <tr><td><strong>BC카드</strong></td><td>K-패스 BC카드</td></tr>
              <tr><td><strong>KB국민카드</strong></td><td>K-패스 KB카드</td></tr>
              <tr><td><strong>DGB유페이</strong></td><td>선불형 K-패스</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>※ 참여 카드사는 변경될 수 있으므로 korea-pass.kr에서 최신 정보를 확인하세요.</p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="refund">
        <h2 className="detail-card-head">환급률 요약</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>대상</th><th>환급률</th><th>월 한도</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>일반</strong></td><td>20%</td><td>월 60회</td></tr>
              <tr><td><strong>청년 (만 19~34세)</strong></td><td>30%</td><td>월 60회</td></tr>
              <tr><td><strong>저소득층</strong></td><td>53.3%</td><td>월 60회</td></tr>
              <tr><td><strong>65세 이상</strong></td><td>30%</td><td>월 60회</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            환급률 계산 방법, 모두의 카드와 차이, 지역별 대중교통 적용 범위까지<br />
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

export const 케이패스신청등록카드사비교SpokeContent: SpokeData = {
  h1: 'K-패스 교통카드 신청 방법, 등록 절차, 카드사별 혜택 비교 정리',
  breadcrumb: '신청등록카드사비교',
  description:
    'K-패스 신청: korea-pass.kr 회원가입 → 참여 카드사 카드 발급. 월 15회 이상 이용 시 일반 20%·청년 30%·저소득 53.3% 환급. 신한·우리·하나·현대·BC·KB·DGB유페이 참여.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: 'K-패스 카드는 반드시 신규 발급해야 하나요?',
      a: '기존에 사용하던 카드를 K-패스로 전환할 수 없습니다. 참여 카드사에서 K-패스 전용 카드를 새로 발급받아야 합니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '여러 카드사의 K-패스 카드를 동시에 사용할 수 있나요?',
      a: '한 명당 하나의 K-패스 카드만 등록·사용할 수 있습니다. 카드사를 변경하려면 기존 카드 해지 후 새로 신청해야 합니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '15회 미만 이용하면 환급을 아예 못 받나요?',
      a: '월 15회 미만 이용 시에는 환급이 적용되지 않습니다. 15회 이상부터 전체 이용 금액에 환급률이 적용됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '환급은 언제 받나요?',
      a: '전월 이용 실적을 기준으로 다음 달에 카드 청구서 할인 또는 현금 환급 방식으로 지급됩니다. 카드사별로 방식이 다를 수 있습니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '지하철, 버스 외에 KTX도 환급 대상인가요?',
      a: 'K-패스는 지하철·버스 등 도시 대중교통이 대상입니다. KTX·SRT 등 고속철도는 환급 대상에 포함되지 않습니다.',
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
