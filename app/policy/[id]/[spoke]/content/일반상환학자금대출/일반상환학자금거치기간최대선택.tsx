import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          일반상환학자금 거치기간은 <strong>최대 10년</strong>까지 선택 가능합니다.
          이 기간에는 이자만 납부하고 원금은 갚지 않습니다.
          이후 상환기간(최대 10년) 동안 원리금을 분할 납부합니다.
        </p>
      </div>
      <section className="detail-card" id="structure">
        <h2 className="detail-card-head">거치·상환 기간 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>대출자 유형</th><th>총 기간</th><th>거치 최대</th><th>상환 최대</th></tr></thead>
            <tbody>
              <tr><td>일반 대학(원)생</td><td>20년</td><td>10년</td><td>10년</td></tr>
              <tr><td>전문대학원생(경영 등)</td><td>15년</td><td>5년</td><td>10년</td></tr>
              <tr><td>의·치·한의·약학 대학원</td><td>20년</td><td>10년</td><td>10년</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="choose">
        <h2 className="detail-card-head">거치기간 선택 전략</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>상황</th><th>추천</th></tr></thead>
            <tbody>
              <tr><td>졸업 후 취업까지 시간 필요</td><td>거치기간 길게 설정 (최대 10년)</td></tr>
              <tr><td>취업 후 빨리 상환하고 싶음</td><td>거치기간 짧게 → 원금 조기 상환</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>거치기간 중에도 이자는 계속 발생합니다. 거치기간이 길수록 총 이자 납부액이 늘어납니다.</div>
        </div>
      </section>
    </>
  );
}

export const 일반상환학자금대출일반상환학자금거치기간최대선택SpokeContent: SpokeData = {
  h1: '일반상환학자금 거치기간 최대 몇 년까지 선택 가능한가',
  breadcrumb: '일반상환학자금거치기간최대선택',
  description: '일반상환학자금대출 거치기간(이자만 내는 기간) 최대 10년, 상환기간 최대 10년 구조를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '거치기간이란 무엇인가요?',
      a: '원금 상환은 미루고 이자만 내는 기간입니다. 재학 중 + 졸업 후 최대 2년까지 거치기간을 설정할 수 있습니다.',
      source: '한국장학재단 학자금대출',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '거치기간 중 이자는 내야 하나요?',
      a: '네. 거치기간에도 이자 납부 의무는 있습니다. 이자를 연체하면 신용 불이익이 생깁니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '거치기간을 최대로 설정하는 게 유리한가요?',
      a: '취업 후 소득이 생기기 전까지 원금 부담을 줄이는 데 유리하지만, 그만큼 총 이자 지급액이 늘어납니다. 취업 후 여력이 생기면 일찍 상환하는 게 좋습니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '대학원 진학 시 거치기간이 연장되나요?',
      a: '대학원 재학 중에도 거치기간이 연장됩니다. 단, 재학 증명 서류를 한국장학재단에 제출해야 합니다.',
      source: '한국장학재단 학자금대출 안내',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '거치기간 종료 후 상환 방식은 어떻게 되나요?',
      a: '거치기간 종료 후 원리금 균등 상환 방식으로 최대 10년간 나눠 갚을 수 있습니다. 상환 기간도 신청 시 선택할 수 있습니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    }
  ],
  sources: [
    { name: '한국장학재단 학자금대출', url: 'https://www.kstudy.com' },
  ],
};
