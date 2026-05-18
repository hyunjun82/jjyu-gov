import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          드림스타트는 기초수급자·차상위계층이 기본 대상이지만,
          <strong>학대·방임·한부모·조손 등 위기 가구</strong>라면
          소득 기준을 충족하지 않아도 사례관리사 판단에 따라 포함될 수 있습니다.
          순수 일반 가구(소득 기준 초과)는 원칙적으로 <strong>대상 외</strong>입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "우리 집은 기초수급자도 차상위도 아닌데, 드림스타트를 받을 수 있나요?"
        일반 가구의 신청 가능 여부를 정리했습니다.
      </p>

      <section className="detail-card" id="eligibility-detail">
        <h2 className="detail-card-head">가구 유형별 신청 가능 여부</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>가구 유형</th><th>신청 가능 여부</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>기초수급자 가구</strong></td>
                <td>가능 (원칙적 대상)</td>
              </tr>
              <tr>
                <td><strong>차상위계층 가구</strong></td>
                <td>가능 (원칙적 대상)</td>
              </tr>
              <tr>
                <td><strong>학대·방임 피해 아동 가구</strong></td>
                <td>소득 무관 가능 (사례관리사 판단)</td>
              </tr>
              <tr>
                <td><strong>한부모·조손 가구</strong></td>
                <td>소득 무관 가능 (위기 가구 해당 시)</td>
              </tr>
              <tr>
                <td><strong>일반 가구 (소득 기준 초과)</strong></td>
                <td>원칙적으로 대상 외</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="crisis-household">
        <h2 className="detail-card-head">위기 가구 해당 여부 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            소득 기준이 초과되더라도 아동이 학대·방임·가정폭력·보호자 부재 등 위기 상황에 있다면
            거주지 드림스타트 사업단에 문의해 사례관리사 판단을 받을 수 있습니다.
          </div>
          <div className="info-box">
            <strong>문의처:</strong> 시·군·구 드림스타트 사업단 또는 보건복지부 상담
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="alternatives">
        <h2 className="detail-card-head">일반 가구가 이용할 수 있는 유사 서비스</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지역아동센터:</strong> 소득 기준 완화, 일반 가구 아동도 일부 이용 가능 (지역별 상이)
          </div>
          <div className="info-box">
            <strong>방과후학교·돌봄교실:</strong> 소득 무관 이용 가능한 학교 기반 돌봄 서비스
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            드림스타트 7대 서비스, 신청 자격 등<br />
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

export const 드림스타트일반가구신청SpokeContent: SpokeData = {
  h1: '취약계층 아동 드림스타트, 일반 가구 아이도 신청할 수 있는 경우와 없는 경우',
  breadcrumb: '일반가구신청',
  description:
    '드림스타트 원칙적 대상: 기초수급·차상위. 학대·방임·한부모·조손 등 위기 가구는 소득 무관 포함 가능. 일반 가구는 원칙적 대상 외. 대안: 지역아동센터·방과후학교.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '일반 가구도 드림스타트를 이용할 수 있나요?',
      a: '기초수급자·차상위계층이 아닌 일반 가구는 원칙적으로 대상이 아닙니다. 다만 학대·방임·한부모·조손 등 위기 가구는 사례관리사 판단에 따라 포함될 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '한부모 가구인데 소득이 기준을 초과해도 신청할 수 있나요?',
      a: '위기 가구 여부는 드림스타트 사례관리사가 판단합니다. 일단 거주지 드림스타트 사업단에 문의해 보세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '소득 기준은 초과하지만 아이가 방임 상태라면 신청할 수 있나요?',
      a: '학대·방임은 위기 상황으로 인정되어 사례관리사 판단에 따라 소득 무관 포함될 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '드림스타트를 못 받는 일반 가구 아이가 이용할 수 있는 서비스가 있나요?',
      a: '지역아동센터, 방과후학교, 돌봄교실 등이 소득 무관 또는 완화된 기준으로 이용 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '드림스타트 신청 문의는 어디서 하나요?',
      a: '거주 지역 시·군·구 드림스타트 사업단 또는 정부24에서 문의할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '아동권리보장원', url: 'https://www.ncrc.or.kr' },
  ],
};
