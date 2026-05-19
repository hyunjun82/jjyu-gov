import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box"><p>중소기업혁신바우처는 제조 중소기업에 컨설팅·기술지원·마케팅을 묶음 지원하는 사업으로, 기업당 <strong>최대 5,000만 원</strong>을 지원합니다. 2026년 1차는 11~12월, 2차는 2~3월에 공고됩니다.</p></div>
      <section className="detail-card" id="schedule"><h2 className="detail-card-head">2026년 공고 일정</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>차수</th><th>공고 시기</th><th>신청 기간</th></tr></thead><tbody><tr><td>1차 (2026년분)</td><td>2025년 11월</td><td>2025.11.12 ~ 12.02</td></tr><tr><td>2차 (2026년분)</td><td>2026년 2월</td><td>2026.02.27 ~ 03.13</td></tr><tr><td>3차 (추가)</td><td>하반기 별도 공고</td><td>공고 후 확인</td></tr></tbody></table></div></section>
      <section className="detail-card" id="eligibility"><h2 className="detail-card-head">신청 자격</h2><div className="detail-card-body"><table className="compare-table"><thead><tr><th>항목</th><th>기준</th></tr></thead><tbody><tr><td>업종</td><td>제조업 영위 중소기업</td></tr><tr><td>규모</td><td>중소기업기본법상 중소기업</td></tr><tr><td>제외</td><td>부동산·금융·유흥업 등 일부 업종</td></tr><tr><td>자부담</td><td>20~30% (비수도권 인구감소지역 우대)</td></tr></tbody></table><div className="info-box" style={{marginTop:12}}>mssmiv.com(혁신플랫폼)에서 자격 확인 후 신청.</div></div></section>
    </>
  );
}

export const 중소기업혁신바우처혁신바우처공고신청자격지원금액SpokeContent: SpokeData = {
  h1: '혁신바우처 2·3차 공고 신청자격과 지원 금액',
  breadcrumb: '혁신바우처공고신청자격지원금액',
  description: '중소기업혁신바우처 2026년 2·3차 공고 일정, 신청 자격, 최대 5,000만 원 지원 내용을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '혁신바우처 신청 자격은 어떻게 되나요?',
      a: '중소기업기본법상 중소기업으로서 업력, 매출 등 공고별 기준을 충족해야 합니다. 일반형·재기형으로 나뉘며 자격 기준이 다릅니다.',
      source: '중소벤처기업부·중소기업통합정보',
      sourceUrl: 'https://www.smes.go.kr',
    },
    {
      q: '지원 금액은 얼마인가요?',
      a: '일반형은 최대 3,000만 원(정부 70% 지원), 재기형은 최대 1,500만 원입니다. 기업 자부담이 필요합니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '공고는 어디서 확인하나요?',
      a: '중소기업 혁신바우처 플랫폼(voucher.smtech.go.kr) 또는 중소기업통합정보(smes.go.kr)에서 확인하세요.',
      source: '중소기업 혁신바우처 플랫폼',
      sourceUrl: 'https://voucher.smtech.go.kr',
    },
    {
      q: '연간 몇 차례 공고가 나나요?',
      a: '통상 연 2~3회 공고됩니다. 예산 소진 시 조기 마감되므로 공고 첫날 신청을 권장합니다.',
      source: '중소벤처기업부',
      sourceUrl: 'https://www.mss.go.kr',
    },
    {
      q: '지원금을 어떤 서비스에 사용할 수 있나요?',
      a: '마케팅·컨설팅·기술개발·인력관리·정보화 등 경영 혁신 서비스에 사용 가능합니다. 공급기업 목록에서 선택해야 합니다.',
      source: '중소기업 혁신바우처 플랫폼',
      sourceUrl: 'https://voucher.smtech.go.kr',
    }
  ],
  sources: [
    { name: '중소기업 혁신바우처 플랫폼', url: 'https://voucher.smtech.go.kr' },
  ],
};
