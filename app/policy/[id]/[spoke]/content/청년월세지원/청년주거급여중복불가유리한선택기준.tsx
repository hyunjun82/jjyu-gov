import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년월세지원과 청년 주거급여 분리지급은 <strong>동시 수령 불가</strong>합니다.
          청년주거급여는 <strong>기준 중위소득 48% 이하</strong>만 대상이지만
          지원 기간 제한이 없고, 청년월세지원은 <strong>중위소득 60% 이하</strong>까지 대상이나 24개월 한정입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        두 제도 중 어느 것이 유리한지는 소득 수준과 장기 거주 계획에 따라 달라집니다.
        소득이 낮을수록 주거급여가 유리하고, 소득 기준이 넘어 주거급여 대상이 아닌 경우라면 청년월세지원이 대안입니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">청년월세지원 vs 청년주거급여 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>청년월세지원</th><th>청년주거급여 분리지급</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>소득 기준</strong></td><td>중위소득 60% 이하</td><td>중위소득 48% 이하</td></tr>
              <tr><td><strong>지원 기간</strong></td><td>최대 24개월</td><td>기간 제한 없음</td></tr>
              <tr><td><strong>월 지원 상한</strong></td><td>20만원</td><td>지역·가구별 기준임대료</td></tr>
              <tr><td><strong>지원 횟수</strong></td><td>생애 1회</td><td>수급 유지 시 계속</td></tr>
              <tr><td><strong>중복 수령</strong></td><td colSpan={2} style={{ textAlign: 'center' }}>불가</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="choice">
        <h2 className="detail-card-head">상황별 유리한 선택</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득이 중위 48% 이하:</strong> 청년주거급여 분리지급이 유리 (기간 무제한)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득이 중위 48~60% 사이:</strong> 주거급여 대상 안 됨 → 청년월세지원 신청
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>단기 거주 예정(2년 이내):</strong> 청년월세지원 (24개월 한도 안에서 최대 수혜)
          </div>
          <div className="info-box">
            <strong>장기 거주 예정:</strong> 소득이 낮다면 주거급여, 그렇지 않으면 월세지원 먼저 활용 후 다른 제도 검토
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청자격, 지원금액, 신청방법까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/youth-monthly-rent" className="btn-cta">
            청년월세지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 청년월세지원청년주거급여중복불가유리한선택기준SpokeContent: SpokeData = {
  h1: '청년월세지원 vs 청년주거급여, 중복 수급 불가와 유리한 선택 기준',
  breadcrumb: '청년주거급여중복불가유리한선택기준',
  description:
    '청년월세지원(중위60%·24개월·생애1회) vs 청년주거급여 분리지급(중위48%·기간무제한). 동시 수령 불가. 소득이 낮을수록 주거급여 유리, 48~60% 구간은 월세지원이 대안.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '주거급여 받으면서 청년월세지원도 받을 수 있나요?',
      a: '불가합니다. 두 제도는 중복 수령이 금지됩니다. 둘 중 하나를 선택해야 합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '주거급여 분리지급이란 무엇인가요?',
      a: '기초생활보장 주거급여 수급자 가구에서 독립한 청년에게 주거급여를 분리하여 별도 지급하는 제도입니다. 수급자 가구 기준이 따로 있으므로 일반 청년과 다릅니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '지금 청년월세지원을 받다가 나중에 주거급여로 바꿀 수 있나요?',
      a: '청년월세지원을 종료하고 주거급여 수급 자격이 갖추어지면 신청 가능합니다. 단, 소득이 낮아지거나 기초생활 수급 요건을 충족해야 합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '부모가 주거급여를 받는데 저도 주거급여를 받을 수 있나요?',
      a: '부모 가구가 주거급여 수급 가구라면 청년 주거급여 분리지급 신청 자격이 됩니다. 단, 본인이 독립 거주하고 별도 세대를 구성해야 합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '청년월세지원 24개월이 끝나면 어떻게 되나요?',
      a: '24개월 지원이 종료되면 추가 지원은 없습니다. 이후 소득 상황에 따라 주거급여, 전세자금 대출, 청년 임대주택 등 다른 주거 지원 제도를 검토하세요.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
  ],
  sources: [
    { name: '국토교통부 청년월세지원', url: 'https://www.molit.go.kr' },
    { name: '복지로 주거급여', url: 'https://www.bokjiro.go.kr' },
  ],
};
