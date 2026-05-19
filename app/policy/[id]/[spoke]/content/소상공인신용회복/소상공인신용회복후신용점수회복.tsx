import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          신용회복 지원 후 KCB 신용점수는 평균 <strong>39점 상승</strong>합니다.
          신용 정보 해제 후 카드 발급·대출 신청이 다시 가능해지며,
          신용점수 591점 이상 회복 시 카드 발급이 가능한 수준이 됩니다.
        </p>
      </div>

      <section className="detail-card" id="score">
        <h2 className="detail-card-head">신용점수 회복 효과</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>내용</th></tr></thead>
            <tbody>
              <tr><td>평균 점수 상승</td><td>KCB 기준 평균 39점 상승</td></tr>
              <tr><td>카드 발급 기준</td><td>KCB 591점 이상 → 카드 발급 가능 수준</td></tr>
              <tr><td>신규 카드 발급</td><td>신용 사면 이후 23만 명 신규 발급 실적</td></tr>
              <tr><td>점수 회복 기간</td><td>신용 정보 해제 후 즉시 반영 (수일 내)</td></tr>
            </tbody>
          </table>
          <div className="info-box" style={{marginTop:12}}>
            신용 정보 해제 = 연체 기록 삭제를 의미합니다.
            단, 채무 조정 자체의 기록은 일정 기간 남을 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="after">
        <h2 className="detail-card-head">신용회복 후 대출·금융 이용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead><tr><th>항목</th><th>가능 여부</th></tr></thead>
            <tbody>
              <tr><td>신용카드 발급</td><td>신용점수 회복 후 가능 (카드사별 기준 상이)</td></tr>
              <tr><td>소액 대출</td><td>서민금융진흥원 새희망홀씨·햇살론 등 이용 가능</td></tr>
              <tr><td>은행권 대출</td><td>점수 회복 정도에 따라 다름 (일반 대출은 추가 시간 필요)</td></tr>
              <tr><td>소상공인 정책자금</td><td>신용 회복 후 소진공 정책자금 재신청 가능</td></tr>
            </tbody>
          </table>
          <div className="warning-box" style={{marginTop:12}}>
            신용 정보 해제 후에도 금융사 내부 심사 기준에 따라 대출이 제한될 수 있습니다.
            신청 전 각 기관에 직접 문의하세요.
          </div>
        </div>
      </section>
    </>
  );
}

export const 소상공인신용회복소상공인신용회복후신용점수회복SpokeContent: SpokeData = {
  h1: '소상공인 신용회복 후 신용점수 몇 점 오르나',
  breadcrumb: '소상공인신용회복후신용점수회복',
  description: '소상공인 신용회복 후 KCB 평균 39점 상승. 카드 발급 기준(591점)과 대출 재이용 가능 여부를 정리합니다.',
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
