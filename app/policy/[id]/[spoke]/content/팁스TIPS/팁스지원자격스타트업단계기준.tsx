import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>TIPS는 <strong>운영사(VC·액셀러레이터)가 먼저 1억 원 이상 투자</strong>한 스타트업만 신청할 수 있습니다. 창업자가 직접 신청하는 방식이 아니라, <strong>운영사가 추천</strong>하는 구조입니다.</p></div>
      <section className="detail-card" id="req"><h2 className="detail-card-head">신청 자격 요건</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>기준</th></tr></thead><tbody><tr><td>운영사 투자 요건</td><td>TIPS 운영사가 1억 원 이상 투자 또는 투자 예정</td></tr><tr><td>업력</td><td>창업 7년 이내 (예비창업자도 일부 가능)</td></tr><tr><td>기술 분야</td><td>딥테크·AI·바이오·소재 등 기술 기반</td></tr><tr><td>직접 신청</td><td>불가 — 운영사 통해서만 신청</td></tr></tbody></table></div></section>
      <section className="detail-card" id="track"><h2 className="detail-card-head">단계별 트랙</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>트랙</th><th>대상</th><th>지원 규모</th></tr></thead><tbody><tr><td>일반 TIPS</td><td>초기 스타트업 (시드~시리즈A 전)</td><td>R&D 5억 + 사업화 2억</td></tr><tr><td>포스트 TIPS</td><td>TIPS 졸업 후 성장 단계</td><td>추가 지원</td></tr><tr><td>딥테크 TIPS</td><td>특정 기술 분야 특화</td><td>별도 한도</td></tr></tbody></table></div></section>
    </>
  );
}

export const 팁스TIPS팁스지원자격스타트업단계기준SpokeContent: SpokeData = {
  h1: 'TIPS 지원자격 — 스타트업 단계별 기준',
  breadcrumb: '팁스지원자격스타트업단계기준',
  description: 'TIPS 프로그램 신청 자격인 업력·기술력·운영사 투자 조건을 정리합니다.',
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
