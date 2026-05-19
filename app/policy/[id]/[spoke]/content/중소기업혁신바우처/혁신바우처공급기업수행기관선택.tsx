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

export const 중소기업혁신바우처혁신바우처공급기업수행기관선택SpokeContent: SpokeData = {
  h1: '혁신바우처 공급기업·수행기관 어떻게 선택하나',
  breadcrumb: '혁신바우처공급기업수행기관선택',
  description: '혁신바우처 공급기업 리스트 확인 방법과 수행기관 선정 절차, 계약 방법을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '공급기업이란 무엇인가요?',
      a: '혁신바우처 지원금으로 서비스를 제공하는 전문기관입니다. 중소벤처기업부가 심사·등록한 기관만 이용 가능합니다.',
      source: '중소기업 혁신바우처 플랫폼',
      sourceUrl: 'https://voucher.smtech.go.kr',
    },
    {
      q: '공급기업 목록은 어디서 확인하나요?',
      a: '혁신바우처 플랫폼(voucher.smtech.go.kr)에서 서비스 분야·지역별로 검색할 수 있습니다.',
      source: '중소기업 혁신바우처 플랫폼',
      sourceUrl: 'https://voucher.smtech.go.kr',
    },
    {
      q: '공급기업 선택 시 주의사항은 무엇인가요?',
      a: '서비스 계약 전에 반드시 바우처 플랫폼 내 협약 체결 절차를 완료해야 합니다. 미등록 기관 이용은 지원금 사용이 불가합니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '공급기업을 중간에 변경할 수 있나요?',
      a: '정당한 사유가 있으면 담당기관 승인 후 변경이 가능합니다. 자의적 변경은 불가합니다.',
      source: '중소기업 혁신바우처 플랫폼',
      sourceUrl: 'https://voucher.smtech.go.kr',
    },
    {
      q: '공급기업이 서비스를 제대로 안 하면 어떻게 되나요?',
      a: '플랫폼 내 분쟁 조정을 신청하거나 담당기관에 민원을 제기할 수 있습니다. 허위·부실 서비스 기관은 등록 취소됩니다.',
      source: '중소기업 혁신바우처 플랫폼',
      sourceUrl: 'https://voucher.smtech.go.kr',
    }
  ],
  sources: [
    { name: '중소기업 혁신바우처 플랫폼', url: 'https://voucher.smtech.go.kr' },
  ],
};
