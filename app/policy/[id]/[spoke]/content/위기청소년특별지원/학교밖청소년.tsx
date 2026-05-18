import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          학교를 다니지 않는 청소년도 위기청소년 특별지원을 받을 수 있습니다.
          이 제도는 학교 재학 여부와 무관하게 <strong>만 9~24세 위기청소년</strong>이 대상입니다.
          학업지원비도 검정고시·직업훈련 등으로 활용할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "학교를 자퇴하거나 다니지 않는데, 위기청소년 지원을 받을 수 있나요?"
        학교 밖 청소년의 지원 자격과 이용 가능한 분야를 정리했습니다.
      </p>

      <section className="detail-card" id="school-out">
        <h2 className="detail-card-head">학교 밖 청소년 해당 여부</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            위기청소년 특별지원의 대상 조건은 <strong>학교 재학 여부가 아닙니다.</strong>
            만 9~24세이고 위기 상황에 있으며 중위소득 100% 이하 가구라면 신청할 수 있습니다.
          </div>
          <div className="info-box">
            학교 밖 청소년이 자퇴·퇴학·미진학 상태이더라도 가정 해체, 생활 어려움,
            보호자 부재 등의 위기 상황에 해당하면 지원 대상이 됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="support-options">
        <h2 className="detail-card-head">학교 밖 청소년이 활용할 수 있는 지원 분야</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>분야</th><th>학교 밖 청소년 활용 방법</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>생활지원</strong></td>
                <td>월 최대 65만원 생활비</td>
              </tr>
              <tr>
                <td><strong>학업지원</strong></td>
                <td>검정고시 준비비, 직업훈련비 등 (연 154만원)</td>
              </tr>
              <tr>
                <td><strong>의료지원</strong></td>
                <td>치료비 지원 (연 200만원)</td>
              </tr>
              <tr>
                <td><strong>자활지원</strong></td>
                <td>취업·창업 관련 서비스 연계</td>
              </tr>
              <tr>
                <td><strong>상담지원</strong></td>
                <td>심리·진로 상담 서비스</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="vs-school-out-policy">
        <h2 className="detail-card-head">학교 밖 청소년 지원과의 차이</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>위기청소년 특별지원:</strong> 위기 상황 청소년 대상, 현금+서비스 지원,
            소득 기준 있음 (중위소득 100% 이하)
          </div>
          <div className="info-box">
            <strong>학교 밖 청소년 지원(꿈드림):</strong> 학교를 다니지 않는 청소년이라면 소득 기준 없이
            검정고시·직업훈련·건강검진 등 서비스 중심으로 지원. 두 제도 중복 이용도 가능합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 보호자 없는 청소년 신청 방법 등<br />
            위기청소년 특별지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/crisis-youth-support" className="btn-cta">
            위기청소년 특별지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 위기청소년학교밖청소년SpokeContent: SpokeData = {
  h1: '학교를 다니지 않는 청소년도 위기청소년 특별지원 대상에 해당하는지',
  breadcrumb: '학교밖청소년',
  description:
    '위기청소년 특별지원은 재학 여부 무관. 만 9~24세 중위소득 100% 이하 위기청소년이면 신청 가능. 학업지원비 검정고시·직업훈련에도 사용. 학교밖청소년 꿈드림과 중복 이용 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '자퇴한 청소년도 위기청소년 특별지원을 받을 수 있나요?',
      a: '네, 학교 재학 여부와 무관합니다. 만 9~24세이고 위기 상황에 있으며 중위소득 100% 이하 가구라면 신청할 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '학업지원비는 학교를 다니지 않아도 받을 수 있나요?',
      a: '네, 학업지원비(연 154만원)는 검정고시 준비비, 직업훈련비 등에도 활용할 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '학교 밖 청소년 꿈드림 지원과 중복해서 받을 수 있나요?',
      a: '두 제도를 동시에 이용하는 것이 가능합니다. 꿈드림은 소득 기준이 없어 학교 밖 청소년이라면 먼저 꿈드림도 확인해보세요.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '신청은 어떻게 하나요?',
      a: '☎ 1388에 전화하거나 거주지 청소년상담복지센터를 방문해 신청할 수 있습니다.',
      source: '청소년 전화 1388',
      sourceUrl: 'https://www.cyber1388.kr',
    },
    {
      q: '위기 상황의 기준이 뭔가요?',
      a: '가정 해체, 학대, 가출, 비행·일탈 예방 필요, 은둔형 외톨이, 보호자 실질적 보호 불가 등 사회경제적 어려움을 겪는 청소년이 해당됩니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부', url: 'https://www.mogef.go.kr' },
    { name: '청소년 전화 1388', url: 'https://www.cyber1388.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
