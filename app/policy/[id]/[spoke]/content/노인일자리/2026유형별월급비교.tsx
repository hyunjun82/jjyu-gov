import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 노인일자리는 4가지 유형으로 운영됩니다.
          <strong>공익활동 월 29만원</strong>(30시간),
          <strong>사회서비스형 월 76만원</strong>(60시간),
          시장형(매출 분배), 취업알선형(기업 임금) 순으로
          활동 시간과 수당이 다릅니다.
          2026년 역대 최대 <strong>115만 2,000개</strong> 일자리가 운영됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        어떤 유형을 선택하느냐에 따라 월 수당이 크게 달라집니다.
        본인의 체력·소득·시간 상황에 맞는 유형을 아래 비교표에서 확인하세요.
      </p>

      <section className="detail-card" id="salary-compare">
        <h2 className="detail-card-head">2026 노인일자리 유형별 월급 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>월 활동 시간</th><th>월 수당</th><th>대상 연령</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>공익활동</strong></td>
                <td>30시간</td>
                <td>29만원</td>
                <td>만 65세 이상</td>
              </tr>
              <tr>
                <td><strong>사회서비스형</strong></td>
                <td>60시간</td>
                <td>76만원</td>
                <td>만 60~65세 이상</td>
              </tr>
              <tr>
                <td><strong>시장형</strong></td>
                <td>운영 시간</td>
                <td>매출 분배</td>
                <td>만 60세 이상</td>
              </tr>
              <tr>
                <td><strong>취업알선형</strong></td>
                <td>기업 근무</td>
                <td>기업 임금</td>
                <td>만 60세 이상</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="type-detail">
        <h2 className="detail-card-head">유형별 활동 내용</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>공익활동:</strong> 노노케어, 학교 안전 지킴이, 환경 정비 등 봉사 성격. 가장 많은 인원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사회서비스형:</strong> 어린이집·장애인시설 보조 등 준 일자리. 수당이 가장 높음
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>시장형:</strong> 공동작업장 운영, 매장 판매 등. 매출에 따라 수익 분배
          </div>
          <div className="info-box">
            <strong>취업알선형:</strong> 일반 기업 정규 채용 매칭. 기업 임금 그대로 수령
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="boomer">
        <h2 className="detail-card-head">2026 베이비붐세대 일자리 67% 증가</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 1955~1963년생 (만 63~71세)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>증가폭:</strong> 전년 대비 67%, 3만 7,000개 신규
          </div>
          <div className="info-box">
            <strong>추천 유형:</strong> 사회서비스형, 시장형, 취업알선형 (직장 경험 활용)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 기초연금과 중복 여부, 활동 중 보험까지<br />
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

export const 노인일자리2026유형별월급비교SpokeContent: SpokeData = {
  h1: '2026 노인일자리 유형별 월급 비교, 공익활동에서 시장형까지',
  breadcrumb: '2026유형별월급비교',
  description:
    '2026 노인일자리 4유형: 공익활동 월 29만원(30시간), 사회서비스형 월 76만원(60시간), 시장형 매출 분배, 취업알선형 기업 임금. 역대 최대 115만 2,000개. 베이비붐세대 3만 7,000개 신규.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '노인일자리 유형별 수당이 어떻게 다른가요?',
      a: '공익활동은 월 30시간 활동에 29만원, 사회서비스형은 월 60시간 근무에 76만원입니다. 시장형은 매출 분배, 취업알선형은 기업 임금을 받습니다.',
      source: '보건복지부 (2026)',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '2026년 노인일자리가 몇 개나 생겼나요?',
      a: '역대 최대인 115만 2,000개입니다. 2025년(109만 8천개) 대비 5만 4천개 증가했습니다.',
      source: '보건복지부 (2026)',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '수당이 가장 높은 유형은 무엇인가요?',
      a: '사회서비스형이 월 76만원으로 가장 높습니다. 어린이집, 장애인 시설 등에서 월 60시간 근무합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '베이비붐세대 일자리가 많이 늘었다고 하던데?',
      a: '1955~1963년생 베이비붐세대 일자리가 전년 대비 67%(3만 7,000개) 증가했습니다. 직장 경험을 활용할 수 있는 사회서비스형, 시장형, 취업알선형 일자리가 주로 늘었습니다.',
      source: '보건복지부 (2026)',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '가장 많은 사람이 참여하는 유형은 무엇인가요?',
      a: '공익활동이 가장 많은 인원이 참여합니다. 만 65세 이상 기초연금 수급자 중심으로 운영되며 월 30시간 활동에 29만원을 받습니다.',
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
