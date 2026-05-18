import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          공익활동은 <strong>만 65세 이상 기초연금 수급자</strong> 중심으로
          월 30시간 활동에 <strong>월 29만원</strong>을 받습니다.
          사회서비스형은 <strong>만 60세 이상</strong>(일부 65세)이면 신청 가능하며
          월 60시간 근무에 <strong>월 76만원</strong>으로 수당이 더 높지만 근무 강도도 높습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        노인일자리에서 가장 많이 묻는 질문이 "공익활동과 사회서비스형 중 어느 것을 선택할까?"입니다.
        수당·근무 시간·자격을 한눈에 비교해 드립니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">공익활동 vs 사회서비스형 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>공익활동</th><th>사회서비스형</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>월 수당</strong></td><td>29만원</td><td>76만원</td></tr>
              <tr><td><strong>월 활동 시간</strong></td><td>30시간</td><td>60시간</td></tr>
              <tr><td><strong>신청 연령</strong></td><td>만 65세 이상</td><td>만 60~65세 이상 (사업별)</td></tr>
              <tr><td><strong>소득 조건</strong></td><td>기초연금 수급자 중심</td><td>상대적으로 덜 엄격</td></tr>
              <tr><td><strong>활동 성격</strong></td><td>봉사 (노노케어, 안전 지킴이)</td><td>준 일자리 (어린이집, 시설 보조)</td></tr>
              <tr><td><strong>강도</strong></td><td>낮음</td><td>보통</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="which-one">
        <h2 className="detail-card-head">어떤 유형이 나에게 맞을까?</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>공익활동 추천:</strong> 65세 이상 + 기초연금 수급 + 가벼운 활동 원할 때 + 월 29만원으로 충분할 때
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사회서비스형 추천:</strong> 60세 이상 + 월 수당을 더 받고 싶을 때 + 어린이집·복지시설 경험 있을 때
          </div>
          <div className="info-box">
            <strong>공통:</strong> 단체 상해보험 자동 가입, 기초연금과 중복 수령 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 거주지 행정복지센터, 노인복지관
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> work24(고용24) 또는 노인일자리 통합 누리집
          </div>
          <div className="info-box">
            <strong>서류:</strong> 신분증 + 공익활동 신청 시 기초연금 수급증명서
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            시장형·취업알선형 비교, 베이비붐세대 우대, 활동 중 보상까지<br />
            노인일자리 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/elderly-job" className="btn-cta">
            노인 일자리 및 사회활동 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 노인일자리공익활동사회서비스비교SpokeContent: SpokeData = {
  h1: '노인일자리 공익활동 월 29만원, 사회서비스형 월 76만원 누가 받나',
  breadcrumb: '공익활동사회서비스비교',
  description:
    '공익활동: 만 65세 이상 기초연금 수급자, 월 30시간, 월 29만원. 사회서비스형: 만 60세 이상, 월 60시간, 월 76만원. 수당이 높은 사회서비스형은 근무 강도도 높음. 둘 다 기초연금과 중복 가능.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '공익활동과 사회서비스형 중 어느 것이 수당이 더 높나요?',
      a: '사회서비스형이 월 76만원으로 더 높습니다. 공익활동은 월 29만원입니다. 단, 사회서비스형은 월 60시간 근무로 활동 시간도 두 배입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '공익활동은 누가 신청할 수 있나요?',
      a: '만 65세 이상 어르신 중 기초연금 수급자 또는 차상위계층 중심으로 운영됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '사회서비스형은 어떤 일을 하나요?',
      a: '어린이집 보조, 장애인 시설 보조, 취약계층 서비스 분야에서 일하는 준 일자리 형태입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초연금을 받으면서 공익활동 수당도 받을 수 있나요?',
      a: '네. 기초연금과 공익활동 수당은 중복 수령이 가능합니다. 공익활동 수당은 기초연금 소득 산정에 큰 영향을 주지 않습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어떤 유형을 선택하는 것이 좋나요?',
      a: '체력이 좋고 수당을 더 받고 싶다면 사회서비스형, 가벼운 봉사 활동을 원한다면 공익활동이 적합합니다. 거주지 행정복지센터에서 상담을 받아보는 것을 권장합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 (2026)', url: 'https://www.mohw.go.kr' },
    { name: '노인일자리 통합 누리집', url: 'https://www.seniorro.or.kr' },
    { name: '고용24', url: 'https://www.work24.go.kr' },
  ],
};
