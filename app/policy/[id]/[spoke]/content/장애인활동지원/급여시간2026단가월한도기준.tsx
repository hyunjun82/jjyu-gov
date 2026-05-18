import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 장애인활동지원 급여 단가는 <strong>시간당 17,270원</strong>이며,
          서비스 지원 종합조사 결과에 따라 월 기본 급여 시간이 결정됩니다.
          독거·취약 가구는 <strong>가산급여 최대 258시간</strong>을 추가로 받을 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        본인부담금은 소득 수준에 따라 차등 부과되며, 2026년 기준 상한액은 월 216,200원입니다.
        기초생활수급자·차상위계층은 본인부담금이 면제되거나 대폭 감면됩니다.
      </p>

      <section className="detail-card" id="rate">
        <h2 className="detail-card-head">2026년 급여 단가 및 가산급여</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>단가 / 시간</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>활동보조</strong></td><td>17,270원/시간</td><td>일상생활·이동 보조</td></tr>
              <tr><td><strong>방문목욕</strong></td><td>별도 수가 적용</td><td>이동목욕차량 이용 시 상이</td></tr>
              <tr><td><strong>방문간호</strong></td><td>별도 수가 적용</td><td>간호사·간호조무사 파견</td></tr>
              <tr><td><strong>가산급여 (2026)</strong></td><td>최대 258시간/월</td><td>독거·취약·심야 추가 지원</td></tr>
              <tr><td><strong>본인부담 상한</strong></td><td>월 216,200원</td><td>2026년 기준</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="copay">
        <h2 className="detail-card-head">소득 구간별 본인부담금</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기초생활수급자:</strong> 본인부담금 면제 (0원)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>차상위계층:</strong> 본인부담금 대폭 감면 (최저 수준)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>중간 소득 구간:</strong> 소득인정액에 비례하여 부과 (구간별 차등)
          </div>
          <div className="info-box">
            <strong>상위 소득 구간:</strong> 월 최대 216,200원 (2026년 상한액)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="increase">
        <h2 className="detail-card-head">2026년 주요 변경사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>단가 인상:</strong> 활동지원 단가 17,270원으로 인상 (최저임금 연동)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>가산급여 확대:</strong> 205시간 → 258시간으로 확대 (독거·취약 가구)
          </div>
          <div className="info-box">
            <strong>본인부담 상한 조정:</strong> 2026년 기준 월 216,200원 적용
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청자격, 노인장기요양 전환, 신청 절차까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/disability-activity-support" className="btn-cta">
            장애인활동지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 장애인활동지원급여시간2026단가월한도기준SpokeContent: SpokeData = {
  h1: '장애인활동지원 급여 시간, 2026년 시간당 17,270원과 월 한도 기준',
  breadcrumb: '급여시간2026단가월한도기준',
  description:
    '2026년 장애인활동지원 단가 17,270원/시간. 가산급여 최대 258시간(독거·취약). 본인부담 상한 월 216,200원. 기초수급자 면제. 최저임금 연동 단가 인상.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '활동지원 시간이 부족하면 추가 신청할 수 있나요?',
      a: '가산급여 대상(독거·취약 등)이라면 추가 시간을 신청할 수 있습니다. 또한 재조사 신청으로 급여 구간이 올라갈 수도 있습니다. 담당 기관 또는 주민센터에 문의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '월 급여 시간을 초과하면 어떻게 되나요?',
      a: '기본 급여 시간 초과분은 본인이 전액 부담해야 합니다. 꼭 필요한 경우 추가 서비스 이용이 가능하지만, 비용이 발생하므로 계획적으로 이용하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '본인부담금을 낼 여유가 없으면 어떻게 하나요?',
      a: '기초생활수급자는 면제, 차상위계층은 감면됩니다. 본인부담금이 부담스럽다면 주민센터에서 소득 기준 재확인이나 감면 신청을 해보시기 바랍니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '활동지원사 단가와 수급자가 받는 급여는 같은 건가요?',
      a: '활동지원 단가(17,270원/시간)는 기관에 지급되는 급여 단가이며, 활동지원사 급여는 기관이 단가에서 운영비를 제한 금액으로 지급합니다. 수급자는 이 단가에서 본인부담분을 제외한 만큼 서비스를 받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '방문목욕·방문간호 단가는 얼마인가요?',
      a: '방문목욕·방문간호는 활동보조와 별도 수가로 적용됩니다. 정확한 금액은 보건복지부 고시 또는 국민연금공단(국번없이 1355)에서 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 장애인활동지원', url: 'https://www.mohw.go.kr/menu.es?mid=a10710040700' },
    { name: '2026년 활동지원 급여 단가 (엔젤시터)', url: 'https://angelsitter.co.kr/board.view.php?board=bbs2&no=602' },
  ],
};
