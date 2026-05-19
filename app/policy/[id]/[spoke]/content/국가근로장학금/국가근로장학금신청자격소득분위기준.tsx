import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국가근로장학금은 <strong>소득 8분위 이하</strong> 대학생이 신청할 수 있습니다.
          학적 요건(재학 중, 성적 기준)도 함께 충족해야 하며, 기초·차상위 계층은 우선 선발합니다.
        </p>
      </div>

      <section className="detail-card" id="income">
        <h2 className="detail-card-head">소득 분위 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>신청 가능</td><td>소득 분위 1~8분위</td></tr>
              <tr><td>우선 선발</td><td>기초생활수급자, 차상위계층 (소득 1~2분위)</td></tr>
              <tr><td>신청 불가</td><td>소득 9~10분위</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            소득 분위는 한국장학재단이 가구 소득·재산을 환산해 산정합니다.
            매 학기 신청 시 소득 분위가 재산정됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="academic">
        <h2 className="detail-card-head">학적 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>요건</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>학적</td><td>국내 대학(교) 재학생 (학부·전문학사)</td></tr>
              <tr><td>성적 기준</td><td>직전 학기 12학점 이상 이수, 100점 만점 기준 C학점(70점) 이상</td></tr>
              <tr><td>예외</td><td>1학년 1학기, 장애학생은 성적 기준 면제</td></tr>
              <tr><td>등록금 납부</td><td>해당 학기 등록 완료 필수</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="restrict">
        <h2 className="detail-card-head">신청 제한 사항</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>제한 유형</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>휴학생</td><td>신청 불가 (복학 후 신청 가능)</td></tr>
              <tr><td>졸업예정자</td><td>학기 내 졸업 예정이면 신청 불가</td></tr>
              <tr><td>근로 병행</td><td>타 교내 근로와 중복 불가</td></tr>
              <tr><td>대학원생</td><td>원칙적으로 학부생 대상 (일부 전문대학원 제외)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            국가장학금 유형 I·II와 동시에 수혜 가능합니다.
            단, 동일 학기 교내·교외 근로 중복 지원은 불가합니다.
          </div>
        </div>
      </section>
    </>
  );
}

export const 국가근로장학금국가근로장학금신청자격소득분위기준SpokeContent: SpokeData = {
  h1: '국가근로장학금 신청 자격 소득 분위 기준과 학적 조건',
  breadcrumb: '국가근로장학금신청자격소득분위기준',
  description: '국가근로장학금 신청 자격인 소득 8분위 이하 기준, 성적 요건, 신청 제한 사항을 정리합니다.',
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
