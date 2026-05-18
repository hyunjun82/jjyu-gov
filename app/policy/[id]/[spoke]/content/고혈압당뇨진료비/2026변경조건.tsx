import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년부터 고혈압·당뇨 등록관리사업의 <strong>65세 이상 연령 제한이 폐지</strong>되었습니다.
          이제 지자체가 <strong>60~80세 범위</strong>에서 자율적으로 연령 기준을 정하며,
          더 넓은 연령대가 혜택을 받을 수 있게 되었습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "고혈압·당뇨 등록관리사업이 2026년에 바뀌었다는데, 뭐가 달라졌나요?"
        2026년 변경된 내용을 정리했습니다.
      </p>

      <section className="detail-card" id="changes">
        <h2 className="detail-card-head">2026년 달라진 신청 조건</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>2025년 이전</th><th>2026년 변경</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>연령 기준</strong></td>
                <td>65세 이상 (일부 지역)</td>
                <td>지자체가 60~80세 범위에서 자율 설정</td>
              </tr>
              <tr>
                <td><strong>대상 확대</strong></td>
                <td>65세 미만 제한</td>
                <td>60세부터 이용 가능 지역 증가</td>
              </tr>
              <tr>
                <td><strong>지원 내용</strong></td>
                <td>진료비·약제비 지원</td>
                <td>동일 (진료비 1,500원·약제비 2,000~3,000원)</td>
              </tr>
              <tr>
                <td><strong>참여 지역</strong></td>
                <td>일부 시·군·구</td>
                <td>동일 (지자체별 참여)</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            정확한 연령 기준은 거주지 지자체(보건소)마다 다릅니다. 반드시 거주지 보건소에서 확인하세요.
          </div>
        </div>
      </section>

      <section className="detail-card" id="who-can-apply">
        <h2 className="detail-card-head">2026년 신청 가능한 경우</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>60~64세:</strong> 2026년부터 일부 지자체에서 신규 신청 가능 (지자체별 확인 필요)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>65세 이상:</strong> 기존과 동일하게 신청 가능
          </div>
          <div className="info-box">
            <strong>공통 조건:</strong> 고혈압 또는 당뇨 진단 + 참여 지역 거주 + 소득 무관
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="check">
        <h2 className="detail-card-head">내 상황에 맞게 확인하는 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            거주지 보건소에 "2026년 고혈압·당뇨 등록관리사업 참여 여부"와 "적용 연령 기준"을 직접 문의하는 것이 가장 정확합니다.
          </div>
          <div className="info-box">
            질병관리청 홈페이지(kdca.go.kr)에서도 최신 사업 안내를 확인할 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 참여 지역, 지원 금액 등<br />
            고혈압·당뇨 진료비 지원 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/hypertension-medical-fee" className="btn-cta">
            고혈압·당뇨 진료비 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 고혈압당뇨2026변경조건SpokeContent: SpokeData = {
  h1: '65세 제한 없어진 고혈압 당뇨 등록관리사업, 2026년 달라진 신청 조건',
  breadcrumb: '2026변경조건',
  description:
    '2026년 고혈압·당뇨 등록관리사업 변경: 65세 제한 폐지, 지자체가 60~80세 범위에서 연령 자율 설정. 60~64세도 일부 지역 신청 가능. 지원 금액(진료비 1,500원·약제비 2,000~3,000원)은 동일.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '2026년에 연령 제한이 어떻게 바뀌었나요?',
      a: '기존 65세 이상 제한이 폐지되고, 지자체가 60~80세 범위에서 연령 기준을 자율적으로 설정하게 되었습니다.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '60세부터 신청할 수 있나요?',
      a: '지자체가 60세부터로 기준을 설정한 경우 가능합니다. 반드시 거주지 보건소에 확인하세요.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '지원 금액도 2026년에 바뀌었나요?',
      a: '아니요, 진료비 1,500원, 약제비 2,000~3,000원 지원은 동일합니다.',
      source: '복지로',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '65세 이전에 이미 등록한 사람은 계속 이용 가능한가요?',
      a: '네, 기존 등록자는 변경 없이 계속 혜택을 받습니다.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '내 지역 적용 연령을 어디서 확인하나요?',
      a: '거주지 보건소에 전화해 "2026년 고혈압·당뇨 등록관리사업 대상 연령"을 문의하는 것이 가장 정확합니다.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
  ],
  sources: [
    { name: '질병관리청', url: 'https://www.kdca.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
