import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민행복카드는 원칙적으로 <strong>임신부 본인 명의</strong>로 신청합니다.
          단, 임신부가 신용불량·카드 발급 거절 등 불가피한 사정이 있으면
          <strong>배우자(남편) 명의</strong>로도 발급이 가능합니다.
          임신출산진료비 바우처는 임신부 본인 명의 카드가 원칙이므로 가능하면 본인이 신청하세요.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        부부 중 누가 신청해야 하는지 상황별로 정리했습니다.
      </p>

      <section className="detail-card" id="compare">
        <h2 className="detail-card-head">임신부 본인 vs 배우자 명의 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>임신부 본인 명의</th><th>배우자(남편) 명의</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>원칙 여부</strong></td><td>원칙 (권장)</td><td>예외 (불가피한 경우)</td></tr>
              <tr><td><strong>신청 가능 여부</strong></td><td>가능</td><td>가능 (단 조건 충족 시)</td></tr>
              <tr><td><strong>바우처 사용</strong></td><td>임신부 진료 시 직접 사용</td><td>임신부 진료 시 배우자 카드 지참</td></tr>
              <tr><td><strong>주의사항</strong></td><td>없음</td><td>일부 진료기관에서 본인 확인 요청 가능</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="exception">
        <h2 className="detail-card-head">배우자 명의로 발급 가능한 경우</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>임신부 신용불량:</strong> 신용카드 발급이 제한된 경우
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>임신부 카드 거절:</strong> 카드사 심사에서 발급 거절된 경우
          </div>
          <div className="info-box">
            <strong>기타 불가피한 사유:</strong> 카드사 또는 담당 기관에 사유 소명 후 배우자 명의 신청
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="note">
        <h2 className="detail-card-head">신청 시 주의사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>법적 혼인 관계:</strong> 배우자 명의는 법적 혼인 관계인 경우에만 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강보험 자격:</strong> 임신부가 건강보험 피부양자인 경우에도 임신부 본인 명의가 원칙
          </div>
          <div className="info-box">
            <strong>카드사 확인:</strong> 배우자 명의 발급 절차는 카드사마다 다를 수 있어 사전 확인 필요
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            발급 조건, 23종 바우처, 임신 후 발급 순서까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/national-happiness-card" className="btn-cta">
            국민행복카드 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 국민행복카드남편명의부부중누가신청SpokeContent: SpokeData = {
  h1: '국민행복카드 남편 명의로 신청 가능한지, 부부 중 누가 신청해야 하나',
  breadcrumb: '남편명의부부중누가신청',
  description:
    '국민행복카드는 임신부 본인 명의가 원칙. 신용불량·발급 거절 등 불가피한 경우 배우자(남편) 명의 발급 가능. 법적 혼인 관계 필수. 카드사별 절차 상이하므로 사전 확인 필요.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '미혼모도 국민행복카드를 발급받을 수 있나요?',
      a: '네, 혼인 여부에 관계없이 임신부 본인 명의로 발급받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '배우자 명의로 발급한 경우 임신부가 직접 사용해도 되나요?',
      a: '카드 명의와 사용자가 다를 수 있지만, 임신출산진료비 결제 시 진료를 받는 사람이 임신부임을 확인하는 경우가 있습니다. 카드를 지참해 사용하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '임신부가 직장 건강보험 피부양자면 누가 신청하나요?',
      a: '피부양자 여부와 관계없이 임신부 본인이 신청하는 것이 원칙입니다. 건강보험 자격은 피부양자여도 무방합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '남편이 이미 국민행복카드를 갖고 있으면 아내도 발급받나요?',
      a: '국민행복카드는 임신부 1인당 1개 발급입니다. 남편이 기존에 발급받은 카드가 있어도 임신부 본인이 별도로 발급받을 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
    {
      q: '이혼·별거 중인 경우에도 배우자 명의 발급이 되나요?',
      a: '법적 혼인 관계가 유지되는 경우에만 배우자 명의 발급이 가능합니다. 이혼 후에는 배우자 명의 발급이 불가합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.voucher.go.kr',
    },
  ],
  sources: [
    { name: '사회서비스 전자바우처', url: 'https://www.voucher.go.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
  ],
};
