import type { SpokeData } from '../../page';
function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          월 50만원씩 3년 납입 시 우대형 기준 <strong>최대 2,200만원</strong>을 수령합니다.
          일반형은 최대 약 2,000만원 수준입니다. 납입액(1,800만원) + 정부 기여금 + 이자(비과세)의 합계입니다.
        </p>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "3년 동안 넣으면 실제로 얼마 받는 거예요?" 가장 많이 묻는 질문입니다.
        납입액, 정부 기여금, 이자 세 가지를 합쳐야 실수령액이 나옵니다.
      </p>
      <section className="detail-card" id="calc">
        <h2 className="detail-card-head">3년 만기 실수령액 계산 (월 50만원 납입 기준)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>일반형 (기여금 6%)</th><th>우대형 (기여금 12%)</th></tr></thead>
            <tbody>
              <tr><td>본인 납입 총액</td><td>1,800만원</td><td>1,800만원</td></tr>
              <tr><td>정부 기여금</td><td>약 108만원</td><td>약 216만원</td></tr>
              <tr><td>은행 이자 (비과세)</td><td>약 90만원 내외</td><td>약 90만원 내외</td></tr>
              <tr><td><strong>예상 만기 수령액</strong></td><td><strong>약 2,000만원</strong></td><td><strong>최대 2,200만원</strong></td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            <strong>이자소득세 전액 면제:</strong> 일반 적금이라면 이자의 15.4%를 세금으로 내야 하지만,
            청년미래적금은 비과세 혜택으로 이자 전액을 받습니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="less">
        <h2 className="detail-card-head">월 50만원보다 적게 납입하면?</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>월 납입액</th><th>3년 본인 납입 총액</th><th>예상 수령액 (우대형)</th></tr></thead>
            <tbody>
              <tr><td>50만원 (최대)</td><td>1,800만원</td><td>최대 2,200만원</td></tr>
              <tr><td>30만원</td><td>1,080만원</td><td>약 1,300만원</td></tr>
              <tr><td>10만원</td><td>360만원</td><td>약 430만원</td></tr>
              <tr><td>1만원 (최소)</td><td>36만원</td><td>약 43만원</td></tr>
            </tbody>
          </table>
          <p style={{ fontSize: 13, color: '#666', marginTop: 8 }}>
            ※ 이자율은 출시 시점 확정 금리 기준. 기여금 비율은 소득 구간에 따라 달라집니다.
          </p>
        </div>
      </section>
      <div className="ad-slot">광고 영역</div>
      <section className="detail-card" id="vs">
        <h2 className="detail-card-head">일반 적금 대비 얼마나 유리한가?</h2>
        <div className="detail-card-body">
          <p>월 50만원, 연 4% 일반 적금 3년 시 예상 세후 수령액: 약 1,910만원</p>
          <p>청년미래적금 우대형 동일 조건: 최대 2,200만원</p>
          <div className="info-box">
            <strong>약 290만원 차이 (기여금 + 비과세 효과 합산)</strong><br />
            소득 구간에 따라 기여금 비율이 다르므로 실제 수령액은 개인마다 다릅니다.
          </div>
        </div>
      </section>
      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>6월 신청 일정, 가입 조건, 도약계좌 갈아타기 등<br />청년미래적금 전체 정보는 아래에서 확인하세요.</p>
          <a href="/policy/youth-future-savings" className="btn-cta">청년미래적금 전체 정보 보기 →</a>
        </div>
      </section>
    </>
  );
}
export const 실수령액SpokeContent: SpokeData = {
  h1: '청년미래적금 3년 만기 실수령액 얼마나 되나요',
  breadcrumb: '실수령액',
  description: '청년미래적금 3년 만기 실수령액을 계산했습니다. 월 50만원 납입 시 우대형 최대 2,200만원, 일반형 약 2,000만원입니다. 납입액 1,800만원 + 정부 기여금 + 이자(비과세) 합계입니다.',
  datePublished: '2026-05-17T09:00:00+09:00', dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    { q: '청년미래적금 3년 만기 시 얼마 받나요?', a: '월 50만원 납입 기준 우대형 최대 2,200만원, 일반형 약 2,000만원입니다. 본인 납입 1,800만원 + 정부 기여금 + 비과세 이자의 합계입니다.', source: '금융위원회 청년미래적금 카드뉴스', sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { q: '정부 기여금은 얼마인가요?', a: '일반형 6%, 우대형 12%입니다. 소득 구간에 따라 비율이 달라집니다. 월 50만원 납입 시 우대형은 3년간 약 216만원의 기여금이 추가됩니다.', source: '금융위원회 청년미래적금 카드뉴스', sourceUrl: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { q: '이자소득세는 얼마나 절약되나요?', a: '일반 적금이라면 이자의 15.4%를 세금으로 냅니다. 청년미래적금은 비과세이므로 이자 전액을 받습니다. 이자 90만원 기준 약 13만원 절세 효과입니다.', source: '금융위원회 청년미래적금 안내', sourceUrl: 'https://www.fsc.go.kr' },
    { q: '월 30만원만 넣어도 되나요?', a: '네. 최소 1만원부터 최대 50만원까지 자유롭게 납입할 수 있습니다. 월 30만원 납입 시 우대형 기준 약 1,300만원을 수령할 수 있습니다.', source: '금융위원회 청년미래적금 안내', sourceUrl: 'https://www.fsc.go.kr' },
    { q: '일반 적금보다 얼마나 유리한가요?', a: '연 4% 일반 적금 대비 기여금 + 비과세 효과로 약 290만원 이상 유리합니다. 소득 구간에 따라 차이가 납니다.', source: '경기도일자리포털 청년미래적금 총정리', sourceUrl: 'https://job.gg.go.kr/thema/exprcDtl' },
  ],
  sources: [
    { name: '금융위원회 청년미래적금 카드뉴스 (2026.04.24)', url: 'https://www.fsc.go.kr/no040101?cnId=3187' },
    { name: '경기도일자리포털 잡아바 청년미래적금 총정리', url: 'https://job.gg.go.kr/thema/exprcDtl' },
  ],
};
