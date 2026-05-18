import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          국민행복카드는 건강보험이 적용되는 <strong>모든 요양기관(병원·의원·한방 의료기관·조산원)과 약국</strong>에서 사용할 수 있습니다.
          비급여 항목(산전 비급여 검사 등)에도 일부 사용 가능하지만, 일반 마트·쇼핑몰에는 사용할 수 없습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "국민행복카드를 약국과 한방 병원에서도 쓸 수 있나요? 어디서는 안 되나요?"
        사용 가능한 곳과 불가한 곳을 정리했습니다.
      </p>

      <section className="detail-card" id="usable">
        <h2 className="detail-card-head">사용 가능한 곳</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>구분</th><th>사용 가능 여부</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>병원·의원</strong></td>
                <td>✓ 가능</td>
                <td>임산부 및 영유아 진료 포함</td>
              </tr>
              <tr>
                <td><strong>약국</strong></td>
                <td>✓ 가능</td>
                <td>처방 약제·치료재료 포함</td>
              </tr>
              <tr>
                <td><strong>한방 의료기관</strong></td>
                <td>✓ 가능</td>
                <td>건강보험 적용 항목</td>
              </tr>
              <tr>
                <td><strong>조산원</strong></td>
                <td>✓ 가능</td>
                <td>출산 비용 포함</td>
              </tr>
              <tr>
                <td><strong>비급여 산전 검사</strong></td>
                <td>✓ 일부 가능</td>
                <td>요양기관에서 제공하는 비급여</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="not-usable">
        <h2 className="detail-card-head">사용 불가한 곳</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>일반 마트·슈퍼마켓:</strong> 사용 불가
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인 쇼핑몰:</strong> 사용 불가
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>산후조리원:</strong> 일부만 가능 (사전 확인 필요)
          </div>
          <div className="info-box">
            <strong>건강보험 미적용 비급여 전체:</strong> 일부 항목은 사용 불가 (요양기관 문의)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="baby">
        <h2 className="detail-card-head">영유아 진료비 사용</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            출생일로부터 2년 이내 영유아의 진료비와 처방 약제비에도 사용 가능합니다.
          </div>
          <div className="info-box">
            병원에서 카드를 제시하면 바우처에서 자동 차감됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지원 금액, 잔액 사용 기간, 다태아 지원 등<br />
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

export const 임신출산사용처범위SpokeContent: SpokeData = {
  h1: '국민행복카드 사용처, 약국과 한방 비급여 항목까지 되는 건가',
  breadcrumb: '사용처범위',
  description:
    '국민행복카드 사용 가능: 병원·의원·약국·한방 의료기관·조산원, 비급여 산전 검사 일부. 사용 불가: 마트·쇼핑몰. 출생일~2년 이내 영유아 진료비도 사용 가능.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '한방 병원에서도 국민행복카드를 쓸 수 있나요?',
      a: '네, 건강보험이 적용되는 한방 의료기관에서 사용 가능합니다. 비급여 항목은 요양기관에서 확인하세요.',
      source: '사회서비스 전자바우처',
      sourceUrl: 'https://www.socialservice.or.kr',
    },
    {
      q: '약국에서 처방전 없이 사는 약도 카드로 결제되나요?',
      a: '아니요, 처방전에 기반한 처방 약제와 치료재료에만 사용 가능합니다. 일반 상비약 구입에는 사용할 수 없습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '마트에서 산후 음식 재료를 사면 안 되나요?',
      a: '국민행복카드는 의료기관·약국 등 요양기관에서만 사용 가능합니다. 마트나 온라인 쇼핑몰 구매에는 사용할 수 없습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '산후조리원에서도 쓸 수 있나요?',
      a: '일부 산후조리원에서 사용 가능하지만, 모든 곳이 해당되지는 않습니다. 이용 예정 산후조리원에 미리 확인하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '아이가 태어난 후에도 병원에서 국민행복카드로 결제할 수 있나요?',
      a: '네, 출생일로부터 2년 이내 영유아의 진료비와 처방 약제비에도 사용할 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
  ],
};
