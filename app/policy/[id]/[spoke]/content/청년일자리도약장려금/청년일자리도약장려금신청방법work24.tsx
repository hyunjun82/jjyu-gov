import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          청년일자리도약장려금은 <strong>고용24(work24.go.kr)</strong>에서 온라인으로 신청합니다.
          청년 채용 후 <strong>1개월 이내</strong>에 신청해야 하며, 기간을 넘기면 해당 채용 건은 지원받을 수 없습니다.
        </p>
      </div>

      <section className="detail-card" id="step">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>단계</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>1단계</td><td>고용24(work24.go.kr) → 기업 로그인 (공동인증서)</td></tr>
              <tr><td>2단계</td><td>청년일자리도약장려금 → 참여 신청</td></tr>
              <tr><td>3단계</td><td>사업장 정보, 채용 청년 정보 입력</td></tr>
              <tr><td>4단계</td><td>관할 고용센터 심사 (적격 여부 확인)</td></tr>
              <tr><td>5단계</td><td>참여 확정 통보 → 고용 유지 관리</td></tr>
              <tr><td>6단계</td><td>6개월 후 1차 지급 신청 → 12개월 후 2차 지급 신청</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            지급 신청도 고용24에서 진행하며, 각 시점(6개월·12개월)에 별도로 신청해야 합니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="deadline">
        <h2 className="detail-card-head">신청 기한</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>시점</th><th>기한</th></tr></thead>
            <tbody>
              <tr><td>참여 신청</td><td>청년 채용일로부터 1개월 이내</td></tr>
              <tr><td>1차 지급 신청</td><td>6개월 고용 유지 확인 후 3개월 이내</td></tr>
              <tr><td>2차 지급 신청</td><td>12개월 고용 유지 확인 후 3개월 이내</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">준비 서류</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>서류</th><th>비고</th></tr></thead>
            <tbody>
              <tr><td>근로계약서 사본</td><td>정규직 채용 증명</td></tr>
              <tr><td>고용보험 취득 확인서</td><td>고용보험 EDI 자동 연동 가능</td></tr>
              <tr><td>사업자등록증 사본</td><td>최초 신청 시</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            문의: 고용노동부 고객상담센터 ☎ 1350 또는 관할 고용센터 방문
          </div>
        </div>
      </section>
    </>
  );
}

export const 청년일자리도약장려금청년일자리도약장려금신청방법work24SpokeContent: SpokeData = {
  h1: '청년일자리도약장려금 신청 방법 고용24 work24 절차',
  breadcrumb: '청년일자리도약장려금신청방법work24',
  description: '청년일자리도약장려금 고용24(work24.go.kr) 신청 절차, 기한(채용 후 1개월 이내), 준비 서류를 정리합니다.',
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
