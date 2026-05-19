import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2025~2026년 정부는 소액 연체 채무를 전액 상환한 서민·소상공인 <strong>292.8만 명</strong>에게
          신용 정보 해제 혜택을 제공했습니다.
          연체 기록이 삭제되면 신용점수가 회복되어 대출·카드 발급이 다시 가능해집니다.
        </p>
      </div>

      <section className="detail-card" id="target">
        <h2 className="detail-card-head">신속 신용회복 지원 대상</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>조건</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>연체 기간</td><td>2020년 1월~2025년 8월 중 발생한 소액 연체</td></tr>
              <tr><td>채무 규모</td><td>5천만 원 이하 소액 연체</td></tr>
              <tr><td>상환 조건</td><td>2025년 12월 31일까지 연체 금액 전액 상환</td></tr>
              <tr><td>자동 적용</td><td>요건 충족 시 별도 신청 없이 신용 정보 자동 해제</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            신용 사면 후 KCB 신용점수 평균 39점 상승, 23만 명이 신용카드를 새로 발급받는 효과가 있었습니다.
            (출처: 신용회복위원회·금융위원회, 2026.1)
          </div>
        </div>
      </section>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">내 신용 사면 여부 확인 방법</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>방법</th><th>경로</th></tr></thead>
            <tbody>
              <tr><td>올크레딧</td><td>www.allcredit.co.kr → 신용회복지원 확인</td></tr>
              <tr><td>나이스 신용정보</td><td>www.credit.co.kr</td></tr>
              <tr><td>전화 문의</td><td>☎1600-5500 (신용회복위원회)</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            신속 신용 사면은 한시적 조치입니다. 2025년 말 기준 상환 완료가 조건이므로, 현재 시점에 따라 혜택 여부가 다를 수 있습니다. 공단에 직접 확인하세요.
          </div>
        </div>
      </section>
    </>
  );
}

export const 소상공인신용회복소상공인신속신용사면탕감신청방법SpokeContent: SpokeData = {
  h1: '소상공인 신속 신용 사면 채무 탕감 조건과 신청 방법',
  breadcrumb: '소상공인신속신용사면탕감신청방법',
  description: '2025~2026년 서민·소상공인 신속 신용 사면: 5천만원 이하 연체 후 전액 상환 시 신용 정보 자동 해제. 292.8만명 혜택.',
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
