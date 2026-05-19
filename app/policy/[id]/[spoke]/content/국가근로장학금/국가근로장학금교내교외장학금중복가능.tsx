import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국가근로장학금은 <strong>국가장학금 유형 I·II와 동시에 받을 수 있습니다.</strong>
          단, 교내 근로와 교외 근로는 같은 학기에 중복 신청이 불가하고,
          성적우수 장학금 등 학교 장학금과의 중복은 학교 규정에 따라 다릅니다.
        </p>
      </div>

      <section className="detail-card" id="compat">
        <h2 className="detail-card-head">중복 수혜 가능 여부</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>장학금 종류</th><th>중복 가능 여부</th></tr></thead>
            <tbody>
              <tr><td>국가장학금 유형 I</td><td>가능</td></tr>
              <tr><td>국가장학금 유형 II</td><td>가능</td></tr>
              <tr><td>푸른등대 기부장학금</td><td>가능</td></tr>
              <tr><td>교내 성적우수 장학금</td><td>학교 규정에 따라 상이</td></tr>
              <tr><td>교내 근로 + 교외 근로</td><td>동일 학기 중복 불가</td></tr>
              <tr><td>타 교내 근로 프로그램</td><td>중복 불가</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            학교에서 자체 운영하는 교내 근로 장학금과 국가근로장학금을 동시에 받는 것은 불가합니다.
            학교 장학처에 중복 수혜 가능 여부를 반드시 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="inside-outside">
        <h2 className="detail-card-head">교내 근로 vs 교외 근로 차이</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>교내 근로</th><th>교외 근로</th></tr></thead>
            <tbody>
              <tr><td>근무 장소</td><td>소속 대학 내 부서</td><td>공공기관·사회적기업 등</td></tr>
              <tr><td>시간당 단가</td><td>10,320원</td><td>12,790원</td></tr>
              <tr><td>배정 방식</td><td>학교에서 부서 배정</td><td>한재단이 기관 연결</td></tr>
              <tr><td>동시 신청</td><td colspan={2} style={{textAlign:'center'}}>불가 (둘 중 하나만 선택)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="tip">
        <h2 className="detail-card-head">중복 수혜 전략</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>상황</th><th>추천</th></tr></thead>
            <tbody>
              <tr><td>학교 생활과 병행 편의</td><td>교내 근로 선택 (이동 시간 절약)</td></tr>
              <tr><td>시간당 수입 극대화</td><td>교외 근로 선택 (12,790원)</td></tr>
              <tr><td>국가장학금 미수혜</td><td>국가장학금 + 국가근로장학금 동시 신청</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            학기당 수령 가능한 국가근로장학금은 최대 시간 한도에 따라 결정됩니다.
            국가장학금과 함께 신청하면 등록금 부담을 추가로 줄일 수 있습니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const 국가근로장학금국가근로장학금교내교외장학금중복가능SpokeContent: SpokeData = {
  h1: '국가근로장학금 교내 교외 다른 장학금과 중복 가능한가',
  breadcrumb: '국가근로장학금교내교외장학금중복가능',
  description: '국가근로장학금과 국가장학금 유형 I·II 중복 수혜 여부, 교내·교외 근로 동시 신청 불가 기준을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '국가근로장학금은 어디서 신청하나요?', a: '한국장학재단 홈페이지(kosaf.go.kr) 또는 모바일 앱에서 신청할 수 있습니다. 매 학기 시작 전 신청 기간에 맞춰 접수해야 합니다.', source: '한국장학재단 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
    { q: '근무 시간은 얼마나 되나요?', a: '월 최대 60시간 이내이며, 학업에 지장이 없는 범위에서 교내 또는 교외 기관에서 근무합니다. 시간당 급여는 최저임금 이상이어야 합니다.', source: '한국장학재단 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
    { q: '국가근로장학금을 받으면 다른 장학금도 받을 수 있나요?', a: '국가근로장학금은 성적·소득 연계 장학금(국가장학금 1·2유형)과 중복 수혜가 가능합니다. 다만 학교별 자체 규정을 반드시 확인하세요.', source: '한국장학재단 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
    { q: '소득분위 기준이 어떻게 되나요?', a: '소득분위 1~8구간 학생이 신청 가능합니다. 학자금 지원 소득분위는 금융정보·재산 등 가구 소득을 바탕으로 한국장학재단이 산정합니다.', source: '한국장학재단 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
    { q: '근무지는 학교 안에서만 가능한가요?', a: '교내 근무 외에도 교외 공공기관, 비영리단체, 지역사회 서비스 기관 등에서도 근무할 수 있습니다. 교외 근무지는 재단 승인이 필요합니다.', source: '한국장학재단 공식 안내', sourceUrl: 'https://www.kosaf.go.kr' },
  ],
  sources: [{ name: '한국장학재단 공식 안내', url: 'https://www.kosaf.go.kr' }],
};
