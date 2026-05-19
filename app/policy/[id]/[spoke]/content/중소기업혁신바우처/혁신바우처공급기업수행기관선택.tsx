import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>혁신바우처 신청 후 선정되면 <strong>혁신플랫폼(mssmiv.com)의 공급기업 리스트</strong>에서 원하는 수행기관을 직접 선택해 계약합니다. 컨설팅·기술지원·마케팅 분야별로 기관이 구분됩니다.</p></div>
      <section className="detail-card" id="list"><h2 className="detail-card-head">공급기업 선택 절차</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>단계</th><th>내용</th></tr></thead><tbody><tr><td>① 플랫폼 로그인</td><td>mssmiv.com → 수요기업 로그인</td></tr><tr><td>② 분야 선택</td><td>컨설팅·기술지원·마케팅 중 선택</td></tr><tr><td>③ 공급기업 검색</td><td>지역·분야·평가 점수 기준 필터</td></tr><tr><td>④ 견적 요청</td><td>공급기업에 서비스 견적 요청</td></tr><tr><td>⑤ 계약 체결</td><td>플랫폼 내 전자계약</td></tr></tbody></table></div></section>
      <section className="detail-card" id="tip"><h2 className="detail-card-head">선택 시 주의사항</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>주의</th></tr></thead><tbody><tr><td>평가 점수 확인</td><td>이전 수행 실적·만족도 점수 확인</td></tr><tr><td>분야 일치 여부</td><td>바우처 서비스 분야와 기관 전문 분야 일치 필수</td></tr><tr><td>허위 기관</td><td>미등록 브로커 주의 - 반드시 플랫폼 내 등록 기관 선택</td></tr></tbody></table></div></section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '혁신바우처공급기업수행기관선택',
  breadcrumb: '혁신바우처공급기업수행기관선택',
  title: '혁신바우처 공급기업·수행기관 어떻게 선택하나',
  description: '혁신바우처 공급기업 리스트 확인 방법과 수행기관 선정 절차, 계약 방법을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 중소기업혁신바우처혁신바우처공급기업수행기관선택SpokeContent };
