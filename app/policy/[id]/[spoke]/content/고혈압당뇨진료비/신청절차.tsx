import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          고혈압·당뇨 등록관리사업은 <strong>거주지 보건소 또는 참여 의료기관에 방문</strong>해 등록합니다.
          등록 후 매월 진료 시 <strong>진료비 1,500원 + 약제비 2,000~3,000원</strong>을 지원받고,
          무료 교육·혈압혈당 측정·리콜 알림 서비스를 이용할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "고혈압·당뇨 등록관리사업을 신청하면 어떤 혜택을 어떻게 받나요?"
        신청부터 지원받기까지 전 과정을 정리했습니다.
      </p>

      <section className="detail-card" id="apply-steps">
        <h2 className="detail-card-head">신청 절차 4단계</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계:</strong> 참여 지역 여부 확인 — 거주지 보건소에 전화 또는 방문 문의
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계:</strong> 보건소 또는 참여 의원 방문 — 진단서(처방전)·신분증 지참
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>3단계:</strong> 등록 신청서 작성 + 담당 의료진 배정
          </div>
          <div className="info-box">
            <strong>4단계:</strong> 매월 정기 방문 시 진료비·약제비 지원 자동 적용 + 무료 교육·상담
          </div>
        </div>
      </section>

      <section className="detail-card" id="benefits">
        <h2 className="detail-card-head">등록 후 받는 혜택 요약</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>혜택 항목</th><th>내용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>진료비 지원</strong></td>
                <td>월 1,500원 지원</td>
              </tr>
              <tr>
                <td><strong>약제비 지원</strong></td>
                <td>월 2,000~3,000원 지원</td>
              </tr>
              <tr>
                <td><strong>건강교육</strong></td>
                <td>무료 식이·운동 교육 및 상담</td>
              </tr>
              <tr>
                <td><strong>혈압·혈당 측정</strong></td>
                <td>무료 자가 측정 교육 및 기기 제공</td>
              </tr>
              <tr>
                <td><strong>리콜 알림</strong></td>
                <td>다음 진료일 문자·전화 알림</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="docs">
        <h2 className="detail-card-head">신청 시 필요 서류</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>필수:</strong> 고혈압 또는 당뇨병 진단서 또는 처방전
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>필수:</strong> 신분증 (주민등록증, 운전면허증 등)
          </div>
          <div className="info-box">
            <strong>소득 서류:</strong> 없음 (소득 무관 보편 지원)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            참여 지역 확인, 2026년 달라진 조건 등<br />
            고혈압·당뇨 등록관리사업 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/hypertension-medical-fee" className="btn-cta">
            고혈압·당뇨 진료비 지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 고혈압당뇨신청절차SpokeContent: SpokeData = {
  h1: '고혈압 당뇨 등록관리사업 신청부터 진료비 약제비 지원받기까지',
  breadcrumb: '신청절차',
  description:
    '고혈압·당뇨 등록관리사업: 보건소 또는 참여 의원 방문 → 진단서·신분증 제출 → 등록. 매월 진료비 1,500원 + 약제비 2,000~3,000원 지원. 무료 교육·상담·리콜 알림 서비스 포함.',
  datePublished: '2026-05-17T09:00:00+09:00',
  dateModified: '2026-05-17T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '고혈압·당뇨 등록관리사업은 어디서 신청하나요?',
      a: '거주지 보건소 또는 사업에 참여하는 동네 의원(참여 의원)을 방문해 신청합니다. 먼저 거주지 보건소에 전화해 참여 지역 여부를 확인하세요.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '신청 시 어떤 서류가 필요한가요?',
      a: '고혈압·당뇨 진단서(또는 처방전)와 신분증이 필요합니다. 소득 기준이 없어 소득 증빙 서류는 필요 없습니다.',
      source: '복지로',
      sourceUrl: 'https://www.bokjiro.go.kr',
    },
    {
      q: '등록 후 언제부터 혜택을 받나요?',
      a: '등록 후 매월 정기 방문할 때마다 진료비·약제비 지원이 자동 적용됩니다.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '리콜 알림 서비스는 무엇인가요?',
      a: '다음 진료일을 문자나 전화로 알려주는 서비스입니다. 꾸준한 관리를 돕기 위해 제공됩니다.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
    {
      q: '혈압·혈당 측정 교육도 무료인가요?',
      a: '네, 자가 혈압·혈당 측정 교육 및 기기 대여가 무료로 제공됩니다.',
      source: '질병관리청',
      sourceUrl: 'https://www.kdca.go.kr',
    },
  ],
  sources: [
    { name: '질병관리청', url: 'https://www.kdca.go.kr' },
    { name: '복지로', url: 'https://www.bokjiro.go.kr' },
  ],
};
