import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          졸업(또는 거치기간 종료) 후에는 <strong>원금·이자를 매월 분할 납부</strong>합니다.
          상환 기간은 최대 10년이며, 여유 자금이 생기면 <strong>언제든 중도·조기 상환</strong>이 가능합니다.
          실직·육아휴직 시 상환 유예 신청도 가능합니다.
        </p>
      </div>
      <section className="detail-card" id="repay">
        <h2 className="detail-card-head">졸업 후 상환 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>상환 방식</td><td>원리금 균등 분할 상환</td></tr>
              <tr><td>납부 주기</td><td>매월 자동이체 또는 인터넷뱅킹</td></tr>
              <tr><td>상환 기간</td><td>최대 10년</td></tr>
              <tr><td>조기 상환</td><td>가능 (중도상환 수수료 없음)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="deferral">
        <h2 className="detail-card-head">상환 유예 신청 가능 상황</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>사유</th><th>유예 기간</th></tr></thead>
            <tbody>
              <tr><td>실직·퇴직</td><td>최대 2년</td></tr>
              <tr><td>육아휴직</td><td>육아휴직 기간</td></tr>
              <tr><td>군입대</td><td>복무 기간</td></tr>
              <tr><td>질병·재해</td><td>치료·회복 기간</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>유예 신청: 한국장학재단 홈페이지 또는 1599-2000 콜센터.</div>
        </div>
      </section>
    </>
  );
}

export const 일반상환학자금대출일반상환학자금졸업후상환방법SpokeContent: SpokeData = {
  h1: '일반상환학자금 졸업 후 상환기간과 분할납부 방법',
  breadcrumb: '일반상환학자금졸업후상환방법',
  description: '일반상환학자금대출 졸업 후 원리금 상환 방법, 조기상환, 유예 신청 절차를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '졸업 후 언제부터 원금을 갚아야 하나요?',
      a: '졸업 후 최대 2년의 거치기간이 끝나면 원금 상환이 시작됩니다. 거치기간을 짧게 설정했다면 더 일찍 시작됩니다.',
      source: '한국장학재단 학자금대출',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '분할 납부 기간은 얼마나 되나요?',
      a: '최대 10년(120개월) 원리금 균등 분할 납부가 가능합니다. 상환 기간을 늘리면 월 납부액이 줄지만 총 이자가 늘어납니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '상환 계좌는 어디서 관리하나요?',
      a: '한국장학재단 홈페이지(kstudy.com)에서 상환 계좌 등록, 상환 일정 조회, 자동이체 설정이 가능합니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '실직·소득 없으면 상환 유예가 가능한가요?',
      a: '한국장학재단에 납부 유예를 신청할 수 있습니다. 실직, 출산, 군 복무 등 사유가 인정되면 최대 3년까지 유예됩니다.',
      source: '한국장학재단 납부유예 안내',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '조기 상환 시 수수료가 있나요?',
      a: '없습니다. 중도상환 수수료 없이 언제든 전액 또는 일부를 상환할 수 있습니다.',
      source: '한국장학재단 학자금대출',
      sourceUrl: 'https://www.kstudy.com',
    }
  ],
  sources: [
    { name: '한국장학재단 학자금대출', url: 'https://www.kstudy.com' },
  ],
};
