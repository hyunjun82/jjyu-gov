import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          위기청소년 특별지원은 생활지원(월 65만원)부터 법률지원까지
          <strong> 8개 분야</strong>로 지원합니다.
          현금 급여와 사회서비스를 합산해 연 최대 <strong>650만원</strong> 규모입니다.
          신청은 ☎ 1388로 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "위기청소년 특별지원의 8개 분야가 구체적으로 어떻게 다른가요?"
        각 분야별 지원 내용과 금액을 정리했습니다.
      </p>

      <section className="detail-card" id="eight-fields">
        <h2 className="detail-card-head">8개 분야 지원 내용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>분야</th><th>지원 내용</th><th>금액 / 방식</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>생활지원</strong></td>
                <td>식비, 의류비 등 기본 생활비</td>
                <td>월 최대 65만원 (현금)</td>
              </tr>
              <tr>
                <td><strong>학업지원</strong></td>
                <td>학비, 교재비, 검정고시·직업훈련비</td>
                <td>연 최대 154만원 (현금)</td>
              </tr>
              <tr>
                <td><strong>의료지원</strong></td>
                <td>치료비, 건강검진비</td>
                <td>연 최대 200만원 (현금+서비스)</td>
              </tr>
              <tr>
                <td><strong>상담지원</strong></td>
                <td>심리·진로 상담</td>
                <td>서비스 제공</td>
              </tr>
              <tr>
                <td><strong>활동지원</strong></td>
                <td>문화·체험·동아리 활동</td>
                <td>서비스 제공</td>
              </tr>
              <tr>
                <td><strong>법률지원</strong></td>
                <td>법률 상담, 소송 지원</td>
                <td>서비스 제공</td>
              </tr>
              <tr>
                <td><strong>자활지원</strong></td>
                <td>취업·창업 연계, 자립 훈련</td>
                <td>서비스 제공</td>
              </tr>
              <tr>
                <td><strong>기타 지원</strong></td>
                <td>긴급 상황 필요 지원</td>
                <td>심의에 따라 결정</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="cash-vs-service">
        <h2 className="detail-card-head">현금 급여와 서비스 구분</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>현금 급여 (직접 지급):</strong> 생활지원, 학업지원, 의료지원
            → 청소년이나 지정 계좌로 직접 입금
          </div>
          <div className="info-box">
            <strong>사회서비스 (기관 연계):</strong> 상담지원, 활동지원, 법률지원, 자활지원
            → 청소년상담복지센터나 관련 기관을 통해 서비스 연계
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply-steps">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>① 1388 상담:</strong> 위기 유형 확인, 필요한 지원 분야 결정
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>② 청소년안전망 의뢰:</strong> 상담사가 특별지원 대상 여부 심의 의뢰
          </div>
          <div className="info-box">
            <strong>③ 심의 후 지원:</strong> 필요한 분야별로 지원 시작 (1년 단위 갱신)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 자격, 보호자 없는 청소년 절차 등<br />
            위기청소년 특별지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/crisis-youth-support" className="btn-cta">
            위기청소년 특별지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 위기청소년8개분야지원SpokeContent: SpokeData = {
  h1: '위기청소년이 받을 수 있는 생활지원부터 법률지원까지 8개 분야 지원 내용',
  breadcrumb: '8개분야지원',
  description:
    '위기청소년 특별지원 8개 분야: 생활(월 65만원), 학업(연 154만원), 의료(연 200만원), 상담·활동·법률·자활·기타. 현금+서비스 합산 연 최대 650만원. 1388 신청.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '8개 분야를 모두 받을 수 있나요?',
      a: '8개 분야 모두 신청할 수 있지만, 각 분야는 심의를 통해 필요한 항목이 선별됩니다. 연 최대 650만원 범위 내에서 지원됩니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '법률지원은 어떻게 받나요?',
      a: '청소년상담복지센터에서 법률 상담 기관과 연계해 줍니다. 소송 지원도 포함됩니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '생활지원비는 매달 받나요?',
      a: '네, 생활지원은 월 최대 65만원을 매달 지급합니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '의료지원비로 치과 치료도 할 수 있나요?',
      a: '의료지원(연 200만원)은 치료비 전반에 사용할 수 있습니다. 치과 포함 여부는 담당 상담사에게 확인하세요.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '지원이 끝난 후에도 계속 받을 수 있나요?',
      a: '1년 단위로 지원되며 상황에 따라 갱신이 가능합니다. 만 24세가 지나면 대상에서 벗어납니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
  ],
  sources: [
    { name: '여성가족부', url: 'https://www.mogef.go.kr' },
    { name: '청소년 전화 1388', url: 'https://www.cyber1388.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
