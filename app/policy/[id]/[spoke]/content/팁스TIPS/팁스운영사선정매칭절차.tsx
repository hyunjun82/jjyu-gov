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

const spokeData: SpokeData = {
  slug: '팁스운영사선정매칭절차',
  breadcrumb: '팁스운영사선정매칭절차',
  title: 'TIPS 운영사 선정 방법과 매칭 절차',
  description: 'TIPS 운영사(VC·액셀러레이터)를 찾고 매칭되는 방법, 운영사 목록 확인 방법을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 팁스TIPS팁스운영사선정매칭절차SpokeContent };
