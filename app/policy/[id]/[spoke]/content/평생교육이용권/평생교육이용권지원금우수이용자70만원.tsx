import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>평생교육이용권 기본 지원금은 <strong>연 35만 원</strong>입니다.
        전년도 수강을 성실히 이수한 우수이용자로 선정되면 <strong>추가 35만 원을 더해 연 70만 원</strong>까지 받을 수 있습니다.</p>
      </div>
      <section className="detail-card" id="basic">
        <h2 className="detail-card-head">지원금 구조</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>지원금</th><th>조건</th></tr></thead>
            <tbody>
              <tr><td>기본 지원</td><td>연 35만 원</td><td>선발 인원 약 30,000명 이내</td></tr>
              <tr><td>우수이용자 추가</td><td>추가 35만 원 (계 70만 원)</td><td>전년도 80% 이상 이수 + 학습일지 제출</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="excellent">
        <h2 className="detail-card-head">우수이용자 선정 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>수강 이수율</td><td>전년도 신청 강좌의 80% 이상 이수</td></tr>
              <tr><td>학습일지</td><td>lllcard.kr에 학습일지 정기 작성</td></tr>
              <tr><td>선발 규모</td><td>전년도 이용자 중 상위 일정 비율</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>우수이용자 추가 지원은 연초 별도 공고로 안내됩니다. 전년도부터 꾸준히 이수하고 일지를 작성해야 합니다.</div>
        </div>
      </section>
    </>
  );
}

export const 평생교육이용권평생교육이용권지원금우수이용자70만원SpokeContent: SpokeData = {
  h1: '평생교육이용권 지원금 35만원 — 우수이용자 70만원 추가 조건',
  breadcrumb: '평생교육이용권지원금우수이용자70만원',
  description: '평생교육이용권 기본 지원금 35만 원과 우수이용자 추가 지원 70만 원의 조건을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '우수 이용자 추가 지원 70만 원은 어떻게 받나요?',
      a: '기본 이용권(35만 원)을 성실히 사용하고 학습 결과를 제출하면 우수 이용자로 선정되어 추가 35만 원을 받을 수 있습니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '우수 이용자 선정 기준은 무엇인가요?',
      a: '강좌 이수율, 학습 결과보고서 제출 여부, 담당자 평가 등이 반영됩니다. 강좌를 성실히 완료하는 것이 핵심입니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '기본 이용권 35만 원을 다 써야 추가 지원을 받나요?',
      a: '네. 기본 이용권 사용 실적이 있어야 추가 지원 심사 대상이 됩니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '추가 지원은 언제 지급되나요?',
      a: '우수 이용자 선정 후 추가 이용권 형태로 지급됩니다. 지급 시기는 공고별로 상이합니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '이용권으로 받은 지원금에 세금이 부과되나요?',
      a: '교육 목적 지원금으로 일반적으로 과세 대상이 아닙니다. 다만 구체적인 세금 문제는 세무사 상담을 권장합니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    }
  ],
  sources: [
    { name: '국가평생교육진흥원', url: 'https://www.nile.or.kr' },
  ],
};
