import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          네, 범죄로 <strong>5주 이상 치료</strong>가 필요한 상해를 입어 경제활동이 어려운 경우,
          국가에서 생계비 <strong>350만원</strong>을 별도로 지급합니다.
          기존 의료비 지원과는 별개의 생활안정비입니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "범죄로 다쳐서 병원에 오래 있어야 하는데, 생계가 걱정돼요. 생계비를 따로 받을 수 있나요?"
        5주 이상 치료 중인 피해자가 받을 수 있는 생활비 지원을 정리했습니다.
      </p>

      <section className="detail-card" id="criteria">
        <h2 className="detail-card-head">5주 기준의 의미</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            상해진단서에 기재된 치료 기간이 <strong>5주(35일) 이상</strong>이어야 합니다.
            이는 치료가 실제로 5주 이상 걸린다는 의사 소견이 필요하다는 의미입니다.
          </div>
          <div className="info-box">
            치료 기간이 5주 미만이라면 긴급생활안정비 대상에 해당하지 않습니다.
            단, 이 경우도 범죄피해구조금(중상해구조금)은 별도로 검토할 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="support">
        <h2 className="detail-card-head">지원 내용 비교</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>지원 종류</th><th>내용</th><th>대상</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>긴급생활안정비</strong></td>
                <td>350만원 1회 (생계비)</td>
                <td>5주 이상 치료 생계위기 피해자</td>
              </tr>
              <tr>
                <td><strong>중상해구조금</strong></td>
                <td>피해 정도에 따라 차등</td>
                <td>중상해를 입은 피해자</td>
              </tr>
              <tr>
                <td><strong>의료비 지원</strong></td>
                <td>치료비 실비 지원</td>
                <td>범죄피해자 (별도 신청)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="how">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신청처:</strong> 거주지 또는 범죄 발생지 관할 지방법원 지구심의회
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>필요 서류:</strong> 상해진단서(5주 이상 치료 기재), 신청서,
            소득·경제 상황 관련 서류 (구체 서류는 1577-2584에서 안내)
          </div>
          <div className="info-box">
            <strong>신청 기한:</strong> 피해를 안 날부터 3년 이내
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            지급 조건, 구조금 중복 등<br />
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

export const 범죄피해자생활안정비5주이상치료SpokeContent: SpokeData = {
  h1: '5주 이상 치료가 필요한 범죄피해자라면 생계비를 따로 받을 수 있는지',
  breadcrumb: '5주이상치료',
  description:
    '범죄로 5주 이상 치료 필요한 생계위기 피해자에게 긴급생활안정비 350만원 별도 지급. 의료비 지원과 중상해구조금과는 별개. 상해진단서 필요. 1577-2584 문의.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '5주라는 기준은 어떻게 확인하나요?',
      a: '의사가 발급한 상해진단서에 치료 기간이 5주 이상으로 기재되어 있어야 합니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '치료 기간이 5주 미만이면 아무것도 못 받나요?',
      a: '긴급생활안정비는 받을 수 없지만, 의료비 지원이나 중상해구조금은 별도로 검토할 수 있습니다. 1577-2584에 문의하세요.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '치료비와 생활비를 둘 다 받을 수 있나요?',
      a: '네, 긴급생활안정비(생계비 350만원)와 의료비 지원은 별개로 각각 신청할 수 있습니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '생계위기 피해자의 기준이 있나요?',
      a: '범죄 피해로 경제활동이 어려워진 상태를 기준으로 심의에서 판단합니다. 별도의 소득 기준 수치는 공개된 자료가 없으며, 구체적인 사안은 지구심의회에서 결정합니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
    {
      q: '직장인이어도 받을 수 있나요?',
      a: '범죄 피해로 치료 중 실제로 경제활동을 못 하게 된 상황이라면 직장인도 신청할 수 있습니다. 심의에서 경제적 어려움이 인정되어야 합니다.',
      source: '법무부',
      sourceUrl: 'https://www.moj.go.kr',
    },
  ],
  sources: [
    { name: '법무부', url: 'https://www.moj.go.kr' },
    { name: '대한민국 정책브리핑', url: 'https://www.korea.kr' },
    { name: '찾기쉬운 생활법령정보', url: 'https://easylaw.go.kr' },
  ],
};
