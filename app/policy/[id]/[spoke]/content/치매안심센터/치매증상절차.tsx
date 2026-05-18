import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          부모님이 치매 증상을 보인다면, 가까운 보건소 <strong>치매안심센터</strong>를 먼저 방문하세요.
          1단계 선별검사(MMSE-DS)부터 <strong>3단계 감별검사까지 무료</strong>로 받을 수 있으며,
          진단 후에는 치료관리와 등록관리 서비스로 이어집니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "어머니가 자꾸 깜박깜박하는데, 치매안심센터에 어떻게 가야 하나요?"
        치매 증상이 의심될 때 치매안심센터에서 받는 절차를 정리했습니다.
      </p>

      <section className="detail-card" id="steps">
        <h2 className="detail-card-head">치매 의심부터 관리까지 단계</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>단계</th><th>내용</th><th>비용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1단계 방문</strong></td>
                <td>가까운 보건소 치매안심센터 방문 (예약 없이도 가능)</td>
                <td>무료</td>
              </tr>
              <tr>
                <td><strong>2단계 선별검사</strong></td>
                <td>MMSE-DS 검사 (약 30분) → 이상 소견 확인</td>
                <td>무료</td>
              </tr>
              <tr>
                <td><strong>3단계 진단검사</strong></td>
                <td>신경인지검사 → 치매 여부 판별</td>
                <td>무료</td>
              </tr>
              <tr>
                <td><strong>4단계 감별검사</strong></td>
                <td>혈액검사, 뇌 CT 등 → 치매 원인 확인</td>
                <td>무료</td>
              </tr>
              <tr>
                <td><strong>5단계 등록관리</strong></td>
                <td>치매 진단 시 등록 → 치료관리비(월 3만원)·노인맞춤돌봄 등 연계</td>
                <td>치료관리비 월 3만원 지원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="first-visit">
        <h2 className="detail-card-head">처음 방문 시 준비 사항</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>신분증:</strong> 만 60세 이상 어르신이면 신분증만 가지고 방문하면 됩니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>보호자 동행:</strong> 가능하면 가족이 함께 가는 것이 좋습니다.
            증상 정보를 정확히 전달할 수 있습니다.
          </div>
          <div className="info-box">
            <strong>예약:</strong> 1899-9988에 전화해 예약하거나 가까운 보건소에 직접 방문해도 됩니다.
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="after-diagnosis">
        <h2 className="detail-card-head">치매 진단 후 이어지는 서비스</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>치료관리비:</strong> 월 3만원(연 36만원) 지원으로 약값 부담 완화
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>자동 연계:</strong> 치매안심센터 등록 시 노인맞춤돌봄·노인일자리 사업 자동 연계
          </div>
          <div className="info-box">
            <strong>가족 지원:</strong> 가족 교육, 자조모임, 상담 무료 제공
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            무료 서비스 종류, 인지강화교실 등<br />
            치매안심센터 전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/dementia-center" className="btn-cta">
            치매안심센터 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 치매안심센터치매증상절차SpokeContent: SpokeData = {
  h1: '부모님이 치매 증상 보인다면 치매안심센터에 가야 하는 이유와 절차',
  breadcrumb: '치매증상절차',
  description:
    '치매 증상 시 보건소 치매안심센터 방문. 3단계 검사(MMSE-DS→진단→감별) 무료. 진단 후 치료관리비 월 3만원 지원, 노인맞춤돌봄 자동 연계. 1899-9988.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '치매안심센터는 예약을 해야 하나요?',
      a: '예약 없이 방문할 수도 있지만, 1899-9988에 미리 전화하면 대기 시간을 줄일 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '치매 검사는 전부 무료인가요?',
      a: '선별검사, 진단검사, 감별검사 3단계 모두 무료입니다. 비용 부담 없이 검사받을 수 있습니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '만 60세 미만이어도 검사를 받을 수 있나요?',
      a: '치매안심센터의 주 대상은 만 60세 이상입니다. 60세 미만이라면 가까운 병원에서 진료를 받아보시기 바랍니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '치매 진단을 받으면 어떤 지원이 시작되나요?',
      a: '치매안심센터에 등록되면 치료관리비(월 3만원), 노인맞춤돌봄, 가족 지원 등이 자동으로 연계됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '보호자가 혼자 가도 되나요?',
      a: '보호자가 먼저 방문해 상담을 받는 것도 가능합니다. 다만 검사는 어르신이 직접 방문해야 합니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '중앙치매센터', url: 'https://www.nid.or.kr' },
    { name: '치매안심센터 찾기', url: 'https://ansim.nid.or.kr' },
  ],
};
