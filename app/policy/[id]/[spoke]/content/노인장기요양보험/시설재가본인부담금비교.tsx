import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          노인장기요양 본인부담금은 <strong>시설급여 20%, 재가급여 15%</strong>입니다.
          <strong>기초생활수급자는 0%</strong>, <strong>차상위계층은 8% 또는 7.5%</strong>로 경감됩니다.
          연간 본인부담 상한제가 적용되어 일정 금액을 초과하면 초과분을 돌려받습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        시설 입소와 재가 서비스 중 어느 쪽이 비용 부담이 적은지 확인하고
        본인 상황에 맞는 서비스를 선택하세요.
      </p>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">본인부담금 기본 요율</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>서비스 유형</th><th>일반</th><th>차상위</th><th>기초수급자</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>시설급여</strong> (요양원 등)</td><td>20%</td><td>8%</td><td>0%</td></tr>
              <tr><td><strong>재가급여</strong> (방문요양 등)</td><td>15%</td><td>7.5%</td><td>0%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">시설급여 vs 재가급여 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>시설급여</th><th>재가급여</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>이용 대상</strong></td><td>1~2등급 (3~5등급 조건부)</td><td>1~5등급, 인지지원등급</td></tr>
              <tr><td><strong>본인부담</strong></td><td>20%</td><td>15%</td></tr>
              <tr><td><strong>서비스 장소</strong></td><td>요양원·노인공동생활가정</td><td>가정·주야간보호센터</td></tr>
              <tr><td><strong>특징</strong></td><td>24시간 돌봄</td><td>재택 생활 유지 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="cap">
        <h2 className="detail-card-head">본인부담 상한제</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>적용 대상:</strong> 장기요양 수급자 전원 (등급별 차등 적용)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>상한 초과 시:</strong> 초과한 본인부담금을 공단에서 환급
          </div>
          <div className="info-box">
            <strong>확인 방법:</strong> 국민건강보험공단(1577-1000) 또는 longtermcare.or.kr
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            등급 판정 기준, 신청 절차, 이용 가능한 서비스 전체 목록까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/long-term-care-elderly" className="btn-cta">
            노인장기요양보험 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 노인장기요양보험시설재가본인부담금비교SpokeContent: SpokeData = {
  h1: '노인장기요양 본인부담금 얼마인가, 시설급여 20%, 재가급여 15% 기준',
  breadcrumb: '시설재가본인부담금비교',
  description:
    '노인장기요양 본인부담금: 시설급여 20%, 재가급여 15%. 기초수급자 0%, 차상위 8%·7.5% 경감. 연간 상한제 적용, 초과분 환급. 국민건강보험공단 1577-1000.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '기초생활수급자는 정말 0원인가요?',
      a: '네. 기초생활수급자는 장기요양 본인부담금이 전액 면제됩니다. 시설급여와 재가급여 모두 해당됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '차상위계층 본인부담 경감은 자동으로 적용되나요?',
      a: '차상위계층으로 확인된 경우 자동 적용됩니다. 확인이 필요하면 공단(1577-1000) 또는 주민센터에서 확인하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '본인부담 상한제 환급은 어떻게 받나요?',
      a: '공단이 연 1회 초과분을 자동 산정하여 수급자에게 환급합니다. 별도 신청 없이 본인 계좌로 입금됩니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '3등급인데 요양원에 입소할 수 있나요?',
      a: '3~5등급은 원칙적으로 재가급여 위주이지만, 독거·치매·가족 돌봄 어려움 등 조건을 충족하면 시설 입소가 가능합니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
    {
      q: '복지용구 구입도 본인부담이 있나요?',
      a: '복지용구의 본인부담은 15%입니다. 연간 160만원 한도 내에서 구입·대여를 지원받을 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.longtermcare.or.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단 장기요양', url: 'https://www.longtermcare.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '찾기쉬운 생활법령정보', url: 'https://www.easylaw.go.kr' },
  ],
};
