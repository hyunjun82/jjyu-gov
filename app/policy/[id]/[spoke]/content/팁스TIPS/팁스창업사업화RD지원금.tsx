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

export const 팁스TIPS팁스창업사업화RD지원금SpokeContent: SpokeData = {
  h1: 'TIPS 창업사업화 R&D 지원금 얼마나 받나',
  breadcrumb: '팁스창업사업화RD지원금',
  description: 'TIPS 프로그램에서 정부가 매칭하는 R&D·창업사업화 지원금 규모와 사용 조건을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: 'TIPS 프로그램 신청 자격은 어떻게 되나요?', a: '창업 7년 이내 기술 기반 스타트업이 대상입니다. TIPS 운영사(엔젤투자자·벤처캐피털)로부터 투자를 받은 경우에 한해 추천 신청이 가능합니다.', source: '중소벤처기업부·TIPS운영사 공식 안내', sourceUrl: 'https://www.jointips.or.kr' },
    { q: 'TIPS 선정 시 지원 금액은 얼마인가요?', a: '운영사 투자금 1억 원 매칭 시 R&D 자금 최대 5억 원이 지원됩니다. 창업사업화·해외마케팅 자금 최대 1억 원이 추가 지원됩니다.', source: '중소벤처기업부·TIPS운영사 공식 안내', sourceUrl: 'https://www.jointips.or.kr' },
    { q: '신청은 어디서 하나요?', a: 'TIPS 공식 홈페이지(jointips.or.kr)에서 운영사 목록 확인 후, 관심 운영사에 직접 IR을 진행해 투자 유치를 통해 신청합니다.', source: '중소벤처기업부·TIPS운영사 공식 안내', sourceUrl: 'https://www.jointips.or.kr' },
    { q: 'R&D 자금 사용 제한이 있나요?', a: '인건비(연구원·개발자), 재료비, 외주개발비, 지식재산권 취득비 등 R&D 관련 비용에만 사용 가능합니다. 사용 내역을 분기별로 보고해야 합니다.', source: '중소벤처기업부·TIPS운영사 공식 안내', sourceUrl: 'https://www.jointips.or.kr' },
    { q: 'TIPS 선정 후 의무사항이 있나요?', a: '선정 후 2년간 연구개발을 수행하고 정기적으로 성과를 보고해야 합니다. 중도 포기 시 지원금 일부를 반환해야 할 수 있습니다.', source: '중소벤처기업부·TIPS운영사 공식 안내', sourceUrl: 'https://www.jointips.or.kr' },
  ],
  sources: [{ name: '중소벤처기업부·TIPS운영사 공식 안내', url: 'https://www.jointips.or.kr' }],
};
