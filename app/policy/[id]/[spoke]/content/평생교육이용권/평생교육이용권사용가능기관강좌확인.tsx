import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>평생교육이용권은 <strong>lllcard.kr</strong>(평생교육이용권 공식 홈페이지)에서 지역·분야별로
        제휴 기관과 강좌를 검색할 수 있습니다. 자격증·어학·예체능·인문학 등 다양한 분야가 포함됩니다.</p>
      </div>
      <section className="detail-card" id="how">
        <h2 className="detail-card-head">사용 기관 검색 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>① 홈페이지 접속</td><td>lllcard.kr → 이용기관 검색</td></tr>
              <tr><td>② 지역 선택</td><td>시·도 / 시·군·구 선택</td></tr>
              <tr><td>③ 분야 선택</td><td>어학·IT·예체능·자격증 등</td></tr>
              <tr><td>④ 기관 방문 또는 연락</td><td>제휴 기관에 수강 신청</td></tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="detail-card" id="available">
        <h2 className="detail-card-head">사용 가능·불가 강좌</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>가능</th><th>불가</th></tr></thead>
            <tbody>
              <tr><td>어학(영어·중국어 등)</td><td>학원 입시 강좌</td></tr>
              <tr><td>컴퓨터·IT 자격증</td><td>대학 등록금</td></tr>
              <tr><td>요리·제빵·꽃꽂이</td><td>학교 교육과정 수업</td></tr>
              <tr><td>요가·필라테스·수영</td><td>도박·주류 관련</td></tr>
              <tr><td>인문학·역사·글쓰기</td><td>해외 연수</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 평생교육이용권평생교육이용권사용가능기관강좌확인SpokeContent: SpokeData = {
  h1: '평생교육이용권 사용 가능한 기관·강좌 확인 방법',
  breadcrumb: '평생교육이용권사용가능기관강좌확인',
  description: '평생교육이용권(바우처)을 쓸 수 있는 기관과 강좌를 찾는 방법, 사용 불가 강좌를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '평생교육이용권을 어디서 사용할 수 있나요?',
      a: '국가평생교육진흥원이 지정한 등록 기관에서만 사용 가능합니다. 문화센터, 직업훈련기관, 평생학습관 등이 포함됩니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '사용 가능한 기관은 어떻게 찾나요?',
      a: '국가평생교육진흥원 홈페이지(nile.or.kr) 또는 평생학습계좌제(llip.nile.or.kr)에서 지역별·분야별 검색이 가능합니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '온라인 강좌도 사용 가능한가요?',
      a: '지정된 온라인 플랫폼 강좌에도 사용이 가능합니다. 단, 모든 온라인 강의가 되는 것은 아니므로 기관 인증 여부를 확인하세요.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '사용 기한은 얼마나 되나요?',
      a: '발급 연도 내에 사용해야 하며, 통상 12월 말까지입니다. 미사용 잔액은 이월되지 않으니 기한 내 사용하세요.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    },
    {
      q: '이용권으로 등록금 전액을 낼 수 있나요?',
      a: '강좌 수강료 일부 지원 방식이며, 고가 강좌는 본인 부담이 추가될 수 있습니다. 이용권 잔액 범위 내에서만 사용 가능합니다.',
      source: '국가평생교육진흥원',
      sourceUrl: 'https://www.nile.or.kr',
    }
  ],
  sources: [
    { name: '국가평생교육진흥원', url: 'https://www.nile.or.kr' },
  ],
};
