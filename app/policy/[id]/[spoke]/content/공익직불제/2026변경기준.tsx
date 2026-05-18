import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 기본형 공익직불금의 가장 큰 변화는
          <strong>농외소득 기준 상향</strong>입니다.
          2025년 3,700만원에서 2026년 <strong>4,300만원</strong>으로 높아져
          더 많은 농업인이 신청할 수 있게 됐습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "2026년 공익직불금이 달라진 게 있나요? 작년에 못 받았는데 올해는 받을 수 있나요?"
        2026년 변경 기준을 정리했습니다.
      </p>

      <section className="detail-card" id="changes">
        <h2 className="detail-card-head">2025년 대비 2026년 주요 변경 사항</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>2025년</th><th>2026년</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>농외소득 기준</strong></td>
                <td>3,700만원 이하</td>
                <td>4,300만원 이하 (상향)</td>
              </tr>
              <tr>
                <td><strong>신청 기간</strong></td>
                <td>3월~5월 31일</td>
                <td>2026.03.01~05.31</td>
              </tr>
              <tr>
                <td><strong>총 예산</strong></td>
                <td>약 2조 3,000억원</td>
                <td>2조 3,000억원 (유지)</td>
              </tr>
              <tr>
                <td><strong>농지 면적 요건</strong></td>
                <td>1,000㎡ 이상</td>
                <td>1,000㎡ 이상 (동일)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="income-detail">
        <h2 className="detail-card-head">농외소득 기준 상향의 의미</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>농외종합소득이란:</strong> 농업 외의 소득(근로·사업·이자·배당·임대소득 등)의 합계
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기준 상향 효과:</strong> 2025년에 농외소득 초과로 탈락했던 농업인이 2026년에는 신청 가능
          </div>
          <div className="info-box">
            <strong>확인 방법:</strong> 읍·면·동 행정복지센터 또는 농림축산식품부 1334 문의
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">2026년 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 기간:</strong> 2026.03.01 ~ 05.31
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>비대면:</strong> 스마트폰 앱 또는 전화 신청
          </div>
          <div className="info-box">
            <strong>방문:</strong> 읍·면·동 행정복지센터 직접 방문
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            자격 조건, 신청 절차, 지급 금액 등<br />
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

export const 공익직불제2026변경기준SpokeContent: SpokeData = {
  h1: '2026년 공익직불금 신청 대상과 농외소득 기준이 달라진 점 정리',
  breadcrumb: '2026변경기준',
  description:
    '2026년 공익직불금 농외소득 기준 3,700만원→4,300만원 상향. 신청 2026.03.01~05.31. 농지 1,000㎡ 이상. 총 예산 2조 3,000억원. 128만 농가 평균 180만원. 문의 1334.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 공익직불금에서 달라진 점이 무엇인가요?',
      a: '농외종합소득 기준이 3,700만원에서 4,300만원으로 상향됐습니다. 더 많은 농업인이 신청 자격을 갖게 됐습니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '2025년에 농외소득 초과로 탈락했어도 2026년에 신청할 수 있나요?',
      a: '2026년 기준 농외소득이 4,300만원 이하라면 신청 자격이 생깁니다. 읍·면·동 행정복지센터에서 확인하세요.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '2026년 신청 기간은 언제인가요?',
      a: '2026년 3월 1일부터 5월 31일까지입니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '농외소득에 근로소득도 포함되나요?',
      a: '네, 농업 외의 근로·사업·이자·배당·임대소득 등 종합소득을 합산합니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '공익직불금은 어디서 신청하나요?',
      a: '스마트폰 앱·전화 비대면 신청 또는 읍·면·동 행정복지센터 방문 신청이 가능합니다. 문의는 1334로 하시면 됩니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
  ],
  sources: [
    { name: '농림축산식품부', url: 'https://www.mafra.go.kr' },
    { name: '농업경영체 등록', url: 'https://www.nongsaro.go.kr' },
  ],
};
