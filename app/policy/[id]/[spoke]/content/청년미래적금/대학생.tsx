import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년미래적금은 대학생도 가입할 수 있습니다. 단,
          <strong>근로·사업소득이 발생</strong>해야 하며 총급여 7,500만원 이하(종합소득 6,300만원)여야 합니다.
          아르바이트 소득이 있는 재학생도 조건만 충족하면 신청 가능합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "대학교 다니면서도 청년미래적금에 가입할 수 있나요?" 많은 분이 궁금해하는 질문입니다.
        결론부터 말하면 가능합니다. 단, 소득 조건이 핵심입니다. 아래에서 확인하세요.
      </p>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">대학생 가입 조건 핵심 3가지</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>조건</th><th>기준</th><th>대학생 해당 여부</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>나이</td>
                <td>만 19세 이상 ~ 만 34세 이하</td>
                <td>✅ 대부분 해당</td>
              </tr>
              <tr>
                <td>소득</td>
                <td>근로·사업소득 발생 (총급여 7,500만원 이하 / 종합소득 6,300만원 이하)</td>
                <td>⚠️ 알바 소득 있어야 함</td>
              </tr>
              <tr>
                <td>가구 소득</td>
                <td>중위소득 200% 이하</td>
                <td>✅ 대부분 해당</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>핵심:</strong> 재학생 신분 자체는 가입 제한 사유가 아닙니다.
            아르바이트·프리랜서 등 <strong>근로·사업소득이 실제로 발생</strong>하면 가입할 수 있습니다.
            소득이 전혀 없는 전업 학생은 가입 불가합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">알바생·프리랜서 대학생도 되나요?</h2>
        <div className="detail-card-body">
          <p>
            네, 됩니다. 아르바이트 근로소득, 유튜브·블로그 등 사업소득, 과외 소득 등
            <strong>세금 신고된 소득</strong>이 있으면 가입 대상이 됩니다.
          </p>
          <div className="warning-box">
            <strong>주의:</strong> 장학금·부모 용돈·학자금 대출은 근로·사업소득으로 인정되지 않습니다.
            소득 요건을 충족하는지 확인하려면 홈택스에서 소득 조회를 먼저 해보세요.
          </div>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>소득 확인 방법:</strong> 홈택스(hometax.go.kr) → 조회/발급 →
            지급명세서 등 제출내역 조회에서 확인 가능합니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="income-type">
        <h2 className="detail-card-head">소득 유형별 가입 가능 여부</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>소득 유형</th><th>가입 가능 여부</th></tr>
            </thead>
            <tbody>
              <tr><td>아르바이트 (시간제 근로)</td><td>✅ 가능 (근로소득)</td></tr>
              <tr><td>과외·강사 소득</td><td>✅ 가능 (사업소득)</td></tr>
              <tr><td>유튜브·블로그 수익</td><td>✅ 가능 (사업소득, 신고 시)</td></tr>
              <tr><td>장학금</td><td>❌ 불가 (소득 아님)</td></tr>
              <tr><td>부모 용돈·생활비</td><td>❌ 불가 (소득 아님)</td></tr>
              <tr><td>학자금 대출</td><td>❌ 불가 (소득 아님)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="note">
        <h2 className="detail-card-head">대학생 가입 시 주의할 점</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>가구 소득 기준은 부모 포함:</strong> 청년미래적금의 소득 기준(중위소득 200%)은
            개인 소득이 아닌 <strong>가구 전체 소득</strong>을 기준으로 합니다.
            부모 소득이 높으면 탈락할 수 있으니 반드시 가구 소득 기준을 확인하세요.
          </div>
          <div className="info-box">
            <strong>졸업 후에도 유지 가능:</strong> 가입 후 졸업해도 계좌는 유지됩니다.
            3년 만기를 채우면 혜택을 그대로 받을 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            기여금 조건, 6월 신청 방법, 도약계좌 갈아타기 등<br />
            청년미래적금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-future-savings" className="btn-cta">
            청년미래적금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 대학생SpokeContent: SpokeData = {
  h1: '청년미래적금 대학생 재학생도 가입할 수 있나요',
  breadcrumb: '대학생',
  description: '청년미래적금 대학생 가입 조건을 정리했습니다. 재학생도 알바·프리랜서 등 근로·사업소득이 있으면 가입 가능합니다. 장학금·부모 용돈은 소득으로 인정되지 않습니다.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    { q: '대학생도 청년미래적금에 가입할 수 있나요?', a: '근로·사업소득이 있으면 가입 가능합니다. 아르바이트·과외·프리랜서 소득이 있는 재학생도 총급여 7,500만원 이하·중위소득 200% 이하면 됩니다.', source: '금융위원회 청년미래적금 카드뉴스', sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { q: '장학금을 받는 대학생도 가입 가능한가요?', a: '장학금은 근로·사업소득으로 인정되지 않습니다. 알바 등 별도 근로소득이 있어야 가입할 수 있습니다.', source: '금융위원회 청년미래적금 가입 조건', sourceUrl: 'https://www.fsc.go.kr' },
    { q: '부모 소득이 높으면 대학생도 탈락하나요?', a: '청년미래적금의 소득 기준은 가구 전체 소득(중위소득 200%)을 봅니다. 부모 소득이 높으면 탈락할 수 있으니 가구 소득 기준을 확인하세요.', source: '금융위원회 청년미래적금 카드뉴스', sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { q: '알바 소득으로 청년미래적금을 신청하려면 어떻게 하나요?', a: '홈택스에서 알바 소득이 신고되어 있어야 합니다. 소득이 확인되면 6월 출시 시 취급 은행 앱에서 비대면으로 신청하면 됩니다.', source: '금융위원회 청년미래적금 신청 안내', sourceUrl: 'https://www.fsc.go.kr' },
    { q: '가입 후 졸업하면 어떻게 되나요?', a: '졸업 후에도 계좌는 그대로 유지됩니다. 3년 만기를 채우면 기여금·이자소득세 면제 혜택을 모두 받을 수 있습니다.', source: '금융위원회 청년미래적금 안내', sourceUrl: 'https://www.fsc.go.kr' },
  ],
  sources: [
    { name: '금융위원회 청년미래적금 카드뉴스 (2026.04.24)', url: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { name: '경기도일자리포털 잡아바 청년미래적금 총정리', url: 'https://job.gg.go.kr/thema/exprcDtl' },
  ],
};
