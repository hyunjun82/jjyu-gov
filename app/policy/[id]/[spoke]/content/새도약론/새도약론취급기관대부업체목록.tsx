import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>새도약론은 <strong>서민금융진흥원 및 협약 금융기관</strong>을 통해 신청합니다. 별도 대부업체 목록이 아닌 <strong>서민금융통합지원센터 방문 또는 전화 상담</strong>이 공식 신청 경로입니다.</p></div>
      <section className="detail-card" id="channel"><h2 className="detail-card-head">공식 신청 채널</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>채널</th><th>경로</th></tr></thead><tbody><tr><td>서민금융통합지원센터</td><td>전국 50여 곳 방문 상담 (사전 예약 권장)</td></tr><tr><td>전화 상담</td><td>1600-5500 (서민금융콜센터)</td></tr><tr><td>온라인 안내</td><td>kinfa.or.kr → 새도약론</td></tr></tbody></table><div className="warning-box" style={{marginTop:12}}>새도약론을 '대부업체'를 통해 신청한다는 광고는 사기입니다. 반드시 공식 채널(서민금융진흥원)을 통해 신청하세요.</div></div></section>
      <section className="detail-card" id="docs"><h2 className="detail-card-head">신청 시 필요 서류</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>서류</th><th>발급처</th></tr></thead><tbody><tr><td>신분증</td><td>본인 지참</td></tr><tr><td>채무조정 이행 확인서</td><td>신용회복위원회(ccrs.or.kr)</td></tr><tr><td>소득 증빙 서류</td><td>근로소득자: 근로소득원천징수영수증 / 자영업: 사업소득 확인</td></tr></tbody></table></div></section>
    </>
  );
}

export const 새도약론새도약론취급기관대부업체목록SpokeContent: SpokeData = {
  h1: '새도약론 취급 금융기관·대부업체 목록과 신청처',
  breadcrumb: '새도약론취급기관대부업체목록',
  description: '새도약론을 신청할 수 있는 취급 금융기관과 신청 방법을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '새도약론 취급 기관은 어디인가요?',
      a: '새도약기금 협약 은행·저축은행·카드사 및 일부 서민금융기관이 취급합니다. 홈페이지에서 기관 목록을 확인하세요.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    },
    {
      q: '불법 대부업체를 통한 신청은 위험한가요?',
      a: '네. 새도약론은 공식 취급 기관을 통해서만 신청할 수 있습니다. 비공식 경로를 통한 신청은 사기 피해 위험이 있습니다.',
      source: '금융감독원',
      sourceUrl: 'https://www.fss.or.kr',
    },
    {
      q: '취급 기관별 금리 차이가 있나요?',
      a: '기관별 차이가 있을 수 있습니다. 새도약기금 홈페이지에서 각 기관의 대출 조건을 비교 후 신청하세요.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    },
    {
      q: '기존 거래 은행이 취급 기관이 아니면 어떻게 하나요?',
      a: '다른 취급 기관을 통해 신청해야 합니다. 취급 기관 목록을 먼저 확인 후 방문 또는 온라인 신청하세요.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    },
    {
      q: '취급 기관 창구 방문 없이 온라인으로 신청이 가능한가요?',
      a: '일부 기관은 온라인 신청이 가능하지만 서류 제출·본인 확인을 위해 방문이 필요한 경우도 있습니다.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    }
  ],
  sources: [
    { name: '새도약기금', url: 'https://www.saedoyak.or.kr' },
  ],
};
