import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          아동급식카드는 <strong>학기 중 토요일·공휴일</strong>과 <strong>방학 중 전일</strong>에 사용할 수 있습니다.
          학기 중 평일은 학교 급식이 제공되므로 급식카드를 사용할 수 없으며,
          방학 중에는 매일(주말 포함) 사용 가능합니다.
        </p>
      </div>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">학기 중 vs 방학 중 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>기간</th><th>이용 가능일</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>학기 중 평일</strong></td><td>사용 불가</td><td>학교 급식 제공 (중복 불가)</td></tr>
              <tr><td><strong>학기 중 토요일</strong></td><td>사용 가능</td><td>하루 한도 내</td></tr>
              <tr><td><strong>학기 중 공휴일</strong></td><td>사용 가능</td><td>하루 한도 내</td></tr>
              <tr><td><strong>방학 중 평일</strong></td><td>사용 가능</td><td>하루 한도 내</td></tr>
              <tr><td><strong>방학 중 주말</strong></td><td>사용 가능</td><td>하루 한도 내</td></tr>
              <tr><td><strong>미취학 아동</strong></td><td>연중 매일 가능</td><td>어린이집 미이용 결식 우려 아동</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="holiday">
        <h2 className="detail-card-head">방학 중 이용 안내</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>여름·겨울방학:</strong> 방학 기간 중 매일 (주말·공휴일 포함) 사용 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>이용 시간 제한:</strong> 지역에 따라 아침·점심 시간대 제한 없음 (일부 지역은 중식 시간대만)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방학 중 월 한도:</strong> 학기 중보다 지원일수 많음 (월 약 30일)
          </div>
          <div className="info-box">
            <strong>초등 돌봄교실 이용:</strong> 돌봄교실에서 급식 제공 시 급식카드 중복 이용 제한 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="tip">
        <h2 className="detail-card-head">효율적 이용 팁</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>편의점 도시락 활용:</strong> 방학 중 편의점 도시락으로 하루 한끼 충당 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>잔액 확인:</strong> 카드사 앱 또는 주민센터에서 잔액·사용 내역 확인 가능
          </div>
          <div className="info-box">
            <strong>분실 시:</strong> 즉시 카드사 또는 주민센터에 신고하여 정지 후 재발급 신청
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원대상, 신청방법, 사용처 가맹점까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/child-meal-card" className="btn-cta">
            아동급식카드 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 아동급식카드방학중지원학기중차이이용방법주의SpokeContent: SpokeData = {
  h1: '아동급식카드 방학 중 지원, 학기 중과 다른 이용 방법과 주의사항',
  breadcrumb: '방학중지원학기중차이이용방법주의',
  description:
    '아동급식카드: 학기 중 평일 사용 불가(학교급식), 토·공휴일·방학 중 매일 사용 가능. 방학 중 월 지원일수 더 많음. 미취학 아동은 연중 매일 이용. 편의점·가맹식당 사용.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '방학 중에 매일 사용할 수 있나요?',
      a: '네. 방학 기간에는 평일·주말·공휴일 모두 하루 한도 내에서 사용 가능합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '학기 중 평일에 실수로 카드를 사용하면 어떻게 되나요?',
      a: '학기 중 평일은 카드 결제 자체가 제한되도록 설정된 경우가 많습니다. 시스템 오류로 결제가 된 경우 주민센터에 알려주세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '돌봄교실을 이용하는 아동도 방학 중에 급식카드를 쓸 수 있나요?',
      a: '돌봄교실에서 급식을 제공받는 경우 해당 시간대에는 급식카드 이용이 제한될 수 있습니다. 정확한 기준은 담당 주민센터에 문의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '공휴일에도 편의점에서 쓸 수 있나요?',
      a: '네. 공휴일은 학기 중이라도 급식카드를 사용할 수 있습니다. 편의점 등 가맹점에서 정상 결제됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '학기 중 당일치기 체험학습도 급식카드를 쓸 수 없나요?',
      a: '체험학습 날도 학교 출석일이라면 급식카드 사용이 제한될 수 있습니다. 해당일에 학교 급식이 제공되지 않는다면 사용 가능한지 주민센터에 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '정부24 아동급식카드', url: 'https://www.gov.kr/portal/service/serviceInfo/542000000512' },
    { name: '복지로 아동급식카드', url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003999' },
  ],
};
