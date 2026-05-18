import type { SpokeData } from '../../page';

function Content() {
  return (
    <>
      <div className="answer-box">
        <p>
          장애인활동지원은 <strong>만 6세 이상 65세 미만</strong>의 등록 장애인이라면
          소득·장애유형에 관계없이 신청할 수 있습니다.
          단, 시설 거주 장애인·노인장기요양 수급자는 신청이 제한됩니다.
        </p>
      </div>

      <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px 0' }}>
        활동지원은 신체적 활동을 혼자 하기 어려운 장애인이 지역사회에서 자립생활을 할 수 있도록
        활동보조·방문목욕·방문간호 등의 서비스를 지원하는 제도입니다.
        장애 정도가 심할수록 더 많은 시간(급여)을 받을 수 있습니다.
      </p>

      <section className="detail-card" id="qualify">
        <h2 className="detail-card-head">신청자격 핵심 기준</h2>
        <div className="detail-card-body">
          <table className="compare-table">
            <thead>
              <tr><th>항목</th><th>기준</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>연령</strong></td><td>만 6세 이상 65세 미만</td><td>만 65세 도달 시 장기요양으로 전환 검토</td></tr>
              <tr><td><strong>장애 등록</strong></td><td>등록 장애인</td><td>장애유형 무관</td></tr>
              <tr><td><strong>소득 기준</strong></td><td>없음</td><td>소득·재산 무관 신청 가능</td></tr>
              <tr><td><strong>거주 요건</strong></td><td>지역사회 거주</td><td>시설 입소자 제외</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="detail-card" id="exclude">
        <h2 className="detail-card-head">신청 불가 대상</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>장애인 거주시설 입소자:</strong> 시설 내 서비스를 이미 제공받으므로 제외
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>노인장기요양보험 수급자:</strong> 장기요양급여 이용 중인 경우 원칙적 제외 (일부 예외 있음)
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>의료기관 입원자:</strong> 입원 기간 중 급여 일시 중지
          </div>
          <div className="info-box">
            <strong>교도소·구치소 수용자:</strong> 수용 기간 중 급여 정지
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="assess">
        <h2 className="detail-card-head">서비스 지원 종합조사 (급여량 결정)</h2>
        <div className="detail-card-body">
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>조사 기관:</strong> 국민연금공단 지사 — 방문 조사
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>조사 내용:</strong> 기능 상태(신체·인지), 사회활동 참여도, 생활환경 등 종합 평가
          </div>
          <div className="info-box" style={{ marginBottom: 12 }}>
            <strong>급여 구간:</strong> 조사 결과에 따라 월 기본 급여 시간 결정 (구간 1~15)
          </div>
          <div className="info-box">
            <strong>가산급여:</strong> 독거·취약 가구 등 추가 시간 지원 (2026년 최대 258시간)
          </div>
        </div>
      </section>

      <div className="ad-slot">광고 영역</div>

      <section className="detail-card" id="hub">
        <div className="detail-card-body" style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>
            급여 단가·시간 기준, 노인장기요양 전환, 신청 절차까지<br />
            전체 정보는 아래에서 확인하세요.
          </p>
          <a href="/policy/disability-activity-support" className="btn-cta">
            장애인활동지원 전체 정보 보기 →
          </a>
        </div>
      </section>
    </>
  );
}

export const 장애인활동지원신청자격만6세65세미만등록장애인SpokeContent: SpokeData = {
  h1: '장애인활동지원 신청자격, 만 6세~65세 미만 등록 장애인 조건 확인',
  breadcrumb: '신청자격만6세65세미만등록장애인',
  description:
    '장애인활동지원 신청자격: 만 6세 이상 65세 미만 등록 장애인. 소득·장애유형 무관. 시설 입소자·노인장기요양 수급자 제외. 국민연금공단 종합조사로 월 급여 시간 결정.',
  datePublished: '2026-05-18T09:00:00+09:00',
  dateModified: '2026-05-18T09:00:00+09:00',
  Content,
  faqData: [
    {
      q: '정신장애인도 활동지원을 받을 수 있나요?',
      a: '네. 장애유형에 관계없이 등록 장애인이라면 신청 가능합니다. 다만 서비스 지원 종합조사 결과에 따라 급여량이 결정됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '만 65세가 되면 활동지원이 자동 종료되나요?',
      a: '만 65세가 되면 노인장기요양보험 신청이 권고되며, 장기요양 등급을 받으면 활동지원은 종료됩니다. 등급 외 판정을 받으면 활동지원을 계속 이용할 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '활동지원 신청 후 서비스까지 얼마나 걸리나요?',
      a: '신청 후 국민연금공단의 종합조사(2~4주), 수급자격 결정, 기관 선택 및 계약 과정을 거쳐 보통 1~2개월 내 서비스가 시작됩니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '소득이 높으면 신청할 수 없나요?',
      a: '아닙니다. 장애인활동지원은 소득이나 재산 기준 없이 신청할 수 있습니다. 다만 소득에 따라 본인부담금 수준이 달라질 수 있습니다.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
    {
      q: '활동지원사를 직접 선택할 수 있나요?',
      a: '수급자격을 받은 후 활동지원기관을 선택하고, 기관을 통해 활동지원사를 매칭받습니다. 지인을 활동지원사로 등록하는 것도 가능한 경우가 있으니 기관에 문의하세요.',
      source: '보건복지부',
      sourceUrl: 'https://www.mohw.go.kr',
    },
  ],
  sources: [
    { name: '보건복지부 장애인활동지원', url: 'https://www.mohw.go.kr/menu.es?mid=a10710040700' },
    { name: '사회보장정보원 장애인활동지원', url: 'https://www.ableservice.or.kr' },
  ],
};
