import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          꿈사다리 장학금은 초·중·고 재학 중 선발된 학생이
          <strong>대학 입학 후에도 연계 지원을 받을 수 있는 구조</strong>입니다.
          대학생이 된 후에는 국가장학금 연계 및 멘토링이 이어집니다.
          단, 대학생이 <strong>새로 신청하는 제도는 아니며</strong>,
          재학 중 선발된 학생에게만 연계됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        많은 분이 대학생이 된 후에도 꿈사다리 장학금을 새로 신청할 수 있는지 궁금해합니다.
        초·중·고 재학 중 선발된 경우와 대학생이 새로 지원하는 경우를 비교합니다.
      </p>

      <section className="detail-card" id="comparison">
        <h2 className="detail-card-head">재학생 선발 vs 대학생 신규 신청</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>초·중·고 재학 중 선발</strong></td><td>대학까지 자동 연계 지원 가능</td></tr>
              <tr><td><strong>대학생 신규 신청</strong></td><td>꿈사다리 장학금은 대학생 신규 신청 불가</td></tr>
              <tr><td><strong>대학생 대상 장학금</strong></td><td>한국장학재단 국가장학금(별도 제도) 이용</td></tr>
              <tr><td><strong>대학 연계 내용</strong></td><td>국가장학금 연계 + 멘토링 지속</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="univ-support">
        <h2 className="detail-card-head">대학 연계 지원 내용</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>국가장학금 연계:</strong> 대학 입학 후 국가장학금으로 자동 전환 지원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>멘토링 지속:</strong> 대학 생활·진로 설계 멘토링 이어짐
          </div>
          <div className="info-box">
            <strong>조건:</strong> 대학 입학 후에도 학업 유지·인성 기준 충족 필요
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="alternative">
        <h2 className="detail-card-head">대학생이 이용할 수 있는 유사 장학금</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>국가장학금 I·II 유형:</strong> 저소득 대학생 등록금 지원 (한국장학재단)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>드림장학금:</strong> 저소득 고교생 해외유학 지원 (고2~3 대상)
          </div>
          <div className="info-box">
            <strong>학교 자체 장학금:</strong> 각 대학별 저소득 우수 학생 장학금 별도 운영
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            꿈사다리 장학금 선발 기준, 신청 자격, 멘토링 안내까지<br />
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

export const 꿈사다리장학사업대학생연계여부확인SpokeContent: SpokeData = {
  h1: '꿈사다리 장학금 대학생도 받을 수 있나, 초·중·고 선발부터 대학 연계까지',
  breadcrumb: '대학생연계여부확인',
  description:
    '꿈사다리 장학금은 초·중·고 재학 중 선발된 학생만 대학까지 연계 지원. 대학생 신규 신청 불가. 대학 연계 내용: 국가장학금 전환 + 멘토링 지속. 대학생은 한국장학재단 국가장학금 별도 신청 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '대학생이 된 후에 꿈사다리 장학금을 새로 신청할 수 있나요?',
      a: '아니요. 꿈사다리 장학금은 초·중·고 재학 중 선발된 학생이 대학까지 연계받는 구조입니다. 대학생이 새로 신청하는 제도가 아닙니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '고등학교 때 선발되면 대학에서도 계속 지원을 받나요?',
      a: '네. 고교 재학 중 선발된 학생은 대학 입학 후 국가장학금 연계 및 멘토링 지속 지원을 받을 수 있습니다. 학업·인성 기준을 유지해야 합니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '대학생에게 지원하는 유사한 장학금은 무엇이 있나요?',
      a: '한국장학재단 국가장학금 I·II 유형이 대표적입니다. 저소득 가구 대학생을 대상으로 등록금을 지원합니다. 각 대학 자체 장학금도 함께 확인하세요.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '꿈사다리 장학금과 드림장학금은 다른 제도인가요?',
      a: '네. 꿈사다리 장학금은 초·중·고생 대상 국내 연계 장학금이고, 드림장학금(우수고등학생 해외유학 장학금)은 고2~3학년을 대상으로 해외유학을 지원하는 별도 제도입니다.',
      source: '교육부·한국장학재단',
      sourceUrl: 'https://www.kosaf.go.kr',
    },
    {
      q: '대학 연계 지원을 받으려면 어떤 조건을 유지해야 하나요?',
      a: '대학 입학 후에도 일정 수준의 학업 성취와 인성 기준을 유지해야 합니다. 구체적인 기준은 한국장학재단 공고를 확인하세요.',
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
