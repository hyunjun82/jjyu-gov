import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          독거노인과 장애인 가구에 ICT 장비 설치비·통신비·유지관리비까지 모두 무상인 이유는
          <strong>보건복지부가 전액 예산을 지원</strong>하기 때문입니다.
          정부가 취약 1인 가구의 응급 공백을 직접 메우는 공공 안전망이므로 본인 부담이 없습니다.
          신청은 <strong>1566-3232</strong> 또는 <strong>행정복지센터</strong>에서 하면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "ICT 장비를 설치해 주면서 왜 돈을 안 받지?"라고 궁금해하는 분들이 많습니다.
        이 서비스가 완전 무상인 이유와 신청 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="why-free">
        <h2 className="detail-card-head">무상인 이유 — 정부 사업 구조</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>예산 주체:</strong> 보건복지부 + 지방자치단체 공동 부담
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사업 성격:</strong> 취약 1인 가구 응급 공백 해소를 위한 공공 안전망
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>목적:</strong> 독거노인·장애인의 고독사·응급 방치 예방
          </div>
          <div className="info-box">
            <strong>운영:</strong> 중앙모니터링센터(1566-3232) 24시간 365일 전문 운영
          </div>
        </div>
      </section>

      <section className="detail-card" id="cost-breakdown">
        <h2 className="detail-card-head">무상 범위 상세</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>독거노인·장애인</th><th>비독거 어르신</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>장비 설치비</strong></td><td>무상</td><td>자부담</td></tr>
              <tr><td><strong>통신비 (LTE 등)</strong></td><td>무상</td><td>자부담</td></tr>
              <tr><td><strong>유지관리비</strong></td><td>무상</td><td>자부담</td></tr>
              <tr><td><strong>장비 고장 수리</strong></td><td>무상 (1566-3232 신고)</td><td>자부담</td></tr>
              <tr><td><strong>전기료</strong></td><td>본인 부담 (매우 소액)</td><td>본인 부담</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화:</strong> 1566-3232 (중앙모니터링센터, 24시간) — 상담 후 신청 접수
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 거주지 읍·면·동 행정복지센터
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>절차:</strong> 신청 → 현장 실사 → 장비 선정 → 무상 설치 → 모니터링 시작
          </div>
          <div className="info-box">
            <strong>장비 고장:</strong> 1566-3232 신고 → 무상 수리·교체
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 장비 종류, 응급 감지 방식, 다른 복지와 중복 여부까지<br />
            응급안전안심서비스 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/elderly-emergency-safety" className="btn-cta">
            독거노인·장애인 응급안전안심서비스 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 응급안전안심서비스ICT무상설치이유SpokeContent: SpokeData = {
  h1: 'ICT 장비 무상 설치에 사용료까지 없는 이유와 신청 방법',
  breadcrumb: 'ICT무상설치이유',
  description:
    '응급안전안심서비스 완전 무상 이유: 보건복지부+지자체 예산 전액 지원, 취약 독거 가구 응급 공백 해소 공공 안전망. 설치비·통신비·유지관리비·고장 수리 모두 무상. 전기료만 본인 부담.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '왜 ICT 장비 설치비를 받지 않나요?',
      a: '보건복지부와 지방자치단체가 예산을 전액 지원하는 공공 안전망 사업이기 때문입니다. 독거노인·장애인의 고독사와 응급 방치를 막기 위한 목적으로 운영됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '통신비도 무상인가요?',
      a: '네. 독거노인과 장애인 가구는 장비가 사용하는 LTE 등 통신비도 무상입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장비가 고장나면 어떻게 하나요?',
      a: '1566-3232에 신고하면 무상으로 수리·교체해 줍니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '전기료는 많이 나오나요?',
      a: '장비가 사용하는 전력은 매우 소액입니다. 사실상 부담이 없다고 보시면 됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '신청은 어떻게 하나요?',
      a: '1566-3232(중앙모니터링센터, 24시간)에 전화하거나 거주지 행정복지센터를 방문해 신청합니다. 신청 후 현장 실사를 거쳐 무상 설치가 이뤄집니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '중앙모니터링센터 1566-3232', url: 'https://www.silvercare.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
