import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          취약계층 채용 장려금(고용촉진장려금)은 채용 전 <strong>사전 신청이 필수</strong>입니다.
          고용24(work24.go.kr)에서 사전 신청 후 채용하고,
          <strong>6개월 차에 1차 360만원</strong>, <strong>12개월 차에 2차 360만원</strong>을 청구합니다.
          채용 후 신청하면 인정되지 않을 수 있으므로 순서를 반드시 지켜야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        고용촉진장려금 신청의 핵심은 순서입니다.
        사전 신청 → 채용 → 사후 청구, 이 순서를 지키지 않으면 장려금을 받을 수 없습니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">신청 절차 단계별 안내</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계 (채용 전):</strong> 고용24(work24.go.kr) 접속 → 고용촉진장려금 사전 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계 (채용):</strong> 취약계층 근로자 채용 (주 30시간 이상 정규직, 4대 보험 가입)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계 (6개월 후):</strong> 고용24 또는 고용센터에서 1차 청구 → 360만원 지급
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>4단계 (12개월 후):</strong> 2차 청구 → 360만원 지급 (총 720만원)
          </div>
          <div className="info-box">
            <strong>주의:</strong> 채용 후 신청 시 불인정 가능성 높음. 반드시 채용 전 사전 신청
          </div>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">필요 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>서류</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>사전 신청 시</strong></td><td>사업자등록증, 채용 계획서</td></tr>
              <tr><td><strong>채용 후</strong></td><td>근로계약서, 4대 보험 가입 확인서</td></tr>
              <tr><td><strong>1·2차 청구 시</strong></td><td>임금 대장, 근로자 취약계층 확인 서류</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="caution">
        <h2 className="detail-card-head">주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사전 신청 필수:</strong> 채용 전에 반드시 신청 완료
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>6개월 미만 퇴사:</strong> 1차 지급 전 퇴사 시 장려금 전혀 없음
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중복 제한:</strong> 동일 근로자에 다른 인건비 장려금과 중복 불가
          </div>
          <div className="info-box">
            <strong>사전 상담:</strong> 고용센터(1350) 상담 후 신청 권장
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 취약계층 유형별 조건, 중복 장려금 비교까지<br />
            고용촉진장려금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/employment-promotion" className="btn-cta">
            고용촉진장려금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 고용촉진장려금사전신청필수절차SpokeContent: SpokeData = {
  h1: '취약계층 채용 장려금 사전 신청이 필수인 이유와 신청 절차',
  breadcrumb: '사전신청필수절차',
  description:
    '고용촉진장려금 신청 절차: 고용24 사전 신청(채용 전) → 취약계층 채용(주 30시간+ 정규직) → 6개월 후 1차 청구(360만원) → 12개월 후 2차 청구(360만원). 채용 후 신청 시 불인정 위험.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '사전 신청을 안 하면 장려금을 못 받나요?',
      a: '네. 채용 후에 신청하면 인정되지 않는 경우가 많습니다. 반드시 채용 계획 단계에서 고용24에 사전 신청해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '사전 신청은 어디서 하나요?',
      a: '고용24(work24.go.kr)에서 온라인으로 신청하거나 관할 고용센터를 방문하면 됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '6개월 근속 전 퇴사하면 어떻게 되나요?',
      a: '6개월 미만 퇴사 시 장려금이 전혀 지급되지 않습니다. 6개월 근속 후 12개월 전 퇴사하면 1차분(360만원)만 지급됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '신청에 필요한 서류는 무엇인가요?',
      a: '사전 신청 시 사업자등록증과 채용 계획서, 채용 후 근로계약서·4대 보험 확인서, 청구 시 임금 대장·취약계층 확인 서류가 필요합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '신청 전에 상담을 받을 수 있나요?',
      a: '고용노동부 콜센터 1350 또는 관할 고용센터에서 사전 상담을 받을 수 있습니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
    { name: '고용노동부 콜센터 1350', url: 'https://www.moel.go.kr' },
  ],
};
