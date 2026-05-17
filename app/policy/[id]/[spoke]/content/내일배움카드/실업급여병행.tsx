import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          실업급여를 받는 중에도 <strong>국민내일배움카드로 훈련을 수강할 수 있습니다</strong>.
          내일배움카드 훈련 수강은 <strong>구직활동 1건으로 인정</strong>됩니다.
          단, 실업자 신분으로 훈련을 받을 경우 <strong>훈련수당(장려금)은 별도로 지급되지 않고</strong>
          실업급여와 병행 수령합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "실업급여 받으면서 내일배움카드로 학원 다녀도 되나요?"
        많이 헷갈리는 부분입니다. 병행 가능 여부와 구직활동 인정 조건을 정리했습니다.
      </p>

      <section className="detail-card" id="concurrent">
        <h2 className="detail-card-head">실업급여 + 내일배움카드 — 동시 사용 가능한가</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>훈련 수강 가능 여부</td>
                <td><strong>✅ 가능</strong> (실업급여 수급 중 내일배움카드 훈련 참여 가능)</td>
              </tr>
              <tr>
                <td>구직활동 인정 여부</td>
                <td><strong>✅ 인정</strong> (훈련 수강이 구직활동 1건으로 인정)</td>
              </tr>
              <tr>
                <td>실업급여 계속 수령</td>
                <td>✅ 훈련 중에도 실업급여 계속 지급</td>
              </tr>
              <tr>
                <td>훈련장려금 지급</td>
                <td>⚠️ 실업급여 수급 중에는 훈련수당(장려금) 미지급</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>핵심:</strong> 실업급여 받으면서 내일배움카드 훈련을 받으면 구직활동 의무를 충족하면서
            기술도 습득할 수 있습니다. 두 혜택이 동시에 적용됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="job-search">
        <h2 className="detail-card-head">구직활동 인정 기준 — 훈련 시간이 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>훈련 형태</th><th>구직활동 인정</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>직업훈련 참여 (구직관련 직종)</td>
                <td><strong>구직활동 1건 인정</strong></td>
              </tr>
              <tr>
                <td>직업훈련 (구직 직종 무관)</td>
                <td>구직외 활동으로 인정 (별도 구직활동 추가 필요할 수 있음)</td>
              </tr>
              <tr>
                <td>온라인 강의 단기 수강</td>
                <td>30시간 이상 수강 시 인정 기준 충족 여부 고용센터 확인</td>
              </tr>
            </tbody>
          </table>
          <div className="warning-box" style={{ marginTop: 12 }}>
            <strong>주의:</strong> 희망 직종과 관련 없는 훈련은 구직활동으로 인정되지 않을 수 있습니다.
            훈련 수강 전 담당 고용센터에 구직활동 인정 여부를 확인하세요.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">실업급여 받으면서 내일배움카드 신청하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 실업급여 수급 신청 후 수급 자격 인정
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 고용24(work24.go.kr) 또는 고용센터에서 내일배움카드 발급 신청
            (실업자로 신청 → 직업심리검사 포함)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 카드 수령 후 고용24에서 훈련과정 검색·수강 신청
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 훈련 수강 이수증 or 수강 인증을 고용센터에 제출 → 구직활동 인정
          </div>
        </div>
      </section>

      <section className="detail-card" id="note">
        <h2 className="detail-card-head">주의사항 — 훈련장려금은 받을 수 없다</h2>
        <div className="detail-card-body">
          <div className="warning-box" style={{ marginBottom: 12 }}>
            <strong>훈련장려금 미지급:</strong> 실업급여를 받는 동안에는 내일배움카드 훈련장려금(월 최대 11만 6천원)이
            별도로 지급되지 않습니다. 실업급여가 이미 소득을 보전하고 있기 때문입니다.
          </div>
          <div className="info-box">
            <strong>실업급여 수급 종료 후:</strong> 실업급여 수급이 끝난 뒤에는 실업자 신분으로
            훈련장려금을 받으면서 내일배움카드 훈련을 계속할 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원금액 300~500만원, 사용처, 재직자 조건 등<br />
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

export const 실업급여병행SpokeContent: SpokeData = {
  h1: '실업급여 받는 중에 내일배움카드 쓰면 구직활동으로 인정되나',
  breadcrumb: '실업급여 병행',
  description:
    '실업급여 수급 중에도 국민내일배움카드 훈련 수강이 가능합니다. 직종 관련 훈련은 구직활동 1건으로 인정되어 구직활동 의무를 충족합니다. 단, 실업급여 수급 중에는 훈련장려금(월 최대 11만 6천원)이 별도로 지급되지 않습니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '실업급여를 받으면서 내일배움카드를 사용할 수 있나요?',
      a: '네. 실업급여 수급 중에도 내일배움카드로 훈련과정을 수강할 수 있습니다. 실업급여는 계속 지급되며, 훈련 수강이 구직활동으로 인정됩니다.',
      source: '고용노동부 실업급여·내일배움카드 병행 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '내일배움카드 훈련이 구직활동으로 인정되나요?',
      a: '네. 구직 희망 직종과 관련된 훈련과정 수강은 구직활동 1건으로 인정됩니다. 직종과 관련 없는 훈련은 인정되지 않을 수 있으니 고용센터에 미리 확인하세요.',
      source: '고용24 구직활동 인정 기준 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '실업급여 받으면서 훈련장려금도 받을 수 있나요?',
      a: '아닙니다. 실업급여 수급 중에는 훈련장려금이 별도로 지급되지 않습니다. 실업급여 수급 종료 후에는 훈련장려금을 받으면서 내일배움카드 훈련을 계속할 수 있습니다.',
      source: '고용노동부 훈련장려금 안내',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '실업급여 받으면서 내일배움카드 발급 신청을 동시에 할 수 있나요?',
      a: '네. 실업급여 수급 신청과 내일배움카드 발급 신청을 같은 날 고용센터에서 동시에 처리할 수 있습니다.',
      source: '고용센터 국민내일배움카드 발급 안내',
      sourceUrl: 'https://www.work24.go.kr',
    },
    {
      q: '온라인 강의도 구직활동으로 인정되나요?',
      a: '30시간 이상 수강 등 인정 기준이 있으며, 담당 고용센터에 따라 기준이 다를 수 있습니다. 수강 전 관할 고용센터에 확인하는 것이 안전합니다.',
      source: '고용24 온라인 훈련 구직활동 인정 기준',
      sourceUrl: 'https://www.work24.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부 실업급여 안내', url: 'https://www.moel.go.kr' },
    { name: '고용24 국민내일배움카드 안내', url: 'https://www.work24.go.kr' },
  ],
};
