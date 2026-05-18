import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          드림장학금(우수고등학생 해외유학 장학금)은
          <strong>저소득층 고등학교 2~3학년</strong> 성적 우수 학생에게
          해외유학 기회를 지원하는 교육부 사업입니다.
          선발되면 <strong>월 50~70만원의 학업장려비</strong>와
          개인별 1:1 멘토링, 해외 대사관 협업 유학 설명회 참석 기회가 제공됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        경제적 여건 때문에 해외유학을 포기했다면 드림장학금을 확인하세요.
        저소득 가정의 우수 고등학생에게 실질적인 해외유학 경로를 열어주는 제도입니다.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">지원 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대상 학년</strong></td><td>고등학교 2~3학년</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>신청일 기준 기초생활수급자 또는 차상위계층</td></tr>
              <tr><td><strong>학업 기준</strong></td><td>성적 우수 + 학업 의지·열정 보유</td></tr>
              <tr><td><strong>주관</strong></td><td>교육부·한국장학재단</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="support">
        <h2 className="detail-card-head">지원 내용</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학업장려비:</strong> 월 50~70만원 지급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>멘토링:</strong> 개인별 1:1 맞춤 멘토 연결
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>유학 정보:</strong> 대사관 협업 유학 설명회 참석 기회
          </div>
          <div className="info-box">
            <strong>유학 상담:</strong> 맞춤형 해외유학 진로 상담
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 안내</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 한국장학재단 누리집(kosaf.go.kr)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 시기:</strong> 매년 3~4월 공고 (연 1회)
          </div>
          <div className="info-box">
            <strong>서류:</strong> 성적 증명서, 소득 증명서, 자기소개서 등
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            드림장학금 신청 자격, 학업장려비 금액, 멘토링 안내까지<br />
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

export const 드림장학금저소득고교해외유학조건SpokeContent: SpokeData = {
  h1: '드림장학금, 저소득 고등학생이 해외유학을 갈 수 있는 조건과 지원 내용',
  breadcrumb: '저소득고교해외유학조건',
  description:
    '드림장학금: 저소득(기초·차상위) 고2~3 성적 우수 학생 대상. 월 50~70만원 학업장려비 + 1:1 멘토링 + 대사관 협업 유학 설명회. 한국장학재단 매년 3~4월 공고. 해외유학 기회 지원.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '드림장학금은 어떤 학생이 받을 수 있나요?',
      a: '기초생활수급자 또는 차상위계층 가정의 고등학교 2~3학년 성적 우수 학생이 대상입니다. 학업 의지와 열정도 평가에 반영됩니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '매달 얼마를 받나요?',
      a: '선발되면 월 50~70만원의 학업장려비가 지급됩니다. 정확한 금액은 해당 연도 공고에서 확인하세요.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '고등학교 1학년도 신청할 수 있나요?',
      a: '드림장학금 대상은 고등학교 2~3학년입니다. 고1은 대상에 해당하지 않습니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '해외유학을 가지 않아도 학업장려비를 받을 수 있나요?',
      a: '드림장학금은 해외유학을 준비하는 저소득 우수 학생을 지원하는 제도입니다. 학업장려비를 수령하면서 해외유학 준비를 진행합니다. 자세한 사항은 공고를 확인하세요.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '신청은 어디서 하나요?',
      a: '한국장학재단 누리집(kosaf.go.kr)에서 신청합니다. 매년 3~4월경 공고가 나므로 공고를 주의 깊게 확인하세요.',
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
