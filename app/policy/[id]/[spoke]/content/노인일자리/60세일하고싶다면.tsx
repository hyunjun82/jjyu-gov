import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          60세 이상이라면 <strong>사회서비스형, 시장형, 취업알선형</strong> 노인일자리를 신청할 수 있습니다.
          65세 이상이면 <strong>공익활동</strong>까지 포함해 4가지 유형 모두 가능합니다.
          거주지 <strong>행정복지센터, 노인복지관</strong> 방문 또는
          <strong>work24(고용24)</strong> 온라인 신청으로 연중 수시 접수합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        60세 이상이라면 지금 당장 노인일자리에 신청할 수 있습니다.
        본인 건강 상태와 희망 근무 시간에 맞는 유형을 선택해 신청하는 방법을 안내합니다.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">연령별 신청 가능 유형</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>연령</th><th>신청 가능 유형</th><th>소득 조건</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>만 60세 이상</strong></td>
                <td>사회서비스형, 시장형, 취업알선형</td>
                <td>소득 무관</td>
              </tr>
              <tr>
                <td><strong>만 65세 이상</strong></td>
                <td>공익활동 + 위 3가지 모두</td>
                <td>공익활동: 기초연금 수급자 중심</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="apply-steps">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 유형 선택 — 공익활동·사회서비스·시장형·취업알선형 중 선택
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 거주지 행정복지센터 또는 노인복지관 방문 (또는 work24 온라인)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 신청서 + 신분증 + 소득 증빙 (공익활동의 경우) 제출
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>4단계:</strong> 자격 확인 후 사업단 배정
          </div>
          <div className="info-box">
            <strong>5단계:</strong> 활동 시작 (보통 1~2월 집중 모집, 연중 수시 신규 자리)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tips">
        <h2 className="detail-card-head">신청 시 알아두면 좋은 점</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>모집 시기:</strong> 1~2월에 집중 모집, 연중 수시로 빈자리 생김
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기초연금 영향:</strong> 공익활동 수당은 기초연금 소득 산정에 큰 영향 없음
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>활동 중 보험:</strong> 모든 참여자 단체 상해보험 자동 가입
          </div>
          <div className="info-box">
            <strong>베이비붐세대:</strong> 1955~1963년생은 2026년 신규 일자리 3만 7,000개 우선 확인
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            유형별 월 수당 비교, 기초연금과 중복 여부, 활동 중 사고 보상까지<br />
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

export const 노인일자리60세일하고싶다면SpokeContent: SpokeData = {
  h1: '60세 넘겼는데 일하고 싶다면 노인일자리 신청 방법과 절차',
  breadcrumb: '60세일하고싶다면',
  description:
    '60세 이상: 사회서비스형(월 76만원), 시장형, 취업알선형 신청 가능. 65세 이상: 공익활동(월 29만원) 추가. 행정복지센터·노인복지관 방문 또는 work24 온라인 신청. 연중 수시 접수.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '60세면 노인일자리를 신청할 수 있나요?',
      a: '네. 만 60세 이상이면 사회서비스형, 시장형, 취업알선형을 신청할 수 있습니다. 공익활동은 만 65세 이상 기초연금 수급자 중심으로 운영됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '거주지 행정복지센터, 노인복지관, 시군구 노인일자리 전담기관에서 방문 신청하거나 work24(고용24) 온라인으로 신청할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '언제 신청해야 하나요?',
      a: '1~2월에 집중 모집이 이뤄지지만 연중 수시로 빈 자리가 생깁니다. 아무 때나 행정복지센터에 방문해 신청 상담을 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '기초연금을 받으면서 노인일자리도 할 수 있나요?',
      a: '네. 기초연금과 노인일자리 수당은 중복 수령이 가능합니다. 공익활동 수당은 기초연금 소득 산정에 큰 영향을 주지 않습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '일하다가 다치면 어떻게 되나요?',
      a: '모든 참여자는 단체 상해보험에 자동 가입됩니다. 활동 중 사고 발생 시 즉시 사업단 담당자에게 알리고 의료기관 진료 후 보험금 청구 절차를 안내받으면 됩니다.',
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
