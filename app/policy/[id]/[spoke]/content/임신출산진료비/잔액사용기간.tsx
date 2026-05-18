import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          임신 중 쓰고 남은 국민행복카드 잔액은 <strong>출산 후에도 계속 사용</strong>할 수 있습니다.
          사용 기간은 <strong>신청일부터 출산일(또는 분만예정일) 후 2년까지</strong>입니다.
          남은 잔액은 출생한 아이의 진료비·약제비에도 쓸 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "임신 때 국민행복카드를 다 못 썼는데, 출산 후 아이 병원비로 쓸 수 있나요?"
        잔액 사용 기간과 사용 대상을 정리했습니다.
      </p>

      <section className="detail-card" id="period">
        <h2 className="detail-card-head">사용 기간 정리</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>사용 가능 기간</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>임산부 본인 진료</strong></td>
                <td>신청일 ~ 출산일 후 2년</td>
              </tr>
              <tr>
                <td><strong>영유아(아이) 진료</strong></td>
                <td>출생일 ~ 2년 이내</td>
              </tr>
              <tr>
                <td><strong>유산·사산</strong></td>
                <td>유산·사산일 기준 (공단 확인)</td>
              </tr>
              <tr>
                <td><strong>잔액</strong></td>
                <td>기간 만료 시 자동 소멸 (환불 불가)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            잔액은 기간이 지나면 자동으로 소멸되므로, 만료 전에 모두 사용하는 것이 좋습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="baby-use">
        <h2 className="detail-card-head">출생 후 아이 진료비로 사용하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            출생일로부터 2년 이내 영유아의 <strong>진료비와 처방 약제비</strong>에 사용할 수 있습니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            병원에서 카드를 제시하면 자동으로 바우처에서 차감됩니다. 별도 전환 신청 없이 사용 가능합니다.
          </div>
          <div className="info-box">
            아이 이름으로 처방전이 발행된 경우에도 부모의 국민행복카드로 결제됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="usage-tips">
        <h2 className="detail-card-head">잔액 소진 방법 (기간 내)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>산후조리원:</strong> 일부 산후조리원은 국민행복카드 결제 가능 (확인 필요)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>한방 의료기관:</strong> 건강보험 적용 한방 진료 및 처방약에 사용 가능
          </div>
          <div className="info-box">
            <strong>조산원:</strong> 건강보험이 적용되는 조산원 출산 비용에 사용 가능
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 신청 방법, 사용처 범위 등<br />
            임신·출산 진료비 지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/pregnancy-medical-benefit" className="btn-cta">
            임신·출산 진료비 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 임신출산잔액사용기간SpokeContent: SpokeData = {
  h1: '임신 중 쓰고 남은 국민행복카드 잔액, 출산 후 아이 진료비로도 쓸 수 있나',
  breadcrumb: '잔액사용기간',
  description:
    '국민행복카드 사용 기간: 신청일~출산 후 2년. 출생일~2년 이내 영유아 진료비에도 사용 가능. 잔액은 기간 만료 시 자동 소멸. 별도 전환 신청 없이 병원 카드 결제로 차감.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '출산 후에도 국민행복카드 잔액을 쓸 수 있나요?',
      a: '네, 신청일부터 출산일 후 2년까지 사용 가능합니다. 출생 후 2년 이내 영유아 진료비에도 사용할 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '아이 이름으로 된 처방전에도 국민행복카드로 결제가 되나요?',
      a: '네, 출생일 후 2년 이내 영유아의 진료비라면 부모의 국민행복카드로 결제할 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '잔액이 남으면 환불이 되나요?',
      a: '아니요, 기간 만료 시 자동으로 소멸됩니다. 환불은 되지 않으므로 기간 내에 모두 사용하는 것이 좋습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '산후조리원에서도 사용할 수 있나요?',
      a: '일부 산후조리원이 국민행복카드 결제가 가능하지만, 모든 곳이 해당되지는 않습니다. 이용 예정 산후조리원에 미리 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '유산한 경우 잔액은 어떻게 되나요?',
      a: '유산·사산의 경우에도 사용 기간이 설정되며, 정확한 기간은 국민건강보험공단에 문의하세요.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
  ],
};
