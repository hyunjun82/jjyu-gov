import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          다함께돌봄센터 기본 이용료는 <strong>아동 1인당 월 10만원 이내</strong>입니다.
          학기 중 오후 2~8시, 방학 중 오전 9시~오후 6시에 운영하며,
          만 6~12세 초등학생이라면 소득과 무관하게 신청할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "다함께돌봄센터는 어떻게 신청하고, 이용료는 얼마인가요?"
        신청 방법부터 이용료, 운영 시간까지 정리했습니다.
      </p>

      <section className="detail-card" id="fee">
        <h2 className="detail-card-head">이용료 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>금액</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>기본 이용료</strong></td>
                <td><strong>월 10만원 이내</strong></td>
                <td>센터별 차등 적용</td>
              </tr>
              <tr>
                <td><strong>특별활동비</strong></td>
                <td>별도 수익자 부담</td>
                <td>악기·체육·외국어 등</td>
              </tr>
              <tr>
                <td><strong>급간식비</strong></td>
                <td>별도 부담</td>
                <td>제공 시</td>
              </tr>
              <tr>
                <td><strong>기초·차상위</strong></td>
                <td>지자체별 감면·면제</td>
                <td>지자체 문의</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="hours">
        <h2 className="detail-card-head">운영 시간</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>학기 중 (평일):</strong> 오후 2시 ~ 오후 8시 (6시간)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방학 중 (평일):</strong> 오전 9시 ~ 오후 6시 (9시간)
          </div>
          <div className="info-box">
            <strong>야간 연장 (일부):</strong> ~ 오후 10시 (KB금융 협력 센터)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 다함께돌봄사업 누리집(dadol.or.kr) 또는 정부24(gov.kr)에서 거주지 센터 검색 후 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 거주지 다함께돌봄센터 직접 방문 신청
          </div>
          <div className="info-box">
            <strong>필요 서류:</strong> 신청서, 아동 신분증, 우선순위 증빙(맞벌이·한부모 등)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            방학 운영, 아이돌봄서비스 비교, 대기 대안 등<br />
            다함께돌봄센터 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/community-care-center" className="btn-cta">
            다함께돌봄센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 다함께돌봄신청이용료SpokeContent: SpokeData = {
  h1: '다함께돌봄센터 신청 방법부터 이용료 월 10만원 이내 운영 시간까지',
  breadcrumb: '신청이용료',
  description:
    '다함께돌봄센터: 기본 이용료 월 10만원 이내, 학기 14~20시, 방학 9~18시. 만 6~12세 초등학생, 소득 무관. dadol.or.kr 또는 정부24 신청. 기초·차상위 감면 가능.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '다함께돌봄센터 이용료는 얼마인가요?',
      a: '기본 이용료는 아동 1인당 월 10만원 이내입니다. 특별활동비와 급간식비는 별도입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어떻게 신청하나요?',
      a: '다함께돌봄사업 누리집(dadol.or.kr) 또는 정부24(gov.kr)에서 거주지 센터를 검색해 신청하거나, 센터를 직접 방문해 신청합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '소득 기준이 있나요?',
      a: '없습니다. 만 6~12세 초등학생이라면 소득과 무관하게 신청할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초생활수급자는 이용료가 줄어드나요?',
      a: '기초생활수급자·차상위계층 가구 아동은 지자체별로 이용료 감면·면제 혜택을 받을 수 있습니다. 거주지 센터 또는 주민센터에 문의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '운영 시간은 어떻게 되나요?',
      a: '학기 중 평일 오후 2시~8시(6시간), 방학 중 오전 9시~오후 6시(9시간)입니다. 일부 센터는 야간 연장(~10시)도 운영합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '다함께돌봄 누리집', url: 'https://dadol.or.kr' },
  ],
};
