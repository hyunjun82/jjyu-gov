import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          일부 지자체는 건강보험 급여와 별도로 <strong>노인 보청기 구입비 추가 지원</strong>을 시행합니다.
          예를 들어 나주시는 최대 <strong>117만 9천원</strong>까지 추가 지원하며,
          주소지 관할 읍·면·동 행정복지센터에 신청합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        지자체 추가 지원은 지역별로 지원 금액·대상·조건이 다릅니다.
        건강보험 급여를 먼저 신청한 후 거주 지자체에 추가 지원 여부를 반드시 확인하세요.
        지자체 예산 소진 시 조기 마감될 수 있습니다.
      </p>

      <section className="detail-card" id="local">
        <h2 className="detail-card-head">지자체 추가 지원 개요</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>건강보험 급여</th><th>지자체 추가 지원</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>지원 근거</strong></td><td>국민건강보험법</td><td>지자체 조례·예산</td></tr>
              <tr><td><strong>지원 금액</strong></td><td>최대 131만 7천원</td><td>지역별 상이 (나주시 예: 최대 117만 9천원)</td></tr>
              <tr><td><strong>신청처</strong></td><td>건강보험공단·등록 판매점</td><td>주소지 읍·면·동 행정복지센터</td></tr>
              <tr><td><strong>중복 가능</strong></td><td>-</td><td>건강보험 급여와 별도 신청 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">지자체 추가 지원 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 주소지 관할 읍·면·동 행정복지센터 방문 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>확인 방법:</strong> 거주 지자체 홈페이지 또는 행정복지센터 전화 문의
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>필요 서류:</strong> 청각장애인 등록증, 보청기 구입 영수증, 통장 사본 등 (지역마다 상이)
          </div>
          <div className="info-box">
            <strong>주의:</strong> 예산 소진 시 조기 마감. 연초 신청 권장.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            건강보험 급여 조건, 신청 절차, 본인부담 비교까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/elderly-hearing-aid" className="btn-cta">
            노인보청기지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 노인보청기지원지자체추가혜택지역별117만신청방법SpokeContent: SpokeData = {
  h1: '노인 보청기 지원 지자체 추가 혜택, 지역별 최대 117만원 신청 방법',
  breadcrumb: '지자체추가혜택지역별117만신청방법',
  description:
    '노인 보청기 지자체 추가 지원: 건강보험 급여와 별도로 일부 지자체에서 추가 지원(나주시 예 최대 117만 9천원). 주소지 읍·면·동 행정복지센터 신청. 지역별 금액·조건 상이.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '지자체 추가 지원은 건강보험 급여를 받은 후에 신청해야 하나요?',
      a: '지자체마다 신청 시점이 다릅니다. 일부 지자체는 구입 전 신청이 필요하고, 일부는 구입 후 영수증을 제출하는 방식입니다. 반드시 거주 지자체에 사전 확인 후 진행하세요.',
      source: '행정안전부',
      sourceUrl: 'https://www.mois.go.kr',
    },
    {
      q: '타 지역으로 이사를 가면 이미 받은 지자체 지원금을 반환해야 하나요?',
      a: '지자체 추가 지원금은 신청 당시 주소지 기준으로 지급됩니다. 이후 이사를 하더라도 이미 지급된 지원금은 반환 의무가 없으나, 새로운 지자체에서 추가 지원을 받으려면 해당 지자체 조건을 다시 확인해야 합니다.',
      source: '행정안전부',
      sourceUrl: 'https://www.mois.go.kr',
    },
    {
      q: '내가 사는 지자체가 추가 지원을 하는지 어떻게 확인하나요?',
      a: '거주지 시·군·구청 홈페이지의 복지 또는 노인 지원 항목을 확인하거나, 주민센터(읍·면·동 행정복지센터)에 직접 문의하는 것이 가장 정확합니다.',
      source: '행정안전부',
      sourceUrl: 'https://www.mois.go.kr',
    },
    {
      q: '지자체 지원과 건강보험 급여를 합치면 보청기를 무료로 받을 수 있나요?',
      a: '지자체 추가 지원이 본인부담금을 충당할 만큼 충분한 경우 실질적으로 무료에 가깝게 받을 수 있습니다. 다만 지역별로 지원 금액이 다르고 예산에 따라 달라지므로 거주 지자체에서 정확한 금액을 확인하세요.',
      source: '행정안전부',
      sourceUrl: 'https://www.mois.go.kr',
    },
    {
      q: '지자체 추가 지원을 받으려면 나이 제한이 있나요?',
      a: '지자체마다 지원 조건이 다르며, 일부 지자체는 만 65세 이상 노인을 대상으로 합니다. 연령·소득·장애 등록 여부 등 조건이 지역마다 상이하므로 반드시 거주 지자체에 확인하세요.',
      source: '행정안전부',
      sourceUrl: 'https://www.mois.go.kr',
    },
  ],
  sources: [
    { name: '행정안전부 지방자치단체 복지', url: 'https://www.mois.go.kr' },
    { name: '국민건강보험공단 보조기기 급여', url: 'https://www.nhis.or.kr' },
  ],
};
