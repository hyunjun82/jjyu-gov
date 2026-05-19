import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>TIPS는 단일 프로그램이 아닙니다. <strong>일반 TIPS</strong>(초기), <strong>포스트 TIPS</strong>(TIPS 졸업 후), <strong>딥테크 TIPS</strong>(특화 분야), <strong>글로벌 TIPS</strong>(해외 진출 스타트업) 등 여러 트랙이 있습니다.</p></div>
      <section className="detail-card" id="tracks"><h2 className="detail-card-head">TIPS 트랙별 비교</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>트랙</th><th>대상</th><th>지원 규모</th><th>특징</th></tr></thead><tbody><tr><td>일반 TIPS</td><td>창업 7년 이내 초기 스타트업</td><td>R&D 5억 + 사업화 2억</td><td>가장 기본 트랙</td></tr><tr><td>포스트 TIPS</td><td>TIPS 종료 후 성장 기업</td><td>추가 매칭</td><td>후속 성장 지원</td></tr><tr><td>딥테크 TIPS</td><td>AI·바이오·소재 등 특화</td><td>별도 한도</td><td>기술 집중 분야</td></tr><tr><td>글로벌 TIPS</td><td>해외 법인·글로벌 타겟</td><td>해외 마케팅 강화</td><td>글로벌 진출 지원</td></tr><tr><td>스케일업 TIPS</td><td>시리즈A 이후 스타트업</td><td>더 큰 규모</td><td>후기 단계</td></tr></tbody></table></div></section>
      <section className="detail-card" id="choose"><h2 className="detail-card-head">트랙 선택 가이드</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>내 상황</th><th>적합 트랙</th></tr></thead><tbody><tr><td>초기 스타트업, 첫 TIPS 도전</td><td>일반 TIPS</td></tr><tr><td>이미 TIPS 받았고 후속 필요</td><td>포스트 TIPS</td></tr><tr><td>AI·바이오 딥테크 분야</td><td>딥테크 TIPS</td></tr><tr><td>해외 시장 진출 계획 있음</td><td>글로벌 TIPS</td></tr></tbody></table></div></section>
    </>
  );
}

export const 팁스TIPS팁스프로그램종류트랙차이SpokeContent: SpokeData = {
  h1: '팁스 프로그램 종류 — 일반·포스트·글로벌 트랙 차이',
  breadcrumb: '팁스프로그램종류트랙차이',
  description: 'TIPS 일반·포스트·딥테크·글로벌 등 다양한 트랙의 대상과 지원 규모 차이를 정리합니다.',
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
