import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>새도약기금의 <strong>채무 소각</strong>은 장기 연체 채권을 기금이 매입한 후, 채무자가 <strong>원금의 5~10%만 납부하면 나머지 채무를 탕감</strong>해주는 제도입니다. 새도약론과는 다른 별도 제도입니다.</p></div>
      <section className="detail-card" id="sogage"><h2 className="detail-card-head">소각 절차</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>단계</th><th>내용</th></tr></thead><tbody><tr><td>① 채권 매입</td><td>새도약기금이 금융회사로부터 연체 채권 일괄 매입</td></tr><tr><td>② 채무조정 제안</td><td>채무자에게 감면 조건 안내 (별도 신청 없이 통보)</td></tr><tr><td>③ 일부 납부</td><td>원금의 5~10% 납부</td></tr><tr><td>④ 잔여 소각</td><td>나머지 원금·이자 전액 탕감</td></tr></tbody></table></div></section>
      <section className="detail-card" id="target"><h2 className="detail-card-head">소각 대상 채권 조건</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>기준</th></tr></thead><tbody><tr><td>연체 기간</td><td>5년 이상 장기 연체</td></tr><tr><td>채무자 소득</td><td>중위소득 125% 이하</td></tr><tr><td>채권 유형</td><td>협약 금융회사 보유 채권</td></tr></tbody></table><div className="info-box" style={{marginTop:12}}>소각 대상 해당 여부는 새도약기금(newleap.or.kr) 또는 신용회복위원회(1600-5500)에서 확인 가능합니다.</div></div></section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '새도약론소각채무탕감조건',
  breadcrumb: '새도약론소각채무탕감조건',
  title: '새도약론 소각 의미 — 실제 채무 탕감 조건',
  description: '새도약기금의 채무 소각(탕감) 조건, 5% 이행 시 나머지 감면 내용, 소각 대상 채권을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 새도약론새도약론소각채무탕감조건SpokeContent };
