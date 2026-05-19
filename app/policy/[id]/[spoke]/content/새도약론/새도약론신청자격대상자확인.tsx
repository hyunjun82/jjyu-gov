import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>새도약론은 <strong>2018년 6월 19일 이전 연체 발생</strong> 후 채무조정을 거쳐 현재도 잔여채무를 갚고 있는 분들을 위한 저금리 특례대출입니다. 아래 3가지 요건을 모두 충족해야 합니다.</p></div>
      <section className="detail-card" id="req"><h2 className="detail-card-head">신청 자격 3가지 요건</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>요건</th><th>기준</th></tr></thead><tbody><tr><td>연체 발생 시점</td><td>2018년 6월 19일 이전 최초 연체</td></tr><tr><td>채무조정 이행</td><td>신용회복위원회·법원 채무조정 이행 중</td></tr><tr><td>이행 기간</td><td>채무조정 이행 6개월 이상 경과</td></tr></tbody></table><div className="info-box" style={{marginTop:12}}>세 가지 모두 충족해야 신청 가능합니다. 하나라도 해당 안 되면 새도약론 대상이 아닙니다.</div></div></section>
      <section className="detail-card" id="confirm"><h2 className="detail-card-head">대상자 여부 확인 방법</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>방법</th><th>경로</th></tr></thead><tbody><tr><td>온라인 확인</td><td>서민금융진흥원(kinfa.or.kr) → 새도약론 안내</td></tr><tr><td>전화 상담</td><td>서민금융콜센터 1600-5500</td></tr><tr><td>방문 상담</td><td>서민금융통합지원센터 (전국 50여 곳)</td></tr></tbody></table></div></section>
      <section className="detail-card" id="limit"><h2 className="detail-card-head">대출 조건 요약</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>이행 기간</th><th>대출 한도</th><th>금리</th></tr></thead><tbody><tr><td>6~11개월</td><td>300만 원</td><td>연 4.0%</td></tr><tr><td>12~23개월</td><td>1,000만 원</td><td>연 3.8%</td></tr><tr><td>24~35개월</td><td>1,500만 원</td><td>연 3.5%</td></tr><tr><td>36개월 이상</td><td>1,500만 원</td><td>연 3.0%</td></tr></tbody></table></div></section>
    </>
  );
}

export const 새도약론새도약론신청자격대상자확인SpokeContent: SpokeData = {
  h1: '새도약론 신청자격 — 대상자 여부 확인 방법',
  breadcrumb: '새도약론신청자격대상자확인',
  description: '새도약론 신청 자격(2018년 이전 연체, 채무조정 이행 중)과 대상자 여부 확인 방법을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '새도약론 신청 자격은 어떻게 되나요?',
      a: '새도약기금에서 채무 조정을 받은 차주가 재기 자금 목적으로 신청하는 대출입니다. 일반 신용 대출과 다르게 새출발기금·새도약기금 수혜자가 대상입니다.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    },
    {
      q: '새도약론과 새출발기금의 차이는 무엇인가요?',
      a: '새출발기금은 코로나 피해 자영업자·소상공인 채무조정 전용입니다. 새도약론은 조정 후 재기를 위한 대출 상품입니다.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    },
    {
      q: '신청은 어디서 하나요?',
      a: '새도약기금 홈페이지(saedoyak.or.kr) 또는 취급 금융기관 창구에서 신청 가능합니다.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    },
    {
      q: '신청 자격 여부를 온라인으로 확인할 수 있나요?',
      a: '새도약기금 홈페이지에서 자격 조회 서비스를 제공합니다. 공인인증서 로그인 후 본인 해당 여부를 확인하세요.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    },
    {
      q: '채무조정 중인데 새도약론도 받을 수 있나요?',
      a: '채무조정이 완료된 이후 재기 자금 용도로 신청 가능합니다. 진행 중에는 신청이 어렵습니다.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    }
  ],
  sources: [
    { name: '새도약기금', url: 'https://www.saedoyak.or.kr' },
  ],
};
