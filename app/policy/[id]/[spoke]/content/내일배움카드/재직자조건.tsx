import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          재직자도 국민내일배움카드를 신청할 수 있습니다.
          <strong>만 15~64세 재직자라면 사업주 동의 없이 본인이 직접 신청</strong>할 수 있습니다.
          단, <strong>공무원·사립학교 교직원·현역 군인·만 65세 이상</strong>은 제외됩니다.
          재직자는 실업자와 달리 직업심리검사 없이 바로 발급 신청이 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "회사를 다니면서 내일배움카드를 받을 수 있나요?" 재직 중에도 신청 가능하며
        회사 허락도 필요 없습니다. 재직자와 실업자의 차이점을 명확히 정리했습니다.
      </p>

      <section className="detail-card" id="eligible">
        <h2 className="detail-card-head">재직자도 받을 수 있나 — 신청 가능 vs 제외 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>신청 가능</th><th>제외 대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>재직자 (만 15~64세)</td>
                <td>공무원·사립학교 교직원</td>
              </tr>
              <tr>
                <td>실업자·구직자</td>
                <td>현역 군인</td>
              </tr>
              <tr>
                <td>자영업자·특수형태근로종사자</td>
                <td>만 65세 이상</td>
              </tr>
              <tr>
                <td>농·임·어업인</td>
                <td>외국인 (일부 영주권자 예외)</td>
              </tr>
              <tr>
                <td>결혼이민자</td>
                <td>부정수급 제재 중인 자</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>핵심:</strong> 재직자는 사업주 동의 없이 본인이 직접 고용24에서 신청합니다.
            사업장 규모나 고용 형태(정규직·계약직·파견직)와 무관합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="diff">
        <h2 className="detail-card-head">공무원 제외 이유 — 재직자와 실업자 차이점</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>재직자</th><th>실업자</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>직업심리검사</td>
                <td>불필요</td>
                <td><strong>필요</strong> (발급 전 상담)</td>
              </tr>
              <tr>
                <td>사업주 동의</td>
                <td>불필요</td>
                <td>해당 없음</td>
              </tr>
              <tr>
                <td>발급 기간</td>
                <td>14일 이내</td>
                <td>상담 포함 14일 이내</td>
              </tr>
              <tr>
                <td>훈련장려금</td>
                <td>해당 없음</td>
                <td><strong>월 최대 11만 6천원</strong></td>
              </tr>
              <tr>
                <td>지원 한도</td>
                <td>기본 300만원</td>
                <td>기본 300만원</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>공무원이 제외되는 이유:</strong> 공무원은 국가공무원법에 따라 별도의 직업능력개발훈련 제도가 적용됩니다.
            민간 고용보험 기반인 국민내일배움카드와 분리 운영됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">재직자 신청 방법 — 회사 눈치 볼 필요 없다</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인 신청:</strong> work24.go.kr(고용24) → 국민내일배움카드 신청 → 재직자 선택
            → 직업심리검사 없이 바로 신청 완료 → 약 14일 이내 카드 수령
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문 신청:</strong> 거주지 관할 고용센터 방문 → 재직자로 신청서 작성 → 14일 이내 카드 발송
          </div>
          <div className="info-box">
            <strong>사업주 통보 없음:</strong> 재직자가 내일배움카드를 신청해도 사업주에게 통보되지 않습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원금액 300~500만원, 사용처, 실업급여 병행 등<br />
            국민내일배움카드 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/learning-card" className="btn-cta">
            국민내일배움카드 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 재직자조건SpokeContent: SpokeData = {
  h1: '재직자도 내일배움카드 받을 수 있나 | 공무원 제외 목록과 재직자·실업자 차이',
  breadcrumb: '재직자 조건',
  description:
    '재직자도 국민내일배움카드를 신청할 수 있습니다. 만 15~64세라면 사업주 동의 없이 본인이 직접 고용24에서 신청 가능. 공무원·사립학교 교직원·현역 군인·만 65세 이상은 제외. 재직자는 직업심리검사 없이 바로 발급, 사업주에게 통보되지 않습니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '재직 중에도 내일배움카드를 신청할 수 있나요?',
      a: '네. 만 15~64세 재직자라면 사업주 동의 없이 본인이 직접 신청할 수 있습니다. 고용 형태(정규직·계약직·파견직)와 무관합니다.',
      source: '고용노동부 국민내일배움카드 신청 자격 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '공무원은 왜 신청할 수 없나요?',
      a: '공무원은 국가공무원법에 따른 별도의 직업능력개발 제도가 적용됩니다. 민간 고용보험 기반의 국민내일배움카드와는 분리 운영됩니다.',
      source: '고용노동부 국민내일배움카드 제외 대상 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '재직자가 신청하면 회사에 알려지나요?',
      a: '아닙니다. 재직자가 내일배움카드를 신청하거나 사용해도 사업주에게 별도로 통보되지 않습니다.',
      source: '고용24 국민내일배움카드 신청 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '재직자는 직업심리검사를 받아야 하나요?',
      a: '아닙니다. 실업자만 발급 전 직업심리검사와 상담이 필요합니다. 재직자는 검사 없이 바로 온라인 신청이 가능합니다.',
      source: '고용24 국민내일배움카드 발급 절차 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '재직자도 훈련장려금을 받을 수 있나요?',
      a: '아닙니다. 훈련장려금은 실업자와 자영업자 피보험자에게만 지급됩니다. 재직자는 훈련장려금 대상이 아닙니다.',
      source: '고용24 훈련장려금 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 국민내일배움카드 자격 안내', url: 'https://www.work24.go.kr' },
    { name: '고용24 국민내일배움카드 신청', url: 'https://www.work24.go.kr/selectIssuGudn' },
  ],
};
