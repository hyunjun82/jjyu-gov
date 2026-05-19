import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년일자리도약장려금은 <strong>5인 이상 우선지원대상기업</strong>이 신청할 수 있습니다.
          청년은 <strong>만 15~34세</strong>여야 하며, 정규직으로 채용한 경우에만 지원받을 수 있습니다.
        </p>
      </div>

      <section className="detail-card" id="corp">
        <h2 className="detail-card-head">기업 자격 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>요건</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>기업 규모</td><td>우선지원대상기업 (중소기업 해당)</td></tr>
              <tr><td>고용보험</td><td>고용보험 가입 사업장</td></tr>
              <tr><td>체불 이력</td><td>임금체불로 명단 공개된 기업 제외</td></tr>
              <tr><td>고용유지 의무</td><td>참여 직전 3개월 내 집단 해고 없어야 함</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            우선지원대상기업은 제조업 500인 이하, 건설업 300인 이하, 서비스업 100인 이하 등 업종별 기준이 다릅니다.
            고용24(work24.go.kr)에서 해당 여부를 확인할 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="youth">
        <h2 className="detail-card-head">채용 청년 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>요건</th><th>기준</th></tr></thead>
            <tbody>
              <tr><td>연령</td><td>만 15~34세 (군필자 최대 39세까지 인정)</td></tr>
              <tr><td>취업 형태</td><td>정규직 신규 채용</td></tr>
              <tr><td>이전 고용</td><td>동일 기업 최근 3개월 내 고용된 적 없어야 함</td></tr>
              <tr><td>우대 대상</td><td>장애인, 고졸 청년, 자립준비청년 등 추가 우대</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="exclude">
        <h2 className="detail-card-head">지원 제외 사업장</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>제외 유형</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>공공기관</td><td>국가·지자체, 공기업, 준정부기관</td></tr>
              <tr><td>임금체불 명단 공개</td><td>고용노동부 명단 공개 기업</td></tr>
              <tr><td>최저임금 위반</td><td>최저임금법 위반 사실 확정 기업</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export const 청년일자리도약장려금청년일자리도약장려금신청자격기업조건SpokeContent: SpokeData = {
  h1: '청년일자리도약장려금 신청 자격 기업 조건과 청년 요건',
  breadcrumb: '청년일자리도약장려금신청자격기업조건',
  description: '청년일자리도약장려금 신청 가능한 기업 요건(우선지원대상기업), 채용 청년 연령(만 15~34세), 지원 제외 사업장을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '청년일자리도약장려금은 어떤 기업에 지급되나요?', a: '5인 이상 우선지원대상기업(중소기업)에서 취업 취약 청년(6개월 이상 실업, 고졸 이하, NEET 등)을 정규직으로 채용한 경우 지원합니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '지원 금액은 얼마인가요?', a: '채용 청년 1인당 최대 월 60만 원씩, 최대 2년(24개월) 동안 지원됩니다. 총 최대 1,440만 원까지 받을 수 있습니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '신청은 어디서 하나요?', a: '고용24(work24.go.kr) 또는 관할 고용센터를 통해 기업이 직접 신청합니다. 채용 후 6개월 이내에 신청해야 합니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '채용 후 바로 신청이 가능한가요?', a: '정규직 채용일로부터 6개월이 지난 후 지원 요건을 충족한 경우에 신청합니다. 6개월 고용 유지가 지급 요건입니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
    { q: '지원금 수령 중 청년이 퇴사하면 어떻게 되나요?', a: '청년이 퇴사하면 해당 월부터 지원이 중단됩니다. 일정 기간 내 재채용하거나 다른 취약청년을 채용하면 계속 지원받을 수 있는 경우가 있습니다.', source: '고용노동부 공식 안내', sourceUrl: 'https://www.moel.go.kr' },
  ],
  sources: [{ name: '고용노동부 공식 안내', url: 'https://www.moel.go.kr' }],
};
