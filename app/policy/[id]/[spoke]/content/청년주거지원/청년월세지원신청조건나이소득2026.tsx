import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>2026년 청년 월세 지원은 <strong>만 19~34세 무주택 청년</strong>으로 월세 <strong>70만 원 이하</strong>,
        보증금 <strong>5,000만 원 이하</strong> 주택에 거주하며, 소득이 <strong>기준 중위소득 60% 이하</strong>인 경우 신청할 수 있습니다.</p>
      </div>
      <section className="detail-card" id="cond">
        <h2 className="detail-card-head">신청 자격 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>나이</td><td>만 19세 이상 ~ 34세 이하</td></tr>
              <tr><td>주택 요건</td><td>월세 70만 원 이하, 보증금 5,000만 원 이하</td></tr>
              <tr><td>소득(본인)</td><td>기준 중위소득 60% 이하</td></tr>
              <tr><td>소득(가구 합산)</td><td>중위소득 100% 이하</td></tr>
              <tr><td>거주 요건</td><td>부모와 별도 거주</td></tr>
              <tr><td>무주택</td><td>본인 명의 주택 없음</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="benefit">
        <h2 className="detail-card-head">지원 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>지원 금액</td><td>월 최대 20만 원</td></tr>
              <tr><td>지원 기간</td><td>최대 12개월</td></tr>
              <tr><td>신청처</td><td>복지로(bokjiro.go.kr) 또는 주민센터 방문</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 청년주거지원청년월세지원신청조건나이소득2026SpokeContent: SpokeData = {
  h1: '청년월세지원 신청조건 — 나이·소득 기준 2026',
  breadcrumb: '청년월세지원신청조건나이소득2026',
  description: '2026년 청년 월세 지원 신청 연령(19~34세)·소득·보증금·월세 기준과 신청 방법을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '청년월세지원 신청 나이 기준은 어떻게 되나요?',
      a: '만 19세 이상 34세 이하(1991~2007년생)가 대상입니다. 병역 이행 기간은 연령 계산에서 제외됩니다.',
      source: '국토교통부 청년월세 특별지원',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '소득 기준은 어떻게 되나요?',
      a: '청년 본인 소득이 기준 중위소득 60% 이하이고, 원가구(부모) 소득이 기준 중위소득 100% 이하여야 합니다. 부모와 따로 살아야 합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '월세가 얼마 이상이어야 신청 가능한가요?',
      a: '월세 60만 원 이하 주택이 대상입니다. 보증금 5,000만 원 이하 요건도 있습니다.',
      source: '국토교통부 청년월세 특별지원',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '자취 첫 달부터 신청 가능한가요?',
      a: '임차 계약 후 전입신고를 마친 뒤 신청 가능합니다. 임대차 계약서 사본이 필요합니다.',
      source: '국토교통부',
      sourceUrl: 'https://www.molit.go.kr',
    },
    {
      q: '지원 기간과 금액은 어떻게 되나요?',
      a: '월 최대 20만 원을 12개월(1년) 동안 지원합니다. 지원 기간 중 소득이 증가해 기준을 초과하면 지급이 중단될 수 있습니다.',
      source: '국토교통부 청년월세 특별지원',
      sourceUrl: 'https://www.molit.go.kr',
    }
  ],
  sources: [
    { name: '국토교통부·마이홈포털', url: 'https://www.myhome.go.kr' },
  ],
};
