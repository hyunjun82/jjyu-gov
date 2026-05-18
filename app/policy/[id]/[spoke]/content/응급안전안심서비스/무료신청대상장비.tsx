import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>만 65세 이상 독거 어르신</strong>과 <strong>장애인 가구</strong>는
          화재 감지기·활동 감지 센서·응급호출 버튼 등 ICT 장비를 <strong>무상으로 설치</strong>받습니다.
          2024년부터 독거노인 소득 기준이 폐지되어 소득 수준과 관계없이 신청 가능합니다.
          신청은 거주지 <strong>행정복지센터</strong> 또는 <strong>1566-3232</strong>로 하면 됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        응급안전안심서비스의 무료 신청 대상과 설치되는 ICT 장비 종류를 정리했습니다.
        혼자 사는 부모님이 계신다면 지금 바로 신청 자격을 확인해 보세요.
      </p>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">무료 신청 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>대상</th><th>조건</th><th>비용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>독거노인</strong></td>
                <td>만 65세 이상 실제 혼자 거주 (소득기준 폐지)</td>
                <td>무상</td>
              </tr>
              <tr>
                <td><strong>장애인</strong></td>
                <td>거주 여건을 고려한 장애인 가구</td>
                <td>무상</td>
              </tr>
              <tr>
                <td><strong>비독거 어르신</strong></td>
                <td>가족 동거 중이지만 낮 시간 혼자 있는 경우 (2024 확대)</td>
                <td>자부담</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="equipment">
        <h2 className="detail-card-head">설치되는 ICT 장비 종류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>화재 감지기:</strong> 연기·열 감지 시 즉시 중앙모니터링센터 + 119 자동 신고
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>활동 감지 센서:</strong> 일정 시간 이상 활동 무감지 시 (낙상·실신 의심) 자동 알림
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>응급호출 버튼:</strong> 본인 직접 누르면 즉시 119 + 보호자 연락
          </div>
          <div className="info-box">
            <strong>게이트웨이:</strong> 중앙모니터링센터에 실시간 자동 전송 (1566-3232, 24시간)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화:</strong> 1566-3232 (중앙모니터링센터) 상담 후 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 거주지 읍·면·동 행정복지센터
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>절차:</strong> 신청 → 현장 실사 → 무상 설치 → 24시간 모니터링 개시
          </div>
          <div className="info-box">
            <strong>비용:</strong> 독거노인·장애인은 설치비·통신비·유지관리비 모두 무상
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            응급 상황 자동 감지 방식, 비독거 자부담 비용, 다른 복지와 중복 여부까지<br />
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

export const 응급안전안심서비스무료신청대상장비SpokeContent: SpokeData = {
  h1: '독거노인 응급안전안심서비스 무료 신청 대상과 설치 장비 종류',
  breadcrumb: '무료신청대상장비',
  description:
    '응급안전안심서비스 무료 대상: 만 65세 이상 독거노인(소득기준 폐지), 장애인 가구. 설치 장비: 화재 감지기, 활동 감지 센서, 응급호출 버튼, 게이트웨이. 1566-3232 또는 행정복지센터에서 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '독거노인 응급안전안심서비스는 누가 받을 수 있나요?',
      a: '만 65세 이상 실제 독거 어르신과 장애인 가구가 무상으로 받을 수 있습니다. 2024년부터 독거노인 소득 기준이 폐지되어 소득과 관계없이 신청 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어떤 장비가 설치되나요?',
      a: '화재 감지기, 활동 감지 센서, 응급호출 버튼, 게이트웨이가 설치됩니다. 응급 상황 시 중앙모니터링센터와 119에 자동으로 신고됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장비 설치비가 드나요?',
      a: '독거노인과 장애인은 설치비·통신비·유지관리비 모두 무상입니다. 비독거 어르신은 자부담 방식으로 이용할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '신청은 어디서 하나요?',
      a: '거주지 읍·면·동 행정복지센터 방문 또는 1566-3232(중앙모니터링센터)로 전화 상담 후 신청합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '주민등록상 가족이 있어도 신청할 수 있나요?',
      a: '실제로 혼자 거주하면 주민등록상 동거 가족이 있어도 신청 가능합니다. 현장 실사로 거주 여건을 확인합니다.',
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
