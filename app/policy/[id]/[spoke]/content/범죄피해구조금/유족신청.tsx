import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          범죄로 사망한 피해자의 유가족은 <strong>유족구조금</strong>을 신청할 수 있습니다.
          배우자·자녀가 1순위로 신청할 수 있으며, 해당자가 없을 때 부모, 손자녀, 형제자매 순으로
          신청 자격이 넘어갑니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "남편이 범죄 피해로 돌아가셨어요. 제가 구조금을 신청할 수 있나요?"
        유족이 구조금을 신청할 수 있는 조건과 절차를 정리했습니다.
      </p>

      <section className="detail-card" id="priority">
        <h2 className="detail-card-head">유족구조금 신청 순위</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>순위</th><th>대상</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1순위</strong></td>
                <td>배우자 및 자녀</td>
                <td>법률혼 배우자, 친자·양자 포함</td>
              </tr>
              <tr>
                <td><strong>2순위</strong></td>
                <td>부모</td>
                <td>1순위 해당자 없을 때</td>
              </tr>
              <tr>
                <td><strong>3순위</strong></td>
                <td>손자녀</td>
                <td>2순위 해당자 없을 때</td>
              </tr>
              <tr>
                <td><strong>4순위</strong></td>
                <td>형제자매</td>
                <td>3순위 해당자 없을 때</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="amount-family">
        <h2 className="detail-card-head">유족구조금 금액</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>기준 임금:</strong> 2026년 기준 월 평균임금 344만원
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>지급 기준:</strong> 월 평균임금 × 최소 24개월 = 약 8,200만원 이상
          </div>
          <div className="info-box">
            <strong>25세 미만 자녀 가산 (2026 신설):</strong> 사망 피해자에게 25세 미만
            자녀가 있는 경우 추가 가산금이 지급됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply-family">
        <h2 className="detail-card-head">유족 신청 절차</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 범죄 발생지 또는 거주지 관할 지방법원 지구심의회
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>필요 서류:</strong> 구조금 신청서, 사망진단서, 가족관계증명서,
            손해배상을 받지 못했음을 증명하는 서류 등 (법무부령에 따름)
          </div>
          <div className="info-box">
            <strong>신청 기한:</strong> 피해 사실을 안 날부터 3년 이내,
            발생일로부터 10년 이내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            구조금 금액, 2026년 변경 사항 등<br />
            범죄피해구조금 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/crime-victim-aid" className="btn-cta">
            범죄피해구조금 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 범죄피해구조금유족신청SpokeContent: SpokeData = {
  h1: '피해자 본인이 아닌 유족이라면 범죄피해 구조금을 신청할 수 있는지',
  breadcrumb: '유족신청',
  description:
    '범죄 사망 피해자 유가족 구조금 신청 가능. 순위: 배우자·자녀(1) → 부모(2) → 손자녀(3) → 형제자매(4). 2026년 최소 8,200만원. 25세 미만 자녀 가산 신설.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '배우자가 범죄로 사망했을 때 구조금을 신청할 수 있나요?',
      a: '네, 배우자는 1순위 유족으로 구조금을 신청할 수 있습니다. 법무부 범죄피해자지원센터(☎ 1577-2584)에 문의하거나 지구심의회에 신청하세요.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '자녀도 없고 배우자도 없을 때 부모가 신청할 수 있나요?',
      a: '네, 1순위 유족이 없으면 부모가 2순위로 신청할 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '유족구조금은 얼마인가요?',
      a: '2026년 기준 월 344만원의 24개월 이상분으로 최소 8,200만원입니다. 가해자에게 일부 배상을 받은 경우 공제될 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '사망한 피해자에게 어린 자녀가 있으면 더 받을 수 있나요?',
      a: '2026년부터 25세 미만 자녀가 있는 경우 추가 가산금이 신설되었습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '신청 기한이 얼마나 되나요?',
      a: '범죄 피해를 안 날부터 3년 이내, 범죄 발생일부터 10년 이내에 신청해야 합니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
  ],
  sources: [
    { name: '법무부', url: 'https://www.moj.go.kr' },
    { name: '범죄피해자지원센터', url: 'https://www.kcvc.or.kr' },
    { name: '찾기쉬운 생활법령정보', url: 'https://easylaw.go.kr' },
  ],
};
