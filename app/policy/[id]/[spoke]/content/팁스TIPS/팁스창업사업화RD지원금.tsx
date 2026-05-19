import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>TIPS 선정 시 정부는 R&D 최대 <strong>5억 원</strong>, 창업사업화 지원 <strong>1억 원</strong>, 해외 마케팅 <strong>1억 원</strong>을 매칭 지원합니다. 민간 투자 1억 원에 정부 지원 최대 <strong>7억 원</strong>이 더해지는 구조입니다.</p></div>
      <section className="detail-card" id="amount"><h2 className="detail-card-head">지원금 구조</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>최대 금액</th><th>기간</th></tr></thead><tbody><tr><td>R&D 지원</td><td>5억 원</td><td>2년</td></tr><tr><td>창업사업화 지원</td><td>1억 원</td><td>2년</td></tr><tr><td>해외 마케팅</td><td>1억 원</td><td>2년</td></tr><tr><td>합계(정부)</td><td>최대 7억 원</td><td>-</td></tr></tbody></table></div></section>
      <section className="detail-card" id="use"><h2 className="detail-card-head">지원금 사용 조건</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>내용</th></tr></thead><tbody><tr><td>R&D 비용</td><td>인건비·재료비·장비 구입 등 연구 직접 비용</td></tr><tr><td>사업화 비용</td><td>시제품 제작·특허·인증·홍보 등</td></tr><tr><td>정산</td><td>분기별 실적 보고 + 연구비 정산</td></tr><tr><td>반환</td><td>목표 미달 시 일부 반환 가능성</td></tr></tbody></table><div className="info-box" style={{marginTop:12}}>2026년 TIPS 예산은 전년 대비 45% 증액. 선정 기회가 확대되었습니다.</div></div></section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '팁스창업사업화RD지원금',
  breadcrumb: '팁스창업사업화RD지원금',
  title: 'TIPS 창업사업화 R&D 지원금 얼마나 받나',
  description: 'TIPS 프로그램에서 정부가 매칭하는 R&D·창업사업화 지원금 규모와 사용 조건을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 팁스TIPS팁스창업사업화RD지원금SpokeContent };
