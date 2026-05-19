import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>TIPS는 창업자가 직접 정부에 신청하는 방식이 아닙니다. <strong>TIPS 운영사(VC·액셀러레이터)</strong>에게 IR을 해서 <strong>투자 유치 후 운영사가 추천</strong>하는 구조입니다. 운영사 목록은 jointips.or.kr에서 확인합니다.</p></div>
      <section className="detail-card" id="process"><h2 className="detail-card-head">운영사 매칭 절차</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>단계</th><th>내용</th></tr></thead><tbody><tr><td>① 운영사 목록 확인</td><td>jointips.or.kr → 운영사 현황 조회</td></tr><tr><td>② IR 자료 준비</td><td>사업계획서·기술 차별점·시장 규모 정리</td></tr><tr><td>③ 운영사 접촉</td><td>이메일·데모데이·네트워킹 행사 활용</td></tr><tr><td>④ 투자 검토</td><td>운영사 내부 심사 (4~8주 소요)</td></tr><tr><td>⑤ 투자 확정·추천</td><td>1억 원 이상 투자 확정 후 TIPS 추천</td></tr><tr><td>⑥ 정부 심사</td><td>창업진흥원 평가 후 최종 선정</td></tr></tbody></table></div></section>
      <section className="detail-card" id="tip"><h2 className="detail-card-head">운영사 선택 시 고려사항</h2><div className="detail-card-body"><p style={{lineHeight:1.8}}>① 내 기술 분야에 전문성 있는 운영사 우선<br/>② 포트폴리오 기업 확인 (유사 분야 성공 사례)<br/>③ 단순 투자 외 멘토링·네트워크 지원 여부 확인</p></div></section>
    </>
  );
}

export const 팁스TIPS팁스운영사선정매칭절차SpokeContent: SpokeData = {
  h1: 'TIPS 운영사 선정 방법과 매칭 절차',
  breadcrumb: '팁스운영사선정매칭절차',
  description: 'TIPS 운영사(VC·액셀러레이터)를 찾고 매칭되는 방법, 운영사 목록 확인 방법을 정리합니다.',
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
