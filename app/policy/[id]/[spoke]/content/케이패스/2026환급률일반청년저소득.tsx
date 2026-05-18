import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 K-패스 환급률은 <strong>일반 20%</strong>, <strong>청년(만 19~34세) 30%</strong>,
          <strong>저소득층 53.3%</strong>, <strong>65세 이상 30%</strong>입니다.
          월 <strong>15회 이상</strong> 대중교통을 이용해야 환급이 시작되며, 월 <strong>60회</strong>까지 적용됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        대상 유형에 따라 환급률이 최대 2.6배 차이납니다.
        내가 받을 수 있는 환급률과 월 예상 환급액을 확인하세요.
      </p>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">2026 K-패스 환급률 전체</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>대상</th><th>환급률</th><th>이용 조건</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>일반</strong></td><td>20%</td><td>월 15회 이상</td></tr>
              <tr><td><strong>청년 (만 19~34세)</strong></td><td>30%</td><td>월 15회 이상</td></tr>
              <tr><td><strong>65세 이상</strong></td><td>30%</td><td>월 15회 이상</td></tr>
              <tr><td><strong>저소득층</strong></td><td>53.3%</td><td>월 15회 이상</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="example">
        <h2 className="detail-card-head">월 이용 금액별 환급액 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>월 이용 금액</th><th>일반(20%)</th><th>청년·65세↑(30%)</th><th>저소득(53.3%)</th></tr>
            </thead>
            <tbody>
              <tr><td>50,000원</td><td>10,000원</td><td>15,000원</td><td>26,650원</td></tr>
              <tr><td>80,000원</td><td>16,000원</td><td>24,000원</td><td>42,640원</td></tr>
              <tr><td>100,000원</td><td>20,000원</td><td>30,000원</td><td>53,300원</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#8B95A1', marginTop: 8 }}>※ 월 60회까지의 이용 금액 기준</p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">저소득층 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기초생활수급자:</strong> 해당 시 저소득층 환급률(53.3%) 자동 적용
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>차상위계층:</strong> 차상위 계층 확인서 또는 증빙 서류 제출
          </div>
          <div className="info-box">
            <strong>확인 방법:</strong> korea-pass.kr 회원가입 시 자격 확인
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            K-패스 신청 방법, 카드사 비교, 모두의 카드와 차이까지<br />
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

export const 케이패스2026환급률일반청년저소득SpokeContent: SpokeData = {
  h1: '2026 K-패스 환급률 비교, 일반 20%, 청년 30%, 저소득 53.3%',
  breadcrumb: '2026환급률일반청년저소득',
  description:
    '2026 K-패스 환급률: 일반 20%·청년(19~34세) 30%·65세 이상 30%·저소득층 53.3%. 월 15회 이상·60회 한도. 월 이용 100,000원 시 저소득 53,300원 환급. korea-pass.kr 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '저소득층 53.3%는 어떻게 계산된 수치인가요?',
      a: '저소득층 환급률 53.3%는 정부가 설정한 지원 비율입니다. 월 이용 금액의 53.3%가 환급되며, 이는 이용 금액의 절반 이상을 돌려받는 수준입니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '65세 이상도 30%를 받는다는 게 맞나요?',
      a: '네. 만 65세 이상 어르신도 청년과 동일하게 30% 환급률이 적용됩니다. 월 15회 이상 이용 조건은 동일합니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '같은 달에 60회 넘게 이용하면 초과분은 어떻게 되나요?',
      a: '60회를 초과한 이용분에 대해서는 환급이 적용되지 않습니다. 60회까지의 이용 금액에 대해서만 환급이 계산됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '저소득층과 청년 두 조건을 모두 충족하면 환급률이 합산되나요?',
      a: '합산이 아니라 더 높은 환급률이 적용됩니다. 청년(30%)이면서 저소득층(53.3%)인 경우 53.3%가 적용됩니다.',
      source: '국토교통부',
      sourceUrl: 'https://korea-pass.kr',
    },
    {
      q: '환급률이 내년에 바뀔 수 있나요?',
      a: '환급률은 정부 정책에 따라 변경될 수 있습니다. 현재 기준(2026년)은 korea-pass.kr에서 항상 최신 정보를 확인하세요.',
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
