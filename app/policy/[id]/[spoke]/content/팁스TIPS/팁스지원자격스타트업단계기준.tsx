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

const spokeData: SpokeData = {
  slug: '팁스지원자격스타트업단계기준',
  breadcrumb: '팁스지원자격스타트업단계기준',
  title: 'TIPS 지원자격 — 스타트업 단계별 기준',
  description: 'TIPS 프로그램 신청 자격인 업력·기술력·운영사 투자 조건을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 팁스TIPS팁스지원자격스타트업단계기준SpokeContent };
