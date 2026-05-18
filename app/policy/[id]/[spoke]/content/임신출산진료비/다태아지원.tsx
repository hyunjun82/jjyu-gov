import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          쌍둥이(2태아) 임신 시 국민행복카드 지원금은 <strong>총 200만원</strong>입니다.
          기본 140만원에 추가 60만원이 더해집니다.
          세쌍둥이(3태아) 이상은 <strong>총 300만원</strong>(기본 140만원 + 추가 160만원)입니다.
          2024년 1월 1일 이후 임신에 적용됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "쌍둥이면 국민행복카드를 더 받는다는데, 얼마나 받고 어떤 조건인가요?"
        다태아 추가 지원 기준과 금액을 정리했습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">다태아 추가 지원 금액 (2024.1.1 이후 임신)</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>태아 수</th><th>기본</th><th>추가</th><th>합계</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1태아(단태아)</td>
                <td>100만원</td>
                <td>—</td>
                <td><strong>100만원</strong></td>
              </tr>
              <tr>
                <td><strong>2태아(쌍둥이)</strong></td>
                <td>140만원</td>
                <td>+60만원</td>
                <td><strong>200만원</strong></td>
              </tr>
              <tr>
                <td><strong>3태아 이상</strong></td>
                <td>140만원</td>
                <td>+160만원</td>
                <td><strong>300만원</strong></td>
              </tr>
              <tr>
                <td><strong>4태아 이상</strong></td>
                <td>140만원</td>
                <td>+160만원</td>
                <td><strong>300만원</strong></td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            분만취약지역 거주 시 위 금액에 20만원이 추가 지원됩니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="conditions">
        <h2 className="detail-card-head">다태아 추가 지원 적용 조건</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>적용 시기:</strong> 2024년 1월 1일 이후 임신한 다태아 임산부
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>임신주수 조건:</strong> 임신 20주 이상을 유지하거나 다태아를 출산한 경우
          </div>
          <div className="info-box">
            <strong>신청 방법:</strong> 국민행복카드 신청 시 다태아 임신 사실을 알리면 자동 적용
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            협약 카드사(KB·신한·롯데·우리·하나 등) 또는 국민건강보험공단 지사에서 신청합니다.
          </div>
          <div className="info-box">
            다태아 임신 확인서(의사 진단서·산모수첩)를 지참하면 추가 지원분이 함께 적용됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            사용처, 잔액 사용 기간, 일태아 신청 방법 등<br />
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

export const 임신출산다태아지원SpokeContent: SpokeData = {
  h1: '쌍둥이 임신이면 국민행복카드를 더 받는다, 다태아 추가 지원 기준과 금액',
  breadcrumb: '다태아지원',
  description:
    '다태아 국민행복카드: 2태아 총 200만원(기본 140+추가 60), 3태아 이상 300만원(기본 140+추가 160). 2024.1.1 이후 임신, 임신 20주 이상 조건. 분만취약지 +20만원.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '쌍둥이(2태아)면 국민행복카드를 총 얼마 받나요?',
      a: '기본 140만원에 60만원이 추가되어 총 200만원을 받습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '세쌍둥이(3태아)는 얼마인가요?',
      a: '기본 140만원에 160만원이 추가되어 총 300만원입니다. 4태아 이상도 300만원입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '다태아 추가 지원은 언제부터 적용되나요?',
      a: '2024년 1월 1일 이후 임신한 다태아 임산부에게 적용됩니다. 임신 20주 이상을 유지하거나 다태아를 출산한 경우 지급됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '다태아 임신인데 처음에 일태아로 신청했으면 어떻게 하나요?',
      a: '국민건강보험공단 지사 또는 협약 카드사에 연락해 다태아 확인서를 제출하면 추가 지원분을 청구할 수 있습니다.',
      source: '국민건강보험공단',
      sourceUrl: 'https://www.nhis.or.kr',
    },
    {
      q: '분만취약지에 살면 다태아도 추가 지원이 있나요?',
      a: '네, 위 금액에 20만원이 추가됩니다. 2태아 분만취약지는 220만원, 3태아 이상은 320만원입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '국민건강보험공단', url: 'https://www.nhis.or.kr' },
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
  ],
};
