import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          드림장학금 소득 기준은 <strong>신청일 기준 기초생활수급자 또는 차상위계층</strong>입니다.
          과거에는 기초·차상위 기간이 3년 이상이어야 했지만,
          <strong>기준이 완화되어 신청일 현재 해당하면 신청 가능</strong>합니다.
          기초·차상위 고2~3학년 성적 우수 학생이라면 지원을 검토해 보세요.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        소득 기준이 완화된 덕분에 최근 기초·차상위 가정이 된 학생도 지원이 가능해졌습니다.
        신청일 기준으로 소득 기준을 충족하면 됩니다.
      </p>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득 기준 변화</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>이전 기준</strong></td><td>기초생활수급자 또는 차상위계층 기간 3년 이상</td></tr>
              <tr><td><strong>현행 기준</strong></td><td>신청일 기준 기초생활수급자 또는 차상위계층이면 가능</td></tr>
              <tr><td><strong>완화 효과</strong></td><td>최근 기초·차상위 편입 가정도 신청 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">지원 대상 요건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학년:</strong> 고등학교 2학년 또는 3학년
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득:</strong> 신청일 기준 기초생활수급자 또는 차상위계층
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학업:</strong> 성적 우수 + 학업 의지·열정
          </div>
          <div className="info-box">
            <strong>국적:</strong> 대한민국 국적 학생
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="proof">
        <h2 className="detail-card-head">소득 증명 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기초생활수급자:</strong> 수급자 증명서 (주민센터 발급)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>차상위계층:</strong> 차상위계층 확인서 (주민센터 발급)
          </div>
          <div className="info-box">
            <strong>발급처:</strong> 거주지 주민센터·복지로(bokjiro.go.kr)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            드림장학금 지원 내용, 월 학업장려비 금액, 신청 절차까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/dream-scholarship" className="btn-cta">
            드림장학금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 드림장학금기초수급차상위우수학생SpokeContent: SpokeData = {
  h1: '기초수급·차상위 고2~3 우수 학생이라면 드림장학금으로 해외유학 가능',
  breadcrumb: '기초수급차상위우수학생',
  description:
    '드림장학금 소득 기준: 신청일 기준 기초생활수급자 또는 차상위계층(기존 3년 이상 조건 완화). 대상: 고2~3 성적 우수 학생. 월 50~70만원 학업장려비 + 멘토링 + 유학 상담. 한국장학재단 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '최근에 기초수급자가 됐는데 신청할 수 있나요?',
      a: '네. 기존에는 기초·차상위 기간이 3년 이상이어야 했지만, 기준이 완화되어 신청일 기준으로 기초생활수급자 또는 차상위계층이면 신청 가능합니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '차상위계층도 기초수급자와 동일하게 신청할 수 있나요?',
      a: '네. 기초생활수급자와 차상위계층 모두 동일하게 드림장학금 신청 대상입니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '소득 증명 서류는 어디서 발급받나요?',
      a: '거주지 주민센터(행정복지센터) 또는 복지로(bokjiro.go.kr)에서 발급할 수 있습니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '성적이 어느 정도 되어야 하나요?',
      a: '구체적인 성적 커트라인보다는 학업 의지·열정과 종합적인 역량을 평가합니다. 정확한 기준은 매년 공고문을 확인하세요.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '고3도 신청할 수 있나요?',
      a: '네. 고등학교 2학년과 3학년 모두 신청 대상입니다. 단, 신청 당시 재학 중이어야 합니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
  ],
  sources: [
    { name: '교육부', url: 'https://www.moe.go.kr' },
    { name: '한국장학재단', url: 'https://www.kosaf.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
