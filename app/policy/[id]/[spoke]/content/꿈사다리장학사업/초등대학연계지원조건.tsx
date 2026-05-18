import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          복권기금 꿈사다리 장학사업은 <strong>초등 5학년부터 선발</strong>해
          <strong>대학 졸업 시까지 연속 지원</strong>합니다.
          학년이 올라갈수록 지원 내용이 심화되며, 고등학교 졸업 후
          <strong>대학 장학금으로 자동 연계</strong>되는 구조입니다.
          지원 기간 내 학업·인성을 유지하면 대학까지 끊기지 않는 지원을 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        꿈사다리 장학사업의 가장 큰 장점은 초등학교에서 발굴된 학생이 대학 졸업 때까지 동행 지원을 받는다는 점입니다.
        단계별 조건과 연계 방식을 미리 파악해 두는 것이 중요합니다.
      </p>

      <section className="detail-card" id="stages">
        <h2 className="detail-card-head">학년 단계별 지원 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>대상</th><th>주요 지원</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>초등</strong></td><td>5~6학년</td><td>학업장려비 + 기초학습 멘토링</td></tr>
              <tr><td><strong>중학교</strong></td><td>1~3학년</td><td>교육활동비 + 진로 탐색</td></tr>
              <tr><td><strong>고등학교</strong></td><td>1~3학년</td><td>장학금 + 진로 역량 컨설팅</td></tr>
              <tr><td><strong>대학교</strong></td><td>입학 후</td><td>국가장학금 연계 + 멘토링 지속</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">대학 연계 유지 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학업 유지:</strong> 매 학년 일정 수준의 학업 성취도 유지 필요
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>인성 기준:</strong> 봉사·품행 등 종합 평가에서 결격 사유 없음
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 기준:</strong> 지원 기간 중 기초·차상위 유지 여부 확인
          </div>
          <div className="info-box">
            <strong>탈락 사유:</strong> 소득 기준 초과·학업 포기·품행 불량 등
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="entry">
        <h2 className="detail-card-head">초등 입문 시 주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>선발 시기:</strong> 초등 5학년 기준 공고 시 학교 추천 또는 자기 추천
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2025 변경:</strong> 2025년부터 초등 5학년 선발 확대 (기존 중학교 이상)
          </div>
          <div className="info-box">
            <strong>신청처:</strong> 복지로(bokjiro.go.kr) 또는 한국장학재단
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            꿈사다리 장학금 선발 기준, 지원 금액, 신청 방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/dream-ladder" className="btn-cta">
            꿈사다리 장학사업 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 꿈사다리장학사업초등대학연계지원조건SpokeContent: SpokeData = {
  h1: '초등 5학년부터 대학까지 연계 지원한다면 꿈사다리 장학금 지원 조건',
  breadcrumb: '초등대학연계지원조건',
  description:
    '꿈사다리 장학금은 초등 5학년 선발 후 대학 졸업까지 연속 지원. 단계별 학업장려비·멘토링·진로 컨설팅·대학 장학금 연계. 학업·인성·소득 기준 유지 필수. 복지로·한국장학재단 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '초등학교 때 선발되면 대학까지 계속 받을 수 있나요?',
      a: '네. 학업·인성·소득 기준을 유지하면 초등부터 대학 졸업까지 연속 지원합니다. 탈락 사유(소득 초과·학업 포기 등)가 없으면 대학 입학 후에도 지원이 이어집니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '지원이 끊기는 경우는 어떤 경우인가요?',
      a: '소득 기준 초과, 학업 포기, 품행 불량 등의 사유가 발생하면 지원이 중단될 수 있습니다. 매년 유지 요건을 점검합니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '중학교 때부터 신청해도 대학까지 연계되나요?',
      a: '네. 중학교 1학년에 선발되어도 고등학교·대학까지 연계 지원을 받을 수 있습니다. 초등에서 선발된 학생과 동일한 대학 연계 혜택이 적용됩니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '초등 5학년 선발은 언제부터 시작됐나요?',
      a: '2025년부터 초등학교 5학년으로 선발 대상이 확대됐습니다. 기존에는 중학생 이상이 대상이었습니다.',
      source: '교육부',
      sourceUrl: 'https://www.moe.go.kr',
    },
    {
      q: '대학 진학 후에는 어떤 지원이 이어지나요?',
      a: '대학 입학 후에는 국가장학금 연계 및 멘토링 지속 지원이 제공됩니다. 구체적인 대학 연계 지원 내용은 한국장학재단 공고에서 확인하세요.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
  ],
  sources: [
    { name: '교육부', url: 'https://www.moe.go.kr' },
    { name: '한국장학재단', url: 'https://www.kosaf.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
