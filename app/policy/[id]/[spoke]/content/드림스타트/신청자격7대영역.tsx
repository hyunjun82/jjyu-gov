import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          드림스타트 신청 자격은 <strong>0세(임산부)~12세 취약계층 아동</strong>으로,
          기초수급자·차상위계층 또는 사례관리사가 필요하다고 판단한 위기 가구도 포함됩니다.
          7대 영역의 통합 서비스가 <strong>본인부담 없이 무료</strong>로 제공됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "드림스타트 신청 자격이 어떻게 되나요? 어떤 서비스를 받을 수 있는지도 알고 싶어요."
        신청 자격과 7대 서비스 영역을 함께 정리했습니다.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조건</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>연령</strong></td>
                <td>0세(임산부) ~ 만 12세 (초등학교 재학 중 포함)</td>
              </tr>
              <tr>
                <td><strong>소득</strong></td>
                <td>기초수급자, 차상위계층</td>
              </tr>
              <tr>
                <td><strong>특례</strong></td>
                <td>학대·방임·한부모·조손 등 위기 가구는 소득 무관 포함 가능</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="services">
        <h2 className="detail-card-head">7대 서비스 영역 요약</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사례관리:</strong> 1대1 전담 사례관리사, 아동별 맞춤 계획
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강:</strong> 영양·예방접종·건강검진
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기초학습:</strong> 읽기·쓰기·수학
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사회성:</strong> 또래 관계·정서 발달
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>부모교육:</strong> 양육 코칭
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>가족 지지:</strong> 상담·경제 지원 연계
          </div>
          <div className="info-box">
            <strong>자원 연계:</strong> 지역 복지 자원 연결
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 시·군·구 드림스타트 사업단 또는 정부24
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>운영:</strong> 전국 229개 시·군·구 드림스타트 사업단
          </div>
          <div className="info-box">
            <strong>비용:</strong> 본인부담 없음 (전액 국가 부담)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            일반 가구 신청 조건, 지역아동센터와의 차이 등<br />
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

export const 드림스타트신청자격7대영역SpokeContent: SpokeData = {
  h1: '드림스타트 아동통합서비스 신청 자격과 건강 학습 사회성 7대 영역 지원 내용',
  breadcrumb: '신청자격7대영역',
  description:
    '드림스타트 자격: 0세(임산부)~12세 취약계층(수급·차상위·위기 가구). 7대 영역: 사례관리·건강·학습·사회성·부모교육·가족지지·자원연계. 전국 229개 사업단. 무료.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '드림스타트 신청 자격이 어떻게 되나요?',
      a: '0세(임산부)~만 12세 아동(초등 재학 포함) 중 기초수급자·차상위계층 가구가 기본 대상입니다. 학대·방임·한부모·조손 등 위기 가구는 소득과 무관하게 포함될 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '드림스타트는 몇 가지 영역의 서비스를 제공하나요?',
      a: '사례관리, 건강, 기초학습, 사회성, 부모교육, 가족 지지, 자원 연계의 7대 영역을 통합 제공합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '만 12세 초과한 아동도 신청할 수 있나요?',
      a: '만 12세 초과 아동은 대상이 아니지만, 초등학교에 재학 중이라면 포함될 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '드림스타트는 어디에 있나요?',
      a: '전국 229개 시·군·구에 드림스타트 사업단이 운영 중입니다. 거주 지역 시·군·구청에 문의하면 연락처를 안내받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '드림스타트 서비스는 모두 무료인가요?',
      a: '네, 모든 서비스가 본인부담 없이 무료로 제공됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '아동권리보장원', url: 'https://www.ncrc.or.kr' },
  ],
};
