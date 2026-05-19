import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          폐업 소상공인 점포 철거비는 소상공인시장진흥공단 희망리턴패키지를 통해
          <strong>최대 600만 원</strong> 한도로 지원받을 수 있습니다.
          3.3㎡(1평)당 20만 원 이내, 임대차 점포에 한해 지원됩니다.
        </p>
      </div>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">지원 금액 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>기준</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>지원 한도</td><td>최대 600만 원 (부가세 제외)</td></tr>
              <tr><td>단가 기준</td><td>전용면적 3.3㎡당 20만 원 이내</td></tr>
              <tr><td>면적 계산</td><td>㎡ → 평 환산 후 소수점 첫째자리에서 올림 처리</td></tr>
              <tr><td>지원 방식</td><td>실제 철거 비용 영수증 기준 정산</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            예시: 전용면적 57㎡ = 17.2평 → 올림 18평 → 18평 × 20만 원 = 360만 원 한도
          </div>
        </div>
      </section>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">지원 대상 및 제외 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>구분</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>지원 대상</td><td>임대차 계약으로 사업장을 운영한 폐업(예정) 소상공인</td></tr>
              <tr><td>폐업일 제한</td><td>2023년 1월 1일 이후 폐업자만 신청 가능</td></tr>
              <tr><td>지원 횟수</td><td>주민등록번호 기준 1회만 가능</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            자가 소유 건물, 무상 임차, 주거용 건축물, 이미 수혜받은 경우는 지원 제외입니다.
            점포 철거 후 동일 장소에서 3년 이내 재창업 시 지원금 환수될 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>온라인 신청</td><td>소상공인24 (sbiz24.kr) → 점포철거비 신청</td></tr>
              <tr><td>전화 문의</td><td>☎1533-0100 (소상공인 통합콜센터)</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

const spokeData: SpokeData = {
  slug: '폐업소상공인점포철거비지원금액',
  breadcrumb: '폐업소상공인점포철거비지원금액',
  title: '폐업 소상공인 점포 철거비 지원 600만원 한도 조건',
  description: '희망리턴패키지 점포철거비 지원은 최대 600만원(3.3㎡당 20만원). 대상 조건, 제외 기준, 신청 방법을 정리합니다.',
  lastUpdated: '2026-05-19',
  content: <Content />,
};

export default spokeData;
export { spokeData as 폐업소상공인채무조정폐업소상공인점포철거비지원금액SpokeContent };
