import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          통장 잔액(금융재산)이 많으면 소득인정액이 높아져 기초생활수급에서 탈락할 수 있습니다.
          금융재산은 <strong>생활준비금 600만원을 공제</strong>한 후 소득으로 환산되며,
          잔액이 많을수록 환산 소득이 올라갑니다.
          부동산·자동차도 재산으로 환산돼 소득인정액에 포함됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "통장에 돈이 있으면 수급에서 탈락하나요?" 일정 금액 이상이면 영향을 받습니다.
        재산이 소득으로 환산되는 방식과 탈락 기준을 정리했습니다.
      </p>

      <section className="detail-card" id="financial">
        <h2 className="detail-card-head">통장 잔액이 많으면 기초생활수급에서 탈락한다 | 재산 기준 계산법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>재산 항목</th><th>환산 방식</th><th>공제액</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>금융재산 (통장 잔액)</td>
                <td>잔액 - 생활준비금 600만원 → 소득환산율 적용</td>
                <td>600만원 공제</td>
              </tr>
              <tr>
                <td>일반재산 (부동산 등)</td>
                <td>(재산 - 기본재산액 - 부채) × 소득환산율</td>
                <td>지역별 기본재산액 상이</td>
              </tr>
              <tr>
                <td>자동차</td>
                <td>차량 가액 × 월 100% 환산 (예외 적용)</td>
                <td>장애인용 등 일부 예외</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>예시:</strong> 통장 잔액 1,600만원 → 생활준비금 600만원 공제 →
            1,000만원에 소득환산율 적용 → 소득인정액 증가 → 생계급여 감소 또는 탈락 가능
          </div>
        </div>
      </section>

      <section className="detail-card" id="property">
        <h2 className="detail-card-head">부동산 재산 기준 — 집이 있어도 수급 가능한 경우</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기본재산액 공제:</strong> 지역에 따라 기본재산액이 공제됩니다.
            대도시·중소도시·농어촌에 따라 다르며, 공제 후 잔액을 환산합니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>부채 공제:</strong> 부채(금융기관 대출, 임대 보증금 반환 채무 등)는
            재산에서 차감됩니다.
          </div>
          <div className="info-box">
            <strong>거주 주택:</strong> 거주 중인 주택은 재산 환산 시 일부 공제됩니다.
            집이 있다고 무조건 탈락하는 것은 아닙니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="exclusion">
        <h2 className="detail-card-head">수급 탈락 주요 사유</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>탈락 사유</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>소득인정액 초과</td>
                <td>근로소득·재산 환산액 합산이 선정기준 초과</td>
              </tr>
              <tr>
                <td>금융재산 과다</td>
                <td>통장 잔액이 공제(600만) 후에도 환산 소득 높음</td>
              </tr>
              <tr>
                <td>자동차 보유</td>
                <td>생계용 자동차 이외 일반 승용차는 100% 환산</td>
              </tr>
              <tr>
                <td>국적·체류 조건 미충족</td>
                <td>대한민국 국민이 아닌 경우 (일부 외국인 예외)</td>
              </tr>
              <tr>
                <td>소득 변동 미신고</td>
                <td>취업·재산 변동 미신고 시 환수·자격 상실 가능</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>소득·재산 변동은 즉시 신고 의무:</strong> 취업·재산 변동이 생기면
            주민센터에 즉시 신고해야 합니다. 미신고 시 과오지급 환수가 발생합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            소득 기준, 급여 종류, 65세 이상 조건 등<br />
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

export const 기초수급탈락조건SpokeContent: SpokeData = {
  h1: '통장 잔액이 많으면 기초생활수급에서 탈락한다 | 재산 기준 계산법',
  breadcrumb: '탈락조건',
  description:
    '기초생활수급 탈락 원인: 금융재산(통장 잔액)은 600만원 공제 후 소득환산. 부동산도 기본재산액 공제 후 환산. 자동차는 월 100% 환산 원칙. 소득인정액이 급여별 선정기준 초과 시 탈락. 소득·재산 변동은 즉시 신고 의무.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '통장에 돈이 얼마 이상 있으면 탈락하나요?',
      a: '금액 자체보다 환산 소득이 선정기준을 초과하는지가 기준입니다. 금융재산은 600만원 공제 후 소득환산율을 적용하므로, 잔액이 많을수록 소득인정액이 올라갑니다.',
      source: '보건복지부 조사내용',
      sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10708010400',
    },
    {
      q: '집이 있어도 기초수급자가 될 수 있나요?',
      a: '가능합니다. 거주 주택은 지역별 기본재산액 공제 후 잔액만 환산됩니다. 집이 있다고 무조건 탈락하는 것이 아니라 환산 후 소득인정액이 기준을 초과해야 탈락합니다.',
      source: '보건복지부 조사내용',
      sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10708010400',
    },
    {
      q: '자동차가 있으면 수급에서 탈락하나요?',
      a: '일반 승용차는 차량 가액의 월 100%가 소득으로 환산됩니다. 단, 장애인용·생업용 등 일부 예외가 있습니다. 정확한 적용 여부는 주민센터에서 확인하세요.',
      source: '보건복지부 조사내용',
      sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10708010400',
    },
    {
      q: '취업을 했을 때 신고를 안 하면 어떻게 되나요?',
      a: '소득·재산 변동 미신고 시 과오지급 환수가 발생하고 수급자격이 상실될 수 있습니다. 변동 사항은 즉시 주민센터에 신고해야 합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '부채가 있으면 재산에서 차감되나요?',
      a: '네. 금융기관 대출, 임대 보증금 반환 채무 등 부채는 재산에서 차감됩니다. 부채를 제외한 순재산에 소득환산율이 적용됩니다.',
      source: '보건복지부 조사내용',
      sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10708010400',
    },
  ],
  sources: [
    { name: '보건복지부 조사내용', url: 'https://www.mohw.go.kr/menu.es?mid=a10708010400' },
    { name: '보건복지부 수급자선정기준', url: 'https://www.mohw.go.kr/menu.es?mid=a10708010300' },
  ],
};
