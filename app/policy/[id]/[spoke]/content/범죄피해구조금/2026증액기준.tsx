import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 3월 10일 범죄피해자 보호법 시행령 개정으로 구조금이 약 <strong>20% 증액</strong>되었습니다.
          기준 임금이 월 344만원으로 올랐고, 25세 미만 자녀 가산금 신설,
          서류 간소화, 산정 내역 공개 등이 함께 도입되었습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "2026년에 범죄피해 구조금이 올랐다고 들었는데 얼마나 달라졌나요?"
        2026년 시행령 개정으로 달라진 구조금 기준을 정리했습니다.
      </p>

      <section className="detail-card" id="change">
        <h2 className="detail-card-head">2026년 달라진 구조금 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>이전</th><th>2026년 개정</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>기준 임금</strong></td>
                <td>월 평균임금 수준</td>
                <td>월 344만원 (약 20% 인상)</td>
              </tr>
              <tr>
                <td><strong>25세 미만 자녀</strong></td>
                <td>가산 없음</td>
                <td>가산금 신설 지급</td>
              </tr>
              <tr>
                <td><strong>서류</strong></td>
                <td>복잡한 서류 다수</td>
                <td>간소화</td>
              </tr>
              <tr>
                <td><strong>산정 내역</strong></td>
                <td>비공개</td>
                <td>피해자에게 공개</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="amount2026">
        <h2 className="detail-card-head">2026년 구조금 금액</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>유족구조금:</strong> 월 344만원 × 최소 24개월 = 약 8,200만원 이상
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장해구조금:</strong> 장해 등급별로 월 기준 임금을 반영한 금액 차등 지급
          </div>
          <div className="info-box">
            <strong>중상해구조금:</strong> 피해 정도에 따라 결정 (2026년 기준 임금 적용)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply2026">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>시행일:</strong> 2026년 3월 10일부터 적용
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 거주지·범죄 발생지 관할 지방법원 지구심의회
          </div>
          <div className="info-box">
            <strong>문의:</strong> 범죄피해자지원센터 ☎ 1577-2584
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            유족 신청 조건, 중복 여부 등<br />
            범죄피해구조금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/crime-victim-aid" className="btn-cta">
            범죄피해구조금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 범죄피해구조금2026증액기준SpokeContent: SpokeData = {
  h1: '2026년 범죄피해 구조금 증액, 달라진 금액 기준과 신청 방법 정리',
  breadcrumb: '2026증액기준',
  description:
    '2026년 3월 범죄피해 구조금 약 20% 증액. 기준임금 월 344만원, 유족구조금 최소 8,200만원. 25세 미만 자녀 가산 신설. 서류 간소화 산정 내역 공개.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 구조금은 얼마나 올랐나요?',
      a: '기준 임금이 약 20% 인상되어 월 344만원이 되었습니다. 유족구조금 기준으로는 최소 8,200만원 이상이 됩니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '2026년 개정은 언제부터 적용되나요?',
      a: '2026년 3월 10일부터 시행된 범죄피해자 보호법 시행령 개정으로 적용됩니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '25세 미만 자녀 가산금은 무조건 받을 수 있나요?',
      a: '사망한 범죄피해자에게 25세 미만 자녀가 있는 경우에 지급됩니다. 구체적인 금액은 지구심의회 심의를 통해 결정됩니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '서류 간소화로 어떤 서류가 줄었나요?',
      a: '구체적인 간소화 목록은 법무부령에 따라 결정됩니다. 범죄피해자지원센터(☎ 1577-2584)에 문의하면 최신 안내를 받을 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '산정 내역 공개는 무엇인가요?',
      a: '이전에는 구조금 산정 계산 내역을 알 수 없었지만, 2026년부터 피해자에게 내역을 공개해 투명성을 높였습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
  ],
  sources: [
    { name: '법무부', url: 'https://www.moj.go.kr' },
    { name: '대한민국 정책브리핑', url: 'https://www.korea.kr' },
    { name: '찾기쉬운 생활법령정보', url: 'https://easylaw.go.kr' },
  ],
};
