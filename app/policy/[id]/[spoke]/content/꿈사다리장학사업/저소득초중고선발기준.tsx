import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          복권기금 꿈사다리 장학사업은 저소득층 가정의 초·중·고 학생을
          <strong>연간 3,000명</strong> 선발하여 <strong>대학까지 연계 지원</strong>하는
          국가 장학사업입니다. 2025년부터 <strong>초등학교 5학년</strong>부터 선발 대상을 확대했으며,
          학업장려비·멘토링·진로 상담을 종합 지원합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        복권기금을 재원으로 하는 꿈사다리 장학사업은 성적이 우수한 저소득층 학생을 조기에 발굴해
        대학 졸업 시까지 지속 지원하는 것이 목표입니다. 선발 기준과 신청 방법을 확인하세요.
      </p>

      <section className="detail-card" id="criteria">
        <h2 className="detail-card-head">선발 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대상 학년</strong></td><td>초등 5학년 ~ 고등 3학년</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>기초생활수급자 또는 차상위계층 가정</td></tr>
              <tr><td><strong>선발 인원</strong></td><td>연간 3,000명</td></tr>
              <tr><td><strong>선발 기준</strong></td><td>성장 가능성, 인성, 지원 필요성 종합 평가</td></tr>
              <tr><td><strong>주관</strong></td><td>교육부·한국장학재단·복권위원회</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="support">
        <h2 className="detail-card-head">지원 내용</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학업장려비:</strong> 학년별 학용품비·교육활동비 지원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>멘토링:</strong> 개인별 학습 멘토 1:1 연결
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>진로 지원:</strong> 진로 상담·역량 개발 컨설팅
          </div>
          <div className="info-box">
            <strong>대학 연계:</strong> 선발 후 대학 입학까지 지속 지원
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 복지로(bokjiro.go.kr) 또는 한국장학재단 누리집
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청 시기:</strong> 연간 공고 확인 후 접수 기간 내 신청
          </div>
          <div className="info-box">
            <strong>추천 방식:</strong> 학교장·교사 추천 또는 본인 신청 (공고별 상이)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            꿈사다리 장학사업 전체 지원 내용, 대학 연계 방법, 멘토링 프로그램까지<br />
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

export const 꿈사다리장학사업저소득초중고선발기준SpokeContent: SpokeData = {
  h1: '꿈사다리 장학금, 저소득층 초중고생 3,000명 선발 기준과 신청 방법',
  breadcrumb: '저소득초중고선발기준',
  description:
    '복권기금 꿈사다리 장학사업: 저소득층(기초·차상위) 초5~고3 연간 3,000명 선발. 성장 가능성·인성·필요성 종합 평가. 학업장려비·멘토링·진로 상담·대학 연계 지원. 복지로 또는 한국장학재단 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '꿈사다리 장학금은 누가 신청할 수 있나요?',
      a: '기초생활수급자 또는 차상위계층 가정의 초등학교 5학년~고등학교 3학년 학생이 대상입니다. 2025년부터 초등 5학년까지 선발 대상이 확대됐습니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '매년 몇 명이나 선발되나요?',
      a: '연간 약 3,000명이 선발됩니다. 성장 가능성, 인성, 지원 필요성 등을 종합적으로 평가하여 선정합니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '어떤 지원을 받을 수 있나요?',
      a: '학업장려비(학용품비·교육활동비), 개인별 1:1 멘토링, 진로 역량 개발 컨설팅, 대학까지 연계 지원이 제공됩니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '신청은 어디서 하나요?',
      a: '복지로(bokjiro.go.kr) 또는 한국장학재단 누리집에서 신청할 수 있습니다. 공고 기간 내 접수해야 하므로 매년 공고를 확인하세요.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '초등학교 5학년 이하는 신청할 수 없나요?',
      a: '2025년부터 초등 5학년부터 선발 대상이 됐습니다. 초등 4학년 이하는 현재 대상에 포함되지 않습니다. 자세한 학년 기준은 해당 연도 공고를 확인하세요.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
  ],
  sources: [
    { name: '교육부', url: 'https://www.moe.go.kr' },
    { name: '한국장학재단', url: 'https://www.kosaf.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
