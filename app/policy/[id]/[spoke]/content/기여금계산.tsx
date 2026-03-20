import Link from 'next/link';
import type { SpokeData } from '../page';

const contribTable = [
  { income: '2,400만원 이하', rate: '6.0% (40만원까지)\n3.0% (40~70만원)', monthly: '3.3만원', yearly: '39.6만원', total5y: '198만원' },
  { income: '2,400~3,600만원', rate: '4.6% (50만원까지)\n3.0% (50~70만원)', monthly: '2.9만원', yearly: '34.8만원', total5y: '174만원' },
  { income: '3,600~4,800만원', rate: '3.7% (60만원까지)\n3.0% (60~70만원)', monthly: '2.5만원', yearly: '30만원', total5y: '150만원' },
  { income: '4,800~6,000만원', rate: '3.0%', monthly: '2.1만원', yearly: '25.2만원', total5y: '126만원' },
  { income: '6,000~7,500만원', rate: '없음', monthly: '0원', yearly: '0원', total5y: '0원 (비과세만)' },
];

const simTable = [
  { deposit: '30만원', income1: '약 2,310만원', income2: '약 2,270만원', income3: '약 2,240만원' },
  { deposit: '40만원', deposit_note: '(2,400만원 이하 최적)', income1: '약 3,080만원', income2: '약 3,020만원', income3: '약 2,990만원' },
  { deposit: '50만원', income1: '약 3,850만원', income2: '약 3,790만원', income3: '약 3,740만원' },
  { deposit: '70만원', deposit_note: '(최대)', income1: '약 5,000만원', income2: '약 4,910만원', income3: '약 4,860만원' },
];

function Content() {
  return (
    <>
      {/* 답변 박스 */}
      <div className="answer-box">
        <p>
          소득이 낮을수록 기여금 비율이 높습니다.
          총급여 2,400만원 이하면 월 최대 3.3만원, 5년간 약 198만원을 정부가 얹어줍니다.
          6,000만원을 넘으면 기여금 없이 비과세 혜택만 받습니다.
        </p>
      </div>

      {/* H2-1 */}
      <section className="detail-card" id="table">
        <h2 className="detail-card-head">소득구간별 기여금, 얼마 받나?</h2>
        <div className="detail-card-body" style={{ padding: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <caption className="sr-only">소득구간별 정부기여금 비율 및 금액</caption>
              <thead>
                <tr>
                  <th scope="col">총급여 기준</th>
                  <th scope="col">월 기여금</th>
                  <th scope="col">연간 합계</th>
                  <th scope="col" className="highlight">5년 합계</th>
                </tr>
              </thead>
              <tbody>
                {contribTable.map((row, i) => (
                  <tr key={i}>
                    <td className="compare-label">{row.income}</td>
                    <td>{row.monthly}</td>
                    <td>{row.yearly}</td>
                    <td style={{ fontWeight: 700 }}>{row.total5y}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: '12px 20px', fontSize: 12, color: 'var(--text-muted)', borderTop: '1px solid var(--border-light)' }}>
            ※ 월 70만원 최대 납입 기준. 2025년 1월 개정 비율 적용.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      {/* H2-2 */}
      <section className="detail-card" id="simulation">
        <h2 className="detail-card-head">월 얼마씩 넣어야 가장 유리한가?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            소득 2,400만원 이하라면 40만원까지는 6% 매칭, 그 이상은 3%로 떨어집니다.
            여유가 된다면 70만원 풀납입이 수령액은 가장 크지만,
            40만원만 넣어도 기여금 효율은 충분합니다.
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="mini-table">
              <caption className="sr-only">월 납입액별 5년 예상 수령액</caption>
              <thead>
                <tr>
                  <th scope="col">월 납입액</th>
                  <th scope="col">2,400만원 이하</th>
                  <th scope="col">2,400~3,600만원</th>
                  <th scope="col">3,600~4,800만원</th>
                </tr>
              </thead>
              <tbody>
                {simTable.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{row.deposit}</td>
                    <td>{row.income1}</td>
                    <td>{row.income2}</td>
                    <td>{row.income3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: '12px 0', fontSize: 12, color: 'var(--text-muted)' }}>
            ※ 기본금리 4.5%, 기여금 이자 포함 추정. 실제 금액은 은행·금리에 따라 다를 수 있음.
          </div>
          <p className="source-inline">
            출처: <a href="https://www.fsc.go.kr/no010101/83729" target="_blank" rel="noopener noreferrer">금융위원회 보도자료 – 기여금 확대</a>
          </p>
        </div>
      </section>

      {/* H2-3 */}
      <section className="detail-card" id="review">
        <h2 className="detail-card-head">연봉 오르면 기여금이 줄어드나?</h2>
        <div className="detail-card-body">
          <div className="answer-box-inline">
            네. 매년 유지심사가 있습니다. 소득이 올라서 구간이 바뀌면 기여금 비율이 낮아지고,
            6,000만원을 넘으면 기여금이 0원이 됩니다. 단, 비과세는 7,500만원까지 유지됩니다.
          </div>
          <table className="mini-table">
            <caption className="sr-only">유지심사 소득 변동 시나리오</caption>
            <thead><tr><th scope="col">상황</th><th scope="col">기여금</th><th scope="col">비과세</th></tr></thead>
            <tbody>
              <tr><td>소득 변동 없음</td><td className="text-success" style={{fontWeight:600}}>유지</td><td className="text-success" style={{fontWeight:600}}>유지</td></tr>
              <tr><td>소득 증가 (구간 상승)</td><td style={{fontWeight:600}}>낮은 비율로 변경</td><td className="text-success" style={{fontWeight:600}}>유지</td></tr>
              <tr><td>소득 6,000만원 초과</td><td className="text-danger" style={{fontWeight:600}}>0원</td><td className="text-success" style={{fontWeight:600}}>유지 (7,500만원까지)</td></tr>
              <tr><td>소득 7,500만원 초과</td><td className="text-danger" style={{fontWeight:600}}>0원</td><td className="text-danger" style={{fontWeight:600}}>소멸</td></tr>
              <tr><td>퇴직 (소득 0)</td><td style={{fontWeight:600}}>전년도 기준 유지</td><td className="text-success" style={{fontWeight:600}}>유지</td></tr>
            </tbody>
          </table>
          <div style={{ padding: '12px 0', fontSize: 12, color: 'var(--text-muted)' }}>
            ※ 유지심사 기준: 1~6월은 전전년도 소득, 7~12월은 직전년도 소득
          </div>
          <p className="source-inline">
            출처: <a href="https://ylaccount.kinfa.or.kr/ylt/step5" target="_blank" rel="noopener noreferrer">서민금융진흥원 – 유지심사 안내</a>
          </p>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>
    </>
  );
}

export const ContribSpokeContent: SpokeData = {
  h1: '청년도약계좌 정부기여금, 내 소득이면 얼마 받나?',
  breadcrumb: '기여금 계산',
  description: '청년도약계좌 소득구간별 정부기여금 비율표와 월 납입액별 5년 수령액 시뮬레이션.',
  datePublished: '2026-02-15T09:00:00+09:00',
  dateModified: '2026-03-20T09:00:00+09:00',
  Content,
  faqData: [
    { q: '기여금은 매달 통장에 들어오나요?', a: '아닙니다. 기여금은 만기 시 또는 중도해지 시 일괄 지급됩니다. 매월 기여금이 "적립"되지만 실제 입금은 만기 때 한 번에 받습니다.', source: '서민금융진흥원 상품안내', sourceUrl: '/policy/1' },
    { q: '40만원만 넣어도 기여금이 똑같다던데요?', a: '2024년까지는 맞았습니다. 2025년 1월부터 매칭한도가 70만원으로 확대되어, 70만원 넣으면 3.3만원(2,400만원 이하 기준)으로 늘어났습니다. 40만원 넣으면 2.4만원입니다.', source: '기여금 계산', sourceUrl: '/policy/1/기여금-계산#table' },
    { q: '연봉 2,400만원 기준이 세전인가요 세후인가요?', a: '세전 총급여 기준입니다. 원천징수영수증의 "총급여액"을 확인하세요. 종합소득자는 "종합소득금액 1,600만원 이하"가 같은 구간입니다.', source: '금융위원회', sourceUrl: '/policy/1#details' },
    { q: '기여금에도 이자가 붙나요?', a: '네. 기여금도 납입금과 동일한 금리가 적용됩니다. 기본금리 4.5% 기준, 5년간 기여금 이자만 약 16만원 추가됩니다.', source: '금융위원회 보도자료', sourceUrl: '/policy/1' },
  ],
  sources: [
    { name: '금융위원회 – 기여금 확대 보도자료', url: 'https://www.fsc.go.kr/no010101/83729' },
    { name: '서민금융진흥원 – 상품안내', url: 'https://ylaccount.kinfa.or.kr/main' },
    { name: '서민금융진흥원 – 유지심사', url: 'https://ylaccount.kinfa.or.kr/ylt/step5' },
    { name: '한국경제 – 기여금 결정 방식', url: 'https://www.edaily.co.kr/News/Read?newsId=02118886635642048' },
  ],
};
