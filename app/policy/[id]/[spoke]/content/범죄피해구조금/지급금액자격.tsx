import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          범죄피해 구조금은 사망의 경우 최소 <strong>8,200만원</strong>(월 344만원 × 24개월),
          장해·중상해의 경우 피해 정도에 따라 지급됩니다.
          신청은 지역 법원의 지구심의회 또는 범죄피해자지원센터(☎ 1577-2584)를 통해 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "범죄피해자 구조금이 얼마나 나오나요? 사망인지 장해인지에 따라 다른가요?"
        구조금 유형별 지급 기준을 정리했습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">구조금 유형과 지급 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>유형</th><th>지급 기준</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>유족구조금</strong></td>
                <td>월 평균임금 × 24개월 이상<br />(2026년 기준 최소 8,200만원)</td>
                <td>범죄로 사망한 피해자 유가족</td>
              </tr>
              <tr>
                <td><strong>장해구조금</strong></td>
                <td>장해 등급별 차등 지급</td>
                <td>범죄로 장해를 입은 피해자</td>
              </tr>
              <tr>
                <td><strong>중상해구조금</strong></td>
                <td>피해 정도에 따라 결정</td>
                <td>범죄로 중상해를 입은 피해자</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>사망 피해:</strong> 대한민국 영토 안에서 발생한 범죄로 사망한 피해자의 유가족.
            유족 순위: 배우자 및 자녀(1순위) → 부모(2순위) → 손자녀(3순위) → 형제자매(4순위)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장해·중상해 피해:</strong> 범죄로 장해 또는 중상해를 입고 가해자로부터 충분한
            보상을 받지 못한 피해자 본인
          </div>
          <div className="info-box">
            <strong>25세 미만 자녀 가산 (2026 신설):</strong> 사망 피해자에게 25세 미만 자녀가 있는
            경우 추가 가산금이 지급됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 거주지·주소지·범죄 발생지 관할 지방법원 지구심의회
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>문의:</strong> 범죄피해자지원센터 ☎ 1577-2584 (전국 공통)
          </div>
          <div className="info-box">
            <strong>신청 기한:</strong> 범죄 피해를 안 날부터 3년 이내,
            범죄 피해가 발생한 날부터 10년 이내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            2026년 증액 내용, 유족 순위, 서류 등<br />
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

export const 범죄피해구조금지급금액자격SpokeContent: SpokeData = {
  h1: '범죄피해자 구조금 신청 자격과 사망 장해 중상해별 지급 금액',
  breadcrumb: '지급금액자격',
  description:
    '범죄피해 구조금 사망 유족 최소 8,200만원(월 344만원 × 24개월 이상), 장해·중상해 등급별 차등. 신청 지구심의회 또는 1577-2584. 신청기한 인지 3년 발생 10년.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '범죄피해 구조금은 얼마나 받을 수 있나요?',
      a: '사망 피해의 경우 2026년 기준 월 344만원의 24개월 이상분으로 최소 8,200만원입니다. 장해·중상해는 피해 등급에 따라 차등 지급됩니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '구조금은 누가 신청할 수 있나요?',
      a: '사망 피해의 경우 유가족(배우자·자녀·부모·손자녀·형제자매 순), 장해·중상해의 경우 피해자 본인이 신청할 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '어디에 신청하나요?',
      a: '거주지, 주소지 또는 범죄 발생지 관할 지방법원 지구심의회에 신청합니다. 범죄피해자지원센터(☎ 1577-2584)에 문의하면 안내받을 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '신청 기한이 있나요?',
      a: '범죄 피해를 안 날부터 3년, 범죄 발생일부터 10년 이내에 신청해야 합니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '2026년에 구조금이 바뀐 점이 있나요?',
      a: '2026년 3월 시행으로 구조금이 약 20% 증액되었으며, 25세 미만 자녀에 대한 가산금 신설, 서류 간소화, 산정 내역 공개 등이 추가되었습니다.',
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
