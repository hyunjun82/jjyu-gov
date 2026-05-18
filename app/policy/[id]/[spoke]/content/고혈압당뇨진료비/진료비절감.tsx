import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          보건소에 고혈압·당뇨 환자로 등록하면 매월 방문 시
          <strong>진료비 1,500원 + 약제비 2,000~3,000원</strong>이 줄어듭니다.
          소득 무관, 별도 심사 없이 참여 지역 거주 환자라면 누구나 적용됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "보건소에 등록하면 실제로 진료비가 얼마나 줄어드나요?"
        구체적인 절감 금액과 혜택을 정리했습니다.
      </p>

      <section className="detail-card" id="savings">
        <h2 className="detail-card-head">등록 시 절감되는 비용</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>지원 금액</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>진료비</strong></td>
                <td><strong>월 1,500원</strong></td>
                <td>1회 방문 기준</td>
              </tr>
              <tr>
                <td><strong>약제비</strong></td>
                <td><strong>2,000~3,000원</strong></td>
                <td>질환당</td>
              </tr>
              <tr>
                <td><strong>건강교육·상담</strong></td>
                <td>무료</td>
                <td>식이·운동 포함</td>
              </tr>
              <tr>
                <td><strong>혈압·혈당 측정</strong></td>
                <td>무료</td>
                <td>기기 대여 포함</td>
              </tr>
            </tbody>
          </table>
          <div className="info-box" style={{ marginTop: 12 }}>
            고혈압과 당뇨를 모두 앓는 환자는 두 질환의 약제비 지원이 각각 적용될 수 있습니다.
          </div>
        </div>
      </section>

      <section className="detail-card" id="savings-effect">
        <h2 className="detail-card-head">장기 관리 시 절감 효과</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            매월 진료비·약제비 지원을 받으면 연간 총 부담이 줄어들고,
            꾸준한 관리로 <strong>심뇌혈관 합병증(뇌졸중·심근경색)</strong>을 예방하면
            장기적으로 훨씬 큰 의료비 절감 효과가 생깁니다.
          </div>
          <div className="info-box">
            리콜 알림 서비스를 통해 진료 일정을 놓치지 않고 꾸준히 관리하면
            건강 상태 유지와 의료비 절감 두 가지를 동시에 얻을 수 있습니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="additional-benefits">
        <h2 className="detail-card-head">추가 무료 서비스</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>건강생활실천지원금:</strong> 걷기·금연·절주 등 건강 행동 실천 시 추가 포인트 지급 (별도 신청, 중복 가능)
          </div>
          <div className="info-box">
            <strong>심뇌혈관질환 예방 프로그램:</strong> 뇌졸중·심근경색 예방을 위한 추가 관리 서비스 (보건소 문의)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            신청 방법, 참여 지역, 2026년 달라진 조건 등<br />
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

export const 고혈압당뇨진료비절감SpokeContent: SpokeData = {
  h1: '보건소에 고혈압 당뇨 환자로 등록하면 진료비가 얼마나 줄어드나',
  breadcrumb: '진료비절감',
  description:
    '고혈압·당뇨 등록관리사업 등록 시 진료비 월 1,500원 + 약제비 2,000~3,000원 절감. 무료 교육·상담·혈압혈당 측정. 소득 무관. 심뇌혈관 합병증 예방 효과.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '보건소 등록 후 매달 얼마를 절약하나요?',
      a: '매월 진료비 1,500원 + 약제비 2,000~3,000원이 지원됩니다. 무료 교육·혈압혈당 측정도 포함됩니다.',
      source: '복지로',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '고혈압과 당뇨를 둘 다 앓으면 각각 지원받나요?',
      a: '네, 두 질환의 약제비 지원이 각각 적용될 수 있습니다. 보건소에 문의해 확인하세요.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '건강생활실천지원금과 중복 수혜가 되나요?',
      a: '네, 고혈압·당뇨 등록관리 진료비 지원과 건강생활실천지원금은 성격이 달라 중복 수혜가 가능합니다.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '소득이 높아도 진료비 지원을 받을 수 있나요?',
      a: '네, 소득 기준이 없습니다. 참여 지역에 거주하는 고혈압·당뇨 환자라면 누구나 지원됩니다.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '리콜 알림 서비스가 진료비 절감에 도움이 되나요?',
      a: '네, 진료 일정을 놓치지 않도록 문자·전화로 알려주어 꾸준한 관리를 도와줍니다. 꾸준히 관리하면 합병증 예방으로 장기적 의료비도 줄어듭니다.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
  ],
  sources: [
    { name: '질병관리청', url: 'https://www.kdca.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
