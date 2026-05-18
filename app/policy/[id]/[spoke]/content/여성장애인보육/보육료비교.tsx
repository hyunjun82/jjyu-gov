import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          장애아 보육료는 <strong>종일반 월 63.4만원, 방과후 월 31.7만원</strong>으로,
          일반 보육료(누리과정 28만원)보다 훨씬 높습니다.
          지원 자격도 다릅니다. 장애아 보육료는 <strong>만 12세 이하 장애아동 본인</strong>이 대상이며,
          소득과 무관하게 지원됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "장애아동 보육료와 일반 보육료는 얼마나 다른가요?"
        지원 금액과 자격 조건을 한눈에 비교합니다.
      </p>

      <section className="detail-card" id="fee-compare">
        <h2 className="detail-card-head">장애아 보육료 vs 일반(누리과정) 보육료 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>장애아 보육료</th><th>일반(누리과정) 보육료</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>대상</strong></td>
                <td>만 12세 이하 장애아동</td>
                <td>만 3~5세 영유아</td>
              </tr>
              <tr>
                <td><strong>금액 (종일)</strong></td>
                <td><strong>63.4만원/월</strong></td>
                <td>28만원/월</td>
              </tr>
              <tr>
                <td><strong>금액 (방과후)</strong></td>
                <td><strong>31.7만원/월</strong></td>
                <td>해당 없음</td>
              </tr>
              <tr>
                <td><strong>소득 조건</strong></td>
                <td>없음 (보편 지원)</td>
                <td>없음 (보편 지원)</td>
              </tr>
              <tr>
                <td><strong>중복 여부</strong></td>
                <td>누리과정과 중복 불가</td>
                <td>장애아보육료와 중복 불가</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            만 3~5세 장애아동은 누리과정 보육료보다 단가가 높은 장애아 보육료(63.4만원)를 선택 적용하는 것이 유리합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="eligibility-compare">
        <h2 className="detail-card-head">지원 자격 비교</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장애아 보육료 자격:</strong><br />
            ① 장애인복지카드(등록증) 소지 만 12세 이하 아동<br />
            ② 또는 장애 소견 의사 진단서 제출 아동<br />
            ③ 또는 특수교육대상자 진단·평가 결과 통지서 제출 (만 3~5세)
          </div>
          <div className="info-box">
            <strong>일반 보육료 자격:</strong><br />
            어린이집에 다니는 만 0~5세 영유아 (소득 무관, 누리과정은 만 3~5세)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">장애아 보육료 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 복지로(bokjiro.go.kr) → 복지서비스 신청 → 장애아 보육료
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 거주지 읍·면·동 주민센터(행정복지센터) 방문 신청
          </div>
          <div className="info-box">
            <strong>필요 서류:</strong> 장애인복지카드(또는 진단서·통지서), 신분증, 가족관계증명서
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            우선 입소 신청, 서류 상세, 중복 지원 여부 등<br />
            여성장애인 보육 특례 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/disabled-women-childcare" className="btn-cta">
            여성장애인 보육 특례 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 여성장애인보육료비교SpokeContent: SpokeData = {
  h1: '장애아동 보육료와 일반보육료, 지원 금액과 자격 조건이 어떻게 다른가',
  breadcrumb: '보육료비교',
  description:
    '장애아 보육료 종일 63.4만원, 방과후 31.7만원 vs 누리과정 28만원. 만 12세 이하 장애아동 대상, 소득 무관. 누리과정과 중복 불가. 복지로 또는 주민센터 신청.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '장애아 보육료는 일반 보육료보다 얼마나 높나요?',
      a: '장애아 종일 보육료는 63.4만원/월로, 일반 누리과정(28만원)의 약 2.3배입니다. 방과후 보육료는 31.7만원입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '누리과정과 장애아 보육료를 동시에 받을 수 있나요?',
      a: '아니요, 중복 지원은 불가합니다. 만 3~5세 장애아동은 더 유리한 장애아 보육료(63.4만원)를 선택 적용하는 것이 좋습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애인복지카드가 없는 아동도 신청 가능한가요?',
      a: '장애 소견 의사 진단서 또는 특수교육대상자 진단·평가 결과 통지서로 대체 신청이 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애아 보육료도 소득 기준이 있나요?',
      a: '없습니다. 소득 수준과 관계없이 모든 장애아동에게 지원됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '장애아 보육료를 받으면서 어린이집도 우선 입소를 신청할 수 있나요?',
      a: '네, 우선 입소 신청(아이사랑 포털)과 보육료 신청(복지로·주민센터)은 각각 별도로 진행합니다. 두 가지 모두 신청 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '중앙육아종합지원센터', url: 'https://central.childcare.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
