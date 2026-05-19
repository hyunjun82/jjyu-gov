import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>이름이 비슷해 헷갈리지만 세 제도는 완전히 다릅니다. <strong>새도약론 = 저금리 대출</strong>, <strong>새도약기금 = 장기연체 채권 매입·소각</strong>, <strong>새출발기금 = 코로나 피해 채무 조정</strong>입니다.</p></div>
      <section className="detail-card" id="compare"><h2 className="detail-card-head">세 제도 핵심 비교</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>새도약론</th><th>새도약기금</th><th>새출발기금</th></tr></thead><tbody><tr><td>성격</td><td>저금리 특례 대출</td><td>채권 일괄 매입·소각</td><td>코로나 피해 채무조정</td></tr><tr><td>대상</td><td>채무조정 이행 중인 분</td><td>장기 연체자(자동 매입)</td><td>코로나 피해 자영업자·소상공인</td></tr><tr><td>신청 방식</td><td>본인 직접 신청</td><td>별도 신청 없음 (자동)</td><td>본인 신청</td></tr><tr><td>주관 기관</td><td>서민금융진흥원</td><td>새도약기금(newleap.or.kr)</td><td>새출발기금(newstartfund.or.kr)</td></tr><tr><td>주요 혜택</td><td>연 3~4% 대출</td><td>원금 감면·소각</td><td>원금 감면·분할 상환</td></tr></tbody></table></div></section>
      <section className="detail-card" id="choose"><h2 className="detail-card-head">내 상황에 맞는 제도는?</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>상황</th><th>해당 제도</th></tr></thead><tbody><tr><td>채무조정 이행 중, 생활자금 필요</td><td>새도약론</td></tr><tr><td>7년 이상 장기 연체 중</td><td>새도약기금 (자동 매입 대기)</td></tr><tr><td>코로나로 인해 대출 연체 발생</td><td>새출발기금</td></tr></tbody></table></div></section>
    </>
  );
}

export const 새도약론새도약론새도약기금새출발기금차이SpokeContent: SpokeData = {
  h1: '새도약론·새도약기금·새출발기금 — 헷갈리는 세 제도 차이',
  breadcrumb: '새도약론새도약기금새출발기금차이',
  description: '새도약론(저금리 대출), 새도약기금(채권 매입·소각), 새출발기금(코로나 피해자 지원) 세 제도의 차이를 명확히 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '이 정책의 신청 방법은 무엇인가요?',
      a: '정부24(gov.kr) 또는 해당 기관 홈페이지에서 신청 가능합니다.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    },
    {
      q: '지원 대상 기준은 어떻게 되나요?',
      a: '소득·자산·나이 기준을 충족한 신청자가 대상입니다. 자세한 기준은 해당 기관에 문의하세요.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    },
    {
      q: '지원 금액은 얼마인가요?',
      a: '개인 상황에 따라 다릅니다. 담당 기관에 문의하거나 홈페이지에서 확인하세요.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    },
    {
      q: '다른 지원과 중복 수혜가 가능한가요?',
      a: '일부 지원과 중복이 제한됩니다. 개별 공고를 확인하세요.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    },
    {
      q: '신청 기간은 언제인가요?',
      a: '연간 공고를 통해 신청 기간이 안내됩니다. 해당 기관 홈페이지를 확인하세요.',
      source: '새도약기금',
      sourceUrl: 'https://www.saedoyak.or.kr',
    }
  ],
  sources: [
    { name: '새도약기금', url: 'https://www.saedoyak.or.kr' },
  ],
};
