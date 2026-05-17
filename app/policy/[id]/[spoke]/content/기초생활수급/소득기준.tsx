import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          기초생활수급 급여별 소득 기준은 기준 중위소득 기준으로 나뉩니다.
          생계급여 <strong>32%</strong>, 의료급여 <strong>40%</strong>,
          주거급여 <strong>48%</strong>, 교육급여 <strong>50%</strong>.
          2026년 1인 가구 기준 생계급여 선정기준은 <strong>월 820,556원</strong>입니다.
          소득인정액이 이 금액 이하여야 생계급여를 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "내 월 소득이 얼마면 기초수급자가 될 수 있나요?"
        단순 월급만 보는 게 아닙니다. 소득인정액 기준과 급여별 한도를 정리했습니다.
      </p>

      <section className="detail-card" id="standard">
        <h2 className="detail-card-head">기초생활수급자 소득 기준 | 생계 32% · 의료 40% · 주거 48% 중위소득</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>급여 종류</th><th>기준 중위소득</th><th>1인 가구</th><th>4인 가구</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>생계급여</td>
                <td><strong>32% 이하</strong></td>
                <td>820,556원</td>
                <td>2,078,316원</td>
              </tr>
              <tr>
                <td>의료급여</td>
                <td><strong>40% 이하</strong></td>
                <td>1,025,695원</td>
                <td>2,597,895원</td>
              </tr>
              <tr>
                <td>주거급여</td>
                <td><strong>48% 이하</strong></td>
                <td>1,230,834원</td>
                <td>3,117,474원</td>
              </tr>
              <tr>
                <td>교육급여</td>
                <td><strong>50% 이하</strong></td>
                <td>1,282,119원</td>
                <td>3,247,369원</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            기준은 <strong>소득인정액</strong>입니다 — 실제 월급이 아니라
            소득 + 재산 환산액을 합산한 값으로 판정합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="income-recog">
        <h2 className="detail-card-head">소득인정액이란 — 단순 월급이 아니다</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득인정액 = 소득평가액 + 재산의 소득환산액</strong>
          </div>
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>구성요소</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>소득평가액</td>
                <td>근로소득 + 사업소득 + 재산소득 + 이전소득 (공제 적용)</td>
              </tr>
              <tr>
                <td>재산의 소득환산액</td>
                <td>부동산·금융재산·자동차 등을 소득으로 환산</td>
              </tr>
              <tr>
                <td>금융재산</td>
                <td>잔액에서 생활준비금 600만원 공제 후 환산</td>
              </tr>
              <tr>
                <td>자동차</td>
                <td>일부 예외 제외 시 월 100% 환산</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="calculate">
        <h2 className="detail-card-head">실제 생계급여 지급 금액 계산법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>생계급여액 = 생계급여 선정기준 − 소득인정액</strong>
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>예시:</strong> 1인 가구, 소득인정액 30만원<br />
            → 820,556 − 300,000 = <strong>520,556원 지급</strong>
          </div>
          <div className="info-box">
            소득인정액이 0이면 선정기준 전액(1인 820,556원)을 받습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            탈락 조건, 급여 종류, 재산 기준 등<br />
            기초생활수급 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/basic-livelihood-allowance" className="btn-cta">
            기초생활수급 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 기초수급소득기준SpokeContent: SpokeData = {
  h1: '기초생활수급자 소득 기준 | 생계 32% · 의료 40% · 주거 48% 중위소득',
  breadcrumb: '소득기준',
  description:
    '2026년 기초생활수급 소득 기준: 생계급여 중위소득 32%(1인 820,556원), 의료급여 40%, 주거급여 48%, 교육급여 50% 이하. 기준은 단순 월급이 아닌 소득인정액(소득+재산 환산액)으로 판정합니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기초생활수급자 소득 기준이 어떻게 되나요?',
      a: '급여 종류에 따라 다릅니다. 생계급여 중위소득 32%, 의료급여 40%, 주거급여 48%, 교육급여 50% 이하. 2026년 1인 가구 생계급여 기준은 월 820,556원입니다.',
      source: '보건복지부 수급자선정기준',
      sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10708010300',
    },
    {
      q: '소득인정액과 실제 월급은 다른가요?',
      a: '다릅니다. 소득인정액은 근로소득·사업소득에 재산(부동산·금융재산·자동차 등)을 소득으로 환산한 금액을 더한 값입니다. 월급이 적어도 재산이 많으면 소득인정액이 높아질 수 있습니다.',
      source: '보건복지부 조사내용',
      sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10708010400',
    },
    {
      q: '생계급여는 얼마를 받나요?',
      a: '생계급여액 = 생계급여 선정기준 - 소득인정액. 예를 들어 1인 가구 소득인정액이 30만원이면 820,556 - 300,000 = 520,556원을 받습니다.',
      source: '보건복지부 급여수준',
      sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10708010500',
    },
    {
      q: '4인 가구 기준 생계급여 소득 한도는 얼마인가요?',
      a: '2026년 4인 가구 생계급여 선정기준은 월 2,078,316원입니다. 소득인정액이 이 이하면 생계급여를 받을 수 있습니다.',
      source: '보건복지부 수급자선정기준',
      sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10708010300',
    },
    {
      q: '자녀 소득이 있어도 생계급여를 받을 수 있나요?',
      a: '네. 2021년 10월부터 생계급여는 부양의무자(자녀 등) 기준이 완전 폐지됐습니다. 신청 가구의 소득인정액만 기준 이하면 자녀 소득·재산과 무관하게 받을 수 있습니다.',
      source: '보건복지부 수급자선정기준',
      sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10708010300',
    },
  ],
  sources: [
    { name: '보건복지부 수급자선정기준', url: 'https://www.mohw.go.kr/menu.es?mid=a10708010300' },
    { name: '보건복지부 급여수준', url: 'https://www.mohw.go.kr/menu.es?mid=a10708010500' },
  ],
};
