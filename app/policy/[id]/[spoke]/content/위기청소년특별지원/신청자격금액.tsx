import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          만 9~24세 위기청소년이 대상이며, 소득인정액이 <strong>기준 중위소득 100% 이하</strong>인
          가구의 청소년에게 생활지원·학업지원·의료지원 등 8개 분야로
          연 최대 <strong>650만원</strong>을 지원합니다.
          신청은 ☎ 1388 또는 청소년상담복지센터에서 합니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "위기청소년 특별지원에서 생활비와 학비를 받을 수 있다는데, 금액이 얼마인가요?"
        8개 분야별 지원 금액과 신청 자격을 정리했습니다.
      </p>

      <section className="detail-card" id="amount">
        <h2 className="detail-card-head">8개 분야별 지원 금액</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>분야</th><th>지원 금액</th><th>유형</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>생활지원</strong></td>
                <td>월 최대 65만원</td>
                <td>현금 급여</td>
              </tr>
              <tr>
                <td><strong>학업지원</strong></td>
                <td>연 최대 154만원</td>
                <td>현금 급여</td>
              </tr>
              <tr>
                <td><strong>의료지원</strong></td>
                <td>연 최대 200만원</td>
                <td>현금 또는 서비스</td>
              </tr>
              <tr>
                <td><strong>상담지원</strong></td>
                <td>서비스 제공</td>
                <td>사회 서비스</td>
              </tr>
              <tr>
                <td><strong>활동지원</strong></td>
                <td>서비스 제공</td>
                <td>사회 서비스</td>
              </tr>
              <tr>
                <td><strong>법률지원</strong></td>
                <td>서비스 제공</td>
                <td>사회 서비스</td>
              </tr>
              <tr>
                <td><strong>자활지원</strong></td>
                <td>서비스 제공</td>
                <td>사회 서비스</td>
              </tr>
              <tr>
                <td><strong>연간 합계</strong></td>
                <td>최대 650만원</td>
                <td>현금+서비스 합산</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="eligibility">
        <h2 className="detail-card-head">신청 자격</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>연령:</strong> 만 9세 ~ 24세 청소년
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>소득 기준:</strong> 소득인정액이 기준 중위소득 100% 이하인 가구
          </div>
          <div className="info-box">
            <strong>위기 유형:</strong> 가정 해체, 학대, 가출, 비행·일탈 예방 필요,
            은둔형 외톨이, 보호자 실질적 보호 불가 등 사회경제적으로 어려운 위기청소년
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화:</strong> ☎ 1388 (24시간 청소년 전화)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>방문:</strong> 거주지 청소년상담복지센터 또는 지역 청소년안전망
          </div>
          <div className="info-box">
            <strong>지원 기간:</strong> 1년 단위로 갱신 (상황에 따라 연장 가능)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            보호자 없는 청소년 신청 방법, 학교 밖 청소년 해당 여부 등<br />
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

export const 위기청소년신청자격금액SpokeContent: SpokeData = {
  h1: '위기청소년 특별지원 신청 자격과 생활비 학업지원비 8개 분야 금액 정리',
  breadcrumb: '신청자격금액',
  description:
    '만 9~24세 위기청소년 중위소득 100% 이하. 8개 분야 연 최대 650만원: 생활지원 월 65만원, 학업 연 154만원, 의료 연 200만원. 신청 1388.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '위기청소년 특별지원을 받으면 연 얼마나 받을 수 있나요?',
      a: '현금 급여와 사회서비스를 합산해 연 최대 650만원입니다. 생활지원 월 65만원, 학업지원 연 154만원, 의료지원 연 200만원 등이 포함됩니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '소득 기준이 있나요?',
      a: '소득인정액이 기준 중위소득 100% 이하인 가구의 청소년이 대상입니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '어떤 청소년이 위기청소년에 해당하나요?',
      a: '가정 해체, 학대, 가출, 비행·일탈 예방이 필요한 경우, 은둔형 외톨이, 보호자가 실질적 보호를 못 하는 경우 등 사회경제적으로 어려운 청소년이 해당됩니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '어디서 신청하나요?',
      a: '☎ 1388에 전화하거나 거주지 청소년상담복지센터를 방문해 신청할 수 있습니다.',
      source: '여성가족부',
      sourceUrl: 'https://www.mogef.go.kr',
    },
    {
      q: '지원 기간은 얼마나 되나요?',
      a: '1년 단위로 지원되며, 상황에 따라 갱신이 가능합니다.',
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
