import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          아이돌봄서비스 본인부담금은 <strong>소득 기준(중위소득)에 따라 4단계</strong>로 나뉩니다.
          가형(중위 75% 이하)은 시간당 <strong>1,918원</strong>,
          나형(75~120%)은 <strong>7,674원</strong>,
          다형(120~150%)은 <strong>10,232원</strong>,
          라형(150~200%)은 <strong>11,511원</strong>이며,
          중위소득 200% 초과 가구는 정부 지원 없이 전액 본인 부담입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "아이돌봄서비스를 쓰면 시간당 얼마를 내야 하나요?"
        소득 구간별 본인부담금을 정리했습니다.
      </p>

      <section className="detail-card" id="fee-table">
        <h2 className="detail-card-head">아이돌봄서비스 소득 구간별 본인부담금 | 시간제 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>소득 기준 (중위소득)</th><th>시간당 본인부담금</th><th>정부지원금</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>가형</strong></td>
                <td>75% 이하</td>
                <td>1,918원</td>
                <td>10,872원</td>
              </tr>
              <tr>
                <td><strong>나형</strong></td>
                <td>75% 초과 ~ 120% 이하</td>
                <td>7,674원</td>
                <td>5,116원</td>
              </tr>
              <tr>
                <td><strong>다형</strong></td>
                <td>120% 초과 ~ 150% 이하</td>
                <td>10,232원</td>
                <td>2,558원</td>
              </tr>
              <tr>
                <td><strong>라형</strong></td>
                <td>150% 초과 ~ 200% 이하</td>
                <td>11,511원</td>
                <td>1,279원</td>
              </tr>
              <tr>
                <td><strong>지원 없음</strong></td>
                <td>200% 초과</td>
                <td>12,790원 (전액 본인부담)</td>
                <td>0원</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            시간당 정부 지원 기준금액: 12,790원. 본인부담금은 이 금액에서 정부 지원분을 뺀 나머지입니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="annual-limit">
        <h2 className="detail-card-head">연간 지원 시간 한도</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>시간제 돌봄:</strong> 가형~다형 연 960시간, 라형 연 840시간
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>종합형 돌봄:</strong> 월 200시간 이내 (1일 9시간 상한)
          </div>
          <div className="info-box">
            한도 초과분은 유형과 관계없이 시간당 12,790원 전액 본인 부담입니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> 아이돌봄서비스(idolbom.go.kr) 또는 복지로(bokjiro.go.kr)
          </div>
          <div className="info-box">
            <strong>방문:</strong> 거주지 읍·면·동 주민센터
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            소득 기준 확인, 맞벌이 신청 방법 등<br />
            아이돌봄서비스 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/child-care-service" className="btn-cta">
            아이돌봄서비스 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 아이돌봄본인부담금SpokeContent: SpokeData = {
  h1: '아이돌봄서비스 소득 구간별 본인부담금 | 시간제 기준',
  breadcrumb: '본인부담금',
  description:
    '아이돌봄서비스 본인부담금: 가형(중위75%이하) 시간당 1,918원, 나형(75~120%) 7,674원, 다형(120~150%) 10,232원, 라형(150~200%) 11,511원. 200% 초과 시 전액 본인부담(12,790원). 시간제 연 960시간 한도.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '아이돌봄서비스는 시간당 얼마를 내나요?',
      a: '소득 기준에 따라 다릅니다. 가형(중위 75% 이하)은 시간당 1,918원, 나형(75~120%)은 7,674원, 다형(120~150%)은 10,232원, 라형(150~200%)은 11,511원입니다. 중위소득 200% 초과는 전액 본인부담(12,790원)입니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '연간 지원 시간 한도는 얼마나 되나요?',
      a: '시간제 돌봄은 가형~다형 연 960시간, 라형 연 840시간이 정부 지원 한도입니다. 한도를 초과하면 전액 본인이 부담합니다.',
      source: '아이돌봄서비스',
      sourceUrl: 'https://www.idolbom.go.kr',
    },
    {
      q: '중위소득 200%를 초과하면 서비스를 이용할 수 없나요?',
      a: '이용은 가능하지만 정부 지원 없이 시간당 12,790원을 전액 본인이 부담해야 합니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '종합형 돌봄의 본인부담금도 같은 기준인가요?',
      a: '네, 소득 구간별 유형(가·나·다·라형) 기준은 시간제와 종합형 모두 동일하게 적용됩니다.',
      source: '아이돌봄서비스',
      sourceUrl: 'https://www.idolbom.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '아이돌봄서비스 홈페이지(idolbom.go.kr) 또는 복지로(bokjiro.go.kr)에서 온라인 신청하거나, 거주지 주민센터를 방문해 신청할 수 있습니다.',
      source: '아이돌봄서비스',
      sourceUrl: 'https://www.idolbom.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부', url: 'https://www.mogef.go.kr' },
    { name: '아이돌봄서비스', url: 'https://www.idolbom.go.kr' },
  ],
};
