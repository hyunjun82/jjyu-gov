import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민내일배움카드는 <strong>고용노동부가 사전 인정한 훈련과정</strong>에서만 사용할 수 있습니다.
          AI·빅데이터·반도체 등 디지털·IT, 자격증, 외국어, 서비스업 훈련이 주요 사용처입니다.
          <strong>운전면허·취미·여가 과정은 사용 불가</strong>합니다.
          사용 가능한 강좌는 고용24(work24.go.kr)의 「훈련 찾기」에서 검색하면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "이 강의도 내일배움카드로 결제되나요?" 가장 많이 묻는 질문입니다.
        사용 가능한 분야와 사용 불가 과정을 명확히 정리했습니다.
      </p>

      <section className="detail-card" id="available">
        <h2 className="detail-card-head">AI·자격증·외국어 가능 — 주요 훈련 분야별 정리</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>분야</th><th>예시 과정</th><th>자부담</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>디지털·IT (국가기간)</td>
                <td>AI·빅데이터·웹개발·파이썬</td>
                <td><strong>0% (전액 지원)</strong></td>
              </tr>
              <tr>
                <td>전략산업 (국가기간)</td>
                <td>반도체·바이오·이차전지</td>
                <td><strong>0% (전액 지원)</strong></td>
              </tr>
              <tr>
                <td>자격증 취득</td>
                <td>회계·사회복지사·요양보호사·공인노무사</td>
                <td>15~55%</td>
              </tr>
              <tr>
                <td>외국어</td>
                <td>영어·중국어·일본어</td>
                <td>15~55%</td>
              </tr>
              <tr>
                <td>서비스·창업</td>
                <td>바리스타·조리·제과제빵·플로리스트</td>
                <td>15~55%</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>온라인 강의도 가능:</strong> 고용노동부 인정 온라인 플랫폼의 강좌는 내일배움카드로 수강 가능합니다.
            패스트캠퍼스·클래스101 등 일부 온라인 강좌가 포함됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="unavailable">
        <h2 className="detail-card-head">운전면허는 안 된다 — 사용 불가 과정 목록</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>사용 불가 분야</th><th>이유</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>운전면허 취득 과정</td>
                <td>고용노동부 적합과정 미해당</td>
              </tr>
              <tr>
                <td>취미·여가 과정</td>
                <td>직업능력개발 목적 외</td>
              </tr>
              <tr>
                <td>고용24 미등록 과정</td>
                <td>인정받지 않은 훈련기관</td>
              </tr>
              <tr>
                <td>학원 임의 수강</td>
                <td>내일배움카드 협약 기관이 아닌 경우</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>주의:</strong> 카드가 있어도 아무 학원·온라인 강의에서나 사용 가능한 것이 아닙니다.
            반드시 고용24에서 「내일배움카드 적합과정」으로 등록된 강좌인지 먼저 확인하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="search">
        <h2 className="detail-card-head">내가 원하는 과정 사용 가능 여부 확인하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 고용24 훈련 찾기:</strong> work24.go.kr → 훈련 찾기·신청 → 「국민내일배움카드」 필터 선택 → 원하는 직종·지역 검색
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 훈련기관에 직접 문의:</strong> 수강 희망 기관에 「내일배움카드 적합과정 등록 여부」를 확인하세요.
          </div>
          <div className="info-box">
            <strong>③ 1350 상담:</strong> 고용노동부 고객상담센터 1350에 수강 희망 과정명을 알려주면 사용 가능 여부를 안내받을 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원금액 300~500만원, 재직자 조건, 실업급여 병행 등<br />
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

export const 사용처SpokeContent: SpokeData = {
  h1: '내일배움카드 사용처 어디까지 되나 | AI·자격증·외국어 가능, 운전면허는 안 돼',
  breadcrumb: '사용처',
  description:
    '국민내일배움카드 사용처는 고용노동부 인정 훈련과정에 한정됩니다. AI·반도체 등 국가기간 분야는 자부담 0%. 자격증·외국어·서비스업 수강 가능. 운전면허·취미·고용24 미등록 과정은 사용 불가. 사용 가능 과정은 work24.go.kr에서 검색.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '내일배움카드로 어떤 강의를 들을 수 있나요?',
      a: 'AI·빅데이터·반도체 등 디지털·IT 분야, 자격증 취득(회계·사회복지사·요양보호사 등), 외국어, 서비스업(바리스타·제과제빵 등) 강좌를 수강할 수 있습니다. 고용노동부 인정 훈련과정이어야 합니다.',
      source: '고용24 훈련과정 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '운전면허도 내일배움카드로 되나요?',
      a: '안 됩니다. 운전면허는 고용노동부 적합훈련과정에 해당하지 않아 내일배움카드로 사용할 수 없습니다.',
      source: '고용24 훈련과정 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '온라인 강의도 내일배움카드로 결제할 수 있나요?',
      a: '네. 고용노동부 인정을 받은 온라인 플랫폼의 강좌는 가능합니다. 단, 모든 온라인 강의가 해당하는 것이 아니므로 고용24에서 적합과정 여부를 먼저 확인해야 합니다.',
      source: '고용24 국민내일배움카드 적합과정 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '어디서 사용 가능한 강좌를 찾나요?',
      a: 'work24.go.kr(고용24) → 훈련 찾기·신청 → 국민내일배움카드 필터로 검색하면 사용 가능한 모든 과정을 확인할 수 있습니다.',
      source: '고용24 훈련 찾기 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: 'AI·IT 과정은 자기부담금이 없나요?',
      a: '네. AI·빅데이터·반도체·바이오 등 국가기간·전략산업 분야 훈련과정은 훈련비 100%가 지원되어 자기부담금이 없습니다.',
      source: '고용노동부 국가기간·전략산업직종 훈련 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용24 훈련 찾기', url: 'https://www.work24.go.kr' },
    { name: '고용노동부 국민내일배움카드 안내', url: 'https://www.moel.go.kr' },
  ],
};
