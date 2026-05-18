import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          퇴소 전에 반드시 챙겨야 할 항목은 ①<strong>주거지원시설 입주 신청</strong>
          ②<strong>유자녀 자립지원금 신청</strong> ③취업 훈련 사전 등록 ④긴급 생계비 신청입니다.
          퇴소 후에 신청을 시작하면 지원이 끊기는 기간이 생길 수 있으므로
          <strong>입소 중에 미리 준비</strong>하는 것이 중요합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        보호시설 퇴소를 앞두고 있다면 아래 4가지를 퇴소 전 준비하면 퇴소 직후 생계 공백을 막을 수 있습니다.
      </p>

      <section className="detail-card" id="checklist">
        <h2 className="detail-card-head">퇴소 전 준비 체크리스트</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>준비 내용</th><th>시기</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>주거지원시설 입주</strong></td>
                <td>거주지 시군구청 여성가족 부서에 입주 신청</td>
                <td>퇴소 2~4주 전</td>
              </tr>
              <tr>
                <td><strong>유자녀 자립지원금</strong></td>
                <td>자녀 만 18세 미만인 경우 월 6만원 신청</td>
                <td>퇴소 전 또는 퇴소 직후</td>
              </tr>
              <tr>
                <td><strong>취업 훈련 등록</strong></td>
                <td>여성새로일하기센터(113) 직업 상담 예약</td>
                <td>퇴소 전 시작 가능</td>
              </tr>
              <tr>
                <td><strong>긴급 생계비</strong></td>
                <td>긴급복지지원제도 연계 신청</td>
                <td>퇴소 직전·직후</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="housing">
        <h2 className="detail-card-head">주거지원시설 — 퇴소 전 신청이 유리한 이유</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>입주 기간:</strong> 최대 2~4년 무상 거주 (자립·자활 의지 확인 후)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장기 보호 퇴소자:</strong> 장기 보호시설 퇴소자도 입주 신청 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>퇴소 전 신청:</strong> 퇴소 직후 바로 입주 가능하도록 미리 신청
          </div>
          <div className="info-box">
            <strong>병행 지원:</strong> 거주 중 취업 훈련·심리 상담 병행
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="overlap">
        <h2 className="detail-card-head">다른 지원과 함께 받을 수 있는 것</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>한부모가족 복지시설:</strong> 중복 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>여성가장 창업자금:</strong> 중복 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>아동수당·부모급여:</strong> 중복 가능
          </div>
          <div className="info-box">
            <strong>범죄피해자 긴급 생활안정비:</strong> 중복 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            유자녀 자립지원금 금액, 취업 훈련 연계, 신청 절차까지<br />
            자립지원금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/dv-shelter-leaver-aid" className="btn-cta">
            가정폭력 보호시설 퇴소자 자립지원금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 가정폭력자립지원금퇴소전챙길항목SpokeContent: SpokeData = {
  h1: '보호시설 퇴소 앞두고 있다면 챙겨야 할 자립지원금 항목',
  breadcrumb: '퇴소전챙길항목',
  description:
    '보호시설 퇴소 전 준비 4가지: 주거지원시설 입주 신청(퇴소 2~4주 전), 유자녀 자립지원금(월 6만원), 취업 훈련 등록(113), 긴급 생계비 신청. 퇴소 전 미리 신청하면 지원 공백 없음.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '보호시설 퇴소 전에 미리 신청할 수 있는 지원이 있나요?',
      a: '네. 주거지원시설 입주 신청, 유자녀 자립지원금, 취업 훈련 사전 등록은 퇴소 전 입소 중에 시작할 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '주거지원시설은 퇴소 전에 신청해야 하나요?',
      a: '퇴소 전 미리 신청하면 퇴소 직후 바로 입주할 수 있어 주거 공백을 막을 수 있습니다. 퇴소 2~4주 전에 시군구청 여성가족 부서에 신청하는 것을 권장합니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '장기 보호시설 퇴소자도 주거지원시설에 들어갈 수 있나요?',
      a: '네. 장기 보호시설 퇴소자도 자립·자활 의지가 있으면 주거지원시설 입주를 신청할 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '자립지원금을 받으면서 다른 복지 지원도 받을 수 있나요?',
      a: '네. 한부모가족 복지시설, 여성가장 창업자금, 아동수당, 부모급여, 범죄피해자 긴급 생활안정비 등과 모두 중복 수령이 가능합니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '퇴소 후 갑자기 생계가 어려우면 어떻게 하나요?',
      a: '긴급복지지원제도와 연계한 긴급 생계·의료비 지원을 받을 수 있습니다. 1366(여성긴급전화, 24시간)으로 연락하면 즉시 안내받을 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부', url: 'https://www.mogef.go.kr' },
    { name: '여성가족부 가정폭력 피해자 지원', url: 'https://www.mogef.go.kr/sp/hrp/sp_hrp_f004.do' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
