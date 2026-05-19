import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>실업크레딧을 신청하면 정부가 국민연금 보험료의 <strong>75%를 최대 12개월 지원</strong>합니다. 신청하지 않으면 구직급여 기간 중 국민연금 납부가 중단되어 <strong>나중에 받을 연금액이 줄어듭니다</strong>.</p></div>
      <section className="detail-card" id="benefit"><h2 className="detail-card-head">신청 시 혜택</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>내용</th></tr></thead><tbody><tr><td>지원 비율</td><td>보험료의 75% 정부 지원</td></tr><tr><td>본인 부담</td><td>보험료의 25%</td></tr><tr><td>기준 소득</td><td>실직 전 3개월 평균 소득(상한 70만 원)</td></tr><tr><td>최대 지원 기간</td><td>생애 최대 12개월</td></tr></tbody></table></div></section>
      <section className="detail-card" id="no-apply"><h2 className="detail-card-head">신청 안 하면 어떻게 되나</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>상황</th><th>결과</th></tr></thead><tbody><tr><td>구직급여 기간 중 미신청</td><td>해당 기간 국민연금 미납으로 처리</td></tr><tr><td>미납 기간 누적 시</td><td>노후 연금 수령액 감소</td></tr><tr><td>추후 소급 신청</td><td>불가. 구직급여 종료 다음 달 15일까지만 가능</td></tr></tbody></table><div className="info-box" style={{marginTop:12}}>구직급여를 받는 중이라면 거의 무조건 신청하는 것이 유리합니다. 본인 부담 25%도 나중에 연금으로 돌아옵니다.</div></div></section>
    </>
  );
}

export const 실업크레딧실업크레딧이득안하면어떻게SpokeContent: SpokeData = {
  h1: '실업크레딧 신청하면 이득인가 — 안 하면 어떻게 되나',
  breadcrumb: '실업크레딧이득안하면어떻게',
  description: '실업크레딧 신청 시 국민연금 보험료 75% 지원 혜택과 신청하지 않았을 때의 불이익을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '실업크레딧을 신청하지 않으면 어떻게 되나요?',
      a: '구직급여를 받는 기간에 국민연금 보험료를 내지 않아 납부 기간이 단절됩니다. 노후에 국민연금 수령액이 줄어들 수 있습니다.',
      source: '국민연금공단',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '실업크레딧은 얼마나 이득인가요?',
      a: '보험료의 75%를 국가가 지원합니다. 본인 부담은 25%에 불과하므로 적은 돈으로 연금 가입 기간을 유지할 수 있습니다.',
      source: '국민연금공단 실업크레딧 안내',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '구직급여를 받지 않으면 실업크레딧도 못 받나요?',
      a: '네. 실업크레딧은 구직급여(실업급여) 수급자만 신청할 수 있습니다. 구직급여 없이는 신청 자격이 없습니다.',
      source: '국민연금공단',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '가입 기간이 얼마나 인정되나요?',
      a: '구직급여 수급 기간(최대 270일)에 맞춰 국민연금 가입 기간이 인정됩니다. 생애 최대 12개월까지 적용 가능합니다.',
      source: '국민연금공단',
      sourceUrl: 'https://www.nps.or.kr',
    },
    {
      q: '신청 안 해도 자동 적용되나요?',
      a: '아닙니다. 반드시 본인이 직접 신청해야 합니다. 고용센터 또는 국민연금공단에서 신청 가능합니다.',
      source: '국민연금공단',
      sourceUrl: 'https://www.nps.or.kr',
    }
  ],
  sources: [
    { name: '국민연금공단', url: 'https://www.nps.or.kr' },
  ],
};
