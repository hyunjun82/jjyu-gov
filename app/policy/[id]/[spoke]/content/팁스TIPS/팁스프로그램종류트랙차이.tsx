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

const spokeData: SpokeData = {
  slug: '팁스프로그램종류트랙차이',
  breadcrumb: '팁스프로그램종류트랙차이',
  title: '팁스 프로그램 종류 — 일반·포스트·글로벌 트랙 차이',
  description: 'TIPS 일반·포스트·딥테크·글로벌 등 다양한 트랙의 대상과 지원 규모 차이를 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 팁스TIPS팁스프로그램종류트랙차이SpokeContent };
