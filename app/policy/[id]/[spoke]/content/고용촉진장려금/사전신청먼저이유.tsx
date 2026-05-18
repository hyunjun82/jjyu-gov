import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          고용촉진장려금은 취약계층을 <strong>채용하기 전에 사업주가 먼저 신청</strong>해야 합니다.
          채용 후에 신청하면 <strong>인정되지 않는 경우가 많습니다</strong>.
          채용 계획 단계에서 고용24(work24.go.kr)에 사전 신청한 후 채용하고,
          6개월·12개월 차에 사후 청구해야 최대 <strong>1인당 720만원</strong>을 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        많은 사업주가 채용 후 신청하다가 장려금을 받지 못하는 실수를 합니다.
        사전 신청이 왜 필수인지, 어떻게 신청하면 되는지 정리했습니다.
      </p>

      <section className="detail-card" id="why-before">
        <h2 className="detail-card-head">사전 신청이 반드시 필요한 이유</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>제도 구조:</strong> 고용촉진장려금은 채용 전 정부에 계획을 신고하는 방식
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사후 신청 위험:</strong> 채용 후 신청 시 요건 불인정 가능성 높음
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>취약계층 확인:</strong> 정부가 사전에 대상 근로자 자격(장애인·고령자 등)을 확인
          </div>
          <div className="info-box">
            <strong>안전한 방법:</strong> 채용 계획 수립 후 즉시 고용24 사전 신청
          </div>
        </div>
      </section>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>시점</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>1단계</strong></td><td>고용24 사전 신청 (채용 계획 신고)</td><td>채용 전</td></tr>
              <tr><td><strong>2단계</strong></td><td>취약계층 근로자 채용 (주 30시간+ 정규직)</td><td>채용 시</td></tr>
              <tr><td><strong>3단계</strong></td><td>6개월 근속 시 1차 청구 → 360만원</td><td>채용 후 6개월</td></tr>
              <tr><td><strong>4단계</strong></td><td>12개월 근속 시 2차 청구 → 360만원</td><td>채용 후 12개월</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">채용해야 할 취약계층 유형</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장애인:</strong> 등록장애인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>고령자:</strong> 만 55세 이상
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>여성가장:</strong> 한부모 등
          </div>
          <div className="info-box">
            <strong>취업지원 참여자:</strong> 취업성공패키지, 국민취업지원제도 참여자
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 근로 조건, 중도 퇴사 시 처리까지<br />
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

export const 고용촉진장려금사전신청먼저이유SpokeContent: SpokeData = {
  h1: '취약계층 채용 계획 있다면 고용촉진장려금 사전 신청이 먼저인 이유',
  breadcrumb: '사전신청먼저이유',
  description:
    '고용촉진장려금은 채용 전 사전 신청 필수. 채용 후 신청하면 불인정 가능성 높음. 신청 절차: 고용24 사전 신청 → 취약계층 채용(주 30시간+ 정규직) → 6개월차 1차(360만원) → 12개월차 2차(360만원).',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '채용 후에 신청하면 안 되나요?',
      a: '채용 후 신청하면 인정되지 않는 경우가 많습니다. 반드시 채용 계획 단계에서 고용24(work24.go.kr)에 사전 신청해야 합니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '사전 신청은 어디서 하나요?',
      a: '고용24(work24.go.kr) 온라인 신청 또는 관할 고용센터를 방문하면 됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '장려금은 언제 지급되나요?',
      a: '채용 후 6개월 근속 시 1차 360만원, 12개월 근속 시 2차 360만원이 지급됩니다. 총 최대 720만원입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '어떤 취약계층을 채용해야 받을 수 있나요?',
      a: '장애인, 고령자(만 55세 이상), 여성가장, 취업성공패키지 참여자, 국민취업지원제도 참여자 등이 대상입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '어떤 회사가 신청할 수 있나요?',
      a: '우선지원대상기업, 중견기업, 사회적기업이 대상입니다. 대기업은 제외됩니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
  ],
  sources: [
    { name: '고용노동부', url: 'https://www.moel.go.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
    { name: '고용24 고용촉진장려금 안내', url: 'https://www.work24.go.kr' },
  ],
};
