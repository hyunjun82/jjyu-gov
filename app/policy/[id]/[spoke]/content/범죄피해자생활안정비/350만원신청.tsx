import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          범죄로 <strong>5주 이상 치료</strong>가 필요한 상해를 입은 생계위기 피해자에게
          <strong>350만원을 1회 지급</strong>합니다.
          2026년 1월 1일 신설된 제도로, 범죄피해자지원센터(☎ 1577-2584) 또는
          지방법원 지구심의회에 신청합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "범죄 피해로 치료 중인데 생계가 막막해요. 긴급생활안정비를 받을 수 있나요?"
        2026년 신설된 범죄피해자 긴급생활안정비 350만원의 조건과 신청 절차를 정리했습니다.
      </p>

      <section className="detail-card" id="condition">
        <h2 className="detail-card-head">지급 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>상해 조건</strong></td>
                <td>범죄로 5주 이상 치료가 필요한 상해</td>
              </tr>
              <tr>
                <td><strong>대상 조건</strong></td>
                <td>경제활동이 어려운 생계위기 피해자</td>
              </tr>
              <tr>
                <td><strong>지급 금액</strong></td>
                <td>350만원 (1회)</td>
              </tr>
              <tr>
                <td><strong>지급 기준</strong></td>
                <td>도시일용직 월 평균임금 수준</td>
              </tr>
              <tr>
                <td><strong>시행일</strong></td>
                <td>2026년 1월 1일 (신설)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 문의·상담:</strong> 범죄피해자지원센터 ☎ 1577-2584 또는 거주지 관할 지구심의회
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 서류 준비:</strong> 상해진단서(5주 이상), 신청서, 소득 관련 서류 등
            (정확한 서류 목록은 지구심의회 또는 지원센터에서 안내)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>③ 심의 신청:</strong> 거주지·범죄 발생지 관할 지방법원 지구심의회에 신청
          </div>
          <div className="info-box">
            <strong>④ 지급:</strong> 심의 통과 후 1회 350만원 지급
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="background">
        <h2 className="detail-card-head">제도 도입 배경</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            범죄 피해로 장기 치료 중인 피해자는 경제활동이 어려워 생계 공백이 발생합니다.
            기존 의료비 지원만으로는 생활비를 충당하기 어렵다는 문제를 보완하기 위해
            2026년 1월 신설되었습니다.
          </div>
          <div className="info-box">
            <strong>기존 구조금(유족·장해·중상해)과는 별도</strong>의 지원으로,
            치료 중 생계 안정을 위한 일시금입니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            구조금 중복 여부, 소득 기준 등<br />
            범죄피해자 긴급생활안정비 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/crime-victim-stable" className="btn-cta">
            범죄피해자 긴급생활안정비 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 범죄피해자생활안정비350만원신청SpokeContent: SpokeData = {
  h1: '2026년 신설된 범죄피해자 긴급생활안정비 350만원 받는 조건과 신청 절차',
  breadcrumb: '350만원신청',
  description:
    '2026년 1월 신설. 범죄로 5주 이상 치료 필요한 생계위기 피해자에게 350만원 1회 지급. 지구심의회 또는 1577-2584 신청. 상해진단서 필요.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '긴급생활안정비는 언제부터 받을 수 있나요?',
      a: '2026년 1월 1일부터 시행된 신설 제도입니다. 해당 조건에 맞으면 지금 신청할 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '5주 미만 치료가 필요한 경우는 받을 수 없나요?',
      a: '긴급생활안정비는 5주 이상 치료가 필요한 상해를 입은 경우만 대상입니다. 5주 미만은 해당되지 않습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '350만원은 어떻게 산정된 금액인가요?',
      a: '도시일용직 월 평균임금 수준을 기준으로 산정된 금액입니다. 1회만 지급됩니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '거주지 또는 범죄 발생지 관할 지방법원 지구심의회에 신청합니다. 범죄피해자지원센터(☎ 1577-2584)에 먼저 문의하면 절차를 안내받을 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '긴급생활안정비와 범죄피해구조금을 동시에 신청할 수 있나요?',
      a: '별도의 제도이므로 동시에 신청할 수 있습니다. 단, 지구심의회에서 심의를 통해 지급 여부를 결정합니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
  ],
  sources: [
    { name: '법무부', url: 'https://www.moj.go.kr' },
    { name: '대한민국 정책브리핑', url: 'https://www.korea.kr' },
    { name: '범죄피해자지원센터', url: 'https://www.kcvc.or.kr' },
  ],
};
