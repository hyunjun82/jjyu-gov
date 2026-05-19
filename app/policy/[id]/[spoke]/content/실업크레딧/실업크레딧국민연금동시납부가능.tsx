import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>실업크레딧을 신청하면 정부가 보험료 75%를 내고 본인이 25%만 납부합니다. 이 기간에도 <strong>국민연금 가입 기간으로 인정</strong>됩니다. 별도로 추가 납부를 원하면 임의계속가입도 함께 신청 가능합니다.</p></div>
      <section className="detail-card" id="structure"><h2 className="detail-card-head">실업크레딧 중 보험료 납부 구조</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>내용</th></tr></thead><tbody><tr><td>기준 소득</td><td>실직 전 3개월 평균 소득 (상한 70만 원)</td></tr><tr><td>보험료율</td><td>기준 소득의 9%</td></tr><tr><td>정부 지원</td><td>75% 부담</td></tr><tr><td>본인 부담</td><td>25% (월 약 15,750원 이하)</td></tr></tbody></table></div></section>
      <section className="detail-card" id="extra"><h2 className="detail-card-head">임의계속가입과 병행 가능한가</h2><div className="detail-card-body"><p style={{lineHeight:1.8}}>실업크레딧은 소득 기준 상한이 있어 실제 이전 소득보다 낮게 인정될 수 있습니다. 더 많은 가입 기간·소득을 인정받고 싶다면 <strong>임의계속가입</strong>을 별도로 신청해 더 높은 소득 기준으로 보험료를 납부할 수 있습니다. 단, 임의계속가입 시 정부 지원(75%)은 적용되지 않습니다.</p></div></section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '실업크레딧국민연금동시납부가능',
  breadcrumb: '실업크레딧국민연금동시납부가능',
  title: '실업크레딧 받으면서 국민연금도 따로 납부되나',
  description: '실업크레딧 수급 중 국민연금 보험료가 어떻게 처리되는지, 별도 납부와의 관계를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 실업크레딧실업크레딧국민연금동시납부가능SpokeContent };
