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

export const 중소기업혁신바우처혁신바우처사업계획서심사기준SpokeContent: SpokeData = {
  h1: '혁신바우처 사업계획서 핵심 항목과 심사 기준',
  breadcrumb: '혁신바우처사업계획서심사기준',
  description: '혁신바우처 신청 시 제출하는 사업계획서 구성 항목, 심사 배점, 고득점 작성 요령을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '사업계획서에 무엇을 써야 하나요?',
      a: '현재 기업의 문제점, 바우처 서비스를 통한 해결 방안, 기대 성과, 서비스 활용 계획 등을 구체적으로 기술합니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '심사 항목은 무엇인가요?',
      a: '사업 타당성, 성장 가능성, 서비스 선택의 적절성, 자금 집행 계획 등이 주요 심사 항목입니다.',
      source: '중소벤처기업부 혁신바우처',
      sourceUrl: 'https://voucher.smtech.go.kr',
    },
    {
      q: '사업계획서를 잘 쓰면 가산점이 있나요?',
      a: '심사 평가에서 좋은 점수를 받아 선정 가능성이 높아집니다. 구체적·정량적으로 목표를 기술하는 것이 유리합니다.',
      source: '중소기업 혁신바우처 플랫폼',
      sourceUrl: 'https://voucher.smtech.go.kr',
    },
    {
      q: '외부 컨설팅 업체의 도움을 받아 써도 되나요?',
      a: '가능하지만, 허위 내용 기재 시 선정 취소 및 환수 처분이 될 수 있습니다. 실제 기업 현황에 맞게 작성해야 합니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '탈락 후 재신청이 가능한가요?',
      a: '다음 공고에 재신청이 가능합니다. 탈락 사유를 확인하고 사업계획서를 보완하는 것이 좋습니다.',
      source: '중소기업 혁신바우처 플랫폼',
      sourceUrl: 'https://voucher.smtech.go.kr',
    }
  ],
  sources: [
    { name: '중소기업 혁신바우처 플랫폼', url: 'https://voucher.smtech.go.kr' },
  ],
};
