import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          치매안심센터에서는 <strong>무료 치매 조기검진</strong>, 치료관리, 인지강화교실,
          가족 지원, 쉼터 이용까지 5대 서비스를 제공합니다.
          만 60세 이상이면 전국 256개 시·군·구 보건소 치매안심센터에서 이용할 수 있습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "치매안심센터가 뭘 해주는 곳인가요? 어떤 서비스를 무료로 받을 수 있나요?"
        치매안심센터 5대 서비스와 비용을 정리했습니다.
      </p>

      <section className="detail-card" id="five-services">
        <h2 className="detail-card-head">치매안심센터 5대 서비스</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>서비스</th><th>내용</th><th>비용</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>치매 조기검진</strong></td>
                <td>3단계 검사 (MMSE-DS → 진단 → 감별)</td>
                <td>무료</td>
              </tr>
              <tr>
                <td><strong>치료관리</strong></td>
                <td>치료관리비 월 3만원 지원, 투약관리</td>
                <td>월 3만원 지원</td>
              </tr>
              <tr>
                <td><strong>인지강화교실</strong></td>
                <td>경도인지장애·정상군 인지 향상 프로그램 (주 3회)</td>
                <td>무료</td>
              </tr>
              <tr>
                <td><strong>가족 지원</strong></td>
                <td>가족 교육, 자조모임, 상담</td>
                <td>무료</td>
              </tr>
              <tr>
                <td><strong>쉼터 이용</strong></td>
                <td>치매 환자 낮 시간 돌봄</td>
                <td>무료 또는 소액</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="screening">
        <h2 className="detail-card-head">치매 조기검진 3단계</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>1단계 (선별검사):</strong> MMSE-DS 검사 → 이상 소견 시 2단계 진행
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>2단계 (진단검사):</strong> 신경인지검사 → 치매 여부 확인
          </div>
          <div className="info-box">
            <strong>3단계 (감별검사):</strong> 혈액검사·뇌 CT 등 → 치매 원인 감별
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="who">
        <h2 className="detail-card-head">이용 대상 및 신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 만 60세 이상 어르신 및 치매 환자 가족
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>이용처:</strong> 전국 256개 시·군·구 보건소 내 치매안심센터
          </div>
          <div className="info-box">
            <strong>문의:</strong> ☎ 1899-9988 / nid.or.kr / 가까운 보건소 치매안심센터
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            검사 절차, 치료관리비, 인지강화교실 등<br />
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

export const 치매안심센터무료검사서비스SpokeContent: SpokeData = {
  h1: '치매안심센터에서 받을 수 있는 무료 검사와 지원 서비스 종류',
  breadcrumb: '무료검사서비스',
  description:
    '치매안심센터 5대 서비스: 조기검진(무료 3단계), 치료관리비(월 3만원), 인지강화교실(주 3회 무료), 가족지원(무료), 쉼터. 만 60세 이상 전국 256개 센터. 1899-9988.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '치매안심센터 이용 비용이 있나요?',
      a: '치매 조기검진, 인지강화교실, 가족 지원은 무료입니다. 치료관리비는 월 3만원을 지원합니다. 쉼터는 무료 또는 소액입니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '치매 진단을 받지 않아도 이용할 수 있나요?',
      a: '네, 조기검진은 치매 진단 전 단계에서 이용할 수 있습니다. 만 60세 이상이면 1단계 선별검사부터 받을 수 있습니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '치매안심센터는 어디에 있나요?',
      a: '전국 256개 시·군·구 보건소에 설치되어 있습니다. nid.or.kr에서 가까운 센터를 찾을 수 있습니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '인지강화교실은 어떤 프로그램인가요?',
      a: '경도인지장애 또는 정상 범위 어르신을 대상으로 인지 기능 향상을 위한 프로그램을 주 3회 무료로 제공합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '가족도 치매안심센터 서비스를 받을 수 있나요?',
      a: '네, 치매 환자 가족을 위한 교육, 자조모임, 상담 서비스도 무료로 제공됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부', url: 'https://www.mohw.go.kr' },
    { name: '중앙치매센터', url: 'https://www.nid.or.kr' },
    { name: '치매안심센터 찾기', url: 'https://ansim.nid.or.kr' },
  ],
};
