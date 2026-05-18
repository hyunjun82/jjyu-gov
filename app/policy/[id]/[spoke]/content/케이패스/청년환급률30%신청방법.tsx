import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          만 19~34세 청년이 K-패스로 월 15회 이상 대중교통을 이용하면
          이용 금액의 <strong>30%</strong>를 다음 달에 환급받습니다.
          <strong>korea-pass.kr</strong>에서 회원가입 후 참여 카드사의 K-패스 카드를 발급받으면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        청년 환급률 30%가 적용되는 조건과 신청 방법을 확인하세요.
        같은 이용 금액이라도 일반(20%)보다 50% 더 환급됩니다.
      </p>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">청년 30% 환급 적용 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>연령</strong></td><td>만 19세 이상 ~ 만 34세 이하</td></tr>
              <tr><td><strong>월 이용 횟수</strong></td><td>15회 이상 (15회부터 환급 시작)</td></tr>
              <tr><td><strong>환급 한도</strong></td><td>월 60회까지 환급 대상</td></tr>
              <tr><td><strong>환급 방식</strong></td><td>다음 달 카드 청구 할인 또는 현금 환급</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">청년 K-패스 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> korea-pass.kr에서 회원가입 (본인 명의 휴대폰 인증)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 청년 대상 선택 후 참여 카드사 K-패스 카드 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 카드 수령 후 교통카드로 등록
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 월 15회 이상 이용 → 다음 달 30% 환급
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="example">
        <h2 className="detail-card-head">환급액 계산 예시</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>월 이용 금액</th><th>일반(20%)</th><th>청년(30%)</th></tr>
            </thead>
            <tbody>
              <tr><td>50,000원</td><td>10,000원</td><td>15,000원</td></tr>
              <tr><td>80,000원</td><td>16,000원</td><td>24,000원</td></tr>
              <tr><td>100,000원</td><td>20,000원</td><td>30,000원</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>※ 월 60회까지의 이용 금액 기준</p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            카드사별 혜택 비교, 모두의 카드 차이, 저소득층 53.3% 환급까지<br />
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

export const 케이패스청년환급률30퍼센트신청방법SpokeContent: SpokeData = {
  h1: '대중교통 매달 15회 이상 탄다면 K-패스 청년 환급률 30% 받는 방법',
  breadcrumb: '청년환급률30%신청방법',
  description:
    'K-패스 청년 30% 환급: 만 19~34세, 월 15회 이상 이용. korea-pass.kr 회원가입 → 카드 발급. 월 60회 한도. 월 이용 80,000원 시 24,000원 환급. 다음 달 청구 할인·현금 환급.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '만 34세 생일이 지나면 환급률이 바뀌나요?',
      a: '만 35세가 되면 청년 30% 환급률 적용이 종료되고 일반 20% 환급률로 자동 전환됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '한 달에 14회 이용했는데 1회 부족하면 환급이 0원인가요?',
      a: '네. 월 15회 미만이면 해당 월에는 환급이 적용되지 않습니다. 15회부터 전체 이용 금액에 환급률이 적용됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '청년 기준을 확인하는 별도 서류 제출이 필요한가요?',
      a: 'korea-pass.kr 가입 시 본인 명의 휴대폰 인증으로 연령이 자동 확인됩니다. 별도 서류 제출은 필요하지 않습니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '청년이면서 저소득층이면 어느 환급률을 받나요?',
      a: '두 가지 요건을 동시에 충족하는 경우 더 높은 환급률인 저소득층 53.3%가 적용됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: 'K-패스로 택시를 타면 환급이 되나요?',
      a: 'K-패스 환급은 버스·지하철 등 대중교통 이용분에만 적용됩니다. 택시는 환급 대상에서 제외됩니다.',
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
