import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>주거급여 수급 가구의 <strong>만 19세 이상 30세 미만 청년</strong>이 부모와 별도 거주하면
        청년에게 <strong>별도 주거급여</strong>가 지급됩니다. 지역과 가구 규모에 따라 월 수십만 원 수준입니다.</p>
      </div>
      <section className="detail-card" id="who">
        <h2 className="detail-card-head">청년주거급여 분리지급 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>나이</td><td>만 19세 이상 ~ 30세 미만</td></tr>
              <tr><td>가구 조건</td><td>부모 세대가 주거급여 수급 중</td></tr>
              <tr><td>거주 요건</td><td>부모와 별도 주거(임차)</td></tr>
              <tr><td>취학·구직 등 사유</td><td>교육·취업 목적 별거 인정</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지급 금액 (2026년 기준)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>지역</th><th>1인 기준 월 최대</th></tr></thead>
            <tbody>
              <tr><td>서울</td><td>341,000원</td></tr>
              <tr><td>경기·인천</td><td>268,000원</td></tr>
              <tr><td>광역시·세종</td><td>216,000원</td></tr>
              <tr><td>그 외 지역</td><td>178,000원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>실제 월세와 기준임대료 중 낮은 금액이 지급됩니다. 신청처: 주민센터 방문 또는 복지로.</div>
        </div>
      </section>
    </>
  );
}

export const 청년주거지원청년주거급여분리지급조건금액SpokeContent: SpokeData = {
  h1: '청년주거급여 분리지급 — 부모랑 따로 살면 얼마나',
  breadcrumb: '청년주거급여분리지급조건금액',
  description: '주거급여 수급 가구에서 분리된 청년에게 별도로 지급되는 청년주거급여 분리지급 조건과 금액을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청년 주거급여 분리지급이란 무엇인가요?',
      a: '주거급여 수급 가구의 청년 자녀가 부모와 따로 살면, 청년 본인 임차료에 해당하는 주거급여를 별도로 지급받는 제도입니다.',
      source: '국토교통부 주거급여',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '분리지급 신청 조건은 무엇인가요?',
      a: '주거급여 수급 가구원 중 만 19세~30세 미만 청년이 부모와 다른 시·군에 거주하는 경우입니다. 학업·취업 목적으로 분리 거주해야 합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '지급 금액은 얼마나 되나요?',
      a: '기준 임대료의 일정 비율로 지역·가구원 수에 따라 다릅니다. 2026년 서울 1인 기준 약 34.1만 원입니다.',
      source: '국토교통부 주거급여 기준임대료',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '부모가 주거급여를 받지 않아도 되나요?',
      a: '청년 분리지급은 부모가 주거급여 수급자인 경우에 한합니다. 부모가 수급자가 아니라면 청년 본인 명의로 별도 신청해야 합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '주민센터(읍·면·동)에 신청하거나 복지로(www.bokjiro.go.kr)에서 온라인 신청이 가능합니다.',
      source: '복지로',
      sourceUrl: 'https://www.bokjiro.go.kr',
    }
  ],
  sources: [
    { name: '국토교통부·마이홈포털', url: 'https://www.myhome.go.kr' },
  ],
};
