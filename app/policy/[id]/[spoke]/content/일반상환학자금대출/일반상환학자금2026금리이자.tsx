import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 일반상환학자금대출 금리는 <strong>연 1.7%(고정금리)</strong>입니다.
          재학 중에는 이자만 납부하고, 졸업 후 원금·이자를 분할 상환합니다.
          학기당 생활비 200만 원, 등록금 전액이 한도입니다.
        </p>
      </div>
      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">2026년 금리 현황</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>적용 금리</td><td>연 1.7% (2026 기준 고정금리)</td></tr>
              <tr><td>등록금 대출 한도</td><td>학기별 등록금 전액</td></tr>
              <tr><td>생활비 대출 한도</td><td>학기당 200만 원</td></tr>
              <tr><td>나이 제한</td><td>만 35세 이하 (선취업 후진학자 만 45세)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="interest-example">
        <h2 className="detail-card-head">이자 예시 계산</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>대출 잔액</th><th>월 이자(연 1.7%)</th><th>연 이자</th></tr></thead>
            <tbody>
              <tr><td>1,000만 원</td><td>약 14,200원</td><td>약 170,000원</td></tr>
              <tr><td>3,000만 원</td><td>약 42,500원</td><td>약 510,000원</td></tr>
              <tr><td>5,000만 원</td><td>약 70,800원</td><td>약 850,000원</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>재학 중 이자는 매월 납부. 미납 시 연체 가산이자 발생.</div>
        </div>
      </section>
    </>
  );
}

export const 일반상환학자금대출일반상환학자금2026금리이자SpokeContent: SpokeData = {
  h1: '일반상환학자금 2026 금리와 실제 이자 얼마나 내나',
  breadcrumb: '일반상환학자금2026금리이자',
  description: '2026년 일반상환학자금대출 금리(연 1.7%)와 재학 중·졸업 후 이자 납부 구조를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 일반상환 학자금 금리는 얼마인가요?',
      a: '2026년 1학기 기준 연 1.7%입니다. 학기마다 변동될 수 있으니 신청 시 재단 공지를 확인하세요.',
      source: '한국장학재단 학자금대출',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '이자는 언제부터 붙나요?',
      a: '대출 실행일부터 이자가 발생합니다. 재학 중에도 이자는 발생하며, 재학 중 이자 면제는 별도 지원 기준을 충족해야 합니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '4년간 대출하면 이자 총액이 얼마나 되나요?',
      a: '등록금 4,000만 원 대출 시 연 1.7% 기준 4년 이자는 약 272만 원 수준입니다. 상환 방식과 기간에 따라 달라집니다.',
      source: '한국장학재단 이자 계산기',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '금리가 중간에 바뀌면 기존 대출에도 적용되나요?',
      a: '학기별로 대출마다 금리가 고정됩니다. 이미 받은 대출의 금리는 그 학기 기준 고정 금리로 유지됩니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '조기 상환하면 이자를 아낄 수 있나요?',
      a: '네. 중도상환 수수료가 없으므로 언제든 조기 상환이 가능합니다. 원금을 줄이면 이자 부담이 즉시 줄어듭니다.',
      source: '한국장학재단 학자금대출 안내',
      sourceUrl: 'https://www.kstudy.com',
    }
  ],
  sources: [
    { name: '한국장학재단 학자금대출', url: 'https://www.kstudy.com' },
  ],
};
