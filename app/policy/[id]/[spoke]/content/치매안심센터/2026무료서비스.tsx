import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          2026년 치매안심센터에서 <strong>무료</strong>로 이용할 수 있는 주요 서비스는
          치매 조기검진(3단계), 인지강화교실(주 3회·확대 운영), 가족 교육 및 상담입니다.
          치매 확진 시 치료관리비 <strong>월 3만원</strong>을 추가로 지원받습니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        "치매안심센터에서 비용 없이 이용할 수 있는 서비스가 2026년에 늘었나요?"
        2026년 기준 무료 서비스와 신청 방법을 정리했습니다.
      </p>

      <section className="detail-card" id="free-list">
        <h2 className="detail-card-head">2026년 무료 이용 서비스</h2>
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
                <td><strong>인지강화교실</strong></td>
                <td>주 3회 인지 훈련 프로그램 (2026 확대)</td>
                <td>무료</td>
              </tr>
              <tr>
                <td><strong>가족 교육·상담</strong></td>
                <td>치매 가족 교육, 자조모임, 개인 상담</td>
                <td>무료</td>
              </tr>
              <tr>
                <td><strong>등록관리</strong></td>
                <td>치매 진단 후 지속 관리 연계</td>
                <td>무료</td>
              </tr>
              <tr>
                <td><strong>치료관리비</strong></td>
                <td>치매 확진자 약값 등 지원</td>
                <td>월 3만원 지원 (본인부담 감소)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="cognitive-expand">
        <h2 className="detail-card-head">2026년 인지강화교실 확대</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>운영 확대:</strong> 인지강화교실이 2026년에 주 3회로 확대 운영됩니다.
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>대상:</strong> 정상 범위 및 경도인지장애 만 60세 이상 어르신
          </div>
          <div className="info-box">
            <strong>내용:</strong> 기억력·주의력·언어·시공간 능력 향상 인지 훈련
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="apply">
        <h2 className="detail-card-head">신청 방법</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>전화:</strong> ☎ 1899-9988 (치매상담콜센터)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>온라인:</strong> nid.or.kr (중앙치매센터) → 가까운 센터 검색
          </div>
          <div className="info-box">
            <strong>방문:</strong> 전국 256개 시·군·구 보건소 치매안심센터 직접 방문
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            검사 절차, 가족 지원, 쉼터 이용 등<br />
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

export const 치매안심센터2026무료서비스SpokeContent: SpokeData = {
  h1: '2026년 치매안심센터 서비스, 비용 없이 이용할 수 있는 항목과 신청 방법',
  breadcrumb: '2026무료서비스',
  description:
    '2026년 치매안심센터 무료: 조기검진 3단계, 인지강화교실 주 3회(확대), 가족교육·상담. 치매 확진 시 치료관리비 월 3만원 지원. 전국 256개 센터. 1899-9988.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '치매안심센터 이용은 무료인가요?',
      a: '치매 조기검진, 인지강화교실, 가족 교육·상담은 무료입니다. 치매 확진 시 치료관리비 월 3만원을 지원합니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '2026년에 달라진 서비스가 있나요?',
      a: '인지강화교실이 2026년에 주 3회로 확대 운영됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '치매 진단을 받지 않아도 서비스를 이용할 수 있나요?',
      a: '네, 치매 진단 전이어도 조기검진과 인지강화교실을 무료로 이용할 수 있습니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '전국 어디서나 이용할 수 있나요?',
      a: '전국 256개 시·군·구에 치매안심센터가 있습니다. nid.or.kr에서 가까운 센터를 찾을 수 있습니다.',
      source: '중앙치매센터',
      sourceUrl: 'https://www.nid.or.kr',
    },
    {
      q: '치료관리비 월 3만원은 어떻게 지원되나요?',
      a: '치매 확진 후 치매안심센터에 등록하면 약값 등 치료관리비로 월 3만원(연 36만원)을 지원받습니다.',
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
