import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          <strong>노인일자리(공익활동·사회서비스형·시장형)</strong>는 보건복지부 사업으로
          사업단에 배정받아 활동합니다.
          <strong>취업알선형(시니어 취업알선)</strong>은 일반 기업에 정규 채용되어
          기업 임금을 받는 방식입니다.
          목적과 수입 구조가 다르므로 본인 상황에 맞게 선택해야 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        노인일자리와 시니어 취업알선은 비슷해 보이지만 지원 기관·신청 방법·수입 구조가 다릅니다.
        어떤 차이가 있는지 확인하고 본인에게 맞는 것을 선택하세요.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">노인일자리 vs 시니어 취업알선 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>노인일자리 (공익·서비스형)</th><th>취업알선형 (시니어 취업)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>주관 기관</strong></td><td>보건복지부</td><td>고용노동부 (워크넷 등)</td></tr>
              <tr><td><strong>수입</strong></td><td>활동비 (월 29만~76만원)</td><td>기업 임금 (최저임금 이상)</td></tr>
              <tr><td><strong>고용 형태</strong></td><td>사업단 참여 (봉사·준 일자리)</td><td>기업 정규·계약직 채용</td></tr>
              <tr><td><strong>신청 연령</strong></td><td>만 60~65세 이상 (유형별)</td><td>만 60세 이상</td></tr>
              <tr><td><strong>신청처</strong></td><td>행정복지센터, 노인복지관</td><td>고용센터, 워크넷</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="which">
        <h2 className="detail-card-head">어디 신청해야 하나</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>노인일자리 신청:</strong> 거주지 행정복지센터, 노인복지관, work24(고용24) 온라인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>시니어 취업알선 신청:</strong> 워크넷(work.go.kr), 고용센터, 여성새로일하기센터(여성 한정)
          </div>
          <div className="info-box">
            <strong>동시 신청:</strong> 두 가지를 동시에 신청해 조건이 맞는 것을 선택할 수 있음
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="recommend">
        <h2 className="detail-card-head">상황별 추천</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기초연금 수급 + 가벼운 활동 원할 때:</strong> 공익활동 (월 29만원)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>체력 있고 수당 더 받고 싶을 때:</strong> 사회서비스형 (월 76만원)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>직장 경험을 살려 정규 취업 원할 때:</strong> 취업알선형
          </div>
          <div className="info-box">
            <strong>베이비붐세대(1955~1963년생):</strong> 2026년 사회서비스형·취업알선형 신규 일자리 3만 7,000개 확대
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            유형별 월 수당 비교, 신청 방법, 기초연금 중복 여부까지<br />
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

export const 노인일자리노인일자리취업알선차이SpokeContent: SpokeData = {
  h1: '노인일자리 vs 시니어 취업알선, 어떻게 다르고 어디 신청해야 하나',
  breadcrumb: '노인일자리취업알선차이',
  description:
    '노인일자리(보건복지부): 사업단 참여, 월 29~76만원 활동비. 시니어 취업알선(고용노동부): 기업 정규 채용, 기업 임금. 신청처도 다름: 노인일자리는 행정복지센터, 취업알선은 워크넷·고용센터.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '노인일자리와 취업알선형은 어떻게 다른가요?',
      a: '노인일자리(공익·서비스형 등)는 사업단에 배정받아 월 29만~76만원 활동비를 받습니다. 취업알선형은 일반 기업에 정규 채용되어 기업 임금을 받는 방식입니다.',
      source: '보건복지부·고용노동부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어디서 신청해야 하나요?',
      a: '노인일자리(공익·사회서비스형 등)는 거주지 행정복지센터나 노인복지관에서 신청합니다. 취업알선형이나 시니어 취업은 워크넷(work.go.kr) 또는 고용센터에서 신청합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기업에 정규 취업하고 싶다면 어디로 가야 하나요?',
      a: '취업알선형 또는 워크넷·고용센터를 이용하세요. 직장 경험과 전문 역량을 살려 기업에 정규·계약직으로 채용되는 방식입니다.',
      source: '고용노동부',
      sourceUrl: 'https://www.moel.go.kr',
    },
    {
      q: '두 가지를 동시에 신청할 수 있나요?',
      a: '네. 노인일자리와 취업알선 두 가지에 동시에 신청해 조건이 맞는 것을 선택할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '베이비붐세대(1955~1963년생)는 어떤 유형이 좋나요?',
      a: '2026년에 베이비붐세대 일자리가 67%(3만 7,000개) 증가했습니다. 직장 경험을 살릴 수 있는 사회서비스형, 시장형, 취업알선형이 추천됩니다.',
      source: '보건복지부 (2026)',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 (2026)', url: 'https://www.mohw.go.kr' },
    { name: '노인일자리 통합 누리집', url: 'https://www.seniorro.or.kr' },
    { name: '워크넷', url: 'https://www.work.go.kr' },
  ],
};
