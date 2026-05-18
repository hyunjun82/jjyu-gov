import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          드림장학금 신청 자격은 <strong>기초·차상위계층 고2~3학년 성적 우수 학생</strong>이며,
          선발 시 <strong>월 50~70만원의 학업장려비</strong>가 지급됩니다.
          멘토링·유학 설명회·맞춤 상담 등 비현금 지원도 함께 제공되므로
          실질적인 해외유학 준비 비용을 크게 줄일 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        드림장학금은 단순 현금 지원이 아니라 유학까지 이어지는 종합 지원 패키지입니다.
        신청 자격과 지원금 내역을 정확히 확인하세요.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격 요약</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대상 학년</strong></td><td>고등학교 2~3학년</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>신청일 기준 기초생활수급자 또는 차상위계층</td></tr>
              <tr><td><strong>학업 기준</strong></td><td>성적 우수 + 학업 의지·열정</td></tr>
              <tr><td><strong>주관</strong></td><td>교육부·한국장학재단</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">학업장려비 및 지원 내역</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학업장려비:</strong> 월 50~70만원 (현금 지급)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>멘토링:</strong> 개인별 1:1 맞춤 멘토 연결 (비현금)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>유학 설명회:</strong> 대사관 협업 유학 정보 제공 (비현금)
          </div>
          <div className="info-box">
            <strong>맞춤 유학 상담:</strong> 진로·유학 경로 개인별 상담 (비현금)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="process">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 한국장학재단 누리집(kosaf.go.kr) 공고 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 온라인 신청서 작성 및 서류 첨부
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 서류 심사 → 면접 → 최종 선발
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 선발 후 학업장려비 지급 + 멘토링 시작
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            드림장학금 해외유학 조건, 소득 기준, 멘토링 안내까지<br />
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

export const 드림장학금신청자격학업장려비SpokeContent: SpokeData = {
  h1: '드림장학금 신청 자격부터 월 학업장려비 금액과 멘토링 지원까지',
  breadcrumb: '신청자격학업장려비',
  description:
    '드림장학금 신청 자격: 기초·차상위 고2~3 성적 우수 학생. 지원: 월 50~70만원 학업장려비 + 1:1 멘토링 + 대사관 협업 유학 설명회 + 맞춤 상담. 한국장학재단 온라인 신청. 매년 3~4월 공고.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '학업장려비는 매달 지급되나요?',
      a: '네. 선발된 장학생에게 매월 학업장려비가 지급됩니다. 금액은 월 50~70만원 수준이며 정확한 금액은 해당 연도 공고를 확인하세요.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '면접도 봐야 하나요?',
      a: '서류 심사 통과 후 면접이 진행될 수 있습니다. 구체적인 전형 단계는 매년 공고에서 확인하세요.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '멘토링은 어떻게 진행되나요?',
      a: '개인별 1:1 멘토가 배정되어 학습 지도 및 유학 준비를 지원합니다. 멘토는 한국장학재단이 연결해 줍니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '지원은 얼마 동안 받을 수 있나요?',
      a: '선발 학년부터 고등학교 졸업까지 지원이 이어집니다. 대학 연계 여부는 해당 연도 공고를 확인하세요.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '신청 기간은 언제인가요?',
      a: '매년 3~4월경 공고가 나고 일정 기간 신청을 받습니다. 한국장학재단 누리집(kosaf.go.kr)에서 공고를 확인하세요.',
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
