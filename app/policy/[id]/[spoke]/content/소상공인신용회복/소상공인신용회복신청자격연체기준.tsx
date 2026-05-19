import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          소상공인 신용회복 지원은 <strong>신용회복위원회</strong>를 통해 신청합니다.
          연체가 있는 소상공인과 폐업 후 재기를 원하는 소상공인 모두 신청할 수 있으며,
          채무 이자 감면·분할 상환·상환 유예를 지원합니다.
        </p>
      </div>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">신청 자격</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>요건</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>사업자 형태</td><td>개인사업자 (휴·폐업자 포함), 법인 소상공인</td></tr>
              <tr><td>채무 조건</td><td>금융권 사업자 대출 보유</td></tr>
              <tr><td>소득 기준</td><td>중위소득 125% 이하 or 연 매출 2억 원 이하 소상공인</td></tr>
              <tr><td>폐업자</td><td>폐업 후 채무 상환 어려운 경우도 신청 가능</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            신속 신용회복 지원(2025~2026년 시행): 2020년 1월~2025년 8월 중 소액(5천만 원 이하) 연체 후
            2025년 12월 31일까지 전액 상환한 경우 신용 정보 해제 대상이 될 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="content">
        <h2 className="detail-card-head">지원 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>지원 항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>이자 감면</td><td>연체 이자 감면 또는 면제</td></tr>
              <tr><td>이자율 조정</td><td>높은 금리 → 낮은 금리로 조정</td></tr>
              <tr><td>상환 기간 연장</td><td>분할 상환 기간 연장</td></tr>
              <tr><td>상환 유예</td><td>일정 기간 상환 유예 후 분할 상환</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            신청 문의: ☎1600-5500 (신용회복위원회) / 온라인: www.ccrs.or.kr
          </div>
        </div>
      </section>
    </>
  );
}

export const 소상공인신용회복소상공인신용회복신청자격연체기준SpokeContent: SpokeData = {
  h1: '소상공인 신용회복 신청 자격 연체 기준과 소득 조건',
  breadcrumb: '소상공인신용회복신청자격연체기준',
  description: '소상공인 신용회복 신청 자격: 중위소득 125% 이하 또는 연매출 2억 이하. 이자 감면·상환 유예 내용을 정리합니다.',
  datePublished: '2026-05-19T09:00:00+09:00',
  dateModified: '2026-05-19T09:00:00+09:00',
  Content,
  faqData: [
    { q: '소상공인 신용회복 지원은 어디서 신청하나요?', a: '신용회복위원회(ccrs.or.kr) 홈페이지 또는 전화(☎1600-5500), 전국 지부 방문을 통해 신청할 수 있습니다.', source: '신용회복위원회 공식 안내', sourceUrl: 'https://www.ccrs.or.kr' },
    { q: '최대 채무 감면율이 얼마인가요?', a: '채무 유형과 상환 능력에 따라 다르지만, 원금의 최대 70~90%까지 감면이 가능한 경우가 있습니다. 이자는 전액 감면되는 경우도 많습니다.', source: '신용회복위원회 공식 안내', sourceUrl: 'https://www.ccrs.or.kr' },
    { q: '신청 자격은 어떻게 되나요?', a: '총 채무액 15억 원 이하인 소상공인으로, 연체 기간 3개월 이상이거나 폐업 상태인 분이 주 대상입니다.', source: '신용회복위원회 공식 안내', sourceUrl: 'https://www.ccrs.or.kr' },
    { q: '신용회복 후 새로운 대출을 받을 수 있나요?', a: '채무 조정 기간 중에는 신규 대출이 제한됩니다. 성실 상환 후 조정 완료 시 신용이 점차 회복되며 금융 거래가 정상화됩니다.', source: '신용회복위원회 공식 안내', sourceUrl: 'https://www.ccrs.or.kr' },
    { q: '사업을 계속하면서도 신청할 수 있나요?', a: '폐업하지 않고 영업 중인 소상공인도 신청 가능합니다. 다만 현재 영업 상황과 채무 규모 등을 종합적으로 검토합니다.', source: '신용회복위원회 공식 안내', sourceUrl: 'https://www.ccrs.or.kr' },
  ],
  sources: [{ name: '신용회복위원회 공식 안내', url: 'https://www.ccrs.or.kr' }],
};
