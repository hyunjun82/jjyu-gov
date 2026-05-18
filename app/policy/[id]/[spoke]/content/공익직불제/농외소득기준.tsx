import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 기준 농외종합소득이 <strong>4,300만원 이하</strong>이면
          공익직불금 신청이 가능합니다. 농업 외의 근로·사업·이자·배당·임대소득
          등을 합산한 금액이 기준이며, 2025년(3,700만원)보다 상향됐습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "농업 외에 아르바이트나 임대 수입이 있어도 공익직불금을 받을 수 있나요?"
        농외소득 기준과 해당 소득 유형을 정리했습니다.
      </p>

      <section className="detail-card" id="income-types">
        <h2 className="detail-card-head">농외소득에 포함되는 소득 유형</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>소득 유형</th><th>포함 여부</th><th>예시</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>근로소득</strong></td>
                <td>포함</td>
                <td>직장 월급, 아르바이트</td>
              </tr>
              <tr>
                <td><strong>사업소득</strong></td>
                <td>포함</td>
                <td>농업 외 사업 수익</td>
              </tr>
              <tr>
                <td><strong>이자소득</strong></td>
                <td>포함</td>
                <td>예금 이자</td>
              </tr>
              <tr>
                <td><strong>배당소득</strong></td>
                <td>포함</td>
                <td>주식 배당금</td>
              </tr>
              <tr>
                <td><strong>임대소득</strong></td>
                <td>포함</td>
                <td>부동산 임대 수익</td>
              </tr>
              <tr>
                <td><strong>농업소득</strong></td>
                <td>미포함</td>
                <td>직접 농업으로 얻은 소득</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="threshold">
        <h2 className="detail-card-head">연도별 농외소득 기준</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2025년:</strong> 3,700만원 이하
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2026년:</strong> 4,300만원 이하 (600만원 상향)
          </div>
          <div className="info-box">
            <strong>확인 방법:</strong> 읍·면·동 행정복지센터 또는 1334 문의
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="caution">
        <h2 className="detail-card-head">주의 사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            국세청 소득 자료와 자동 대조하므로 누락 신고 시 부정 수급으로 환수될 수 있습니다.
          </div>
          <div className="info-box">
            농외소득 기준 초과 여부는 신청 연도 전전년도 소득을 기준으로 판단하는 경우가 있으므로, 정확한 기준 연도는 1334로 확인하는 것이 안전합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 절차, 2026년 변경 사항, 지급 금액 등<br />
            기본형 공익직불제 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/direct-payment" className="btn-cta">
            기본형 공익직불제 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 공익직불제농외소득기준SpokeContent: SpokeData = {
  h1: '농외 소득이 있어도 공익직불금을 받을 수 있는지, 2026년 기준은 얼마인지',
  breadcrumb: '농외소득기준',
  description:
    '2026년 공익직불금 농외소득 기준 4,300만원 이하(2025년 3,700만원에서 상향). 포함 소득: 근로·사업·이자·배당·임대. 농업소득은 미포함. 문의 1334.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '농외소득이 있으면 공익직불금을 못 받나요?',
      a: '2026년 기준 농외종합소득이 4,300만원 이하면 신청이 가능합니다. 초과하는 경우에만 자격에서 제외됩니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '임대소득이 있어도 신청할 수 있나요?',
      a: '임대소득은 농외소득에 포함됩니다. 근로·사업·이자·배당·임대소득 합계가 4,300만원 이하면 신청이 가능합니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '농업에서 얻은 소득도 농외소득에 포함되나요?',
      a: '아니요, 농업소득은 농외소득에서 제외됩니다. 농업 외 소득만 합산합니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '농외소득이 기준을 넘어 탈락하면 다음 연도에 다시 신청할 수 있나요?',
      a: '네, 다음 해에 농외소득이 기준 이하면 다시 신청할 수 있습니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '내 농외소득이 기준을 넘는지 어떻게 확인하나요?',
      a: '읍·면·동 행정복지센터 또는 1334로 문의하면 자격 여부를 사전에 확인할 수 있습니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
  ],
  sources: [
    { name: '농림축산식품부', url: 'https://www.mafra.go.kr' },
    { name: '농사로', url: 'https://www.nongsaro.go.kr' },
  ],
};
