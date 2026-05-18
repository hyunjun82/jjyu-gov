import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          드림스타트는 0세(임산부)~12세 취약계층 아동에게
          <strong>본인부담 없이 무료</strong>로 사례관리·건강·학습·사회성·부모교육·
          가족 지지·자원 연계 <strong>7대 영역</strong>을 통합 제공합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "드림스타트에서 어떤 서비스를 무료로 받을 수 있나요? 어떤 내용인지 구체적으로 알고 싶어요."
        7대 영역별 서비스 내용을 정리했습니다.
      </p>

      <section className="detail-card" id="services">
        <h2 className="detail-card-head">드림스타트 7대 서비스 영역</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>영역</th><th>서비스 내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>사례관리</strong></td>
                <td>아동별 맞춤 서비스 계획 수립, 1대1 전담 사례관리사 배정</td>
              </tr>
              <tr>
                <td><strong>건강</strong></td>
                <td>영양 관리, 예방접종, 건강검진, 의료 연계</td>
              </tr>
              <tr>
                <td><strong>기초학습</strong></td>
                <td>읽기·쓰기·수학 등 기초 학력 지원</td>
              </tr>
              <tr>
                <td><strong>사회성</strong></td>
                <td>또래 관계·정서 발달 프로그램</td>
              </tr>
              <tr>
                <td><strong>부모교육</strong></td>
                <td>양육 코칭, 부모 역량 강화 교육</td>
              </tr>
              <tr>
                <td><strong>가족 지지</strong></td>
                <td>가족 상담, 경제적 지원 연계</td>
              </tr>
              <tr>
                <td><strong>자원 연계</strong></td>
                <td>지역 사회 복지 자원 연결</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="cost">
        <h2 className="detail-card-head">비용 및 운영</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>본인부담:</strong> 없음 (전액 국가 부담)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>운영 기관:</strong> 전국 229개 시·군·구 드림스타트 사업단
          </div>
          <div className="info-box">
            <strong>사례관리:</strong> 1대1 전담 사례관리사가 아동별 맞춤 계획 수립
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</html>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 시·군·구 드림스타트 사업단 또는 정부24
          </div>
          <div className="info-box">
            <strong>문의:</strong> 보건복지부 또는 거주 지역 드림스타트 사업단
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 일반 가구 이용 조건 등<br />
            드림스타트 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/dream-start" className="btn-cta">
            드림스타트 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 드림스타트무료서비스내용SpokeContent: SpokeData = {
  h1: '기초수급 가정의 0세에서 12세 아이라면 드림스타트에서 받을 수 있는 무료 서비스',
  breadcrumb: '무료서비스내용',
  description:
    '드림스타트 7대 영역: 사례관리·건강·기초학습·사회성·부모교육·가족지지·자원연계. 0~12세 취약계층 아동 무료. 전국 229개 사업단, 1대1 전담 사례관리사.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '드림스타트에서 제공하는 서비스는 모두 무료인가요?',
      a: '네, 드림스타트는 본인부담 없이 전액 국가가 부담합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '드림스타트는 어떤 영역의 서비스를 제공하나요?',
      a: '사례관리, 건강, 기초학습, 사회성, 부모교육, 가족 지지, 자원 연계의 7대 영역을 통합 제공합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '1대1 사례관리사가 배정되나요?',
      a: '네, 아동 1명당 전담 사례관리사가 배정되어 개인 맞춤 서비스 계획을 수립합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '드림스타트는 전국 어디서나 이용할 수 있나요?',
      a: '전국 229개 시·군·구에 드림스타트 사업단이 운영 중입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '임산부도 드림스타트를 이용할 수 있나요?',
      a: '네, 임산부(0세)부터 만 12세 아동까지 대상입니다. 임신 중에도 서비스를 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '아동권리보장원', url: 'https://www.ncrc.or.kr' },
  ],
};
