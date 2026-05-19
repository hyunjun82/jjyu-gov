import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>평생교육이용권 신청은 보통 <strong>연 1~2회</strong>로, 3월~4월에 1차 공고가 납니다.
        신청 시 <strong>학습계획서</strong>를 제출해야 하며, 무엇을 왜 배우고 싶은지 구체적으로 적을수록 심사에 유리합니다.</p>
      </div>
      <section className="detail-card" id="schedule">
        <h2 className="detail-card-head">신청 일정 (2026년 기준)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>차수</th><th>신청 기간</th><th>선발 발표</th></tr></thead>
            <tbody>
              <tr><td>1차</td><td>3~4월경</td><td>4~5월경</td></tr>
              <tr><td>2차 (잔여 예산)</td><td>6~7월경 (공고 후 확인)</td><td>7~8월경</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>정확한 일정은 lllcard.kr 공지사항에서 확인. 지역별로 일정이 다를 수 있습니다.</div>
        </div>
      </section>
      <section className="detail-card" id="plan">
        <h2 className="detail-card-head">학습계획서 작성 요령</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>작성 요령</th></tr></thead>
            <tbody>
              <tr><td>학습 목표</td><td>"컴퓨터 활용 능력을 키워 재취업 준비"처럼 구체적으로</td></tr>
              <tr><td>수강 희망 강좌</td><td>lllcard.kr에서 제휴 강좌 미리 검색 후 기재</td></tr>
              <tr><td>기대 효과</td><td>배운 후 어떻게 활용할지 서술</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 평생교육이용권평생교육이용권신청기간학습계획서작성SpokeContent: SpokeData = {
  h1: '평생교육이용권 신청기간과 학습계획서 작성 방법',
  breadcrumb: '평생교육이용권신청기간학습계획서작성',
  description: '평생교육이용권 신청 시기(연 1~2회), 학습계획서 작성 요령과 심사 기준을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '신청 기간은 언제인가요?',
      a: '통상 연초(1~3월)에 공고되며 선착순으로 마감됩니다. 국가평생교육진흥원 공식 홈페이지에서 공고를 확인하세요.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '학습계획서란 무엇인가요?',
      a: '이용권을 어떤 강좌에 어떻게 활용할지 기술하는 서류입니다. 학습 목표, 수강 예정 강좌, 기대 효과 등을 적습니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '학습계획서를 잘 못 쓰면 탈락하나요?',
      a: '심사 기준 중 하나이므로 구체적으로 작성할수록 유리합니다. 직업 연계, 자기계발 목표 등을 명확히 서술하세요.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '신청은 온라인으로 할 수 있나요?',
      a: '평생학습계좌제 홈페이지(llip.nile.or.kr)에서 온라인 신청이 가능합니다. 신분증과 기초·차상위 증빙 서류가 필요합니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '선착순이면 일찍 신청해야 하나요?',
      a: '네. 예산 소진 시 조기 마감됩니다. 공고 첫날 신청을 추천합니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    }
  ],
  sources: [
    { name: '국가평생교육진흥원', url: 'https://www.nile.or.kr' },
  ],
};
