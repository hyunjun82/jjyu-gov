import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          임산부 친환경농산물 지원사업의 대상은 <strong>임신 중이거나 신청일 기준 출산 후 1년 이내</strong>인 산모입니다.
          소득 기준이 없어 <strong>전국 모든 임산부</strong>가 신청할 수 있으며,
          임신확인서·출생증명서·산모수첩 중 1개를 증빙 서류로 제출합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        지원 인원은 지자체별 예산에 따라 선착순으로 제한될 수 있습니다.
        신청 기간도 지역마다 다르므로 거주 지자체의 공고를 확인하고 신속히 신청하세요.
      </p>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격 요건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>대상</strong></td><td>임신 중인 임산부 또는 출산 후 1년 이내 산모</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>없음 (전국 모든 임산부)</td></tr>
              <tr><td><strong>지역</strong></td><td>전국 (지자체별 신청 인원·기간 상이)</td></tr>
              <tr><td><strong>증빙 서류</strong></td><td>임신확인서, 출생증명서, 산모수첩 중 1개</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">서류별 사용 가능 시점</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>임신확인서:</strong> 임신 중인 경우 산부인과에서 발급 — 임신 사실 확인 시 바로 사용 가능
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>산모수첩:</strong> 임신 중 또는 출산 후 제출 가능 — 보건소 또는 산부인과에서 수령
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>출생증명서:</strong> 출산 후 제출 — 의료기관에서 발급
          </div>
          <div className="info-box">
            <strong>주의:</strong> 출산 후 1년이 지나면 산모 자격이 만료되어 신청 불가
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 신청 방법, 산모신생아 중복 여부까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/pregnant-eco-farm" className="btn-cta">
            임산부친환경농산물 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 임산부친환경농산물지원대상임신중출산후1년이내신청자격SpokeContent: SpokeData = {
  h1: '임산부 친환경농산물 지원대상, 임신 중·출산 후 1년 이내 신청 자격',
  breadcrumb: '지원대상임신중출산후1년이내신청자격',
  description:
    '임산부 친환경농산물 지원 대상: 임신 중이거나 출산 후 1년 이내 산모. 소득 기준 없이 전국 모든 임산부 신청 가능. 임신확인서·출생증명서·산모수첩 중 1개 제출. 지자체별 인원 제한.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '임신 초기(6주)에도 신청할 수 있나요?',
      a: '임신확인서를 발급받을 수 있다면 임신 초기에도 신청 가능합니다. 산부인과에서 임신 확인 후 임신확인서를 발급받아 신청하세요.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '출산 후 11개월이 지났는데 지금 신청하면 얼마나 받을 수 있나요?',
      a: '출산 후 1년 이내라면 신청이 가능하지만, 지원 기간이 남은 기간에 한해 적용됩니다. 신청일 기준으로 남은 지원 기간만큼 꾸러미를 받을 수 있습니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '쌍둥이를 낳으면 지원이 두 배가 되나요?',
      a: '임산부 친환경농산물 지원은 임산부(산모) 1인을 기준으로 지원됩니다. 쌍둥이라도 동일 금액이 지원되며, 아이 수에 따라 배가 되지는 않습니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '유산이나 사산한 경우도 지원 대상이 되나요?',
      a: '임신 중 신청한 경우 지원이 진행 중이었다면 사업 운영 기관에 상황을 알리고 처리 방법을 확인해야 합니다. 유산·사산 후 신규 신청은 불가합니다.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
    {
      q: '외국인 배우자인 임산부도 신청할 수 있나요?',
      a: '지자체별 조건이 다를 수 있으나, 일반적으로 국내 거주 임산부를 대상으로 합니다. 외국인 등록증을 보유한 합법적 체류자라면 신청 가능 여부를 거주 지자체에 문의하세요.',
      source: '농림축산식품부',
      sourceUrl: 'https://www.mafra.go.kr',
    },
  ],
  sources: [
    { name: '농림축산식품부 임산부 친환경농산물', url: 'https://www.mafra.go.kr' },
    { name: '에코몰(ecoemall.com)', url: 'https://www.ecoemall.com' },
  ],
};
