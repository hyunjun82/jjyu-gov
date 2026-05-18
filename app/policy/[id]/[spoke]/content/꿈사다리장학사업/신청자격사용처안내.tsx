import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          꿈사다리 장학금 신청 자격은 <strong>기초생활수급자 또는 차상위계층 가정</strong>의
          초등 5학년~고3 학생입니다.
          지원금은 <strong>학용품비·교육활동비</strong>로 사용하며,
          멘토링·진로 컨설팅 등 비현금 프로그램도 함께 제공됩니다.
          복지로(bokjiro.go.kr) 또는 한국장학재단 누리집에서 신청합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        장학금 신청 전 자격 요건을 먼저 확인하고, 공고 기간 내에 신청해야 합니다.
        지원 금액은 학년·학교급별로 차이가 있으니 공고문에서 확인하세요.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>학교급</strong></td><td>초등 5학년 ~ 고등 3학년</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>기초생활수급자 또는 차상위계층</td></tr>
              <tr><td><strong>학업 기준</strong></td><td>성장 가능성·잠재력 평가 (성적 단독 기준 X)</td></tr>
              <tr><td><strong>국적</strong></td><td>대한민국 국적 학생</td></tr>
              <tr><td><strong>중복 제한</strong></td><td>유사 정부 장학금 중복 여부 사전 확인 필요</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="usage">
        <h2 className="detail-card-head">지원금 사용처</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학용품비:</strong> 교과서·학습 교재·문구류 구입
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>교육활동비:</strong> 학원비·특기 활동비·체험학습비 등
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>멘토링:</strong> 개인별 학습 멘토 1:1 (비현금 지원)
          </div>
          <div className="info-box">
            <strong>진로 컨설팅:</strong> 진로 역량 개발 상담 (비현금 지원)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="how-to-apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인 신청:</strong> 복지로(bokjiro.go.kr) 또는 한국장학재단 홈페이지
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>서류 준비:</strong> 가족관계증명서, 수급자(차상위) 증명서, 재학증명서
          </div>
          <div className="info-box">
            <strong>신청 기간:</strong> 연 1회 공고 (매년 상반기 공고 확인 필수)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            꿈사다리 장학금 선발 인원, 대학 연계 조건, 멘토링 안내까지<br />
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

export const 꿈사다리장학사업신청자격사용처안내SpokeContent: SpokeData = {
  h1: '복권기금 꿈사다리 장학금 신청 자격부터 학업장려비 사용처까지',
  breadcrumb: '신청자격사용처안내',
  description:
    '꿈사다리 장학금 신청 자격: 기초생활수급자·차상위계층 초5~고3. 지원금 사용처: 학용품비·교육활동비·멘토링·진로 컨설팅. 복지로·한국장학재단 온라인 신청. 매년 상반기 공고 확인 필요.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '성적이 안 좋으면 신청할 수 없나요?',
      a: '성적 단독 기준이 아니라 성장 가능성·잠재력·인성을 종합적으로 평가합니다. 성적이 최상위가 아니어도 지원 필요성이 인정되면 선발될 수 있습니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '지원금을 학원비로 사용해도 되나요?',
      a: '교육활동비 범위에서 학원비 등 학습 관련 비용에 사용할 수 있습니다. 구체적인 사용처 기준은 매년 공고문을 확인하세요.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '신청에 필요한 서류는 무엇인가요?',
      a: '일반적으로 가족관계증명서, 기초수급자·차상위계층 증명서, 재학증명서가 필요합니다. 공고별로 추가 서류가 다를 수 있으니 공고문을 확인하세요.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '차상위계층도 신청 가능한가요?',
      a: '네. 기초생활수급자뿐 아니라 차상위계층 가정 학생도 신청 가능합니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '다른 장학금을 받고 있으면 신청할 수 없나요?',
      a: '다른 정부 장학금을 받고 있다면 중복 수령 가능 여부를 사전에 확인해야 합니다. 한국장학재단 또는 복지로에 문의하세요.',
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
