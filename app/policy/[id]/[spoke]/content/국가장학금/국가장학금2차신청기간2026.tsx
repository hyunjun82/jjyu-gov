import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026학년도 2학기 국가장학금 <strong>1차 신청은 2026년 5월 20일부터 6월 중순</strong>까지입니다.
          1차 기간 내 신청하지 못하면 <strong>2차 신청(8~9월)</strong>이 마지막 기회입니다.
          2차는 지원금이 줄어들 수 있으니 1차를 놓치지 마세요.
        </p>
      </div>
      <section className="detail-card" id="schedule">
        <h2 className="detail-card-head">2026학년도 2학기 신청 일정</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>신청 기간</th><th>결과 발표</th></tr></thead>
            <tbody>
              <tr><td>1차 신청</td><td>2026.05.20 ~ 06.중순</td><td>2026년 7월</td></tr>
              <tr><td>2차 신청</td><td>2026.08 ~ 09.초</td><td>2026년 9~10월</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>2차 신청자는 예산 소진 여부에 따라 1차보다 지원금이 적을 수 있습니다. 반드시 1차 신청을 권장합니다.</div>
        </div>
      </section>
      <section className="detail-card" id="apply-way">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>PC 신청</td><td>한국장학재단 홈페이지 (kosaf.go.kr) → 로그인 → 국가장학금 신청</td></tr>
              <tr><td>모바일 신청</td><td>한국장학재단 앱 → 국가장학금 신청</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>신청 시 가족 정보·소득 확인을 위해 부모(또는 배우자)의 공인인증서·금융정보 제공 동의가 필요합니다.</div>
        </div>
      </section>
    </>
  );
}

export const 국가장학금국가장학금2차신청기간2026SpokeContent: SpokeData = {
  h1: '국가장학금 2차 신청기간 언제까지인가',
  breadcrumb: '국가장학금2차신청기간2026',
  description: '2026학년도 2학기 국가장학금 1차·2차 신청기간, 마감일, 주의사항을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년 국가장학금 2차 신청기간은 언제인가요?',
      a: '2026년 2차 신청은 통상 8월 초~9월 초에 진행됩니다. 정확한 일정은 한국장학재단 홈페이지(kstudy.com)에서 확인하세요.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '2차 신청을 1차보다 늦게 해도 불이익이 있나요?',
      a: '직접적 불이익은 없지만, 가구원 정보 제공 미동의 등 서류 문제 처리 기간이 부족해질 수 있습니다. 1차 신청을 추천합니다.',
      source: '한국장학재단 공지',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '재학생도 매학기 신청해야 하나요?',
      a: '네. 국가장학금은 자동 갱신이 아닙니다. 매학기 장학금 신청 기간 내 직접 신청해야 합니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '신입생은 1차에 신청해야 하나요?',
      a: '신입생은 1차 신청이 필수입니다. 2차에도 신청할 수 있지만, 일부 대학은 1차 신청자만 지원하는 경우가 있습니다.',
      source: '한국장학재단 신입생 안내',
      sourceUrl: 'https://www.kstudy.com',
    },
    {
      q: '가구원 정보 제공 동의는 누가 해야 하나요?',
      a: '학생 본인과 부모(혼인한 경우 배우자)가 모두 동의해야 합니다. 동의 기간이 신청 기간과 다를 수 있으니 일정 확인이 필요합니다.',
      source: '한국장학재단',
      sourceUrl: 'https://www.kstudy.com',
    }
  ],
  sources: [
    { name: '한국장학재단', url: 'https://www.kstudy.com' },
  ],
};
