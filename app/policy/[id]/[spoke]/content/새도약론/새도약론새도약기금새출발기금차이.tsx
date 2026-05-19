import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>이름이 비슷해 헷갈리지만 세 제도는 완전히 다릅니다. <strong>새도약론 = 저금리 대출</strong>, <strong>새도약기금 = 장기연체 채권 매입·소각</strong>, <strong>새출발기금 = 코로나 피해 채무 조정</strong>입니다.</p></div>
      <section className="detail-card" id="compare"><h2 className="detail-card-head">세 제도 핵심 비교</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>새도약론</th><th>새도약기금</th><th>새출발기금</th></tr></thead><tbody><tr><td>성격</td><td>저금리 특례 대출</td><td>채권 일괄 매입·소각</td><td>코로나 피해 채무조정</td></tr><tr><td>대상</td><td>채무조정 이행 중인 분</td><td>장기 연체자(자동 매입)</td><td>코로나 피해 자영업자·소상공인</td></tr><tr><td>신청 방식</td><td>본인 직접 신청</td><td>별도 신청 없음 (자동)</td><td>본인 신청</td></tr><tr><td>주관 기관</td><td>서민금융진흥원</td><td>새도약기금(newleap.or.kr)</td><td>새출발기금(newstartfund.or.kr)</td></tr><tr><td>주요 혜택</td><td>연 3~4% 대출</td><td>원금 감면·소각</td><td>원금 감면·분할 상환</td></tr></tbody></table></div></section>
      <section className="detail-card" id="choose"><h2 className="detail-card-head">내 상황에 맞는 제도는?</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>상황</th><th>해당 제도</th></tr></thead><tbody><tr><td>채무조정 이행 중, 생활자금 필요</td><td>새도약론</td></tr><tr><td>7년 이상 장기 연체 중</td><td>새도약기금 (자동 매입 대기)</td></tr><tr><td>코로나로 인해 대출 연체 발생</td><td>새출발기금</td></tr></tbody></table></div></section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '새도약론새도약기금새출발기금차이',
  breadcrumb: '새도약론새도약기금새출발기금차이',
  title: '새도약론·새도약기금·새출발기금 — 헷갈리는 세 제도 차이',
  description: '새도약론(저금리 대출), 새도약기금(채권 매입·소각), 새출발기금(코로나 피해자 지원) 세 제도의 차이를 명확히 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 새도약론새도약론새도약기금새출발기금차이SpokeContent };
