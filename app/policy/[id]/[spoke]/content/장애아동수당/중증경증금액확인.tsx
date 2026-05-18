import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          장애아동수당은 중증이면 <strong>월 최대 22만원</strong>,
          경증이면 <strong>월 11만원</strong>입니다.
          소득 구분(생계·의료급여, 주거·교육급여, 차상위)에 따라
          중증은 17만원~22만원으로 달라집니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "우리 아이는 중증 장애아동인데 장애아동수당을 얼마나 받을 수 있나요?"
        중증·경증별 지급 금액과 확인 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="amount-table">
        <h2 className="detail-card-head">2026년 장애아동수당 지급액 (월)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>장애 정도</th><th>생계·의료급여</th><th>주거·교육급여</th><th>차상위계층</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>중증</strong></td>
                <td>22만원</td>
                <td>17만원</td>
                <td>17만원</td>
              </tr>
              <tr>
                <td><strong>경증</strong></td>
                <td>11만원</td>
                <td>11만원</td>
                <td>11만원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="how-to-check">
        <h2 className="detail-card-head">우리 아이 받는 금액 확인 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장애 정도 확인:</strong> 장애인등록증 또는 장애 정도 판정서에서 중증·경증 확인
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 유형 확인:</strong> 기초수급 급여 종류(생계·의료·주거·교육) 또는 차상위 여부 확인
          </div>
          <div className="info-box">
            <strong>문의:</strong> 거주지 읍·면·동 행정복지센터 또는 복지로(bokjiro.go.kr)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>연령:</strong> 만 18세 미만 (초등학교 재학 중 예외 없음)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장애 등록:</strong> 경증 또는 중증 등록장애아동
          </div>
          <div className="info-box">
            <strong>소득:</strong> 기초생활수급자(생계·의료·주거·교육급여) 또는 차상위계층
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            18세 이후 전환, 신청 방법 등<br />
            장애아동수당 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/disability-child-allowance" className="btn-cta">
            장애아동수당 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 장애아동수당중증경증금액확인SpokeContent: SpokeData = {
  h1: '장애아동수당 중증과 경증 월 지급액 차이, 우리 아이 받는 금액 확인하는 방법',
  breadcrumb: '중증경증금액확인',
  description:
    '장애아동수당 2026년 금액: 중증 생계·의료 22만원, 주거·교육·차상위 17만원. 경증 11만원. 만 18세 미만, 수급자·차상위 조건. 복지로·행정복지센터 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '중증 장애아동이 받을 수 있는 최대 금액은 얼마인가요?',
      a: '중증 + 생계·의료급여 수급자 가구 아동이 월 22만원을 받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '경증 장애아동은 얼마를 받나요?',
      a: '경증 장애아동은 소득 구분에 관계없이 월 11만원을 받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '주거급여 수급자 가구 중증 아동은 얼마를 받나요?',
      a: '주거·교육급여 수급자 가구 중증 아동은 월 17만원을 받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '아이가 경증인지 중증인지 어떻게 알 수 있나요?',
      a: '장애인등록증 또는 장애 정도 판정서에서 확인할 수 있습니다. 모르면 행정복지센터에서 안내받으세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '차상위계층 중증 아동은 얼마를 받나요?',
      a: '차상위계층 중증 아동도 월 17만원을 받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
