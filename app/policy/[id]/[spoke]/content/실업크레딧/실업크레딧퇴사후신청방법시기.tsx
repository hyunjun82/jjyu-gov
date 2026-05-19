import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>실업크레딧은 <strong>구직급여 수급 기간 중</strong>에만 신청할 수 있습니다. <strong>구직급여 종료일이 속하는 달의 다음 달 15일</strong>이 신청 마감입니다. 수급 중 국민연금공단 또는 고용센터에서 신청합니다.</p></div>
      <section className="detail-card" id="when"><h2 className="detail-card-head">신청 가능 시기</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>내용</th></tr></thead><tbody><tr><td>신청 가능 기간</td><td>구직급여 수급 기간 중</td></tr><tr><td>신청 마감</td><td>구직급여 종료일 다음 달 15일까지</td></tr><tr><td>소급 신청</td><td>불가</td></tr></tbody></table></div></section>
      <section className="detail-card" id="how"><h2 className="detail-card-head">신청 방법</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>방법</th><th>경로</th></tr></thead><tbody><tr><td>온라인</td><td>국민연금공단 홈페이지(nps.or.kr) → 실업크레딧 신청</td></tr><tr><td>방문</td><td>가까운 국민연금공단 지사 또는 고용센터</td></tr><tr><td>전화</td><td>국민연금공단 콜센터 1355</td></tr></tbody></table><div className="info-box" style={{marginTop:12}}>신청 자격: 구직급여 수급자 중 국민연금 보험료 1개월 이상 납부 이력이 있는 분.</div></div></section>
    </>
  );
}

export const 실업크레딧실업크레딧퇴사후신청방법시기SpokeContent: SpokeData = {
  h1: '퇴사 후 실업크레딧 언제부터 어떻게 신청하나',
  breadcrumb: '실업크레딧퇴사후신청방법시기',
  description: '퇴사 후 구직급여 수급 기간 중 실업크레딧 신청 시기, 방법, 신청처를 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '퇴사 후 언제까지 신청해야 하나요?',
      a: '구직급여 신청 후 고용센터 수급자격 인정 이후에 신청할 수 있습니다. 구직급여 수급 중에 신청하면 됩니다.',
      source: '국민연금공단·고용노동부',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '신청은 어디서 하나요?',
      a: '가까운 국민연금공단 지사 또는 고용센터에서 신청 가능합니다. 온라인(nps.or.kr)으로도 신청할 수 있습니다.',
      source: '국민연금공단',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '필요한 서류는 무엇인가요?',
      a: '신분증과 고용보험 수급자격 확인서(고용센터 발급)가 필요합니다. 국민연금 가입 이력이 확인되면 별도 서류가 줄어들 수 있습니다.',
      source: '국민연금공단',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '퇴직 후 바로 신청해야 하나요?',
      a: '구직급여 수급자격 인정 이후에 신청해야 합니다. 구직급여 신청을 먼저 고용센터에서 하고, 수급자격이 나오면 실업크레딧 신청이 가능합니다.',
      source: '국민연금공단',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '본인 부담 보험료는 얼마인가요?',
      a: '인정소득(실직 전 평균 소득 기준)의 9% × 25%입니다. 최대 인정소득은 70만 원으로, 최대 본인 부담액은 월 15,750원 수준입니다.',
      source: '국민연금공단 실업크레딧 안내',
      sourceUrl: 'https://www.nps.or.kr',
    }
  ],
  sources: [
    { name: '국민연금공단', url: 'https://www.nps.or.kr' },
  ],
};
