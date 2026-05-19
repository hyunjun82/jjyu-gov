import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>혁신바우처 사업계획서는 <strong>혁신 필요성, 활용 계획, 기대 효과</strong> 3가지가 핵심입니다. 추상적인 서술보다 <strong>수치·지표 기반의 구체적 목표</strong>를 제시하면 심사에 유리합니다.</p></div>
      <section className="detail-card" id="items"><h2 className="detail-card-head">사업계획서 주요 항목</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>작성 방향</th><th>배점(참고)</th></tr></thead><tbody><tr><td>기업 현황</td><td>업종·매출·인원 등 객관적 사실 기재</td><td>10%</td></tr><tr><td>혁신 필요성</td><td>현재 문제점과 지원 필요 이유 구체화</td><td>30%</td></tr><tr><td>서비스 활용 계획</td><td>어떤 공급기업에서 무엇을 받을지 구체적으로</td><td>35%</td></tr><tr><td>기대 효과·성과 목표</td><td>매출 증가율·비용 절감액 등 수치로</td><td>25%</td></tr></tbody></table></div></section>
      <section className="detail-card" id="tips"><h2 className="detail-card-head">고득점 작성 요령</h2><div className="detail-card-body"><p style={{lineHeight:1.8}}>① 현재 문제를 숫자로 표현 (예: "납기 지연 월 3회 → 0회 목표")<br/>② 활용할 공급기업을 미리 접촉해 서비스 내용을 구체화<br/>③ 기대 효과를 1년·3년 단위로 구분해 작성<br/>④ 비수도권·인구감소지역 기업은 우대 가점 확인</p></div></section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '혁신바우처사업계획서심사기준',
  breadcrumb: '혁신바우처사업계획서심사기준',
  title: '혁신바우처 사업계획서 핵심 항목과 심사 기준',
  description: '혁신바우처 신청 시 제출하는 사업계획서 구성 항목, 심사 배점, 고득점 작성 요령을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 중소기업혁신바우처혁신바우처사업계획서심사기준SpokeContent };
